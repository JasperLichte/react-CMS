import Serializable from '../../Serializable';

export default class GithubUserProfile implements Serializable<GithubUserProfile> {
    private id: number = 0;

    private name: string = '';
    private login: string = '';
    private company: string = '';
    private blog: string = '';
    private location: string = '';
    private avatarUrl: string = '';

    private createdAt: null|Date = null;
    private updatedAt: null|Date = null;

    private followers: number = 0;
    private following: number = 0;

    public getId = () => this.id;
    public getName = () => this.name;
    public getLogin = () => this.login;
    public getCompany = () => this.company;
    public getBlog = () => this.blog;
    public getLocation = () => this.location;
    public getAvatarUrl = () => this.avatarUrl;
    public getCreatedAt = () => this.createdAt;
    public getUpdatedAt = () => this.updatedAt;
    public getFollowers = () => this.followers;
    public getFollowing = () => this.following;

    public deserialize(input = {}): GithubUserProfile {
        // @ts-ignore
        this.id = input.id || this.id;

        // @ts-ignore
        this.name = input.name || this.name;
        // @ts-ignore
        this.login = input.login || this.login;
        // @ts-ignore
        this.company = input.company || this.company;
        // @ts-ignore
        this.blog = input.blog || this.blog;
        // @ts-ignore
        this.location = input.location || this.location;
        // @ts-ignore
        this.avatarUrl = input.avatar_url || this.avatarUrl;

        // @ts-ignore
        this.createdAt = new Date(input.created_at) || this.createdAt;
        // @ts-ignore
        this.updatedAt = new Date(input.updated_at) || this.updatedAt;

        // @ts-ignore
        this.followers = input.followers || this.followers;
        // @ts-ignore
        this.following = input.following || this.following;

        return this;
    }
}
