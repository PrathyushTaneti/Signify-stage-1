function validate() {
  var username = document.getElementById("name").value;
  var password = document.getElementById("pass").value;
  if (username == "admin" && password == "admin") {
    window.open("./Module2.html");
  } else {
    alert("Access Denied");
    return false;
  }
}
