function clear_btn_text_numbers_text(){
  document.getElementById('text_numbers').value = '';
}

function clear_btn_text_numbers_table(){
  const table = document.getElementById('table_numbers');
  while (table.tBodies[0].firstChild) {
    table.tBodies[0].removeChild(table.tBodies[0].firstChild);
  }
}

function clear_btn_text_message(){
  document.getElementById('text_message').value = '';
}

function separate_numbers_btn(){
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
}

function concatenateTableValues() {
  var table = document.getElementById("table_numbers");
  var input = document.getElementById("list_numbers");
  var values = [];
  
  for (var i = 1, row; row = table.rows[i]; i++) {
    values.push(row.cells[0].innerHTML);
  }
  
  input.value = values.join(",");
}

document.getElementById('separate_numbers_btn').addEventListener('click', (event) => {
  clear_btn_text_numbers_table();
  separate_numbers_btn();
});

document.getElementById('clear_btn').addEventListener('click', (event) => {
  clear_btn_text_numbers_text();
  clear_btn_text_numbers_table();
});

document.getElementById('send_message_btn').addEventListener('click', (event) => {
  clear_btn_text_numbers_table();
  separate_numbers_btn();
  concatenateTableValues();
});