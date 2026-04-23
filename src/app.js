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

const propertyList = [      //lista, tömb
	{id: 1, type: 'for sale', price: 65000, city: 'Pécs', baseArea: 80},
	{id: 2, type: 'for sale', price: 102000, city: 'Pécs', baseArea: 75},
	{id: 3, type: 'for sale', price: 89000, city: 'Pécs', baseArea: 120},
	{id: 4, type: 'for sale', price: 48000, city: 'Szeged', baseArea: 67},
	{id: 5, type: 'for sale', price: 57000, city: 'Hatvan', baseArea: 98},
	{id: 6, type: 'for rent', price: 90, city: 'Pécs', baseArea: 72},
]

const doc = { 
    tbody: document.querySelector('#tbody'),
    aboutButton: document.querySelector('#aboutButton')
};

propertyList.forEach(prop => {
    
})

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