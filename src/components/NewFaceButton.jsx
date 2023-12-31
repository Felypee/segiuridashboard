
// import { useEffect } from "react";
// import { fbLogin, getFacebookLoginStatus, initFacebookSdk } from "../utils/FacebookSdk";


//   const FBInit = () => {
//   useEffect(() => {
//     console.log("Started use effect");
//     initFacebookSdk().then(() => {
//         console.log("initFacebookSdk ", response);
//       getFacebookLoginStatus().then((response) => {
//         console.log("getFacebookLoginStatus ", response);
//         if (response == null) {
//           console.log("No login status for the person");
//         } else {
//           console.log(response);
//         }
//       });
//     });
//   }, [])



//   const  login= ()=> {

//     fbLogin();
//   }



//   return (
//     <div class="fb-login-button" data-width="300" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"> <button onClick={login}>Login</button></div>

//   );

// }


// export default FBInit;