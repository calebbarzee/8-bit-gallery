import Home from '../views/Home.js';
import Login from '../views/Login.js';
import Upload from '../views/Upload.js';
import Quiz from '../views/Quiz.js';

// const app = express();

// if (process.env.NODE_ENV != 'production') {
//     const webpack = require('webpack');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const config = require('./webpack.config.js');

//     const compiler = webpack(config);

//     app.use(
//         webpackDevMiddleware(compiler, {
//             publicPath: config.output.publicPath,
//         })
//     );
// }

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', view: Home },
        { path: '/login', view: Login },
        { path: '/upload', view: Upload },
        { path: '/quiz', view: Quiz },
    ];

    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });
    let match = potentialMatches.find(
        (potentialMatch) => potentialMatch.isMatch
    );
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }

    const view = new match.route.view();
    document.querySelector('#app').innerHTML = await view.getHtml();
};

// accessing the history api to use feature of back and forward arrows
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    // accessing the history api to use feature of back and forward arrows
    window.addEventListener('popstate', router);
    // preventing default anchor tag behavior
    // e is event, and helps refrence the event of click
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});
