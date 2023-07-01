import { jsonData } from './data.js';
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

console.log(jsonData);

var tableBody = document.getElementById("data-table").getElementsByTagName('tbody')[0];

function populateTable() {
  for (var i = 0; i < jsonData.length; i++) {
    var row = tableBody.insertRow(i);

    var idCell = row.insertCell(0);
    idCell.textContent = jsonData[i].ID;

    var nameCell = row.insertCell(1);
    nameCell.textContent = jsonData[i].AdvisorName;

    var emailCell = row.insertCell(2);
    emailCell.textContent = jsonData[i].Email;

    var companyCell = row.insertCell(3);
    companyCell.textContent = jsonData[i].Company;

    var roleCell = row.insertCell(4);
    roleCell.textContent = jsonData[i].Role;

    var fluffleCell = row.insertCell(5);
    fluffleCell.textContent = jsonData[i].FluffleName;

    var customersCell = row.insertCell(6);
    customersCell.textContent = jsonData[i].Customers;

    var actionsCell = row.insertCell(7);

    var adjustButton = document.createElement("button");
    adjustButton.classList.add("adjust-btn");
    adjustButton.addEventListener("click", adjustInformation);

    var adjustImg = document.createElement("img");
    adjustImg.src = "/Checkpoint 1/assets/PencilLine.svg";
    adjustButton.appendChild(adjustImg);

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", deleteRow);

    var deleteImg = document.createElement("img");
    deleteImg.src = "/Checkpoint 1/assets/Trash.svg";
    deleteButton.appendChild(deleteImg);

    var confirmButton = document.createElement("button");
    confirmButton.classList.add("confirm-btn");
    confirmButton.style.display = "none";
    confirmButton.addEventListener("click", confirmChanges);

    var confirmImg = document.createElement("img");
    confirmImg.src = "/Checkpoint 1/assets/Eye (1).svg";
    confirmButton.appendChild(confirmImg);

    actionsCell.appendChild(adjustButton);
    actionsCell.appendChild(deleteButton);
    actionsCell.appendChild(confirmButton);
  }
}

function adjustInformation(event) {
  var row = event.target.parentNode.parentNode;
  var adjustButton = row.querySelector(".adjust-btn");
  var deleteButton = row.querySelector(".delete-btn");
  var confirmButton = row.querySelector(".confirm-btn");

  if (row.classList.contains("editing")) {
    return; // Prevent editing if already in editing state
  }

  adjustButton.style.display = "none";
  deleteButton.style.display = "none";
  confirmButton.style.display = "inline-block";

  for (var i = 0; i < row.cells.length - 1; i++) {
    var cell = row.cells[i];
    var cellContent = cell.textContent;
    cell.innerHTML = "<input type='text' value='" + cellContent + "' />";
  }

  row.classList.add("editing");

  // Remove event listeners from adjustButton and deleteButton
  adjustButton.removeEventListener("click", adjustInformation);
  deleteButton.removeEventListener("click", deleteRow);

  // Add event listener to confirmButton
  confirmButton.addEventListener("click", confirmChanges);
}

function deleteRow(event) {
  var row = event.target.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function confirmChanges(event) {
  var row = event.target.parentNode.parentNode;
  var adjustButton = row.querySelector(".adjust-btn");
  var deleteButton = row.querySelector(".delete-btn");
  var confirmButton = row.querySelector(".confirm-btn");

  adjustButton.style.display = "inline-block";
  deleteButton.style.display = "inline-block";
  confirmButton.style.display = "none";

  for (var i = 0; i < row.cells.length - 1; i++) {
    var cell = row.cells[i];
    var input = cell.querySelector("input");
    var cellValue = input.value.trim();
    
    cell.removeChild(input); 
    cell.textContent = cellValue;
  }

  adjustButton.removeEventListener("click", adjustInformation);
  adjustButton.addEventListener("click", adjustInformation);
  deleteButton.removeEventListener("click", deleteRow);
  deleteButton.addEventListener("click", deleteRow);
}

function addNewRow() {
  var newRow = tableBody.insertRow(tableBody.rows.length);

  var idCell = newRow.insertCell(0);
  idCell.innerHTML = "<input type='text' />";

  var nameCell = newRow.insertCell(1);
  nameCell.innerHTML = "<input type='text' />";

  var emailCell = newRow.insertCell(2);
  emailCell.innerHTML = "<input type='text' />";

  var companyCell = newRow.insertCell(3);
  companyCell.innerHTML = "<input type='text' />";

  var roleCell = newRow.insertCell(4);
  roleCell.innerHTML = "<input type='text' />";

  var fluffleCell = newRow.insertCell(5);
  fluffleCell.innerHTML = "<input type='text' />";

  var customersCell = newRow.insertCell(6);
  customersCell.innerHTML = "<input type='text' />";

  var actionsCell = newRow.insertCell(7);

  var adjustButton = document.createElement("button");
  adjustButton.classList.add("adjust-btn");
  adjustButton.addEventListener("click", adjustInformation);

  var adjustImg = document.createElement("img");
  adjustImg.src = "/Checkpoint 1/assets/PencilLine.svg";
  adjustButton.appendChild(adjustImg);

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", deleteRow);

  var deleteImg = document.createElement("img");
  deleteImg.src = "/Checkpoint 1/assets/Trash.svg";
  deleteButton.appendChild(deleteImg);

  var confirmButton = document.createElement("button");
  confirmButton.classList.add("confirm-btn");
  confirmButton.style.display = "none";
  confirmButton.addEventListener("click", confirmChanges);

  var confirmImg = document.createElement("img");
  confirmImg.src = "/Checkpoint 1/assets/Eye.svg";
  confirmButton.appendChild(confirmImg);

  actionsCell.appendChild(adjustButton);
  actionsCell.appendChild(deleteButton);
  actionsCell.appendChild(confirmButton);

  adjustButton.removeEventListener("click", adjustInformation);
  adjustButton.addEventListener("click", adjustInformation);
  deleteButton.removeEventListener("click", deleteRow);
  deleteButton.addEventListener("click", deleteRow);
  confirmButton.removeEventListener("click", confirmChanges);
  confirmButton.addEventListener("click", confirmChanges);
}

populateTable();

