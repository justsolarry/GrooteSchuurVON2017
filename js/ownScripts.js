function diedInDeliveryRoomCheck(){
    if (document.getElementById('diedInDeliveryRoomYes').checked) { //hiding the unnecessary fields
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
        
        var value1 = document.getElementById('birthWeightInGrams').value;
        if(value1 >=1501){ //if baby is not a VON baby and died, display error
            toastr.error("Baby is not eligible for the database")
        }
    }
    if (document.getElementById('diedInDeliveryRoomNo').checked) { //revealing the fields
        hideNotAVonBabyFields();
    }
}

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

function surfactantAtAnyTimeCheck(){
    var value1 = document.getElementById('hiddenFieldSurfactantAtAnyTime');
    if (document.getElementById('surfactantAtAnyTimeYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
    }
    if (document.getElementById('surfactantAtAnyTimeNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('surfactantAtAnyTimeUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
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
    var value1 = document.getElementById('hiddenFieldImmunizations652Date');
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
var counter = 1;
    var limit = 5;
/*Adding new surgery fields*/
function addNewSurgeryField(divName){
    /*$(document.getElementById('#hiddenFieldSurgery2')).slideUp("slow");*/

         if (counter == limit)  {
              alert("You have reached the limit of adding " + counter + " inputs");
         }
         else {
              var newdiv = document.createElement('div');
             // START inner HTML
              newdiv.innerHTML = "<div id='surgeryDiv"+(counter+1)+"' class='InnerInnerPanel inner-inner-panel-primary'><div class='inner-inner-panel-body'><div class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'>Surgery Code "+(counter+1)+" :</label><div class='fixingInputAlignmentInnerInner'><select id='surgeryCode"+(counter+1)+"' name=surgeryCode"+(counter+1)+" class='form-control' style='height:32px;max-width:120%;width:70%;'><option disabled selected value>--------HEAD & Neck--------</option><option value='S101'>S101 - Tracheostomy/Tracheotomy</option><option value='S103'>S103 - Ophthalmologic Surgery</option><option value='S107'>S107 - Palliative or Definitive Repair of Choanal Atresia</option><option value='S100'>S100 - Other head and neck surgery requiring general or spinal anesthesia</option><option disabled selected value>--------THORAX--------</option><option value='S203'>S203 - Tracheoesophageal Atresia and/or fistula repair</option><option value='S210'>S210 - Bronchoscopy (With or without biopsy)</option><option value='S200'>S200 - Other thoracic surgery requiring general or spinal anesthesia</option><option disabled selected value>--------ABDOMEN--------</option><option value='S301'>S301 - Rectal biopsy with or without anoscopy</option><option value='S303'>S303 - Laparotomy (diagnostic or exploratory, with/without biopsy)</option><option value='S304'>S304 - Fundoplication</option><option value='S307'>S307 - Jejunostomy, ileostomy, enterostomy, colostomy for intestinal diversion</option><option value='S308'>S308 - Small bowel resection with or without primary anastomosis</option><option value='S309'>S309 - Large bowel resection</option><option value='S310'>S310 - Duodenal atresia/stenosis/web repair</option><option value='S311'>S311 - Jejunal, ileal, or colonic atresia repair</option><option value='S312'>S312 - Excision of Meckel's diverticulum</option><option value='S313'>S313 - Drainage of intra-abdominal abscess</option><option value='S319'>S319 - Repair of imperforate anus</option><option value='S325'>S325 - Repair of diaphragmatic hernia</option><option value='S331'>S331 - Ladd's or other procedure for correction of malrotation</option><option value='S333'>S333 - Primary peritoneal drainage for NEC, suspected NEC or intestinal perforation</option><option value='S338'>S338 - Primary closure for gastroschisis</option><option value='S340'>S340 - Primary closure for omphalocele</option><option value='S300'>S300 - Other abdominal surgery requiring general or spinal anesthesia</option><option disabled selected value>--------GENITO-URINARY--------</option><option value='S410'>S410 - Inguinal hernia repair</option><option disabled selected value>--------OPEN HEART/VASCULAR PROCEDURES--------</option><option value='S502'>S502 - Repair of coarctation of the aorta</option><option value='S510'>S510 - Truncus arteriosus repair</option><option value='S511'>S511 - Arterial switch</option><option value='S514'>S514 - Pulmonary artery banding</option><option disabled selected value>--------CENTRAL NERVOUS SYSTEM--------</option><option value='S901'>S901 - Ventriculoperitoneal or other ventricular shunt</option><option value='S904'>S904 - Meningocele or myelomeningocele repair</option><option value='S905'>S905 - Encephalocele repair</option><option value='77'>N/A</option><option value='99'>Unknown</option></select></div></label></div></div><div class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'></label><div class='fixingInputAlignmentInnerInner'><span class='radioFloatLeftInner'><input class='radioType' id='surgeryCode"+(counter+1)+"YourHospital' type='radio' name = surgeryCode"+(counter+1)+" value='1'><label class='radioTextForHospitalResponse' for='surgeryCode"+(counter+1)+"YourHospital'>Your Hospital</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgeryCode"+(counter+1)+"OtherHospital' type='radio' name = surgeryCode"+(counter+1)+" value='2'><label class='radioTextForHospitalResponse' for='surgeryCode"+(counter+1)+"OtherHospital'>Other Hospital</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgeryCode"+(counter+1)+"Both' type='radio' name = surgeryCode"+(counter+1)+" value='3'><label class='radioTextForHospitalResponse' for='surgeryCode"+(counter+1)+"Both'>Both</label></span></div></div><div class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'>Surgical Site Infection "+(counter+1)+" :</label><div class='fixingInputAlignmentInnerInner'><span class='radioFloatLeftInner'><input class='radioType' id='surgicalInfection"+(counter+1)+"Yes' type='radio' name = surgicalInfection"+(counter+1)+" value='1'><label class='radioText' for='surgicalInfection"+(counter+1)+"Yes'>Yes</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgicalInfection"+(counter+1)+"No' type='radio' name = surgicalInfection"+(counter+1)+" value='0'><label class='radioText' for='surgicalInfection"+(counter+1)+"No'>No</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgicalInfection"+(counter+1)+"NA' type='radio' name = surgicalInfection1 value='7'><label class='radioText' for='surgicalInfection"+(counter+1)+"NA'>N/A</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgicalInfection"+(counter+1)+"Unknown' type='radio' name = surgicalInfection"+(counter+1)+" value='9'><label class='radioText' for='surgicalInfection"+(counter+1)+"Unknown'>Unknown</label></span></div></div></div>";
             // END inner HTML
              document.getElementById(divName).appendChild(newdiv);
              counter++;
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

function congenitalCode1FirstPartCheck(){
    var e = document.getElementById("congenitalCodeFirstPart1");
    var strUser = e.options[e.selectedIndex].value;
    var hiddenField = document.getElementById('hiddenFieldCongenitalCode1SecondPart');
    if (strUser==1 ){
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
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

function duplicateToImmunizationDate(){
    var d = $('#immunizations652Date').datepicker('getDate');
    $('#immunizationDate').datepicker('setDate', d);
    document.getElementById("immunizationDate").disabled = true;
    
}
function twinOrTripletCheck(){
    var value1 = document.getElementById('hiddenFieldTwinAB');
    var value2 = document.getElementById('hiddenFieldTripletABC');
    if (document.getElementById('twinOrTripletTwin').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
        $(value2).slideUp("slow");
        $(value2).removeClass('glowingHiddenFields')
    }
    if (document.getElementById('twinOrTripletTriplet').checked) {
        $(value2).slideDown("slow");
        $(value2).addClass('glowingHiddenFields')
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        
        
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
    
    
    $(window).scroll(function() {
        var all_answered_Search = true;
        var patientFormLocation = $("#PatientFormID").offset().top;
        var generalDataItemsFormLocation = $("#generalDataItemsID").offset().top;
        var transferFormLocation = $("#TransferFormID").offset().top;
        /* debugging */
        console.log($(window).scrollTop())
        console.log("patient: "+ patientFormLocation)
        console.log("general: "+generalDataItemsFormLocation)
        console.log("additional: "+transferFormLocation)
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
        if(generalDataItemsFormLocation==0){
            // START patient to additional
            if($(window).scrollTop() > patientFormLocation-100 && $(window).scrollTop() < transferFormLocation-100) { //scrolled past the patient form 1076
            
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
            /*Does it have either of the classes? If not, then its ORANGE */
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
            // START additional and beyond
            if($(window).scrollTop() > transferFormLocation-100) { //scrolled past the general data items form 2156
                if($('.patientFormProgressBar').hasClass('glowingButton')){
                    $('.patientFormProgressBar').removeClass('glowingButton');
                   }
                $('.dischargeAndTransferProgressBar').addClass('glowingButton');
                /* Toggling Buttons */
                $('#patientFormCircle').removeClass('glowingButton');
                $('#dischargeCircle').addClass('glowingButton');
        }
           }
        else if(generalDataItemsFormLocation>0){
            //START old checks
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
            /* Toggling different Color */
            /*Checking if the fields match green or red and change colours*/
            /*Does it have either of the classes? If not, then its blank*/
//            if(
//                (!$('#birthWeightInGrams').hasClass('addRed') && !$('#birthWeightInGrams').hasClass('addGreen')) ||
//                (!$('#mothersFirstName').hasClass('addRed') && !$('#mothersFirstName').hasClass('addGreen')) ||
//                (!$('#mothersLastName').hasClass('addRed') && !$('#mothersLastName').hasClass('addGreen')) ||
//                (!$('#patientsName').hasClass('addRed') && !$('#patientsName').hasClass('addGreen')) ||
//                (!$('#patientMedicalRecordNumber').hasClass('addRed') && !$('#patientMedicalRecordNumber').hasClass('addGreen')) ||
//                (!$('#dateOfBirth').hasClass('addRed') && !$('#dateOfBirth').hasClass('addGreen')) 
//                /*($('input:radio[name=outbornBirth]:checked').length==0)*/
//              ){
//                            $('#patientFormCircle').css('background-color', 'orange');
//               }
//            else if($('#birthWeightInGrams').hasClass('addGreen') &&
//                    $('#mothersFirstName').hasClass('addGreen') &&
//                    $('#mothersLastName').hasClass('addGreen') &&
//                    $('#patientsName').hasClass('addGreen') &&
//                    $('#patientMedicalRecordNumber').hasClass('addGreen') &&
//                    $('#dateOfBirth').hasClass('addGreen')
//                    /*$('input:radio[name=outbornBirth]:checked').length>0*/
//                   ){
//                            $('#patientFormCircle').css('background-color', 'green');
//            }
//            else{
//                            $('#patientFormCircle').css('background-color', 'red');
//            }
            
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
    $('#patientsName').change(); //changing values here don't trigger the onchange in HTML
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
/* START Date of Birth*/
$( function() {
    
    $( "#dateOfBirth" ).datepicker({
        showButtonPanel: true,
        numberOfMonths: 2,
        dateFormat: 'dd-mm-yy',
        maxDate: '0',
        minDate: '-18M'
        
    });   
  } );
/* END Date of Birth*/
/* START Date of Admission*/
$( function() {
    
    $( "#dateOfAdmission" ).datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: '0',
        minDate: '-18M'
        
    });   
  } );
/* END Date of Admission*/
/* START Date of Initial Disposition*/
$( function() {
    
    $( "#dateOfInitialDisposition" ).datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: '0',
        minDate: '-18M'
        
    });   
  } );
/* END Date of Initial Disposition*/
/* START Date of Appointment Date*/
$( function() {
    
    $( "#appointmentDate" ).datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: '+12M',
        minDate: '+1D'
        
    });   
  } );
/* END Date of Appointment Date*/
/* START Date of Immunization Date*/
$( function() {
    
    $( "#immunizationDate" ).datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: '+12M',
        minDate: '0'
        
    });   
  } );
/* END Date of Immunization Date*/
/* START Date of PCR Date*/
$( function() {
    
    $( "#PCRDate" ).datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: '+12M',
        minDate: '+1D'
        
    });   
  } );
/* END Date of PCR Date*/
/* START Date of ROP Date*/
$( function() {
    
    $( "#ROPDate" ).datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: '+12M',
        minDate: '+1D'
        
    });   
  } );
/* END Date of ROP Date*/
/* START Date of immunizations652Date*/
$( function() {
    
    $( "#immunizations652Date" ).datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: '0',
        minDate: '-12M'
        
    });   
  } );
