import Serializable from '../Serializable';

export default class BlogPost implements Serializable<BlogPost> {
    private id: number = 0;
    private title: string = '';
    private content: string = '';
    private creationDate: null|Date = null;

    public getId = () => this.id;
    public getTitle = () => this.title;
    public getContent = () => this.content;
    public getCreationDate = () => this.creationDate;

    public deserialize(input = {}): BlogPost {
        // @ts-ignore
        this.id = input.id || this.id;

        // @ts-ignore
        this.title = input.title || this.title;

        // @ts-ignore
        this.content = input.content || this.content;

        // @ts-ignore
        this.creationDate = new Date(input.creationDate) || this.creationDate;

        return this;
    }
}
