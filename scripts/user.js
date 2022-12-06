"user strict";
window.onload = function () {
    const tableBody = document.getElementById("returnData");
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let row = tableBody.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                cell1.innerHTML = data[i].id;
                cell2.innerHTML = data[i]["name"];
                cell3.innerHTML = data[i]["username"];
                cell4.innerHTML = data[i]["email"];
                cell5.innerHTML = data[i]["phone"];
                cell6.innerHTML = data[i]["website"];
            }
        })
}