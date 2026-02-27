function parallax() {
    var j = document.getElementById("ob");
    var s = document.getElementById("floater");
  var xPos = 0 - window.pageYOffset/20;  
  var yPos = 0 - window.pageYOffset/35;
  const lft = -57;
  const tp = 300;
  if (xPos + 50 <= lft) {
    return; // Прекращаем выполнение, если достигли максимума
}
  j.style.left = lft - xPos + "%";
  s.style.top = tp - yPos + "%";}

window.addEventListener("scroll", function(){
    parallax(); 
});


