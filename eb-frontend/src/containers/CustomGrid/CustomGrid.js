import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './CustomGrid.module.css';
import { Button, Modal } from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import _ from 'lodash';
import { PASSPORTS, CONTINENTS } from '../../constants';

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
  const [open, setOpen] = useState(false);
  const [selectedPassport, setSelectedPassport] = useState({});
  const classes = useStyles();

  const handleOpenModal = (passport) => {
    setSelectedPassport(passport);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedPassport({});
    setOpen(false);
  };

  const FormRow = ({ passports }) => {
    return (
      <>
        {_.map(passports, (passport) => (
          <Grid item xs={12} md={2} key={passport.key} style={{ height: 250 }}>
            <Button>
              <Paper className={classes.paper}>
                <img
                  className={styles.image}
                  src={passport.image}
                  alt={passport.text}
                  onClick={() => handleOpenModal(passport)}
                />
              </Paper>
            </Button>
          </Grid>
        ))}
      </>
    );
  };

  const flattenPassports = _.flatten(PASSPORTS);
  const lastIndex = flattenPassports[flattenPassports.length - 1].index;

  const goToPreviousPassport = () => {
    const { index } = selectedPassport;
    setSelectedPassport(flattenPassports[index - 1]);
  };

  const goToNextPassport = () => {
    const { index } = selectedPassport;
    setSelectedPassport(flattenPassports[index + 1]);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {_.map(CONTINENTS, (continent, index) => (
          <React.Fragment key={_.uniqueId('continent_')}>
            <h1>{continent}</h1>
            <Grid container item xs={12} spacing={3} md={12}>
              <FormRow passports={PASSPORTS[index]} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <Modal
        className={styles.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <div className={styles.modalBackground} />
          {selectedPassport.index !== 0 && (
            <button className={styles.prevBtn} onClick={goToPreviousPassport}>
              Prev
            </button>
          )}
          <div className={styles.modalContent}>
            <img
              width="180px"
              src={selectedPassport.image}
              alt={selectedPassport.text}
            />
          </div>
          {selectedPassport.index !== lastIndex && (
            <button className={styles.nextBtn} onClick={goToNextPassport}>
              Next
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CustomGrid;
