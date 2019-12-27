import express, { Request, Response } from 'express';
import BlogPost from '../../models/blog/BlogPost';
import blogPosts from '../../mock_data/blogPosts';

const blogRouter = express.Router();

blogRouter.get('/all-posts', (req: Request, res: Response) => {
    const posts: BlogPost[] = blogPosts.map((p) => (new BlogPost()).deserialize(p));

    res.send(posts);
});

blogRouter.get('/:id', (req: Request, res: Response) => {
    const post: BlogPost = (new BlogPost())
        .deserialize(blogPosts.find((p) => p.id === parseInt(req.params.id, 10)));

    res.send(post);
});

export default blogRouter;
