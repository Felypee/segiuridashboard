import axios from "axios";

const metaApi = "https://graph.facebook.com/v18.0/";

export const getMetaUserPages = async (accessToken) => {
  try {
    const response = await axios.get(
      `${metaApi}/me/accounts?access_token=${accessToken}`
    );
    console.log("getMetaUserPages Response:  ", response);
  } catch (error) {
    throw error;
  }
};
