import { FILTER_TYPE } from '../actions/action-types';

const filterTypeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FILTER_TYPE:
      return { ...state, filter_type: payload };
    default:
      return state;
  }
};

export default filterTypeReducer;
