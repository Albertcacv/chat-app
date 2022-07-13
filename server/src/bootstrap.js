import cors from 'cors';
import { config as dotenvConfig } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenvConfig();

export const bootstrap = async () => {
	const app = express();

	app.use(express.json());
	app.use(cors());

	// app.use(userRoutes)

	//app.use(errorMiddleware)

	await mongoose.connect(process.env.MONGODB_URI, {
		connectTimeoutMS: 4000,
	});

	app.listen(process.env.PORT, () => {
		console.log(`Servidor levantado en el puerto ${process.env.PORT}`);
	});
};
