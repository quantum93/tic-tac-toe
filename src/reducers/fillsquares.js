const fillSquaresReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILL_SQUARES':
      return state = {squares: Array(9).fill(null)}
    default:
      return state;

  }
}
export default fillSquaresReducer;
