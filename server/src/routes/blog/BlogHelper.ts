import BlogPost from 'src/models/blog/BlogPost';
import Connection from 'src/database/Connection';

export default class BlogHelper {

    public static allPosts = async (): Promise<BlogPost[]> => {
        const db = Connection.getInstance();
        const dbRes = (await db.query(`
            SELECT id, title, creation_date AS creationDate
            FROM blog_posts
            ORDER BY creation_date DESC
        `));

        if (Array.isArray(dbRes)) {
            return dbRes.map((p: {}) => (new BlogPost()).deserialize(p));
        }
        return [(new BlogPost()).deserialize(dbRes)];
    }

    public static postById = async (id: number): Promise<BlogPost|null> => {
        if (!id) {
            return null;
        }

        const db = Connection.getInstance();
        return (new BlogPost()).deserialize(await db.query(`
            SELECT id, title, content, creation_date AS creationDate
            FROM blog_posts
            WHERE id = ${db.escape(id)}
        `));
    }

}
