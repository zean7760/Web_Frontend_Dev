var url1 = "https://data.gov.sg/api/action/datastore_search?resource_id=79a62357-49ec-4d78-9d00-50b0cf73084c";
var url2 = "http://creative.colorado.edu/~zean7760/fwd/labs/lab4/data/gdpUS.json";
$.getJSON(url1, showResults);
$.getJSON(url2, showGDP);

function showGDP(response){
    console.log(response);

    if (response === undefined){
        return null;
    }else{
        var gdp_items = response.United_States;
        const gdp = gdp_items.map((item) =>item.gdp);
        console.log(gdp);
        return gdp;
    }

}

function showResults(response) {

    var result_items = response.result.records;

    $("#results").empty();
    const year = result_items.map((item) => item.year);
    const NatEdExpenitures = result_items.map((item) => item.total_expenditure_on_education);


    console.log(year);
    console.log(NatEdExpenitures);

      var trace1 = {
        x: year,
        y: year,
        name:'GDP',
        type: 'bar'
      };
      var trace2 = {
        x: year,
        y: NatEdExpenitures,
        name: 'total_expenditure_on_education',
        type: 'bar'
      };
      var data = [trace1, trace2]
      var layout = {
        title: 'Expenditure on Education in US',
        barmode: 'stack',
        font:{
          family: 'Raleway, sans-serif'
        },
        showlegend: false,
        xaxis: {
          title: 'Years (1981 - 2016)',
          tickangle: -45
        },
        yaxis: {
          title: 'Dollars',
          zeroline: false,
          gridwidth: 2
        },
        bargap :0.05
      };
      Plotly.newPlot('results', data, layout);


}
