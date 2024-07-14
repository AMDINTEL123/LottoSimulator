/*document.addEventListener('DOMContentLoaded', function() {
  const numberSelectionDiv = document.getElementById('number-selection');
  const selectedNumbersDiv = document.getElementById('selected-numbers');
  const ticketCostDiv = document.getElementById('ticket-cost');
  const boardSelectionDiv = document.getElementById('board-selection');
  const generateBoardsButton = document.getElementById('generate-boards');
  const lottoPlus1Checkbox = document.getElementById('lotto-plus1');
  const lottoPlus2Checkbox = document.getElementById('lotto-plus2');
  const submitButton = document.getElementById('submit-ticket');
  const ticketSummaryDiv = document.getElementById('ticket-summary'); // New

  let selectedNumbers = [];
  let boards = [];
  let ticketIdCounter = 1; // Ticket ID counter

  const numbers = Array.from({ length: 52 }, (_, i) => i + 1);
const numberSelectionDivs = document.getElementById('winning-numbers');

function generateNumberGrid() {
  numberSelectionDiv.innerHTML = ''; // Clear previous content
  numbers.forEach(num => {
    const button = document.createElement('button');
    button.textContent = num;
    
    // Apply color based on number range
    if (num >= 1 && num <= 13) {
      button.classList.add('red');
    } else if (num >= 14 && num <= 25) {
      button.classList.add('yellow');
    } else if (num >= 26 && num <= 37) {
      button.classList.add('green');
    } else if (num >= 38 && num <= 52) {
      button.classList.add('blue');
    }
    
    button.addEventListener('click', () => toggleNumber(num));
    numberSelectionDiv.appendChild(button);
  });
}

function toggleNumber(num) {
  // Implement your toggle logic here if needed
  console.log(`Clicked number: ${num}`);
}

// Initial generation when the script loads
generateNumberGrid();


  function toggleNumber(num) {
    const index = selectedNumbers.indexOf(num);
    if (index !== -1) {
      selectedNumbers.splice(index, 1); // Deselect number
    } else {
      if (selectedNumbers.length >= 6) {
        alert('You can only select 6 numbers.');
        return;
      }
      selectedNumbers.push(num); // Select number
    }
    displaySelectedNumbers();
  }

  function displaySelectedNumbers() {
    selectedNumbersDiv.textContent = `Selected Numbers: ${selectedNumbers.join(', ')}`;
  }

  function generateBoards(numberOfBoards) {
    boards = [];
    for (let i = 0; i < numberOfBoards; i++) {
      const board = selectedNumbers.slice(); // Create a copy of selectedNumbers
      boards.push(board);
    }
    displayBoards();
    saveTicket(); // Save generated ticket
  }

  function displayBoards() {
    boardSelectionDiv.innerHTML = ''; // Clear previous content
    boards.forEach((board, index) => {
      const boardDiv = document.createElement('div');
      boardDiv.textContent = `Board ${index + 1}: ${board.join(', ')}`;
      boardSelectionDiv.appendChild(boardDiv);
    });
  }

  function saveTicket() {
    const ticket = {
      id: ticketIdCounter++,
      datePlayed: new Date().toLocaleString(),
      numbers: selectedNumbers.slice() // Save a copy of selectedNumbers
    };

    // Save ticket to localStorage
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push(ticket);
    localStorage.setItem('tickets', JSON.stringify(tickets));

    // Display ticket summary
    displayTicketSummary(ticket);
  }

  function displayTicketSummary(ticket) {
    const ticketSummary = `Ticket ID: ${ticket.id}, Date Played: ${ticket.datePlayed}, Numbers: ${ticket.numbers.join(', ')}`;
    ticketSummaryDiv.textContent = ticketSummary;
  }

  function resetSelections() {
    selectedNumbers = [];
    boards = [];
    selectedNumbersDiv.textContent = 'Selected Numbers:';
    boardSelectionDiv.innerHTML = '';
  }

  generateBoardsButton.addEventListener('click', function() {
    if (selectedNumbers.length !== 6) {
      alert('Please select exactly 6 numbers before generating boards.');
      return;
    }
    const numberOfBoards = parseInt(prompt('Enter number of boards to generate (max 10):'), 10);
    if (numberOfBoards > 0 && numberOfBoards <= 10) {
      generateBoards(numberOfBoards);
    } else {
      alert('Invalid number of boards. Please enter a number between 1 and 10.');
    }
  });

  submitButton.addEventListener('click', function() {
    if (boards.length === 0) {
      alert('Please generate boards before submitting.');
      return;
    }
    const includeLottoPlus1 = lottoPlus1Checkbox.checked;
    const includeLottoPlus2 = lottoPlus2Checkbox.checked;
    const numberOfBoards = boards.length;
    const totalCost = calculateTicketCost(numberOfBoards, includeLottoPlus1, includeLottoPlus2);
    alert(`Total Cost: ${totalCost} R`);
    // Proceed with finalizing ticket purchase or other actions as needed
  });

  function calculateTicketCost(numberOfBoards, includeLottoPlus1, includeLottoPlus2) {
    let baseCost = numberOfBoards * 5.00;
    if (includeLottoPlus1) {
      baseCost += numberOfBoards * 2.50;
    }
    if (includeLottoPlus2) {
      baseCost += numberOfBoards * 2.50;
    }
    return baseCost;
  }

  generateNumberGrid();
});

document.addEventListener('DOMContentLoaded', function() {
  const simulateDrawButton = document.getElementById('simulate-draw');
  const winningNumbersDiv = document.getElementById('winning-numbers');

  simulateDrawButton.addEventListener('click', function() {
    const winningNumbers = simulateDraw();
    displayWinningNumbers(winningNumbers);

    // Check winning tickets
    checkWinningTickets(winningNumbers);
  });

  function simulateDraw() {
    const winningNumbers = [];
    while (winningNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 52) + 1; // Random number between 1 and 52
      if (!winningNumbers.includes(randomNumber)) {
        winningNumbers.push(randomNumber);
      }
    }
    return winningNumbers;
  }

  function displayWinningNumbers(numbers) {
    winningNumbersDiv.textContent = `Winning Numbers: ${numbers.join(', ')}`;
  }

  function checkWinningTickets(winningNumbers) {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];

    const winningTickets = tickets.filter(ticket => {
      return ticket.numbers.every(num => winningNumbers.includes(num));
    });

    if (winningTickets.length > 0) {
      alert(`Admin Alert: There are ${winningTickets.length} winning tickets.`);
      // Display winning tickets or take admin action
      displayWinningTickets(winningTickets);
    } else {
      alert('Admin Alert: No winning tickets for this draw.');
    }
  }

  function displayWinningTickets(tickets) {
    // Example: Display winning ticket IDs and numbers
    tickets.forEach(ticket => {
      console.log(`Ticket ID: ${ticket.id}, Numbers: ${ticket.numbers.join(', ')}`);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const simulateDrawButton = document.getElementById('simulate-draw');
  const winningNumbersDiv = document.getElementById('winning-numbers');
  const ticketsSummaryDiv = document.getElementById('tickets-summary');

  // Initialize tickets array from localStorage or empty array
  let tickets = JSON.parse(localStorage.getItem('tickets')) || [];

  simulateDrawButton.addEventListener('click', function() {
    const winningNumbers = simulateDraw();
    displayWinningNumbers(winningNumbers);

    // Check winning tickets
    checkWinningTickets(winningNumbers);
  });

  function simulateDraw() {
    const winningNumbers = [];
    while (winningNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 52) + 1; // Random number between 1 and 52
      if (!winningNumbers.includes(randomNumber)) {
        winningNumbers.push(randomNumber);
      }
    }
    return winningNumbers;
  }

  function displayWinningNumbers(numbers) {
    winningNumbersDiv.textContent = `Winning Numbers: ${numbers.join(', ')}`;
  }

  function checkWinningTickets(winningNumbers) {
    const winningTickets = tickets.filter(ticket => {
      return ticket.numbers.every(num => winningNumbers.includes(num));
    });

    if (winningTickets.length > 0) {
      alert(`Admin Alert: There are ${winningTickets.length} winning tickets.`);
      // Display winning tickets or take admin action
      displayWinningTickets(winningTickets);
    } else {
      alert('Admin Alert: No winning tickets for this draw.');
    }
  }

  function displayWinningTickets(tickets) {
    // Example: Display winning ticket IDs and numbers
    tickets.forEach(ticket => {
      console.log(`Ticket ID: ${ticket.id}, Numbers: ${ticket.numbers.join(', ')}`);
    });
  }

  function generateTicketId() {
    // Generate a unique ticket ID (timestamp-based for simplicity)
    return Date.now().toString();
  }

  function generateBoards(numberOfBoards) {
    for (let i = 0; i < numberOfBoards; i++) {
      const board = selectedNumbers.slice(); // Create a copy of selectedNumbers
      const ticketId = generateTicketId();
      tickets.push({ id: ticketId, numbers: board });
      saveTicketsToLocalStorage();
    }
    displayTicketsSummary();
    displayBoards();
  }

  function saveTicketsToLocalStorage() {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }

  function displayTicketsSummary() {
    ticketsSummaryDiv.innerHTML = ''; // Clear previous content
    const summaryHeading = document.createElement('h2');
    summaryHeading.textContent = 'Tickets Summary';
    ticketsSummaryDiv.appendChild(summaryHeading);

    tickets.forEach(ticket => {
      const ticketDiv = document.createElement('div');
      ticketDiv.textContent = `Ticket ID: ${ticket.id}, Numbers: ${ticket.numbers.join(', ')}`;
      ticketsSummaryDiv.appendChild(ticketDiv);
    });
  }

  generateNumberGrid();
  displayTicketsSummary(); // Display summary on page load
});*/
// script.js

