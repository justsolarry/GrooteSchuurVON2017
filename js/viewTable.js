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

function formatDate(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
    return today
}

function fetchData(){
        //var dbData = retrieveAllDocs();
    
    $('#jqGrid').DataTable( {
        "scrollX": true,
        //"scrollCollapse": "true",
        "ajax": {"url":"http://localhost:5984/test1/_all_docs?include_docs=true",
                 "dataSrc": "rows", 
                    "crossDomain": true
                },
        "rowId": "doc._id",
        
    columnDefs: [ {
   'targets': 0,
   'searchable':false,
   'orderable':false,
   'className': 'dt-body-center',
   'render': function (data, type, full, meta){
       return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
   }
        
    }],
        select: {
            style:    'multi',
            selector: 'td:first-child'
        },
        //order: [[ 1, 'asc' ]],

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
            {"data":"LastName",
            "className":"left",
            "render":function(data, type, full, meta){
            var state = full.form1 + full.form2 + full.form3 + !(full.error);
                
                
                if(full.error){
                    return "Errors"
                }
                else if(!state){
                    return "Incomplete"
                }
                else if(state){
                    return "Complete"
                }
            

            }
            },
            { "data": "doc.dateOfBirth", 
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
            {   
                extend: 'csv',
                text: 'Open record',
                className: 'open',
                action: function () {
    var checkedRows = [];
                    
    
    $('#jqGrid').find('input[type="checkbox"]:checked').each(function () {
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
                text: 'Submit selected records',
                className:'submit',
                action: function ( e, dt, node, config ) {
                        var checkedRows = [];
                    
    
    $('#jqGrid').find('input[type="checkbox"]:checked').each(function () {
       //this is the current checkbox
        row = $(this).parents('tr').attr('id');
        checkedRows.push(row);
        });
                    
                    sendDataToVon(checkedRows);
                }
            },
            {
                text: 'Delete records',
                className:'submit',
                action: function ( e, dt, node, config ) {
                var checkedRows = [];
                    
                $('#jqGrid').find('input[type="checkbox"]:checked').each(function () {
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
}



