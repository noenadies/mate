if ( typeof(WolframAlphaWidget) !== 'object' || WolframAlphaWidget === null ){
    var WolframAlphaWidget = {};
}
WolframAlphaWidget['99268daa1041f8111962c8ff576dd5c8'] = {
  'id'       : 89243,
  'width'    : 170,
  'height'   : 350,
  'title'    :'unique',
  'theme'    :'green',
  'output'   :'iframe',
  'popHeight': 509,
  'rowCount' : 2+0,
  'podSelectBase' : '\x26includepodid\x3DLimit\x26includepodid\x3DDefiniteIntegral\x26includepodid\x3DResult\x26includepodid\x3DDifferentialEquationSolution\x26includepodid\x3DInput\x26includepodid\x3DIndefiniteIntegral',
  'podSelect': '',
  'initialized' : false
};
WolframAlphaWidget.getInput = function( id ){
    var txt = jQuery('#wolframAlphaWidgetForm'+id+' input[name="querytemplate"]').val()
    if ( !txt || txt=='' ){
        return '';
    }

    var regex = /\${\w+}/g;
    var field = txt.match(regex);

    var param = {};
    var i = '#wolframAlphaWidgetForm'+id;
    var inputs = jQuery(i+' input:text').add(i+' input:checked').add(i+' select');
    for ( var i = 0 ; i < inputs.length ; i++ ){ //>
        var el = jQuery(inputs[i]);
        var name = el.attr('name');
        param[name] = el.val();
    }

    var result = txt;
    if ( field == null ){ return result; }

    for ( var i = 0 ; i < field.length ; i++ ){//>
        var f = field[i].slice(2,-1);               //get field name minus id
        var v = param[f];                           //get field value
        if ( typeof v == 'undefined' ){
          v = '';}
        var regex = new RegExp('\\\${'+f+'}','g');
        result = result.replace(regex,v);
    }

    return result;
}
WolframAlphaWidget.getAllInputs = function( id ){
    var result = '',
        param = {},
        i = '#wolframAlphaWidgetForm'+id,
        inputs = jQuery(i+' input:text').add(i+' input:checked').add(i+' select');
    
    for ( var i = 0 ; i < inputs.length ; i++ ){ //>
        var el = jQuery(inputs[i]);
        result += '&'+encodeURIComponent('input_'+el.attr('name'))+'='+encodeURIComponent(el.val());
    }
    return result;
}
WolframAlphaWidget.widthConstrained = function( wuid ){
    var width = 575;
    try {
        width = WolframAlphaWidget[wuid]['width'];
    }
    catch(e){}
    return ( width > document.body.clientWidth );
}

WolframAlphaWidget.heightConstrained = function( wuid ){
    var height = 450;
    try {
        height = WolframAlphaWidget[wuid]['popHeight'];
    }
    catch(e){}
    return ( height > document.documentElement.clientHeight );
}


WolframAlphaWidget.serializeById = function(wid){
  var i = '#wolframAlphaWidgetForm'+wid;
  var result = "";
  var inputs = jQuery(i+' input:text').add(i+' input:checked').add(i+' input:radio:selected').add(i+' select');
    for ( var i = 0 ; i < inputs.length ; i++ ){ //>
        var el = jQuery(inputs[i]);
        var id = el.attr('id');
        result += '&'+id+'='+encodeURIComponent( el.val() );
    }
  return result;
}


WolframAlphaWidget.loadResultIFrame = function(wid,wuid,input ){
    var podSelect = '',
        output    = '';
    try {
      podSelect = WolframAlphaWidget[wuid]['podSelect'];
      output    = WolframAlphaWidget[wuid]['output'];
    }
    catch(e){}

    var useOpacity = jQuery.browser.msie; 

    var newSrc = "http://www.wolframalpha.com/widget/input/?input="+encodeURIComponent(input)+"&id="+wuid+podSelect;

    if (window.location.protocol === 'https:'){
        newSrc = newSrc.replace('http','https');
    }

    var oldFrame = jQuery("#wolframAlphaWidgetResults"+wid);
    var newFrame = jQuery('<iframe class="wolframAlphaWidgetResults" id="wolframAlphaWidgetResults'+wid+'" width="100%" frameborder="0" style="background: transparent;" src=""></iframe>');

    newFrame.css( 'height', oldFrame.css('height') );

    if ( useOpacity ){
        newFrame.css("opacity","0").css('filter:','alpha(opacity=10)');
        newFrame.load(function(){
            jQuery(this).css("opacity","1").css('filter:','alpha(opacity=100)');
        });
    }
    oldFrame.replaceWith(newFrame);
    newFrame.attr('src',newSrc);

    jQuery('#widgetFooterInput'+wid+' .input').text(input); //fill in little input field
    if ( output == 'lightbox' ){
        WolframAlphaWidget.sizeLightbox(wid);
    }
}

