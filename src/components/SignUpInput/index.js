const SignUpInput = ({setEmailSignup}) => {
  return (
    <>
      <div id="sign-up-email">
        <input id="emailnotify" type="checkbox" onChange={(e)=>setEmailSignup(prev => !prev)}></input>
        <label htmlFor="emailnotify">Sign up for email notifications</label>
      </div>
    </>
  )
};

export default SignUpInput;
