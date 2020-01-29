$(document).ready(
  function () {
    var studente = {
      "nome" : "nino",
      "cognome": "chimento",
      "eta" : 35,
      "sesso": "m"
    };
    var ListaStudenti = [
      {
        "nome" : "nino",
        "cognome": "chimento",
        "eta" : 35,
        "sesso": "m"
      },
      {
        "nome" : "marzia",
        "cognome": "rossi",
        "eta" : 30,
        "sesso": "f"
      },
      {
        "nome" : "marco",
        "cognome": "bianchi",
        "eta" : 32,
        "sesso": "m"
      },
      {
        "nome": prompt("inserisci il tuo nome"),
        "cognome": prompt("inserisci il tuo cognome"),
        "eta":parseInt(prompt("inserisci la tua eta")),
        "sesso": prompt("inserisci il tuo sesso")
      }
    ]
    for (var i = 0; i < ListaStudenti.length; i++) {
      console.log(ListaStudenti[i].nome,ListaStudenti[i].cognome);
    }
  }
);
