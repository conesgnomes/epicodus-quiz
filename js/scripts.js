$(function() {
  $("button#begin").click(function(event) {
    $("#quiz").fadeIn(500);
    $("button#begin").hide();
    $("h2").hide();
  });
});

$(function() {
  $(".question1").click(function(event) {
    $(".question2").fadeIn(500);
  });
  $(".question2").click(function(event) {
    $(".question3").fadeIn(500);
  });
  $(".question3").click(function(event) {
    $(".question4").fadeIn(500);
  });
  $(".question4").click(function(event) {
    $(".question5").fadeIn(500);
  });
  $(".question5").click(function(event) {
    $("button#findout").fadeIn(500);
  });
});

$(function() {
  $("#quiz").submit(function(event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();

    if(question1 === "yes" || question3 === "ux") {
      $("#design").fadeIn(500);
      $("#php").hide();
      $("#ruby").hide();
    }
    else if (question1 === "no" && (question3 === "content" || question3 === "ux")) {
      $("#design").hide();
      $("#php").fadeIn(500);
      $("#ruby").hide();
    }
    else if (question1 === "no" && (question3 === "interactive" || question3 === "ux")) {
      $("#design").hide();
      $("#php").hide();
      $("#ruby").fadeIn(500);
    }

    event.preventDefault();
  });
});
