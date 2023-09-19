const INIT_STATE={
    users: [
        {userName:"ahmed", age:20},
        {userName:"ahmed", age:20},
        {userName:"ahmed", age:20},
        {userName:"ahmed", age:20},
        {userName:"ahmed", age:20},
        {userName:"ahmed", age:20},
    ]
}

export default function UsersReducer(state=INIT_STATE,action){
    switch(action.type){
        case "SET_USERS": 
        return {...state,users: action.payload}
        default:
            return state;
    }

}