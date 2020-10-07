// alert('Roi')
var button = $('.but')
button.css("border-style", "solid")

// Width Listner and Setter
$("#width").bind('keyup mouseup', function () {
    let component = $(this)
    let size = component.val().toString()
    button.css("width", size)
    console.log("width: " + component.val() + "| size: " + size)
});

// Heigth Listner and Setter
$("#heigth").bind('keyup mouseup', function () {
    let component = $(this) 
    let size = component.val().toString()
    button.css("height", size)  
    console.log("height: " + component.val());
});

// Border Listner and Setter
$("#border").bind('keyup mouseup', function () {
    // alert("changed");            
    let component = $(this)
    let size = component.val().toString()
    button.css("border-width", size)
    console.log("border: " + component.val());
});

// Radius Listner and Setter
$("#radius").bind('keyup mouseup', function () {
    // alert("changed");            
    let component = $(this)
    let size = component.val().toString() + "px"
    button.css("border-radius", size)
    console.log("radius: " + component.val());
});