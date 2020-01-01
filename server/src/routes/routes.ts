import express from 'express';
import blogRouter from './blog/blogRouter';
import authRouter from './auth/authRouter';
import githubRouter from './vendor/github/githubRouter';
import googleRouter from './vendor/google/googleRouter';

const router = express.Router();

router.use('/blog', blogRouter);
router.use('/auth', authRouter);
router.use('/vendor/github', githubRouter);
router.use('/vendor/google', googleRouter);

export default router;
