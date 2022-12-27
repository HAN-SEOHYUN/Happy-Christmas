import { ResData } from "./../components/AlertCard";
import { Message } from "./../pages/DetailMessage";
import { AxiosResponse } from "axios";
import axiosInst from "../../src/apis";
import { confirm } from "../pages/HomePage";
import axios from "axios";

export const getMessageById = async (id: number): Promise<Message> => {
  try {
    const res = await axios.get<AxiosResponse<Message, Error>>(
      `http://localhost:4000/api/from/${id}`
    ); 
    return res.data.data; 
  } catch (err) {
    throw new Error();
  }
};

export const getCountByName = async (recipient: string): Promise<confirm> => {
  try {
    const res = await axiosInst.get<AxiosResponse<confirm, Error>>(
      `/from/recipient/${recipient}`
    );
    return res.data.data;
  } catch (err) {
    throw new Error();
  }
};

export const postToSian = (sender: string, message: string): void => {
  try {
    axiosInst.post("/to/", {
      sender: sender,
      message: message,
    });
  } catch (err) {
    throw new Error();
  }
};

export const checkPwd = async (
  recipient: string,
  pwd: string
): Promise<ResData> => {
  try {
    const res = await axiosInst.post<AxiosResponse<ResData, Error>>("/from/", {
      recipient: recipient,
      pwd: pwd,
    });
    return res.data.data;
  } catch (err) {
    throw new Error();
  }
};

// export const getMessageById = async (id: number): Promise<Message> => {
//   try {
//     const res = await axiosInst.get<AxiosResponse<Message, Error>>(
//       `/from/${id}`
//     ); //promise
//     return res.data.data; //success : Message 반환
//   } catch (err) {
//     throw new Error(); //
//   }
// };
