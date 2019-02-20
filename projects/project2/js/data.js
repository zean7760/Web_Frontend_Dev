var url = "https://data.gov.sg/api/action/datastore_search?resource_id=79a62357-49ec-4d78-9d00-50b0cf73084c";
$.getJSON(url, showGraph);
function showGraph(response){
    var result_items = response.result.records;
    $("#results").empty();

    const year = result_items.map((item) => item.year);
    const NatEdExpenitures = result_items.map((item) => item.total_expenditure_on_education);
    var trace1 = {
        x: year,
        y: [31041380,32281380, 35071380, 39001380, 41851380, 42251380, 46991380, 50621380, 54401380, 57511380, 59311380, 62621380, 65051380,69530940,73426190,77959430,85913930,90792800,96546020,102823730
        ,102823730,106261860,109834680,115159890,122804810,130990770,138605030, 144806720
        ,147202350,144165010,149581510,155063550,161428060,166791870,173799620,180282870,],
        marker: {color: 'rgb(0,39,104)'},
        name:'GDP',
        type: 'bar'
      };
      var trace2 = {
        x: year,
        y: NatEdExpenitures,
        marker: {color: 'rgb(155,58,67)'},
        name: 'education',
        type: 'bar'
      };
      var data = [trace1, trace2]
      var layout = {
        title: 'Expenditures on Education VS GDP in US',
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
          title: 'Dollars in thousands of millions',
          zeroline: false,
          gridwidth: 2
        },
        bargap :0.05
      };
      Plotly.newPlot('results', data, layout);
}
$(".learnMore").click(function(){


    $("#results").show(200);
    $(".changeimg").attr("src", "img/betterHeader.png", )
    $(".modal").show(700).fadeIn( 150 );
    $("body").addClass("has_overlay");
    $("#NatAv").hide(200);
    $("#Protests").hide(200);
    $("#usMapDiv").css("width","25%");
    $("#usMapDiv").css("margin-top","0px");
});
