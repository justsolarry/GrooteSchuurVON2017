function createHTTPAuthPOSTConnection(userPasswordObject){
  var http = new XMLHttpRequest();
  var url = "http://localhost:5984/test1"; //server will change //test server https://www.posttestserver.com/
  http.open("POST", url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
    }
  }
  document.getElementById("xmlContent").innerHTML = JSON.stringify(babyDataObject);
  http.send(JSON.stringify(babyDataObject));
}

/*function createHTTPGETConnection(){
  var http = new XMLHttpRequest();
  var url = "http://localhost:5984/test1/2"; //admin:vonadmin123@
  http.open("GET", url, false);
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        babyData = this.responseText;
        console.log(this.responseText);
        //document.getElementById("demo").innerHTML = myObject;
    }
  }
  http.send();
}*/

function retrieveAllDocs(){    
  var http = new XMLHttpRequest();
  var babyData = {};
  var url = "http://localhost:5984/test1/_all_docs?include_docs=true"; //admin:vonadmin123@
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
  var url = "http://localhost:5984/_session"; //admin:vonadmin123@
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        //document.cookie=http.getResponseHeader('Set-Cookie');
        alert("Logged in");
        //window.location.href = 'landing.html'; 
        
    }
  }
  var user = prompt('Username');
  var password = prompt('Password');
  
  var u = {};
  u.name = user;
  u.password = password;
    
  http.open("POST", url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.setRequestHeader('Access-Control-Allow-Origin', '*');
  
  http.send(JSON.stringify(u));
  
}


function _logout(){
   
  var http = new XMLHttpRequest();
    
  var url = "http://localhost:5984/_session"; //admin:vonadmin123@
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
  //http.setRequestHeader('Access-Control-Allow-Origin', '*');
  
  http.send(JSON.stringify(userObject));
     
}

function session(){
    
}

function newUser(){
    
    var userObject = {
    "name": "test",
    "type": "user",
    "roles": [],
    "password": "123456"
    }

  var http = new XMLHttpRequest();
  var url = "http://localhost:5984/_users/org.couchdb.user:test"; //admin:vonadmin123@
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        //window.location = "index.html";  
        alert("User posted");
    }
    
  }
  
  http.open("PUT", url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.withCredentials = true;
  //alert(JSON.stringify(userObject));  
  http.send();
}

function displayData(id){
  //alert("Row "+id+" has been clicked.");
    
  window.location = "index.html?id="+id+"#PatientFormID";  
}

function fetchRowData(id){
    
  //alert("Row "+id+"'s data to display.");
  
  var retrievedRecord = getRecordFromDatabase(id);
  
  repopulateForm(retrievedRecord);
  
  //alert("BabyData"+JSON.stringify(retrievedRecord));
    
  //window.location = "index.html?id="+id+"#PatientFormID";  
    
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
                
                var elements = document.getElementsByName(key);
                    //alert("Elements "+key+" "+JSON.stringify(elements));
                var index = babyData[key];
        
                    //alert(index);
                    //document.getElementsByName('outbornBirth')[1].checked = true;                    
                if(elements.length > 1 && index<10 && !isNaN(index)){

                        elements[babyData[key]].checked = true;
                    
                        elements[0].value = index;
                        //alert("The element"+JSON.stringify(document.getElementsByName(key)[index]));
                        //$("input[name="+key+"][value="+index+"]").prop('checked', true);
                        /*if(elements[babyData[key]].type == 'radio'){
                            elements[babyData[key]].checked = true;
                        }*/
                        
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
    var allRecords = retrieveAllDocs();
    var dbSize = allRecords.rows.length;
    //alert(dbSize);
    var nextId = dbSize+1;
    //alert(nextId);
    medicalRecordObject._id = nextId;
    //alert(JSON.stringify(medicalRecordObject));
    createHTTPPOSTConnectionNewRecord(medicalRecordObject);
    window.location = "index.html?id="+nextId+"#PatientFormID";     
}

function getRecordFromDatabase(medicalRecordId){
    var record;
    record = createHTTPGETConnection(medicalRecordId);
    return record;
}

/*function writeDataToRecord(medicalRecord){
  var rev = createHTTPPOSTConnection(medicalRecord._id);
  document.getElementById(_rev) = rev;
}*/

function removeDataFromDatabase(medicalRecordId, listOfDataPoints){
  
}

function updateDataInRecord(medicalRecord){ 
  createHTTPPOSTConnection(medicalRecord);
  var record = getRecordFromDatabase(medicalRecord._id);
  //alert("Rev: "+JSON.stringify(record)._rev);
  document.getElementById("_rev").value = record._rev;
  //alert(JSON.stringify(document.getElementById("_rev").value));//.value = rev;
}

//This function is used to create a new record in the database
function createHTTPPOSTConnectionRecord(babyDataObject){ 
  var http = new XMLHttpRequest();
  var url = "http://localhost:5984/test1/"+babyDataObject._id; //server will change //test server https://www.posttestserver.com/
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
  var url = "http://localhost:5984/test1/"+id; //server will change //test server https://www.posttestserver.com/
  
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
  var url = "http://localhost:5984/test1/"+babyDataObject._id; //server will change //test server https://www.posttestserver.com/ 
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
  var url = "http://localhost:5984/test1/" + medicalRecordId; //server will change -> config file?
  var record;
  http.open("GET", url, false);
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
  return record;
}
