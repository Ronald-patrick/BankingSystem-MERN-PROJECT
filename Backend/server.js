const express=require('express');
const mongoose=require('mongoose');
var cors = require('cors');

const User =require('./models/details.js');
//Config
const app = express();
const port = process.env.PORT||8001;


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
//Connect to db

mongoose.connect("mongodb://localhost:27017/bankingSite", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
  })
  .then(() => console.log("Connection success.."))
  .catch((err) => console.log(err));


//Endpoints

app.get('/',(req,res)=>{
    console.log("Hello World");
    res.send('Hello World');
})

app.post('/users', async(req,res)=>{
    const user = new User(req.body);
    user.save().then(()=>{
        res.status(201);
        res.send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.get('/users',async(req,res)=>{
    try{
        const data=await User.find();
        res.send(data);
    }
    catch(e){
        res.send(e);
    }
});

app.post('/users/update',async(req,res)=>{  
    try
    {
    const id=req.body._id;
    const updates=req.body;
    const options={new:true};
    const result=await User.findByIdAndUpdate(id,updates,options);
    res.send(result)
    }
    catch(err)
    {
        console.log(err);
    }
})

app.listen(port,()=>{
    console.log(`Listening to Port ${port} `);
})