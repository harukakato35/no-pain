const MAKE_APPOINTMENT = 'MAKE_APPOINTMENT';

export function addAppt(appointment,appointments) {
  return { type:MAKE_APPOINTMENT, appointment, appointments };
}

const initialState = {
    appointment: '2020-03-25T21:11:54',
    appointments:[
    {id:0, time:'2020-03-18T21:11:54'},
    {id:1, time:'2020-04-18T21:11:54'},
    ]
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case MAKE_APPOINTMENT:
      return { 
        ...state, 
        appointment:action.appointment
      };
    default:
      return state;
  }    
}
//action.appointment:addAppointmentで取得した値を放り込んでる