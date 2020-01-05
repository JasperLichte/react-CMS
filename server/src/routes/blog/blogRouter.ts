import express, { Request, Response } from 'express';
import Connection from '../../database/Connection';
import User from '../../models/user/User';
import BlogHelper from './BlogHelper';

const blogRouter = express.Router();

blogRouter.get('/all-posts', async (req: Request, res: Response) => {
    res.send(await BlogHelper.allPosts());
});

blogRouter.get('/:id', async (req: Request, res: Response) => {
    const post = await BlogHelper.postById(parseInt(req.params.id));

    if (! post || post.isEmpty()) {
        return res.status(404).send(null);
    }

    res.send(post);
});

blogRouter.post('/:id/edit', async (req: Request, res: Response) => {
    // @ts-ignore
    const user: User|null = req.user;
    const postId = parseInt(req.params.id);
    const {title, content} = req.body;

    if (user === null || !user.getIsAdmin() || !postId || !title || !content) {
        return res.send({success: false});
    }

    const db = Connection.getInstance();
    const result = await db.query(`
        UPDATE blog_posts
        SET title = ${db.escape(title)},
            content = ${db.escape(content)}
        WHERE id = ${db.escape(req.params.id)}
    `);

    res.send({success: !!result.changedRows});
});

blogRouter.post('/new', async (req: Request, res: Response) => {
    // @ts-ignore
    const user: User|null = req.user;
    const {title, content} = req.body;

    if (user === null || !user.getIsAdmin() || !title || !content) {
        return res.send({success: false});
    }

    const db = Connection.getInstance();
    const result = await db.query(`
        INSERT INTO blog_posts
        (title, content, creation_date)
        VALUES(${db.escape(title)}, ${db.escape(content)}, NOW())
    `);

    res.send({success: !!result.insertId, postId: result.insertId});
});

export default blogRouter;
