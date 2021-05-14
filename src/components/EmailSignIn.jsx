const EmailSignIn = () =>{
    return(
        <form>
            <label>Email</label>
            <input type="email" required/>

            <label>Password (min. 8 characters)</label>
            <input type="password" required/>
    
            <input type="checkbox" required/>
            <label>I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></label>

            <input type="submit" value="Get Started"/>
        </form>
    )
}
export default EmailSignIn