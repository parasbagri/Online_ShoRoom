$(document).ready(function() {
	if((typeof emi !== 'undefined') && (emi == 'true')){
		$('#calc-emi-con').show();
	}
	$('#calc-emi-btn').click(function() {
		$('#calc-emi-con').show();
	});
	
	$('#emi-cancel-btn').click(function() {
		$('#calc-emi-con').hide();
	});

	$('#emi-proceed-btn').click(function() {
		var pr = $("#pr").val();
		$("#loan_amt").val(pr);
		$('#calc-emi-con').hide();
	});

});


function calculateEMI(){
	var pr = $("#pr").val();
	var ir = $("#ir").val();
	var tr = $("#tenure").val();
	if(pr == ''){
		$("#pr").val("50000");
		pr = "50000";
	}
	if(ir == ''){
		$("#ir").val("12");
		ir = "12";
	}
	if(tr == ''){
		$("#tenure").val("36");
		tr = "36";
	}
   //var lu = $('.btn-group > .btn.active input').attr("value");
   var P = parseFloat(pr);
   var r = parseFloat(parseFloat(ir) / 100);
   var n = parseFloat(tr);
   //if(lu == 'year'){
   //   n=n*12;
   //}
   if (P !== 0 && n !== 0 && r !== 0){
		var emiAmt = parseFloat((P * r / 12) * [Math.pow((1 + r / 12), n)] / [Math.pow((1 + r / 12), n) - 1]);
		var totAmt = emiAmt * n;
		var totInt = totAmt - P;
		$("#emiAmt").html(commaFormatted(emiAmt.toFixed(2)));
		$("#totAmt").html(commaFormatted(totAmt.toFixed(2)));
		$("#totInt").html(commaFormatted(totInt.toFixed(2)));
   }
}

function commaFormatted(yourNumber) {
	//Seperates the components of the number
	var n= yourNumber.toString().split(".");
	//Comma-fies the first part
	n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	//Combines the two sections
	var finalString = n.join(".");
	return finalString;
}