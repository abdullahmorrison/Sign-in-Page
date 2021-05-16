const EmailSignIn = () =>{
    return(
        <form className="sign-in__email">
            <label>Email</label>
            <input type="email" required/>

            <label>Password (min. 8 characters)</label>
            <input type="password" minLength="8" required/>

            <div>
                <input type="checkbox" required/>
                <label>I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></label>
            </div>

            <input type="submit" value="Get Started"/>
        </form>
    )
}
export default EmailSignIn