WolframAlphaWidget.iFrameSubmit = function(wid,wuid,input){
    if ( WolframAlphaWidget.widthConstrained(wuid) ){
        WolframAlphaWidget.popupSubmit(wid,wuid,input,podSelect);
        return;
    }
    jQuery('#wolframAlphaWidget'+wid).addClass('expand').removeClass('collapse');
    WolframAlphaWidget.loadResultIFrame(wid,wuid,input);
}
function wolframAlphaWidget_Init89243(){

    jQuery("#wolframAlphaWidget89243 .submit").click(function(){ jQuery("#wolframAlphaWidgetForm89243").submit(); });

    jQuery("#wolframAlphaWidgetForm89243").submit(function(e){
      e.preventDefault();
      var input = WolframAlphaWidget.getInput( '89243' );
      var widget = WolframAlphaWidget['99268daa1041f8111962c8ff576dd5c8'];
      widget['podSelect'] = widget['podSelectBase'];
      WolframAlphaWidget.iFrameSubmit('89243','99268daa1041f8111962c8ff576dd5c8',input);
    
      return false;
    });
  
    var wolframWidgetIE = 5;
    var wolframWidgetQuirks = true;

    if (window.navigator.appName == "Microsoft Internet Explorer"){
      if (document.documentMode){
          wolframWidgetIE = document.documentMode;
      }
      else if (document.compatMode){
          wolframWidgetIE = ( document.compatMode == "CSS1Compat" ? 7 : 5 );
      }
    }
    else {
      wolframWidgetIE = false;
    }

    if ( document.compatMode ){
      wolframWidgetQuirks = document.compatMode != 'CSS1Compat';
    }

    //adjustments for quirks mode (most browsers need this)
    if ( wolframWidgetQuirks ){
      jQuery("table.WolframAlphaWidget").css('border-collapse','collapse');
 
      if ( wolframWidgetIE ){ //fix popups
        jQuery("#wolframAlphaWidget89243 .wolframAlphaWidgetInfoPopup").css('width','207px');
        jQuery("#wolframAlphaWidget89243 .wolframAlphaWidgetSharePopup").css('width','220px').css('right','-45px');
        
      }
    }
    else {
      if ( wolframWidgetIE == 7 ){
        jQuery("table.WolframAlphaWidget").css('border-collapse','collapse');
      }
    }
    if ( wolframWidgetIE !== false && wolframWidgetIE <= 6 ){ //ie6 fixes
      jQuery(".wolframAlphaWidgetContent").attr('align','center');
      jQuery("#wolframAlphaWidgetOverlay89243").css('height','350').css('margin-left','-1px');
    }
    var wolframWidgetWidth = jQuery("#wolframAlphaWidget89243").width();
    var wolframInnerWidth  = jQuery("#widget89243 table").eq(0).width() + 2;

    if ( wolframInnerWidth >= wolframWidgetWidth ){
      jQuery("#wolframAlphaWidget89243").width( wolframWidgetWidth + 32 );
    }
    WolframAlphaWidget['99268daa1041f8111962c8ff576dd5c8']['initialized'] = true;
    try{ wolframAlphaWidget_InitDone89243(); }catch(e){} }

WolframAlphaWidget['99268daa1041f8111962c8ff576dd5c8'].loadFunctionId = 0;

(function(){ 

    var baseCss = document.getElementById("WolframAlphaBaseStyles");
    if ( typeof(baseCss) === 'undefined' || baseCss === null ){
        baseCss = document.createElement('link');
        baseCss.id = 'WolframAlphaBaseStyles';
        baseCss.type = 'text/css';
        baseCss.rel  = 'stylesheet';
        baseCss.href = '//matematikam.ru/css/wolfram_base.css';
        document.getElementsByTagName("head")[0].appendChild( baseCss );
    } 
	wolframAlphaWidget_Load89243();
})();
function wolframAlphaWidget_Load89243(){
  if ( typeof(jQuery) === 'function' ){ 
    jQuery("#WolframAlphaScript99268daa1041f8111962c8ff576dd5c8").after( jQuery('<div class="WolframAlphaWidgetLarge collapse" style="position: relative;" id="wolframAlphaWidget89243"><div class="wolframAlphaWidgetBody"><form action="http://www.wolframalpha.com/input/" id="wolframAlphaWidgetForm89243"><table class="wolframAlphaWidgetContent"> <tr><td><input type="text" id="i0" name="query" /></td> </tr> <tr> <td><table class="submit" cellpadding="0" cellspacing="0"><tr><td class="m">Submit</td></tr></table></td></tr></table> <input type="hidden" name="i" id="i" value="" /><input type="hidden" name="querytemplate" id="querytemplate" value="[//math:${query}//]"/></form></div><div class="wolframAlphaWidgetOutput"><div  class="wolframAlphaWidgetComputingOverlay" id="wolframAlphaWidgetOverlay89243"><div class="wolframAlphaWidgetComputingSpinner">Computing...</div></div><iframe class="wolframAlphaWidgetResults" id="wolframAlphaWidgetResults89243" width="100\x25" frameborder="0" style="height: 350px; background: transparent;" src=""></iframe><div id="idkey_res"></div></div></div>') );
    clearInterval( WolframAlphaWidget['99268daa1041f8111962c8ff576dd5c8'].loadFunctionId );
    if ( 'WebkitAppearance' in document.documentElement.style ){ //get around webkit document.ready bug
        var _timer = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
              clearInterval(_timer);
              try{ wolframAlphaWidget_Init89243(); }catch(e){}
            }
        }, 10);
    }
    else {
      jQuery(document).ready( function(){ try{wolframAlphaWidget_Init89243();}catch(e){} });
    }
  }
}