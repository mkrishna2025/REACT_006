class Father {
	getGender(){
		return "M";
	}
	getName(){
		return "Venkat";
	}
}

class Son extends Father {
	getName(){
		return "Prakash";
	}
	getCity(){
		return "HYD";
	}
}

module.exports = Son;