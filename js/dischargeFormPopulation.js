
function printForm(id){    
//    if (document.getElementById('formComplete').value)
//        {
            window.location = "printing.html?id="+id;
//        } else {
//            toastr.error("Form incomplete");
//        }
}

function checkId(){
    var url = window.location.href;
    if (url.includes("?")) {
       _url = new URL(url);
       var id = _url.searchParams.get("id");
        
       populatePrintingFields(id);
    
    } 

}

function populatePrintingFields(id){
var babyData = getRecordFromDatabase(id);

var dischargeOrTransferedText = (babyData.initialDisposition == 2) ? "Transfer" : "Discharge";
console.log(dischargeOrTransferedText);
document.getElementById("dischargeOrTransferPrintHeader").innerHTML = dischargeOrTransferedText;
document.getElementById("dischargeOrTransferPrint").innerHTML = dischargeOrTransferedText;
document.getElementById("dischargeOrTransferDatePrint").innerHTML = dischargeOrTransferedText;

//Header
document.getElementById("mothersNameAndSurnamePrint").innerHTML = babyData.mothersFirstName + " " + babyData.mothersLastName;
document.getElementById("patientMedicalRecordNumberPrint").innerHTML = babyData.patientMedicalRecordNumber;
document.getElementById("dateOfBirthPrint").innerHTML = moment(babyData.dateOfBirth).format("MMM Do YYYY");
var sex = babyData.sexOfInfant;
document.getElementById("sexOfInfantPrint").innerHTML = (sex == 0) ? "Male" : (sex == 1) ? "Female" : "Unknown";
document.getElementById("mothersAgePrint").innerHTML = babyData.mothersAge;
var delivery = babyData.modeOfDelivery;
document.getElementById("modeOfDeliveryPrint").innerHTML = (delivery == 0) ? "Vaginal" : (delivery == 1) ? "Cesarian" : "Unknown";
document.getElementById("apgarScoresOneMinPrint").innerHTML = babyData.apgarScoresOneMin;
document.getElementById("apgarScoresFiveMinPrint").innerHTML = babyData.apgarScoresFiveMin;
document.getElementById("birthWeightInGramsPrint").innerHTML = babyData.birthWeightInGrams;
document.getElementById("headCircumferenceAtBirthPrint").innerHTML = babyData.headCircumferenceAtBirth + "cm";
var readableGestationalAge = babyData.gestationalAgeInWeeks + " weeks and " + babyData.gestionalDays + " days";
document.getElementById("gestationalAgePrint").innerHTML = readableGestationalAge;
//Header End


//Problem List Left Pane
    
document.getElementById("birthWeightCategoryPrint").innerHTML = (babyData.birthWeightInGrams < 1000) ? " • ELBW" : (babyData.birthWeightInGrams < 1500) ? " • VLBW" : (babyData.birthWeightInGrams < 2501) ? " • LBW" : "";
    
if (babyData.birthWeightInGrams < 2501){
   $('#birthWeightCategoryPrintHiddenId').removeClass('birthWeightCategoryPrintHidden');
}
    
var prematureCategory = (babyData.gestationalAgeInWeeks < 28) ? "Extremely Premature" : (babyData.gestationalAgeInWeeks < 32) ? "Very Premature" : (babyData.gestationalAgeInWeeks < 37) ? "Premature" : "";
document.getElementById("prematureCategoryPrint").innerHTML = "• " + prematureCategory + " (" + readableGestationalAge + ")";
    
if (prematureCategory != ""){
    $('#prematureCategoryPrintHiddenId').removeClass('prematureCategoryPrintHidden');
}
        
var multipleGestationIdentifier = (babyData.twinAB == 1) ? "Twin A" : (babyData.twinAB == 2) ? "Twin B" : (babyData.tripletABC == 1) ? "Triplet A" : (babyData.tripletABC == 2) ? "Triplet B" : (babyData.tripletABC == 3) ? "Triplet C": (babyData.quadrupletABCD == 1) ? "Quadruplet A" : (babyData.quadrupletABCD == 2) ? "Quadruplet B" : (babyData.quadrupletABCD == 3) ? "Quadruplet C" : (babyData.quadrupletABCD == 4) ? "Quadruplet D" : "";
document.getElementById("twinsOrMorePrint").innerHTML = (babyData.multipleGestation == 1) ? " • Multiple Pregnancy: " + multipleGestationIdentifier : "";
    
if (multipleGestationIdentifier != ""){
    $('twinsOrMorePrintHiddenId').removeClass('twinsOrMorePrintHidden');
}
    
document.getElementById("rvdValuePrint").innerHTML = (babyData.RVD == 1) ? (babyData.babyPCR == 1) ? " • RVDe and PCR+" : " • RVD+ and PCR-" : ""; 

if (babyData.RVD == 1){
    $('twinsOrMorePrintHiddenId').removeClass('twinsOrMorePrintHidden');
}    

document.getElementById("surfactantAtAnyTimePrint").innerHTML = (babyData.surfactantAtAnyTime == 1) ? " • RDS requiring surfactant" : "";
    
if (babyData.surfactantAtAnyTime == 1){
    $('surfactantAtAnyTimePrintHiddenId').removeClass('surfactantAtAnyTimePrintHidden');
}  
    
    
var typeOfOxygenSupport = (babyData.conventionalAt36Weeks == 1) ? "Conventional" : (babyData.highFrequencyVentilationAt36Weeks == 1) ? "High Frequency Ventilation" : (babyData.highFlowNasalCannulaAt36Weeks == 1) ? "High Flow Nasal Cannula" : (babyData.nasalIMVAt36Weeks == 1) ? "Nasal IMV" : (babyData.nasalCpapAt36Weeks == 1) ? "Nasal CPAP" : "";
document.getElementById("cldPrint").innerHTML = (babyData.oxygenAt36Weeks == 1) ? " • CLD " + typeOfOxygenSupport : "";

    
if (babyData.oxygenAt36Weeks == 1){
    $('cldPrintHiddenId').removeClass('cldPrintHidden');
}    
    
document.getElementById("necPlusPrint").innerHTML = (babyData.necrotizingEnterocolitis == 1) ? " • NEC+" : "";
    
if (babyData.necrotizingEnterocolitis == 1){
    $('necPlusPrintHiddenId').removeClass('necPlusPrintHidden');
}  
    
document.getElementById("ventilationPrint").innerHTML = (babyData.invasiveVentilation == 1) ? " • Invasive ventilation, started at " + babyData.dayOfLifeVentilationStarted + " days old for " + babyData.dayOfLifeVentilationStartedDuration + " days. Diagnosis: " +  babyData.dayOfLifeVentilationStartedDiagnosis  : "";
    
if (babyData.invasiveVentilation == 1){
    $('ventilationPrintHiddenId').removeClass('ventilationPrintHidden');
}  
   
//Problem List Left Pane End


//Problem List right Pane
var hieCooled = (babyData.cooled == 1) ? "Yes" : "No";
var cfmData = (babyData.CFM48Hours == 1) ? "CFM at 48hrs" + babyData.CFMHighestScore : "";
document.getElementById("hypoxicIschemicEncephalopathyHighestScorePrint").innerHTML = (babyData.hypoxicIschaemicEncephalopathy == 1) ? " • HIE Highest Score: " + babyData.hypoxicIschaemicEncephalopathyHighestScore + " Cooled: " + hieCooled + cfmData : "";

if (babyData.hypoxicIschaemicEncephalopathy == 1){
    $('hypoxicIschemicEncephalopathyHighestScorePrintHiddenId').removeClass('hypoxicIschemicEncephalopathyHighestScorePrintHidden');
} 

document.getElementById("jaundiceNeedingPhototherapyPrint").innerHTML = (babyData.jaundiceNeedingPhototherapy == 1) ? " • Jaundice Needing Phototherapy" : "";

if (babyData.jaundiceNeedingPhototherapy == 1){
    $('jaundiceNeedingPhototherapyPrintHiddenId').removeClass('jaundiceNeedingPhototherapyPrintHidden');
} 

document.getElementById("sepsisDuringAdmissionPrint").innerHTML = (babyData.sepsisDuringAdmission == 1) ? " • Sepsis during admission confirmed" : "";

if (babyData.sepsisDuringAdmission == 1){
    $('sepsisDuringAdmissionPrintHiddenId').removeClass('sepsisDuringAdmissionPrintHidden');
} 
    
document.getElementById("fetalMedicineUnitFlaggedPrint").innerHTML = (babyData.fetalMedicineUnitFlagged == 1) ? " • Fetal medicine unit scan" : "";
    
if (babyData.fetalMedicineUnitFlagged == 1){
    $('fetalMedicineUnitFlaggedPrintHiddenId').removeClass('fetalMedicineUnitFlaggedPrintHidden');
} 

document.getElementById("abnormalHeadUltrasoundPrint").innerHTML = (babyData.abnormalHeadUltrasound == 1) ? " • Abnormal head ultrasound" : "";
   
if (babyData.abnormalHeadUltrasound == 1){
    $('abnormalHeadUltrasoundPrintHiddenId').removeClass('abnormalHeadUltrasoundPrintHidden');
} 

document.getElementById("chromosomesDonePrint").innerHTML = (babyData.chromosomesDone == 1) ? " • Chromosomes Done" : "";

if (babyData.chromosomesDone == 1){
    $('chromosomesDonePrintHiddenId').removeClass('chromosomesDonePrintHidden');
}     
    
document.getElementById("immunizations652Print").innerHTML = (babyData.immunizations652 == 1) ? " • Immunizations Done on " + moment(babyData.immunizations652Date).format("MMM Do YYYY") : "";
    
if (babyData.immunizations652 == 1){
    $('immunizations652PrintHiddenId').removeClass('immunizations652PrintHidden');
}     

//Problem List right Pane End


//Footer Discharge Info
document.getElementById("dateOfDischargePrint").innerHTML = moment(babyData.dateOfInitialDisposition).format("MMM Do YYYY") + " ";
document.getElementById("placeOfTransferPrint").innerHTML = (babyData.initialDisposition == 2) ? "(" + babyData.transferCenterName + ")" + " " : "";
document.getElementById("weightAtDischargePrint").innerHTML = "Weight: " + babyData.weightAtInitialDisposition+ " grams";
document.getElementById("headCircumferenceAtDischargePrint").innerHTML = "HC: " + babyData.headCircumferenceInitialDisposition + "cm";
//Footer Discharge Info End

document.getElementById("followUpAppointmentPrint").innerHTML = babyData.appointmentLocation + " " + babyData.appointmentDate;
}