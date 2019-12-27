import { Action } from 'redux'
import State from '../models/State';

const rootReducer = (state: State = new State(), action: Action): State => {

    return state;
}

export default rootReducer;
