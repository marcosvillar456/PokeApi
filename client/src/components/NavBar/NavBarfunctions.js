import $ from "jquery";

$(main);
var contador = 1;
function main() {
  $(".menu_bar").click(function () {
    $("nav").toggle();
    if (contador == 1) {
      $("nav").css("display", "block");

      $("nav").animate({
        left: "0%",
      });
      contador = 0;
    } else {
      $("nav").css("display", "block");
      contador = 1;
      $("nav").animate({
        left: "-100%",
      });
    }
  });
}
