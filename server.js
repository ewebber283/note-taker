const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//parse incoming string or array data
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.json())
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API now on port ${PORT}!`);
})