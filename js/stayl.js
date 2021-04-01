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
       name:document.getElementById("name").value,
       surname:document.getElementById("surname").value,
       email:document.getElementById("email").value,
   };
   return formData;
 }
 function insertNewRecord(data){
     let table = document.getElementById("list").getElementsByTagName("tbody")[0];
     let newRow = table.insertRow(table.length);
     cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.name;
     cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.surname;
     cell3 = newRow.insertCell(2);
     cell3.innerHTML = data.email;
     cell3 = newRow.insertCell(3);
     cell3.innerHTML = '<button onClick="editForm(this)"> Edit</button>  <button onclick="onDelete(this)">delet</button>';


 }
 function resetForm(){
  document.getElementById("name").value ="";
  document.getElementById("surname").value ="";
  document.getElementById("email").value ="";
  selectedRow = null;
 }
  
      function editForm(td){
        selectedRow = td.parentElement.parentElement;
        document.getElementById("name").value = selectedRow.cells[0].innerHTML;
        document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
        document.getElementById("email").value = sleectedRow.cells[2].innerHTML;


      }
      function updateRecord(formData){
        selectedRow.cells[0].innerHTML = formData.name;
        selectedRow.cells[1].innerHTML = formData.surname;
        selectedRow.cells[2].innerHTML = formData.email;
      }
     
function onDelete(td){
  row = td.parentElement.parentElement;
  document.getElementById("list").deleteRow(row.rowIndex);
    resetForm();

}






  
// let videos = [{
//   src: "https://www.youtube.com/embed/vfN8gscQVqs",
//   title: "YouTube video player",
//   allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
//   allowfullscreen: true
// }]

// function renderVideos() {
//   photosList.textContent = ""
//   videos.forEach(video => {
//       let iframeElement = createIframe(video.src, video.title, video.allow, video.allowfullscreen)
//       photosList.appendChild(iframeElement)
//   })
// }

// function createIframe(src, title = "Youtube video player", allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen = true, frameborder = 0) {
//   let newIframeElement = document.createElement('iframe')
//   newIframeElement.setAttribute('src', src)
//   newIframeElement.setAttribute('title', title)
//   newIframeElement.setAttribute('frameborder', frameborder)
//   newIframeElement.setAttribute('allow', allow)
//   newIframeElement.setAttribute('allowfullscreen', allowfullscreen)

//   return newIframeElement
// }

// formElement.addEventListener('submit', (evt) => {
//   evt.preventDefault()
//   videos.push({
//       src: "https://www.youtube.com/embed/" + videosIdElement.value,
//       title: videosTitleElement.value,
//       allow: videosAllowElement.value,
//       allowfullscreen: videosFullScreenElement.value
//   })
//   renderVideos()
//   evt.target.reset()
// })