/* END Date of immunizations652Date*/
/* START Date initial length of stay*/
$( function() {
    
    $( "#initialLengthOfStay" ).datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: '+18M',
        minDate: '0'/*,
        disabled:true*/
        
    });   
  } );
/* END Date initial length of stay*/
function adding28Days(){
    var arg = 28;
    var d = $('#dateOfBirth').datepicker('getDate');
    d.setDate(d.getDate() + arg);
    $('#day28Date').datepicker('setDate', d);
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
    if(days<42){
        var d = $('#sixWeeksOldDate').datepicker('getDate');
        $('#immunizationDate').datepicker('setDate', d);
        //disable the immunization date and not allow them to edit.
        document.getElementById("immunizationDate").disabled = true;
       }
    else{
        //let the user enter the immunization date
         $("#immunizationDate").val("");
        document.getElementById("immunizationDate").disabled = false;
    }
}
function making40dayDate(){
    /* Calculations to check if baby is less than 40 weeks old from current date*/
    var currentDate = new Date(); // current date
    var dob   = $('#dateOfBirth').datepicker('getDate'); //dob 
    var days   = (currentDate - dob)/1000/60/60/24; // number days old
    if(days>40){
        //show 6/52 date
        $('#hiddenFieldImmunizations652').slideDown('slow');
       }
    else{
        //hide6/52 date
        $('#hiddenFieldImmunizations652').slideUp('slow');
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
/*Date discharged home, died or first birthday date*/
$( function() {
    
    $( "#dateDischargedHomeDiedOrBirthday" ).datepicker({
      showButtonPanel: true,
    dateFormat: 'dd-mm-yy'
        
    });
  } );
/* END DATES*/