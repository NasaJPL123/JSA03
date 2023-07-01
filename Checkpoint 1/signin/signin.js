import { jsonData } from './data.js';

console.log(jsonData);

var tableBody = document.getElementById("data-table").getElementsByTagName('tbody')[0];

function populateTable() {
  for (var i = 0; i < jsonData.length; i++) {
    var row = tableBody.insertRow(i);
    populateRow(row, jsonData[i]);
  }
}

function populateRow(row, rowData) {
  var idCell = row.insertCell(0);
  idCell.textContent = rowData.ID;

  var nameCell = row.insertCell(1);
  nameCell.textContent = rowData.AdvisorName;

  var emailCell = row.insertCell(2);
  emailCell.textContent = rowData.Email;

  var companyCell = row.insertCell(3);
  companyCell.textContent = rowData.Company;

  var roleCell = row.insertCell(4);
  roleCell.textContent = rowData.Role;

  var fluffleCell = row.insertCell(5);
  fluffleCell.textContent = rowData.FluffleName;

  var customersCell = row.insertCell(6);
  customersCell.textContent = rowData.Customers;

  var actionsCell = row.insertCell(7);

  var adjustButton = document.createElement("button");
  adjustButton.classList.add("adjust-btn");
  adjustButton.addEventListener("click", function() {
    adjustInformation(row);
  });

  var adjustImg = document.createElement("img");
  adjustImg.src = "/Checkpoint 1/assets/PencilLine.svg";
  adjustButton.appendChild(adjustImg);

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", function() {
    deleteRow(row);
  });

  var deleteImg = document.createElement("img");
  deleteImg.src = "/Checkpoint 1/assets/Trash.svg";
  deleteButton.appendChild(deleteImg);

  var confirmButton = document.createElement("button");
  confirmButton.classList.add("confirm-btn");
  confirmButton.style.display = "none";
  confirmButton.addEventListener("click", function() {
    confirmChanges(row);
  });

  var confirmImg = document.createElement("img");
  confirmImg.src = "/Checkpoint 1/assets/Eye.svg";
  confirmButton.appendChild(confirmImg);

  actionsCell.appendChild(adjustButton);
  actionsCell.appendChild(deleteButton);
  actionsCell.appendChild(confirmButton);
}

function adjustInformation(row) {
  var adjustButton = row.querySelector(".adjust-btn");
  var deleteButton = row.querySelector(".delete-btn");
  var confirmButton = row.querySelector(".confirm-btn");

  adjustButton.style.display = "none";
  deleteButton.style.display = "none";
  confirmButton.style.display = "inline-block";

  var cells = row.cells;

  for (var i = 0; i < cells.length - 1; i++) {
    var cell = cells[i];
    var cellContent = cell.textContent;
    cell.innerHTML = "<input type='text' value='" + cellContent + "' />";
  }

  confirmButton.removeEventListener("click", confirmChanges);
  confirmButton.addEventListener("click", function() {
    confirmChanges(row);
  });
  deleteButton.removeEventListener("click", function() {
    deleteRow(row);
  });
  deleteButton.addEventListener("click", function() {
    deleteRow(row);
  });
}

function deleteRow(row) {
  row.parentNode.removeChild(row);
}

function confirmChanges(row) {
  var adjustButton = row.querySelector(".adjust-btn");
  var deleteButton = row.querySelector(".delete-btn");
  var confirmButton = row.querySelector(".confirm-btn");

  adjustButton.style.display = "inline-block";
  deleteButton.style.display = "inline-block";
  confirmButton.style.display = "none";

  var cells = row.cells;

  for (var i = 0; i < cells.length - 1; i++) {
    var cell = cells[i];
    var input = cell.querySelector("input");
    var cellValue = input.value.trim();
    var existingValue = cell.textContent.trim();

    cell.removeChild(input);

    if (cellValue !== existingValue) {
      cell.textContent = cellValue;
    }
  }

  adjustButton.removeEventListener("click", function() {
    adjustInformation(row);
  });
  adjustButton.addEventListener("click", function() {
    adjustInformation(row);
  });
  deleteButton.removeEventListener("click", function() {
    deleteRow(row);
  });
  deleteButton.addEventListener("click", function() {
    deleteRow(row);
  });
}

function addNewRow() {
  var newRow = tableBody.insertRow(tableBody.rows.length);
  populateRow(newRow, {
    ID: '',
    AdvisorName: '',
    Email: '',
    Company: '',
    Role: '',
    FluffleName: '',
    Customers: ''
  });
}

populateTable();
