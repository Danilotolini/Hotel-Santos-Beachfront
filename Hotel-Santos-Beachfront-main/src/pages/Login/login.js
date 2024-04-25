 function login() {
        const email= document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        const user = users.find(user => user.email === email && user.senha === senha);

        if (user) {
            alert('Login bem sucedido!');
             window.location.href = 'http://127.0.0.1:5500/Hotel-Santos-Beachfront-main/src/pages/Pagina%20Inicial/Paginahotel.html';

        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }

        // Limpa os campos do formulário
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';

        return false;
    }
    document.getElementById('loginForm').onsubmit = login;