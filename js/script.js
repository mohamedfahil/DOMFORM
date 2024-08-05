document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const submitButton = document.getElementById('submit');
    const foodInputs = document.querySelectorAll('.food-container input[type="radio"]');
    const tableBody = document.querySelector('#table tbody');

    // Enable/disable submit button based on food selection
    foodInputs.forEach(input => {
        input.addEventListener('change', function() {
            const checkedFood = document.querySelectorAll('.food-container input[type="radio"]:checked');
            submitButton.disabled = checkedFood.length < 2;
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.getElementById('gender').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        
        const selectedFoods = Array.from(document.querySelectorAll('.food-container input[type="radio"]:checked'))
            .map(food => food.value)
            .join(', ');

        // Create a new row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${selectedFoods}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

        // Append the new row to the table
        tableBody.appendChild(newRow);

        // Reset the form
        form.reset();
        submitButton.disabled = true; // Disable the submit button again
    });
});
