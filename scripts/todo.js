"use strict";
window.onload = function () {
    const getButton = document.getElementById("searchIdValues");
    getButton.onclick = returnMessage;
}
function returnMessage() {
    const getId = document.getElementById("userTypes").value;
    let displayInfo = document.getElementById("returnMessage");

    fetch(`https://jsonplaceholder.typicode.com/todos/${getId}`)
        .then(response => response.json())
        .then(data => {
            displayInfo.innerHTML =
                `User Id: ${data["userId"]}\nID: ${data["id"]}\nTitle: ${data["title"]}\nCompleted: ${data["completed"]} `;
        });

}
