const News = require('./News');
const Publisher = require('./Publisher')

const toi = new Publisher('Times of India');
const mint = new Publisher('Mint');

const sports = new News('sports');
const weather = new News('weather');

sports.subscribe(toi);
sports.subscribe(mint);

weather.subscribe(mint);

sports.publish([
  'IPL is set for 10th season',
  'ISL is getting ready for 5th season'
]);
weather.publish('Global warming is affecting the temperature');

