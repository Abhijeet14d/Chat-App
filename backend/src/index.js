import express from 'express';
import authRoutes from './routes/auth.route.js';

const app = express();
const PORT = 5001;

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {    
    res.send('Hello world');
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
})