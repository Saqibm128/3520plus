var svg;
$(document).ready(function(){
  svg = d3.select("svg")
  updateAll()
});

function updateAll() {
  let k1 = $("#input_k1").val()
  let k2 = $("#input_k2").val()
  let a = $("#input_a").val()
  let b = $("#input_b").val()
  let r1 = $("#input_r1").val()
  let r2 = $("#input_r2").val()
  let plot = svg.selectAll("#plot").data([1])
  let enteredPlot = plot.enter().append("g").attr('id', 'plot')
  plot = plot.merge(enteredPlot)
  let max = Math.max([k1, k2])
  scale = d3.scaleLinear().domain([0, max]).range([0, 600])
  let trajectories = []
  for (var i = 0; i < 10; i++) {
    trajectories.push([])
    for (var j = 0; j < 10; j++) {

    }
  }
  var line1= d3.line()
  .x(function(d, i) {
    return i * 1
  })
  .y(function(d, i) {
    return (k1 - i) / a;
  })
  var line2 = d3.line()
  .x(function(d, i) {
    return i * 1
  })
  .y(function(d, i) {
    k2 - b * i
  })
}
