import React, { FC, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { IconButton, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
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
    },
    inputBase: {
      width: '80%'
    }
  })
);

const TopMain: FC = () => {
  const classes = useStyle();
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const handleSubmit = () => {
    history.push('/search/' + keyword);
  };
  return (
    <div className={classes.background}>
      <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
        <IconButton type="submit">
          <Search />
        </IconButton>
        <InputBase
          className={classes.inputBase}
          placeholder="検索する文字列を入力してください"
          onChange={handleChange}
        />
      </Paper>
    </div>
  );
};

export default TopMain;