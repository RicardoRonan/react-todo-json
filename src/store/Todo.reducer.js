const initialState={
    todo:[{
        "id": 4,
        "task": "clock-in",
        "status": "Done",
        isChecked: false,
      }]
    }

// const checkboxReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'TOGGLE_CHECKBOX':
//         return {
//           ...state,
//           isChecked: !state.isChecked,
//         };
//       default:
//         return state;
//     }
//   };
const todoReducer=(state=initialState,action)=>{
    if(action.type==='LOAD_TODOS'){
        return {...state, todo: [...action.payload]}
    }

    if(action.type==='ADD_TODOS'){
        return {...state, todo: action.payload}
    }
    switch (action.type) {
        case 'TOGGLE_CHECKBOX':
          return {
            ...state,
            isChecked: !state.isChecked,
          };
        default:
          return state;
}
}

export default todoReducer ;