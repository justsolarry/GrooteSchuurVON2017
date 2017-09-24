document.getElementById("birthWeightInGrams").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("mothersFirstName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("mothersLastName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("patientsName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("patientMedicalRecordNumber").addEventListener("change", checkingColourPatientIdentification);
/*document.getElementById("dateOfBirth").addEventListener("change", checkingColour);*/
/*$("#dateOfBirth").click(checkingColour);*/
$("input:radio[name=outbornBirth]").click(checkingColourPatientIdentification);
$("input:radio[name=diedInDeliveryRoom]").click(checkingColourPatientIdentification);
$("input:radio[name=testing]").click(checkingColourPatientIdentification);
$("#transferCodePIW").change(checkingColourPatientIdentification);
function checkingColourPatientIdentification(){
    var rgroups = [];
    $('#firstPanelID input:radio:visible').each(function(index, el){
            var i;
            for(i = 0; i < rgroups.length; i++)
                if(rgroups[i] == $(el).attr('name'))
                    return true;
            rgroups.push($(el).attr('name'));
        }
    );
    rgroups = rgroups.length;

    var sgroups = [];
    $('#firstPanelID select:visible').each(function(index, el){
            var i;
            for(i = 0; i < sgroups.length; i++)
                if(sgroups[i] == $(el).attr('name'))
                    return true;
            sgroups.push($(el).attr('name'));
        }
    );
    sgroups = sgroups.length;
    //Adding radio and select group
    tgroups = rgroups+sgroups;
    if($('#firstPanelID input:radio:visible:checked').length < tgroups){
        alert('You must fill in all the fields.');
    }
    else{
        alert('Thanks!');
    }
    alert("number of radio groups: "+rgroups)
    alert("number of select groups: "+sgroups)
    alert("number of TOTAL groups: "+tgroups)
    if(
        (!$('#birthWeightInGrams').hasClass('addRed') && !$('#birthWeightInGrams').hasClass('addGreen')) ||
        (!$('#mothersFirstName').hasClass('addRed') && !$('#mothersFirstName').hasClass('addGreen')) ||
        (!$('#mothersLastName').hasClass('addRed') && !$('#mothersLastName').hasClass('addGreen')) ||
        (!$('#patientsName').hasClass('addRed') && !$('#patientsName').hasClass('addGreen')) ||
        (!$('#patientMedicalRecordNumber').hasClass('addRed') && !$('#patientMedicalRecordNumber').hasClass('addGreen')) /*||
        (!$('#dateOfBirth').hasClass('addRed') && !$('#dateOfBirth').hasClass('addGreen'))*/ ||
        ($('input:radio[name=outbornBirth]:checked').length==0) ||
        ($('input:radio[name=diedInDeliveryRoom]:checked').length==0)
      ){
                    $('#patientFormCircle').css('background-color', 'orange');
       }
    else if($('#birthWeightInGrams').hasClass('addGreen') &&
            $('#mothersFirstName').hasClass('addGreen') &&
            $('#mothersLastName').hasClass('addGreen') &&
            $('#patientsName').hasClass('addGreen') &&
            $('#patientMedicalRecordNumber').hasClass('addGreen')/* &&
            $('#dateOfBirth').hasClass('addGreen')*/ &&
            $('input:radio[name=outbornBirth]:checked').length>0 &&
            $('input:radio[name=diedInDeliveryRoom]:checked').length>0
           ){
                    $('#patientFormCircle').css('background-color', 'green');
                    
    }
    else{
                    $('#patientFormCircle').css('background-color', 'red');
    }
};


/*
$("input[name='prenatalCare']").change(checkingColourGeneral)
function checkingColourGeneral(){
    var visibleDIVs = $("#secondForm .form-group:not(.hide)");
    alert("hi");
}*/

/*document.getElementById("grav").addEventListener("change", checkingColourAdditional);

function checkingColourAdditional(){
    alert("hello")
    if($('#grav').value){
        alert("true");
    }
    else("false");
}*/