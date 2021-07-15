import { call, put, takeLatest, select } from "redux-saga/effects";
import { getAllUsers, createNewUser } from "./api";
import {
  usersReceived,
  loadUsers,
  createUser,
  getUserAdminState,
  userCreated,
} from ".";

function* getUsersSaga() {
  try {
    const data = yield call(getAllUsers);
    yield put(usersReceived(data));
  } catch (e) {
    yield put(console.log(e));
  }
}

function* createUserSaga() {
  try {
    const {
      userData: { ...data },
    } = yield select(getUserAdminState);

    const payload = {
      data,
    };
    console.log(payload, "payload");
    const res = yield call(createNewUser, payload);
    yield put(userCreated({ ...res.data }));
  } catch (e) {
    yield put(console.log(e));
  }
}

function* usersSaga() {
  yield takeLatest(loadUsers.toString(), getUsersSaga);
  yield takeLatest(createUser.toString(), createUserSaga);
}

export default usersSaga;
