const garmentColorPalette = document.querySelectorAll('.color-option');
const backgroundColorPalette = document.querySelectorAll('.background-palette .color-option');
const colorPicker = document.getElementById('colorPicker');
const backgroundPicker = document.getElementById('backgroundPicker');
const tshirtMockup = document.getElementById('tshirtMockup');
const mainView = document.getElementById('mainView');

// Garment color selection
garmentColorPalette.forEach(color => {
    color.addEventListener('click', function() {
        const selectedColor = this.getAttribute('data-color');
        colorPicker.value = selectedColor;  // Update color picker value
        tshirtMockup.style.backgroundColor = selectedColor;  // Apply color to the T-shirt mockup
    });
});

colorPicker.addEventListener('input', function() {
    tshirtMockup.style.backgroundColor = this.value;  // Apply color to the T-shirt mockup
});

// Background color selection
backgroundColorPalette.forEach(color => {
    color.addEventListener('click', function() {
        const selectedColor = this.getAttribute('data-color');
        backgroundPicker.value = selectedColor;  // Update background picker value
        mainView.style.backgroundColor = selectedColor;  // Apply color to the background
    });
});

backgroundPicker.addEventListener('input', function() {
    mainView.style.backgroundColor = this.value;  // Apply color to the background
});
