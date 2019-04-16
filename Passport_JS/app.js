const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');



const app = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: 'darksouls',
    syore: new FileStore,
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 60*60*1000
    },
    resave: false,
    saveUninitialized: false,

}))



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))