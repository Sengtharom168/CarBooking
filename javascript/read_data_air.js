const storedData = localStorage.getItem("dataair");
const data = storedData ? JSON.parse(storedData) : [];
const tableBody = document.querySelector("#data-table tbody");

data.forEach((item) => {
  const row = document.createElement("tr");
  const name = document.createElement("td");
  name.textContent = item.name;
  row.appendChild(name);

  const phone_number = document.createElement("td");
  phone_number.textContent = item.phone;
  row.appendChild(phone_number);

  const Pick_Up_Location = document.createElement("td");
  Pick_Up_Location.textContent = item.pickUpLocation;
  row.appendChild(Pick_Up_Location);

  const Pick_Up_Date = document.createElement("td");
  Pick_Up_Date.textContent = item.pickUpDate;
  row.appendChild(Pick_Up_Date);

  const Drop_Off_Location = document.createElement("td");
  Drop_Off_Location.textContent = item.dropOffLocation;
  row.appendChild(Drop_Off_Location);

  const Drop_Off_Date = document.createElement("td");
  Drop_Off_Date.textContent = item.dropOffDate;
  row.appendChild(Drop_Off_Date);

  const car_type = document.createElement("td");
  car_type.textContent = item.carType;
  row.appendChild(car_type);

  const passengers = document.createElement("td");
  passengers.textContent = item.passengers;
  row.appendChild(passengers);

  const actionCell = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-btn");
  editButton.onclick = () => editRow(item, row);
  actionCell.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = () => deleteRow(row);
  actionCell.appendChild(deleteButton);

  row.appendChild(actionCell);

  tableBody.appendChild(row);
});

function editRow(item, row) {
  const newName = prompt("Edit Name", item.name);
  const newPhone = prompt("Edit Phone", item.phone);
  const newPicklocation = prompt("Edit Pick_Up_Location", item.pickUpLocation);
  const newPickupdate = prompt("Edit Pick_Up_Date", item.pickUpDate);
  const newDropOffLocation = prompt(
    "Edit Drop_Off_Location",
    item.dropOffLocation
  );
  const newDropOffDate = prompt("Edit Drop_Off_Date", item.dropOffDate);
  const newCarType = prompt("Edit Car_Type", item.carType);
  const newPassengers = prompt("Edit Passenger", item.passengers);

  if (newName) {
    row.cells[0].textContent = newName;
    row.cells[1].textContent = newPhone;
    row.cells[2].textContent = newPicklocation;
    row.cells[3].textContent = newPickupdate;
    row.cells[4].textContent = newDropOffLocation;
    row.cells[5].textContent = newDropOffDate;
    row.cells[6].textContent = newCarType;
    row.cells[7].textContent = newPassengers;

    item.name = newName || item.name;
    item.phone = newPhone || item.phone;
    item.pickUpLocation = newPicklocation || item.pickUpLocation;
    item.pickUpDate = newPickupdate || item.pickUpDate;
    item.dropOffLocation = newDropOffLocation || item.dropOffLocation;
    item.dropOffDate = newDropOffDate || item.dropOffDate;
    item.carType = newCarType || item.carType;
    item.passengers = newPassengers || item.passengers;
    localStorage.setItem("dataair", JSON.stringify(data));
  }
}

function deleteRow(row) {
  const rowIndex = row.rowIndex - 1;
  data.splice(rowIndex, 1);
  row.remove();
  localStorage.setItem("dataair", JSON.stringify(data));
}
