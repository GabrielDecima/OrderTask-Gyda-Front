import React ,{useState} from 'react';
import styles from './sideBarStyle.module.css';
import Business from './image/business.png';
import Document from './image/document.png';
import Customer from './image/customer.png';

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
                    <li className={styles.navItem} >
                       <img className={styles.icon} src={Business} alt="" /> 
                       <span className={`${styles.navItem} ${isSidebarOpen ? styles.navItemOpen : styles.collapsedItem}`}>Espacios</span>
                    </li>
                    <li className={styles.navItem}>
                        <img className={styles.icon} src={Document} alt="" /> 
                        <span className={`${styles.navItem} ${isSidebarOpen ? styles.navItemOpen : styles.collapsedItem}`}>Reportes</span>
                    </li>
                    <li className={styles.navItem}>
                        <img className={styles.icon} src={Customer} alt="" />
                        <span className={`${styles.navItem} ${isSidebarOpen ? styles.navItemOpen : styles.collapsedItem}`}>Miembros</span>
                    </li>
                </ul>
        </div> 
        </>
    );
}

