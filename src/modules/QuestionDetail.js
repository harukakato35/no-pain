const ADD_INQUIRY = "ADD_INQUIRY ";


export function addAnswer(inquiryTitles) {
  return { type:ADD_INQUIRY, inquiryTitles };
}


const initialState = {
    id:0,
    title:"肩こりに困っています",
    inquiry:"一年前から",
    answer:[
    {id:0, content: "私のところに来てください"}, 
    {id:1, content: "私のところに来てください"}
    ]
};



export default function reducer(state=initialState, action) {
    console.log(action);
    switch (action.type){
        case ADD_INQUIRY:
            return {
                ...state, 
                answer:[...state.answer,{id: 2, content:action.inquiryTitles}]
            }
            default: return state
            
    }
}
//                inquiry: action.inquiryTitles,