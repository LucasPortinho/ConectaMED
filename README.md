# Saúde Remota / Remote Health Access

## 📄 Descrição / Description

**Português:**
Este projeto tem como objetivo facilitar o acesso de moradores de áreas remotas a informações de saúde e a médicos. A partir da descrição dos possíveis sintomas e doenças, a aplicação sugere tratamentos iniciais e fornece links para reuniões no Google Meet com profissionais de saúde. Além disso, utiliza a API do YouTube para buscar vídeos educativos relacionados ao tema.

**English:**
This project aims to facilitate access for residents of remote areas to health information and medical professionals. Based on the description of possible symptoms and diseases, the application suggests initial treatments and provides Google Meet links for consultations with healthcare professionals. It also uses the YouTube Data API to fetch educational videos on the topic.

---

## 🚀 Funcionalidades / Features

**Português:**
- **Análise de Sintomas:** Usuário descreve sintomas e recebe possíveis diagnósticos.
- **Sugestões de Tratamento:** Recomendações de cuidados iniciais baseadas nos sintomas.
- **Conexão com Médicos:** Geração de links de reunião no Google Meet para consultas.
- **Vídeos Educativos:** Busca automática de vídeos relevantes no YouTube.
- **Interface Intuitiva:** Frontend responsivo construído em React com TypeScript.

**English:**
- **Symptom Analysis:** User describes symptoms and receives possible diagnoses.
- **Treatment Suggestions:** Initial care recommendations based on symptoms.
- **Doctor Connection:** Generation of Google Meet meeting links for consultations.
- **Educational Videos:** Automatic search for relevant YouTube videos.
- **Intuitive Interface:** Responsive frontend built with React and TypeScript.

---

## 🛠 Tecnologias / Technologies

### Frontend

**Português:**
- **React (Vite + TypeScript):** Configuração com Vite para desenvolvimento rápido e recarregamento instantâneo. Estrutura de componentes em TS garante tipagem estática e manutenção facilitada.
- **Context API:** Gerenciamento global de estado sem necessidade de bibliotecas externas, ideal para compartilhar dados de usuário e configurações entre componentes.
- **React Router:** Navegação declarativa e dinâmica entre páginas, com rotas aninhadas para otimizar carregamento e organização de views.
- **Shadcn UI:** Biblioteca de componentes estilizados com Tailwind CSS, proporcionando design consistente, acessível e altamente customizável.

**English:**
- **React (Vite + TypeScript):** Vite-powered setup for fast development and hot module replacement. Component structure in TS ensures static typing and easier maintenance.
- **Context API:** Global state management without external libraries, perfect for sharing user data and settings across components.
- **React Router:** Declarative and dynamic routing between pages, with nested routes to optimize loading and view organization.
- **Shadcn UI:** Styled component library using Tailwind CSS, offering a consistent, accessible, and highly customizable design.

### Backend

**Português:**
- **Python & Flask:** Microframework leve para criação de APIs RESTful. Estrutura modular com Blueprints para organizar endpoints.
- **Flask-CORS:** Habilita Cross-Origin Resource Sharing, permitindo que o frontend acesse o backend sem restrições de domínio.
- **LangChain:** Orquestra cadeias de chamadas a modelos de linguagem para análise de sintomas, diagnóstico e geração de tratamentos iniciais.
- **APIs Externas:**
  - **YouTube Data API:** Busca vídeos educativos por termo de busca, retornando metadados e IDs de vídeo.

**English:**
- **Python & Flask:** Lightweight microframework for building RESTful APIs. Modular structure with Blueprints to organize endpoints.
- **Flask-CORS:** Enables Cross-Origin Resource Sharing, allowing the frontend to access the backend without domain restrictions.
- **LangChain:** Orchestrates chains of calls to language models for symptom analysis, diagnosis, and initial treatment generation.
- **External APIs:**
  - **YouTube Data API:** Searches for educational videos by query term, returning metadata and video IDs.

---
