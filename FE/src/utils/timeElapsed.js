export const getTimeElapsed = (date) => {
  const currentTime = new Date();
  const secondsInMs = 1000;
  const timeDifference = (currentTime - new Date(date)) / secondsInMs;
  const timeOptions = {
    seconds: 1,
    minutes: 60,
    hours: 60 * 60,
    days: 60 * 60 * 24,
    weeks: 60 * 60 * 24 * 7
  };

  const timeTextOptions = {
    seconds: '초 전',
    minutes: '분 전',
    hours: '시간 전',
    days: '일 전',
    weeks: '주 전'
  };

  let timeUnit = '';
  if (timeDifference < timeOptions.minutes) {
    timeUnit = 'seconds';
  } else if (timeDifference < timeOptions.hours) {
    timeUnit = 'minutes';
  } else if (timeDifference < timeOptions.days) {
    timeUnit = 'hours';
  } else if (timeDifference < timeOptions.weeks) {
    timeUnit = 'days';
  } else if (timeDifference < timeOptions.weeks * 4) {
    timeUnit = 'weeks';
  } else {
    return new Date(date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long'
    });
  }

  const elapsedTime = Math.floor(timeDifference / timeOptions[timeUnit]);
  return `${elapsedTime}${timeTextOptions[timeUnit]}`;
};
