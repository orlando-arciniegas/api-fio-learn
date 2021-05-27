import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import UsersRoutes from './routes/UsersRoutes';

const app = express();

// Settings
app.set('port', process.env.port || 3001); 

// Middlewares
app.use(cors({
    origin: 'http://localhost:3001'
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/users', UsersRoutes);

export default app;