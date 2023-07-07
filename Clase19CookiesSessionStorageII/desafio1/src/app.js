import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

app.use(session({
    secret: 'coderhouse',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://sessions_user:zDCGw0blunHKGxqV@cluster0.giykqux.mongodb.net/?retryWrites=true&w=majority',
        ttl: 100,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true }
    }),
}));
app.get('/',(req,res)=>{
    req.session.user= 'Active Session';
    res.send('Session set');
});

app.get('/test',(req,res)=>{
    res.send(req.session.user);
})

const server = app.listen(8080,()=>console.log("Listening on 8080"))