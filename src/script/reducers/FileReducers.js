import * as types from '../constants/ActionType';

function FileNameReduicer(state = 'Untitled Spradesheet', action) {
  switch (action.type) {
    case types.SetFileName:
      return action.name;
    default:
      return state;
  }
}

export default FileNameReduicer;
