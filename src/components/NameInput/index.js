const NameInput = ({submitted, nameErrors, setName, name}) => {
  return (
    <>
    <div style={{backgroundColor: submitted && nameErrors ? 'red' : 'transparent'}}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" onChange={(e) =>
          setName(e.target.value)} value={name}></input>
      </div>
    <div className='error'>
        {submitted && nameErrors && `* ${nameErrors}`}
    </div>
    </>
  )
};

export default NameInput;
