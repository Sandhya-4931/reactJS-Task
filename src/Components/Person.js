import React from 'react';

function Person() {
  
  function detail(event) {
    event.preventDefault(); // Prevents form submission and page refresh
    const personalDetail = {
      firstname: document.getElementById('first-name').value, 
      lastname: document.getElementById('last-name').value, 
      dob: document.getElementById('dob').value,
      age: document.getElementById('age').value,
    }
    alert('Hello, I am ' + personalDetail.firstname + ' ' + personalDetail.lastname + '. I was born on ' + personalDetail.dob + ' and I am ' + personalDetail.age + ' years old');
  };

  return(
    <>
      <div align="center">
        <form>
          <h1>PERSONAL DETAILS</h1>
          <label>First name</label>
          <input type="text" id='first-name' name="first-name"/><br/>
          <label>Last name</label>
          <input type="text" id='last-name' name="last-name"/><br/>
          <label>DOB</label>
          <input type="date" id='dob' name="dob"/><br/>
          <label>Age</label>
          <input type="number" id="age" name="age"/><br/>
          <button onClick={detail}>Sign in</button>
        </form>
      </div>
    </>
  )
};

export default Person;