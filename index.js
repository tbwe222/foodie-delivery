var coordinates;
var requests = 0;

//Variables for cityChecker
var cityElem = document.getElementById("cityCheck");
var cityButton = document.getElementById("cityChecker");
var cityInput = document.getElementById("cityZip");

//FOR TEMPLATE
function updateCity(){
	var btn = cityButton;
	if (btn != null){
		
		btn.addEventListener("click", function(e){
			
			var value = (cityInput).value;
			
			if (value != null && value >= '20000'){
				cityElem.innerHTML = "City is available.";
				cityElem.className = "green";
			}else {
				cityElem.innerHTML = "City is not yet in our system.";
				cityElem.className += " red";
			}
			
			e.preventDefault();
		});
	}
}
