import { createStore } from "redux";

const initialState = {
    index : -1
}

const reducer = (state = initialState , action) =>{
    switch (action.type) {
        case 'ACTIVE':
            return{
                ...state,
                index : action.payload
            }
    
        default:
            return state
    }
}

const store = createStore(reducer)

export default store