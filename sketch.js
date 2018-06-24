//To Find discharge go here look for this value: "wml2:value".

function setup() {
	noCanvas();
	loadXML('https://waterservices.usgs.gov/nwis/iv/?format=waterml,2.0&huc=14030002&parameterCd=00060,00065&siteStatus=all', loadData)
}

function loadData(data){
	console.log(data);
	var stations = data.children;
	for(var i = 0; i<stations.length; i++){
		var locationAll = stations[i].children[0].children[1].content.split("at ")[1];
		var flow = stations[i].children[0].children[3].children[0].children[5].children[0].children[1].children[0].children[1].content;
		var river;
		var location;
		if(locationAll.indexOf('AT')> -1){
			river = locationAll.split("AT ")[0];
			location = 'At ' + locationAll.split("AT ")[1];
		}else if(locationAll.indexOf('NEAR')> -1){
			river = locationAll.split("NEAR ")[0];
			location = 'Near ' + locationAll.split("NEAR ")[1];
		}else{
			river = locationAll.split("BELOW ")[0];
			location = 'Below ' + locationAll.split("BELOW ")[1];
		}
		//console.log(locationAll);
		// console.log(flow);
		// console.log(river);
		// console.log(location);

		$('tbody').append("<tr>" + "<td>" + river + "</td>" + "<td>" + flow +  "</td>" + "<td>" + location + "</td>" + "</tr>");

	}

}

function draw() {

}
