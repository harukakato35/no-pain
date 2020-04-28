const ADD_PROFILE = 'ADD_PROFILE';

export function addProfile(profile) {
  return { type:ADD_PROFILE, profile };
}

const initialState = {
    profile:[
    {id:0,name:'James', Workplace:"Vancouver Physical Therapy", Location: "Vancouver", Type:"Physical therapy", 
    Special:"Jame’s medical special interests are in orthopedic physical therapy including manual and exercise therapy, injury prevention, and balance training."},
    {id:1,name:'Greg', Workplace:"Columbia Tech Center Clinic", Location: "Vancouver", Type:"Physical therapy", 
    Special:"He has taught Biomechanics and Kinesiology at Southern Oregon University, as well as published original research in the North American Journal of Sports Physical Therapy."},    
    ]
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ADD_PROFILE:
      return { 
        ...state, 
       profile:
       [...state.profile,
        {id: 2,
         name:action.profile,
         Workplace:action.profile,
         Location: action.profile,
         Type:action.profile,
         Special:action.profile,   
       }],
      };
    default:
      return state;
  }    
}