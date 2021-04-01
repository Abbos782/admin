let formElement = document.querySelector(".form");
let nameElement = document.querySelector(".name");
let surnameElement = document.querySelector(".surname");
let emailElement = document.querySelector(".email");
let tableElement =document.querySelector('.table');
//   let userElement =document.querySelector('.user');

let n = 0;

  formElement.addEventListener('submit', e=>{
      e.preventDefault();
      n++
      let trElement = document.createElement('tr');
         trElement.classList.add("user");
         console.log(trElement);
         tableElement.appendChild(trElement);
         console.log(tableElement);
      let userElement =document.querySelector('.user');
      let tdElementn = document.createElement('td');
      let tdElement1 = document.createElement('td');
      let tdElement2 = document.createElement('td');
          tdElementn.document = n;
         tdElement1.innerHTML = nameElement.value;
         tdElement2.innerHTML = surnameElement.value;
         userElement.prepend(tdElementn);
         userElement.prepend(tdElement1);
         userElement.prepend(tdElement2);
         console.log(userElement);

         
     

  })
  e.reset();