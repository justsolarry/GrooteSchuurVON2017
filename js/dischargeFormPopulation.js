//Notes: Needs testing (how is rvd stored? etc) 
//Day of ventilation diagnosis length
//HIE


var babyData = getRecordFromDatabase(10);
    //
    //getRecordFromDatabase(9);
    //

var dischargeOrTransferedText = (babyData.initialDisposition == 2) ? "Transfer" : "Discharge";
console.log(dischargeOrTransferedText);
document.getElementById("dischargeOrTransfer").innerHTML = dischargeOrTransferedText;
document.getElementById("dischargeOrTransferDate").innerHTML = dischargeOrTransferedText;

//Header
document.getElementById("mothersNameAndSurname").innerHTML = babyData.mothersFirstName + " " + babyData.mothersLastName;
document.getElementById("patientMedicalRecordNumber").innerHTML = babyData.patientMedicalRecordNumber;
document.getElementById("dateOfBirth").innerHTML = moment(babyData.dateOfBirth).format("MMM Do YYYY");
var sex = babyData.sexOfInfant;
document.getElementById("sexOfInfant").innerHTML = (sex == 0) ? "Male" : (sex == 1) ? "Female" : "Unknown";
document.getElementById("mothersAge").innerHTML = babyData.mothersAge;
var delivery = babyData.modeOfDelivery;
document.getElementById("modeOfDelivery").innerHTML = (delivery == 0) ? "Vaginal" : (delivery == 1) ? "Cesarian" : "Unknown";
document.getElementById("apgarScoresOneMin").innerHTML = babyData.apgarScoresOneMin;
document.getElementById("apgarScoresFiveMin").innerHTML = babyData.apgarScoresFiveMin;
document.getElementById("birthWeightInGrams").innerHTML = babyData.birthWeightInGrams;
document.getElementById("headCircumferenceAtBirth").innerHTML = babyData.headCircumferenceAtBirth + "cm";
var readableGestationalAge = babyData.gestationalAgeInWeeks + " weeks and " + babyData.gestationalDays + " days";
document.getElementById("gestationalAge").innerHTML = readableGestationalAge;
//Header End


//Problem List Left Pane
document.getElementById("birthWeightCategory").innerHTML = (babyData.birthWeightInGrams < 1000) ? " • ELBW" : (babyData.birthWeightInGrams < 1500) ? " • VLBW" : (babyData.birthWeightInGrams < 2501) ? " • LBW" : "";
var prematureCategory = (babyData.gestationalAgeInWeeks < 28) ? "Extremely Premature" : (babyData.gestationalAgeInWeeks < 32) ? "Very Premature" : (babyData.gestationalAgeInWeeks < 37) ? "Premature" : "";
document.getElementById("prematureCategory").innerHTML = "• " + prematureCategory + " (" + readableGestationalAge + ")";
var multipleGestationIdentifier = (babyData.twinAB == 1) ? "Twin A" : (babyData.twinAB == 2) ? "Twin B" : (babyData.tripletABC == 1) ? "Triplet A" : (babyData.tripletABC == 2) ? "Triplet B" : (babyData.tripletABC == 3) ? "Triplet C": (babyData.quadrupletABCD == 1) ? "Quadruplet A" : (babyData.quadrupletABCD == 2) ? "Quadruplet B" : (babyData.quadrupletABCD == 3) ? "Quadruplet C" : (babyData.quadrupletABCD == 4) ? "Quadruplet D" : "";
document.getElementById("twinsOrMore").innerHTML = (babyData.multipleGestation == 1) ? " • Multiple Pregnancy: " + multipleGestationIdentifier : "";
document.getElementById("rvdValue").innerHTML = (babyData.RVDYes == 1) ? (babyData.babyPCRPositive == 1) ? " • RVDe and PCR+" : " • RVD+ and PCR-" : ""; 
document.getElementById("surfactantAtAnyTime").innerHTML = (babyData.surfactantAtAnyTime == 1) ? " • RDS requiring surfactant" : "";
var typeOfOxygenSupport = (babyData.conventionalAt36Weeks == 1) ? "Conventional" : (babyData.highFrequencyVentilationAt36Weeks == 1) ? "High Frequency Ventilation" : (babyData.highFlowNasalCannulaAt36Weeks == 1) ? "High Flow Nasal Cannula" : (babyData.nasalIMVAt36Weeks == 1) ? "Nasal IMV" : (babyData.nasalCpapAt36Weeks == 1) ? "Nasal CPAP" : "";
document.getElementById("cld").innerHTML = (babyData.oxygenAt36Weeks == 1) ? " • CLD" : "";
document.getElementById("necPlus").innerHTML = (babyData.necrotizingEnterocolitis == 1) ? " • NEC+" : "";

document.getElementById("ventilation").innerHTML = (babyData.invasiveVentilation == 1) ? " • Invasive ventilation, started at " + babyData.dayOfLifeVentilationStarted + " days old for " + babyData.dayOfLifeVentilationStartedDuration + " days. Diagnosis: " +  babyData.dayOfLifeVentilationStartedDiagnosis  : "";
//Problem List Left Pane End


//Problem List right Pane
var hieCooled = (babyData.cooled == 1) ? "Yes" : "No";
var cfmData = (babyData.CFM48Hours == 1) ? "CFM at 48hrs" + babyData.CFMHighestScore : "";
document.getElementById("hypoxicIschemicEncephalopathyHighestScore").innerHTML = (babyData.hypoxicIschaemicEncephalopathy == 1) ? " • HIE Highest Score: " + babyData.hypoxicIschaemicEncephalopathyHighestScore + " Cooled: " + hieCooled + cfmData : "";


document.getElementById("jaundiceNeedingPhototherapy").innerHTML = (babyData.jaundiceNeedingPhototherapy == 1) ? " • Jaundice Needing Phototherapy" : "";

document.getElementById("sepsisDuringAdmission").innerHTML = (babyData.sepsisDuringAdmission == 1) ? " • Sepsis during admission confirmed" : "";

document.getElementById("fetalMedicineUnitFlagged").innerHTML = (babyData.fetalMedicineUnitFlagged == 1) ? " • Fetal medicine unit scan" : "";

document.getElementById("abnormalHeadUltrasound").innerHTML = (babyData.abnormalHeadUltrasound == 1) ? " • Abnormal head ultrasound" : "";

document.getElementById("chromosomesDone").innerHTML = (babyData.chromosomesDone == 1) ? " • Chromosomes Done" : "";

document.getElementById("immunizations652").innerHTML = (babyData.immunizations652 == 1) ? " • Immunizations Done on " + moment(babyData.immunizations652Date).format("MMM Do YYYY") : "";

//Problem List right Pane End


//Footer Discharge Info
document.getElementById("dateOfDischarge").innerHTML = moment(babyData.dateOfInitialDisposition).format("MMM Do YYYY") + " ";
document.getElementById("placeOfTransfer").innerHTML = (babyData.initialDisposition == 2) ? "(" + babyData.transferCenterName + ")" + " " : "";
document.getElementById("weightAtDischarge").innerHTML = "Weight: " + babyData.weightAtInitialDisposition+ " grams";
document.getElementById("headCircumferenceAtDischarge").innerHTML = "HC: " + babyData.headCircumferenceInitialDisposition + "cm";
//Footer Discharge Info End

