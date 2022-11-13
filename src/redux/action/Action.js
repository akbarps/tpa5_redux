export const ADD_TODO = "ADD_TODO"
export const TOOGLE_TODO = "TOOGLE_TODO"
export const SET_FILTER = "SET_FILTER"
export const UDPATE_DATA = "UDPATE_DATA"
export const DEL_DATA = "DEL_DATA"


let id = 0
export function addTodo(task) {
    return{
        type:ADD_TODO,
        payload:{
            id:++id,
            task
        }
    }
}
export function toggleCheck(theId) {
    console.log(id)
    return{
        type: TOOGLE_TODO,
        payload: {theId}
    }
}
export function setFilter(filter) {
    return{
        type: SET_FILTER,
        payload: {filter}
    }
}
export function updateDsta(updateId,taskUpdate) {

    return{
        type: UDPATE_DATA,
        payload: {updateId,taskUpdate}
    }
}
export function delData(id) {
    console.log(id)
    return{
        type: DEL_DATA,
        payload: id
    }
}