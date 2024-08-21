// // Obtener referencias a los elementos del DOM
// const formularioIngreso = document.getElementById('formulario-ingreso');
// const formularioEgreso = document.getElementById('formulario-egreso');
// const listaIngresos = document.getElementById('lista-ingresos');
// const listaEgresos = document.getElementById('lista-egresos');
// const saldoTotal = document.getElementById('saldo-total');
// const filtroCategoria = document.getElementById('filtro-categoria');

// // Cargar datos del localStorage al iniciar
// let ingresos = JSON.parse(localStorage.getItem('ingresos')) || [];
// let egresos = JSON.parse(localStorage.getItem('egresos')) || [];
// actualizarUI();

// // Manejar el envío del formulario de ingreso
// formularioIngreso.addEventListener('submit', agregarIngreso);

// // Manejar el envío del formulario de egreso
// formularioEgreso.addEventListener('submit', agregarEgreso);

// // Manejar el cambio en el filtro de categoría
// filtroCategoria.addEventListener('change', filtrarPorCategoria);

// // Función para agregar un nuevo ingreso
// function agregarIngreso(event) {
//     event.preventDefault(); // Evitar que la página se recargue

//     const descripcion = document.getElementById('descripcion-ingreso').value;
//     const monto = parseFloat(document.getElementById('monto-ingreso').value);

//     // Validar los datos (puedes agregar más validaciones según tus necesidades)
//     if (descripcion.trim() === '' || isNaN(monto) || monto <= 0) {
//         alert('Por favor, ingresa una descripción y un monto válido.');
//         return;
//     }

//     const nuevoIngreso = {
//         descripcion: descripcion,
//         monto: monto
//     };

//     ingresos.push(nuevoIngreso);
//     localStorage.setItem('ingresos', JSON.stringify(ingresos));
//     actualizarUI();

//     // Limpiar el formulario después de agregar el ingreso
//     formularioIngreso.reset();
// }

// // Función para agregar un nuevo egreso (similar a agregarIngreso, pero para egresos)
// function agregarEgreso(event) {
//     // ... (implementa la lógica para agregar un egreso)
// }

// // Función para editar un ingreso o egreso (puedes implementar esto más adelante)
// function editarElemento(tipo, index) {
//     // ... (implementa la lógica para editar un elemento existente)
// }

// // Función para eliminar un ingreso o egreso
// function eliminarElemento(tipo, index) {
//     if (tipo === 'ingreso') {
//         ingresos.splice(index, 1);
//         localStorage.setItem('ingresos', JSON.stringify(ingresos));
//     } else if (tipo === 'egreso') {
//         egresos.splice(index, 1);
//         localStorage.setItem('egresos', JSON.stringify(egresos));
//     }
//     actualizarUI();
// }

// // Función para filtrar por categoría (puedes implementar esto más adelante)
// function filtrarPorCategoria() {
//     // ... (implementa la lógica para filtrar los elementos por categoría)
// }

// // Función para actualizar la interfaz de usuario
// function actualizarUI() {
//     listaIngresos.innerHTML = '';
//     listaEgresos.innerHTML = '';

//     let totalIngresos = 0;
//     let totalEgresos = 0;

//     ingresos.forEach((ingreso, index) => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             ${ingreso.descripcion}: $${ingreso.monto.toFixed(2)}
//             <button onclick="editarElemento('ingreso', ${index})">Editar</button>
//             <button onclick="eliminarElemento('ingreso', ${index})">Eliminar</button>
//         `;
//         listaIngresos.appendChild(listItem);
//         totalIngresos += ingreso.monto;
//     });

//     egresos.forEach((egreso, index) => {
//         // ... (similar a ingresos, pero para egresos)
//     });

//     const saldo = totalIngresos - totalEgresos;
//     saldoTotal.textContent = `Saldo: $${saldo.toFixed(2)}`;
// }
