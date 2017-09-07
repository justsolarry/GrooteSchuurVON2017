<!doctype html>
<html lang="en">
  <head>
    <title>Test Environment</title>
  </head>
  <body>
    <h1>Test Data Transfer Environment</h1>
    <code id="xmlContent">
    </code>
    <div id="demo">text</div>

<script>



var babyData = {        //testData
  patientMedicalRecordNumber: 14304791,
  birthYear: 2018,
  birthWeightInGrams: 900,
  gestationalAgeInWeeks: 27,
  gestationalAgePlusDays: 2,
  diedInDeliveryRoom: 0,
  outbornBirth: 1,
  transferCenterCode: 99999999,
  dayOfAdmission: 2,
  headCircumferenceAtBirth: 23.8,
  maternalRaceOfMother: 7,
  prenatalCare: 1,
  antenatalSteroids: 0,
  antenatalMagnesiumSulfate: 0,
  chorioamnionitis: 0,
  maternalHypertension: 1,
  maternalDiabetes: 0,
  modeOfDelivery: 0,
  sexOfInfant: 0,
  multipleGestation: 0,
  numberOfBirthsDelivered: 77,
  congenitalInfection: 0,
  congenitalInfectionOrg1: 7777,
  congenitalInfectionOrg2: 7777,
  congenitalInfectionOrg3: 7777,
  apgarScoresOneMin: 7,
  apgarScoresFiveMin: 9,
  oxygenDuringInitialResuscitation: 1,
  facemaskVentilation: 1,
  LaryngealMaskAirway: 0,
  endotrachealTubeVentilation:0,
  epinephrine:0,
  cardiacCompression:0,
  nasalVentilation: 0,
  nasalCpap: 0,
  temperatureMeasuredAtAdmissionState: 1,
  temperatureMeasuredAtAdmission: 35.9,
  bacterialSepsis: 1,
  bacterialSepsisPathogen1: 7777,
  bacterialSepsisPathogen2: 7777,
  bacterialSepsisPathogen3: 7777,
  oxygenOnDay28: 1,
  cranialImagning:1,
  periventricularHemorrhage: 2,
  pihOccurance: 1,
  diedWithin12Hours: 0,
  receivedOxygen: 1,
  conventionalVentilation: 1,
  highFrequencyVentilation: 0,
  highFlowNasalCannula: 0,
  nasalIMV: 0,
  nasalCPAPafterResuscitation: 1,
  nasalCPAPnoETT: 1,
  surfactant: 0,
  surfactantAtAnyTime: 1,
  ageAtSurfactantInHours: 7,
  ageAtSurfactantPlusMinutes: 0,
  inhaledNitricOxide: 0,
  inhaledNitricOxideWhereGiven: 7,
  oxygenAt36Weeks: 1,
  ventilationAt36Weeks: 0,
  highFrequencyVentilationAt36Weeks: 0,
  highFlowNasalCannulaAt36weeks: 1,
  nasalIMVAt36Weeks: 0,
  nasalCpapAt36Weeks: 0,
  steroidsForCLD: 0,
  steroidsForCLDWhereGiven: 7,
  indomethacin: 0,
  ibuprofen: 0,
  Acetaminophen: 0,
  probiotics: 1,
  ropTreatmentWithVegfDrug: 0,
  caffeine: 0,
  vitaminA: 0,
  ropSurgery: 0,
  ropSurgeryWhereDone: 7,
  pdaSurgery: 0,
  necSurgery: 0,
  otherSurgery: 0,
  firstSurgeryCode: 77,
  firstSurgeryLocation: 7,
  secondSurgery: 77,
  secondarySurgeryLocation: 7,
  thirdSurgery: 77,
  thirdSurgeryLocation: 7,
  fourthSurgery: 77,
  fourthSurgeryLocation: 7,
  fifthSurgery: 77,
  fifthSurgeryLocation: 7,
  sixthSurgery: 77,
  sixthSurgeryLocation: 7,
  seventhSurgery: 77,
  seventhSurgeryLocation: 7,
  eighthSurgery: 77,
  eighthSurgeryLocation: 7,
  ninethSurgery: 77,
  ninethSurgeryLocation: 7,
  tenthSurgery: 77,
  tenthSurgeryLocation: 7,
  otherSurgeryDescription: 77,
  respiratoryDistressSyndrome: 1,
  pneumothorax: 0,
  pneumothoraxWhereOccured: 7,
  patentDuctusArteriosus: 1,
  necrotizingEnterocolitis: 0,
  necrotizingEnterocolitisWhereOccured: 7,
  focalIntestinalPerforation: 0,
  focalIntestinalPerforationWhereOccured: 7,
  bacterialPathogenAfterDay3: 0,
  bacterialPathogenAfterDay3WhereOccured: 7,
  bacterialPathogenAfterDay3Pathogen1: 7777,
  bacterialPathogenAfterDay3Pathogen2: 7777,
  bacterialPathogenAfterDay3Pathogen3: 7777,
  coagulaseNegativeStaphInfection: 1,
  coagulaseNegativeStaphInfectionWhereOccured:1,
  fungalInfection: 0,
  fungalInfectionWhereOccured: 7,
  cysticPeriventricularLeukomalacia: 0,
  retinalExamination:1,
  ropStage: 2,
  majorBirthDefect: 0,
  firstBirthDefectCode: 7777,
  secondBirthDefectCode: 7777,
  thirdBirthDefectCode: 7777,
  fourthBirthDefectCode: 7777,
  fifthBirthDefectCode: 7777,
  birthDefectDescription: 77,
  enteralfeeding: 3,
  oxygenAtDischarge: 0,
  conventionalVentilationAtDischarge: 0,
  highFrequencyVentilationAtDischarge: 0,
  highFlowNasalCannulaAtDischarge: 0,
  nasalVentilationAtDischarge: 0,
  nasalCpapAtDischarge: 0,
  monitorAtDischarge: 0,
  initialDisposition: 2,
  weightAtInitialDisposition: 1000,
  headCircumferenceAtInitialDisposition: 24.8,
  initialLengthOfStay: 13,
  reasonForTransfer: 1,
  newTransferCenterCode: 77777777

  // postTransferDisposition: 1,
  // dispositionAfterReadmission: 7,
  // weightAtDispositionAfterReadmission: 77777,
  // ultimateDisposition: 7,
  // totalLengthOfStay: 100,
  // durationOfAssistedVentilation: 7,
  // daysOfAssistedVentilation: 7777,
  // ecmoAtHospital: 7,
  // hypothermicTherapy: 0,
  // coolingMethod: 7,
  // hypoxicIschemicEncephalopathy: 7,
  // hieSeverity: 7,
  // meconiumAspirationSyndrome: 7,
  // trachealSuctioningAttempted: 7,
  // seizures: 7
};

