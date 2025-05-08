"use strict"

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

let artikli = []
function createProductRows(artikli) {
    let table = document.querySelector("#product-body")
    table.innerHTML = ""


    for(let i = 0; i < artikli.length; i++) {
        let tr = document.createElement("tr")
        
        let rb = document.createElement("td")
        let naziv = document.createElement("td")
        let cena = document.createElement("td")
    
        rb.textContent = i + 1
        naziv.textContent = artikli[i].naziv
        cena.textContent = artikli[i].cena
    
        tr.addEventListener("click", () => displayProductDetails(artikli[i]))
            
        tr.append(rb, naziv, cena)
        table.appendChild(tr)
    }
}

function displayProductDetails(artikal) {
    let p = document.createElement("p")  
    p.innerHTML = 
        "Naziv: " + artikal.naziv + "<br>" + 
        "Cena: " + artikal.cena + "<br>" + 
        "Opis: " + artikal.opis
  
    let detalji = document.querySelector("#productDetails")
  
    if (detalji.firstChild) {
        detalji.firstChild.remove()
    }
  
    detalji.appendChild(p)
  }

function initializeProducts() {
    artikli = [
        new Artikal("Monitor", 165, "Monitor XVision 27Q je elegantan 27-inčni ekran sa QHD rezolucijom (2560x1440), idealan za svakodnevni rad, gejming i multimediju."),
        new Artikal("TV", 650, "Samsung Crystal UHD 55CU8002 je moderan 55-inčni pametni televizor sa 4K rezolucijom koji nudi izuzetno oštru sliku i bogat spektar boja zahvaljujući Crystal Processor 4K tehnologiji."),
        new Artikal("Mis", 20, "LogiX M720 je ergonomski bežični miš dizajniran za udobnost tokom celodnevnog rada.")
    ]

    createProductRows(artikli)
    handleFormSubmission(artikli)
}

document.addEventListener('DOMContentLoaded', initializeProducts)

function handleFormSubmission(artikli) {
    let submitBtn = document.querySelector("#submitBtn")
    submitBtn.addEventListener('click', function() {
        const forma = document.querySelector('#forma')
        const formData = new FormData(forma)

        const naziv = formData.get("naziv")
        const cena = formData.get("cena")
        const opis = formData.get("opis")

        for (let i = 0; artikli.length; i++) {
            if (naziv === artikli[i].name)
                return
        }

        const noviArtikal = new Artikal(naziv, cena, opis)
        artikli.push(noviArtikal)

        createProductRows(artikli)
    })
}