export const getTimeFormat = time => {
  const d = time
    .slice(0, 10)
    .split("-")
    .join("/");
  const hour = parseInt(time.slice(11, 13)) - 12;
  if (hour < 0) {
    return `${d}, ${time.slice(11, 20)} AM`;
  } else if (hour < 10) {
    return `${d}, 0${hour}${time.slice(13, 20)} PM`;
  } else {
    return `${d}, ${hour}${time.slice(13, 20)} PM`;
  }
};
