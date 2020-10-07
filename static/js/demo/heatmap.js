anychart.onDocumentReady(function () {

    // create the data 
    var data = [
      { x: "Test 1", y: "Physics", heat: 0.676 },
      { x: "Test 1", y: "Chemistry", heat: 0.691 },
      { x: "Test 1", y: "Maths", heat: 0.735 },
      { x: "Test 2", y: "Physics", heat: 0.76 },
      { x: "Test 2", y: "Chemistry", heat: 0.19 },
      { x: "Test 2", y: "Maths", heat: 0.35 },
      { x: "Test 3", y: "Physics", heat: 0.26 },
      { x: "Test 3", y: "Chemistry", heat: 0.31 },
      { x: "Test 3", y: "Maths", heat: 0.73 },
    ];        
    
    // create the chart and set the data
    chart = anychart.heatMap(data);
    
    // set the chart title
    // chart.title("Subject wise Accuracy");
    
    // create and configure the color scale.
    var customColorScale = anychart.scales.linearColor();
    customColorScale.colors(["#ACE8D4", "#00726A"]);
    
    // set the color scale as the color scale of the chart
    chart.colorScale(customColorScale);
    
    // set the container id
    chart.container("container-heat-map");
    
    // initiate drawing the chart
    chart.draw();
    
  });