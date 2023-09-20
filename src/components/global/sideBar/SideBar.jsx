import React ,{useState} from 'react';
import styles from './sideBarStyle.module.css';
import Business from './image/business.png';
import Document from './image/document.png';
import Customer from './image/customer.png';
import Home from './image/home-solid-24.png';
import { Link } from 'react-router-dom';

export default function SideBar () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
        <div className={`${styles.sidebar} ${isSidebarOpen ? '' : styles.collapsed}`}>
            <div className={styles.toggleBtn} onClick={toggleSidebar}>
                <span className={`${styles.arrow} ${isSidebarOpen ? styles.left : styles.right}`} />
            </div>
                <ul className={styles.navItems}>
                    <li className={styles.navItem}>
                        <img className={styles.icon} src={Home} alt="" />
                        <Link style={{ textDecoration: 'none' }} to="/home"><span className={`${styles.navItem} ${isSidebarOpen ? styles.navItemOpen : styles.collapsedItem}`}>Home</span></Link>
                    </li>
                    <li className={styles.navItem} >
                       <img className={styles.icon} src={Business} alt="" /> 
                       <Link style={{ textDecoration: 'none' }} to="/espacios"><span className={`${styles.navItem} ${isSidebarOpen ? styles.navItemOpen : styles.collapsedItem}`}>Espacios</span></Link>
                    </li>
                    <li className={styles.navItem}>
                        <img className={styles.icon} src={Document} alt="" /> 
                        <Link style={{ textDecoration: 'none' }} to="/reportes"><span className={`${styles.navItem} ${isSidebarOpen ? styles.navItemOpen : styles.collapsedItem}`}>Reportes</span></Link>
                    </li>
                    <li className={styles.navItem}>
                        <img className={styles.icon} src={Customer} alt="" />
                        <Link style={{ textDecoration: 'none' }} to="/miembros"><span className={`${styles.navItem} ${isSidebarOpen ? styles.navItemOpen : styles.collapsedItem}`}>Miembros</span></Link>
                    </li>
                    
                </ul>
        </div> 
        </>
    );
}

