// admin-script.js

// Function to generate 6 random winning numbers
function generateWinningNumbers(event) {
    event.preventDefault();
  
    const winningNumbers = [];
    while (winningNumbers.length < 6) {
      const number = getRandomNumber(1, 52);
      if (!winningNumbers.includes(number)) {
        winningNumbers.push(number);
      }
    }
  
    displayWinningNumbers(winningNumbers);
    findWinners(winningNumbers);
  }
  
  // Function to display the winning numbers
  function displayWinningNumbers(winningNumbers) {
    const list = document.getElementById('winning-numbers-list');
    list.innerHTML = '';
    winningNumbers.forEach(number => {
      const li = document.createElement('li');
      li.textContent = number;
      li.className = 'number-ball';
      li.style.backgroundColor = getColor(number);
      list.appendChild(li);
    });
  
    localStorage.setItem('winningNumbers', JSON.stringify(winningNumbers));
  }
  
  // Function to find and display the winners
  function findWinners(winningNumbers) {
    const playedBoards = JSON.parse(localStorage.getItem('playedBoards')) || [];
    const winnersList = document.getElementById('winners-list');
    winnersList.innerHTML = '';
  
    playedBoards.forEach((entry, index) => {
      const { numbers, timestamp, ticket } = entry;
      const matchedNumbers = numbers.filter(num => winningNumbers.includes(num));
  
      if (matchedNumbers.length === 6) {
        const li = document.createElement('li');
        li.textContent = `User ${index + 1}: Ticket [ ${ticket} ], Played on: ${timestamp} - Winner!`;
        winnersList.appendChild(li);
      }
    });
  }
  
  // Function to display user data from LocalStorage
  function displayUserData() {
    const playedBoards = JSON.parse(localStorage.getItem('playedBoards')) || [];
    const userDataList = document.getElementById('user-data-list');
    userDataList.innerHTML = '';
  
    playedBoards.forEach((entry, index) => {
      const { numbers, timestamp, ticket } = entry;
      const li = document.createElement('li');
      li.textContent = `User ${index + 1}: Ticket [ ${ticket} ], Played on: ${timestamp}, Numbers: [ ${numbers.join(', ')} ]`;
      userDataList.appendChild(li);
    });
  }
  
  // Get the color based on the number range (same as in user-script.js)
  function getColor(number) {
    if (number >= 1 && number <= 13) return 'red';
    if (number >= 14 && number <= 25) return 'yellow';
    if (number >= 26 && number <= 37) return 'green';
    if (number >= 38 && number <= 52) return 'blue';
    return 'white';
  }
  
  // Get a random number between min (inclusive) and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Initialize the page by displaying user data
  displayUserData();
  