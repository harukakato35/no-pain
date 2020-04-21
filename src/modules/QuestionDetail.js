const ADD_INQUIRY = "ADD_INQUIRY ";


export function addAnswer(inquiryTitles) {
  return { type:ADD_INQUIRY, inquiryTitles };
}


const initialState = {
    inquiry:[
    {id:0, title:"I have a back problem1",
    inquiry:"I've getting treatment from osteopath but it's not getting better"},
    {id:1, title:"I have a knee problem2",
    inquiry:"I've getting treatment from physio therapy but it's not getting better"},
    ],
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
                answer:[...state.answer,{id: 2, content:action.inquiryTitles}],
            }
            default: return state
            
    }
}
//                inquiry: action.inquiryTitles,