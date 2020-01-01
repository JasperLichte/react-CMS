import { useState, useEffect } from 'react';
import BlogPost from '../../models/blog/BlogPost';
import Api from '../../api/Api';

const useBlogPost = (postId: number): [boolean, BlogPost|null] => {
    const [post, setPost] = useState<BlogPost|null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!postId) {
            return;
        }
        Api.get(`blog/${postId}`)
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
