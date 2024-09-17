document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        const ul = document.querySelector('.user-list ul');
        const li = document.createElement('li');
        li.textContent = username;
        const button = document.createElement('button');
        button.textContent = 'Eliminar';
        button.className = 'delete-btn';
        li.appendChild(button);
        ul.appendChild(li);
        document.getElementById('username').value = '';
    }
});

document.querySelector('.user-list').addEventListener('click', function(e) {
    if (e.target.className === 'delete-btn') {
        e.target.parentElement.remove();
    }
});