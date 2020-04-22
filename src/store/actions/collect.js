import * as collectActions from "../consts/collect"

export function setCollect(data){
    return{
        type:collectActions.COLLECT,
        data
    }
}

export function cancelCollect(data){
    return{
        type:collectActions.UNCOLLECT,
        data
    }
}