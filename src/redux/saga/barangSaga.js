import { call, put } from "redux-saga/effects";
import BarangApi from "../../../src/pages/api/barangApi";
import { GetBarangSuccess, GetBarangFailed, AddBarangSuccess, AddBarangFailed, FindBarangSuccess, FindBarangFailed, EditBarangSuccess, EditBarangFailed, DeleteBarangSuccess, DeleteBarangFailed } from "../action/barangAction.js";

function* handleGetBarang() {
  try {
    const result = yield call(BarangApi.getbarang);
    yield put(GetBarangSuccess(result));
  } catch (error) {
    yield put(GetBarangFailed(error));
  }
}

function* handleAddBarang(action) {
  const { payload } = action;
  try {
    const result = yield call(BarangApi.createbarang, payload);
    yield put(AddBarangSuccess(result.data));
  } catch (error) {
    yield put(AddBarangFailed(error));
  }
}

function* handleFindBarang(action) {
  const { payload } = action;
  try {
    const result = yield call(BarangApi.findOnebarang, payload);
    yield put(FindBarangSuccess(result));
  } catch (error) {
    yield put(FindBarangFailed(error));
  }
}

function* handleEditBarang(action) {
  const { payload } = action;
  try {
    const result = yield call(BarangApi.updatebarang, payload);
    yield put(EditBarangSuccess(result.data));
  } catch (error) {
    yield put(EditBarangFailed(error));
  }
}

function* handleDeleteBarang(action) {
  const { payload } = action;
  try {
    const result = yield call(BarangApi.deletebarang, payload);
    yield put(DeleteBarangSuccess(result.data));
  } catch (error) {
    yield put(DeleteBarangFailed(error));
  }
}

export { handleGetBarang, handleAddBarang, handleFindBarang, handleEditBarang, handleDeleteBarang };
