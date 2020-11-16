import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import pencil from '../../assets/images/pencil.jpg';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
      backgroundSize: 'cover',
      height: '100vh'
    },
    paper: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      top: '33%',
      width: '45%'
    }
  })
);

const TopMain: FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.background}>
      <Paper className={classes.paper}>犬</Paper>
    </div>
  );
};

export default TopMain;