
// para asignar hash a cada tab

$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});


// para linkear de una tab a otra
$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.tab-links').click
    (
      function (e) {
        $(this).tab('show');

        var scrollmem = $('body').scrollTop() || $('html').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);

        $('ul.nav-tabs a[href="' + window.location.hash + '"]').tab('show');
      }
    );
}
);

// Funciones para que cada botón active y desactive las tabs respectivas. Como ahora es obligación usar todos los filtros, solo queda activada la opción en la que está el usuario.

// Pasando de productos a estilo

$(document).ready(function () {
  $("button.ir-estilo").click(function () {
    $("#nav-home-tab").removeClass("active");
    $("#nav-home-tab").addClass("disabled");
    $("#nav-profile-tab").removeClass("disabled");
    $("#nav-profile-tab").addClass("active");
  });
});

// Pasando de estilo a colorimetría

$(document).ready(function () {
  $("button.ir-colorimetria").click(function () {
    $("#nav-profile-tab").removeClass("active");
    $("#nav-profile-tab").addClass("disabled");
    $("#nav-contact-tab").removeClass("disabled");
    $("#nav-contact-tab").addClass("active");
  });
});

// Pasando de colorimetría a tipo de cuerpo

$(document).ready(function () {
  $("button.ir-cuerpo").click(function () {
    $("#nav-contact-tab").removeClass("active");
    $("#nav-contact-tab").addClass("disabled");
    $("#nav-cuerpo-tab").removeClass("disabled");
    $("#nav-cuerpo-tab").addClass("active");
  });
});

// Pasando de tipo de cuerpo a ocasión

$(document).ready(function () {
  $("button.ir-ocasion").click(function () {
    $("#nav-cuerpo-tab").removeClass("active");
    $("#nav-cuerpo-tab").addClass("disabled");
    $("#nav-ocasion-tab").removeClass("disabled");
    $("#nav-ocasion-tab").addClass("active");
  });
});

// Pasando de ocasión a etapa

$(document).ready(function () {
  $("button.ir-actividad").click(function () {
    $("#nav-ocasion-tab").removeClass("active");
    $("#nav-ocasion-tab").addClass("disabled");
    $("#nav-actividad-tab").removeClass("disabled");
    $("#nav-actividad-tab").addClass("active");
  });
});



