function mapToNaturalLanguage(record){
    var addedRecord = record;
    if (record.transferCodePIW == 99999999){
        addedRecord.transferCenterName = "Other";
    }
    return addedRecord;
}
