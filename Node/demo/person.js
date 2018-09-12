var Person = function(){
	var name;
	return {
		getName: function(){
			return name;
		},
		setName: function(val){
			name = val;
		}
	}
}

module.exports = Person;