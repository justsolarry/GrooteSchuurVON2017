

$(document).ready(function() {
    loadDefaultValuesInFormForm(); //loading the default values in the patient form
    loadDefaultPanelColours(); // loading blue panels
    toastr.options.closeButton = true;
    /*START Menu Controls*/
    $(".createNewEntryMenuButton").removeClass("activeMenuButton");
    $(".viewAllEntriesMenuButton").removeClass("activeMenuButton");
    var currentLocation = window.location.href;
    if(currentLocation.includes("index.html"))
       {
           $(".createNewEntryMenuButton").addClass("activeMenuButton");
       }
    if(currentLocation.includes("viewTable.html"))
       {
           $(".viewAllEntriesMenuButton").addClass("activeMenuButton");
       }
    /*END Menu Controls*/
    /*Using the hide function wasn't optimal as it shows up when you load the page. Used display:none instead in CSS*/
    /*$("#sidebar-container").hide(); //hide your div initially*/
    //function that executes when the user scrolls
    $(window).scroll(function() {
        var patientFormLocation = $("#PatientFormID").offset().top;
        var generalDataItemsFormLocation = $("#generalDataItemsID").offset().top;
        var transferFormLocation = $("#TransferFormID").offset().top;
        /* debugging */
        /*console.log($(window).scrollTop())
        console.log("patient: "+ patientFormLocation)
        console.log("general: "+generalDataItemsFormLocation)
        console.log("additional: "+transferFormLocation)*/
        /* debugging */
        
        //condition statement to HIDE the side bar
        if($(window).scrollTop() < patientFormLocation-100) { 
            $("#sidebar-container").fadeOut(500);
        }
        //condition statement to DISPLAY the side bar
        if($(window).scrollTop() > patientFormLocation-100){
           $("#sidebar-container").fadeIn(500);
           }
        //Patient Form Section
        if($(window).scrollTop() > patientFormLocation-100 && $(window).scrollTop() < generalDataItemsFormLocation-100) { //scrolled past the patient form 1076
                if($('.generalDataItemsProgressBar').hasClass('glowingButton')){
                    $('.generalDataItemsProgressBar').removeClass('glowingButton')
                   }
                if($('.dischargeAndTransferProgressBar').hasClass('glowingButton')){
                    $('.dischargeAndTransferProgressBar').removeClass('glowingButton')
                   }
            
            $('.patientFormProgressBar').addClass('glowingButton');
            /* Toggling Buttons */
            $('#patientFormCircle').addClass('glowingButton');
            $('#generalDataItemsFormCircle').removeClass('glowingButton');
            $('#dischargeCircle').removeClass('glowingButton');
            
        }
            if($(window).scrollTop() > generalDataItemsFormLocation-100 && $(window).scrollTop() < transferFormLocation-100) { //scrolled past the general data items form 2156
                if($('.patientFormProgressBar').hasClass('glowingButton')){
                    $('.patientFormProgressBar').removeClass('glowingButton');
                   }
                if($('.dischargeAndTransferProgressBar').hasClass('glowingButton')){
                    $('.dischargeAndTransferProgressBar').removeClass('glowingButton');
                   }
                /*$('.patientFormProgressBar').removeClass('glowingButton')*/
                $('.generalDataItemsProgressBar').addClass('glowingButton');
                /*$('.dischargeAndTransferProgressBar').removeClass('glowingButton')*/
                /* Toggling Buttons */
                $('#patientFormCircle').removeClass('glowingButton');
                $('#generalDataItemsFormCircle').addClass('glowingButton');
                $('#dischargeCircle').removeClass('glowingButton');
            }
            if($(window).scrollTop() > transferFormLocation-100) { //scrolled past the general data items form 2156
                    if($('.patientFormProgressBar').hasClass('glowingButton')){
                        $('.patientFormProgressBar').removeClass('glowingButton');
                       }
                    if($('.generalDataItemsProgressBar').hasClass('glowingButton')){
                        $('.generalDataItemsProgressBar').removeClass('glowingButton');
                       }
                    /*$('.patientFormProgressBar').removeClass('glowingButton')*/
                    $('.dischargeAndTransferProgressBar').addClass('glowingButton');
                    /*$('.dischargeAndTransferProgressBar').removeClass('glowingButton')*/
                    /* Toggling Buttons */
                    $('#patientFormCircle').removeClass('glowingButton');
                    $('#generalDataItemsFormCircle').removeClass('glowingButton');
                    $('#dischargeCircle').addClass('glowingButton');
        }
    });
});

/* START Opening and Closing Menu Bar   */
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/* END Opening and Closing Menu Bar   */

