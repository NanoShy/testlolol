function NWoot(){
nwt = {
    autowoot: true,
    clicks: 0,
    version: 1.01,
    close: function(){ API.off(API.DJ_ADVANCE, nwt.djAdvance); API.off(API.CHAT, nwt.chat); $('#woot').unbind('click', nwt.doubleClick); },
    djAdvance: function() { if (nwt.autowoot) { setTimeout(function(){ $("#woot").click() }, 2000); }},
    doubleClick: function() { nwt.clicks++; if (nwt.clicks == 2) { nwt.autowoot = !nwt.autowoot; nwt.clicks = 0; require('app/base/Context').trigger('notify', 'icon-woot', nwt.autowoot ? 'AutoWoot is now on' : 'AutoWoot is now off'); } setTimeout(function() { nwt.clicks = 0 }, 600)}
    }
    
    API.on(API.DJ_ADVANCE, nwt.djAdvance, this);
    $("#woot").bind('click', nwt.doubleClick); 
        
    API.chatLog("Running Nano Woot V. "+nwt.version);
    $('#woot').click();
}

if(typeof nwt !== "undefined") nwt.close();

NWoot();
