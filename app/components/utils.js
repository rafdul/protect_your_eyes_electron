exports.formatTime= (time) => {
	if(typeof time !== 'number'){
		return(null);
	} else if (time < 0) {
		return(null);
	} else {
		let ss = Math.floor(time%60);
		let mm = Math.floor(time/60%60);

		const arrayTime = [mm, ss];
		const arrayTimeNew = [];
		for (let el of arrayTime) {
			if(el <= 9) {
				el = '0' + el;
				arrayTimeNew.push(el);
			} else {
				arrayTimeNew.push(el);
			}
		}
		const renderTime = arrayTimeNew[0] + ':' + arrayTimeNew[1];
		return (renderTime);
	}
};
