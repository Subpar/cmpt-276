
function diva() {
    var x = document.getElementById("act1a").value;
    var y = document.getElementById("act1b").value;
    var z = x/y;
    z = z*100+"%"
    document.getElementById("act1c").innerHTML = z;
}

function divb() {
    var x = document.getElementById("act2a").value;
    var y = document.getElementById("act2b").value;
    var z = x/y;
    z = z*100+"%"
    document.getElementById("act2c").innerHTML = z;
}

function divc() {
    var x = document.getElementById("act3a").value;
    var y = document.getElementById("act3b").value;
    var z = x/y;
    z = z*100+"%"
    document.getElementById("act3c").innerHTML = z;
}

function divd() {
    var x = document.getElementById("act4a").value;
    var y = document.getElementById("act4b").value;
    var z = x/y;
    z = z*100+"%"
    document.getElementById("act4c").innerHTML = z;
}

function meanfunc() {
	
	var top = 0*1;
	var bottom = 0;
	var count = 0;
	var total = 0;
	var xa = document.getElementById("act1a").value;
    var ya = document.getElementById("act1b").value;
  
    var xb = document.getElementById("act2a").value;
    var yb = document.getElementById("act2b").value;
    
    var xc = document.getElementById("act3a").value;
    var yc = document.getElementById("act3b").value;
    
    var xd = document.getElementById("act4a").value;
    var yd = document.getElementById("act4b").value;

	if(document.getElementById("act1c").hasChildNodes()){
		count = count+1;
		top = top + xa*1;
		bottom = bottom + ya*1;
	}
	if(document.getElementById("act2c").hasChildNodes()){
		count = count+1;
		top = top + xb*1;
		bottom = bottom + yb*1;
	}
	if(document.getElementById("act3c").hasChildNodes()){
		count = count+1;
		top = top + xc*1;
		bottom = bottom + yc*1;
	}
	if(document.getElementById("act4c").hasChildNodes()){
		count = count+1;
		top = top + xd*1;
		bottom = bottom + yd*1;
	}

	var m = top/bottom;
	
	
	m = m*100+"/100";
	if(count==0){
		m = "No input"
	}
	
    document.getElementById("total").innerHTML = m;
}

function averagefunc() {
	/*var count = 0;
	var x = document.getElementsByName("act1c")[0].textContent;
	var x1 = x*1;
	var y = document.getElementsByName("act2c")[0].textContent;
	var y1 = y*1;
	var z = document.getElementsByName("act3c")[0].textContent;
	var z1 = z*1;
	var w = document.getElementsByName("act4c")[0].textContent;
	var w1 = w*1;
	*/
	
	
	var count = 0;
	var total = 0;
	var xa = document.getElementById("act1a").value;
    var ya = document.getElementById("act1b").value;
    var za = xa/ya;
    
    var xb = document.getElementById("act2a").value;
    var yb = document.getElementById("act2b").value;
    var zb = xb/yb;
    
    var xc = document.getElementById("act3a").value;
    var yc = document.getElementById("act3b").value;
    var zc = xc/yc;
    
    var xd = document.getElementById("act4a").value;
    var yd = document.getElementById("act4b").value;
    var zd = xd/yd;

	if(document.getElementById("act1c").hasChildNodes()){
		count = count+1;
		total = total + za;
	}
	if(document.getElementById("act2c").hasChildNodes()){
		count = count+1;
		total = total + zb;
	}
	if(document.getElementById("act3c").hasChildNodes()){
		count = count+1;
		total = total + zc;
	}
	if(document.getElementById("act4c").hasChildNodes()){
		count = count+1;
		total = total + zd;
	}

	var m = (total)/count;
	
	
	m = m*100+"/100";
	
	if(count==0){
		m = "No input"
	}
	
    document.getElementById("total").innerHTML = m;
}