const WRITE_A_REVIEW = 'WRITE_A_REVIEW';

export function writeReview(review) {
  return { type:WRITE_A_REVIEW, review };
}

const initialState = {
    review: []
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case WRITE_A_REVIEW:
            return {
                ...state, 
                review: action.review //stateにはinitialStateが入っていて、5行目の中にcountが入ってるから
            }
    default:
      return state;
  }    
}