import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CustomGrid = () => {
  const classes = useStyles();

  const FormRow = () => {
    return (
      <React.Fragment>
        <Grid item xs={50}>
          <Paper className={classes.paper}>
            <img
              width="150px"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Kenyan_E-passport.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={50}>
          <Paper className={classes.paper}>
            <img
              width="150px"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Kenyan_E-passport.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={50}>
          <Paper className={classes.paper}>
            <img
              width="150px"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Kenyan_E-passport.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={50}>
          <Paper className={classes.paper}>
            <img
              width="150px"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Kenyan_E-passport.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={50}>
          <Paper className={classes.paper}>
            <img
              width="150px"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Kenyan_E-passport.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={50}>
          <Paper className={classes.paper}>
            <img
              width="150px"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Kenyan_E-passport.jpg"
            />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomGrid;
