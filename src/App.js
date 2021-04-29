import React from 'react';
import styled from 'styled-components';

import { Header, Avatar, Quote } from './components';
import { fetchIpAddress } from './actions/fetchIpAddress';
import { useDispatch } from 'react-redux';

const MapBoxL = React.lazy(() =>
  import(/* webpackPrefetch: true */ './components/MapBox')
);

const StyledApp = styled.div.attrs({
  tabIndex: -1,
})`
  padding: 0;
  margin: 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0;
`;

const StyledWrapperAvatar = styled.div`
  position: absolute;
  top: 50px;
  left: 10px;
`;

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIpAddress());
  }, [dispatch]);

  return (
    <StyledApp>
      <Header>Quote Bot</Header>
      <StyledContainer>
        <StyledWrapperAvatar>
          <Avatar />
        </StyledWrapperAvatar>
        <Quote />

        <React.Suspense fallback={<div>Loading Mapbox</div>}>
          <MapBoxL />
        </React.Suspense>
      </StyledContainer>
    </StyledApp>
  );
}

export default App;
