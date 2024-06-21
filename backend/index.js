const express = require('express');
const cookieParser = require('cookie-parser');

const authRouter = require('./src/auth');
const { getTokens } = require('./src/auth/utils')

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(authRouter);


const port = 3002;
app.listen(part, () => console.log(`Server listening on ${port}`));