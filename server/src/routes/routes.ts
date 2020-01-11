import express from 'express';
import configRouter from './config/configRouter';
import blogRouter from './blog/blogRouter';
import authRouter from './auth/authRouter';
import githubRouter from './vendor/github/githubRouter';
import googleRouter from './vendor/google/googleRouter';
import aboutRouter from './about/aboutRouter';

const router = express.Router();

router.use('/config', configRouter);
router.use('/blog', blogRouter);
router.use('/auth', authRouter);
router.use('/about', aboutRouter);
router.use('/vendor/github', githubRouter);
router.use('/vendor/google', googleRouter);

export default router;
