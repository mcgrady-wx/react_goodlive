import * as userActions from "../consts/userinfo"

export function loginUser(data){
    return{
        type:userActions.LOGIN_USERINFO,
        data
    }
}

export function updateUser(data){
    return{
        type:userActions.LOGIN_UPDATE,
        data
    }
}