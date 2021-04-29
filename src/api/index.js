export const generateRobot = (ipAddress) =>
  `https://robohash.org/${ipAddress}.png?bgset=bg2`;

export const getIpAddress = () => fetch(`http://ip-api.com/json`);

export const getQuotes = (randomNumber) =>
  fetch(`
https://quotesondesign.com/wp-json/wp/v2/posts/?
orderby=rand&per_page=10&cacheBust=${randomNumber}
`);

export const getMapBoxStaticImg = (lat, lon, token) =>
  `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(-122.4033477,37.7904462)/${lon},${lat},10/500x500@2x?access_token=${token}`;

export const readThisQuoteApi = (quote) =>
  `http://api.voicerss.org/?key=0bb282d009b0476f9790b9b76954f35e&src=${quote}&hl=en-us`;
