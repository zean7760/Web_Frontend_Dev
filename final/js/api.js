url = "https://api.aerisapi.com/fires/closest?p=boulder,co&filter=critical&radius=200miles&from=-10months&limit=10&&client_id=su13YtqzknJOhOdYNDUrJ&client_secret=5kmbLOO7fWt22l2G8a5rkpcGB88F0hUTPqtP9nYU";
$.getJSON(url, showResults);

function showResults(response) {
    var result_items = response.response;
    console.log(result_items);

    $("#results").empty();
    const name = result_items.map((item) => item.report.name);
    const location = result_items.map((item) => item.report.location);
    const areaAC = result_items.map((item) => item.report.areaAC);

    $("#results").append( "<div class='fireName'>" + name + "</div> <div class='fireArea'> " + areaAC + "</div> <div class='fireLocation'> " + location);


    console.log(name);
}
