import axios from "axios";

const metaApi = "https://graph.facebook.com/v18.0/";

export const getMetaUserPages = async (accessToken, userId) => {
  try {
    const response = await axios.get(
      `${metaApi}/userId/accounts?access_token=${accessToken}`
    );
    console.log("getMetaUserPages Response:  ", response.data.data[0]);

    const responseSaved = await axios.post(
      `https://facebookaichat.fly.dev/savePageInfo`,
      response.data.data[0]
    );
  } catch (error) {
    throw error;
  }
};
