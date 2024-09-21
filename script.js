document.getElementById("bmiForm").addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the form inputs
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseInt(document.getElementById('weight').value);

    // Check if all required fields are filled out and have valid values
    if (gender && age > 0 && !isNaN(heightFeet) && heightFeet >= 0 && !isNaN(heightInches) && heightInches >= 0 && heightInches < 12 && weight > 0) {
        // Convert height from feet and inches to meters
        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;
        
        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Get the result element to display the message
        const resultElement = document.getElementById("result");

        let category = '';

        // Determine the BMI category
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal Weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // Display the result message with the BMI value and category
        let resultMessage = `Your BMI: ${bmi.toFixed(2)}<br>`;
        resultMessage += `Category: ${category}`;
        resultElement.innerHTML = resultMessage;
    } else {
        // Show an alert if the form is not filled out correctly
        alert('Please fill out all fields correctly.');
    }
});
