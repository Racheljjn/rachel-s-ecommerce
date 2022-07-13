import SignupForm from "../components/sign-up-form/SignupForm";
import SigninForm from "../components/sign-in-form/SigninForm";
import "./authentication.styles.scss"

const Authentication = () => {
  

  return (
    <div className="authentication-container">
      <SigninForm/>
      <SignupForm/>
    </div>
  );
};

export default Authentication;