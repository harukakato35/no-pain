const ADD_T_MESSAGE = "ADD_T_MESSAGE ";


export function addMessage(messageContent) {
  return { type:ADD_T_MESSAGE, messageContent };
}


const initialState = {
    messageContent:[
    {id:2},
    {id:4},
    ]
};



export default function reducer(state=initialState, action) {
    console.log(action);
    switch (action.type){
        case ADD_T_MESSAGE:
            return {
                ...state, 
                messageContent: action.messageContent
            }
            default: return state
    }
}

// action creators simply return an action:s
// const initialState = {
//     contents:[
//     {id:0},
//     {id:1},
//     ]
// };データベースからとって来たという仮定だからこういう書き方を
//している
