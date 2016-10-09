var express = require('express')
  , app = express();

app.use(express.static('public'));
app.use(require('./controllers'))

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})
