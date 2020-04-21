const ADD_MESSAGE = "ADD_MESSAGE ";

export function addChat(messageContent) {
  return { type:ADD_MESSAGE, messageContent };
}


const initialState = {
    message:[
    {id:1, content:"My back hurts recently",isPatient:true},
    {id:3, content:"Have you had any kind of treatment before?",isPatient:false}
    ]
};

export default function reducer(state=initialState, action) {
    console.log(action);
    switch (action.type){
        case ADD_MESSAGE:
            return {
                ...state, 
                message:[...state.message,{id: 5, content:action.messageContent}]
            }
            default: return state
            
    }
}
