$(document).ready(
  function () {
    var studente = {
      "nome" : "nino",
      "cognome": "chimento",
      "eta" : 35,
      "sesso": "m"
    };
    var listaStudenti = [
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
        "nome" : "giuseppe",
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
      $("ul li").remove();
      for (var i = 0; i < listaStudenti.length; i++) {
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var context = listaStudenti[i];
        var html = template(context);
        $("ul").append(html);
      }
    });
    $("input").keyup(function () {
      var ricerca = $("input").val();
      for (var i = 0; i < listaStudenti.length; i++) {
        for (var key in listaStudenti[i]) {

            if (listaStudenti[i][key] == ricerca) {
              $("ul li").remove();
              var source = $("#entry-template").html();
              var template = Handlebars.compile(source);
              var context = listaStudenti[i];
              var html = template(context);
              $("ul").append(html);
            }
            else {
              // console.log("random");
            }
        }
      }
    })
  }
);
