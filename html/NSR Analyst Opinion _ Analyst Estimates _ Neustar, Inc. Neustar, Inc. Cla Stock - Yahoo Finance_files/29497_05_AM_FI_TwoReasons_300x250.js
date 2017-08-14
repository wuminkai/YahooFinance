(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.text4GIF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AghA4IAAhvIBDAAIAAAKIg3AAIAAAnIAzAAIAAAJIgzAAIAAA1g");
	this.shape.setTransform(261.5,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgEA4IAAhlIgmAAIAAgKIBVAAIAAAKIgmAAIAABlg");
	this.shape_1.setTransform(252.6,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgjA4IAAhvIBFAAIAAAKIg5AAIAAAnIA1AAIAAAIIg1AAIAAAsIA6AAIAAAKg");
	this.shape_2.setTransform(244.3,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAXA4Igcg1IgUAAIAAA1IgMAAIAAhvIAiAAQAGAAAIACQAHABAEAEQAGADADAGQACAGAAAIQAAAGgCAGQgCAFgEADQgEAEgFABQgFACgHAAIAiA2gAgZgFIAUAAIAKgBIAJgEQAIgFAAgKQAAgFgCgEQgCgEgEgCQgEgDgFgBIgJgBIgVAAg");
	this.shape_3.setTransform(232.2,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgLA6IgLgDIgKgGIgJgHIgHgIQgDgGgCgFQgEgKgBgNIABgLQABgGADgGQACgFADgFIAHgJQAJgHAKgEQAGgDAFgBIALgBIALABQAGABAGADQALAEAHAHQAJAJAEAKQACAGABAGIABALIgBAMQgBAGgCAFQgCAFgEAGIgHAIIgIAHIgKAGIgMADIgLABIgLgBgAgSgsQgJAEgGAHQgGAHgDAJQgEAMAAAFQACAMACAHQADAJAGAGQAGAGAJAFQAJADAJAAQAKAAAJgDQAJgFAGgGQAGgGADgJQADgJABgKQgBgJgDgIQgDgJgGgHQgGgHgJgEQgJgEgKAAQgJAAgJAEg");
	this.shape_4.setTransform(220.7,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgvA4IAAhvIAmAAQAGAAANADQALAEAIAHIAIAIIAGAKQAFALAAAMIgBANIgEALIgGAKIgIAIQgIAHgLAEQgNADgGAAgAgkAuIAYAAQAMAAAIgEIAIgFIAIgFQAGgHADgIQADgJAAgIQAAgHgDgIIgEgIIgFgHIgIgGIgIgFIgIgDIgMgBIgYAAg");
	this.shape_5.setTransform(205.3,32.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAfA4Ig/hfIgBAAIAABfIgMAAIAAhvIAPAAIBABeIAAheIAMAAIAABvg");
	this.shape_6.setTransform(193.5,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgKA5IgJgEQgJgEgEgHQgFgHgCgIQgCgHAAgIIAAhFIAMAAIAABEQAAAHABAHQACAGADAFQAEAFAGADQAGADAHAAQAIAAAGgDQAGgDAEgFQADgFACgGQABgHAAgHIAAhEIAMAAIAABFIgCAPQgCAIgFAHQgEAHgJAEQgIAFgMAAIgKgBg");
	this.shape_7.setTransform(182.3,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AghA4IAAhvIBDAAIAAAKIg3AAIAAAnIAzAAIAAAJIgzAAIAAA1g");
	this.shape_8.setTransform(173.2,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgvA4IAAhvIAlAAQAIAAAMADQALAEAIAHIAIAIIAGAKQAFALAAAMIgBANIgEALIgGAKIgIAIQgIAHgLAEQgMADgIAAgAgkAuIAYAAQAMAAAIgEIAIgFIAHgFQAHgHADgIQADgJAAgIQAAgHgDgIIgEgIIgGgHIgHgGIgIgFIgJgDIgLgBIgYAAg");
	this.shape_9.setTransform(159.7,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAfA4IhAhfIAAAAIAABfIgLAAIAAhvIAOAAIBABeIAAheIAMAAIAABvg");
	this.shape_10.setTransform(147.9,32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgKA6IgMgDIgKgGIgJgHIgGgIQgEgGgCgFQgFgKABgNIABgLQAAgGADgGQACgFAEgFIAGgJQAIgHALgEQAFgDAHgBIAKgBIALABQAHABAFADQALAEAIAHQAHAJAFAKQACAGACAGIABALIgBAMQgCAGgCAFQgCAFgDAGIgHAIIgJAHIgKAGIgMADIgLABIgKgBgAgSgsQgJAEgGAHQgGAHgDAJQgDAMAAAFQABAMACAHQADAJAGAGQAGAGAJAFQAIADAKAAQAKAAAJgDQAJgFAGgGQAGgGADgJQAEgJgBgKQABgJgEgIQgDgJgGgHQgGgHgJgEQgJgEgKAAQgKAAgIAEg");
	this.shape_11.setTransform(135.6,32.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgkA4IAAhvIAiAAIALABQAGACAFADQAGADADAGQADAFAAAJQAAAEgBAEIgEAIIgHAFIgIADIAAABQALABAHAFQAEAEACAFQABAFAAAGQAAAHgDAGQgCAGgGAEQgFAEgIACQgIACgIAAgAgZAuIAWAAIAKgBIAKgEQAEgCACgFQADgEAAgGQAAgFgCgFQgCgEgEgCQgHgGgMAAIgYAAgAgZgFIAYAAIAGgBQAEgBAEgDQADgCACgEQADgEAAgFQAAgGgDgDQgCgEgDgDIgJgDIgJgBIgUAAg");
	this.shape_12.setTransform(124.5,32.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgfA4IAAhvIAMAAIAABlIAzAAIAAAKg");
	this.shape_13.setTransform(113.4,32.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AApA4IgMgeIg5AAIgNAeIgMAAIAxhvIAJAAIAxBvgAAYAQIgYg6IgXA6IAvAAg");
	this.shape_14.setTransform(103.7,32.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgEA4IAAhlIgmAAIAAgKIBVAAIAAAKIgmAAIAABlg");
	this.shape_15.setTransform(95.1,32.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgKA6IgMgDIgKgGIgIgHIgHgIQgEgGgCgFQgFgKABgNIABgLQAAgGADgGQACgFAEgFIAHgJQAHgHALgEQAGgDAGgBIAKgBIAMABQAGABAFADQALAEAIAHQAHAJAFAKQADAGABAGIABALIgBAMQgBAGgDAFQgCAFgDAGIgHAIIgJAHIgKAGIgLADIgMABIgKgBgAgSgsQgJAEgGAHQgGAHgDAJQgDAMgBAFQACAMACAHQADAJAGAGQAGAGAJAFQAIADAKAAQAKAAAJgDQAJgFAGgGQAGgGADgJQADgJAAgKQAAgJgDgIQgDgJgGgHQgGgHgJgEQgJgEgKAAQgKAAgIAEg");
	this.shape_16.setTransform(84.8,32.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgEA4IAAhlIgmAAIAAgKIBVAAIAAAKIgmAAIAABlg");
	this.shape_17.setTransform(74.6,32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgIAWQgEgDgDgDQgEgDgBgEQgCgFAAgEQAAgDACgFQABgEAEgDQADgDAEgCQAFgCADAAQAEAAAFACIAHAFQADADACAEQACAFAAADQAAAEgCAFIgFAHIgHAGQgFABgEAAIgIgBgAgGgRIgHAFIgEAGQgCAEAAACQAAAEACADIAEAHIAHAEQADABADAAQAEAAADgBIAHgEIAEgHQABgDAAgEQAAgCgBgEIgEgGIgHgFQgDgBgEAAQgDAAgDABgAAFANIgFgLIgDAAIAAALIgFAAIAAgYIAIAAIADAAIADABIADACIAAAEQAAADgBABIgFABIAHAMgAgDAAIADAAIADgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgDgBIgDAAg");
	this.shape_18.setTransform(65.8,27.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgEA4IAAgxIgrg+IAPAAIAgA3IAig3IAOAAIgrA+IAAAxg");
	this.shape_19.setTransform(58.5,32.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgEA4IAAhlIgmAAIAAgKIBVAAIAAAKIgmAAIAABlg");
	this.shape_20.setTransform(49.9,32.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgEA4IAAhvIAJAAIAABvg");
	this.shape_21.setTransform(43.9,32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgfA4IAAhvIAMAAIAABlIAzAAIAAAKg");
	this.shape_22.setTransform(39,32.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgiA4IAAhvIBEAAIAAAKIg5AAIAAAnIA1AAIAAAIIg1AAIAAAsIA7AAIAAAKg");
	this.shape_23.setTransform(30.5,32.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgvA4IAAhvIAmAAQAGAAANADQAKAEAJAHIAIAIIAGAKQAFALAAAMIgBANIgEALIgGAKIgIAIQgJAHgKAEQgNADgGAAgAgjAuIAWAAQANAAAIgEIAJgFIAHgFQAGgHADgIQADgJAAgIQAAgHgDgIIgEgIIgFgHIgHgGIgJgFIgIgDIgNgBIgWAAg");
	this.shape_24.setTransform(20.3,32.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgEA4IAAhvIAJAAIAABvg");
	this.shape_25.setTransform(12.4,32.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AghA4IAAhvIBDAAIAAAKIg3AAIAAAnIAzAAIAAAJIgzAAIAAA1g");
	this.shape_26.setTransform(6.9,32.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgjA4IAAhvIBFAAIAAAKIg5AAIAAAnIA1AAIAAAIIg1AAIAAAsIA6AAIAAAKg");
	this.shape_27.setTransform(242.9,12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AAeA4IAAg1Ig7AAIAAA1IgMAAIAAhvIAMAAIAAAxIA7AAIAAgxIAMAAIAABvg");
	this.shape_28.setTransform(232.7,12.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgEA4IAAhlIgmAAIAAgKIBVAAIAAAKIgmAAIAABlg");
	this.shape_29.setTransform(223,12.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AAXA4Igcg1IgUAAIAAA1IgLAAIAAhvIAhAAQAGAAAHACQAIABAEAEQAGADACAGQADAGABAIQgBAGgCAGQgCAFgDADQgEAEgGABQgFACgHAAIAiA2gAgZgFIAUAAIAKgBIAJgEQAIgFAAgKQAAgFgCgEQgCgEgEgCQgDgDgGgBIgKgBIgUAAg");
	this.shape_30.setTransform(211.8,12.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgjA4IAAhvIBFAAIAAAKIg5AAIAAAnIA1AAIAAAIIg1AAIAAAsIA6AAIAAAKg");
	this.shape_31.setTransform(202.7,12.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgvA4IAAhvIAlAAQAIAAAMADQAKAEAJAHIAIAIIAGAKQAFALAAAMIgBANIgEALIgGAKIgIAIQgJAHgKAEQgMADgIAAgAgkAuIAYAAQAMAAAIgEIAIgFIAHgFQAHgHADgIQADgJAAgIQAAgHgDgIIgEgIIgGgHIgHgGIgIgFIgJgDIgLgBIgYAAg");
	this.shape_32.setTransform(192.5,12.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgEA4IAAhvIAJAAIAABvg");
	this.shape_33.setTransform(184.6,12.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgJA6IgKgDIgJgFIgHgIIAKgHQAEAGAGAEQAHAEAIAAIAIgBIAIgFQAEgCACgFQACgEAAgFQAAgGgCgEQgCgEgEgDIgJgEIgIgDIgMgDQgFgCgEgDQgFgEgCgFQgDgFAAgIQAAgIADgGQAEgGAFgEQAFgDAHgCIAKgCQAMAAAIAEQAIAEAEAFIgJAIQgDgFgGgDQgGgDgIAAIgHABQgEABgEADQgDADgCAEQgCADAAAGQAAAFACAEQACAEADACIAIAEIAHADIAMAEQAGABAFADQAFADADAHQADAFAAAIQAAAJgDAGQgEAGgFAEQgFAEgHACQgGACgGAAIgJgBg");
	this.shape_34.setTransform(178.6,12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AAfA4IhAhfIAAAAIAABfIgLAAIAAhvIAOAAIBABeIAAheIALAAIAABvg");
	this.shape_35.setTransform(168.7,12.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgKA6IgMgEIgKgFIgIgHIgHgJQgEgEgCgGQgFgKABgNIABgLQAAgGADgFQACgGAEgFIAHgJQAHgHALgFQAGgCAGgBIAKgBIAMABQAGABAFACQALAFAIAHQAHAJAFALQADAFABAGIABALIgBAMQgBAGgDAFQgCAGgDAEIgHAJIgJAHIgKAFIgLAEIgMABIgKgBgAgSgsQgJAEgGAHQgGAGgDAJQgDANgBAFQACANACAFQADAJAGAHQAGAGAJAEQAIAFAKAAQAKAAAJgFQAJgEAGgGQAGgHADgJQADgIAAgKQAAgJgDgJQgDgJgGgGQgGgHgJgEQgJgEgKAAQgKAAgIAEg");
	this.shape_36.setTransform(156.4,12.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgDA6IgLgEIgKgFIgJgHIgHgJIgFgKQgCgFgBgGIgBgMIABgLQABgGACgFQACgGAEgFIAHgJQAIgHAKgFQAGgCAGgBIAKgBIAMABIALAEQAGACAEAEQAEADADAEIgJAHIgFgFIgHgFQgEgCgFgBQgFgCgFAAQgJAAgJAEQgJAEgGAHIgFAHIgEAIQgDANAAAFQAAAJADAJQADAJAHAHQAGAGAIAEIAKAEIAIABQAKAAAIgFQAJgDAGgJIAJAFIgHAJIgJAGQgGADgGACQgHACgHAAIgLgBg");
	this.shape_37.setTransform(144.8,12.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgKA6IgMgEIgKgFIgJgHIgGgJQgEgEgCgGQgFgKABgNIABgLQAAgGADgFQACgGAEgFIAGgJQAIgHALgFQAFgCAHgBIAKgBIALABQAHABAFACQALAFAIAHQAHAJAFALQACAFACAGIABALIgBAMQgCAGgCAFQgCAGgDAEIgHAJIgJAHIgKAFIgMAEIgLABIgKgBgAgSgsQgJAEgGAHQgGAGgDAJQgDANAAAFQABANACAFQADAJAGAHQAGAGAJAEQAIAFAKAAQAKAAAJgFQAJgEAGgGQAGgHADgJQAEgIgBgKQABgJgEgJQgDgJgGgGQgGgHgJgEQgJgEgKAAQgKAAgIAEg");
	this.shape_38.setTransform(129.3,12.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AgEA4IAAhlIgmAAIAAgKIBVAAIAAAKIgmAAIAABlg");
	this.shape_39.setTransform(119,12.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AgJA6IgKgDIgJgFIgHgIIAKgHQAEAGAGAEQAHAEAIAAIAIgBIAIgFQAEgCACgFQACgEAAgFQAAgGgCgEQgCgEgEgDIgJgEIgIgDIgMgDQgFgCgEgDQgFgEgCgFQgDgFAAgIQAAgIADgGQAEgGAFgEQAFgDAHgCIAKgCQAMAAAIAEQAIAEAEAFIgJAIQgDgFgGgDQgGgDgIAAIgHABQgEABgEADQgDADgCAEQgCADAAAGQAAAFACAEQACAEADACIAIAEIAHADIAMAEQAGABAFADQAFADADAHQADAFAAAIQAAAJgDAGQgEAGgFAEQgFAEgHACQgGACgGAAIgJgBg");
	this.shape_40.setTransform(107.5,12.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AAfA4IhAhfIAAAAIAABfIgLAAIAAhvIAOAAIBABeIAAheIAMAAIAABvg");
	this.shape_41.setTransform(97.6,12.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgKA6IgMgEIgKgFIgIgHIgHgJQgEgEgCgGQgFgKABgNIABgLQAAgGADgFQACgGAEgFIAHgJQAHgHALgFQAGgCAGgBIAKgBIAMABQAGABAFACQALAFAIAHQAHAJAFALQADAFABAGIABALIgBAMQgBAGgDAFQgCAGgDAEIgHAJIgJAHIgKAFIgLAEIgMABIgKgBgAgSgsQgJAEgGAHQgGAGgDAJQgDANgBAFQACANACAFQADAJAGAHQAGAGAJAEQAIAFAKAAQAKAAAJgFQAJgEAGgGQAGgHADgJQADgIAAgKQAAgJgDgJQgDgJgGgGQgGgHgJgEQgJgEgKAAQgKAAgIAEg");
	this.shape_42.setTransform(85.3,12.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AgJA6IgKgDIgJgFIgHgIIAKgHQAEAGAGAEQAHAEAIAAIAIgBIAIgFQAEgCACgFQACgEAAgFQAAgGgCgEQgCgEgEgDIgJgEIgIgDIgMgDQgFgCgEgDQgFgEgCgFQgDgFAAgIQAAgIADgGQAEgGAFgEQAFgDAHgCIAKgCQAMAAAIAEQAIAEAEAFIgJAIQgDgFgGgDQgGgDgIAAIgHABQgEABgEADQgDADgCAEQgCADAAAGQAAAFACAEQACAEADACIAIAEIAHADIAMAEQAGABAFADQAFADADAHQADAFAAAIQAAAJgDAGQgEAGgFAEQgFAEgHACQgGACgGAAIgJgBg");
	this.shape_43.setTransform(74.5,12.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AApA4IgNgeIg4AAIgNAeIgMAAIAxhvIAJAAIAxBvgAAZAQIgZg6IgYA6IAxAAg");
	this.shape_44.setTransform(65.1,12.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgiA4IAAhvIBEAAIAAAKIg5AAIAAAnIA1AAIAAAIIg1AAIAAAsIA7AAIAAAKg");
	this.shape_45.setTransform(55.7,12.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AAXA4Igcg1IgUAAIAAA1IgMAAIAAhvIAiAAQAGAAAIACQAGABAFAEQAGADACAGQADAGAAAIQAAAGgCAGQgCAFgDADQgFAEgFABQgFACgHAAIAiA2gAgZgFIAUAAIAKgBIAJgEQAIgFAAgKQAAgFgCgEQgCgEgEgCQgDgDgGgBIgKgBIgUAAg");
	this.shape_46.setTransform(47,12.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AgKA6IgMgEIgKgFIgJgHIgGgJQgEgEgCgGQgFgKABgNIABgLQAAgGADgFQACgGAEgFIAGgJQAIgHALgFQAFgCAHgBIAKgBIALABQAHABAFACQALAFAIAHQAHAJAFALQACAFACAGIABALIgBAMQgCAGgCAFQgCAGgDAEIgHAJIgJAHIgKAFIgMAEIgLABIgKgBgAgSgsQgJAEgGAHQgGAGgDAJQgDANAAAFQABANACAFQADAJAGAHQAGAGAJAEQAIAFAKAAQAKAAAJgFQAJgEAGgGQAGgHADgJQAEgIgBgKQABgJgEgJQgDgJgGgGQgGgHgJgEQgJgEgKAAQgKAAgIAEg");
	this.shape_47.setTransform(32.1,12.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AAcA4IgchfIAAAAIgcBfIgNAAIghhvIAMAAIAcBfIAdhfIALAAIAcBfIABAAIAbhfIANAAIgiBvg");
	this.shape_48.setTransform(18.3,12.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#231F20").s().p("AgEA4IAAhlIgmAAIAAgKIBVAAIAAAKIgmAAIAABlg");
	this.shape_49.setTransform(6.6,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,45.7);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgpBGIAAiLIBTAAIAAAMIhFAAIAAAxIBAAAIAAALIhAAAIAABDg");
	this.shape.setTransform(182.1,78.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgFBGIAAh/IgwAAIAAgMIBrAAIAAAMIgwAAIAAB/g");
	this.shape_1.setTransform(170.9,78.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgrBGIAAiLIBVAAIAAAMIhIAAIAAAxIBEAAIAAALIhEAAIAAA2IBLAAIAAANg");
	this.shape_2.setTransform(160.4,78.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAeBGIgmhCIgYAAIAABCIgOAAIAAiLIAqAAQAIAAAJACQAJACAGAEQAHAFADAHQAEAHAAAKQAAAIgDAHQgDAGgEAFQgFAEgHACQgGACgJABIAqBDgAgggGIAZAAQAHAAAGgCQAIgBAEgEQAKgGAAgNQAAgHgDgEQgDgFgFgDQgEgDgHgCIgMgBIgaAAg");
	this.shape_3.setTransform(144.9,78.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgOBIQgHgBgHgDIgNgGQgFgEgFgFIgJgLQgEgGgDgHQgFgNAAgQQAAgHABgHIAEgOQADgHAEgGIAJgLQAJgKAOgFIAOgFIAOgBIAOABQAIACAHADQANAFAKAKQAKAKAFAOQAEAGABAIQABAHAAAHQAAAIgBAHQgBAHgEAHQgCAHgEAGIgJALIgLAJIgMAGQgHADgIABQgHACgHAAQgHAAgHgCgAgXg3QgLAFgIAIQgHAJgEALQgEAPAAAHQABAQADAHQAEALAHAJQAIAIALAFQALAFAMAAQANAAALgFQALgFAIgIQAHgJAEgLQAEgLAAgMQAAgLgEgLQgEgLgHgJQgIgIgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_4.setTransform(130.3,78.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("Ag7BGIAAiLIAvAAQAIAAAQAEQANAEAMAJIAJAKQAEAGAEAHQAGANAAAQQAAAIgCAIQgBAIgDAGQgEAHgEAGIgJAKQgMAIgNAFQgQAEgIAAgAgtA5IAdAAQAQAAAKgFIAKgFIAJgIQAIgIAEgKQAEgLAAgKQAAgKgEgKIgFgKIgHgIIgJgIIgKgGQgGgCgFgBQgHgCgIAAIgdAAg");
	this.shape_5.setTransform(110.9,78.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAnBGIhQh4IgBAAIAAB4IgOAAIAAiLIASAAIBQB2IAAAAIAAh2IAPAAIAACLg");
	this.shape_6.setTransform(95.9,78.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgNBHQgGgCgGgDQgKgFgGgIQgGgJgCgJQgDgLAAgIIAAhXIAPAAIAABVQAAAJACAIQACAIAEAGQAFAHAHADQAIAEAJAAQALAAAGgEQAIgDAFgHQAEgGACgIQACgIAAgJIAAhVIAOAAIAABXQABAIgDALQgCAJgGAJQgGAIgLAFQgJAGgQAAQgGAAgHgBg");
	this.shape_7.setTransform(81.8,79);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgpBGIAAiLIBTAAIAAAMIhFAAIAAAxIBAAAIAAALIhAAAIAABDg");
	this.shape_8.setTransform(70.2,78.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("Ag7BGIAAiLIAvAAQAJAAAPAEQANAEALAJIAKAKQAFAGADAHQAGANAAAQQAAAIgBAIQgCAIgDAGQgDAHgFAGIgKAKQgLAIgNAFQgPAEgJAAgAgtA5IAdAAQAQAAAJgFIALgFIAJgIQAIgIAEgKQAEgLAAgKQAAgKgEgKIgFgKIgHgIIgJgIIgLgGQgFgCgFgBQgHgCgIAAIgdAAg");
	this.shape_9.setTransform(53.1,78.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAnBGIhRh4IAAAAIAAB4IgOAAIAAiLIASAAIBQB2IABAAIAAh2IAOAAIAACLg");
	this.shape_10.setTransform(38.2,78.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgOBIQgHgBgHgDIgNgGQgGgEgEgFIgJgLQgEgGgCgHQgHgNABgQQgBgHACgHIAFgOQACgHAEgGIAJgLQAJgKAOgFIAOgFIAOgBIAPABQAHACAHADQAOAFAJAKQAKAKAGAOQADAGABAIQABAHAAAHQAAAIgBAHQgBAHgDAHQgDAHgEAGIgJALIgKAJIgNAGQgHADgHABQgHACgIAAQgGAAgIgCgAgXg3QgLAFgIAIQgHAJgEALQgEAPAAAHQABAQADAHQAEALAHAJQAIAIALAFQALAFAMAAQANAAALgFQALgFAIgIQAHgJAEgLQAEgLAAgMQAAgLgEgLQgEgLgHgJQgIgIgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_11.setTransform(22.6,78.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AguBGIAAiLIAqAAIAOABQAJACAGAEQAHAEAEAHQAEAHAAALQAAAFgCAFIgFAJQgDAFgFACIgKAEIAAABQANABAKAHQAEAFACAGQADAGAAAIQAAAJgEAHQgEAHgHAGQgGAFgKACQgKADgKAAgAggA6IAbAAQAGAAAHgCQAHgBAGgDQAFgEADgFQADgFAAgIQAAgHgCgFQgDgFgEgEQgKgHgPAAIgeAAgAgggHIAdAAQAEAAAFgCQAFgBAFgDQAEgDADgEQACgFAAgHQAAgHgCgFQgDgEgFgDQgEgDgGgCIgMgBIgZAAg");
	this.shape_12.setTransform(8.6,78.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgnBGIAAiLIAOAAIAAB+IBAAAIAAANg");
	this.shape_13.setTransform(143.5,57.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAzBGIgPglIhIAAIgPAlIgPAAIA8iLIAMAAIA+CLgAAfAUIgfhJIgeBJIA9AAg");
	this.shape_14.setTransform(131.2,57.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgGBGIAAh/IgvAAIAAgMIBrAAIAAAMIgvAAIAAB/g");
	this.shape_15.setTransform(120.3,57.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgOBIQgHgBgHgDIgNgGQgFgEgFgFIgJgLQgEgGgDgHQgFgNgBgQQAAgHACgHIAEgOQADgHAEgGIAJgLQAKgKANgFIAOgFIAOgBIAOABQAIACAHADQANAFAKAKQAKAKAFAOQADAGACAIQABAHABAHQgBAIgBAHQgCAHgDAHQgCAHgEAGIgJALIgLAJIgMAGQgHADgIABQgHACgHAAQgHAAgHgCgAgXg3QgLAFgHAIQgIAJgEALQgEAPAAAHQABAQADAHQAEALAIAJQAHAIALAFQALAFAMAAQANAAALgFQALgFAHgIQAIgJAEgLQAEgLAAgMQAAgLgEgLQgEgLgIgJQgHgIgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_16.setTransform(107.3,57.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgGBGIAAh/IgvAAIAAgMIBrAAIAAAMIgwAAIAAB/g");
	this.shape_17.setTransform(94.3,57.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgKAbQgGgDgEgEQgEgEgCgFQgCgFAAgGQAAgEACgGQACgFAEgEQAEgEAGgDQAFgCAFAAQAFAAAGACQAGADADAEQAEAEADAFQACAGAAAEQAAAGgCAFQgDAFgEAEQgDAEgGADQgGACgFAAQgFAAgFgCgAgIgVQgFACgDADQgEADgCAFQgBAEAAAEQAAAFABAEQACAFAEADQADAEAFACQAEACAEAAQAEAAAGgCQAEgCADgEQADgDACgFQACgEAAgFQAAgEgCgEQgCgFgDgDQgDgDgEgCQgGgCgEAAQgEAAgEACgAAGAQIgGgOIgEAAIAAAOIgGAAIAAgfIAKAAIAEAAIAEACIADADIABAFQAAADgCACQgCABgEABIAJAOgAgEgBIAEAAIADgBQABAAABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgEgBIgEAAg");
	this.shape_18.setTransform(83,51.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgGBGIAAg9Ig1hOIASAAIApBEIArhEIARAAIg1BOIAAA9g");
	this.shape_19.setTransform(73.7,57.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgGBGIAAh/IgvAAIAAgMIBrAAIAAAMIgvAAIAAB/g");
	this.shape_20.setTransform(62.8,57.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgGBGIAAiLIAMAAIAACLg");
	this.shape_21.setTransform(55.1,57.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgmBGIAAiLIANAAIAAB+IBBAAIAAANg");
	this.shape_22.setTransform(48.8,57.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgsBGIAAiLIBWAAIAAAMIhHAAIAAAxIBDAAIAAALIhDAAIAAA2IBJAAIAAANg");
	this.shape_23.setTransform(38.1,57.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("Ag7BGIAAiLIAvAAQAJAAAQAEQANAEALAJIAJAKQAEAGADAHQAHANAAAQQAAAIgCAIQgBAIgEAGQgDAHgEAGIgJAKQgLAIgNAFQgQAEgJAAgAgtA5IAdAAQAQAAAKgFIALgFIAJgIQAHgIAEgKQAEgLAAgKQAAgKgEgKIgFgKIgGgIIgJgIIgLgGQgGgCgFgBQgHgCgIAAIgdAAg");
	this.shape_24.setTransform(25.2,57.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgGBGIAAiLIANAAIAACLg");
	this.shape_25.setTransform(15.2,57.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgpBGIAAiLIBTAAIAAAMIhFAAIAAAxIBAAAIAAALIhAAAIAABDg");
	this.shape_26.setTransform(8.2,57.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgsBGIAAiLIBWAAIAAAMIhHAAIAAAxIBCAAIAAALIhCAAIAAA2IBJAAIAAANg");
	this.shape_27.setTransform(133.8,36.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AAmBGIAAhDIhLAAIAABDIgPAAIAAiLIAPAAIAAA9IBLAAIAAg9IAOAAIAACLg");
	this.shape_28.setTransform(120.8,36.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgFBGIAAh/IgwAAIAAgMIBrAAIAAAMIgwAAIAAB/g");
	this.shape_29.setTransform(108.5,36.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AAdBGIglhCIgYAAIAABCIgOAAIAAiLIApAAQAJAAAIACQAKACAGAEQAHAFADAHQAEAHAAAKQAAAIgDAHQgDAGgFAFQgEAEgHACQgGACgJABIAqBDgAgggGIAZAAQAHAAAGgCQAIgBAEgEQAKgGAAgNQgBgHgCgEQgDgFgEgDQgFgDgHgCIgMgBIgaAAg");
	this.shape_30.setTransform(94.2,36.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgsBGIAAiLIBWAAIAAAMIhHAAIAAAxIBDAAIAAALIhDAAIAAA2IBJAAIAAANg");
	this.shape_31.setTransform(82.8,36.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("Ag7BGIAAiLIAvAAQAIAAAQAEQAOAEALAJIAJAKQAFAGADAHQAGANAAAQQAAAIgCAIQgBAIgDAGQgDAHgFAGIgJAKQgLAIgOAFQgQAEgIAAgAgtA5IAdAAQAQAAAKgFIALgFIAJgIQAHgIAEgKQAEgLAAgKQAAgKgEgKIgFgKIgGgIIgJgIIgLgGQgGgCgFgBQgHgCgIAAIgdAAg");
	this.shape_32.setTransform(69.8,36.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgGBGIAAiLIANAAIAACLg");
	this.shape_33.setTransform(59.9,36.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgMBJIgMgEQgGgDgFgEQgFgEgEgFIANgJQAEAHAJAFQAIAFAKAAIAKgBQAGgCAEgDQAFgEADgFQACgFAAgHQAAgHgCgFQgDgFgFgDQgFgEgGgCIgLgEIgOgEQgHgCgFgFQgGgEgDgHQgDgGAAgKQAAgKAEgIQAEgHAHgFQAGgFAIgCQAIgCAGAAQAOAAALAFQAKAFAFAHIgLAJQgFgGgHgEQgHgEgLAAIgIACQgGABgEAEQgEADgDAFQgDAFAAAHQAAAHADAEQACAEAFAEIAKAFIAJAEIAPAFQAHABAGAEQAGAFAEAHQAEAGAAALQAAALgEAHQgEAIgHAFQgGAFgIACQgJADgHAAIgMgBg");
	this.shape_34.setTransform(52.1,36.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AAnBGIhRh4IAAAAIAAB4IgOAAIAAiLIASAAIBQB2IABAAIAAh2IAOAAIAACLg");
	this.shape_35.setTransform(39.6,36.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgOBIQgHgBgHgDIgMgGQgHgEgEgFIgJgLQgEgGgCgHQgHgNAAgQQABgHABgHIAFgOQACgHAEgGIAJgLQAKgKANgFIAOgFIAOgBIAPABQAHACAHADQANAFAKAKQAKAKAGAOQADAGABAIQABAHAAAHQAAAIgBAHQgBAHgDAHQgDAHgEAGIgJALIgKAJIgNAGQgHADgHABQgIACgHAAQgGAAgIgCgAgXg3QgLAFgIAIQgHAJgEALQgEAPAAAHQABAQADAHQAEALAHAJQAIAIALAFQALAFAMAAQANAAALgFQALgFAIgIQAHgJAEgLQAEgLAAgMQAAgLgEgLQgEgLgHgJQgIgIgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_36.setTransform(24.1,36.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgEBIQgHgBgGgDIgNgGIgLgJIgJgLIgGgNIgFgOQgBgHAAgIQAAgHABgHIAFgOQACgHAEgGIAJgLQAKgKAOgFIANgFIAOgBQAIAAAIACQAHABAGADIANAHQAFAEAEAGIgNAIIgFgGQgEgEgFgCIgLgFQgGgBgHAAQgLAAgMAFQgKAFgIAIIgGAJIgGALQgDAPAAAHQAAAMADALQAEALAIAJQAIAIAKAFQAGADAHABQADABAHAAQANAAALgFQALgFAHgLIALAHQgEAGgFAEQgFAFgGAEQgHAEgJACQgHACgKAAQgIAAgGgCg");
	this.shape_37.setTransform(9.5,36.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgOBIQgHgBgHgDIgNgGQgFgEgFgFIgJgLQgEgGgDgHQgFgNgBgQQAAgHACgHIAEgOQADgHAEgGIAJgLQAKgKANgFIAOgFIAOgBIAOABQAIACAHADQANAFAKAKQAKAKAFAOQADAGACAIQABAHABAHQgBAIgBAHQgCAHgDAHQgCAHgEAGIgJALIgLAJIgMAGQgHADgIABQgHACgHAAQgHAAgHgCgAgXg3QgLAFgHAIQgIAJgEALQgEAPAAAHQABAQADAHQAEALAIAJQAHAIALAFQALAFAMAAQANAAALgFQALgFAHgIQAIgJAEgLQAEgLAAgMQAAgLgEgLQgEgLgIgJQgHgIgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_38.setTransform(163.1,14.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AgGBGIAAh/IgvAAIAAgMIBrAAIAAAMIgwAAIAAB/g");
	this.shape_39.setTransform(150.1,14.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AgMBJIgMgEQgGgDgFgEQgFgEgEgFIANgJQAEAHAJAFQAIAFAKAAIAKgBQAGgCAEgDQAFgEADgFQACgFAAgHQAAgHgCgFQgDgFgFgDQgFgEgGgCIgLgEIgOgEQgHgCgFgFQgGgEgDgHQgDgGAAgKQAAgKAEgIQAEgHAHgFQAGgFAIgCQAIgCAGAAQAOAAALAFQAKAFAFAHIgLAJQgFgGgHgEQgHgEgLAAIgIACQgGABgEAEQgEADgDAFQgDAFAAAHQAAAHADAEQACAEAFAEIAKAFIAJAEIAPAFQAHABAGAEQAGAFAEAHQAEAGAAALQAAALgEAHQgEAIgHAFQgGAFgIACQgJADgHAAIgMgBg");
	this.shape_40.setTransform(135.3,14.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AAnBGIhQh4IgBAAIAAB4IgOAAIAAiLIASAAIBQB2IAAAAIAAh2IAPAAIAACLg");
	this.shape_41.setTransform(122.8,14.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgOBIQgHgBgHgDIgNgGQgFgEgFgFIgJgLQgEgGgDgHQgFgNgBgQQAAgHACgHIAEgOQADgHAEgGIAJgLQAKgKANgFIAOgFIAOgBIAOABQAIACAHADQANAFAKAKQAKAKAFAOQADAGACAIQABAHABAHQgBAIgBAHQgCAHgDAHQgCAHgEAGIgJALIgLAJIgMAGQgHADgIABQgHACgHAAQgHAAgHgCgAgXg3QgLAFgHAIQgIAJgEALQgEAPAAAHQABAQADAHQAEALAIAJQAHAIALAFQALAFAMAAQANAAALgFQALgFAHgIQAIgJAEgLQAEgLAAgMQAAgLgEgLQgEgLgIgJQgHgIgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_42.setTransform(107.3,14.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AgMBJIgMgEQgGgDgFgEQgFgEgEgFIANgJQAEAHAJAFQAIAFAKAAIAKgBQAGgCAEgDQAFgEADgFQACgFAAgHQAAgHgCgFQgDgFgFgDQgFgEgGgCIgLgEIgOgEQgHgCgFgFQgGgEgDgHQgDgGAAgKQAAgKAEgIQAEgHAHgFQAGgFAIgCQAIgCAGAAQAOAAALAFQAKAFAFAHIgLAJQgFgGgHgEQgHgEgLAAIgIACQgGABgEAEQgEADgDAFQgDAFAAAHQAAAHADAEQACAEAFAEIAKAFIAJAEIAPAFQAHABAGAEQAGAFAEAHQAEAGAAALQAAALgEAHQgEAIgHAFQgGAFgIACQgJADgHAAIgMgBg");
	this.shape_43.setTransform(93.6,14.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AA0BGIgQglIhHAAIgQAlIgQAAIA9iLIANAAIA8CLgAAeAUIgehJIgeBJIA8AAg");
	this.shape_44.setTransform(81.7,14.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgrBGIAAiLIBVAAIAAAMIhIAAIAAAxIBEAAIAAALIhEAAIAAA2IBLAAIAAANg");
	this.shape_45.setTransform(69.9,14.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AAeBGIgmhCIgYAAIAABCIgOAAIAAiLIAqAAQAIAAAJACQAIACAHAEQAGAFAEAHQAEAHAAAKQAAAIgDAHQgDAGgEAFQgFAEgHACQgGACgJABIAqBDgAgggGIAZAAQAHAAAGgCQAIgBAEgEQAKgGgBgNQAAgHgCgEQgDgFgFgDQgEgDgHgCIgMgBIgaAAg");
	this.shape_46.setTransform(58.8,14.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AgOBIQgHgBgHgDIgNgGQgFgEgFgFIgJgLQgEgGgDgHQgFgNAAgQQAAgHABgHIAEgOQADgHAEgGIAJgLQAKgKANgFIAOgFIAOgBIAOABQAIACAHADQANAFAKAKQAKAKAFAOQAEAGABAIQABAHAAAHQAAAIgBAHQgBAHgEAHQgCAHgEAGIgJALIgLAJIgMAGQgHADgIABQgHACgHAAQgHAAgHgCgAgXg3QgLAFgIAIQgHAJgEALQgEAPAAAHQABAQADAHQAEALAHAJQAIAIALAFQALAFAMAAQANAAALgFQALgFAIgIQAHgJAEgLQAEgLAAgMQAAgLgEgLQgEgLgHgJQgIgIgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_47.setTransform(39.9,14.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AAjBGIgjh3IAAAAIgiB3IgRAAIgqiLIAPAAIAjB3IABAAIAjh3IAPAAIAkB3IAAAAIAjh3IAPAAIgqCLg");
	this.shape_48.setTransform(22.5,14.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#231F20").s().p("AgFBGIAAh/IgwAAIAAgMIBrAAIAAAMIgwAAIAAB/g");
	this.shape_49.setTransform(7.7,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,95.2);


(lib.text3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AInBJIgOgEQgPgGgKgKQgFgFgEgGQgEgGgDgGQgDgHgBgIQgCgIAAgHQAAgIACgHQABgIADgHQADgHAEgFQAEgGAFgFIALgJIAOgGQAHgDAHgBQAIgBAIAAQARAAAOAFIANAGIAMAJIAJALQAEAFADAHQAFAOAAAQQAAAQgFAOIgHAMIgJALQgLAKgOAGQgOAFgRAAQgIAAgIgBgAIngnQgIADgFAGQgFAGgDAIQgDAIAAAIQAAAIADAJQADAIAFAFQAFAGAIAEQAHADAJAAQAJAAAIgDQAHgEAFgGQAGgFADgIQADgJAAgIQAAgIgDgIQgDgIgFgGQgGgGgHgDQgIgDgJAAQgJAAgHADgABrBFIgNgHIgLgJQgLgKgFgNQgDgHgCgIQgBgHAAgIQAAgHABgIQACgIADgHIAHgMIAJgLQAKgKAOgFQAHgDAIgBQAHgBAJAAQAHAAAHABQAIABAHADQAPAFAJALIgYAXQgEgHgIgDQgIgDgIAAQgJAAgIADQgHADgGAGQgFAGgDAIQgDAIAAAIQAAAJADAIQADAIAFAGQAGAFAHADQAHAEAJAAQAKAAAIgEQAIgEAEgHIAYAXIAzh4IAhAAIA7CLIgmAAIgLgcIg3AAIgKAcIgmAAIAIgSQgEAFgGADQgFAFgHADQgOAGgSAAQgQAAgOgFgAEUAPIgRgvIgSAvIAjAAgAjyBIQgIgBgHgCQgOgGgJgKIAWgWQAFAGAJAEQAIAFAJAAIAHgBQAEgBACgCQADgCACgDQABgDAAgEQAAgEgCgDIgFgFIgjgNQgHgDgFgDQgFgFgDgGQgDgHAAgKQAAgLAFgJQAEgIAIgGQAIgFAKgCQAKgDAKAAQAIAAAQAEQANAFAJAIIgWAXQgEgFgHgDQgHgEgHAAIgHABQgDAAgDACQgDACgCADQgCACAAAEQAAAEACACIAEAFIAfALQAIADAGAFQAHADAEAHQAEAHAAALQAAAMgFAJQgEAJgIAFQgHAGgKADQgKADgKAAIgPgCgAM1BHQgEgCgCgCQgDgDgCgDQgBgEAAgEQAAgEABgEQACgDADgDQACgDAEgBQAEgCAEAAQAIAAAGAGQADACABAEQACADAAAFQAAAEgCADQgBAEgDADQgGAFgIAAQgEAAgEgBgALvBGIg5haIAAAAIABBaIgiAAIAAiLIAnAAIA5BaIABAAIgBhaIAhAAIAACLgAG3BGIAAiLIAiAAIAACLgAFjBGIAAhuIgoAAIAAgdIByAAIAAAdIgoAAIAABugAAJBGIAAiLIAjAAIAACLgAhiBGIAAiLIBdAAIAAAdIg7AAIAAAdIA2AAIAAAaIg2AAIAAA3gAicBGIAAiLIAiAAIAACLgAk/BGIgfg4IgMAAIAAA4IghAAIAAiLIA2AAQAKAAAKACQAJACAIAFQAIAFAEAIQAFAIAAAMQAAAIgCAGQgCAGgEAFQgIAHgNAFIAlA8gAlqgJIAZAAIAIgDQAEgCACgDQACgEAAgFQAAgFgCgDQgCgDgDgCQgEgCgEAAIgagBgAn/BGIAAiLIBgAAIAAAcIg/AAIAAAbIA7AAIAAAaIg7AAIAAAdIBCAAIAAAdgApdBGIg2iLIAnAAIAgBiIABAAIAhhiIAmAAIg3CLgAq7BGIAAiLIAjAAIAACLgAtQBGIAAiLIA0AAQAKAAATADQAHACAHADIAMAHQAGAEAEAFQAFAGAEAGQAHAOAAATQAAASgHANIgIAMQgFAGgGAEQgFAFgHADQgGADgHACQgOAEgPAAgAsuApIAQAAQAJAAAJgCQAIgDAHgEQAGgFAEgIQAEgIAAgLQAAgLgEgIQgEgIgGgEQgHgFgIgCQgIgCgJAAIgRAAg");
	this.shape.setTransform(84.9,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.9,15);


(lib.text3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgXBJIgOgEQgPgGgKgKQgFgFgFgGQgEgGgCgGQgDgHgBgIQgCgIAAgHQAAgIACgHQABgIADgHQACgHAEgFQAFgGAFgFIALgJIAOgGQAHgDAHgBQAIgBAIAAQAOAAAPAFIANAGIAMAJIAJALQAEAFACAHQAGAOAAAQQAAAQgGAOIgGAMIgJALQgLAKgOAGQgPAFgOAAQgIAAgIgBgAgXgnQgIADgFAGQgGAGgDAIQgCAIAAAIQAAAIACAJQADAIAGAFQAFAGAIAEQAHADAJAAQAHAAAHgDQAIgEAFgGQAGgFADgIQADgJAAgIQAAgIgDgIQgEgIgEgGQgGgGgIgDQgHgDgHAAQgJAAgHADgAirBFIgNgHIgLgJQgKgKgGgNQgDgHgCgIQgBgHAAgIQAAgHABgIQACgIADgHIAHgMIAJgLQALgKANgFQAIgDAHgBQAHgBAJAAQAIAAAGABQAIABAIADQAOAFAJALIgXAXQgFgHgIgDQgIgDgIAAQgJAAgHADQgIADgGAGQgFAGgDAIQgDAIAAAIQAAAJADAIQADAIAFAGQAGAFAHADQAIAEAJAAQAJAAAIgEQAIgEAEgHIAYAXQgEAFgHAEQgFAFgHADQgOAGgSAAQgQAAgOgFgAGJBHQgDgCgDgCQgDgDgBgDQgCgEAAgEQAAgEACgEQABgDADgDQADgDADgBQAEgCAEAAQAIAAAHAGQADACABAEQABADAAAFQAAAEgBADQgBAEgDADQgHAFgIAAQgEAAgEgBgAEOBGIAAiLIBgAAIAAAcIg/AAIAAAbIA7AAIAAAaIg7AAIAAAdIBCAAIAAAdgADVBGIABhiIgBAAIgkBiIgYAAIgkhiIgBAAIABBiIggAAIAAiLIAxAAIAgBYIABAAIAehYIAyAAIAACLgAkQBGIg5haIgBAAIABBaIghAAIAAiLIAmAAIA6BaIAAAAIgBhaIAhAAIAACLgAmkBGIAAiLIAiAAIAACLg");
	this.shape.setTransform(42.2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.3,15);


(lib.text3GIF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgGARIgGgEIgEgGQgCgDAAgEQAAgCACgDIAEgHIAGgEQADgBADAAQAHAAAGAFQADADACADIABAGIgBAHQgCADgDADQgGAFgHAAQgDAAgDgBg");
	this.shape.setTransform(246.2,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAYBDIg0hWIgBAAIABBWIggAAIAAiFIAmAAIA0BWIAAAAIgBhWIAgAAIAACFg");
	this.shape_1.setTransform(236.5,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgOBFIgOgEQgNgFgKgJIgJgLIgGgMIgEgOQgCgHAAgHQAAgHACgHIAEgOIAGgMIAJgKIALgIIAMgGIAOgEIAOgBQAPAAAOAFIAMAGIALAIIAJAKQAEAFACAHQAGANAAAPQAAAPgGANQgCAHgEAFIgJALQgKAJgNAFQgOAFgPAAIgOgBgAgOglQgHADgFAGQgFAFgDAIQgDAHAAAIQAAAIADAIQADAHAFAGQAFAFAHAEQAHADAHAAQAIAAAHgDQAHgEAFgFQAFgGADgHQADgIAAgIQAAgIgDgHQgDgIgFgFQgFgGgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_2.setTransform(221.5,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgPBDIAAiFIAfAAIAACFg");
	this.shape_3.setTransform(211,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgPBDIAAhpIgmAAIAAgcIBrAAIAAAcIgmAAIAABpg");
	this.shape_4.setTransform(203.1,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAjBDIgKgbIgyAAIgKAbIgjAAIA4iFIAeAAIA3CFgAAQAOIgQgsIgQAsIAgAAg");
	this.shape_5.setTransform(192.4,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgRBBIgMgGIgLgIQgKgKgFgNIgEgOQgCgHAAgHQAAgHACgHIAEgOQADgHAEgFIAIgKQAKgJAOgFIANgEIANgBIAOABIAOAEQAOAFAJAJIgWAWQgFgGgHgDQgIgDgIAAQgIAAgFADQgHADgFAGQgGAFgCAIQgDAHAAAIQAAAIADAIQACAIAFAFQAFAFAIAEQAEACAJAAQAKAAAHgDQAHgEAEgGIAXAVIgKAJIgMAHQgNAGgRAAQgOAAgNgFg");
	this.shape_6.setTransform(180.1,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgPBDIAAiFIAfAAIAACFg");
	this.shape_7.setTransform(170.8,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgrBDIAAiFIBXAAIAAAcIg3AAIAAAcIAyAAIAAAZIgyAAIAAA0g");
	this.shape_8.setTransform(163.3,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgPBDIAAiFIAfAAIAACFg");
	this.shape_9.setTransform(155.1,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgOBFIgOgEQgNgFgJgJIAVgWQAFAGAIAEQAIAEAIAAIAFAAIAGgDIAFgEQABgDAAgEQAAgEgCgDIgFgFIgJgEIgKgDIgMgFQgHgDgFgDQgEgEgDgGQgDgHAAgJQAAgLAEgIQAFgIAHgFQAIgFAJgDQAJgCAIAAQAHAAAQAEQAMAEAJAIIgVAWQgEgFgHgDQgGgDgHAAIgGAAIgEACIgFAFQgCACAAAEQAAADACADQABACADACIAFADIAIADIAOAFQAIADAGAEQAGADAEAGQAEAHAAAKQAAAMgEAIQgFAJgHAFQgHAGgJACQgKADgIAAIgOgBg");
	this.shape_10.setTransform(146.9,14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAQBDIgbg2IgLAAIAAA2IggAAIAAiFIAzAAQAJAAAIACQAKACAHAFQAIAFAEAHQAEAIAAAMQAAAHgBAFQgCAGgEAFQgIAHgNAEIAkA6gAgWgIIAQAAIAGgBIAHgCQADgCADgDQACgDAAgGQAAgEgCgDQgCgDgDgCIgHgCIgFgBIgSAAg");
	this.shape_11.setTransform(136.4,14.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgtBDIAAiFIBYAAIAAAcIg5AAIAAAZIA2AAIAAAYIg2AAIAAAcIA8AAIAAAcg");
	this.shape_12.setTransform(124.7,14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgPBDIgziFIAkAAIAeBeIAAAAIAfheIAkAAIg0CFg");
	this.shape_13.setTransform(112.7,14.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgPBDIAAiFIAfAAIAACFg");
	this.shape_14.setTransform(103.9,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("Ag9BDIAAiFIAwAAQAKAAAQAEIANAEIAMAHQAGADAEAGQAEAFAEAGQAGANAAASQAAARgGANIgIALQgEAGgGAEIgLAHIgNAFQgNAEgMAAgAgeAnIAQAAQAJAAAGgCQAIgCAGgFQAGgEAEgIQADgIAAgKQAAgKgDgIQgEgHgGgFQgGgEgIgCQgGgCgIAAIgRAAg");
	this.shape_15.setTransform(94.4,14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgGARIgGgEIgEgGQgCgDAAgEQAAgCACgDIAEgHIAGgEQADgBADAAQAIAAAFAFQADADABADIACAGIgCAHQgBADgDADQgFAFgIAAQgDAAgDgBg");
	this.shape_16.setTransform(81,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgtBDIAAiFIBYAAIAAAcIg5AAIAAAZIA2AAIAAAYIg2AAIAAAcIA8AAIAAAcg");
	this.shape_17.setTransform(73.3,14.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAtBDIAAhdIAAAAIgjBdIgVAAIgihdIgBAAIABBdIgeAAIAAiFIAuAAIAdBVIAAAAIAehVIAuAAIAACFg");
	this.shape_18.setTransform(58.8,14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgOBFIgOgEQgNgFgKgJIgJgLIgGgMIgEgOQgCgHAAgHQAAgHACgHIAEgOIAGgMIAJgKIALgIIAMgGIAOgEIAOgBQAPAAAOAFIAMAGIALAIIAJAKQAEAFACAHQAGANAAAPQAAAPgGANQgCAHgEAFIgJALQgKAJgNAFQgOAFgPAAIgOgBgAgOglQgHADgFAGQgFAFgDAIQgDAHAAAIQAAAIADAIQADAHAFAGQAFAFAHAEQAHADAHAAQAIAAAHgDQAHgEAFgFQAFgGADgHQADgIAAgIQAAgIgDgHQgDgIgFgFQgFgGgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_19.setTransform(42.2,14.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgRBBIgMgGIgLgIQgKgKgFgNIgEgOQgCgHAAgHQAAgHACgHIAEgOQADgHAEgFIAIgKQAKgJAOgFIANgEIANgBIAOABIAOAEQAOAFAJAJIgWAWQgFgGgHgDQgIgDgIAAQgIAAgFADQgHADgFAGQgGAFgCAIQgDAHAAAIQAAAIADAIQACAIAFAFQAFAFAIAEQAEACAJAAQAKAAAHgDQAHgEAEgGIAXAVIgKAJIgMAHQgNAGgRAAQgOAAgNgFg");
	this.shape_20.setTransform(28.8,14.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AAYBDIg1hWIAAAAIABBWIgfAAIAAiFIAlAAIA0BWIAAAAIgBhWIAfAAIAACFg");
	this.shape_21.setTransform(14.9,14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgPBDIAAiFIAfAAIAACFg");
	this.shape_22.setTransform(5,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,30);


(lib.legalPopUp_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("ApBAxIAAhiISDAAIAABig");
	this.shape.setTransform(57.9,5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Legal3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAXQgGgHAAgQQAAgJACgGQACgGAEgDQAEgEAFAAQAEAAADACQAEACADADIADAJIABAMQAAAKgCAGQgCAGgEADQgEAEgGAAQgHAAgEgGgAgHgSQgDAFAAANQAAAOADAEQAEAFADAAQAFAAACgFQAEgEAAgOQAAgNgEgEQgCgFgFAAQgDAAgEAEg");
	this.shape.setTransform(173.1,124.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCADIAAgGIAGAAIAAAGg");
	this.shape_1.setTransform(169.9,127.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADAcIAAgrIgFAFIgHAEIAAgHQAGgDADgEQAEgEACgDIAEAAIAAA3g");
	this.shape_2.setTransform(166.2,124.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDADIAAgGIAGAAIAAAGg");
	this.shape_3.setTransform(163.3,127.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMAYQgFgFgBgHIAIAAQAAAFADADQAEACADAAQAEAAADgDQAEgEAAgHQAAgGgEgCQgDgDgEAAQgDAAgDACQgCABgCABIgHgBIAGgbIAbAAIAAAGIgWAAIgDAQQAGgEADAAQAIAAAFAFQAGAEgBAIQABAIgFAFQgFAHgJAAQgHAAgFgEg");
	this.shape_4.setTransform(160,124.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAcQAAgHACgKQADgJAEgHQADgJAGgGIgaAAIAAgHIAjAAIAAAGQgGAGgFAJQgGAIgBAKQgCAHAAAJg");
	this.shape_5.setTransform(155.6,124.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AADAcIAAgrIgFAFIgHAEIAAgHQAGgDADgEQAEgEACgDIAEAAIAAA3g");
	this.shape_6.setTransform(150.8,124.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAYQgFgFgBgHIAHAAQABAFAEADQACACAEAAQAEAAADgDQAEgEAAgHQAAgGgEgCQgDgDgEAAQgDAAgCACQgDABgCABIgGgBIAFgbIAaAAIAAAGIgUAAIgEAQQAGgEAEAAQAHAAAFAFQAGAEAAAIQAAAIgFAFQgGAHgIAAQgHAAgFgEg");
	this.shape_7.setTransform(146.8,124.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMAYQgFgEAAgHIAHgBQABAGADACQADADADAAQAEAAADgDQAEgEAAgFQAAgFgEgDQgDgDgEAAIgEABIABgFIABABQADAAADgDQAEgCAAgFQAAgEgDgCQgCgDgDAAQgDAAgDADQgDACgBAFIgHgBQACgHAEgEQAFgEAGAAQADAAAEACQAEACACAEQACADAAAEQAAAEgCADQgCADgEACQAFABADACQADADAAAGQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape_8.setTransform(142.3,124.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQAAgHADgKQACgJAEgHQAEgJAFgGIgaAAIAAgHIAjAAIAAAGQgFAGgGAJQgFAIgCAKQgBAHgBAJg");
	this.shape_9.setTransform(138,124.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDADIAAgGIAGAAIAAAGg");
	this.shape_10.setTransform(132.5,127.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAaQgFgDgCgFQgDgFABgGQgBgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAHAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgDgDgAgGgDQgDADAAAHQAAAIAEAEQADAEADAAQAEAAADgEQADgEAAgHQAAgIgDgDQgDgEgFAAQgCAAgEAEg");
	this.shape_11.setTransform(129,124.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAFAFQAFAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_12.setTransform(124.7,125.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAUIgQgnIAHAAIAJAXIABAIIACgIIAJgXIAIAAIgQAng");
	this.shape_13.setTransform(120.5,125.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_14.setTransform(117.5,125.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_15.setTransform(113.7,125.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_16.setTransform(109.4,125.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAGAFQAEAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_17.setTransform(105.3,125.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_18.setTransform(102,125.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_19.setTransform(96.2,125.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAbIgCgEQgCgCAAgGIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_20.setTransform(93.2,124.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAJAcIAAgaQAAgDgCgDQgCgCgEAAQgCAAgCACQgDABgBADIgBAGIAAAWIgHAAIAAg3IAHAAIAAAVQAEgGAGAAQAFAAADACQADABACAEQABADAAAEIAAAag");
	this.shape_21.setTransform(89.8,124.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAaQgEgEAAgGIAHABQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQADACADAAQAEAAADgCQACgCABgDIABgJQgFAFgGAAQgHAAgFgGQgFgGAAgHQAAgGACgFQADgFAEgCQAEgDAEAAQAHAAAEAGIAAgFIAHAAIAAAiQAAAJgCAEQgCAEgEADQgFACgFAAQgGAAgFgDgAgGgTQgDAEAAAIQAAAHADADQADADADAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgEgFAAQgDAAgDADg");
	this.shape_22.setTransform(85.3,126.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_23.setTransform(82.4,124.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_24.setTransform(80.4,125.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_25.setTransform(75.7,124.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_26.setTransform(74,124.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAcIgHgRIgWAAIgGARIgIAAIAWg3IAGAAIAXA3gAAJAFIgGgOIgDgMIgDALIgGAPIASAAg");
	this.shape_27.setTransform(70.5,124.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgCADIAAgGIAGAAIAAAGg");
	this.shape_28.setTransform(65,127.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMAZQgGgDgDgIQgDgHAAgHQAAgIAEgGQADgIAGgDQAHgDAFAAQAJAAAGAEQAGAEACAIIgIACQgCgGgDgDQgEgDgGAAQgEAAgFADQgEADgCAGQgCAFAAAFQAAAGACAGQACAFAFADQAEACAEABQAGgBAEgDQAFgEABgHIAIACQgDAJgGAFQgGAFgJAAQgHAAgGgEg");
	this.shape_29.setTransform(61,124.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQAcIAAg3IAHAAIAAAwIAaAAIAAAHg");
	this.shape_30.setTransform(56.1,124.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAcIAAg3IAHAAIAAAwIAaAAIAAAHg");
	this.shape_31.setTransform(51.7,124.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPAcIgIgMIgFgIIgCgDIgDgCIgFAAIgIAAIAAAZIgIAAIAAg3IAYAAQAHAAAEACQAEABACAEQADAEAAAFQAAAGgEAEQgEACgIABIAEADIAHAIIAKAPgAgQgCIAQAAIAGgBQADgBABgCQACgDAAgCQAAgEgDgDQgDgDgGAAIgQAAg");
	this.shape_32.setTransform(44.5,124.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAUAcIAAguIgRAuIgFAAIgRguIAAAuIgHAAIAAg3IAMAAIANAnIABAIIADgJIAOgmIAKAAIAAA3g");
	this.shape_33.setTransform(38,124.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAHIgdAAIAAARIAZAAIAAAFIgZAAIAAAag");
	this.shape_34.setTransform(32.4,124.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgMAYQgFgFgBgHIAHAAQABAFADADQAEACADAAQAEAAADgDQAEgEAAgHQAAgGgEgCQgDgDgEAAQgDAAgCACQgEABgBABIgHgBIAGgbIAaAAIAAAGIgUAAIgEAQQAGgEADAAQAIAAAFAFQAGAEgBAIQABAIgFAFQgFAHgJAAQgHAAgFgEg");
	this.shape_35.setTransform(25.5,124.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AADAcIAAgrIgFAFIgHAEIAAgHQAGgDADgEQAEgEACgDIAEAAIAAA3g");
	this.shape_36.setTransform(20.8,124.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLAXQgGgHAAgQQAAgJACgGQACgGAEgDQAEgEAFAAQAEAAAEACQADACADADIADAJIABAMQAAAKgCAGQgCAGgEADQgEAEgGAAQgHAAgEgGgAgHgSQgDAFAAANQAAAOADAEQAEAFADAAQAEAAAEgFQADgEAAgOQAAgNgDgEQgEgFgEAAQgDAAgEAEg");
	this.shape_37.setTransform(16.7,124.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAcIABgFIAFgHIAJgJQAHgHADgDQAEgFAAgEQAAgEgDgDQgDgCgFAAQgDAAgDADQgDADAAAFIgHgBQABgIAEgEQAFgEAHAAQAHAAAFAEQAFAFAAAHIgBAGQgBAEgEABQgDAEgHAGIgHAIIgDADIAbAAIAAAHg");
	this.shape_38.setTransform(12.2,124.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgNAZQgHgEgEgHQgEgHAAgHQAAgGAEgHQAEgHAHgEQAHgEAGAAQAHAAAHAEQAHAEAEAHQAEAHAAAGQAAAHgEAHQgEAHgGAEQgHAEgIAAQgGAAgHgEgAgKgUQgHADgCAGQgEAGAAAFQAAAGAEAGQACAGAHADQAFADAFAAQAGAAAGgDQAGgDADgGQADgGAAgGQAAgFgDgGQgDgGgHgDQgFgDgGAAQgEAAgGADgAgJAMQgFgFAAgHQAAgEACgDQACgEADgCQAEgCADAAQAFAAADACQAEADACAEIgGABQgBgDgCgBQgCgCgDAAQgDAAgDAEQgCADAAAEQAAAGACADQADADADAAQADAAADgCQACgCABgEIAFACQgBAFgEACQgEADgFAAQgFAAgEgEg");
	this.shape_39.setTransform(5,124.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCAEIAAgGIAGAAIAAAGg");
	this.shape_40.setTransform(180.1,118.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAZQgGgEgDgGQgDgIAAgHQAAgIAEgHQADgGAGgEQAHgDAFAAQAJAAAGAEQAGAEACAJIgIABQgCgGgDgDQgEgDgGAAQgEAAgFAEQgEADgCAFQgCAFAAAFQAAAGACAFQACAGAFADQAEADAEAAQAGAAAEgEQAFgEABgHIAIACQgDAJgGAFQgGAFgJAAQgHAAgGgEg");
	this.shape_41.setTransform(176.1,115.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgVAcIAAg3IAVAAIAIABQAEAAADACQADACACAEQABADAAAFQAAAHgEADQgFAFgMAAIgNAAIAAAXgAgNAAIANAAQAIAAADgDQACgCAAgFQABgEgCgCQgCgDgDgBIgHAAIgNAAg");
	this.shape_42.setTransform(170.7,115.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_43.setTransform(166.8,115.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKAaQgFgCgDgEQgDgFAAgGIAHAAIACAHQACADAEABQAEACADAAIAIgBIAFgEIABgFQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgCgEgBIgIgEIgLgBQgEgCgCgEQgCgCAAgFQAAgEACgDQADgFAFgBQAEgCAFAAQAGAAAEACQAFACADAEQADAEAAAFIgIABQAAgGgDgDQgEgDgGAAQgFAAgDADQgEACAAAEQAAADADACQACACAHACIANAEQAFAAACADQACAEAAAFQAAAEgCAEQgDAEgFADQgFACgGAAQgGAAgFgDg");
	this.shape_44.setTransform(163,115.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_45.setTransform(157.1,118.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAcIAAg3IAnAAIAAAHIgfAAIAAARIAdAAIAAAFIgdAAIAAATIAhAAIAAAHg");
	this.shape_46.setTransform(153.5,115.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgKAaQgFgCgDgEQgDgFAAgGIAHAAIACAHQACADAEABQAEACADAAIAIgBIAFgEIABgFQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgCgEgBIgIgEIgLgBQgEgCgCgEQgCgCAAgFQAAgEACgDQADgFAFgBQAEgCAFAAQAGAAAEACQAFACADAEQADAEAAAFIgIABQAAgGgDgDQgEgDgGAAQgFAAgDADQgEACAAAEQAAADADACQACACAHACIANAEQAFAAACADQACAEAAAFQAAAEgCAEQgDAEgFADQgFACgGAAQgGAAgFgDg");
	this.shape_47.setTransform(148,115.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgCAcIAAgYIgXgfIAKAAIALARIAEAKIAGgKIALgRIAJAAIgXAfIAAAYg");
	this.shape_48.setTransform(142.7,115.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAOAcIgbgrIAAArIgIAAIAAg3IAIAAIAcArIAAgrIAHAAIAAA3g");
	this.shape_49.setTransform(137.2,115.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_50.setTransform(131.1,116.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAFAFQAFAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_51.setTransform(127.3,116.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgKAXIAAAFIgGAAIAAg4IAHAAIAAAVQAEgGAFAAQAEAAAEACQADABACADIAEAHIABAGQgBALgFAGQgFAGgHAAQgFAAgFgGgAgGgDQgEADAAAHQAAAHACADQAEAGAEAAQAEAAADgEQADgEABgIQAAgHgDgDQgEgEgEAAQgDAAgDAEg");
	this.shape_52.setTransform(123,115.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAVAVIAAgYIgBgGIgDgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgEAAgDADQgDADAAAHIAAAWIgFAAIAAgZQAAgFgCgCQgBgDgFAAQgDAAgCACQgDACgBADIgBAHIAAAVIgHAAIAAgoIAGAAIAAAGQADgDADgCQADgCAEAAQAFAAACACQABACACAEQAFgIAHAAQAHAAADAEQAEADAAAHIAAAbg");
	this.shape_53.setTransform(117.4,116.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_54.setTransform(111.9,116.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAUAcIAAguIgRAuIgFAAIgRguIAAAuIgHAAIAAg3IAMAAIANAnIABAIIADgJIAOgmIAKAAIAAA3g");
	this.shape_55.setTransform(106.3,115.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_56.setTransform(99.7,118.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_57.setTransform(96.6,116.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_58.setTransform(92.4,116.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgLAQQgGgGAAgKQAAgFADgFQACgFAEgDQAFgCADAAQAHAAAEADQAFAEABAGIgHABQgBgEgCgCQgDgCgDAAQgEAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAEAAADgCQADgDABgFIAHABQgCAHgEAEQgFAEgHAAQgGAAgFgFg");
	this.shape_59.setTransform(88.3,116.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_60.setTransform(85.4,115.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgBAUIgRgnIAIAAIAJAXIABAIIACgIIAJgXIAHAAIgPAng");
	this.shape_61.setTransform(82.5,116.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_62.setTransform(79.4,116.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAQQgFgGAAgKQAAgJAFgFQAFgGAHAAQAIAAAGAFQAEAGAAAJIAAABIgcAAQAAAHADAEQAEADADAAQAEAAADgCQADgCABgEIAHABQgCAGgEAEQgEADgIAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_63.setTransform(75.6,116.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgKAaQgFgCgDgEQgDgFAAgGIAHAAIACAHQACADAEABQAEACADAAIAIgBIAFgEIABgFQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgCgEgBIgIgEIgLgBQgEgCgCgEQgCgCAAgFQAAgEACgDQADgFAFgBQAEgCAFAAQAGAAAEACQAFACADAEQADAEAAAFIgIABQAAgGgDgDQgEgDgGAAQgFAAgDADQgEACAAAEQAAADADACQACACAHACIANAEQAFAAACADQACAEAAAFQAAAEgCAEQgDAEgFADQgFACgGAAQgGAAgFgDg");
	this.shape_64.setTransform(70.7,115.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_65.setTransform(63.7,116.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgLAaQgEgEAAgGIAHABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQADACADAAQAEAAADgCQACgCABgDIABgJQgFAFgGAAQgHAAgFgGQgFgGAAgHQAAgGACgFQADgFAEgCQAEgDAEAAQAHAAAEAGIAAgFIAHAAIAAAiQAAAJgCAEQgCAEgEADQgFACgFAAQgGAAgFgDgAgGgTQgDAEAAAIQAAAHADADQADADADAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgEgFAAQgDAAgDADg");
	this.shape_66.setTransform(59.2,117.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgOASQgDgDAAgGQgBgDACgCQABgDACgBIAGgBIAGgBIAKgCIAAgCQAAgEgBgCQgEgCgEAAQgDAAgDABQgDACAAAFIgIgBIADgIQADgCAEgCQAEgBADAAQAFAAAEABQAEABABACIACAFIABAGIAAAIIAAAMIABAFIgHAAQgBgCAAgDIgIAFIgGABQgGAAgEgDgAAAACIgHABIgCADIgBADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQACACAFAAQABAAADgCQAEgCABgDQACgCgBgFIAAgCIgJACg");
	this.shape_67.setTransform(54.9,116.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_68.setTransform(51.7,116.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_69.setTransform(47.9,116.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAIAcIgMgVIgEAFIAAAQIgHAAIAAg3IAHAAIAAAfIAOgPIAJAAIgPANIARAag");
	this.shape_70.setTransform(43.9,115.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgKAHgGQAFgEAGAAQAIAAAGAFQAFAGAAAJQAAAHgDAFQgCAEgFADQgEACgFAAQgHAAgFgFgAgHgKQgDAEgBAGQABAHADAEQADAEAEAAQAFAAADgEQAEgEAAgHQAAgGgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_71.setTransform(39.5,116.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_72.setTransform(36.2,116.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgUAcIAAg3IAUAAQAGAAAEACQAEABACAEQADAEgBAEQAAADgBAEQgCADgFACQAGAAACADQADAEAAAFQAAAEgCADQgBAEgDABIgGADIgJABgAgMAVIAMAAIAFAAIAEgBQABgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgEgDgCQgBgCgDgBIgHgBIgMAAgAgMgDIAMAAIAFgBQADAAABgCQACgCAAgDQAAgDgCgCQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgHgBIgLAAg");
	this.shape_73.setTransform(32.1,115.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgOAcIgBgHIAEABIAEgBIADgCIACgFIAAgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQAoIgDAKIgDAFQgDACgEAAIgEgBg");
	this.shape_74.setTransform(25.2,117.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAAAbIgCgEQgCgCAAgGIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_75.setTransform(22.1,115.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_76.setTransform(20.1,115.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_77.setTransform(18.3,115.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgdAAQAAAHADAEQAEADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_78.setTransform(15.2,116.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgIAaQgEgDgCgFQgDgFAAgGQAAgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAGAAIAAA4IgGAAIAAgFQgEAGgHAAQgDAAgFgDgAgGgDQgDADAAAHQAAAIAEAEQADAEACAAQAFAAADgEQAEgEAAgHQAAgIgEgDQgDgEgFAAQgCAAgEAEg");
	this.shape_79.setTransform(10.7,115.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_80.setTransform(7.8,115.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAHIgdAAIAAARIAZAAIAAAFIgZAAIAAAag");
	this.shape_81.setTransform(4.6,115.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_82.setTransform(215.5,105.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_83.setTransform(212.7,104.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_84.setTransform(209.4,103.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_85.setTransform(207.2,103.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_86.setTransform(203.7,103.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgHAcIAAgeIgFAAIAAgJIAFAAIAAgDIACgIQABgCADgCQABgCAFABIAJABIgCAIIgFgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAeg");
	this.shape_87.setTransform(200.1,103.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQACgCAAgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_88.setTransform(196.4,103.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_89.setTransform(193,103.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_90.setTransform(189,103.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAEADACAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADACAAQADAAADgCQACgBAAgFIALACQgBAIgFADQgFAEgIAAQgIAAgEgGg");
	this.shape_91.setTransform(184.6,103.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_92.setTransform(178.8,103.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_93.setTransform(176.4,103.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_94.setTransform(170.6,103.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_95.setTransform(166.1,103.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_96.setTransform(161.6,103.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AALAcIgIgMIgEgJIgEgCIgFgBIgDAAIAAAYIgLAAIAAg3IAYAAQAHAAAEACQAEABADAEQACAEAAAFQAAAGgDAFQgEACgIABIAHAFIAGAJIAHALgAgNgDIAJAAIAIAAIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgCAAIgHAAIgJAAg");
	this.shape_97.setTransform(156.8,103.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_98.setTransform(150.4,105.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_99.setTransform(146.9,103.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAGgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_100.setTransform(142,103.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_101.setTransform(138.5,103.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_102.setTransform(136,103.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_103.setTransform(132.6,103.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgDgBQgCAAgCABQgBAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_104.setTransform(126.8,103.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_105.setTransform(122,103.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQACgFAGgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_106.setTransform(117.7,103.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgGAcIAAgeIgHAAIAAgJIAHAAIAAgDIABgIQABgCADgCQABgCAEABIAJABIgBAIIgFgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAeg");
	this.shape_107.setTransform(114.1,103.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAFgHAGAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_108.setTransform(110.2,103.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_109.setTransform(106.7,103.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_110.setTransform(101.1,103.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_111.setTransform(97.9,103.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgBABIgCAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQAEACABACIACAFIAAAGIAAAYg");
	this.shape_112.setTransform(94.4,103.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_113.setTransform(90.6,103.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_114.setTransform(84.6,104.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_115.setTransform(79.8,103.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_116.setTransform(76.3,103.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_117.setTransform(72.8,103.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_118.setTransform(69.2,103.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_119.setTransform(66,103.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_120.setTransform(62.4,103.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_121.setTransform(58.7,103.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQACgFAGgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQADADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_122.setTransform(53.8,103.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAEADACAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAACgCQACgBAAgFIALACQgBAIgFADQgFAEgIAAQgHAAgFgGg");
	this.shape_123.setTransform(49.3,103.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_124.setTransform(42.5,103.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_125.setTransform(37.9,103.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_126.setTransform(34.2,103.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAACgCQACgBABgFIALACQgCAIgFADQgEAEgIAAQgIAAgFgGg");
	this.shape_127.setTransform(30.8,103.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQACADADAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_128.setTransform(26.3,103.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_129.setTransform(21.8,104.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_130.setTransform(16.9,103.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQACgFAGgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQADADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_131.setTransform(12.4,103.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_132.setTransform(8.7,103.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_133.setTransform(4.6,104.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_134.setTransform(259.4,95.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_135.setTransform(256,94.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQAEABABADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_136.setTransform(252,94.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgDAAgDABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACABADIAGgFIAIgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_137.setTransform(246.2,94.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_138.setTransform(239.1,94.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_139.setTransform(233.1,95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_140.setTransform(228.4,94.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_141.setTransform(221.9,94.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgEAHQADgCABgCIAAgDIgDAAIAAgKIAIAAIAAAHIAAAGQgBACgCADIgEADg");
	this.shape_142.setTransform(216.3,97.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_143.setTransform(213.1,94.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_144.setTransform(209.8,94.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_145.setTransform(206.4,94.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_146.setTransform(201.7,94.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_147.setTransform(198.3,94.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_148.setTransform(196.1,94.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_149.setTransform(192.9,94.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgDAUIgRgnIALAAIAIATIABAHIAAgEIACgDIAHgTIAMAAIgQAng");
	this.shape_150.setTransform(188.4,94.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_151.setTransform(184.1,94.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgGAdIAAggIgHAAIAAgIIAHAAIAAgDIABgIQABgDADgBQABgCAEAAIAJABIgBAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAJAAIAAAIIgJAAIAAAgg");
	this.shape_152.setTransform(178.5,94.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_153.setTransform(175.9,94.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgEAHQADgCABgCIAAgDIgDAAIAAgKIAIAAIAAAHIgBAGQAAACgCADIgFADg");
	this.shape_154.setTransform(171.4,97.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_155.setTransform(169.6,94.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_156.setTransform(165.3,94.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgEAHQADgCABgCIAAgDIgDAAIAAgKIAJAAIAAAHIgBAGQgBACgDADIgDADg");
	this.shape_157.setTransform(159.5,97.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_158.setTransform(157.7,94.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQAAABgEAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_159.setTransform(153.7,94.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_160.setTransform(150.3,94.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_161.setTransform(146.8,95);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAFgGAIAAQAIAAAEADQAFADACAHIgMACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADADAAQACAAACgCQACgBABgFIALACQgCAIgEADQgFAEgIAAQgIAAgFgGg");
	this.shape_162.setTransform(142.3,94.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_163.setTransform(138.7,94.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_164.setTransform(135.8,94.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAACgCQADgBAAgFIALACQgBAIgGADQgEAEgIAAQgHAAgGgGg");
	this.shape_165.setTransform(132.6,94.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_166.setTransform(125.6,95.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_167.setTransform(120.8,94.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_168.setTransform(117.3,94.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_169.setTransform(114.9,94.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQACADADAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_170.setTransform(110.9,94.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgGAdIAAggIgGAAIAAgIIAGAAIAAgDIABgIQABgDADgBQABgCAFAAIAJABIgCAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAIIgIAAIAAAgg");
	this.shape_171.setTransform(107.5,94.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgHAdIAAggIgGAAIAAgIIAGAAIAAgDIABgIQACgDADgBQABgCAFAAIAJABIgCAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAIIgIAAIAAAgg");
	this.shape_172.setTransform(104.9,94.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_173.setTransform(101,94.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgEAHQADgCABgCIAAgDIgDAAIAAgKIAJAAIAAAHIgBAGQgBACgDADIgDADg");
	this.shape_174.setTransform(95.2,97.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAQgDAAgCABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_175.setTransform(91.8,94.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_176.setTransform(87.3,95);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_177.setTransform(83.5,94.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAIAAAEADQAEADACAHIgKACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADACAAQAEAAACgCQABgBABgFIALACQgBAIgGADQgEAEgIAAQgIAAgFgGg");
	this.shape_178.setTransform(80.1,94.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_179.setTransform(75.6,94.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_180.setTransform(71.1,95.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_181.setTransform(66.3,94.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAFgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgDADAAAFQAAAGADADQAEADACAAQAEAAADgDQADgDgBgGQABgFgDgDQgDgDgEAAQgCAAgEADg");
	this.shape_182.setTransform(61.8,94.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_183.setTransform(58.1,94.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_184.setTransform(53.9,95.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIAAgBIgHAEQgBABgDAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_185.setTransform(47,94.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_186.setTransform(41.3,94.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_187.setTransform(37.1,94.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgGAdIAAggIgHAAIAAgIIAHAAIAAgDIABgIQABgDADgBQABgCAEAAIAJABIgBAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAJAAIAAAIIgJAAIAAAgg");
	this.shape_188.setTransform(33.5,94.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_189.setTransform(27.5,95.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_190.setTransform(24,94.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_191.setTransform(21.6,94.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_192.setTransform(19.4,94.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADABAAIAEgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_193.setTransform(16.1,94.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_194.setTransform(11.4,94.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_195.setTransform(8,94.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAKIgZAAIAAANIAVAAIAAAIIgVAAIAAAYg");
	this.shape_196.setTransform(4.6,94.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_197.setTransform(278.7,85.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAFADABAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAACgCQACgBAAgFIALACQgCAIgEADQgFAEgIAAQgHAAgFgGg");
	this.shape_198.setTransform(275.3,86);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQAEABABADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_199.setTransform(270.8,86);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_200.setTransform(267.2,85.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgDAEIAAAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_201.setTransform(263.5,85.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_202.setTransform(258.7,86);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgQAVQgHgIAAgNQAAgMAHgJQAHgHAKAAQALAAAGAGQAEAEACAGIgLAEQgBgFgDgDQgEgDgEAAQgFAAgEAFQgEAFAAAJQAAAKAEAEQAEAFAFAAQAEAAADgDQAEgDABgGIALAEQgCAJgGAEQgGAFgJAAQgKAAgHgIg");
	this.shape_203.setTransform(253.3,85.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_204.setTransform(247.2,87.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_205.setTransform(243.8,86);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_206.setTransform(239.5,86);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_207.setTransform(235,86);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_208.setTransform(230.5,85.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgaAAQABAFACACQADADABAAIAEgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_209.setTransform(225.8,86);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_210.setTransform(221.3,86.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAIAUIgIgNIgHANIgNAAIAPgUIgPgTIAOAAIAGALIAHgLIANAAIgOATIAPAUg");
	this.shape_211.setTransform(216.6,86);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQACgCAAgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_212.setTransform(212.2,86);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_213.setTransform(205.3,85.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_214.setTransform(200.5,85.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIgBgBIgFAEQgBABgEAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_215.setTransform(195.9,86);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgEAGQADgBABgBIAAgEIgDAAIAAgLIAIAAIAAAIIAAAGQgBADgCACIgFAEg");
	this.shape_216.setTransform(190.3,88.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_217.setTransform(187,86);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAFAGQAFAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_218.setTransform(182.7,86);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_219.setTransform(178,86.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_220.setTransform(174.4,85.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_221.setTransform(170.4,86);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgDABgBABIgBAHIAAAVIgKAAIAAg3IAKAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_222.setTransform(165.7,85.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAIAAAEADQAFADACAHIgMACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADADAAQACAAACgCQACgBABgFIALACQgCAIgFADQgEAEgIAAQgIAAgEgGg");
	this.shape_223.setTransform(161.2,86);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgFAGQAEgBABgBIAAgEIgEAAIAAgLIAJAAIAAAIIgBAGQAAADgDACIgEAEg");
	this.shape_224.setTransform(155.5,88.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_225.setTransform(152.2,86);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AAHAcIgJgSIgEAFIAAANIgMAAIAAg3IAMAAIAAAcIAKgMIAOAAIgOANIAPAag");
	this.shape_226.setTransform(148.1,85.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_227.setTransform(143.4,86);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_228.setTransform(140.2,85.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_229.setTransform(137.8,85.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgEAGQADgBABgBIAAgEIgDAAIAAgLIAIAAIAAAIIAAAGQgBADgCACIgEAEg");
	this.shape_230.setTransform(132.6,88.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_231.setTransform(129.3,86);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_232.setTransform(125,86);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgDAUIgRgnIALAAIAIATIABAHIABgEIABgDIAIgTIALAAIgRAng");
	this.shape_233.setTransform(120.6,86);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_234.setTransform(117.3,85.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_235.setTransform(114.8,85.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAACgCQADgBAAgFIALACQgBAIgGADQgEAEgIAAQgHAAgGgGg");
	this.shape_236.setTransform(111.4,86);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_237.setTransform(106.9,86);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgFAkIgDgBIABgJIABAAIACAAIADAAIABgCIAAgGIAAgmIAJAAIAAAmIgBAMQgBADgCACQgEACgCAAgAAAgZIAAgLIAJAAIAAALg");
	this.shape_238.setTransform(103.2,86);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_239.setTransform(100.2,85.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_240.setTransform(95.3,86);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_241.setTransform(89.3,85.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_242.setTransform(85.6,85.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgaAAQABAFACACQADADABAAIAEgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_243.setTransform(80.9,86);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgDAAgDABQAAAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACABADIAGgFIAIgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_244.setTransform(75.2,85.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_245.setTransform(70.3,85.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_246.setTransform(66.7,86);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_247.setTransform(62.4,86);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgEAUIgQgnIAMAAIAIATIAAAHIAAgEIACgDIAIgTIALAAIgRAng");
	this.shape_248.setTransform(58,86);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgDAEIAAAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_249.setTransform(53.4,85.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_250.setTransform(49.8,85.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_251.setTransform(44.2,86);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_252.setTransform(40.8,85.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_253.setTransform(38.4,85.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_254.setTransform(33.8,85.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_255.setTransform(29.8,86);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_256.setTransform(25.1,85.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_257.setTransform(21.6,85.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_258.setTransform(18.2,86);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_259.setTransform(13.7,85.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_260.setTransform(8.9,86);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAACgCQADgBAAgFIALACQgBAIgGADQgEAEgIAAQgHAAgGgGg");
	this.shape_261.setTransform(4.3,86);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_262.setTransform(276.3,76.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_263.setTransform(272.9,76.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_264.setTransform(269.3,77.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_265.setTransform(264.5,77);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgDABgBABIgBAHIAAAVIgKAAIAAg3IAKAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_266.setTransform(259.7,76.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_267.setTransform(254.9,77);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_268.setTransform(248.2,77.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_269.setTransform(243.4,77);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_270.setTransform(238.7,77.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgEAHQADgBABgDIAAgDIgEAAIAAgKIAJAAIAAAIIgBAFQAAACgCADIgFADg");
	this.shape_271.setTransform(233.2,79.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_272.setTransform(229.6,76.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_273.setTransform(224.9,77);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_274.setTransform(220,77.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgGAdIAAggIgGAAIAAgIIAGAAIAAgDIABgIQABgDADgBQABgCAEAAIAKACIgCAHIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAIIgIAAIAAAgg");
	this.shape_275.setTransform(216.4,76.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_276.setTransform(210.2,76.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_277.setTransform(205.7,77);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_278.setTransform(201,76.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_279.setTransform(196.5,77);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_280.setTransform(193,77);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_281.setTransform(189.8,76.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgJAFIAAgJIATAAIAAAJg");
	this.shape_282.setTransform(187.3,77);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_283.setTransform(183.6,77);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_284.setTransform(178.9,77.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_285.setTransform(174.2,77);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQAEABABADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_286.setTransform(169.6,77);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgCABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_287.setTransform(164.9,76.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAACgCQACgBABgFIALACQgCAIgFADQgEAEgIAAQgIAAgFgGg");
	this.shape_288.setTransform(160.4,77);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAIAUIgIgNIgHANIgNAAIAPgUIgPgTIAOAAIAGALIAHgLIANAAIgOATIAPAUg");
	this.shape_289.setTransform(155.9,77);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_290.setTransform(151.5,77);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_291.setTransform(145.8,77);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQACgFAGgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQADADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_292.setTransform(141.6,77);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_293.setTransform(134.4,76.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_294.setTransform(129.7,77);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_295.setTransform(124.8,77.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgGAdIAAggIgHAAIAAgIIAHAAIAAgDIABgIQABgDADgBQABgCAEAAIAJACIgBAHIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIAAAEIAAADIAIAAIAAAIIgIAAIAAAgg");
	this.shape_296.setTransform(121.2,76.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_297.setTransform(116.4,76.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_298.setTransform(113.2,77);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_299.setTransform(108.5,77.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_300.setTransform(104.7,76.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_301.setTransform(101,77.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgCAAgCABQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAGgFIAGgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_302.setTransform(95,77);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_303.setTransform(87,77.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_304.setTransform(82.5,77);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_305.setTransform(77.9,77);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgEgBIgDABIgDAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_306.setTransform(71,77);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_307.setTransform(67.5,76.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_308.setTransform(61.7,77.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_309.setTransform(56.9,77);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_310.setTransform(53.4,76.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_311.setTransform(50.9,76.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_312.setTransform(47.3,77);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_313.setTransform(43,77);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgEAUIgQgnIAMAAIAIATIAAAHIABgEIABgDIAHgTIAMAAIgRAng");
	this.shape_314.setTransform(38.6,77);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgDAEIAAAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_315.setTransform(34,77);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_316.setTransform(30.5,76.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_317.setTransform(25,77);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_318.setTransform(21.5,77);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAFgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_319.setTransform(17.3,77);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgGAdIAAggIgHAAIAAgIIAHAAIAAgDIABgIQABgDADgBQABgCAEAAIAJACIgBAHIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAJAAIAAAIIgJAAIAAAgg");
	this.shape_320.setTransform(13.7,76.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_321.setTransform(10,77);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgWAcIAAg3IAWAAIAJABIAFACIAFAFQABADABADQAAAEgCAEQgDADgEACQAFAAAEADQACAEAAAFQAAAEgCADIgFAGQgDACgEABIgMAAgAgLATIAKAAIAGgBQADAAACgCQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIgIgBIgJAAgAgLgEIAHAAIAHAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgIAAIgHAAg");
	this.shape_322.setTransform(5,76.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_323.setTransform(94,66);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_324.setTransform(90.4,63.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_325.setTransform(85.7,64.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_326.setTransform(80.8,64.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgGAcIAAgeIgHAAIAAgJIAHAAIAAgDIABgIQABgCADgCQABgBAEAAIAJAAIgBAIIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAeg");
	this.shape_327.setTransform(77.2,63.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_328.setTransform(71.3,64.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgDABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_329.setTransform(66.7,63.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_330.setTransform(62.9,63.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgCAAgCABQgBAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAGgFIAGgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_331.setTransform(55.9,64.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQACADADAAQAEAAADgDQADgDAAgGQAAgFgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_332.setTransform(49.9,64.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_333.setTransform(46.2,64.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgHAcIAAgeIgGAAIAAgJIAGAAIAAgDIABgIQACgCADgCQABgBAFAAIAJAAIgCAIIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAeg");
	this.shape_334.setTransform(43.2,63.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_335.setTransform(37,63.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_336.setTransform(32.5,64.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgDAAgBABQgBAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACABADIAHgFIAHgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_337.setTransform(26.7,64.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_338.setTransform(21,64.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgaAAQABAFACACQADADABAAIAEgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_339.setTransform(16.6,64.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_340.setTransform(11.9,63.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_341.setTransform(7.3,64.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_342.setTransform(3.9,64.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_343.setTransform(260.4,56.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_344.setTransform(257.1,54.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_345.setTransform(254.9,54.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_346.setTransform(251.7,55.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_347.setTransform(247,55.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_348.setTransform(242.1,54.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_349.setTransform(238.6,54.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgDAUIgRgnIALAAIAIATIABAHIABgEIABgDIAIgTIALAAIgQAng");
	this.shape_350.setTransform(235.3,55.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_351.setTransform(232,54.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_352.setTransform(228.4,54.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_353.setTransform(223.7,55.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_354.setTransform(220.1,54.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgJIAJgGIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_355.setTransform(215.5,54.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAGgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_356.setTransform(211.8,55.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgEgBIgDABIgDAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_357.setTransform(206.9,55.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_358.setTransform(200.1,55.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_359.setTransform(196.6,55.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_360.setTransform(192.6,55.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_361.setTransform(185.7,54.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_362.setTransform(180.9,55.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQAEABABADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_363.setTransform(176.3,55.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgFAHQAEgBABgCIAAgEIgEAAIAAgKIAJAAIAAAIIgBAFQAAACgCADIgFADg");
	this.shape_364.setTransform(170.7,57.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgFAcIgUg3IAMAAIANAoIAOgoIAMAAIgUA3g");
	this.shape_365.setTransform(167.7,54.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AAQAcIgFgNIgVAAIgFANIgMAAIAWg3IAKAAIAXA3gAAHAGIgHgUIgHAUIAOAAg");
	this.shape_366.setTransform(162.8,54.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AALAcIgWgjIAAAjIgKAAIAAg3IALAAIAVAkIAAgkIALAAIAAA3g");
	this.shape_367.setTransform(157,54.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_368.setTransform(150.7,55.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_369.setTransform(147.8,54.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_370.setTransform(144.5,55.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgEgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgCABIAAAHIAAAVIgLAAIAAg3IALAAIAAAVQAFgGAFAAQAEAAADABQADACACACIACAFIABAGIAAAYg");
	this.shape_371.setTransform(139.9,54.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgJIAJgGIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_372.setTransform(136.1,54.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_373.setTransform(130.2,55.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_374.setTransform(125.6,55.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgBABIgCAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_375.setTransform(120.9,54.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgJIAJgGIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_376.setTransform(117.1,54.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_377.setTransform(112.4,55.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_378.setTransform(108.3,55.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AAHAUIgHgYIgGAYIgKAAIgNgnIAKAAIAIAZIAHgZIAJAAIAHAZIAIgZIAKAAIgNAng");
	this.shape_379.setTransform(103,55.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_380.setTransform(97.5,55.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_381.setTransform(94,54.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_382.setTransform(89.4,55.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAFgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQADgDgBgGQABgFgDgDQgDgDgEAAQgCAAgEADg");
	this.shape_383.setTransform(85.2,55.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_384.setTransform(79.3,55.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_385.setTransform(75.2,55.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgDABAAABIgBAHIAAAVIgMAAIAAg3IAMAAIAAAVQAFgGAFAAQAEAAADABQADACACACIACAFIABAGIAAAYg");
	this.shape_386.setTransform(70.6,54.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_387.setTransform(65.7,56.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_388.setTransform(62.2,54.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgCABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_389.setTransform(58.7,54.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_390.setTransform(51.9,55.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_391.setTransform(47.4,54.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_392.setTransform(40.4,56.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_393.setTransform(36.1,55.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAFgFIAIgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_394.setTransform(30.3,55.5);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgDABAAABIgBAHIAAAVIgMAAIAAg3IAMAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_395.setTransform(22.1,54.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAIAAAEADQAEADACAHIgKACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADACAAQAEAAACgCQABgBABgFIALACQgBAIgGADQgEAEgIAAQgIAAgFgGg");
	this.shape_396.setTransform(17.6,55.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_397.setTransform(14.2,54.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgBABIgCAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_398.setTransform(10.7,54.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AAHAUIgHgYIgGAYIgKAAIgNgnIAKAAIAIAZIAHgZIAJAAIAHAZIAIgZIAKAAIgNAng");
	this.shape_399.setTransform(5.1,55.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgFAGQAEgBABgCIAAgDIgEAAIAAgLIAKAAIAAAIIgCAGQAAADgDACIgEAEg");
	this.shape_400.setTransform(262.7,48.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_401.setTransform(259.5,46.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAIAAAEADQAEADACAHIgKACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADACAAQAEAAACgCQABgBABgFIALACQgBAIgGADQgEAEgIAAQgIAAgFgGg");
	this.shape_402.setTransform(255.2,46.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_403.setTransform(251.8,45.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_404.setTransform(249.4,46.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_405.setTransform(245.3,47.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgHIAJgHIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_406.setTransform(239.2,45.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_407.setTransform(235.7,46.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AAHAcIgIgSIgGAFIAAANIgLAAIAAg3IALAAIAAAcIALgMIANAAIgNANIAOAag");
	this.shape_408.setTransform(231.5,45.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_409.setTransform(227.8,46.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIgBgBIgFAEQgBABgFAAQgGAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_410.setTransform(223.8,46.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgDgBQgCAAgDABQAAAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_411.setTransform(218,46.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgHIAJgHIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_412.setTransform(210.9,45.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_413.setTransform(207.5,46.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_414.setTransform(200.5,45.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_415.setTransform(197.1,45.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQACgFAFgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADgBAFQABAGADADQACADADAAQAEAAADgDQADgDAAgGQAAgFgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_416.setTransform(193.6,46.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_417.setTransform(188.8,46.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_418.setTransform(182,45.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgEgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_419.setTransform(177.3,46.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQgBgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_420.setTransform(172.7,46.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgHIAJgHIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_421.setTransform(166.9,45.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgCABgCABIAAAHIAAAVIgLAAIAAg3IALAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_422.setTransform(163.2,45.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_423.setTransform(158.2,47.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_424.setTransform(153.4,46.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAFgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgDADAAAFQAAAGADADQAEADACAAQAEAAADgDQADgDgBgGQABgFgDgDQgDgDgEAAQgCAAgEADg");
	this.shape_425.setTransform(148.6,46.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_426.setTransform(143.9,45.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_427.setTransform(136.9,46.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_428.setTransform(133.5,46.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQgBgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_429.setTransform(129.5,46.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_430.setTransform(122.7,46.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_431.setTransform(118.4,46.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_432.setTransform(115,46.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_433.setTransform(111,46.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAgBIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgDABgBABIgBAHIAAAVIgKAAIAAg3IAKAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_434.setTransform(106.3,45.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_435.setTransform(101.6,46.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAKIgaAAIAAANIAXAAIAAAIIgXAAIAAAYg");
	this.shape_436.setTransform(95,45.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgQAAIAAAtg");
	this.shape_437.setTransform(90,45.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgUAcIAAg3IAoAAIAAAKIgdAAIAAAMIAbAAIAAAIIgbAAIAAAQIAeAAIAAAJg");
	this.shape_438.setTransform(85,45.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgFAGQAEgBABgCIAAgDIgEAAIAAgLIAJAAIAAAIIgBAGQAAADgCACIgFAEg");
	this.shape_439.setTransform(78.9,48.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_440.setTransform(75.6,46.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_441.setTransform(71,45.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_442.setTransform(66.2,46.5);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_443.setTransform(61.3,46.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgGAdIAAgfIgHAAIAAgJIAHAAIAAgDIABgIQABgCADgCQABgBAEgBIAJABIgBAIIgFgBQgBABAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAJAAIAAAJIgJAAIAAAfg");
	this.shape_444.setTransform(57.8,45.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_445.setTransform(53,45.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_446.setTransform(49.7,46.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_447.setTransform(45,46.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgHIAJgHIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_448.setTransform(41.3,45.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_449.setTransform(37.5,46.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgCAAgCABQgBAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAGgFIAGgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_450.setTransform(31.6,46.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQACgCAAgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_451.setTransform(23.6,46.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AAHAcIgIgSIgGAFIAAANIgLAAIAAg3IALAAIAAAcIALgMIANAAIgNANIAOAag");
	this.shape_452.setTransform(19.5,45.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_453.setTransform(15.9,45.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_454.setTransform(13.7,45.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_455.setTransform(10.2,46.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgKAbQgEgCgDgDQgDgDAAgDQgCgFAAgKIAAgdIANAAIAAAeIAAAJQABAEACACQADACADAAQAFAAADgCQACgCAAgDIABgKIAAgeIALAAIAAAdIgBAOQAAAEgDADQgCADgFACQgEACgHAAQgGAAgEgCg");
	this.shape_456.setTransform(4.9,45.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_457.setTransform(272.9,39.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_458.setTransform(269.5,37.6);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_459.setTransform(265.2,37.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_460.setTransform(260.7,37.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_461.setTransform(256.2,37.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIAEgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_462.setTransform(251.5,37.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_463.setTransform(247,38.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AAIAUIgIgNIgHANIgNAAIAPgUIgPgTIAOAAIAGALIAHgLIANAAIgOATIAPAUg");
	this.shape_464.setTransform(242.3,37.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_465.setTransform(237.9,37.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_466.setTransform(232.2,37.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_467.setTransform(228.2,37.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgEgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgCABIgBAHIAAAVIgKAAIAAg3IAKAAIAAAVQAGgGAFAAQAEAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_468.setTransform(223.6,36.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_469.setTransform(219.8,37);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQACgFAFgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADgBAFQABAGADADQACADADAAQAEAAADgDQADgDAAgGQAAgFgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_470.setTransform(216.1,37.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_471.setTransform(208.9,36.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_472.setTransform(204.2,37.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_473.setTransform(199.6,37.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_474.setTransform(192.8,37.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIAEgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_475.setTransform(188.5,37.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_476.setTransform(184.1,37.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgHAcIAAgfIgFAAIAAgIIAFAAIAAgDIACgIQABgDADgBQABgBAFAAIAJABIgCAIIgFgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAIIgIAAIAAAfg");
	this.shape_477.setTransform(180.8,36.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_478.setTransform(175.7,37);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_479.setTransform(172,37.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_480.setTransform(167.4,37.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgDAAgBABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACABADIAHgFIAGgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_481.setTransform(161.6,37.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQACADADAAIADgBQACgCACgDIAKACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_482.setTransform(155.9,37.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_483.setTransform(151.2,38.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQAEABABADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_484.setTransform(146.7,37.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_485.setTransform(142,37.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIgBgBIgFAEQgBABgEAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_486.setTransform(137.4,37.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgDgBQgCAAgDABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_487.setTransform(131.6,37.6);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_488.setTransform(123.5,37.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_489.setTransform(119.7,37);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_490.setTransform(114.8,37);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAACgCQADgBAAgFIALACQgBAIgGADQgEAEgIAAQgHAAgGgGg");
	this.shape_491.setTransform(111.4,37.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_492.setTransform(106.9,37.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgFAkIgDgBIABgJIABAAIACAAIADAAIABgCIAAgGIAAgmIAJAAIAAAmIgBAMQgBADgCACQgEACgCAAgAAAgZIAAgLIAJAAIAAALg");
	this.shape_493.setTransform(103.2,37.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_494.setTransform(100.2,36.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_495.setTransform(95.2,37.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_496.setTransform(90.5,37.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_497.setTransform(84,37.6);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_498.setTransform(80.6,37.6);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_499.setTransform(76.6,37.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_500.setTransform(69.8,37.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAKIgZAAIAAANIAVAAIAAAIIgVAAIAAAYg");
	this.shape_501.setTransform(65.4,36.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgQAAIAAAtg");
	this.shape_502.setTransform(60.4,36.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgUAcIAAg3IAoAAIAAAKIgdAAIAAAMIAbAAIAAAIIgbAAIAAAQIAeAAIAAAJg");
	this.shape_503.setTransform(55.5,36.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_504.setTransform(49.4,39.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_505.setTransform(46,37.6);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_506.setTransform(42.6,37);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_507.setTransform(38.9,37.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_508.setTransform(34.2,37.6);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_509.setTransform(28.5,37.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_510.setTransform(23.6,37);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_511.setTransform(20,37.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgaAAQABAFACACQADADABAAIAEgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_512.setTransform(15.7,37.6);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgEAUIgQgnIAMAAIAIATIAAAHIAAgEIACgDIAHgTIAMAAIgQAng");
	this.shape_513.setTransform(11.3,37.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgEgBIgDABIgDAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_514.setTransform(6.7,37.6);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_515.setTransform(3.1,36.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_516.setTransform(266.6,29.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgEgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_517.setTransform(261.9,28.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_518.setTransform(258.3,27.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_519.setTransform(255,29.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_520.setTransform(251.7,27.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_521.setTransform(249.4,28.6);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_522.setTransform(245.3,28.7);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_523.setTransform(240.6,27.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_524.setTransform(235.9,28.6);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_525.setTransform(231,28.7);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_526.setTransform(225.1,28.6);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_527.setTransform(222.2,27.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQACADADAAIADgBQACgCACgDIAKACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_528.setTransform(218.9,28.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgDABAAABIgBAHIAAAVIgMAAIAAg3IAMAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_529.setTransform(214.3,27.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_530.setTransform(210.5,28);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgGAdIAAggIgHAAIAAgIIAHAAIAAgDIABgIQABgDADgBQABgBAEgBIAJABIgBAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAJAAIAAAIIgJAAIAAAgg");
	this.shape_531.setTransform(205.8,27.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_532.setTransform(201.9,28.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_533.setTransform(195,28.7);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AAHAcIgIgSIgGAFIAAANIgLAAIAAg3IALAAIAAAcIALgMIANAAIgNANIAOAag");
	this.shape_534.setTransform(190.9,27.9);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_535.setTransform(186.2,28.7);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_536.setTransform(183,27.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_537.setTransform(180.6,28.6);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_538.setTransform(174.4,28.7);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgDABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_539.setTransform(169.8,27.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_540.setTransform(166,28);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_541.setTransform(160,27.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgDABIgDAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAFgHAGAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_542.setTransform(155.2,28.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_543.setTransform(150.6,28.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_544.setTransform(143.8,28.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_545.setTransform(138.9,28.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_546.setTransform(135.4,27.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_547.setTransform(132.9,28);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQgBgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_548.setTransform(129.5,28.7);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_549.setTransform(124.8,28.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_550.setTransform(121,28);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADADAAQACAAACgCQACgBABgFIALACQgCAIgFADQgEAEgIAAQgIAAgFgGg");
	this.shape_551.setTransform(117.6,28.7);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_552.setTransform(112.9,28.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_553.setTransform(109.4,27.9);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgHAdIAAggIgGAAIAAgIIAGAAIAAgDIABgIQACgDADgBQABgBAFgBIAJABIgCAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAIIgIAAIAAAgg");
	this.shape_554.setTransform(107.1,27.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_555.setTransform(102.1,28);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_556.setTransform(98.6,28.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AAHAcIgIgSIgGAFIAAANIgKAAIAAg3IAKAAIAAAcIALgMIAOAAIgPANIAPAag");
	this.shape_557.setTransform(94.4,27.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_558.setTransform(90.7,28.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_559.setTransform(86.7,28.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAABAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACABADIAHgFIAHgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_560.setTransform(80.9,28.6);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_561.setTransform(72.8,28.7);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_562.setTransform(69,28);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_563.setTransform(64.1,28);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAIAAAEADQAEADADAHIgMACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADADAAQADAAABgCQACgBABgFIALACQgCAIgEADQgFAEgIAAQgHAAgFgGg");
	this.shape_564.setTransform(60.7,28.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIAEgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_565.setTransform(56.2,28.7);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgFAkIgDgBIABgJIABAAIACAAIADAAIABgCIAAgGIAAgmIAKAAIAAAmIgBAMQgBADgEACQgDACgCAAgAAAgZIAAgLIAKAAIAAALg");
	this.shape_566.setTransform(52.5,28.7);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_567.setTransform(49.5,27.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_568.setTransform(44.5,28.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_569.setTransform(39.8,28.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_570.setTransform(33.3,28.7);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_571.setTransform(29.9,28.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_572.setTransform(25.9,28.7);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_573.setTransform(19.1,28.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAKIgaAAIAAANIAWAAIAAAIIgWAAIAAAYg");
	this.shape_574.setTransform(14.7,27.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgQAAIAAAtg");
	this.shape_575.setTransform(9.7,27.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgUAcIAAg3IAoAAIAAAKIgdAAIAAAMIAbAAIAAAIIgbAAIAAAQIAeAAIAAAJg");
	this.shape_576.setTransform(4.8,27.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgCADIAAgGIAGAAIAAAGg");
	this.shape_577.setTransform(148.6,17.8);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AAIAcIgMgVIgEAFIAAAQIgHAAIAAg3IAHAAIAAAfIAOgPIAJAAIgPANIARAag");
	this.shape_578.setTransform(145.7,15.3);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_579.setTransform(141.4,16.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_580.setTransform(138.6,15.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_581.setTransform(136.7,16.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgOAcIgBgHIAEABIAEgBIADgCIABgFIABgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQAoIgDAKIgDAFQgDACgEAAIgEgBg");
	this.shape_582.setTransform(130.9,17);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AAAAbIgCgEQgCgCAAgGIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_583.setTransform(127.8,15.4);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_584.setTransform(125.8,15.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AgHAaQgEgDgDgFQgCgFAAgGQAAgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAHAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgDgDgAgGgDQgDADAAAHQAAAIAEAEQACAEAEAAQAEAAADgEQADgEABgHQgBgIgDgDQgDgEgFAAQgCAAgEAEg");
	this.shape_585.setTransform(122.6,15.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_586.setTransform(119.7,15.3);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgIATIgFgDIgCgFIgBgHIAAgYIAIAAIAAAVIAAAIQAAACADACQACACADAAQACAAACgCQADgCABgCIABgJIAAgUIAIAAIAAAoIgHAAIAAgGQgFAHgGAAQgEAAgDgCg");
	this.shape_587.setTransform(116.6,16.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AAKAdIAAgVQgBADgDABIgGACQgGAAgFgGQgGgGABgIQgBgHACgFQACgFAFgCQAEgDAEAAQAGAAAFAHIAAgGIAGAAIAAA4gAgHgSQgCAEAAAIQgBAGAEAEQADAEADAAQAFAAADgEQADgEAAgFQAAgJgDgEQgEgEgEAAQgDAAgEAEg");
	this.shape_588.setTransform(112.1,16.9);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_589.setTransform(109.1,15.3);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_590.setTransform(107.3,15.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgIAaQgEgDgCgFQgCgFgBgGQABgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABABADIAAgVIAHAAIAAA4IgGAAIAAgFQgEAGgHAAQgDAAgFgDgAgGgDQgDADAAAHQAAAIADAEQAEAEACAAQAFAAADgEQAEgEAAgHQAAgIgEgDQgEgEgEAAQgDAAgDAEg");
	this.shape_591.setTransform(101.9,15.4);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_592.setTransform(97.7,16.1);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgOASQgDgDgBgGQABgDABgCQABgDADgBIAEgBIAHgBIAKgCIAAgCQAAgEgCgCQgDgCgEAAQgDAAgDABQgCACgBAFIgIgBIADgIQADgCAEgCQAEgBADAAQAFAAAEABQADABACACIACAFIAAAGIAAAIIABAMIABAFIgHAAQgBgCAAgDIgIAFIgFABQgIAAgDgDgAAAACIgHABIgCADIgBADQAAABAAAAQAAABAAABQABAAAAABQABAAAAABQACACAFAAQABAAAEgCQACgCACgDQACgCgBgFIAAgCIgJACg");
	this.shape_593.setTransform(93.3,16.1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_594.setTransform(87.7,18.4);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AAIAcIgLgVIgGAFIAAAQIgHAAIAAg3IAHAAIAAAfIAPgPIAJAAIgPANIAQAag");
	this.shape_595.setTransform(84.9,15.3);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_596.setTransform(80.6,16.1);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_597.setTransform(77.8,15.3);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_598.setTransform(75.9,16.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_599.setTransform(71.2,15.3);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_600.setTransform(69.4,15.3);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgOASQgDgDgBgGQABgDABgCQABgDADgBIAEgBIAHgBIAKgCIAAgCQAAgEgCgCQgCgCgFAAQgDAAgDABQgCACgBAFIgIgBQABgFADgDQACgCAEgCQAEgBADAAQAGAAADABQADABACACIACAFIAAAGIAAAIIABAMIABAFIgGAAQgCgCAAgDIgHAFIgGABQgIAAgDgDgAAAACIgHABIgCADIgBADQAAABAAAAQAAABAAABQABAAAAABQABAAAAABQACACAFAAQABAAAEgCQADgCABgDQABgCAAgFIAAgCIgJACg");
	this.shape_601.setTransform(66.4,16.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgLAQQgGgGAAgKQAAgFADgFQACgFAEgDQAFgCADAAQAHAAAEADQAFAEABAGIgHABQgBgEgCgCQgDgCgDAAQgEAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAEAAADgCQADgDABgFIAHABQgCAHgEAEQgFAEgHAAQgGAAgFgFg");
	this.shape_602.setTransform(62.3,16.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_603.setTransform(56.8,18.4);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AAIAcIgMgVIgEAFIAAAQIgIAAIAAg3IAIAAIAAAfIAOgPIAJAAIgPANIARAag");
	this.shape_604.setTransform(54,15.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_605.setTransform(49.7,16.1);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_606.setTransform(46.9,15.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_607.setTransform(45,16.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AAAAbIgDgEIgBgIIAAgWIgFAAIAAgFIAFAAIAAgLIAGgEIAAAPIAHAAIAAAFIgHAAIAAAWIAAAEIABACIACAAIAEAAIABAGIgGABIgEgBg");
	this.shape_608.setTransform(40.1,15.4);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_609.setTransform(38.1,15.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AgIATIgFgDIgCgFIgBgHIAAgYIAIAAIAAAVIAAAIQAAACADACQACACADAAQABAAADgCQADgCABgCIABgJIAAgUIAIAAIAAAoIgHAAIAAgGQgFAHgGAAQgEAAgDgCg");
	this.shape_610.setTransform(35,16.2);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgOASQgDgDAAgGQgBgDACgCQABgDACgBIAFgBIAHgBIAKgCIAAgCQAAgEgBgCQgEgCgEAAQgDAAgDABQgDACAAAFIgIgBIADgIQADgCAEgCQAEgBADAAQAFAAAEABQAEABABACIACAFIABAGIAAAIIAAAMIABAFIgHAAQgBgCAAgDIgIAFIgGABQgGAAgEgDgAAAACIgHABIgCADIgBADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQACACAFAAQABAAADgCQAEgCABgDQACgCgBgFIAAgCIgJACg");
	this.shape_611.setTransform(30.6,16.1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AgEAcIAAgiIgHAAIAAgFIAHAAIAAgFIAAgGQABgCADgCQABgCAEABIAHAAIgBAGIgEgBQgBAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAEIAAAEIAIAAIAAAFIgIAAIAAAig");
	this.shape_612.setTransform(27.5,15.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_613.setTransform(24,16.1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AgIAaQgDgDgDgFQgCgFgBgGQABgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABABADIAAgVIAHAAIAAA4IgGAAIAAgFQgEAGgHAAQgEAAgEgDgAgGgDQgDADAAAHQAAAIADAEQAEAEACAAQAFAAADgEQADgEAAgHQAAgIgDgDQgEgEgEAAQgDAAgDAEg");
	this.shape_614.setTransform(19.5,15.4);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AgHAaQgFgDgCgFQgDgFABgGQgBgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABABADIAAgVIAIAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgDgDgAgGgDQgDADAAAHQAAAIADAEQAEAEADAAQAEAAADgEQADgEAAgHQAAgIgDgDQgDgEgFAAQgCAAgEAEg");
	this.shape_615.setTransform(12.9,15.4);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_616.setTransform(8.6,16.1);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AgOASQgDgDAAgGQAAgDABgCQABgDACgBIAGgBIAFgBIAMgCIAAgCQAAgEgCgCQgEgCgEAAQgDAAgDABQgCACgCAFIgGgBIADgIQACgCAEgCQAEgBAEAAQAEAAAEABQADABACACIACAFIABAGIAAAIIAAAMIACAFIgHAAQgCgCAAgDIgHAFIgHABQgGAAgEgDgAAAACIgGABIgDADIgBADQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQACACAEAAQADAAACgCQADgCACgDQABgCABgFIAAgCIgKACg");
	this.shape_617.setTransform(4.2,16.1);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AAAAbIgCgEIgBgIIAAgWIgGAAIAAgFIAGAAIAAgLIAEgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_618.setTransform(274.7,6.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_619.setTransform(272.7,6.4);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AgHAaQgEgDgDgFQgDgFABgGQgBgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABABADIAAgVIAIAAIAAA4IgHAAIAAgFQgEAGgHAAQgDAAgEgDgAgGgDQgDADAAAHQAAAIADAEQAEAEACAAQAFAAADgEQAEgEgBgHQABgIgEgDQgDgEgFAAQgCAAgEAEg");
	this.shape_620.setTransform(269.5,6.4);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_621.setTransform(265.2,7.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_622.setTransform(262,7.1);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AgLAQQgGgGAAgKQAAgFADgFQACgFAEgDQAFgCADAAQAHAAAEADQAFAEABAGIgHABQgBgEgCgCQgDgCgDAAQgEAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAEAAADgCQADgDABgFIAHABQgCAHgEAEQgFAEgHAAQgGAAgFgFg");
	this.shape_623.setTransform(258.5,7.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_624.setTransform(253,9.4);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AAIAcIgMgVIgEAFIAAAQIgIAAIAAg3IAIAAIAAAfIAOgPIAJAAIgPANIARAag");
	this.shape_625.setTransform(250.2,6.4);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_626.setTransform(245.9,7.2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_627.setTransform(243.1,6.4);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_628.setTransform(241.2,7.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_629.setTransform(235.2,7.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgKAGgGQAGgEAGAAQAIAAAFAFQAGAGAAAJQAAAHgCAFQgDAEgEADQgFACgFAAQgHAAgGgFgAgHgKQgDAEAAAGQAAAHADAEQAEAEADAAQAFAAAEgEQADgEAAgHQAAgGgDgEQgEgEgFAAQgDAAgEAEg");
	this.shape_630.setTransform(230.8,7.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_631.setTransform(227.7,6.4);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AAAAbIgCgEIgBgIIAAgWIgGAAIAAgFIAGAAIAAgLIAFgEIAAAPIAGAAIAAAFIgGAAIAAAWIAAAEIABACIACAAIADAAIABAGIgEABIgFgBg");
	this.shape_632.setTransform(225.8,6.5);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgOASQgDgDgBgGQABgDABgCQABgDADgBIAEgBIAHgBIAKgCIAAgCQAAgEgCgCQgDgCgEAAQgDAAgDABQgCACgBAFIgIgBIADgIQADgCAEgCQAEgBADAAQAFAAAEABQADABACACIACAFIAAAGIAAAIIABAMIABAFIgHAAQgBgCAAgDIgIAFIgFABQgIAAgDgDgAAAACIgHABIgCADIgBADQAAABAAAAQAAABAAABQABAAAAABQABAAAAABQACACAFAAQABAAAEgCQACgCACgDQACgCgBgFIAAgCIgJACg");
	this.shape_633.setTransform(222.4,7.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_634.setTransform(219.3,6.4);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgEAdIAAgiIgHAAIAAgGIAHAAIAAgEIAAgHQABgCADgCQABgCAEAAIAHABIgBAGIgEgBQgBABgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBACAAADIAAAEIAIAAIAAAGIgIAAIAAAig");
	this.shape_635.setTransform(217.5,6.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_636.setTransform(214.1,7.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_637.setTransform(211,6.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_638.setTransform(206.8,9.4);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AAIAcIgLgVIgGAFIAAAQIgHAAIAAg3IAHAAIAAAfIAPgPIAJAAIgPANIAQAag");
	this.shape_639.setTransform(204,6.4);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_640.setTransform(199.7,7.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_641.setTransform(196.9,6.4);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_642.setTransform(194.9,7.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgdAAQAAAHADAEQAEADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_643.setTransform(188.9,7.2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AAAAbIgDgEIgBgIIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAIAAIAAAFIgIAAIAAAWIABAEIABACIACAAIAEAAIABAGIgGABIgEgBg");
	this.shape_644.setTransform(185.7,6.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AgOASQgEgDAAgGQAAgDACgCQABgDACgBIAGgBIAFgBIAMgCIAAgCQAAgEgDgCQgDgCgEAAQgEAAgCABQgDACgBAFIgGgBIADgIQACgCAEgCQAEgBAEAAQAFAAADABQADABACACIACAFIAAAGIAAAIIABAMIACAFIgHAAQgCgCAAgDIgHAFIgGABQgHAAgEgDgAAAACIgGABIgDADIgBADQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQACACAEAAQADAAACgCQADgCACgDQACgCAAgFIAAgCIgKACg");
	this.shape_645.setTransform(182.3,7.2);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_646.setTransform(179.1,7.1);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AAAAbIgDgEIgBgIIAAgWIgFAAIAAgFIAFAAIAAgLIAGgEIAAAPIAHAAIAAAFIgHAAIAAAWIAAAEIABACIACAAIAEAAIABAGIgGABIgEgBg");
	this.shape_647.setTransform(174.2,6.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_648.setTransform(171,7.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgdAAQAAAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_649.setTransform(166.9,7.2);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_650.setTransform(163.6,7.1);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAFAFQAFAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_651.setTransform(159.8,7.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AAAAbIgDgEIAAgIIAAgWIgGAAIAAgFIAGAAIAAgLIAFgEIAAAPIAGAAIAAAFIgGAAIAAAWIAAAEIABACIACAAIADAAIACAGIgFABIgFgBg");
	this.shape_652.setTransform(156.6,6.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_653.setTransform(153.2,7.1);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_654.setTransform(150.2,6.4);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AgLAaQgEgEAAgGIAHABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQADACADAAQAEAAADgCQACgCABgDIABgJQgFAFgGAAQgHAAgFgGQgFgGAAgHQAAgGACgFQADgFAEgCQAEgDAEAAQAHAAAEAGIAAgFIAHAAIAAAiQAAAJgCAEQgCAEgEADQgFACgFAAQgGAAgFgDgAgGgTQgDAEAAAIQAAAHADADQADADADAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgEgFAAQgDAAgDADg");
	this.shape_655.setTransform(144.7,8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_656.setTransform(140.5,7.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_657.setTransform(137.4,6.4);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AgHAaQgEgDgDgFQgCgFAAgGQAAgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAHAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgDgDgAgGgDQgDADAAAHQAAAIAEAEQACAEAEAAQAEAAADgEQADgEABgHQgBgIgDgDQgEgEgEAAQgDAAgDAEg");
	this.shape_658.setTransform(134.2,6.4);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("AgIATIgFgDIgCgFIgBgHIAAgYIAHAAIAAAVIABAIQABACACACQACACADAAQABAAADgCQADgCABgCIABgJIAAgUIAHAAIAAAoIgGAAIAAgGQgFAHgGAAQgEAAgDgCg");
	this.shape_659.setTransform(129.9,7.2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_660.setTransform(126.8,6.4);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("AgLAQQgGgGAAgKQAAgFADgFQACgFAEgDQAFgCADAAQAHAAAEADQAFAEABAGIgHABQgBgEgCgCQgDgCgDAAQgEAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAEAAADgCQADgDABgFIAHABQgCAHgEAEQgFAEgHAAQgGAAgFgFg");
	this.shape_661.setTransform(124.1,7.2);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_662.setTransform(119.8,7.1);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_663.setTransform(116.7,6.4);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_664.setTransform(112.5,9.4);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AAIAcIgLgVIgGAFIAAAQIgHAAIAAg3IAHAAIAAAfIAPgPIAJAAIgPANIAQAag");
	this.shape_665.setTransform(109.7,6.4);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_666.setTransform(105.4,7.2);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_667.setTransform(102.6,6.4);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_668.setTransform(100.6,7.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_669.setTransform(94.8,7.2);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_670.setTransform(90.6,7.2);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AgBAUIgQgnIAHAAIAJAXIABAIIACgIIAJgXIAHAAIgPAng");
	this.shape_671.setTransform(86.4,7.2);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_672.setTransform(83.5,6.4);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgKAGgGQAGgEAGAAQAIAAAFAFQAGAGAAAJQAAAHgCAFQgDAEgFADQgEACgFAAQgHAAgGgFgAgHgKQgDAEAAAGQAAAHADAEQAEAEADAAQAFAAAEgEQADgEAAgHQAAgGgDgEQgEgEgFAAQgDAAgEAEg");
	this.shape_673.setTransform(80.5,7.2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#000000").s().p("AgBAUIgRgnIAIAAIAJAXIABAIIACgIIAKgXIAGAAIgPAng");
	this.shape_674.setTransform(76.3,7.2);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_675.setTransform(72.1,7.1);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_676.setTransform(69,6.4);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_677.setTransform(63.9,7.2);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#000000").s().p("AgHAaQgEgDgDgFQgCgFAAgGQAAgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAHAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgDgDgAgGgDQgDADAAAHQAAAIAEAEQACAEAEAAQAEAAADgEQADgEABgHQgBgIgDgDQgDgEgFAAQgCAAgEAEg");
	this.shape_678.setTransform(59.6,6.4);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_679.setTransform(55.3,7.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgKAGgGQAGgEAGAAQAIAAAFAFQAGAGAAAJQAAAHgDAFQgCAEgEADQgFACgFAAQgHAAgGgFgAgHgKQgDAEgBAGQABAHADAEQADAEAEAAQAFAAAEgEQADgEAAgHQAAgGgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_680.setTransform(50.9,7.2);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AgJAXIAAAFIgHAAIAAg4IAHAAIAAAVQAEgGAFAAQAEAAAEACQADABACADIAEAHIABAGQAAALgGAGQgFAGgHAAQgFAAgEgGgAgGgDQgEADAAAHQAAAHACADQADAGAFAAQAEAAADgEQADgEABgIQgBgHgCgDQgEgEgEAAQgDAAgDAEg");
	this.shape_681.setTransform(46.6,6.4);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_682.setTransform(39.9,7.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_683.setTransform(36.9,6.4);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AgLAaQgEgEAAgGIAHABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQADACADAAQAEAAADgCQACgCABgDIABgJQgFAFgGAAQgHAAgFgGQgFgGAAgHQAAgGACgFQADgFAEgCQAEgDAEAAQAHAAAEAGIAAgFIAHAAIAAAiQAAAJgCAEQgCAEgEADQgFACgFAAQgGAAgFgDgAgGgTQgDAEAAAIQAAAHADADQADADADAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgEgFAAQgDAAgDADg");
	this.shape_684.setTransform(31.4,8);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_685.setTransform(27.2,7.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_686.setTransform(24.1,6.4);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("AAAAbIgCgEIgBgIIAAgWIgGAAIAAgFIAGAAIAAgLIAEgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_687.setTransform(22.2,6.5);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_688.setTransform(19,7.2);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAFAFQAFAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_689.setTransform(14.8,7.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#000000").s().p("AgCAUIgPgnIAHAAIAJAXIABAIIACgIIAJgXIAIAAIgQAng");
	this.shape_690.setTransform(10.6,7.2);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_691.setTransform(6.4,7.1);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_692.setTransform(3.1,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,131.2);


(lib.Legal_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAXQgGgHAAgQQAAgJACgGQACgGAEgDQAEgEAFAAQAEAAADACQAEACADADIADAJIABAMQAAAKgCAGQgCAGgEADQgEAEgGAAQgHAAgEgGgAgHgSQgDAFAAANQAAAOADAEQAEAFADAAQAFAAACgFQAEgEAAgOQAAgNgEgEQgCgFgFAAQgDAAgEAEg");
	this.shape.setTransform(173.1,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCADIAAgGIAGAAIAAAGg");
	this.shape_1.setTransform(169.9,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADAcIAAgrIgFAFIgHAEIAAgHQAGgDADgEQAEgEACgDIAEAAIAAA3g");
	this.shape_2.setTransform(166.2,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDADIAAgGIAGAAIAAAGg");
	this.shape_3.setTransform(163.3,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMAYQgFgFgBgHIAIAAQAAAFADADQAEACADAAQAEAAADgDQAEgEAAgHQAAgGgEgCQgDgDgEAAQgDAAgDACQgCABgCABIgHgBIAGgbIAbAAIAAAGIgWAAIgDAQQAGgEADAAQAIAAAFAFQAGAEgBAIQABAIgFAFQgFAHgJAAQgHAAgFgEg");
	this.shape_4.setTransform(160,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAcQAAgHACgKQADgJAEgHQADgJAGgGIgaAAIAAgHIAjAAIAAAGQgGAGgFAJQgGAIgBAKQgCAHAAAJg");
	this.shape_5.setTransform(155.6,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AADAcIAAgrIgFAFIgHAEIAAgHQAGgDADgEQAEgEACgDIAEAAIAAA3g");
	this.shape_6.setTransform(150.8,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAYQgFgFgBgHIAHAAQABAFAEADQACACAEAAQAEAAADgDQAEgEAAgHQAAgGgEgCQgDgDgEAAQgDAAgCACQgDABgCABIgGgBIAFgbIAaAAIAAAGIgUAAIgEAQQAGgEAEAAQAHAAAFAFQAGAEAAAIQAAAIgFAFQgGAHgIAAQgHAAgFgEg");
	this.shape_7.setTransform(146.8,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMAYQgFgEAAgHIAHgBQABAGADACQADADADAAQAEAAADgDQAEgEAAgFQAAgFgEgDQgDgDgEAAIgEABIABgFIABABQADAAADgDQAEgCAAgFQAAgEgDgCQgCgDgDAAQgDAAgDADQgDACgBAFIgHgBQACgHAEgEQAFgEAGAAQADAAAEACQAEACACAEQACADAAAEQAAAEgCADQgCADgEACQAFABADACQADADAAAGQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape_8.setTransform(142.3,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQAAgHADgKQACgJAEgHQAEgJAFgGIgaAAIAAgHIAjAAIAAAGQgFAGgGAJQgFAIgCAKQgBAHgBAJg");
	this.shape_9.setTransform(138,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDADIAAgGIAGAAIAAAGg");
	this.shape_10.setTransform(132.5,29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAaQgFgDgCgFQgDgFABgGQgBgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAHAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgDgDgAgGgDQgDADAAAHQAAAIAEAEQADAEADAAQAEAAADgEQADgEAAgHQAAgIgDgDQgDgEgFAAQgCAAgEAEg");
	this.shape_11.setTransform(129,26.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAFAFQAFAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_12.setTransform(124.7,27.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAUIgQgnIAHAAIAJAXIABAIIACgIIAJgXIAIAAIgQAng");
	this.shape_13.setTransform(120.5,27.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_14.setTransform(117.5,27.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_15.setTransform(113.7,27.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_16.setTransform(109.4,27.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAGAFQAEAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_17.setTransform(105.3,27.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_18.setTransform(102,27.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_19.setTransform(96.2,27.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAbIgCgEQgCgCAAgGIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_20.setTransform(93.2,26.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAJAcIAAgaQAAgDgCgDQgCgCgEAAQgCAAgCACQgDABgBADIgBAGIAAAWIgHAAIAAg3IAHAAIAAAVQAEgGAGAAQAFAAADACQADABACAEQABADAAAEIAAAag");
	this.shape_21.setTransform(89.8,26.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAaQgEgEAAgGIAHABQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQADACADAAQAEAAADgCQACgCABgDIABgJQgFAFgGAAQgHAAgFgGQgFgGAAgHQAAgGACgFQADgFAEgCQAEgDAEAAQAHAAAEAGIAAgFIAHAAIAAAiQAAAJgCAEQgCAEgEADQgFACgFAAQgGAAgFgDgAgGgTQgDAEAAAIQAAAHADADQADADADAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgEgFAAQgDAAgDADg");
	this.shape_22.setTransform(85.3,28.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_23.setTransform(82.4,26.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_24.setTransform(80.4,27.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_25.setTransform(75.7,26.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_26.setTransform(74,26.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAcIgHgRIgWAAIgGARIgIAAIAWg3IAGAAIAXA3gAAJAFIgGgOIgDgMIgDALIgGAPIASAAg");
	this.shape_27.setTransform(70.5,26.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgCADIAAgGIAGAAIAAAGg");
	this.shape_28.setTransform(65,29);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMAZQgGgDgDgIQgDgHAAgHQAAgIAEgGQADgIAGgDQAHgDAFAAQAJAAAGAEQAGAEACAIIgIACQgCgGgDgDQgEgDgGAAQgEAAgFADQgEADgCAGQgCAFAAAFQAAAGACAGQACAFAFADQAEACAEAAQAGAAAEgDQAFgEABgHIAIACQgDAJgGAFQgGAFgJAAQgHAAgGgEg");
	this.shape_29.setTransform(61,26.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQAcIAAg3IAHAAIAAAwIAaAAIAAAHg");
	this.shape_30.setTransform(56.1,26.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAcIAAg3IAHAAIAAAwIAaAAIAAAHg");
	this.shape_31.setTransform(51.7,26.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPAcIgIgMIgFgIIgCgDIgDgCIgFAAIgIAAIAAAZIgIAAIAAg3IAYAAQAHAAAEACQAEABACAEQADAEAAAFQAAAGgEAEQgEACgIABIAEADIAHAIIAKAPgAgQgCIAQAAIAGgBQADgBABgCQACgDAAgCQAAgEgDgDQgDgDgGAAIgQAAg");
	this.shape_32.setTransform(44.5,26.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAUAcIAAguIgRAuIgFAAIgRguIAAAuIgHAAIAAg3IAMAAIANAnIABAIIADgJIAOgmIAKAAIAAA3g");
	this.shape_33.setTransform(38,26.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAHIgdAAIAAARIAZAAIAAAFIgZAAIAAAag");
	this.shape_34.setTransform(32.4,26.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgMAYQgFgFgBgHIAHAAQABAFADADQAEACADAAQAEAAADgDQAEgEAAgHQAAgGgEgCQgDgDgEAAQgDAAgCACQgEABgBABIgHgBIAGgbIAaAAIAAAGIgUAAIgEAQQAGgEADAAQAIAAAFAFQAGAEgBAIQABAIgFAFQgFAHgJAAQgHAAgFgEg");
	this.shape_35.setTransform(25.5,26.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AADAcIAAgrIgFAFIgHAEIAAgHQAGgDADgEQAEgEACgDIAEAAIAAA3g");
	this.shape_36.setTransform(20.8,26.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLAXQgGgHAAgQQAAgJACgGQACgGAEgDQAEgEAFAAQAEAAAEACQADACADADIADAJIABAMQAAAKgCAGQgCAGgEADQgEAEgGAAQgHAAgEgGgAgHgSQgDAFAAANQAAAOADAEQAEAFADAAQAEAAAEgFQADgEAAgOQAAgNgDgEQgEgFgEAAQgDAAgEAEg");
	this.shape_37.setTransform(16.7,26.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAcIABgFIAFgHIAJgJQAHgHADgDQAEgFAAgEQAAgEgDgDQgDgCgFAAQgDAAgDADQgDADAAAFIgHgBQABgIAEgEQAFgEAHAAQAHAAAFAEQAFAFAAAHIgBAGQgBAEgEABQgDAEgHAGIgHAIIgDADIAbAAIAAAHg");
	this.shape_38.setTransform(12.2,26.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgNAZQgHgEgEgHQgEgHAAgHQAAgGAEgHQAEgHAHgEQAHgEAGAAQAHAAAHAEQAHAEAEAHQAEAHAAAGQAAAHgEAHQgEAHgGAEQgHAEgIAAQgGAAgHgEgAgKgUQgHADgCAGQgEAGAAAFQAAAGAEAGQACAGAHADQAFADAFAAQAGAAAGgDQAGgDADgGQADgGAAgGQAAgFgDgGQgDgGgHgDQgFgDgGAAQgEAAgGADgAgJAMQgFgFAAgHQAAgEACgDQACgEADgCQAEgCADAAQAFAAADACQAEADACAEIgGABQgBgDgCgBQgCgCgDAAQgDAAgDAEQgCADAAAEQAAAGACADQADADADAAQADAAADgCQACgCABgEIAFACQgBAFgEACQgEADgFAAQgFAAgEgEg");
	this.shape_39.setTransform(5,26.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCAEIAAgGIAGAAIAAAGg");
	this.shape_40.setTransform(180.1,20);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAZQgGgEgDgGQgDgIAAgHQAAgIAEgHQADgGAGgEQAHgDAFAAQAJAAAGAEQAGAEACAJIgIABQgCgGgDgDQgEgDgGAAQgEAAgFAEQgEADgCAFQgCAFAAAFQAAAGACAFQACAGAFADQAEADAEAAQAGAAAEgEQAFgEABgHIAIACQgDAJgGAFQgGAFgJAAQgHAAgGgEg");
	this.shape_41.setTransform(176.1,17.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgVAcIAAg3IAVAAIAIABQAEAAADACQADACACAEQABADAAAFQAAAHgEADQgFAFgMAAIgNAAIAAAXgAgNAAIANAAQAIAAADgDQACgCAAgFQABgEgCgCQgCgDgDgBIgHAAIgNAAg");
	this.shape_42.setTransform(170.7,17.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_43.setTransform(166.8,17.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKAaQgFgCgDgEQgDgFAAgGIAHAAIACAHQACADAEABQAEACADAAIAIgBIAFgDIABgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgCgEgBIgIgEIgLgBQgEgCgCgEQgCgCAAgFQAAgEACgDQADgFAFgBQAEgCAFAAQAGAAAEACQAFACADAEQADAEAAAFIgIABQAAgGgDgDQgEgDgGAAQgFAAgDADQgEACAAAEQAAADADACQACACAHACIANAEQAFAAACADQACAEAAAFQAAAEgCAEQgDAEgFADQgFACgGAAQgGAAgFgDg");
	this.shape_44.setTransform(163,17.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_45.setTransform(157.1,20.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAcIAAg3IAnAAIAAAHIgfAAIAAARIAdAAIAAAFIgdAAIAAATIAhAAIAAAHg");
	this.shape_46.setTransform(153.5,17.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgKAaQgFgCgDgEQgDgFAAgGIAHAAIACAHQACADAEABQAEACADAAIAIgBIAFgDIABgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgCgEgBIgIgEIgLgBQgEgCgCgEQgCgCAAgFQAAgEACgDQADgFAFgBQAEgCAFAAQAGAAAEACQAFACADAEQADAEAAAFIgIABQAAgGgDgDQgEgDgGAAQgFAAgDADQgEACAAAEQAAADADACQACACAHACIANAEQAFAAACADQACAEAAAFQAAAEgCAEQgDAEgFADQgFACgGAAQgGAAgFgDg");
	this.shape_47.setTransform(148,17.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgCAcIAAgYIgXgfIAKAAIALARIAEAKIAGgKIALgRIAJAAIgXAfIAAAYg");
	this.shape_48.setTransform(142.7,17.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAOAcIgbgrIAAArIgIAAIAAg3IAIAAIAcArIAAgrIAHAAIAAA3g");
	this.shape_49.setTransform(137.2,17.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_50.setTransform(131.1,18.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAFAFQAFAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_51.setTransform(127.3,18.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgKAXIAAAFIgGAAIAAg4IAHAAIAAAVQAEgGAFAAQAEAAAEACQADABACADIAEAHIABAGQgBALgFAGQgFAGgHAAQgFAAgFgGgAgGgDQgEADAAAHQAAAHACADQAEAGAEAAQAEAAADgEQADgEABgIQAAgHgDgDQgEgEgEAAQgDAAgDAEg");
	this.shape_52.setTransform(123,17.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAVAVIAAgYIgBgGIgDgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgEAAgDADQgDADAAAHIAAAWIgFAAIAAgZQAAgFgCgCQgBgDgFAAQgDAAgCACQgDACgBADIgBAHIAAAVIgHAAIAAgoIAGAAIAAAGQADgDADgCQADgCAEAAQAFAAACACQABACACAEQAFgIAHAAQAHAAADAEQAEADAAAHIAAAbg");
	this.shape_53.setTransform(117.4,18.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_54.setTransform(111.9,18.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAUAcIAAguIgRAuIgFAAIgRguIAAAuIgHAAIAAg3IAMAAIANAnIABAIIADgJIAOgmIAKAAIAAA3g");
	this.shape_55.setTransform(106.3,17.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_56.setTransform(99.7,20.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_57.setTransform(96.6,18.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_58.setTransform(92.4,18.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgLAQQgGgGAAgKQAAgFADgFQACgFAEgDQAFgCADAAQAHAAAEADQAFAEABAGIgHABQgBgEgCgCQgDgCgDAAQgEAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAEAAADgCQADgDABgFIAHABQgCAHgEAEQgFAEgHAAQgGAAgFgFg");
	this.shape_59.setTransform(88.3,18.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_60.setTransform(85.4,17.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgBAUIgRgnIAIAAIAJAXIABAIIACgIIAJgXIAHAAIgPAng");
	this.shape_61.setTransform(82.5,18.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_62.setTransform(79.4,18.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAQQgFgGAAgKQAAgJAFgFQAFgGAHAAQAIAAAGAFQAEAGAAAJIAAABIgcAAQAAAHADAEQAEADADAAQAEAAADgCQADgCABgEIAHABQgCAGgEAEQgEADgIAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_63.setTransform(75.6,18.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgKAaQgFgCgDgEQgDgFAAgGIAHAAIACAHQACADAEABQAEACADAAIAIgBIAFgDIABgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgCgEgBIgIgEIgLgBQgEgCgCgEQgCgCAAgFQAAgEACgDQADgFAFgBQAEgCAFAAQAGAAAEACQAFACADAEQADAEAAAFIgIABQAAgGgDgDQgEgDgGAAQgFAAgDADQgEACAAAEQAAADADACQACACAHACIANAEQAFAAACADQACAEAAAFQAAAEgCAEQgDAEgFADQgFACgGAAQgGAAgFgDg");
	this.shape_64.setTransform(70.7,17.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_65.setTransform(63.7,18.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgLAaQgEgEAAgGIAHABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQADACADAAQAEAAADgCQACgCABgDIABgJQgFAFgGAAQgHAAgFgGQgFgGAAgHQAAgGACgFQADgFAEgCQAEgDAEAAQAHAAAEAGIAAgFIAHAAIAAAiQAAAJgCAEQgCAEgEADQgFACgFAAQgGAAgFgDgAgGgTQgDAEAAAIQAAAHADADQADADADAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgEgFAAQgDAAgDADg");
	this.shape_66.setTransform(59.2,19.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgOASQgDgDAAgGQgBgDACgCQABgDACgBIAGgBIAGgBIAKgCIAAgCQAAgEgBgCQgEgCgEAAQgDAAgDABQgDACAAAFIgIgBIADgIQADgCAEgCQAEgBADAAQAFAAAEABQAEABABACIACAFIABAGIAAAIIAAAMIABAFIgHAAQgBgCAAgDIgIAFIgGABQgGAAgEgDgAAAACIgHABIgCADIgBADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQACACAFAAQABAAADgCQAEgCABgDQACgCgBgFIAAgCIgJACg");
	this.shape_67.setTransform(54.9,18.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_68.setTransform(51.7,18.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgCAGgFAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_69.setTransform(47.9,18.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAIAcIgMgVIgEAFIAAAQIgHAAIAAg3IAHAAIAAAfIAOgPIAJAAIgPANIARAag");
	this.shape_70.setTransform(43.9,17.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgKAHgGQAFgEAGAAQAIAAAGAFQAFAGAAAJQAAAHgDAFQgCAEgFADQgEACgFAAQgHAAgFgFgAgHgKQgDAEgBAGQABAHADAEQADAEAEAAQAFAAADgEQAEgEAAgHQAAgGgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_71.setTransform(39.5,18.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_72.setTransform(36.2,18.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgUAcIAAg3IAUAAQAGAAAEACQAEABACAEQADAEgBAEQAAADgBAEQgCADgFACQAGAAACADQADAEAAAFQAAAEgCADQgBAEgDABIgGADIgJABgAgMAVIAMAAIAFAAIAEgBQABgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgEgDgCQgBgCgDgBIgHgBIgMAAgAgMgDIAMAAIAFgBQADAAABgCQACgCAAgDQAAgDgCgCQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgHgBIgLAAg");
	this.shape_73.setTransform(32.1,17.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgOAcIgBgHIAEABIAEgBIADgCIACgFIAAgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQAoIgDAKIgDAFQgDACgEAAIgEgBg");
	this.shape_74.setTransform(25.2,19.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAAAbIgCgEQgCgCAAgGIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_75.setTransform(22.1,17.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_76.setTransform(20.1,17.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_77.setTransform(18.3,17.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgMAQQgGgGABgKQgBgJAGgFQAFgGAHAAQAIAAAFAFQAGAGAAAJIAAABIgdAAQAAAHADAEQAEADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgCgCQgEgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_78.setTransform(15.2,18.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgIAaQgEgDgCgFQgDgFAAgGQAAgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAGAAIAAA4IgGAAIAAgFQgEAGgHAAQgDAAgFgDgAgGgDQgDADAAAHQAAAIAEAEQADAEACAAQAFAAADgEQAEgEAAgHQAAgIgEgDQgDgEgFAAQgCAAgEAEg");
	this.shape_79.setTransform(10.7,17.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_80.setTransform(7.8,17.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAHIgdAAIAAARIAZAAIAAAFIgZAAIAAAag");
	this.shape_81.setTransform(4.6,17.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0071BC").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_82.setTransform(108.1,8.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0071BC").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_83.setTransform(104.6,7.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0071BC").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQACgFAGgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_84.setTransform(99.7,7.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0071BC").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_85.setTransform(96.2,6.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0071BC").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_86.setTransform(93.7,6.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0071BC").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgDgDgAAAACIgFACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_87.setTransform(90.3,7.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0071BC").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgDgBQgCAAgCABQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_88.setTransform(84.5,7.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0071BC").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_89.setTransform(79.7,7.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0071BC").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQACgFAGgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQADADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_90.setTransform(75.4,7.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0071BC").s().p("AgGAdIAAggIgHAAIAAgIIAHAAIAAgDIAAgIQACgDADgBQABgCAEAAIAJABIgBAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAJAAIAAAIIgJAAIAAAgg");
	this.shape_91.setTransform(71.8,6.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0071BC").s().p("AAHAVIAAgVIAAgHIgCgDIgEgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_92.setTransform(67.9,7.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0071BC").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_93.setTransform(64.4,6.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0071BC").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_94.setTransform(60,6.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0071BC").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_95.setTransform(56.7,7.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0071BC").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_96.setTransform(52.1,7.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0071BC").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQADgDAAgGQAAgFgDgDQgDgDgEAAQgCAAgDADg");
	this.shape_97.setTransform(47.2,7.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0071BC").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_98.setTransform(43.7,6.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0071BC").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_99.setTransform(41.2,6.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0071BC").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_100.setTransform(38.8,6.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0071BC").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_101.setTransform(35.2,6.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0071BC").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_102.setTransform(30.4,6.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0071BC").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_103.setTransform(25.9,7.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0071BC").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_104.setTransform(18.9,6.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0071BC").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_105.setTransform(14.4,7.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0071BC").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_106.setTransform(10,7.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0071BC").s().p("AALAcIgIgMIgEgJIgEgCIgFgBIgDAAIAAAYIgLAAIAAg3IAYAAQAHAAAEACQAEABADAEQACAEAAAFQAAAGgDAFQgEACgIABIAHAFIAGAJIAHALgAgNgDIAJAAIAIAAIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgCAAIgHAAIgJAAg");
	this.shape_107.setTransform(5.2,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,33.1);


(lib.graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3EB14F").ss(5).p("EArqgUgIg3EjIgcAuIgcgVIgbgFIg4C0IgcAhIgbgyIgcAyIgcACIgbA8IgcBOIg4AvIgbgeIgcARIgchXIgbA2IgcArIgcg9IgcB0IgbAbIgcBRIgcghIgbA5IgcARIgcBRIgcAfIgbBQIgcg6IgcgXIgbA1IgcgYIgcAuIgcBXIgbAPIgcBCIgcgDIgbhKIgcAkIgcAZIgcgXIgbAJIgcAyIgcgBIgcAmIgbAcIgcBaIgcgMIgbArIgcAjIgcAYIg3B0IgcAaIgcgPIgbglIg4gOIgcAcIgbgzIgcALIgchaIgbg6IgcAGIgcABIgcAsIgbACIgcgIIgcAfIgbArIgcAKIgchIIgcgpIgbgIIgcgkIgcASIgbBAIhUjHIgbAwIgchzIgcgpIgbgfIgcBUIgcgiIgcA8Igbg+IgchxIg3CVIgcg5IgcCEIg3BuIgcgDIgcgqIgbgXIgaBNIgcgeIgcAeIgbAxIgcgxIgcBMIgcCPIgbBJIgcAkIgcA8IgbiuIgcAEIgcA+IgcgYIgbAMIgcA3IgcBHIgbgDIgcAUIgcgBIgcgfIgbA/IgcggIgcBNIgbAjIgcAyIgcASIg3gsIgcAgIgcgGIgbAtIhUBQIgbgiIgcgFIgcAGIg3ApIgcAEIgcAPIgbAFIgcARIgcgMIg3AVIgcAtIgcAjIgbANIhUA9IgbgIIgcAEIgcgXIgbAOIgcgGIgcAUIgcAJIgbgTIgcgCIgcAGIgbgUIgcgEIg4AgIgbgTIgcAEIgcABIgbAXIgcAFIgcAAIgcASIgbADIgcAUIgcADIg3AXIgcASIg3APIgcgHIgcAJIgbgJIg4AIIgcgKIg3AWIgcAkIgbgRIgcAJIgcABIgcAPIgbAVIgcgRIgcASIgbABIgcAQIg4ApIgFAC");
	this.shape.setTransform(281,298.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,164.7,565.5,265.8);


(lib.FidelityLogo_BK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtANIAdAAQgCADACADQADACAIABQALgBACgGIAAgDQgjgHgIgGQgDgDACgIQAGgUAqAAQAnAAgFATIgbAAQABgEgDgCQgCgBgJAAQgIAAgCAGIABACQABACARAEQAUAFAEACQAEAEgCAHQgHAVgrAAQgqAAAGgUg");
	this.shape.setTransform(77.5,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrAgIATg/IBEAAIgEAOIgoAAIgCAMIAkAAIgEALIgkAAIgDAMIAmAAIgEAOg");
	this.shape_1.setTransform(35.4,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtANIAdAAQgCADACACQADADAIAAQALAAACgGIAAgEQgjgGgIgGQgDgDACgIQAFgUArAAQAoAAgGASIgbAAQABgDgDgBQgCgCgJAAQgIgBgCAGIABADQABABARAFQAUAEAEACQAEAFgCAHQgHAVgrAAQgqAAAGgUg");
	this.shape_2.setTransform(-11.1,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGARIgGgPIgGAAIAAAPIgFAAIAAghIALAAQAMAAAAAKQAAAHgJABIAJAPgAgGgBIAGAAQAFAAABgFQgBgFgFAAIgGAAg");
	this.shape_3.setTransform(116.6,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAKgNAAQgNAAgJgKgAgaAAQAAAbAaAAQAbAAAAgbQAAgagbAAQgaAAAAAag");
	this.shape_4.setTransform(116.5,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAgIAOgvIgXAAIAFgQIBMAAIgFAQIgXAAIgNAvg");
	this.shape_5.setTransform(64.9,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAgIgMgsIgNAsIgbAAIATg/IArAAIALApIABAAIANgpIAaAAIgTA/g");
	this.shape_6.setTransform(50,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAgIAOgvIgiAvIgcAAIgEgvIAAAAIgPAvIgaAAIATg/IAvAAIACApIABAAIAZgpIAvAAIgTA/g");
	this.shape_7.setTransform(19.5,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfAgIAPgvIgYAAIAFgQIBMAAIgFAQIgXAAIgNAvg");
	this.shape_8.setTransform(3.7,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrAgIATg/IBEAAIgEAOIgoAAIgCAMIAkAAIgEALIgjAAIgEAMIAmAAIgEAOg");
	this.shape_9.setTransform(-25.5,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglAgIgMg/IAhAAIAGAnIAdgnIAgAAIgzA/g");
	this.shape_10.setTransform(-38.9,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAgIgMgsIgOAsIgbAAIAUg/IArAAIAMApIAMgpIAbAAIgTA/g");
	this.shape_11.setTransform(-55.6,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAgIAUg/IAdAAIgUA/g");
	this.shape_12.setTransform(-69.6,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhmDRIAThGIACAAQAeACAMgGQANgFAFgXIgTjHIhBAAIgcBhQgEAPAAAIQAAAQAWAAIAZAAIgSA/IhuAAQgxAAAAgsQgBgSAGgSIBDjrIB7AAIgQA5ICmAAIgCCQIBCiQIB+AAIizEYQgcAtgVAQQgYAUgigBg");
	this.shape_13.setTransform(99.1,5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhuCxIBJkCIB6AAIhJECgAgehqIAUhHIB5AAIgUBHg");
	this.shape_14.setTransform(65.5,-1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhuCxIBjliIB6AAIhkFig");
	this.shape_15.setTransform(49.2,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhyB6QglgTAAgvQAAgeAMgnQAPgpASgZQArg4BaAAQA+AAAdAQQAjATAAAuQAAAdgOApIioAAQgGAZAAAJQAAATASAAQAVAAAJggIB5AAQgLAyg2AbQgqAWgxAAQg/AAgdgOgAgOggIAxAAQADgLAAgIQAAgSgWAAQgUAAgKAlg");
	this.shape_16.setTransform(24,3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ai1B5QAAhQArhNQAeg0BAAAQAzgBASAjIAih+IB7AAIhkFiIh2AAIAJgcQgqAigvABQhBAAAAg8gAgkALQgRAqAAAWQAAATATAAQALAAAKgHIAXhVQgHgIgLAAQgUgBgIASg");
	this.shape_17.setTransform(-5.1,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhuCxIBJkCIB5AAIhJECgAgehqIAUhHIB5AAIgUBHg");
	this.shape_18.setTransform(-29.8,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiwCxIBjliID+AAIgZBVIiBAAIgRA9ICCAAIgWBLIiBAAIglCFg");
	this.shape_19.setTransform(-52.2,-1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ai1DBQgogngSgvQgqhjArhgQASguAogoQAogmAwgSQBPghBWAbQBiAbA0BZQA8BjgjBtQgXBLg9AwIhFhzIBgA2IABgBIh+htICjAZIAAAAIgBgBIiZg2ICfgkIABgBIikAKICAhgQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIiQBJIBQiMIgBAAIhnB5IATifIgBgBIgvCcIgoigIgBAAIALClIhiiAIgBABIBLCNIiNhMIgBAAIB9BnIifgRQAAAAgBAAQAAAAAAABQAAAAAAAAQABAAAAAAICaArIiaAtIAAACICfgTIh9BqIAAABIACgBIBkg0IAYglIAaAAIgSgNIA9hiIgkB0IBbAAIAcARIh7AAIg4CtQgvgSgmgmg");
	this.shape_20.setTransform(-99.8,-2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AixCzQhLhKAAhpQAAhoBLhJQBJhLBoAAQBpAABKBLQBKBJAABoQAABphKBKQhKBKhpAAQhoAAhJhKg");
	this.shape_21.setTransform(-99.6,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.9,-27.3,251.9,54.6);


(lib.closeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(9.4,9.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.clickTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E64724").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAxIgThBIAAAAIgSBBIgYAAIgchhIAaAAIAPBAIABAAIARhAIAXAAIASBAIAAAAIAQhAIAZAAIgcBhg");
	this.shape.setTransform(106.1,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAzQgFgBgFgCQgKgEgHgHIgGgHIgGgJIgCgLIgBgKIABgKIACgKIAGgJIAGgIIAIgFQAEgDAFgCIAKgDIAKgBQALAAAKAEQAFACAEADIAIAFIAHAIIAEAJQAEAJABALQgBALgEAKIgEAJIgHAHQgHAHgKAEQgKAEgLAAIgKgBgAgKgbQgFADgEAEQgDAEgDAFQgCAGAAAFQAAAGADAGQACAFADAEQAEAEAFADQAFACAFAAQAGAAAFgCQAFgDAEgEQAEgEACgFQACgGAAgGQAAgFgCgGQgCgFgEgEQgDgEgGgDQgFgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(92.8,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAxIgmg/IAAAAIAAA/IgWAAIAAhhIAbAAIAlA+IABAAIgBg+IAYAAIAABhg");
	this.shape_2.setTransform(81.1,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAxIAAhNIgbAAIAAgUIBOAAIAAAUIgcAAIAABNg");
	this.shape_3.setTransform(67.5,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAyIgKgCQgKgEgHgHIARgQQADAFAGADQAGADAFAAIAEgBIAEgCIAEgDIABgFQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAIgEgFIgGgCIgHgDIgJgEIgIgDIgHgIQgBgFAAgHQgBgIAEgFQADgHAFgDQAGgEAHgCQAHgCAFABQAGAAALACQAIADAIAGIgQARQgDgFgFgCQgFgCgFAAIgEAAIgDACIgDADQgCACAAADIACAFIADACIADACIAGACIAKAFIAKAEQAFACACAFQADAFABAIQgBAIgDAGQgDAGgFAFQgGADgGACQgHACgGAAIgKgBg");
	this.shape_4.setTransform(58.9,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAxIAAhhIBBAAIAAAUIgqAAIAAATIAnAAIAAARIgnAAIAAAVIAsAAIAAAUg");
	this.shape_5.setTransform(50.7,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAxIglhhIAaAAIAWBEIAAAAIAXhEIAaAAIgmBhg");
	this.shape_6.setTransform(41.2,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAxIglg/IgBAAIABA/IgYAAIAAhhIAbAAIAmA+IABAAIgBg+IAXAAIAABhg");
	this.shape_7.setTransform(30.7,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAxIAAhhIAWAAIAABhg");
	this.shape_8.setTransform(22.7,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// back
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED732F").s().p("AqdC0IAAlnIU7AAIAAFng");
	this.shape_9.setTransform(67,18);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,36);


(lib.border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("AXcTiMgu3AAAMAAAgnDMAu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,302,252);


(lib.close_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E4E50").ss(0.5,0,0,4).p("ABUg0IAABqQAAANgJAIQgJAJgNAAIhpAAQgNAAgJgJQgJgJAAgMIAAhqQAAgNAJgJQAKgJAMAAIBpAAQANAAAJAJQAJAJAAANg");
	this.shape.setTransform(8.4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// x
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAoIgZgaIgYAaQgEADgEAAQgFAAgDgDQgCgDAAgEQAAgEACgDIAbgaIgbgZQgCgDAAgEQAAgEACgEQADgDAFAAQAEAAAEADIAYAaIAZgaQAEgDAEAAQAEAAADADQADAEAAAEQAAAEgDADIgaAZIAaAaQADADAAAEQAAAEgDADQgDAEgEAAQgEAAgEgEg");
	this.shape_1.setTransform(8.6,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// highlight
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E2E2E4","#4E4E50"],[0,1],0.1,-4.9,0.1,4.9).s().p("AgzAOIgdgbQAAgYAdAAIBpAAQAbAAAAAXQgIAOgVAOQgXARgdAHQgdgHgWgRg");
	this.shape_2.setTransform(8.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E2E2E4","#4E4E50"],[0,1],0,-12.6,0,4.5).s().p("Ag0BUQgNAAgJgJQgJgJAAgMIAAhqQAAgNAJgJQAKgJAMAAIBpAAQANAAAJAJQAJAJAAANIAABqQAAANgJAIQgJAJgNAAg");
	this.shape_3.setTransform(8.3,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.9,18.9);


(lib.backGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37B24A").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#989897").p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#F2F3F3","#D0D2D3","#CFD1D2"],[0,0.345,0.98,1],0,-122.2,0,123.3).s().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,302,252);


(lib.arrowUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AieCfICVk9ICoE9g");
	this.shape.setTransform(16,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.9,31.9);


(lib.arrowDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AieieIE9AAIifE9g");
	this.shape.setTransform(15.9,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.9,31.9);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// a
	this.instance = new lib.text3a();
	this.instance.parent = this;
	this.instance.setTransform(3.5,7.5,5,5,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(25));

	// b
	this.instance_1 = new lib.text3b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,28.5,5,5,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},16,cjs.Ease.get(1)).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,424.5,81.7);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrowUp();
	this.instance.parent = this;
	this.instance.setTransform(111.3,15.9,1,1,0,0,0,16,15.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAYQgFgCgEgEQgDgDgCgFQgDgFAAgFQAAgEADgEQACgFADgEQAEgEAFgCQAFgCAEAAQALAAAIAIQAEADACAFQACAFAAAEQAAAFgCAFQgCAFgEADQgIAIgLAAQgEAAgFgCg");
	this.shape.setTransform(189.8,119.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWBfIAAiWIg2AAIAAgnICYAAIAAAnIg2AAIAACWg");
	this.shape_1.setTransform(180.8,112.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAkIAUhHIAlAAIgZBHg");
	this.shape_2.setTransform(169.7,106.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiBfIhLh7IgBAAIABB7IgsAAIAAi9IA0AAIBLB7IABAAIgCh7IAtAAIAAC9g");
	this.shape_3.setTransform(155.8,112.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUBjQgLgCgJgEQgTgHgOgOQgHgGgFgIQgGgIgEgKQgEgJgCgLQgBgKAAgKQAAgLABgKQACgKAEgKQAEgJAGgIQAFgIAHgGIAPgLQAJgGAJgDIAUgFQAKgCAKAAQAWAAATAHQAJADAIAGQAJAFAHAGQAHAGAFAIIAJARQAJATgBAWQABAWgJASQgEAKgFAIQgFAIgHAGQgOAOgTAHQgTAHgWAAQgKAAgKgBgAgVg1QgKAEgHAIQgIAIgDALQgFAKAAAMQAAAMAFALQAEALAHAHQAHAIAKAFQAKAEALAAQALAAALgEQAJgFAIgIQAHgHAEgLQAEgLAAgMQAAgMgEgKQgEgLgHgIQgIgIgJgEQgLgFgLAAQgLAAgKAFg");
	this.shape_4.setTransform(134.5,112.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhYBfIAAi9IBGAAQANAAAYAEQAKADAJAEQAJAEAHAFQAIAGAHAHQAGAIAFAIQAJATAAAaQAAAYgJASQgFAJgGAIQgHAHgHAGQgIAGgJAFIgSAHQgTAFgSAAgAgrA3IAWAAQANAAAJgDQAMgDAIgGQAJgHAFgLQAFgKABgPQgBgPgFgLQgFgKgJgHQgIgGgMgDQgJgDgLAAIgYAAg");
	this.shape_5.setTransform(113.9,112.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUBiQgKgBgKgEQgTgHgMgNIAeggQAHAJALAGQALAGAMAAIAIgCQAFAAAEgDQADgCADgFQACgEAAgFQgBgGgCgDQgDgEgFgDIgNgFIgOgGIgSgIQgJgDgHgFQgGgGgFgJQgEgJAAgNQAAgQAHgMQAGgLALgHQAKgHANgDQAOgEALAAQAKAAAXAGQARAGAMAMIgdAeQgGgHgKgFQgJgEgJAAIgJABQgDAAgEADQgDADgDADQgCADgBAGQAAAFACAEQACADAFACIAHAFIAMADIAUAIQAKADAKAHQAIAFAFAJQAGAKAAAOQAAAQgGANQgGALgKAIQgLAJgMADQgOAEgMAAQgKAAgKgCg");
	this.shape_6.setTransform(89.6,112.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhXBfIAAi9IBFAAQANAAAYAEQAKADAJAEQAIAEAJAFQAHAGAGAHQAGAIAGAIQAIATABAaQgBAYgIASQgGAJgGAIQgFAHgIAGQgIAGgJAFIgSAHQgTAFgRAAgAgqA3IAVAAQANAAAJgDQAMgDAIgGQAJgHAGgLQAEgKAAgPQAAgPgEgLQgGgKgJgHQgIgGgLgDQgKgDgMAAIgWAAg");
	this.shape_7.setTransform(72.7,112.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiBfIhLh7IgBAAIABB7IgsAAIAAi9IA0AAIBLB7IABAAIgCh7IAtAAIAAC9g");
	this.shape_8.setTransform(52,112.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVBjQgKgCgJgEQgTgHgOgOQgHgGgFgIQgGgIgEgKQgEgJgCgLQgCgKABgKQgBgLACgKQACgKAEgKQAEgJAGgIQAFgIAHgGIAPgLQAJgGAJgDIATgFQALgCAKAAQAVAAAUAHQAKADAHAGQAJAFAHAGQAHAGAFAIIAJARQAJATgBAWQABAWgJASQgDAKgGAIQgFAIgHAGQgOAOgTAHQgUAHgVAAQgKAAgLgBgAgVg1QgKAEgHAIQgIAIgDALQgEAKgBAMQABAMAEALQAEALAHAHQAHAIAKAFQAKAEALAAQALAAAKgEQAKgFAIgIQAHgHAEgLQAEgLAAgMQAAgMgEgKQgEgLgHgIQgIgIgKgEQgKgFgLAAQgLAAgKAFg");
	this.shape_9.setTransform(30.7,112.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhJBfIAAi9IBKAAQALAAAMACQALACAJAGQAKAGAGAJQADAFABAGQACAFAAAIQAAAQgIAKQgKALgOAEIAAABQAJABAHACQAHADAFAGQAGAGACAHQAEAIAAAJQAAAQgGALQgHALgKAGQgKAHgOACQgNADgNAAgAgdA6IAaAAIAJgBQAGgBAFgCQAFgDACgEQADgFAAgHQAAgMgJgEQgIgFgNAAIgaAAgAgdgSIAZAAQALAAAHgFQAIgGAAgKQAAgKgIgEQgHgEgNgBIgXAAg");
	this.shape_10.setTransform(11.5,112.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiBfIhLh7IgBAAIABB7IgsAAIAAi9IA0AAIBLB7IABAAIgCh7IAtAAIAAC9g");
	this.shape_11.setTransform(180.3,85.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWBfIAAi9IAsAAIAAC9g");
	this.shape_12.setTransform(166.2,85.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVBfIAAiWIg2AAIAAgnICYAAIAAAnIg2AAIAACWg");
	this.shape_13.setTransform(149.6,85.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUBiQgKgBgJgEQgUgHgNgNIAfggQAHAJALAGQAMAGALAAIAIgCQAFgBADgCQAEgCADgFQACgEAAgFQgBgGgCgDQgDgEgFgDIgNgFIgOgGIgSgIQgJgDgHgFQgHgGgEgJQgEgJAAgNQAAgQAHgMQAGgLALgHQAKgIANgCQANgEAMAAQALAAAWAGQARAGAMALIgdAgQgGgIgKgFQgJgEgJAAIgJABQgDAAgEADQgEADgCADQgCAEgBAFQAAAFACAEQADADADACIAIAFIAMADIAUAIQAKADAKAHQAIAEAFAKQAGAKAAAOQAAAQgGANQgGAMgKAHQgLAJgMADQgOAEgMAAQgKAAgKgCg");
	this.shape_14.setTransform(134.7,85.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhBBfIAAi9IB+AAIAAAmIhSAAIAAAlIBNAAIAAAjIhNAAIAAAoIBXAAIAAAng");
	this.shape_15.setTransform(120.1,85.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWBfIhIi9IAzAAIArCFIABAAIAriFIAzAAIhJC9g");
	this.shape_16.setTransform(103,85.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAiBfIhLh7IgBAAIABB7IgsAAIAAi9IA0AAIBLB7IABAAIgCh7IAtAAIAAC9g");
	this.shape_17.setTransform(84,85.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVBfIAAi9IAsAAIAAC9g");
	this.shape_18.setTransform(69.9,85.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghBcIgOgHIgMgJQgKgKgGgOQgFgOAAgRIAAh1IAtAAIAABwQAAAIADAIQACAGAEAGQAEAFAHAEQAHADAIAAQAJAAAHgDQAHgEAEgFQAEgGACgGQACgIAAgIIAAhwIAuAAIAAB1QAAARgFAOQgGAOgLAKQgLALgPAFQgPAGgSgBQgSABgPgGg");
	this.shape_19.setTransform(50.5,85.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVBjQgKgCgJgEQgTgHgOgOQgHgGgGgIQgFgIgEgKQgEgJgCgLQgCgKAAgKQAAgLACgKQACgKAEgKQAEgJAFgIQAGgIAHgGIAPgLQAIgGAKgDIATgFQALgCAKAAQAVAAAUAHQAJADAIAGQAJAFAHAGQAHAGAFAIIAJARQAJATgBAWQABAWgJASQgDAKgGAIQgFAIgHAGQgOAOgTAHQgUAHgVAAQgKAAgLgBgAgVg1QgKAEgHAIQgIAIgEALQgDAKAAAMQAAAMADALQAFALAHAHQAHAIAKAFQAKAEALAAQALAAAKgEQAKgFAHgIQAIgHAEgLQAEgLAAgMQAAgMgEgKQgEgLgIgIQgHgIgKgEQgKgFgLAAQgLAAgKAFg");
	this.shape_20.setTransform(29.9,85.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgWBfIAAhRIhIhsIA4AAIAmBHIAphHIA2AAIhJBsIAABRg");
	this.shape_21.setTransform(11,85.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUBiQgKgCgJgDQgUgIgNgMIAfggQAHAJALAGQAMAGALAAIAIgBQAFgCADgCQAEgCADgFQACgEAAgFQgBgGgCgDQgDgEgFgDIgNgGIgOgFIgSgHQgJgFgHgEQgHgGgEgJQgEgJAAgNQAAgQAHgMQAGgLALgHQAKgIANgDQANgDAMAAQALAAAWAGQARAGAMALIgdAgQgGgIgKgFQgJgEgJAAIgJABQgDAAgEADQgEACgCAEQgCAEgBAFQAAAFACAEQADADADACIAIAEIAMAEIAUAIQAKADAKAHQAIAEAFAKQAGAKAAAOQAAARgGALQgGANgKAHQgLAJgMADQgOAEgMAAQgKAAgKgCg");
	this.shape_22.setTransform(175.2,58.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAiBfIhLh7IgBAAIABB7IgsAAIAAi9IA0AAIBLB7IABAAIgCh7IAtAAIAAC9g");
	this.shape_23.setTransform(157.6,58.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVBjQgKgCgJgEQgTgHgOgOQgHgGgFgIQgGgIgEgKQgEgJgCgLQgBgKAAgKQAAgLABgKQACgKAEgKQAEgJAGgIQAFgIAHgGIAPgLQAJgGAJgDIATgFQALgCAKAAQAWAAATAHQAJADAIAGQAJAFAHAGQAHAGAFAIIAJARQAJATgBAWQABAWgJASQgEAKgFAIQgFAIgHAGQgOAOgTAHQgTAHgWAAQgKAAgLgBgAgVg1QgKAEgHAIQgIAIgDALQgFAKAAAMQAAAMAFALQAEALAHAHQAHAIAKAFQAKAEALAAQALAAALgEQAJgFAIgIQAHgHAEgLQAEgLAAgMQAAgMgEgKQgEgLgHgIQgIgIgJgEQgLgFgLAAQgLAAgKAFg");
	this.shape_24.setTransform(136.3,58.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUBiQgKgCgKgDQgTgIgMgMIAeggQAHAJALAGQAMAGALAAIAIgBQAFgCAEgCQADgCACgFQADgEAAgFQAAgGgDgDQgDgEgFgDIgNgGIgOgFIgSgHQgJgFgHgEQgGgGgFgJQgEgJAAgNQAAgQAHgMQAGgLAKgHQALgIANgDQAOgDALAAQALAAAWAGQARAGANALIgeAgQgGgIgJgFQgKgEgJAAIgJABQgDAAgEADQgDACgDAEQgCAEAAAFQgBAFACAEQADADAEACIAHAEIAMAEIAUAIQALADAJAHQAIAEAFAKQAGAKAAAOQAAARgGALQgGANgKAHQgKAJgNADQgOAEgMAAQgKAAgKgCg");
	this.shape_25.setTransform(117.4,58.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAzBfIgPgmIhIAAIgOAmIgzAAIBRi9IArAAIBPC9gAAXAUIgXg/IgXA/IAuAAg");
	this.shape_26.setTransform(100.6,58.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhBBfIAAi9IB+AAIAAAmIhSAAIAAAlIBOAAIAAAjIhOAAIAAAoIBXAAIAAAng");
	this.shape_27.setTransform(83.9,58.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAYBfIgohMIgQAAIAABMIgtAAIAAi9IBJAAQAMAAANACQANAEAKAGQALAHAGALQAGALAAARQAAAJgDAJQgCAIgFAGQgKALgUAGIAzBSgAgggNIAWAAIAKgBIAKgCQAGgDACgFQADgEAAgHQAAgHgCgFQgDgEgFgCQgEgCgGgBIgIgBIgZAAg");
	this.shape_28.setTransform(68,58.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhBBfIAAi9IB+AAIAAAmIhSAAIAAAlIBOAAIAAAjIhOAAIAAAoIBXAAIAAAng");
	this.shape_29.setTransform(45.3,58.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAlBfIAAhQIhJAAIAABQIguAAIAAi9IAuAAIAABIIBJAAIAAhIIAuAAIAAC9g");
	this.shape_30.setTransform(27.2,58.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVBfIAAiVIg2AAIAAgoICXAAIAAAoIg2AAIAACVg");
	this.shape_31.setTransform(9.9,58.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,133.6);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrowDown();
	this.instance.parent = this;
	this.instance.setTransform(111.3,88.4,1,1,0,0,0,15.9,15.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhBBfIAAi9IB+AAIAAAnIhSAAIAAAkIBNAAIAAAjIhNAAIAAAnIBXAAIAAAog");
	this.shape.setTransform(172.5,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgZBdQgTgIgOgNQgOgNgIgSQgEgKgCgKQgCgKAAgLQAAgKACgKQACgLAEgJIAJgRIANgPQAOgNATgHIAUgFQAIgCALAAQAWAAAUAHQAKADAHAFQAIAFAGAFIgdAiQgGgIgMgFQgLgFgOAAQgMAAgIAEQgKAFgIAIQgHAIgFALQgEAKAAAMQAAANAEALQAEALAHAIQAIAIALAEQAJAFAOAAIAPgCQAHgBAGgCIAAgjIgkAAIAAgkIBPAAIAABkQgOAHgTAFQgTAEgWAAQgVAAgTgHg");
	this.shape_1.setTransform(153.9,46.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAiBfIhLh7IgBAAIABB7IgsAAIAAi9IA0AAIBLB6IABAAIgCh6IAtAAIAAC9g");
	this.shape_2.setTransform(134,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAzBfIgPgmIhIAAIgOAmIgzAAIBRi9IArAAIBPC9gAAXAUIgXg/IgXA/IAuAAg");
	this.shape_3.setTransform(114.3,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAlBfIAAhQIhJAAIAABQIguAAIAAi9IAuAAIAABIIBJAAIAAhIIAuAAIAAC9g");
	this.shape_4.setTransform(95,46.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgZBdIgSgJQgIgFgHgHQgNgNgJgTQgDgJgCgKQgCgKAAgLQAAgKACgKQACgLADgJIAKgRIANgPQAOgNASgHIAVgFQAHgCAMAAQAJAAAKACQALACAJADQAUAHAMAOIgfAfQgHgJgLgEQgKgEgLAAQgMAAgIAEQgLAFgGAIQgIAHgEALQgEALAAALQAAAMAEALQAEALAIAIQAGAHALAFQAIAEALAAQAOAAALgFQAJgGAHgIIAgAeQgGAHgIAGQgIAGgJAEQgTAIgYAAQgVAAgSgHg");
	this.shape_5.setTransform(76.7,46.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgWBfIAAhRIhIhsIA4AAIAmBGIAphGIA2AAIhJBsIAABRg");
	this.shape_6.setTransform(53.2,46.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAzBfIgPgmIhIAAIgOAmIgzAAIBRi9IArAAIBPC9gAAXAUIgXg/IgXA/IAuAAg");
	this.shape_7.setTransform(36.8,46.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AA/BfIABiFIAAAAIgyCFIgeAAIgxiFIgBAAIABCFIgrAAIAAi9IBCAAIAqB4IAAAAIAqh4IBDAAIAAC9g");
	this.shape_8.setTransform(14.9,46.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgUBiQgKgCgKgDQgTgIgMgNIAegeQAHAIALAGQALAGAMAAIAIgBQAFgCAEgCQADgCADgEQACgFAAgFQgBgGgCgDQgDgEgFgDIgNgGIgOgFIgSgHQgJgEgHgEQgGgHgFgJQgEgJAAgNQAAgQAHgLQAGgLALgIQAKgHANgEQAOgDALAAQAKAAAXAGQARAGAMAMIgdAeQgGgHgKgEQgJgFgJAAIgJABQgDABgEACQgDADgDADQgCADgBAGQAAAFACADQACADAFADIAHAEIAMAFIAUAHQAKADAKAHQAIAFAFAJQAGAKAAAOQAAAQgGAMQgGAMgKAJQgLAHgMAEQgOAEgMAAQgKAAgKgCg");
	this.shape_9.setTransform(200.7,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AhBBfIAAi9IB+AAIAAAnIhSAAIAAAkIBNAAIAAAjIhNAAIAAAnIBXAAIAAAog");
	this.shape_10.setTransform(186.1,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgWBfIAAiVIg2AAIAAgoICYAAIAAAoIg2AAIAACVg");
	this.shape_11.setTransform(170.5,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AAzBfIgPglIhIAAIgOAlIgzAAIBRi9IArAAIBPC9gAAXAUIgXg/IgXA/IAuAAg");
	this.shape_12.setTransform(155.2,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAYBfIgohMIgQAAIAABMIgtAAIAAi9IBJAAQAMAAANADQANADALAGQAKAHAGALQAGALAAARQAAAJgDAJQgCAHgFAIQgLALgTAFIAzBSgAgggMIAWAAIAKgCIAKgDQAFgCADgFQADgEAAgHQAAgIgCgDQgDgFgFgCQgEgDgGAAIgIgBIgZAAg");
	this.shape_13.setTransform(138.1,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgVBfIAAiVIg2AAIAAgoICYAAIAAAoIg2AAIAACVg");
	this.shape_14.setTransform(116,19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgUBiQgKgCgJgDQgUgIgNgNIAfgeQAHAIALAGQAMAGALAAIAIgBQAFgCADgCQAEgCADgEQABgFABgFQgBgGgCgDQgDgEgFgDIgNgGIgOgFIgSgHQgJgEgHgEQgHgHgEgJQgEgJAAgNQAAgQAHgLQAGgLALgIQAKgHANgEQANgDAMAAQALAAAWAGQARAGAMAMIgdAeQgGgHgKgEQgJgFgJAAIgJABQgDABgEACQgEADgCADQgDADAAAGQAAAFADADQACADADADIAIAEIAMAFIAUAHQAKADAJAHQAJAFAGAJQAFAKAAAOQAAAQgGAMQgGAMgKAJQgLAHgNAEQgNAEgMAAQgKAAgKgCg");
	this.shape_15.setTransform(101,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AhBBfIAAi9IB+AAIAAAnIhSAAIAAAkIBNAAIAAAjIhNAAIAAAnIBXAAIAAAog");
	this.shape_16.setTransform(86.4,19.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AAXBfIgnhMIgQAAIAABMIgtAAIAAi9IBJAAQAMAAANADQANADALAGQAKAHAGALQAGALAAARQAAAJgDAJQgCAHgFAIQgLALgSAFIAxBSgAgggMIAWAAIAKgCIAKgDQAFgCAEgFQACgEAAgHQABgIgDgDQgDgFgFgCQgEgDgFAAIgJgBIgZAAg");
	this.shape_17.setTransform(70.5,19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AhBBfIAAi9IB+AAIAAAnIhSAAIAAAkIBOAAIAAAjIhOAAIAAAnIBXAAIAAAog");
	this.shape_18.setTransform(53.8,19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgVBfIAAiVIg2AAIAAgoICYAAIAAAoIg2AAIAACVg");
	this.shape_19.setTransform(38.1,19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AAiBfIhLh7IgBAAIABB7IgsAAIAAi9IA0AAIBLB6IABAAIgCh6IAtAAIAAC9g");
	this.shape_20.setTransform(20.4,19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgWBfIAAi9IAtAAIAAC9g");
	this.shape_21.setTransform(6.3,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,104.4);


(lib.legalLink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// close
	this.closeBtn = new lib.close_btn();
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(283.4,16.4,1,1,0,0,0,8.4,8.4);
	this.closeBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,2);

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(220.5,238.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_1.setTransform(217.7,237.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_2.setTransform(214.4,236.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_3.setTransform(212.2,236.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_4.setTransform(208.7,236.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAcIAAgfIgHAAIAAgIIAHAAIAAgDIAAgIQACgDADgBQABgBAEAAIAJABIgBAIIgFgCQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAIIgIAAIAAAfg");
	this.shape_5.setTransform(205.1,236.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_6.setTransform(201.4,236.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_7.setTransform(198,236.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_8.setTransform(194,236.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAACgCQACgBABgFIALACQgCAIgFADQgEAEgIAAQgIAAgFgGg");
	this.shape_9.setTransform(189.6,236.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_10.setTransform(183.8,236.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_11.setTransform(181.4,236.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_12.setTransform(175.6,236.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_13.setTransform(171.1,236.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_14.setTransform(166.6,236.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AALAcIgIgMIgEgJIgEgCIgFgBIgDAAIAAAYIgLAAIAAg3IAYAAQAHAAAEACQAEABADAEQACAEAAAFQAAAGgDAFQgEACgIABIAHAFIAGAJIAHALgAgNgDIAJAAIAIAAIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgCAAIgHAAIgJAAg");
	this.shape_15.setTransform(161.8,236.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_16.setTransform(155.4,238.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_17.setTransform(151.9,236.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_18.setTransform(147,236.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_19.setTransform(143.5,236.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_20.setTransform(141,236.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_21.setTransform(137.6,236.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACABADIAHgFIAHgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_22.setTransform(131.8,236.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_23.setTransform(127,236.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_24.setTransform(122.7,236.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHAcIAAgfIgFAAIAAgIIAFAAIAAgDIACgIQABgDADgBQABgBAFAAIAJABIgCAIIgFgCQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAIIgIAAIAAAfg");
	this.shape_25.setTransform(119.1,236.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_26.setTransform(115.2,236.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_27.setTransform(111.7,236.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_28.setTransform(106.1,236.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_29.setTransform(102.9,236.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgEgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgCABIgBAHIAAAVIgKAAIAAg3IAKAAIAAAVQAGgGAFAAQAEAAADABQADACACACIACAFIABAGIAAAYg");
	this.shape_30.setTransform(99.4,236.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_31.setTransform(95.6,236.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_32.setTransform(89.6,237.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_33.setTransform(84.8,236.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_34.setTransform(81.3,236.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgEgBIgDABIgDAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_35.setTransform(77.8,236.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_36.setTransform(74.2,236.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_37.setTransform(71,236.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_38.setTransform(67.4,236.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_39.setTransform(63.7,236.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_40.setTransform(58.8,236.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAFADACAHIgLACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAACgCQADgBAAgFIALACQgBAIgGADQgEAEgIAAQgHAAgGgGg");
	this.shape_41.setTransform(54.3,236.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_42.setTransform(47.5,236.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_43.setTransform(42.9,236.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_44.setTransform(39.2,236.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAEADACAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAACgCQACgBAAgFIALACQgBAIgFADQgFAEgIAAQgHAAgFgGg");
	this.shape_45.setTransform(35.8,236.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_46.setTransform(31.3,236.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_47.setTransform(26.8,237.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_48.setTransform(21.9,236.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_49.setTransform(17.4,236.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_50.setTransform(13.7,236.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_51.setTransform(9.6,237.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_52.setTransform(264.4,228.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_53.setTransform(261,227.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_54.setTransform(257,227.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgDAAgBABQgBAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAGgFIAGgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_55.setTransform(251.2,227.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgDAAgBABQgBAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACABADIAHgFIAHgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_56.setTransform(244.1,227.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_57.setTransform(238.1,228);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_58.setTransform(233.4,227.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_59.setTransform(226.9,227.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgFAGQAEgBABgCIAAgDIgEAAIAAgLIAKAAIAAAIIgCAGQAAADgDACIgEAEg");
	this.shape_60.setTransform(221.3,230.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_61.setTransform(218.1,227.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_62.setTransform(214.8,227.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_63.setTransform(211.4,227.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_64.setTransform(206.7,227.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_65.setTransform(203.3,227.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_66.setTransform(201.1,227.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_67.setTransform(197.9,227.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEAUIgQgnIAMAAIAIATIAAAHIAAgEIACgDIAHgTIAMAAIgRAng");
	this.shape_68.setTransform(193.4,227.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_69.setTransform(189.1,227.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHAdIAAgfIgFAAIAAgJIAFAAIAAgDIACgIQABgCADgCQABgBAFgBIAJABIgCAIIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAfg");
	this.shape_70.setTransform(183.5,227.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_71.setTransform(180.9,227.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFAGQAEgBABgCIAAgDIgEAAIAAgLIAKAAIAAAIIgBAGQgBADgDACIgDAEg");
	this.shape_72.setTransform(176.4,230.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_73.setTransform(174.6,227.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgDADAAAFQAAAGADADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_74.setTransform(170.3,227.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFAGQAEgBABgCIAAgDIgEAAIAAgLIAJAAIAAAIIgBAGQAAADgDACIgEAEg");
	this.shape_75.setTransform(164.5,230.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_76.setTransform(162.7,227.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgDgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_77.setTransform(158.7,227.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_78.setTransform(155.3,227.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_79.setTransform(151.8,228);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAEADACAHIgKACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADACAAQADAAADgCQACgBAAgFIALACQgBAIgFADQgFAEgIAAQgIAAgEgGg");
	this.shape_80.setTransform(147.3,227.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_81.setTransform(143.7,227.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_82.setTransform(140.8,227.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAFADABAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAABgCQADgBAAgFIALACQgCAIgEADQgFAEgIAAQgHAAgFgGg");
	this.shape_83.setTransform(137.6,227.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_84.setTransform(130.6,228.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgDAEIAAAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_85.setTransform(125.8,227.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_86.setTransform(122.3,227.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_87.setTransform(119.9,227.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_88.setTransform(115.9,227.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgHAdIAAgfIgGAAIAAgJIAGAAIAAgDIABgIQACgCADgCQABgBAFgBIAJABIgCAIIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAfg");
	this.shape_89.setTransform(112.5,227.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgGAdIAAgfIgHAAIAAgJIAHAAIAAgDIABgIQABgCADgCQABgBAEgBIAJABIgBAIIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAfg");
	this.shape_90.setTransform(109.9,227.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgDADAAAFQAAAGADADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_91.setTransform(106,227.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFAGQAEgBABgCIAAgDIgEAAIAAgLIAJAAIAAAIIgBAGQAAADgDACIgEAEg");
	this.shape_92.setTransform(100.2,230.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_93.setTransform(96.8,227.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_94.setTransform(92.3,228);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgHIAJgHIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_95.setTransform(88.5,227.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAFgGAIAAQAIAAAEADQAFADACAHIgMACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADADAAQADAAABgCQACgBABgFIALACQgCAIgEADQgFAEgIAAQgIAAgFgGg");
	this.shape_96.setTransform(85.1,227.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_97.setTransform(80.6,227.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_98.setTransform(76.1,228.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_99.setTransform(71.3,227.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_100.setTransform(66.8,227.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_101.setTransform(63.1,227.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_102.setTransform(58.9,228.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_103.setTransform(52,227.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_104.setTransform(46.3,227.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgDADAAAFQAAAGADADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_105.setTransform(42.1,227.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgHAdIAAgfIgFAAIAAgJIAFAAIAAgDIABgIQACgCADgCQABgBAFgBIAJABIgCAIIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAHAAIAAAJIgHAAIAAAfg");
	this.shape_106.setTransform(38.5,227.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_107.setTransform(32.5,228.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgHIAJgHIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_108.setTransform(29,227.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_109.setTransform(26.6,227.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_110.setTransform(24.4,227.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIAEgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_111.setTransform(21.1,227.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_112.setTransform(16.4,227.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_113.setTransform(13,227.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAKIgaAAIAAANIAXAAIAAAIIgXAAIAAAYg");
	this.shape_114.setTransform(9.6,227.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_115.setTransform(283.7,218.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAHAAAFADQAEADACAHIgKACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADADAAQACAAADgCQABgBABgFIALACQgCAIgFADQgEAEgIAAQgHAAgGgGg");
	this.shape_116.setTransform(280.3,219);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_117.setTransform(275.8,219);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_118.setTransform(272.2,218.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_119.setTransform(268.5,218.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQACADADAAQAEAAADgDQADgDAAgGQAAgFgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_120.setTransform(263.7,219);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgQAVQgHgHAAgOQAAgMAHgIQAHgIAKAAQALAAAGAGQAEAEACAGIgLADQgBgEgDgDQgEgCgEgBQgFABgEAEQgEAFAAAJQAAAKAEAEQAEAFAFAAQAEAAADgDQAEgDABgGIALAEQgCAJgGAEQgGAFgJAAQgKAAgHgIg");
	this.shape_121.setTransform(258.3,218.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_122.setTransform(252.2,220.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_123.setTransform(248.8,219);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_124.setTransform(244.5,219);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_125.setTransform(240,219);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_126.setTransform(235.5,218.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIAEgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_127.setTransform(230.8,219);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_128.setTransform(226.3,219.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAIAUIgIgNIgHANIgNAAIAPgUIgPgTIAOAAIAGALIAHgLIANAAIgOATIAPAUg");
	this.shape_129.setTransform(221.6,219);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_130.setTransform(217.2,219);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_131.setTransform(210.3,218.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_132.setTransform(205.5,218.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQAAABgEAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_133.setTransform(200.9,219);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgFAGQAEAAABgCIAAgEIgEAAIAAgKIAKAAIAAAIIgBAFQgBACgDADIgDAEg");
	this.shape_134.setTransform(195.3,221.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_135.setTransform(192,219);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_136.setTransform(187.7,219);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_137.setTransform(183,219.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_138.setTransform(179.4,218.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_139.setTransform(175.4,219);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgCABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_140.setTransform(170.7,218.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAEADACAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADACAAQADAAADgCQACgBAAgFIALACQgBAIgFADQgFAEgIAAQgIAAgEgGg");
	this.shape_141.setTransform(166.2,219);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgEAGQADAAABgCIAAgEIgDAAIAAgKIAIAAIAAAIIAAAFQgBACgCADIgEAEg");
	this.shape_142.setTransform(160.5,221.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_143.setTransform(157.2,219);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAHAcIgIgSIgGAFIAAANIgLAAIAAg3IALAAIAAAcIALgMIANAAIgNANIAOAag");
	this.shape_144.setTransform(153.1,218.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_145.setTransform(148.4,219);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_146.setTransform(145.2,218.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_147.setTransform(142.8,218.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgFAGQAEAAABgCIAAgEIgEAAIAAgKIAKAAIAAAIIgCAFQAAACgDADIgEAEg");
	this.shape_148.setTransform(137.6,221.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_149.setTransform(134.3,219);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgaAAQABAFACACQADADACAAIADgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_150.setTransform(130,219);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgEAUIgQgnIAMAAIAIATIAAAHIAAgEIACgDIAHgTIAMAAIgQAng");
	this.shape_151.setTransform(125.6,219);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_152.setTransform(122.3,218.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_153.setTransform(119.8,218.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAFADABAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAABgCQADgBAAgFIALACQgCAIgEADQgFAEgIAAQgHAAgFgGg");
	this.shape_154.setTransform(116.4,219);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_155.setTransform(111.9,219);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgFAkIgDgBIABgJIACAAIABAAIADAAIABgCIAAgGIAAgmIAKAAIAAAmIgBAMQgCADgDACQgDACgCAAgAAAgZIAAgLIAKAAIAAALg");
	this.shape_156.setTransform(108.2,219);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_157.setTransform(105.2,218.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_158.setTransform(100.3,219);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_159.setTransform(94.3,218.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_160.setTransform(90.6,218.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIAEgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_161.setTransform(85.9,219);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgDAAgBABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACABADIAHgFIAGgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_162.setTransform(80.2,218.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_163.setTransform(75.3,218.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_164.setTransform(71.7,219);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_165.setTransform(67.4,219);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgDAUIgRgnIALAAIAIATIABAHIABgEIABgDIAIgTIALAAIgQAng");
	this.shape_166.setTransform(63,219);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_167.setTransform(58.4,218.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_168.setTransform(54.8,218.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_169.setTransform(49.2,219);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgPIgGAAIAAgKIAGAAIAAgIIAJgGIAAAOIAHAAIAAAKIgHAAIAAAOIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_170.setTransform(45.8,218.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_171.setTransform(43.4,218.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_172.setTransform(38.8,218.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_173.setTransform(34.8,219);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_174.setTransform(30.1,218.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_175.setTransform(26.6,218.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_176.setTransform(23.2,219);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgDAEIAAAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_177.setTransform(18.7,218.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_178.setTransform(13.9,219);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAFADABAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAABgCQADgBAAgFIALACQgCAIgEADQgFAEgIAAQgHAAgFgGg");
	this.shape_179.setTransform(9.3,219);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_180.setTransform(281.3,209.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_181.setTransform(277.9,209.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_182.setTransform(274.3,210.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQACADADAAQAEAAADgDQADgDAAgGQAAgFgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_183.setTransform(269.5,210);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgDABAAABIgBAHIAAAVIgMAAIAAg3IAMAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_184.setTransform(264.7,209.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_185.setTransform(259.9,210);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_186.setTransform(253.2,210.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQACADADAAQAEAAADgDQADgDAAgGQAAgFgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_187.setTransform(248.4,210);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_188.setTransform(243.7,210.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgFAHQAEgCABgCIAAgDIgDAAIAAgLIAJAAIAAAIIgBAGQgBADgDACIgDADg");
	this.shape_189.setTransform(238.2,212.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_190.setTransform(234.6,209.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgEgBIgDABIgDAEIAAAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_191.setTransform(229.9,210);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_192.setTransform(225,210.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgHAdIAAgfIgGAAIAAgJIAGAAIAAgDIABgIQACgDADgBQABgBAFgBIAJABIgCAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAfg");
	this.shape_193.setTransform(221.4,209.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_194.setTransform(215.2,209.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_195.setTransform(210.7,210);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_196.setTransform(206,209.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQgBgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_197.setTransform(201.5,210);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_198.setTransform(198,210);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_199.setTransform(194.8,209.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgJAFIAAgJIATAAIAAAJg");
	this.shape_200.setTransform(192.3,210);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_201.setTransform(188.6,210);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_202.setTransform(183.9,210.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_203.setTransform(179.2,210);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_204.setTransform(174.6,210);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgCABgCABIAAAHIAAAVIgLAAIAAg3IALAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_205.setTransform(169.9,209.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAEADACAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAACgCQACgBAAgFIALACQgBAIgFADQgFAEgIAAQgHAAgFgGg");
	this.shape_206.setTransform(165.4,210);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAIAUIgIgNIgHANIgNAAIAPgUIgPgTIAOAAIAGALIAHgLIANAAIgOATIAPAUg");
	this.shape_207.setTransform(160.9,210);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_208.setTransform(156.5,210);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_209.setTransform(150.8,210);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_210.setTransform(146.6,210);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_211.setTransform(139.4,209.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_212.setTransform(134.7,210);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_213.setTransform(129.8,210.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgHAdIAAgfIgFAAIAAgJIAFAAIAAgDIABgIQACgDADgBQABgBAFgBIAJABIgCAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAHAAIAAAJIgHAAIAAAfg");
	this.shape_214.setTransform(126.2,209.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_215.setTransform(121.4,209.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_216.setTransform(118.2,210);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_217.setTransform(113.5,210.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_218.setTransform(109.7,209.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_219.setTransform(106,210.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAABAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_220.setTransform(100,210);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_221.setTransform(92,210.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_222.setTransform(87.5,210);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_223.setTransform(82.9,210);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgEgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_224.setTransform(76,210);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_225.setTransform(72.5,209.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_226.setTransform(66.7,210.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_227.setTransform(61.9,210);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_228.setTransform(58.4,209.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_229.setTransform(55.9,209.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_230.setTransform(52.3,210);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_231.setTransform(48,210);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgDAUIgRgnIALAAIAIATIABAHIABgEIABgDIAIgTIALAAIgRAng");
	this.shape_232.setTransform(43.6,210);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_233.setTransform(39,210);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_234.setTransform(35.5,209.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_235.setTransform(30,210);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_236.setTransform(26.5,210);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgDADAAAFQAAAGADADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_237.setTransform(22.3,210);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgHAdIAAgfIgFAAIAAgJIAFAAIAAgDIABgIQACgDADgBQABgBAFgBIAJABIgCAIIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAHAAIAAAJIgHAAIAAAfg");
	this.shape_238.setTransform(18.7,209.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_239.setTransform(15,210);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgXAcIAAg3IAXAAIAIABIAHACIAEAFQABADAAADQAAAEgCAEQgCADgDACQAEAAADADQAEAEAAAFQAAAEgCADIgGAGQgCACgFABIgMAAgAgLATIALAAIAGgBQACAAACgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgIgBIgKAAgAgLgEIAIAAIAGAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgJAAIgGAAg");
	this.shape_240.setTransform(10,209.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_241.setTransform(99,199);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_242.setTransform(95.4,196.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_243.setTransform(90.7,197.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_244.setTransform(85.8,197.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgHAcIAAgeIgFAAIAAgJIAFAAIAAgDIACgIQABgCADgCQABgCAFABIAJABIgCAIIgFgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAeg");
	this.shape_245.setTransform(82.2,196.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_246.setTransform(76.3,197.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgCABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_247.setTransform(71.7,196.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_248.setTransform(67.9,196.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_249.setTransform(60.9,197.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAFgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQADADADAAQAEAAADgDQADgDgBgGQABgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_250.setTransform(54.9,197.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_251.setTransform(51.2,197.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgGAcIAAgeIgHAAIAAgJIAHAAIAAgDIABgIQABgCADgCQABgCAEABIAJABIgBAIIgFgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIAAAEIAAADIAIAAIAAAJIgIAAIAAAeg");
	this.shape_252.setTransform(48.2,196.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_253.setTransform(42,196.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_254.setTransform(37.5,197.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgDAAgDABQAAAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACACADIAFgFIAHgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_255.setTransform(31.7,197.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_256.setTransform(26,197.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_257.setTransform(21.6,197.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_258.setTransform(16.9,196.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQACADADAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_259.setTransform(12.3,197.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_260.setTransform(8.9,197.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_261.setTransform(265.4,189.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_262.setTransform(262.1,187.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_263.setTransform(259.9,187.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIgBgBIgFAEQgBABgFAAQgGAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_264.setTransform(256.7,188.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_265.setTransform(252,188.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_266.setTransform(247.1,187.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_267.setTransform(243.6,187.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgEAUIgQgnIAMAAIAIATIAAAHIAAgEIACgDIAHgTIAMAAIgQAng");
	this.shape_268.setTransform(240.3,188.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_269.setTransform(237,187.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_270.setTransform(233.4,187.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_271.setTransform(228.7,188.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_272.setTransform(225.1,187.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_273.setTransform(220.5,187.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgEADAAAFQAAAGAEADQADADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_274.setTransform(216.8,188.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAFgHAGAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_275.setTransform(211.9,188.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_276.setTransform(205.1,188.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_277.setTransform(201.6,188.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_278.setTransform(197.6,188.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_279.setTransform(190.7,187.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_280.setTransform(185.9,188.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_281.setTransform(181.3,188.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgEAHQADgCABgCIAAgDIgDAAIAAgKIAJAAIAAAHIgBAGQgBACgDADIgDADg");
	this.shape_282.setTransform(175.7,190.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgFAcIgUg3IAMAAIANAoIAOgoIAMAAIgUA3g");
	this.shape_283.setTransform(172.7,187.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AAQAcIgFgNIgVAAIgFANIgMAAIAWg3IAKAAIAXA3gAAHAGIgHgUIgHAUIAOAAg");
	this.shape_284.setTransform(167.8,187.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AALAcIgWgjIAAAjIgKAAIAAg3IALAAIAVAkIAAgkIALAAIAAA3g");
	this.shape_285.setTransform(162,187.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_286.setTransform(155.7,188.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_287.setTransform(152.8,187.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_288.setTransform(149.5,188.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgDABAAABIgBAHIAAAVIgMAAIAAg3IAMAAIAAAVQAFgGAFAAQAEAAADABQADACACACIACAFIABAGIAAAYg");
	this.shape_289.setTransform(144.9,187.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_290.setTransform(141.1,187.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_291.setTransform(135.2,188.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_292.setTransform(130.6,188.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgEgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgCABIgBAHIAAAVIgKAAIAAg3IAKAAIAAAVQAGgGAFAAQAEAAADABQADACACACIACAFIABAGIAAAYg");
	this.shape_293.setTransform(125.9,187.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_294.setTransform(122.1,187.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_295.setTransform(117.4,188.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_296.setTransform(113.3,188.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAHAUIgHgYIgGAYIgKAAIgNgnIAKAAIAIAZIAHgZIAJAAIAHAZIAIgZIAKAAIgNAng");
	this.shape_297.setTransform(108,188.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_298.setTransform(102.5,188.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_299.setTransform(99,187.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_300.setTransform(94.4,188.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAFgCQAGgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_301.setTransform(90.2,188.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_302.setTransform(84.3,188.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_303.setTransform(80.2,188.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgDABgBABIgBAHIAAAVIgKAAIAAg3IAKAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_304.setTransform(75.6,187.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_305.setTransform(70.7,189.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_306.setTransform(67.2,187.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgCABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_307.setTransform(63.7,187.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQACADADAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_308.setTransform(56.9,188.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_309.setTransform(52.4,187.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_310.setTransform(45.4,189.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_311.setTransform(41.1,188.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgDAAgBABQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACABADIAHgFIAHgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_312.setTransform(35.3,188.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgDABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_313.setTransform(27.1,187.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAFgGAIAAQAIAAAEADQAFADACAHIgMACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADADAAQACAAACgCQACgBABgFIALACQgCAIgEADQgFAEgIAAQgIAAgFgGg");
	this.shape_314.setTransform(22.6,188.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_315.setTransform(19.2,187.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgEgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgCABIgBAHIAAAVIgKAAIAAg3IAKAAIAAAVQAGgGAFAAQAEAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_316.setTransform(15.7,187.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAHAUIgHgYIgGAYIgKAAIgNgnIAKAAIAIAZIAHgZIAJAAIAHAZIAIgZIAKAAIgNAng");
	this.shape_317.setTransform(10.1,188.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgEAGQADgBABgBIAAgEIgDAAIAAgLIAIAAIAAAIIgBAGQAAADgCACIgFAEg");
	this.shape_318.setTransform(267.7,181.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_319.setTransform(264.5,179.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAIAAAEADQAFADACAHIgMACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADADAAQACAAACgCQACgBABgFIALACQgCAIgFADQgEAEgIAAQgIAAgEgGg");
	this.shape_320.setTransform(260.2,179.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_321.setTransform(256.8,178.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_322.setTransform(254.4,179.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_323.setTransform(250.3,180.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_324.setTransform(244.2,178.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgaAAQABAFACACQADADACAAIADgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_325.setTransform(240.7,179.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAHAcIgJgSIgEAFIAAANIgLAAIAAg3IALAAIAAAcIAKgMIAOAAIgPANIAQAag");
	this.shape_326.setTransform(236.5,178.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_327.setTransform(232.8,179.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQAAABgEAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_328.setTransform(228.8,179.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgDgBQgEAAgCABQAAAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACABADIAHgFIAHgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_329.setTransform(223,179.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_330.setTransform(215.9,178.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQABgGAFgDQAEgDAHAAQAHAAADACQADABACADQABADAAAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgFAEQgCABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_331.setTransform(212.5,179.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_332.setTransform(205.5,178.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_333.setTransform(202.1,178.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAFgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQADgDgBgGQABgFgDgDQgDgDgEAAQgCAAgEADg");
	this.shape_334.setTransform(198.6,179.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_335.setTransform(193.8,179.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_336.setTransform(187,178.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_337.setTransform(182.3,179.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQAEABABADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgBABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_338.setTransform(177.7,179.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_339.setTransform(171.9,178.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgCABgBABIgCAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_340.setTransform(168.2,178.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_341.setTransform(163.2,180.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_342.setTransform(158.4,179.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQACgFAFgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgFgIQgDADAAAFQAAAGADADQACADADAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgDAAgCADg");
	this.shape_343.setTransform(153.6,179.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_344.setTransform(148.9,178.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQACADADAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_345.setTransform(141.9,179.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_346.setTransform(138.5,179.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQAEABABADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgBABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_347.setTransform(134.5,179.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_348.setTransform(127.7,179.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_349.setTransform(123.4,179.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_350.setTransform(120,179.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEABgCQACgDAEAAIAIgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQgBABgDAAQgHAAgDgDgAAAACIgFACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_351.setTransform(116,179.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgCABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_352.setTransform(111.3,178.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_353.setTransform(106.6,179.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAKIgZAAIAAANIAVAAIAAAIIgVAAIAAAYg");
	this.shape_354.setTransform(100,178.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgQAAIAAAtg");
	this.shape_355.setTransform(95,178.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgUAcIAAg3IAoAAIAAAKIgdAAIAAAMIAbAAIAAAIIgbAAIAAAQIAeAAIAAAJg");
	this.shape_356.setTransform(90,178.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgEAGQADgBABgBIAAgEIgDAAIAAgLIAJAAIAAAIIgBAGQgBADgDACIgDAEg");
	this.shape_357.setTransform(83.9,181.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_358.setTransform(80.6,179.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_359.setTransform(76,178.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_360.setTransform(71.2,179.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_361.setTransform(66.3,179.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgHAcIAAgeIgFAAIAAgJIAFAAIAAgDIABgIQACgCADgCQABgCAFABIAJAAIgCAJIgFgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAHAAIAAAJIgHAAIAAAeg");
	this.shape_362.setTransform(62.8,178.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_363.setTransform(58,178.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_364.setTransform(54.7,179.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_365.setTransform(50,179.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABACIACAAIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_366.setTransform(46.3,178.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_367.setTransform(42.5,179.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAFgFIAIgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_368.setTransform(36.6,179.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_369.setTransform(28.6,179.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AAHAcIgJgSIgEAFIAAANIgLAAIAAg3IALAAIAAAcIAKgMIAOAAIgPANIAQAag");
	this.shape_370.setTransform(24.5,178.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_371.setTransform(20.9,178.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_372.setTransform(18.7,178.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgDAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_373.setTransform(15.2,179.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgKAbQgFgCgCgDQgCgDgBgDQgCgFABgKIAAgdIALAAIAAAeIAAAJQABAEAEACQACACADAAQAFAAACgCQADgCABgDIAAgKIAAgeIALAAIAAAdIAAAOQgCAEgCADQgCADgEACQgFACgGAAQgHAAgEgCg");
	this.shape_374.setTransform(9.9,178.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_375.setTransform(277.9,172.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_376.setTransform(274.5,170.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQACADADAAIADgBQACgCACgDIAKACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_377.setTransform(270.2,170.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_378.setTransform(265.7,170.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_379.setTransform(261.2,170.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_380.setTransform(256.5,170.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgTAdIAAg4IAKAAIAAAGQACgDAEgCQADgCACAAQAIAAAFAGQAFAGAAAKQAAAIgFAGQgGAGgHAAQgCAAgCgCIgGgEIAAAVgAgFgQQgDADAAAGQAAAHADACQADADACAAQADAAADgDQACgCAAgGQAAgHgCgDQgDgDgDAAQgDAAgCADg");
	this.shape_381.setTransform(252,171.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AAIAUIgIgNIgHANIgNAAIAPgUIgPgTIAOAAIAGALIAHgLIANAAIgOATIAPAUg");
	this.shape_382.setTransform(247.3,170.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_383.setTransform(242.9,170.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_384.setTransform(237.2,170.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_385.setTransform(233.2,170.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AAHAcIAAgWIAAgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgEgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgDABAAABIgBAHIAAAVIgMAAIAAg3IAMAAIAAAVQAFgGAGAAQADAAADABQADACACACIACAFIABAGIAAAYg");
	this.shape_386.setTransform(228.6,169.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_387.setTransform(224.8,170);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAFgDAEAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQADgDgBgGQABgFgDgDQgDgDgEAAQgCAAgEADg");
	this.shape_388.setTransform(221.1,170.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_389.setTransform(213.9,169.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgEgBIgDABIgDAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_390.setTransform(209.2,170.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgDg");
	this.shape_391.setTransform(204.6,170.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_392.setTransform(197.8,170.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_393.setTransform(193.5,170.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCAAgDIALACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_394.setTransform(189.1,170.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgHAdIAAggIgGAAIAAgIIAGAAIAAgDIABgIQACgDADgBQABgCAEAAIAJACIgBAHIgFgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAEIAAADIAIAAIAAAIIgIAAIAAAgg");
	this.shape_395.setTransform(185.8,169.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_396.setTransform(180.7,170);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_397.setTransform(177,170.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_398.setTransform(172.4,170.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBQgEAAgCABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAFgFIAIgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_399.setTransform(166.6,170.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_400.setTransform(160.9,170.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_401.setTransform(156.2,171.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_402.setTransform(151.7,170.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgDAEIgCAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABABACIADAFIAAAHIAAAYg");
	this.shape_403.setTransform(147,170.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgEABIgDAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQADABACADQACADgBAHIAAALIABAIIACAFIgLAAIgBgDIgBgBIgGAEQAAABgEAAQgHAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAADgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_404.setTransform(142.4,170.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgDgBQgEAAgCABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACABADIAHgFIAHgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_405.setTransform(136.6,170.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgJATQgGgDgCgFQgDgFAAgGQAAgFADgFQADgFAEgCQAFgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgDADAAAFQAAAGADADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_406.setTransform(128.5,170.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_407.setTransform(124.7,170);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_408.setTransform(119.8,170);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAFADABAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAABgCQADgBAAgFIALACQgCAIgEADQgFAEgIAAQgHAAgFgGg");
	this.shape_409.setTransform(116.4,170.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_410.setTransform(111.9,170.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgFAkIgDgBIABgJIACAAIABAAIADAAIABgCIAAgGIAAgmIAKAAIAAAmIgBAMQgCADgDACQgDACgCAAgAAAgZIAAgLIAKAAIAAALg");
	this.shape_411.setTransform(108.2,170.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_412.setTransform(105.2,169.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_413.setTransform(100.2,170.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_414.setTransform(95.5,170.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgaAAQABAFACACQADADABAAIAEgBQADgCABgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_415.setTransform(89,170.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_416.setTransform(85.6,170.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEABgCQACgDAEAAIAIgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQADABACADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgFIAAgDg");
	this.shape_417.setTransform(81.6,170.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_418.setTransform(74.8,170.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAKIgaAAIAAANIAWAAIAAAIIgWAAIAAAYg");
	this.shape_419.setTransform(70.4,169.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgQAAIAAAtg");
	this.shape_420.setTransform(65.4,169.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgUAcIAAg3IAoAAIAAAKIgdAAIAAAMIAbAAIAAAIIgbAAIAAAQIAeAAIAAAJg");
	this.shape_421.setTransform(60.5,169.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_422.setTransform(54.4,172.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_423.setTransform(51,170.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_424.setTransform(47.6,170);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_425.setTransform(43.9,170.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_426.setTransform(39.2,170.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgCgCgDAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIgBgIQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgDAAgBABQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAFgHAIAAQAEAAACACQACACABADIAHgFIAHgCQAEAAADACQADACACAEIABAIIAAAZg");
	this.shape_427.setTransform(33.5,170.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AAAAbIgEgDIgBgEIAAgHIAAgQIgGAAIAAgJIAGAAIAAgIIAJgHIAAAPIAHAAIAAAJIgHAAIAAAOIAAAGIABABIACABIAEgBIABAIQgEACgFAAIgDgBg");
	this.shape_428.setTransform(28.6,170);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_429.setTransform(25,170.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_430.setTransform(20.7,170.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgEAUIgQgnIALAAIAIATIABAHIABgEIABgDIAIgTIALAAIgRAng");
	this.shape_431.setTransform(16.3,170.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgMAAIAAgoIALAAIAAAGQAFgHAGAAQAEAAADACQADABABACIADAFIABAHIAAAYg");
	this.shape_432.setTransform(11.7,170.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_433.setTransform(8.1,169.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgNAZQgFgDAAgGIAAgBIANACIABADIAEABQAEAAACgCIACgCIABgFIAAgGQgFAGgGAAQgIAAgFgHQgEgFAAgHQAAgKAFgGQAFgFAIAAQAFAAAFAHIAAgGIALAAIAAAjQAAAHgCAEQgBAEgCACQgCACgEABQgEABgFAAQgJAAgEgEgAgFgRQgDADAAAHQAAAGADABQACADADAAQADAAADgDQADgBAAgGQAAgHgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_434.setTransform(271.6,162.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_435.setTransform(266.9,161.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_436.setTransform(263.3,160.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgQAcIgBgJIAFABQADAAACgCIADgGIgQgoIAMAAIAIAcIAKgcIALAAIgPAmIgCAHIgDAGIgBADIgEACIgGABIgGgBg");
	this.shape_437.setTransform(260,162.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_438.setTransform(256.7,160.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_439.setTransform(254.4,161.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQACADACAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_440.setTransform(250.3,161.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_441.setTransform(245.6,160.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AAHAVIAAgVIAAgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgLAAIAAgoIALAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_442.setTransform(240.9,161.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_443.setTransform(236,161.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_444.setTransform(230.1,161.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_445.setTransform(227.2,160.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAALIgaAAQAAAFADACQACADACAAIAFgBQABgCABgDIALACQgCAGgEADQgFADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgDACAAAFIAPAAIAAAAg");
	this.shape_446.setTransform(223.9,161.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIgFgBQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAABQgDABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAGgGAGAAQADAAADABQADACACACIACAFIAAAGIAAAYg");
	this.shape_447.setTransform(219.3,160.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_448.setTransform(215.5,161);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgHAcIAAgeIgFAAIAAgJIAFAAIAAgDIABgIQACgCADgCQABgBAFgBIAJABIgCAIIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAHAAIAAAJIgHAAIAAAeg");
	this.shape_449.setTransform(210.8,160.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_450.setTransform(206.9,161.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_451.setTransform(200,161.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AAHAcIgJgSIgEAFIAAANIgLAAIAAg3IALAAIAAAcIAKgMIAOAAIgPANIAQAag");
	this.shape_452.setTransform(195.9,160.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_453.setTransform(191.2,161.7);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_454.setTransform(188,160.9);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_455.setTransform(185.6,161.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQgBAFADACQADADACAAIADgBQACgCACgDIAKACQgCAGgFADQgEADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgDACABAFIAOAAIAAAAg");
	this.shape_456.setTransform(179.4,161.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AAIAcIAAgWIgBgGQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBIgDgBQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgCABgBABIgBAHIAAAVIgLAAIAAg3IALAAIAAAVQAFgGAFAAQAEAAADABQAEACABACIACAFIABAGIAAAYg");
	this.shape_457.setTransform(174.8,160.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_458.setTransform(171,161);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgOAXQgFgGAAgKQAAgJAFgFQAFgGAIAAQAEAAAGAGIAAgVIALAAIAAA4IgLAAIAAgGQgCADgEACQgDACgCAAQgHAAgFgGgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQADgDAAgHQAAgHgDgBQgDgDgDAAQgCAAgDADg");
	this.shape_459.setTransform(165,160.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgCgDIgFgBIgCABIgEAEIgBAIIAAATIgKAAIAAgoIAKAAIAAAGQAFgHAHAAQADAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_460.setTransform(160.2,161.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQAEABABADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_461.setTransform(155.6,161.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AAIAVIAAgVIgBgHIgDgDIgDgBIgEABIgCAEIgBAIIAAATIgLAAIAAgoIAKAAIAAAGQAGgHAFAAQAEAAADACQADABACACIACAFIABAHIAAAYg");
	this.shape_462.setTransform(148.8,161.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDAAgGQAAgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_463.setTransform(143.9,161.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgEAcIAAgnIAJAAIAAAngAgEgRIAAgKIAJAAIAAAKg");
	this.shape_464.setTransform(140.4,160.9);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_465.setTransform(137.9,161);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAGAAAEACQAEABABADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgBABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_466.setTransform(134.5,161.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_467.setTransform(129.8,161.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_468.setTransform(126,161);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgMAPQgGgFAAgKQAAgJAGgFQAEgGAIAAQAHAAAFADQAEADACAHIgLACQAAgDgCgCQgCgCgDAAQgCAAgCADQgDADAAAGQAAAGADADQACADACAAQAEAAACgCQACgBAAgFIALACQgBAIgFADQgFAEgIAAQgHAAgFgGg");
	this.shape_469.setTransform(122.6,161.7);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_470.setTransform(117.9,161.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_471.setTransform(114.4,160.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgGAcIAAgeIgHAAIAAgJIAHAAIAAgDIABgIQABgCADgCQABgBAEgBIAJABIgBAIIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBAEIAAADIAIAAIAAAJIgIAAIAAAeg");
	this.shape_472.setTransform(112.1,160.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_473.setTransform(107.1,161);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAGgGQAFgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_474.setTransform(103.6,161.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AAHAcIgJgSIgEAFIAAANIgMAAIAAg3IAMAAIAAAcIAKgMIANAAIgNANIAPAag");
	this.shape_475.setTransform(99.4,160.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_476.setTransform(95.7,161.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgPASQgDgEAAgFQAAgEACgCQABgDADAAIAJgCIAJgDIAAgBQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgDAAIgFABIgCAEIgKgBQABgGAFgDQAEgDAHAAQAGAAAEACQAEABABADQABADABAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgHAEQAAABgFAAQgGAAgEgDgAAAACIgFACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgDg");
	this.shape_477.setTransform(91.7,161.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AATAVIAAgWQAAgGgBgCQgBgCgEAAIgEABIgDAEIgBAHIAAAUIgJAAIAAgVIAAgIQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgBQgCAAgCABQgBAAAAABQgBAAAAABQAAAAgBABQAAABAAAAIgBAHIAAAUIgLAAIAAgoIAKAAIAAAGQAGgHAHAAQAEAAACACQACACACADIAGgFIAGgCQAFAAADACQADACACAEIABAIIAAAZg");
	this.shape_478.setTransform(85.9,161.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgJATQgFgDgDgFQgDgFAAgGQAAgFADgFQADgFAFgCQAEgDAFAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgEAAgFgCgAgGgIQgCADAAAFQAAAGACADQAEADACAAQAEAAADgDQACgDABgGQgBgFgCgDQgDgDgEAAQgCAAgEADg");
	this.shape_479.setTransform(77.8,161.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_480.setTransform(74,161);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AAAAbIgEgCIgBgFIAAgIIAAgQIgGAAIAAgJIAGAAIAAgIIAJgGIAAAOIAHAAIAAAJIgHAAIAAAPIAAAGIABABIACABIAEgBIABAJQgEABgFAAIgDgBg");
	this.shape_481.setTransform(69.1,161);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgNAPQgFgFAAgKQAAgJAFgFQAGgGAHAAQAIAAAEADQAEADACAHIgKACQgBgDgCgCQgCgCgDAAQgCAAgDADQgCADAAAGQAAAGACADQADADACAAQAEAAACgCQABgBABgFIALACQgBAIgGADQgEAEgIAAQgHAAgGgGg");
	this.shape_482.setTransform(65.7,161.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAIAAAGAGQAFAGAAALIgaAAQABAFACACQADADABAAIAFgBQACgCABgDIAKACQgCAGgFADQgEADgHAAQgJAAgFgHgAAIgCQAAgFgCgCQgDgDgDAAQgCAAgCADQgCACgBAFIAPAAIAAAAg");
	this.shape_483.setTransform(61.2,161.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgEAkIgFgBIACgJIACAAIABAAIADAAIABgCIAAgGIAAgmIAJAAIAAAmIgBAMQgBADgCACQgDACgDAAgAAAgZIAAgLIAJAAIAAALg");
	this.shape_484.setTransform(57.5,161.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgDAbQgDgCgDgDIAAAGIgKAAIAAg4IALAAIAAAVQAFgGAFAAQAIAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgHAAQgCAAgDgCgAgFgBQgDABAAAGQAAAHACADQADAEADAAQADAAADgDQACgDAAgHQAAgHgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_485.setTransform(54.5,160.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgLATQgDgCgCgDQgBgEAAgFIAAgZIALAAIAAATIAAAJQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABIAEgBIADgEQABgCAAgHIAAgSIAKAAIAAAoIgKAAIAAgGQgCADgEACQgCACgDAAQgFAAgDgCg");
	this.shape_486.setTransform(49.5,161.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_487.setTransform(44.8,161.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgOAOQgEgGAAgIQAAgIAFgGQAGgGAHAAQAJAAAEAGQAGAGAAALIgZAAQAAAFACACQADADACAAIADgBQACgCABgDIALACQgCAGgEADQgFADgHAAQgIAAgGgHgAAIgCQAAgFgDgCQgCgDgDAAQgCAAgCADQgCACAAAFIAOAAIAAAAg");
	this.shape_488.setTransform(38.3,161.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgMAVIAAgoIAKAAIAAAGQACgEABgBIAFgCQADAAAEACIgDAKIgGgCIgEABIAAAFIgBAMIAAANg");
	this.shape_489.setTransform(34.9,161.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgOASQgEgEAAgFQAAgEACgCQABgDADAAIAJgCIAIgDIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgCAAIgFABIgCAEIgKgBQACgGAEgDQAEgDAHAAQAHAAADACQAEABABADQACADAAAHIAAALIAAAIIACAFIgLAAIgBgDIAAgBIgGAEQgCABgEAAQgGAAgDgDgAAAACIgFACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAgFIAAgDg");
	this.shape_490.setTransform(30.9,161.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgLASQgFgEgCgGIALgBQABADACACQACABACAAQAEAAACgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgEgCQgLgDgDgCQgFgBAAgGQAAgGAEgDQAEgEAIAAQAIAAAEADQAEACABAGIgKACIgCgEQgCgBgDAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIAIADQAJACADACQAEACAAAFQAAAGgFAEQgFAEgJAAQgGAAgFgDg");
	this.shape_491.setTransform(24.1,161.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgSAcIAAg3IAlAAIAAAKIgaAAIAAANIAXAAIAAAIIgXAAIAAAYg");
	this.shape_492.setTransform(19.7,160.9);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgQAAIAAAtg");
	this.shape_493.setTransform(14.7,160.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgUAcIAAg3IAoAAIAAAKIgdAAIAAAMIAbAAIAAAIIgbAAIAAAQIAeAAIAAAJg");
	this.shape_494.setTransform(9.8,160.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgDADIAAgGIAGAAIAAAGg");
	this.shape_495.setTransform(153.6,150.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AAIAcIgLgVIgGAFIAAAQIgGAAIAAg3IAGAAIAAAfIAPgPIAJAAIgPANIAQAag");
	this.shape_496.setTransform(150.7,148.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_497.setTransform(146.4,149.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_498.setTransform(143.6,148.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_499.setTransform(141.7,149.1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgOAcIgBgHIAEABIAEgBIACgCIADgFIAAgCIgPgoIAHAAIAJAYIABAIIACgIIAJgYIAHAAIgQAoIgCAKIgEAFQgCACgDAAIgFgBg");
	this.shape_500.setTransform(135.9,150);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AAAAbIgDgEIAAgIIAAgWIgGAAIAAgFIAGAAIAAgLIAFgEIAAAPIAHAAIAAAFIgHAAIAAAWIAAAEIABACIACAAIAEAAIABAGIgGABIgEgBg");
	this.shape_501.setTransform(132.8,148.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_502.setTransform(130.8,148.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgIAaQgEgDgCgFQgCgFgBgGQABgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABABADIAAgVIAHAAIAAA4IgGAAIAAgFQgEAGgHAAQgDAAgFgDgAgGgDQgDADAAAHQAAAIADAEQAEAEACAAQAFAAADgEQAEgEAAgHQAAgIgEgDQgEgEgEAAQgDAAgDAEg");
	this.shape_503.setTransform(127.6,148.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_504.setTransform(124.7,148.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgIATIgFgDIgCgFIAAgHIAAgYIAGAAIAAAVIABAIQAAACADACQACACADAAQABAAADgCQADgCABgCIABgJIAAgUIAHAAIAAAoIgGAAIAAgGQgFAHgGAAQgEAAgDgCg");
	this.shape_505.setTransform(121.6,149.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AAKAdIAAgVQgCADgDABIgFACQgGAAgGgGQgEgGAAgIQAAgHACgFQACgFAEgCQAEgDAEAAQAHAAAEAHIAAgGIAHAAIAAA4gAgGgSQgEAEAAAIQAAAGAEAEQADAEADAAQAEAAADgEQAEgEAAgFQAAgJgEgEQgDgEgEAAQgDAAgDAEg");
	this.shape_506.setTransform(117.1,149.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_507.setTransform(114.1,148.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_508.setTransform(112.3,148.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgHAaQgFgDgCgFQgDgFABgGQgBgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABABADIAAgVIAIAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgDgDgAgGgDQgDADAAAHQAAAIADAEQAEAEADAAQAEAAADgEQADgEAAgHQAAgIgDgDQgDgEgFAAQgCAAgEAEg");
	this.shape_509.setTransform(106.9,148.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_510.setTransform(102.7,149.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AgOASQgDgDAAgGQAAgDABgCQABgDACgBIAGgBIAFgBIAMgCIAAgCQAAgEgCgCQgEgCgEAAQgDAAgDABQgCACgCAFIgGgBIACgIQADgCAEgCQAEgBAEAAQAEAAAEABQADABACACIACAFIABAGIAAAIIAAAMIACAFIgIAAQgBgCAAgDIgIAFIgGABQgGAAgEgDgAAAACIgGABIgDADIgBADQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQACACAEAAQADAAACgCQADgCACgDQABgCABgFIAAgCIgKACg");
	this.shape_511.setTransform(98.3,149.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_512.setTransform(92.7,151.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AAIAcIgMgVIgEAFIAAAQIgIAAIAAg3IAIAAIAAAfIAOgPIAJAAIgPANIARAag");
	this.shape_513.setTransform(89.9,148.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_514.setTransform(85.6,149.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_515.setTransform(82.8,148.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_516.setTransform(80.9,149.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_517.setTransform(76.2,148.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_518.setTransform(74.4,148.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgOASQgEgDABgGQAAgDABgCQABgDACgBIAGgBIAFgBIAMgCIAAgCQAAgEgCgCQgEgCgEAAQgDAAgDABQgCACgBAFIgHgBIACgIQADgCAEgCQAEgBAEAAQAEAAAEABQAEABABACIACAFIABAGIAAAIIAAAMIACAFIgIAAQgBgCAAgDIgIAFIgGABQgGAAgEgDgAAAACIgGABIgDADIgBADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQACACAEAAQADAAACgCQADgCACgDQABgCABgFIAAgCIgKACg");
	this.shape_519.setTransform(71.4,149.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgLAQQgGgGAAgKQAAgFADgFQACgFAEgDQAFgCADAAQAHAAAEADQAFAEABAGIgHABQgBgEgCgCQgDgCgDAAQgEAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAEAAADgCQADgDABgFIAHABQgCAHgEAEQgFAEgHAAQgGAAgFgFg");
	this.shape_520.setTransform(67.3,149.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_521.setTransform(61.8,151.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AAIAcIgMgVIgFAFIAAAQIgGAAIAAg3IAGAAIAAAfIAPgPIAJAAIgPANIAQAag");
	this.shape_522.setTransform(59,148.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_523.setTransform(54.7,149.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_524.setTransform(51.9,148.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_525.setTransform(50,149.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AAAAbIgCgEIgBgIIAAgWIgGAAIAAgFIAGAAIAAgLIAEgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_526.setTransform(45.1,148.4);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_527.setTransform(43.1,148.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgIATIgFgDIgCgFIAAgHIAAgYIAGAAIAAAVIABAIQABACACACQACACADAAQABAAADgCQADgCABgCIABgJIAAgUIAHAAIAAAoIgGAAIAAgGQgFAHgGAAQgEAAgDgCg");
	this.shape_528.setTransform(40,149.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgOASQgEgDAAgGQAAgDACgCQABgDADgBIAFgBIAFgBIAMgCIAAgCQAAgEgDgCQgDgCgEAAQgEAAgCABQgDACgBAFIgGgBIADgIQACgCAEgCQAEgBAEAAQAFAAADABQADABACACIACAFIAAAGIAAAIIABAMIACAFIgHAAQgCgCAAgDIgHAFIgHABQgGAAgEgDgAAAACIgGABIgDADIgBADQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQACACAEAAQADAAACgCQADgCACgDQACgCAAgFIAAgCIgKACg");
	this.shape_529.setTransform(35.6,149.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgEAcIAAgiIgHAAIAAgFIAHAAIAAgEIAAgHQABgDADgBQABgBAEAAIAHAAIgBAGIgEgBQgBAAgBABQgBAAAAAAQgBAAAAAAQAAABgBAAQgBABAAAEIAAAEIAIAAIAAAFIgIAAIAAAig");
	this.shape_530.setTransform(32.5,148.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgMAQQgFgGgBgKQABgJAFgFQAFgGAHAAQAIAAAGAFQAEAGAAAJIAAABIgcAAQAAAHADAEQAEADADAAQAEAAADgCQADgCABgEIAHABQgCAGgEAEQgFADgHAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_531.setTransform(29,149.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgHAaQgEgDgDgFQgCgFAAgGQAAgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAHAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgDgDgAgGgDQgDADAAAHQAAAIAEAEQACAEAEAAQAEAAADgEQADgEAAgHQAAgIgDgDQgDgEgFAAQgCAAgEAEg");
	this.shape_532.setTransform(24.5,148.4);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgIAaQgEgDgCgFQgDgFAAgGQAAgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAGAAIAAA4IgGAAIAAgFQgEAGgHAAQgDAAgFgDgAgGgDQgDADAAAHQAAAIAEAEQADAEACAAQAFAAADgEQAEgEAAgHQAAgIgEgDQgDgEgFAAQgCAAgEAEg");
	this.shape_533.setTransform(17.9,148.4);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_534.setTransform(13.6,149.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgOASQgDgDgBgGQABgDABgCQABgDADgBIAEgBIAHgBIAKgCIAAgCQAAgEgCgCQgCgCgFAAQgDAAgDABQgCACgCAFIgHgBQABgFADgDQACgCAEgCQAEgBADAAQAGAAADABQADABACACIACAFIAAAGIAAAIIABAMIABAFIgGAAQgCgCAAgDIgHAFIgGABQgIAAgDgDgAAAACIgHABIgCADIgBADQAAABAAAAQAAABAAABQABAAAAABQABAAAAABQACACAFAAQABAAAEgCQADgCABgDQABgCAAgFIAAgCIgJACg");
	this.shape_535.setTransform(9.2,149.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AAAAbIgDgEIgBgIIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAIAAIAAAFIgIAAIAAAWIABAEIABACIACAAIAEAAIABAGIgGABIgEgBg");
	this.shape_536.setTransform(279.7,139.5);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_537.setTransform(277.7,139.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgIAaQgEgDgCgFQgDgFAAgGQAAgGADgDQACgFAEgDQAEgDAEAAQADAAADACQADABACADIAAgVIAGAAIAAA4IgGAAIAAgFQgEAGgHAAQgDAAgFgDgAgGgDQgDADAAAHQAAAIAEAEQACAEAEAAQAEAAADgEQADgEABgHQgBgIgDgDQgEgEgEAAQgDAAgDAEg");
	this.shape_538.setTransform(274.5,139.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AgMAQQgFgGgBgKQABgJAFgFQAFgGAHAAQAIAAAGAFQAEAGAAAJIAAABIgcAAQAAAHADAEQAEADADAAQAEAAADgCQADgCABgEIAHABQgCAGgEAEQgFADgHAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgEADAAAGIAWAAIAAAAg");
	this.shape_539.setTransform(270.2,140.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_540.setTransform(267,140.1);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AgLAQQgGgGAAgKQAAgFADgFQACgFAEgDQAFgCADAAQAHAAAEADQAFAEABAGIgHABQgBgEgCgCQgDgCgDAAQgEAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAEAAADgCQADgDABgFIAHABQgCAHgEAEQgFAEgHAAQgGAAgFgFg");
	this.shape_541.setTransform(263.5,140.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_542.setTransform(258,142.4);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AAIAcIgMgVIgFAFIAAAQIgGAAIAAg3IAGAAIAAAfIAPgPIAJAAIgPANIAQAag");
	this.shape_543.setTransform(255.2,139.4);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_544.setTransform(250.9,140.2);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_545.setTransform(248.1,139.4);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_546.setTransform(246.2,140.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_547.setTransform(240.2,140.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgKAGgGQAGgEAGAAQAIAAAFAFQAGAGAAAJQAAAHgDAFQgCAEgEADQgFACgFAAQgHAAgFgFgAgHgKQgDAEgBAGQABAHADAEQADAEAEAAQAFAAADgEQAEgEAAgHQAAgGgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_548.setTransform(235.8,140.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_549.setTransform(232.7,139.4);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AAAAbIgDgEIgBgIIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAIAAIAAAFIgIAAIAAAWIABAEIABACIADAAIADAAIABAGIgGABIgEgBg");
	this.shape_550.setTransform(230.8,139.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgOASQgDgDAAgGQAAgDABgCQABgDACgBIAGgBIAFgBIAMgCIAAgCQAAgEgCgCQgEgCgEAAQgDAAgDABQgCACgCAFIgGgBIACgIQADgCAEgCQAEgBAEAAQAEAAAEABQADABACACIACAFIABAGIAAAIIAAAMIACAFIgIAAQgBgCAAgDIgIAFIgGABQgGAAgEgDgAAAACIgGABIgDADIgBADQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQACACAEAAQADAAACgCQADgCACgDQABgCABgFIAAgCIgKACg");
	this.shape_551.setTransform(227.4,140.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_552.setTransform(224.3,139.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgEAdIAAgiIgHAAIAAgGIAHAAIAAgFIAAgFQABgDADgCQABgBAEgBIAHABIgBAGIgEAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgBACAAADIAAAEIAIAAIAAAGIgIAAIAAAig");
	this.shape_553.setTransform(222.5,139.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_554.setTransform(219.1,140.1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_555.setTransform(216,139.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_556.setTransform(211.8,142.4);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AAIAcIgMgVIgEAFIAAAQIgHAAIAAg3IAHAAIAAAfIAOgPIAJAAIgPANIARAag");
	this.shape_557.setTransform(209,139.4);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_558.setTransform(204.7,140.2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_559.setTransform(201.9,139.4);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_560.setTransform(199.9,140.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAGAFQAEAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_561.setTransform(193.9,140.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AAAAbIgCgEIgBgIIAAgWIgGAAIAAgFIAGAAIAAgLIAFgEIAAAPIAGAAIAAAFIgGAAIAAAWIAAAEIABACIACAAIADAAIABAGIgEABIgFgBg");
	this.shape_562.setTransform(190.7,139.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AgOASQgDgDgBgGQABgDABgCQABgDADgBIAEgBIAHgBIAKgCIAAgCQAAgEgCgCQgDgCgEAAQgDAAgDABQgCACgBAFIgIgBIADgIQADgCAEgCQAEgBADAAQAFAAAEABQADABACACIACAFIAAAGIAAAIIABAMIABAFIgHAAQgBgCAAgDIgIAFIgFABQgIAAgDgDgAAAACIgHABIgCADIgBADQAAABAAAAQAAABAAABQABAAAAABQABAAAAABQACACAFAAQABAAAEgCQACgCACgDQACgCgBgFIAAgCIgJACg");
	this.shape_563.setTransform(187.3,140.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_564.setTransform(184.1,140.1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AAAAbIgCgEIgBgIIAAgWIgGAAIAAgFIAGAAIAAgLIAEgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_565.setTransform(179.2,139.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_566.setTransform(176,140.2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgFQAFgGAHAAQAIAAAGAFQAEAGABAJIAAABIgeAAQABAHAEAEQADADADAAQAEAAADgCQACgCACgEIAIABQgDAGgEAEQgEADgIAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_567.setTransform(171.9,140.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_568.setTransform(168.6,140.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgMAQQgFgGgBgKQABgJAFgFQAFgGAHAAQAIAAAGAFQAEAGAAAJIAAABIgcAAQAAAHADAEQAEADADAAQAEAAADgCQADgCABgEIAHABQgCAGgEAEQgFADgHAAQgHAAgFgFgAALgCQAAgGgDgCQgDgEgFAAQgDAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_569.setTransform(164.8,140.2);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AAAAbIgCgEQgCgCAAgGIAAgWIgEAAIAAgFIAEAAIAAgLIAFgEIAAAPIAHAAIAAAFIgHAAIAAAWIABAEIABACIADAAIACAAIABAGIgEABIgFgBg");
	this.shape_570.setTransform(161.6,139.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_571.setTransform(158.2,140.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_572.setTransform(155.2,139.4);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgLAaQgEgEAAgGIAHABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQADACADAAQAEAAADgCQACgCABgDIABgJQgFAFgGAAQgHAAgFgGQgFgGAAgHQAAgGACgFQADgFAEgCQAEgDAEAAQAHAAAEAGIAAgFIAHAAIAAAiQAAAJgCAEQgCAEgEADQgFACgFAAQgGAAgFgDgAgGgTQgDAEAAAIQAAAHADADQADADADAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgEgFAAQgDAAgDADg");
	this.shape_573.setTransform(149.7,141);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_574.setTransform(145.5,140.1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_575.setTransform(142.4,139.4);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgIAaQgDgDgDgFQgCgFgBgGQABgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABABADIAAgVIAHAAIAAA4IgGAAIAAgFQgEAGgHAAQgEAAgEgDgAgGgDQgDADAAAHQAAAIADAEQAEAEACAAQAFAAADgEQADgEAAgHQAAgIgDgDQgEgEgEAAQgDAAgDAEg");
	this.shape_576.setTransform(139.2,139.4);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgIATIgFgDIgCgFIgBgHIAAgYIAIAAIAAAVIAAAIQAAACADACQACACADAAQABAAADgCQADgCABgCIABgJIAAgUIAIAAIAAAoIgHAAIAAgGQgFAHgGAAQgEAAgDgCg");
	this.shape_577.setTransform(134.9,140.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_578.setTransform(131.8,139.4);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AgLAQQgGgGAAgKQAAgFADgFQACgFAEgDQAFgCADAAQAHAAAEADQAFAEABAGIgHABQgBgEgCgCQgDgCgDAAQgEAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAEAAADgCQADgDABgFIAHABQgCAHgEAEQgFAEgHAAQgGAAgFgFg");
	this.shape_579.setTransform(129.1,140.2);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_580.setTransform(124.8,140.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_581.setTransform(121.7,139.4);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgDAGQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgCAAIAAgIIAGAAIAAAIQAAACgCADQgBADgCABg");
	this.shape_582.setTransform(117.5,142.4);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AAIAcIgMgVIgEAFIAAAQIgIAAIAAg3IAIAAIAAAfIAOgPIAJAAIgPANIARAag");
	this.shape_583.setTransform(114.7,139.4);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_584.setTransform(110.4,140.2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_585.setTransform(107.6,139.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgKAVIAAgoIAHAAIAAAHIADgGQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAAEADIgCAGIgGgBIgDABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAEAAADIAAAVg");
	this.shape_586.setTransform(105.6,140.1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_587.setTransform(99.8,140.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgMAQQgFgGgBgKQABgJAFgFQAFgGAHAAQAIAAAGAFQAEAGAAAJIAAABIgcAAQAAAHADAEQAEADADAAQAEAAADgCQADgCABgEIAHABQgCAGgEAEQgFADgHAAQgHAAgFgFgAAMgCQgBgGgDgCQgDgEgFAAQgDAAgDADQgEADAAAGIAWAAIAAAAg");
	this.shape_588.setTransform(95.6,140.2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgCAUIgQgnIAIAAIAJAXIABAIIACgIIAKgXIAHAAIgQAng");
	this.shape_589.setTransform(91.4,140.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_590.setTransform(88.5,139.4);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgKAHgGQAFgEAGAAQAIAAAFAFQAGAGAAAJQAAAHgDAFQgCAEgEADQgFACgFAAQgHAAgFgFgAgHgKQgDAEgBAGQABAHADAEQADAEAEAAQAFAAADgEQAEgEAAgHQAAgGgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_591.setTransform(85.5,140.2);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AgCAUIgPgnIAHAAIAJAXIABAIIACgIIAJgXIAIAAIgQAng");
	this.shape_592.setTransform(81.3,140.2);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_593.setTransform(77.1,140.1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_594.setTransform(74,139.4);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_595.setTransform(68.9,140.2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgIAaQgEgDgCgFQgCgFgBgGQABgGACgDQACgFAEgDQAEgDAEAAQADAAADACQADABABADIAAgVIAHAAIAAA4IgGAAIAAgFQgEAGgHAAQgDAAgFgDgAgGgDQgDADAAAHQAAAIADAEQAEAEACAAQAFAAADgEQAEgEAAgHQAAgIgEgDQgEgEgEAAQgDAAgDAEg");
	this.shape_596.setTransform(64.6,139.4);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_597.setTransform(60.3,140.1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgKAHgGQAFgEAGAAQAIAAAGAFQAFAGAAAJQAAAHgDAFQgCAEgFADQgEACgFAAQgHAAgFgFgAgHgKQgEAEABAGQgBAHAEAEQAEAEADAAQAFAAADgEQAEgEAAgHQAAgGgEgEQgDgEgFAAQgDAAgEAEg");
	this.shape_598.setTransform(55.9,140.2);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgKAXIAAAFIgHAAIAAg4IAIAAIAAAVQAEgGAFAAQAEAAADACQAEABACADIADAHIABAGQAAALgEAGQgGAGgHAAQgGAAgEgGgAgHgDQgDADAAAHQAAAHACADQADAGAFAAQAEAAADgEQAEgEAAgIQgBgHgDgDQgDgEgEAAQgDAAgEAEg");
	this.shape_599.setTransform(51.6,139.4);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_600.setTransform(44.9,140.1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_601.setTransform(41.9,139.4);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgLAaQgEgEAAgGIAHABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQADACADAAQAEAAADgCQACgCABgDIABgJQgFAFgGAAQgHAAgFgGQgFgGAAgHQAAgGACgFQADgFAEgCQAEgDAEAAQAHAAAEAGIAAgFIAHAAIAAAiQAAAJgCAEQgCAEgEADQgFACgFAAQgGAAgFgDgAgGgTQgDAEAAAIQAAAHADADQADADADAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgEgFAAQgDAAgDADg");
	this.shape_602.setTransform(36.4,141);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_603.setTransform(32.2,140.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_604.setTransform(29.1,139.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AAAAbIgDgEIgBgIIAAgWIgEAAIAAgFIAEAAIAAgLIAGgEIAAAPIAHAAIAAAFIgHAAIAAAWIAAAEIABACIACAAIAEAAIABAGIgGABIgEgBg");
	this.shape_605.setTransform(27.2,139.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgKASQgFgEgBgGIAHgBQABAEACACQADACADAAQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgHgCIgJgDQgDAAgBgDQgCgCAAgDIACgFQABgDACgBIAFgCIAFgBQAEAAADABQAEACACACIACAGIgHABQAAgDgCgCQgDgBgDAAQgEAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAEACIAKADQADAAACACQACACAAAEQAAAEgCADQgCADgEACQgEABgFAAQgGAAgEgDg");
	this.shape_606.setTransform(24,140.2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgMAQQgFgGAAgKQAAgJAFgFQAFgGAHAAQAIAAAGAFQAEAGAAAJIAAABIgcAAQAAAHADAEQAEADADAAQAEAAADgCQADgCABgEIAHABQgCAGgEAEQgEADgIAAQgHAAgFgFgAALgCQAAgGgDgCQgDgEgFAAQgDAAgDADQgEADAAAGIAVAAIAAAAg");
	this.shape_607.setTransform(19.8,140.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AgBAUIgRgnIAIAAIAJAXIABAIIACgIIAKgXIAGAAIgPAng");
	this.shape_608.setTransform(15.6,140.2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AAJAVIAAgXIgBgHQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgDADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAEgHAHAAQAEAAADACQADABACACIACAFIAAAHIAAAYg");
	this.shape_609.setTransform(11.4,140.1);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_610.setTransform(8.1,139.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// back
	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("rgba(255,255,255,0.898)").s().p("A3ZTgMAAAgm/MAuzAAAMAAAAm/g");
	this.shape_611.setTransform(150.1,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_611).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,299.7,249.8);


// stage content:
(lib._29497_05_AM_FI_TwoReasons_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{resolve:239,popUp:307});

	// timeline functions:
	this.frame_0 = function() {
		//code for clickTags
		
		this.clickTag.on("click", function () {
			window.open(window.clickTag, '_blank')
		});
		
		/*this.clickTag2.on("click", function () {
			window.open(window.clickTag2, '_blank')
		});
		
		this.clickTag3.on("click", function () {
			window.open(window.clickTag3, '_blank')
		});*/
	}
	this.frame_239 = function() {
		//code for legal link
		
		this.popUp.addEventListener("click", fl_ClickTogotoAndPlayAtFrame.bind(this));
		
		function fl_ClickTogotoAndPlayAtFrame()
		{
			this.gotoAndPlay("popUp");
		}
		
		
		
		this.stop();
	}
	this.frame_307 = function() {
		
	}
	this.frame_312 = function() {
		//close button code
		
		this.closeBtn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2() {
			this.gotoAndStop("resolve");
		}
		
		
		//use this code for clickTags
		
		/*this.clickTag2.on("click", function () {
			window.open(window.clickTag2, '_blank')
		});*/
		
		//use this code for hard coded URLs
		
		/*this.clickTag2.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.fidelity.com/commissions", "_blank");
		}*/
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(239).call(this.frame_239).wait(68).call(this.frame_307).wait(5).call(this.frame_312).wait(13));

	// Actions
	this.closeBtn = new lib.closeBtn();
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(282.8,15.9,1,1,0,0,0,9.3,9.3);
	this.closeBtn._off = true;
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 2, false, new lib.closeBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(307).to({_off:false},0).wait(5).to({_off:true},12).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.parent = this;
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(239).to({scaleY:0.84,y:105},0).to({_off:true},68).wait(18));

	// legalPop
	this.popUp = new lib.legalPopUp_btn();
	this.popUp.parent = this;
	this.popUp.setTransform(57.9,220,1,1,0,0,0,57.9,5);
	this.popUp._off = true;
	new cjs.ButtonHelper(this.popUp, 0, 1, 2, false, new lib.legalPopUp_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.popUp).wait(239).to({_off:false},0).to({_off:true},68).wait(18));

	// border
	this.instance = new lib.border("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(325));

	// legalPopTag
	this.legal_mc = new lib.legalLink();
	this.legal_mc.parent = this;
	this.legal_mc.setTransform(149.8,124.8,1,1,0,0,0,149.8,124.8);
	this.legal_mc.alpha = 0;
	this.legal_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.legal_mc).wait(307).to({_off:false},0).to({alpha:1},5).to({_off:true},7).wait(6));

	// text1
	this.instance_1 = new lib.text1_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,-72.9,1,1,0,0,0,110,52.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:79.5},16,cjs.Ease.get(1)).wait(39).to({y:-72.9},16,cjs.Ease.get(-1)).to({_off:true},1).wait(249));

	// text2
	this.instance_2 = new lib.text2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,341.9,1,1,0,0,0,110,66.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:121.9},16,cjs.Ease.get(-1)).wait(49).to({y:341.9},15,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// text3
	this.instance_3 = new lib.text3("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(35,20);

	this.instance_4 = new lib.text3GIF();
	this.instance_4.parent = this;
	this.instance_4.setTransform(131,32,1,1,0,0,0,115,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},144).to({state:[{t:this.instance_4}]},180).wait(1));

	// text4
	this.instance_5 = new lib.text4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,114,1,1,0,0,0,115,47);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.text4GIF();
	this.instance_6.parent = this;
	this.instance_6.setTransform(131,79,1,1,0,0,0,115,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},189).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_6}]},120).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(189).to({_off:false},0).to({alpha:1},15).to({_off:true},120).wait(1));

	// logo
	this.instance_7 = new lib.FidelityLogo_BK("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(247.5,226,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(324).to({x:246,y:234.5},0).wait(1));

	// backGreen
	this.instance_8 = new lib.backGreen();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,-125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124).to({_off:false},0).to({y:125},16,cjs.Ease.get(-1)).wait(84).to({alpha:0},15).to({_off:true},1).wait(85));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_1 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_2 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_3 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_4 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_5 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_6 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_7 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_8 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_9 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_10 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_11 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_12 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_13 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_14 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_15 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_16 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_17 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_18 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_19 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_20 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_21 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_22 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_23 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_24 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_25 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_26 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_27 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_28 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_29 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_30 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_31 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_32 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_33 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_34 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_35 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_36 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_37 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_38 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_39 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_40 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_41 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_42 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_43 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_44 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_45 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_46 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_47 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_48 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_49 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_50 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_51 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_52 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_53 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_54 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_55 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_56 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_57 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_58 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_59 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-150,y:125}).wait(1).to({graphics:mask_graphics_1,x:-144.9,y:125}).wait(1).to({graphics:mask_graphics_2,x:-139.8,y:125}).wait(1).to({graphics:mask_graphics_3,x:-134.7,y:125}).wait(1).to({graphics:mask_graphics_4,x:-129.7,y:125}).wait(1).to({graphics:mask_graphics_5,x:-124.6,y:125}).wait(1).to({graphics:mask_graphics_6,x:-119.5,y:125}).wait(1).to({graphics:mask_graphics_7,x:-114.4,y:125}).wait(1).to({graphics:mask_graphics_8,x:-109.3,y:125}).wait(1).to({graphics:mask_graphics_9,x:-104.2,y:125}).wait(1).to({graphics:mask_graphics_10,x:-99.2,y:125}).wait(1).to({graphics:mask_graphics_11,x:-94.1,y:125}).wait(1).to({graphics:mask_graphics_12,x:-89,y:125}).wait(1).to({graphics:mask_graphics_13,x:-83.9,y:125}).wait(1).to({graphics:mask_graphics_14,x:-78.8,y:125}).wait(1).to({graphics:mask_graphics_15,x:-73.7,y:125}).wait(1).to({graphics:mask_graphics_16,x:-68.6,y:125}).wait(1).to({graphics:mask_graphics_17,x:-63.6,y:125}).wait(1).to({graphics:mask_graphics_18,x:-58.5,y:125}).wait(1).to({graphics:mask_graphics_19,x:-53.4,y:125}).wait(1).to({graphics:mask_graphics_20,x:-48.3,y:125}).wait(1).to({graphics:mask_graphics_21,x:-43.2,y:125}).wait(1).to({graphics:mask_graphics_22,x:-38.1,y:125}).wait(1).to({graphics:mask_graphics_23,x:-33.1,y:125}).wait(1).to({graphics:mask_graphics_24,x:-28,y:125}).wait(1).to({graphics:mask_graphics_25,x:-22.9,y:125}).wait(1).to({graphics:mask_graphics_26,x:-17.8,y:125}).wait(1).to({graphics:mask_graphics_27,x:-12.7,y:125}).wait(1).to({graphics:mask_graphics_28,x:-7.6,y:125}).wait(1).to({graphics:mask_graphics_29,x:-2.5,y:125}).wait(1).to({graphics:mask_graphics_30,x:2.5,y:125}).wait(1).to({graphics:mask_graphics_31,x:7.6,y:125}).wait(1).to({graphics:mask_graphics_32,x:12.7,y:125}).wait(1).to({graphics:mask_graphics_33,x:17.8,y:125}).wait(1).to({graphics:mask_graphics_34,x:22.9,y:125}).wait(1).to({graphics:mask_graphics_35,x:28,y:125}).wait(1).to({graphics:mask_graphics_36,x:33.1,y:125}).wait(1).to({graphics:mask_graphics_37,x:38.1,y:125}).wait(1).to({graphics:mask_graphics_38,x:43.2,y:125}).wait(1).to({graphics:mask_graphics_39,x:48.3,y:125}).wait(1).to({graphics:mask_graphics_40,x:53.4,y:125}).wait(1).to({graphics:mask_graphics_41,x:58.5,y:125}).wait(1).to({graphics:mask_graphics_42,x:63.6,y:125}).wait(1).to({graphics:mask_graphics_43,x:68.6,y:125}).wait(1).to({graphics:mask_graphics_44,x:73.7,y:125}).wait(1).to({graphics:mask_graphics_45,x:78.8,y:125}).wait(1).to({graphics:mask_graphics_46,x:83.9,y:125}).wait(1).to({graphics:mask_graphics_47,x:89,y:125}).wait(1).to({graphics:mask_graphics_48,x:94.1,y:125}).wait(1).to({graphics:mask_graphics_49,x:99.2,y:125}).wait(1).to({graphics:mask_graphics_50,x:104.2,y:125}).wait(1).to({graphics:mask_graphics_51,x:109.3,y:125}).wait(1).to({graphics:mask_graphics_52,x:114.4,y:125}).wait(1).to({graphics:mask_graphics_53,x:119.5,y:125}).wait(1).to({graphics:mask_graphics_54,x:124.6,y:125}).wait(1).to({graphics:mask_graphics_55,x:129.7,y:125}).wait(1).to({graphics:mask_graphics_56,x:134.7,y:125}).wait(1).to({graphics:mask_graphics_57,x:139.8,y:125}).wait(1).to({graphics:mask_graphics_58,x:144.9,y:125}).wait(1).to({graphics:mask_graphics_59,x:150,y:125}).wait(266));

	// graph
	this.instance_9 = new lib.graph();
	this.instance_9.parent = this;
	this.instance_9.setTransform(393.8,22.9,1,1,0,0,0,398.9,213);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:true},91).wait(175));

	// button
	this.instance_10 = new lib.button();
	this.instance_10.parent = this;
	this.instance_10.setTransform(105.1,183,1,1,0,0,0,67.1,18);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(224).to({_off:false},0).wait(100).to({regX:67.2,scaleX:0.8,scaleY:0.8,x:73.2,y:94},0).wait(1));

	// legal
	this.instance_11 = new lib.Legal_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(5,212);

	this.instance_12 = new lib.Legal3_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(5,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},224).to({state:[{t:this.instance_12}]},100).wait(1));

	// background
	this.instance_13 = new lib.back("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(325));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.4,124,308.6,253);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;