const SEARCH_RESULT = 'SEARCH_RESULT';

export function searchResult(search) {
  return { type:SEARCH_RESULT, search };
}

const initialState = {
    search: []
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SEARCH_RESULT:
            return {
                ...state, 
                search: action.search //stateにはinitialStateが入っていて、5行目の中にcountが入ってるから
            }
    default:
      return state;
  }    
}

