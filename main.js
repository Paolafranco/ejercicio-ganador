document.getElementById("bZona").addEventListener("click", function () {
    var voto1 = document.getElementById("voto1");
    var voto2 = document.getElementById("voto2");
    if (voto1.checked === true && voto2.checked === false) {
        alert("Proceso de selección de votos de la zona 1");
        elegir(zona1);
    }
    if (voto2.checked === true && voto1.checked === false) {
        alert("Proceso de selección de votos de la zona 2");
        elegir(zona2);
    }
    if (voto1.checked === false && voto2.checked === false) {
        alert("no hay zona seleccionada");
    }
    if (voto1.checked === true && voto2.checked === true) {
        voto1.checked = false;
        voto2.checked = false;
        alert("seleccione solo uno");
    }

})
// votos
var zona1 = ["Paola", "Andrea", "Paola", "Andrea", "Mateo", "Ceci", "Andrea",
    "Alejandro", "Paola", "Mateo", "Mateo", "Mateo", "Mateo"];
    var zona2 = ["Paola", "Andrea", "Paola", "Andrea", "Mateo", "Ceci", "Andrea",
    "Alejandro", "Paola", "Andrea","Andrea","Andrea","Andrea"
    ,"Andrea","Andrea"];
var usar = [];
var repetidos = [];
var temporal = [];
var verificar;
var letras;
const a = 0;

function elegir(elementos) {
    elementos.forEach((value, index) => {
        // elemento copiado
        temporal = Object.assign([], elementos);  
        //Se elimina el elemnto repetido
        temporal.splice(index, 1); 
        if (temporal.indexOf(value) != -1 && repetidos.indexOf(value) == -1) {
            repetidos.push(value);

        }
    });
    //validación
    usar = repetidos.sort();
    var abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"
        , "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (var sigue = 0; sigue < repetidos.length; sigue++) {
        for (var abe = 0; abe < abecedario.length; abe++) {
            if (repetidos[sigue][0] == abecedario[abe] && usar[0] == repetidos[sigue]) {
                console.log(repetidos[sigue]);
                document.getElementById("mostrarVoto").innerHTML=repetidos[sigue];
            }
        }
    }
    
    
    console.log(repetidos);
    
}
