

function inbornOutbornCheck() {
    if (document.getElementById('inbornCheck').checked) {
        $("#hiddenField1").slideUp("slow");
        $("#hiddenField2").slideUp("slow");
        $('.GroupingHiddenField1').removeClass('glowingHiddenFields')
    }
    if (document.getElementById('outbornCheck').checked) {
        $("#hiddenField1").slideDown("slow");
        $("#hiddenField2").slideDown("slow");
        $('.GroupingHiddenField1').addClass('glowingHiddenFields')
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
    if (document.getElementById('focalIntestinalPerforationUnknown').checked) {
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

/*Adding new surgery fields*/
function addNewSurgeryField(){
    /*$(document.getElementById('#hiddenFieldSurgery2')).slideUp("slow");*/
    $("#hiddenFieldSurgery2").slideDown("slow");
}


function numberOfInfantsDeliveredCheck() {
    if (document.getElementById('multipleGestationNo').checked) {
        document.getElementById('hiddenField3').style.display = 'none';
    }
    if (document.getElementById('multipleGestationYes').checked) {
        document.getElementById('hiddenField3').style.display = 'inline';
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
    }
    if (document.getElementById('temperatureMeasuredWithinFirstHourNA').checked) {
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
    if (strUser==0 || strUser==2 || strUser==4){
        $(partB).slideUp("slow");
        $(partC).slideUp("slow");
        $(partD).slideDown("slow");
        $(partB).removeClass('glowingHiddenFields');
        $(partC).removeClass('glowingHiddenFields');
        $(partD).addClass('glowingHiddenFields');
    }
    /*if case for transferred - Show parts C and D*/
    if (strUser==1){
        $(partB).slideUp("slow");
        $(partC).slideDown("slow");
        $(partD).slideDown("slow");
        $(partB).removeClass('glowingHiddenFields');
        $(partC).addClass('glowingHiddenFields');
        $(partD).addClass('glowingHiddenFields');
    }
    /*if case for readmitted to hospital - show (B and D)  C if applicable*/
    if (strUser==3){
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
function PIHOccurCheck() {
    
}
function showTransferHideDischarge() { 
    document.getElementById('transfer').style.display = 'block'; 
}

/*window.onscroll = function() {myFunction()};

function myFunction() {
  var mydivpos = document.getElementById("passingPoint").offsetTop;
  var scrollPos = document.getElementsByTagName("body")[0].scrollTop;
  
  if(scrollPos >= mydivpos-50)
    document.getElementById("sidebar-container").className = "";
  else
    document.getElementById("sidebar-container").className = "hide-sidebar";
};*/

$(document).ready(function() {
    /*Using the hide function wasn't optimal as it shows up when you load the page. Used display:none instead in CSS*/
    /*$("#sidebar-container").hide(); //hide your div initially*/
    var topOfOthDiv = $("#PatientFormID").offset().top;
    var topOfOthDiv1 = $("#28DayFormID").offset().top;
    //disharge and transfer is going to be at the same position
    var topOfOthDiv2 = $("#DischargeTransferForm").offset().top;
    var topOfOthDiv3 = $("#TransferFormID").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() < topOfOthDiv-100) { //if still on the main page, dont show
            $("#sidebar-container").fadeOut(500);
        }
        if($(window).scrollTop() > topOfOthDiv-100) { //scrolled past the patient form
            if($('.28dayProgressBar').hasClass('glowingButton')){
                $('.28dayProgressBar').removeClass('glowingButton')
               }
            if($('.dischargeAndTransferProgressBar').hasClass('glowingButton')){
                $('.dischargeAndTransferProgressBar').removeClass('glowingButton')
               }
            $("#sidebar-container").fadeIn(500);
            $('.patientFormProgressBar').addClass('glowingButton')
            
            /* Toggling Buttons */
            $('#patientFormCircle').addClass('glowingButton')
            $('#28DayFormCircle').removeClass('glowingButton')
            $('#dischargeCircle').removeClass('glowingButton')
            
            /* Toggling different Color */
            $('#patientFormCircle').css('background-color', 'green');
        }
        if($(window).scrollTop() > topOfOthDiv1-100) { //scrolled past the 28 day form 
            if($('.patientFormProgressBar').hasClass('glowingButton')){
                $('.patientFormProgressBar').removeClass('glowingButton')
               }
            if($('.dischargeAndTransferProgressBar').hasClass('glowingButton')){
                $('.dischargeAndTransferProgressBar').removeClass('glowingButton')
               }
            /*$('.patientFormProgressBar').removeClass('glowingButton')*/
            $('.28dayProgressBar').addClass('glowingButton')
            /*$('.dischargeAndTransferProgressBar').removeClass('glowingButton')*/
            /* Toggling Buttons */
            $('#patientFormCircle').removeClass('glowingButton')
            $('#28DayFormCircle').addClass('glowingButton')
            $('#dischargeCircle').removeClass('glowingButton')
        }
        if($(window).scrollTop() > topOfOthDiv2-100) { //scrolled past the discharge/transfer form
            
            $('.patientFormProgressBar').removeClass('glowingButton')
            $('.28dayProgressBar').removeClass('glowingButton')
            $('.dischargeAndTransferProgressBar').addClass('glowingButton')
            /* Toggling Buttons */
            $('#patientFormCircle').removeClass('glowingButton')
            $('#28DayFormCircle').removeClass('glowingButton')
            $('#dischargeCircle').addClass('glowingButton')
        }
    });
});

/* START Opening and Closing Menu Bar   */

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
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
$("#mothersName").keyup(function() {
    patientsName.value = "Baby "+this.value;
    patientsNameInSideBar.value = "Baby "+this.value;
});