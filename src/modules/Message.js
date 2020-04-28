const ADD_CHAT = "ADD_CHAT ";
const ADD_MESSAGE = "ADD_MESSAGE ";

export function addChat(message) {
  return { type:ADD_CHAT, message };
}

export function addMessage(message) {
  return { type:ADD_MESSAGE, message };
}

const initialState = {
    message:[
    {id:1, message:"My back hurts recently",isPatient:true},
    {id:3, message:"Have you had any kind of treatment before?",isPatient:false}
    ]
};

export default function reducer(state=initialState, action) {
    console.log(action);
    switch (action.type){
        case ADD_MESSAGE:
            return {
                ...state, 
                message:[...state.message,{id: 5, message:action.message, isPatient:true}]
            };
        case ADD_CHAT:
            return {
                ...state, 
                message:[...state.message,{id: 6, message:action.message,isPatient:false}]
            }
            default: return state
            
    }
}