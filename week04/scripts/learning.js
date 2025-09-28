//const params = new URLSearchParams(window.location.search);
// const output = document.getElementById('form-data');

   // params.forEach((value, key) => {
      //const li = document.createElement('li');
      //li.textContent = `${key}: ${value}`;
      //output.appendChild(li);
   //  });



//const getString = window.location.search;
//console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('ordinance'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy $ ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')}</p>
<p><p>Your Phone: ${myInfo.get('phone')} </p>
<p>Your email is ${myInfo.get('email')}</p>;
