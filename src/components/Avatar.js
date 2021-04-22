import React from 'react';
import { useSelector } from 'react-redux';

import { Image } from './Image';
import { generateRobot } from '../api';
export function Avatar() {
  const [imgUrl, setImgUrl] = React.useState('');
  const { usersIp } = useSelector((state) => state.idAddress);

  React.useEffect(() => {
    const url = generateRobot(usersIp);
    setImgUrl(url);
  }, [usersIp]);

  return (
    <div>
      <Image
        imgSrc={imgUrl}
        alt='robot avatar'
        style={{ width: '100px', height: '100px' }}
      />
    </div>
  );
}
