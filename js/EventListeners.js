
$("#firstPanelID input[type=search]").on('change',InputsPatientForm,ColourPatientForm);
$("#firstPanelID input:radio").on('click',RadiosPatientForm,ColourPatientForm);
$('#firstPanelID select').on('change', SelectsPatientForm,ColourPatientForm);

$("#secondPanelID input[type=search]").on('change',InputsGeneralForm,ColourGeneralForm);
$("#secondPanelID input:radio").on('click',RadiosGeneralForm,ColourGeneralForm);
$('#secondPanelID select').on('change', SelectsGeneralForm,ColourGeneralForm);

$("#thirdPanelID input[type=search]").on('change',InputsAdditionalForm,ColourAdditionalForm);
$("#thirdPanelID input:radio").on('click',RadiosAdditionalForm,ColourAdditionalForm);
$('#thirdPanelID select').on('change', SelectsAdditionalForm,ColourAdditionalForm);
$('#thirdPanelID textarea').on('change', textareaAdditionalForm,ColourAdditionalForm);
//buttons within the third panel
/*$("addNewBacterialCodeDuringAdmissionID").on('click',RadiosAdditionalForm,ColourAdditionalForm);*/
/*$("#bacterialCodeDuringAdmissionDiv2").on("click",$("#bacterialCodeDuringAdmission2"),testing);
$("#bacterialCodeDuringAdmissionDiv3").on("click",$("#bacterialCodeDuringAdmission3"),testing);*/

function InputsPatientForm(e){
    var completeIncompleteCounter = 0;
    var errorCounter = 0;
    $('#firstPanelID input[type=search]:visible:enabled').each(function(i) {
        if(!$(this).hasClass("addGreen") && !$(this).hasClass("addRed")){
           completeIncompleteCounter += 0;
           }
        else if($(this).hasClass("addGreen"))
            {
                 completeIncompleteCounter += 1;
            }
        else if($(this).hasClass("addRed")){
                 errorCounter += 1;
                }
    });
    return [completeIncompleteCounter,errorCounter];
}
function RadiosPatientForm(){
    /* START Check for radio buttons*/
    var radioAllChecked = false;
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
    console.log("1 - Number of completed groups : " +$('#firstPanelID input:radio:visible:checked').length + " number of radio groups: "+rgroups)
    if($('#firstPanelID input:radio:visible:checked').length < rgroups){
        console.log('1 - You must fill in all the fields.');
    }
    else{
        console.log('1 - COMPLETE!');
        var radioAllChecked=true;
    }
    /* END Check for radio buttons*/
    return(radioAllChecked)
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
    //pulling the function's array data
    var data = InputsPatientForm();
    var completeIncompleteCounter = data[0];
    var errorCounter = data[1];
    //pulling the functions return values
    var radioTrueFalse = RadiosPatientForm(); //taking the return value fromt he function>> either true/false
    var selectTrueFalse = SelectsPatientForm();
    //getting the length of all the visible and enabled search input fields
    var lengthOfInput = $('#firstPanelID input[type=search]:visible:enabled').length;
    //debugging
    console.log("Number of visible input fields: "+($('#firstPanelID input[type=search]:visible:enabled').length) )
    console.log("input completeIncomplete: "+ completeIncompleteCounter)
    console.log("input error: "+ errorCounter)
    console.log("radio : T/F "+ radioTrueFalse)
    console.log("select : T/F "+ selectTrueFalse)
    if((lengthOfInput===completeIncompleteCounter) && radioTrueFalse === true && selectTrueFalse===true){ //if true , make the circle green
        $('#patientFormCircle').css('background-color', 'green');
        $('#form1').val(true);
        $('#error').val(false);
        //toastr.success("Patient Data Form is all Correct!");
    }
    else if(errorCounter>0){
        $('#patientFormCircle').css('background-color', 'red');
        $('#error').val(true);
        //toastr.warning("Errors!");
    }
    else if((completeIncompleteCounter<lengthOfInput)||radioTrueFalse===false || selectTrueFalse===false){ //fields aren't complete
        $('#patientFormCircle').css('background-color', 'orange');
        $('#form1').val(false);
        $('#error').val(false);
        //toastr.warning("Fields aren't complete");
    }
    
}

