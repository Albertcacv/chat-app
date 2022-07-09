import { Link } from 'react-router-dom';
import styles from './register-form.module.css';

const RegisterForm = () => {
	return (
		<article className={styles.registerContainer}>
			<h2 className={styles.registerTitle}>Crear una cuenta</h2>

			<form className={styles.registerForm} action='POST'>
				<label className={styles.registerFormLabel}>
					CORREO ELECTRÓNICO
					<input
						type='text'
						name='email'
						className={styles.registerFormInput}
					/>
				</label>
				<label className={styles.registerFormLabel}>
					NOMBRE DE USUARIO
					<input
						type='text'
						name='username'
						className={styles.registerFormInput}
					/>
				</label>
				<label className={styles.registerFormLabel}>
					CONTRASEÑA
					<input
						type='password'
						name='password'
						className={styles.registerFormInput}
					/>
				</label>

				<button type='submit' className={styles.registerButton}>
					Continuar
				</button>
				<span className={styles.existAccount}>
					<Link to='/login'>¿Ya tienes una cuenta?</Link>
				</span>
			</form>
		</article>
	);
};

export default RegisterForm;
