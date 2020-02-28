import React from "react"; 
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const PatientLogin = () => {

  return (
  <div>
    <div>
      <Button variant="contained" color="secondary">
          <Link to="/login">User Login</Link>
      </Button>    
    </div>
  </div>
  );
};

export default PatientLogin;

