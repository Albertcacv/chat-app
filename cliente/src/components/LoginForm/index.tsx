import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login-form.module.css';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeUsername = evt => {
		setUsername(evt.target.value);
	};

	const handleChangePassword = evt => {
		setPassword(evt.target.value);
	};

	return (
		<article className={styles.loginContainer}>
			<h2 className={styles.loginTitle}>¡Hola de nuevo!</h2>
			<span className={styles.loginSubtitle}>
				¡Nos alegramos mucho de volver a verte!
			</span>
			<form className={styles.loginForm}>
				<label className={styles.loginFormLabel}>
					CORREO ELECTRÓNICO
					<input
						type='text'
						value={username}
						onChange={handleChangeUsername}
						className={styles.loginFormInput}
					/>
				</label>
				<label className={styles.loginFormLabel}>
					CONTRASEÑA
					<input
						type='password'
						value={password}
						onChange={handleChangePassword}
						className={styles.loginFormInput}
					/>
				</label>

				<button type='submit' className={styles.loginButton}>
					Iniciar sesión
				</button>
				<span className={styles.createAccount}>
					Necesitas una cuenta? <Link to='/register'>Registrarse</Link>
				</span>
			</form>
		</article>
	);
};

export default LoginForm;
