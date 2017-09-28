//Notes: Needs testing (how is rvd stored? etc) 
//Day of ventilation diagnosis length
//HIE

var babyData = testData();
//Header
document.getElementById("mothersNameAndSurname").innerHTML = babyData.mothersFirstName + " " + babyData.mothersLastName;
document.getElementById("dateOfBirth").innerHTML = moment(babyData.dateOfBirth).format("MMM Do YYYY");
var sex = babyData.sexOfInfant;
document.getElementById("sexOfInfant").innerHTML = (sex == 0) ? "male" : (sex == 1) ? "female" : "Unknown";
document.getElementById("mothersAge").innerHTML = babyData.mothersAge;
var delivery = babyData.modeOfDelivery;
document.getElementById("modeOfDelivery").innerHTML = (delivery == 0) ? "Vaginal" : (delivery == 1) ? "Cesarian" : "Unknown";
document.getElementById("apgarScoresOneMin").innerHTML = babyData.apgarScoresOneMin;
document.getElementById("apgarScoresFiveMin").innerHTML = babyData.apgarScoresFiveMin;
document.getElementById("birthWeightInGrams").innerHTML = babyData.birthWeightInGrams;
document.getElementById("headCircumferenceAtBirth").innerHTML = babyData.headCircumferenceAtBirth;
var readableGestationalAge = babyData.gestationalAgeInWeeks + " weeks and " + babyData.gestationalAgePlusDays + " days";
document.getElementById("gestationalAge").innerHTML = readableGestationalAge;
//Header End


//Problem List Left Pane
document.getElementById("birthWeightCategory").innerHTML = (babyData.birthWeightInGrams < 1000) ? " • ELBW" : (babyData.birthWeightInGrams < 1500) ? " • VLBW" : (babyData.birthWeightInGrams < 2501) ? " • LBW" : "";
var prematureCategory = (babyData.gestationalAgeInWeeks < 28) ? "Extremely Premature" : (babyData.gestationalAgeInWeeks < 32) ? "Very Premature" : (babyData.gestationalAgeInWeeks < 37) ? "Premature" : "";
document.getElementById("prematureCategory").innerHTML = "• " + prematureCategory + " (" + readableGestationalAge + ")";
document.getElementById("twinsOrMore").innerHTML = (babyData.multipleGestation == 1) ? " • Multiple Pregnancy" : "";
document.getElementById("rvdValue").innerHTML = (babyData.RVDYes == 1) ? (babyData.babyPCRPositive == 1) ? " • RVD+ and PCR+" : " • RVD+" : ""; 
document.getElementById("cld").innerHTML = (babyData.oxygenAt36Weeks == 1) ? " • CLD" : "";
document.getElementById("necPlus").innerHTML = (babyData.necSurgery == 1) ? " • NEC+" : "";

document.getElementById("ventilation").innerHTML = (babyData.invasiveVentilation == 1) ? " • Invasive ventilation, started at " + babyData.dayOfLifeVentilationStarted + " days old for " + babyData.dayOfLifeVentilationStartedDuration + " days. Diagnosis: " +  babyData.dayOfLifeVentilationStartedDiagnosis  : "";
//Problem List Left Pane End


//Problem List right Pane
document.getElementById("hypoxicIschemicEncephalopathyHighestScore").innerHTML = (babyData.hypoxicIschaemicEncephalopathy == 1) ? " • HIE" : "";

document.getElementById("jaundiceNeedingPhototherapy").innerHTML = (babyData.jaundiceNeedingPhototherapy == 1) ? " • Jaundice Needing Phototherapy" : "";

document.getElementById("sepsisDuringAdmission").innerHTML = (babyData.sepsisDuringAdmission == 1) ? " • Sepsis during admission confirmed" : "";

document.getElementById("fetalMedicineUnitFlagged").innerHTML = (babyData.fetalMedicineUnitFlagged == 1) ? " • Fetal medicine unit flagged" : "";

document.getElementById("abnormalHeadUltrasound").innerHTML = (babyData.abnormalHeadUltrasound == 1) ? " • Abnormal head ultrasound" : "";

document.getElementById("chromosomesDone").innerHTML = (babyData.chromosomesDone == 1) ? " • Chromosomes Done" : "";

document.getElementById("immunizations652").innerHTML = (babyData.immunizations652 == 1) ? " • Vaccines Done" : "";

//Problem List right Pane End


//Footer Discharge Info
document.getElementById("dateOfDischarge").innerHTML = moment(babyData.dateOfInitialDisposition).format("MMM Do YYYY"); + " ";
document.getElementById("placeOfTransfer").innerHTML = "(" + babyData.transferCenterName + ")" + " ";
document.getElementById("weightAtDischarge").innerHTML = babyData.weightAtInitialDisposition+ " grams";
//Footer Discharge Info End

