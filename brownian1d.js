var w = 500;
var h = 300;
var N = w;
var runY1 = h/2;
var runY2 = h/2;
var scaleY = d3.scale.linear().domain([-1,1]).range([-5,5])
var scaleX = d3.scale.linear().domain([0,N]).range([0,2*N])
var dataset = [];

for(var i = 0; i < N; i++) {
  dataset.push(scaleY(Math.round(Math.random())*2 - 1));
}

var svg = d3.select("#brownian1d").append("svg");
svg.attr("width", w);
svg.attr("height", h);

var lines = svg.selectAll("line")
                  .data(dataset)
                  .enter()
                  .append("line")

lines.attr("x1", function(d, i) {
  return scaleX(i);
})
  .attr("y1", function(d,i){
    var tmp = runY1;
    runY1 += d;
    return tmp;
  })
  .attr("x2", function(d,i) {
    return scaleX(i+1);
  })
  .attr("y2", function(d,i){
    runY2 += d;
    return runY2;
  })
  .attr("stroke", "black");

/*
svg.selectAll("line").data(dataset + [1]).enter()
  .append("line")
  .attr("x1", 0).attr("y1", h/2)
  .attr("x2", scaleX(N)).attr("y2", h/2)
  .attr("stroke", "black")
  .attr("stroke-opacity", 0.0059)
*/
