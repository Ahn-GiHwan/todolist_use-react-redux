import axios from "axios";
import { push } from "connected-react-router";
import { put, delay, call, takeEvery } from "redux-saga/effects";
// action type define

// 깃헙 API 호출을 시작하는 것을 의미
const GET_USERS_START = "react-redux/users/GET_USERS_START";

// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
const GET_USERS_SUCCESS = "react-redux/users/GET_USERS_SUCCESS";

// 깃헙 API 호출에 대한 응답이 실패한 경우
const GET_USERS_FAIL = "react-redux/users/GET_USERS_FAIL";

// Promise
const GET_USERS = "react-redux/users/GET_USERS";

// promise middleware가 자동으로 생성하는 action
export const GET_USERS_PENDING = "react-redux/users/GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "react-redux/users/GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "react-redux/users/GET_USERS_REJECTED";

// action create function

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}
export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// initial value
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// reducer
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...initialState,
      loading: true,
      error: null,
    };
  }

  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...initialState,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...initialState,
      loading: false,
      data: action.payload,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...initialState,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_USERS_REJECTED) {
    return {
      ...initialState,
      loading: false,
      error: action.payload,
    };
  }
  return state;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// redux-thunk
export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      // sleep
      await sleep(2000);
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
      history.push("/");
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// redux-promise-middleware
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}

// redux-saga

const GET_USERS_SAGA_START = "GET_USERS_SAGA_START";

function* getUsersSaga(action) {
  try {
    yield put(getUsersStart());
    // sleep
    yield delay(2000);
    const res = yield call(axios.get, "https://api.github.com/users");
    yield put(getUsersSuccess(res.data));
    yield put(push("/"));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

export function getUsersSagaStart() {
  return {
    type: GET_USERS_SAGA_START,
  };
}

export function* usersSaga() {
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}
