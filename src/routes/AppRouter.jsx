import {lazy} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';


// Import routes 
const Home = lazy(() => import('../pages/Home/Home'));
const Nopage = lazy(() => import('../pages/Nopage'));


export function AppRouter()  {
    return (
        <>

        
      
         <BrowserRouter>
                
                <Routes>

                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    
                    </Route>

                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
               
         </BrowserRouter>
        </>
    );
}


