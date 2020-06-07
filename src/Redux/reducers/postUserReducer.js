export default (state = [],action) => {
    if(action.type==="FETCH_USER_LIST"){
        return action.payload
    }
    return state
}