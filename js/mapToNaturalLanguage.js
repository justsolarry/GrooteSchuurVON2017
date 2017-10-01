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


