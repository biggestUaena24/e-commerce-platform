import {
  auth,
  SignInWithGoogle,
  createUserDocument,
} from "../../utils//firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import Button from "../../components/button/button.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGoogle();
    const userDocRef = await createUserDocument(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button onClick={logGoogleUser} buttonType="google">
        Sign In with Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
