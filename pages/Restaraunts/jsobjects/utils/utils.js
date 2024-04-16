export default {
	getOpenClose: (openTimeStr, closeTimeStr) => {
		
		function timeStrToDate(timeStr) {
    	// Split the time string into hours, minutes, and AM/PM parts
    	const [timePart, meridiem] = timeStr.split(' ');
    	const [hours, minutes] = timePart.split(':');

    	let hours24 = parseInt(hours, 10);
    	if (meridiem === 'PM' && hours24 !== 12) {
        hours24 += 12;
    	} else if (meridiem === 'AM' && hours24 === 12) {
        hours24 = 0;
    	}

    	// Create a new Date object with the current date and the extracted time
    	const currentDate = new Date();
    	const timeDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours24, parseInt(minutes, 10));

    	return timeDate;
		}
		
		const openingTime = timeStrToDate(openTimeStr);
		const closingTime = timeStrToDate(closeTimeStr);
		const currentTime = new Date();
		
		if (currentTime >= openingTime && currentTime <= closingTime) {
    	return "Open";
		} else {
    	return "Closed";
		}
	},
	
	getColor: (string) => {
		if (string == "Open") {
			return '#22c55e';
		}
		if (string == "Closed") {
			return '#ef4444';
		}
	},
	
	getStars: (rating) => {
		const fullStar = '★';
    const emptyStar = '☆';
    const numFullStars = Math.round(rating);
    
    let stars = fullStar.repeat(numFullStars);
    
    stars += emptyStar.repeat(5 - stars.length);
    
    return stars;
	}
	
}