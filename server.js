const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connnection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'This Is A Secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(require('./contollers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now Listening http://localhost:3001'));
});