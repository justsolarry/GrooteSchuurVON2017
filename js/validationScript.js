function validateMothersFirstName()
{
    var alphaExp = /^[a-zA-Z\s\-]*$/;
    var value1 = document.getElementById('mothersFirstName').value;
  if ((value1.length) ==0){
    toastr.error("Mother's First Name - Value cannot be empty");
    $('#mothersFirstName').addClass('addRed')
      $('#mothersFirstName').removeClass('addGreen')
  }
    else if (value1.match(alphaExp)){
             $('#mothersFirstName').removeClass('addRed')
                $('#mothersFirstName').addClass('addGreen')
             }
    else{
        toastr.error("Mother's First Name - Only letters allowed");
        $('#mothersFirstName').addClass('addRed')
        $('#mothersFirstName').removeClass('addGreen')
    }
  
}

function validateMothersLastName()
{
    var alphaExp = /^[a-zA-Z\s\-]*$/;
    var value1 = document.getElementById('mothersLastName').value;
  if ((value1.length) ==0){
    toastr.error("Mother's Last Name - Value cannot be empty");
    $('#mothersLastName').addClass('addRed')
      $('#mothersLastName').removeClass('addGreen')
  }
    else if (value1.match(alphaExp)){
             $('#mothersLastName').removeClass('addRed')
            $('#mothersLastName').addClass('addGreen')
             }
    else{
        toastr.error("Mother's Last Name - Only letters allowed");
        $('#mothersLastName').addClass('addRed')
        $('#mothersLastName').removeClass('addGreen')
    }
  
}

function validatePatientsName()
{
    var alphaExp = /^[a-zA-Z\s\-]*$/;
    var value1 = document.getElementById('patientsName').value;
  if ((value1.length) ==0){
    toastr.error("Patient's Name - Value cannot be empty");
    $('#patientsName').addClass('addRed')
      $('#patientsName').removeClass('addGreen')
  }
    else if (value1.match(alphaExp)){
             $('#patientsName').removeClass('addRed')
            $('#patientsName').addClass('addGreen')
             }
    else{
        toastr.error("Patient's Name - Only letters allowed");
        $('#patientsName').addClass('addRed')
        $('#patientsName').removeClass('addGreen')
    }
  
}

