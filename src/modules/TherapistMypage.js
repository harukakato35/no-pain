const ANSWER_TO_ADVICE = 'ANSWER_TO_ADVICE';

const initialState = {
    therapistmypage: []
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ANSWER_TO_ADVICE:
      return { 
        ...state, 
        therapistmypage: null
      };
    default:
      return state;
  }    
}