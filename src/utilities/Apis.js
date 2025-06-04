import axios from "axios";
import { toast } from "react-toastify";
//http://62.72.35.44:3001/api/v1/law
export const baseUrl = import.meta.env.VITE_API_URL;

export async function updateUserbyId(reqData, token) {
  const formData = new FormData();

  if (reqData.image) {
    formData.append("image", reqData.image);
  }
  formData.append("name", reqData.name);
  formData.append("email", reqData.email);
  formData.append("location", reqData.location);
  formData.append("phone", reqData.phone);
  // formData.append("birthDate", reqData.birthDate);
  const res = await axios
    .put(`${baseUrl}/user`, formData, {
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
export async function getCategories(token) {
  const res = await axios
    .get(`${baseUrl}/category`, {
      headers: { token },
    })
    .catch((err) => toast.error(err.response.data.message));
  return res.data;
}
export async function getVaiolations(token, categories) {
  const res = await axios
    .post(
      `${baseUrl}/vaiolation/vaiolationList`,
      { categories: categories },
      {
        headers: { token },
      }
    )
    .catch((err) => toast.error(err.response.data.message));
  return res.data;
}
export async function sendAnswers(token, payload) {
  const res = await axios.post(`${baseUrl}/response/sendAnswers`, payload, {
    headers: { token },
  });

  return res.data;
}
export async function getAnswers(token) {
  const res = await axios.get(`${baseUrl}/response/getAnswers`, {
    headers: { token },
  });

  return res.data;
}
export async function surveys(token) {
  const res = await axios
    .get(`${baseUrl}/response/surveys`, {
      headers: { token },
    })
    .catch((err) => toast.error(err.response.data.message));
  return res.data;
}
export async function surveysById(token, id) {
  const res = await axios
    .get(`${baseUrl}/response/surveys/${id}`, {
      headers: { token },
    })
    .catch((err) => toast.error(err.response.data.message));
  return res.data;
}
export async function UpdatesurveysById(token, data) {
  const payload = data?.map((ele) => ({
    responseId: ele.responseId,
    answer: ele.answer,
    status: ele.status,
  }));
  const res = await axios.put(`${baseUrl}/response/update/`, payload, {
    headers: { token },
  });

  return res.data;
}

export const getBranches = async (token) => {
  const response = await axios.get(`${baseUrl}/branch`, {
    headers: {
      token,
    },
  });
  return response.data.data;
};

export const addBranch = async (branchData, token) => {
  const formData = new FormData();
  formData.append("name", branchData.name);
  formData.append("location", branchData.location);
  formData.append("image", branchData.image);
  // formData.append("description", branchData.description);
  const response = await axios.post(`${baseUrl}/branch`, formData, {
    headers: {
      token,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
