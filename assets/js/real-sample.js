function test() {
    alert("Working");
}
var total;
var SGPA;
var Asco = [];
var Acre = [];
var Atot = [];
var Aper = [];
var Agrd = [];
var ASol = [];
var course = [];
var yop = [];

function showMarks() {
    total = document.getElementById("total").value;
    //alert(total);
    addInput('dynamicInput', total);
    document.getElementById("Step1").style.display = "none";
    document.getElementById("Step2").style.display = "block";
    var elmnt = document.getElementById("Step2");
    elmnt.scrollIntoView();

    total_cgpa = document.getElementById("total_cgpa").value;
    //alert(total);
    addInput_cgpa('dynamicInput_cgpa', total_cgpa);
    document.getElementById("Step1_cgpa").style.display = "none";
    document.getElementById("Step2_cgpa").style.display = "block";
    var elmnt_cgpa = document.getElementById("Step2_cgpa");
    elmnt_cgpa.scrollIntoView();
}


function addInput(divName, counter) {
    for (i = 1; i <= counter; i++) {
        //var nid = id;
        var courseid = `course${i}`;
        var yopid = `yop${i}`;
        var sid = `sub${i}`;
        var tid = `tot${i}`;
        var cid = `cre${i}`;
        var newdiv = document.createElement('div');
        newdiv.innerHTML = `<div class='row'><div class='col-75'>     <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> COURSE CODE SUBJECT - ${i} </label>
</div><div class='col-25'> <input type="text" class=" evaluation_tokens" maxlength="12" placeholder="COURSE CODE" id='${courseid}' >  </div>  </div>
<div class='row'><div class='col-75'>     <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> CREDITS OF SUBJECT - ${i} </label>
</div><div class='col-25'> 
  <select id="${cid}" style="text-align: center; text-align-last: center;" class="evaluation_tokens">
                        <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>  </div>  </div>
<div class='row'><div class='col-75'>     <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> MARKS OBTAINED SUBJECT - ${i} </label>
</div><div class='col-25'> <input type="number" class=" evaluation_tokens ev_tok_mk_obt" max="100" onkeyup="if (this.value[this.value.length - 1] == '.') this.value = this.value.substr(0, this.value.length - 1); if (parseFloat(this.value) > 100) this.value = '100';" placeholder="MARKS " id='${sid}' >  </div>  </div>
<div class='row'><div class='col-75'>     <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> TOTAL MARKS SUBJECT - ${i} </label>
</div><div class='col-25'> <input type="number" class=" evaluation_tokens" value="100" readonly id='${tid}' >  </div>  </div>

<div class='row'><div class='col-75'>     <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> YEAR OF PASSING SUBJECT - ${i} </label>
</div><div class='col-25'>            <input  type="number" class="yearpicker evaluation_tokens year_of_passing_class" value="" id="${yopid}" placeholder="YEAR OF PASSING" readonly>
</div><br><br><hr style="color:black;margin-top:1rem; border-top: 1px dotted red; height: 10px;
border: 0;
box-shadow: 0 5px 5px -5px grey inset;height: 3px;width:98.5%">`;
        document.getElementById(divName).appendChild(newdiv);
        //console.log(i);
    }
    $('.yearpicker').yearpicker();
    init_int_check();
}

function getValue() {
    var tempTotal = total;
    for (i = 1; i <= tempTotal; i++) {
        var coursename = document.getElementById(`course${i}`).value;
        course.push(coursename);
        var scoreid = document.getElementById(`sub${i}`).value;
        Asco.push(scoreid);
        var totalid = document.getElementById(`tot${i}`).value;
        Atot.push(totalid);
        var credtid = document.getElementById(`cre${i}`).value;
        Acre.push(credtid);
        var yopid = document.getElementById(`yop${i}`).value;
        yop.push(yopid);

        //console.log("Test");
        //console.log(i);
        //console.log("Score ID: " + scoreid);
        //console.log("Total ID: " + totalid);
        //console.log("Credit ID: " + credtid);

        //console.log("Array");
        //console.log(Asco);
        //console.log(Atot);
        //console.log(Acre);


    }

}


function CalPer() {
    for (i = 0; i < total; i++) {
        var per = (Asco[i] / Atot[i]) * 100
            //console.log(per);
            //Aper.push(per);
        Aper[i] = per;
    }
}

