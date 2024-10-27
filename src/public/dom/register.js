function togglePassword() {
    const passwordField = document.getElementById('floatingPassword');
    const button = event.target;

    if (passwordField.value !== "") {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            button.innerHTML = '<span><i class="fa-solid fa-eye-slash"></i></span>';
        } else {
            passwordField.type = 'password';
            button.innerHTML = '<span><i class="fa-solid fa-eye"></i></span>';
        }
    }
}

document.getElementById('toggleButton').addEventListener('click', function(event) {
    togglePassword(event.target);
});