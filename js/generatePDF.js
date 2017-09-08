//Notes:    The html to pdf generator doesnt follow html formatting may approach different 

function savePdf(){
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
        doc.fromHTML($('#dischargeTransferHTMLPrint').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('Report.pdf');
}

