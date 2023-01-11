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

async function sendTable() {
  // Obtén todas las filas de la tabla
  const rows = document.querySelectorAll('#table_numbers tr');

  // Itera sobre cada fila y envía una solicitud POST a la API
  for (const row of rows) {
    // Crea un FormData con la fila
    const data = new FormData();
    data.append('row', row.outerHTML);

    // Envía la solicitud POST a la API
    const response = await fetch('/send', { method: 'POST', body: data });
    const result = await response.text();

    // Muestra el resultado en la consola
    console.log(row);
    console.log(result);
  }
}

document.getElementById('separate_numbers_btn').addEventListener('click', function() {
  clear_btn_text_numbers_table();
  separate_numbers_btn();
});

document.getElementById('clear_btn').addEventListener('click', function() {
  clear_btn_text_numbers_text();
  clear_btn_text_numbers_table();
});

document.getElementById('send_message_btn').addEventListener('click', function() {
  clear_btn_text_numbers_table();
  separate_numbers_btn();
  console.log("se esta enviando mensajes");

  sendTable()
});