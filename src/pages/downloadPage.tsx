import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import firebase from '../firebase';
import TopHeader from '../components/topPage/topHeader';
import { Params, TileData } from '../types/types';

const useStyles = makeStyles(() => {
  createStyles({});
});

const DownloadPage: FC = () => {
  const { keyword } = useParams<Params>();
  const classes = useStyles();
  const [data, setData] = useState<TileData[]>([]);

  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection('tileData');
    const searchedData = tileDataRef.where('keyword', 'array-contains', searchWord);
    const snapShot = await searchedData.get();
    const temporaryData: object[] = [];

    snapShot.docs.map(doc => {
      temporaryData.push(doc.data());
    });

    setData(temporaryData as TileData[]);
  };

  useEffect(() => {
    getData(keyword);
  }, []);

  const displayImage = () => {
    return (
      <div>
        {data.map((tile) => (
          <div>
            <img src={tile.image} alt={tile.title} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      {displayImage()}
    </div>
  );
};

export default DownloadPage;