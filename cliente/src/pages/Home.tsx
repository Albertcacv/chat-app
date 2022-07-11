import styles from '../styles/home.module.css';

import { useState } from 'react';

import SidebarChannels from '../components/SidebarChannels';
// eslint-disable-next-line import/no-absolute-path
const Home = () => {
	const [showChat, setShowChat] = useState(false);
	return (
		<div className={styles.homePage}>
			<SidebarChannels />

			<section></section>
			{/* {showChat ? (
				<h1>CHAT</h1>
			) : (
				<img src={HomeLogo} className={styles.homeImage} />
			)} */}
		</div>
	);
};

export default Home;
