import Action from "../Action"
import ActionType from "../ActionType"
import Me from "../../models/config/Me"

export default interface SetMeAction extends Action {
    type: ActionType.SET_ME,
    me: Me|null,
}
