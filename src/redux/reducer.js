const initialState = {
    data: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_BLOG": 
        console.log("dataaa:" ,action.payload);
        return {
            ...state,
            data: [...state.data, action.payload]
        }
        default:
            return state;
    }
}

export default rootReducer;