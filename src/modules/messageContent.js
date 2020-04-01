const ADD_MESSAGE_CONTENT= 'ADD_MESSAGE_CONTENT';

const initialState = {
    message_contents: [],
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE_CONTENT:
      return { 
        ...state, 
        message_contents: null
      };
    default:
      return state;
  }    
}
