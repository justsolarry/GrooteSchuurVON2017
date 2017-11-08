function validateNoNumbers(ID){
    var alphaExp = /^[a-zA-Z\s\-]*$/;
    var value1 = document.getElementById(ID).value;
    var replaceString = "";
    if(ID==='mothersFirstName'){
       var replaceString = "Mothers First Name "
       }
    else if(ID==='mothersLastName'){
            var replaceString = "Mothers Last Name "
            }
  if ((value1.length) ==0){
    toastr.error(replaceString+" - Value cannot be empty");
    $('#'+ID).addClass('addRed')
      $('#'+ID).removeClass('addGreen')
  }
    else if (value1.match(alphaExp)){
             $('#'+ID).removeClass('addRed')
            $('#'+ID).addClass('addGreen')
            $('#'+ID).removeClass('glowingHiddenFieldsPermanent')
             }
    else{
        toastr.error(replaceString+" - Only letters allowed");
        $('#'+ID).addClass('addRed')
        $('#'+ID).removeClass('addGreen')
    }
  
}
function validateFreeText(ID){
    var value1 = document.getElementById(ID).value;
    if(value1.length>0){
            $('#'+ID).addClass('addGreen')
            $('#'+ID).removeClass('addRed')
            $('#'+ID).removeClass('glowingHiddenFieldsPermanent')
       }
    else if(value1.length==0){
                $('#'+ID).removeClass('addRed')
                $('#'+ID).removeClass('addGreen')
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
            $('#birthWeightInGrams').removeClass('glowingHiddenFieldsPermanent')
        }
        if(weight>=1501 && weight<=5000){ 
            $('#birthWeightInGrams').removeClass('addRed')
            $('#birthWeightInGrams').addClass('addGreen')
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
        else{//hiding HIE in additional fields section
            $('.HIEDiv').slideUp('slow');
        }
        if(weight<1251){
            $('#hiddenFieldROPDate').slideUp('slow');
        }
        else{
            $('#hiddenFieldROPDate').slideDown('slow');
        }
    }
    
}
function validateWeight(ID){
    var weight = document.getElementById(ID).value;
    var replaceString = "";
    if(ID==='weightAtDispositionAfterReadmission'){
       var replaceString = "Weight at Disposition after Readmission "
       }
    else if(ID==='weightAtInitialDisposition'){
            var replaceString = "Weight at Initial Disposition "
            }
    
    if(weight.length==0){
        toastr.error(replaceString+' - Value cannot be empty');
        $('#'+ID).addClass('addRed')
    }
    else{
        if (weight <= 400){
            toastr.error(replaceString+' - Value too Low');
            $('#'+ID).addClass('addRed')
            $('#'+ID).removeClass('addGreen')
        }
        if(weight>=401 && weight<=5000){
            $('#'+ID).removeClass('addRed')
            $('#'+ID).addClass('addGreen')
            $('#'+ID).removeClass('glowingHiddenFieldsPermanent')
        }
        if (weight>=5001 && weight<=6999){
            toastr.warning(replaceString+' - Are you sure?'); 
            $('#'+ID).removeClass('addRed')
            $('#'+ID).addClass('addGreen')
        }
        if (weight >=7000 ){
            toastr.error(replaceString+' - Value too High'); 
            $('#'+ID).addClass('addRed')
            $('#'+ID).removeClass('addGreen')
        }
    }
    
}
function validateWeightAtDispositionAfterReadmission(){
    var weight = document.getElementById('weightAtDispositionAfterReadmission').value;
    if(weight.length==0){
        toastr.error('Weight at Disposition after Readmission - Value cannot be empty');
        $('#weightAtInitialDisposition').addClass('addRed')
    }
    else{
        if(isNaN(weight)){
            toastr.error('Weight at Disposition after Readmission - Numbers only');
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if (weight < 1){
            toastr.error('Weight at Disposition after Readmission - Value cannot be zero or negative');
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if (weight >0  && weight < 50){
            toastr.error('Weight at Disposition after Readmission - Value must be in grams, not kilograms');
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if (weight >50  && weight < 401){
            toastr.error('Weight at Disposition after Readmission - Value too Low');
            $('#weightAtInitialDisposition').addClass('addRed')
            $('#weightAtInitialDisposition').removeClass('addGreen')
        }
        if (weight > 5000 && weight<7000){
            toastr.warning('Weight at Disposition after Readmission - Are you sure?'); 
            $('#weightAtInitialDisposition').removeClass('addRed')
            $('#weightAtInitialDisposition').addClass('addGreen')
        }
        if (weight >=7000 ){
            toastr.error('Weight at Disposition after Readmission - Value too High'); 
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
        toastr.error('Medical Record Number - Must have 9 numbers');
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
            $('#patientMedicalRecordNumber').removeClass('glowingHiddenFieldsPermanent')
        } 
        
    }
    
}
function validateAppointmentLocation(ID){
    var location = document.getElementById(ID).value;
    var alphaExp = /^[a-zA-Z\s\-]*$/;
    if(location.length==0){
        toastr.error('Appointment Location - Value cannot be empty');
        $('#'+ID).addClass('addRed')
        $('#'+ID).removeClass('addGreen')
    }
    else if(location.match(alphaExp)){
        $('#'+ID).removeClass('addRed')
        $('#'+ID).addClass('addGreen')
        $('#'+ID).removeClass('glowingHiddenFieldsPermanent')
    }
    else{
        toastr.error("Appointment Location - Only letters allowed");
        $('#'+ID).addClass('addRed')
        $('#'+ID).removeClass('addGreen')
    }
}
//START Functions that automaically certain strings while the user types
//remove anything other than numbers
$(".onlyNumbers").on( "keyup", function( event ) {
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
$(".onlyLetters").on( "keyup", function(event) {
     var node = $(this);
        node.val(node.val().replace(/[^A-Za-z]/g,'') );
} );
$("#headCircumference").on( "keyup", function( event ){
    var val = $(this).val();
    if(isNaN(val)){
         val = val.replace(/[^0-9\.]/g,'');
         if(val.split('.').length>2) 
             val =val.replace(/\.+$/,"");
    }
    $(this).val(val); 
});
$("#headCircumferenceInitialDisposition").on( "keyup", function( event ){
    var val = $(this).val();
    if(isNaN(val)){
         val = val.replace(/[^0-9\.]/g,'');
         if(val.split('.').length>2) 
             val =val.replace(/\.+$/,"");
    }
    $(this).val(val); 
});
//END Functions that automaically certain strings while the user types