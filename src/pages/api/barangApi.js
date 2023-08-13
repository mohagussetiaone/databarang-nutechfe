import axios from "axios";
import barang from "../utils/data";

const getbarang = async () => {
  try {
    return barang;
  } catch (error) {
    return await error;
  }
};

const createbarang = async (payload) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/barang/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const updatebarang = async (payload) => {
  try {
    const result = await axios.put(`${process.env.URL_DOMAIN}/barang/${payload.id}`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const findOnebarang = async (id) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/barang/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const findData = async (id) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/barang/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deletebarang = async (id) => {
  try {
    const result = await axios.delete(`${process.env.URL_DOMAIN}/barang/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default {
  getbarang,
  createbarang,
  updatebarang,
  findOnebarang,
  findData,
  deletebarang,
};
