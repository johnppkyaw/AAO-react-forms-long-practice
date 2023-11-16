import { useState, useEffect } from 'react';
import NameInput from './components/NameInput/';
import EmailInput from './components/EmailInput/';
import PhoneInput from './components/PhoneInput/';
import PhoneTypeSelect from './components/PhoneTypeSelect/';
import StaffSelect from './components/StaffSelect/';
import BioTextArea from './components/BioTextArea/';
import SignUpInput from './components/SignUpInput/';

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
      emailSignup,
      submittedOn: new Date()
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

      <NameInput
        submitted={submitted}
        nameErrors={validationErrors.name}
        setName={setName}
        name={name}
      />

      <EmailInput
        submitted={submitted}
        emailErrors={validationErrors.email}
        setEmail={setEmail}
        email={email}
      />

      <PhoneInput
        submitted={submitted}
        phoneErrors={validationErrors.phone}
        setPhone={setPhone}
        phone={phone}
      />

      <PhoneTypeSelect
        submitted={submitted}
        phoneTypeErrors={validationErrors.phoneType}
        setPhoneType={setPhoneType}
        phoneType={phoneType}
        phone={phone}
      />

      <StaffSelect
        setStaff={setStaff}
        staff={staff}
      />

      <BioTextArea
         submitted={submitted}
         bioErrors={validationErrors.bio}
         setBio={setBio}
         bio={bio}
      />

      <SignUpInput
        setEmailSignup={setEmailSignup}
      />

      <button>Sign Up</button>

      </form>

    </div>
  )
};

export default Submit;
