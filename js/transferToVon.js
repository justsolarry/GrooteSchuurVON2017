//Notes:    Must update database to reflect the records state of published

function sendDataToVon(listOfMedicalRecordIds){
    for (i = 0; i < listOfMedicalRecordIds.length; i++) {
        var record = getRecordFromDatabase(listOfMedicalRecordIds[i]);
        var xmlRecord = create2018Xml(record);
        console.log(xmlRecord);
        transferXmlToVon(xmlRecord); 
        console.log("Data for record: "+ listOfMedicalRecordIds[i] + "transfered")
    }
}

function transferXmlToVon(xmlFile)
{
    var http = new XMLHttpRequest();
    var url = "http://posttestserver.com/post.php";
    http.open("POST", url, true);
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            toastr.info("Data has sent to test environment");
        }
    }
    http.send(xmlFile);
}

