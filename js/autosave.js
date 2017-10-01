var session = document.getElementById('session').value;

    function autosave(){
            configureDB();
    if(session){
            checkForPopulation();
            $('form').sisyphus({
                excludeFields: ["_id _rev"],
                locationBased: true,
                timeout: 10,
                //autoRelease: true,
                onSave: function() {
                    var date = new Date();
                    var hours = date.getHours();
                    var minutes = date.getMinutes();
                    var seconds = date.getSeconds();
                   
                    //toastr.options.showMethod = 'slideDown';
                    //repopulateForm(getCurrentId);
                    //toastr.success('Saved', 'Autosave', {timeOut: 750});
                    //toastr.success('Autosaved at '+hours+":"+minutes+":"+seconds);
                    var record = $('form').serializeJSON();
                    //record.transferCenterCode = 99999999;
                    /*alert(JSON.stringify(record))*/
                    /*record = mapToNaturalLanguage(record);*/
                    //var record2 = mapToLang(record);
                    //alert(JSON.stringify(record));
                    updateDataInRecord(record);
                    
                }

            });
       
       }
      else{
          checkSession();
      }

    }
    function test(){
        //alert("Create Record in Database");
        if(session == null || session == ""){
          createSession();  
        }
        if(session){
            createRecordInDatabase();
        }  
    } 
    
    