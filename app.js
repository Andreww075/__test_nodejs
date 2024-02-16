const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express();

app.set('PORT', process.env.PORT || 3001);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    // allowProtoPropertiesByDefault: true
  },
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.render('users/users')
})

app.get('/api', (req, res) => {
  res.render('users/other')
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('PORT'), () => {
  console.log('Server on port', app.get('PORT'))
});
