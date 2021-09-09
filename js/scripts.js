let array1 = ["jose", "paola", "nestor", "daniel"];
console.log(array1)
array1.push("carlos");
console.log(array1)
    // let persona1 = { nombre: "jose" };
    // let persona2 = { nombre: "paola" };
    // let personas = [{
    //             nombre: "jose",
    //             edad: 45,
    //             foto: "https://d29fhpw069ctt2.cloudfront.net/icon/image/49067/preview.svg",
    //             ubicacion: {
    //                 pais: "colombia",
    //                 ciudad: "bogota"
    //             }
    //         },
    //         {
    //             nombre: "paola",
    //             edad: 35,
    //             foto: "https://icons-for-free.com/iconfiles/png/512/person-1324760545186718018.png",
    //             ubicacion: {
    //                 pais: "argentina",
    //                 ciudad: "buenos aires"
    //             }


//         },
//         {
//             nombre: "nestor",
//             edad: 15,
//             foto: "https://cdn.icon-icons.com/icons2/2121/PNG/512/people_avatar_boy_child_person_icon_131264.png",
//             ubicacion: {
//                 pais: "francia",
//                 ciudad: "paris"
//             }
//         },
//         {
//             nombre: "daniel",
//             edad: 80,
//             foto: "https://cdn.icon-icons.com/icons2/1465/PNG/512/122oldman2_100986.png",
//             ubicacion: {
//                 pais: "italia",
//                 ciudad: "roma"
//             }
//         }
//     ]
// console.log(array1);
// console.log(personas);
// for (let index = 0; index < array1.length; index++) {
//     console.log(array1[index]);

// }
let personas2 = [{
    nombre: "jose",
    edad: 45,
    foto: "https://d29fhpw069ctt2.cloudfront.net/icon/image/49067/preview.svg",

}]

function MostrarUsuarios() {
    let personasHTML = '';
    for (let index = 0; index < personas2.length; index++) {
        personasHTML += ` <div class="col-3">
                        <div class="card" style="">
                            <img src="${personas2[index].foto}" class="card-img-top img-responsive" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Nombre: ${personas2[index].nombre}</h5>
                                <p class="card-text">Edad: ${personas2[index].edad}</p>
                               
                            </div>
                        </div>
                      </div>`;
    }
    document.getElementById('lista-perfiles').innerHTML = personasHTML;
}
MostrarUsuarios();

function agregar() {
    let nombre = $("#nombre").val();
    let edad = $("#edad").val();
    let urlFoto = $("#foto").val();

    console.log(nombre, edad, urlFoto);
    personas2.push({
        nombre: nombre,
        edad: edad,
        foto: urlFoto,

    });
    console.log(personas2),
        MostrarUsuarios();

}

// $(document).ready(function() {
//     $.get("https://rickandmortyapi.com/api/character", function(data) {
//         let listaPersonajes = data.results;
//         let htmlPersonajes = ''
//         console.log(listaPersonajes);
//         for (let index = 0; index < listaPersonajes.length; index++) {
//             htmlPersonajes += `<div class="col-3">
//                         <div class="card" style="">
//                             <img src="${listaPersonajes[index].image}" class="card-img-top img-responsive" alt="...">
//                             <div class="card-body">
//                                 <h5 class="card-title">${listaPersonajes[index].name}</h5>

//                             </div>
//                         </div>
//                       </div>`;
//         }
//         $("#lista-perfiles").html(htmlPersonajes);
//     });
// });