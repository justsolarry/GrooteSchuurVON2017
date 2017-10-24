function create2018Xml(babyData){
    
    var xmlDocument = createInfantCoreRecord(babyData) + createXmlForEachRecord2017(babyData);
    //document.getElementById("xmlContent").innerHTML += xmlDocument;

    return xmlDocument;
}
function createInfantCoreRecord(babyData){
    var hospitalNum = "1052";
    var hospitalNumber = "<HOSPNO>"+ hospitalNum +"</HOSPNO>\n"; 
    var patientFirstName = "<PATIENTFIRSTNAME>Baby</PATIENTFIRSTNAME>\n";
    var patientLastName = "<PATIENTLASTNAME>" + babyData.mothersLastName + "</PATIENTLASTNAME>\n";
    var mothersFirstName = "<MOTHERFIRSTNAME>" + babyData.mothersFirstName + "</MOTHERFIRSTNAME>\n";
    var mothersLastName = "<MOTHERLASTNAME>" + babyData.mothersLastName + "</MOTHERLASTNAME>\n";
    var medicalRecordNumber = "<MEDICALRECORDNUMBER>"+babyData.patientMedicalRecordNumber+"</MEDICALRECORDNUMBER>\n";
    var dateOfBirth = "<DOB>"+ formatDate(babyData.dateOfBirth) + "</DOB>\n";
    var dateOfAdmission = "<DOA>" + formatDate(babyData.dateOfBirth) + "</DOA>\n";
	if (babyData.outbornBirth == 0){
		dateOfAdmission = "<DOA>" + formatDate(babyData.dateOfAdmission) + "</DOA>\n";
	}
    var dateOfDischarge = "<DID>" + formatDate(babyData.dateOfInitialDisposition) + "</DID>\n";
    return "<tblInfantCore>\n" + hospitalNumber + patientFirstName + patientLastName 
        + mothersFirstName + mothersLastName + medicalRecordNumber + dateOfBirth
        + dateOfAdmission + "</tblInfantCore>\n";
}

function formatDate(date){
    console.log(date);
    date = new Date(date); // Format 2011-05-10T16:49:06.547125-04:00
    console.log("after: " + date);
    var fileDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() +"-02:00";
    return fileDate;
}

