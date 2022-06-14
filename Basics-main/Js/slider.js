let imgInd = 1;
	   showSlider(imgInd);
 
	   function currSlide(n) {
		 showSlider((imgInd = n));
	   }
	   //go to any previous or next slide
	   function preSlide(n) {
		 showSlider((imgInd += n));
	   }
	   //function to display the slider
	   function showSlider(n) {
		 let x = document.querySelectorAll(".slide"); //select the whole slide div
		 for (let i = 0; i < x.length; i++) {
		   x[i].style.display = "none";
		   //go to each and every div
		 }
		 
		 if (n > x.length) {
		   imgInd = 1;
		   //if the n is higher than the length of array then go to the first image
		 }
		 if (n < 1) {
		   imgInd = x.length;
		   //n is lower than 1 then go to the last image
		 }
		 x[imgInd - 1].style.display = "block";
 
	   
	   
	 }