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
    float1: {
    position:'fixed',
    left:0,
    top:250,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    float2: {
    position:'fixed',
    left:0,
    top:350,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    float3: {
    position:'fixed',
    left:0,
    top:450,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    float4: {
    position:'fixed',
    left:0,
    top:550,
    padding: theme.spacing(2),
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
        <form className={classes.top} noValidate autoComplete="off">
          Name :<TextField id="Name" label="Type here" variant="outlined" />
        </form>
        <form className={classes.float1} noValidate autoComplete="off">
          Workplace :<TextField id="Workplace" label="Type here" variant="outlined" />
        </form>
        <form className={classes.float2} noValidate autoComplete="off">
          Location :<TextField id="Location" label="Type here" variant="outlined" />
        </form>
        <form className={classes.float3} noValidate autoComplete="off">
          Type :<TextField id="Type" label="Type here" variant="outlined" />
        </form>
        <form className={classes.float4} noValidate autoComplete="off">
         Special :<TextField id="Special" label="Type here" variant="outlined" />
        </form>
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