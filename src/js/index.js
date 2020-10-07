// alert('Roi')
var button = $(".butt");

function sizeSetter(component, tipe) {
  console.log(component);
  let size = component.val().toString() + "px";
  console.log(size);
  button.css(tipe, size);
}

// Width Listner and Setter
$("#width").bind("keyup mouseup", function () {
  sizeSetter($(this), "width");
  $("#display_width").val(parseInt($(this).val()));
});

// Heigth Listner and Setter
$("#heigth").bind("keyup mouseup", function () {
  sizeSetter($(this), "height");
  $("#display_heigth").val(parseInt($(this).val()));
});

// Border-Width Listner and Setter
$("#border").bind("keyup mouseup", function () {
  sizeSetter($(this), "border-width");
  $("#display_border").val(parseInt($(this).val()));
});

// Border-Radius Listner and Setter
$("#radius").bind("keyup mouseup", function () {
  sizeSetter($(this), "border-radius");
  $("#display_radius").val(parseInt($(this).val()));
});
