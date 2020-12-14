function showDateOnMenu(data) {
  return {
    type: "SHOW_DATE_ON_MENU",
    payload: data,
  };
}
export { showDateOnMenu };
function resetTimeByDate(status) {
  return {
    type: "RESET_TIME_BY_DATE",
    status: status,
  };
}
export { resetTimeByDate };
