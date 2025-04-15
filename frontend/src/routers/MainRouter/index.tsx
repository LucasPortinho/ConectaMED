import { Diagnostics } from '@/components/Diagnostics'
import { UserInfo } from '@/pages/UserInfo'
import { BrowserRouter, Routes, Route } from 'react-router'

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<UserInfo />}/>
                <Route path='/diagnostics' element={<Diagnostics />}/>

            </Routes>
        </BrowserRouter>
    )
}