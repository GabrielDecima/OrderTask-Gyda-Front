import styles from './navBarStyle.module.css';


export default function NavBar  ()  {
  
  return(
  
  <nav className={styles.navbar}>
    <div className={styles.logo}></div>
            <ul className={styles.navItems}>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Tareas</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Kanban</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Calendario</a></li>
            </ul>
            
            <div className={styles.searchBar}>
            <input type="text" placeholder="Buscar"/>

        <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.8 1C11.8687 1 13.8526 1.82178 15.3154 3.28457C16.7782 4.74735 17.6 6.73131 17.6 8.8C17.6 10.732 16.892 12.508 15.728 13.876L16.052 14.2H17L23 20.2L21.2 22L15.2 16V15.052L14.876 14.728C13.4607 15.9361 11.6609 16.5999 9.8 16.6C7.73131 16.6 5.74735 15.7782 4.28457 14.3154C2.82178 12.8526 2 10.8687 2 8.8C2 6.73131 2.82178 4.74735 4.28457 3.28457C5.74735 1.82178 7.73131 1 9.8 1ZM9.8 3.4C6.8 3.4 4.4 5.8 4.4 8.8C4.4 11.8 6.8 14.2 9.8 14.2C12.8 14.2 15.2 11.8 15.2 8.8C15.2 5.8 12.8 3.4 9.8 3.4Z" fill="white"/>
            </svg>
        </button>
    
    </div>
  </nav> 
  );
}




