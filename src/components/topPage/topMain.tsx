import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import pencil from '../../assets/images/pencil.jpg';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
      backgroundSize: 'cover',
      height: '100vh'
    }
  })
);

const TopMain: FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.background}></div>
  );
};

export default TopMain;