const ADD_INQUIRY = "ADD_INQUIRY ";


export function addInquiry(title,inquiry) {
  return { type:ADD_INQUIRY, title, inquiry };
}


const initialState = {
  inquiry: null,
  title: ""
};


export default function reducer(state=initialState, action) {
    console.log(action);
    switch (action.type){
        case ADD_INQUIRY:
            return {
                ...state, 
                title: action.title,
                inquiry: action.inquiry
            }
            default: return state
    }
}

// action creators simply return an action:s
//    console.log(action);なぜある？？
