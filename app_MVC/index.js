const express = require('express');
const router = require('./src/routers/router');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 3000;

app.engine("handlebars", handlebars.engine({
    helpers: require(`${__dirname}/src/views/helpers/helpers.js`),
    layoutsDir: `${__dirname}/src/views/layouts`,
    defaultLayout: "main",
}));
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(router);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
