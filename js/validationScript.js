function validateBirthweight(){
    var weight = document.getElementById('birthWeightInGrams').value;
    if(weight.length==0){
        toastr.error('Birth Weight - Value cannot be empty');
        $('#birthWeightInGrams').addClass('addRed')
    }
    else{
        if(isNaN(weight)){
        toastr.error('Birth Weight - Numbers only');
        $('#birthWeightInGrams').addClass('addRed')
        }
        if (weight < 1){
            toastr.error('Birth Weight - Value cannot be zero or negative');
            $('#birthWeightInGrams').addClass('addRed')
        }
        if (weight >0  && weight < 50){
            toastr.error('Birth Weight - Value must be in grams, not kilograms');
            $('#birthWeightInGrams').addClass('addRed')
        }
        if (weight >50  && weight < 401){
            toastr.error('Birth Weight - Value too Low');
            $('#birthWeightInGrams').addClass('addRed')
        }
        if (weight > 5000 && weight<7000){
            toastr.warning('Birth Weight - Are you sure?');  
        }
        if (weight >=7000 ){
            toastr.warning('Birth Weight - Value too High');  
        }
        if(weight>400 && weight<1501){
            $('#birthWeightInGrams').removeClass('addRed')
        }
    }
    
}
function validatePatientMedicalRecordNumber(){
    var MedicalRecordNumber = document.getElementById('patientMedicalRecordNumber').value;
    if(MedicalRecordNumber.length==0){
        toastr.error('Medical Record Number - Value cannot be empty');
        $('#patientMedicalRecordNumber').addClass('addRed')
    }
    else{
       if((MedicalRecordNumber.length)!=9){
        toastr.error('Medical Record Number - Must have 8 numbers');
        $('#patientMedicalRecordNumber').addClass('addRed')
        }
        if(MedicalRecordNumber <1){
           toastr.error('Medical Record Number - Value cannot be zero or negative');
            $('#patientMedicalRecordNumber').addClass('addRed')
           }
        if(isNaN(MedicalRecordNumber)){
            toastr.error('Medical Record Number - Numbers only');
            $('#patientMedicalRecordNumber').addClass('addRed')
        }
        if(MedicalRecordNumber.length==9){
            $('#patientMedicalRecordNumber').removeClass('addRed')
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
function validateHeadCircumference(bheadcir){
  if (bheadcir == null){
    alert("Please insert head circumference");
  }
  if (bheadcir > 10.0 || bheadcir < 70.0){
    alert("Please insert head circumference in cm; range: 10.0 - 70.0cm");
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