// { maternalRaceOfMother
//   undefined: 0,
//   Black: 1,
//   White: 3,
//   Asian: 4,
//   NativeAmerican: 5,
//   PacificIslander: 6,
//   Other: 7
// },

create2018Xml();

function createRecord(){
  createHTTPPOSTConnection(create2018Xml());
}

function deleteRecord(){
  createHTTPPOSTConnection(deleteXmlData);
}

function updateRecord(){
  createHTTPPOSTConnection(deleteXmlData);
  createHTTPPOSTConnection(createXmlData);
  }

function createHTTPPOSTConnection(babyDataObject){
  var http = new XMLHttpRequest();
  var url = "http://196.42.86.86:5984/test1/3"; //server will change //test server https://www.posttestserver.com/
  http.open("PUT", url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
    }
  }
  document.getElementById("xmlContent").innerHTML = JSON.stringify(babyDataObject);
  http.send(JSON.stringify(babyDataObject));
}

function createHTTPGETConnection(){
  var http = new XMLHttpRequest();
  var url = "http://196.42.86.86:5984/test1/3"; //admin:vonadmin123@
  http.open("GET", url, false);
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        babyData = this.responseText;
        //console.log(this.responseText);
        //document.getElementById("demo").innerHTML = babyData;
    }
  }
  http.send();
}