// Sample user and admin credentials for demonstration purposes
const users = [
  { username: 'user', password: 'userpass' }
];

const admins = [
  { username: 'admin', password: 'adminpass' }
];

function showLoginForm(role) {
  document.getElementById('user-login-form').classList.toggle('hidden', role !== 'user');
  document.getElementById('admin-login-form').classList.toggle('hidden', role !== 'admin');
  document.getElementById('user-registration-form').classList.add('hidden');
}

function showRegistrationForm() {
  document.getElementById('user-login-form').classList.add('hidden');
  document.getElementById('user-registration-form').classList.remove('hidden');
}

function hideRegistrationForm() {
  document.getElementById('user-registration-form').classList.add('hidden');
  document.getElementById('user-login-form').classList.remove('hidden');
}

function handleUserLogin(event) {
  event.preventDefault();
  const username = document.getElementById('user-username').value;
  const password = document.getElementById('user-password').value;

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    window.location.href = 'user.html';
  } else {
    alert('Invalid username or password');
  }
}

function handleAdminLogin(event) {
  event.preventDefault();
  const username = document.getElementById('admin-username').value;
  const password = document.getElementById('admin-password').value;

  const admin = admins.find(a => a.username === username && a.password === password);
  if (admin) {
    window.location.href = 'admin.html';
  } else {
    alert('Invalid username or password');
  }
}

