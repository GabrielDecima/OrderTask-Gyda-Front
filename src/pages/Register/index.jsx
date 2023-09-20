import styles from './registerStyle.module.css';

export function Register() {
    return (
        <>
           <div className={styles.fondo}>
                
                <div className={styles.containerForm}>
                    <div  className={styles.classForm}>
                        <h4 className={styles.title}>Registrarme</h4>
                        <input className={styles.input} placeholder="Nombre * " type="text" />
                        <input className={styles.input} placeholder="Apellido * " type="text" />
                        <input className={styles.input} placeholder="Teléfono * " type="text" />
                        <input className={styles.input} placeholder="Correo electrónico * " type="text" />
                        <input className={styles.input} placeholder="Contraseña * " type="password" />
                        <input className={styles.input} placeholder="Repetir contraseña  " type="password" />
                        <button className={styles.button_iniciar}>Registrarme</button>

                        <p className={styles.p_form}>Al registrarte para obtener una cuenta, aceptas nuestros Términos de uso y política de privacidad. </p>

                    
                    </div>
                </div>

            </div> 
        </>
    );
}

