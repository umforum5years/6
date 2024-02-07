/* Wath this in fullsize :)
  Im noob, I know it.
 */

function loopAlexey() {
  $("#alexey").css({ bottom: "-130px", left: "30%", position: "absolute" });
  $("#alexey")
    .delay(1000)
    .fadeIn(500)
    .animate(
      {
        bottom: "-100px",
        left: "27%",
      },
      5000,
      "linear"
    )
    .fadeOut(500);

  setTimeout(function () {
    loopAlexey();
  }, 43000);
}

function loopAnya() {
  $("#anya").css({ bottom: "-70px", right: "10%", position: "absolute" });

  $("#anya")
    .delay(7000)
    .fadeIn(500)
    .animate({ bottom: "-100px", right: "5%" }, 5000, "linear")
    .fadeOut(500);

  setTimeout(function () {
    loopAnya();
  }, 43000);
}

function loopIlya() {
  $("#ilya").css({ bottom: "-100px", left: "5%", position: "absolute" });

  $("#ilya")
    .delay(13000)
    .fadeIn(500)
    .animate(
      {
        bottom: "-70px",
        left: "2%",
      },
      5000,
      "linear"
    )
    .fadeOut(500);

  setTimeout(function () {
    loopIlya();
  }, 43000);
}

function loopKaterina() {
  $("#katerina").css({ bottom: "-10px", right: "-10%", position: "absolute" });
  $("#katerina")
    .delay(19000)
    .fadeIn(500)
    .animate(
      {
        bottom: "-10px",
        right: "-7%",
      },
      5000,
      "linear"
    )
    .fadeOut(500);

  setTimeout(function () {
    loopKaterina();
  }, 43000);
}

function loopTatiana() {
  $("#tatiana").css({ bottom: "-10px", right: "20%", position: "absolute" });
  $("#tatiana")
    .delay(25000)
    .fadeIn(500)
    .animate(
      {
        bottom: "-40px",
        right: "10%",
      },
      5000,
      "linear"
    )
    .fadeOut(500);

  setTimeout(function () {
    loopTatiana();
  }, 43000);
}

function loopTommy() {
  $("#tommy").css({ bottom: "-60px", left: "-20%", position: "absolute" });
  $("#tommy")
    .delay(31000)
    .fadeIn(500)
    .animate(
      {
        bottom: "-60px",
        left: "-10%",
      },
      5000,
      "linear"
    )
    .fadeOut(500);

  setTimeout(function () {
    loopTommy();
  }, 43000);
}

function loopTanya() {
  $("#tanya").css({ bottom: "-70px", left: "15%", position: "absolute" });
  $("#tanya")
    .delay(37000)
    .fadeIn(500)
    .animate(
      {
        bottom: "-100px",
        left: "20%",
      },
      5000,
      "linear"
    )
    .fadeOut(500);

  setTimeout(function () {
    loopTanya();
  }, 43000);
}

$(document).ready(function () {
  $("#container").fadeIn(500);

  loopAlexey();
  loopAnya();
  loopIlya();
  loopKaterina();
  loopTatiana();
  loopTommy();
  loopTanya();
});
