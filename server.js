const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


const sequelize = require('./config/connection');
const SeqStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// adds the functionality of helpers to handlebars engine
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ defaultLayout: 'main', extname: '.hbs', helpers });//helpers 

// constructing session/cookie
const sess = {
    secret: 'Super super secret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitiapzed: true,
    store: new SeqStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`listening for server at ${PORT}`));
});