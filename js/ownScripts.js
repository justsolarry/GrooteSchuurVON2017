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
        $(".day28DateDiv").slideUp("slow");
        
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
        $('#testingID').removeClass('hide')
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
function endotrachealTubeVentCheck(){
    if (document.getElementById('endotrachealTubeVentYes').checked) {
        $('#nasalCPAPOrNasalVentAfterInitialNo').attr("checked",true);
        $('#nasalCPAPOrNasalVentAfterInitialNo').change();
    }
}
function successToastr(){
    toastr.success("Form is complete!")
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
    var value2 = document.getElementById('addNewBacterialFieldDiv');
    if (document.getElementById('bacterialSepsisBeforeYes').checked) {
        $(value1).slideDown("slow");
        $(value1).addClass('glowingHiddenFields')
        $(value2).slideDown("slow");
    }
    if (document.getElementById('bacterialSepsisBeforeNo').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $(value2).slideUp("slow");
    }
    if (document.getElementById('bacterialSepsisBeforeNA').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $(value2).slideUp("slow");
    }
    if (document.getElementById('bacterialSepsisBeforeUnknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $(value2).slideUp("slow");
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
    }
    if (document.getElementById('immunizations652No').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#immunizations652Date').datepicker('setDate', null);
        //if no is selected - set the immunization date to 6 weeks from the date of birth.
        
        /* Calculations to check if baby is less than 6 weeks old from current date*/
        /*var currentDate = new Date(); // current date
        var sixWeeksOldDate   = $('#sixWeeksOldDate').datepicker('getDate'); //dob 
        var days   = (sixWeeksOldDate - currentDate)/1000/60/60/24; // number days old
        alert(days)*/
        /*if(days>=0){
            
            toastr.error("Immunization date - Not Valid")
            $('#immunizationDate').datepicker('setDate', null);
           }
        else{*/
            toastr.success("Immunization date - setting it")
            var arg = 43;
            var d = $('#dateOfBirth').datepicker('getDate');
            d.setDate(d.getDate() + arg);
            $('#immunizationDate').datepicker('setDate', d);
//        }
    }
    if (document.getElementById('immunizations652Unknown').checked) {
        $(value1).slideUp("slow");
        $(value1).removeClass('glowingHiddenFields')
        $('#immunizations652Date').datepicker('setDate', null);
        $('#immunizationDate').datepicker('setDate', null);
    }
}
var counterForSurgeryCode = 1;
var limitForSurgeryCode = 5;
/*Adding new surgery fields*/
function addNewSurgeryField(divName){
         if (counterForSurgeryCode == limitForSurgeryCode)  {
              alert("You have reached the limit of adding " + counterForSurgeryCode + " inputs");
         }
         else {
              var newdiv = document.createElement('div');
             // START inner HTML
              newdiv.innerHTML = "<div id='surgeryDiv"+(counterForSurgeryCode+1)+"' class='InnerInnerPanel inner-inner-panel-primary'><div class='inner-inner-panel-body'><div class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'>Surgery Code "+(counterForSurgeryCode+1)+" :</label><div class='fixingInputAlignmentInnerInner'><select id='surgeryCode"+(counterForSurgeryCode+1)+"' name=surgeryCode"+(counterForSurgeryCode+1)+" class='form-control' style='height:32px;max-width:120%;width:70%;'><option disabled selected value>SELECT</option><option disabled  value>--------HEAD & Neck--------</option><option value='S101'>S101 - Tracheostomy/Tracheotomy</option><option value='S103'>S103 - Ophthalmologic Surgery</option><option value='S107'>S107 - Palliative or Definitive Repair of Choanal Atresia</option><option value='S100'>S100 - Other head and neck surgery requiring general or spinal anesthesia</option><option disabled  value>--------THORAX--------</option><option value='S203'>S203 - Tracheoesophageal Atresia and/or fistula repair</option><option value='S210'>S210 - Bronchoscopy (With or without biopsy)</option><option value='S200'>S200 - Other thoracic surgery requiring general or spinal anesthesia</option><option disabled  value>--------ABDOMEN--------</option><option value='S301'>S301 - Rectal biopsy with or without anoscopy</option><option value='S303'>S303 - Laparotomy (diagnostic or exploratory, with/without biopsy)</option><option value='S304'>S304 - Fundoplication</option><option value='S307'>S307 - Jejunostomy, ileostomy, enterostomy, colostomy for intestinal diversion</option><option value='S308'>S308 - Small bowel resection with or without primary anastomosis</option><option value='S309'>S309 - Large bowel resection</option><option value='S310'>S310 - Duodenal atresia/stenosis/web repair</option><option value='S311'>S311 - Jejunal, ileal, or colonic atresia repair</option><option value='S312'>S312 - Excision of Meckel's diverticulum</option><option value='S313'>S313 - Drainage of intra-abdominal abscess</option><option value='S319'>S319 - Repair of imperforate anus</option><option value='S325'>S325 - Repair of diaphragmatic hernia</option><option value='S331'>S331 - Ladd's or other procedure for correction of malrotation</option><option value='S333'>S333 - Primary peritoneal drainage for NEC, suspected NEC or intestinal perforation</option><option value='S338'>S338 - Primary closure for gastroschisis</option><option value='S340'>S340 - Primary closure for omphalocele</option><option value='S300'>S300 - Other abdominal surgery requiring general or spinal anesthesia</option><option disabled  value>--------GENITO-URINARY--------</option><option value='S410'>S410 - Inguinal hernia repair</option><option disabled  value>--------OPEN HEART/VASCULAR PROCEDURES--------</option><option value='S502'>S502 - Repair of coarctation of the aorta</option><option value='S510'>S510 - Truncus arteriosus repair</option><option value='S511'>S511 - Arterial switch</option><option value='S514'>S514 - Pulmonary artery banding</option><option disabled  value>--------CENTRAL NERVOUS SYSTEM--------</option><option value='S901'>S901 - Ventriculoperitoneal or other ventricular shunt</option><option value='S904'>S904 - Meningocele or myelomeningocele repair</option><option value='S905'>S905 - Encephalocele repair</option><option value='77'>N/A</option><option value='99'>Unknown</option></select></div></div><div class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'></label><div class='fixingInputAlignmentInnerInner'><span class='radioFloatLeftInner'><input class='radioType' id='surgeryCode"+(counterForSurgeryCode+1)+"YourHospital' type='radio' name = surgeryCode"+(counterForSurgeryCode+1)+" value='1'><label class='radioTextForHospitalResponse' for='surgeryCode"+(counterForSurgeryCode+1)+"YourHospital'>Your Hospital</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgeryCode"+(counterForSurgeryCode+1)+"OtherHospital' type='radio' name = surgeryCode"+(counterForSurgeryCode+1)+" value='2'><label class='radioTextForHospitalResponse' for='surgeryCode"+(counterForSurgeryCode+1)+"OtherHospital'>Other Hospital</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgeryCode"+(counterForSurgeryCode+1)+"Both' type='radio' name = surgeryCode"+(counterForSurgeryCode+1)+" value='3'><label class='radioTextForHospitalResponse' for='surgeryCode"+(counterForSurgeryCode+1)+"Both'>Both</label></span></div></div><div class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'>Surgical Site Infection "+(counterForSurgeryCode+1)+" :</label><div class='fixingInputAlignmentInnerInner'><span class='radioFloatLeftInner'><input class='radioType' id='surgicalInfection"+(counterForSurgeryCode+1)+"Yes' type='radio' name = surgicalInfection"+(counterForSurgeryCode+1)+" value='1'><label class='radioText' for='surgicalInfection"+(counterForSurgeryCode+1)+"Yes'>Yes</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgicalInfection"+(counterForSurgeryCode+1)+"No' type='radio' name = surgicalInfection"+(counterForSurgeryCode+1)+" value='0'><label class='radioText' for='surgicalInfection"+(counterForSurgeryCode+1)+"No'>No</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgicalInfection"+(counterForSurgeryCode+1)+"NA' type='radio' name = surgicalInfection1 value='7'><label class='radioText' for='surgicalInfection"+(counterForSurgeryCode+1)+"NA'>N/A</label></span><span class='radioFloatLeftInner'><input class='radioType' id='surgicalInfection"+(counterForSurgeryCode+1)+"Unknown' type='radio' name = surgicalInfection"+(counterForSurgeryCode+1)+" value='9'><label class='radioText' for='surgicalInfection"+(counterForSurgeryCode+1)+"Unknown'>Unknown</label></span></div></div></div>";
             // END inner HTML
              document.getElementById(divName).appendChild(newdiv);
              counterForSurgeryCode++;
         }
    
}

var counterForBacterialFieldBefore = 1;
var limitForBacterialFieldBefore = 3;
/*Adding new surgery fields*/
function addNewBacterialFieldBefore(divName){
    /*$(document.getElementById('#hiddenFieldSurgery2')).slideUp("slow");*/

         if (counterForBacterialFieldBefore == limitForBacterialFieldBefore)  {
              alert("You have reached the limit of adding " + counterForBacterialFieldBefore + " inputs");
         }
         else {
              var newdiv = document.createElement('div');
             // START inner HTML
              newdiv.innerHTML = "<div id='bacterialBeforeDiv"+(counterForBacterialFieldBefore+1)+"' class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'>Bacterial Pathogen Codes "+(counterForBacterialFieldBefore+1)+" :</label><div class='fixingInputAlignmentInnerInner'><select id='pathogenCodeBefore"+(counterForBacterialFieldBefore+1)+"' name='pathogenCodeBefore"+(counterForBacterialFieldBefore+1)+"' class='form-control' style='height:32px;width:70%;'><option disabled selected value=''>SELECT</option><option value='102'>102 - Acinetobacter species</option><option value='201'>201 - Bacteroides species</option><option value='501'>501 - Enterobacter species</option><option value='502'>502 - Enterococcus species</option><option value='503'>503 - Escherichia coli</option><option value='801'>801 - Haemophilus species</option><option value='1101'>1101 - Klebsiella species</option><option value='1201'>1201 - Listeria monocytogenes</option><option value='1301'>1301 - Moraxella species</option><option value='1401'>1401 - Neisseria species</option><option value='1604'>1604 - Proteus species</option><option value='1606'>1606 - Pseudomonas species</option><option value='1902'>1902 - Serratia species</option><option value='1903'>1903 - Staphylococcus coagulase positive</option><option value='1904'>1904 - Stenotrophomonas maltophilia</option><option value='1905'>1905 - Group B Streptococcus or GBS</option><option value='1906'>1906 - Streptococcus anginosus</option><option value='1907'>1907 - Streptococcus pneumoniae</option><option value='1908'>1908 - Streptococcus pyogenes</option><option value='7777'>N/A</option><option value='9999'>Unknown</option></select></div></div>";
             // END inner HTML
              document.getElementById(divName).appendChild(newdiv);
              counterForBacterialFieldBefore++;
         }
    
}

var counterForBacterialFieldAfter = 1;
var limitForBacterialFieldAfter = 3;
/*Adding new surgery fields*/
function addNewBacterialFieldAfter(divName){
    /*$(document.getElementById('#hiddenFieldSurgery2')).slideUp("slow");*/

         if (counterForBacterialFieldAfter == limitForBacterialFieldAfter)  {
              alert("You have reached the limit of adding " + counterForBacterialFieldAfter + " inputs");
         }
         else {
              var newdiv = document.createElement('div');
             // START inner HTML
              newdiv.innerHTML = "<div id='bacterialAfterDiv"+(counterForBacterialFieldAfter+1)+"' class='form-group input-group'><label class='fixingLabelAlignmentInner'>Bacterial Pathogen Codes "+(counterForBacterialFieldAfter+1)+" :</label><div class='fixingInputAlignmentInner'><select id='pathogenCodeAfter"+(counterForBacterialFieldAfter+1)+"' name='pathogenCodeAfter"+(counterForBacterialFieldAfter+1)+"' class='form-control' style='height:32px;width:70%;'><option disabled selected value=''>SELECT</option><option value='102'>102 - Acinetobacter species</option><option value='201'>201 - Bacteroides species</option><option value='501'>501 - Enterobacter species</option><option value='502'>502 - Enterococcus species</option><option value='503'>503 - Escherichia coli</option><option value='801'>801 - Haemophilus species</option><option value='1101'>1101 - Klebsiella species</option><option value='1201'>1201 - Listeria monocytogenes</option><option value='1301'>1301 - Moraxella species</option><option value='1401'>1401 - Neisseria species</option><option value='1604'>1604 - Proteus species</option><option value='1606'>1606 - Pseudomonas species</option><option value='1902'>1902 - Serratia species</option><option value='1903'>1903 - Staphylococcus coagulase positive [aureus]</option><option value='1904'>1904 - Stenotrophomonas maltophilia</option><option value='1905'>1905 - Group B Streptococcus or GBS</option><option value='1906'>1906 - Streptococcus anginosus</option><option value='1907'>1907 - Streptococcus pneumoniae</option><option value='1908'>1908 - Streptococcus pyogenes</option><option value='7777'>N/A</option><option value='9999'>Unknown</option></select></div></div>";
             // END inner HTML
              document.getElementById(divName).appendChild(newdiv);
              counterForBacterialFieldAfter++;
         }
    
}

var counterForCongenitalCode = 1;
var limitForCongenitalCode = 3;
/*Adding new surgery fields*/
function addNewCongenitalCode(divName){
    /*$(document.getElementById('#hiddenFieldSurgery2')).slideUp("slow");*/

         if (counterForCongenitalCode == limitForCongenitalCode)  {
              alert("You have reached the limit of adding " + counterForCongenitalCode + " inputs");
         }
         else {
              var newdiv = document.createElement('div');
             // START inner HTML
              newdiv.innerHTML = "<div id='congenitalCodeDiv"+(counterForCongenitalCode+1)+"' class='form-group input-group'><label class='fixingLabelAlignmentInner'>Congenital Infection code "+(counterForCongenitalCode+1)+" :</label><div class='fixingInputAlignmentInner'><select id='congenitalCode"+(counterForCongenitalCode+1)+"' name='congenitalCode"+(counterForCongenitalCode+1)+"' class='form-control' style='height:32px;width:70%;'><option disabled selected value>SELECT</option><option value='101'>101 - Toxoplasmosis (Toxoplasma gondii)</option><option value='102'>102 - Rubella virus</option><option value='103'>103 - Syphilis (Treponema pallidum)</option><option value='104'>104 - Cytomegalovirus</option><option value='105'>105 - Herpessimplex</option><option value='106'>106 - Parvovirus B19</option><option value='107'>107 - Zika virus</option><option value='108'>108 - Varicella zoster virus</option><option value='7777'>N/A</option><option value='9999'>Unknown</option></select></div></div>";
             // END inner HTML
              document.getElementById(divName).appendChild(newdiv);
              counterForCongenitalCode++;
         }
    
}


var counterForBirthDefect = 1;
var limitForBirthDefect = 5;
/*Adding new surgery fields*/
function addNewBirthDefect(divName){
    /*$(document.getElementById('#hiddenFieldSurgery2')).slideUp("slow");*/

         if (counterForBirthDefect == limitForBirthDefect)  {
              alert("You have reached the limit of adding " + counterForBirthDefect + " inputs");
         }
         else {
              var newdiv = document.createElement('div');
             // START inner HTML
              newdiv.innerHTML = "<div id='birthDefectCodeDiv"+(counterForBirthDefect+1)+"' class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'>Birth Defect code "+(counterForBirthDefect+1)+" :</label><div class='fixingInputAlignmentInnerInner'><select id='birthDefectCodeDiv"+(counterForBirthDefect+1)+"' name='birthDefectCodeDiv"+(counterForBirthDefect+1)+"' class='form-control' style='height:32px;width:70%;'><option disabled selected value>SELECT</option><option disabled value>-----Central Nervous System Anomalies-----</option><option value='101'>101 - Anencephaly</option><option value='102'>102 - Meningomyelocele</option><option value='103'>103 - Hydranencephaly</option><option value='104'>104 - Congenital Hydrocephalus</option><option value='105'>105 - Holoprosencephaly</option><option value='106'>106 - Encephalocele</option><option value='901'>901 - Other lethal or life threatening</option><option disabled value>-----Congenital Heart Anomalies-----</option><option value='201'>201 - TruncusArteriosus</option><option value='202'>202 - TranspositionoftheGreatVessels</option><option value='203'>203 - Tetralogy of Fallot with or without Pulmonary Atresia</option><option value='204'>204 - Single Ventricle</option><option value='205'>205 - Double Outlet Right Ventricle</option><option value='206'>206 - Complete Atrio-Ventricular Canal</option><option value='207'>207 - Pulmonary Atresia with Intact Ventricular Septum</option><option value='208'>208 - Tricuspid Atresia</option><option value='209'>209 - Hypoplastic Left Heart Syndrome</option><option value='210'>210 - Interrupted Aortic Arch</option><option value='211'>211 - Total Anomalous Pulmonary Venous Return</option><option value='212'>212 - Pentalogy of Cantrell</option><option value='213'>213 - Coarctation of the Aorta</option><option value='214'>214 - Atrial Septal Defect</option><option value='215'>215 - Ventricular Septal Defect</option><option value='216'>216 - Arrythmia</option><option value='217'>217 - Ebstein’s Anomaly</option><option value='218'>218 - Pulmonary Valvular Stenosis</option><option value='902'>902 - Other lethal or life threatening</option><option disabled value>-----Gastro-Intestinal Anomalies-----</option><option value='301'>301 - Cleft Palate</option><option value='302'>302 - Tracheo-EsophagealFistula</option><option value='303'>303 - Esophageal Atresia</option><option value='304'>304 - Duodenal Atresia</option><option value='305'>305 - Jejunal Atresia</option><option value='306'>306 - IlealAtresia</option><option value='307'>307 - Atresia of Large Bowel or Rectum</option><option value='308'>308 - ImperforateAnus</option><option value='309'>309 - Omphalocele</option><option value='310'>310 - Gastroschisis</option><option value='311'>311 - Biliary Atresia</option><option value='312'>312 - Malrotation</option><option value='313'>313 - Hirschsprung’s Disease</option><option value='314'>314 - Sacrococcygeal teratoma</option><option value='903'>903 - Other lethal or life threatening</option><option disabled value>-----Genito-Urinary Anomalies-----</option><option value='401'>401 - Bilateral Renal Agenesis</option><option value='402'>402 - Bilateral Polycystic, Multicystic, or Dysplastic Kidneys</option><option value='403'>403 - Obstructive Uropathy with Congenital Hydronephrosis</option><option value='404'>404 - Exstrophy of the Urinary Bladder</option><option value='904'>904 - Other lethal or life threatening</option><option disabled value>-----Chromosomal Anomalies-----</option><option value='501'>501 - Trisomy 13</option><option value='502'>502 - Trisomy 18</option><option value='503'>503 - Trisomy 21</option><option value='504'>504 - Other chromosomal anomaly</option><option value='505'>505 - Triploidy</option><option disabled value>-----Other Congenital Anomalies-----</option><option value='601'>601 - Skeletal Dysplasia</option><option value='602'>602 - Congenital Diaphragmatic Hernia</option><option value='603'>603 - Hydrops Fetalis with anasarca</option><option value='604'>604 - Oligohydramnios Sequence</option><option value='605'>605 - Inborn Error of Metabolism</option><option value='606'>606 - Myotonic Dystrophy</option><option value='607'>607 - Conjoined Twins</option><option value='608'>608 - Tracheal Agenesis or Atresia</option><option value='609'>609 - Thanatophoric Dysplasia Types 1 and 2</option><option value='610'>610 - Hemoglobin Barts</option><option disabled value>-----Pulmonary Anomalies-----</option><option value='701'>701 - Congenital Cystic Adenomatoid Malformation of the Lung</option><option value='907'>907 - Other lethal or life threatening</option><option disabled value>-----Other Lethal or Life Threatening Anomalies-----</option><option value='100'>100 - Other lethal or life threatening</option></select></div></div>";
             // END inner HTML
              document.getElementById(divName).appendChild(newdiv);
              counterForBirthDefect++;
         }
    
}

var counterForBacterialCodeDuringAdmission = 1;
var limitForBacterialCodeDuringAdmission = 3;
/*Adding new surgery fields*/
function addNewBacterialCodeDuringAdmission(divName){
    /*$(document.getElementById('#hiddenFieldSurgery2')).slideUp("slow");*/

         if (counterForBacterialCodeDuringAdmission == limitForBacterialCodeDuringAdmission)  {
              alert("You have reached the limit of adding " + counterForBacterialCodeDuringAdmission + " inputs");
         }
         else {
              var newdiv = document.createElement('div');
             // START inner HTML
              newdiv.innerHTML = "<div id='bacterialCodeDuringAdmissionDiv"+(counterForBacterialCodeDuringAdmission+1)+"' class='form-group input-group'><label class='fixingLabelAlignmentInnerInner'>Bacterial Code "+(counterForBacterialCodeDuringAdmission+1)+" :</label><div class='fixingInputAlignmentInnerInner'><select id='bacterialCodeDuringAdmission"+(counterForBacterialCodeDuringAdmission+1)+"' name='bacterialCodeDuringAdmission"+(counterForBacterialCodeDuringAdmission+1)+"' class='form-control' style='height:32px;width:70%;'><option disabled selected value=''>SELECT</option><option value='102'>102 - Acinetobacter species</option><option value='201'>201 - Bacteroides species</option><option value='501'>501 - Enterobacter species</option><option value='502'>502 - Enterococcus species</option><option value='503'>503 - Escherichia coli</option><option value='801'>801 - Haemophilus species</option><option value='1101'>1101 - Klebsiella species</option><option value='1201'>1201 - Listeria monocytogenes</option><option value='1301'>1301 - Moraxella species</option><option value='1401'>1401 - Neisseria species</option><option value='1604'>1604 - Proteus species</option><option value='1606'>1606 - Pseudomonas species</option><option value='1902'>1902 - Serratia species</option><option value='1903'>1903 - Staphylococcus coagulase positive</option><option value='1904'>1904 - Stenotrophomonas maltophilia</option><option value='1905'>1905 - Group B Streptococcus or GBS</option><option value='1906'>1906 - Streptococcus anginosus</option><option value='1907'>1907 - Streptococcus pneumoniae</option><option value='1908'>1908 - Streptococcus pyogenes</option><option value='7777'>N/A</option><option value='9999'>Unknown</option></select></div></div>";
             // END inner HTML
              document.getElementById(divName).appendChild(newdiv);
              counterForBacterialCodeDuringAdmission++;
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

function fixingInputAlignmentCheck(){
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

function numberOfInfantsDeliveredCheck(){
    var e = document.getElementById("numberOfInfantsDelivered");
    var strUser = e.options[e.selectedIndex].value;
    var hiddenField = document.getElementById('twinOrTripletDiv');
    if(strUser==2){
        $(hiddenField).slideDown("slow");
        $(hiddenField).addClass('glowingHiddenFields');
        $('#twinOrTripletOrQuadrupletTwin').attr("checked",true);
        $('#twinOrTripletOrQuadrupletTwin').change();
        $('#hiddenFieldTwins').slideUp("slow");
        
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


/*function duplicateToImmunizationDate(){
    var d = $('#immunizations652Date').datepicker('getDate');
    $('#immunizationDate').datepicker('setDate', d);
    
}*/
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

$(document).ready(function() {
    /*$(document).on("change",$("#bacterialCodeDuringAdmission2"),SelectsAdditionalForm);
    $(document).on("change",$("#bacterialCodeDuringAdmission3"),SelectsAdditionalForm);*/
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
/*Auto filling the babies name */
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
            dateOfBirthCheck(); //checking if the user has inputted a value
            adding28Days(); //making 28 day date
            makingSixWeekDate(); //making 6 week date and checks if the baby is <42 days
            making40dayDate();
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
            dateOfAdmissionCheck();
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
            dateOfInitialDispositionCheck();
            lengthOfStayCheck();
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
            totalLengthOfStayCheck();
        }
    }, datepickersOpt));
    $('#dateDischargedHomeDiedOrBirthdayCalendar').on("click", function (e) {
        $('#dateDischargedHomeDiedOrBirthday').focus();
    });
    
    $("#immunizations652Date").datepicker($.extend({
        maxDate: '0',
        onSelect: function () {
            calculate4WeeksAfterGivenImmunizationDate();
            //adding key listener functions for progress bar checks
            InputsPatientForm();
            ColourPatientForm();
        }
    }, datepickersOpt));
    $('#immunizations652DateCalendar').on("click", function (e) {
        $('#immunizations652DateCalendar').focus();
    });
    
});
/* END Date of Birth*/
/* START Date of Appointment Date*/
$( function() {
    
    $( "#appointmentDate" ).datepicker({
        numberOfMonths: 2,
        dateFormat: 'dd-mm-yy',
        maxDate: '+12M',
        minDate: '+1D'
        
    });   
    $('#appointmentDateCalendar').on("click", function(e){
            $('#appointmentDate').focus();
        });
  } );
/* END Date of Appointment Date*/
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
/* START Date of PCR Date*/
$( function() {
    
    $( "#PCRDate" ).datepicker({
        numberOfMonths: 2,
        dateFormat: 'dd-mm-yy',
        maxDate: '+12M',
        minDate: '+1D'
        
    }); 
    $('#PCRDateCalendar').on("click", function(e){
            $('#PCRDate').focus();
        });
  } );
/* END Date of PCR Date*/
/* START Date of ROP Date*/
$( function() {
    
    $( "#ROPDate" ).datepicker({
        numberOfMonths: 2,
        dateFormat: 'dd-mm-yy',
        maxDate: '+12M',
        minDate: '+1D'
        
    });   
    $('#ROPDateCalendar').on("click", function(e){
            $('#ROPDate').focus();
        });
  } );
/* END Date of ROP Date*/
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
    d.setDate(d.getDate() + arg); //add 4 weeks onto the date
    $('#immunizationDate').datepicker('setDate', d); //set the next immunization date to the new date.
}
function adding28Days(){
    var arg = 28;
    var d = $('#dateOfBirth').datepicker('getDate');
    d.setDate(d.getDate() + arg);
    $('#day28Date').datepicker('setDate', d);
    toastr.success("28 Day Date Set")
};
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
        toastr.success("Current baby is younger than 42 days - Immunization date already set")
       }
    else{
        toastr.success("Current baby is older than 42 days - Immunization date will need to be set")
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
        toastr.success("Baby is older than 40 days - Immunization Date is shown")
       }
    else{
        //hide6/52 date
        $('#hiddenFieldImmunizations652').slideUp('slow');
        toastr.success("Baby is younger than 40 days - Immunization Date is hidden")
    }
}
function lengthOfStayCheck(){
    var dob   = $('#dateOfBirth').datepicker('getDate');
    var admission   = $('#dateOfAdmission').datepicker('getDate');
    var initialDisposition   = $('#dateOfInitialDisposition').datepicker('getDate');
    var dobValue   = $('#dateOfBirth').val();
    var admissionValue   = $('#dateOfAdmission').val();
    var initialDispositionValue   = $('#dateOfInitialDisposition').val();
    var days   = (initialDisposition - dob)/1000/60/60/24;
    if((initialDispositionValue.length>0 && admissionValue.length>0)||(initialDispositionValue.length>0 && dobValue.length>0 )){
        if(days>=0 && days<=27){
            youngerThan28DaysHidePanels();
            $('#initialLengthOfStay').val(days);
        }
        else{
            $('#initialLengthOfStay').val(days);
        }
       }
}
function totalLengthOfStayCheck(){
    var dob   = $('#dateOfBirth').datepicker('getDate');
    var admission   = $('#dateOfAdmission').datepicker('getDate');
    var initialDisposition   = $('#dateOfInitialDisposition').datepicker('getDate');
    var dobValue   = $('#dateOfBirth').val();
    var admissionValue   = $('#dateOfAdmission').val();
    var initialDispositionValue   = $('#dateOfInitialDisposition').val();
    var days   = (initialDisposition - dob)/1000/60/60/24;
    if((initialDispositionValue.length>0 && admissionValue.length>0)||(initialDispositionValue.length>0 && dobValue.length>0 )){
        if(days>=0 && days<=27){
            youngerThan28DaysHidePanels();
            $('#initialLengthOfStay').val(days);
        }
        else{
            $('#initialLengthOfStay').val(days);
        }
       }
}
function youngerThan28DaysHidePanels(){
    $('.day28DateDiv').slideUp('slow')
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
    for (i=20;i<=70;i++){
        idValue.append($('<option></option>').val(i).html(i+" cm"))
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
        $(this).css('font-size', '1.2em');
    }
});
/*END - Function to check if each label is too big or not */