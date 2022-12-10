"use strict";
window.onload = () => {
   const addDataBtn = document.getElementById("submitForm");
   addDataBtn.onclick = function (){
    let data = new FormData();
    data.append("id", document.getElementById("idInput").value);
    data.append("title", document.getElementById("titleInput").value);
    data.append("confirmation", document.getElementById("confirmationInput").value);
    fetch("https://jsonplaceholder.typicode.com/todos" , {
        method: "POST",
        body: data
    })
    .then(response => response.json())
    .then(json => {
        document.getElementById("message").innerHTML = `${json.id} has been added!`;
    })
    .catch(err => {
        document.getElementById("message").innerHTML = "No no no no no. No";
    });
   }
};
