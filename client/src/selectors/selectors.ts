import State from '../models/State';

type Selector = (state: State) => any;

export const stateSelector: Selector = state => state;
