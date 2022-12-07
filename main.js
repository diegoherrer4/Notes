const rectangle1 = document.getElementsByClassName("rectangle-text1")
const rectangle2 = document.getElementsByClassName("rectangle2-text2")
const rectangle3 = document.getElementsByClassName("rectangle3-text3")

rectangle1.addEventListener('click', function() {
    // Alert the name of the <div> element when it is clicked
    alert("Div 1");
  });

  rectangle2.addEventListener('click', function() {
    // Alert the name of the <div> element when it is clicked
    alert("Div 3");
  });

  rectangle3.addEventListener('click', function() {
    // Alert the name of the <div> element when it is clicked
    alert("Div 2");
  });