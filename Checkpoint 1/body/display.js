import { jsonData } from './data.js';

function createTableCells(row, values) {
  values.forEach((value) => {
    const cell = row.insertCell();
    cell.textContent = value;
  });
}

function generateTable(data) {
  const tableBody = document.getElementById("data-table").getElementsByTagName('tbody')[0];
  tableBody.innerHTML = "";

  data.forEach((item) => {
    const row = tableBody.insertRow();

    const values = Object.values(item);
    createTableCells(row, values);
  });
}

generateTable(jsonData);
