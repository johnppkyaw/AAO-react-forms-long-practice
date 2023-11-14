import { useState } from 'react';

const Submit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [emailSignup, setEmailSignup] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

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

  }


  return (
    <div>
      <h1>User Registration Form</h1>

      <form onSubmit = {onSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" onChange={(e) =>
          setName(e.target.value)}></input>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" onChange={(e) => setEmail(prev=>e.target.value)}></input>
      </div>

      <div>
        <label htmlFor="phone">Phone number:</label>
        <input id="phone" type="tel" onChange={(e)=> setPhone(prev => e.target.value)}></input>
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

      <div>
        <fieldset onChange={(e) => setStaff(prev => e.target.value)}>
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
        <label style={{marginBottom: "10px"}}htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" type="text" onChange={(e)=>setBio(prev => e.target.value)}></textarea>
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
