const ADD_INQUIRY_CONTENTS= 'ADD_INQUIRY_CONTENTS';
const ADD_TITLE_CONTENTS= 'ADD_TITLE_CONTENTS';

const initialState = {
    title_contents: [],
    title_contents:[]
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ADD_INQUIRY_CONTENTS:
      return { 
        ...state, 
        inquiry_contents: null
      };
    case ADD_TITLE_CONTENTS:
      return { 
        ...state, 
        title_contents: null
      };
    default:
      return state;
  }    
}
