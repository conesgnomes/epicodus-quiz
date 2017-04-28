$(function() {
  $("#quiz").submit(function(event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();

    if(question1 === "yes" || question3 === "ux") {
      $("#design").fadeIn(700);
      $("#php").hide();
      $("#ruby").hide();
    }
    else if (question1 === "no" && (question3 === "content" || question3 === "ux")) {
      $("#design").hide();
      $("#php").fadeIn(700);
      $("#ruby").hide();
    }
    else if (question1 === "no" && (question3 === "interactive" || question3 === "ux")) {
      $("#design").hide();
      $("#php").hide();
      $("#ruby").fadeIn(700);
    }

    event.preventDefault();
  });
});
