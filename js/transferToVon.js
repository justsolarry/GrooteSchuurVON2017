//Notes:    Must update database to reflect the records state of published

function sendDataToVon(listOfMedicalRecordIds){
    var numberOfMedicalRecordsToTransfer = listOfMedicalRecordIds.length;
    for (i = 0; i < numberOfMedicalRecordsToTransfer; i++) {
        var jsonRecord = getRecordFromDatabase(listOfMedicalRecordIds[i]);
        var xmlRecord = create2018Xml(jsonRecord);
        console.log(xmlRecord);
    }
}
