// Initialize the viz variable and load the viz
var viz;

window.onload= function() {
	var vizDiv = document.getElementById('myViz');
	var vizURL = "https://public.tableau.com/views/Presents/TreeMap";
	var options = {
		width: '600px',
		height: '540px',
		hideToolbar: true,
		hideTabs: true
        // Add a function to run when the viz is done initializing
	};
	viz = new tableau.Viz(vizDiv, vizURL, options);
    
    // Add functions to run when the user selects marks or switches tabs
    
};

// Switch the viz to the sheet specified
function switchView(sheetName) {
	var workbook = viz.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}

// Filter the specified dimension to the specified value(s)
// TODO: If the active sheet is a dashboard, loops through all worksheets on that dashboard
function show(filterName, values) {
	var sheet = viz.getWorkbook().getActiveSheet();
    sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}

// Select the marks that have the specified value(s) for the specified dimension
function selectMarks(filterName, values) {
	var sheet = viz.getWorkbook().getActiveSheet();
    sheet.selectMarksAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}

// Attempts to switch views and then filter but it doesn't work
// Because it doesn't use Asynchronous Programming
function problemExample() {
	var workbook = viz.getWorkbook();
	workbook.activateSheetAsync('LineChart');
	var sheet = workbook.getActiveSheet();
	sheet.applyFilterAsync('Category','Stuffed Animal',tableau.filterUpdateType.REPLACE);
}

// Fixed solution to switch views and then filter
// Using asynchronous programming
function solution() {
	var workbook = viz.getWorkbook();
	workbook.activateSheetAsync('LineChart') // async code to filter after
    
}
