import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { login } from "../context/auth_context";
import { tokens } from "../theme";

// export const getFacebookLoginStatus = () => {
//   return new Promise((resolve, reject) => {
//     window.FB.getLoginStatus((response) => {
//       resolve(response);
//     });
//   });
// };

export const FacebookBButton = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onLoginClick = async() =>
    await window.FB.login(
      function (response) {
        console.log("Response data: response");
        login(response.authResponse)
      },
      {
        config_id: "925321892284190",
      }
    );

  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "652064637073116",
        cookie: true,
        xfbml: true,
        version: "v18.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={onLoginClick}
          >
            Login with Facebook
          </Button>
        </Box> 
    </div>
  );
};
