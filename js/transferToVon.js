function sendDataToVon(listOfMedicalRecordIds){
    var numberOfMedicalRecordsToTransfer = listOfMedicalRecordIds.length;
    var entireXmlDocument = "";
    for (i = 0; i < numberOfMedicalRecordsToTransfer; i++) {
        var jsonRecord = getRecordFromDatabase(listOfMedicalRecordIds[i]);
        console.log("Record pulled: " + jsonRecord);
        var xmlRecord = create2018Xml(jsonRecord);
        entireXmlDocument += xmlRecord;
    }
    return '<?xml version="1.0"?>\n' +  entireXmlDocument;
}
