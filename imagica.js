function handleImage(e) {
	if (e.files && e.files[0]){
		var reader = new FileReader();
		reader.onload = function (event) {
			
			$('#inputVideo').attr('src',event.target.result);//.width(150).height(200);
			document.getElementById('op').style.visibility = 'visible';
			
		};
		reader.readAsDataURL(e.files[0]);
	};
	document.getElementById("download").disabled=true;
}

function outputfile(name) {
		var reader = new FileReader();
		reader.onload = function (event) {
			
		$('#outputVideo').attr('src',event.target.result);//.width(150).height(200);
			
		reader.readAsDataURL(name);
	};
};
	
window.onload = function() {
	document.getElementById("reset").disabled=true;
	document.getElementById("apply").disabled=true;
	document.getElementById("download").disabled=true;
	
	document.getElementById("inputVideo").onclick = function() {
		document.getElementById("my_file").click()
	};		
};
   
function opFunction() {
	var myselect = document.getElementById("operation");
	// var opt = myselect.options[myselect.selectedIndex].value;
		if (myselect.selectedIndex==1){
			document.getElementById("slider-3").style.visibility = 'visible';
			document.getElementById("slidertext").style.visibility = 'visible';
		}
		else{
			document.getElementById("slider-3").style.visibility='hidden';
			document.getElementById("slidertext").style.visibility='hidden';
		};
		if (myselect.selectedIndex==4){
			document.getElementById("slider-4").style.visibility = 'visible';
			document.getElementById("gammavalue").style.visibility = 'visible';
		}
		else{
			document.getElementById("slider-4").style.visibility='hidden';
			document.getElementById("gammavalue").style.visibility='hidden';
		};
		if (myselect.selectedIndex!=0){
			document.getElementById("reset").disabled=false;
			document.getElementById("apply").disabled=false;
		}
		else{
			document.getElementById("reset").disabled=true;
			document.getElementById("apply").disabled=true;
		};		
	// alert(myselect.options[myselect.selectedIndex].value);
}   
   
$(function() {
            $( "#slider-3" ).slider({
				animate:true,
               range:true,
               min: 0,
               max: 255,
               values: [ 10, 245 ],
               slide: function( event, ui ) {
                  $( "#th_range" ).val(  ui.values[ 0 ] + " - " + ui.values[ 1 ] );
               }
            });
            $( "#th_range" ).val( $( "#slider-3" ).slider( "values", 0 ) +
               " - " + $( "#slider-3" ).slider( "values", 1 ) );
         });

$(function() {
            $( "#slider-4" ).slider({
               range:false,
               min: 0.1,
               max: 5,
			   step: 0.1,
               value: 1,
               slide: function( event, ui ) {
                  $( "#gamma_val" ).val(  ui.value);
               }
            });
            $( "#gamma_val" ).val( $( "#slider-4" ).slider( "value") );
         });
		 
function reset_function() {
	var myselect = document.getElementById("operation");
	myselect.selectedIndex=0;
	
	var $slider = $("#slider-3");
	$slider.slider("values", 0, 10);
	$slider.slider("values", 1, 245);
	$( "#th_range" ).val("10 - 245");
	$("#slider-4").slider("value",1);
	$( "#gamma_val" ).val("1");
	document.getElementById("slider-3").style.visibility = 'hidden';
	document.getElementById("slidertext").style.visibility = 'hidden';
	document.getElementById("slider-4").style.visibility = 'hidden';
	document.getElementById("gammavalue").style.visibility = 'hidden';
}

var id;
var width;
function apply_function() {
	document.getElementById("myProgress").style.visibility='visible';
	var myselect = document.getElementById("operation");
	if (myselect.selectedIndex==1){
			document.getElementById("slider-3").style.visibility = 'hidden';
			document.getElementById("slidertext").style.visibility = 'hidden';
	}
	else if (myselect.selectedIndex==4){
			document.getElementById("slider-4").style.visibility = 'hidden';
			document.getElementById("gammavalue").style.visibility = 'hidden';
	};	
	document.getElementById("reset").style.visibility='hidden';
	document.getElementById("download").style.visibility='hidden';
	document.getElementById("apply").style.visibility='hidden';
	document.getElementById("cancel").style.visibility='visible';
	document.getElementById("operation").style.visibility='hidden';
  var elem = document.getElementById("myBar");   
  width = 0;
  id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
		clearInterval(id);
		document.getElementById("myProgress").style.visibility='hidden';
		if (myselect.selectedIndex==1){
				document.getElementById("slider-3").style.visibility = 'visible';
				document.getElementById("slidertext").style.visibility = 'visible';
		}
		else if (myselect.selectedIndex==4){
				document.getElementById("slider-4").style.visibility = 'visible';
				document.getElementById("gammavalue").style.visibility = 'visible';
		};
		document.getElementById("download").disabled=false;
		document.getElementById("operation").style.visibility='visible';
		document.getElementById("cancel").style.visibility='hidden';
		document.getElementById("reset").style.visibility='visible';
		document.getElementById("download").style.visibility='visible';
		document.getElementById("apply").style.visibility='visible';
		var video = document.getElementById('outputVideo');
		var source = document.createElement('source');
		source.setAttribute('src', "small.webm");
		video.appendChild(source);
		// document.getElementById("outputVideo").source.setAttribute('src', "small.webm");
    } 
	else {
		width++; 
		elem.style.width = width + '%'; 
		elem.innerHTML = width * 1  + '%';
    }
  }

  
}

function cancel_function() {
	clearInterval(id);
	width=0;
	var myselect = document.getElementById("operation");
	document.getElementById("myProgress").style.visibility='hidden';
	document.getElementById("operation").style.visibility='visible';
	document.getElementById("cancel").style.visibility='hidden';
	document.getElementById("reset").style.visibility='visible';
	document.getElementById("download").style.visibility='visible';
	document.getElementById("apply").style.visibility='visible';
	if (myselect.selectedIndex==1){
			document.getElementById("slider-3").style.visibility = 'visible';
			document.getElementById("slidertext").style.visibility = 'visible';
	}
	else if (myselect.selectedIndex==4){
			document.getElementById("slider-4").style.visibility = 'visible';
			document.getElementById("gammavalue").style.visibility = 'visible';
	};
}