$(document).ready(function() {
  $("#formOne").submit(function() {
    var sentenceInput = $("input#sentence").val().toLowerCase().split(" ").join("");
    var output = [];

    alert(sentenceInput);






    // alert(output.join(""));
    event.preventDefault();
  });
});
