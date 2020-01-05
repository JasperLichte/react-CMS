import Serializable from '../Serializable';
import User from '../user/User';

export default class Me implements Serializable<Me> {

    private user: User|null = null;

    public getUser = () => this.user;

    public deserialize(input: {}) {
        // @ts-ignore
        this.user = input.user ? (new User()).deserialize(input.user) : this.user;

        return this;
    }
}
