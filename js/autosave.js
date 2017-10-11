function autosave(){
    console.log("Inside autosave");
    
    var worker = new Worker('js/saveRecord.js');
    
    //if(session){
            //checkForPopulation();
            var rev;
            $('form').sisyphus({
                excludeFields: ["_id _rev"],
                locationBased: true,
                timeout: 10,
                onSave: function() {
                    var record = $('form').serializeJSON();
                    worker.postMessage(record);
                }
            });
    
    worker.onmessage= function(event) {
        document.getElementById("_rev").value = event.data;
	};
        
        //}
       //else{
      //    checkSession();
     // }
    
}


/*    function createRecord(){
        if(session == null || session == ""){
          createSession();  
        }
        if(session){
            createRecordInDatabase();
        }  
} */
    
    