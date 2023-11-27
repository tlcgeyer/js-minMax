document.addEventListener('DOMContentLoaded', function () {

    const numbers = [8, 12, 5, 19, 3, 25, 10];

    displayArray(numbers);

    displayMinMax(numbers);
});

function displayArray(array) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Array: [${array.join(', ')}]</p>`;
}

function displayMinMax(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>Min Value: <span class="pink">${min}</span></p>`;
    outputDiv.innerHTML += `<p>Max Value: <span class="grey">${max}</span></p>`;
}
