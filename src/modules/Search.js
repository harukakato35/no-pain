const SEARCH_RESULT = 'SEARCH_RESULT';

const initialState = {
    search: []
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SEARCH_RESULT:
      return { 
        ...state, 
        search: null
      };
    default:
      return state;
  }    
}


