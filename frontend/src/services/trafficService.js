import axios from "axios";

export const getSignalTime = async (density, waitingTime) => {
  const res = await axios.post("http://localhost:8082/api/traffic", {
    density,
    waitingTime
  });

  return res.data;
};