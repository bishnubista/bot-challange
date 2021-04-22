import React from 'react';
import { useSelector } from 'react-redux';
import { getMapBoxStaticImg } from '../api';
import { Image } from './Image';
const token =
  'pk.eyJ1IjoiYmlzdGFnIiwiYSI6ImNrbnM3MG9vbjAxNHoyb252bGk1OXYxYW4ifQ.dGAxQrkE4MX7Pr07_rUdOg';

export function MapBox() {
  const [imgUrl, setImgUrl] = React.useState('');
  const { lat, lon } = useSelector((state) => state.idAddress);
  // const token = process.env.REACT_MAP_KEY;

  React.useEffect(() => {
    const url = getMapBoxStaticImg(lat, lon, token);
    setImgUrl(url);
  }, [lat, lon]);

  return (
    <div style={{ margin: '2px auto', maxWidth: '90%' }}>
      <Image
        imgSrc={imgUrl}
        alt='map box'
        style={{ width: '335px', height: '350px' }}
      />
    </div>
  );
}
