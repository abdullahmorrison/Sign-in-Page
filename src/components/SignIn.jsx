import GoogleSignIn from "./GoogleSignIn"
import EmailSignIn from "./EmailSignIn"

const SignIn = () =>{
    return (
        <div className="sign-in">
            <h1>Sign up to begin your adventure</h1>
            <p>Already a member? <a href="/">Login instead</a></p>
            <GoogleSignIn/>
            <p>or sign up with email</p>
            <EmailSignIn/>
        </div>
    )
}
export default SignIn