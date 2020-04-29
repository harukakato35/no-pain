const MAKE_APPOINTMENT = 'MAKE_APPOINTMENT';

export function addAppt(appointments) {
  return { type:MAKE_APPOINTMENT, appointments };
}

const initialState = {
    appointments:[
    {id:0, time:'2020/03/18/21:11'},
    {id:1, time:'2020/04/18/21:11'},
    ]
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case MAKE_APPOINTMENT:
      return { 
        ...state, 
        appointments:[...state.appointments,{id: 2, time:action.appointments}],
      };
    default:
      return state;
  }    
}
//action.appointment:addAppointmentで取得した値を放り込んでる