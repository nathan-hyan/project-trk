import express from 'express';
import session from 'express-session';
import mdbSession from 'connect-mongodb-session';
import morgan from 'morgan';

import config from '@configs/server';
import handleError from '@helpers/handleError';
import '@configs/database';

import Users from '@routes/Users';

console.clear();

const app = express();
const PORT = config.server.port;

const MongoDbSession = mdbSession(session);

const store = new MongoDbSession({
  uri: process.env.DB_URI || '',
  collection: 'sessions',
});

app.use(express.json());
app.use(morgan('tiny'));
app.use(handleError);
app.use(
  session({
    name: 'hyanid',
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    secret: process.env.KEY!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 31,
    },
    store,
  }),
);

app.use('/api/v1/users', Users);

app.listen(PORT, () => {
  console.log(`🦋 >> ${PORT}`);
});
