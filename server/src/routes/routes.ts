import express from 'express';
import blogRouter from './blog/blogRouter';
import githubRouter from './vendor/github/githubRouter';
import googleRouter from './vendor/google/googleRouter';

const router = express.Router();

router.use('/blog', blogRouter);
router.use('/vendor/github', githubRouter);
router.use('/vendor/google', googleRouter);

export default router;
