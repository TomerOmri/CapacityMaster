module.exports = {
    googleClientId : '1014705424026-9rk89r7a4elqes88568elqgt0d5dja25.apps.googleusercontent.com',
    googleClientSecret : 'PEwL6VQ883PSXCYUwxQghr8U',
    mongoURI : 'mongodb://tomer:Rocket5098@ds135186.mlab.com:35186/email-prod',
    cookieKey: 'kjhsdfkjlhsadjkfhaskjdfhkjasdhlfkjahdsfaihwqjeni83'
}


module.exports = {
    googleClientId : process.env.GOOGLE_CLIENT_ID,
    googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
    mongoURI : process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
}