const ASK_FOR_ADVICE = 'ASK_FOR_ADVICE';

const initialState = {
    mypage: []
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ASK_FOR_ADVICE:
      return { 
        ...state, 
        mypage: null
      };
    default:
      return state;
  }    
}


