function updateSubtotals() {
    const rows = document.querySelectorAll('#cart-items tr');

    rows.forEach(row => {
        const price = parseFloat(row.querySelector('.price').textContent.replace('$', ''));
        const quantity = parseInt(row.querySelector('.quantity').value);
        const subtotal = price * quantity;
        row.querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`;
    });
}

// Event listener for quantity inputs
document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('input', updateSubtotals);
});

// Event listener for remove buttons
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const row = this.closest('tr');
        row.remove();
        updateSubtotals(); // Update subtotals if necessary
    });
});

// Initial calculation
updateSubtotals();
