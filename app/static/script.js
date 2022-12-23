document.getElementById('separate_numbers_btn').addEventListener('click', function() {
  const textarea = document.getElementById('text_numbers');
  const numbers = textarea.value.split(',');
  const table = document.getElementById('table_numbers');
  numbers.forEach(number => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = number.trim();
    row.appendChild(cell);
    table.tBodies[0].appendChild(row);
  });
});

document.getElementById('clear_btn').addEventListener('click', function() {
  document.getElementById('text_numbers').value = '';
  //document.getElementById('text_message').value = '';
  const table = document.getElementById('table_numbers');
  while (table.tBodies[0].firstChild) {
    table.tBodies[0].removeChild(table.tBodies[0].firstChild);
  }
});
