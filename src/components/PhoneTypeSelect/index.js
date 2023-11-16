const PhoneTypeSelect = ({submitted, phoneTypeErrors, setPhoneType, phoneType, phone}) => {
  return (
    <>
      <div style={{backgroundColor: submitted && phoneTypeErrors ? 'red' : 'transparent'}}>
        <label htmlFor="phone-type">Phone type:</label>
        <select name="phone-type" id="phone-type" onChange={(e)=>setPhoneType(prev => e.target.value)} value={phoneType} disabled={phone ? false : true}>
          <option value="" disabled>--Please choose an option--</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>

      <div className='error'>
        {submitted && phoneTypeErrors && `* ${phoneTypeErrors}`}
      </div>
    </>
  )
};

export default PhoneTypeSelect;
