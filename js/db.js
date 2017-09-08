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

function createHTTPGETConnection(){
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
}

function retrieveAllDocs(){    
  var http = new XMLHttpRequest();
  var babyData = {};
  var url = "http://localhost:5984/test1/_all_docs?include_docs=true"; //admin:vonadmin123@
  http.open("GET", url, false);
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


function _submit(){
 
  var user = document.getElementById('username').value;
  var pwd = document.getElementById('password').value;
    
  var userObject = {};
  userObject.username = user;
  userObject.password = pwd;
   
  var http = new XMLHttpRequest();
    
  
  var url = "http://test.localhost.com:5984/_session"; //admin:vonadmin123@
  http.withCredentials = true;
    
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        //document.cookie=http.getResponseHeader('Set-Cookie');
        alert("Logged in");
        window.location.href = 'landing.html'; 
    }
  }
  
  http.open("POST", url, true);
  http.setRequestHeader("Content-type", "application/json");
  //http.setRequestHeader('Access-Control-Allow-Origin', '*');
  
  http.send(JSON.stringify(userObject));
     
}

function _logout(){
   
  var http = new XMLHttpRequest();
    
  var url = "http://test.localhost.com:5984/_session"; //admin:vonadmin123@
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
  
  alert(JSON.stringify(userObject));  
  http.send(JSON.stringify(userObject));

}

function displayData(id){
  alert("Row "+id+" has been clicked.");
    
  var http = new XMLHttpRequest();
  var url = "http://localhost:5984/test1/"+id; //admin:vonadmin123@
  http.open("GET", url, false);
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        babyData = JSON.parse(this.responseText);
        console.log(this.responseText);
        //document.getElementById("demo").innerHTML = myObject;
        window.location = "index.html?id="+id+"#PatientFormID";        
    }
  }
  http.send();
}

function displayForm(id){
  alert("Row "+id+"'s data to display.");
    
  var http = new XMLHttpRequest();
  var url = "http://localhost:5984/test1/"+id; //admin:vonadmin123@
  http.open("GET", url, false);
  http.withCredentials = true;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        babyData = JSON.parse(this.responseText);
        console.log(this.responseText);
        
        repopulateForm(babyData);
                
    }
  }
  http.send();
}

function repopulateForm(babyData){
        for (var key in babyData) {
            if (babyData.hasOwnProperty(key)) {
            //alert(key + " -> " + babyData[key]);
                //alert("Running:"+key);
                if(document.getElementById(key) != null){
                    
                    //alert(key+"| |"+JSON.stringify(document.getElementById(key)));
                    //var field = document.getElementsByName(key);
                    
                    //alert(field[0].type);
                    /*if(document.getElementById(key).type === 'radio'){
                        if(document.getElementById(key).value === babyData[key]){
                          document.getElementById(key).checked = true;   
                        }
                    }
                    else{
                        document.getElementById(key).value = babyData[key];
                    }*/
                    
                    var elements = document.getElementsByName(key);
                    alert(JSON.stringify(elements));
                    
                    
                }
            }
        }
}

function getUrl(){
   var _url = window.location.href;
   alert(_url);
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
        displayForm(id);
        //alert("There are params"+id)
    } 
    else {}
}
