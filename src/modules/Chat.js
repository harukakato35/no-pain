const ADD_T_MESSAGE = "ADD_T_MESSAGE ";


export function addMessage(messageContent) {
  return { type:ADD_T_MESSAGE, messageContent };
}


const initialState = {
    messageContent:[
    {id:0, content:"My back hurts recently"}
    ]
};



export default function reducer(state=initialState, action) {
    console.log(action);
    switch (action.type){
        case ADD_T_MESSAGE:
            return {
                ...state, 
                 messageContent:[...state.messageContent,{id:4, content:action.messageContent}]
            }
            
            default: return state
    }
}