/* START Auto filling of the patient identification panel above the progress bar */
var patientsName = document.getElementById("patientsName");
var patientsNameInSideBar = document.getElementById("patientInfoPanelPatientNameDisplayID");
$("#mothersLastName").keyup(function() {
    
    patientsName.value = "Baby "+this.value;
    patientsNameInSideBar.value = "Baby "+this.value;
    $('#patientsName').change(); //changing values here don't trigger the onchange in HTML
});
var patientMedicalNumber = document.getElementById("patientMedicalRecordNumber");
var patientMedicalNumberSideBar = document.getElementById("patientInfoPanelPatientMedicalDisplayID");
$("#patientMedicalRecordNumber").keyup(function() {
    
    patientMedicalNumber.value = this.value;
    patientMedicalNumberSideBar.value = this.value;
    
});
/* END Auto filling of the patient identification panel above the progress bar */
function loadDefaultValuesInFormForm(){
    $('#diedInDeliveryRoomNo').prop("checked",true).change();
}
function loadDefaultValues(){
    $('#chorioamnionitisNo').prop("checked",true).change();
    $('#congenitalInfectionNo').prop("checked",true).change();
    $('#temperatureMeasuredWithinFirstHourYes').prop("checked",true).change();
    $('#bacterialSepsisBeforeNo').prop("checked",true).change();
    $('#cranialImagingYes').prop("checked",true).change();
    $('#diedWithin12HoursNo').prop("checked",true).change();
    $('#steroidsForCLDNo').prop("checked",true).change();
    $('#ibuprofenNo').prop("checked",true).change();
    $('#acetaminophenNo').prop("checked",true).change();
    $('#probioticsYes').prop("checked",true).change();
    $('#ropTreatmentWithVegfDrugNo').prop("checked",true).change();
    $('#caffeineYes').prop("checked",true).change();
    $('#ropSurgeryNo').prop("checked",true).change();
    $('#pdaSurgeryNo').prop("checked",true).change();
    $('#necSurgeryNo').prop("checked",true).change();
    $('#otherSurgeryNo').prop("checked",true).change();
    $('#pneumothoraxNo').prop("checked",true).change();
    $('#focalIntestinalPerforationNo').prop("checked",true).change();
    $('#coagulaseNegativeNo').prop("checked",true).change();
    $('#fungalInfectionNo').prop("checked",true).change();
    $('#cysticPeriventricularNo').prop("checked",true).change();
    $('#enteralFeeding option[value="3"]').prop("selected",true).change();
    $('#oxygenAtDischargeNo').prop("checked",true).change();
    $('#cenoventionalVentilationAtDischargeNo').prop("checked",true).change();
    $('#highFrequencyVentilationAtDischargeNo').prop("checked",true).change();
    $('#highFlowNasalCannulaAtDischargeNo').prop("checked",true).change();
    $('#nasalVentilationAtDischargeNo').prop("checked",true).change();
    $('#nasalCpapAtDischargeNo').prop("checked",true).change();
    $('#monitorAtDischargeNo').prop("checked",true).change();
}
function loadDefaultPanelColours(){
    $('#firstPanelID').css('border','3px solid #337ab7');
    $('#secondPanelID').css('border','3px solid #337ab7');
    $('#thirdPanelID').css('border','3px solid #337ab7');
}
function checkingWhatTypeOfFormToDisplay(){
    var weight = document.getElementById('birthWeightInGrams').value;
    //Von baby  and died > show death form
    if((weight>=401 && weight<=1500) && document.getElementById('diedInDeliveryRoomYes').checked){ // Von baby and died > Show death form
        /*$("#secondForm").trigger('reset'); 
        $("#thirdForm").trigger('reset'); */
        $("#generalDataItemsID").html("DELIVERY ROOM DEATH FORM");
        $("#dayButtonID").text("Delivery Room Death Form");
            hideNotAVonBabyFields();  //hiding Not a VON baby fields
        $(".gestationalAgeInWeeksDiv").slideDown("slow");
        $(".gestionalDaysDiv").slideDown("slow");
        $(".headCircumferenceDiv").slideDown("slow");
        $(".raceOfMotherDiv").slideDown("slow");
        $(".prenatalCareDiv").slideDown("slow");
        $(".antenatalSteroidsDiv").slideDown("slow");
        $(".antenatalMagnesiumSulfateDiv").slideDown("slow");
        $(".chorioamnionitisDiv").slideDown("slow");
        $(".maternalHypertensionDiv").slideDown("slow");
        $(".maternalDiabetesDiv").slideDown("slow");
        $(".modeOfDeliveryVONDiv").slideDown("slow");
        $(".modeOfDeliveryAdditionalDiv").slideUp("slow");
        $(".sexOfInfantDiv").slideDown("slow");
        $(".multipleGestationDiv").slideDown("slow");
        $(".numberOfInfantsDeliveredDiv").slideDown("slow");
        $(".apgarScoresOneMinDiv").slideDown("slow");
        $(".apgarScoresFiveMinDiv").slideDown("slow");
        $(".temperatureMeasuredWithinFirstHourDiv").slideUp("slow");
        $(".congenitalInfectionDiv").slideDown("slow");
        $(".surfactantAtAnyTimeDiv").slideDown("slow");
        $(".InitialResuscitationDiv").slideDown("slow");
        $(".bacterialSepsisBeforeDiv").slideUp("slow");
        $(".oxygenDay28Div").slideUp("slow");
        $(".PIHDiv").slideUp("slow");
        $(".diedWithin12HoursDiv").slideUp("slow");
        $(".RespiratorySupportAfterInitialResuscitationDiv").slideUp("slow");
        $(".RespiratorySupportAt36WeeksDiv").slideUp("slow");
        $(".SteroidsDiv").slideUp("slow");
        $(".IbuprofenDiv").slideUp("slow");
        $(".acetaminophenDiv").slideUp("slow");
        $(".probioticsDiv").slideUp("slow");
        $(".ropTreatmentWithVegfDrugDiv").slideUp("slow");
        $(".caffeineDiv").slideUp("slow");
        $(".ropSurgeryDiv").slideUp("slow");
        $(".pdaSurgeryDiv").slideUp("slow");
        $(".necSurgeryDiv").slideUp("slow");
        $(".otherSurgeryDiv").slideUp("slow");
        $(".respiratoryDistressSyndromeDiv").slideUp("slow");
        $(".pneumothoraxDiv").slideUp("slow");
        $(".patentDuctusArteriosusDiv").slideUp("slow");
        $(".necrotizingEnterocolitisDiv").slideUp("slow");
        $(".focalIntestinalPerforationDiv").slideUp("slow");
        $(".afterDay3OfLifeDiv").slideUp("slow");
        $(".cysticPeriventricularDiv").slideUp("slow");
        $(".ROPRetinalDiv").slideUp("slow");
        $(".birthDefectDiv").slideDown("slow");
        $(".enteralFeedingDiv").slideUp("slow");
        $(".oxygenRespiratoryMonitorDiv").slideUp("slow");
        $(".initialDispositionDiv").slideUp("slow");
        $(".dateOfInitialDispositionDiv").slideUp("slow");
        $(".weightAtInitialDispositionDiv").slideUp("slow");
        $(".headCircumferenceInitialDispositionDiv").slideUp("slow");
        $(".initialLengthOfStayDiv").slideUp("slow");
        $(".day28DateDiv").slideUp("slow");
        }
    //Von baby and alive > show von form
    else if((weight>=401 && weight<=1500) && document.getElementById('diedInDeliveryRoomNo').checked){
            $("#generalDataItemsID").html("GENERAL DATA ITEMS");
            $("#dayButtonID").text("General Data Items");
            hideNotAVonBabyFields();
            loadDefaultValues(); //loading all the default values of the form
            }
    //Not a von baby and died > show error
    else if((weight>=1501 && weight<=7000) && document.getElementById('diedInDeliveryRoomYes').checked){
            toastr.error("Baby is NOT valid for form entry")
            }
    //Not a von baby and alive > Not VON form
    else if((weight>=1501 && weight<=7000) && document.getElementById('diedInDeliveryRoomNo').checked){
                $("#generalDataItemsID").html("GENERAL DATA ITEMS");
                $("#dayButtonID").text("General Data Items");
                
                showNotAVonBabyFields();
            }
    
}
function inbornOutbornCheck() {
    if (document.getElementById('locationOFBirthInborn').checked) {
        $("#GroupingHiddenField1").slideUp("slow");
        $('#GroupingHiddenField1').removeClass('glowingHiddenFields')
        /*$('#GroupingHiddenField1 select').prop('selectedIndex',0);
        $('#GroupingHiddenField1 input').val('');
        $('#GroupingHiddenField1 input').change();
        $('#GroupingHiddenField1 select').change();*/
        lengthOfStayCheck();
    }
    if (document.getElementById('locationOFBirthOutborn').checked) {
        $("#GroupingHiddenField1").slideDown("slow");
        $('#GroupingHiddenField1').addClass('glowingHiddenFields')
    }
}
function applyRadioTextSelectedColour(element) {
    if (document.getElementById(element).checked) {
        $('.diedInDeliveryRoomYesLabel').addClass('radioTextSelectedColour')
    }
    
}
function surfactantAtAnyTimeCheck(){
    var value1 = document.getElementById('hiddenFieldSurfactantAtAnyTime');
    if (document.getElementById('surfactantAtAnyTimeYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('surfactantAtAnyTimeNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldSurfactantAtAnyTime select').prop('selectedIndex',0);
    }
    if (document.getElementById('surfactantAtAnyTimeUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldSurfactantAtAnyTime select').prop('selected',true);
    }
}
function steroidsForCLDCheck() {
    var value1 = document.getElementById('hiddenFieldSteroidsCLD');
    if (document.getElementById('steroidsForCLDYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('steroidsForCLDNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('steroidsForCLDNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('steroidsForCLDUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function checkIfThereIsSurgery() {
    var value1 = document.getElementById('hiddenFieldHidingEntireSurgeryPanel');
    if ((document.getElementById('pdaSurgeryYes').checked)||
        (document.getElementById('necSurgeryYes').checked)||
        (document.getElementById('otherSurgeryYes').checked)
       ) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    else{
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function ropSurgeryCheck() {
    var value1 = document.getElementById('hiddenFieldROPSurgery');
    if (document.getElementById('ropSurgeryYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('ropSurgeryNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('ropSurgeryUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function congenitalInfectionCheck() {
    var value1 = document.getElementById('hiddenFieldCongenitalInfectionOrganisms');
    if (document.getElementById('congenitalInfectionYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('congenitalInfectionNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldCongenitalInfectionOrganisms select').prop('selectedIndex',0);
    }
    if (document.getElementById('congenitalInfectionUnknown').checked) {
        $(value1).slideDown("slow");
        $(value1).removeClass('glowingHiddenFields');
        $('#hiddenFieldCongenitalInfectionOrganisms select').prop('selectedIndex',0);
    }
}
function pneumothoraxCheck() {
    var value1 = document.getElementById('hiddenFieldpPneumothorax');
    if (document.getElementById('pneumothoraxYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('pneumothoraxNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('pneumothoraxUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function endotrachealTubeVentCheck(){
    if (document.getElementById('endotrachealTubeVentYes').checked) {
        $('#nasalCPAPOrNasalVentAfterInitialNo').attr("checked",true);
        $('#nasalCPAPOrNasalVentAfterInitialNo').change();
    }
}
function successToastr(){
    if($('#patientFormCircle').css('background-color')=="rgb(0, 128, 0)" && $('#generalDataItemsFormCircle').css('background-color')=="rgb(0, 128, 0)" && $('#dischargeCircle').css('background-color')=="rgb(0, 128, 0)"){
       toastr.success("All Forms are complete!")
       }
    else if($('#patientFormCircle').css('background-color')=="rgb(255, 0, 0)" || $('#generalDataItemsFormCircle').css('background-color')=="rgb(255, 0, 0)" || $('#dischargeCircle').css('background-color')=="rgb(255, 0, 0)"){
        toastr.error("One of the Forms contain Errors!")
    }
    else{
        toastr.warning("Forms are incomplete!")
    }
    
}
function formComplete(){     
    if($('#patientFormCircle').css('background-color')=="rgb(0, 128, 0)" && $('#generalDataItemsFormCircle').css('background-color')=="rgb(0, 128, 0)" && $('#dischargeCircle').css('background-color')=="rgb(0, 128, 0)"){
       toastr.success("All Forms are complete!")
        $('#formComplete').val(true)
       }
}
function successReload(){
    
}
function diedWithin12HoursCheck() {
    var value1 = document.getElementById('RespiratorySupportAfterInitialResuscitationDiv');
    if (document.getElementById('diedWithin12HoursYes').checked) {
        $('.RespiratorySupportAt36WeeksDiv').slideUp("slow");
        $('.RespiratorySupportAt36WeeksDiv').removeClass('glowingHiddenFields')
        $('.afterDay3OfLifeDiv').slideUp("slow");
        $('.afterDay3OfLifeDiv').removeClass('glowingHiddenFields')
        /*$('#oxygenAfterInitialResuscitationNA').attr("checked",true);
        $('#conventionalVentilationAfterInitialNA').attr("checked",true);
        $('#highFrequencyAfterInitialNA').attr("checked",true);
        $('#highFlowAfterInitialNA').attr("checked",true);
        $('#nasalVentilationAfterInitialNA').attr("checked",true);
        $('#nasalCPAPAfterInitialNA').attr("checked",true);
        $('#nasalCPAPOrNasalVentAfterInitialNA').attr("checked",true);*/
        
    }
    if (document.getElementById('diedWithin12HoursNo').checked) {
        $('.RespiratorySupportAt36WeeksDiv').slideDown("slow");
        $('.RespiratorySupportAt36WeeksDiv').addClass('glowingHiddenFields');
        $('.afterDay3OfLifeDiv').slideDown("slow");
        $('.afterDay3OfLifeDiv').addClass('glowingHiddenFields')
    }
    if (document.getElementById('diedWithin12HoursNA').checked) {
        $('.RespiratorySupportAt36WeeksDiv').slideDown("slow");
        $('.RespiratorySupportAt36WeeksDiv').addClass('glowingHiddenFields');
        $('.afterDay3OfLifeDiv').slideDown("slow");
        $('.afterDay3OfLifeDiv').addClass('glowingHiddenFields')
    }
    if (document.getElementById('diedWithin12HoursUnknown').checked) {
        $('.RespiratorySupportAt36WeeksDiv').slideDown("slow");
        $('.RespiratorySupportAt36WeeksDiv').addClass('glowingHiddenFields');
        $('.afterDay3OfLifeDiv').slideDown("slow");
        $('.afterDay3OfLifeDiv').addClass('glowingHiddenFields')
    }
}
function necrotizingEnterocolitisCheck() {
    var value1 = document.getElementById('hiddenFieldnecrotizingEnterocolitis');
    if (document.getElementById('necrotizingEnterocolitisYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('necrotizingEnterocolitisNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('necrotizingEnterocolitisNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('necrotizingEnterocolitisUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function focalIntestinalPerforationCheck() {
    var value1 = document.getElementById('hiddenFieldfocalIntestinalPerforation');
    if (document.getElementById('focalIntestinalPerforationYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('focalIntestinalPerforationNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('focalIntestinalPerforationNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('focalIntestinalPerforationUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function fetalMedicineUnitFlaggedCheck() {
    var value1 = document.getElementById('hiddenFieldFetalMedicineUnitFlaggedGroup');
    if (document.getElementById('fetalMedicineUnitFlaggedYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('fetalMedicineUnitFlaggedNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#antenatalScan').val('');
    }
}
function jaundiceNeedingPhototherapyCheck() {
    var value1 = document.getElementById('hiddenFieldJaundiceNeedingPhototherapy');
    if (document.getElementById('jaundiceNeedingPhototherapyYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('jaundiceNeedingPhototherapyNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function hypoxicIschaemicEncephalopathyCheck() {
    var value1 = document.getElementById('hiddenFieldhypoxicIschaemicEncephalopathy');
    if (document.getElementById('hypoxicIschaemicEncephalopathyYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('hypoxicIschaemicEncephalopathyNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function RVDCheck() {
    var value1 = document.getElementById('hiddenFieldRVD');
    var value2 = document.getElementById('hiddenFieldPCRDate');
    if (document.getElementById('RVDYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
        $(value2).slideDown("slow");
        $(value2).addClass('glowingHiddenFields')
        /* Hides the PCR Date in the appointment section */
        $('#hiddenFieldAppointmentPCRDate').slideUp("slow");
    }
    if (document.getElementById('RVDNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $(value2).slideUp("slow");
        $(value2).removeClass('glowingHiddenFields')
        /* Reveal the PCR Date in the appointment section */
        $('#hiddenFieldAppointmentPCRDate').slideDown("slow");
    }
    if (document.getElementById('RVDUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $(value2).slideUp("slow");
        $(value2).removeClass('glowingHiddenFields')
        /* Reveal the PCR Date in the appointment section */
        $('#hiddenFieldAppointmentPCRDate').slideDown("slow");
    }
}
function invasiveVentilationCheck() {
    var value1 = document.getElementById('hiddenFieldInvasiveVentilation');
    if (document.getElementById('invasiveVentilationYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('invasiveVentilationNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function HIVStatusCheck() {
    var value1 = document.getElementById('hiddenFieldHIVStatus');
    if (document.getElementById('HIVStatusPositive').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('HIVStatusNegative').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function abnormalHeadUltrasoundCheck() {
    var value1 = document.getElementById('hiddenFieldAbnormalHeadUltrasound');
    if (document.getElementById('abnormalHeadUltrasoundYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('abnormalHeadUltrasoundNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function chromosomesDoneCheck() {
    var value1 = document.getElementById('hiddenFieldChromosomesDone');
    if (document.getElementById('chromosomesDoneYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('chromosomesDoneNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function coagulaseNegativeCheck() {
    var value1 = document.getElementById('hiddenFieldCoagulaseNegative');
    if (document.getElementById('coagulaseNegativeYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('coagulaseNegativeNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('coagulaseNegativeNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('coagulaseNegativeUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function fungalInfectionCheck() {
    var value1 = document.getElementById('hiddenFieldFungalInfection');
    if (document.getElementById('fungalInfectionYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('fungalInfectionNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('fungalInfectionNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('fungalInfectionUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function ROPRetinalCheck() {
    var value1 = document.getElementById('hiddenFieldROPRetinal');
    if (document.getElementById('ROPRetinalYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('ROPRetinalNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('ROPRetinalNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('ROPRetinalUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function birthDefectCheck() {
    var value1 = document.getElementById('hiddenFieldBirthDefectCodes');
    if (document.getElementById('birthDefectYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('birthDefectNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('birthDefectUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function CFM48HoursCheck() {
    var value1 = document.getElementById('hiddenFieldCFM48Hours');
    if (document.getElementById('CFM48HoursYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('CFM48HoursNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('CFM48HoursUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function respiratory36WeeksOxygenCheck() {
    var value1 = document.getElementById('hiddenFieldRespiratory36WeeksOxygenGroup');
    if (document.getElementById('oxygenAt36WeeksYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
        //uncheck all the ones below it NA
        $('#conventionalAt36WeeksNA').attr("checked",false);
        $('#highFrequencyVentilationAt36WeeksNA').attr("checked",false);
        $('#highFlowNasalCannulaAt36WeeksNA').attr("checked",false);
        $('#nasalIMVAt36WeeksNA').attr("checked",false);
        $('#nasalCpapAt36WeeksNA').attr("checked",false);
        
        $('#conventionalAt36WeeksNA').change();
        $('#highFrequencyVentilationAt36WeeksNA').change();
        $('#highFlowNasalCannulaAt36WeeksNA').change();
        $('#nasalIMVAt36WeeksNA').change();
        $('#nasalCpapAt36WeeksNA').change();
        toastr.success("Respiratory at 36 weeks - All N/A fields are unchecked")
    }
    if (document.getElementById('oxygenAt36WeeksNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        //uncheck all the ones below it NA
        $('#conventionalAt36WeeksNA').attr("checked",false);
        $('#highFrequencyVentilationAt36WeeksNA').attr("checked",false);
        $('#highFlowNasalCannulaAt36WeeksNA').attr("checked",false);
        $('#nasalIMVAt36WeeksNA').attr("checked",false);
        $('#nasalCpapAt36WeeksNA').attr("checked",false);
        
        $('#conventionalAt36WeeksNA').change();
        $('#highFrequencyVentilationAt36WeeksNA').change();
        $('#highFlowNasalCannulaAt36WeeksNA').change();
        $('#nasalIMVAt36WeeksNA').change();
        $('#nasalCpapAt36WeeksNA').change();
        toastr.success("Respiratory at 36 weeks - All N/A fields are unchecked")
    }
    if (document.getElementById('oxygenAt36WeeksNA').checked) {
        //check all the ones below it NA
        $('#conventionalAt36WeeksNA').attr("checked",true);
        $('#highFrequencyVentilationAt36WeeksNA').attr("checked",true);
        $('#highFlowNasalCannulaAt36WeeksNA').attr("checked",true);
        $('#nasalIMVAt36WeeksNA').attr("checked",true);
        $('#nasalCpapAt36WeeksNA').attr("checked",true);
        
        $('#conventionalAt36WeeksNA').change();
        $('#highFrequencyVentilationAt36WeeksNA').change();
        $('#highFlowNasalCannulaAt36WeeksNA').change();
        $('#nasalIMVAt36WeeksNA').change();
        $('#nasalCpapAt36WeeksNA').change();
        toastr.success("Respiratory at 36 weeks - All N/A fields are checked")
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAt36WeeksUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        //uncheck all the ones below it NA
        $('#conventionalAt36WeeksNA').attr("checked",false);
        $('#highFrequencyVentilationAt36WeeksNA').attr("checked",false);
        $('#highFlowNasalCannulaAt36WeeksNA').attr("checked",false);
        $('#nasalIMVAt36WeeksNA').attr("checked",false);
        $('#nasalCpapAt36WeeksNA').attr("checked",false);
        
        $('#conventionalAt36WeeksNA').change();
        $('#highFrequencyVentilationAt36WeeksNA').change();
        $('#highFlowNasalCannulaAt36WeeksNA').change();
        $('#nasalIMVAt36WeeksNA').change();
        $('#nasalCpapAt36WeeksNA').change();
        toastr.success("Respiratory at 36 weeks - All N/A fields are unchecked")
    }
}
function oxygenAtDischargeCheck() {
    var value1 = document.getElementById('hiddenFieldAtDischargeGroup');
    if (document.getElementById('oxygenAtDischargeYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAtDischargeNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAtDischargeNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAtDischargeUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function initialResuscitationCheck() {
    var value1 = document.getElementById('hiddenFieldAtInitialResuscitation');
    if (document.getElementById('oxygenAtInitialResuscitationYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAtInitialResuscitationNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAtInitialResuscitationNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAtInitialResuscitationUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function AfterInitialResuscitationCheck() {
    var value1 = document.getElementById('hiddenFieldAfterInitialResuscitation');
    if (document.getElementById('oxygenAfterInitialResuscitationYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAfterInitialResuscitationNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAfterInitialResuscitationNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAfterInitialResuscitationUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function bacterialSepsisBeforeCheck() {
    var value1 = document.getElementById('hiddenFieldBacterialSepsisBefore');
    //removeNewBacterialFieldDiv
    if (document.getElementById('bacterialSepsisBeforeYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('bacterialSepsisBeforeNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldBacterialSepsisBefore select').prop('selectedIndex',0).change();
    }
    if (document.getElementById('bacterialSepsisBeforeNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldBacterialSepsisBefore select').prop('selectedIndex',0).change();
    }
    if (document.getElementById('bacterialSepsisBeforeUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldBacterialSepsisBefore select').prop('selectedIndex',0).change();
    }
}
function numberOfBacterialSepsisBeforeCheck(){
   var e = document.getElementById("numberOfBacterialSepsisBefore");
    var strUser = e.options[e.selectedIndex].value;
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==1){
        $('#bacterialBeforeDiv1').slideDown("slow");
        $('#bacterialBeforeDiv2').slideUp("slow");
        $('#bacterialBeforeDiv3').slideUp("slow");
        $('#hiddenFieldBacterialSepsisBefore').addClass('glowingHiddenFields');
    }
    else if(strUser==2){
        $('#bacterialBeforeDiv1').slideDown("slow");
        $('#bacterialBeforeDiv2').slideDown("slow");
        $('#bacterialBeforeDiv3').slideUp("slow");
        $('#hiddenFieldBacterialSepsisBefore').addClass('glowingHiddenFields');
    }
    else if(strUser==3){
        $('#bacterialBeforeDiv1').slideDown("slow");
        $('#bacterialBeforeDiv2').slideDown("slow");
        $('#bacterialBeforeDiv3').slideDown("slow");
        $('#hiddenFieldBacterialSepsisBefore').addClass('glowingHiddenFields');
    }
    else{
        $('#bacterialBeforeDiv1').slideUp("slow");
        $('#bacterialBeforeDiv2').slideUp("slow");
        $('#bacterialBeforeDiv3').slideUp("slow");
        $('#hiddenFieldBacterialSepsisBefore').removeClass('glowingHiddenFields');
    }
}
function numberOfBacterialSepsisAfterCheck(){
   var e = document.getElementById("numberOfBacterialSepsisAfter");
    var strUser = e.options[e.selectedIndex].value;
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==1){
        $('#bacterialAfterDiv1').slideDown("slow");
        $('#bacterialAfterDiv2').slideUp("slow");
        $('#bacterialAfterDiv3').slideUp("slow");
        $('#hiddenFieldBacterialSepsis').addClass('glowingHiddenFields');
    }
    else if(strUser==2){
        $('#bacterialAfterDiv1').slideDown("slow");
        $('#bacterialAfterDiv2').slideDown("slow");
        $('#bacterialAfterDiv3').slideUp("slow");
        $('#hiddenFieldBacterialSepsis').addClass('glowingHiddenFields');
    }
    else if(strUser==3){
        $('#bacterialAfterDiv1').slideDown("slow");
        $('#bacterialAfterDiv2').slideDown("slow");
        $('#bacterialAfterDiv3').slideDown("slow");
        $('#hiddenFieldBacterialSepsis').addClass('glowingHiddenFields');
    }
}
function numberOfBacterialCodesDuringAdmissionCheck(){
   var e = document.getElementById("numberOfBacterialCodesDuringAdmission");
    var strUser = e.options[e.selectedIndex].value;
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==1){
        $('#bacterialCodeDuringAdmissionDiv1').slideDown("slow");
        $('#bacterialCodeDuringAdmissionDiv2').slideUp("slow");
        $('#bacterialCodeDuringAdmissionDiv3').slideUp("slow");
        $('#hiddenFieldBacterialSepsisBefore').addClass('glowingHiddenFields');
    }
    else if(strUser==2){
        $('#bacterialCodeDuringAdmissionDiv1').slideDown("slow");
        $('#bacterialCodeDuringAdmissionDiv2').slideDown("slow");
        $('#bacterialCodeDuringAdmissionDiv3').slideUp("slow");
        $('#hiddenFieldBacterialSepsisBefore').addClass('glowingHiddenFields');
    }
    else if(strUser==3){
        $('#bacterialCodeDuringAdmissionDiv1').slideDown("slow");
        $('#bacterialCodeDuringAdmissionDiv2').slideDown("slow");
        $('#bacterialCodeDuringAdmissionDiv3').slideDown("slow");
        $('#hiddenFieldBacterialSepsisBefore').addClass('glowingHiddenFields');
    }
}
function numberOfCongenitalInfectionsCheck(){
   var e = document.getElementById("numberOfCongenitalInfections");
    var strUser = e.options[e.selectedIndex].value;
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==1){
        $('#congenitalCodeDiv1').slideDown("slow");
        $('#congenitalCodeDiv2').slideUp("slow");
        $('#congenitalCodeDiv3').slideUp("slow");
        $('#hiddenFieldCongenitalInfectionOrganisms').addClass('glowingHiddenFields');
    }
    else if(strUser==2){
        $('#congenitalCodeDiv1').slideDown("slow");
        $('#congenitalCodeDiv2').slideDown("slow");
        $('#congenitalCodeDiv3').slideUp("slow");
        $('#hiddenFieldCongenitalInfectionOrganisms').addClass('glowingHiddenFields');
    }
    else if(strUser==3){
        $('#congenitalCodeDiv1').slideDown("slow");
        $('#congenitalCodeDiv2').slideDown("slow");
        $('#congenitalCodeDiv3').slideDown("slow");
        $('#hiddenFieldCongenitalInfectionOrganisms').addClass('glowingHiddenFields');
    }
}
function numberOfBirthDefectsCheck(){
   var e = document.getElementById("numberOfBirthDefects");
    var strUser = e.options[e.selectedIndex].value;
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==1){
        $('#birthDefectCodeDiv1').slideDown("slow");
        $('#birthDefectCodeDiv2').slideUp("slow");
        $('#birthDefectCodeDiv3').slideUp("slow");
        $('#birthDefectCodeDiv4').slideUp("slow");
        $('#birthDefectCodeDiv5').slideUp("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    else if(strUser==2){
        $('#birthDefectCodeDiv1').slideDown("slow");
        $('#birthDefectCodeDiv2').slideDown("slow");
        $('#birthDefectCodeDiv3').slideUp("slow");
        $('#birthDefectCodeDiv4').slideUp("slow");
        $('#birthDefectCodeDiv5').slideUp("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    else if(strUser==3){
        $('#birthDefectCodeDiv1').slideDown("slow");
        $('#birthDefectCodeDiv2').slideDown("slow");
        $('#birthDefectCodeDiv3').slideDown("slow");
        $('#birthDefectCodeDiv4').slideUp("slow");
        $('#birthDefectCodeDiv5').slideUp("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    else if(strUser==4){
        $('#birthDefectCodeDiv1').slideDown("slow");
        $('#birthDefectCodeDiv2').slideDown("slow");
        $('#birthDefectCodeDiv3').slideDown("slow");
        $('#birthDefectCodeDiv4').slideDown("slow");
        $('#birthDefectCodeDiv5').slideUp("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    else if(strUser==5){
        $('#birthDefectCodeDiv1').slideDown("slow");
        $('#birthDefectCodeDiv2').slideDown("slow");
        $('#birthDefectCodeDiv3').slideDown("slow");
        $('#birthDefectCodeDiv4').slideDown("slow");
        $('#birthDefectCodeDiv5').slideDown("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    
}
function noOfAppointmentsCheck(){
    var e = document.getElementById("noOfAppointments");
    var strUser = e.options[e.selectedIndex].value;
    if (strUser==1){
        $('#appointmentDiv1').slideDown("slow");
        $('#appointmentDiv2').slideUp("slow");
        $('#appointmentDiv3').slideUp("slow");
        $('#appointmentDiv4').slideUp("slow");
        $('#appointmentDiv5').slideUp("slow");
    }
    else if(strUser==2){
        $('#appointmentDiv1').slideDown("slow");
        $('#appointmentDiv2').slideDown("slow");
        $('#appointmentDiv3').slideUp("slow");
        $('#appointmentDiv4').slideUp("slow");
        $('#appointmentDiv5').slideUp("slow");
    }
    else if(strUser==3){
        $('#appointmentDiv1').slideDown("slow");
        $('#appointmentDiv2').slideDown("slow");
        $('#appointmentDiv3').slideDown("slow");
        $('#appointmentDiv4').slideUp("slow");
        $('#appointmentDiv5').slideUp("slow");
    }
    else if(strUser==4){
        $('#appointmentDiv1').slideDown("slow");
        $('#appointmentDiv2').slideDown("slow");
        $('#appointmentDiv3').slideDown("slow");
        $('#appointmentDiv4').slideDown("slow");
        $('#appointmentDiv5').slideUp("slow");
    }
    else if(strUser==5){
        $('#appointmentDiv1').slideDown("slow");
        $('#appointmentDiv2').slideDown("slow");
        $('#appointmentDiv3').slideDown("slow");
        $('#appointmentDiv4').slideDown("slow");
        $('#appointmentDiv5').slideDown("slow");
    }
    else{
        $('#appointmentDiv1').slideUp("slow");
        $('#appointmentDiv2').slideUp("slow");
        $('#appointmentDiv3').slideUp("slow");
        $('#appointmentDiv4').slideUp("slow");
        $('#appointmentDiv5').slideUp("slow");
    }
}
function numberOfSurgeryCodesCheck(){
   var e = document.getElementById("numberOfSurgeryCodes");
    var strUser = e.options[e.selectedIndex].value;
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==1){
        $('#surgeryDiv1').slideDown("slow");
        $('#surgeryDiv2').slideUp("slow");
        $('#surgeryDiv3').slideUp("slow");
        $('#surgeryDiv4').slideUp("slow");
        $('#surgeryDiv5').slideUp("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    else if(strUser==2){
        $('#surgeryDiv1').slideDown("slow");
        $('#surgeryDiv2').slideDown("slow");
        $('#surgeryDiv3').slideUp("slow");
        $('#surgeryDiv4').slideUp("slow");
        $('#surgeryDiv5').slideUp("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    else if(strUser==3){
        $('#surgeryDiv1').slideDown("slow");
        $('#surgeryDiv2').slideDown("slow");
        $('#surgeryDiv3').slideDown("slow");
        $('#surgeryDiv4').slideUp("slow");
        $('#surgeryDiv5').slideUp("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    else if(strUser==4){
        $('#surgeryDiv1').slideDown("slow");
        $('#surgeryDiv2').slideDown("slow");
        $('#surgeryDiv3').slideDown("slow");
        $('#surgeryDiv4').slideDown("slow");
        $('#surgeryDiv5').slideUp("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    else if(strUser==5){
        $('#surgeryDiv1').slideDown("slow");
        $('#surgeryDiv2').slideDown("slow");
        $('#surgeryDiv3').slideDown("slow");
        $('#surgeryDiv4').slideDown("slow");
        $('#surgeryDiv5').slideDown("slow");
        $('#hiddenFieldBirthDefectCodes').addClass('glowingHiddenFields');
    }
    
}
function cranialImagingCheck() {
    var value1 = document.getElementById('hiddenFieldCranialImaging');
    if (document.getElementById('cranialImagingYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('cranialImagingNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldCranialImaging select').prop('selectedIndex',0);
        $('#hiddenFieldCranialImaging input:radio').prop('checked',false);
    }
    if (document.getElementById('cranialImagingNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldCranialImaging select').prop('selectedIndex',0);
        $('#hiddenFieldCranialImaging input:radio').prop('checked',false);
    }
    if (document.getElementById('cranialImagingUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#hiddenFieldCranialImaging select').prop('selectedIndex',0);
        $('#hiddenFieldCranialImaging input:radio').prop('checked',false);
    }
}
function bacterialSepsisCheck() {
    var value1 = document.getElementById('hiddenFieldBacterialSepsis');
    if (document.getElementById('bacterialSepsisYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('bacterialSepsisNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        
    }
    if (document.getElementById('bacterialSepsisUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}
function immunizations652Check() {
    var value1 = document.getElementById('hiddenFieldImmunizations652Date');
    if (document.getElementById('immunizations652Yes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
        $('#immunizationDate').datepicker('setDate', null);
    }
    if (document.getElementById('immunizations652No').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#immunizations652Date').datepicker('setDate', null);
        toastr.success("Immunization date - setting it")
        var arg = 43;
        var d = $('#dateOfBirth').datepicker('getDate');
        d.setDate(d.getDate() + arg);
        $('#immunizationDate').datepicker('setDate', d);
        
        calculate4WeeksAfterGivenImmunizationDateCheckedNo();
    }
}
function immunizations1452Check(){
    var value1 = document.getElementById('hiddenFieldImmunizations1452Date');
    if (document.getElementById('immunizations1452Yes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
        $('#immunizationDate').datepicker('setDate', null);
    }
    if (document.getElementById('immunizations1452No').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        toastr.success("Immunization date - setting it")
        var arg = 56;
        var d = $('#dateOfBirth').datepicker('getDate');
        d.setDate(d.getDate() + arg);
        $('#immunizationDate').datepicker('setDate', d);
        
        //calculate4WeeksAfterGivenImmunizationDateCheckedNo();
    }
}
function temperatureMeasuredWithinFirstHourCheck() {
    var value1 = document.getElementById('hiddenFieldTemperatureFirstHour');
    if (document.getElementById('temperatureMeasuredWithinFirstHourYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields');
    }
    if (document.getElementById('temperatureMeasuredWithinFirstHourNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields');
        $('#hiddenFieldTemperatureFirstHour select').prop('selectedIndex',0);
    }
    if (document.getElementById('temperatureMeasuredWithinFirstHourNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields');
        $('#hiddenFieldTemperatureFirstHour select').prop('selectedIndex',0);
    }
    if (document.getElementById('temperatureMeasuredWithinFirstHourUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields');
        $('#hiddenFieldTemperatureFirstHour select').prop('selectedIndex',0);
    }
}
function postTransferDispositionCheck() {
    var e = document.getElementById("postTransferDisposition");
    var strUser = e.options[e.selectedIndex].value;
    
    var partB = document.getElementById('TransferFormPartB');
    var partC = document.getElementById('TransferFormPartC');
    var partD = document.getElementById('TransferFormPartD');
    /*if case for Home, died, hospitalized - Show parts D when available*/
    if (strUser==1 || strUser==3 || strUser==5){
        $(partB).slideUp("slow");
        $(partC).slideUp("slow");
        $(partD).slideDown("slow");
        $(partB).removeClass('glowingHiddenFields');
        $(partC).removeClass('glowingHiddenFields');
        $(partD).addClass('glowingHiddenFields');
        //hide all the other panels above (28 day and 36 weeks)
        $('.day28DateDiv').slideUp("slow");
        $('.RespiratorySupportAt36WeeksDiv').slideUp("slow");
        toastr.success("Hiding 28 Day and Respiratory at 36 weeks")
    }
    /*if case for transferred - Show parts C and D*/
    if (strUser==2){
        $(partB).slideUp("slow");
        $(partC).slideDown("slow");
        $(partD).slideDown("slow");
        $(partB).removeClass('glowingHiddenFields');
        $(partC).addClass('glowingHiddenFields');
        $(partD).addClass('glowingHiddenFields');
        //hide all the other panels above (28 day and 36 weeks)
        $('.day28DateDiv').slideUp("slow");
        $('.RespiratorySupportAt36WeeksDiv').slideUp("slow");
        toastr.success("Hiding 28 Day and Respiratory at 36 weeks")
    }
    /*if case for readmitted to hospital - show (B and D)  C if applicable*/
    if (strUser==4){
        $(partB).slideDown("slow");
        $(partC).slideDown("slow");
        $(partD).slideDown("slow");
        $(partB).removeClass('glowingHiddenFields');
        $(partC).removeClass('glowingHiddenFields');
        $(partD).removeClass('glowingHiddenFields');
        $(partB).addClass('glowingHiddenFields');
        $(partC).addClass('glowingHiddenFields');
        $(partD).addClass('glowingHiddenFields');
        //show all the other panels above (28 day and 36 weeks)
        $('.day28DateDiv').slideDown("slow");
        $('.RespiratorySupportAt36WeeksDiv').slideDown("slow");
        toastr.success("Showing 28 Day and Respiratory at 36 weeks")
    }
    /*Unknown*/
    if (strUser==9 || strUser==7){
        $(partB).slideUp("slow");
        $(partC).slideUp("slow");
        $(partD).slideUp("slow");
        $(partB).removeClass('glowingHiddenFields');
        $(partC).removeClass('glowingHiddenFields');
        $(partD).removeClass('glowingHiddenFields');
        //hide all the other panels above (28 day and 36 weeks)
        $('.day28DateDiv').slideUp("slow");
        $('.RespiratorySupportAt36WeeksDiv').slideUp("slow");
        toastr.success("Hiding 28 Day and Respiratory at 36 weeks")
    }
}
function dispositionAfterReadmissionCheck() {
    var e = document.getElementById("dispositionAfterReadmission");
    var strUser = e.options[e.selectedIndex].value;
    
    var partC = document.getElementById('TransferFormPartC');
    var partD = document.getElementById('TransferFormPartD');
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==0 || strUser==1 || strUser==3){
    
        $(partC).slideUp("slow");
        $(partD).slideDown("slow");
        $(partC).removeClass('glowingHiddenFields');
        $(partD).addClass('glowingHiddenFields');
    }
    /*if case for transferred - Show parts C and D when available*/
    if (strUser==2){
        $(partC).slideDown("slow");
        $(partD).slideDown("slow");
  
        $(partC).addClass('glowingHiddenFields');
        $(partD).addClass('glowingHiddenFields');
    }
}
function checkGestationalAgeInWeeks(){
    var e = document.getElementById("gestationalAgeInWeeks");
    var strUser = e.options[e.selectedIndex].value;
    if(strUser==99){
       $('.gestionalDaysDiv').slideUp('slow)');
       }
    else{
        $('.gestionalDaysDiv').slideDown('slow)');
    }
}
function ultimateDispositionCheck() {
    var e = document.getElementById("ultimateDisposition");
    var strUser = e.options[e.selectedIndex].value;
    
    var partD = document.getElementById('TransferFormPartD');
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==0 || strUser==1 || strUser==2){
    
        $(partD).slideDown("slow");
        $(partD).addClass('glowingHiddenFields');
    }
}
function PIHWhereOccurredCheck() {
    var e = document.getElementById("worstGradePIH");
    var strUser = e.options[e.selectedIndex].value;
    
    var hiddenField = document.getElementById('hiddenFieldPIHWhereOccurred');
    /*if case for Home, died, hospitalized - Show parts D */
    if (strUser==1 || strUser==2 || strUser==3 || strUser==4){
    
        $(hiddenField).slideDown("slow");
    }
    else{
        $(hiddenField).slideUp("slow");
    }
}
function initialDispositionCheck() {
    var e = document.getElementById("initialDisposition");
    var strUser = e.options[e.selectedIndex].value;
    
    var hiddenField = document.getElementById('TransferFormPartA');
    /* if transferred */
    if (strUser==2 ){
    
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
    }
    else{
        $(hiddenField).slideUp("slow");
        $(hiddenField).removeClass('glowingHiddenFields');
    }
}
function sepsisDuringAdmissionCheck() {
    var e = document.getElementById("sepsisDuringAdmission");
    var strUser = e.options[e.selectedIndex].value;
    
    var hiddenField = document.getElementById('hiddenFieldSepsisDuringAdmission');
    var hiddenField1 = document.getElementById('organismCodeDuringAdmissionDiv');
    var button = document.getElementById('addNewOrganismCodeDuringAdmissionDiv');
    if (strUser==1){
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
        $(hiddenField1).slideDown("slow");
        $(button).slideDown("slow");
    } 
    else if(strUser==2){
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');    
        $(hiddenField1).slideUp("slow");
        $(button).slideUp("slow");
    }
    else{
        $(hiddenField).slideUp("slow");
        $(hiddenField).removeclass('glowingHiddenFields');
        $(hiddenField1).slideUp("slow");
        $(button).slideUp("slow");
    }
    
        
    
}
function congenitalCode1FirstPartCheck(){
    var e = document.getElementById("congenitalCode1");
    var strUser = e.options[e.selectedIndex].value;
    var hiddenField = document.getElementById('hiddenFieldCongenitalCode1SecondPart');
    if (strUser==1 ){
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
    }
}
function multipleGestationCheck() {
    if (document.getElementById('multipleGestationYes').checked) {
        $("#numberOfInfantsDelivered").val('2').change();
        $('#numberOfInfantsDelivered option').prop("disabled", false).change();
        $('#numberOfInfantsDelivered option[value=00]').prop('disabled', true).change(); //disables select
        $('#numberOfInfantsDelivered option[value=1]').prop('disabled', true).change(); //disables 1
        $('#numberOfInfantsDelivered option[value=77]').prop('disabled', true).change(); //disables 77
        $('#numberOfInfantsDelivered option[value=99]').prop('disabled', true).change(); //disables 99
    }
    if (document.getElementById('multipleGestationNo').checked) {
        $("#numberOfInfantsDelivered").val('1').change();
        $('#numberOfInfantsDelivered option:not([value=1])').prop('disabled', true).change(); //disable everything that isn't 1
    }
    if (document.getElementById('multipleGestationUnknown').checked) {
        $("#numberOfInfantsDelivered").val('99').change();
        $('#numberOfInfantsDelivered option:not([value=99])').prop('disabled', true).change();
    }
}
function numberOfInfantsDeliveredCheck(){
    var e = document.getElementById("numberOfInfantsDelivered");
    var strUser = e.options[e.selectedIndex].value;
    var hiddenField = document.getElementById('twinOrTripletDiv');
    if(strUser==2){
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
        $('#twinOrTripletOrQuadrupletTwin').attr("checked",true);
        $('#twinOrTripletOrQuadrupletTwin').change();
        
    }
    else if(strUser==3){
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
        $('#twinOrTripletOrQuadrupletTriplet').attr("checked",true);
        $('#twinOrTripletOrQuadrupletTriplet').change();
    }
    else if(strUser==4){
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
        $('#twinOrTripletOrQuadrupletQuadruplet').attr("checked",true);
        $('#twinOrTripletOrQuadrupletQuadruplet').change();
    }
    else{
        $(hiddenField).slideUp("slow");
        $(hiddenField).removeClass('glowingHiddenFields');
        $('#hiddenFieldTwins').slideUp("slow");
        $('#hiddenFieldTriplets').slideUp("slow");
        $('#hiddenFieldQuadruplets').slideUp("slow");
    }
}
function twinOrTripletOrQuadrupletCheck(){
    var hiddenFieldTwins = document.getElementById('hiddenFieldTwins');
    var hiddenFieldTriplets = document.getElementById('hiddenFieldTriplets');
    var hiddenFieldQuadruplets = document.getElementById('hiddenFieldQuadruplets');
    if (document.getElementById('twinOrTripletOrQuadrupletTwin').checked) {
        $(hiddenFieldTwins).slideDown("slow");
        $(hiddenFieldTwins).addClass('glowingHiddenFields')
        $(hiddenFieldTriplets).slideUp("slow");
        $(hiddenFieldTriplets).removeClass("glowingHiddenFields");
        $(hiddenFieldQuadruplets).slideUp("slow");
        $(hiddenFieldQuadruplets).removeClass('glowingHiddenFields')
        
    }
    else if (document.getElementById('twinOrTripletOrQuadrupletTriplet').checked) {
        $(hiddenFieldTwins).slideUp("slow");
        $(hiddenFieldTwins).removeClass('glowingHiddenFields')
        $(hiddenFieldTriplets).slideDown("slow");
        $(hiddenFieldTriplets).addClass("glowingHiddenFields");
        $(hiddenFieldQuadruplets).slideUp("slow");
        $(hiddenFieldQuadruplets).removeClass('glowingHiddenFields')
    }
    else if (document.getElementById('twinOrTripletOrQuadrupletQuadruplet').checked) {
        $(hiddenFieldTwins).slideUp("slow");
        $(hiddenFieldTwins).removeClass('glowingHiddenFields')
        $(hiddenFieldTriplets).slideUp("slow");
        $(hiddenFieldTriplets).removeClass("glowingHiddenFields");
        $(hiddenFieldQuadruplets).slideDown("slow");
        $(hiddenFieldQuadruplets).addClass('glowingHiddenFields')
    }
}
function showNotAVonBabyFields(){
    
    $(".gestationalAgeInWeeksDiv").slideDown("slow");
    $(".gestionalDaysDiv").slideDown("slow");
    $(".babyLengthDiv").slideDown('slow');
    $(".headCircumferenceDiv").slideDown("slow");
    $(".raceOfMotherDiv").slideUp("slow");
    $(".prenatalCareDiv").slideUp("slow");
    $(".antenatalSteroidsDiv").slideUp("slow");
    $(".antenatalMagnesiumSulfateDiv").slideUp("slow");
    $(".chorioamnionitisDiv").slideUp("slow");
    $(".maternalHypertensionDiv").slideUp("slow");
    $(".maternalDiabetesDiv").slideUp("slow");
    $(".modeOfDeliveryVONDiv").slideUp("slow");
    $(".modeOfDeliveryAdditionalDiv").slideDown("slow");
    $(".sexOfInfantDiv").slideDown("slow");
    $(".multipleGestationDiv").slideDown("slow");
    $(".numberOfInfantsDeliveredDiv").slideDown("slow");
    $(".apgarScoresOneMinDiv").slideDown("slow");
    $(".apgarScoresFiveMinDiv").slideDown("slow");
    $(".temperatureMeasuredWithinFirstHourDiv").slideUp("slow");
    $(".congenitalInfectionDiv").slideUp("slow");
    $(".surfactantAtAnyTimeDiv").slideUp("slow");
    $(".InitialResuscitationDiv").slideUp("slow");
    $(".bacterialSepsisBeforeDiv").slideUp("slow");
    $(".day28DateDiv").slideUp("slow");
    $(".oxygenDay28Div").slideUp("slow");
    $(".PIHDiv").slideUp("slow");
    $(".diedWithin12HoursDiv").slideUp("slow");
    $(".RespiratorySupportAfterInitialResuscitationDiv").slideUp("slow");
    $(".RespiratorySupportAt36WeeksDiv").slideUp("slow");
    $(".SteroidsDiv").slideUp("slow");
    $(".IbuprofenDiv").slideUp("slow");
    $(".acetaminophenDiv").slideUp("slow");
    $(".probioticsDiv").slideUp("slow");
    $(".ropTreatmentWithVegfDrugDiv").slideUp("slow");
    $(".caffeineDiv").slideUp("slow");
    $(".ropSurgeryDiv").slideUp("slow");
    $(".pdaSurgeryDiv").slideUp("slow");
    $(".necSurgeryDiv").slideUp("slow");
    $(".otherSurgeryDiv").slideUp("slow");
    $(".respiratoryDistressSyndromeDiv").slideUp("slow");
    $(".pneumothoraxDiv").slideUp("slow");
    $(".patentDuctusArteriosusDiv").slideUp("slow");
    $(".necrotizingEnterocolitisDiv").slideUp("slow");
    $(".focalIntestinalPerforationDiv").slideUp("slow");
    $(".afterDay3OfLifeDiv").slideUp("slow");
    $(".cysticPeriventricularDiv").slideUp("slow");
    $(".ROPRetinalDiv").slideUp("slow");
    $(".birthDefectDiv").slideUp("slow");
    $(".enteralFeedingDiv").slideUp("slow");
    $(".oxygenRespiratoryMonitorDiv").slideUp("slow");
    $(".initialDispositionDiv").slideUp("slow");
    $(".dateOfInitialDispositionDiv").slideUp("slow");
    $(".weightAtInitialDispositionDiv").slideUp("slow");
    $(".headCircumferenceInitialDispositionDiv").slideUp("slow");
    $(".initialLengthOfStayDiv").slideUp("slow");
    /*$("#download").slideUp('slow');
    $("#listItem2").slideUp('slow');*/
}
function hideNotAVonBabyFields(){
    
    $(".gestationalAgeInWeeksDiv").slideDown("slow");
    $(".gestionalDaysDiv").slideDown("slow");
    $(".babyLengthDiv").slideDown('slow');
    $(".headCircumferenceDiv").slideDown("slow");
    $(".raceOfMotherDiv").slideDown("slow");
    $(".prenatalCareDiv").slideDown("slow");
    $(".antenatalSteroidsDiv").slideDown("slow");
    $(".antenatalMagnesiumSulfateDiv").slideDown("slow");
    $(".chorioamnionitisDiv").slideDown("slow");
    $(".maternalHypertensionDiv").slideDown("slow");
    $(".maternalDiabetesDiv").slideDown("slow");
    $(".modeOfDeliveryVONDiv").slideDown("slow");
    $(".modeOfDeliveryAdditionalDiv").slideUp("slow");
    $(".sexOfInfantDiv").slideDown("slow");
    $(".multipleGestationDiv").slideDown("slow");
    $(".numberOfInfantsDeliveredDiv").slideDown("slow");
    $(".apgarScoresOneMinDiv").slideDown("slow");
    $(".apgarScoresFiveMinDiv").slideDown("slow");
    $(".temperatureMeasuredWithinFirstHourDiv").slideDown("slow");
    $(".congenitalInfectionDiv").slideDown("slow");
    $(".surfactantAtAnyTimeDiv").slideDown("slow");
    $(".InitialResuscitationDiv").slideDown("slow");
    $(".bacterialSepsisBeforeDiv").slideDown("slow");
    $(".day28DateDiv").slideDown("slow");
    $(".oxygenDay28Div").slideDown("slow");
    $(".PIHDiv").slideDown("slow");
    $(".diedWithin12HoursDiv").slideDown("slow");
    $(".RespiratorySupportAfterInitialResuscitationDiv").slideDown("slow");
    $(".RespiratorySupportAt36WeeksDiv").slideDown("slow");
    $(".SteroidsDiv").slideDown("slow");
    $(".IbuprofenDiv").slideDown("slow");
    $(".acetaminophenDiv").slideDown("slow");
    $(".probioticsDiv").slideDown("slow");
    $(".ropTreatmentWithVegfDrugDiv").slideDown("slow");
    $(".caffeineDiv").slideDown("slow");
    $(".ropSurgeryDiv").slideDown("slow");
    $(".pdaSurgeryDiv").slideDown("slow");
    $(".necSurgeryDiv").slideDown("slow");
    $(".otherSurgeryDiv").slideDown("slow");
    $(".respiratoryDistressSyndromeDiv").slideDown("slow");
    $(".pneumothoraxDiv").slideDown("slow");
    $(".patentDuctusArteriosusDiv").slideDown("slow");
    $(".necrotizingEnterocolitisDiv").slideDown("slow");
    $(".focalIntestinalPerforationDiv").slideDown("slow");
    $(".afterDay3OfLifeDiv").slideDown("slow");
    $(".cysticPeriventricularDiv").slideDown("slow");
    $(".ROPRetinalDiv").slideDown("slow");
    $(".birthDefectDiv").slideDown("slow");
    $(".enteralFeedingDiv").slideDown("slow");
    $(".oxygenRespiratoryMonitorDiv").slideDown("slow");
    $(".initialDispositionDiv").slideDown("slow");
    $(".dateOfInitialDispositionDiv").slideDown("slow");
    $(".weightAtInitialDispositionDiv").slideDown("slow");
    $(".headCircumferenceInitialDispositionDiv").slideDown("slow");
    $(".initialLengthOfStayDiv").slideDown("slow");
    /*$("#download").slideDown('slow');
    $("#listItem2").slideDown('slow');*/
}
/* START DATES*/
/* START Date of Birth*/
$(function () {
    var datepickersOpt = {
        dateFormat: 'dd-mm-yy',
        numberOfMonths: 2
    }

    $("#dateOfBirth").datepicker($.extend({
        maxDate: '0',
        minDate: '-18M',
        onSelect:function () {
            validateFreeText('dateOfBirth'); //checking if the user has inputted a value
            lengthOfStayCheck();
            adding28Days(); //making 28 day date
            makingSixWeekDate(); //making 6 week date and checks if the baby is <42 days
            making40dayDate();//if baby is > or < 40 , show or hide that div
            checkingOlder28Days();
            countingDaysInWeeksForRespiratory();
            //adding key listener functions for progress bar checks
            InputsPatientForm();
            ColourPatientForm();
            
            var minDate = $(this).datepicker('getDate');
            minDate.setDate(minDate.getDate());
            $("#dateOfInitialDisposition").datepicker("option", "minDate", minDate);
            $("#dateOfAdmission").datepicker("option", "minDate", minDate);
            
            var arg = 40;
            var minDateOf40 = $('#dateOfBirth').datepicker('getDate');
            minDateOf40.setDate(minDateOf40.getDate() + arg);
            $("#immunizations652Date").datepicker("option", "minDate", minDateOf40);
        }
    }, datepickersOpt));
    $('#dateOfBirthCalendar').on("click", function (e) {
        $('#dateOfBirth').focus();
    });

    $("#dateOfAdmission").datepicker($.extend({
        maxDate: '0',
        minDate: '-18M',
        onSelect: function () {
            validateFreeText('dateOfAdmission');
            lengthOfStayCheck();
            //adding key listener functions for progress bar checks
            InputsPatientForm();
            ColourPatientForm();
            var minDate = $(this).datepicker('getDate');
            minDate.setDate(minDate.getDate()); //add two days
            $("#dateOfInitialDisposition").datepicker("option", "minDate", minDate);
        }
    }, datepickersOpt));
    $('#dateOfAdmissionCalendar').on("click", function (e) {
        $('#dateOfAdmission').focus();
    });
    
    $("#dateOfInitialDisposition").datepicker($.extend({
        maxDate: '0',
        minDate: '-18M',
        onSelect: function () {
            validateFreeText('dateOfInitialDisposition');
            lengthOfStayCheck(); //display length of stay
            checkingOlder28Days();
            //adding key listener functions for progress bar checks
            InputsPatientForm();
            ColourPatientForm();
            
            var minDate = $(this).datepicker('getDate');
            minDate.setDate(minDate.getDate()); //add two days
            $("#dateDischargedHomeDiedOrBirthday").datepicker("option", "minDate", minDate);
        }
    }, datepickersOpt));
    $('#dateOfInitialDispositionCalendar').on("click", function (e) {
        $('#dateOfInitialDisposition').focus();
    });
    
    $("#dateDischargedHomeDiedOrBirthday").datepicker($.extend({
        maxDate: '0',
        minDate: '-18M',
        onSelect: function () {
            validateFreeText('dateDischargedHomeDiedOrBirthday');
            totalLengthOfStayCheck();
            totalLengthOfStayCheckGreaterThan28();
            totalLengthOfStayCheckGreaterThan36weeks(); //setting the 36 weeks
            
            InputsGeneralForm();
            ColourGeneralForm();
        }
    }, datepickersOpt));
    $('#dateDischargedHomeDiedOrBirthdayCalendar').on("click", function (e) {
        $('#dateDischargedHomeDiedOrBirthday').focus();
    });
    
    $("#immunizations652Date").datepicker($.extend({
        maxDate: '0',
        onSelect: function () {
            calculate4WeeksAfterGivenImmunizationDate(); //setting the 28 day oxygen
            
            //adding key listener functions for progress bar checks
            InputsPatientForm();
            ColourPatientForm();
        }
    }, datepickersOpt));
    $('#immunizations652DateCalendar').on("click", function (e) {
        $('#immunizations652DateCalendar').focus();
    });
    
    $("#immunizations1452Date").datepicker($.extend({
        maxDate: '0',
        onSelect: function () {
            //calculate4WeeksAfterGivenImmunizationDate(); //setting the 28 day oxygen
            
            //adding key listener functions for progress bar checks
            InputsPatientForm();
            ColourPatientForm();
        }
    }, datepickersOpt));
    $('#immunizations1452DateCalendar').on("click", function (e) {
        $('#immunizations1452DateCalendar').focus();
    });
    $("#appointmentDate").datepicker($.extend({
        maxDate: '+12M',
        minDate:'+1D',
        onSelect: function () {
            validateFreeText('appointmentDate');
            //adding key listener functions for progress bar checks
            InputsAdditionalForm();
            ColourAdditionalForm();
        }
    }, datepickersOpt));
    $('#appointmentDateCalendar').on("click", function (e) {
        $('#appointmentDate').focus();
    });
    
    $("#ROPDate").datepicker($.extend({
        maxDate: '+12M',
        minDate:'+1D',
        onSelect: function () {
            validateFreeText('ROPDate');
            //adding key listener functions for progress bar checks
            InputsAdditionalForm();
            ColourAdditionalForm();
        }
    }, datepickersOpt));
    $('#ROPDateCalendar').on("click", function (e) {
        $('#ROPDate').focus();
    });
    
    $("#PCRDate").datepicker($.extend({
        maxDate: '+12M',
        minDate:'+1D',
        onSelect: function () {
            validateFreeText('PCRDate');
            //adding key listener functions for progress bar checks
            InputsAdditionalForm();
            ColourAdditionalForm();
        }
    }, datepickersOpt));
    $('#PCRDateCalendar').on("click", function (e) {
        $('#PCRDate').focus();
    });
    
});
/* END Date of Birth*/
/* START Date of Immunization Date*/
$( function() {
    
    $( "#immunizationDate" ).datepicker({
        numberOfMonths: 2,
        dateFormat: 'dd-mm-yy',
        maxDate: '+12M',
        minDate: '-2M'
        
    });   
        $('#immunizationDateCalendar').on("click", function(e){
            $('#immunizationDate').focus();
        });
  } );
/* END Date of Immunization Date*/
/* START Date initial length of stay*/
$( function() {
    
    $( "#initialLengthOfStay" ).datepicker({
        numberOfMonths: 2,
        dateFormat: 'dd-mm-yy',
        maxDate: '+18M',
        minDate: '0'/*,
        disabled:true*/
        
    });   
  } );
/* END Date initial length of stay*/

function calculate4WeeksAfterGivenImmunizationDate(){
    var arg = 28; //4 weeks
    var d = $('#immunizations652Date').datepicker('getDate'); //get the date that they manually inputted
    var temporaryDate = new Date(d.setDate(d.getDate() + arg));//add 4 weeks onto the date
    var currentDate = new Date();
    var days   = (currentDate - temporaryDate)/1000/60/60/24; // number days old
    if(days>0){
        //do another check inside here to see ask the user if they have done 14/52 immunization.
        //If No, then it is due
        //If yes, then take that date and get the new date.
        $('#hiddenFieldImmunizations1452').slideDown('slow');
        $('#hiddenFieldImmunizations1452').addClass('glowingHiddenFields');
       $('#immunizationDate').val("Pending");
       }
    else{
        $('#immunizationDate').datepicker('setDate', d); //set the next immunization date to the new date.
        $('#hiddenFieldImmunizations1452').slideUp('slow');
        $('#hiddenFieldImmunizations1452').removeClass('glowingHiddenFields');
    }
    
}
function calculate4WeeksAfterGivenImmunizationDateCheckedNo(){
    var arg = 42; //4 weeks
    var d = $('#dateOfBirth').datepicker('getDate'); //get the date that they manually inputted
    var temporaryDate = new Date(d.setDate(d.getDate() + arg));//add 4 weeks onto the date
    var currentDate = new Date();
    var days   = (currentDate - temporaryDate)/1000/60/60/24; // number days old
    if(days>0){
       $('#immunizationDate').val("Due");
       }
    else{
        $('#immunizationDate').datepicker('setDate', d); //set the next immunization date to the new date.
    }
    
}
function adding28Days(){
    var arg = 28;
    var d = $('#dateOfBirth').datepicker('getDate');
    d.setDate(d.getDate() + arg);
    $('#day28Date').datepicker('setDate', d);
//    toastr.success("28 Day Date Set")
};
function countingDaysInWeeksForRespiratory(){
    var dob   = $('#dateOfBirth').datepicker('getDate');
    var initial   = $('#dateOfInitialDisposition').datepicker('getDate');
    var currentDate = new Date();
    var days = (initial-dob)/1000/60/60/24;
    var gestationalWeeks = ($('#gestationalAgeInWeeks').val()*7);
    var gestationalDays = ($('#gestionalDays').val()*1);
    var totalDays = (days+gestationalWeeks+gestationalDays)*1;
    /*alert("dobDays: "+days)
    alert("weeks: "+gestationalWeeks)
    alert("days: "+gestationalDays)
    alert("total: "+totalDays)*/
    
    if(totalDays > 252) {//36 weeks * 7 days
        $('.RespiratorySupportAt36WeeksDiv').slideDown('slow'); //show
//        toastr.success("Showing 'RESPIRATORY SUPPORT AT 36 WEEKS'");
    }
    else{
        $('.RespiratorySupportAt36WeeksDiv').slideUp('slow');
//        toastr.success("Hiding 'RESPIRATORY SUPPORT AT 36 WEEKS'");
    }
}
function makingSixWeekDate(){
    var arg = 42;
    var d = $('#dateOfBirth').datepicker('getDate');
    d.setDate(d.getDate() + arg);
    $('#sixWeeksOldDate').datepicker('setDate', d);
    /* Calculations to check if baby is less than 6 weeks old from current date*/
    var currentDate = new Date(); // current date
    var dob   = $('#dateOfBirth').datepicker('getDate'); //dob 
    var days   = (currentDate - dob)/1000/60/60/24; // number days old
    if(days<40){
//        toastr.success("Current baby is younger than 42 days - Immunization date already set")
        $('#immunizationDate').datepicker('setDate', d);
       }
    else{
//        toastr.success("Current baby is older than 42 days - Immunization date will need to be set")
    }
}
function making40dayDate(){
    /* Calculations to check if baby is less than 40 weeks old from current date*/
    var initial   = $('#dateOfInitialDisposition').datepicker('getDate');//initial
    var dob   = $('#dateOfBirth').datepicker('getDate'); //dob 
    var days   = (initial - dob)/1000/60/60/24; // number days old
    if(days>40){
        //show 6/52 date
        $('#hiddenFieldImmunizations652').slideDown('slow');
//        toastr.success("Baby is older than 40 days - Immunization Date is shown")
       }
    else{
        //hide6/52 date
        $('#hiddenFieldImmunizations652').slideUp('slow');
//        toastr.success("Baby is younger than 40 days - Immunization Date is hidden")
    }
}
function lengthOfStayCheck(){
    //getting actual dates from the dates
    var dob   = $('#dateOfBirth').datepicker('getDate');
    var admission   = $('#dateOfAdmission').datepicker('getDate');
    var initialDisposition   = $('#dateOfInitialDisposition').datepicker('getDate');
    //getting values of the dates
    var dobValue   = $('#dateOfBirth').val();
    var admissionValue   = $('#dateOfAdmission').val();
    var initialDispositionValue   = $('#dateOfInitialDisposition').val();
    //calculating the number of days
    var daysDOB   = (initialDisposition - dob)/1000/60/60/24;
    var daysAdmission   = (initialDisposition - admission)/1000/60/60/24;
    //if DOB and inborn, take DOB
    //if inborn AND dob > and intial > and admission = 0 
    if($('#locationOFBirthInborn').is(':checked') && (dobValue.length)>0 && (initialDispositionValue.length)>0){
        $('#initialLengthOfStay').val(daysDOB);
        //If the initial disposition date is less than 2 days then make the day 3 of line panel N/A
        if(daysDOB<=2){
            $('#bacterialSepsisNA').attr("checked",true);
            $('#coagulaseNegativeNA').attr("checked",true);
            $('#fungalInfectionNA').attr("checked",true);
           }
        else{
            $('#bacterialSepsisNA').attr("checked",false);
            $('#coagulaseNegativeNA').attr("checked",false);
            $('#fungalInfectionNA').attr("checked",false);
        }
       }
    //if outborn AND dob > and admission >0 and intial
    else if($('#locationOFBirthOutborn').is(':checked')&& (dobValue.length)>0 && (initialDispositionValue.length)>0 && (admissionValue.length)>0){
            $('#initialLengthOfStay').val(daysAdmission);
            //If the initial disposition date is less than 2 days then make the day 3 of line panel N/A
            if(daysAdmission<=2){
                $('#bacterialSepsisNA').attr("checked",true);
                $('#coagulaseNegativeNA').attr("checked",true);
                $('#fungalInfectionNA').attr("checked",true);
               }
            else{
                $('#bacterialSepsisNA').attr("checked",false);
                $('#coagulaseNegativeNA').attr("checked",false);
                $('#fungalInfectionNA').attr("checked",false);
            }
            }
}
function checkingOlder28Days(){
    var dob   = $('#dateOfBirth').datepicker('getDate');
    var initial   = $('#dateOfInitialDisposition').datepicker('getDate');
    var dobValue   = $('#dateOfBirth').val();
    var days   = (initial - dob)/1000/60/60/24;
    if(dobValue.length>0 ){
        if(days>=0 && days<=27){
            $('.day28DateDiv').slideUp('slow')
        }
        else{
            $('.day28DateDiv').slideDown('slow')
        }
       }
}
function totalLengthOfStayCheckGreaterThan28(){
    //if days is less than 28
    if($('#totalLengthOfStay').val()<28){
        //checking 28 day NA buttons
        $('#oxygenDay28NA').attr("checked",true);
        $('#oxygenDay28NA').change();
       }
    else{
        //Setting 28 day oxygen buttons to unchecked
        $('#oxygenDay28NA').attr("checked",false);
        $('#oxygenDay28NA').change();
    }
}
function totalLengthOfStayCheckGreaterThan36weeks(){
    //if days is less than 36 weeks
    if($('#totalLengthOfStay').val()<(36*7)){
        //checking 36 week NA buttons
        $('#oxygenAt36WeeksNA').attr("checked",true);
        $('#conventionalAt36WeeksNA').attr("checked",true);
        $('#highFrequencyVentilationAt36WeeksNA').attr("checked",true);
        $('#highFlowNasalCannulaAt36WeeksNA').attr("checked",true);
        $('#nasalIMVAt36WeeksNA').attr("checked",true);
        $('#nasalCpapAt36WeeksNA').attr("checked",true);
        $('#oxygenAt36WeeksNA').change();
        $('#conventionalAt36WeeksNA').change();
        $('#highFrequencyVentilationAt36WeeksNA').change();
        $('#highFlowNasalCannulaAt36WeeksNA').change();
        $('#nasalIMVAt36WeeksNA').change();
        $('#nasalCpapAt36WeeksNA').change();
        
       }
    else{
        //Setting week 36 buttons to unchecked
        $('#oxygenAt36WeeksNA').attr("checked",false);
        $('#conventionalAt36WeeksNA').attr("checked",false);
        $('#highFrequencyVentilationAt36WeeksNA').attr("checked",false);
        $('#highFlowNasalCannulaAt36WeeksNA').attr("checked",false);
        $('#nasalIMVAt36WeeksNA').attr("checked",false);
        $('#nasalCpapAt36WeeksNA').attr("checked",false);
        $('#oxygenAt36WeeksNA').change();
        $('#conventionalAt36WeeksNA').change();
        $('#highFrequencyVentilationAt36WeeksNA').change();
        $('#highFlowNasalCannulaAt36WeeksNA').change();
        $('#nasalIMVAt36WeeksNA').change();
        $('#nasalCpapAt36WeeksNA').change();
    }
}
function totalLengthOfStayCheck(){
    var dob   = $('#dateOfBirth').datepicker('getDate');
    var admission   = $('#dateOfAdmission').datepicker('getDate');
    var initialDisposition   = $('#dateOfInitialDisposition').datepicker('getDate');
    //get the number from the first form
    var valueOfInitialLengthOfStay = $('#initialLengthOfStay').val();
    //take the date discharged home and minus it from the initial disposition date
    var dateDischargedHomeDiedOrBirthday   = $('#dateDischargedHomeDiedOrBirthday').datepicker('getDate');
    var totalDays = (dateDischargedHomeDiedOrBirthday - initialDisposition)/1000/60/60/24;
    //add these 2 numbers together
    var addingTotalDays = parseInt(valueOfInitialLengthOfStay)+parseInt(totalDays);
    /*alert("First number: "+valueOfInitialLengthOfStay)
    alert("second number: "+totalDays)
    alert("final number: "+addingTotalDays)*/
    var dobValue   = $('#dateOfBirth').val();
    var admissionValue   = $('#dateOfAdmission').val();
    var initialDispositionValue   = $('#dateOfInitialDisposition').val();
    var days   = (initialDisposition - dob)/1000/60/60/24;
    
    if((initialDispositionValue.length>0 && admissionValue.length>0)||(initialDispositionValue.length>0 && dobValue.length>0 )){
        $('#totalLengthOfStay').val(addingTotalDays);
       }
}
/*28 day date*/
$( function() {
    
    $( "#day28Date" ).datepicker({
      showButtonPanel: true,
    dateFormat: 'dd-mm-yy'
        
    });
  } );
        
/*6 week date*/
$( function() {
    
    $( "#sixWeeksOldDate" ).datepicker({
      showButtonPanel: true,
        dateFormat: 'dd-mm-yy'
        
    });
  } );
/* END DATES*/
/*START - Function to display automated SELECT drop downs */
$(function(){
    var idValue = $("#gestationalAgeInWeeks");
    for (i=22;i<=46;i++){
        idValue.append($('<option></option>').val(i).html(i+" weeks"))
    }
});
$(function(){
    var idValue = $("#temperatureAdmission");
    for (i=40;i.toFixed(1)>=25;i-=0.2){
        idValue.append($('<option></option>').val(i.toFixed(1)).html(i.toFixed(1)+ ' &#8451'))
    }
});
$(function(){
    var idValue = $("#headCircumference");
    for (i=20;i.toFixed(1)<=45;i+=0.2){
        idValue.append($('<option></option>').val(i.toFixed(1)).html(i.toFixed(1)+" cm"))
    }
});
$(function(){
    var idValue = $("#headCircumferenceInitialDisposition");
    for (i=20;i.toFixed(1)<=45;i+=0.2){
        idValue.append($('<option></option>').val(i.toFixed(1)).html(i.toFixed(1)+" cm"))
    }
});
$(function(){
    var idValue = $("#mothersAge");
    for (i=8;i<=55;i++){
        idValue.append($('<option></option>').val(i).html(i+" Years Old"))
    }
});
$(function(){
    var idValue = $("#ageAtFirstSurfactantHours");
    for (i=0;i<=60;i++){
        idValue.append($('<option></option>').val(i).html(i+" Hours"))
    }
});
$(function(){
    var idValue = $("#dayOfLifeVentilationStarted");
    for (i=1;i<=60;i++){
        idValue.append($('<option></option>').val(i).html(i+" Days"))
    }
});
$(function(){
    var idValue = $("#dayOfLifeVentilationStartedDuration");
    for (i=1;i<=20;i++){
        idValue.append($('<option></option>').val(i).html(i+" Days"))
    }
});
$(function(){
    var idValue = $("#babyLength");
    for (i=20;i<=60;i++){
        idValue.append($('<option></option>').val(i).html(i+" cm"))
    }
});
$(function(){
    var idValue = $("#appointmentTime1");
    for (i=7;i<=15;i++){
        idValue.append($('<option></option>').val(i).html(i+":00"))
    }
});
$(function(){
    var idValue = $("#appointmentTime2");
    for (i=7;i<=15;i++){
        idValue.append($('<option></option>').val(i).html(i+":00"))
    }
});
$(function(){
    var idValue = $("#appointmentTime3");
    for (i=7;i<=15;i++){
        idValue.append($('<option></option>').val(i).html(i+":00"))
    }
});
$(function(){
    var idValue = $("#appointmentTime4");
    for (i=7;i<=15;i++){
        idValue.append($('<option></option>').val(i).html(i+":00"))
    }
});
$(function(){
    var idValue = $("#appointmentTime5");
    for (i=7;i<=15;i++){
        idValue.append($('<option></option>').val(i).html(i+":00"))
    }
});
/*END - Function to display automated SELECT drop downs */
/*START - Function to display Diaglog Box to confirm clear form */
function clearFormDialog() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Clear Form": function() {
          $( this ).dialog( "close" );
            /*toastr.success("Form cleared Successfully!")*/
            location.reload();
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } ;
/*END - Function to display Diaglog Box to confirm clear form */
/*START - Function to check if each label is too big or not */
$('label.fixingLabelAlignment').each(function(){
    if($(this).text().length > 50){
        $(this).css('font-size', '1.1em');
        /*$(this).siblings('.fixingInputAlignment').css({"height": '64px'});*/
        
    }
});
/*END - Function to check if each label is too big or not */