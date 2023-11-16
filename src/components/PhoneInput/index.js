const PhoneInput = ({ submitted, phoneErrors, setPhone, phone}) => {
  return (
    <>
      <div style={{backgroundColor: submitted && phoneErrors ? 'red' : 'transparent'}}>
        <label htmlFor="phone">Phone number:</label>
        <input id="phone" type="tel" onChange={(e)=> setPhone(prev => e.target.value)} placeholder="800-555-2424" value={phone}></input>
      </div>

      <div className='error'>
        {submitted && phoneErrors && `* ${phoneErrors}`}
      </div>
    </>



  )

};

export default PhoneInput;
