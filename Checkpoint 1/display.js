
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
  },
  {
    "ID": 4,
    "AdvisorName": "Sarah Thompson",
    "Email": "sarah.thompson@example.com",
    "Company": "XYZ Corp",
    "Role": "Manager",
    "FluffleName": "Silver Fluffle",
    "Customers": 12
  },
  {
    "ID": 5,
    "AdvisorName": "Michael Brown",
    "Email": "michael.anderson@example.com",
    "Company": "456 Co",
    "Role": "Developer",
    "FluffleName": "Silver Fluffle",
    "Customers": 6
  },
  {
    "ID": 6,
    "AdvisorName": "Emily Brown",
    "Email": "emily.brown@example.com",
    "Company": "789 Inc",
    "Role": "Designer",
    "FluffleName": "Silver Fluffle",
    "Customers": 9
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
    roleCell.textContent = jsonData[i].Role

    var fluffleCell = row.insertCell(5);
    fluffleCell.textContent = jsonData[i].FluffleName;

    var customersCell = row.insertCell(6);
    customersCell.textContent = jsonData[i].Customers;
  }

  function updateTable(filteredData) {
  var tableBody = document.getElementById("data-table").getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ""; 

  for (var i = 0; i < filteredData.length; i++) {
    var row = tableBody.insertRow(i);
    var idCell = row.insertCell(0);
    idCell.textContent = filteredData[i].ID;

    var nameCell = row.insertCell(1);
    nameCell.textContent = filteredData[i].AdvisorName;

    var emailCell = row.insertCell(2);
    emailCell.textContent = filteredData[i].Email;

    var companyCell = row.insertCell(3);
    companyCell.textContent = filteredData[i].Company;

    var roleCell = row.insertCell(4);
    roleCell.textContent = filteredData[i].Role;

    var fluffleCell = row.insertCell(5);
    fluffleCell.textContent = filteredData[i].FluffleName;

    var customersCell = row.insertCell(6);
    customersCell.textContent = filteredData[i].Customers;
  }
}
var searchInput = document.querySelector('.search-bar input[type="text"]');
searchInput.addEventListener('input', function(event) {
  var searchTerm = event.target.value.toLowerCase();

  var filteredData = jsonData.filter(function(item) {
    return (
      item.AdvisorName.toLowerCase().includes(searchTerm) ||
      item.Email.toLowerCase().includes(searchTerm) ||
      item.Company.toLowerCase().includes(searchTerm) ||
      item.Role.toLowerCase().includes(searchTerm) ||
      item.FluffleName.toLowerCase().includes(searchTerm)
    );
  });

  updateTable(filteredData);
});