import { useState, useEffect } from 'react';
import Config from '../../models/Config';
import BlogPost from '../../models/blog/BlogPost';

const useAllBlogPosts = (): [boolean, BlogPost[]] => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(Config.serverBasePath() + '/blog/all-posts')
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
