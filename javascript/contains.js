
// Damit die Suche in Kleinbuchstaben funktioniert, weil die Bildschirmtastatur kleinbuchstaben liefert
	// http://stackoverflow.com/questions/11744308/how-to-make-case-insensitive-jquery-contains/11744419
	jQuery.expr.filters.icontains = function(elem, i, m) {
        return (elem.innerText || elem.textContent || "").toLowerCase().indexOf(m[3].toLowerCase()) > -1;
    }	
	
	// Suche Maschinengruppen und Aufträge
	$('#user>input').on('keyup',function(){
		// wegen der Livesuche vor dem Unsichtbarmachen des nicht gesuchten, die Klasse hide wegnehmen (gerade wenn man sich vertippt hat oder was anderes schauen will)
		$('div#lvl1 ul li, div#lvl2 ul li').removeClass('hide');
		// suche nach dem li das den String enthält, dann allen anderen li´s die Klasse hide (display none) geben
		$('div#lvl1 ul li:icontains('+$(this).val()+'), div#lvl2 ul li:icontains('+$(this).val()+')').parent().find('li:not(li:icontains('+$(this).val()+'), .nothide li)').addClass('hide');		
	 });
		
