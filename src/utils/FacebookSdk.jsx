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

  const onLoginClick = async() =>{
    const http = new XMLHttpRequest();
const clientId = '652064637073116';  // Reemplaza con tu ID de aplicación de Facebook
const redirectUri = 'https://segiuri.netlify.app';

// Construir la URL de inicio de sesión de Facebook
const facebookLoginUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}`;

// Configurar la solicitud
http.open('GET', facebookLoginUrl, true);

// Manejar la respuesta
http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    console.log(http.responseText);
    // Aquí puedes manejar la respuesta, por ejemplo, redirigir a la URL de Facebook
  }
};

// Enviar la solicitud
http.send();

  }
  
  //   await window.FB.login(
  //     function (response) {
  //       console.log(response);
  //     },
  //     {
  //       config_id: "233305346384438",
  //     }
  //   );

  // useEffect(() => {
  //   window.fbAsyncInit = () => {
  //     window.FB.init({
  //       appId: "652064637073116",
  //       cookie: true,
  //       xfbml: true,
  //       version: "v18.0",
  //     });
  //   };
  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = "https://connect.facebook.net/en_US/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, "script", "facebook-jssdk");
  // }, []);

  return (
    <div>
      <button onClick={onLoginClick}>Login with Facebook</button>
    </div>
  );
};
