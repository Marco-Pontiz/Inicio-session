const mongoose = require('mongoose');
const MONGODB_URI = `mongodb://localhost/Inicio-session`

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log(`Database is connect`))
    .catch(err => console.log(err));