function create2018Xml (){ //passInJSON object data

    // createHTTPGETConnection();
    //babyData = JSON.parse(babyData);

    var fileNum = 1;
    var date = new Date(); // Format 2011-05-10T16:49:06.547125-04:00
    fileDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() +"-02:00";
    var ApplicationName = "Groote Schuur Internal Application";
    var versionNumber = "0.0";
    var hospitalNum = "1052";

var xmlHeader = `<tblVtOxUd FILENUM="`+ fileNum +`" FILEDATE="`+ fileDate +`" APPLICATION="`+ ApplicationName +`" VERSION="`+versionNumber +`" ALLRECORDS="false">
<row>\n`;
var hospitalNumber = "<HOSPNO>"+ hospitalNum +"</HOSPNO>\n"; //required
var id = "<ID>"+babyData.patientMedicalRecordNumber+"</ID>\n";  //required
var birthYear = "<BYEAR>"+babyData.birthYear+"</BYEAR>\n";    //required
var deleteEntry = "<DELETED>0</DELETED>\n"; //(1 to delete record although only under rare circumstances)
var birthWeightInGrams = (babyData.birthWeightInGrams != undefined) ? "<BWGT>"+babyData.birthWeightInGrams+"</BWGT>\n" : ""; // != undefined
var gestationalAgeInWeeks = (babyData.gestationalAgeInWeeks != undefined) ? "<GAWEEKS>"+babyData.gestationalAgeInWeeks+"</GAWEEKS>\n" : "";
var gestationalAgePlusDays = (babyData.gestationalAgePlusDays != undefined) ? "<GADAYS>"+babyData.gestationalAgePlusDays+"</GADAYS>\n" : "";

var diedInDeliveryRoom = (babyData.diedInDeliveryRoom != undefined) ? "<DELDIE>"+babyData.diedInDeliveryRoom+"</DELDIE>\n"  : "";
var outbornBirth = (babyData.outbornBirth != undefined) ? "<LOCATE>"+ babyData.outbornBirth +"</LOCATE>\n" : "";
var dayOfAdmission = (babyData.dayOfAdmission != undefined) ? "<DAYADMISS>"+ babyData.dayOfAdmission +"</DAYADMISS>\n" : "";
var transferCenterCode = (babyData.transferCenterCode != undefined) ? "<OUTB_CTR>"+ babyData.transferCenterCode + "</OUTB_CTR>\n" : "";
var headCircumferenceAtBirth = (babyData.headCircumferenceAtBirth != undefined) ? "<BHEADCIR>"+ babyData.headCircumferenceAtBirth +"</BHEADCIR>\n" : "";
var notHispanic = "<HISP>0</HISP>\n";
var maternalRaceOfMother = (babyData.maternalRaceOfMother != undefined) ? "<MATRACE>"+ babyData.maternalRaceOfMother +"</MATRACE>\n" : "";
var prenatalCare = (babyData.prenatalCare != undefined) ? "<PCARE>"+ babyData.prenatalCare +"</PCARE>\n" : "";
var antenatalSteroids = (babyData.antenatalSteroids != undefined) ? "<ASTER>"+ babyData.antenatalSteroids +"</ASTER>\n" : "";
var antenatalMagnesiumSulfate = (babyData.antenatalMagnesiumSulfate != undefined) ? "<AMAGSULF>"+ babyData.antenatalMagnesiumSulfate +"</AMAGSULF>\n" : "";
var chorioamnionitis = (babyData.chorioamnionitis != undefined) ? "<CHORIO>"+ babyData.chorioamnionitis +"</CHORIO>\n" : "";
var maternalHypertension = (babyData.maternalHypertension != undefined) ? "<MHYPERTENS>"+ babyData.maternalHypertension +"</MHYPERTENS>\n" : "";
var maternalDiabetes = (babyData.maternalDiabetes != undefined) ? "<MDIABETES>" + babyData.maternalDiabetes + "</MDIABETES>\n" : "";
var modeOfDelivery = (babyData.modeOfDelivery != undefined) ? "<VAGDEL>"+ babyData.modeOfDelivery +"</VAGDEL>\n" : "";
var sexOfInfant = (babyData.sexOfInfant != undefined) ? "<SEX>"+ babyData.sexOfInfant +"</SEX>\n" : "";
var multipleGestation = (babyData.multipleGestation != undefined) ? "<MULT>"+ babyData.multipleGestation +"</MULT>\n" : "";
var numberOfBirthsDelivered = (babyData.numberOfBirthsDelivered != undefined) ? "<NBIRTHS>"+ babyData.numberOfBirthsDelivered +"</NBIRTHS>\n" : "";

var congenitalInfection = (babyData.congenitalInfection != undefined) ? "<CONGENINF>"+ babyData.congenitalInfection +"</CONGENINF>\n" : "";
var congenitalInfectionOrg1 = (babyData.congenitalInfection != undefined) ? "<CONGENINFCD1>"+ babyData.congenitalInfectionOrg1 +"</CONGENINFCD1>\n" : "";
var congenitalInfectionOrg2 = (babyData.congenitalInfection != undefined) ? "<CONGENINFCD2>"+ babyData.congenitalInfectionOrg2 +"</CONGENINFCD2>\n" : "";
var congenitalInfectionOrg3 = (babyData.congenitalInfection != undefined) ? "<CONGENINFCD3>"+ babyData.congenitalInfectionOrg3 +"</CONGENINFCD3>\n" : "";

var apgarScoresOneMin = (babyData.apgarScoresOneMin != undefined) ? "<AP1>"+ babyData.apgarScoresOneMin +"</AP1>\n" : "";
var apgarScoresFiveMin = (babyData.apgarScoresFiveMin != undefined) ? "<AP5>"+ babyData.apgarScoresFiveMin +"</AP5>\n" : "";
var oxygenDuringInitialResuscitation = (babyData.oxygenDuringInitialResuscitation != undefined) ? "<DROX>" + babyData.oxygenDuringInitialResuscitation+ "</DROX>\n" : "";
var facemaskVentilation = (babyData.facemaskVentilation != undefined) ? "<DRBM>"+ babyData.facemaskVentilation +"</DRBM>\n" : "";
var LaryngealMaskAirway = (babyData.LaryngealMaskAirway != undefined) ? "<DRLMA>"+ babyData.LaryngealMaskAirway +"</DRLMA>\n" : "";
var endotrachealTubeVentilation = (babyData.endotrachealTubeVentilation != undefined) ? "<DRET>" + babyData.endotrachealTubeVentilation +"</DRET>\n": "";
var epinephrine =(babyData.epinephrine != undefined) ? "<DREP>"+ babyData.epinephrine +"</DREP>\n": "";
var cardiacCompression = (babyData.cardiacCompression != undefined) ?"<DRCC>"+ babyData.cardiacCompression +"</DRCC>\n": "";
var nasalVentilation = (babyData.nasalVentilation != undefined) ?"<DRNIMV>"+ babyData.nasalVentilation +"</DRNIMV>\n": "";

var nasalCpap = (babyData.nasalCpap != undefined) ? "<DRCPAP>"+ babyData.nasalCpap +"</DRCPAP>\n" : "";
var temperatureMeasuredAtAdmissionState = (babyData.temperatureMeasuredAtAdmissionState != undefined) ? "<ATEMPM>"+ babyData.temperatureMeasuredAtAdmissionState +"</ATEMPM>\n" :"";
var temperatureMeasuredAtAdmission = (babyData.temperatureMeasuredAtAdmission != undefined) ? "<ATEMP>"+ babyData.temperatureMeasuredAtAdmission +"</ATEMP>\n": "";
var bacterialSepsis = (babyData.bacterialSepsis != undefined) ? "<EBSEPS>"+ babyData.bacterialSepsis +"</EBSEPS>\n": "";
var bacterialSepsisPathogen1 = (babyData.bacterialSepsisPathogen1 != undefined) ? "<EBSEPSCD1>"+ babyData.bacterialSepsisPathogen1 +"</EBSEPSCD1>\n": "";
var bacterialSepsisPathogen2= (babyData.bacterialSepsisPathogen2 != undefined) ? "<EBSEPSCD2>"+ babyData.bacterialSepsisPathogen2 +"</EBSEPSCD2>\n": "";
var bacterialSepsisPathogen3 = (babyData.bacterialSepsisPathogen3 != undefined) ? "<EBSEPSCD3>"+ babyData.bacterialSepsisPathogen3 +"</EBSEPSCD3>\n": "";

var oxygenOnDay28 = (babyData.oxygenOnDay28 != undefined) ? "<NEWOX28>"+ babyData.oxygenOnDay28 +"</NEWOX28>\n": "";
var cranialImagning = (babyData.cranialImagning != undefined) ? "<USOUND1>"+ babyData.cranialImagning +"</USOUND1>\n": "";
var periventricularHemorrhage = (babyData.periventricularHemorrhage != undefined) ? "<UGRADE1>"+ babyData.periventricularHemorrhage +"</UGRADE1>\n": "";
var pihOccurance = (babyData.pihOccurance != undefined) ? "<PIHWFO>"+ babyData.pihOccurance +"</PIHWFO>\n": "";
var diedWithin12Hours = (babyData.diedWithin12Hours != undefined) ? "<DIE12>"+ babyData.diedWithin12Hours +"</DIE12>\n": "";

var receivedOxygen = (babyData.receivedOxygen != undefined) ? "<OXY>"+ babyData.receivedOxygen  +"</OXY>\n": "";
var conventionalVentilation = (babyData.conventionalVentilation != undefined) ? "<VENT>"+ babyData.conventionalVentilation +"</VENT>\n": "";
var highFrequencyVentilation = (babyData.highFrequencyVentilation != undefined) ? "<HFV>"+ babyData.highFrequencyVentilation +"</HFV>\n": "";
var highFlowNasalCannula = (babyData.highFlowNasalCannula != undefined) ? "<HFNC>"+ babyData.highFlowNasalCannula +"</HFNC>\n": "";
var nasalIMV = (babyData.nasalIMV != undefined) ? "<NIMV>"+ babyData.nasalIMV +"</NIMV>\n": "";
var nasalCPAPafterResuscitation = (babyData.nasalCPAPafterResuscitation != undefined) ? "<CPAP>" + babyData.nasalCPAPafterResuscitation +"</CPAP>\n": "";
var nasalCPAPnoETT = (babyData.nasalCPAPnoETT != undefined) ? "<CPAPES>"+ babyData.nasalCPAPnoETT +"</CPAPES>\n": "";
var surfactant = (babyData.surfactant != undefined) ? "<DRSURF>"+ babyData.surfactant +"</DRSURF>\n": "";


var surfactantAtAnyTime = (babyData.surfactantAtAnyTime != undefined) ? "<SURFX>" + babyData.surfactantAtAnyTime + "</SURFX>\n": "";
var ageAtSurfactantInHours = (babyData.ageAtSurfactantInHours != undefined) ? "<SURF1DHR>"+ babyData.ageAtSurfactantInHours +"</SURF1DHR>\n" : "";
var ageAtSurfactantPlusMinutes = (babyData.ageAtSurfactantPlusMinutes != undefined) ? "<SURF1DMIN>"+babyData.ageAtSurfactantPlusMinutes+"</SURF1DMIN>\n" : "";
var inhaledNitricOxide = (babyData.inhaledNitricOxide != undefined) ? "<INO>"+babyData.inhaledNitricOxide+"</INO>\n" : "";
var inhaledNitricOxideWhereGiven = (babyData.inhaledNitricOxideWhereGiven != undefined) ? "<INOWG>"+ babyData.inhaledNitricOxideWhereGiven +"</INOWG>\n" : "";
var oxygenAt36Weeks = (babyData.oxygenAt36Weeks != undefined) ? "<OX36>"+babyData.oxygenAt36Weeks+"</OX36>\n" : "";
var ventilationAt36Weeks = (babyData.ventilationAt36Weeks != undefined) ?  "<VENT36>"+babyData.ventilationAt36Weeks +"</VENT36>\n" : "";
var highFrequencyVentilationAt36Weeks = (babyData.highFrequencyVentilationAt36Weeks != undefined) ? "<HFV36>"+ babyData.highFrequencyVentilationAt36Weeks +"</HFV36>\n" : "";

var highFlowNasalCannulaAt36weeks = (babyData.highFlowNasalCannulaAt36weeks != undefined) ? "<HFNC36>"+ babyData.highFlowNasalCannulaAt36weeks +"</HFNC36>\n" : "";
var nasalIMVAt36Weeks = (babyData.nasalIMVAt36Weeks != undefined) ? "<NIMV36>" +babyData.nasalIMVAt36Weeks+"</NIMV36>\n" : "";
var nasalCpapAt36Weeks = (babyData.nasalCpapAt36Weeks != undefined) ? "<CPAP36>"+babyData.nasalCpapAt36Weeks+"</CPAP36>\n" : "";
var steroidsForCLD = (babyData.steroidsForCLD != undefined) ? "<STERBPD>"+babyData.steroidsForCLD+"</STERBPD>\n" : "";
var steroidsForCLDWhereGiven = (babyData.steroidsForCLDWhereGiven != undefined) ? "<STERBPDWG>"+babyData.steroidsForCLDWhereGiven+"</STERBPDWG>\n" : "";
var indomethacin = (babyData.indomethacin != undefined) ? "<INDOMETH>"+babyData.indomethacin+"</INDOMETH>\n" : "";
var ibuprofen = (babyData.ibuprofen != undefined) ? "<IBUPROFEN>"+babyData.ibuprofen+"</IBUPROFEN>\n" : "";
var Acetaminophen = (babyData.Acetaminophen != undefined) ? "<ACETAMIN>"+babyData.Acetaminophen +"</ACETAMIN>\n" : "";
Acetaminophen
var probiotics = (babyData.probiotics != undefined) ? "<PROBIOTICS>"+babyData.probiotics+"</PROBIOTICS>\n" : "";
var ropTreatmentWithVegfDrug = (babyData.ropTreatmentWithVegfDrug != undefined) ? "<ROPANTIVEGF>"+ babyData.ropTreatmentWithVegfDrug +"</ROPANTIVEGF>\n" : "";
var caffeine = (babyData.caffeine != undefined) ? "<CAFFEINE>"+babyData.caffeine+"</CAFFEINE>\n" : "";
var vitaminA = (babyData.vitaminA != undefined) ? "<VITAMINA>"+babyData.vitaminA+"</VITAMINA>\n" : "";

var ropSurgery = (babyData.ropSurgery != undefined) ? "<ROPSURG>"+ babyData.ropSurgery +"</ROPSURG>\n" : "";
var ropSurgeryWhereDone = (babyData.ropSurgeryWhereDone != undefined) ? "<ROPSURGWD>"+babyData.ropSurgeryWhereDone+"</ROPSURGWD>\n" : "";


var pdaSurgery = (babyData.pdaSurgery != undefined) ? "<PDASURG>"+babyData.pdaSurgery+"</PDASURG>\n" : "";
var necSurgery = (babyData.necSurgery != undefined) ? "<NECSURG>"+babyData.necSurgery+"</NECSURG>\n" : "";
var otherSurgery = (babyData.otherSurgery != undefined) ? "<OSURG>"+babyData.otherSurgery+"</OSURG>\n" : "";
var firstSurgeryCode = (babyData.firstSurgeryCode != undefined) ? "<SRGCD1>"+babyData.firstSurgeryCode+"</SRGCD1>\n" : "";
var firstSurgeryLocation = (babyData.firstSurgeryLocation != undefined) ? "<SRGLOC1>"+babyData.firstSurgeryLocation+"</SRGLOC1>\n" : "";
var secondSurgery = (babyData.secondSurgery != undefined) ? "<SRGCD2>"+babyData.secondSurgery+"</SRGCD2>\n" : "";
var secondarySurgeryLocation = (babyData.secondarySurgeryLocation != undefined) ? "<SRGLOC2>"+babyData.secondarySurgeryLocation+"</SRGLOC2>\n" : "";
var thirdSurgery = (babyData.thirdSurgery != undefined) ? "<SRGCD3>"+babyData.thirdSurgery+"</SRGCD3>\n" : "";
var thirdSurgeryLocation = (babyData.thirdSurgeryLocation != undefined) ? "<SRGLOC3>"+babyData.thirdSurgeryLocation+"</SRGLOC3>\n" : "";
var fourthSurgery = (babyData.fourthSurgery != undefined) ? "<SRGCD4>"+babyData.fourthSurgery+"</SRGCD4>\n" : "";
var fourthSurgeryLocation = (babyData.fourthSurgeryLocation != undefined) ? "<SRGLOC4>"+babyData.fourthSurgeryLocation+"</SRGLOC4>\n" : "";
var fifthSurgery = (babyData.fifthSurgery != undefined) ? "<SRGCD5>"+babyData.fifthSurgery+"</SRGCD5>\n" : "";
var fifthSurgeryLocation = (babyData.fifthSurgeryLocation != undefined) ? "<SRGLOC5>"+babyData.fifthSurgeryLocation+"</SRGLOC5>\n" : "";
var sixthSurgery = (babyData.sixthSurgery != undefined) ? "<SRGCD6>"+babyData.sixthSurgery+"</SRGCD6>\n" : "";
var sixthSurgeryLocation = (babyData.sixthSurgeryLocation != undefined) ? "<SRGLOC6>"+babyData.sixthSurgeryLocation+"</SRGLOC6>\n" : "";
var seventhSurgery = (babyData.seventhSurgery != undefined) ? "<SRGCD7>"+babyData.seventhSurgery+"</SRGCD7>\n" : "";
var seventhSurgeryLocation = (babyData.seventhSurgeryLocation != undefined) ? "<SRGLOC7>"+babyData.seventhSurgeryLocation+"</SRGLOC7>\n" : "";
var eighthSurgery = (babyData.eighthSurgery != undefined) ? "<SRGCD8>"+babyData.eighthSurgery+"</SRGCD8>\n" : "";
var eighthSurgeryLocation = (babyData.eighthSurgeryLocation != undefined) ? "<SRGLOC8>"+babyData.eighthSurgeryLocation+"</SRGLOC8>\n" : "";
var ninethSurgery = (babyData.ninethSurgery != undefined) ? "<SRGCD9>"+babyData.ninethSurgery+"</SRGCD9>\n" : "";
var ninethSurgeryLocation = (babyData.ninethSurgeryLocation != undefined) ? "<SRGLOC9>"+babyData.ninethSurgeryLocation+"</SRGLOC9>\n" : "";
var tenthSurgery = (babyData.tenthSurgery != undefined) ? "<SRGCD10>"+babyData.tenthSurgery+"</SRGCD10>\n" : "";
var tenthSurgeryLocation = (babyData.tenthSurgeryLocation != undefined) ? "<SRGLOC10>"+babyData.tenthSurgeryLocation+"</SRGLOC10>\n" : "";

var otherSurgeryDescription = (babyData.otherSurgeryDescription != undefined) ? "<OSRGDESC>"+babyData.otherSurgeryDescription+"</OSRGDESC>\n" : "";
var respiratoryDistressSyndrome = (babyData.respiratoryDistressSyndrome != undefined) ? "<RDS>"+babyData.respiratoryDistressSyndrome+"</RDS>\n" : "";
var pneumothorax = (babyData.pneumothorax != undefined) ? "<PNTX>"+babyData.pneumothorax+"</PNTX>\n" : "";
var pneumothoraxWhereOccured = (babyData.pneumothoraxWhereOccured != undefined) ? "<PNTXWO>"+babyData.pneumothoraxWhereOccured+"</PNTXWO>\n" : "";
var patentDuctusArteriosus = (babyData.patentDuctusArteriosus != undefined) ? "<PDA>"+babyData.patentDuctusArteriosus+"</PDA>\n" : "";
var necrotizingEnterocolitis = (babyData.necrotizingEnterocolitis != undefined) ? "<NEC>"+babyData.necrotizingEnterocolitis+"</NEC>\n" : "";
var necrotizingEnterocolitisWhereOccured = (babyData.necrotizingEnterocolitisWhereOccured != undefined) ? "<NECWO>"+babyData.necrotizingEnterocolitisWhereOccured+"</NECWO>\n" : "";
var focalIntestinalPerforation = (babyData.focalIntestinalPerforation != undefined) ? "<GIPERF>"+babyData.focalIntestinalPerforation+"</GIPERF>\n" : "";
var focalIntestinalPerforationWhereOccured = (babyData.focalIntestinalPerforationWhereOccured != undefined) ? "<GIPERFWO>"+babyData.focalIntestinalPerforationWhereOccured+"</GIPERFWO>\n" : "";
var bacterialPathogenAfterDay3 = (babyData.bacterialPathogenAfterDay3 != undefined) ? "<LBPATH>"+babyData.bacterialPathogenAfterDay3+"</LBPATH>\n" : "";
var bacterialPathogenAfterDay3WhereOccured = (babyData.bacterialPathogenAfterDay3WhereOccured != undefined) ? "<LBPATHWO>"+babyData.bacterialPathogenAfterDay3WhereOccured+"</LBPATHWO>\n" : "";
var bacterialPathogenAfterDay3Pathogen1 = (babyData.bacterialPathogenAfterDay3Pathogen1 != undefined) ? "<LBPATHCD1>"+babyData.bacterialPathogenAfterDay3Pathogen1+"</LBPATHCD1>\n" : "";
var bacterialPathogenAfterDay3Pathogen2 = (babyData.bacterialPathogenAfterDay3Pathogen2 != undefined) ? "<LBPATHCD2>"+babyData.bacterialPathogenAfterDay3Pathogen2+"</LBPATHCD2>\n" : "";
var bacterialPathogenAfterDay3Pathogen3 = (babyData.bacterialPathogenAfterDay3Pathogen3 != undefined) ? "<LBPATHCD3>"+babyData.bacterialPathogenAfterDay3Pathogen3+"</LBPATHCD3>\n" : "";

var coagulaseNegativeStaphInfection = (babyData.coagulaseNegativeStaphInfection != undefined) ? "<CNEGSTAPH>"+babyData.coagulaseNegativeStaphInfection+"</CNEGSTAPH>\n" : "";
var coagulaseNegativeStaphInfectionWhereOccured = (babyData.coagulaseNegativeStaphInfectionWhereOccured != undefined) ? "<CNEGWO>"+babyData.coagulaseNegativeStaphInfectionWhereOccured+"</CNEGWO>\n" : "";
var fungalInfection = (babyData.fungalInfection != undefined) ? "<FUNGAL>"+babyData.fungalInfection+"</FUNGAL>\n" : "";
var fungalInfectionWhereOccured = (babyData.fungalInfectionWhereOccured != undefined) ? "<FUNGALWO>"+babyData.fungalInfectionWhereOccured+"</FUNGALWO>\n" : "";
var cysticPeriventricularLeukomalacia = (babyData.cysticPeriventricularLeukomalacia != undefined) ? "<PVL>"+babyData.cysticPeriventricularLeukomalacia+"</PVL>\n" : "";
var retinalExamination = (babyData.retinalExamination != undefined) ? "<EYEX>"+babyData.retinalExamination+"</EYEX>\n" : "";

var ropStage = (babyData.ropStage != undefined) ? "<ISTAGE>"+babyData.ropStage+"</ISTAGE>\n" : "";
var majorBirthDefect = (babyData.majorBirthDefect != undefined) ? "<CMAL>"+babyData.majorBirthDefect+"</CMAL>\n" : "";
var firstBirthDefectCode = (babyData.firstBirthDefectCode != undefined) ? "<BDCD1>"+babyData.firstBirthDefectCode+"</BDCD1>\n" : "";
var secondBirthDefectCode = (babyData.secondBirthDefectCode != undefined) ? "<BDCD2>"+babyData.secondBirthDefectCode+"</BDCD2>\n" : "";
var thirdBirthDefectCode = (babyData.thirdBirthDefectCode != undefined) ? "<BDCD3>"+babyData.thirdBirthDefectCode+"</BDCD3>\n" : "";
var fourthBirthDefectCode = (babyData.fourthBirthDefectCode != undefined) ? "<BDCD4>"+babyData.fourthBirthDefectCode+"</BDCD4>\n" : "";
var fifthBirthDefectCode = (babyData.fifthBirthDefectCode != undefined) ? "<BDCD5>"+babyData.fifthBirthDefectCode+"</BDCD5>\n" : "";
var birthDefectDescription = (babyData.birthDefectDescription != undefined) ? "<BDEFECT>"+babyData.birthDefectDescription+"</BDEFECT>\n" : "";
var enteralfeeding = (babyData.enteralfeeding != undefined) ? "<ENTFEED>"+babyData.enteralfeeding+"</ENTFEED>\n" : "";
var oxygenAtDischarge = (babyData.oxygenAtDischarge != undefined) ? "<OXFINAL>"+babyData.oxygenAtDischarge+"</OXFINAL>\n" : "";

var conventionalVentilationAtDischarge  = (babyData.conventionalVentilationAtDischarge != undefined) ? "<VENTFINAL>"+babyData.conventionalVentilationAtDischarge+"</VENTFINAL>\n" : "";
var highFrequencyVentilationAtDischarge = (babyData.highFrequencyVentilationAtDischarge != undefined) ? "<HFVFINAL>"+babyData.highFrequencyVentilationAtDischarge+"</HFVFINAL>\n" : "";
var highFlowNasalCannulaAtDischarge = (babyData.highFlowNasalCannulaAtDischarge != undefined) ? "<HFNCFINAL>"+babyData.highFlowNasalCannulaAtDischarge +"</HFNCFINAL>\n" : "";
var nasalVentilationAtDischarge = (babyData.nasalVentilationAtDischarge != undefined) ? "<NIMVFINAL>"+babyData.nasalVentilationAtDischarge+"</NIMVFINAL>\n" : "";
var nasalCpapAtDischarge = (babyData.nasalCpapAtDischarge != undefined) ? "<CPAPFINAL>"+babyData.nasalCpapAtDischarge +"</CPAPFINAL>\n" : "";

var monitorAtDischarge = (babyData.monitorAtDischarge != undefined) ? "<ACFINAL>"+babyData.monitorAtDischarge+"</ACFINAL>\n" : "";
var initialDisposition = (babyData.initialDisposition != undefined) ? "<FDISP>"+babyData.initialDisposition+"</FDISP>\n" : "";
var weightAtInitialDisposition = (babyData.weightAtInitialDisposition != undefined) ? "<DWGT>"+babyData.weightAtInitialDisposition+"</DWGT>\n" : "";
var headCircumferenceAtInitialDisposition = (babyData.headCircumferenceAtInitialDisposition != undefined) ? "<DHEADCIR>"+babyData.headCircumferenceAtInitialDisposition+"</DHEADCIR>\n" : "";
var initialLengthOfStay = (babyData.initialLengthOfStay != undefined) ? "<LOS1>"+babyData.initialLengthOfStay+"</LOS1>\n" : "";

var reasonForTransfer = (babyData.reasonForTransfer != undefined) ? "<TRANSCODE>"+babyData.reasonForTransfer+"</TRANSCODE>\n" : "";
var newTransferCenterCode = (babyData.newTransferCenterCode != undefined) ? "<XFER_CTR>"+babyData.newTransferCenterCode+"</XFER_CTR>\n" : "";
var postTransferDisposition = (babyData.postTransferDisposition != undefined) ? "<F2DISP>"+babyData.postTransferDisposition+"</F2DISP>\n" : "";
var dispositionAfterReadmission = (babyData.dispositionAfterReadmission != undefined) ? "<F3DISP>"+babyData.dispositionAfterReadmission+"</F3DISP>\n" : "";
var weightAtDispositionAfterReadmission = (babyData.weightAtDispositionAfterReadmission != undefined) ? "<F3WGT>"+babyData.weightAtDispositionAfterReadmission+"</F3WGT>\n" : "";
var ultimateDisposition = (babyData.ultimateDisposition != undefined) ? "<UDISP>"+babyData.ultimateDisposition+"</UDISP>\n" : "";
var totalLengthOfStay = (babyData. totalLengthOfStay != undefined) ? "<LOSTOT>"+babyData. totalLengthOfStay+"</LOSTOT>\n" : "";
var durationOfAssistedVentilation = (babyData.durationOfAssistedVentilation != undefined) ? "<DURVENT>"+babyData.durationOfAssistedVentilation+"</DURVENT>\n" : "";
var daysOfAssistedVentilation = (babyData.daysOfAssistedVentilation != undefined) ? "<VENTDAYS>"+babyData.daysOfAssistedVentilation+"</VENTDAYS>\n" : "";
var ecmoAtHospital = (babyData.ecmoAtHospital != undefined) ? "<ECMOP>"+babyData.ecmoAtHospital+"</ECMOP>\n" : "";
var hypothermicTherapy = (babyData.hypothermicTherapy != undefined) ? "<COOLED>"+babyData.hypothermicTherapy+"</COOLED>\n" : "";
var coolingMethod = (babyData.coolingMethod != undefined) ? "<COOLMETH>"+babyData.coolingMethod+"</COOLMETH>\n" : "";
var hypoxicIschemicEncephalopathy = (babyData.hypoxicIschemicEncephalopathy != undefined) ? "<HYPOIEP>"+babyData.hypoxicIschemicEncephalopathy+"</HYPOIEP>\n" : "";
var hieSeverity = (babyData.hieSeverity != undefined) ? "<HYPOIES>"+babyData.hieSeverity+"</HYPOIES>\n" : "";
var meconiumAspirationSyndrome = (babyData.meconiumAspirationSyndrome != undefined) ? "<MECASP>"+babyData.meconiumAspirationSyndrome+"</MECASP>\n" : "";
var trachealSuctioningAttempted = (babyData.trachealSuctioningAttempted != undefined) ? "<TRCSUCMA>"+babyData.trachealSuctioningAttempted+"</TRCSUCMA>\n" : "";
var seizures = (babyData.seizures != undefined) ? "<SEIZURE>"+babyData.seizures+"</SEIZURE>\n" : "";

var xmlDocument = xmlHeader + hospitalNumber + id + birthYear + deleteEntry + birthWeightInGrams + gestationalAgeInWeeks + gestationalAgePlusDays
 + diedInDeliveryRoom + outbornBirth + dayOfAdmission + transferCenterCode + headCircumferenceAtBirth + notHispanic + prenatalCare + antenatalSteroids + antenatalMagnesiumSulfate
 + chorioamnionitis + maternalHypertension +  maternalDiabetes + modeOfDelivery + sexOfInfant + multipleGestation + numberOfBirthsDelivered + congenitalInfection
 + congenitalInfectionOrg1 + congenitalInfectionOrg1 + congenitalInfectionOrg2 + congenitalInfectionOrg3 + apgarScoresOneMin + apgarScoresFiveMin
 + LaryngealMaskAirway + oxygenDuringInitialResuscitation + facemaskVentilation + endotrachealTubeVentilation + epinephrine
 + cardiacCompression + nasalVentilation + nasalCpap + temperatureMeasuredAtAdmissionState + temperatureMeasuredAtAdmission + bacterialSepsis
 + bacterialSepsisPathogen1 + bacterialSepsisPathogen2 + bacterialSepsisPathogen3
 + oxygenOnDay28 + cranialImagning + periventricularHemorrhage + pihOccurance + diedWithin12Hours
 + receivedOxygen + conventionalVentilation + highFrequencyVentilation + highFlowNasalCannula + nasalIMV
 + nasalCPAPafterResuscitation + nasalCPAPnoETT +  surfactant +  surfactantAtAnyTime +  ageAtSurfactantInHours + ageAtSurfactantPlusMinutes + inhaledNitricOxide
 + inhaledNitricOxideWhereGiven +  oxygenAt36Weeks + ventilationAt36Weeks +    highFrequencyVentilationAt36Weeks +  highFlowNasalCannulaAt36weeks
 + nasalIMVAt36Weeks + nasalCpapAt36Weeks + steroidsForCLD + steroidsForCLDWhereGiven + indomethacin + ibuprofen + Acetaminophen + probiotics + ropTreatmentWithVegfDrug
 + caffeine + vitaminA + ropSurgery + ropSurgeryWhereDone + pdaSurgery + necSurgery +  otherSurgery +  firstSurgeryCode +  firstSurgeryLocation
 + secondSurgery +  secondarySurgeryLocation + thirdSurgery +  thirdSurgeryLocation + fourthSurgery + fourthSurgeryLocation + fifthSurgery + fifthSurgeryLocation
 + sixthSurgery + sixthSurgeryLocation +  seventhSurgery +  seventhSurgeryLocation +  eighthSurgery + eighthSurgeryLocation
 + ninethSurgery +  ninethSurgeryLocation +  tenthSurgery +  tenthSurgeryLocation + otherSurgeryDescription +  respiratoryDistressSyndrome
 + pneumothorax + pneumothoraxWhereOccured +  patentDuctusArteriosus +  necrotizingEnterocolitis+  necrotizingEnterocolitisWhereOccured+ focalIntestinalPerforation
 + focalIntestinalPerforationWhereOccured + bacterialPathogenAfterDay3 + bacterialPathogenAfterDay3WhereOccured
 +  bacterialPathogenAfterDay3Pathogen1 + bacterialPathogenAfterDay3Pathogen2 + bacterialPathogenAfterDay3Pathogen3 + coagulaseNegativeStaphInfection
 + coagulaseNegativeStaphInfectionWhereOccured + fungalInfection + fungalInfectionWhereOccured +  cysticPeriventricularLeukomalacia +  retinalExamination
 + ropStage + majorBirthDefect + firstBirthDefectCode + secondBirthDefectCode + thirdBirthDefectCode + fourthBirthDefectCode + fifthBirthDefectCode
 + birthDefectDescription + enteralfeeding + oxygenAtDischarge
 + conventionalVentilationAtDischarge + highFrequencyVentilationAtDischarge + highFlowNasalCannulaAtDischarge
 + nasalVentilationAtDischarge + nasalCpapAtDischarge + monitorAtDischarge + initialDisposition + weightAtInitialDisposition
 + headCircumferenceAtInitialDisposition + initialLengthOfStay + reasonForTransfer + newTransferCenterCode + postTransferDisposition
 + dispositionAfterReadmission + weightAtDispositionAfterReadmission + ultimateDisposition + totalLengthOfStay + durationOfAssistedVentilation
 + daysOfAssistedVentilation + ecmoAtHospital + hypothermicTherapy + coolingMethod + hypoxicIschemicEncephalopathy
 + hieSeverity + meconiumAspirationSyndrome + trachealSuctioningAttempted + seizures
 + "</row>\n</tblVtOxUd>";

document.getElementById("demo").innerHTML = xmlDocument;
console.log(xmlDocument);
return xmlDocument;
}



/*
<NEWRACE>3</NEWRACE>?? depricated?
"<XFER_OUT>"1"</XFER_OUT>";
"<ECMOWD>"7"</ECMOWD>";
"<NTRCOXT>"7"</NTRCOXT>";
"<NTRCOXWD>"7"</NTRCOXWD>";
"<CARSRGP>"7"</CARSRGP>";
"<CARSRGWD>"7"</CARSRGWD>";



*/
</script>

</body>
</html>
