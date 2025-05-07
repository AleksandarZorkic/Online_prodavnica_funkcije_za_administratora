"use strict"

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

let monitor = new Artikal("Monitor", 165, "Monitor XVision 27Q je elegantan 27-inčni ekran sa QHD rezolucijom (2560x1440), idealan za svakodnevni rad, gejming i multimediju.")
let tv = new Artikal("TV", 650, "Samsung Crystal UHD 55CU8002 je moderan 55-inčni pametni televizor sa 4K rezolucijom koji nudi izuzetno oštru sliku i bogat spektar boja zahvaljujući Crystal Processor 4K tehnologiji.")
let mis = new Artikal("Mis", 20, "LogiX M720 je ergonomski bežični miš dizajniran za udobnost tokom celodnevnog rada.")

let artikli = [monitor, tv, mis]

let table = document.querySelector("#product-body")

for(let i = 0; i < artikli.length; i++) {
    let artikal = artikli[i]
    let tr = document.createElement("tr")

    let rb = document.createElement("td")
    let naziv = document.createElement("td")
    let cena = document.createElement("td")

    rb.textContent = i + 1
    naziv.textContent = artikal.naziv
    cena.textContent = artikal.cena
    opis.textContent = artikal.opis


    table.appendChild(tr)
    tr.appendChild(rb)
    tr.appendChild(naziv)
    tr.appendChild(cena)
}
