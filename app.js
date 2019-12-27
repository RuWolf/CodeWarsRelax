const express = require("express");
const useMiddleware = require("./middleware");
const path = require('path');
const indexRouter = require("./routes/index");
const hbs = require('hbs');
const useErrorHandlers = require("./middleware/error-handlers");

const app = express();
useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use("/", indexRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


useErrorHandlers(app);

module.exports = app;
