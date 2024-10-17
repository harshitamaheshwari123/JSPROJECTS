function calcage() {
  var dob = document.getElementById("dt").value;
  var today = new Date();
  var birthdate = new Date(dob);
  var ageinmilliseconds = today - birthdate;
  var ageDate = new Date(ageinmilliseconds);
  var years = ageDate.getUTCFullYear() - 1970;
  var months = ageDate.getUTCMonth();
  var days = ageDate.getUTCDate() - 1;
  document.getElementById("p1").innerHTML =
    "You are &nbsp" +
    years +
    " Years," +
    months +
    " months and &nbsp" +
    days +
    " days old";
}
