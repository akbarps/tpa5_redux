import { init_filter } from "../../FilterVariable"
import { SET_FILTER } from "../action/Action"
const init = init_filter.ALL

function FilterReducer(state = init,action) {
  switch (action.type) {
    case SET_FILTER:{
        return action.payload.filter
      }
    default:{
        return state
    }
    }
}

export default FilterReducer