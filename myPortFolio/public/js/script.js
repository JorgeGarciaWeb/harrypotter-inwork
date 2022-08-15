document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("starwars JS imported successfully!");
  },
  false
);

$('.navTrigger').click(function () {
$(this).toggleClass('active');
console.log("Clicked menu");
$("#mainListDiv").toggleClass("show_list");
$("#mainListDiv").fadeIn();

});

