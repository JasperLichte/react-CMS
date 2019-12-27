import express, { Request, Response } from 'express';
import BlogPost from '../../models/blog/BlogPost';
import Connection from '../../database/Connection';

const blogRouter = express.Router();
const db = Connection.getInstance();

blogRouter.get('/all-posts', async (req: Request, res: Response) => {
    const posts = (await db.query(`
        SELECT id, title, content, creation_date AS creationDate
        FROM blog_posts
    `)).map((p: {}) => (new BlogPost()).deserialize(p));

    res.send(posts);
});

blogRouter.get('/:id', async (req: Request, res: Response) => {
    const post = (new BlogPost()).deserialize(await db.query(`
        SELECT id, title, content, creation_date AS creationDate
        FROM blog_posts
        WHERE id = ${db.escape(req.params.id)}
    `));

    res.send(post);
});

export default blogRouter;