function handleUserRegistration(event) {
  event.preventDefault();
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  if (users.some(u => u.username === username)) {
    alert('Username already exists');
    return;
  }

  users.push({ username, password });
  alert('Registration successful');
  hideRegistrationForm();
}


// user-script.js

// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a single board with 52 ordered numbers
function generateBoard() {
  const board = Array.from({ length: 52 }, (_, i) => i + 1);
  return board;
}

// Function to get the color based on the number range
function getColor(number) {
  if (number >= 1 && number <= 13) return 'red';
  if (number >= 14 && number <= 25) return 'yellow';
  if (number >= 26 && number <= 37) return 'green';
  if (number >= 38 && number <= 52) return 'blue';
  return 'white';
}

// Function to display the board in a table format
function displayBoard(board, index) {
  const container = document.getElementById('boards-container');
  const table = document.createElement('table');
  table.className = 'board-table';
  table.dataset.boardIndex = index;

  const tbody = document.createElement('tbody');
  let row = document.createElement('tr');
  for (let i = 0; i < board.length; i++) {
    if (i % 13 === 0 && i !== 0) {
      table.appendChild(row);
      row = document.createElement('tr');
    }

    const cell = document.createElement('td');
    cell.textContent = board[i];
    cell.style.backgroundColor = getColor(board[i]);
    cell.className = 'number-ball';
    cell.addEventListener('click', () => selectNumber(cell, board[i]));
    row.appendChild(cell);
  }
  table.appendChild(row);

  const caption = document.createElement('caption');
  caption.textContent = `Board ${index + 1}`;
  table.appendChild(caption);

  container.appendChild(table);
}

// Function to handle the selection of a number on the board
const selectedNumbers = new Set();

