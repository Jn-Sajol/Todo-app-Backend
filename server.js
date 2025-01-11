const express = require('express');
const dbconnect = require('./Db/databaseConnect');
const userRouter = require('./Router/userRoute')
const todoRouter = require('./Router/todoRoute')
const app = express();
app.use(express.json());

//connect database
dbconnect();
//Root Route
app.use('/api/user',userRouter)
app.use('/api/task',todoRouter)

// app.get('/',(req,res)=>{
//     res.send('server run port on 3000')
// })
app.listen(3000,()=>{
    console.log('server run port on 3000')
})