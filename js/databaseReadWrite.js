var ip = "";
var dbName = "";
function configureDB(){
    
    ip = dbConfig.ipAddress;
    dbName = dbConfig.dbName;
    if(ip == "" || ip == null){
        ip = "localhost";
       }
    
    if(dbName == "" || dbName == null){
        dbName = "test1";
       }
    
    //createSession();
}
    

function retrieveAllDocs(){    
  var http = new XMLHttpRequest();
  var babyData = {};
  var url = "http://"+ip+":5984/"+dbName+"/_all_docs?include_docs=true"; //admin:vonadmin123@
  http.open("GET", url, false);
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        babyData = JSON.parse(this.responseText);
        data = JSON.stringify(babyData.rows);
        console.log(babyData);   
    }
  }
  http.send();
  return babyData;
}

function createSession(){ 
        
  var http = new XMLHttpRequest();
  var url = "http://"+ip+":5984/_session"; //admin:vonadmin123@
  http.withCredentials = true;
  http.open("POST", url, true);
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        alert("Logged in");
        document.getElementById('session').value = true;        
    }
  }
  
  var user = prompt('Username');
  var password = prompt('Password');
  
  var u = {};
  u.name = user;
  u.password = password;

  
  http.setRequestHeader("Content-type", "application/json");  
  http.send(JSON.stringify(u));
  
}


function _logout(){
   
  var http = new XMLHttpRequest();
    
  var url = "http://"+ip+":5984/_session"; //admin:vonadmin123@
  http.withCredentials = true;
    
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        alert("Logged in");
        window.location.href = 'index.html'; 
    }
  }
  
  http.open("DELETE", url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(userObject));
     
}

function changePassword(userData){
  var http = new XMLHttpRequest();
    
  var url = "http://"+ip+":5984/_session"; //admin:vonadmin123@
  http.withCredentials = true;
    
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        //document.cookie=http.getResponseHeader('Set-Cookie');
        alert("Logged in");
        window.location.href = 'index.html'; 
    }
  }
  
  http.open("DELETE", url, true);
  http.setRequestHeader("Content-type", "application/json");  
  http.send(JSON.stringify(userObject));
    
}

function newUser(){
    var userObject = {
    "name": "test",
    "type": "user",
    "roles": [],
    "password": "123456"
    }

  var http = new XMLHttpRequest();
  var url = "http://"+ip+":5984/_users/org.couchdb.user:test"; //admin:vonadmin123@
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        alert("User posted");
    }
    
  }
  
  http.open("PUT", url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.withCredentials = true;
  http.send();
}

function displayData(id){
    
  window.location = "index.html?id="+id+"#PatientFormID"; 
    
}

function fetchRowData(id){
  
  var retrievedRecord = getRecordFromDatabase(id);
  
  repopulateForm(retrievedRecord);
    
}

function getCurrentId(){
   var _url = window.location.href;
   alert("URL"+_url);
   url = new URL(_url);
   var id = url.searchParams.get("id");
   alert(id);
   return id;
}

function repopulateForm(babyData){
        for (var key in babyData) {
            if (babyData.hasOwnProperty(key)) {
                
                if(document.getElementById(key) !== null){                
                    document.getElementById(key).value = babyData[key]; 
                }
                
                var domElements = document.getElementsByName(key);
                
                var index = babyData[key];
                   
                if(domElements.length > 1 && index<10 && !isNaN(index)){
                    
                        domElements.selectedIndex = index;
                        
                        if(domElements[index] != null){
                            for(i=0; i<domElements.length; i++){
                                if(domElements[i].value == index){
                                  eventFire(domElements[i], 'click')
                                   //   domElements[i].checked = true;
                                }
                            }
                        }   
                }                            
            }
        }
}

function getUrl(){
   var _url = window.location.href;
   alert("URL"+_url);
   url = new URL(_url);
   var id = url.searchParams.get("id");
   alert(id);
   return id;
}

function checkForPopulation(){
    var url = window.location.href;
    if (url.includes("?")) {
       _url = new URL(url);
       var id = _url.searchParams.get("id");
       fetchRowData(id);
        //alert("There are params"+id)
    } 
    else {}
}

var tempBabyData = {idMisMatch: true}; 

/*function createRecordInDatabase(){
    var data = retrieveAllDocs();
    var id = data.rows.length+1;
    console.log(data.rows.length);
    var medicalRecordObject = {};
    medicalRecordObject._id = id;
    createHTTPPOSTConnectionRecord(medicalRecordObject);
}*/

function createRecordInDatabase(){
    var medicalRecordObject = {};
    var maxId = createHTTPGETConnectionMaxId();
    maxId = maxId.rows[0].value;
    var nextId = maxId+1;
    medicalRecordObject._id = nextId;
    createHTTPPOSTConnectionNewRecord(medicalRecordObject);
    window.location = "index.html?id="+nextId+"#PatientFormID";     
}

