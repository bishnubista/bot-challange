import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import * as mq from '../styles/mediaQueries';
import { getMapBoxStaticImg } from '../api';
import { Image } from './Image';

// const token =
//   'pk.eyJ1IjoiYmlzdGFnIiwiYSI6ImNrbnM3MG9vbjAxNHoyb252bGk1OXYxYW4ifQ.dGAxQrkE4MX7Pr07_rUdOg';
const tokens = process.env.REACT_APP_MAP_KEY;

const StyledMapBox = styled.div`
  display: flex;
  justify-content: center;
`;

const styledProps = {
  width: '85vw',
  height: '55vh',
  [`@media ${mq.small}`]: {
    width: '85vw',
    height: '40vh',
  },
};

export function MapBox() {
  const [imgUrl, setImgUrl] = React.useState('');
  const { lat, lon } = useSelector((state) => state.idAddress);

  React.useEffect(() => {
    if (lat && lon && tokens) {
      const url = getMapBoxStaticImg(lat, lon, tokens);
      setImgUrl(url);
    }
  }, [lat, lon]);

  return (
    <StyledMapBox>
      {imgUrl && (
        <Image imgSrc={imgUrl} alt='map box' styledProps={styledProps} />
      )}
    </StyledMapBox>
  );
}

export default MapBox;
