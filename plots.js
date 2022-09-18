function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    // buildCharts(newSample);
  }
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("p").text("ID: "+result.id);
      PANEL.append("p").text("ETHNICITY: "+result.ethnicity);
      PANEL.append("p").text("GENDER: "+result.gender);
      PANEL.append("p").text("AGE: "+result.age);
      PANEL.append("p").text("LOCATION: "+result.location);
      PANEL.append("p").text("BBTYPE: "+result.bbtype);
      PANEL.append("p").text("WFREQ: "+result.wfreq);

    });
  }
  init();
