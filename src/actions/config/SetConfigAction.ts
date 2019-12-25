import Config from "../../models/config/Config";
import ActionType from "../ActionType";
import Action from "../Action";

export default interface SetConfigAction extends Action {
    readonly config: Config;
}

export function isSetConfigAction(action: Action): action is SetConfigAction {
    return action.type === ActionType.SET_CONFIG;
}
