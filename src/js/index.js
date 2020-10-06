// alert('Roi')

// Width Listner and Setter
$("#width").bind('keyup mouseup', function () {
    // alert("changed");            
    let value = $(this).val()
    console.log("width: " + value);
});

// Heigth Listner and Setter
$("#heigth").bind('keyup mouseup', function () {
    // alert("changed");            
    let value = $(this).val()
    console.log("height: " + value);
});

// Border Listner and Setter
$("#border").bind('keyup mouseup', function () {
    // alert("changed");            
    let value = $(this).val()
    console.log("border: " + value);
});

// Radius Listner and Setter
$("#radius").bind('keyup mouseup', function () {
    // alert("changed");            
    let value = $(this).val()
    console.log("radius: " + value);
});