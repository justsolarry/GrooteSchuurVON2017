

function inbornOutbornCheck() {
    if (document.getElementById('locationOFBirthInborn').checked) {
        $("#GroupingHiddenField1").slideUp("slow");
        $('#GroupingHiddenField1').removeClass('glowingHiddenFields')
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
    }
    if (document.getElementById('congenitalInfectionUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
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
    }
    if (document.getElementById('RVDNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $(value2).slideUp("slow");
        $(value2).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('RVDUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $(value2).slideUp("slow");
        $(value2).removeClass('glowingHiddenFields')
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

function hearingScreenCheck() {
    var value1 = document.getElementById('hiddenFieldHearingScreenCheck');
    if (document.getElementById('hearingScreenYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('hearingScreenNo').checked) {
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
    }
    if (document.getElementById('oxygenAt36WeeksNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAt36WeeksNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('oxygenAt36WeeksUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
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
    if (document.getElementById('bacterialSepsisBeforeYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('bacterialSepsisBeforeNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('bacterialSepsisBeforeNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('bacterialSepsisBeforeUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
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
    }
    if (document.getElementById('cranialImagingNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('cranialImagingUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
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
    var value1 = document.getElementById('hiddenFieldImmunizations652');
    if (document.getElementById('immunizations652Yes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('immunizations652No').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('immunizations652Unknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
}

/*Adding new surgery fields*/
function addNewSurgeryField(){
    /*$(document.getElementById('#hiddenFieldSurgery2')).slideUp("slow");*/
    $("#hiddenFieldSurgery2").slideDown("slow");
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
    }
    if (document.getElementById('temperatureMeasuredWithinFirstHourNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields');
    }
    if (document.getElementById('temperatureMeasuredWithinFirstHourUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields');
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
    }
    /*if case for transferred - Show parts C and D*/
    if (strUser==2){
        $(partB).slideUp("slow");
        $(partC).slideDown("slow");
        $(partD).slideDown("slow");
        $(partB).removeClass('glowingHiddenFields');
        $(partC).addClass('glowingHiddenFields');
        $(partD).addClass('glowingHiddenFields');
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
    }
    /*Unknown*/
    if (strUser==9 || strUser==7){
        $(partB).slideUp("slow");
        $(partC).slideUp("slow");
        $(partD).slideUp("slow");
        $(partB).removeClass('glowingHiddenFields');
        $(partC).removeClass('glowingHiddenFields');
        $(partD).removeClass('glowingHiddenFields');
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
        $(hiddenField).addClass('glowingHiddenFields');
    }
    else{
        $(hiddenField).slideUp("slow");
        $(hiddenField).removeClass('glowingHiddenFields');
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
    if (strUser==1 || strUser==2 ){
    
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
    }
    else{
        $(hiddenField).slideUp("slow");
        $(hiddenField).removeClass('glowingHiddenFields');
    }
}

function numberOfInfantsDeliveredCheck() {
    if (document.getElementById('multipleGestationYes').checked) {
        $("#numberOfInfantsDelivered").val('2').change();
        $('#numberOfInfantsDelivered option').prop("disabled", false);
        $('#numberOfInfantsDelivered option[value=00]').prop('disabled', true); //disables select
        $('#numberOfInfantsDelivered option[value=1]').prop('disabled', true); //disables 1
        $('#numberOfInfantsDelivered option[value=77]').prop('disabled', true); //disables 77
        $('#numberOfInfantsDelivered option[value=99]').prop('disabled', true); //disables 99
    }
    if (document.getElementById('multipleGestationNo').checked) {
        $("#numberOfInfantsDelivered").val('1').change();
        $('#numberOfInfantsDelivered option:not([value=1])').prop('disabled', true); //disable everything that isn't 1
    }
    if (document.getElementById('multipleGestationUnknown').checked) {
        $("#numberOfInfantsDelivered").val('99').change();
        $('#numberOfInfantsDelivered option:not([value=99])').prop('disabled', true);
    }
}


$(document).ready(function() {
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
    var patientFormLocation = $("#PatientFormID").offset().top;
    var generalDataItemsFormLocation = $("#generalDataItemsID").offset().top;
    var transferFormLocation = $("#TransferFormID").offset().top;
    
    $(window).scroll(function() {
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
            console.log("length of radio "+($('input[name=locationOFBirthInborn]:checked').length));
            /* Toggling different Color */
            /*Checking if the fields match green or red and change colours*/
            /*Does it have either of the classes? If not, then its blank*/
            if(
                (!$('#birthWeightInGrams').hasClass('addRed') && !$('#birthWeightInGrams').hasClass('addGreen')) &&
                (!$('#mothersFirstName').hasClass('addRed') && !$('#mothersFirstName').hasClass('addGreen')) &&
                (!$('#mothersLastName').hasClass('addRed') && !$('#mothersLastName').hasClass('addGreen')) &&
                (!$('#patientsName').hasClass('addRed') && !$('#patientsName').hasClass('addGreen')) &&
                (!$('#patientMedicalRecordNumber').hasClass('addRed') && !$('#patientMedicalRecordNumber').hasClass('addGreen'))
              ){
               $('#patientFormCircle').css('background-color', 'black');
               }
            else if($('#birthWeightInGrams').hasClass('addRed') ||
                   $('#mothersFirstName').hasClass('addRed') ||
                     $('#mothersLastName').hasClass('addRed') ||
                    $('#patientsName').hasClass('addRed') ||
                    $('#patientMedicalRecordNumber').hasClass('addRed')
                   ){
                $('#patientFormCircle').css('background-color', 'red');
            }
            else{
                $('#patientFormCircle').css('background-color', 'green');
            }
            
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

/* START centering a drop down select */
/*function getTextWidth(txt) {
  var $elm = $('<span class="tempforSize">'+txt+'</span>').prependTo("body");
  var elmWidth = $elm.width();
  $elm.remove();
  return elmWidth;
}
function centerSelect($elm) {
    var optionWidth = getTextWidth($elm.children(":selected").html())
    var emptySpace =   $elm.width()- optionWidth;
    $elm.css("text-indent", (emptySpace/2) - 10);// -10 for some browers to remove the right toggle control width
}
// on start 
$('.centerSelect').each(function(){
  centerSelect($(this));
});
// on change
$('.centerSelect').on('change', function(){
  centerSelect($(this));
});*/

/* END centering a drop down select */
/*Auto filling the babies name */
var patientsName = document.getElementById("patientsName");
var patientsNameInSideBar = document.getElementById("patientInfoPanelPatientNameDisplayID");
/*combining the names*/
/*var fullName = document.getElementById("mothersFirstName") + document.getElementById("mothersLastName");*/
$("#mothersFirstName").keyup(function() {
    
    patientsName.value = "Baby "+this.value;
    patientsNameInSideBar.value = "Baby "+this.value;
});
/*var patientsName = document.getElementById("patientsName");
$("#mothersLastName").keyup(function() {
    document.getElementById("patientsName").value = copyOverPatientsName +this.value;
});*/

var patientMedicalNumber = document.getElementById("patientMedicalRecordNumber");
var patientMedicalNumberSideBar = document.getElementById("patientInfoPanelPatientMedicalDisplayID");
/*combining the names*/
/*var fullName = document.getElementById("mothersFirstName") + document.getElementById("mothersLastName");*/
$("#patientMedicalRecordNumber").keyup(function() {
    
    patientMedicalNumber.value = this.value;
    patientMedicalNumberSideBar.value = this.value;
});



/* START DATES*/
/*Date of Birth*/
$( function() {
    
    $( "#dateOfBirth" ).datepicker({
        showButtonPanel: true,
        numberOfMonths: 2,
        dateFormat: 'dd-mm-yy',
        maxDate: '0',
        minDate: '-18M'
        
    });   
  } );
/*Date of Admission*/
$( function() {
    
    $( "#dateOfAdmission" ).datepicker({
      showButtonPanel: true,
    dateFormat: 'dd-mm-yy',
        maxDate: '0',
        minDate: '-18M'
        
    });   
  } );
/*Date of Initial Disposition*/
$( function() {
    
    $( "#dateOfInitialDisposition" ).datepicker({
      showButtonPanel: true,
    dateFormat: 'dd-mm-yy',
        maxDate: '0',
        minDate: '-18M'
        
    });   
  } );
function adding28Days(){
    var arg = 28;
    var d = $('#dateOfBirth').datepicker('getDate');
    d.setDate(d.getDate() + arg);
    $('#day28Date').datepicker('setDate', d);
    
    
    
}

function dateOfBirthCheck(){
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    alert("got into the second check");
    alert(dateOfBirth.length)
    if(dateOfBirth.length==0){
        alert("adding red")
        $('#dateOfBirth').datepicker( "setDate" , null );
        $('#dateOfBirth').removeClass('addGreen')
        $('#dateOfBirth').addClass('addRed')
        toastr.error('Date of Birth - Must be completed');
       }
    if(dateOfBirth.length>0){
        $('#dateOfBirth').addClass('addGreen')
        $('#dateOfBirth').removeClass('addRed')
        alert("adding green")
    }
}
        
/*28 day date*/
$( function() {
    
    $( "#day28Date" ).datepicker({
      showButtonPanel: true,
    dateFormat: 'dd-mm-yy'
        
    });
  } );
/*Date discharged home, died or first birthday date*/
$( function() {
    
    $( "#dateDischargedHomeDiedOrBirthday" ).datepicker({
      showButtonPanel: true,
    dateFormat: 'dd-mm-yy'
        
    });
  } );
/* END DATES*/