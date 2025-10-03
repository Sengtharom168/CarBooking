// Select elements
const searchInput = document.getElementById("searchInput"); // Search input field
const searchButton = document.getElementById("searchButton"); // Search button
const historyTableBody = document.getElementById("historyTableBody"); // Table body for history

// Function to save search to localStorage
function saveSearch(query) {
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory"))  [];
    if (!searchHistory.includes(query)) {
        searchHistory.push(query);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
}

// Function to load search history into the table
function loadSearchHistory() {
    const searchHistory = JSON.parse(localStorage.getItem("searchHistory"))  [];
    historyTableBody.innerHTML = ""; // Clear the table body before populating

    searchHistory.forEach((name, index) => {
        const row = document.createElement("tr");

        const serialCell = document.createElement("td");
        serialCell.textContent = index + 1; // Serial number
        row.appendChild(serialCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = name; // Name
        phonenumberCell.textContent = phonenumber; // Phonenumber
        LocationCell.textContent = Location; // Location
        Time inCell.textContent = Time in; // Time in
        Time outCell.textContent = Time out; // Time out
        PassengerCell.textContent = Passenger; // Passenger
        row.appendChild(nameCell);

        historyTableBody.appendChild(row);
    });
}

// Function to handle search
function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        saveSearch(query);
        loadSearchHistory(); // Refresh the table
        searchInput.value = ""; // Clear the input field
    }
}

// Load history on page load
document.addEventListener("DOMContentLoaded", loadSearchHistory);

// Attach event listener to the search button
searchButton.addEventListener("click", handleSearch);