document.addEventListener('DOMContentLoaded', () => {
    const inventoryForm = document.getElementById('inventory-form');
    const inventoryTable = document.getElementById('inventory-table').getElementsByTagName('tbody')[0];

    inventoryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const itemName = document.getElementById('item-name').value;
        const itemQuantity = document.getElementById('item-quantity').value;
        const itemPrice = document.getElementById('item-price').value;

        const newRow = inventoryTable.insertRow();

        const nameCell = newRow.insertCell(0);
        const quantityCell = newRow.insertCell(1);
        const priceCell = newRow.insertCell(2);
        const actionsCell = newRow.insertCell(3);

        nameCell.textContent = itemName;
        quantityCell.textContent = itemQuantity;
        priceCell.textContent = `$${parseFloat(itemPrice).toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete-btn';
        actionsCell.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            inventoryTable.deleteRow(newRow.rowIndex - 1);
        });

        inventoryForm.reset();
    });
});
