jQuery('.bar').remove();
// He is a junk fellow.. Inside <td> blocking the hours
var tktRows = jQuery(jQuery('tbody')[0]).children();
var effortsObj = [],
	tempObj = {};
for(var i=0;i<tktRows.length;i++){
	var currentRow = jQuery(tktRows[i]);
	if(currentRow).hasClass('header-row'){
		tempObj.market = ((jQuery.trim(jQuery((currentRow.children())[2]).children().text())).split(' '))[2];
		//push market name
		// Get 3rd div, take the children(<a>) text. Trim it and split it to get the market
		var days = currentRow.children('.edit-day');
		tempObj.hours = [];
		for(var j=0;j<days.length;j++){
			var hour = jQuery.trim(jQuery(currentRow.children('.edit-day')[j]).html());
			if(hour == '&nbsp;'){hour = 0 } else { hour = Number(hour)}
			tempObj.hours.push(hour);
		}
	}
}
