"use strict";
window.onload = () => {
    const getIDvalue = document.getElementById("userInputsID");
    const getForm = document.getElementById("theForm");
    getIDvalue.onchange = () => {
        getIDvalue.disabled = "true";
        displayData(getIDvalue.value, getForm);
    }
    document.getElementById("changeData").onclick = updateDataFromUserInput;
}
function displayData(id, form) {
    form.style.display = "block";
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("userIdInput").value = data.userId;
            document.getElementById("titleInput").value = data.title;
            document.getElementById("confirmationInput").value = data.completed;
        });
}
function updateDataFromUserInput() {
    const id = document.getElementById("userInputsID").value;
    const bodyData = {
        userId: document.getElementById("userIdInput").value,
        title: document.getElementById("titleInput").value,
        completed: document.getElementById("confirmationInput").value
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify(bodyData),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => {
            document.getElementById("confirm").innerHTML = "COMPLETED";
            console.log(json.title);
        })
        .catch(err => {
            document.getElementById("confirm").innerHTML = "FAILED";
        });
}