import State from '../models/State';
import User from '../models/user/User';
import Me from '../models/config/Me';

type Selector<T> = (state: State) => T;

export const stateSelector: Selector<State> = state => state;
export const userSelector: Selector<User|null> = state => state.user;
export const meSelector: Selector<Me|null> = state => state.me;
