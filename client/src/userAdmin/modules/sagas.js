import { call, put, takeLatest, select } from "redux-saga/effects";
import { getAllUsers, createNewUser, removeUser, updateUser } from "./api";
import {
  usersReceived,
  loadUsers,
  createUser,
  getUserAdminState,
  userCreated,
  deleteUser,
  editUser,
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
      userData: { ...payload },
    } = yield select(getUserAdminState);

    const res = yield call(createNewUser, payload);
    yield put(userCreated(res));
  } catch (e) {
    yield put(console.log(e));
  }
}

function* deleteUserSaga({ payload: id }) {
  try {
    yield call(removeUser, id);
  } catch (e) {
    yield put(console.log(e));
  }
}

function* editUserSaga({ payload }) {
  try {
    const { id, ...rest } = payload;
    console.log(id, "saga");
    console.log(rest, "rest");
    // console.log(rest, "rest");
    yield call(updateUser, id, rest);
  } catch (e) {
    yield put(console.log(e));
  }
}

function* usersSaga() {
  yield takeLatest(loadUsers.toString(), getUsersSaga);
  yield takeLatest(createUser.toString(), createUserSaga);
  yield takeLatest(deleteUser.toString(), deleteUserSaga);
  yield takeLatest(editUser.toString(), editUserSaga);
}

export default usersSaga;
