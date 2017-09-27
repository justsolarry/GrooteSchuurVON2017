function mapToNaturalLanguage(record){
    var addedRecord = record;
    if (record.transferCenterPIW == 99999999){
        addedRecord.transferCenterName = "Unknown";
    }
    return record;
}
