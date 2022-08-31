/**
 * Function to calculate local time
 * in a different city given the city's timezone
 */
import moment from 'moment-timezone';

function convertDateTimeToNewTimeZone(date: Date, timezone: string) {
  const formatedDate = moment(date)
    .tz(timezone)
    .format('dddd, MMM. Do @ h:mma');

  return formatedDate;
}

export default convertDateTimeToNewTimeZone;
