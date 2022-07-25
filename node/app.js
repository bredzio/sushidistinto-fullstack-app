import express from 'express';
import cors  from 'cors';
import db from './database/db.js';
import cursoRoutes from './routes/cursosRoutes.js';
import ordenRoutes from './routes/ordenRoutes.js';
import userRoutes from './routes/userRoutes.js';
import loginRoutes from './routes/loginRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/cursos', cursoRoutes);
app.use('/ordenes', ordenRoutes);
app.use('/usuarios', userRoutes);
app.use('/login', loginRoutes);

app.get('/', (req, res)=>{
     res.send('API REST CURSOS SUSHI DISTINTO')
})

app.listen(8000, ()=>{
     console.log('Server UP running in http://localhost:8000/')
})