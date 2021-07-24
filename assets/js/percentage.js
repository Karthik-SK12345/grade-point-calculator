function cgpa() {
    document.getElementById("clear").disabled = false;
    document.getElementById("download").disabled = false;
    var percent, i, CreditTotal = 0;

    var n1 = (document.getElementById('n1').value);
    document.getElementById('percent').value = parseFloat((n1 - 0.75) * 10).toFixed(3);


    // Get the value of the input field with id="numb"
    let x = document.getElementsByClassName('marks');
    for (var i = 0; i < x.length; i++) {
        let el = x[i];


        var input = parseInt(el.value);
        if (input < 0 || input > 10 || input == 0) {
            swal("INVALID INPUT!", "SGPA TO BE IN RANGE 1-10 TO CALCULATE CGPA / SGPA WAS '0'..", "warning");
            el.value = 0;
            document.getElementById("percent").value = null;
            document.getElementById("clear").disabled = true;
            document.getElementById("download").disabled = true;
            return;
        }

    }
    // document.getElementById("calculate").disabled = false;
}

function ClearData() {


    swal({
            title: "ARE YOU SURE TO CLEAR THE DATA?",
            text: "MAKE SURE TO DOWNLOAD, BEFORE CLEARING!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("YOUR DATA HAS BEEN ERASED!", {
                    icon: "success",
                });
                var per_value = document.getElementById("percent").value;
                document.getElementById("percent").value = null;
            } else {
                swal("DATA STILL SAFE!");
            }
        });
}

let name = localStorage.getItem("name-key");

let usn = localStorage.getItem("usn-key");
let branch = localStorage.getItem("branch-key");
let semester = localStorage.getItem("semester-key");
document.getElementById("usn").innerHTML = usn;

document.getElementById("branch").innerHTML = branch;
document.getElementById("semester").innerHTML = semester;
for (let i = 0; i < document.getElementsByClassName("name").length; i++) {
    document.getElementsByClassName("name")[i].innerHTML = name
}

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        $("#panel_left").addClass("panel_left");
        $("#panel_right").addClass("panel_right");
        $("#loader").addClass("loaded-circle");
        $("#loader-img").addClass("loaded-img");
        $("#preloader").addClass("loaded-img");
    }
}