function CalGradCase(val) {
    //console.log("Val in CalGradeCase: " + val);
    switch (true) {
        case (val >= 90):
            return 10;
            break;
        case (val < 90 && val >= 80):
            return 9;
            break;
        case (val < 80 && val >= 70):
            return 8;
            break;
        case (val < 70 && val >= 60):
            return 7;
            break;
        case (val < 60 && val >= 50):
            return 6;
            break;
        case (val < 50 && val >= 40):
            return 5;
            break;

        case (val < 40):
            return 0;
            break;
        default:
            return 0;
    }
}

function CalGrad() {
    //console.log("Total in CalGrad: " + total);
    for (i = 0; i < total; i++) {
        var grade = CalGradCase(Aper[i]);
        //console.log("Grade: " + grade);
        Agrd[i] = grade;
    }
}

function CalTotalCred() {
    var totalCred = 0;
    for (i = 0; i < total; i++) {
        totalCred = totalCred + parseInt(Acre[i]);
    }
    //console.log("Total Cred: " + totalCred);
    return totalCred;
}

function CalSubSol() {
    var SSTotal = 0;
    var temp = 0;
    for (i = 0; i < total; i++) {
        temp = Agrd[i] * Acre[i];
        SSTotal = SSTotal + temp;
        ASol[i] = temp;
    }
    return SSTotal;
}

function DisSGPA(i) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = `Your SGPA is <big>${i}</big> `;
    document.getElementById("SGPAResult").appendChild(newdiv);
}

function TotalScore() {
    var totalSco = 0;
    for (i = 0; i < total; i++) {
        totalSco = parseInt(Asco[i]) + totalSco;
    }
    return totalSco;
}

function GradeToLetter(G) {
    switch (G) {
        case 10:
            return 'S';
            break;
        case 9:
            return 'A';
            break;
        case 8:
            return 'B';
            break;
        case 7:
            return 'C';
            break;
        case 6:
            return 'D';
            break;
        case 5:
            return 'E';
            break;

        case 0:
            return 'F';
            break;
        default:
            return 'Error';

    }
}

function DisTable(i) {
    var temp = i + 1;
    var table = document.getElementById("SGPATable");
    var row = table.insertRow(temp);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = course[i];
    cell2.innerHTML = Asco[i];
    cell3.innerHTML = (Aper[i]).toPrecision(3) + " %";
    cell4.innerHTML = Acre[i];
    cell5.innerHTML = Agrd[i];
    cell6.innerHTML = GradeToLetter(Agrd[i]);
    cell7.innerHTML = ASol[i];
    cell8.innerHTML = yop[i];
}

function TotalPer() {
    var Totper = 0;
    var Totper1 = 0;
    var temp = total;
    for (i = 0; i < temp; i++) {
        Totper = Totper + Aper[i];
    }
    Totper1 = Totper / temp;
    return Totper1.toPrecision(3);
}

function TotalGrad() {
    var TtlGrad = 0;
    for (i = 0; i < total; i++) {
        TtlGrad = TtlGrad + Agrd[i];
    }
    return TtlGrad;
}

function DisTabTotal(i) {
    temp = parseInt(i);
    var table = document.getElementById("SGPATable");
    var row = table.insertRow(temp);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = "FINAL SGPA";
    cell2.innerHTML = TotalScore();
    cell3.innerHTML = (TotalPer()) + " %";
    cell4.innerHTML = CalTotalCred();
    cell5.innerHTML = TotalGrad();
    cell6.innerHTML = "-";
    cell7.innerHTML = CalSubSol();

}

function DisSGPATotal() {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = `SGPA = ${CalSubSol()} / ${CalTotalCred()} =  ${SGPA}`;
    document.getElementById("FinalSGPA").appendChild(newdiv);
}

function DisSGPATotal_cgpa() {
    var newdiv_cgpa = document.createElement('div');
    newdiv_cgpa.innerHTML = `CGPA = ${totSubsol_cgpa} / ${totCre_cgpa} =  ${CGPA_cgpa}`;
    document.getElementById("FinalCGPA_cgpa").appendChild(newdiv_cgpa);
}

