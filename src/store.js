import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === "TOGGLE_TIMER") {
      return {
          ...state
      }
  }
  return state;
}

export default createStore(reducer,  {
  title: "Chrono 1",
  description: "Chrono de prueba 1",
  time: 0,
  active: false
});