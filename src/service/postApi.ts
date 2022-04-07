import axiosClient from "./axiosClient";

export const getPost = async () => {
    const url = '/post';
    return await axiosClient.get(url);
}