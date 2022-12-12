const express = require('express');
const path = require('path');

const app = express();

app.use('/app', express.static(path.resolve(__dirname, 'src', 'app')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Server running...'));

// const deploy = require('deploy-to-github-pages');

// deploy(options).catch((err) => {
//     console.log(err);
// });
