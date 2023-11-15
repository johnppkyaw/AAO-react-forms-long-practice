import { useState, useEffect } from 'react';

const Submit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [emailSignup, setEmailSignup] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const errors = {};

    //name validation
    if(name.length === 0) {
      errors.name = "Please enter your name"
    }

    //email validation
    if(email.length === 0 || !email.includes('@')) {
      errors.email = "Please enter your email address and it must include an '@'"
    }

    //phone number validation
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (phone.length > 0 && !phoneRegex.test(phone)) {
      errors.phone = "Please enter the phone number in this format: 111-111-1111"
    }

    //phone type validation
    if (phone.length > 0 && phoneType.length === 0) {
      errors.phoneType = "Please choose a phone type"
    }

    //bio validation
    if (bio.length > 280) {
      errors.bio = "Please limit the characters to 280."
    }

    console.log(errors);


    setValidationErrors(prev => errors);
  },[name, email, phone, phoneType, bio]);

  const onSubmit = (e) => {
    e.preventDefault();

    setSubmitted(prev => true);

    if(Object.keys(validationErrors).length > 0) {
      return alert(`The following errors were found:
      ${validationErrors.name ? "* " + validationErrors.name : ""}
      ${validationErrors.email ? "* " + validationErrors.email : ""}
      ${validationErrors.phone ? "* " + validationErrors.phone : ""}
      ${validationErrors.phoneType ? "* " + validationErrors.phoneType : ""}
      ${validationErrors.bio ? "* " + validationErrors.bio : ""}`)
    }

    const data = {
      name,
      email,
      phone,
      phoneType,
      staff,
      bio,
      emailSignup
    }

    console.log(data);

    setName(prev => '');
    setEmail(prev => '');
    setPhone(prev => '');
    setPhoneType(prev => '');
    setStaff(prev => '');
    setBio(prev => '');
    setValidationErrors(prev => {});
    setEmailSignup(prev => false);
    setSubmitted(prev => false);

  }


  return (
    <div>
      <h1>User Registration Form</h1>

      <form onSubmit = {onSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" onChange={(e) =>
          setName(e.target.value)} value={name}></input>
      </div>

      <div className='error' style={{
        display: submitted && validationErrors.name ? 'block' : 'none'
      }}>
        {submitted && validationErrors.name && `* ${validationErrors.name}`}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" onChange={(e) => setEmail(prev=>e.target.value)} value={email}></input>
      </div>

      <div className='error' style={{
        display: submitted && validationErrors.email ? 'block' : 'none'
      }}>
        {submitted && validationErrors.email && `* ${validationErrors.email}`}
      </div>

      <div>
        <label htmlFor="phone">Phone number:</label>
        <input id="phone" type="tel" onChange={(e)=> setPhone(prev => e.target.value)} value={phone}></input>
      </div>

      <div className='error' style={{
        display: submitted && validationErrors.phone ? 'block' : 'none'
      }}>
        {submitted && validationErrors.phone && `* ${validationErrors.phone}`}
      </div>

      <div>
        <label htmlFor="phone-type">Phone type:</label>
        <select name="phone-type" id="phone-type" onChange={(e)=>setPhoneType(prev => e.target.value)} value={phoneType}>
          <option value="" disabled>--Please choose an option--</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>

      <div className='error' style={{
        display: submitted && validationErrors.phoneType ? 'block' : 'none'
      }}>
        {submitted && validationErrors.phoneType && `* ${validationErrors.phoneType}`}
      </div>

      <div>
        <fieldset onChange={(e) => setStaff(prev => e.target.value)} value={staff}>
          <legend>Staff: </legend>

        <label htmlFor="instructor">Instructor</label>
        <input
          type="radio"
          name="staff"
          id="instructor"
          value="instructor"
        ></input>

        <label htmlFor="student">Student</label>
        <input
          type="radio"
          name="staff"
          id="student"
          value="student"
        ></input>

        </fieldset>
      </div>

      <div style={{display: "block"}}>
        <label style={{marginBottom: "10px", verticalAlign: "top"}}htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" type="text" onChange={(e)=>setBio(prev => e.target.value)}></textarea>
      </div>

      <div className='error' style={{
        display: submitted && validationErrors.bio ? 'block' : 'none'
      }}>
        {submitted && validationErrors.bio && `* ${validationErrors.bio}`}
      </div>

      <div>
        <input id="emailnotify" type="checkbox" onChange={(e)=>setEmailSignup(prev => !prev)}></input>
        <label htmlFor="emailnotify">Sign up for email notifications</label>
      </div>

      <button>Sign Up</button>

      </form>

    </div>
  )
};

export default Submit;