function createXmlForEachRecord(babyData){
    var birthYear = "<BYEAR>"+babyData.birthYear+"</BYEAR>\n";    
//    var deleteEntry = "<DELETED>0</DELETED>\n"; //(1 to delete record although only under rare circumstances)
    var birthWeightInGrams = (babyData.birthWeightInGrams != undefined) ? "<BWGT>"+babyData.birthWeightInGrams+"</BWGT>\n" : ""; // != undefined
    var gestationalAgeInWeeks = (babyData.gestationalAgeInWeeks != undefined) ? "<GAWEEKS>"+babyData.gestationalAgeInWeeks+"</GAWEEKS>\n" : "";
    var gestationalAgePlusDays = (babyData.gestationalAgePlusDays != undefined) ? "<GADAYS>"+babyData.gestationalAgePlusDays+"</GADAYS>\n" : "";

    var diedInDeliveryRoom = (babyData.diedInDeliveryRoom != undefined) ? "<DELDIE>"+babyData.diedInDeliveryRoom+"</DELDIE>\n"  : "";
    var outbornBirth = (babyData.outbornBirth != undefined) ? "<LOCATE>"+ babyData.outbornBirth +"</LOCATE>\n" : "";
    var dayOfAdmission = (babyData.dayOfAdmission != undefined) ? "<DAYADMISS>"+ babyData.dayOfAdmission +"</DAYADMISS>\n" : "";
    var transferCenterCode = (babyData.transferCenterCode != undefined) ? "<OUTB_CTR>"+ babyData.transferCenterCode + "</OUTB_CTR>\n" : "";
    var headCircumferenceAtBirth = (babyData.headCircumferenceAtBirth != undefined) ? "<BHEADCIR>"+ babyData.headCircumferenceAtBirth +"</BHEADCIR>\n" : "";
    var notHispanic = "<HISP>0</HISP>\n";
    var maternalRaceOfMother = (babyData.maternalRaceOfMother != undefined) ? (babyData.maternalRaceOfMother == 9) ? "<MATRACE>7</MATRACE>\n" : "<MATRACE>"+ babyData.maternalRaceOfMother +"</MATRACE>\n"  : "";
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
    var firstSurgerySiteInfection = (babyData.firstSurgerySiteInfection != undefined) ? "<SRGSSI1>"+babyData.firstSurgerySiteInfection +"</SRGSSI1>\n" : "";
    
    var secondSurgery = (babyData.secondSurgery != undefined) ? "<SRGCD2>"+babyData.secondSurgery+"</SRGCD2>\n" : "";
    var secondarySurgeryLocation = (babyData.secondarySurgeryLocation != undefined) ? "<SRGLOC2>"+babyData.secondarySurgeryLocation+"</SRGLOC2>\n" : "";
    var secondarySurgerySiteInfection = (babyData.secondarySurgerySiteInfection != undefined) ? "<SRGSSI2>"+babyData.secondarySurgerySiteInfection +"</SRGSSI2>\n" : "";
    
    var thirdSurgery = (babyData.thirdSurgery != undefined) ? "<SRGCD3>"+babyData.thirdSurgery+"</SRGCD3>\n" : "";
    var thirdSurgeryLocation = (babyData.thirdSurgeryLocation != undefined) ? "<SRGLOC3>"+babyData.thirdSurgeryLocation+"</SRGLOC3>\n" : "";
    var thirdSurgerySiteInfection = (babyData.thirdSurgerySiteInfection != undefined) ? "<SRGSSI3>"+babyData.thirdSurgerySiteInfection +"</SRGSSI3>\n" : "";
    
    var fourthSurgery = (babyData.fourthSurgery != undefined) ? "<SRGCD4>"+babyData.fourthSurgery+"</SRGCD4>\n" : "";
    var fourthSurgeryLocation = (babyData.fourthSurgeryLocation != undefined) ? "<SRGLOC4>"+babyData.fourthSurgeryLocation+"</SRGLOC4>\n" : "";
    var fourthSurgerySiteInfection = (babyData.fourthSurgerySiteInfection != undefined) ? "<SRGSSI4>"+babyData.fourthSurgerySiteInfection +"</SRGSSI4>\n" : "";
    
    var fifthSurgery = (babyData.fifthSurgery != undefined) ? "<SRGCD5>"+babyData.fifthSurgery+"</SRGCD5>\n" : "";
    var fifthSurgeryLocation = (babyData.fifthSurgeryLocation != undefined) ? "<SRGLOC5>"+babyData.fifthSurgeryLocation+"</SRGLOC5>\n" : "";
    var fifthSurgerySiteInfection = (babyData.fifthSurgerySiteInfection != undefined) ? "<SRGSSI5>"+babyData.fifthSurgerySiteInfection +"</SRGSSI5>\n" : "";
    
    var sixthSurgery = (babyData.sixthSurgery != undefined) ? "<SRGCD6>"+babyData.sixthSurgery+"</SRGCD6>\n" : "";
    var sixthSurgeryLocation = (babyData.sixthSurgeryLocation != undefined) ? "<SRGLOC6>"+babyData.sixthSurgeryLocation+"</SRGLOC6>\n" : "";
    var sixthSurgerySiteInfection = (babyData.sixthSurgerySiteInfection != undefined) ? "<SRGSSI6>"+babyData.sixthSurgerySiteInfection +"</SRGSSI6>\n" : "";
    
    var seventhSurgery = (babyData.seventhSurgery != undefined) ? "<SRGCD7>"+babyData.seventhSurgery+"</SRGCD7>\n" : "";
    var seventhSurgeryLocation = (babyData.seventhSurgeryLocation != undefined) ? "<SRGLOC7>"+babyData.seventhSurgeryLocation+"</SRGLOC7>\n" : "";
    var seventhSurgerySiteInfection = (babyData.seventhSurgerySiteInfection != undefined) ? "<SRGSSI7>"+babyData.seventhSurgerySiteInfection +"</SRGSSI7>\n" : "";
    
    var eighthSurgery = (babyData.eighthSurgery != undefined) ? "<SRGCD8>"+babyData.eighthSurgery+"</SRGCD8>\n" : "";
    var eighthSurgeryLocation = (babyData.eighthSurgeryLocation != undefined) ? "<SRGLOC8>"+babyData.eighthSurgeryLocation+"</SRGLOC8>\n" : "";
    var eighthSurgerySiteInfection = (babyData.eighthSurgerySiteInfection != undefined) ? "<SRGSSI8>"+babyData.eighthSurgerySiteInfection +"</SRGSSI8>\n" : "";
    
    var ninethSurgery = (babyData.ninethSurgery != undefined) ? "<SRGCD9>"+babyData.ninethSurgery+"</SRGCD9>\n" : "";
    var ninethSurgeryLocation = (babyData.ninethSurgeryLocation != undefined) ? "<SRGLOC9>"+babyData.ninethSurgeryLocation+"</SRGLOC9>\n" : "";
    var ninethSurgerySiteInfection = (babyData.ninethSurgerySiteInfection != undefined) ? "<SRGSSI9>"+babyData.ninethSurgerySiteInfection +"</SRGSSI9>\n" : "";
    
    var tenthSurgery = (babyData.tenthSurgery != undefined) ? "<SRGCD10>"+babyData.tenthSurgery+"</SRGCD10>\n" : "";
    var tenthSurgeryLocation = (babyData.tenthSurgeryLocation != undefined) ? "<SRGLOC10>"+babyData.tenthSurgeryLocation+"</SRGLOC10>\n" : "";
    var tenthSurgerySiteInfection = (babyData.tenthSurgerySiteInfection != undefined) ? "<SRGSSI10>"+babyData.tenthSurgerySiteInfection +"</SRGSSI10>\n" : "";

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
//    var weightAtDispositionAfterReadmission = (babyData.weightAtDispositionAfterReadmission != undefined) ? "<F3WGT>"+babyData.weightAtDispositionAfterReadmission+"</F3WGT>\n" : "";
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
    var medicalRecordNumber = "<MEDICALRECORDNUMBER>"+babyData.patientMedicalRecordNumber+"</MEDICALRECORDNUMBER>\n";  //required

    var xmlDocument = "<tblInfantVON>\n" + birthYear 
    + birthWeightInGrams + gestationalAgeInWeeks 
    + gestationalAgePlusDays + diedInDeliveryRoom 
    + outbornBirth + dayOfAdmission 
    + transferCenterCode + headCircumferenceAtBirth 
    + notHispanic + prenatalCare 
    + antenatalSteroids + antenatalMagnesiumSulfate
    + chorioamnionitis + maternalHypertension
    +  maternalDiabetes + modeOfDelivery 
    + sexOfInfant + multipleGestation 
    + numberOfBirthsDelivered + congenitalInfection
    + congenitalInfectionOrg1 + congenitalInfectionOrg1 
    + congenitalInfectionOrg2 + congenitalInfectionOrg3 
    + apgarScoresOneMin + apgarScoresFiveMin
    + LaryngealMaskAirway + oxygenDuringInitialResuscitation 
    + facemaskVentilation + endotrachealTubeVentilation 
    + epinephrine + cardiacCompression 
    + nasalVentilation + nasalCpap 
    + temperatureMeasuredAtAdmissionState + temperatureMeasuredAtAdmission 
    + bacterialSepsis + bacterialSepsisPathogen1 
    + bacterialSepsisPathogen2 + bacterialSepsisPathogen3
    + oxygenOnDay28 + cranialImagning 
    + periventricularHemorrhage + pihOccurance 
    + diedWithin12Hours + receivedOxygen 
    + conventionalVentilation + highFrequencyVentilation 
    + highFlowNasalCannula + nasalIMV
    + nasalCPAPafterResuscitation + nasalCPAPnoETT 
    + surfactant + surfactantAtAnyTime + ageAtSurfactantInHours 
    + ageAtSurfactantPlusMinutes + inhaledNitricOxide
    + inhaledNitricOxideWhereGiven + oxygenAt36Weeks 
    + ventilationAt36Weeks + highFrequencyVentilationAt36Weeks 
    + highFlowNasalCannulaAt36weeks + nasalIMVAt36Weeks 
    + nasalCpapAt36Weeks + steroidsForCLD 
    + steroidsForCLDWhereGiven + indomethacin 
    + ibuprofen + Acetaminophen 
    + probiotics + ropTreatmentWithVegfDrug
    + caffeine + vitaminA 
    + ropSurgery + ropSurgeryWhereDone 
    + pdaSurgery + necSurgery 
    + otherSurgery + firstSurgeryCode 
    + firstSurgeryLocation + firstSurgerySiteInfection
    + secondSurgery +  secondarySurgeryLocation 
    + secondarySurgerySiteInfection + thirdSurgery 
    + thirdSurgeryLocation + thirdSurgerySiteInfection 
    + fourthSurgery + fourthSurgeryLocation 
    + fourthSurgerySiteInfection + fifthSurgery 
    + fifthSurgeryLocation + fifthSurgerySiteInfection
    + sixthSurgery + sixthSurgeryLocation 
    + sixthSurgerySiteInfection + seventhSurgery 
    + seventhSurgeryLocation + seventhSurgerySiteInfection 
    + eighthSurgery + eighthSurgeryLocation 
    + eighthSurgerySiteInfection + ninethSurgery 
    + ninethSurgeryLocation + ninethSurgerySiteInfection 
    + tenthSurgery + tenthSurgeryLocation 
    + tenthSurgerySiteInfection + otherSurgeryDescription 
    + respiratoryDistressSyndrome + pneumothorax
    + pneumothoraxWhereOccured + patentDuctusArteriosus
    + necrotizingEnterocolitis + necrotizingEnterocolitisWhereOccured
    + focalIntestinalPerforation + focalIntestinalPerforationWhereOccured
    + bacterialPathogenAfterDay3 + bacterialPathogenAfterDay3WhereOccured
    + bacterialPathogenAfterDay3Pathogen1 + bacterialPathogenAfterDay3Pathogen2 
    + bacterialPathogenAfterDay3Pathogen3 + coagulaseNegativeStaphInfection
    + coagulaseNegativeStaphInfectionWhereOccured + fungalInfection 
    + fungalInfectionWhereOccured + cysticPeriventricularLeukomalacia 
    + retinalExamination + ropStage 
    + majorBirthDefect + firstBirthDefectCode 
    + secondBirthDefectCode + thirdBirthDefectCode 
    + fourthBirthDefectCode + fifthBirthDefectCode
    + birthDefectDescription + enteralfeeding 
    + oxygenAtDischarge + conventionalVentilationAtDischarge 
    + highFrequencyVentilationAtDischarge + highFlowNasalCannulaAtDischarge
    + nasalVentilationAtDischarge + nasalCpapAtDischarge 
    + monitorAtDischarge + initialDisposition 
    + weightAtInitialDisposition + headCircumferenceAtInitialDisposition 
    + initialLengthOfStay + reasonForTransfer 
    + newTransferCenterCode + postTransferDisposition
    + dispositionAfterReadmission + weightAtDispositionAfterReadmission 
    + ultimateDisposition + totalLengthOfStay 
    + durationOfAssistedVentilation + daysOfAssistedVentilation 
    + ecmoAtHospital + hypothermicTherapy 
    + coolingMethod + hypoxicIschemicEncephalopathy
    + hieSeverity + meconiumAspirationSyndrome 
    + trachealSuctioningAttempted + seizures 
    + medicalRecordNumber + "</tblInfantVON>\n";
        
    return xmlDocument;
}