function DisCGPAPer() {
    var newdiv_cgpa = document.createElement('div');
    var result = ((CGPA_cgpa - 0.75) * 10).toPrecision(4);
    newdiv_cgpa.innerHTML = `PERCENTAGE =  ${result}%`;

    document.getElementById("cgpatoper1").appendChild(newdiv_cgpa);
}


// function DisSGPAPer() {
//     var newdiv = document.createElement('div');
//     newdiv.innerHTML = `PERCENTAGE =  ${(SGPA - 0.75) *10}%`;

//     document.getElementById("sgpatoper").appendChild(newdiv);
// }



function calculate() {
    $('.ev_tok_mk_obt').each((_n, _el) => {
        if (_el.value) {
            if (_el.value > 100 || _el.value < 0) {
                swal("INVALID INPUT!", "MARKS SHOULD NOT BE MORE THAN 100/LESS THAN 0", "warning");
                return;
            }
        }
    });
    $('.ev_tok_mk_obt1').each((_n, _el) => {
        if (_el.value) {
            if (_el.value > 10 || _el.value < 0)
                swal("INVALID INPUT!", "SGPA SHOULD NOT BE MORE THAN 10/LESS THAN 0", "warning");

        }
    });


    getValue();
    CalPer();
    //console.log(Aper);
    CalGrad();
    //console.log(Agrd);
    var TCred = CalTotalCred();

    var TSS = CalSubSol();

    SGPA = (TSS / TCred).toPrecision(4);

    DisSGPA(SGPA);
    for (i = 0; i < total; i++) {
        DisTable(i);
    }
    var final1 = parseInt(total) + 1;

    DisTabTotal(final1);
    DisSGPATotal();
    // DisSGPAPer();


    document.getElementById("Step2").style.display = "none";
    document.getElementById("Step3").style.display = "block";
    var elmnt = document.getElementById("Step3");
    elmnt.scrollIntoView();
    getValue_cgpa();
    CalSubsol_cgpa();
    totCre_cgpa = CalTotCre_cgpa();
    totSubsol_cgpa = CalTotSubsol_cgpa();
    CGPA_cgpa = (totSubsol_cgpa / totCre_cgpa).toPrecision(4);
    var result = ((CGPA_cgpa - 0.75) * 10).toPrecision(4);
    DisCGPAPer();
    DisCGPA_cgpa(CGPA_cgpa);
    for (i = 0; i < total_cgpa; i++) {
        DisTable_cgpa(i);
    }
    DisTabTotal_cgpa(total_cgpa);
    DisSGPATotal_cgpa()
    document.getElementById("Step2_cgpa").style.display = "none";
    document.getElementById("Step3_cgpa").style.display = "block";
    var elmnt_cgpa = document.getElementById("Step3_cgpa");
    elmnt_cgpa.scrollIntoView();
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



function test() {
    alert("Working");
}
var total_cgpa;
var CGPA_cgpa;
var totCre_cgpa;
var totSubsol_cgpa;
var Acre_cgpa = [];
var ASGPA_cgpa = [];
var ASol_cgpa = [];

function showMarks_cgpa() {
    total_cgpa = document.getElementById("total_cgpa").value;
    //alert(total);
    addInput_cgpa('dynamicInput_cgpa', total_cgpa);
    document.getElementById("Step1_cgpa").style.display = "none";
    document.getElementById("Step2_cgpa").style.display = "block";
    var elmnt_cgpa = document.getElementById("Step2_cgpa");
    elmnt_cgpa.scrollIntoView();
}

function addInput_cgpa(divName_cgpa, counter_cgpa) {
    for (i = 1; i <= counter_cgpa; i++) {
        //var nid = id;
        var cid_cgpa = `cre_cgpa${i}`;
        var sid_cgpa = `sgp_cgpa${i}`;
        var newdiv_cgpa = document.createElement('div');
        newdiv_cgpa.innerHTML = `<div class='row'><div class='col-75'>     <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> CREDITS OF SEMESTER - ${i} : </label>
</div><div class='col-25'> <input type="number" maxlength="2" class=" evaluation_tokens"  max="100" onkeyup="if (this.value[this.value.length - 1] == '.') this.value = this.value.substr(0, this.value.length - 1); if (parseFloat(this.value) > 100) this.value = '100';" placeholder="CREDITS" id='${cid_cgpa}' >  </div> </div>
    <div class='row'><div class='col-75'> <label class="label success" style="min-width:100%;color: #0088cc;text-align: center;font-weight: bolder;padding: 0.5rem"> SGPA OF SEMESTER - ${i} : </label></div><div class='col-25'>  <input type="number" max="10" onkeyup="if (this.value[this.value.length - 1] == '.') this.value = this.value.substr(0, this.value.length - 1); if (parseFloat(this.value) > 10) this.value = '10';" placeholder="SGPA" id='${sid_cgpa}' ></div> </div>
    <hr style="border: 0;
    box-shadow: 0 5px 5px -5px grey inset;height: 3px;">`;
        document.getElementById(divName_cgpa).appendChild(newdiv_cgpa);
        ////console.log(i);
    }
}
total_cgpa = document.getElementById("total_cgpa").value;
console.log(total_cgpa)
if (total_cgpa <= 1) {
    document.getElementById("Step2_cgpa").style.display = "none";
}

function getValue_cgpa() {
    var tempTotal_cgpa = total_cgpa;
    for (i = 1; i <= tempTotal_cgpa; i++) {
        var credid_cgpa = document.getElementById(`cre_cgpa${i}`).value;
        Acre_cgpa.push(credid_cgpa);
        var sgpaid_cgpa = document.getElementById(`sgp_cgpa${i}`).value;
        ASGPA_cgpa.push(sgpaid_cgpa);


        console.log("Test");
        console.log(i);
        console.log("SGPA ID: " + sgpaid_cgpa);
        console.log("Credit ID: " + credid_cgpa);

        console.log("Array");
        console.log(Acre_cgpa);
        console.log(ASGPA_cgpa);

    }
}

function CalSubsol_cgpa() {
    for (i = 0; i < total_cgpa; i++) {
        ASol_cgpa[i] = parseFloat(Acre_cgpa[i]) * parseFloat(ASGPA_cgpa[i]);
    }
    //console.log("CalSubsol :" + ASol);
}

function CalTotCre_cgpa() {
    var temtotcre_cgpa = 0;
    for (i = 0; i < total_cgpa; i++) {
        temtotcre_cgpa = temtotcre_cgpa + parseFloat(Acre_cgpa[i]);
    }
    //console.log("In CalTotCre Total Credit: " + temtotcre);
    return temtotcre_cgpa;
}

function CalTotSubsol_cgpa() {
    var temptotsubsol_cgpa = 0;
    for (i = 0; i < total_cgpa; i++) {
        temptotsubsol_cgpa = temptotsubsol_cgpa + parseFloat(ASol_cgpa[i]);
    }
    return temptotsubsol_cgpa;
    //console.log("In CalTotSubsol Addition of subsol: " + temptotsubsol);
}

function DisCGPA_cgpa(i) {
    var newdiv_cgpa = document.createElement('div');
    newdiv_cgpa.innerHTML = `YOUR CGPA IS <big>${i}</big> `;
    document.getElementById("CGPAResult_cgpa").appendChild(newdiv_cgpa);
}

function DisTable_cgpa(i) {
    var temp_cgpa = i + 1;
    var table_cgpa = document.getElementById("CGPATable_cgpa");
    var row_cgpa = table_cgpa.insertRow(temp_cgpa);
    var cell1_cgpa = row_cgpa.insertCell(0);
    var cell2_cgpa = row_cgpa.insertCell(1);
    var cell3_cgpa = row_cgpa.insertCell(2);
    var cell4_cgpa = row_cgpa.insertCell(3);
    cell1_cgpa.innerHTML = "SEMESTER " + temp_cgpa;
    cell2_cgpa.innerHTML = ASGPA_cgpa[i];
    cell3_cgpa.innerHTML = Acre_cgpa[i];
    cell4_cgpa.innerHTML = ASol_cgpa[i].toFixed(2);
}

function CalTotSGPA_cgpa() {
    var temptotSGPA_cgpa = 0;
    for (i = 0; i < total_cgpa; i++) {
        temptotSGPA_cgpa = temptotSGPA_cgpa + parseFloat(ASGPA_cgpa[i]);
    }
    //console.log("In CalTOtSGPA total SGPA is: " + temptotSGPA);
    return temptotSGPA_cgpa;
}

function DisTabTotal_cgpa(i) {
    temp_cgpa = parseInt(i) + 1;
    var table_cgpa = document.getElementById("CGPATable_cgpa");
    var row_cgpa = table_cgpa.insertRow(temp_cgpa);
    var cell1_cgpa = row_cgpa.insertCell(0);
    var cell2_cgpa = row_cgpa.insertCell(1);
    var cell3_cgpa = row_cgpa.insertCell(2);
    var cell4_cgpa = row_cgpa.insertCell(3);
    cell1_cgpa.innerHTML = "CUMMULATIVE CGPA";
    cell2_cgpa.innerHTML = CalTotSGPA_cgpa();
    cell3_cgpa.innerHTML = totCre_cgpa;
    cell4_cgpa.innerHTML = totSubsol_cgpa.toFixed(2);


}

function DisSGPATotal_cgpa() {
    var newdiv_cgpa = document.createElement('div');
    newdiv_cgpa.innerHTML = `CGPA = ${totSubsol_cgpa.toFixed(2)} / ${totCre_cgpa} =  ${CGPA_cgpa}`;
    document.getElementById("FinalCGPA_cgpa").appendChild(newdiv_cgpa);
}

function DisSGPATotal_cgpaper() {
    var newdiv_cgpa = document.createElement('div');
    newdiv_cgpa.innerHTML = `CGPA = ${(CGPA_cgpa - 0.75)*10}`;
    document.getElementById("FinalCGPA_cgpaper").appendChild(newdiv_cgpa);
}



function calculate_cgpa() {
    getValue_cgpa();
    CalSubsol_cgpa();
    totCre_cgpa = CalTotCre_cgpa();
    totSubsol_cgpa = CalTotSubsol_cgpa();
    CGPA_cgpa = (totSubsol_cgpa / totCre_cgpa).toFixed(4);
    //console.log("CGPA is :" + CGPA);
    DisCGPA_cgpa(CGPA_cgpa);
    for (i = 0; i < total_cgpa; i++) {
        DisTable_cgpa(i);
    }
    DisTabTotal_cgpa(total_cgpa);
    DisSGPATotal_cgpa();
    DisSGPATotal_cgpaper();
    document.getElementById("Step2_cgpa").style.display = "none";
    document.getElementById("Step3_cgpa").style.display = "block";
    var elmnt_cgpa = document.getElementById("Step3_cgpa");
    elmnt_cgpa.scrollIntoView();
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
                    setTimeout("location.reload(true);", 150);
                    var elmnt = document.getElementById("Step1");
                    elmnt.scrollIntoView();
                }
            } else {
                swal("DATA STILL SAFE!");
            }
        });

}

