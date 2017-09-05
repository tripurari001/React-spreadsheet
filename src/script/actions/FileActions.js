import * as types from '../constants/ActionType';

const setFileName = name => ({
  type: types.SetFileName,
  name,
});

export default setFileName;
