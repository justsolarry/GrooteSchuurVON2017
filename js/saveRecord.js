self.addEventListener("message", function(e){
    importScripts('databaseReadWrite.js', 'config.js');
    console.log(e.data);
    console.log("In worker");
    configureDB();
    record = mapToNaturalLanguage(e.data);
    rev = updateDataInRecord(record);
    postMessage(rev);
})