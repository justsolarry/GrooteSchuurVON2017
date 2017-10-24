var disposition = {
                 1: "Home",
                 2: "Transferred",
                 3: "Died",
                 5: "Still Hospitalized (1st Birthday)",
                 7: "N/A",
                 9: "Unknown"
}

var birthLocation = {
                0: "Inborn",
                1: "Outborn"
}

var yesNo = {
        0: "No",
        1: "Yes",
        9: "Unknown"
}

var sepsisValues = {
        1: "Confirmed",
        2: "Suspected",
        3: "No"
}

var vonStatus = {
        1: "VON",
        0: "Non-VON"
}

var months = {
       1: "January",
       2: "February",
       3: "March", 
       4: "April",
       5: "May",
       6: "June",
       7: "July",
       8: "August",
       9: "September",
       10: "October",
       11: "November",
       12: "December",
}

function fetchData(){
    
    var url = "http://"+ip+":5984/"+dbName+"/_all_docs?include_docs=true";
 
    $('#recordTable').DataTable({
        "scrollX": true,
        //"scrollCollapse": "true",
        "ajax": {"url": url,
                 "dataSrc": "rows", 
                    "crossDomain": true,
                     xhrFields: {
                       withCredentials: true
                    },
                 
                },
    "rowId": "doc._id",
    "columnDefs": [ {
   'targets': 0,
   'searchable':false,
   'orderable':false,
   'className': 'dt-body-center',
   'render': function (data, type, row, meta){
       return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
   }
        
    }],
        "select": {
            "style":    'multi',
            "selector": 'td:first-child'
        },
        "columns": [
            {"data": null, defaultContent:""},
            {"data":"doc.patientMedicalRecordNumber",
             "render": function (data, type, row) {
                            if(data=="" || data==null){
                                return "-";
                               }
                            else{
                               return data;
                            }
                            
                      }
            },
            { "data": "doc._id" },
            {
                    "render":function(data, type, row, meta){
                        
                        var state = row.doc.formComplete;
                        var state2 = row.doc.form1 && row.doc.form2 && row.doc.form3;
                        var error = row.doc.error;
                        
                        console.log(error+" "+typeof(error));
                        
                        
                        if(error == "true"){
                           return "Error"
                        }
                        if(state || state2){
                            return "Complete"
                        }
                        else{
                            return "Incomplete"
                        }
                        
                    }
            },
            {"render": function (data, type, row, meta) {
                            var babyWeight = row.doc.birthWeightInGrams
                            if(babyWeight=="" || babyWeight==null){
                                return "-";
                               }
                            else{
                               if(babyWeight > 1500){
                                   return vonStatus[0]
                                  }
                                else{
                                   return vonStatus[1]
                                }
                               
                            }
                            
                      }                
            },
            {"data": "doc.exportStatus",
            "render": function (data, type, row) {
                            if(data=="" || data==null){
                                return "-";
                               }
                            else{
                               return data;
                            }
                            
                      }
            },
            {"data": "doc.dateOfBirth", 
             render: function (data, type, row) {
                            if(data=="" || data==null){
                                return "-";
                               }
                            else{
                               var splitDate = data.split('-');
                               return(splitDate[2]);
                            }
                            
                      }
            },
            { "data": "doc.birthWeightInGrams",
             "render": function (data, type, row) {
                            if(data=="" || data==null){
                                return "-";
                               }
                            else{
                               return data;
                            }
                            
                      }
            },
            
            //{"data":"doc.recordStatus"},
            {"data":"doc.dateOfBirth",
             "render": function (data, type, row) {
                            if(data=="" || data==null){
                                return "-";
                               }
                            else{
                               return data;
                            }
                            
                      }
            },
            { "data":  "doc.initialDisposition",
               render: function (data, type, row) {
                            if(data!=null){
                                return disposition[data];
                               }
                            else{
                                return disposition[9];
                            }
                            
                      }
            },
            {"data":"doc.outbornBirth",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return birthLocation[data];
                            }
                            
                      }  
            },
            {"data":"doc.invasiveVentilation",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return yesNo[data];
                            }
                            
                      }  
            },
            {"data":"doc.hypoxicIschaemicEncephalopathy",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return yesNo[data];
                            }
                            
                      }  
            },
            {"data":"doc.jaundiceNeedingPhototherapy",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return yesNo[data];
                            }
                            
                      }  
            },
            {"data":"doc.sepsisDuringAdmission",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return sepsisValues[data];
                            }
                            
                      }  
            },
                      {"data":"doc.fetalMedicineUnitFlagged",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return yesNo[data];
                            }
                            
                      }  
            },
            {"data":"doc.abnormalHeadUltrasound",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return yesNo[data];
                            }
                            
                      }  
            },
            {"data":"doc.chromosomesDone",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return yesNo[data];
                            }
                            
                      }  
            },
            
            {"data":"doc.immunizations652",
                render: function (data, type, row) {
                            if(data == "" || data == null){
                                return "-"
                            }else{
                                return yesNo[data];
                            }
                            
                      }  
            },
        ],
        buttons: [
            {   text: 'Open record',
                className: 'open',
                action: function () {
                        var checkedRows = [];
                        $('#recordTable').find('input[type="checkbox"]:checked').each(function () {
                               //this is the current checkbox
                                row = $(this).parents('tr').attr('id');
                                checkedRows.push(row);
                                });

                                if(checkedRows.length > 1){
                                    toastr.error("Can only open one form at a time");
                                }else{
                                  displayData(checkedRows[0]);  
                                }
                        }
            },
            {
                text: 'Export selected records',
                className:'submit',
                action: function () {
                    
                    var checkedRows = [];
                    var statuses = [];
                    var allComplete = true;
                    
                    $('#recordTable').find('input[type="checkbox"]:checked').each(function () {
                    //this is the current checkbox
                    row = $(this).parents('tr').attr('id');
                    status = $(this).parents('tr').find('td').eq(3).text();
                    checkedRows.push(row);
                    statuses.push(status);
                    });
                                
                    var xml = sendDataToVon(checkedRows);
                    //var xml = "This text";
                    download(xml);
                    
                    var today = new Date();
                    var time = today.getHours()+":"+today.getMinutes();
                    var dd = today.getDate();
                    var mm = today.getMonth()+1; //January is 0!
                    var yyyy = today.getFullYear();

                    if(dd<10) {
                        dd = '0'+dd
                    } 

                    if(mm<10) {
                        mm = '0'+mm
                    } 

                    today = dd +" "+months[mm]+ ' ' + yyyy + "@" + time;
                    
                    
                    for (i=0; i<checkedRows.length; i++){
                      var record = getRecordFromDatabase(checkedRows[i])
                      record.exportStatus = today;
                      updateDataInRecord(record);
                    }
                    
                    toastr.info("File Download");
                }
            },
            {
                text: 'Delete records',
                className:'submit',
                action: function ( e, dt, node, config ) {
                var checkedRows = [];   
                    
                $('#recordTable').find('input[type="checkbox"]:checked').each(function () {
                //this is the current checkbox
                row = $(this).parents('tr').attr('id');
                
                checkedRows.push(row);
                });
                var deleteChosenRecords = confirm("You are about to delete "+checkedRows.length+" record(s). Are you sure you want to continue?");
                    if(deleteChosenRecords){
                      deleteRecords(checkedRows);   
                    }   
                }
            }
        ],
     "dom": 'Bfrtip',
    });
    
    $('tbody').on('dblclick', 'tr', function () {
        var row = $(this).attr('id');
        displayData(row);
    });
    
    $('tbody').on('dblclick', 'tr', function () {
        var row = $(this).attr('id');
        displayData(row);
    });
    
    $('tbody').on('click', 'tr', function () {
        var checkbox = $(this).find('input[type="checkbox"]');
        if(checkbox.is(":checked")){
           checkbox.attr('checked', false);
        }else{
           checkbox.attr('checked', true); 
        }
    });
    
    $('#select-all').on('click', function(){
      var table = $('#recordTable').DataTable();
      // Get all rows with search applied
      var rows = table.rows({ 'search': 'applied' }).nodes();
      // Check/uncheck checkboxes for all rows in the table
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
   });  
}

/*function checkRowClick(){

        $('tr').dblclick(function () {
                //this is the current checkbox
            var row = $(this).parents('tr').attr('id');
            alert("row click checked");
            displayData(row);
            //var checkbox = $(this).parents('tr').attr()
        });  
    
     $('#select-all').on('click', function(){
      var table = $('#recordTable').dataTable();
      // Get all rows with search applied
      var rows = table.rows({ 'search': 'applied' }).nodes();
      // Check/uncheck checkboxes for all rows in the table
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
   });
}*/







