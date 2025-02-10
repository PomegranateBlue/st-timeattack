const initialState = {
  message: "",
};

const SET_MESSAGE = "SET_MESSAGE";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default messageReducer;
