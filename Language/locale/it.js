/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "it",
		api: {
			wikipedia: "it"
		},
		date: {
			month: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settebre","Ottobre","Novembre","Dicembre"],
			month_abbr: ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],
			day: ["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"],
			day_abbr: ["Dom.","Lun.","Mar.","Mer.","Gio.","Ven.","Sab."]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d mmm",
			full: "d mmmm yyyy",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM'<br/><small>'d mmmm yyyy'</small>'",
			full_long: "dddd',' d mmm yyyy 'um' HH:MM",
			full_long_small_date: "HH:MM'<br/><small>'dddd',' d mmm yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Loading Timeline... ",
			return_to_title: "Return to Title",
			expand_timeline: "Expand Timeline",
			contract_timeline: "Contract Timeline",
			wikipedia: "Wikipedia, L’enciclopedia libera",
			loading_content: "Loading Content",
			loading: "Loading"
			
		}
	}
}
