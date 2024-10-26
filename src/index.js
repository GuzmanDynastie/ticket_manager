import express from 'express';
import exphbs from 'express-handlebars';
import morgan from 'morgan'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const app = express();
import './config/database';

app.set('port', process.env.PORT || 5000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.html'
}));
app.set('view engine', '.html');

app.use(require('./routes/login'));

app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});