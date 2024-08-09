import React from "react";


function Person() {
  
function detail() {
  const personalDetail = {
    firstname: document.getElementById('first-name').value, 
    lastname: document.getElementById('last-name').value, 
    dob:document.getElementById('dob').value,
    age:document.getElementById('age').value,
}
alert('Hello, I am '+ personalDetail.firstname + ' ' + personalDetail.lastname + '. I was born on ' + personalDetail.dob + ' and I am ' + personalDetail.age + ' years old');
};




    return(
      <>
      <div align="center">
      <h1>PERSONAL DETAILS</h1>
      <label>First name</label>
      <input type="text" id='first-name' name="first-name"/>
      <label>Last name</label>
      <input type="text" id='last-name' name="last-name"/>
      <label>DOB</label>
      <input type="date" id='dob' name="dob"/>
      <label>Age</label>
      <input type="age" id="age" name="age"/>
      <input type="button" value="Sign-in" onClick={detail()}/>
      </div>
      </>
    )
};

export default Person;