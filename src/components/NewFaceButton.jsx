
import { useEffect } from "react";
import { fbLogin, getFacebookLoginStatus, initFacebookSdk } from "../utils/FacebookSdk";


  const FBInit = () => {
  useEffect(() => {
    console.log("Started use effect");
    initFacebookSdk().then(() => {
      getFacebookLoginStatus().then((response) => {
        if (response == null) {
          console.log("No login status for the person");
        } else {
          console.log(response);
        }
      });
    });
  }, [])



  const  login= ()=> {
    console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response);
      if (response.status === "connected") {
        console.log("Person is connected");
      } else {
        // something
      }
    });
  }



  return (
    <div class="fb-login-button" data-width="300" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"> <button onClick={login}>Login</button></div>

  );

}


export default FBInit;