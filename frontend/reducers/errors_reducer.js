import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import videoErrorsReducer from "./video_errors_reducer";
import userErrorsReducer from "./user_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    video: videoErrorsReducer,
    user: userErrorsReducer,
    comment: commentErrorsReducer,
});

export default errorsReducer;