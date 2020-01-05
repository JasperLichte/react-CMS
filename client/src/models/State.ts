import User from "./user/User";
import Me from "./config/Me";

export default class State {
    user: User|null = null;
    me: Me|null;
}
