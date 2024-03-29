import * as ActionTypeBarang from "../constant/barangConstant";

const init_state = {
  barangs: [],
  barang: [],
};

const BarangReduce = (state = init_state, action) => {
  switch (action.type) {
    case ActionTypeBarang.GET_BARANG_SUCCESS:
      return GetBarang(state, action);
    case ActionTypeBarang.ADD_BARANG_REQUEST:
      return { ...state };
    case ActionTypeBarang.ADD_BARANG_SUCCESS:
      return AddBarang(state, action);
    case ActionTypeBarang.FIND_BARANG_REQUEST:
      return { ...state };
    case ActionTypeBarang.FIND_BARANG_SUCCESS:
      return FindBarang(state, action);
    case ActionTypeBarang.EDIT_BARANG_REQUEST:
      return { ...state };
    case ActionTypeBarang.EDIT_BARANG_SUCCESS:
      return EditBarang(state, action);
    case ActionTypeBarang.DEL_BARANG_REQUEST:
      return { ...state };
    case ActionTypeBarang.DEL_BARANG_SUCCESS:
      return DeleteBarang(state, action);
    default:
      return { ...state };
  }
};

const GetBarang = (state, action) => {
  return {
    ...state,
    barangs: action.payload,
  };
};

const AddBarang = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    barangs: [...state.barangs, payload],
  };
};

const FindBarang = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    barang: payload,
  };
};

const EditBarang = (state) => {
  return {
    ...state,
  };
};

const DeleteBarang = (state) => {
  return {
    ...state,
  };
};

export default BarangReduce;
