import styles from '@/styles/login.module.css';
import LoginForm from '../components/LoginForm';

const Login = () => {
	return (
		<div className={styles.login}>
			<LoginForm />
		</div>
	);
};

export default Login;
