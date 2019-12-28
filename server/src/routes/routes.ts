import express from 'express';
import blogRouter from './blog/blogRouter';
import githubRouter from './vendor/github/githubRouter';

const router = express.Router();

router.use('/blog', blogRouter);
router.use('/vendor/github', githubRouter);

export default router;
