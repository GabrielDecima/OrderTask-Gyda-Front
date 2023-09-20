import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/global/navBar/NavBar';
import SideBar from '../components/global/sidebar/SideBar';
import styles from './Layout.module.css';



export function Layout (){


    

    return (
        <>
            <NavBar/>
            <div className={styles.container}>
           
            <SideBar/>
            
            <Suspense fallback= {
                    <h2>Cargando...</h2>
                }>
                
                <div className={styles.content}>
                 <Outlet/>
                </div> 
            
            </Suspense>
        </div> 

        </>
    );
}


