// Function to generate random RGB color
const getRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to update the color display
const updateColor = (color) => {
    const colorBox = document.getElementById('colorBox');
    const colorCode = document.getElementById('colorCode');
    colorBox.style.backgroundColor = color;
    colorCode.textContent = color;
    document.body.style.backgroundColor = `${color}10`;
}

// Function to copy color to clipboard
const copyColor = () => {
    const colorCode = document.getElementById('colorCode');
    navigator.clipboard.writeText(colorCode.textContent)
        .then(() => {
            const notification = document.createElement('div');
            notification.textContent = 'Color Copied!';
            notification.classList.add('notification');
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 1700);
        })
        .catch(err => {
            console.error('Failed to copy color: ', err);
        });
}

// Generate initial color when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateColor(getRgbColor());
});

// Event listeners
document.getElementById('copyButton').addEventListener('click', copyColor);
document.getElementById('getColor').addEventListener('click', () => {
    updateColor(getRgbColor());
});

// Add notification style
const style = document.createElement('style');
style.textContent = `
.notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0,0,0,0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.3s ease;
}
`;
document.head.appendChild(style);