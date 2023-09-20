import styles from './loginStyle.module.css';   



export  function Login () {
    return (
        <>
            <div className={styles.fondo}>
                
                <div className={styles.containerForm}>
                    <div  className={styles.classForm}>
                        <h4 className={styles.title}>¡Te damos la bienvenida!</h4>
                        <input className={styles.input} placeholder="Correo electrónico * " type="text" />
                        <input className={styles.input} placeholder="Contraseña * " type="password" />
                        <button className={styles.button_iniciar}>Iniciar sesión</button>

                        <a className={styles.link_a} href="">¿Olvidaste tu contraseña?</a>
                        
                        <h3 className={styles.title}>¿Primera vez?</h3>
                        <button className={styles.button_crear}>Crear cuenta</button>
                    
                    </div>
                </div>

            </div>
            
        </>
    );
}