function createXmlForEachRecord2017(babyData){
    var birthYear = "<BYEAR>"+babyData.birthYear+"</BYEAR>\n";    
//    var deleteEntry = "<DELETED>0</DELETED>\n"; //(1 to delete record although only under rare circumstances)
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

//    var congenitalInfection = (babyData.congenitalInfection != undefined) ? "<CONGENINF>"+ babyData.congenitalInfection +"</CONGENINF>\n" : "";
//    var congenitalInfectionOrg1 = (babyData.congenitalInfection != undefined) ? "<CONGENINFCD1>"+ babyData.congenitalInfectionOrg1 +"</CONGENINFCD1>\n" : "";
//    var congenitalInfectionOrg2 = (babyData.congenitalInfection != undefined) ? "<CONGENINFCD2>"+ babyData.congenitalInfectionOrg2 +"</CONGENINFCD2>\n" : "";
//    var congenitalInfectionOrg3 = (babyData.congenitalInfection != undefined) ? "<CONGENINFCD3>"+ babyData.congenitalInfectionOrg3 +"</CONGENINFCD3>\n" : "";

    var apgarScoresOneMin = (babyData.apgarScoresOneMin != undefined) ? "<AP1>"+ babyData.apgarScoresOneMin +"</AP1>\n" : "";
    var apgarScoresFiveMin = (babyData.apgarScoresFiveMin != undefined) ? "<AP5>"+ babyData.apgarScoresFiveMin +"</AP5>\n" : "";
    var oxygenDuringInitialResuscitation = (babyData.oxygenDuringInitialResuscitation != undefined) ? "<DROX>" + babyData.oxygenDuringInitialResuscitation+ "</DROX>\n" : "";
    var facemaskVentilation = (babyData.facemaskVentilation != undefined) ? "<DRBM>"+ babyData.facemaskVentilation +"</DRBM>\n" : "";
    var LaryngealMaskAirway = (babyData.LaryngealMaskAirway != undefined) ? "<DRLMA>"+ babyData.LaryngealMaskAirway +"</DRLMA>\n" : "";
    var endotrachealTubeVentilation = (babyData.endotrachealTubeVentilation != undefined) ? "<DRET>" + babyData.endotrachealTubeVentilation +"</DRET>\n": "";
    var epinephrine =(babyData.epinephrine != undefined) ? "<DREP>"+ babyData.epinephrine +"</DREP>\n": "";
    var cardiacCompression = (babyData.cardiacCompression != undefined) ?"<DRCC>"+ babyData.cardiacCompression +"</DRCC>\n": "";
//    var nasalVentilation = (babyData.nasalVentilation != undefined) ?"<DRNIMV>"+ babyData.nasalVentilation +"</DRNIMV>\n": "";

    var nasalCpap = (babyData.nasalCpap != undefined) ? "<DRCPAP>"+ babyData.nasalCpap +"</DRCPAP>\n" : "";
    var temperatureMeasuredAtAdmissionState = (babyData.temperatureMeasuredAtAdmissionState != undefined) ? "<ATEMPM>"+ babyData.temperatureMeasuredAtAdmissionState +"</ATEMPM>\n" :"";
    var temperatureMeasuredAtAdmission = (babyData.temperatureMeasuredAtAdmission != undefined) ? "<ATEMP>"+ babyData.temperatureMeasuredAtAdmission +"</ATEMP>\n": "";
    var bacterialSepsis = (babyData.bacterialSepsis != undefined) ? "<EBSEPS>"+ babyData.bacterialSepsis +"</EBSEPS>\n": "";
//    var bacterialSepsisPathogen1 = (babyData.bacterialSepsisPathogen1 != undefined) ? "<EBSEPSCD1>"+ babyData.bacterialSepsisPathogen1 +"</EBSEPSCD1>\n": "";
//    var bacterialSepsisPathogen2= (babyData.bacterialSepsisPathogen2 != undefined) ? "<EBSEPSCD2>"+ babyData.bacterialSepsisPathogen2 +"</EBSEPSCD2>\n": "";
//    var bacterialSepsisPathogen3 = (babyData.bacterialSepsisPathogen3 != undefined) ? "<EBSEPSCD3>"+ babyData.bacterialSepsisPathogen3 +"</EBSEPSCD3>\n": "";

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
//    var Acetaminophen = (babyData.Acetaminophen != undefined) ? "<ACETAMIN>"+babyData.Acetaminophen +"</ACETAMIN>\n" : "";
//    Acetaminophen
    var probiotics = (babyData.probiotics != undefined) ? "<PROBIOTICS>"+babyData.probiotics+"</PROBIOTICS>\n" : "";
    var ropTreatmentWithVegfDrug = (babyData.ropTreatmentWithVegfDrug != undefined) ? "<ROPANTIVEGF>"+ babyData.ropTreatmentWithVegfDrug +"</ROPANTIVEGF>\n" : "";
//    var caffeine = (babyData.caffeine != undefined) ? "<CAFFEINE>"+babyData.caffeine+"</CAFFEINE>\n" : "";
//    var vitaminA = (babyData.vitaminA != undefined) ? "<VITAMINA>"+babyData.vitaminA+"</VITAMINA>\n" : "";

    var ropSurgery = (babyData.ropSurgery != undefined) ? "<ROPSURG>"+ babyData.ropSurgery +"</ROPSURG>\n" : "";
    var ropSurgeryWhereDone = (babyData.ropSurgeryWhereDone != undefined) ? "<ROPSURGWD>"+babyData.ropSurgeryWhereDone+"</ROPSURGWD>\n" : "";


//    var pdaSurgery = (babyData.pdaSurgery != undefined) ? "<PDASURG>"+babyData.pdaSurgery+"</PDASURG>\n" : "";
    var pdaLigation = (babyData.pdaSurgery != undefined) ? "<SRGLIG>"+babyData.pdaSurgery+"</SRGLIG>\n" : "";
    //var pdaLigationWhereDone = (babyData.pdaLigationWhereDone != undefined) ? "<SRGLIGWD>"+babyData.pdaLigationWhereDone+"</SRGLIGWD>\n" : "";
    
    var necSurgery = (babyData.necSurgery != undefined) ? "<NECSURG>"+babyData.necSurgery+"</NECSURG>\n" : "";
    var otherSurgery = (babyData.otherSurgery != undefined) ? "<OSURG>"+babyData.otherSurgery+"</OSURG>\n" : "";
    
    var firstSurgeryCode = (babyData.firstSurgeryCode != undefined) ? "<SRGCD1>"+babyData.firstSurgeryCode+"</SRGCD1>\n" : "";
    var firstSurgeryLocation = (babyData.firstSurgeryLocation != undefined) ? "<SRGLOC1>"+babyData.firstSurgeryLocation+"</SRGLOC1>\n" : "";
   // var firstSurgerySiteInfection = (babyData.firstSurgerySiteInfection != undefined) ? "<SRGSSI1>"+babyData.firstSurgerySiteInfection +"</SRGSSI1>\n" : "";
    
    var secondSurgery = (babyData.secondSurgery != undefined) ? "<SRGCD2>"+babyData.secondSurgery+"</SRGCD2>\n" : "";
    var secondarySurgeryLocation = (babyData.secondarySurgeryLocation != undefined) ? "<SRGLOC2>"+babyData.secondarySurgeryLocation+"</SRGLOC2>\n" : "";
    //var secondarySurgerySiteInfection = (babyData.secondarySurgerySiteInfection != undefined) ? "<SRGSSI2>"+babyData.secondarySurgerySiteInfection +"</SRGSSI2>\n" : "";
    
    var thirdSurgery = (babyData.thirdSurgery != undefined) ? "<SRGCD3>"+babyData.thirdSurgery+"</SRGCD3>\n" : "";
    var thirdSurgeryLocation = (babyData.thirdSurgeryLocation != undefined) ? "<SRGLOC3>"+babyData.thirdSurgeryLocation+"</SRGLOC3>\n" : "";
    //var thirdSurgerySiteInfection = (babyData.thirdSurgerySiteInfection != undefined) ? "<SRGSSI3>"+babyData.thirdSurgerySiteInfection +"</SRGSSI3>\n" : "";
    
    var fourthSurgery = (babyData.fourthSurgery != undefined) ? "<SRGCD4>"+babyData.fourthSurgery+"</SRGCD4>\n" : "";
    var fourthSurgeryLocation = (babyData.fourthSurgeryLocation != undefined) ? "<SRGLOC4>"+babyData.fourthSurgeryLocation+"</SRGLOC4>\n" : "";
    //var fourthSurgerySiteInfection = (babyData.fourthSurgerySiteInfection != undefined) ? "<SRGSSI4>"+babyData.fourthSurgerySiteInfection +"</SRGSSI4>\n" : "";
    
    var fifthSurgery = (babyData.fifthSurgery != undefined) ? "<SRGCD5>"+babyData.fifthSurgery+"</SRGCD5>\n" : "";
    var fifthSurgeryLocation = (babyData.fifthSurgeryLocation != undefined) ? "<SRGLOC5>"+babyData.fifthSurgeryLocation+"</SRGLOC5>\n" : "";
    //var fifthSurgerySiteInfection = (babyData.fifthSurgerySiteInfection != undefined) ? "<SRGSSI5>"+babyData.fifthSurgerySiteInfection +"</SRGSSI5>\n" : "";
    
    var sixthSurgery = (babyData.sixthSurgery != undefined) ? "<SRGCD6>"+babyData.sixthSurgery+"</SRGCD6>\n" : "";
    var sixthSurgeryLocation = (babyData.sixthSurgeryLocation != undefined) ? "<SRGLOC6>"+babyData.sixthSurgeryLocation+"</SRGLOC6>\n" : "";
    //var sixthSurgerySiteInfection = (babyData.sixthSurgerySiteInfection != undefined) ? "<SRGSSI6>"+babyData.sixthSurgerySiteInfection +"</SRGSSI6>\n" : "";
    
    var seventhSurgery = (babyData.seventhSurgery != undefined) ? "<SRGCD7>"+babyData.seventhSurgery+"</SRGCD7>\n" : "";
    var seventhSurgeryLocation = (babyData.seventhSurgeryLocation != undefined) ? "<SRGLOC7>"+babyData.seventhSurgeryLocation+"</SRGLOC7>\n" : "";
    //var seventhSurgerySiteInfection = (babyData.seventhSurgerySiteInfection != undefined) ? "<SRGSSI7>"+babyData.seventhSurgerySiteInfection +"</SRGSSI7>\n" : "";
    
    var eighthSurgery = (babyData.eighthSurgery != undefined) ? "<SRGCD8>"+babyData.eighthSurgery+"</SRGCD8>\n" : "";
    var eighthSurgeryLocation = (babyData.eighthSurgeryLocation != undefined) ? "<SRGLOC8>"+babyData.eighthSurgeryLocation+"</SRGLOC8>\n" : "";
    //var eighthSurgerySiteInfection = (babyData.eighthSurgerySiteInfection != undefined) ? "<SRGSSI8>"+babyData.eighthSurgerySiteInfection +"</SRGSSI8>\n" : "";
    
    var ninethSurgery = (babyData.ninethSurgery != undefined) ? "<SRGCD9>"+babyData.ninethSurgery+"</SRGCD9>\n" : "";
    var ninethSurgeryLocation = (babyData.ninethSurgeryLocation != undefined) ? "<SRGLOC9>"+babyData.ninethSurgeryLocation+"</SRGLOC9>\n" : "";
    //var ninethSurgerySiteInfection = (babyData.ninethSurgerySiteInfection != undefined) ? "<SRGSSI9>"+babyData.ninethSurgerySiteInfection +"</SRGSSI9>\n" : "";
    
    var tenthSurgery = (babyData.tenthSurgery != undefined) ? "<SRGCD10>"+babyData.tenthSurgery+"</SRGCD10>\n" : "";
    var tenthSurgeryLocation = (babyData.tenthSurgeryLocation != undefined) ? "<SRGLOC10>"+babyData.tenthSurgeryLocation+"</SRGLOC10>\n" : "";
    //var tenthSurgerySiteInfection = (babyData.tenthSurgerySiteInfection != undefined) ? "<SRGSSI10>"+babyData.tenthSurgerySiteInfection +"</SRGSSI10>\n" : "";

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
    //var bacterialPathogenAfterDay3Pathogen1 = (babyData.bacterialPathogenAfterDay3Pathogen1 != undefined) ? "<LBPATHCD1>"+babyData.bacterialPathogenAfterDay3Pathogen1+"</LBPATHCD1>\n" : "";
    //var bacterialPathogenAfterDay3Pathogen2 = (babyData.bacterialPathogenAfterDay3Pathogen2 != undefined) ? "<LBPATHCD2>"+babyData.bacterialPathogenAfterDay3Pathogen2+"</LBPATHCD2>\n" : "";
    //var bacterialPathogenAfterDay3Pathogen3 = (babyData.bacterialPathogenAfterDay3Pathogen3 != undefined) ? "<LBPATHCD3>"+babyData.bacterialPathogenAfterDay3Pathogen3+"</LBPATHCD3>\n" : "";

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

//    var conventionalVentilationAtDischarge  = (babyData.conventionalVentilationAtDischarge != undefined) ? "<VENTFINAL>"+babyData.conventionalVentilationAtDischarge+"</VENTFINAL>\n" : "";
//    var highFrequencyVentilationAtDischarge = (babyData.highFrequencyVentilationAtDischarge != undefined) ? "<HFVFINAL>"+babyData.highFrequencyVentilationAtDischarge+"</HFVFINAL>\n" : "";
//    var highFlowNasalCannulaAtDischarge = (babyData.highFlowNasalCannulaAtDischarge != undefined) ? "<HFNCFINAL>"+babyData.highFlowNasalCannulaAtDischarge +"</HFNCFINAL>\n" : "";
//    var nasalVentilationAtDischarge = (babyData.nasalVentilationAtDischarge != undefined) ? "<NIMVFINAL>"+babyData.nasalVentilationAtDischarge+"</NIMVFINAL>\n" : "";
//    var nasalCpapAtDischarge = (babyData.nasalCpapAtDischarge != undefined) ? "<CPAPFINAL>"+babyData.nasalCpapAtDischarge +"</CPAPFINAL>\n" : "";

    var monitorAtDischarge = (babyData.monitorAtDischarge != undefined) ? "<ACFINAL>"+babyData.monitorAtDischarge+"</ACFINAL>\n" : "";
    var initialDisposition = (babyData.initialDisposition != undefined) ? "<FDISP>"+babyData.initialDisposition+"</FDISP>\n" : "";
    var weightAtInitialDisposition = (babyData.weightAtInitialDisposition != undefined) ? "<DWGT>"+babyData.weightAtInitialDisposition+"</DWGT>\n" : "";
    var headCircumferenceAtInitialDisposition = (babyData.headCircumferenceAtInitialDisposition != undefined) ? "<DHEADCIR>"+babyData.headCircumferenceAtInitialDisposition+"</DHEADCIR>\n" : "";
    var initialLengthOfStay = (babyData.initialLengthOfStay != undefined) ? "<LOS1>"+babyData.initialLengthOfStay+"</LOS1>\n" : "";

    var reasonForTransfer = (babyData.reasonForTransfer != undefined) ? "<TRANSCODE>"+babyData.reasonForTransfer+"</TRANSCODE>\n" : "";
    var newTransferCenterCode = (babyData.newTransferCenterCode != undefined) ? "<XFER_CTR>"+babyData.newTransferCenterCode+"</XFER_CTR>\n" : "";
    var postTransferDisposition = (babyData.postTransferDisposition != undefined) ? "<F2DISP>"+babyData.postTransferDisposition+"</F2DISP>\n" : "";
    var dispositionAfterReadmission = (babyData.dispositionAfterReadmission != undefined) ? "<F3DISP>"+babyData.dispositionAfterReadmission+"</F3DISP>\n" : "";
//    var weightAtDispositionAfterReadmission = (babyData.weightAtDispositionAfterReadmission != undefined) ? "<F3WGT>"+babyData.weightAtDispositionAfterReadmission+"</F3WGT>\n" : "";
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
    var medicalRecordNumber = "<MEDICALRECORDNUMBER>"+babyData.patientMedicalRecordNumber+"</MEDICALRECORDNUMBER>\n";  //required

    var xmlDocument = "<tblInfantVON>\n" + birthYear 
    + birthWeightInGrams + gestationalAgeInWeeks 
    + gestationalAgePlusDays + diedInDeliveryRoom 
    + outbornBirth + dayOfAdmission 
    + transferCenterCode + headCircumferenceAtBirth 
    + notHispanic + prenatalCare 
    + antenatalSteroids + antenatalMagnesiumSulfate
    + chorioamnionitis + maternalHypertension
    +  maternalDiabetes + modeOfDelivery 
    + sexOfInfant + multipleGestation 
    + numberOfBirthsDelivered 
    + apgarScoresOneMin + apgarScoresFiveMin
    + LaryngealMaskAirway + oxygenDuringInitialResuscitation 
    + facemaskVentilation + endotrachealTubeVentilation 
    + epinephrine + cardiacCompression 
	+ nasalCpap 
    + temperatureMeasuredAtAdmissionState + temperatureMeasuredAtAdmission 
    + bacterialSepsis
    + oxygenOnDay28 + cranialImagning 
    + periventricularHemorrhage + pihOccurance 
    + diedWithin12Hours + receivedOxygen 
    + conventionalVentilation + highFrequencyVentilation 
    + highFlowNasalCannula + nasalIMV
    + nasalCPAPafterResuscitation + nasalCPAPnoETT 
    + surfactant + surfactantAtAnyTime + ageAtSurfactantInHours 
    + ageAtSurfactantPlusMinutes + inhaledNitricOxide
    + inhaledNitricOxideWhereGiven + oxygenAt36Weeks 
    + ventilationAt36Weeks + highFrequencyVentilationAt36Weeks 
    + highFlowNasalCannulaAt36weeks + nasalIMVAt36Weeks 
    + nasalCpapAt36Weeks + steroidsForCLD 
    + steroidsForCLDWhereGiven + indomethacin 
    + ibuprofen 
    + probiotics + ropTreatmentWithVegfDrug 
    + ropSurgery + ropSurgeryWhereDone 
    + pdaLigation + necSurgery 
    + otherSurgery + firstSurgeryCode 
    + firstSurgeryLocation 
    + secondSurgery +  secondarySurgeryLocation 
    + thirdSurgery 
    + thirdSurgeryLocation  
    + fourthSurgery + fourthSurgeryLocation 
    + fifthSurgery 
    + fifthSurgeryLocation 
    + sixthSurgery + sixthSurgeryLocation 
    + seventhSurgery 
    + seventhSurgeryLocation 
    + eighthSurgery + eighthSurgeryLocation 
    + ninethSurgery 
    + ninethSurgeryLocation 
    + tenthSurgery + tenthSurgeryLocation 
    + otherSurgeryDescription 
    + respiratoryDistressSyndrome + pneumothorax
    + pneumothoraxWhereOccured + patentDuctusArteriosus
    + necrotizingEnterocolitis + necrotizingEnterocolitisWhereOccured
    + focalIntestinalPerforation + focalIntestinalPerforationWhereOccured
    + bacterialPathogenAfterDay3 + bacterialPathogenAfterDay3WhereOccured
    + coagulaseNegativeStaphInfection
    + coagulaseNegativeStaphInfectionWhereOccured + fungalInfection 
    + fungalInfectionWhereOccured + cysticPeriventricularLeukomalacia 
    + retinalExamination + ropStage 
    + majorBirthDefect + firstBirthDefectCode 
    + secondBirthDefectCode + thirdBirthDefectCode 
    + fourthBirthDefectCode + fifthBirthDefectCode
    + birthDefectDescription + enteralfeeding 
    + oxygenAtDischarge 
    + monitorAtDischarge + initialDisposition 
    + weightAtInitialDisposition + headCircumferenceAtInitialDisposition 
    + initialLengthOfStay + reasonForTransfer 
    + newTransferCenterCode + postTransferDisposition
    + dispositionAfterReadmission 
    + ultimateDisposition + totalLengthOfStay 
    + durationOfAssistedVentilation + daysOfAssistedVentilation 
    + ecmoAtHospital + hypothermicTherapy 
    + coolingMethod + hypoxicIschemicEncephalopathy
    + hieSeverity + meconiumAspirationSyndrome 
    + trachealSuctioningAttempted + seizures 
    + medicalRecordNumber + "</tblInfantVON>\n";
        
    return xmlDocument;
}
