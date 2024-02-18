let billetter = [];


function visBilletter(){
    let kjøptFilm = document.getElementById("filmer").value;
    let antallBilletter = document.getElementById("antall").value;
    let gittnavn = document.getElementById("fornavn").value;
    let slektsnavn = document.getElementById("etternavn").value;
    let tlf = document.getElementById("telefon").value;
    let mail = document.getElementById("epost").value;

    let billett1 = {
        filmer: kjøptFilm,
        antall: antallBilletter,
        fornavn: gittnavn,
        etternavn: slektsnavn,
        telefon: tlf,
        epost: mail
    };

    billetter.push(billett1);

}


let ut = "<t<ble><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" +
    "</tr>";