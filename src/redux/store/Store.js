import { combineReducers, createStore } from "redux";
import Todos from "../reducer/Todos";
import FilterReducer from "../reducer/FilterReducer";

// const doubleStore = combineReducers({
//     todo : Todos,
//     filter:FilterReducer
// })

const allReducer = combineReducers({
    reducer1:Todos,
    reducer2:FilterReducer
})
const store = createStore(allReducer)
export default store
