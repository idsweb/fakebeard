// echo the value of this to show it is the window (calling context)
console.log(this);

// Set a property on this
function echoThisVar(){
    // this.name = "Ian"; would set the value on the Window object even in side the function
    console.log(this.name);
}
echoThisVar(); // Will log undefined
var name = "Tim";
echoThisVar(); // Now will log Tim


// Using in Callbacks
$("#myLink").on("click", function() {
	console.log(this); //points to myLink (as is the convention)
	var _this = this;  //store reference
	$.ajax({
		//ajax set up
		success: function() {
			console.log(this); //points to the global object. Huh? - behaves like a function
			console.log(_this); //better!
		}
	});
});