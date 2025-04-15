from flask import Flask, jsonify, request
from flask_cors import CORS
import json

from dotenv import load_dotenv
from pydantic import BaseModel, Field

from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers.openai_functions import JsonOutputFunctionsParser
from langchain_core.utils.function_calling import convert_to_openai_function

from googleapiclient.discovery import build

from typing import List

import os

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

app = Flask(__name__)
cors = CORS(app, origins=["https://seu-dominio.com", "https://www.seu-dominio.com"])

class Diagnostic(BaseModel):
    diagnosticTitle: str = Field(description='Nome da doença')
    diagnosticDescription: str = Field(description='Breve descrição da doença')
    diagnosticContent: str = Field(description='Descrição completa da doença')


class DiagnosticList(BaseModel):
    diagnostics: List[Diagnostic] = Field(description='Lista com os diagnósticos')


formatted_diagnostic = convert_to_openai_function(DiagnosticList)

def get_diagnostic(symptoms, chronic_disease, age, height, weight):
    text_prompt = (
        """
        Você é um assistente de pessoas doentes.
        Sua função é pegar os sintomas, identificar as 4-5 doenças mais parecidas com o sintoma e classifica-las.

        Gere um título com o nome da doença, uma breve descrição e uma descrição um pouco mais detalhada.
        Descreva ai métodos de contágio, prevenção e tratamento.

        Importantíssimo: não gere um texto tãooo grande tambem na descrição mais longa, mas destaque esses tópicos importantes

        {context}
        """
    )

    text_extraction = """
        Analise o texto e extraia integralmente suas informações.

        Preste bem atenção na divisão de títulos, breve descrição e conteúdo.
        Deve possuir os nomes das chaves corretos
        Isso costuma gerar problema, portanto, cheque mais de uma vez para ver se está correto.
    """

    prompt = ChatPromptTemplate.from_messages([
        ("system", text_prompt),
        ("user", "{input}")
    ])

    extraction_prompt = ChatPromptTemplate.from_messages([
        ("system", text_extraction),
        ("user", "{input}")
    ])

    chat = ChatOpenAI(api_key=OPENAI_API_KEY, model='gpt-4o-mini')

    input_data = {"input": f"Sintomas: {symptoms}, Doenças crônicas: {chronic_disease if chronic_disease else 'nenhuma'}, Altura: {height}, Peso: {weight}, Age: {age}"}
    
    chain = extraction_prompt | chat.bind(functions=[formatted_diagnostic], function_call={"name": "DiagnosticList"}) | JsonOutputFunctionsParser()

    formatted_answer = chain.invoke(input_data)

    return formatted_answer

def get_youtube_video(query, api_key=YOUTUBE_API_KEY, num_results=1):
    youtube = build('youtube', 'v3', developerKey=api_key)

    # Faz a requisição para buscar vídeos
    request = youtube.search().list(
        part='snippet',
        q=f'Tratamento da {query}',
        type='video',
        maxResults=num_results
    )
    response = request.execute()
    
    # Extrai os links dos vídeos
    video_links = []

    for item in response['items']:
        video_id = item['id']['videoId']
        video_link = f'https://www.youtube.com/watch?v={video_id}'
        video_links.append(video_link)

    return video_links

@app.route('/api/v1/diagnostics', methods=['GET', 'POST'])
def diagnostics():
    data = request.data.decode('utf-8')
    response = json.loads(data)

    symptoms = response["symptoms"]
    chronic_disease = response["chronicDisease"]
    age = response["age"]
    height = response["height"]
    weight = response["weight"]

    diagnostics = get_diagnostic(symptoms, chronic_disease, age, height, weight)

    for diagnostic in diagnostics['diagnostics']:
        diagnostic.update({'videoUrl':get_youtube_video(diagnostic['diagnosticTitle'])[0], 'doctorUrl': 'https://meet.google.com'})

    return jsonify({"response": diagnostics})


if __name__ == '__main__':
    app.run(debug=True)
