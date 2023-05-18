
var jsonData = [
    {
      "ID": 1,
      "AdvisorName": "John Smith",
      "Email": "john.smith@example.com",
      "Company": "ABC Corp",
      "Role": "Manager",
      "FluffleName": "Brassan Fluffle",
      "Customers": 10
    },
    {
      "ID": 2,
      "AdvisorName": "Jane Doe",
      "Email": "jane.doe@example.com",
      "Company": "XYZ Inc",
      "Role": "Developer",
      "FluffleName": "Brassan Fluffle",
      "Customers": 5
    },
    {
      "ID": 3,
      "AdvisorName": "Robert Johnson",
      "Email": "robert.johnson@example.com",
      "Company": "123 Co",
      "Role": "Designer",
      "FluffleName": "Brassan Fluffle",
      "Customers": 8
    }
  ];

  var tableBody = document.getElementById("data-table").getElementsByTagName('tbody')[0];
  
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
  }