import Serializable from '../Serializable';

export default class BlogPost implements Serializable<BlogPost> {
    private id: number = 0;
    private title: string = '';
    private content: string = '';

    public deserialize(input = {}): BlogPost {
        // @ts-ignore
        this.id = input.id || this.id;

        // @ts-ignore
        this.title = input.title || this.title;

        // @ts-ignore
        this.content = input.content || this.content;

        return this;
    }
}
