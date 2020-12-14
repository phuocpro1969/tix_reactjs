function getTimeShowTime(dataDate) {
  return {
    type: "GET_TIME_SHOW_TIME",
    payload: dataDate,
  };
}
function showTimeOnMenu(data) {
  return {
    type: "SHOW_TIME_ON_MENU",
    payload: data,
  };
}
function getCodeShowTime(data) {
  return {
    type: "GET_CODE_SHOW_TIME",
    payload: data,
  };
}
export { getCodeShowTime };
export { showTimeOnMenu };
export { getTimeShowTime };
