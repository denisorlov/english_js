(function statusPanelInit(){
	let statusPanel = document.createElement('div');
    statusPanel.id = 'statusPanel';
    statusPanel.style.cssText = "border: dashed 1px green; position: fixed;left: 0;bottom: 0;font-size: 1.5em;max-width: 100%;padding: 0.1em;background-color: aliceblue; border-radius: 0.2em;";
    document.body.appendChild(statusPanel);
}());

function showStatus(str, dur){
	dur = dur || 4000;
	let el = document.getElementById('statusPanel');
	el.innerHTML = str;
	setTimeout( (function(_el, _str){ 
		return ()=>{ _el.innerHTML ==_str ? _el.innerHTML = '': 0;} 
	}(el, str)), dur);
}
