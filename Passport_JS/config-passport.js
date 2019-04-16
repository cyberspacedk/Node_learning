const passport = require('passport');

const LocalStrategy = require('passport-local');

const userDb = {
    id:1,
    email: "test@yahoo.com",
    password: "123", 
}

passport.serializeUser((user, done)=>{
    console.log('СЕРИЛИЗАЦИЯ', user);
    done(null, user.id);
})

passport.deserializeUser((id, done)=>{
    console.log('ДЕСЕРИАЛИЗАЦИЯ', id);

    const user = (userDb.id === id) ? userDb : false;

    User.findByID(id, (err, user)={
        done(err,user)
    })
})