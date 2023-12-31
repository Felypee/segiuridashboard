import ReactFacebookLogin from "react-facebook-login";

export const FacebookButton = ()=>{


    const state = {
        userId: "",
        email: "",
        isLoggedId: "",
        picture: "",
        token: ""
    }

    const responseFacebook = (response) => {
        console.log(response);
      }


      const componentClicked = (response) => {
        console.log(response);
      }
    return (
        <ReactFacebookLogin
        appId="233305346384438"
        autoLoad={true}
        onClick={componentClicked}
        
        callback={responseFacebook} />
    )
}