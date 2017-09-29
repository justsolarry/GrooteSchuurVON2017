 var babyData = testData();

document.getElementById("mothersNameAndSurname").innerHTML = babyData.mothersFirstName + " " + babyData.mothersLastName;
document.getElementById("mothersAge").innerHTML = babyData.mothersAge;
document.getElementById("dateOfBirth").innerHTML = moment(babyData.dateOfBirth).format("MMM Do YYYY");
var sex = babyData.sexOfInfant;
document.getElementById("sexOfInfant").innerHTML = (sex == 0) ? "male" : (sex == 1) ? "female" : "Unknown";
var delivery = babyData.modeOfDelivery;
document.getElementById("modeOfDelivery").innerHTML = (delivery == 0) ? "Vaginal" : (delivery == 1) ? "Cesarian" : "Unknown";
document.getElementById("apgarScoresOneMin").innerHTML = babyData.apgarScoresOneMin;
document.getElementById("apgarScoresFiveMin").innerHTML = babyData.apgarScoresFiveMin;
document.getElementById("birthWeightInGrams").innerHTML = babyData.birthWeightInGrams;
document.getElementById("headCircumferenceAtBirth").innerHTML = babyData.headCircumferenceAtBirth;
var readableGestationalAge = babyData.gestationalAgeInWeeks + " weeks and " + babyData.gestationalAgePlusDays + " days";
document.getElementById("gestationalAge").innerHTML = readableGestationalAge;
document.getElementById("birthWeightCategory").innerHTML = (babyData.birthWeightInGrams < 1000) ? " • ELBW" : (babyData.birthWeightInGrams < 1500) ? " • VLBW" : (babyData.birthWeightInGrams < 2501) ? " • LBW" : "";
var prematureCategory = (babyData.gestationalAgeInWeeks < 28) ? "Extremely Premature" : (babyData.gestationalAgeInWeeks < 32) ? "Very Premature" : (babyData.gestationalAgeInWeeks < 37) ? "Premature" : "";
document.getElementById("prematureCategory").innerHTML = "• " + prematureCategory + " (" + readableGestationalAge + ")";
document.getElementById("twinsOrMore").innerHTML = (babyData.multipleGestation == 1) ? " • Multiple Pregnancy" : "";
document.getElementById("cld").innerHTML = (babyData.oxygenAt36Weeks == 1) ? " • CLD" : "";
document.getElementById("necPlus").innerHTML = (babyData.necSurgery == 1) ? " • NEC+" : "";

document.getElementById("dateOfDischarge").innerHTML = moment(babyData.dateOfInitialDisposition).format("MMM Do YYYY"); + " ";
document.getElementById("placeOfTransfer").innerHTML = babyData.transferCenterCode + " This must change";
document.getElementById("weightAtDischarge").innerHTML = babyData.weightAtInitialDisposition;

//hypoxicIschemicEncephalopathyHighestScore