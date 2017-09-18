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
        "scrollCollapse": "true",
        "fixedColumns":   {
            "leftColumns": "2"
        },
        "ajax": {"url":"http://196.24.190.72:5984/test1/_all_docs?include_docs=true",
                 "dataSrc": "rows", 
                 "xhrFields": {
                    withCredentials: true
                 },
                    "crossDomain": true
                },
        "rowId": "doc._id",
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        /*select: {
            style:    'os',
            selector: 'td:first-child'
        },*/
        //order: [[ 1, 'asc' ]],
        "columns": [
            {"data": null, defaultContent:""},
            {"data":"doc.patientMedicalRecordNumber"},
            {"data":"doc.birthDate",
                render: function (data, type, row) {
                            var dummyData = formatDate();
                            return dummyData;
                      } 
             
            },
            //{"data":"doc.recordStatus"},
            { "data": "doc._id" },
            { "data": "doc.birthYear" },
            { "data": "doc.birthWeightInGrams"},
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
                            return birthLocation[data];
                      }  
            },
            {"data":null,
                      render: function (data, type, row) {
                            var dummyData = formatDate();
                            return dummyData;
                      } 
            },
            {"data":null,
                    render: function (data, type, row) {
                        var dummyData = formatDate();
                            return dummyData;
                      } 
            }
        ],
     //"dom": 'Afrtip',
     /*"buttons": [        {
            extend: 'csv',
            text: 'Copy all data',
            exportOptions: {
                modifier: {
                    search: 'none'
                }
            }
        }]*/
        
    } );
}

