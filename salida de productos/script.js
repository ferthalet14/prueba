document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;

    const table = document.getElementById('product-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${productName}</td>
        <td>${quantity}</td>
        <td>${date}</td>
    `;

    table.appendChild(row);

    // Limpiar el formulario
    document.getElementById('product-form').reset();
});
