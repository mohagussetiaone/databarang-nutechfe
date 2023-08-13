import * as ActionBarang from "../constant/barangConstant";

export const GetBarangRequest = () => ({
  type: ActionBarang.GET_BARANG_REQUEST,
});

export const GetBarangSuccess = (payload) => ({
  type: ActionBarang.GET_BARANG_SUCCESS,
  payload,
});

export const GetBarangFailed = (payload) => ({
  type: ActionBarang.GET_BARANG_FAILED,
  payload,
});

export const AddBarangRequest = (payload) => ({
  type: ActionBarang.ADD_BARANG_REQUEST,
  payload,
});

export const AddBarangSuccess = (payload) => ({
  type: ActionBarang.ADD_BARANG_SUCCESS,
  payload,
});

export const AddBarangFailed = (payload) => ({
  type: ActionBarang.ADD_BARANG_FAILED,
  payload,
});

export const FindBarangRequest = (payload) => ({
  type: ActionBarang.FIND_BARANG_REQUEST,
  payload,
});

export const FindBarangSuccess = (payload) => ({
  type: ActionBarang.FIND_BARANG_SUCCESS,
  payload,
});

export const FindBarangFailed = (payload) => ({
  type: ActionBarang.FIND_BARANG_FAILED,
  payload,
});

export const EditBarangRequest = (payload) => ({
  type: ActionBarang.EDIT_BARANG_REQUEST,
  payload,
});

export const EditBarangSuccess = (payload) => ({
  type: ActionBarang.EDIT_BARANG_SUCCESS,
  payload,
});

export const EditBarangFailed = (payload) => ({
  type: ActionBarang.EDIT_BARANG_FAILED,
  payload,
});

export const DeleteBarangRequest = (payload) => ({
  type: ActionBarang.DEL_BARANG_REQUEST,
  payload,
});

export const DeleteBarangSuccess = (payload) => ({
  type: ActionBarang.DEL_BARANG_SUCCESS,
  payload,
});

export const DeleteBarangFailed = (payload) => ({
  type: ActionBarang.DEL_BARANG_FAILED,
  payload,
});
