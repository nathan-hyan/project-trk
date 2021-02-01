import express from 'express';
import Users from '@controllers/users';

const router = express.Router();

router.post('/edit', Users.createUser);
router.put('/edit/:id', Users.editUser);
router.delete('/edit/:id', Users.deleteUser);

router.post('/auth/login', Users.loginUser);

export = router;
