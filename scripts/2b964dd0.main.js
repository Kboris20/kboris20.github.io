$(document).ready(function(){"use strict";$("a").smoothScroll(),$("div.progress").each(function(a,b){var c=$(b).children().attr("aria-valuenow"),d=$('<canvas id="myChart'+a+'" width="90" height="90"></canvas>');$(b).replaceWith(d);var e=[{value:100-c,color:"#D1D1D1",highlight:"#D1D1D1",label:"White"},{value:c-0,color:"#FDB45C",highlight:"#D1D1D1",label:"yellow"}],f=d.get(0).getContext("2d");new Chart(f).Doughnut(e,{segmentStrokeColor:"#D1D1D1",percentageInnerCutout:70})})});