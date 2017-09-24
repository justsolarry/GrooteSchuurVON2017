document.getElementById("birthWeightInGrams").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("mothersFirstName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("mothersLastName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("patientsName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("patientMedicalRecordNumber").addEventListener("change", checkingColourPatientIdentification);
/*document.getElementById("dateOfBirth").addEventListener("change", checkingColour);*/
/*$("#dateOfBirth").click(checkingColour);*/
$("input:radio[name=outbornBirth]").click(checkingColourPatientIdentification);
$("input:radio[name=diedInDeliveryRoom]").click(checkingColourPatientIdentification);

function checkingColourPatientIdentification(){
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