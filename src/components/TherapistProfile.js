import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addMyProfile } from '../modules/TherapistMyprofile';
import { push } from 'connected-react-router'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  top: {
    position:'fixed',
    left:18,
    top: 150,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
 
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addMyProfile(
            document.getElementById("Name").value,
            document.getElementById("Workplace").value,
            document.getElementById("Location").value,
            document.getElementById("Type").value,
            document.getElementById("Special").value,
        ));
        dispatch(push('/profile/complete')); 
    }
    

    
  return (
      <form>
        <React.Fragment>
        <br></br>
        <form  noValidate autoComplete="off">
          Name :<br></br><TextField id="Name" label="Type here" variant="outlined" />
        </form><br></br>
        <form noValidate autoComplete="off">
          Workplace :<br></br><TextField id="Workplace" label="Type here" variant="outlined" />
        </form><br></br>
        <form  noValidate autoComplete="off">
          Location :<br></br><TextField id="Location" label="Type here" variant="outlined" />
        </form><br></br>
        <form noValidate autoComplete="off">
          Type :<br></br><TextField id="Type" label="Type here" variant="outlined" />
        </form><br></br>
        <form noValidate autoComplete="off">
         Special :<br></br><TextField id="Special" label="Type here" variant="outlined" />
        </form><br></br>
          <Button variant="contained" onClick= {handleAdd} color="primary">
            Submit
          </Button>
        </React.Fragment>
      </form>
  );
}
// }//        dispatch(addMyProfile(
//             document.getElementById("Name").value,
//             document.getElementById("Workplace").value,
//             document.getElementById("Location").value,
//             document.getElementById("Type").value,
//             document.getElementById("Special").value,
//         )); 複数の値をdispatchする場合はこう書く。