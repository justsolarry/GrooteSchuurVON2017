/* START Adding event listener to Patient Identification page*/
/*document.getElementById("birthWeightInGrams").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("mothersFirstName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("mothersLastName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("patientsName").addEventListener("change", checkingColourPatientIdentification);
document.getElementById("patientMedicalRecordNumber").addEventListener("change", checkingColourPatientIdentification);*/
/*document.getElementById("dateOfBirth").addEventListener("change", checkingColour);*/
/*$("#dateOfBirth").click(checkingColour);*/
/*$("input:radio[name=outbornBirth]").click(checkingColourPatientIdentification);
$("input:radio[name=diedInDeliveryRoom]").click(checkingColourPatientIdentification);
$("input:radio[name=testing]").click(checkingColourPatientIdentification);
$("#transferCodePIW").change(checkingColourPatientIdentification);*/
/* END Adding event listener to Patient Identification page*/

/* START adding event listeners to the radios in second form*/
$("#firstPanelID input[type=search]").on('change',InputsPatientForm,ColourPatientForm);
$("#firstPanelID input:radio").on('click',RadiosPatientForm,ColourPatientForm);
$('#firstPanelID select').on('change', SelectsPatientForm,ColourPatientForm);

$("#secondPanelID input[type=search]").on('change',InputsGeneralForm,ColourGeneralForm);
$("#secondPanelID input:radio").on('click',RadiosGeneralForm,ColourGeneralForm);
$('#secondPanelID select').on('change', SelectsGeneralForm,ColourGeneralForm);

/*$("#thirdPanelID input[type=search]").on('change',InputsAdditionalForm,ColourAdditionalForm);
$("#thirdPanelID input:radio").on('click',RadiosAdditionalForm,ColourAdditionalForm);
$('#thirdPanelID select').on('change', SelectsAdditionalForm,ColourAdditionalForm);*/

function InputsPatientForm(e){
    var inputsAllSelected = 0;
    $('#firstPanelID input[type=search]:visible').each(function(i) {
        if(!$(this).hasClass("addGreen") && !$(this).hasClass("addRed")){
           inputsAllSelected = 0;
           }
        else if($(this).hasClass("addGreen"))
            {
                 inputsAllSelected = 1;
            }
        else if($(this).hasClass("addRed")){
                 inputsAllSelected = -1;
                }
    });
    return (inputsAllSelected)
}
function RadiosPatientForm(){
    /* START Check for radio buttons*/
    var radioAllCheckedInGeneral = false;
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
//    alert("Number of completed groups : " +$('#secondPanelID input:radio:visible:checked').length + "number of radio groups: "+rgroups)
    if($('#firstPanelID input:radio:visible:checked').length < rgroups){
//        alert('Second Panel - You must fill in all the fields.');
    }
    else{
//        alert('Second Panel - COMPLETE!');
        var radioAllCheckedInGeneral=true;
    }
    /* END Check for radio buttons*/
    return(radioAllCheckedInGeneral)
}
function SelectsPatientForm(e){
    var selectsAllSelected = true;
    $('#firstPanelID select:visible').each(function(i) {
        if( !$(this).val() ) {
            selectsAllSelected = false;        
        };
    });
//    alert("value of selects is :" + selectsAllSelected);
    return(selectsAllSelected)
}
function ColourPatientForm(){
    var inputTrueFalse = InputsPatientForm();
    var radioTrueFalse = RadiosPatientForm(); //taking the return value fromt he function>> either true/false
    var selectTrueFalse = SelectsPatientForm();
    console.log("input (-1/0/1): "+ inputTrueFalse)
    console.log("radio : T/F "+ radioTrueFalse)
    console.log("select : T/F "+ selectTrueFalse)
    if(/*inputTrueFalse===1 &&*/ radioTrueFalse === true && selectTrueFalse===true){ //if true , make the circle green
        $('#patientFormCircle').css('background-color', 'green');
        toastr.success("General Data Form is all Correct!");
    }
    else if(radioTrueFalse===false || selectTrueFalse===false){
        $('#patientFormCircle').css('background-color', 'orange');
    }
    /*
    else if(inputTrueFalse===-1){
                $('#patientFormCircle').css('background-color', 'red');
            }
    else if(inputTrueFalse===0){
                $('#patientFormCircle').css('background-color', 'orange');
            }
    else if( radioTrueFalse === false || selectTrueFalse===false){
                $('#patientFormCircle').css('background-color', 'orange');
            }*/
}


function InputsGeneralForm(e){
    var inputsAllSelected = 0;
    $('#secondPanelID input[type=search]:visible').each(function(i) {
        if($('#secondPanelID input[type=search]:visible').length===0){
           alert("nothing")
           } 
           else if(!$(this).hasClass("addGreen") && !$(this).hasClass("addRed")){
           inputsAllSelected = 0;
           }
        else if($(this).hasClass("addGreen"))
            {
                 inputsAllSelected = 1;
            }
        else if($(this).hasClass("addRed")){
                 inputsAllSelected = -1;
                }
    });
    return (inputsAllSelected)
}
function RadiosGeneralForm(){
    /* START Check for radio buttons*/
    var radioAllCheckedInGeneral = false;
    var rgroups = [];
    $('#secondPanelID input:radio:visible').each(function(index, el){
            var i;
            for(i = 0; i < rgroups.length; i++)
                if(rgroups[i] == $(el).attr('name'))
                    return true;
            rgroups.push($(el).attr('name'));
        }
    );
    rgroups = rgroups.length;
    console.log("Number of completed groups : " +$('#secondPanelID input:radio:visible:checked').length + " number of radio groups: "+rgroups)
    if($('#secondPanelID input:radio:visible:checked').length < rgroups){
        console.log('Second Panel - You must fill in all the fields.');
    }
    else{
        console.log('Second Panel - COMPLETE!');
        var radioAllCheckedInGeneral=true;
    }
    /* END Check for radio buttons*/
    return(radioAllCheckedInGeneral)
}
function SelectsGeneralForm(e){
    var selectsAllSelected = true;
    $('#secondPanelID select:visible').each(function(i) {
        if( !$(this).val() ) {
            selectsAllSelected = false;        
        };
    });
    console.log("value of selects is :" + selectsAllSelected);
    return(selectsAllSelected)
}
function ColourGeneralForm(){
    var inputTrueFalse = InputsGeneralForm();
    var radioTrueFalse = RadiosGeneralForm(); //taking the return value fromt he function>> either true/false
    var selectTrueFalse = SelectsGeneralForm();
    console.log("input (-1/0/1): "+ inputTrueFalse)
    console.log("radio : T/F "+ radioTrueFalse)
    console.log("select : T/F "+ selectTrueFalse)
    if(/*inputTrueFalse===1 && */radioTrueFalse === true && selectTrueFalse===true){ //if true , make the circle green
        $('#generalDataItemsFormCircle').css('background-color', 'green');
        toastr.success("General Data Form is all Correct!");
    }
    else if(radioTrueFalse===false || selectTrueFalse===false){
        $('#generalDataItemsFormCircle').css('background-color', 'orange');
    }
    
    /*
    
    else if(inputTrueFalse===-1){
                $('#generalDataItemsFormCircle').css('background-color', 'red');
            }
    else if(inputTrueFalse===0){
                $('#generalDataItemsFormCircle').css('background-color', 'orange');
            }
    else if( radioTrueFalse === false || selectTrueFalse===false){
                $('#generalDataItemsFormCircle').css('background-color', 'orange');
            }*/
}
