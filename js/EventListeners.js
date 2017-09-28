
$("#firstPanelID input[type=search]").on('change',InputsPatientForm,ColourPatientForm);
$("#firstPanelID input:radio").on('click',RadiosPatientForm,ColourPatientForm);
$('#firstPanelID select').on('change', SelectsPatientForm,ColourPatientForm);

$("#secondPanelID input[type=search]").on('change',InputsGeneralForm,ColourGeneralForm);
$("#secondPanelID input:radio").on('click',RadiosGeneralForm,ColourGeneralForm);
$('#secondPanelID select').on('change', SelectsGeneralForm,ColourGeneralForm);

$("#thirdPanelID input[type=search]").on('change',InputsAdditionalForm,ColourAdditionalForm);
$("#thirdPanelID input:radio").on('click',RadiosAdditionalForm,ColourAdditionalForm);
$('#thirdPanelID select').on('change', SelectsAdditionalForm,ColourAdditionalForm);
//buttons within the third panel
/*$("addNewBacterialCodeDuringAdmissionID").on('click',RadiosAdditionalForm,ColourAdditionalForm);*/
/*$("#bacterialCodeDuringAdmissionDiv2").on("click",$("#bacterialCodeDuringAdmission2"),testing);
$("#bacterialCodeDuringAdmissionDiv3").on("click",$("#bacterialCodeDuringAdmission3"),testing);*/

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
    console.log("1 - Number of completed groups : " +$('#secondPanelID input:radio:visible:checked').length + "number of radio groups: "+rgroups)
    if($('#firstPanelID input:radio:visible:checked').length < rgroups){
        console.log('Second Panel - You must fill in all the fields.');
    }
    else{
        console.log('Second Panel - COMPLETE!');
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
        toastr.success("Patient Data Form is all Correct!");
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
    console.log("2- Number of completed groups : " +$('#secondPanelID input:radio:visible:checked').length + " number of radio groups: "+rgroups)
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

function InputsAdditionalForm(e){
    var inputsAllSelected = 0;
    $('#thirdPanelID input[type=search]:visible').each(function(i) {
        if($('#thirdPanelID input[type=search]:visible').length===0){
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
function RadiosAdditionalForm(){
     /*START Check for radio buttons */
    var radioAllCheckedInGeneral = false;
    var rgroups = [];
    $('#thirdPanelID input:radio:visible').each(function(index, el){
            var i;
            for(i = 0; i < rgroups.length; i++)
                if(rgroups[i] == $(el).attr('name'))
                    return true;
            rgroups.push($(el).attr('name'));
        }
    );
    rgroups = rgroups.length;
    console.log("3- Number of completed groups : " +$('#thirdPanelID input:radio:visible:checked').length + " number of radio groups: "+rgroups)
    if($('#thirdPanelID input:radio:visible:checked').length < rgroups){
        console.log('Third Panel - Not complete');
    }
    else{
        console.log('Third Panel - COMPLETE!');
        var radioAllCheckedInGeneral=true;
    }
    /* END Check for radio buttons */
    return(radioAllCheckedInGeneral)
}
function SelectsAdditionalForm(e){
    var selectsAllSelected = true;
    var counter = 0;
    $('#thirdPanelID select:visible').each(function(i) {
        if( !$(this).val() ) {
            selectsAllSelected = false;   
            counter++;
        };
    });
    console.log(" number of selects left : "+counter);
    return(selectsAllSelected)
    
}
function ColourAdditionalForm(){
    var inputTrueFalse = InputsAdditionalForm();
    var radioTrueFalse = RadiosAdditionalForm(); //taking the return value fromt he function>> either true/false
    var selectTrueFalse = SelectsAdditionalForm();
    console.log("input (-1/0/1): "+ inputTrueFalse)
    console.log("radio : T/F "+ radioTrueFalse)
    console.log("select : T/F "+ selectTrueFalse)
    if(/*inputTrueFalse===1 && */radioTrueFalse === true && selectTrueFalse===true){ //if true , make the circle green
        $('#dischargeCircle').css('background-color', 'green');
        toastr.success("Additional Data Form is all Correct!");
    }
    else if(radioTrueFalse===false || selectTrueFalse===false){
        $('#dischargeCircle').css('background-color', 'orange');
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


function testing(){
    alert("came through in testing")
}
