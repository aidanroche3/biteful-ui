export default {
	getStars: (rating) => {
		const fullStar = '★';
    const emptyStar = '☆';
    const numFullStars = Math.round(rating);
    
    let stars = fullStar.repeat(numFullStars);
    
    stars += emptyStar.repeat(5 - stars.length);
    
    return stars;
	},
	
	showModal: () => {
		if (List1.selectedItem != null) {
			showModal('Modal1');
		} else {
			showModal('Modal2');
		}
	}
}