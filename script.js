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
      // {
      //   "nome": prompt("inserisci il tuo nome"),
      //   "cognome": prompt("inserisci il tuo cognome"),
      //   "eta":parseInt(prompt("inserisci la tua eta")),
      //   "sesso": prompt("inserisci il tuo sesso tra m o f")
      // }
    ]
    $("button").click(function () {
      for (var i = 0; i < ListaStudenti.length; i++) {
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var context = ListaStudenti[i];
        var html = template(context);
        $("ul").append(html);
      }
    });
    $("input").keyup(function () {
      var ricerca = $("input").val();
      for (var i = 0; i < ListaStudenti.length; i++) {
        for (var key in ListaStudenti[i]) {

            if (ListaStudenti[i][key] == ricerca) {
              console.log("n");
            }
            else {
              // console.log("random");
            }
        }
      }
    })
  }
);