function InputsGeneralForm(e){
    var completeIncompleteCounter = 0;
    var errorCounter = 0;
    $('#secondPanelID input[type=search]:visible:enabled').each(function(i) {
        if(!$(this).hasClass("addGreen") && !$(this).hasClass("addRed")){
           completeIncompleteCounter += 0;
           }
        else if($(this).hasClass("addGreen"))
            {
                 completeIncompleteCounter += 1;
            }
        else if($(this).hasClass("addRed")){
                 errorCounter += 1;
                }
    });
    return [completeIncompleteCounter,errorCounter];
}
function RadiosGeneralForm(){
    /* START Check for radio buttons*/
    var radioAllChecked = false;
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
    console.log("2 - Number of completed groups : " +$('#secondPanelID input:radio:visible:checked').length + " number of radio groups: "+rgroups)
    if($('#secondPanelID input:radio:visible:checked').length < rgroups){
        console.log('2 - You must fill in all the fields.');
    }
    else{
        console.log('2 - COMPLETE!');
        var radioAllChecked=true;
    }
    /* END Check for radio buttons*/
    return(radioAllChecked)
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
    //pulling the function's array data
    var data = InputsGeneralForm();
    var completeIncompleteCounter = data[0];
    var errorCounter = data[1];
    //pulling the functions return values
    var radioTrueFalse = RadiosGeneralForm(); //taking the return value fromt he function>> either true/false
    var selectTrueFalse = SelectsGeneralForm();
    //getting the length of all the visible and enabled search input fields
    var lengthOfInput = $('#secondPanelID input[type=search]:visible:enabled').length;
    //debugging
    console.log("Number of visible input fields: "+($('#secondPanelID input[type=search]:visible:enabled').length) )
    console.log("input completeIncomplete: "+ completeIncompleteCounter)
    console.log("input error: "+ errorCounter)
    console.log("radio : T/F "+ radioTrueFalse)
    console.log("select : T/F "+ selectTrueFalse)
    if((lengthOfInput===completeIncompleteCounter) && radioTrueFalse === true && selectTrueFalse===true){ //if true , make the circle green
        $('#generalDataItemsFormCircle').css('background-color', 'green');
        $('#form2').val(true);
        $('#error').val(false);
        //toastr.success("General Data Form is all Correct!");
    }
    else if(errorCounter>0){
        $('#generalDataItemsFormCircle').css('background-color', 'red');
        $('#error').val(true);
        //toastr.warning("Errors!");
    }
    else if((completeIncompleteCounter<lengthOfInput)||radioTrueFalse===false || selectTrueFalse===false){ //fields aren't complete
        $('#generalDataItemsFormCircle').css('background-color', 'orange');
        $('#form2').val(false);
        $('#error').val(false);
        //toastr.warning("Fields aren't complete");
    }
}

function InputsAdditionalForm(e){
    var completeIncompleteCounter = 0;
    var errorCounter = 0;
    $('#thirdPanelID input[type=search]:visible:enabled').each(function(i) {
        if(!$(this).hasClass("addGreen") && !$(this).hasClass("addRed")){
           completeIncompleteCounter += 0;
           }
        else if($(this).hasClass("addGreen"))
            {
                 completeIncompleteCounter += 1;
            }
        else if($(this).hasClass("addRed")){
                 errorCounter += 1;
                }
    });
    return [completeIncompleteCounter,errorCounter];
}
function RadiosAdditionalForm(){
     /* START Check for radio buttons*/
    var radioAllChecked = false;
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
    console.log("3 - Number of completed groups : " +$('#thirdPanelID input:radio:visible:checked').length + " number of radio groups: "+rgroups)
    if($('#thirdPanelID input:radio:visible:checked').length < rgroups){
        console.log('3 - You must fill in all the fields.');
    }
    else{
        console.log('3 - COMPLETE!');
        var radioAllChecked=true;
    }
    /* END Check for radio buttons*/
    return(radioAllChecked)
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
function textareaAdditionalForm(e){
    var completeIncompleteCounter = 0;
    $('#thirdPanelID textarea:visible').each(function(i) {
        if(!$(this).hasClass("addGreen") && !$(this).hasClass("addRed")){
           completeIncompleteCounter += 0;
           }
        else if($(this).hasClass("addGreen"))
            {
                 completeIncompleteCounter += 1;
            }
    });
    return (completeIncompleteCounter);
}

function ColourAdditionalForm(){
    //pulling the function's array data
    var data = InputsAdditionalForm();
    var completeIncompleteCounter = data[0];
    var errorCounter = data[1];
    //pulling the functions return values
    var radioTrueFalse = RadiosAdditionalForm(); //taking the return value fromt he function>> either true/false
    var selectTrueFalse = SelectsAdditionalForm();
    var textareaTrueFalse = textareaAdditionalForm();
    //getting the length of all the visible and enabled search input fields
    var lengthOfInput = $('#thirdPanelID input[type=search]:visible:enabled').length;
    var lengthOfTextArea = $('#thirdPanelID textarea:visible').length;
    //debugging
    console.log("Number of visible input fields: "+($('#thirdPanelID input[type=search]:visible:enabled').length) )
    console.log("input completeIncomplete: "+ completeIncompleteCounter)
    console.log("input error: "+ errorCounter)
    console.log("radio : T/F "+ radioTrueFalse)
    console.log("select : T/F "+ selectTrueFalse)
    console.log("textarea : T/F "+ textareaTrueFalse + " length of text area: "+lengthOfTextArea)
    if((lengthOfInput===completeIncompleteCounter) && (lengthOfTextArea===textareaTrueFalse) && radioTrueFalse === true && selectTrueFalse===true){ //if true , make the circle green
        $('#dischargeCircle').css('background-color', 'green');
        $('#form3').val(true);
        $('#error').val(false);
        //toastr.success("Additional Data Form is all Correct!");
    }
    else if(errorCounter>0){
        $('#dischargeCircle').css('background-color', 'red');
        $('#error').val(true);
        //toastr.warning("Errors!");
    }
    else if((completeIncompleteCounter<lengthOfInput)|| (textareaTrueFalse<lengthOfTextArea) ||radioTrueFalse===false || selectTrueFalse===false){ //fields aren't complete
        $('#dischargeCircle').css('background-color', 'orange');
        $('#form3').val(false);
        $('#error').val(false);
        //toastr.warning("Fields aren't complete");
    }
}
