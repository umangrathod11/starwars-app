import React from 'react';


export default function Demo() {
  const [name, setName] = React.useState('');
  // const changeName = React.useCallback(
  //   (e) => setName(e.target.value),
  //   [setName]
  // )


  // const changeName = React.useCallback(
  //   function (e) { setName(e.target.value) },
  //   [setName]
  // )

  const changeName = (e) => setName(e.target.value);

  const [email, setEmail] = React.useState('');
  const changeEmail = React.useCallback(
    (e) => setEmail(e.target.value),
    [setEmail]
  );

  return (
    <div className="App">
      <br />
      <br />
      <MemoisedTextInput value={name} onChange={changeName} />

      <br />
      <br />

      <MemoisedEmailInput value={email} onChange={changeEmail} />
    </div>
  );
}

const TextInput = ({ value, onChange }) => {
  return (
    <div>
      {new Date().getTime()}
      <input type='text' value={value} onChange={onChange} />
    </div>
  )
}

const MemoisedTextInput = React.memo(TextInput);


const EmailInput = ({ value, onChange }) => {
  return (
    <div>
      {new Date().getTime()}
      <input type='email' value={value} onChange={onChange} />
    </div>
  )
}
const MemoisedEmailInput = React.memo(EmailInput);