function getRecordFromDatabase(medicalRecordId){
    var record = createHTTPGETConnection(medicalRecordId)
    console.log(record);
    return record;
}

/*function writeDataToRecord(medicalRecord){
  var rev = createHTTPPOSTConnection(medicalRecord._id);
  document.getElementById(_rev) = rev;
}*/

function deleteRecords(listOfMedicalRecordIds){
  for(i=0;i<listOfMedicalRecordIds.length;i++){
      createHTTPDELETEConnection(listOfMedicalRecordIds[i]);
  }
}

function updateDataInRecord(medicalRecord){ 
   // alert(JSON.stringify(medicalRecord))
  createHTTPPOSTConnection(medicalRecord);
  var record = getRecordFromDatabase(medicalRecord._id);
  //alert("Rev: "+JSON.stringify(record)._rev);
  document.getElementById("_rev").value = record._rev;
  //alert(JSON.stringify(document.getElementById("_rev").value));//.value = rev;
}

//This function is used to create a new record in the database
function createHTTPPOSTConnectionRecord(babyDataObject){ 
  var http = new XMLHttpRequest();
  var url = "http://"+ip+":5984/"+dbName+"/"+babyDataObject._id; //server will change //test server https://www.posttestserver.com/
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

//This function is used to create a new record in the database
function createHTTPPOSTConnectionNewRecord(babyDataObject){ 
  var http = new XMLHttpRequest();
  var id = babyDataObject._id;
  var url = "http://"+ip+":5984/"+dbName+"/"+id; //server will change //test server https://www.posttestserver.com/
  
  http.open("PUT", url, false);
  http.setRequestHeader("Content-type", "application/json"); 
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.status === 204) {
        //alert("In redirect");
        //window.location = "index.html?id="+id+"#PatientFormID";    
    }
  }
  
  http.send(JSON.stringify({}));
  
  //alert(babyDataObject);
  
}

function createHTTPPOSTConnection(babyDataObject){ // must change to pass in values
  var http = new XMLHttpRequest();
  //alert("BabyDataObject in POSTConnention"+JSON.stringify(babyDataObject));
  var url = "http://"+ip+":5984/"+dbName+"/"+babyDataObject._id; //server will change //test server https://www.posttestserver.com/ 
  var rev = {};
  http.open("PUT", url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        rev = this.responseText;
        return rev;
        
        //document.getElementById("demo").innerHTML = this.responseText;
    }
  }
  //document.getElementById("xmlContent").innerHTML = JSON.stringify(babyDataObject);
  http.send(JSON.stringify(babyDataObject));
  
}


function createHTTPGETConnection(medicalRecordId){
  var http = new XMLHttpRequest();
    console.log(ip);
  var url = "http://"+ip+":5984/"+dbName+"/" + medicalRecordId; //server will change -> config file?
  var record;
  http.open("GET", url, false);
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        record = JSON.parse(this.responseText);
        console.log(record);
        //toastr.info("successful connection to database");
       
        //tempBabyData = JSON.parse(babyData);
        //console.log(this.responseText);
    }
  }
  http.send();
    console.log("got here");
  return record;
}

function createHTTPGETConnectionMaxId(){
  var http = new XMLHttpRequest();
  var url = "http://"+ip+":5984/"+dbName+"/_design/lastId/_view/maxId"; //server will change -> config file?
  var record;
  http.open("GET", url, false);
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        record = JSON.parse(this.responseText);
        console.log(record);
    }
  }
  http.send();
  return record;
}


function createHTTPDELETEConnection(medicalRecordId){
  var http = new XMLHttpRequest();
  var record = getRecordFromDatabase(medicalRecordId);
  var url = "http://"+ip+":5984/"+dbName+"/" + medicalRecordId+"?rev="+record._rev; //server will change -> config file?
  var record;
  http.open("DELETE", url, false);
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        toastr.info("Record deleted from database");
        window.location.reload();
    }
  }
  http.send();
}


function mapToNaturalLanguage(record){
    var addedRecord = record;
    if (record.transferCenterPIW == 99999999){
        addedRecord.transferCenterName = "Unknown";
    }
    var center = "Unknown";
    switch(record.transferCenterPIW) {
    case 13240:
        center = "Mowbray Maternity Hospital"
        break;
    case 14994:
        center = "New Somerset Hospital"
        break;
    case 16011:
        center = "Tygerberg Hospital"
        break;
    case 8005432:
        center = "Khayelitsha District Hospital"
        break;
    case 8005433:
        center = "Mitchell's Plein District Hospital"
        break;
    case 8005435:
        center = "Red Cross Children's Hospital"
        break;
    case 97777777:
        center = "Birth at Home or in Transit"
        break;
    case 77777777:
        center = "N/A"
        break;
    case 99999999:
        center = "Unknown"
        break;
    }
    addedRecord.transferCenterName = center;
    if (record.transferCenterPIW)
    return record;
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

