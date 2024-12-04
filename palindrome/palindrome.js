document.getElementById('checkButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');

    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is a palindrome
    const isPalindrome = cleanedString === cleanedString.split('').reverse().join('');

    // Display result
    if (isPalindrome) {
        resultElement.textContent = `"${inputString}" is a palindrome!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${inputString}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }
});
