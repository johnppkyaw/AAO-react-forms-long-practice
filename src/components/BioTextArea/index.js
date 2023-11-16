const BioTextArea = ({submitted, bioErrors, setBio, bio}) => {
  return (
    <>
      <div style={{backgroundColor: submitted && bioErrors ? 'red' : 'transparent'}}>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" type="text" onChange={(e)=>setBio(prev => e.target.value)} value={bio}></textarea>
      </div>

      <div className='error'>
        {submitted && bioErrors && `* ${bioErrors}`}
      </div>
    </>
  )
}

export default BioTextArea;
