const { sendEmail } = require('./emailer');
const { scores, emails } = require('./data');

const notifyOfExamResults = () => {
  // your solution should be implementated here
  // console.log('data.scores', scores)
  // console.log('data.emails', emails)
};

//Capitalize la première lettre d'une string passé en paramètre
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = notifyOfExamResults;

