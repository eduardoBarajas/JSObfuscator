let btn_convertir = document.getElementById('convertir_btn');
let text_area_codigo = document.getElementById('textarea_codigo');
let textarea_codigo_obfuscado = document.getElementById('textarea_codigo_obfuscado');
let nivel_obfuscacion = document.getElementById('nivel_obfuscacion');
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});
btn_convertir.addEventListener('click', (e) => {
    if (text_area_codigo.value.length > 0) {
        fetch('/obfuscate/' + nivel_obfuscacion.value, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({code: text_area_codigo.value}), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => {M.toast({html: 'Ocurrio un problema, intenta de nuevo', classes: 'toast-error'});console.error('Error:', error)})
          .then(response => {
                console.log('Success:', response);
                M.toast({html: 'Se convirtio el codigo con exito', classes: 'toast-sucess'});
                textarea_codigo_obfuscado.value = response.javascript;
            });
    } else {
        M.toast({html: 'Debes agregar un codigo antes de convertir', classes: 'toast-error'});
    }
});