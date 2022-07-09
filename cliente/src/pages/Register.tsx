import styles from '@/styles/register.module.css';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
	return (
		<div className={styles.register}>
			<RegisterForm />
		</div>
	);
};

export default Register;
