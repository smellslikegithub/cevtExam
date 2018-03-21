
var nodes = ["Classification", "VehicleInfo", "Engine","Fuel"];
var featureLists = {
	Classification:["Brand","Model","ModelYear"], 
	VehicleInfo:["InTrafic","Colour","Registered","TaxationMonth"],
	Engine:["Capacity", "Power"],
	Fuel:["Type", "FuelConsumption","Emmision"],
};



$(document).ready(function(){

	

	$.ajax({

		url: 'Car1.xml',
		dataType: 'xml',
		success: function(data){
			
				
				var table = '';
				var row = console.log($(data).find("Vehicle").length);
				var col = 12;

				for(var i = 0; i< Object.keys(featureLists).length; /*featureLists[nodes[i]].length;*/ i++){
					console.log ($(data).find(nodes[i]).text());
					
						
					

					
					/*for(var j = 0; j < row+1; j++){

						table += '<tr>';
						if(i ==0){
							table += '<th>';
							table += 'HELLO';
							table += '</th>';
						}
						for(var k = 0; k< col; k++){

							table += '<td>' + 'hellooooooo';
							table += '</td>'; 
						}

						table += '</tr>';


					}
					*/

	
				}
				console.log(table);
				document.write('<table>'+ table + '</table>');
				

			

			
		},
		error: function(){

			$('#result').text('failed to get the xml content');
		}

	});

});
