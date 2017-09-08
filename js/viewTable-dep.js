function fetchGridData() {
                var gridArrayData = [];
                var dbData = retrieveAllDocs();
				// show loading message
				$("#jqGrid")[0].grid.beginReq();
                $.ajax({
                    url: "http://localhost:5984/test1/_all_docs?include_docs=true",
                    success: function (result) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var item = result.rows[i];
                            gridArrayData.push({
                                ID: item.doc._id,
                                birthYear: item.doc.birthYear,
                                birthWeight: item.doc.birthWeightInGrams,
                                initialDisposition: disposition[item.doc.initialDisposition]
                                //Link: item.link,
                                //CreationDate: item.creation_date,
                                //ViewCount: item.view_count,
                                //AnswerCount: item.answer_count
                            });                            
                        }
						// set the new data
						$("#jqGrid").jqGrid('setGridParam', { data: gridArrayData});
						// hide the show message
						$("#jqGrid")[0].grid.endReq();
						// refresh the grid
						$("#jqGrid").trigger('reloadGrid');
                    }
                });
            }

function formatTitle(cellValue, options, rowObject) {
            return cellValue.substring(0, 50) + "...";
}

function formatLink(cellValue, options, rowObject) {
            return "<a href='" + cellValue + "'>" + cellValue.substring(0, 25) + "..." + "</a>";
}

function loadGrid(){
            $("#jqGrid").jqGrid({
                colModel: [
                    {
						label: 'ID',
                        name: 'ID',
                        width: 10,
                        formatter: formatTitle
                    },
                    {
						label: 'Birth Year',
                        name: 'birthYear',
                        width: 10,
                        sorttype:'integer',
						formatter: 'number',
						align: 'right'
                        //formatter: formatLink
                    },
                    {
						label: 'Birth Weight',
                        name: 'birthWeight',
                        width: 10,
						sorttype:'integer',
						formatter: 'number',
						align: 'left'
                    },
                    {
						label: 'Initial Disposition',
                        name: 'initialDisposition',
                        width: 35,
                    }
                ],

                viewrecords: true, // show the current page, data rang and total records on the toolbar
                width: 780,
                height: 200,
                rowNum: 15,
				datatype: 'local',
                pager: "#jqGridPager",
				caption: "Load live data from stackoverflow"
            });

            fetchGridData();

}