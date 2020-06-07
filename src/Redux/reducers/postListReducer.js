export default (state = [],action) => {
    if(action.type==="FETCH_POST_LİST"){
        return action.payload;
    }
    return state
}