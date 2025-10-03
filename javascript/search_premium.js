const searchdata = JSON.parse(localStorage.getItem("datapremium")) || [];

function displayData(data) {
  const tableBody = document.querySelector("#data-table tbody");
  tableBody.innerHTML = "";

  if (data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="9" class="text-center">No matching records found.</td></tr>`;
    return;
  }

  data.forEach((searchdata, index) => {
    const row = `<tr>
      <td>${searchdata.name}</td>
      <td>${searchdata.phone}</td>
      <td>${searchdata.pickUpLocation}</td>
      <td>${searchdata.pickUpDate}</td>
      <td>${searchdata.dropOffLocation}</td>
      <td>${searchdata.dropOffDate}</td>
      <td>${searchdata.carType}</td>
      <td>${searchdata.passengers}</td>
      <td>
        <button class="btn btn-primary" onclick="editBooking(${index})">Edit</button>
        <button class="btn btn-danger" onclick="deleteBooking(${index})">Delete</button>
      </td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}
displayData(searchdata);
const searchInput = document.querySelector("input[name='search']");
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredData = searchdata.filter((searchdata) => {
    return (
      searchdata.name.toLowerCase().includes(searchText) ||
      searchdata.phone.toLowerCase().includes(searchText) ||
      searchdata.pickUpLocation.toLowerCase().includes(searchText) ||
      searchdata.pickUpDate.includes(searchText) ||
      searchdata.dropOffLocation.toLowerCase().includes(searchText) ||
      searchdata.dropOffDate.includes(searchText) ||
      searchdata.carType.toLowerCase().includes(searchText) ||
      searchdata.passengers.toString().includes(searchText)z
    );
  });

  displayData(filteredData);
});

function editBooking(index) {
  alert(
    `Edit functionality for booking index ${index} is not implemented yet.`
  );
}
function deleteBooking(index) {
  searchdata.splice(index, 1);
  localStorage.setItem("searchdata", JSON.stringify(searchdata));
  displayData(searchdata);
}
