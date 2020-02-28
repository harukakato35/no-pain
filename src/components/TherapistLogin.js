import React from "react"; 
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TherapistLogin = () => {

  return (
  <div>
    <div>
      <Button variant="contained" color="secondary">
          <Link to="/therapist/login">Therapist Login</Link>
      </Button>    
    </div>
  </div>
  );
};

export default TherapistLogin;
