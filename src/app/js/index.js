const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', view: () => console.log('Viewing Home') },
        { path: '/login', view: () => console.log('Viewing Login') },
        { path: '/upload', view: () => console.log('Viewing Upload') },
        { path: '/quiz', view: () => console.log('Viewing Quiz') },
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

    console.log(match.route.view());
};

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
