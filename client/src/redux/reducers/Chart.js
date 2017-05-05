import { fromJS } from 'immutable';

const GET_DATA = 'chart/GET_DATA';
const GET_DATA_SUCCESS = 'chart/GET_DATA_SUCCESS';
const GET_DATA_FAIL = 'chart/GET_DATA_FAIL';
const CLEAR_DATA = 'chart/CLEAR_DATA';
const CLEAR_DATA_SUCCESS = 'chart/CLEAR_DATA_SUCCESS';
const CLEAR_DATA_FAIL = 'chart/CLEAR_DATA_FAIL';
const ADD_DATA = 'chart/ADD_DATA';
const ADD_DATA_SUCCESS = 'chart/ADD_DATA_SUCCESS';
const ADD_DATA_FAIL = 'chart/ADD_DATA_FAIL';
const TEST = 'chart/TEST';

const initialState = fromJS({
  data: []
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case GET_DATA:
      return state.set('loading', true);
    case GET_DATA_SUCCESS:
      return state
        .set('data', fromJS(action.body.data))
        .delete('loading');
    case GET_DATA_FAIL:
      return state.delete('loading');

    case CLEAR_DATA:
      return state.set('loading', true);
    case CLEAR_DATA_FAIL:
      return state.delete('loading');
    case CLEAR_DATA_SUCCESS:
      return state.set('data', fromJS([]));

    case ADD_DATA:
      return state.set('uploading', true);
    case ADD_DATA_SUCCESS:
    case ADD_DATA_FAIL:
      return state.delete('uploading', true);

    case TEST:
      {
        let dz;
        try {
          dz = state.get('data').last().first();
        } catch (e) {
          dz = new Date().getTime();
        }
        return state.update('data', d => d.push(fromJS([dz + 86400000, ...action.payload])))
      }
    default:
      return state;
  }
}

export function getData() {
  return {
    types: [GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL],
    request: {
      method: 'GET',
      url: 'getAll'
    }
  }
}

export function clearAllData() {
  return {
    types: [CLEAR_DATA, CLEAR_DATA_SUCCESS, CLEAR_DATA_FAIL],
    request: {
      method: 'GET',
      url: 'clearAll'
    }
  }
}

export function addData(value) {
  return {
    types: [ADD_DATA, ADD_DATA_SUCCESS, ADD_DATA_FAIL],
    request: {
      method: 'POST',
      url: 'add',
      payload: { value }
    }
  }
}

export function test() {
  const value1 = Math.round(Math.random() * 3000) / 100;
  const value2 = Math.round(Math.random() * 3000) / 100;
  return {
    type: TEST,
    payload: [value1, value2]
  }
}