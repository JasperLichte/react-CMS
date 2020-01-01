import { useState, useEffect } from 'react';
import BlogPost from '../../models/blog/BlogPost';
import Api from '../../api/Api';

const useAllBlogPosts = (): [boolean, BlogPost[]] => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Api.get('blog/all-posts')
            .then((r) => r.json())
            .then((ps) => {
                setPosts(
                    ps.map((p: {}) => (new BlogPost()).deserialize(p))
                );
                setIsLoading(false);
            })
            .catch(_ => {
                setPosts([]);
                setIsLoading(false);
            });
    }, []);

    return [isLoading, posts];
}

export default useAllBlogPosts;
