import styles from './home.styles.module.css';
import Dropdown from './Dropdown';


export default function Home ()  {

    const InfoT = ['Tarea1', 'Tarea2', 'Tarea3'];

    return (
        <>

        <section className={styles.sectionHome}>
        <div className={styles.img}></div>
    

        <p className={styles.p}> Domina tu tiempo, simplifica tu vida: Bienvenido al futuro de la productividad con nuestra revolucionaria app de organización de tareas.....</p>

        <div className={styles.containerResumen}>
            <h3>Resumen</h3>
            <div className={styles.tarjetaResumen}>
                <h5 className={styles.title}>Mi Trabajo</h5>
                <Dropdown/>
            </div>

        </div>



        <div className={styles.containerAgenda}>
            <h3>Agenda</h3>
            
        </div>
        
        </section>
        </>
    );
}



