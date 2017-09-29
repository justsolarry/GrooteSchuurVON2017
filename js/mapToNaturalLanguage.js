function mapToNaturalLanguage(record){
    var addedRecord = record;
    if (record.transferCenterCode == 99999999){
        addedRecord.transferCenterName = "Other";
    }
    return record;
}