let name = localStorage.getItem("name-key");

let usn = localStorage.getItem("usn-key");
let branch = localStorage.getItem("branch-key");
let semester = localStorage.getItem("sem-key");
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

const init_int_check = () => {
    setInterval(() => {
        let allEvalled = true;
        $('.evaluation_tokens').each((_n, _el) => {
            if (!_el.value.length && allEvalled && !_el.disabled) {
                allEvalled = false;
            }
        });
        if (allEvalled) {
            document.getElementById('__lets_calc_btn').disabled = false;
            document.getElementById('__lets_calc_btn').classList.remove('btn-disabled');
        } else {
            document.getElementById('__lets_calc_btn').disabled = true;
            document.getElementById('__lets_calc_btn').classList.add('btn-disabled');
        }

        $('.ev_tok_mk_obt').each((n, el) => {
            // console.log(document.getElementsByClassName('year_of_passing_class'), n);
            if (el.value < 40) {
                if (document.getElementsByClassName('year_of_passing_class')[n].value.length)
                    document.getElementsByClassName('year_of_passing_class')[n].value = "";
                document.getElementsByClassName('year_of_passing_class')[n].disabled = true;
                // document.getElementsByClassName('yearpicker-container')[n].style.display = 'none';
            } else {
                document.getElementsByClassName('year_of_passing_class')[n].disabled = false;
                // document.getElementsByClassName('yearpicker-container')[n].style.display = 'block';
            }
        });
    }, 500);

}