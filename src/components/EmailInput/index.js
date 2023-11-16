const EmailInput = ({submitted, emailErrors, setEmail, email}) => {
  return (
    <>
      <div style={{backgroundColor: submitted && emailErrors ? 'red' : 'transparent'}}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" onChange={(e) => setEmail(prev=>e.target.value)} value={email}></input>
      </div>

      <div className='error'>
        {submitted && emailErrors && `* ${emailErrors}`}
      </div>
    </>
  )
}

export default EmailInput;
