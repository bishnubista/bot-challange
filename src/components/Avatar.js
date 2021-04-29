import React from 'react';
import { useSelector } from 'react-redux';

import { Image } from './Image';
import { generateRobot } from '../api';

export function Avatar() {
  const [imgUrl, setImgUrl] = React.useState('');
  const { usersIp } = useSelector((state) => state.idAddress);

  React.useEffect(() => {
    if (usersIp) {
      const url = generateRobot(usersIp);
      setImgUrl(url);
    }
  }, [usersIp]);

  return (
    <div>
      {imgUrl && (
        <Image imgSrc={imgUrl} alt='robot avatar' width='70px' height='70px' />
      )}
    </div>
  );
}

export default Avatar;
