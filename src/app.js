/*
* File: App.java
* Author: Szász Benedek
* Copyright: 2026, Szász Benedek
* Group: Szoft I N
* Date: 2026-04-23
* Github: https://github.com/BenedekSzasz/
* Licenc: MIT
*/

import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Swal from 'sweetalert2'

import { 
    getProperties, 
    createProperty,
    deleteProperty 
} from './propertyService.js'

// deleteProperty(13)

      //lista, tömb


console.log(await getProperties())
var propertyList = await getProperties()

const doc = { 
    tbody: document.querySelector('#tbody'),
    aboutButton: document.querySelector('#aboutButton'),
    propertyForm: document.querySelector('#propertyForm')
};

doc.propertyForm.addEventListener('submit',  (event) => {
    event.preventDefault()
    console.log("Mükszik")

    const propertyForm = new FormData(event.target)
    const property = {
    type: propertyForm.get('type'),
    price: propertyForm.get('price'),
    city: propertyForm.get('city'),
    baseArea: propertyForm.get('baseArea')
    }
    startSave(property)
})
function deleteOneProperty (id) {
    deleteProperty(id)
    
}

// propertyList.forEach(prop => {
    
// })
function render() {
  var rows = '';
  propertyList.forEach(prop => {
    var row = `
      <tr>
        <td>${prop.id}</td>
        <td>${prop.type}</td>
        <td>${prop.price}</td>
        <td>${prop.city}</td>
        <td>${prop.baseArea}</td>
        <td>
          <button class="btn btn-danger" onclick="deleteOneProperty">Törlés</button>
        </td>
      </tr>
    `;
    rows += row;
  });
  return rows;
    }
  doc.tbody.innerHTML = render();

doc.tbody.innerHTML = rows

doc.aboutButton.addEventListener('click', () => {
    
    Swal.fire({
        title: "Ingatlan",
        text: "Szász Benedek, IN, 2026-04-23",
    })
})

function startSave (property) {
    createNewProperty(property)
}
async function createNewProperty () {
    const res = await createProperty(property)
    render()
    console.log(res)
}
function updateOneProperty () {}


render()
