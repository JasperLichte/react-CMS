import State from '../models/State';
import ActionType from '../actions/ActionType';
import SetUserAction from '../actions/user/SetUserAction';
import SetMeAction from '../actions/config/SetMeAction';

const rootReducer = (
    state: State = new State(),
    action: SetUserAction | SetMeAction
): State => {
    switch(action.type) {
        case ActionType.SET_USER:
            return {...state, user: action.user};
        case ActionType.SET_ME:
            return {...state, me: action.me};
    }

    return state;
}

export default rootReducer;
