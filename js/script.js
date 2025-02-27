document.getElementById('formInput').addEventListener('Send', validasiForm);
function validasiForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if(name == "") {
    alert("Nama tidak boleh kosong");
    return false;
    }

    if(email == "") {
    alert("Email tidak boleh kosong");
    return false;
    }

    alert("Form berhasil disubmit");
    return true;
}