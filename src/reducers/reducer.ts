import { Action } from 'redux'
import State from '../models/State';
import { isSetConfigAction } from '../actions/config/SetConfigAction';

const rootReducer = (state: State = new State(), action: Action): State => {
    if (isSetConfigAction(action)) {
        return {...state, config: action.config};
    }

    return state;
}

export default rootReducer
