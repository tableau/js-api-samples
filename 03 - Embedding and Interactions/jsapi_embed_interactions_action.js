// Initialize the viz variable
var viz;

window.onload= function() {
// When the webpage has loaded, load the viz
	var vizDiv = document.getElementById('myViz');
	var vizURL = 'https://public.tableau.com/views/Presents/TreeMap';
	var options = {
		width: '600px',
		height: '540px',
		hideToolbar: true,
		hideTabs: true
	};
	viz = new tableau.Viz(vizDiv, vizURL, options);
};

// Switch the viz to the sheet specified
function switchView(sheetName) {
	var workbook = viz.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}

// Filter the specified dimension to the specified value(s)
function show(filterName, values) {
	var sheet = viz.getWorkbook().getActiveSheet();
    sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}

// Select the marks that have the specified value(s) for the specified dimension
function selectMarks(filterName, values) {
	var sheet = viz.getWorkbook().getActiveSheet();
    sheet.selectMarksAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}
