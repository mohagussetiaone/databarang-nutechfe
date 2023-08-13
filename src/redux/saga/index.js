import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeBarang from "../constant/barangConstant";
import { handleGetBarang, handleAddBarang, handleFindBarang, handleEditBarang, handleDeleteBarang } from "../saga/barangSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeBarang.GET_BARANG_REQUEST, handleGetBarang),
    takeEvery(ActionTypeBarang.ADD_BARANG_REQUEST, handleAddBarang),
    takeEvery(ActionTypeBarang.FIND_BARANG_REQUEST, handleFindBarang),
    takeEvery(ActionTypeBarang.EDIT_BARANG_REQUEST, handleEditBarang),
    takeEvery(ActionTypeBarang.DEL_BARANG_REQUEST, handleDeleteBarang),
  ]);
}

export default watchAll;
