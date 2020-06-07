import {combineReducers} from "redux";
import PostListReducer from "./postListReducer"
import UserListReducer from "./postUserReducer"

export default combineReducers({
    postList:PostListReducer,
    userList:UserListReducer
})