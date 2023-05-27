// Obtener la URL actual
const url = new URL(window.location.href);

// Obtener el valor del parámetro JSON de la URL
const jsonParam = url.searchParams.get("json");

//Transformar en json
const tojson = JSON.parse(jsonParam);
// Convertir el JSON a un objeto Map
const map = new Map();
Object.entries(tojson).forEach(([clave, valor]) => {
map.set(clave, valor);
});
const table = document.getElementById("table");
const tablebody = document.getElementById("tableBody");
var result = 0;
// Agregar filas con clave y valores
map.forEach((valores, clave) => {
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  const formattedClave = clave.replace(/_/g, " "); // Reemplazar guiones bajos por espacios
  cell1.textContent = formattedClave;
  const cell2 = document.createElement("td");
  cell2.textContent = "$"+valores;
  result += parseInt(valores);
  row.appendChild(cell1);
  row.appendChild(cell2);
  tablebody.appendChild(row);
});

//Agregar total
const row = document.createElement("tr");
row.setAttribute("id","result");
const cell1 = document.createElement("td");
const cell2 = document.createElement("td");

cell1.textContent ="Total a pagar"
cell2.textContent = "$"+result;

row.appendChild(cell1);
row.appendChild(cell2);
tablebody.appendChild(row);

