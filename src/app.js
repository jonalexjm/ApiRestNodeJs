
import express from 'express';
import morgan from 'morgan';

//import
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//inicializacion
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects/',projectRoutes);
app.use('/api/routes/', taskRoutes);


export default app;