import App from './App'; 
import * as bodyParser from 'body-parser';
import morgan from 'morgan';

import myMiddleware from './middlewares/log.middleware'; 
import HomeController from './controllers/HomeController'; 

const app = new App({
    port: 3000, 
    middlewares: [
        morgan('dev'),
        bodyParser.urlencoded({extended: false}),
        bodyParser.json(),
        myMiddleware
    ],
    controllers: [
        new HomeController()
    ]
});

app.listen();