document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.getElementById('button');
    const bmiScore = document.getElementById('score');
    const bmiCategory = document.getElementById('bmi-category');
    const resultContainer = document.getElementById('result-container');
    const bmiForm = document.getElementById('bmi-form');

    calculateBtn.addEventListener('click', calculateBMI);
    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateBMI();
    });

    function calculateBMI() {
        // Get input values
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Validate inputs
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values');
            return;
        }

        // Calculate BMI (convert cm to m by dividing by 100)
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBMI = bmi.toFixed(1);

        // Display BMI score
        bmiScore.textContent = roundedBMI;

        // Determine and display category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 25) {
            category = 'Healthy Weight';
        } else if (bmi < 30) {
            category = 'Overweight';
        } else if (bmi < 35) {
            category = 'Class 1 Obesity';
        } else if (bmi < 40) {
            category = 'Class 2 Obesity';
        } else {
            category = 'Class 3 Obesity (Severe Obesity)';
        }
        
        bmiCategory.textContent = `Category: ${category}`;

        // Show results container
        resultContainer.classList.remove('hidden');

        // Highlight the relevant category in the list
        highlightBMICategory(category);
    }

    function highlightBMICategory(currentCategory) {
        // Remove any existing highlights
        document.querySelectorAll('.category').forEach(el => {
            el.style.fontWeight = 'normal';
            el.style.color = '#2d3436';
        });

        // Find and highlight the current category
        const categories = document.querySelectorAll('.category');
        for (let cat of categories) {
            if (cat.textContent === currentCategory) {
                cat.style.fontWeight = 'bold';
                cat.style.color = '#6c5ce7';
                break;
            }
        }
    }
});