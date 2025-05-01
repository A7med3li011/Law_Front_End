import axios from "axios";
import { toast } from "react-toastify";

export const baseUrl = "http://localhost:3001/api/v1/law/user";

export async function updateUserbyId(reqData, token) {
  const formData = new FormData();

  if (reqData.image) {
    formData.append("image", reqData.image);
  }
  formData.append("name", reqData.name);
  formData.append("email", reqData.email);
  formData.append("location", reqData.location);
  formData.append("phone", reqData.phone);
  formData.append("birthDate", reqData.birthDate);
  const res = await axios
    .put(`${baseUrl}/`, formData, {
      headers: { token },
    })
    // .then((res) => toast.success("user Image updated successfully"))
    .catch((err) => toast.error(err.response.data.message));

  return res.data;
}
export async function createSupport(reqData, token) {
  const formData = new FormData();
  if (reqData.attach) {
    formData.append("attach", reqData.attach);
  }
  if (reqData.message) {
    formData.append("message", reqData.message);
  }
  formData.append("fname", reqData.fname);
  formData.append("lname", reqData.lname);
  formData.append("type", reqData.type);
  formData.append("phone", reqData.phone);
  formData.append("senderEmail", reqData.senderEmail);
  const res = await axios
    .post(`${baseUrl}/support`, formData, {
      headers: { token },
    })
    .catch((err) => toast.error(err.response.data.message));
  return res.data;
}
