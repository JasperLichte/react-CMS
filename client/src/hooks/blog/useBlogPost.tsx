import { useState, useEffect } from 'react';
import Config from '../../models/Config';
import BlogPost from '../../models/blog/BlogPost';

const useBlogPost = (postId: number): [boolean, BlogPost|null] => {
    const [post, setPost] = useState<BlogPost|null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(Config.serverBasePath() + `/blog/${postId}`)
            .then((r) => r.json())
            .then((p) => {
                setPost((new BlogPost()).deserialize(p));
                setIsLoading(false);
            })
            .catch(_ => {
                setPost(null);
                setIsLoading(false);
            });
    }, [postId]);

    return [isLoading, post];
}

export default useBlogPost;
