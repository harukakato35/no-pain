  
const ADD_ANSWER = "ADD_ANSWER ";
const ADD_INQUIRY = "ADD_INQUIRY ";

export function addInquiry(inquiry) {
  return { type:ADD_INQUIRY,inquiry};
}

export function addAnswer(answer) {
  return { type:ADD_ANSWER,answer};
}


const initialState = {
    inquiry:[
    {id:0, title:"I have a back problem1",
    inquiry:"I've getting treatment from osteopath but it's not getting better"},
    {id:1, title:"I have a knee problem2",
    inquiry:"I've getting treatment from physio therapy but it's not getting better"},
    ],
    answer:[
    {id:0, answer: "私のところに来てください"}, 
    {id:1, answer: "私のところに来てください"}
    ]
};



export default function reducer(state=initialState, action) {
    console.log(action);
    switch (action.type){
      case ADD_INQUIRY:
            return {
                ...state, 
                inquiry:[...state.inquiry,{id: 2, inquiry:action.inquiry, title:action.inquiry}],
            };
        case ADD_ANSWER:
            return {
                ...state, 
                answer:[...state.answer,{id: 2, answer:action.answer}],
            };

            default: return state
            
    }
}