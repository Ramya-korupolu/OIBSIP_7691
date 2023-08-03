//Rules button
function Show(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
    }
};

//Submit Button
function Verify() {
    var userRef = "SuperBob";
    var passRef = "12RobotoLove";

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
        alert("Connexion")
    } else {
        alert("It's seem you make a mistake...")
    }
};