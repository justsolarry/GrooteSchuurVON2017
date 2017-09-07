function createRecordInDatabase(medicalRecordId){
    var medicalRecordObject = {_id = medicalRecordId}
    createHTTPPOSTConnectionRecord(medicalRecordObject);
}

function getRecordFromDatabase(medicalRecordId){
    return createHTTPGETConnection(medicalRecordId)
}

function writeDataToRecord(medicalRecordId){
  createHTTPPOSTConnection(medicalRecordId);
}

function removeDataFromDatabase(medicalRecordId, listOfDataPoints){
  
}

function updateDataInRecord(medicalRecordId){

  }

function createHTTPPOSTConnectionRecord(babyDataObject){ 
  var http = new XMLHttpRequest();
  var url = "http://196.42.86.86:5984/test1/"; //server will change //test server https://www.posttestserver.com/
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

function createHTTPPOSTConnection(medicalRecordId){ // must change to pass in values
  var http = new XMLHttpRequest();
  var url = "http://196.42.86.86:5984/test1/" + babyDataObject._id; //server will change //test server https://www.posttestserver.com/
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

function createHTTPGETConnection(medicalRecordId){
  var babyData = {idMisMatch: true};
  var http = new XMLHttpRequest();
  var url = "http://196.42.86.86:5984/test1/" + medicalRecordId; //server will change -> config file?
  http.open("GET", url, false);
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        babyData = this.responseText;
        //console.log(this.responseText);
    }
  }
  http.send();
    return babyData;
}
