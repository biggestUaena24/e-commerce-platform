import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  SignInWithGoogle,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const FormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(FormField);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const { user } = await SignInWithGoogle();
    const userDocRef = await createUserDocument(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(FormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signAuthUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password for email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          alert(error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="">
            Sign In
          </Button>
          <Button type="button" onClick={logGoogleUser} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
