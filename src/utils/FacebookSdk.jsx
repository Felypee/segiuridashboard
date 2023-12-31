import { useEffect, useState } from "react";

// export const getFacebookLoginStatus = () => {
//   return new Promise((resolve, reject) => {
//     window.FB.getLoginStatus((response) => {
//       resolve(response);
//     });
//   });
// };

export const FacebookBButton = () => {
  // const [isLoggedin, setIsLoggedin] = useState(false);

  const onLoginClick = async() =>
    await window.FB.login(
      function (response) {
        console.log(response);
      },
      {
        config_id: "6854044498033268",
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
      <button onClick={onLoginClick}>Login with Facebook</button>
    </div>
  );
};
