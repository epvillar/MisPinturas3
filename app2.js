// este file es para explicar los pasos que se siguieron para armar script.js

const sectionCenter = document.querySelector(".section-center")
console.log(sectionCenter)
// me trae todo el div class section-center

window.addEventListener("DOMContentLoaded", function() {
    let displayObras2 = obras2.map(function(item) {
        //console.log(item) // me trae individualmente todas las obras
        //return `<h1>${item.title}`  // me trae un array con todos los títulos 
        //de las obras
        
        // usa return para traer el article completo
        // usa las variables para reemplazar el contenido
        return `<article class="obras-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="pintor">${item.pintor}</h4>
          </header>
        </div>
      </article>`;

    })

console.log(displayObras2) // me da las obras individualmente, el siguiente paso 
//es unirlas en un string usando la propiedad join
// se le agrega join('') para quen entre un item y el siguiente no haya una coma
// con comas

displayObras2 = displayObras2.join("")
console.log(displayObras2) // un gran string con todas las obras

// es paso siguiente es add ese string a our data usando la propiedad innerHTML
sectionCenter.innerHTML = displayObras2
})