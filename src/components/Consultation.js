import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export default function Consultation() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Whad do you want to ask?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Title"
            name="Title"
            label="Title"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            required
            id="Inquiry"
            name="Inquiry"
            label="Inquiry"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary">
        <Link to="/consultation/complete">
          Next
        </Link>
      </Button>
    </React.Fragment>
  );
}