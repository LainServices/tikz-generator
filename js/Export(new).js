function pt(){
	var axisCP="";
	var curveCP="";
	var lineCP="";
	var rectangleCP="";
	
	
	var axisLable = "Axis and Lable: </br>"
	if(document.getElementById("xsize").value!=0){
	axisCP +="&nbsp X-Axis:("+document.getElementById("xsize").value+",0) Name:["+document.getElementById("xname").value+"]</br>"
	}
	if(document.getElementById("ysize").value!=0){
	axisCP +="&nbsp Y-Axis:("+document.getElementById("ysize").value+",0) Name:["+document.getElementById("yname").value+"]</br>"
	}
	if(document.getElementById("label_x_1_name").value!=""){
	axisCP += "&nbsp X-Lable_1:(0,"+document.getElementById("label_x_1").value+")</br>"
	}
	if(document.getElementById("label_x_2_name").value!=""){
	axisCP += "&nbsp X-Lable_2:("+document.getElementById("label_x_2").value+",0)</br>"
	}
	if(document.getElementById("label_y_1_name").value!=""){
	axisCP += "&nbsp Y-Lable_1:(0,"+document.getElementById("label_y_1").value+")</br>"
	}
	if(document.getElementById("label_y_2_name").value!=""){
	axisCP += "&nbsp Y-Lable_2:(0,"+document.getElementById("label_y_2").value+")</br>"
	}
	document.getElementById("axisLableC").innerHTML=axisLable;
	document.getElementById("axisCopy").innerHTML=axisCP;
	
	
    for(var j=1;j<counter_i;j++){
		if(document.getElementById("lineshow_"+j).checked==true){	
			if (document.getElementById("linedash_"+j).checked==true){
			var dashCP = " [dash] ";
			}else{
			var dashCP="";}
		var lineLable = "</br>Straight Line: </br>";
		lineCP +="&nbsp Straight Line_"+j+":("+document.getElementById("a_"+j).value+","+document.getElementById("b_"+j).value+")--("+document.getElementById("c_"+j).value+","+document.getElementById("d_"+j).value+")&nbspName["+document.getElementById("linename_"+j).value+"]&nbspColor["+document.getElementById("lineColor_"+j).value+"]&nbsp"+dashCP+"</br>";
		document.getElementById("lineLableC").innerHTML=lineLable;
		document.getElementById("lineCopy").innerHTML=lineCP;
		}
	}
	
	for(var j=1;j<counter_j;j++){
		if(document.getElementById("curveshow_"+j).checked==true){
			if(document.getElementById("curvedash_"+j).checked==true){
			var dashCP2=" [dash]";
			}else{
			var dashCP2="";}
		var curveLable="</br>Curve:</br>";
		curveCP += "&nbsp Curve_"+j+":("+document.getElementById("e_"+j).value+","+document.getElementById("f_"+j).value+")--("+document.getElementById("g_"+j).value+","+document.getElementById("h_"+j).value+")--("+document.getElementById("i_"+j).value+","+document.getElementById("j_"+j).value+")--("+document.getElementById("k_"+j).value+","+document.getElementById("l_"+j).value+")&nbspName["+document.getElementById("curvename_"+j).value+"]&nbspColor["+document.getElementById("curveColor_"+j).value+"]&nbsp"+dashCP2+"</br>";
		document.getElementById("curveLableC").innerHTML=curveLable;
		document.getElementById("curveCopy").innerHTML=curveCP;
		}
	
	}
	
	for(var j=1;j<counter_z;j++){
		if(document.getElementById("retangularshow_"+j).checked==true){	
			if (document.getElementById("retangulardash_"+j).checked==true){
			var dashCP3 = " [dash] ";
			}else{
			var dashCP3="";}
		var rectangleLable = "</br>Rectangle: </br>";
		rectangleCP +="&nbsp Rectangle_"+j+":("+document.getElementById("r_"+j).value+","+document.getElementById("s_"+j).value+")--("+document.getElementById("t_"+j).value+","+document.getElementById("u_"+j).value+")&nbspName["+document.getElementById("retangularname_"+j).value+"]&nbspColor["+document.getElementById("retangularColor_"+j).value+"]&nbsp"+dashCP+"</br>";
		document.getElementById("rectangleLableC").innerHTML=rectangleLable;
		document.getElementById("rectangleCopy").innerHTML=rectangleCP;
		}
	}
	
	
}
 
 