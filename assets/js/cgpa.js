function test() {
    alert("Working");
}
var total;
var CGPA;
var totCre;
var totSubsol;
var Acre = [];
var ASGPA = [];
var ASol = [];

function showMarks() {
    total = document.getElementById("total").value;
    //alert(total);
    addInput('dynamicInput', total);
    document.getElementById("Step1").style.display = "none";
    document.getElementById("Step2").style.display = "block";
    var elmnt = document.getElementById("Step2");
    elmnt.scrollIntoView();
}

function addInput(divName, counter) {
    for (i = 1; i <= counter; i++) {
        //var nid = id;
        var cid = `cre${i}`;
        var sid = `sgp${i}`;
        var newdiv = document.createElement('div');
        newdiv.innerHTML = `<div class='row'><div class='col-75'>     <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> CREDITS OF SEMESTER - ${i} : </label>
</div><div class='col-25'> <input type="number" maxlength="2" class=" evaluation_tokens"  max="100" onkeyup="if (this.value[this.value.length - 1] == '.') this.value = this.value.substr(0, this.value.length - 1); if (parseFloat(this.value) > 100) this.value = '100';" placeholder="CREDITS" id='${cid}' >  </div> </div>
    <div class='row'><div class='col-75'> <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> SGPA OF SEMESTER - ${i} : </label></div><div class='col-25'>  <input type="number" max="10" onkeyup="if (this.value[this.value.length - 1] == '.') this.value = this.value.substr(0, this.value.length - 1); if (parseFloat(this.value) > 10) this.value = '10';" placeholder="SGPA" id='${sid}' ></div> </div>
    <hr style="border: 0;
box-shadow: 0 5px 5px -5px grey inset;height: 3px;width:100%">`;
        document.getElementById(divName).appendChild(newdiv);
        ////console.log(i);
        init_int_check();
    }
}

function getValue() {
    var tempTotal = total;
    for (i = 1; i <= tempTotal; i++) {
        var credid = document.getElementById(`cre${i}`).value;
        Acre.push(credid);
        var sgpaid = document.getElementById(`sgp${i}`).value;
        ASGPA.push(sgpaid);


        //console.log("Test");
        //console.log(i);
        //console.log("SGPA ID: " + sgpaid);
        //console.log("Credit ID: " + credid);

        //console.log("Array");
        //console.log(Acre);
        //console.log(ASGPA);

    }
}

function CalSubsol() {
    for (i = 0; i < total; i++) {
        ASol[i] = parseFloat(Acre[i]) * parseFloat(ASGPA[i]);
    }
    //console.log("CalSubsol :" + ASol);
}

function CalTotCre() {
    var temtotcre = 0;
    for (i = 0; i < total; i++) {
        temtotcre = temtotcre + parseFloat(Acre[i]);
    }
    //console.log("In CalTotCre Total Credit: " + temtotcre);
    return temtotcre;
}

function CalTotSubsol() {
    var temptotsubsol = 0;
    for (i = 0; i < total; i++) {
        temptotsubsol = temptotsubsol + parseFloat(ASol[i]);
    }
    return temptotsubsol;
    //console.log("In CalTotSubsol Addition of subsol: " + temptotsubsol);
}

function DisCGPA(i) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = `Your CGPA is <big>${i}</big> `;
    document.getElementById("CGPAResult").appendChild(newdiv);
}

function DisTable(i) {
    var temp = i + 1;
    var table = document.getElementById("CGPATable");
    var row = table.insertRow(temp);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "SEMESTER " + temp;
    cell2.innerHTML = ASGPA[i];
    cell3.innerHTML = Acre[i];
    cell4.innerHTML = ASol[i].toPrecision(4);
}

function CalTotSGPA() {
    var temptotSGPA = 0;
    for (i = 0; i < total; i++) {
        temptotSGPA = temptotSGPA + parseFloat(ASGPA[i]);
    }
    //console.log("In CalTOtSGPA total SGPA is: " + temptotSGPA);
    return temptotSGPA;
}

function DisTabTotal(i) {
    temp = parseInt(i) + 1;
    var table = document.getElementById("CGPATable");
    var row = table.insertRow(temp);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "CUMMULATIVE CGPA";
    cell2.innerHTML = CalTotSGPA();
    cell3.innerHTML = totCre;
    cell4.innerHTML = totSubsol.toPrecision(4);
}

function DisSGPATotal() {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = `CGPA = ${totSubsol.toPrecision(4)} / ${totCre} =  ${CGPA}`;
    document.getElementById("FinalCGPA").appendChild(newdiv);
}

function DisCGPAPer() {
    var newdiv = document.createElement('div');
    var result = ((CGPA - 0.75) * 10).toPrecision(4);
    newdiv.innerHTML = `PERCENTAGE =  ${result}%`;

    document.getElementById("cgpatoper").appendChild(newdiv);
}

function calculate() {
    $('.ev_tok_mk_obt').each((_n, _el) => {
        if (_el.value) {
            if (_el.value > 10 || _el.value < 0)
                swal("INVALID INPUT!", "SGPA SHOULD NOT BE MORE THAN 10/LESS THAN 0", "warning");

        }
    });

    getValue();
    CalSubsol();
    totCre = CalTotCre();
    totSubsol = CalTotSubsol();
    CGPA = (totSubsol / totCre).toPrecision(4);
    //console.log("CGPA is :" + CGPA);
    DisCGPA(CGPA);
    for (i = 0; i < total; i++) {
        DisTable(i);
    }
    DisTabTotal(total);
    DisSGPATotal();
    DisCGPAPer();
    document.getElementById("Step2").style.display = "none";
    document.getElementById("Step3").style.display = "block";
    var elmnt = document.getElementById("Step3");
    elmnt.scrollIntoView();
}


function ClearData() {
    var okToRefresh = swal({
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
                if (okToRefresh) {
                    setTimeout("location.reload(true);", 1500);
                    var elmnt = document.getElementById("Step1");
                    elmnt.scrollIntoView();
                }
            } else {
                swal("DATA STILL SAFE!");
            }
        });

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
var branch_info = document.getElementById("branch");
console.log(branch_info)
if (branch_info.innerHTML === "CSE") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Computer-Science-and-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "ISE") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Information-Science-and-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "BIOTECHNOLOGY") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Bio-Technology-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "ECE") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Electronics-and-Communication-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "EEE") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Electrical-and-Electronics-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "EIE") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Electronics-and-Instrumentation-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "ETC") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Electronics-and-Telecommunication-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "MECHANICAL") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Mechanical-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "AIML") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "CIVIL") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Civil-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "MEDICAL ELECTRONICS") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Medical-Electronics-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "IEM") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Industrial-Engineering-and-Management-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "CHEMICAL") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Chemical-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "AEROSPACE") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Aerospace-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "MCA") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/Aerospace-Engineering-Syllabus">CLICK HERE</a></span> `;
} else if (branch_info.innerHTML === "MTECH") {
    document.getElementById("branch_link").innerHTML = ` <span><a target="_blank" href="https://bmsce.ac.in/home/">CLICK HERE</a></span> `;
}
const init_int_check = () => {
    setInterval(() => {
        let allEvalled = true;
        $('.evaluation_tokens').each((_n, _el) => {
            if (!_el.value.length && allEvalled)
                allEvalled = false;
        });
        if (allEvalled) {
            document.getElementById('__lets_calc_btn').disabled = false;
            document.getElementById('__lets_calc_btn').classList.remove('btn-disabled');
        } else {
            document.getElementById('__lets_calc_btn').disabled = true;
            document.getElementById('__lets_calc_btn').classList.add('btn-disabled');
        }
    }, 500);
}