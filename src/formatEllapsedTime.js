import moment from 'moment';

const formatEllapsedTime = ({start, end}) => {
  const text = moment(start).from(moment(end));
  return text;
};

export default formatEllapsedTime;