let formElement = document.querySelector(".form");

   let  selectedRow = null;
  formElement.addEventListener('submit', e=>{
          e.preventDefault();
           let formData = readFormData();
          let sum =Object.values(formData);
          console.log(sum[0].length)
           console.log(typeof sum[0]==typeof 1);
              if(sum[0].length!==0 || sum[1].length!==0 || sum[2].length!==0){
                      if( selectedRow == null){
                         insertNewRecord(formData);
            
                                              }
                      else{
                         updateRecord(formData)
                          }
          
              }else{
                alert("Malumotlarizni kiriting");
              }
              resetForm();
            
            
              

  })
 function readFormData(){
   let formData={
       name:document.querySelector("#name").value,
       surname:document.querySelector("#surname").value,
       email:document.querySelector("#email").value,
   };
   return formData;
 }
 function insertNewRecord(data){
     let table = document.querySelector("#list");
       table.querySelector("tbody");
     
     let newRow = table.insertRow(table.length);
     console.log(newRow);
     row1 = newRow.insertCell(0);
     row1.innerHTML = data.name;
     row2 = newRow.insertCell(1);
     row2.innerHTML = data.surname;
     row3 = newRow.insertCell(2);
     row3.innerHTML = data.email;
     row3 = newRow.insertCell(3);
     row3.innerHTML = '<button onClick="editForm(this)"> Edit</button>';
     row4 = newRow.insertCell(4);
     row4.innerHTML = '<button onclick="onDelete(this)">delet</button>';

 }
 function resetForm(){
  document.querySelector("#name").value ="";
  document.querySelector("#surname").value ="";
  document.querySelector("#email").value ="";
  selectedRow = null;
 }
  
      function editForm(td){
        selectedRow = td.parentElement;
        document.querySelector("#name").value = selectedRow.cells[0].innerHTML;
        document.querySelector("#surname").value = selectedRow.cells[1].innerHTML;
        document.querySelector("#email").value = sleectedRow.cells[2].innerHTML;


      }
      function updateRecord(formData){
        selectedRow.cells[0].innerHTML = formData.name;
        selectedRow.cells[1].innerHTML = formData.surname;
        selectedRow.cells[2].innerHTML = formData.email;
      }
     
function onDelete(td){
  row = td.parentElement.parentElement;
  document.querySelector("#list").deleteRow(row.rowIndex);
    resetForm();

}


