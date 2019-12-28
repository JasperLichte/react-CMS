import express, { Request, Response } from 'express';
import BlogPost from '../../models/blog/BlogPost';
import Connection from '../../database/Connection';

const blogRouter = express.Router();
const db = Connection.getInstance();

blogRouter.get('/all-posts', async (req: Request, res: Response) => {
    const dbRes = (await db.query(`
        SELECT id, title, content, creation_date AS creationDate
        FROM blog_posts
    `));

    let posts: BlogPost[] = [];
    if (Array.isArray(dbRes)) {
        posts  = dbRes.map((p: {}) => (new BlogPost()).deserialize(p));
    } else {
        posts = [(new BlogPost()).deserialize(dbRes)];
    }

    res.send(posts);
});

blogRouter.get('/:id', async (req: Request, res: Response) => {
    const post = (new BlogPost()).deserialize(await db.query(`
        SELECT id, title, content, creation_date AS creationDate
        FROM blog_posts
        WHERE id = ${db.escape(req.params.id)}
    `));

    if (post.isEmpty()) {
        res.status(404).send(null);
        return;
    }

    res.send(post);
});

export default blogRouter;
