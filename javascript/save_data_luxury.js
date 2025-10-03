document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.querySelector("form");

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const pickUpLocation = document.getElementById("pickup-location").value;
    const pickUpDate = document.getElementById("pickup-date").value;
    const dropOffLocation =
      document.querySelectorAll("#pickup-location")[1].value;
    const dropOffDate = document.querySelectorAll("#pickup-date")[1].value;
    const carType = document.getElementById("car-type").value;
    const passengers = document.getElementById("passengers").value;

    const bookingData = {
      name,
      phone,
      pickUpLocation,
      pickUpDate,
      dropOffLocation,
      dropOffDate,
      carType,
      passengers,
    };

    let dataluxury = JSON.parse(localStorage.getItem("dataluxury")) || [];
    dataluxury.push(bookingData);
    localStorage.setItem("dataluxury", JSON.stringify(dataluxury));
    alert("Booking saved successfully!");
    bookingForm.reset();
  });
});
