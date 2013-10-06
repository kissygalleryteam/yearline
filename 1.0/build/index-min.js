/*! timeline - v1.0 - 2013-10-06 8:36:14 PM
* Copyright (c) 2013 Letao; Licensed  */
KISSY.add("gallery/timeline/1.0/index",function(a,b,c){function d(b,c){var f=this;return this instanceof d?(f.container=a.one(b),f.cfg=a.merge({},e,c),f.set("totalMonth",12),f.init(),d.superclass.constructor.call(f,c),void 0):new d(b,c)}b.all;var e={scale:2};return a.extend(d,c,{init:function(){var b=this,c=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"moz":"opera"in window?"o":"",d=c?"-"+c+"-user-select":"user-select",e={},f=a.one('<div class="TL-CenterLine tl-centerline"></div>'),g=a.one('<div class="TL-EventBox tl-eventbox"></div>');b.set("centerLine",f),b.set("eventBox",g),b.set("space",100*b.cfg.scale),e.overflow="hidden",e.cursor="move",e[d]="none",b.container.css(e),"static"===b.container.css("position")&&b.container.css("position","relative"),b.container.append(f),b.container.append(g),b._createTimeLine(),b._resizeListBox(),b._enableDrag(),b.slideToMonth(5)},render:function(b){var c=this,d=c.get("eventBox"),e=d.one(".TL-ListBox"),f='<div class="TL-Items tl-items" data-date="{{date}}"><div class="tl-wrap"><img src="{{icon}}" class="tl-icon"><div class="tl-content"><div class="tl-title">{{title}}</div></div><span class="tl-arrow"></span></div></div>',g=[],h=[];b&&b.events&&(g=b.events),a.each(g,function(b){h.push(c._getHtml(a.clone(f),b))}),e.html(h.join("")),c.set("items",e.all(".TL-Items")),c.setPosition()},setPosition:function(){var a=this,b=a.get("items");b.each(function(a){a.css({left:Math.round(1800*Math.random()),top:0})})},fillDoub:function(a){return 10>a?"0"+a:a},slideToMonth:function(b){var c=this,d=0,e=c.get("space"),f=c.get("centerLine"),g=parseFloat(f.css("left")),h=c.get("eventBox");b=parseInt(b)-1,isNaN(b)?a.log("\u4f20\u5165\u975e\u6cd5\u53c2\u6570"):1>b||b>12?a.log("\u53c2\u6570\u8d8a\u754c\uff0c\u8bf7\u4f20\u5165[1-12]\u4e4b\u95f4\u7684\u6574\u6570"):(d=g-b*e,h.animate({left:d},.2,"easeOut",function(){}))},_getHtml:function(a,b){for(var c in b)a=a.replace(new RegExp("{{"+c+"}}","g"),b[c]);return a},_resizeListBox:function(){var b=this,c=b.get("eventBox"),d=c.one(".TL-ListBox"),e=c.one(".TL-TimeLine");d||(d=a.one('<div class="TL-ListBox tl-listbox">'),c.append(d)),d.css({left:0,top:0,width:e.width(),height:c.height()-e.height()})},_createTimeLine:function(){var b=this,c=a.one('<div class="TL-TimeLine tl-timeline">'),d=a.one('<div class="TL-MonthLine month-line">'),e=a.one('<span class="TL-MonthNumber month-number">'),f=b.get("eventBox");f.append(c);for(var g=0,h=2*b.get("totalMonth");h>=g;g++){var i=d.clone(),j=b.get("space")/2*g;if(i.css("left",j),1===g%2)i.addClass("month-half");else{i.addClass("month-start");var k=e.clone();k.html(b.fillDoub(g/2+1)+"\u6708"),g===h&&(k.html("NewYear"),i.css("left",j-2)),c.append(k),k.css("left",j+(i.outerWidth()-k.outerWidth()/2))}c.append(i)}f.css("width",b.get("totalMonth")*b.get("space"))},_enableDrag:function(){var a=this,b=a.get("eventBox"),c=0,d=0,e=0;a.container.on("mousedown",function(f){c=f.clientX,e=parseFloat(b.css("left")),a.container.on("mousemove",function(a){d=a.clientX,e+=d-c,b.css("left",e),c=d}),a.container.on("mouseup",function(){a.container.detach("mousemove"),a.container.detach("mouseup"),a._rebound(b,e)})}).on("select",function(){return!1})},_rebound:function(a,b){var c=this,d=c.get("centerLine"),e=parseFloat(d.css("left")),f=a.width();b>e&&a.animate({left:e},.2,"easeOut",function(){}),e>b+f&&a.animate({left:e-f},.2,"easeOut",function(){})}},{ATTRS:{}}),d},{requires:["node","base"]});