function validateBirthweight(){
    var weight = document.getElementById('birthWeightInGrams').value;
    if(weight.length==0){
        toastr.error('Birth Weight - Value cannot be empty');
        $('#birthWeightInGrams').addClass('addRed')
        $('#birthWeightInGrams').removeClass('addGreen')
    }
    else{
        if(isNaN(weight)){
            toastr.error('Birth Weight - Numbers only');
            $('#birthWeightInGrams').addClass('addRed')
            $('#birthWeightInGrams').removeClass('addGreen')
        }
        if (weight < 1){
            toastr.error('Birth Weight - Value cannot be zero or negative');
            $('#birthWeightInGrams').addClass('addRed')
            $('#birthWeightInGrams').removeClass('addGreen')
        }
        if (weight >0  && weight < 50){
            toastr.error('Birth Weight - Value must be in grams, not kilograms');
            $('#birthWeightInGrams').addClass('addRed')
            $('#birthWeightInGrams').removeClass('addGreen')
        }
        if (weight >50  && weight < 401){
            toastr.error('Birth Weight - Value too Low');
            $('#birthWeightInGrams').addClass('addRed')
            $('#birthWeightInGrams').removeClass('addGreen')
        }
        if (weight > 5000 && weight<7000){
            toastr.warning('Birth Weight - Are you sure?'); 
            $('#birthWeightInGrams').removeClass('addRed')
            $('#birthWeightInGrams').addClass('addGreen')
        }
        if (weight >=7000 ){
            toastr.error('Birth Weight - Value too High'); 
            $('#birthWeightInGrams').addClass('addRed')
            $('#birthWeightInGrams').removeClass('addGreen')
        }
        if(weight>=401 && weight<=1500){ // IS A VON BABY
            $('#birthWeightInGrams').removeClass('addRed')
            $('#birthWeightInGrams').addClass('addGreen')
        }
        if(weight>=1501 && weight<=5000){ 
            $('#birthWeightInGrams').removeClass('addRed')
            $('#birthWeightInGrams').addClass('addGreen')
        }
        if(weight>=1501 && weight<=7000){ //showing Not a VON baby fields
            showNotAVonBabyFields();
            notAVonBabyFlag();
        }
        if(weight<=1500 || weight>=7001){
            hideNotAVonBabyFields();  //hiding Not a VON baby fields
            
           }
        if(weight>0 && weight<1400){
            $('#hiddenFieldROPDate').slideDown('slow');//displaying ROPScreenDate
        }
        if(weight>=1400){ //hiding ROPScreenDate if 
            $('#hiddenFieldROPDate').slideUp('slow');
        }
        if(weight>1800){ //showing HIE in additional fields section
            $('.HIEDiv').slideDown('slow');
        }
        if(weight<=1800){ //hiding HIE in additional fields section
            $('.HIEDiv').slideUp('slow');
        }
    }
    
}
function validateWeightAtInitialDisposition(){
    var weight = document.getElementById('weightAtInitialDisposition').value;
    if(weight.length==0){
        toastr.error('Weight at Initial Disposition - Value cannot be empty');
        $('#weightAtInitialDisposition').addClass('addRed')
    }
    else{
        if(isNaN(weight)){
            toastr.error('Weight at Initial Disposition - Numbers only');
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if (weight < 1){
            toastr.error('Weight at Initial Disposition - Value cannot be zero or negative');
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if (weight >0  && weight < 50){
            toastr.error('Weight at Initial Disposition - Value must be in grams, not kilograms');
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if (weight >50  && weight < 401){
            toastr.error('Weight at Initial Disposition - Value too Low');
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if (weight > 5000 && weight<7000){
            toastr.warning('Weight at Initial Disposition - Are you sure?'); 
            $('#weightAtInitialDisposition').removeClass('addRed')
            $('#weightAtInitialDisposition').addClass('addGreen')
        }
        if (weight >=7000 ){
            toastr.error('Weight at Initial Disposition - Value too High'); 
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if(weight>400 && weight<1501){
            $('#weightAtInitialDisposition').removeClass('addRed')
            $('#weightAtInitialDisposition').addClass('addGreen')
        }
        if(weight>1500 && weight<5001){
            $('#weightAtInitialDisposition').removeClass('addRed')
            $('#weightAtInitialDisposition').addClass('addGreen')
        }
    }
    
}
function validatePatientMedicalRecordNumber(){
    var MedicalRecordNumber = document.getElementById('patientMedicalRecordNumber').value;
    if(MedicalRecordNumber.length==0){
        toastr.error('Medical Record Number - Value cannot be empty');
        $('#patientMedicalRecordNumber').addClass('addRed')
        $('#patientMedicalRecordNumber').removeClass('addGreen')
    }
    else{
       if((MedicalRecordNumber.length)!=9){
        toastr.error('Medical Record Number - Must have 8 numbers');
        $('#patientMedicalRecordNumber').addClass('addRed')
           $('#patientMedicalRecordNumber').removeClass('addGreen')
        }
        if(MedicalRecordNumber <1){
           toastr.error('Medical Record Number - Value cannot be zero or negative');
            $('#patientMedicalRecordNumber').addClass('addRed')
            $('#patientMedicalRecordNumber').removeClass('addGreen')
           }
        if(isNaN(MedicalRecordNumber)){
            toastr.error('Medical Record Number - Numbers only');
            $('#patientMedicalRecordNumber').addClass('addRed')
            $('#patientMedicalRecordNumber').removeClass('addGreen')
        }
        if(MedicalRecordNumber.length==9){
            $('#patientMedicalRecordNumber').removeClass('addRed')
            $('#patientMedicalRecordNumber').addClass('addGreen')
        } 
        
    }
    
}
function validateGestationalAgeInWeeks()
{
    var gestationalAgeInWeeks = document.getElementById('gestationalAgeInWeeksID').value;
  if ((gestationalAgeInWeeks.length) ==0){
    toastr.error('Gestational Age - Value cannot be empty');
        $('#gestationalAgeInWeeksID').addClass('addRed')
  }
    else if (gestationalAgeInWeeks > 46 || gestationalAgeInWeeks < 15)
  {
      toastr.error('Gestational Age - Invalid value, must be from 15-46 weeks');
        $('#gestationalAgeInWeeksID').addClass('addRed')
  }
    else{
        $('#gestationalAgeInWeeksID').removeClass('addRed')
    }
  
}
//dayofAdmission is calculated
function validateHeadCircumference() {
    var headCircumference =document.getElementById('headCircumference').value;
    
    if(headCircumference.length==0){
       toastr.error('Head Circumference - Value cannot be empty');
        $('#headCircumference').addClass('addRed');
        $('#headCircumference').removeClass('addGreen');
       }
    else
    if(headCircumference>= 10 && headCircumference<=70){
        $('#headCircumference').addClass('addGreen');
        $('#headCircumference').removeClass('addRed');
       }
    else{
        toastr.error('Head Circumference - Invalid value, must be from 10.0-70.0cm');
        $('#headCircumference').addClass('addRed');
        $('#headCircumference').removeClass('addGreen');
    }
}
function validateHeadCircumferenceInitialDisposition() {
    var headCircumference =document.getElementById('headCircumferenceInitialDisposition').value;
    
    if(headCircumference.length==0){
       toastr.error('Head Circumference - Value cannot be empty');
        $('#headCircumferenceInitialDisposition').addClass('addRed');
        $('#headCircumferenceInitialDisposition').removeClass('addGreen');
       }
    else
    if(headCircumference>= 10 && headCircumference<=70){
        $('#headCircumferenceInitialDisposition').addClass('addGreen');
        $('#headCircumferenceInitialDisposition').removeClass('addRed');
       }
    else{
        toastr.error('Head Circumference - Invalid value, must be from 10.0-70.0cm');
        $('#headCircumferenceInitialDisposition').addClass('addRed');
        $('#headCircumferenceInitialDisposition').removeClass('addGreen');
    }
}
function validateNumberOfInfants(nbirths){
  if (!(nbirths > 0 || nbirths < 11 || nbirths == null)){
    alert("Please insert number of infants delivered between 1 and 10");
  }
}
function validateApgarScore1min(ap1){
  if (!(ap1 > -1 || ap1 < 11 || ap1 == null)){
    alert("Please insert apgar score for 1 minute; range: 0 - 10");
  }
}
function validateApgarScore5min(ap5){
  if (!(ap5 > -1 || ap5 < 11 || ap5 == null)){
    alert("Please insert apgar score for 5 minute; range: 0 - 10");
  }
}


$("#birthWeightInGrams").on( "keyup", function( event ) {
    
    // 1.
    var selection = window.getSelection().toString();
    if ( selection !== '' ) {
        return;
    }
    // 2.
    if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
        return;
    }
    // 1
        var $this = $( this );
        var input = $this.val();
        // 2
        var input = input.replace(/[\D\s\._\-]+/g, "");
        // 3
        input = input ? parseInt( input, 10 ) : 0;
        // 4
        $this.val( function() {
            return ( input === 0 ) ? "" : input.toString();
        } );
 
} );

$("#patientMedicalRecordNumber").on( "keyup", function( event ) {
    
    // 1.
    var selection = window.getSelection().toString();
    if ( selection !== '' ) {
        return;
    }
    // 2.
    if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
        return;
    }
    // 1
        var $this = $( this );
        var input = $this.val();
        // 2
        var input = input.replace(/[\D\s\._\-]+/g, "");
        // 3
        input = input ? parseInt( input, 10 ) : 0;
        // 4
        $this.val( function() {
            return ( input === 0 ) ? "" : input.toString();
        } );
 
} );

