var viz;

window.onload = function() {
    var vizDiv = document.getElementById('myViz');
    var vizURL = "https://public.tableau.com/views/Presents/TreeMap";
    var options = {
      width: '600px',
      height: '540px'  
    };
    viz = new tableau.Viz(vizDiv, vizURL, options);
};

// Content below is to resolve warning for missing 'tableau' object
var tableau;