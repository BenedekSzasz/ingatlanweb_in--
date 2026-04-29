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
    createProperty 
} from './propertyService.js'

      //lista, tömb


console.log(await getProperties())
var propertyList = await getProperties()

const doc = { 
    tbody: document.querySelector('#tbody'),
    aboutButton: document.querySelector('#aboutButton'),
    saveButton: document.querySelector('#saveButton'),
    propertyForm: document.querySelector('#propertyForm')
};

doc.propertyForm.addEventListener('submit',  (event) => {
    event.preventDefault()
    console.log("Mükszik")

    const propertyForm = new FormData(event.target)
    const type =propertyForm.get('type')
    const price = propertyForm.get('price')
    const city = propertyForm.get('city')
    const baseArea = propertyForm.get('baseArea')
})

// propertyList.forEach(prop => {
    
// })

var rows = ''
propertyList.forEach(prop => {
    var row = `
        <tr>
            <td>${prop.id}</td>
            <td>${prop.type}</td>
            <td>${prop.price}</td>
            <td>${prop.city}</td>
            <td>${prop.baseArea}</td>
        </tr>
        `
    rows += row
})

doc.tbody.innerHTML = rows

doc.aboutButton.addEventListener('click', () => {
    
    Swal.fire({
        title: "Ingatlan",
        text: "Szász Benedek, IN, 2026-04-23",
    })
})

doc.saveButton.addEventListener('click', async () => {
    startSave()
})

function startSave () {
    createNewProperty()
}
function createNewProperty () {
    const property = {
        type: 'rent',
        price: 98,
        city: 'Pécs',
        baseArea: 59
    }
    const res = await createProperty(property)
    console.log(res)
}
function updateOneProperty () {}
