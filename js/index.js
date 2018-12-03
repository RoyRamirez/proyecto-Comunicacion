var a = document.getElementsByClassName('boton');

for (var k = 0; k < 9; k++) {
  a[k].addEventListener("click", function () {
    var element = document.getElementsByClassName(this.attributes[1].value);
    var element2 = document.getElementsByClassName("nooculto");
    var el2 = element2[0];
    var el = element[0];
    el.classList.toggle('nooculto');
    el.classList.toggle('oculto');
    el2.classList.toggle('nooculto');
    el2.classList.toggle('oculto');
  });
}

var botones = document.getElementsByClassName('botonAgregar');

for(var k = 0; k < 41; k++) {
  botones[k].addEventListener("click", function () {
    alert("Se agregó correctamente el producto");
  });
}