function selectNumber(cell, number) {
  const maxSelections = 6;

  if (selectedNumbers.has(number)) {
    cell.classList.remove('selected');
    selectedNumbers.delete(number);
  } else {
    if (selectedNumbers.size >= maxSelections) {
      alert(`You can only select up to ${maxSelections} numbers per board.`);
      return;
    }
    cell.classList.add('selected');
    selectedNumbers.add(number);
  }

  updateSelectedNumbersList();
}

// Function to update the list of selected numbers
function updateSelectedNumbersList() {
  const list = document.getElementById('selected-numbers-list');
  list.innerHTML = '';
  selectedNumbers.forEach(number => {
    const li = document.createElement('li');
    li.textContent = number;
    list.appendChild(li);
  });

  // Show the ticket number and timestamp when 6 numbers are selected
  if (selectedNumbers.size === 6) {
    showTicketAndTimestamp();
  }
}

// Function to generate a random ticket number and display it with a timestamp
function showTicketAndTimestamp() {
  const ticketNumber = getRandomNumber(100000, 999999); // Random 6-digit ticket number
  const timestamp = new Date().toLocaleString(); // Current date and time

  document.getElementById('ticket-number').textContent = `Your Ticket Number: ${ticketNumber}`;
  document.getElementById('timestamp').textContent = `Timestamp: ${timestamp}`;

  // Save the ticket information and selected numbers to LocalStorage
  const playedBoards = JSON.parse(localStorage.getItem('playedBoards')) || [];
  const newEntry = {
    numbers: Array.from(selectedNumbers),
    timestamp: timestamp,
    ticket: ticketNumber
  };
  playedBoards.push(newEntry);
  localStorage.setItem('playedBoards', JSON.stringify(playedBoards));
}

// Function to handle form submission and generate the boards
function generateBoards(event) {
  event.preventDefault();

  const numberOfBoards = parseInt(document.getElementById('number-of-boards').value);
  document.getElementById('boards-container').innerHTML = '';
  selectedNumbers.clear();
  updateSelectedNumbersList();

  for (let i = 0; i < numberOfBoards; i++) {
    const board = generateBoard();
    displayBoard(board, i);
  }
}

// Function to save data to LocalStorage
function saveData() {
  const ticketNumber = document.getElementById('ticket-number').textContent.split(': ')[1];
  const timestamp = document.getElementById('timestamp').textContent.split(': ')[1];
  if (!ticketNumber || !timestamp) {
    alert('Please generate a ticket first.');
    return;
  }

  const playedBoards = JSON.parse(localStorage.getItem('playedBoards')) || [];
  const newEntry = {
    numbers: Array.from(selectedNumbers),
    timestamp: timestamp,
    ticket: ticketNumber
  };
  playedBoards.push(newEntry);
  localStorage.setItem('playedBoards', JSON.stringify(playedBoards));
  alert('Data saved successfully!');
}

// script.js

function generateBoards(event) {
  event.preventDefault();

  const numberOfBoards = parseInt(document.getElementById('number-of-boards').value);
  const lottoPlus1 = document.getElementById('lotto-plus-1').checked;
  const lottoPlus2 = document.getElementById('lotto-plus-2').checked;

  let totalCost = numberOfBoards * 5; // R5.00 per board

  if (lottoPlus1) {
    totalCost += numberOfBoards * 2.5; // R2.50 per board for Lotto Plus 1
  }

  if (lottoPlus2) {
    totalCost += numberOfBoards * 2.5; // R2.50 per board for Lotto Plus 2
  }

  document.getElementById('total-cost').innerText = totalCost.toFixed(2);

  // Generate boards and display them in boards-container
  const boardsContainer = document.getElementById('boards-container');
  boardsContainer.innerHTML = ''; // Clear previous boards

  for (let i = 0; i < numberOfBoards; i++) {
    const board = document.createElement('div');
    board.classList.add('board');
    board.innerText = `Board ${i + 1}`; // Placeholder for actual board content
    boardsContainer.appendChild(board);
  }

  return false; // Prevent form submission
}

function saveData() {
  // Placeholder for saving data logic
  alert('Data saved!');
}

function purchaseTicket() {
  const totalCost = document.getElementById('total-cost').innerText;
  alert(`Ticket purchased! Total cost: R${totalCost}`);
}



