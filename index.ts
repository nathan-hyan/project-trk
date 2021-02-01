import express from 'express';
import morgan from 'morgan';

import config from '@configs/server';
import handleError from '@helpers/handleError';
import '@configs/database';

import Users from '@routes/users';

console.clear();

const app = express();
const PORT = config.server.port;

app.use(express.json());
app.use(morgan('tiny'));
app.use(handleError);

app.get('/', (req, res) => res.redirect('https://hyan.dev'));
app.use('/api/v1/users', Users);

app.listen(PORT, () => {
  console.log(`🦋 >> ${PORT}`);
});
