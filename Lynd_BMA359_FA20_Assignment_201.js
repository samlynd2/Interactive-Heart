(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vavley4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D110E").s().p("AhzAtIAFgIQADgFAJgIIAVgOIAFgCIAEgBQAJgCAGgDIAPgGQAPgKAPgFIAIgCIAIgBQAHgCAHgEQAJgGAHgCQAHgCAIgEIAHgFQADgCAFAAQAFAAALgFQADAAAFACIAIAAQALAAAFgDQgDADgNABIgIAAQgFgCgDAAQgKAFgGABQgFABgCABIgHAFQgJAFgGACIgPAHQgGAFgJADIgJABIgGACQgQAHgNAIIgPAHQgGAEgKACIgHADIgUAOIgKAMIgCADIgBADQgBABACAEIgJADQgCgGABgFg");
	this.shape.setTransform(6.7324,16.3778,1.266,1.266,-44.9995);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0D110E").ss(0.9).p("Ah1gCQAKABAYgDQAUgCANACQAKACAhASQAYAOAWgGQAOgDAWgfQAPgYAZAPQgEAHAAAK");
	this.shape_1.setTransform(11.9881,21.4705,1.2662,1.2662,-44.9995);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1E8DA").s().p("AgKA+Ig8gYQgLgBgPABIgaACQgBgHAJgLQAHgHAJgGIAIgFIAIgCQAKgCARgKQAFgDAQgGIAkgQIALgDQAHgDAOgJIAfgNQAFgDAJACQALACADgBQAGAAAIgEQAHgBAFAJQAFAIgBALQgBAFgEANIgDASQgCALgDAFQgFAHgEABIgNAAQgMACgLAKIgTAVQgMAPgTAAQgMAAgNgGg");
	this.shape_2.setTransform(8.8928,16.1327,1.2662,1.2662,-44.9995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vavley4, new cjs.Rectangle(0,0,22.7,32.8), null);


(lib.valvey3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D110E").s().p("AAeBdQgMgNgGgPQgFgIgEgEIgHgFIgTglQgGgLgCgVQgCgYgDgIIgGgPQgCgEABgFIABgIQgDgFgBgDIgIgNIgGgGIAGAGIAFAGIAEAHIAEAIIAAAIIABAIIAHAPQADAGAAAKIACAQQAEAWAFAJIAPAcQAEAIAGADQAIAFADAJQASAiAaAJIgDAIQgPgFgNgPg");
	this.shape.setTransform(16.495,17.5442,1.2658,1.2658,29.999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0D110E").ss(0.9).p("AhpgwQALgFAKgIQAHAHABAWQABAbACAFQAIAZANAHQAJAFAcAAQAEAAAXgEQAUgEAGADQADABAJANQAJANAEADQAGAEAOgHQAQgJAEAA");
	this.shape_1.setTransform(8.5353,21.6064,1.266,1.266,29.9989);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1E8DA").s().p("AA4BzIgJgKQgPgPgqACQgqACgNgSQgEgFgDgLIgEgTQgIgogDgGIgCABIAXgzIAJghQAGgXAJgFQAMgHAPAZQALATADAQQABAMACAXQACAVAFAMQAHARAPASIANAPQAEAEAEALIANARIALALIAOAIQACADgKAFQgJAFgFAAQgGAAgGgEg");
	this.shape_2.setTransform(12.8378,15.5665,1.2662,1.2662,29.9987);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valvey3, new cjs.Rectangle(-2,0,19.6,34.7), null);


(lib.valvey2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0D110E").ss(0.9).p("AhACYQgHgegBgOQgCgaAKgHQgDghAkgwQAiguAggOQA7gZAvgPQgCgUgWgKQgLgFgcgFQgTgEgRAHQgPAFgRAOQgBAAgNALQgJAGgFAGQgtAxgUAeQgUAdgGAMQgOAbACAUQgOAIgGAD");
	this.shape.setTransform(17.9209,18.8929,1.2662,1.2662);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AhMCPIAAAAIAAAAgAhiCCQgJgJgEgMIgCgOQgCgIgEgEQgDgCgFgBQgHgCgBADQATgzAcgrQAshGAmghQATgQAXgHQAcgIATALQANgEADAAIAMAIIAPAIQAIAFACAHQACALgNAGIgZAIQgIADgQAIQgMAGgNADQgmAKgeAnQgmAtgNAjQgLAdgBAOIABAUQACASABAAQgNgDgJgKg");
	this.shape_1.setTransform(18.3878,18.1209,1.2662,1.2662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valvey2, new cjs.Rectangle(-1,-0.9,37.8,40.1), null);


(lib.valvey6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0D110E").ss(0.9).p("ABFgLQgNgRgKAAQgwAIgRAmQgKAXgEA+QgdAHgEguQgDgjAJgbQAMgiAagcQAhglAaAVQAKAAAAgJQABgQAAgB");
	this.shape.setTransform(8.8151,14.6214,1.2662,1.2662);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AhGA9QgEgqAQgUIAUgjQAMgVASgKQAIgFAFgCQAIgCAIACQAFABAGAFQAFACAGgGIAHgXQAEgQAJAEQAIAEABASQABAKgBAPIAAAUQgBAKgGAGQgGAHgIAAIgQgBQghAFgUAfQgLATgGAZIABAaQABARgGADQgcgCgDgtg");
	this.shape_1.setTransform(9.134,13.6887,1.2662,1.2662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valvey6, new cjs.Rectangle(-0.7,0,19.2,28.7), null);


(lib.valvey5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0D110E").ss(0.9).p("AgvicQgSAeALAOQAEAGAWAIQAWAIAEAEQAbAbAbAnQAaAlASAlQALAYgNArQgPAvgfgSQgMgHgHgrQgIg4gBgBQgLgigIgQQgMgbgSgQQgXgUgVgDQgagEAEAhQgCADgEAJ");
	this.shape.setTransform(13.1777,19.919,1.2662,1.2662);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AA8CXQgMgCgFgKIgIgQQgHgPAAgdQAAgggFgNQgQgzgZgeQgNgPgLgEIgMgHQgHgEgGAAIgMACQgIABgFgCQgKgFAAgLQABgFAEgGQAGgIABgEQASgZAOgKQACAFAAANQAAALAJAGQAHAGAPAEQAQAEAGAEQAOAJAMAUQALARAYAeQAZAjAFAJQAPAbAAAYQAAAYgKAZQgEAIgLAKIgHAHQgEADgFAAIgCAAg");
	this.shape_1.setTransform(13.0041,20.4614,1.2662,1.2662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valvey5, new cjs.Rectangle(-0.7,-1,28.3,41.5), null);


(lib.valvey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0D110E").ss(0.9).p("ABghlQgHgFgHgKQgGgLgCgLQggAWgOApQgJAegDAwQgBAfgBAFQgDAPgLAPQgXAdgYAYQgRASgBABQgLAHgHgNQgNgZADgeQACgQAMgmQACgFADgNQACgKACgGQAEgJAJgKQACgCAOgNQAEgFAcgaQATgSALgOQANgRACgCQAGgJADgN");
	this.shape.setTransform(11.9151,20.5659,1.2662,1.2662);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AhECWQgOgJgDgcQgCgUAEgXQAGgcAIgYQAFgOAQgRIAageQATgXATgVIAXgbQAPgSAJgJQAVgTADARQACAKgNAOIgUATQgYAagGAYQgDAOgBAtQgCAlgKAVQgGALgMAPIgVAZIgRAWQgKAMgIAAIgEgCg");
	this.shape_1.setTransform(11.3343,19.2193,1.2662,1.2662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valvey, new cjs.Rectangle(-1,0,26.2,41.9), null);


(lib.valve8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ACMBnQgEgFgFgDIgKgEIgIgIQgIgIgdgPQgagNgQgGQgYgJgUgBQgfgCguAXQgQAKgKAFQgSAIgKgGQgIgEgBgLQgBgJADgLQAGgUAcgYQAvgqA9gFQANgCAWADQAbADAIAAQAXAAALgQQALgOAAgQQABgGAFAAQAGAAAAAGQgBAOgHAOQgHAOgLAIQgNAJgVgBIgkgFQgfgDggAJQgfAJgaAUQgiAZgIAXQgEAMAEAGQADAHAMgFIAfgQQAmgTAZgDQAggDAnAPQAnAQAaARIAMAJQAHAGAFADQAKAEAIALQADAFgFACIgEACQgCAAgCgDg");
	this.shape.setTransform(18.295,18.0921,1.3706,1.3706,-14.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("ABOA5IgUgJIgTgJQgSgMgLgBQgKgBgbAGQgjAHgKAFQggAQgHACQgfALACgUQACgOAKgSQAGgNAHgFIgHADQAJgEAMgIIATgOQAXgOAbgHIAVgFQAMgEAJABQAHAAAJADQAMAFAEAAQAPADAbgLQANgGAFgEQAGgGAGgMIACgGQABgCAEABQASAFgDAlQgBATAFA4QAEAqgJAJQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCACQgMgQgjgNg");
	this.shape_1.setTransform(18.2473,17.7127,1.3709,1.3709,-14.9982);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valve8, new cjs.Rectangle(-0.2,0,42.1,32.4), null);


(lib.valve7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABuCqQgfgDgUgkIgTgnQgMgZgHgNQgwhRhVgyQgEgCADgFQACgFAFADQBNAtAvBGQASAbAVAwQALAYAJALQAMAPAPAEQgShcg2hIQgMgQgUgWIgiglQgcgjgJgvQAAgEAEgBQAEgBABAEQAJAzAnApIAeAiQASATALAQQA3BJAPBeQABADgCACQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgBAAg");
	this.shape.setTransform(8.041,25.262,1.3704,1.3704,29.9981);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AA5CXQgKgMgLgeQgNgkgXgjQgWgkgcgXQgUgSgLgVQgNgZAAgTQgCgmAMgcQgGAOAFAMQAHAUAMAQIAfApIAYAbQAOARAIALIAdApQAMAVAMAdIAVA0IAJAVQAEARgJACIgCAAQgKAAgUgUg");
	this.shape_1.setTransform(10.527,26.0065,1.3708,1.3708,29.9984);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valve7, new cjs.Rectangle(-0.1,-0.1,14.299999999999999,53.2), null);


(lib.valve6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AArBFQgogYgNgOQgTgSgLgXQgFgNgDgMQgFgSAEgHQAFgJALACQAKACAHAIIAIAJQAFAEAFgBQANgDACgPQABgHAGABQAGABgBAGQgDAOgLAJQgNAKgMgHQgEgCgFgHQgGgHgEgCQgIgFgCAEQgCACABAHIADAJQAIAgAVAXQAKAMAQALIAfASQAFADgDAFQgCADgCAAIgEgBg");
	this.shape.setTransform(7.0276,9.5151,1.3707,1.3707);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AAjA6IgWgMQgWgQgHgJIgCgBQgCgBgCgEIgEgFQgGgHgCgEIgDgIQgIgUABgRQAAgLAGAAIAHACIAEAGQAFAEAFACQAJAFALgEIAIgDIADgDIADgEQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABABQACABAAAHIgBAKQgCAHABAGIADAKIAGAJIAKAJQAGAIAAARQgEAbgGAAIgBAAg");
	this.shape_1.setTransform(7.3876,9.1368,1.3708,1.3708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valve6, new cjs.Rectangle(-0.1,0,14.299999999999999,19.1), null);


(lib.valve5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AAGBRQADgTAQg8QALgsgEgdQgmAWgLAFQgLAFgIgGQgIgGABgNQABgFAFAAQAGAAgBAFQgBAIADADQADABAIgDIA0geQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAIAhgMAwIgTBRQgBAFgGAAQgFAAAAgFg");
	this.shape.setTransform(5.913,11.7937,1.3707,1.3707);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AAGA8IgEgKIgGgTQgEgNgFgFIgQgMQgIgGABgLQACgNATgKIAfgMQAGgQAIAIQAHAHAAANQABAGgCALIgDAQQgEAcgCAJIgFAQQgEALgFADIgDABQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1.setTransform(5.9653,9.245,1.3708,1.3708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valve5, new cjs.Rectangle(-0.1,0,12.1,23.6), null);


(lib.valve4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AAPBfQgLgWgdgmQgZgggGgUQgHgZAJgXQAJgaAYgGQAEgBACADIA5BVIAIgLQACgEAFACQAEADgCAEIgMAQQgCADgDAAQgDAAgBgDIg8hWQgTAJgFAYQgFAYALAXQAHAMAbAjQATAaAMAWQACAFgFADIgDABQgCAAgCgDg");
	this.shape.setTransform(8.1334,13.4626,1.3707,1.3707);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AATBVQgFgBgHgKIgIgQIgbgkQgOgWgFgSQgDgSAGgWQAHgaASABIgBADQAJABALAQIAaAqIATAgQAFAJgCAIIgHARIgIAYQgFAQgIAAIgBAAg");
	this.shape_1.setTransform(8.1215,12.6301,1.3708,1.3708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valve4, new cjs.Rectangle(-0.1,0,16.5,27), null);


(lib.valve3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AgvBhQgGgDAEgFQAIgMAOgJIAbgOQAogUAAgYIg3ACQgDAAgCgCQgCgDABgCQAWg2AigtQADgFAGADQAFADgEAFQggArgTAtIAzAAQAFAAABADQAEAggmAWQgyAdgGAJQgCADgDAAIgDgBg");
	this.shape.setTransform(7.5047,13.4061,1.4968,1.3706);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AgqAdQAFgSAAgFIgDgLQgCgGAEgGQAIgMAQgFQAHADAQgDQARgDAIAEQAQAJgMARQgKAMgPAJQgNAGgKAEQgKACgJAHQgGADgDAAQgFAAABgHg");
	this.shape_1.setTransform(7.8087,18.9477,1.4971,1.3708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valve3, new cjs.Rectangle(-0.2,0,15.399999999999999,26.9), null);


(lib.valve2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AhaFoQgUgYALglQAHgYAWgjQBGhrAmitIAPhLQAJg0gDggQgDgjgWglQgOgYgfgnQgEgFAFgFQAFgFAEAFQAhApANAWQAXAmAFAjQAEAhgHAuQgBAMgOBCQgTBUgUA8QgaBMgiA4QgdAngLAYQgUAmARAZQA1g+AmhLQBHiHAOiVQAIhIgHhKQgIgvgDgZQgEgrAQgZQADgFAFADQAFACgDAFQgKASAAAaQAAAOAFAfQAGApABApQAGCTgxCMQgxCOhfBvQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAIgDgBg");
	this.shape.setTransform(13.7539,51.1206,1.3706,1.3706,-14.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AhfFZQgCgFgBgPQgEgXAOgUQADgDADgIQADgIADgEIAGgGIAHgHQAJgMALgcQAQgbANgdQAkhQAShLQADgLACgRIAEgdQAHguAHgVQAHgYgBgdQgBgcgJgYQgKgcgGgNQgHgOgLgRQgMgNABgGQACgKAXgCIAFABIAFgBQAEgBAMgJQALgIAFAFQAFAGAAASIABAiQAAAIABAHIACAQQAAAZABAFIAFARIADARQAEAygHBAQgEAhgOBOIgJAsQgCAJgHAMIgKAUIgJAYIgJAYQgcA9geAxIggAvIgKASQgGAMgHADQgDACgDAAQgFAAgDgIg");
	this.shape_1.setTransform(13.9125,50.9156,1.3709,1.3709,-14.9982);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valve2, new cjs.Rectangle(-0.2,0,26.099999999999998,102), null);


(lib.valve = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AgxBRQgSgTgKgXQgBgEABgDQACgEAEAAICdAUQAUADAJAAQAQAAAKgHQAMgGAAgOQAAgMgIgLQgPgVgfgIQgWgGgjACQhIAFgkgCQg+gEgkglQgFgFAFgFQAFgFAFAFQAaAaAnAIQAcAGAugEIA9gDQAkAAAaAHQAYAGARATQAUATgCAXQgEAthPgLIiPgRQAJAOALAMQAFAFgFAGQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(19.3685,16.6207,1.3706,1.3706,14.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E8DA").s().p("AAkA1IgggEIgggEIgegIIgMAAQgHgBgFgDQgDgCgDgGIgGgIIgLgGQgHgFgHgJIgNgQQgIgKgDgFQgEgJACgIIgKgHIAOAGIgEAAIAAABIASAMQAHAEAMABIAUACQAMACAPgBIAbgCIAYgDIAWgCQAPgBAgAEQAoAEAWAJQAMAEALAPQALAOABANQABANgRAQQgGAFgOABIgVAAIgKAAQgWAAgfgGg");
	this.shape_1.setTransform(20.0389,16.2211,1.3709,1.3709,14.9982);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.valve, new cjs.Rectangle(-0.1,-0.1,41,29.6), null);


(lib.The = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE909D").s().p("AhtCcIAAk3IDbAAIAABOIiKAAIAAAoIBnAAIAABJIhnAAIAAAqICKAAIAABOg");
	this.shape.setTransform(88.7,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE909D").s().p("AAuCcIAAh5IhbAAIAAB5IhSAAIAAk3IBSAAIAAByIBbAAIAAhyIBSAAIAAE3g");
	this.shape_1.setTransform(59.125,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE909D").s().p("AgoCcIAAjpIhFAAIAAhOIDbAAIAABOIhGAAIAADpg");
	this.shape_2.setTransform(29.55,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.The, new cjs.Rectangle(13.6,0,101.60000000000001,64), null);


(lib.sytoleinternal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


(lib.systoleNavigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


(lib.systoleexternal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


(lib.Start_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE909D").s().p("AgoCcIAAjpIhFAAIAAhOIDbAAIAABOIhFAAIAADpg");
	this.shape.setTransform(134.25,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE909D").s().p("AAoCcIg5hYIgZAAIgJAAIAABYIhSAAIAAk3IBfAAQBIAAAhAOQA5AZABBIQgBBKg9AYIBHBmgAgzgDIAjAAQAdAAALgFQAQgIAAgZQABgZgTgIQgKgEgcAAIgjAAg");
	this.shape_1.setTransform(105.25,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE909D").s().p("AA6CcIgIgeIhkAAIgHAeIhVAAIBbk3IBnAAIBbE3gAAfA3Igfh3IgfB3IA+AAg");
	this.shape_2.setTransform(73.375,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE909D").s().p("AgoCcIAAjpIhFAAIAAhOIDbAAIAABOIhFAAIAADpg");
	this.shape_3.setTransform(43.8,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE909D").s().p("AhzB8IAihEQAoAdApAAQAhAAAAgRQAAgLgWgLIgvgXQhHghAAg6QAAgoAegZQAegaAyAAQA5AAAzAiIghBDQgpgZgiAAQgaAAAAAPQAAAMAVAKIAwAUQBHAfAAA9QAAAsgfAZQgfAZg0AAQhFAAgxgkg");
	this.shape_4.setTransform(15.5,31.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Start_MC, new cjs.Rectangle(0,0,150.4,64), null);


(lib.Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("Eg+ZAMRIAA4hMB8zAAAIAAYhg");
	this.shape.setTransform(399.375,78.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("Eg+ZAMRIAA4hMB8zAAAIAAYhg");
	this.shape_1.setTransform(399.375,78.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,798.8,157);


(lib.Replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90C9D4").s().p("AiEjqIEJDoIkJDsg");
	this.shape.setTransform(54.0158,18.0907,0.6762,0.625,14.9948);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90C9D4").s().p("Ag6HRQhFgMg5gbQg+gggwgrQgxgvgjg6Qghg4gShHQgPhEADhEQAGhKAXg/QAahDAqg4QArg4A7gsQA5gpBHgZQBAgWBOgEIAACoQgzgCguALQgxANgqAZQgrAagkAlQghAmgYAwQgVAugJA1QgHA2AHAzQAJA3AWAvQAZAyAkAoQAmApAvAdQAuAbA5APQAyANA+gCQA9gFAzgSQA4gVAvgiQAugkAlgwQAhguAWg7QATg2AEhBQACBCgPA4QgQA9ggA1QgiA2guAqQgxArg6AbQg2AahFAKQgfAEgfAAQghAAgigFg");
	this.shape_1.setTransform(37.4825,37.7998,0.6761,0.6248,14.9899);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#97F0FE").s().p("AlaFaIAAq0IK0AAIAAK0g");
	this.shape_2.setTransform(34.65,34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:0.6761,scaleY:0.6248,rotation:14.9899,x:37.4825,y:37.7998}},{t:this.shape,p:{rotation:14.9948,x:54.0158,y:18.0907}}]}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:0.6762,scaleY:0.6249,rotation:14.9898,x:37.5118,y:37.8128}},{t:this.shape,p:{rotation:14.9937,x:54.0395,y:18.1088}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.3,69.3);


(lib.human = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE909D").s().p("AAvCcIhciaIAACaIhSAAIAAk3IBSAAIBbCZIAAiZIBSAAIAAE3g");
	this.shape.setTransform(149.825,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE909D").s().p("AA6CcIgIgeIhkAAIgHAeIhVAAIBbk3IBnAAIBbE3gAAfA3Igfh3IgfB3IA+AAg");
	this.shape_1.setTransform(118.525,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE909D").s().p("ABRCcIAAifIhGByIgVAAIhGhyIAACfIhSAAIAAk3IBRAAIBRCGIBRiGIBRAAIAAE3g");
	this.shape_2.setTransform(83.75,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE909D").s().p("AhvBmQgQgfAAhBIAAijIBSAAIAACrQAAAfAFAMQAKAVAeAAQAfAAAKgVQAFgMAAgfIAAirIBSAAIAACjQAABBgQAfQgdA4hTAAQhTAAgcg4g");
	this.shape_3.setTransform(48.975,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE909D").s().p("AAuCcIAAh5IhbAAIAAB5IhSAAIAAk3IBSAAIAAByIBbAAIAAhyIBSAAIAAE3g");
	this.shape_4.setTransform(17.675,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.human, new cjs.Rectangle(0,0,178.1,64), null);


(lib.heart_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D110E").s().p("AAFBmQgPgUgEgJQgHgPgDgTQgCgOADgVQAEgdANgnIAWhCIAKAEIgaBAQgNAngFAbQgDAXABAMQABAPAHASQAEAJAOAUQAOASAEAMQgEgMgPgRg");
	this.shape.setTransform(258.2779,440.7492,1.8875,1.8875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D110E").s().p("AiaBUQAEgNAMgGIAXgMIAXgMQARgJAZgTQAagSALgQIAGgLQACgEAAgIIADgNQACgIAFgEQAGgGATgCQAOgCAKgFIAYgKQAOgGAMgCIAmgHIAHAAQAHACACACIgHAHQgCgCgHABIglAGQgLABgNAFIgYAKQgPAGgLABQgRACgFAEQgEADgDAGIgCAMQAAAJgCAEIgHAMQgLAPgbATQgXAQgVAMQgHAEgQAHIgYALQgLAGgFANQgFAOADALQgEgLAGgPg");
	this.shape_1.setTransform(234.0819,435.7238,1.8875,1.8875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D110E").s().p("AihDfQAMgKAZgNQAygcAUgWQAJgLADgHQADgGAEgOIAHgUQAHgMAHgGQAOgMAagEIArgDQAZgCAQgHQAUgJAJgUQAKgTgEgUQgIgcgCgOQgCgNABgKIABgWQADgdADgOIAKgqQAGgZAJgRIAJAFQgJAPgGAYIgKAqQgEATgDAXQgDAfACALQACAOAIAdQAEAXgLAUQgLAVgVAKQgQAHgbACIgrADQgYACgPAMQgMAKgIAaQgDAMgFAJQgFAKgIAHQgNAOgUAOIgmAWQgYANgMAKQgJAHgFAGQAFgHAIgHg");
	this.shape_2.setTransform(238.6528,403.8725,1.8875,1.8875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D110E").s().p("AA6BnIgLgQQgFgHgKgHIgQgLQgLgHgFgFQgKgKgKgZQgGgPgLgUIgTgjQgKgWgCgRQgCgNgCgGIgEgGQgDgCgCABIgDgKQAIgCAGAGQAFAEABAGQADAFACAQQAAAQAKAVIASAjQAKAVAGAPQAIAYAJAKQAGAGAKAGIAQAMQAJAHAFAHQAGAIAFAKQAMAXAOAFQgOgFgNgXg");
	this.shape_3.setTransform(316.8653,390.9918,1.8875,1.8875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D110E").s().p("ABsCSIgXgNQgKgGgJgMIgRgUQgKgKgKgGQgRgKgFgGQgIgHgIgOIgLgYIgagtQgHgOgCgMIgEgaQgBgOgGgKQgFgKgJgLQgHgJgLgKQgFgDgFgCQgFgDgCADIgGgIQAEgEAFAAQAEAAAEADQAGACAGAFQAJAIAKANQAJALAFALQAGAMACAPIACAaQACAKAGAPIAZAtIALAYQAGANAIAIQAGAGAPAJQAMAHAIALIARAUQAKANAJAFIAWAOQAJAGAFAIQgFgIgJgGg");
	this.shape_4.setTransform(320.9234,389.2681,1.8875,1.8875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0D110E").p("AgqgUQAEAKAPAFQAYAGABABQAHADAOAGQARAHADAA");
	this.shape_5.setTransform(285.97,361.8546,1.8896,1.8896);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0D110E").p("AgUhWQgNAQAJAhQAIAdAQARQAPAQAGAWQAAABAIAs");
	this.shape_6.setTransform(269.9942,308.0733,1.8896,1.8896);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0D110E").p("AgzAdQgGgMAcgTQAbgTAOgBQADgEARgBQAUgBABAA");
	this.shape_7.setTransform(287.3359,259.4727,1.8896,1.8896);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0D110E").p("AiKA+QgFgYAlghQAUgRAdgPQAbgOAbgIQBbgZA2Ac");
	this.shape_8.setTransform(302.9068,270.1579,1.8896,1.8896);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0D110E").p("AjIgjQAJgHAaACQAOAAAXACQA+ABAfADQAmACAPAEQAKACASAMQARALAKACQAoAHALADQAIADAMAHQAQAHAeAPQAEACACgCQADgDACgB");
	this.shape_9.setTransform(315.4004,261.2075,1.8896,1.8896);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D110E").s().p("ACwGKQgFgGgHgDIgPgFQgOgEgMgOQgNgPgKgGQgNgIgPgFQgQgHgPAAQgVgBgJgHQgMgIgLgNQgSgVgKgjIgIgfQgCgKgIgTQgLgWgYgeQgOgQgIgGIgNgJQgHgGgFgFQgHgHgCgHQgDgGACgKQACgMAIgTIAMgcQADgKADgUQAGg1gehEIgNgcIgOgdQgHgRgBgOQgBgLABgVQAEgqgBgVIAAgfIgDgXIgBgFIAKgCIADAVIABAoQAAANgBATIgDAfQgBAVABAKQAAAMAHARIANAdIANAcQAeBIgHA1QgCANgFASQgCAIgKAVQgIATgCAKQgBAKACAEQABAFAHAHQAEAEAHAGIANAJQAKAIAMAPQAaAhAJAUQAGANAFARIAHAfQAJAhASAWQAJALANAKQAIAGAVACQAQABAPAGQAPAGANAIQAKAGAOAQQALANAOAFIAPAFQAIADAFAGIAJAMIgKgMgAi2mSQgHAAAJgCQAIgCgBACIABABIAAABIgKABg");
	this.shape_10.setTransform(309.9461,328.6665,1.8875,1.8875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D110E").s().p("ACiCfIgEgJQgDgHgDgDQgEgFgEgCIgKgEIgKgGIgRgOQgNgLgbgEQgNgCgJABQgHAAgEgCIgIgFIgBACIgBAAQgQgCgVgRIgPgNQgHgGgIgKQgKgPgIgXIgMgnIgNgnQgDgJgHgIQgEgFgKgHQgYgOgLgIQgVgPgFgVIAKgCQAEATARALQAKAJAYAOIARAPQAGAIAEALQAEAIAJAfIALAoQAGAVALAPQAHALAVASQASARAPACIAAAAIABAAIgBAAIABgCIgBgGIADAFQAGAGANABIAXACQAbAGANAKIARAPIAJAGIAKAEQAEACAFAGIAKATQAEAHAEAAQgFAAgEgHg");
	this.shape_11.setTransform(308.5132,376.2445,1.8875,1.8875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D110E").s().p("AhJCJIASgXIAKgKIANgIQAKgEARgFIAagHQAbgHAXgSQAXgSAFgcQAEgXgIgfQgFgUgOghIgFgNQgCgEgFgHIgHgOQgDgKAGgIIAIAGQgFAFAJAQIAHANIAGANQAOAkAEASQAHAggFAaQgGAdgZATQgZATgbAGIgbAGQgQAEgKAFQgIADgEAEIgKAKIgTAVQgNALgVAHQATgHAOgLg");
	this.shape_12.setTransform(251.2989,476.281,1.8875,1.8875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D110E").s().p("ABFBnIgQgpQgRgqADgrQAAgbgNgLIgRgNIgRgLQgagNgMgIQgVgMgMgUIAJgGQAJARATAOQAMAHAaAPIARAMQALAHAHAHQAIAHADAMQACAIAAAPQgDAsAOAoIAQApQAGAVADAVQgFgZgGgQg");
	this.shape_13.setTransform(276.9451,473.5442,1.8875,1.8875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D110E").s().p("ABDF4QgEgSgGgIIgIgLQgEgGgBgIQgBgKAEgSQAFgUAAgHQACgcgOgaQgHgNgJgJQgIgJgOgIIgYgMQgPgIgJgIQgMgLgFgMQgGgOACgPQABgNAGgPIAMgZQAJgWAKgeIAHgbQAFgSABgJQADgTgHgkQgGgbAHgeIANg3QAIghgCgVQAAgOgEgNIgJgbQgCgJAAgFIAAgdIABgIIACgFQADgEAEABIAAAKIABgBIAAACIgCAGIAAAbIACANQACAJAGASQAEAQABAMQABAXgJAiIgNA3QgGAbAFAbQAGAlgCAUIgHAcIgIAbQgKAggKAUIgMAZQgGAQgBALQgBAOAFAMQADAKAMAMQAJAIAOAIIAYANQANAHAKAKQAKALAGAMQAOAbgCAcQAAAIgFAUQgFARACAKQABAIADAFIAIAMQAGAIADASIABAWIgBgWg");
	this.shape_14.setTransform(278.7079,418.7076,1.8875,1.8875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D110E").s().p("AhXIkQAQgWAPgGQAUgJATgFIAUgDQAMgCAIgEQALgEAGgGQAHgGADgMQACgIgDgMIgFgUIgDgUIgDgWQgEgUgIgTQgIgQgFgYQgHgoANgrQAIgeAXgvQAYgvADgfQACgPgGgaQgDgUgBgUQgBgYABgTQABgLAEgKIAJgTQAFgLAAgIQAAgJgBgLQgCgNgIgbQgNgqACgpQAAgcAXg1QAVgygFgdQgCgRgHgXIgOgmQgEgDgDgFIgCgGIAAgGQAAgEgGgOQgFgLgBgKIABgNIABgEIAAgCIADADIACABIABgBIgEgJIACAAIACAAQADABABACIAAAEIgBAIIgBAJQAAAIAFALQAGAPAAAGQAAAHABABQABACAGAFIAPAoQAGAUADAWIABAVIgEAWQgEAQgLAYQgKAWgGAQQgFASgBAWQgCAoAMApQAIAbABAOQACAMgBAKQAAAJgFAMIgKATQgDAHgBALQgBAYAAASQABAYAEAQQAFAdgCANQgEAhgYAuQgXAtgJAgQgMAqAGAnQAEAUAJAUQAJAUADAUIACAVIADAVIAFAUQADAMgCAJQgDALgIAHQgHAHgLAEQgIADgMACIgUAEQg0AMgRAcQgOAVgOALQAMgKAPgWg");
	this.shape_15.setTransform(255.8682,393.515,1.8875,1.8875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D110E").s().p("AgTBUIgBgWQAAgOAEgJIAHgJIABgFIgBgFIgCgWQAAgNACgKQABgHAIgOIAMgTQAIgOAAgGQABAGgHAPIgLAUQgHAMgBAIQgCALABALIACAbIgBAGQgCAFgFAFQgEAIgBANIgBAWIABgBIAAAAIgCADgAgRBUIAAgBIAAABIAAAAg");
	this.shape_16.setTransform(226.0414,333.1155,1.8875,1.8875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D110E").s().p("AhwCkIAEgeQABgIgCgVQgCgTACgKQADgNAIgPQAHgPAEgMQANgkAJgTQAPgcAZgQQANgJAMgFIAbgMQAYgLAZgVQAPgLAGgIQAEgGACgFIABgIQAAgDADgDIAFgCIADAKIgCAAIAAABIgBAHQgCAIgGAGQgHAJgQAMQgbAVgXALIgcALQgMAFgNAIQgaARgNAZQgJARgNAkQgFAOgHANQgJASgCAJQgDALACASQACAVgCAJIgEAdIgDATIACgTg");
	this.shape_17.setTransform(247.7127,317.9213,1.8875,1.8875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D110E").s().p("AiiDvQAJgEALgCQAQgEAEgCQAFgDAJgNIAHgIIAJgGQAEgCADgGIAEgKQAGgLAMgCQARgCADgCQAVgKAGgVQAFgcAGgOQAFgMAHgGQAIgGAMgCIAWgEQAMgDAIgDQAQgGATgRQAPgNAMgSQAZgmAHgnQAEgXgDgTQgEgTgJgUIgMgYIgVgfIgGgKIgCgGQAAgEABgEIABgCIACgBQADgBADACIACAEIAAAEIgCgBIAAAAIgBAAIgGgBIABACQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIACgCIABAAIABAFIAFAJIAMASIALATIAKATQAKAYADASQADATgEAZQgIAngbAoQgPAUgNAMQgTARgSAHQgJADgMACIgWAEQgMACgHAGQgIAGgDAKQgFANgGAcQgEALgHAIQgIAIgKAFQgEACgGABIgLABQgJACgHAKIgFAKQgDAGgEACIgJAGQgDACgEAGQgKANgEADQgFACgQADQgMADgIAEIgFACIgFABIAKgEg");
	this.shape_18.setTransform(236.6267,285.1676,1.8875,1.8875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D110E").s().p("AgGBzIgDgGIABgKIgBgBIgBgBQgBgCgDgBQgDgBgJAAIgDABIABgCQABgDgCgEIgEgGQgEgHgBgIQgBgSADgNQAFgdAVgaIARgYQAOgSADgHQAGgOAFgNIAEgPQABgFgCgCQgBgEgFAAQAEgBADAEIABAIQAAAHgDAIQgDAPgIAOQgDAJgNARIgRAYQgUAbgEAaQgDAMAAASQAAAFAEAIIAEAHQACADAAAEIALABQADAAACAEIABABIABACIgBADIAAAGIACAGIAGALg");
	this.shape_19.setTransform(264.7236,205.7388,1.8875,1.8875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0D110E").s().p("ACrDkIgHgDIgvgcIgYgOIgVgSIgKgJIgKgKIgKgJQgFgGgEgBIgCgBIAAgEIACgCQgjgwgKg4QgEgTgHgHQgJgKgPgGIgcgJQgRgGgLgHQgLgGgNgMQgHgHgRgLQgjgYgMgOQgVgZgJgbQgGgQgBgOIAAgOQABgIAEgFQgDAFgBAIQgBAFABAJQABAOAGAQQAKAcAVAWQAOARAhAUQAMAHANAKQAKALANAHQARAKAnAMQAQAGAKALQAIAJAEATQALA7AmAwIABABIAAABIAAABIAEAEIAKAKIAKAJIAKAJIAUARIAYAOIAuAbQAIAGABgEIABgBIAAgBIgCgDIgLgIIgMgHIgDgDIADgDQAFgEAHAAQAEAAAGACQAGACANgBIATgDQAHgBAHABQgCgDgHgDQgGgDgNgCIgTgDQgHABgMAFIgUAHQgEABgHgBQgGAAgFgGIgOgOIgPgOIghgaQgMgMgMgWIgJgSQgEgIgEgMIgIgoQgGgZgGgMQgGgNgYgLIgTgIQgIgFgJgHIgQgNIgSgKQgngTgYghQgIgLgNgYQgJgSgCgMQADAMAIARQAMAXAKAMQAYAfAnAUIATAJIAQAMQAMAKAFABIASAJQAaAMAIANQAHAQAFAXIAJAnQACAKAFAJIAKASQAMAWALALIAgAZIAIAGIAIAIIANAPQAEADAEAAIAJAAIATgHQANgEAHgBQAFgBARADQAKACAKAEQAHADADADQAFAGABAFIAAAFIgFgBQgHgCgLABIgUACQgOABgGgBIgKgCIAFADIAMAIQAEAFAAADIAAADIgBACIgDAEQgCADgDAAIgEgBg");
	this.shape_20.setTransform(175.5637,385.3044,1.8875,1.8875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D110E").s().p("AA6A6QgFgBgQABQgOADgJgGQgFgFgKgNQgJgKgHgDQgSgIgDgCQgIgGgGgNIgHgVIgHgVQAHANALAcQAGALAGAFQAEADAQAGQAIACADADIAHAJQALANAEACQAIAGALgDIAQgBQgEgDgFAAIgLgBQgHgBgFgCQgIgEgIgMQgGgKgGgFQgNgJgEgEQgGgHgFgMQgFgKgJgeIAIAUIAJATQAFAJAHAIQADAEANAIQAFADAJAMQAJALAGADIATACQAIABAEAEQAEACADAHIAGAIg");
	this.shape_21.setTransform(159.874,353.6891,1.8875,1.8875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0D110E").p("AgWgRQAEAFAUALQARAIAEAP");
	this.shape_22.setTransform(142.4086,335.9337,1.8896,1.8896);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0D110E").p("AgcgKQALALARAEQALACAWAD");
	this.shape_23.setTransform(115.4986,300.3975,1.8896,1.8896);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0D110E").p("Ag0gQQAHgEADAFQABADADAHQAFAFAHACQAAAAANAFQA4AUAHgN");
	this.shape_24.setTransform(112.5654,306.5404,1.8896,1.8896);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D110E").s().p("AB6CiIgkgmQgPgJgHgHQgFgDgCgJIgDgMQgDgQgLgEQgIAAgFgCIgMgHQgYgSgGgZQgCgFAAgHIgBgNQgBgKgOgJIgXgNQgKgHgGgOQgDgIgCgFQgEgFgGgEIgMgFIgKgIQgWgVACgbQgBAcAWATQAEAEAGAEIAMAFQAGADAEAGIAGANQAGANAJAHQAHAFAQAHQAGAEAFAEQAFAHABAHIABAMIACANQAHAYAWAQIALAHIANACQAIADAEAFQADAFACAIIADANQACAHAEAEQAGAFAQAKIARASQgEgGAAgHIAAgCIACAAIANgBQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIgBgDQgHgIgOgFQgQgFgIgHQgHgEgDgFQgDgFgCgJQgEgRgFgFQgFgHgQgHIgNgEQgHgDgEgFQgGgHgBgRQgCgUgCgGQgHgPgGgHQgDgFgGgEIgKgIQgGgGgIgRQgFgOgHgIQgEgEgHgEIgLgHQgKgFgHgOQgHgPAEgLQgEAMAIAOQAHANAKAFIALAHQAHADAEAFQAIAHAFAPQAIARAGAFIAKAHIAKAKQAHAKAFANQADAHABATQACARAGAGQADAEAHACIAMAFQAQAGAHAIQAEAFAGATQACAHADAFIAIAJQAHAFAQAGQAPAEAIAKIACADIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABQgDACgEABIgLACQABAGAHAHQAIALADAHIAEAMg");
	this.shape_25.setTransform(173.495,284.1354,1.8875,1.8875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0D110E").s().p("ADBKcIgJgCQgGgDgIgIIgNgLIgfgOQgNgHgQgLQgegXgMgXQgHgGgLgOQgKgNgLgHIgYgPIgZgQQgYgQgNgeQgEgLgFgRIgIgcQgIgbgbgSIgYgQQgSgMgIgCQgJgCgFAEQgEAEgBAJQAAAKAEATQADAQAFAMIACAEIgDgEQgEgMgEgQQgEgVAAgIQACgLAEgDQAFgEAJACQAJADARAKIAZAQQAcATAJAbIAIAcQAEARAFALQAMAcAYARIAZAPIAYAPQAKAFAMAPIAMANIABAAIABAAIABAAIABABIADAGIABABIgBAAIACACQAMAVAbAUQAOALAPAHIAfAPQAFADAIAIQAIAHAFADQAEACAEAAIABAAIgBgBQgDgGgHgHIgNgLQgFgFgIgFIgdgSQgPgLgMgLIgagXQgIgHgOgTQgOgSgJgHQgSgOghgfQgNgLgKgPQgGgIgDgIQgDgKACgHIABABIAAgDIgBACQgDgGgCgJIgDgPQgBgIgFgGIgIgNQgKgNgMgJQgJgIgSgIIgcgOQgRgJgLgJQgMgLgIgQQgEgKgFgVQgDgMgIgRQgIgSgIgJQgHgKgOgMIgZgVQgTgRgXggIgSgbQgMgRgFgLQgMgYgCgmIAAghQABgSAEgOQAJggAVgaQALgNAMgLQAKgJALgOQAdghAOgOQAagaAZgPIAdgPIAcgOQAMgHANgLQAQgNALgDIABgIQACgEADgCIAEgCIACADQAMASABAfQABAnACAJQACANATAcQATAZACAUQACARAAAgIACAXQADAMAFAKQAJASAcAAQAJgBAMgGQAIgDAOgIQAdgPATABQAOABAKAJQAHAHAJANQAIAPAOAcQANAWASAOQATAOAXADQAbAFATANQAHAGALALQALALAHACIACABIAEAAQAEABADADQAEAEAEAGIAEAFQgKgVgXgSQgUgPgngUIgggOQgTgJgMgJQgOgLgJgRIgHgQIgGgRIgIgPIgEgIIgCgIQgDgGgJgEQgJgDgHAAIgRgDQgKAAgHADIgPAGIgQAIQgMAGgFABQgKACgJgEQgHgDgGgKQgDgHgCgLQgCgMAAgXIgBgjQgEgqgSgVQgPgRgGgMQgDgIgBgKIAAgSQAEgjASgfQARgfAegVIAZgYIAagYQAqglAJgKQAYgXASggQAOgWADgJQACgFACgMIADgNIgDANQgCAMgCAFQgDAIgNAXQgRAegZAaQgKAMgpAkIgyAxQgdASgRAgQgRAegDAkIgBARQABAIADAIQAGAMAOAQQAUAWAEAsQABARAAASQABAbACAHQAEAXALAEQALAFAUgKIAPgIQAKgFAHgCQAJgDAJABIASACIARAEQAMAFADAHIADAJIADAHIAJAQIAMAgQAIAPAOALQAMAIASAJIAfAOQAsAXARANQAhAZAIAhIABAHIgGgDQgGgDgFgGIgGgKQgEgGgDgDIgEgCIgGgBQgHgCgOgNIgRgQQgSgNgZgEQgagDgUgQQgUgPgNgWQgOgdgIgOQgQgZgSgBQgQgBgbAOIgWAMQgNAHgMAAIgNgBQgJgCgDgCIgLgHIgIgKQgHgLgCgNQgCgIgBgQIgCgxQgCgSgRgXIgOgUQgHgMgCgMQgDgLgBgmQAAgUgGgOIAAADIgBADIgDAAQgKABgPANQgOAMgNAHIgdAPIgcAOQgUAMgdAbIgrAvQgLAOgLAKQgOANgHAKQgUAYgJAeQgGAWABAoQABAkAMAYQAFALALAQIASAaQAXAgARAQIAZAVQAPAMAIALQAHAKAJASQAIASADANIAJAeQAHAOALAKQAKAJAQAIIAdAOQATAKAJAHQAMAKAKAOIAJANQAFAHACAJIADAQQABAJAEAEIABACIgBACQgEALAMARQAIAMAOAOQAeAbAVARQAKAIAOASQAOATAIAHIAZAXQALALAPAKIAdASIAOAKIANAMIALAOIABADIAAAEQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_26.setTransform(134.802,360.0829,1.8875,1.8875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0D110E").s().p("AB4DDIgBggQgBgjgNgbQgNgagWgaQgRgTgcgaQglgggKgKQgbgbgOgXQgTgggDgeQgCgPABgSIACgUIgJARIgNAbQgDAJgMASIgGAMQgEAJACAHQgCgGADgKQACgHAEgGQAKgSADgJQAOgkALgUIAEgIIACAJQABAJgBAYQgBAPACAQQAEAdASAdQANAWAbAbQAPAOAfAcQA7A0AVAxQANAegBAiIgBAfQACAWAHAJQgIgJgDgVg");
	this.shape_27.setTransform(71.4798,387.6638,1.8875,1.8875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0D110E").s().p("AgkBBQABgGgCgOIgCgWQAAgXAMgRQAKgQAWgKIAUgJQAKgGAGgGQAHgFACgMIACgVQABgMADgJQAEgLAIgGQgIAHgDAKQgDAIAAANIgBAVQAAAGgDAFQgCAFgEAEQgGAHgLAGIgUAJQgUAJgKAQQgLAPAAAWIABAVQACAOgBAHQgDAsggAgQAeghABgrg");
	this.shape_28.setTransform(45.823,255.8704,1.8875,1.8875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0D110E").s().p("AASBSIgPgIQgOgKgJgNQgFgJgCgHIgDgQQgDgKgDgEQgEgFgHgFQgKgHgCgEQgFgIgBgIQgDgSAIgPQAKgSAQgBQgQACgHASQgHAPADAQQAAAHAFAHQADAGAJAFQAIAFAEAFQAFAHACAJIADAQQACAIAEAGQAHALAPAMQAHAFAGADQAHAEAIgBIARgBQAJgBAHADQgHgCgJABIgRADIgDAAQgHAAgGgDg");
	this.shape_29.setTransform(130.845,214.4611,1.8875,1.8875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0D110E").s().p("AhQBKQgJgFgDgKQgCgIABgKQgBAKADAIQADAJAJADQANAGAWgFQAlgKAcgTQAggZANgeQADgGACgLIAEgSQADgKAEgHQAEgKAJgCQgJADgDAJIgGASIgDASQgBALgDAHQgFAOgOARQgOAQgNAKQgNAJgTAIQgXAJgMACQgKACgIAAQgLAAgIgDg");
	this.shape_30.setTransform(126.3653,255.7692,1.8875,1.8875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0D110E").s().p("AAWBsQgCgKgCgFIgJgOIgJgOIgSgcQgHgMABgWQACgOAFgSIALgfQAGgQgDgQQgBgGgEgKIgFgQIAGAQQAFAJABAGQADAPgEATQgCALgJAVQgEAQgCAPQgBAUAGALQACAGAGAIIAJAOIAIAOIAJAPQACAGABAKIACARQgCgFgBgMg");
	this.shape_31.setTransform(74.9248,268.9884,1.8875,1.8875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0D110E").p("Ah/jrQgFAPAAAYIAAAnQgDAygCAMQgBAGgEAKQgEALgBAFQgBAHABAJQAAAGABAKQACAegDA6QgBAngCAKQAAAEgEAQQgDANAAAHQAAANAMAOQAHAIAPAOQAVAWAiAIQANAEAxAFQA3AIAqgRQAGgCAMgEQAMgFAGgDQAJgHADgOQACgSABgJQAThtgEgB");
	this.shape_32.setTransform(90.4162,445.5351,1.8896,1.8896);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0D110E").s().p("AAWBGQgDgEgCgGQgBgFAAgRIADgWIAAgLIgCgIQgEgIgJgJIgPgPQgLgJgEgIQgGgLADgKQgBALAGAJQAFAHAKAIIAQAPQAJAIAFAJQADAGAAAFIgEAhQgCANACAJQABAMAKACQgGgBgDgDg");
	this.shape_33.setTransform(298.6299,220.2205,1.8875,1.8875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0D110E").s().p("AgTDRIgagEIgYgGQg5gOgkgdQgTgQgOgYQgNgWgHgZQgHgYgBgbQgBgbAFgXQADgKAHgOIAMgWQAGgMACgLIAIgYQALgdAKgRQARgcAQgJQgeAZgUA8QgZBNgJAQQgKAyAOAvQAIAYAMAUQAPAYARANQAgAbA4APIAYAGQAQAEAJAAQAUACAbgHIAwgPQAQgEAKAAQAJABAQAHIAXAJIAYAHQAdAHAUgFQgVAGgdgGIgwgOQgQgGgHAAQgKAAgOAEIgYAIIgYAIQgYAHgTAAIgHAAg");
	this.shape_34.setTransform(283.348,208.1866,1.8875,1.8875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0D110E").s().p("Ak6ExQARglALgPQAGgHARgNIAXgRQAHgFADgFIAGgOQAEgHAHgEIALgJQAJgHAJgPIAQgZQAMgRAKgGIAbgLIAzgeQAkgQAOgOQAOgNAFgIIAIgKQACgDACgKQABgFAFgDIAIgFQADgBAFAAIAGgCIAZgNQAkgSAQgLQAcgUAMgUIAOgZQAJgRAKgIQAGgEAJgEIANgFQAFgBAHgFIAMgJQAagSAJgaIAIgcQAEgTAEgKIACgDIACACQAOAKAHgDQAIgDAGgRIAFgaQADgOAEgLQgCAGgEAUIgEAZIgFANQgDAHgGAEQgGACgIgDIgKgFIgGAaIgIAdQgEAPgKAMQgGAIgQAMIgMAJQgJAHgEABIgNAGQgJADgEADQgJAJgHAOIgPAaQgMAWgeAVQgMAHgoAWIgaAOIgJADIgGAAIgEADIgDAEIgCAHQgCAFgBACQgFAHgEAGQgJAKgMALQgQAOgjASIgnAUQgIAGgFACQgJAFgSAHQgGADgNAQIgQAZQgLAQgJAIIgMAIQgHAFgCAFIgHANQgDAGgIAFIgYARQgOAKgJAJQgLAOgSAkQgSAigPAPQAOgPARgjg");
	this.shape_35.setTransform(110.8939,282.531,1.8875,1.8875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0D110E").p("ACcibQgYAGgfgDQgVgBgigHQgJgCgSgHQgRgGgKgCQgNgCgHgCQgMgCgIgDQgLgEgDAAQgFAAgIAGQgkAYgFAbQgEAXAJASQAIAPAVAPQAJAIAPAHQAIAFARAIQAGACARAMQAIAEAGAEQAFADAFACQgBgEgDgDQgDABgDABQgIAEgMAIQgYASgBABQgHAEgTAOQgPAMgKAFQgbANgFADQgTALgHAMQgJAQAIAdQAHAYANARQALAMALAAQAJAAAPgJQAIgEAWgGQATgGAKgGQABgDAEgFQAFgFAEgB");
	this.shape_36.setTransform(29.2547,226.0742,1.8896,1.8896);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0D110E").s().p("AjnB1QAOgDANgQIATgcIATgcQAJgLAPgOQAtgnBGgiIA9gcQAkgPAdgGQAogJAcgBQATgBAPADQAUAEALAKQgMgJgTgCQgNgCgVACQgeADgkAJQgpALhSAoQhDAegwAoIgYAXQgFAFgPAWQgNATgIAIQgOAPgPACg");
	this.shape_37.setTransform(87.6307,199.8357,1.8875,1.8875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0D110E").p("AhihAQANgEAVgBIAjgBQALAAAVgCQASgBAOABQAXACALADQAVAFAFAOQAFAOgCAXQgBANgEAZQgDATgCAIQgGAPgMADQgHABgMgCQgPgDgFAAQgVABgMAF");
	this.shape_38.setTransform(332.4606,212.3453,1.8896,1.8896);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#0D110E").p("AhigYQAJgIARgGQAKgEATgGQAPgFAngUQASgKALgCQARgDAJANQAKAQAJAVQAKAWACAQQACASgBAHQgCAKgMAJQgYATgWALQgBAAgQAGQgJADgFAF");
	this.shape_39.setTransform(311.2019,177.8855,1.8896,1.8896);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0D110E").s().p("AgFAqIgBgoQgBggACgxIAJABQgEAmgBAqIgCAoQACAcAJALQgKgLgDgcg");
	this.shape_40.setTransform(237.8944,26.4941,1.8875,1.8875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0D110E").s().p("AADBHIgFgKQgEgJgDgLQgDgLgCgKIAAgWQACgcAEgPQACgJAGgLQAGgNAJAAQgIADgEAMQgDAJgBAMQgCARgBAYIAAAUQAAAHADANIADAVQADAOAEAFQgDgCgDgGg");
	this.shape_41.setTransform(331.1158,114.6395,1.8875,1.8875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0D110E").s().p("AkVDwQABgGACgHQAEgKAHgPIAbgwIA1heIAjhGQABgGgBgUIAAgPIADgNQADgOAEgNQAKgbAQgWQASgYAZgMQAbgNAbAAQAaAAAbAMQAeALAVABQALABAPgDQAMgCAJgLIAJgKIAhgZQAYgQAYgKQAMgFANgDQAQgEALADQgLgCgPAEQgPAFgKAFQgWAKgYARIgWARQgKAIgIAKQgHAIgEACQgGAFgHABQgOAEgOgBQgZgBgdgLQgagLgYAAQgaABgYAMQgWAKgRAXQgPATgKAbIgHAaIgDANIAAAMIABAOIgBAPIgGAMIgFAMIhuC7IgMAYIgEANQgBAJADAEQgEgEABgJg");
	this.shape_42.setTransform(218.7446,148.8934,1.8875,1.8875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0D110E").s().p("AECCPQgJgIgKgDQgHgDgNgCIgWgEQgbgGgQgEQgpgKgrgRQgOgCgHgCQgJgDgKgJIgfgfQgSgTgOgJQgNgHgdgDQgfgEgMgGQgIgFgJgKIgOgSQgLgPgTgOQgWgQgOgIIgpgSQgLgFgIgJIgGgKIgEgGIAAABIABAAIABAAIADgCIgJgFQADgDACAAIACAAIABABIAFAEIADAFIAGAIQAHAIAJAFIAnASQANAHAYASQAWARAKAPIANARQAIAJAIAFQANAHAbADQAgAFALAGQARAMAQARIAfAfQAIAJAJADIAWAFQAuASAlAJIArALIAVAEQANADAIADQAJADAJAJQAMAJAHgBIANgBIgNACIgBABQgIAAgKgKg");
	this.shape_43.setTransform(187.1481,205.8135,1.8875,1.8875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0D110E").s().p("AhLANIgSgGIgSgCIgTgCQgLgBgIAEQAHgFAMgBIAcABIAKAAQAIABALAEQAXAIANgDQAPgDAUgJQAVgJAQgDQARgDAXACQAaADANAAQAXABANgKQgKALgaADIgnAAQgYgBgOADQgRAEgSAHQgXALgOACIgKABQgOAAgQgIg");
	this.shape_44.setTransform(98.4365,67.5853,1.8875,1.8875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0D110E").p("AB5iHQgOAMgfAKQgjAJgOAFQgbALg8AdQgaAMgKAKQgQANgFAWQgGAZAEAgQAEAdAMAbQAKAXAOABQAOABAVgHQALgFAWgJQAVgHArgSQAngPAdgC");
	this.shape_45.setTransform(47.5109,124.7755,1.8896,1.8896);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0D110E").p("AmQuVQAKgOAOglQAHgRAUgWQAXgWAKgMQApgzBJhIQATgTgJgqQgPgwgFgTQgOgfgGgRQgMgfAMgSQAJgNAVgDQANgBAYgCQAMgDAWgIQAUgGAQABQACAFAKAJQAHAIAKAZQAPAnAEASQADAPAAAlQAAAjAFARQAJgDAGgIQACgEAGgOQAGgNAQgdQAJgQALggQABgJABgEQACgIAFgCQACgEAEgOQAFgOADgGQAPgYAkgDQAXgCAJABQATACAGANQAEAJABAQQAAAPgDAJQAKgDADgBQAYABAIABQATACANAIQAWAMgEAcQAAABgNAvQgIAfgFAfQABA4ALgQQAQAIAQARQAKAKARAVQAqAtASAtQAMAdADANQACAIgBAPQgBAQABAHQAEAaAPAIQAIAFAIgDQAEgCALgFQAQgFAngBQAvgGAQgBQAWAAAngDQAigCAaAIQAQAEAiAIQAcAJgCAsQgCAhgOAeQgCAFgNAVQgLATAAABQgNAWg/gKQgZgEggAGQglALgUAFQhZAYhEAxQg5ArgFAbQgFAXArAHQAXAEAnADQA/AUAtAZQAYAOAOAUQAMASAIAcQABAEADARQADAOADAGQADAIALAJQAGAFALAJQAMANAcAaQAXAYAIAVQAHAUgFAhQgFAoABANQACARAJAEQAFADARAHQASALAHAIQAIAJAHARQAEAMARAWQAQAVAEANQAFAQAHAcQAIAXAPAQQAaAdAZA8QAHAPAHAcQAJAgAEALQAHAWAOAqQAMAlAHAcQAEAUAEAkQAFApADAQQAJAzACAPQAGAlAAAdQAABogDAwQgEBUgOBCQgLAygjBXQgnBdgLArQgDAMgIAQQgEAIgIASQgXA3gpAcQgqAcgNAIQghATgcAHQgkAIgJACQgbAFgUgCQgTgCgdgOQgggRgOgHQgLgGgRgFQgagIgDgBQgmgSgUgFIhggXQgRgEhcgSQhCgOgqgNQgegJgOgFQgagIgTgIQgNgFhDgbQgmgOgOgHQgWgLgZgWQgcgagQgNQgJgHgPgOQgRgRgGgGQgOgMghgSQgggRgPgNQg/g3gzghQgWgPgSgVQgNgRgQgdQgSgfgsgoQg0gvgPgTQgCAAgBADQgEgFgJgIQgKgIgDgEQgFgGgHgMQgHgNgEgFQgXghgFgOQgqgLABgsQgRABgBggQADgkAAgIQgXgQgQgoQgKgXgKgrQgLguAAhCQAAgbAEg8QABgIgGgMQgIgRgBgDQgFgNgCgSQgDgWgCgLQgIhFAXg7QAIgUAOgZQARgdAIgOQAPgZAGgMQALgSAFgUQAFgQAOgTQAVgdABgDIAcgwQAcgxAOhGQACgHAThSQANg2ADgjQAFg4gChSQgBgXgJh5QgBg4gEgbQAAgCgHgUQgEgOACgIQAEgKAQgJQAPgJALAAQAAAEAHgCQANgDAEgBQAGAAANABQAMACAGgBQAtgBBSgIQAKgBAogHQAjgDAJAOQACAFAAAQQgCAWAAAAIAEAxQACAQAEAiQADAZgFASQgBADgBADQgNAngJArQgMA8ADBJQADBLACASQAGA2AQAjQAYA5ANAB");
	this.shape_46.setTransform(206.7213,269.2779,1.8896,1.8896);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.heart_MC, new cjs.Rectangle(-1.2,-1,391.3,540.7), null);


(lib.Heart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE909D").s().p("AgoCcIAAjpIhGAAIAAhOIDdAAIAABOIhGAAIAADpg");
	this.shape.setTransform(137.7,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE909D").s().p("AApCcIg6hYIgZAAIgJAAIAABYIhSAAIAAk3IBfAAQBIAAAhAOQA5AZAABIQABBKg/AYIBHBmgAgzgDIAjAAQAdAAALgFQAQgIABgZQgBgZgRgIQgLgEgcAAIgjAAg");
	this.shape_1.setTransform(108.7,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE909D").s().p("AA6CcIgIgeIhkAAIgHAeIhVAAIBbk3IBnAAIBbE3gAAfA3Igfh3IgfB3IA+AAg");
	this.shape_2.setTransform(76.825,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE909D").s().p("AhuCcIAAk3IDdAAIAABOIiLAAIAAAoIBoAAIAABJIhoAAIAAAqICLAAIAABOg");
	this.shape_3.setTransform(47.25,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE909D").s().p("AAuCcIAAh5IhbAAIAAB5IhSAAIAAk3IBSAAIAAByIBbAAIAAhyIBSAAIAAE3g");
	this.shape_4.setTransform(17.675,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Heart, new cjs.Rectangle(0,0,153.8,64), null);


(lib.Path_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AgdBUQgLgKgCggIABguQAEhWAsADQAnADgDA0QgBAbgXAxQgUAtgRAAQgGAAgFgFg");
	this.shape.setTransform(4.3332,8.8437);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0.1,0,8.6,17.7), null);


(lib.Path_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AgzAhQgIgBgPgEQgPgEgJAAQgHAAgPAEQgOAEgIAAQgYAAAGgRQAGgQASgIQAIgDALACIANABQAHAAAOgDIAVgEIBfgGIAtgHQAbgFASADQAVACAHADQAPAFgGANQgCAGgMAEQgKAEgIABQgPADgtgDQgmgCgWAJIgcAMQgQAHgMAAIgDAAg");
	this.shape.setTransform(16.1556,3.3001);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,32.4,6.6), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBBCBB").s().p("AhCCPQAIgOADgKQACgIgBgMIgCgUQgCgyAYgcQAJgJASgLQAUgMAHgGQAJgIAEgLQACgHACgRQAFgkAGgQQAMgfAWgFQAAAGgIATQgHAQACAKQABAFAFAFQAEAGABAEQAMAngxAvIgWARQgMAKgFAKQgGAPAAAPIACAcQAAAQgKATQgLASgNALQgHAFgTAFQgSAGgEAFQADgHANgTg");
	this.shape.setTransform(8.2671,16.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,16.6,33.8), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBBCBB").s().p("AhoA6IAAgJQADgQARgJIAigMQApgNAOgGQAggQAOgVIAPgcQAMgQAQABQALABAAAGQgBADgGAKQgWAggJATIgJAVIgJAWQgMAXgZARQgXAPgbAEQgMACgKAAQgpAAgDgeg");
	this.shape.setTransform(10.476,8.7851);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,21,17.6), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBBCBB").s().p("AA0BbIgbgEIgaABQgMgBgJgPQgFgIgEgOIgGgXQgDgJgIgIIgOgMQgRgTANgjQAMgkAaAMQALgKAEAAQAFAAAAAJQABALgIAFQgKAGgFAEQgSARANARIAXAeIALAcQAHAOAPAHQAEACAZAGQAXAHAAAJQgBAJgPAAIgFAAg");
	this.shape.setTransform(7.1811,9.1094);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(-0.1,0,14.6,18.2), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBBCBB").s().p("AgBA8QgDgLgLgQQgLgQgDgKQgIgXAHggQALgjACgUQAAgEgCgLQgEgWgBgEQABgMALAFQAMAGAFAUQAFAOAAASQgBALgGAZQgFAWACANQABAOATAfQAPAbgBAUQgCATgNAYIgUAoQAPgpgPg0g");
	this.shape.setTransform(3.45,15.3636);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0.1,0.1,6.800000000000001,30.599999999999998), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBBCBB").s().p("AgICJQgEgMgEgGQgEgGgHgEQgJgFgDgDQgMgNgBgeQAAgdAJgQQAFgHAQgTQAOgRAGgNQADgIAJgbQAFgRAEABQgBgIAFgPQAGgQgBgIQAVAWABAGQAFASgEAZQgDAUgTASQgXAYgFAIQgHANAJATQANAZABAHQACAUgCAUQgDAdgKAHQgDACgCAAQgEAAgDgFg");
	this.shape.setTransform(5.2253,14.233);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,10.5,28.5), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBBCBB").s().p("AAKBDQgIgMgCgSIAAgXIAAgWQgBgLgIgIQgFgGABgBQADgBgLgQQgKgQgGgGQAegFAUAWQAUAVgCAeQAAADgHATQgGAPAEAIIANAMQAHAGgIAKQgHAHgFAAQgGAAgGgIg");
	this.shape.setTransform(3.8331,7.4864);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,7.7,15), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AkNDgIADgJIABgGQgJAQgEAQIgCAUQgBANgDAGIgcghQgSgWAIAAIgCgdQgCgTABgKQACgfAYg6QAIgUAPgYIAagqQAdgwAVgQIATgQQAHgHAGgOIAUg0QANgbAUgTQAsgrA1gRQAYgIAhADIA6AFQAOAAAYgEIAlgFQAOgBAhADQAfADAQgCIALgEIALgEQAIgCALACIAUADQgHAOgpAGQguAHgJAIIgUASQgMALgJAGQgbASgPAHQgcAPgTgCQgPgBgsgQQgjgNgbAGQgTAEgWANQgNAJgWASQgYAUgIAlQgEAVgEAuQgGAqgbAqQgNASgTAkQgVAmgLARQgQAZgKAXIgFBEQgQgOASgtg");
	this.shape.setTransform(32.6857,28.3375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,65.4,56.7), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AgQBEQgDgRgBgoQgCglADgcQAFg4ATAGQAFgDADACIAJAGQgIAeAABDIgCAjIgBAMIACAMQAGAqgOAHIgFABQgLAAgFgng");
	this.shape.setTransform(2.1719,10.6786);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,4.4,21.4), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AiFChQgQgOAEgfQAOAJAQgHIAdgOIAbgMQARgHAJgIQAmghAxhUQAKgSAEgcQAEgegHgRQAFgBAEgFQgHgGgEgCQAQgTAqgDQAZgBABAIQAAAGgPATQgKAMgRAfQguBXgIAQQgTArgRAdQgEAHgGAVQgFATgFAIIgGAHQgFAFgPACIgXADQgXAKgMAEQgLADgIAAQgPAAgKgJg");
	this.shape.setTransform(14.6678,16.9592);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,29.4,34), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AABAcQgIgVgKgKQgHgIgcgLQgYgKgCgLQgCAEgCAAQgPgNAZgHQAYgGAMAFQAQAHAPATQASAXAJAHQATAMAMAGQATAIARgCQgCAHglARQgkARABACIgOgjg");
	this.shape.setTransform(8.8472,6.2114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,-0.1,17.8,12.6), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AArBFQgHgDgNgYQgPgdgDgEIgoghQgegaAHgCQgFAAgDgBQgHgJAHgDQADgCAMgBQAOgBAKAGQAJAEAKAMQAGAIAXAmQARAbASAMIALAIQAFAGgCAGQgCAFgKAEQgHACgFAAIgDAAg");
	this.shape.setTransform(7.0766,6.8898);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,14.2,13.8), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AIeG4Ig5gPQglgIhEgeQhEgfglgHIgdgIQgSgFgLgBQgPgBgUgFIgkgJQgNgDgqgEQgjgEgUgHQhEgXhqgpQgVgIgdgOIgxgYQgbgNgNgKQgRgNgLgWQgMgVgVgNQgagMgPgKQgVgOglgfQgnghgTgMQgrgdgegcQgNgLgSghIgPgcQgIgNgMgIQgmgcgjgeQgWgSgWgbIgmg0IgZghQgPgXACgOIAJAMIAAgEQAAgLAGgMQAKgVAggJQAQgFAmgEQAOgCAJAHQAGADAMAMQAoAkAQAfQAOAXAKAnQAEAOAGAFIASANQAZAQAlAjQAtAqAPAMQANAKAWAOIAkAWIAyAkQAfAXATAMQAkAXBIAnQBJApAjAWIAqAeQAaATARAJQAVALAlANQArAPAPAHQB+A4BwAcQA+AQA4AEQBFAFAwgQQAdgKARgEQAXgFAYgCQAcgCAPgEQAIgCAcgQQAZgNALAKQAKAIgKARIgSAXQgGAJgKAYQgJAWgJAKQgKALgaAXQgPANgaAMQgSAKgcAIIgxANQgNAEgQAAQgOAAgPgDg");
	this.shape.setTransform(82.8496,44.2424);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,165.7,88.5), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AjaF/QAGgKAWgcQANgRAQgcQAXgoAyggQAXgOBGghQApgTAcgjQAcgiAKgsQAWhdAEh6QABgYgKgxQgKgwABgZQABgOAHgRIALgfQAFgNADgFQAFgGALgDIAPAAQAIABAGgDQAFgCAIgJQAJgIAFgDQAWB5gcCBQgKAvgEAXQgFAlAAAiIAAA7QAAAkACAXQACASACAHQAEANAJAJQAAAJALASQAKASgCAJQgCALgJAAIgUAAQgnAAgTACQgiABgYAIQgvAOhMAgQgjAQgmAhIglAaQgXAQgKAQQgGALgNAbQgNAXgRAFQgDgSAPgZg");
	this.shape.setTransform(23.1923,42.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,46.4,85.2), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AhfA8QgwgqBBgYQAigOBFgMQAkgIAYgNIASgKQAHgBAEANQACAHAAARQAAATgDAFQgEAEgRABIgYACQglAIgdAOQgZANgeANQgeAMgIAAQgFAAABgEg");
	this.shape.setTransform(11.6638,6.3794);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0.1,0,23.2,12.8), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("Ah9ExQgJgCgQgIQgOgIgKgBQgdgEgogPQgrgSgXgIQgGgCgUgCQgRgDgIgEQgNgHgDgLQgEgMAMgIQAHgEAPgDIAXgDQAigKAhgZQAWgSAigiQAmglASgTQAeghARgdQAFgKAHgTIAMgcQAFgKALgNIATgWQAmgvA1geQBEgnATgKQA0gZApgJIA3gKQAkgFATgEIAUAhQAMATADANQgEAAgIgCIgMgDQgJgBgPAEIgZAGIg7AKQgkAGgXAJQhGAYg9AlIggAVQgSAOgHAOQgEAIAAAHIABAPQAAANgGAIIgQARQgWAXgPAnIgZBEQgGAOgLAVQgIASACAUQACASAJAaIAFAMQADAHAAAFQABACgDADIgCAGQADAiAVAMQgBAEgEABQgJgGgPAFQgMAFgIAAIgEAAg");
	this.shape.setTransform(37.7855,30.5235);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,75.6,61.1), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AkwEXQgMgFAHgwQACgPALgbIARgkQAMgXAFgNQAJgXAZghQAegnAIgPQATghAEg0QACgeAQgbQAPgaAZgSQAegXAYgBQAMgBAPAKQARAKAIACQAVAFAdACQAfABATgEQAMgDAQgTQASgWAIgEQAqgYA4gNQAIgCAZgHQAWgEAIAMQgEAKghALQgjAKgIAEQgQAHgaAPIgpAYQg9AfgzAdQghARgPAJQgIAFgXAJQgUAHgLAIQgXARgfAjQgIAJgJAQIgPAbIgUAYQgNAPgFAKIgTAdQgMARgFAMQgGAOgBAVIgBAkIAAAfQAAAPgCAJQgDANgIABIgWgCIgOACIgLABIgDAAg");
	this.shape.setTransform(31.2608,27.9167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,62.5,55.9), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AgUB7QgHgBgPAAQgPABgIgDIgcgMQgQgIgKgJQgLgKgOgSQgTgZAKgFQAEgCAHAIQAHAJAEAAIAIAAIAHgDQAMgCAYACQA5gEAlgeQAVgPAPgWQAQgZACgYQABgKgDgSQgCgSgEgFQARADAHAGQAJAGAPAPQAMANASAMQAQAKADAKQACAHgDAPIgEAWIgDAOIgEAPQgDAKABAVIgCAZQgDAQgIAGQgTAOgOAEQgGACgWABQgXABgXAEIgQABQgNAAgOgEg");
	this.shape.setTransform(15.7288,12.7029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,31.5,25.4), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AAMCSIgQgFQgKgKAMgmQANgoAAgJQAGg+gOg1QgFgTgWgNIgqgTQAHgNAbgJQAbgIAMAFIADABQARAJANAaQAKATAFAZQAPA+gDA8QgDAogDAQQgJAmgUABIgUgEg");
	this.shape.setTransform(6.7331,14.9574);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,13.5,30), null);


(lib.Path_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AggCzQgmgIgogPQhJgqAUgJQAHgDAOAAQARAAAFgBIAmgKQA6gPAmgTQAbgNALgUQAJgOAHgiIAJgeQAEgSABgOQAAgKgCgUIgCgeQAAglAOACIABAAIAQALIAPAKQAeAOAIANQAIAOgCAfQgCAWAAArQAAARgEAUIgHAlQgCALAHAaQAFAWgEAMQgJAdgtANQgNADgYADIglAGQgUAFgNABIgIAAQgMAAgMgDg");
	this.shape.setTransform(16.7561,18.2175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(-0.1,0,33.7,36.5), null);


(lib.Path_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AAWBDQgXgGgJgLQgUgYgOgaQgTgjAIgUQADgJAHgDQAPgIAeAhQAVAXANAUIARAeQALAXgFAIQgFAIgMAAQgIAAgKgDg");
	this.shape.setTransform(5.822,6.9462);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,11.7,14), null);


(lib.Path_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AgPArQgIgXgDgYQgEgnAIgQQAFgKAIgBQAJgBALAJQAKAJACANIADAYQADAhAAAMQgBAhgOAHQgEACgDAAQgMAAgKgcg");
	this.shape.setTransform(2.8974,7.0889);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0.1,0,5.7,14.2), null);


(lib.Path_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AgPAsQgMgfgBgVQgBgfAUgTQAGgGAFAAQAMAAAIAYQAGATABATQABAcgOAaQgHANgHAAQgIAAgJgVg");
	this.shape.setTransform(2.9047,6.4946);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,5.8,13), null);


(lib.Path_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AgKA5QgNgCgCgZQgCgTAEgOQAEgPANgSQANgUAKAAQAKgBAAAZQAAAbgHAaQgKAkgRAAIgDAAg");
	this.shape.setTransform(2.6942,5.7088);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,5.4,11.4), null);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AktDcQgKgCgHgTQgFgWgDgGQgPgbgGgkQgKgxAFhPQABgQAGgTIALgiIAFgXQACgOAHgHQAEgFAKgGIARgJQAugiAygRQBSgdBrAZQAvALAqATQAOAHAaAQQAbARAOAHIA0AfQAhATAWAGIABABQAMADAfABQAcADAKAQQgaAAgnAGIhBAKQgfADgagDQgagEgegLQgVgJggAAQglABgSAAQg4gBgkAGQgxAIgmAXQgpAXgUAnQgQAhgEA0QgDAigQAkQgGAMgDAFQgHAJgIAAIgCgBg");
	this.shape.setTransform(35.45,22.019);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,70.9,44.1), null);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("ACjBBQgKgDgjgRIgagJIgagJQgKgEgRgLQgSgLgJgDQg1gWhXgHQgKAAgZAEQgYAEgLgCIgGgBQABgpBXgBQA2gBA+ANQA/AMAqAQIAaAMIAZAMIAVAFQANADAHAFQgDAJAGAQQAGARgCAGQgCAMgQAAQgJAAgOgEg");
	this.shape.setTransform(20.4661,6.9158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,41,13.9), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("ABXAcIgbgHIgxgHQgngKgYgEQgtgGgRAPQADABgKgBQAEgDAAgKQAAgLADgEQAKgLAeABQAOABAbAFQAhAGAqAFIAcAAQATgBAJADIAIACIAEAIQAJAMACAEQADAKgKADIgKABQgHAAgKgCg");
	this.shape.setTransform(12.1688,3.0353);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,24.4,6.1), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("Ak4HFQgWgFAOgbQAJgRARgTQAJgJAKgQIAQgaIAOgQQAIgKADgIQAIgVAHgnQAHgsAFgRQAJgdAogiQArgmAMgXQAUgoAThZQAShXAWgrQAthZBnhIQAUgOAngRQAsgUAQgJIAUgMQARgJAMgEQAZgIAIAPQAHAOgdAWQgUAPgVAJQgiAQgpAeIhGA2Qg9AvgWBEQgnB7AMCZQACAOAIAhQAIAeABASQAAAPgGAmQgFAgAEAUQAFAZgKAFQgKAFgGgbQgEgOABgZQAAgggBgIQgCgYgNgSQgLgPgWgPQgVgNgIgCQgPgDgNANQgOAPgNAbIgTAuQgDAIgFAVQgEASgFAKQgQAegbAiQgiAtgHAIQgcAggUAAIgGgBg");
	this.shape.setTransform(32.6157,45.3582);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,65.3,90.7), null);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AAbAiQgGAAgKgEQgVgIgSgOQgWgPADgMQAFgZAzAUQAVAJANAYQAPAZgcAAIgDAAg");
	this.shape.setTransform(4.8539,3.4172);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0.1,9.7,6.7), null);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("Ag5AWQgDgTAYgMQAVgLAcgBQASgBAMAFQANAFACAKQACANgbAFQhLAGgNAAIgCAAg");
	this.shape.setTransform(5.8127,2.2346);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,11.7,4.5), null);


(lib.Path_17_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("Ak/G3QgPgLgIgjQgHgcACgYQAFgzARguIAehNQAOgugFgkQgCgNgJgSIgPgeQgEgMgGgVIgLgiIgZhJQgLgpADgkQAEg3Aig0QAegvAwgjQA7gsBbgMQA5gHBoAEQBYADBXAnIAxAVQAaANASARQAaAZACATQABAGAAAPQgBAMADAJQABAEAGAHQADAEgHADQgJAEgUgRQgWgSgFgEQgggYgRgIQhNgkgygPQhZgahbAaQhhAbg3BHQgLAPgFAXIgGApQgHAqAAAcQgBAjAJAjQADANAYA4QASAqgCAdQgCAbgJAiIgRA8QgEATgNAcIgVAuQgRArACAaQABATgEAJQgDAKgQANQgNAMgEABQgDACgEAAQgGAAgHgFg");
	this.shape_1.setTransform(36.7719,44.3864);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_1, new cjs.Rectangle(0,0,73.6,88.8), null);


(lib.Path_16_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AgUB+QgWgIgBgNQAAgHALgXQANgbAGgjIAIg/QADgaAIgVQANgeATAAQAIgGgEAWIgHAcQgGAcgCAqQAAALgFAUQgEAVgBAKQAAAFAHAfQAEAUgJANQgJALgNAAQgIAAgJgDg");
	this.shape_1.setTransform(4.3656,12.9111);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_1, new cjs.Rectangle(0,0,8.8,25.9), null);


(lib.Path_15_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AhGBSQgJgXARglQAMgaAVgZQAigkAOgWIAJgOQAFgJAFgFIACABIAEABIAMAAQAIAAAEADIABAAQADACABADQAFAOglA1QgLAQgFAQQgEANgDAXIgBAoQgBAagHANQgSAHgOAAQgjAAgMgig");
	this.shape_1.setTransform(7.4103,11.5568);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_1, new cjs.Rectangle(0,0,14.8,23.1), null);


(lib.Path_14_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("ABhBSQgagaghgCQgMAAgeAMQghANAAAKIgBghQgBgSgHgQQgLgWggglQgFgGgUgNQgSgMgEgIQgHgNAEgQQADgOALgLIAAAFQAHgEAKAHIAcAbQAFAFA0BHQAjAvAjAHQA2AJASAOQANAIAHAaQAGAYgFAPQgcgigPgPg");
	this.shape_1.setTransform(14.1987,13.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_1, new cjs.Rectangle(0,0,28.4,26.3), null);


(lib.Path_13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AANBJQghgZgJgFQgDADgFgGQgEgHgBgHQgBgKAHgGIAPgIIAVgPQAKgJAHgNQAEgHAEgOQAEgOADgHQgBAYAGAsQAGAvAAAUQAAAUgNAAQgHAAgKgFg");
	this.shape_1.setTransform(4.3232,7.8253);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,8.7,15.7), null);


(lib.Path_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AgRAfIgOgOIgGgDQgggRgCgJIACgBIgGgHQAFgNAYAEIAbAFIBEgPIAbgMIgNAMIgRAWQgMAPgGALQgHAOgLAdQgKgDgRgSg");
	this.shape_1.setTransform(7.575,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(0,0,15.2,10.4), null);


(lib.Path_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AAVBIQgMgUgJgJIgRgOQgLgJgFgIQgJgNgOgeQgPgggIgNQAGgBAJAAIARABIAYATQADAEADAIIAGANQAJAOARANIAfATIATAJQANAHABAGQABAFgMAOQgLAMgGAEQgJAHgHAAQgIAAgGgGg");
	this.shape_1.setTransform(7.951,7.7876);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,15.9,15.6), null);


(lib.Path_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AArBFIgQgaQgHgNgUgQQgZgSgFgHIghglQgQgSgSgGIATAFQARAEAKAGQAIAEAPAKIAYAPQAJAFASAOQARAOAKAFQAJAFAOAFIAZAGQgGAbgZAPQgJAFgGAAQgFAAgEgEg");
	this.shape_1.setTransform(10.5,7.5257);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0.8,0.2,19.5,14.700000000000001), null);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE908E").s().p("AAuLlQgngBgdgOQgPgHgKgZQgJgdgGgMQgeg+gOg3QgDgLgEgjIgFgcQgDgQABgNQAGgwgDgZIgBgcQAAgSgCgKIgGgNQgCgFAKgDQgXgugGgiQgBgHgGgTQgFgRgBgKQAAgKACgXQACgVgCgMQgCgOgMgTQgJgRgIgXIgNgpIgIgaQgFgPgGgKIgOgYQgIgOgDgLQgQg/ALg2IAEgXQACgOAGgIIAGgIIAFgIQAGgUAFgHIAKgOQAFgIACgIQAGgXALgTQAVgoAGgeQADgPgDgaQgFggAAgIIgCghQgBgTAFgMIANgjQAIgUAJgNQAJgPAPgMIAVgRQAOgJALAFQAEADAEAGIAGAKQAGAHAGADIAPAFQAOADAOALQAPAMANAdIAUAuQAVArAQAPIAaAXQAQANAHAMQAJAQADAMQADALAAATIABAbQAAAOgDANQgGAbgSAPQgHAGgTAIQgRAIgHAHQgFAGgEAOQgDANABAHQABASALAZIASAqIAZAzQAIASAUA2QAFALADATQAEAWACAIQAMAmADAQIAFAWIAEAWQAAACgCAMQgCAHAEAFQACANAAAZIABAlQABAFgCAMQgBAKABAGQACAQAJAJQAFAGAQAKQALAGAGANQAHAPgEALQgCAGgOAPQgLANgHAVIgGAPQgCAIABAJIABARQABANADAEQAFAHAKAGQAMAIAEADQADADAMAaQgSAEgFAmIgGAsQgDAbgEARQgKArgSAcQgNAUgUAPQgXARgVAAQgnACgXAAIgIAAg");
	this.shape_1.setTransform(25.638,74.0749);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,51.3,148.2), null);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE908E").s().p("AHtMrIgZgEQgkgEgWgJIg3gVQgOgFgSgNIgdgUQgMgHgUgGIghgKQgMgEgOgIIgYgPQgdgRgQgHQgagLgXgCIgRAAQgLgBgHgBQgGgCgKgHQgKgHgEgGQgDgDgGgNQgEgJgHgEQgPgJgZgBIgqABQgRANgbgDQgegGgOgBQgYgBgggOIgWgHQgNgFgHgGQgmgggdgoQgIgLgTgQQgUgRgIgKIgngtIgogtQgYgegMgaQgNgfgFgZQgBgGAAgLIAAgQQgFgggsALQgXAHgHAAQgOAAgDgPQgEgXgBgkIgBg8QgCgoACg0QABgUgGggIgJg0IgHhCIgGgeQgEgRAEgNQACgJAEgbQAEgWAEgNQAbhJBBhEQAaggAOgOQAegbANgQQALgOALgaQADgKAIgNIAMgWIAehLQASguAWgWQARgRAeASQAPAJALATQAHAMAIAXIADAJQADAKAAANIAAAYQAAAPAIAYIAMAmIAGAcQAEAQADALQACAGAIANQAHAMACAIQACAFAAAJIACAPIAOAtQAIAbACAUIAFApQACAXgJATIgIANIAJgKQgCACARAKQAEACAJAAQAJgBAEACQAFADAFAKQAFALAHADQASAHAdgDQALgBAwAAQAkAAAWgFIAVgGQANgEAFgIQALgSAJAAIAHAAQACAAAEgDIAKgOQAEgGADgPQALgtANgaQAIgOABAPIABAXQAAAJAEANIAHAWQAEANAIANIASAdIAIASQAGALAFAGQAGAGAPAGQAEADABAFIAEAKQADAEAIAEIALAHIAIAIQAFAFAEACQAHAEAHgBQAEAAABgCIACgDQAHgJAHgEQAPgIAXgCQAOgCAjgUQANgHAGgBQASgDAIgGIAagPQAPgFAHAPQADAGACAKIACARQAFAVAAAKQAAAFAEAIQAFAIgBAGIgCAPQgCAJABAGQABAKAIARQAJARACAJQAFAaAFA1QAFAdgGA+QAAAHgEAOQgEANAAAHQgBBAAWAWIAPAPQAHAJAAAKQAAAMgPAaQgKAZgBAWQgCAmADAVQAFAfARAVQASAWAFAYQACALgCATQgCAVABAJQABALAMARIAOAhQAHASACAQQAGApgKApQgKAuhKAmQgLAFgMACIgYAAIgEAAQgKAAgMgCg");
	this.shape_1.setTransform(65.5883,81.3721);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0.1,131.2,162.6), null);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AhtEfQgPgNgGgEQgGgEgJgNQgIgNgIgDQgFgCgFgGQgIgIgHgPIgMgZIgRgaQgJgOAAgPQAAgHADgLIAFgRIAGgcIAFgdIADgZQACgPACgJQAFgUAKgfIARgyIAShAQAFgTALgSQAIgNASgMIAegTQAhgWAagCIAagEIAKAAIAJABIATgDIASgDQAHAAAJACIAOAEQAuAKAdAPQAYANAQAlQAPAkAAA2IgCAWQgBAOAAAIIACATQABAMgBAHQAAAGgDAIIgFANQgKAfgIAOQgFAKgFAVQgCAMgNASQgOAVgDAKQgFARgPAgQgDAFAAAOQAAAOgDAFQgEAFgKgDIgQgGQgHAAgQAKIgNAJQgIAGgHACIgRAEIgUAHQgJABgGAFQgTAOgPADQgOAAgHADQgFADgJAIQgIAIgGADQgDADgEAAQgIAAgIgIg");
	this.shape_1.setTransform(22.475,29.4517);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,45,58.9), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("ABiCvQgJgLgDgSIgCggQgBgMABgqQAAghgDgUQgGgdgYgSQgLgIgOgEIgagHQgSgFgYgBIgqgBQglAEgTgDQgFgBgHgEIgLgFIgZAHQgBgcAPgbQANgYAZgTQANgKAagJQAKgEABgDQABgBALgCIANgDQAGgDAKgIQAIgDAOgCIAVgCQAQgCAjAFQARADARALQAFACAIACQAJACAEACIAVAMQAeAOAHAVQATA6ADA4IgBAbIgCAaIgDAiQgCASgGAOQgPAogMASQgPAXgEARIgGATQgFAMgIAAQgBgdgLgOg");
	this.shape_1.setTransform(18.9052,21.8483);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0.1,37.8,43.6), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE908E").s().p("ACHCsQgIgCgJgJIgOgQQgigrgmAHQgRADgVAJIglAPQgQAHgVACIgmADIgaAIQgRAFgIgDQgQgHAXgVIAvgqQAZgVASgpQASguALgWIAVglQANgWAFgRQAGgZAEgIQAKgUAPgBQAJAAALAHIATANIARAKQAHAGADAKQATA5AKAtQACAIAAAPIABAVQABAOASAkQAGAOAJAnIAJAYQAGAPgCAKQgEAAgHgDQgHgCgFABIgIADIgHACIgDgBg");
	this.shape_1.setTransform(17.6836,17.2651);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0.1,0,35.3,34.6), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("Ah4A5QgOgNBMg1QAngbAUgKQAjgRAiADQASACAQAHQAWAKgDAPQgCAIgNAFIgUAHQgOAEguAHQgkAHgWAIIgsAcQgVANgNAAQgHAAgFgEg");
	this.shape_1.setTransform(12.3397,6.1235);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0.1,0,24.599999999999998,12.3), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE908E").s().p("AE5C0QgpgGgOgFQgIgCgQgLQgOgJgKgDIglgJQgVgGgOgKQgQgLgVgIQgTgFgIgEIgKgJIgJgJQgVgOgVgHIgNgEQgIgBgFgCIgLgHIgMgIIgRgLQgLgHgHgBQgEgBgGABIgLAAQgFgBgIgDIgNgEQgEgBgSADQgTACABADIgOgjQgMgZgNgBQgXgCgrAGQgxAGgTAAQgRgBgSgEQgXgGgJgKIAAAAQgIABgIgFQgGgDgPgPQgsgYADgDQAIgJAUACIAeABQASgDAhgMQAegIANgIQAvgdBIgDQBDgEA6ASQAXAHA3AbQAwAYAeAGQApAJBJABQBUABAeAEQAJABAPAIQAQAJAHABQAJACAOgGQALgFAIgIIAWgbQANgSAOgEQABAIgCAcQgBAVAHAPIAPAXQAIAOADALQAIAkgJAqQgNA6gbATQg5ApgvAAIgPgCg");
	this.shape_1.setTransform(47.7187,18.1542);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,95.4,36.3), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE908E").s().p("AgiClQgXgBgIgFQgPgIgNgXIgUgmQgqhWgGgxQgJglgDgUQgEgjARgTQAUgXAWAeQAKAPANAhQARAqAvApQAcAWAqgEQAVgBA2gQIAagKQATgGAGAFQAVAOgZBBQgOAogOAVQgVAfgfAKQgeAKgZAAIgeADIgPABQgIAAgHgCg");
	this.shape_1.setTransform(17.4699,16.6747);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,35,33.4), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE908E").s().p("AAxC4IgEgtQgDgZgNgQQgNgPgNgGQgNgHgSADIgtAIQgdAFgQgIQgLgFgHgSQgKgXgDgEIgKgOQgDgFAGACQABgPgDgfQgEggAAgPQABgUAIgZQAIgYAMgSQAagrAZgJQARgGAOAQQAWAYAEACQAEADAMACQAJACAFAEQAMALALAOQAGAHAFAOIAJAWQAHAOAOAUIASAaQAKAPAIAJIAWAWQAMANAGAMQARAjABAfQABAlgXAaQgPARgUAPQgRANgFAHIgDAJQgCAFgCACQgEACgDAAQgMAAgJgog");
	this.shape_1.setTransform(16.2993,22.3788);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,32.6,44.8), null);


(lib.Path_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE908E").s().p("AhdCbQgEgLAAgQQABgMgDgSIgFgfQgBgUACgoQADgogCgUQgDgbgIgWQgNgmAKgSQAMgUAiAVQAQAKAaAYQAbAYANAKQAQAJASADQAHABANgCQAOgCAGAAQAEABAPAHQAPAHACAAQgtAOgmAxQgTAXgjBCIgPAeQgNAZgEAFQgNAUgNACIgDAAQgLAAgGgOg");
	this.shape_1.setTransform(12.1453,16.8747);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,24.3,33.8), null);


(lib.Path_24_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AAYAVIgUgHQgJgEgLAAQgLAAgWgDQgWgCgLAAQgVACgMAAQgVAAgJgKQAMgIATgDIAhgEQANgDAXgBQAYAAALgCQgCADAjABIAvABQAdACAvAMQgTAQgnAJQgVAFgRAAQgPAAgLgEg");
	this.shape_1.setTransform(14.575,2.5079);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_1, new cjs.Rectangle(0,0,29.2,5), null);


(lib.Path_23_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AA2AZQhAAAgtgJQgfgGgRgFQgcgIgPgOQALgGARgBQAOgBAlABQAaABAhgBQAWAAAfACIA2AEQATABAOAEQAYAHgNALQgEAEgPAFIgVAIQgKAEgOAAIgZgBg");
	this.shape_1.setTransform(14.739,2.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_1, new cjs.Rectangle(0,0.1,29.5,5.1000000000000005), null);


(lib.Path_22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AghAmQgDgOAOgZQAPgbANgDQAhgcgFAdQgEAVgYAaIgUAWQgHAHgFAAQgFAAgCgIg");
	this.shape_1.setTransform(3.4298,4.6187);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_1, new cjs.Rectangle(0,0.1,6.9,9.1), null);


(lib.Path_21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AgMAgQgFhHAZgPIAAAAQAEgBABA4IABAcQgBATgKAGQgDABgBAAQgJAAgCgXg");
	this.shape_1.setTransform(1.3663,5.5436);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_1, new cjs.Rectangle(0,0,2.8,11.1), null);


(lib.Path_20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AAAAdQgdgjgIgOQgVgmAkADIgCgBQAMgBAOAWIASAiIASAcQANAWgIAGQgDACgEAAQgNAAgXgcg");
	this.shape_1.setTransform(4.5809,5.9323);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_1, new cjs.Rectangle(0,0.2,9.2,11.5), null);


(lib.Path_19_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("ACOD2QgRgMgEAAQgbgEgtACIhHADIgxgBQgcAAgTAGQgVAGgLgBQgRgCgEgSQgFgUAXgUIAngcQAOgJAhgRQAfgQAPgMQA8guAMhkQAIg9gOhDIgKgpQgGgYACgQQAmAdAEAEQALALAbAiQAQAUAHAeQAEAQAEAnIAEAuQACAbADASIAIAsQAFAaAAARQAAAQAEAcQAFAdAAAOIAAAfQgBAWgJAEIgDAAQgHAAgLgHg");
	this.shape_1.setTransform(17.3304,25.326);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_1, new cjs.Rectangle(0,0,34.7,50.7), null);


(lib.Path_18_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AjsHsQAFgnALgoQAIgfAQgqIAchHIAVhAQANgmANgXQAJgQAVgdQAVgdAJgQIAshNIArhOQAUgkAMg+QAFgZALgpIAShCQAZhsAQgwIAKgeQAJgUANgCIgBADIAJgKQAMgNALACQADAHgCAMQgDAPABAFIAEAaIADAaQABASgIAeQgIAigBANQgCAbAGAoIAJBDQAEApABBAQAAAqAFAPQADAJAOAZQALAUABAPQgFgBgSACIgNAAIgMgBQhOACgvAfQgzAjgtA5QgdAhgTAfIglA8QgTAhgMAdQgKAZgWAwQgSArgIAgQgDAPgEAmQgEAigFASQgWgDAHg/g");
	this.shape_1.setTransform(23.814,55.817);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_1, new cjs.Rectangle(0,0,47.7,111.7), null);


(lib.Path_17_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("AgrBFQgQgJgqgeIgagTQgPgOAFgNIAAABQgDgRASgKQATgLAiAFQATACAjAIQAwAGAygWQAJgEATgLQARgIAMgBQgHAKgQAMIgZAUQgkAigMAPIgVAXIgTAYQgLARgJACIgBAAQgIAAgSgKg");
	this.shape_2.setTransform(13.9481,7.8792);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_2, new cjs.Rectangle(0,0,27.9,15.8), null);


(lib.Path_16_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("AhjEhQgEgBgCgRIgBgUQgCgNgHgdQgMgxgYgaQgNgOgTgKQgTgKgTgEQgagFgaAGQgKADgMAKQgOAMgHADQgkAUgPATIgNATQgHAKgKACQgGgQAEgVQAHgZACgNQACgOACgaQABgbACgNQAOhcAnhYQAohaBOgtQAQgKALgCQAKgCAMAEIAdALIAKAEQAEAAADgFQAGAFAIAEIARADQASAEAMAEIAAACIgsgLQAKAEALADIAXAFQAAAbgOAyQgHAcglAgIg7AzQgaAdgHAYIgGAUQgDARABADQADALAeAIQAlAIA0gIIBXgRQCWgeB4gsQAXgIA0gMQAggIANAGQALAGAEAQQADAOgEANQgEAMgIADIgWADIgUAIQgOAGgHABQgTAFghAFIgzAIQgYAEg5AUQgQAGgVANIgkAWQg1AegfAmIgRAWQgFAGgMAIQgHAHgGANIgIAWIgKAaQgIARgIAAIgBAAg");
	this.shape_2.setTransform(40.1767,28.8943);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_2, new cjs.Rectangle(0.1,0.1,80.2,57.699999999999996), null);


(lib.Path_15_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AhVAFQAFgcAKgGQAHgEARABIAZACQAnAAAQgDQAHgBAXgIQAUgEAEAJQAFAJgOAiQgOABgYgBIgnAAQgTABgeALQgjANgFANQgDgOAFgZg");
	this.shape_2.setTransform(8.9351,4.4027);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_2, new cjs.Rectangle(0,0,17.9,8.8), null);


(lib.Path_14_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AgCAYQgjgFAGgOQgPADgEgIQgFgHALgJQAMgKARABQAIABAVAGIAYABQAMABACAKQACAGgEAIIgGAQQgHACgMAAQgMAAgPgCg");
	this.shape_2.setTransform(5.2717,2.6402);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_2, new cjs.Rectangle(0,0.1,10.6,5.2), null);


(lib.Path_13_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AgrADIgIgkQgFgWAGgGQgBABgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAUgGANAPQADAFAPAcQANAZAUAKIAOAFQAJACAEADQgqALgxAbQgFgTgDgqg");
	this.shape_2.setTransform(5.575,6.3663);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_2, new cjs.Rectangle(0,0,11.2,12.8), null);


(lib.Path_12_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AAxBIIgIgGIgSgRIgRgRQgGgFgagTQgUgNgJgNIgMgQQgIgMABgCQgNAAAIgMQAJgLAIgBQAPAWAlAYQAeAVAfAKIAQAEQALACADAEQAEAEgGAKIgLAQQgFAYgFADIgDABQgDAAgDgBg");
	this.shape_2.setTransform(8.2582,7.3442);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_2, new cjs.Rectangle(0,0,16.6,14.7), null);


(lib.Path_11_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AlRF/QgKgBgEgEIgJgKQgYgSgLgMQgFgGgagVIAAgBIgHgFQgCgDACgLQADgMALgSIARgdQALgXAHgeIAKg4QALhIALguQAQhBAWgwQA2hzBehIQBjhMB4gKQA5gFBCAVQBBAVAuAkQARANAQAVIAcAnQAMAQAgAGQAhAHAKAKQgIAIgSgBIgegDQgTAAgbgFIgugIIhDgJIgugGQgbgGgOgMQgfgagrgCQgrgCghAXQhPA0gqBmQgYA9gaCDQgIArAABGQAAAWgNAXQgHANgTAaIgOAYQgIAPgHAIQgNAQgUALQgTALgRAAIgEAAg");
	this.shape_2.setTransform(43.5429,38.2853);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_2, new cjs.Rectangle(0.1,0,87,76.6), null);


(lib.Path_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("ABQMKQgegBgMgfQgHgRgEgpQgHhZgUhDIgRg4IgUg3QgIgVgYgcQgdgegLgPQgRgWgDgnQgBgtgDgXQgcjChfi3QgihDgNgmQgGgRgHgfQgIghgFgPQgIgaABgWQAAgKAEgMIABgMIAAgLIAFgTQAGgQAAgJQgBgKgJgOQgPgZgRgLIgHgFIgGgEQgDgCgDgLQgCgJAFgOIAJgWIAKgXQAQgoAKgQQARggAVgQQAngdA1BhQANAYAJAYIAIAaIADANIAAAIQABAFgBACQgBAEgHAIIgHAMIgHATQgFANACAFIAGAKIAHANQAGAKAEAEIAJAJIAGAJQAIAKAGgCQAGgCAHgLQAKgQAEgOQAFgOABgTIACghIABgEIABgcQACgRADgLQATg3A1gcQA0gdAcgHQAxgNAnAUQAQAIAfAmQAOARAMAeIATAyQAPAdAlBCQAFAJAJAIIAQAPQARASAIAYQAJAYgCAYQgCAcgLANIgOAQQgJAKgDAIQgDAKAEAKIAJASIAXArQAVAmAEAKQAUA+gCBAQAAAegCAOQgCAZgIARQgGAOgPAaQgLAYAAAVQgBAIADAMIAEAUQADAygYAdIgYAZQgOAQgGANQgGAMgCAUQgDAZgDAJIgFAQQgDAHgFAHIgOAPQgKAJgCAHQgNApgMBIQgOBXgGAcQgiCUhBAAIgCgBg");
	this.shape_2.setTransform(38.2636,77.803);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0,0,76.5,155.7), null);


(lib.Path_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("AHmOFQgEgIgNgGIgWgKQgJgGgOgMIgVgUIhJhHQgtgrgigUQgFgDgOgMQgLgKgJgDIgSgFQgMgCgGgEQgcgPgNgjQgWg3gDgGQgGgJgOgMQgMgKgMgGIgkgSQgTgKgNgLQgggZgcgmQgagkgKg6QgGgrgugfQgPgKgXgIIgpgNQgJgDgVgDQgTgDgKgEQgRgGgWgKQgNgIgHgCQgEgCgIAAQgIAAgEgCQgLgGgLgLQgagegOgOQgZgZglgtQgWgbgJgPIgYgoQgOgYgGgUQgLgmgDgrQgIg6ACgbQAFiCAZhRQATg/ANgZQAOgZAZgcIAtgyIASgVQALgOAKgEQAJgEAPgCIAYgFQAQgFAbgVQATgPAMgFQATgJARAHQANAEASANQAWAPAJAEQAVAKASAZIAfAqIALANIAJANQAMAPAQALQASANAWgSQAPgLAHgJQAJgMACgHIAKgvQALgjAOgaIAegqIANgWQAIgNAHgIQAegeAigXQApgcAhgHQAdgHARAfQANAXABAgQACAegHAoIgPBFQgMA6gQAXQgGAJgDACIgKAEQgJAFAAAQIgBASQgBAEgEAGIgGAJQgGAJgBAQQgCAPADALIAKAbIAIAbQAIAbAGArIAJBHQAHApAbBQIAfBXQARAyAIAkQACAKAHAQIAKAaQADANAFAbQAEAaAEAOQAEAQgCAcQgDAfACANIALBMQAGAzAbAzQAWApAnAvQAIAJALAWQALAWAHAKIAWAYQAMAPAHAMQAnBEgBBKQAAA6gZA5QgWA0gdAAQgOAAgPgLg");
	this.shape_2.setTransform(59.1644,91.1908);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_2, new cjs.Rectangle(0.1,0,118.2,182.4), null);


(lib.Path_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("Ah8CaQgRgJgHgGQgNgJgFgLQgEgMAKgPQAHgKAKgXQAGgOAKgOIAUgbIAjgvQAageAxgeQAWgNAvgQIArgNIAVgGIALgFQAHgDADAAQAMgBgBAWQAAAHgDAVIgCAPQAAAKgCAFQgEAJgIgDQgJgGgFgCQgUgGgiAOQgmAOgjAoQgeAjgQAqIgaBKQgQAdgWAAQgKAAgMgGg");
	this.shape_2.setTransform(16.8835,16.0387);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0.1,0,33.6,32.1), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("AjXE4IgNg0QgHgZAAgjIACg8QABgWAIggIAMg1QANg8AVg9IgYArIAZhBQAPgnAggtQAfgrAOgNIAcgbQAQgPAPgHQALgFAWgGQAXgFALgGIAXgNQAOgIALgDQARgFAWAIQAOAGAWAOQAGAEAIAJIANAMQAEADAIADQAJADAEAEQAEADAGAPIAKARQABAKgSAJIgZAMQgOAIgUAGIgjAJQgvAOgwAlQgPANgQAWIgcAnQgfAogPAcQgUAkgPA0QgIAfgPA+IgHAhQgFATgFANIgNAeQgHAQgDAOIgFAYQgEASgGABIgDABQgNAAgLgkg");
	this.shape_2.setTransform(23.6257,34.7766);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,47.3,69.6), null);


(lib.Path_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("ABDBeQgGgFgIgOQgOgYgNgKQgSgPgWABQgbACgqARQgPAHgGAAQgMABgCgNQgCgQATgZQATgYAQgFIgCACQAJgJANgJIAqgdQAVgOAVgGQAbgIAUAFQAlAKgEBPIgEA6QgGAogUAIIgHACQgHAAgHgGg");
	this.shape_2.setTransform(11.86,10.0067);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,23.8,20), null);


(lib.Path_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("AhQBBQgBgQAKgTIAPgYQAFgZANgXQAVgiAcABQARABAUAPQAQANAKARQAGAJABAJQABALgLACQgDABgGgDIgJgHQgNgHgMABQgXADgTAQQgOANgQAYIgUAaQgGAHgEAAQgFAAgBgLg");
	this.shape_2.setTransform(8.07,7.5594);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,16.2,15.1), null);


(lib.Path_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("ACbDDQgBgJAGgTQAGgTABgJQACglgcgbQgKgKgNgDIgagGQgagFgKgcQgIgigGgRQgHgXgQgUQgQgUgVgKQgagOgqAGQgQABg1ANQguAMgLgQQgKgNASghQASgeAngPIACgBQA3gVAdgEQAlgGAhAUQAdARAXAiQAbAmAKAcIASA1QAKAeAJAUQAGANAQANQAUAQAGAHQAUAbAKAfQAEANgBARQgCARgGANQgLAVgTAKQgFACgEAAQgNAAgBgXg");
	this.shape_2.setTransform(21.6047,21.8235);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,43.3,43.7), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("ACPDoQgJgFgQgPQgggZgPgNIgHgIIgIgJQgFgGgKgHIgPgMIgVgbQgMgSgKgIQgIgIgUgMQgUgLgJgIQgXgUgPgLQgLgIgWgGQgbgJgHgEQgNgGgGgPIgHgfQgHgYgKgOIgJgNQgWgeADgUQAEgXAbgFQAZgFAUAMQAXAOAeAgIAfAfIAfAfQAgAkAQALQAdAUAhgLQAdgKAPgYQAOgXgBggQgBgQgLgfQgLgdAAgSQABggAPABQAFABAHAKIANAaIAMAQIAKAQQAIAPALAeQAFALAMARIASAaQAhA8AOA6QAKAugcBSQgHAYgNASQgSAdgUAAQgOAAgQgLg");
	this.shape_2.setTransform(25.1804,24.2717);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,50.4,48.6), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("AgeDyQgMgHgDgPQgBgGAAgVQAAg8gEgZQgDgVgMg8IgNg0QgBgQgBgDIgFgEQgBgBgBgBQAAAAgBAAQAAAAAAAAQgBAAABAAIgKggQgFgSgIgMQgcgtgcgcQgQgKgGgHQgMgKAGgNQAKgUAhgCQAcgCAVALQAZAOATAVQAIAJAZAjQALARATAIQATAGAWgDQAPgCAagMQAfgOALgDQAPgEAJgFQAKgFALgLIAKgKQAGgGAFgDQANAPgXAhQgeAigGAJQgSAZgCAaQgHBFgMArIgKAiQgGAUgDANQgJAvgIAUQgJAWgHAKQgLATgNAHQgNAHgTABIgEAAQgRAAgKgGg");
	this.shape_2.setTransform(19.8463,24.8159);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,39.7,49.6), null);


(lib.Path_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("AibCCQgHgIAFgXQAHgeAcgiQAMgNATgTIAfgcQAYgVAzgmQAhgYAigMQAWgIALgCQAVgEAMAGQAPAHgDASQgDAOgMANQgNAPgaAKQgeAKgPAGQgzAVg2AqQgSAPgZAeQggAmgJAJQgNANgIAAQgDAAgDgDg");
	this.shape_2.setTransform(15.9918,13.2266);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,32,26.5), null);


(lib.Path_30_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AggCzQgmgIgogPQhJgqAUgJQAHgDAOAAQARAAAFgBIAmgKQA6gPAmgTQAbgNALgUQAJgOAHgiIAJgeQAEgSABgOQAAgKgCgUIgCgeQAAglAOACIABAAIAQALIAPAKQAeAOAIANQAIAOgCAfQgCAWAAArQAAARgEAUIgHAlQgCALAHAaQAFAWgEAMQgJAdgtANQgNADgYADIglAGQgUAFgNABIgIAAQgMAAgMgDg");
	this.shape.setTransform(16.7561,18.2175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_1, new cjs.Rectangle(-0.1,0,33.7,36.5), null);


(lib.Path_29_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AAWBDQgXgGgJgLQgUgYgOgaQgTgjAIgUQADgJAHgDQAPgIAeAhQAVAXANAUIARAeQALAXgFAIQgFAIgMAAQgIAAgKgDg");
	this.shape.setTransform(5.822,6.9462);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_1, new cjs.Rectangle(0,0,11.7,14), null);


(lib.Path_28_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AgPArQgIgXgDgYQgEgnAIgQQAFgKAIgBQAJgBALAJQAKAJACANIADAYQADAhAAAMQgBAhgOAHQgEACgDAAQgMAAgKgcg");
	this.shape_1.setTransform(2.8974,7.0889);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_1, new cjs.Rectangle(0.1,0,5.7,14.2), null);


(lib.Path_27_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AgPAsQgMgfgBgVQgBgfAUgTQAGgGAFAAQAMAAAIAYQAGATABATQABAcgOAaQgHANgHAAQgIAAgJgVg");
	this.shape_1.setTransform(2.9047,6.4946);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27_1, new cjs.Rectangle(0,0,5.8,13), null);


(lib.Path_26_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AgKA5QgNgCgCgZQgCgTAEgOQAEgPANgSQANgUAKAAQAKgBAAAZQAAAbgHAaQgKAkgRAAIgDAAg");
	this.shape_1.setTransform(2.6942,5.7088);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_1, new cjs.Rectangle(0,0,5.4,11.4), null);


(lib.Path_25_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AktDcQgKgCgHgTQgFgWgDgGQgPgbgGgkQgKgxAFhPQABgQAGgTIALgiIAFgXQACgOAHgHQAEgFAKgGIARgJQAugiAygRQBSgdBrAZQAvALAqATQAOAHAaAQQAbARAOAHIA0AfQAhATAWAGIABABQAMADAfABQAcADAKAQQgaAAgnAGIhBAKQgfADgagDQgagEgegLQgVgJggAAQglABgSAAQg4gBgkAGQgxAIgmAXQgpAXgUAnQgQAhgEA0QgDAigQAkQgGAMgDAFQgHAJgIAAIgCgBg");
	this.shape_1.setTransform(35.45,22.019);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_1, new cjs.Rectangle(0,0,70.9,44.1), null);


(lib.Path_24_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("ACjBBQgKgDgjgRIgagJIgagJQgKgEgRgLQgSgLgJgDQg1gWhXgHQgKAAgZAEQgYAEgLgCIgGgBQABgpBXgBQA2gBA+ANQA/AMAqAQIAaAMIAZAMIAVAFQANADAHAFQgDAJAGAQQAGARgCAGQgCAMgQAAQgJAAgOgEg");
	this.shape_2.setTransform(20.4661,6.9158);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_2, new cjs.Rectangle(0,0,41,13.9), null);


(lib.Path_23_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("ABXAcIgbgHIgxgHQgngKgYgEQgtgGgRAPQADABgKgBQAEgDAAgKQAAgLADgEQAKgLAeABQAOABAbAFQAhAGAqAFIAcAAQATgBAJADIAIACIAEAIQAJAMACAEQADAKgKADIgKABQgHAAgKgCg");
	this.shape_2.setTransform(12.1688,3.0353);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_2, new cjs.Rectangle(0,0,24.4,6.1), null);


(lib.Path_22_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("Ak4HFQgWgFAOgbQAJgRARgTQAJgJAKgQIAQgaIAOgQQAIgKADgIQAIgVAHgnQAHgsAFgRQAJgdAogiQArgmAMgXQAUgoAThZQAShXAWgrQAthZBnhIQAUgOAngRQAsgUAQgJIAUgMQARgJAMgEQAZgIAIAPQAHAOgdAWQgUAPgVAJQgiAQgpAeIhGA2Qg9AvgWBEQgnB7AMCZQACAOAIAhQAIAeABASQAAAPgGAmQgFAgAEAUQAFAZgKAFQgKAFgGgbQgEgOABgZQAAgggBgIQgCgYgNgSQgLgPgWgPQgVgNgIgCQgPgDgNANQgOAPgNAbIgTAuQgDAIgFAVQgEASgFAKQgQAegbAiQgiAtgHAIQgcAggUAAIgGgBg");
	this.shape_2.setTransform(32.6157,45.3582);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_2, new cjs.Rectangle(0,0,65.3,90.7), null);


(lib.Path_21_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AAbAiQgGAAgKgEQgVgIgSgOQgWgPADgMQAFgZAzAUQAVAJANAYQAPAZgcAAIgDAAg");
	this.shape_2.setTransform(4.8539,3.4172);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_2, new cjs.Rectangle(0,0.1,9.7,6.7), null);


(lib.Path_20_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("Ag5AWQgDgTAYgMQAVgLAcgBQASgBAMAFQANAFACAKQACANgbAFQhLAGgNAAIgCAAg");
	this.shape_2.setTransform(5.8127,2.2346);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_2, new cjs.Rectangle(0,0,11.7,4.5), null);


(lib.Path_19_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("Ak/G3QgPgLgIgjQgHgcACgYQAFgzARguIAehNQAOgugFgkQgCgNgJgSIgPgeQgEgMgGgVIgLgiIgZhJQgLgpADgkQAEg3Aig0QAegvAwgjQA7gsBbgMQA5gHBoAEQBYADBXAnIAxAVQAaANASARQAaAZACATQABAGAAAPQgBAMADAJQABAEAGAHQADAEgHADQgJAEgUgRQgWgSgFgEQgggYgRgIQhNgkgygPQhZgahbAaQhhAbg3BHQgLAPgFAXIgGApQgHAqAAAcQgBAjAJAjQADANAYA4QASAqgCAdQgCAbgJAiIgRA8QgEATgNAcIgVAuQgRArACAaQABATgEAJQgDAKgQANQgNAMgEABQgDACgEAAQgGAAgHgFg");
	this.shape_2.setTransform(36.7719,44.3864);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_2, new cjs.Rectangle(0,0,73.6,88.8), null);


(lib.Path_18_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AgUB+QgWgIgBgNQAAgHALgXQANgbAGgjIAIg/QADgaAIgVQANgeATAAQAIgGgEAWIgHAcQgGAcgCAqQAAALgFAUQgEAVgBAKQAAAFAHAfQAEAUgJANQgJALgNAAQgIAAgJgDg");
	this.shape_2.setTransform(4.3656,12.9111);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_2, new cjs.Rectangle(0,0,8.8,25.9), null);


(lib.Path_17_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("AhGBSQgJgXARglQAMgaAVgZQAigkAOgWIAJgOQAFgJAFgFIACABIAEABIAMAAQAIAAAEADIABAAQADACABADQAFAOglA1QgLAQgFAQQgEANgDAXIgBAoQgBAagHANQgSAHgOAAQgjAAgMgig");
	this.shape_3.setTransform(7.4103,11.5568);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_3, new cjs.Rectangle(0,0,14.8,23.1), null);


(lib.Path_16_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("ABhBSQgagaghgCQgMAAgeAMQghANAAAKIgBghQgBgSgHgQQgLgWggglQgFgGgUgNQgSgMgEgIQgHgNAEgQQADgOALgLIAAAFQAHgEAKAHIAcAbQAFAFA0BHQAjAvAjAHQA2AJASAOQANAIAHAaQAGAYgFAPQgcgigPgPg");
	this.shape_3.setTransform(14.1987,13.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_3, new cjs.Rectangle(0,0,28.4,26.3), null);


(lib.Path_15_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("AANBJQghgZgJgFQgDADgFgGQgEgHgBgHQgBgKAHgGIAPgIIAVgPQAKgJAHgNQAEgHAEgOQAEgOADgHQgBAYAGAsQAGAvAAAUQAAAUgNAAQgHAAgKgFg");
	this.shape_3.setTransform(4.3232,7.8253);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_3, new cjs.Rectangle(0,0,8.7,15.7), null);


(lib.Path_14_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("AgRAfIgOgOIgGgDQgggRgCgJIACgBIgGgHQAFgNAYAEIAbAFIBEgPIAbgMIgNAMIgRAWQgMAPgGALQgHAOgLAdQgKgDgRgSg");
	this.shape_3.setTransform(7.575,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_3, new cjs.Rectangle(0,0,15.2,10.4), null);


(lib.Path_13_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("AAVBIQgMgUgJgJIgRgOQgLgJgFgIQgJgNgOgeQgPgggIgNQAGgBAJAAIARABIAYATQADAEADAIIAGANQAJAOARANIAfATIATAJQANAHABAGQABAFgMAOQgLAMgGAEQgJAHgHAAQgIAAgGgGg");
	this.shape_3.setTransform(7.951,7.7876);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_3, new cjs.Rectangle(0,0,15.9,15.6), null);


(lib.Path_12_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("AArBFIgQgaQgHgNgUgQQgZgSgFgHIghglQgQgSgSgGIATAFQARAEAKAGQAIAEAPAKIAYAPQAJAFASAOQARAOAKAFQAJAFAOAFIAZAGQgGAbgZAPQgJAFgGAAQgFAAgEgEg");
	this.shape_3.setTransform(10.5,7.5257);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_3, new cjs.Rectangle(0.8,0.2,19.5,14.700000000000001), null);


(lib.Path_11_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE908E").s().p("AjOHhQgEgYgBgkIgBg7QgDgoADg1QABgVgGggIgJg0IgIhCIgGgeQgDgRADgNQADgJAEgaQADgWAFgMQAahJBBhEQAaggAOgPQAfgaAMgRQAMgOAKgZQAEgKAHgNIANgXIAdhKQARgvAXgWQARgRAeATQAOAJALATQAHAMAJAWIADAKQACAKAAANIAAAXQABAPAHAYIANAnIAGAbQADARAEAKQACAHAHANQAIAMACAHQABAFABAKIACAPIANAtQAIAbADATIAFAqQABAWgIASQgJATgPATIgdAhQgtAygUAkQgZArgBAeQAAASACAIQAAADAHANQAEAIgBAEIABAAIAAADIgBAAQgIgBgKgKQgLgLgJgBQgjgCgfAGQgWAFgcAgQgtAwgVAgQgiAygEAsQgWAOgJABIgFABQgNAAgDgSg");
	this.shape_3.setTransform(24.2488,49.918);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_3, new cjs.Rectangle(0,0.1,48.5,99.7), null);


(lib.Path_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE908E").s().p("AgoEEIgOgdQgHgPgVgXIgWgfQgOgSgOgJQgXgKgKgGQgRgKACgSQADgSAOgbQAVgoAHgdQADgPgEgaQgEggAAgIIgCghQgBgTAFgMIANgjQAIgUAIgNQAJgPAPgMIAWgRQANgJALAFQAIAEAHAPQAFAHAGADIAOAFQAOADAPALQAQAMAMAdIAUAuQAWArAPAPIAbAXQAPANAHAMQAKAQADAMQACALABASIABAbQAAAOgDANQgHAbgRAPQgHAGgTAIQgSAIgHAHQgEAEgBALQgCAKgDAEQgGAHgJAAQgLgCgGAAQgQACgPANQgKAIgNASQgKAQgMAfIgDAOQgDAIgEAEQgHgJgIgSg");
	this.shape_2.setTransform(18.0645,28.6707);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_3, new cjs.Rectangle(0,0,36.2,57.4), null);


(lib.Path_9_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE908E").s().p("AAuIKQgngBgdgOQgPgHgKgZQgJgdgGgMQgeg+gOg3QgDgLgEgjIgFgcQgDgQABgNQAGgwgDgZIgBgcQAAgSgCgKIgGgNQgCgFAKgDQgXgugGghQgBgHgGgTQgFgRgBgKQAAgKACgXQACgVgCgMQgCgOgMgTQgJgRgIgXIgNgqIgIgaQgFgPgGgKIgOgYQgIgOgDgLQgQg/ALg2IAIglQAIgUAUACQADADAQAGQAQAFAFAHIAbAfQAPAUAMAxQAHAfADAiQABAWAJAJQALAMASgMQAMgIAHgNIALgZQABAGAGAIIAJALQAHAJAEAAQAGABAIgJQgEABgEgBQADgrAHgYQALgkAbgRQAMgIANACQANABALAKQAEAEAEAKIAGARIAZAzQAIASAUA2QAFALADATQAEAWACAIQAMAnADAQIAFAWIAEAWQAAACgCAMQgCAHAEAFQACANAAAZIABAlQABAFgCAMQgBAJABAGQACAQAJAJQAFAGAQAKQALAGAGANQAHAPgEALQgCAGgOAPQgLANgHAVIgGAPQgCAIABAJIABARQABANADAEQAFAHAKAGQAMAIAEADQADADAMAaQgSAEgFAmIgGAsQgDAbgEARQgKArgSAcQgNAUgUAPQgXARgVAAQgnACgXAAIgIAAg");
	this.shape_3.setTransform(25.638,52.2199);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_3, new cjs.Rectangle(0,0.1,51.3,104.30000000000001), null);


(lib.Path_8_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE908E").s().p("AGoInIgZgEQgkgEgWgJIg3gVQgOgFgSgNIgdgUQgMgHgUgGIghgKQgMgEgOgIIgYgPQgdgRgQgHQgagLgXgCIgQAAQgLgBgHgBQgGgCgKgHQgKgHgEgGQgDgDgGgNQgEgJgHgEQgQgJgZgBIgqABQgRANgbgDQgegGgOgBQgYgBgggOIgWgHQgNgFgHgGQgmgggdgoQgIgLgTgQQgUgRgIgKIgngtIgogtQgug4gCgzQgBgiAGgZQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAgBgBQgBgSARgZIAdglQAggpAcgOIAfgRQATgLANgDIAVgDQANgBAHgEQAMgGAQgQIAYgZQAPgOAXghQAMgOAEgZIADgsQACgdAEgQQAHgZANgRIAKgNQAHgIAFgDQAHgDACABIAHAJQAMASASAEQAMADAagCQALgBAwAAQAlAAAWgFQAYgGAggPQAQgHADALQACAHgBAUQABAVAQARQARARAVAAQAGAAAWgGQARgEAKAEQAFADAJAMQAIAMAHAAIAMAGQgBgBAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAHgDQAIgFALgEQAJgDALAAQgBAFgIALQgGALAIACQAGACATgFQATgFAHABQAEABAsAVQAkARALgIQAHgEAUgYQARgUANgEQATgEgCAYIgCAPQgCAJABAGQABAKAIARQAJARACAJQAFAaAFA1QAFAegGA+QAAAHgEAOQgEANAAAHQgBBAAWAWIAPAPQAHAJAAAKQAAAMgPAZQgKAZgBAWQgCAmADAVQAFAfARAVQASAWAFAYQACALgCATQgCAVABAJQABALAMARIAOAhQAHASACAQQAGApgKApQgKAuhKAmQgLAFgMACIgYAAIgEAAQgKAAgMgCg");
	this.shape_3.setTransform(58.7192,55.3317);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_3, new cjs.Rectangle(0,0,117.5,110.7), null);


(lib.Path_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("AhqElIgNgJQgWgMgGgHQgCgEgDgIQgCgJgDgEIgOgPQgKgPgGgTQgIgHgCgPQgDgggCgDIgFgLQgDgGgBgGQABgRgDgHIgEgEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQABgTAIgeIAEgZQABgQACgJQAFgTAKgfIARgzIATg/QAEgUAMgSQAHgNASgLIAfgTQAggWAagDIAagEIAKABIAKAAIASgDIATgCQAGgBAJADIAOAEQAuAJAdAQQAZANAPAlQAPAjAAA3IgCAWQgBANAAAJIACATQABAMgBAHQAAAGgDAHIgFANQgJAfgJAPQgFAKgFAUQgCAMgMATQgOAVgDAJQgGARgPAgQgCAFgBAIIgCAOQgBAHgDACIgKACQgIACgHgCQgMgDgOAFIgZAJQgLAAgGABIgMAJIgbAVQgSAMgOADQgOAAgHAEQgFACgJAJQgIAIgFADQgEACgEAAQgDAAgFgCg");
	this.shape_3.setTransform(22,29.4458);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_3, new cjs.Rectangle(0,0,44,58.9), null);


(lib.Path_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("ABiCvQgJgLgDgSIgCggQgBgMABgqQAAghgDgUQgGgdgYgSQgLgIgOgEIgagHQgSgFgYgBIgqgBQglAEgTgDQgFgBgHgEIgLgFIgZAHQgBgcAPgbQANgYAZgTQANgKAagJQAKgEABgDQABgBALgCIANgDQAGgDAKgIQAIgDAOgCIAVgCQAQgCAjAFQARADARALQAFACAIACQAJACAEACIAVAMQAeAOAHAVQATA6ADA4IgBAbIgCAaIgDAiQgCASgGAOQgPAogMASQgPAXgEARIgGATQgFAMgIAAQgBgdgLgOg");
	this.shape_3.setTransform(18.9052,21.8483);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0.1,37.8,43.6), null);


(lib.Path_5_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE908E").s().p("ACHCsQgIgCgJgJIgOgQQgigrgmAHQgRADgVAJIglAPQgQAHgVACIgmADIgaAIQgRAFgIgDQgQgHAXgVIAvgqQAZgVASgpQASguALgWIAVglQANgWAFgRQAGgZAEgIQAKgUAPgBQAJAAALAHIATANIARAKQAHAGADAKQATA5AKAtQACAIAAAPIABAVQABAOASAkQAGAOAJAnIAJAYQAGAPgCAKQgEAAgHgDQgHgCgFABIgIADIgHACIgDgBg");
	this.shape_3.setTransform(17.6836,17.2651);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_3, new cjs.Rectangle(0.1,0,35.3,34.6), null);


(lib.Path_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("Ah4A5QgOgNBMg1QAngbAUgKQAjgRAiADQASACAQAHQAWAKgDAPQgCAIgNAFIgUAHQgOAEguAHQgkAHgWAIIgsAcQgVANgNAAQgHAAgFgEg");
	this.shape_3.setTransform(12.3397,6.1235);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0.1,0,24.599999999999998,12.3), null);


(lib.Path_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE908E").s().p("AE5C0QgpgGgOgFQgIgCgQgLQgOgJgKgDIglgJQgVgGgOgKQgQgLgVgIQgTgFgIgEIgKgJIgJgJQgVgOgVgHIgNgEQgIgBgFgCIgLgHIgMgIIgRgLQgLgHgHgBQgEgBgGABIgLAAQgFgBgIgDIgNgEQgEgBgSADQgTACABADIgOgjQgMgZgNgBQgXgCgrAGQgxAGgTAAQgRgBgSgEQgXgGgJgKIAAAAQgIABgIgFQgGgDgPgPQgsgYADgDQAIgJAUACIAeABQASgDAhgMQAegIANgIQAvgdBIgDQBDgEA6ASQAXAHA3AbQAwAYAeAGQApAJBJABQBUABAeAEQAJABAPAIQAQAJAHABQAJACAOgGQALgFAIgIIAWgbQANgSAOgEQABAIgCAcQgBAVAHAPIAPAXQAIAOADALQAIAkgJAqQgNA6gbATQg5ApgvAAIgPgCg");
	this.shape_3.setTransform(47.7187,18.1542);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,95.4,36.3), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE908E").s().p("AgiClQgXgBgIgFQgPgIgNgXIgUgmQgqhWgGgxQgJglgDgUQgEgjARgTQAUgXAWAeQAKAPANAhQARAqAvApQAcAWAqgEQAVgBA2gQIAagKQATgGAGAFQAVAOgZBBQgOAogOAVQgVAfgfAKQgeAKgZAAIgeADIgPABQgIAAgHgCg");
	this.shape_3.setTransform(17.4699,16.6747);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,35,33.4), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE908E").s().p("AAxC4IgEgtQgDgZgNgQQgNgPgNgGQgNgHgSADIgtAIQgdAFgQgIQgLgFgHgSQgKgXgDgEIgKgOQgDgFAGACQABgPgDgfQgEggAAgPQABgUAIgZQAIgYAMgSQAagrAZgJQARgGAOAQQAWAYAEACQAEADAMACQAJACAFAEQAMALALAOQAGAHAFAOIAJAWQAHAOAOAUIASAaQAKAPAIAJIAWAWQAMANAGAMQARAjABAfQABAlgXAaQgPARgUAPQgRANgFAHIgDAJQgCAFgCACQgEACgDAAQgMAAgJgog");
	this.shape_3.setTransform(16.2993,22.3788);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,32.6,44.8), null);


(lib.Path_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE908E").s().p("AhiB3QAAgDAGgzQACgUgEgeIgGgyIgCgTQgDgZgIgYQgNgmAKgSQAMgUAiAVQAQAKAaAYQAbAYANAKQAQAJASADQAHABANgCIAUgCQAEABAPAHQAPAHACAAQgtAOgmAxQgTAYgjBCIgZAwQgTAegTAEQgTgWgBgcg");
	this.shape_3.setTransform(12.1453,16.9122);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,24.3,33.9), null);


(lib.Path_26_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("AgYDGQgTAAgcgFIgMgBQgGgBgFgCIgSgKQgQgIgUgOIgIgHQgFgFACgFQABgGAKgDIAPgDQAagHAagXIAqgrQALgLALgRIAQgdQAUgmAHgzQAHgtgEgfIgDgPQgDgGgHgEIACACIgHgHQAKABAWAMIAlAWIAYARIAXAOQAEADATAHQAGACACADIACAJQACAQgIAeQgEAMABAUIAAAgQAAAPgHAuQgBAKABARQACATAAAIQgBAOgCAHQgDAMgIAIQgMAMgoAIIg1AJIgZAHQgMADgLAAIgDAAg");
	this.shape_2.setTransform(16.0681,19.7781);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_2, new cjs.Rectangle(0,0,32.1,39.6), null);


(lib.Path_25_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("AAkBHQgbgBgTgOQgEgDgEgHIgHgLIgQgdQgJgRgBgNIgCgXQAAgTAFgEIACgBQAFgBAHAHIAJAMQAFAFAQAJQAIAHAHAIIAaAfQANARADATQACARgCAGQgCAGgEAAIgLgBg");
	this.shape_2.setTransform(5.4194,7.2375);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_2, new cjs.Rectangle(0,0.1,10.9,14.4), null);


(lib.Path_24_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("AAEBLQgGgBgFgPIgGgVQgIgZgDgNQgEgVACgSQACgKAHgMQAKgOAIAAIAFABQAGACAHAVQAFAQACAMQACAUgBAQQgFA/gQAAIgCgBg");
	this.shape_3.setTransform(2.755,7.5606);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_3, new cjs.Rectangle(0,0,5.5,15.1), null);


(lib.Path_23_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("AkkGlQAJgJACgFQATgjAOgRQAYgeAogZQAUgNAUgYQAGgGAOgLQAOgKAFgHQAignAIgVQAshmAAhhQgBhJAUhGQAWhMApg0QAMgPAWgOIAngYQALgHAcgWQAYgTAQgIQAXgMAXgGQAMgDAOgCIAKgCIACAAQgDALgaATQgUARgKAIQgSALgJAHQgYASgLALQgfAcgOAQIgVAbQguA6AABzQAAASgEAwQgDAoABAYQABAfALAnQAHAcACAcQABAJgDAQQgCARAAAHQgBANADAQIAFAbQADAQgFACIgUgBIgrgBQgbABgQgDQgRgCgWAGIgmAOQgVAIgYAOIgrAaQgdASggAbIgXAXQgQAPgJABQgBgHAHgIg");
	this.shape_3.setTransform(29.8688,43.7125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_3, new cjs.Rectangle(0,0.1,59.8,87.30000000000001), null);


(lib.Path_22_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("AgLArQgSgkAGgfQADgSAMgLQAHgGAIgDIADgBQAFgCABAEIACAKIAEAVIADAUQADA1gMAQQgEAGgEAAQgIAAgLgWg");
	this.shape_3.setTransform(2.5656,6.4581);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_3, new cjs.Rectangle(0,0,5.1,12.9), null);


(lib.Path_21_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("AgYAuQgIgPAKghQAHgSAKgOQAJgOAKgEQALgFACAPQADAXgGAXQgGAagPAPQgGAIgIABIgCAAQgHAAgEgIg");
	this.shape_3.setTransform(2.852,5.4088);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_3, new cjs.Rectangle(0,0,5.7,10.8), null);


(lib.Path_20_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("AkTCzQAJAYAGALIgBgIQgCgHgHgMIgKgUIgOgnQgKgcgEgpIgFhFQgCgVAJgbQALgeAEgQQAKgjAhgcQAqglA3gPQA4gQA3AKIBCANQAkAIAdAJQAdAKAiARIA7AgQAKAFAUAFQANAGAXAPIATAIQAKAGAHAFQgLABgNgDIgXgEQgKgCgUACQgUABgKgBIhWgJQhhgKg4AaQg9AagpArQgdAdgVA7QgFANgNAdQgMAbgFAPIgLAlQgLAbgJACQgEACgHgKIADAPg");
	this.shape_3.setTransform(31.4818,22.9539);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_3, new cjs.Rectangle(0,0,63,45.9), null);


(lib.Path_19_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C8EC7").s().p("AjMDDQgNg3AehbQASg1A6gwQAhgcBHgxQAlgdASgLQAegRAigIIApgKQAagFAQAFQAEgGAKACQgEAGgNAGIgVAIQghAOgPAJQhEArgUAPQgqAigVAKQglASgSAZQgGAIgHASQgIATgGAIQgJAOgXAZQgKALgBAHQgCAGAEAOQAJAqgIAMQgDAEgIABQgIACgDACQgGAFgFARQgGAMgGACIAAAAQgGAAgDgOg");
	this.shape_3.setTransform(20.8662,20.9032);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_3, new cjs.Rectangle(0,0,41.8,41.8), null);


(lib.Path_18_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("Ag4APQgMgSAjgMQAegKAOAHIAAAAQAFADANABQAMACAFACQANAIABAGQABAIgPACIgQgBQgLgBgGABQgVAGgOACIgOABQgPAAgFgHg");
	this.shape_3.setTransform(5.977,2.0815);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_3, new cjs.Rectangle(0,-0.1,12,4.3999999999999995), null);


(lib.Path_17_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AAIAeIgKgHIgUgPQgQgIgHgMQgLgQASgHQAJgEASAFIAZAIQAJADAGAIIAKAPQAUAVgOAMQgHAFgIAAQgKAAgMgIg");
	this.shape_4.setTransform(5.0461,3.808);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_4, new cjs.Rectangle(0,0,10.1,7.6), null);


(lib.Path_16_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AgvCWQgSgKACgTQACgTAVgcQAcgnADgGQAKgWAMglQAPgwAFgNIALglQAJgcAKAAQADATgGAiIgKA6QgIA8ADAtQADAkgMAbQgQAhgfABQgWAAgOgHg");
	this.shape_4.setTransform(6.4179,15.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_4, new cjs.Rectangle(0.1,0,12.700000000000001,31.3), null);


(lib.Path_15_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AgaB5IgagDQgPgDgGgKQgHgMAPgVQAVgWAFgIQARgVAOgeIAYg4QAJgTAKgPQASgZAKAKQAHgOAEAIQADAGgCAJQgDATgSAcIgNAWQgIANgEAJQgFANgCAVIgCAkIgCAfQgCAUgIAJQgGAIgJAAIgTgDg");
	this.shape_4.setTransform(7.6027,12.3692);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_4, new cjs.Rectangle(0,0,15.2,24.8), null);


(lib.Path_14_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AklG/QgCgbgFgPIgNgbQgIgRgBgMQgBgOAFgaQAGgbgBgNIgCggQgCgTAFgNQAMgngCgbQgCgggQgjIgig+IgUglQgKgVgEgUQgIgrAHgmQANhJAbg0QAfg8A2gpQBihLCRgGQCHgGB4A3QAhAPAfAeIA1A5IAPANQAIAHAFAGQAFAHADANIAGAVQgGABgKgGIgPgKQgHgDgNgEQgNgEgGgDQgZgQgNgHIgugaQgagPgVgFQgogLgTgEQgfgFgdAAQhGACgoAJQhSARgoAsIgOAYQgIAPgGAZIgIArQgLAvACAWQADBHAOAkIAKAVQAGANACAKQAEAPAJAZQAHAVgDATQgFAngSAqIgNAeQgHARgEANQgPA9gEALQgIAZgCAMIgBAUQAAAMgEAIIgCAFIABgCQgKAVgWASIADgGIgCACQgLAHgGAAQgJAAgCgLg");
	this.shape_4.setTransform(39.3117,45.7962);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_4, new cjs.Rectangle(0,0,78.6,91.6), null);


(lib.Path_13_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AIfFCQgegEgngLIhDgTQgRgFgsgJQgngIgWgIIhFgaQgngPgfgIQgsgNgygfQgWgNgkgMIg+gTQgRgGhTglQg8gcgrgKQh1gdhGgcQighChcg6QgUgMgXgZIgmgoIgHgGQgWgRgLgMQgWgXAKgQQAIgMAgAHIAtAKQAPABAWgGIAlgMIAUgJQANgHAIgBQAQgEANAOIAVAZQAGAFAHABIAOACQAQAFAfAQQC2BfCCA0QC0BJCBA4QCCA6BtAhQCAAnB6AOQAyAFAigCQAqgEAmgQQAqgSAwgMQALASgqA2QglAygfAaQgpAigyANQg0AMgkAAQgNAAgLgBg");
	this.shape_4.setTransform(84.728,32.2933);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_4, new cjs.Rectangle(0,0,169.5,64.6), null);


(lib.Path_12_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AAlBHQgPgBgLgPQgLgTgHgKQgUgWgJgMQgGgHgHgOQgGgNgDgDQgIgKgFgPQAUACAZAYQANAOAVAbQAUAWASAJIAMAFQAIAEACAEQAJAPgNAIQgKAHgPAAIgCAAg");
	this.shape_4.setTransform(7.1712,7.1017);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_4, new cjs.Rectangle(0,0,14.4,14.2), null);


(lib.Path_11_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AAnBNQgCgBgKgPQggg1gtggIgggXQgTgQgFgNQALgDAXAMQARAIAPALQAlAbAIAKQAYAZAgAGQAEABAYAAQAWADgGAMQgBADgLAEIgPAFQgNAIgLAMQgKAKgEAAIgBgBg");
	this.shape_4.setTransform(10.656,7.7617);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_4, new cjs.Rectangle(0,0,21.3,15.5), null);


(lib.Path_10_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("AABA1IgQgJQgdgOgMgJIgLgGQgNgHgEgFQgJgMAIgLQAIgLAOACQAKACAYAGQAVAEAMgHIARgNQAKgJAJgDQAFgCAWABQAUABADgDQgmAogmA2QgIALgEAAIgBAAg");
	this.shape_3.setTransform(8.9921,5.279);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_4, new cjs.Rectangle(0,0,18,10.6), null);


(lib.Path_9_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AAgBAQgRgCgQgJQgOgIgMgLQgPgOgCgMQgBgIAFgFQAFgFANgEIATgHQAMgFAJgOIAQgYQAHAIAAAbIgBAnIAEAYQADARgDAIQgCAGgCAAg");
	this.shape_4.setTransform(4.4909,6.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_4, new cjs.Rectangle(0,0,9,13.1), null);


(lib.Path_8_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBCBB").s().p("AghBwQgCgMANgXQAQgcACgGQAEgSgLgZQgOgcgEgNQgHgUABgYQACgcAPgJIAKATQAHANgCAGQgEgCAEALIAKATQATAgAGAXQAJAfgMAcQgIATgXAfQgIAKgJADIgGACQgHAAgBgLg");
	this.shape_4.setTransform(3.563,12.2547);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_4, new cjs.Rectangle(0,0,7.2,24.5), null);


(lib.Path_7_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBCBB").s().p("ACJBzIgJgTIAGAFIgDgEQgIgPgEgDQgJgHgRgBIgdgCIgHgBQgBgBgBgGQgBgEADgFIACgJQABgCgCgFIgCgIIgCgQQgCgIgFgEQgRgMg4ANQgZAFgNABQgWACgPgHQgDgCgCgCQgCgDgCgCIgQgIQgIgDgDgIQgOghgBgPQgBgVALgSQAOgXAUAJIAIAEQAHAEAEAEQghAXAbAYQAaAXAigEQAGgBAdgIQAVgGAPADQAkAHAEAkQABAHgBALQABAJAJACQAJACAJgDQAIAAAIAKQAQASAJAiQAFAXADAjQgJgDgHgMgABoBKQAQADAIARIAAACg");
	this.shape_4.setTransform(15.2913,13.0585);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_4, new cjs.Rectangle(0,0,30.6,26.1), null);


(lib.Path_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBCBB").s().p("AgeA0QgMgBgOgJQgPgKgIgCQgMgCgSAJQgTAJgJAAQgOAAgGgOQgIgNAIgNQADgFAGgEIAMgIQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAEgEAJAFQALAGADAJQAGABANgCQAMgCAHABQAHABAQAGQAYAHAVgFQAQgDAcgNQAMgGAbgSQAWgQARgGQAJgEALAAIAUABQgLADgMAMIgUAUQgJAIgPAEIgaAGQgLAEgJAKIgSATQgSASggAAIgLgBg");
	this.shape_4.setTransform(16.2,5.2505);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,32.4,10.5), null);


(lib.Path_5_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBCBB").s().p("AhqBSQgTgMgDgTQgFgTAPgQQAKgLASADIAfAFQAbgCAfgWQAMgKAjgiQARgQAWgMQAdgQAQAHQgoAtgUAUQgiAjgmALQgdAJgVAgIgHASQgFANgGADIgCABIgEAAQgKAAgUgNg");
	this.shape_4.setTransform(13.0731,9.5249);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0.1,0,26,19.1), null);


(lib.Path_4_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBCBB").s().p("ACZBLIgdgKIghgGQgWgDgLgDIgsgNQgbgJgNgCQgTgEhCgEQgbgCgSgKQgVgNgBgYQAAgPAHgKQAHgNAOAHQABgJAPgGQAOgFADAHQACAEgJANQgIAMAHAKQAIALAWgFQANgCAUgHQAQgDANAKIAWAUQAjAcAnAFIAgABQAVAAALACQALABAIAGQAGAEAJAKIALAKQAHAHgBAFQAAAHgLAAQgFAAgJgCg");
	this.shape_4.setTransform(17.8517,7.6532);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_4, new cjs.Rectangle(0,0,35.7,15.4), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBCBB").s().p("Aj3CVQAGhDAAgIQgBg1AegdQAUgXAMgNQAXgWAQABQARgZAYgRQASgOAggRIA6gjQAjgVAbgGQAvgJA0ACQAJABAbgDQAagBAIAHQAKAIgBAPQAAAPgKAFQgLAGgggCQgjgEgLAAQgsABg1AWQgsATgrAeQhMA1gkAtQgIALgJATIgPAfQgIANgBAMIgDAZQgEAYgJAbQgOAmgPABIAAAAQgRAAADg+g");
	this.shape_4.setTransform(24.9043,21.0439);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0.1,0,49.699999999999996,42.1), null);


(lib.Path_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBCBB").s().p("AinCoQgDgBgJgOQgIgPgBgEQgBgMAPgRQANgPANgFQAHgIANghQAMggAOgMQAUgTAigWIA3gmQAkgaAugaIAlgPQAYgKAJgLQAcAKACAPQABALgLAGIgYAHQhcAkhHA5QhTBAgjBOQgKAWgGAJQgMAUgLAAIgCAAg");
	this.shape_4.setTransform(18.8805,16.8085);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,37.8,33.6), null);


(lib.Path_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AApAWIhjgNQgggEgQAAIgUABQgMACgHgDQABgGAVgEIAbgFQATgEAVgCIAQgBQAIgBAGgEIgBAAIABAAIAAAAIAfACIA7AEQAQAAAfAFIASABQALABAGADIgVAQQgMAHgNADQgSADgTAAIgWgBgAgbgWIgBABIgaABQAMgCAPAAg");
	this.shape.setTransform(14.625,2.3063);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,29.3,4.6), null);


(lib.Path_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AhBBXIANgWQAYgkAEgTQAEgUgLgRIgaggQgOgSADgPQADgRAXABQACgGAOAHIAXANIAgAUQAHAFAYALQARAMgJAOQgDAFgGAFIgLAIQgFADgVATIgYAWQgOANgIAMIgXAgIgJAPQgGAJgHABQgDgKAHgPg");
	this.shape.setTransform(7.0838,11.2185);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0.1,14.2,22.299999999999997), null);


(lib.Path_34_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AjzFfQgPgDgZgNQgNgGgHgJIgEgGQgBgDgEgBQgHABgEgBQgIgDgTgVIgJgKQgFgFgFgCIgHgBQgFABgCgBIgEgEIgEgEIgZgJQgRgHgCgIQgCgKAOgCIAWgCQAWgJAIgXQAFgOACgfQADhFABg6QABhLAGgrQAIg0AqgyQBAhLA+geQBHgiA6gGQBNgIAqAKQAvAMAnAQQAYALAuAbIAhARIAgARQATALAdAGIAyAIIAPACQAJABAGACQAIAEADAEIACAJQACAHABAAQgQgDgIAAIgHACIgIACQgJABgPgCIgYgCQgcAAglgIIhAgNIg2gHQgegBgJgGQgEgCgDgFIgFgIIgPgKQgTgNgPABQgVACgyASQgPAFgIAGQgJAFgKALIgdAbQgTAQgIANQgHALgMAXQgLAXgHALQgLAQgIAbIgNAuIgIAYQgFAOgBAKIgEAuIgCAZQgBARgCAIQgDAPADAXIAFAmQACAcgFAdQgFAegLAYQgFALgIAIQgJAHgIAAIgEgBgAG0i/IAAAAIAAAAg");
	this.shape_1.setTransform(43.6316,35.1663);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34_1, new cjs.Rectangle(0,0,87.3,70.4), null);


(lib.Path_33_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C8EC7").s().p("AhUE+IgKgDQgQgCgIgEIgTgHIgHgBQgGAAgBgCQgDgDAFgGIAIgJQALgLAGgTQAQgygGhJQgFgfACgQQACgNAIgdQAHgaAAgPQACgiAIghQAJgnALgeQADgLAIgOIAOgXQAQgfAOgUQAIgKAKgLIAVgSIAKgLQAGgHAFgDQAIgEAQgGIATgIQAMgEAJABQAHABAIAHQAKAJAEACQAJAFACADQACAEABAKIABA1QACAfgSAdQgVAigwA2QgIAKgVAQQgMAMgXAcQgjAngMAeQgGAPgBAWIAAAlQABAagKAvQgDAQgKAfQgEANAAAaIABAOQACAJgBAEIgBAAIgJgBg");
	this.shape_1.setTransform(15.3278,31.8845);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33_1, new cjs.Rectangle(0,0,30.7,63.8), null);


(lib.Path_32_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C8EC7").s().p("AAoAbIgggBIgfgCQgOgCgUgGIgigJIgmgMQgLgBgFgCQgHgDgCgJQAJgDAPgBIAXgBQAcgCAlACQAXACAugDIA6AAQAgACAYAIQAQAFgCAIQAAABgPAJQgRAMgfACIgaAEQgOACgJAAIgDAAg");
	this.shape.setTransform(15.4864,2.7167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32_1, new cjs.Rectangle(0,0,31,5.4), null);


(lib.Path_31_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65052").s().p("AgNAfQAAgVADgOQAIgiAPgTQACApgBATQgFA1gNACIgBAAQgIAAAAgbg");
	this.shape.setTransform(1.4281,5.7787);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31_1, new cjs.Rectangle(0,0,2.9,11.6), null);


(lib.Path_30_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AhbAfIABgNQABgOALgKQAZgaAtgFIAQAAIASgBQAcgFAQADIAMAFQAHADAFAAQABAHgHANIgJATIgOgDIgOgEQgVgDgjADQgbADgVAMQgFADgOANQgMAKgJABQACgEAAgHg");
	this.shape_1.setTransform(9.3817,4.2279);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_2, new cjs.Rectangle(0,0,18.8,8.5), null);


(lib.Path_29_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65052").s().p("AgaAoQgNgCAEgQQACgNAMgOQAMgOALgHQAGgEAMgDIARgGQgCABgBAHIgDAMQgJASgQARIgNARQgHAHgJAAIgDAAg");
	this.shape_1.setTransform(3.6742,4.0732);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_2, new cjs.Rectangle(0,0.1,7.4,8), null);


(lib.Path_28_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AAbAxIgLgDIgNgCQgGgBgFgCQgUgDgMgEQgWgIAGgNQAHgNAiADQAVACAOgNQADgDAMgTQAIgNALgFQAGAGgDAOQgCAIgEANIgIAiQgEARgCACQgCADgFAAIgDAAg");
	this.shape_2.setTransform(5.8166,4.885);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_2, new cjs.Rectangle(0,0,11.7,9.8), null);


(lib.Path_27_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65052").s().p("AAHAnQgRgagJgKQgMgNgFgHQgIgOAAgMQABgNAIgCQAFgCAHAEQAIAFADAAIAmAvQAWAfgDAgIgBAAQgTAAgSgUg");
	this.shape_2.setTransform(4.4976,5.9531);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27_2, new cjs.Rectangle(0,0,9,11.9), null);


(lib.Path_26_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("AgiAfQAAgLgHgfQgCgJgIgaIgCgHQgBgEACgDIACgCQAGgFAFAFQAFAEAEAIIAFAPQADAGAJAIIAOANQAQARAHAEQAEABAMAAQALAAACADQAGAGgSAGIgZAIIgYAOQgRALgJAEIAAgjg");
	this.shape_3.setTransform(5.4818,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_3, new cjs.Rectangle(0,0,11,13.1), null);


(lib.Path_25_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65052").s().p("AAfA4QgOgJgGgGIgtgrIgYgUQgNgMgGgMQgFgMAFgHQAFgGALABQAJAAAKAFQALAGALAOIASAYQAJAMARAHIAgAKQAIACANgBQAIABgLANQgIAJgFANIgGAOQgEAIAAAFQgGgHgOgJg");
	this.shape_3.setTransform(8.0622,7.1481);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_3, new cjs.Rectangle(0,0,16.1,14.3), null);


(lib.Path_24_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65052").s().p("AGRITQgXgMgLgGIgJgJIgJgJQgNgGgFgEQgRgPgWgWQgbgZgMgLQgXgSgVgLQgagMgigMIg+gUIgugRIgdgOIgQgJQgNgDgNgGQgIgEgGgKQgIgOgDgDQgFgFgLgFQgNgFgEgDQgFgDgHgIIgLgMIgMgJIgNgIQgSgRgXgbIgnguQgigng0hPQgHgKgOgRIgVgbQgVgjgMgQQgEgGgWgWQgQgQgGgNQgHgOgNgLIgagVQgEgEgIgKQgHgKgGgEIgQgJQgMgFgFgEQgPgOggglQgQgTgdgdQgIgIgMgQIgUgYIgTgVQgMgMgHgKIgKgUIgLgUIgJgNQgGgJABgGQAEgOAiABIAtAEQAKgBAdgGQAZgGANABIAHABQAoAHAmAsQAVAZAlA0QARAUAvAxQAoAqAVAcIA6BIQATAXAYATQATAPAfASIAlAXQAYAPANAHQALAGAjAOQAeALAOALQAOAKAXAZQAXAYAOAKQAlAcAdAYIAcAXQAQAOAKAMIAVAcQALAQAMAJQAZARAgAFIAjABQAWAAAMAFQAgALAtAhQA1AoAUAKQAPAIAVACIAlACQAIABARADQARAEAIAAQAJABAVgEQATgEAKACIAbAFQAHAHgLAHQgHAFgDAMIgGATQgDAIgKALIgRASQgMAPgVASIglAeIgsAiQgcASgWAIQgLAEgTAAIgfAAIgHAAQgbAAgWgKg");
	this.shape_4.setTransform(73.5057,54.1262);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_4, new cjs.Rectangle(0,0,147,108.3), null);


(lib.Path_13_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C8EC7").s().p("Ah9D5QAegiANgTQALgOAKgTQALgWADgQQAEgSgEgiQgFgmABgPIACgoIAAgpQABgNADgXQAEgaABgLQADgxAFgXIAGgeQAFgSAGgKQAMgQAigJQAFgBAPgJQAMgGAHgBQAKAAgHBdIgJBlQgFA6ATBSQADANAPAXQAIAMAJAYQAEAHAIALIANARIAJAOQAFAIAHADQgLgFgSAEIgeAJQgiAKgcANIgsARQgbAJgRALQgUAMgYAVIgqAiQgNALgJABQAJgbAYgfg");
	this.shape_5.setTransform(15.875,30.6999);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_5, new cjs.Rectangle(0,0,31.8,61.4), null);


(lib.Path_12_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C8EC7").s().p("ACSEBIgPgBQgQgDgXgBIgZgCIgagEQgRgDgZACIgrADQgbgCgNABIgWAEQgNADgJgBIgRgBQgOAAAAACQgCgGgEgHIAFgJIAFgJQANgSAUgJQAZgKAPgHQAhgOAQgJQAbgOAQgQQAQgPAIgXQAGgPAEgdQAJg5gHhOQgHhNgPg3QgHgZgMgMIAVAEQABAAAKAUQAIAMALAKQAFAFAPAJQANAIAFAHIAKASIAKASQAYAgADAHQAKAUgEAbQgKBIAIA2IAHArQAEAYABASQAAAIADAJIAEARQADAOgCAdIABATQgBANgGAEQgEgDgJgBg");
	this.shape_5.setTransform(16.5833,26.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_5, new cjs.Rectangle(0,0,33.2,52.3), null);


(lib.Path_11_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("Ag2BhQgLgEgDgJQgBgGABgRQABgSAagVQAZgUgBgTQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIACgGQADgEgBgDQAAgMgLgEIgVgFQgXgHAWgTQAXgUAMALIAAAAIAAAAIAGgDQAHgDACABQACAAAFAFQAFAFAEABQACAAAGgEQAEgDAFAEQAFACAGANIAKAKQAGAGACAFQAKATgBANQgBANgLARQgFAIgCANIgFAVQgDAKgKAGIgRAJIgKAJQgFAGgEACQgIAEgMACIgNABQgJAAgIgCg");
	this.shape_5.setTransform(6.9638,9.9308);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_5, new cjs.Rectangle(0,0,13.9,19.9), null);


(lib.Path_10_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBCBB").s().p("Ag7B3QgQgBgOgHQgPgIgJgNQANgOAbgTQAhgXAJgHQAcgZAJgJQAKgLACgNQACgPADgLQADgJAJgIIASgNQAGgFAPgPQAOgNALADQAUAFgIAXQgFARgNAPQgZAYgJANQgGAJAAARQAAASgEAIQgGAJgSASQgHAJgRAPIgFAJQgIALgEAEQgOAMgWAAIgHAAg");
	this.shape_4.setTransform(11.3523,11.8917);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_5, new cjs.Rectangle(0,0,22.7,23.8), null);


(lib.Path_9_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("Ah9A2QgHgMgBgTQgBgQAFgJQABgDAHgIQAIgJABAFQgDgNAQgMQALgJAQgFQAZgJASAFQAHADAGAFIALALQASAOAegGQAJgCAIgGIAPgMQAKgHATgDIAfgCIgUAXQgMAOgMAGQgJAFgRAEQgUAFgHACQgdALgTAQIgHAJQgEAFgEABQgEACgJgDQgKgCgEAAQgJACgPANQgPAOgIADIgIABQgLAAgHgMg");
	this.shape_5.setTransform(13.4417,6.6203);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_5, new cjs.Rectangle(0,0,26.9,13.3), null);


(lib.Path_8_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("Ag0BkQgMgRAAgPQgBgSAPgQQATgRAHgKQAGgHgBgDIgDgNQgEgYAagnQAagoAZAEQAPACgBAWQAAAVgLAKIgRANQgLAHgDAJQgEAJAFAJIAKAQQAHANgHASQgEAKgLATQgIAQgLAPQgOAVgLABIgEABQgMAAgLgRg");
	this.shape_5.setTransform(6.5273,11.6255);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_5, new cjs.Rectangle(0,0,13.1,23.3), null);


(lib.Path_7_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("ABZBGQABgTgDgHQgDgGgLgIIgRgLQgHgGgMACQgQABgEgBQgHgBgDgEIgHgKQgKgQgSgCQgIgBgdADQgRACgMgDQgOgEgLgMQgJgKAIgPQAHgOAOgDQAGgYAkAJQAaAIAfAUQAEADAPAPQAMAMAKADQAJACANABQAKACAJAHQAzAsgKAmQgGAYgMAEIgEABQgKAAgCgYg");
	this.shape_5.setTransform(12.4667,9.3469);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_5, new cjs.Rectangle(0,0,25,18.7), null);


(lib.Path_6_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("ABPBLQgLgCgXgHQgTgGgTACQgPABgWAGQgMAEgEAAQgGgBgHgIIgUgcQgGgIgNgEQgPgEgFgFIgLgNQgGgHgBgGQgDgKADgQQADgTAKAAQgVgLAqgFQAqgFAMAHQAIAEAHARIAKAZQAQAdAhALQAJADArgBQAjgBAPANQAOANgFANQgFAMgRAFQgLACgMAAIgNAAg");
	this.shape_5.setTransform(13.8188,7.4946);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_5, new cjs.Rectangle(0,0,27.7,15.1), null);


(lib.Path_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("AitCjQgFgIAJgSQALgTABgGIAMgmQAIgUAOgOQADgHAJgMQAIgNADgHIADgLQACgHADgFQAGgKAOgMIAWgUQAlgiAYgNQAVgMAtgPQANgDAlgPQAigLAPAGQgDAIgDANIgFAVIgEAWQgDAJgJAGQgKAGgPAGIgaAKQgyAUgeAPQgpAWgfAYQgTAQgSAZIggAuIgYAiQgRAWgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_5.setTransform(17.6357,16.4348);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,35.3,32.9), null);


(lib.Path_34_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("AgdBUQgLgKgCggIABguQAEhWAsADQAnADgDA0QgBAbgXAxQgUAtgRAAQgGAAgFgFg");
	this.shape_2.setTransform(4.3332,8.8437);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34_2, new cjs.Rectangle(0.1,0,8.6,17.7), null);


(lib.Path_33_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C8EC7").s().p("AgzAhQgIgBgPgEQgPgEgJAAQgHAAgPAEQgOAEgIAAQgYAAAGgRQAGgQASgIQAIgDALACIANABQAHAAAOgDIAVgEIBfgGIAtgHQAbgFASADQAVACAHADQAPAFgGANQgCAGgMAEQgKAEgIABQgPADgtgDQgmgCgWAJIgcAMQgQAHgMAAIgDAAg");
	this.shape_2.setTransform(16.1556,3.3001);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33_2, new cjs.Rectangle(0,0,32.4,6.6), null);


(lib.Path_17_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("AhCCPQAIgOADgKQACgIgBgMIgCgUQgCgyAYgcQAJgJASgLQAUgMAHgGQAJgIAEgLQACgHACgRQAFgkAGgQQAMgfAWgFQAAAGgIATQgHAQACAKQABAFAFAFQAEAGABAEQAMAngxAvIgWARQgMAKgFAKQgGAPAAAPIACAcQAAAQgKATQgLASgNALQgHAFgTAFQgSAGgEAFQADgHANgTg");
	this.shape_5.setTransform(8.2671,16.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_5, new cjs.Rectangle(0,0,16.6,33.8), null);


(lib.Path_16_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("AhoA6IAAgJQADgQARgJIAigMQApgNAOgGQAggQAOgVIAPgcQAMgQAQABQALABAAAGQgBADgGAKQgWAggJATIgJAVIgJAWQgMAXgZARQgXAPgbAEQgMACgKAAQgpAAgDgeg");
	this.shape_5.setTransform(10.476,8.7851);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_5, new cjs.Rectangle(0,0,21,17.6), null);


(lib.Path_15_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("AA0BbIgbgEIgaABQgMgBgJgPQgFgIgEgOIgGgXQgDgJgIgIIgOgMQgRgTANgjQAMgkAaAMQALgKAEAAQAFAAAAAJQABALgIAFQgKAGgFAEQgSARANARIAXAeIALAcQAHAOAPAHQAEACAZAGQAXAHAAAJQgBAJgPAAIgFAAg");
	this.shape_5.setTransform(7.1811,9.1094);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_5, new cjs.Rectangle(-0.1,0,14.6,18.2), null);


(lib.Path_14_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBCBB").s().p("AgBA8QgDgLgLgQQgLgQgDgKQgIgXAHggQALgjACgUQAAgEgCgLQgEgWgBgEQABgMALAFQAMAGAFAUQAFAOAAASQgBALgGAZQgFAWACANQABAOATAfQAPAbgBAUQgCATgNAYIgUAoQAPgpgPg0g");
	this.shape_5.setTransform(3.45,15.3636);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_5, new cjs.Rectangle(0.1,0.1,6.800000000000001,30.599999999999998), null);


(lib.Path_13_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBBCBB").s().p("AgICJQgEgMgEgGQgEgGgHgEQgJgFgDgDQgMgNgBgeQAAgdAJgQQAFgHAQgTQAOgRAGgNQADgIAJgbQAFgRAEABQgBgIAFgPQAGgQgBgIQAVAWABAGQAFASgEAZQgDAUgTASQgXAYgFAIQgHANAJATQANAZABAHQACAUgCAUQgDAdgKAHQgDACgCAAQgEAAgDgFg");
	this.shape_6.setTransform(5.2253,14.233);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_6, new cjs.Rectangle(0,0,10.5,28.5), null);


(lib.Path_12_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBBCBB").s().p("AAKBDQgIgMgCgSIAAgXIAAgWQgBgLgIgIQgFgGABgBQADgBgLgQQgKgQgGgGQAegFAUAWQAUAVgCAeQAAADgHATQgGAPAEAIIANAMQAHAGgIAKQgHAHgFAAQgGAAgGgIg");
	this.shape_6.setTransform(3.8331,7.4864);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_6, new cjs.Rectangle(0,0,7.7,15), null);


(lib.Path_11_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D65052").s().p("AkNDgIADgJIABgGQgJAQgEAQIgCAUQgBANgDAGIgcghQgSgWAIAAIgCgdQgCgTABgKQACgfAYg6QAIgUAPgYIAagqQAdgwAVgQIATgQQAHgHAGgOIAUg0QANgbAUgTQAsgrA1gRQAYgIAhADIA6AFQAOAAAYgEIAlgFQAOgBAhADQAfADAQgCIALgEIALgEQAIgCALACIAUADQgHAOgpAGQguAHgJAIIgUASQgMALgJAGQgbASgPAHQgcAPgTgCQgPgBgsgQQgjgNgbAGQgTAEgWANQgNAJgWASQgYAUgIAlQgEAVgEAuQgGAqgbAqQgNASgTAkQgVAmgLARQgQAZgKAXIgFBEQgQgOASgtg");
	this.shape_6.setTransform(32.6857,28.3375);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_6, new cjs.Rectangle(0,0,65.4,56.7), null);


(lib.Path_10_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D65052").s().p("AgQBEQgDgRgBgoQgCglADgcQAFg4ATAGQAFgDADACIAJAGQgIAeAABDIgCAjIgBAMIACAMQAGAqgOAHIgFABQgLAAgFgng");
	this.shape_5.setTransform(2.1719,10.6786);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_6, new cjs.Rectangle(0,0,4.4,21.4), null);


(lib.Path_9_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D65052").s().p("AiFChQgQgOAEgfQAOAJAQgHIAdgOIAbgMQARgHAJgIQAmghAxhUQAKgSAEgcQAEgegHgRQAFgBAEgFQgHgGgEgCQAQgTAqgDQAZgBABAIQAAAGgPATQgKAMgRAfQguBXgIAQQgTArgRAdQgEAHgGAVQgFATgFAIIgGAHQgFAFgPACIgXADQgXAKgMAEQgLADgIAAQgPAAgKgJg");
	this.shape_6.setTransform(14.6678,16.9592);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_6, new cjs.Rectangle(0,0,29.4,34), null);


(lib.Path_8_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D65052").s().p("AABAcQgIgVgKgKQgHgIgcgLQgYgKgCgLQgCAEgCAAQgPgNAZgHQAYgGAMAFQAQAHAPATQASAXAJAHQATAMAMAGQATAIARgCQgCAHglARQgkARABACIgOgjg");
	this.shape_6.setTransform(8.8472,6.2114);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_6, new cjs.Rectangle(0,-0.1,17.8,12.6), null);


(lib.Path_7_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D65052").s().p("AArBFQgHgDgNgYQgPgdgDgEIgoghQgegaAHgCQgFAAgDgBQgHgJAHgDQADgCAMgBQAOgBAKAGQAJAEAKAMQAGAIAXAmQARAbASAMIALAIQAFAGgCAGQgCAFgKAEQgHACgFAAIgDAAg");
	this.shape_6.setTransform(7.0766,6.8898);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_6, new cjs.Rectangle(0,0,14.2,13.8), null);


(lib.Path_6_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D65052").s().p("AIeG4Ig5gPQglgIhEgeQhEgfglgHIgdgIQgSgFgLgBQgPgBgUgFIgkgJQgNgDgqgEQgjgEgUgHQhEgXhqgpQgVgIgdgOIgxgYQgbgNgNgKQgRgNgLgWQgMgVgVgNQgagMgPgKQgVgOglgfQgnghgTgMQgrgdgegcQgNgLgSghIgPgcQgIgNgMgIQgmgcgjgeQgWgSgWgbIgmg0IgZghQgPgXACgOIAJAMIAAgEQAAgLAGgMQAKgVAggJQAQgFAmgEQAOgCAJAHQAGADAMAMQAoAkAQAfQAOAXAKAnQAEAOAGAFIASANQAZAQAlAjQAtAqAPAMQANAKAWAOIAkAWIAyAkQAfAXATAMQAkAXBIAnQBJApAjAWIAqAeQAaATARAJQAVALAlANQArAPAPAHQB+A4BwAcQA+AQA4AEQBFAFAwgQQAdgKARgEQAXgFAYgCQAcgCAPgEQAIgCAcgQQAZgNALAKQAKAIgKARIgSAXQgGAJgKAYQgJAWgJAKQgKALgaAXQgPANgaAMQgSAKgcAIIgxANQgNAEgQAAQgOAAgPgDg");
	this.shape_6.setTransform(82.8496,44.2424);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_6, new cjs.Rectangle(0,0,165.7,88.5), null);


(lib.Path_5_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C8EC7").s().p("AjaF/QAGgKAWgcQANgRAQgcQAXgoAyggQAXgOBGghQApgTAcgjQAcgiAKgsQAWhdAEh6QABgYgKgxQgKgwABgZQABgOAHgRIALgfQAFgNADgFQAFgGALgDIAPAAQAIABAGgDQAFgCAIgJQAJgIAFgDQAWB5gcCBQgKAvgEAXQgFAlAAAiIAAA7QAAAkACAXQACASACAHQAEANAJAJQAAAJALASQAKASgCAJQgCALgJAAIgUAAQgnAAgTACQgiABgYAIQgvAOhMAgQgjAQgmAhIglAaQgXAQgKAQQgGALgNAbQgNAXgRAFQgDgSAPgZg");
	this.shape_5.setTransform(23.1923,42.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_5, new cjs.Rectangle(0,0,46.4,85.2), null);


(lib.Path_4_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C8EC7").s().p("AhfA8QgwgqBBgYQAigOBFgMQAkgIAYgNIASgKQAHgBAEANQACAHAAARQAAATgDAFQgEAEgRABIgYACQglAIgdAOQgZANgeANQgeAMgIAAQgFAAABgEg");
	this.shape_5.setTransform(11.6638,6.3794);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_5, new cjs.Rectangle(0.1,0,23.2,12.8), null);


(lib.Path_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C8EC7").s().p("Ah9ExQgJgCgQgIQgOgIgKgBQgdgEgogPQgrgSgXgIQgGgCgUgCQgRgDgIgEQgNgHgDgLQgEgMAMgIQAHgEAPgDIAXgDQAigKAhgZQAWgSAigiQAmglASgTQAeghARgdQAFgKAHgTIAMgcQAFgKALgNIATgWQAmgvA1geQBEgnATgKQA0gZApgJIA3gKQAkgFATgEIAUAhQAMATADANQgEAAgIgCIgMgDQgJgBgPAEIgZAGIg7AKQgkAGgXAJQhGAYg9AlIggAVQgSAOgHAOQgEAIAAAHIABAPQAAANgGAIIgQARQgWAXgPAnIgZBEQgGAOgLAVQgIASACAUQACASAJAaIAFAMQADAHAAAFQABACgDADIgCAGQADAiAVAMQgBAEgEABQgJgGgPAFQgMAFgIAAIgEAAg");
	this.shape_4.setTransform(37.7855,30.5235);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,75.6,61.1), null);


(lib.Path_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C8EC7").s().p("AkwEXQgMgFAHgwQACgPALgbIARgkQAMgXAFgNQAJgXAZghQAegnAIgPQATghAEg0QACgeAQgbQAPgaAZgSQAegXAYgBQAMgBAPAKQARAKAIACQAVAFAdACQAfABATgEQAMgDAQgTQASgWAIgEQAqgYA4gNQAIgCAZgHQAWgEAIAMQgEAKghALQgjAKgIAEQgQAHgaAPIgpAYQg9AfgzAdQghARgPAJQgIAFgXAJQgUAHgLAIQgXARgfAjQgIAJgJAQIgPAbIgUAYQgNAPgFAKIgTAdQgMARgFAMQgGAOgBAVIgBAkIAAAfQAAAPgCAJQgDANgIABIgWgCIgOACIgLABIgDAAg");
	this.shape_4.setTransform(31.2608,27.9167);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,62.5,55.9), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C8EC7").s().p("AgUB7QgHgBgPAAQgPABgIgDIgcgMQgQgIgKgJQgLgKgOgSQgTgZAKgFQAEgCAHAIQAHAJAEAAIAIAAIAHgDQAMgCAYACQA5gEAlgeQAVgPAPgWQAQgZACgYQABgKgDgSQgCgSgEgFQARADAHAGQAJAGAPAPQAMANASAMQAQAKADAKQACAHgDAPIgEAWIgDAOIgEAPQgDAKABAVIgCAZQgDAQgIAGQgTAOgOAEQgGACgWABQgXABgXAEIgQABQgNAAgOgEg");
	this.shape_5.setTransform(15.7288,12.7029);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,31.5,25.4), null);


(lib.Path_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D65052").s().p("AAMCSIgQgFQgKgKAMgmQANgoAAgJQAGg+gOg1QgFgTgWgNIgqgTQAHgNAbgJQAbgIAMAFIADABQARAJANAaQAKATAFAZQAPA+gDA8QgDAogDAQQgJAmgUABIgUgEg");
	this.shape_6.setTransform(6.7331,14.9574);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,13.5,30), null);


(lib.DiastoleNavigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


(lib.diastoleinternal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


(lib.diastoleexternal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


(lib.arrowhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9BFBC").s().p("AgwAAIgchAICZBAIiZBBg");
	this.shape.setTransform(7.675,6.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowhead, new cjs.Rectangle(0,0,15.4,13), null);


(lib.AnatomyNavigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


(lib.anatomyinternal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97F0FE").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


(lib.anatomyexternal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97F0FF").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape.setTransform(116.925,33.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D3E2").s().p("AyQFSIAAqjMAkhAAAIAAKjg");
	this.shape_1.setTransform(116.925,33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.9,67.5);


// stage content:
(lib.Lynd_BMA359_FA20_Assignment1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Home:0,Choose:50,"Anatomy - external":59,"systole - external":119,"diastole - external":239,"anatomy - internal":359,"systole - internal":479,"diastole - internal":719};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [49,50,59,119,239,479,576,688,719,1033,1040];
	// timeline functions:
	this.frame_49 = function() {
		this.stop();
		
		this.Start_bttn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("Choose");
		}
	}
	this.frame_50 = function() {
		this.stop();
		
		this.Anatomy_Nav.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			this.gotoAndStop("Anatomy - external");
		}
		
		
		this.Diastole_nav.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop("diastole - external");
		}
		
		
		
		this.Systole_Nav.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			this.gotoAndStop("systole - external");
		}
	}
	this.frame_59 = function() {
		this.stop();
		
		this.Home.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("Choose");
		}
		
		
		this.Anatomy_Internal.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop("anatomy - internal");
		}
		
		
		
		this.Anatomy_External.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("Anatomy - external");
		}
	}
	this.frame_119 = function() {
		this.stop();
		
		this.systole_internal.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop("systole - internal");
		}
		
		
		
		this.systole_external.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop("systole - external");
		}
		
		this.Home.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop("Choose");
		}
	}
	this.frame_239 = function() {
		this.stop();
		
		this.diastole_external.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop("diastole - external");
		}
		
		
		
		this.Home.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop("Choose");
		}
		
		
		
		
		
		
		this.diastole_internal.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay("diastole - internal");
		}
	}
	this.frame_479 = function() {
		this.play();
	}
	this.frame_576 = function() {
		this.systole_replay.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("systole - internal");
		}
	}
	this.frame_688 = function() {
		this.stop();
	}
	this.frame_719 = function() {
		this.play();
	}
	this.frame_1033 = function() {
		this.Replay_diastole.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay("diastole - internal");
		}
	}
	this.frame_1040 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1).call(this.frame_50).wait(9).call(this.frame_59).wait(60).call(this.frame_119).wait(120).call(this.frame_239).wait(240).call(this.frame_479).wait(97).call(this.frame_576).wait(112).call(this.frame_688).wait(31).call(this.frame_719).wait(314).call(this.frame_1033).wait(7).call(this.frame_1040).wait(1));

	// heart
	this.instance = new lib.Heart();
	this.instance.setTransform(-216.7,366.8,2.6328,2.6328,0,0,0,77.7,33.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:595,y:358.4},15).wait(1).to({_off:true},5).wait(991));

	// human
	this.instance_1 = new lib.human();
	this.instance_1.setTransform(-291.85,216.8,2.944,2.944,0,0,0,89.8,32.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:409.7},15).wait(1).to({_off:true},20).wait(991));

	// the
	this.instance_2 = new lib.The();
	this.instance_2.setTransform(-187.2,72.1,2.8577,2.8577,0,0,0,51.6,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:147.45},14,cjs.Ease.quadIn).wait(35).to({_off:true},1).wait(991));

	// background_heart
	this.instance_3 = new lib.heart_MC();
	this.instance_3.setTransform(220.2,302.1,1.1238,1.1238,0,0,0,194.8,268.8);
	this.instance_3.alpha = 0.2813;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},50).wait(991));

	// lines_above_valve
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("APPGFIFsAAAtZMGInhAAAUusFI1GHa");
	this.shape.setTransform(554.75,297.5282);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(479).to({_off:false},0).wait(29).to({_off:true},211).wait(322));

	// Layer_14
	this.instance_4 = new lib.valve();
	this.instance_4.setTransform(472.1,371.9,1,1,0,0,0,20.4,14.8);
	this.instance_4._off = true;

	this.instance_5 = new lib.valvey2();
	this.instance_5.setTransform(453.55,375.3,1,1,0,0,0,17.9,19);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(479).to({_off:false},0).to({regX:20.5,rotation:-14.9994,x:472.25,y:361.9},72).wait(95).to({x:472.75},0).wait(72).to({_off:true},1).wait(322));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(719).to({_off:false},0).wait(51).to({x:452.3,y:375.5},0).to({regX:18,regY:18.9,rotation:74.9987,x:465.3,y:398.05},69).wait(100).to({regX:17.9,scaleX:0.9999,scaleY:0.9999,rotation:71.8736,x:465.1,y:396.65},0).to({regY:19,scaleX:1,scaleY:1,rotation:0,x:452.3,y:375.5},93).wait(9));

	// Layer_13
	this.instance_6 = new lib.valve2();
	this.instance_6.setTransform(525.8,320,1,1,0,0,0,12.9,51);
	this.instance_6._off = true;

	this.instance_7 = new lib.valvey();
	this.instance_7.setTransform(482.35,342.35,1,1,0,0,0,12.1,20.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(479).to({_off:false},0).to({regX:13.1,rotation:16.494,x:512.9,y:322.35},72).wait(95).to({x:513.4},0).wait(72).to({_off:true},1).wait(322));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(719).to({_off:false},0).wait(51).to({y:341.5},0).to({regX:12,rotation:-59.9996,x:504.95,y:346},69).wait(100).to({rotation:-57.4996,x:501.65,y:346.55},0).to({regX:12.1,rotation:0,x:482.35,y:341.5},93).wait(1).to({regX:12,rotation:-0.2168},0).wait(8));

	// Layer_12
	this.instance_8 = new lib.valve3();
	this.instance_8.setTransform(534.85,260.85,1.3375,1.32,0,0,0,7.7,13.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.valvey3();
	this.instance_9.setTransform(530.05,334.55,1,1,0,0,0,8.8,17.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(479).to({_off:false},0).wait(72).to({x:534.35},0).to({regX:12.3,regY:16.2,scaleY:1.3199,rotation:-30.0006,x:535,y:255.65},95).wait(2).to({regX:7.7,regY:13.5,scaleY:1.32,rotation:0,x:534.85,y:260.85},70).to({_off:true},1).wait(322));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(719).to({_off:false},0).to({rotation:-28.7993,x:534.85,y:328.4},50,cjs.Ease.quadInOut).to({regY:17.9,rotation:-29.9992,x:535,y:327.9},1).wait(69).to({x:534.8,y:328.05},0).wait(202));

	// Layer_11
	this.instance_10 = new lib.valve4();
	this.instance_10.setTransform(551.75,280.5,1,1,0,0,0,8.2,13.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.vavley4();
	this.instance_11.setTransform(567.85,346.3,1,1,0,0,0,11.1,16.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(479).to({_off:false},0).wait(72).to({x:552.25,y:281},0).to({regX:8.4,regY:13.2,rotation:29.9992,x:557.85,y:279.75},95).wait(2).to({regX:8.2,regY:13.5,rotation:0,x:552.25,y:281},70).to({_off:true},1).wait(322));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(719).to({_off:false},0).to({scaleX:1.1414,scaleY:0.9999,rotation:35.7507,x:566.4,y:337.8},50,cjs.Ease.quadInOut).to({regX:11.2,scaleX:1.1473,scaleY:1,rotation:37.2394,x:566.75,y:337.55},1).wait(69).to({x:566.55,y:337.65},0).wait(202));

	// Layer_10
	this.instance_12 = new lib.valve5();
	this.instance_12.setTransform(568.5,296.05,1,1,0,0,0,6,11.8);
	this.instance_12._off = true;

	this.instance_13 = new lib.valvey5();
	this.instance_13.setTransform(602.05,336.65,1,1,0,0,0,13.2,19.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(479).to({_off:false},0).wait(72).to({x:568.75,y:294.9},0).to({rotation:-14.9992,x:566.25,y:294.4},95).wait(2).to({rotation:0,x:568.75,y:294.9},70).to({_off:true},1).wait(322));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(719).to({_off:false},0).wait(51).to({x:603.15,y:336.2},0).to({regX:13.3,scaleX:0.8854,scaleY:1.0202,rotation:14.999,x:599.65,y:339.35},69).wait(100).to({regX:13.2,scaleX:0.8901,scaleY:1.0193,rotation:14.3734,x:599.8},0).to({scaleX:1,scaleY:1,rotation:0,x:603.15,y:336.2},93).wait(1).to({scaleX:0.9995,rotation:0.0551,x:603.1},0).wait(8));

	// Layer_9
	this.instance_14 = new lib.valve6();
	this.instance_14.setTransform(589.1,296.2,1,1,0,0,0,7,9.6);
	this.instance_14._off = true;

	this.instance_15 = new lib.valvey6();
	this.instance_15.setTransform(623.8,340.2,1,1,0,0,0,8.9,14.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(479).to({_off:false},0).wait(72).to({x:589.6},0).to({rotation:14.9994,x:593.65,y:294.3},95).wait(2).to({rotation:0,x:590.6,y:295.2},70).to({_off:true},1).wait(322));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(719).to({_off:false},0).wait(51).to({x:626.05,y:340.6},0).to({rotation:-29.9992,x:628.65,y:345.3},69).wait(100).to({rotation:-28.7489,x:627.5,y:343.8},0).to({rotation:0,x:626.05,y:340.6},93).wait(9));

	// _
	this.instance_16 = new lib.valve7();
	this.instance_16.setTransform(607.2,321.65,1,1,-14.9992,0,0,7.1,26.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(479).to({_off:false},0).to({rotation:-29.9992,x:611.45,y:316.05},72).wait(167).to({_off:true},1).wait(322));

	// farthest_right
	this.instance_17 = new lib.valve8();
	this.instance_17.setTransform(647.35,340.45,1,1,-14.9992,0,0,21,16.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(479).to({_off:false},0).to({regX:21.1,rotation:14.9992,x:649.3,y:329},72).wait(167).to({_off:true},1).wait(322));

	// head
	this.instance_18 = new lib.arrowhead();
	this.instance_18.setTransform(554.95,425.1,1,1,-90.0009,0,0,7.5,6.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(510).to({_off:false},0).to({regX:7.4,scaleX:0.9999,scaleY:0.9999,rotation:-88.1059,guide:{path:[554.9,425.1,556.3,420.6,556.7,415], orient:'fixed'}},4).to({regX:7.3,regY:6.8,rotation:-111.7863,guide:{path:[556.8,414.9,556.9,413.5,556.9,412,557.1,407.4,556.4,398.6,554.2,370.4,551.8,352.6,550.2,341.6,547.1,323.6,544.9,310.4,542.6,297.1,540.7,286.1,539.5,280.7,537.5,271.7,535.1,264.7,533.2,259.5,529.7,252], orient:'fixed'}},64).to({regX:7.5,regY:6.7,scaleX:1,scaleY:1,rotation:14.9996,guide:{path:[529.7,252.1,528.2,248.9,526.4,245.2,519.4,231.3,517.2,225.9,506.7,201,512.7,182.6,516.5,170.5,527.2,161.3,537.2,152.8,550.5,148.8,562,145.4,576.4,145.1,585.4,144.9,597.3,146.1], orient:'fixed'}},67).to({_off:true},1).wait(151).to({_off:false,regX:7.8,regY:6.4,rotation:89.9991,x:456.5,y:217.3},0).to({scaleX:0.9999,scaleY:0.9999,rotation:15.0001,x:555.25,y:432.75},141).to({_off:true},1).wait(102));

	// head
	this.instance_19 = new lib.arrowhead();
	this.instance_19.setTransform(607.8,154.85,1,1,-45.0006,0,0,7.6,6.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(616).to({_off:false},0).to({regY:6.6,scaleX:0.9999,scaleY:0.9999,rotation:-59.9991,x:624.2,y:127.45},29,cjs.Ease.cubicIn).to({_off:true},1).wait(395));

	// tail
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3BEBC").s().p("AA0hPIiKCnIAAAAICmiLYAJgHABgNgHgIYgHgJgNgBgJAHYAAABgBABgBAB");
	this.shape_1.setTransform(600.25,162.3,1,1,0,0,0,-1.1,1.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(616).to({_off:false},0).wait(1).to({y:162.25},0).wait(1).to({x:600.3,y:162.2},0).wait(1).to({x:600.4,y:162.05},0).wait(1).to({x:600.55,y:161.8},0).wait(1).to({x:600.7,y:161.55},0).wait(1).to({x:600.9,y:161.25},0).wait(1).to({x:601.15,y:160.85},0).wait(1).to({x:601.4,y:160.4},0).wait(1).to({x:601.7,y:159.9},0).wait(1).to({x:602.05,y:159.35},0).wait(1).to({x:602.45,y:158.7},0).wait(1).to({x:602.85,y:158},0).wait(1).to({x:603.3,y:157.3},0).wait(1).to({x:603.8,y:156.45},0).wait(1).to({x:604.3,y:155.6},0).wait(1).to({x:604.9,y:154.7},0).wait(1).to({x:605.45,y:153.7},0).wait(1).to({x:606.1,y:152.65},0).wait(1).to({x:606.75,y:151.55},0).wait(1).to({x:607.5,y:150.4},0).wait(1).to({x:608.2,y:149.2},0).wait(1).to({x:609,y:147.9},0).wait(1).to({x:609.8,y:146.55},0).wait(1).to({x:610.65,y:145.2},0).wait(1).to({x:611.55,y:143.7},0).wait(1).to({x:612.45,y:142.2},0).wait(1).to({x:613.45,y:140.65},0).wait(1).to({x:614.4,y:139},0).wait(1).to({x:615.45,y:137.3},0).to({_off:true},1).wait(395));

	// head
	this.instance_20 = new lib.arrowhead();
	this.instance_20.setTransform(579.15,142,1,1,-45.0006,0,0,7.7,6.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(616).to({_off:false},0).to({scaleX:0.9999,scaleY:0.9999,rotation:-59.9991,x:598.75,y:110.8},29,cjs.Ease.quadIn).to({_off:true},1).wait(395));

	// tail
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3BEBC").s().p("AA+hVIieCyIAAAAIC5iVYAJgHABgNgHgIYgGgJgNgBgJAHYgBAAAAABgBAB");
	this.shape_2.setTransform(571.1,150.4,1,1,0,0,0,-1.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3BEBC").s().p("AA+hVIieCyIAAAAIC5iVYAJgHABgNgHgJYgHgIgMgCgJAHYgBABgBABAAAB");
	this.shape_3.setTransform(571.2,150.25,1,1,0,0,0,-1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3BEBC").s().p("AA9hWIicCzIAAAAIC4iWYAJgHABgMgHgJYgHgJgNgBgIAHYgBABgBABgBAA");
	this.shape_4.setTransform(571.6,149.65,1,1,0,0,0,-1.1,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3BEBC").s().p("AA9hWIicC0IAAAAIC4iXYAJgHABgNgHgIYgHgJgNgBgIAHYgBABgBAAgBAB");
	this.shape_5.setTransform(571.85,149.3,1,1,0,0,0,-1.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3BEBC").s().p("AA9hWIicC0IAAAAIC4iXYAIgHABgNgHgJYgHgIgMgBgJAHYgBAAgBABAAAB");
	this.shape_6.setTransform(572.1,148.95,1,1,0,0,0,-1.1,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3BEBC").s().p("AA8hWIibC0IAAAAIC3iYYAJgHABgMgHgJYgHgIgNgCgIAIYgBAAgBABgBAB");
	this.shape_7.setTransform(572.45,148.5,1,1,0,0,0,-1.1,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3BEBC").s().p("AA8hWIiaC0IAAAAIC2iYYAIgHACgNgIgIYgHgJgMgBgJAHYgBABgBABAAAB");
	this.shape_8.setTransform(572.8,148,1,1,0,0,0,-1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3BEBC").s().p("AA8hXIiaC2IAAAAIC2iZYAIgIACgMgIgJYgHgIgMgBgJAHYgBABgBAAAAAB");
	this.shape_9.setTransform(573.2,147.45,1,1,0,0,0,-1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3BEBC").s().p("AA7hXIiYC2IAAAAIC0iaYAJgHABgNgHgIYgIgJgMgBgJAIYgBAAAAABgBAB");
	this.shape_10.setTransform(573.6,146.8,1,1,0,0,0,-1.1,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3BEBC").s().p("AA7hXIiYC3IAAAAIC0ibYAJgIAAgMgHgJYgHgIgNgBgIAHYgBABgBABAAAB");
	this.shape_11.setTransform(574.1,146.15,1,1,0,0,0,-1.1,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3BEBC").s().p("AA6hYIiWC4IAAAAICzicYAIgHABgNgIgIYgHgJgNAAgIAHYgBABgBAAAAAB");
	this.shape_12.setTransform(574.6,145.4,1,1,0,0,0,-1.1,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3BEBC").s().p("AA5hYIiVC5IAAAAICyieYAJgHAAgNgHgIYgHgIgNgBgIAHYgBABgBABgBAB");
	this.shape_13.setTransform(575.2,144.6,1,1,0,0,0,-1.1,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3BEBC").s().p("AA5hZIiVC6IAAAAICyieYAIgHABgNgHgIYgIgJgNAAgIAHYgBABAAABgBAA");
	this.shape_14.setTransform(575.8,143.75,1,1,0,0,0,-1.1,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3BEBC").s().p("AA4hZIiTC7IAAAAICwigYAIgHABgNgHgIYgIgJgNAAgIAHYgBABAAABgBAB");
	this.shape_15.setTransform(576.4,142.85,1,1,0,0,0,-1.1,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3BEBC").s().p("AA3haIiRC8IAAAAICvihYAIgHABgNgIgIYgHgIgNgBgIAIYgBABgBABgBAA");
	this.shape_16.setTransform(577.1,141.9,1,1,0,0,0,-1.1,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3BEBC").s().p("AA3haIiRC9IAAAAICuiiYAIgIABgNgIgIYgHgIgNAAgIAHYgBABgBABAAAB");
	this.shape_17.setTransform(577.85,140.85,1,1,0,0,0,-1.1,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3BEBC").s().p("AA2hbIiPC/IAAAAICtikYAIgIAAgNgIgIYgHgIgNAAgIAIYgBAAgBABAAAB");
	this.shape_18.setTransform(578.6,139.75,1,1,0,0,0,-1.1,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F3BEBC").s().p("AA1hbIiNDAIAAAAICrimYAIgIAAgNgIgIYgHgIgNAAgIAIYgBABgBABAAAB");
	this.shape_19.setTransform(579.4,138.6,1,1,0,0,0,-1.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F3BEBC").s().p("AA0hcIiLDBIAAAAICpinYAIgIAAgNgHgHYgIgIgNAAgIAHYgBABAAABgBAB");
	this.shape_20.setTransform(580.25,137.4,1,1,0,0,0,-1.1,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3BEBC").s().p("AAzhdIiKDDIAAAAICpipYAIgIAAgNgIgIYgIgHgNAAgIAIYgBAAAAABgBAB");
	this.shape_21.setTransform(581.15,136.15,1,1,0,0,0,-1.1,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3BEBC").s().p("AAyheIiIDFIAAAAICnirYAIgIgBgNgIgIYgHgHgNAAgIAIYgBABAAABgBAA");
	this.shape_22.setTransform(582.1,134.8,1,1,0,0,0,-1.1,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3BEBC").s().p("AAxheIiGDGIAAAAIClitYAIgIgBgNgIgIYgIgHgMAAgIAIYgBABgBABAAAB");
	this.shape_23.setTransform(583.05,133.4,1,1,0,0,0,-1.1,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3BEBC").s().p("AAwhfIiEDIIAAAAICjivYAIgIAAgNgJgIYgIgHgMAAgIAIYgBABAAABgBAB");
	this.shape_24.setTransform(584.05,132,1,1,0,0,0,-1.1,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3BEBC").s().p("AAvhgIiCDKIAAAAICiixYAHgJgBgMgIgIYgIgHgNAAgHAJYgBAAgBABAAAB");
	this.shape_25.setTransform(585.1,130.5,1,1,0,0,0,-1.1,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3BEBC").s().p("AAuhhIiADMIAAAAICgi0YAHgIgBgNgIgHYgIgHgNAAgHAJYgBAAgBABAAAB");
	this.shape_26.setTransform(586.2,128.9,1,1,0,0,0,-1.1,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3BEBC").s().p("AAthhIh+DNIAAAAICei2YAHgIgBgNgIgHYgJgHgMABgHAIYgBABgBABAAAB");
	this.shape_27.setTransform(587.35,127.3,1,1,0,0,0,-1.1,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3BEBC").s().p("AArhiIh7DPIAAAAICci4YAHgJgBgMgJgHYgIgIgNABgHAJYgBABAAABgBAB");
	this.shape_28.setTransform(588.55,125.6,1,1,0,0,0,-1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2,p:{y:150.4}}]},616).to({state:[{t:this.shape_2,p:{y:150.35}}]},1).to({state:[{t:this.shape_3,p:{x:571.2,y:150.25}}]},1).to({state:[{t:this.shape_3,p:{x:571.3,y:150.1}}]},1).to({state:[{t:this.shape_3,p:{x:571.45,y:149.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[]},388).wait(7));

	// extra_head
	this.instance_21 = new lib.arrowhead();
	this.instance_21.setTransform(549.45,145.05,1,1,-104.9992,0,0,7.7,6.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(616).to({_off:false},0).to({regX:7.6,rotation:-90,x:535.45,y:100.85},29,cjs.Ease.quadIn).to({_off:true},1).wait(395));

	// tail
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3BEBC").s().p("AhGhcYAAAAABAEABAHYABAEABAEABAFYABAFACAGABAGYACAGACAGACAHYADAHACAHADAHYADAIADAGADAIYAEAHAEAIAEAHYAEAHAFAHAFAHYAEAGAGAGAEAGYAGAGAFAFAGAFYAFAEAGAEAFADYAFADAFAEAEACYAFACAEACADABYAHACADACAAAAIAAAAYAAAAgDgCgGgEYgDgBgEgDgEgDYgEgCgEgEgFgEYgEgEgFgEgEgFYgFgFgEgGgEgGYgEgGgEgGgDgHYgDgHgDgHgDgHYgDgHgDgHgCgIYgCgGgBgHgCgHYgCgIgBgHgBgGYgBgHgBgGAAgGYgBgFAAgGgBgEYAAgFAAgEgBgEYAAgHAAgEAAAAYgBgLgJgIgLAAYgLABgJAJABALYAAABAAABAAAB");
	this.shape_29.setTransform(556.2,154.85,1,1,0,0,0,1,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F3BEBC").s().p("AhGhcYAAAAABAEACAHYAAAEABAEABAFYACAFABAGACAGYABAGACAGACAHYADAHACAHADAHYADAIADAGADAIYAEAHAEAHAEAIYAEAHAFAHAFAHYAEAGAGAGAEAGYAGAGAFAFAGAEYAFAFAGAEAFADYAFADAFAEAEACYAFACADACAEABYAGACAEACAAAAIAAAAYAAAAgDgCgGgEYgEgBgDgDgEgDYgEgCgEgEgFgEYgEgEgFgEgEgFYgFgFgEgGgEgGYgEgGgEgGgDgHYgDgHgDgHgDgHYgDgHgCgIgCgHYgDgGgBgIgCgHYgBgHgCgHgBgGYgBgHAAgGgBgGYgBgFAAgGgBgEYAAgFAAgEAAgEYgBgHAAgEAAAAYgBgLgJgIgLAAYgLABgJAJABALYAAABAAABAAAB");
	this.shape_30.setTransform(556.15,154.8,1,1,0,0,0,1,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F3BEBC").s().p("AhGhcYAAAAABAEACAHYAAAEABAEABAFYACAFABAFACAGYABAGACAHACAHYADAHACAHADAHYADAIADAGADAIYAEAHAEAHAEAIYAEAHAFAHAFAHYAEAGAGAGAEAGYAGAGAFAFAFAFYAGAEAGAEAEAEYAGADAEADAFACYAFACADACAEABYAGADAEABAAAAIAAAAYAAAAgDgCgGgDYgEgCgDgDgEgCYgEgDgEgEgFgDYgEgFgFgEgEgFYgFgFgEgGgEgGYgEgGgEgGgDgHYgDgHgDgHgDgHYgDgHgCgIgCgHYgDgGgBgIgCgHYgBgHgCgHgBgGYgBgHAAgGgBgGYgBgGAAgFgBgEYAAgFAAgFAAgDYgBgHAAgEAAAAYgBgLgJgJgLABYgLABgJAJABALYAAABAAABAAAB");
	this.shape_31.setTransform(556.1,154.65,1,1,0,0,0,1,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3BEBC").s().p("AhFhcYAAAAAAAEACAHYABADAAAEACAFYABAFABAGACAGYACAGACAHACAHYACAGACAIADAHYADAHADAHAEAHYADAIAEAHAEAHYAFAHAEAIAFAGYAFAHAFAGAEAGYAGAGAFAFAGAEYAFAFAGAEAEADYAGADAEAEAFACYAEACAEACAEABYAGADAEABAAAAIAAAAYAAAAgEgCgGgDYgDgCgDgDgEgCYgEgDgEgEgFgEYgEgEgFgEgEgFYgEgFgFgGgEgGYgEgGgEgGgDgHYgDgHgDgHgDgHYgCgIgDgHgCgHYgCgHgCgHgBgHYgCgHgBgHgBgHYgBgGgBgGgBgGYAAgGgBgFAAgFYgBgEAAgFAAgDYgBgHAAgEAAAAYAAgLgKgJgLABYgLAAgIAKAAALYAAABAAABABAB");
	this.shape_32.setTransform(556,154.5,1,1,0,0,0,1,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3BEBC").s().p("AhFhcYAAAAABAEABAGYABAEABAEABAFYABAFACAGABAGYACAGACAGACAHYADAHACAHADAHYADAIADAGADAIYAEAHAEAIAEAHYAEAHAEAHAFAHYAFAHAFAGAEAGYAGAFAFAGAGAEYAFAFAFAEAFAEYAGADAEADAFACYAEACAEACADACYAHACAEACAAAAIAAAAYAAAAgEgCgGgEYgDgCgDgCgEgDYgEgDgEgEgFgDYgEgFgFgEgEgFYgEgFgFgGgEgGYgEgGgEgHgDgHYgDgGgCgIgDgHYgDgHgDgHgCgIYgCgGgBgHgCgHYgCgIgBgHgBgGYgBgHgBgGgBgGYAAgFgBgGAAgEYAAgFgBgEAAgEYAAgHgBgEAAAAYAAgLgKgIgLAAYgLABgIAJAAALYAAABABACAAAB");
	this.shape_33.setTransform(555.8,154.2,1,1,0,0,0,1,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F3BEBC").s().p("AhFhdYAAAAABAEACAHYABADAAAEACAFYABAFABAGACAGYACAGACAHACAHYACAGACAIADAHYADAHADAHAEAHYADAIAEAHAEAHYAEAIAFAHAEAHYAFAGAFAHAEAFYAGAGAFAGAFAEYAFAFAGAEAFAEYAFADAFADAEACYAFADAEACADABYAGADAEABAAAAIAAAAYAAAAgDgCgGgDYgDgCgEgDgEgDYgEgCgEgEgEgEYgEgFgFgEgEgFYgEgFgEgGgFgGYgDgHgEgGgEgHYgCgHgDgHgDgHYgCgHgDgIgCgHYgCgGgCgIgCgHYgBgHgBgHgBgHYgBgGgBgGgBgGYgBgGAAgFAAgFYgBgEAAgFAAgDYgBgHAAgFAAAAYgBgLgJgIgLABYgLAAgJAKABALYAAABAAABAAAB");
	this.shape_34.setTransform(555.6,153.85,1,1,0,0,0,1,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F3BEBC").s().p("AhEhdYAAAAABAEACAGYAAAEABAEABAFYACAFABAGACAGYACAGABAGADAHYACAHACAHADAHYADAIADAGADAIYAEAHAEAHAEAIYAEAHAEAHAFAHYAEAHAGAGADAGYAGAGAFAFAFAFYAFAFAGAEAFAEYAFADAEADAFADYAEACAEACADABYAHADADACAAAAIAAAAYAAAAgDgCgGgEYgDgCgDgDgEgDYgEgCgEgEgEgEYgEgFgFgEgEgFYgEgGgEgGgEgGYgEgGgEgGgDgHYgDgHgCgHgDgIYgDgHgCgHgCgIYgDgGgBgHgCgHYgBgIgBgHgCgGYgBgHAAgGgBgGYgBgGAAgFgBgEYAAgFAAgFgBgDYAAgHAAgEAAAAYgBgLgKgIgLAAYgLABgIAKABALYAAABAAABAAAB");
	this.shape_35.setTransform(555.35,153.4,1,1,0,0,0,1,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3BEBC").s().p("AhDheYAAAAABAEABAHYABADABAEABAFYABAFACAGABAGYACAGACAGACAHYADAHACAHADAHYADAIADAGADAIYADAHAEAIAEAHYAEAHAEAIAFAGYAFAHAFAGAEAHYAFAFAFAGAFAFYAFAFAGAEAEAEYAGADAEAEAEACYAFACADADAEABYAGADAEACAAAAIAAAAYAAAAgDgCgGgEYgDgCgEgDgDgDYgEgDgEgEgEgEYgEgEgFgFgEgFYgEgGgEgGgEgGYgEgGgDgHgEgHYgCgHgDgHgDgHYgCgIgDgHgCgHYgCgHgBgHgCgHYgCgHgBgHgBgHYgBgHgBgGAAgGYgBgGgBgFAAgEYgBgFAAgFAAgDYgBgHAAgEAAAAYgBgLgJgJgLABYgLABgJAKABALYAAABAAABABAB");
	this.shape_36.setTransform(555.05,152.9,1,1,0,0,0,1,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3BEBC").s().p("AhChfYAAAAABAEABAHYABAEABAEABAFYABAFACAFACAGYADAMAEAOAGAPYADAHADAHADAHYADAHAEAIAEAHYAEAIAEAHAFAHYAEAGAFAHAEAGYAFAGAFAGAFAEYAFAGAFAEAFAEYAFADAEAEAFACYAEADAEACADACYAGADAEABAAAAIAAAAYAAAAgDgCgGgEYgDgCgDgDgEgDYgEgDgEgEgEgEYgEgFgEgEgEgGYgEgFgEgGgEgGYgDgHgEgGgDgHYgDgHgCgIgDgHYgCgHgDgIgCgGYgCgHgBgIgCgHYgDgOgCgOgBgLYgBgGgBgFAAgFYAAgFgBgEAAgEYgBgHAAgEAAAAYgBgLgJgIgLABYgLABgJAJABALYAAABAAABABAB");
	this.shape_37.setTransform(554.7,152.3,1,1,0,0,0,1,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F3BEBC").s().p("AhBhgYAAAAABAEABAHYACAHACAKAEAMYADAMAFAOAFAPYADAHADAHADAHYADAHAEAIAEAHYAEAIAEAHAEAHYAFAHAFAGADAGYAFAGAFAGAFAFYAFAFAFAFAFAEYAJAIAJAFAGADYAGAEAEACAAAAIAAAAYAAAAgDgDgGgEYgGgEgHgHgIgJYgEgEgEgFgEgGYgEgFgDgGgEgHYgEgGgDgHgDgHYgDgHgCgHgDgIYgCgHgDgIgBgGYgDgHgBgIgCgHYgDgOgCgOgBgMYgBgLgBgKgBgHYgBgHAAgEAAAAYgBgLgJgIgLABYgLAAgJAKABALYAAABAAABABAB");
	this.shape_38.setTransform(554.3,151.6,1,1,0,0,0,1,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3BEBC").s().p("AhAhhYAAAAABAEABAHYACAHADAKADAMYADAMAFAOAFAPYADAHADAHADAHYADAHAEAIAEAHYAEAIAEAHAEAHYAEAHAFAGAEAHYAEAGAFAGAFAFYAFAFAFAFAEAEYAKAIAIAGAGADYAGAEAEACAAAAIAAAAYAAAAgDgDgGgEYgFgFgIgHgHgJYgEgEgEgFgEgGYgEgFgDgHgEgGYgDgHgEgGgDgIYgDgHgBgHgDgIYgCgHgDgHgBgHYgDgHgBgIgCgHYgCgOgDgOgBgMYgBgLgBgKgBgHYgBgHAAgEAAAAYgBgLgJgIgMABYgLAAgIAKABALYAAABAAABABAB");
	this.shape_39.setTransform(553.85,150.85,1,1,0,0,0,1,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F3BEBC").s().p("Ag/hiYAAAAABAEABAHYACAHADAKADAMYAEAMAEAOAGAOYACAIADAHAEAHYADAHADAIAEAHYAEAIAEAHAEAHYAEAHAEAHAEAGYAFAGAEAGAFAFYAFAGAFAFAEAEYAJAIAIAGAGAEYAGAEAEACAAAAIAAAAYAAAAgDgDgGgEYgFgFgHgHgHgJYgEgFgEgFgEgGYgDgGgEgGgDgHYgDgGgEgHgDgHYgCgIgDgHgCgHYgCgIgCgHgCgHYgCgHgCgIgBgHYgDgPgCgNgCgMYgBgMgBgJgBgHYgBgIAAgEAAAAYgBgLgKgIgLABYgLABgIAKABALYAAABAAABABAB");
	this.shape_40.setTransform(553.35,150.05,1,1,0,0,0,1,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3BEBC").s().p("Ag+hjYAAAAABAEACAHYABAHADAKAEAMYADAMAFAOAFAOYADAHADAIADAGYADAIAEAIADAHYAEAIAEAHAEAHYAEAHADAHAFAGYAEAHAFAGAEAFYAFAGAEAFAFAEYAEAEAEAEAEADYAEADADADADACYAGAEAEACAAAAIAAAAYAAAAgDgDgGgEYgCgDgDgDgDgDYgEgEgDgEgEgFYgOgTgOgdgIgeYgDgIgCgIgCgGYgCgIgBgHgCgHYgDgPgCgOgBgLYgCgMgBgKgBgHYAAgHgBgEAAAAYgBgLgKgIgLABYgLABgIAKABALYABABAAABAAAB");
	this.shape_41.setTransform(552.8,149.1,1,1,0,0,0,1,1.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3BEBC").s().p("Ag8hkYAAAAAEAQAGAXYACAGACAGADAHYACAHACAHADAIYADAHADAHADAHYABAEACAEABADIAGAMYAEAHADAIAEAHYAEAHADAHAEAGYAEAHAFAGAFAFYACADACADACADYACACACACACADYAFAEAEAEADAEYAEADAEACACADYAGAEADADAAAAIAAAAYAAAAgDgDgEgGYgDgCgDgDgDgEYgDgEgDgEgEgFYgBgDgCgCgCgDYgCgDgBgDgCgDYgDgGgEgGgCgHYgDgHgDgHgDgHYgDgHgCgIgCgIIgDgLYgBgEgBgDgBgDYgBgIgCgHgCgIYgBgHgBgHgBgHYgBgGgCgHAAgGYgDgYgCgQAAAAYgBgLgKgIgLACYgLABgIAKABALYAAABAAABABAB");
	this.shape_42.setTransform(552.2,148.1,1,1,0,0,0,1,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3BEBC").s().p("Ag7hlYAAAAAEAPAHAYYAEAMAFAOAEAOYADAIADAHADAHYACAEABADACAEIAFAMYAEAHADAIAEAHYAEAHADAHAEAHYAEAGAFAGAEAGYACADACADACADYACACACADACACYAEAEAEAFADADYAEAEAEACACADYAGAEADADAAAAIAAAAYAAAAgDgDgEgFYgDgDgDgDgDgEYgCgEgDgFgEgFYgBgCgCgDgCgDYgBgDgCgDgBgDYgDgGgEgGgDgHYgCgHgDgHgDgIYgDgHgCgIgCgHIgCgMYgBgEgBgDgBgDYgCgIgCgIgBgHYgCgHgBgHgBgHYgBgHgBgGgBgGYgDgYgCgQAAAAYgBgLgKgIgLABYgLABgIAKABALYAAABABACAAAB");
	this.shape_43.setTransform(551.6,147,1,1,0,0,0,1,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3BEBC").s().p("Ag5hnYAAAAAEAQAHAXYAEAMAFAOAEAPYADAHADAIADAHYADAHADAIAEAHYADAIAEAHADAIYAEAHADAHAEAHYADAHAFAGAEAGYAEAGAEAFAEAFYAEAFADAEAEAEYADAEADADADACYAFAFADADAAAAIAAAAYAAAAgCgDgFgGYgCgDgDgDgDgEYgCgEgDgFgDgFYgDgGgDgFgDgHYgDgGgDgGgDgIYgCgHgDgHgDgHYgCgIgCgIgCgIYgDgHgBgHgBgIYgCgHgCgIgBgHYgDgPgCgOgCgMYgDgYgCgQAAAAYgCgLgKgIgLABYgLACgHAKABALYAAABAAABABAB");
	this.shape_44.setTransform(550.9,145.9,1,1,0,0,0,1,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F3BEBC").s().p("Ag4hpYAAAAAFAQAHAYYAEAMAFAOAFAOYACAIADAHADAIYADAHADAHAEAIYADAIAEAHADAIYADAHAEAHADAHYAEAHAEAGAEAGYADAHAEAFAEAFYAEAFADAFADAEYADAEAEADACACYAFAGADADAAAAIAAAAYAAAAgDgEgEgGYgCgDgCgDgDgEYgCgFgDgFgDgFYgDgFgCgGgDgHYgDgGgDgHgCgHYgDgHgCgIgDgHYgCgIgCgIgCgIYgDgHgBgHgCgIYgBgIgBgIgCgHYgDgPgCgOgCgMYgDgYgDgQAAAAYgBgLgKgIgLACYgLABgIAKABALYABABAAABAAAB");
	this.shape_45.setTransform(550.15,144.65,1,1,0,0,0,1,1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F3BEBC").s().p("Ag2hqYAAAAAFAPAHAYYAEAMAFAOAFAPYADAHACAIADAIYADAGADAIAEAIYADAHADAIAEAIYACAHAEAHADAHYADAHAFAHADAGYAEAGADAGAEAFYADAFADAFADAEYADAEADAEACADYAFAFADADAAAAIAAAAYAAAAgCgDgEgGYgCgEgCgDgDgFYgCgEgCgFgDgGYgDgFgCgGgDgHYgCgHgDgGgCgIYgCgHgDgHgCgIYgCgIgCgIgCgIYgDgHgBgHgCgIYgCgIAAgIgCgHYgCgPgDgOgCgMYgDgZgDgQAAAAYgBgLgLgIgLACYgKACgIAKACALYAAABAAABAAAB");
	this.shape_46.setTransform(549.4,143.35,1,1,0,0,0,1,1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F3BEBC").s().p("Ag0hsYAAAAAFAQAHAXYAEAMAFAOAFAPYAGAPAFAPAHAPYADAIADAIACAIYAEAHADAIAEAHYADAHAEAHADAGYADAGADAGAEAGYADAFADAFADAEYACAFADADACADYAFAGACADAAAAIAAAAYAAAAgCgDgDgHYgCgDgCgEgCgFYgCgEgCgFgDgGYgCgGgCgGgDgHYgCgHgDgGgCgIYgCgHgCgIgCgIYgCgIgCgIgCgIYgEgPgDgQgDgPYgCgPgDgOgCgMYgEgZgCgQAAAAYgCgLgKgIgLACYgLACgHAKABALYAAABABABAAAB");
	this.shape_47.setTransform(548.6,141.95,1,1,0,0,0,1,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F3BEBC").s().p("AgyhuYAAAAAFAQAIAYYAEAMAFAOAFAPYAFAPAGAPAGAPYADAIADAIACAIYAEAHADAIADAHYADAHAEAHADAHYADAGADAHADAFYAGALAFAKAEAGYAEAGACAEAAAAIAAAAYAAAAgCgEgDgHYgDgHgEgKgEgLYgCgGgCgHgCgHYgCgGgCgIgCgHYgCgIgCgHgCgIYgCgIgCgIgCgJYgEgPgDgQgDgPYgCgQgCgOgCgMYgEgZgDgRAAAAYgCgLgKgHgLACYgLACgHAKACALYAAABAAABAAAB");
	this.shape_48.setTransform(547.7,140.45,1,1,0,0,0,1,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F3BEBC").s().p("AgwhwYAAAAAFAQAJAYYAEAMAEAOAFAPYAGAPAGAQAGAPYADAIACAIACAIYAEAIADAHADAIYADAHADAHADAHYADAGACAHADAGYALAWAIAQAAAAIAAAAYAAAAgFgRgIgYYgCgGgCgGgBgHYgCgHgCgIgCgHYgCgIgCgIgCgIYgCgIgBgIgCgIYgEgQgDgQgDgQYgDgPgCgPgCgMYgEgZgDgRAAAAYgCgLgLgHgKACYgLACgIAKACALYABABAAABAAAB");
	this.shape_49.setTransform(546.8,138.9,1,1,0,0,0,1,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F3BEBC").s().p("AgthzYAAAAAWBBAXBAYABAIADAIADAIYADAIADAIADAHYAGAPAFAOAFAMYAJAYAGAQAAAAIAAAAYAAAAgDgQgGgaYgDgMgDgPgEgPYgCgIgCgIgBgIYgCgIgCgJgBgIYgNhDgMhDAAAAYgCgLgKgHgLACYgLACgHALACALYAAAAAAABABABIAAAA");
	this.shape_50.setTransform(545.85,137.3,1,1,0,0,0,1,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F3BEBC").s().p("Agrh1IBYEGIAAAAIgxkQIAAAAYgCgLgLgHgLACYgLACgHAKACALYAAABABABAAAB");
	this.shape_51.setTransform(544.8,135.55,1,1,0,0,0,1,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F3BEBC").s().p("Agph4YAAAAAGARAJAZYAEAMAFAPAGAQYAFAPAFARAFAPYADAJACAIADAIYADAIACAJACAHYAFAQAFAPADANYAGAZAFARAAAAIAAAAYAAAAgCgRgDgbYgBgNgDgPgCgQYgCgIgBgJgBgJYgCgIgBgJgCgIYgDgRgDgRgDgRYgDgQgDgPgCgNYgGgagCgRAAAAYgCgLgLgHgLACYgKACgHALACALYAAABAAABAAAA");
	this.shape_52.setTransform(543.75,133.8,1,1,0,0,0,1,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F3BEBC").s().p("Agmh6YAAAAAGARAJAZYAEANAGAOAFAQYAFAQAEARAGAQYACAIADAJADAIYACAIACAJACAIYACAIACAIACAHYACAIACAHABAGYAFAaADASAAAAIAAAAYAAAAgBgSgBgbYAAgHgBgHgBgHYAAgIgBgIgBgJYgBgIgBgJgBgIYgCgJgBgJgCgJYgDgRgDgRgDgRYgDgRgDgPgDgNYgFgagDgSAAAAYgCgLgKgHgLACYgLADgHAKACALYAAABABABAAAB");
	this.shape_53.setTransform(542.65,131.95,1,1,0,0,0,1,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3BEBC").s().p("Agkh8YAAAAAGARAKAZYAEANAFAPAGAQYAFAQAFARAFAQYACAJADAIACAJYACAJACAIACAIYACAIACAIABAIYACAIABAHABAGYABAHABAGABAGYAAAFABAFAAAEYABAIAAAEAAAAIAAAAYAAAAAAgEABgIYAAgEAAgFAAgFYAAgGAAgGAAgHYAAgHAAgHAAgIYgBgIAAgIgBgJYgBgIgBgJgBgJYgBgJgCgJgBgJYgCgRgEgSgDgRYgDgRgDgQgDgNYgGgbgEgSAAAAYgBgLgLgGgLACYgLACgGALACALYAAABAAABABAB");
	this.shape_54.setTransform(541.6,130,1,1,0,0,0,1,1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F3BEBC").s().p("Agjh/YAAAAAHARAKAaYAEANAFAPAGAQYAEARAGARAEARYADAIACAJACAJYACAJACAJACAIYACAIAAAJACAHYABAIABAIABAGYAAAHABAHAAAFYAAAGAAAFAAAEYAAAIAAAEAAAAIAAAAYAAAAABgEABgIYAAgEABgFABgGYAAgFAAgHABgHYAAgHAAgHAAgIYAAgIAAgJgBgJYAAgIgBgJgBgKYgBgJgBgJgBgJYgCgSgEgSgDgSYgDgRgDgQgDgOYgGgbgFgSAAAAYgCgLgKgGgLACYgKADgHAKACALYABABAAABAAAB");
	this.shape_55.setTransform(540.45,127.95,1,1,0,0,0,0.9,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3BEBC").s().p("AgjiCYAAAAAHASALAaYAEANAGAPAGARYABAIADAJACAIYACAFABAEABAFIAEAMYACAJACAJACAJYACAJACAJABAJYACAIAAAJABAIYABAEAAAEABAEYAAADAAAEAAADYAAAIAAAGABAGYgBAFAAAFgBAEYAAAJAAAEAAAAIAAAAYAAAAAAgEACgIYABgEABgFABgGYABgGAAgGABgHYABgEAAgEAAgEYAAgDAAgEABgEYAAgJAAgIAAgJYgBgJAAgJgBgKYAAgJgCgKgBgJIgBgOYgBgEgBgFAAgFYgCgJgBgJgCgJYgEgSgDgQgDgOYgHgcgEgSAAAAYgDgLgKgGgLACYgKADgHALADAKYAAABAAABAAAB");
	this.shape_56.setTransform(539.3,125.85,1,1,0,0,0,0.8,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F3BEBC").s().p("AgiiFYAAAAAHASALAbYACAGADAIADAHYACAIADAIADAIYABAJADAJADAJYADAJACAIACAJYACAJACAKACAJYABAJABAJACAJYABAJAAAJABAIYAAAEAAAEAAAEYAAAEAAADAAAEYAAAHAAAHAAAFYgBAGgBAFgBAEYgBAJAAAFAAAAIAAAAYAAAAABgFACgIYABgEACgFABgGYABgGABgGABgIYABgDABgEAAgEYABgEAAgEAAgEYAAgIABgJAAgKYAAgJAAgJAAgKYAAgKgCgJgBgKYAAgJgBgKgCgJYgCgKgBgJgBgJYgCgJgCgJgCgIYgCgJgBgIgCgHYgHgcgFgTAAAAYgDgKgKgHgKADYgLADgHALADAKYAAABABABAAAB");
	this.shape_57.setTransform(538.2,123.65,1,1,0,0,0,0.7,1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F3BEBC").s().p("AgiiIYAAAAAIASALAcYACAGADAIADAHYACAIAEAIABAJYADAJACAJADAJYADAJACAJACAJYABAKADAJABAKYABAJABAJABAKYABAJAAAIAAAJYABAIgBAIgBAHYAAAIAAAGgBAGYgCAGgBAFAAAFYgCAIgBAFAAAAIAAAAYAAAAABgFADgIYACgEABgFACgGYACgGABgGACgIYABgHACgIABgJYAAgIABgJABgKYAAgJAAgKAAgKYABgKgCgKgBgKYAAgJgBgKgCgKYgBgJgCgKgBgJYgCgKgCgJgCgIYgCgJgBgIgCgHYgIgdgFgTAAAAYgDgLgKgGgKADYgLADgGALACAKYABABAAABAAAB");
	this.shape_58.setTransform(537.15,121.4,1,1,0,0,0,0.7,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},616).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[]},1).to({state:[]},388).wait(7));

	// tail
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F3BEBC").s().p("AgTh3IATEFIAAAAIAUkFYABgMgIgJgLgBYgLgBgJAIgBALYAAABAAACAAAB");
	this.shape_59.setTransform(554.85,440.75,1,1,0,0,0,0,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F3BEBC").s().p("AgTh4YAAAAAFBCAFBBYACBCACBBAAAAIAAAAYAAAAAHhBAIhCYAFhBAFhCAAAAYABgLgIgJgLgBYgKgBgKAIgBALYAAABAAABAAAB");
	this.shape_60.setTransform(554.8,438.7,1,1,0,0,0,-0.3,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F3BEBC").s().p("AgTh4YAAAAABARACAYYABANACAOAAAQYABAPABAQABAQYAAAQAAAQABAQYAAAPAAAPgBAMYgBAZAAARAAAAIAAAAYAAAAADgRAEgYYADgMABgPACgPYACgQADgQACgRYACgPABgRACgPYACgQAAgOABgNYACgZABgQAAAAYABgLgJgKgLAAYgKgBgJAIgBALYAAABAAABAAAB");
	this.shape_61.setTransform(554.75,436.6,1,1,0,0,0,-0.6,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F3BEBC").s().p("AgTh4YAAAAACARACAYYAAAHABAGABAHYAAAIAAAHABAIYAAAPABAQABAQYAAAIgBAIAAAIYAAAIAAAIAAAIYAAAIAAAHgBAHYAAAIgBAGAAAGYgCAZgBARAAAAIAAAAYAAAAADgQAGgZYABgGACgGACgHYABgHABgIAAgIYACgHABgIACgIYABgJACgIABgIYABgQACgRACgPYABgIABgIAAgHYABgHAAgHAAgGYACgZABgQAAAAYABgMgJgJgLgBYgKAAgJAIgBALYAAABAAABAAAB");
	this.shape_62.setTransform(554.8,434.55,1,1,0,0,0,-0.8,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F3BEBC").s().p("AgRh4YAAAAACARACAZYAAAGABAHABAHYAAAHABAHAAAIYAAAPAAARABAPYAAAIgBAIAAAIYgBAJAAAIAAAHYgBAIAAAIgBAHYgBAHgBAGAAAHYgEAYgCARAAAAIAAAAYAAAAAFgQAHgYYABgGACgHACgHYACgHABgHABgIYACgIABgIACgIYACgIACgIABgIYACgQACgRACgQYABgIABgIAAgHYABgHAAgHABgGYABgZABgRAAAAYABgLgJgJgLgBYgKAAgJAIgBALYAAABAAABAAAB");
	this.shape_63.setTransform(554.85,432.45,1,1,0,0,0,-0.9,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F3BEBC").s().p("AgOh4YAAAAAAAFABAHYABADAAAFABAFYAAAFABAGAAAGYABAMACAOAAAQYAAAHABAIAAAJYAAAIAAAHgBAIYABAIgBAJgBAIYAAAIgBAIgBAIYgBAIAAAHgBAHYgBAHgBAHgBAGYgCAMgDALgBAHYgCAHgBAEAAAAIAAAAYAAAAACgEACgHYADgHAEgJAEgMYACgGACgHACgHYACgHABgHACgIYACgIACgIABgIYACgIACgIABgJYACgIABgIABgIYACgIAAgIABgIYADgQAAgPABgNYABgHAAgFAAgGYAAgFAAgEAAgEYABgHAAgEAAAAYAAgLgJgKgLAAYgKAAgJAIAAALYAAABAAABAAAB");
	this.shape_64.setTransform(554.8,430.35,1,1,0,0,0,-0.9,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3BEBC").s().p("AgLh4YAAAAABAEAAAIYABADAAAFABAFYABAFABAGAAAGYAAAGABAHAAAHYABAHAAAHAAAIYABAIAAAIAAAIYAAAIgBAHAAAJYAAAIgBAIgBAIYAAAJgBAIgBAHYgCAIgBAIgBAHYgBAHgCAGgBAHYgBAGgCAFgBAFYgCAFgBAFgBADYgCAHgBAEAAAAIAAAAYAAAAACgEADgGYABgEACgEACgEYADgFACgGACgGYACgGADgGACgHYACgHACgHACgIYACgIACgIACgIYACgIADgIABgJYABgIACgIABgIYACgJABgIABgIYABgIABgIAAgHYABgIAAgHABgGYAAgHAAgFAAgGYAAgFABgEAAgEYAAgHAAgFAAAAYAAgLgIgJgLAAYgLgBgJAJAAALYAAABAAABAAAB");
	this.shape_65.setTransform(554.75,428.3,1,1,0,0,0,-0.9,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F3BEBC").s().p("AgIh4YAAAAAAAEABAIYABADAAAFABAFYABAFABAGAAAGYAAAGABAHABAHYAAAEAAADAAAEYAAAEAAADABAEYAAAIAAAIAAAIYAAAJgBAHAAAIYAAAJgCAIgBAIYgBAIAAAIgCAIYgCAIgBAHgBAHYgCAHgCAHgBAGYgCAGgCAGgBAFYgCAFgCAEgBADYgCAHgCAFAAAAIAAAAYAAAAACgEAEgHYABgDADgEACgFYADgEACgGACgGYADgGADgGADgHYACgHACgHACgIYADgHACgJACgIYACgIADgIACgJYABgIACgIACgIYABgJABgIABgIYAAgEABgEAAgEYABgEAAgEAAgEYABgIAAgHABgGYAAgHAAgGAAgFYAAgFAAgFABgDYAAgIAAgEAAAAYAAgLgJgJgLgBYgLAAgIAJAAALYAAABAAABAAAB");
	this.shape_66.setTransform(554.75,426.2,1,1,0,0,0,-0.9,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F3BEBC").s().p("AgHh/YAAAAABAFABAIYAAADABAFAAAGYABAFABAGAAAHYAAAGABAHAAAHYABAIAAAIAAAIYAAAIAAAJAAAIYAAAJgBAIAAAIYAAAJgCAJgBAIYgBAJAAAJgCAIYgCAIgBAIgCAHYgBAHgDAHgBAHYgCAGgBAGgCAFYgCAFgCAFgBADYgDAIgBAEAAAAIAAAAYAAAAACgEADgHYACgDACgFADgEYADgFACgGADgGYACgGADgHADgHYADgIABgHADgIYADgIACgJACgIYADgJACgJACgJYACgJABgIACgJYABgIABgJACgJYABgIABgIAAgIYABgIAAgIABgHYAAgHAAgFABgGYAAgFAAgFAAgEYAAgIAAgEAAAAYABgLgJgKgLAAYgLAAgJAIAAALYAAABAAABAAAB");
	this.shape_67.setTransform(554.6,423.55,1,1,0,0,0,-0.9,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F3BEBC").s().p("AgFiFYAAAAAAAFABAIYAAAEABAFABAFYAAAGABAGAAAHYABAHAAAHAAAIYAAAIAAAIAAAJYAAAIAAAJAAAJYAAAJAAAIgBAJYAAAKgBAJgBAJYgCAJAAAJgCAIYgCAJgBAIgCAIYgCAHgCAHgCAHYgCAHgBAGgCAFYgCAGgCAEgBAEYgDAIgCAEAAAAIAAAAYAAAAACgEAEgHYACgEACgEADgFYADgFACgGADgHYADgGADgHADgIYADgHABgJADgIYADgIACgJADgJYACgJADgJABgKYACgJACgIACgKYABgJABgJABgJYACgJAAgIABgIYABgJAAgHABgIYABgHAAgGAAgGYAAgGAAgFAAgEYABgIAAgEAAAAYAAgMgJgJgLAAYgLgBgIAJAAALYAAABAAABAAAB");
	this.shape_68.setTransform(554.4,420.8,1,1,0,0,0,-0.9,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F3BEBC").s().p("AgEiMYAAAAABAFAAAIYABAFAAAFABAGYAAAGABAHAAAHYAAAOABAQAAASYAAAJAAAKAAAJYgBAJAAAJAAAKIgBAOYgBAFAAAEgBAFYgCAJAAAKgCAJYgCAIgCAJgBAIYgCAIgDAIgBAHYgDAHgBAGgCAGYgCAFgCAFgCAEYgDAIgBAFAAAAIAAAAYAAAAACgFAEgHYACgEACgFADgFYADgFACgGADgHYADgHAEgHADgIYACgIACgJADgIYADgJACgJADgKYABgFABgEACgFIADgPYABgJADgJABgKYACgJABgKABgJYADgSABgSABgPYABgHAAgHAAgGYAAgGABgFAAgEYAAgJAAgFAAAAYABgLgJgJgLgBYgLAAgIAIgBAMYAAAAAAABAAAB");
	this.shape_69.setTransform(554.25,418.1,1,1,0,0,0,-0.9,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F3BEBC").s().p("AgEiPYAAAAAAAFABAIYABAFAAAFABAGYAAAGABAHAAAHYAAAIAAAHABAJYAAAIABAJgBAJYAAAJAAAKAAAJYAAAKgBAJAAAKIAAAOYgBAFAAAFgBAFYgBAJgBAKgCAJYgCAJgCAJgBAIYgCAIgDAIgBAHYgDAHgBAHgCAGYgDAFgBAFgCAEYgDAIgCAFAAAAIAAAAYAAAAADgEAEgIYACgEACgFADgFYADgFACgHADgHYADgHAEgHADgIYACgIACgJADgJYADgJACgKADgJYABgFABgFACgFIADgPYABgKADgJABgJYABgKACgKABgJYABgKABgJAAgJYABgJABgIAAgIYABgHAAgHAAgGYAAgGAAgFAAgFYABgJAAgFAAAAYAAgLgJgJgLAAYgLAAgIAIAAALYAAABAAABAAAB");
	this.shape_70.setTransform(553.9,415.7,1,1,0,0,0,-0.9,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F3BEBC").s().p("AgFiTYAAAAABAFABAJYAAAFABAFABAGYAAAGABAIAAAHYAAAHABAIAAAJYABAIAAAKAAAJYAAAJAAAKAAAKYAAAKgBAJAAAKIgBAPYAAAFAAAFgBAFYgBAJgBAKgCAKYgCAJgBAJgCAIYgCAJgCAIgCAHYgDAHgBAHgDAGYgCAGgCAFgBAEYgDAIgCAFAAAAIAAAAYAAAAACgFAEgIYACgDADgFADgGYADgFACgHADgHYADgHAEgIADgIYACgIADgJADgKYADgJACgKACgJYACgFABgFABgFIADgQYACgKACgJABgKYABgKABgKACgKYABgKAAgJABgJYAAgJABgJAAgHYABgIAAgHAAgGYAAgHAAgFAAgFYAAgIAAgGAAAAYAAgLgIgJgMAAYgLAAgIAJAAALYAAABAAABAAAA");
	this.shape_71.setTransform(553.5,413.3,1,1,0,0,0,-0.9,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F3BEBC").s().p("AgOisYAAAAABAGACAKYAAAFABAGACAHYABAHABAIABAJYABAIABAKABAJYABAKABALAAALYAAAKABAMAAALYgBALAAALAAAMYAAALAAAMgBALYAAAMgBALgCALYgBALgBAKgCAKYgCAKgCAJgBAJYgBAEgBAFgBAEYgBADAAAEgBAEYgCAHgCAGgBAFYgCAKgCAFAAAAIAAAAYAAAAACgFAEgKYACgFACgGACgGYABgEACgDABgEYABgEACgEABgEYACgJADgJACgKYADgKACgKADgLYACgLADgLACgMYABgLADgMABgMYACgMABgKABgMYACgMAAgLABgMYAAgLABgLAAgKYAAgKAAgKAAgJYAAgKgBgIAAgHYgBgHAAgGAAgFYgBgLAAgFAAAAYgBgLgJgJgLABYgLAAgIAKABALYAAABAAAAAAAB");
	this.shape_72.setTransform(554.65,413.9,1,1,0,0,0,-0.7,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F3BEBC").s().p("AgXjGYAAAAABAHADALYABAGABAHACAIYACAIACAJABAKYACAJABALACALYABALABAMABAMYABAGABAHAAAGYAAAGAAAHAAAGYAAANABAOAAAMYgBANAAANAAANYAAAOgBAMgBANYgBAMAAAMgCAMYgCALgBALgBAKYgBAKgCAJgCAIYgBAIgBAHgBAGYgCALgCAHAAAAIAAAAYAAAAACgGADgMYACgFACgHACgIYACgIADgJACgKYACgKABgKADgMYADgLACgMACgMYACgNACgNACgNYACgNABgOACgNYABgNAAgNABgOYABgGAAgHABgGYAAgHAAgHAAgGYAAgNAAgMAAgMYgBgMgBgLgBgKYAAgLgBgJgBgIYgBgIgBgHgBgGYgBgMgBgGAAAAYgBgLgKgIgKABYgLACgIAKABAKYABABAAABAAAA");
	this.shape_73.setTransform(555.8,414.45,1,1,0,0,0,-0.5,1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F3BEBC").s().p("AgbjfYAAAAACAHADANYACAGACAIACAJYADAJABAJADALYACALACALACANYACANABANABAOYADANAAAPABAPYAAAHABAHAAAIYABAHAAAHAAAHYAAAPAAAPAAAPYAAAOgBAPgBAOYAAAOgBAOgBAMYgBANgBAMgBAMYAAALgCAKgBAJYgBAJgBAIgBAHYgCANgBAHAAAAIAAAAYAAAAACgHACgNYACgGACgIABgJYABgJADgKACgLYACgMACgMACgMYACgNADgOABgOYACgOACgPABgOYACgPABgPABgQYAAgHABgHAAgHYAAgIABgHAAgIYAAgPABgPgBgOYgBgOgBgOAAgOYgBgNgCgMgBgMYgCgLAAgLgCgJYgCgJgBgIgCgHYgCgNgBgHAAAAYgCgLgKgHgLACYgLACgHAKACALYAAABAAAAABAB");
	this.shape_74.setTransform(557.1,415.05,1,1,0,0,0,0.4,1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F3BEBC").s().p("AgbjpYAAAAACAIADANYABAHACAIACAJYACAJACALACALYACALACAMACANYACAOACANABAPYACAOABAPABAPYACAPACAQAAAOYABAPABAQABAPYAAAPABAPAAAPYAAAOAAAPAAANYAAANAAANAAALYAAAMgBALAAAJYgBAKAAAIAAAHYgBANAAAIAAAAIAAAAYAAAAABgIABgNYABgHABgIABgJYABgKACgKABgMYABgMABgMABgOYACgNABgOABgPYAAgOABgQABgPYAAgPABgQAAgQYABgOgBgQAAgPYAAgQAAgPgBgPYgBgOgBgPAAgNYgCgOgBgMgBgMYgBgMgBgLgBgJYgCgKgBgIgBgHYgCgNgBgIAAAAYgBgLgKgHgKABYgLACgIAKACALYAAAAAAABAAAA");
	this.shape_75.setTransform(556.85,413.2,1,1,0,0,0,0.5,1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F3BEBC").s().p("AgcjyYAAAAAFAfAIAwYACAMACANADANYACAOABAOACAPYACAPABAPACAQYACAQACAPACAPYADAgADAgADAeYABAPABAPABAOYABANAAANABAMYADAxACAgAAAAIAAAAYAAAAAAghABgwYABgMAAgNAAgOYABgOgBgOAAgPYAAgegBghAAggYAAgPgCgQAAgQYgBgQgBgQgBgPYAAgPgBgPgBgOYgBgNgBgNgBgMYgFgwgDggAAAAYgBgLgJgJgKABYgLABgIAKABALYAAABAAAAAAAB");
	this.shape_76.setTransform(557,411.4,1,1,0,0,0,0.9,1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F3BEBC").s().p("Agkj8IBJIPIAAAAIgioTYgBgLgIgIgLABYgLAAgJAKABALYAAAAAAABAAAA");
	this.shape_77.setTransform(557.55,409.6,1,1,0,0,0,1,1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F3BEBC").s().p("Agjj9YAAAAAUCFATCDYAQCFAQCFAAAAIAAAAYAAAAgGiGgGiGYgKiFgKiFAAAAYgBgLgIgJgLABYgLABgJAKABALYAAAAAAABAAAA");
	this.shape_78.setTransform(557.3,407.25,1,1,0,0,0,1,1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F3BEBC").s().p("Aghj+YAAAAAGAiAJAxYACANADANACAOYADAPACAPACAPYAEAfAEAhAFAgYAEAiAEAhADAfYACAQACAPABAPYABAOABAOABAMYAEAzACAhAAAAIAAAAYAAAAAAgiAAgyYAAgNAAgNAAgPYAAgOgBgQAAgPYgCgggBgigBghYgCghgDgigCgfYgBgQgBgQgCgOYgBgOgBgOgCgMYgFgzgDghAAAAYgCgLgIgIgLABYgLABgIAKABALYAAAAAAABAAAA");
	this.shape_79.setTransform(557,404.85,1,1,0,0,0,1,1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F3BEBC").s().p("Agij/YAAAAAHAhAKAyYACANADANADAOYADAPACAPACAPYAEAfAFAiAFAgYADAiADAhAEAgYABAQACAPABAOYAAAPABAOABAMYACAzACAiAAAAIAAAAYAAAAAAgiACgzYAAgNABgNAAgPYAAgPgBgPAAgQYgBggAAgigBgiYgDghgCgigDggYgBgPgBgQgCgPYgCgOgBgOgCgMYgGgzgEghAAAAYgCgLgJgIgKABYgLACgIAKABALYAAAAAAABAAAA");
	this.shape_80.setTransform(556.65,402.5,1,1,0,0,0,0.8,1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3BEBC").s().p("AgikAYAAAAACAJADAOYADAPAGAVAFAYYACANADANADAOYADAOACAQACAPYACAQADAQACARYADAQACARACAQYACARABAQACARYACARABAQABAQYABAQABAPABAPYAAAOABAOAAANYABANAAALAAALYAAAKAAAJAAAIYAAAPAAAIAAAAIAAAAYAAAAAAgIACgPYAAgIABgJABgKYAAgKABgMAAgNYABgNABgOAAgOYABgPAAgPAAgQYAAgQAAgRgBgRYAAgRgBgRAAgRYgBgQgBgRgBgRYgBgRgCgQgBgQYgCgQgBgQgCgOYgCgPgCgOgBgNYgDgagEgUgCgPYgDgPgBgIAAAAYgCgLgJgIgLACYgLACgHAKABALYAAABABAAAAAA");
	this.shape_81.setTransform(556.5,400.1,1,1,0,0,0,0.7,1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F3BEBC").s().p("AgikAYAAAAACAIADAPYACAHACAJACAKYADAKACALADANYACAMADAOADAOYADAOACAPACAQYACAQAEAQACAQYACARACARACAQYACARACARABAQYACARABAQABAQYABAQABAQABAOYAAAPAAAOABANYAAAMAAAMAAAKYAAALAAAJAAAHYAAAPAAAJAAAAIAAAAYAAAAAAgJACgPYAAgHABgJABgKYABgLABgMAAgMYABgNAAgOABgPYABgPgBgPABgQYAAgQAAgRgBgRYAAgRAAgRgBgRYgBgQgBgRgBgRYgBgRgCgQgBgRYgCgQgBgPgCgPYgCgPgBgOgCgMYgDgagEgVgCgPYgDgPgBgIAAAAYgCgLgJgHgLABYgLACgHAKABALYAAABABAAAAAB");
	this.shape_82.setTransform(556.2,397.85,1,1,0,0,0,0.7,1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F3BEBC").s().p("AgikAYAAAAACAIADAOYACAIACAJADAKYACAKADALACANYADAMACANADAPYAEAOACAPABAQYADAQADAQACAQYACARACARADAQYABARACARABAQYACARABAQABAQYABAQABAQAAAOYAAAPABAOAAANYAAAMAAAMAAALYAAAKAAAJAAAIYgBAPAAAIAAAAIAAAAYAAAAABgIABgPYABgIABgJABgKYABgLABgLAAgNYABgNABgOAAgPYABgOAAgQABgQYAAgQAAgRAAgRYgBgRAAgRAAgRYgBgQgBgRgBgRYgBgRgCgRgCgQYgBgQgBgPgCgPYgCgPgCgOgCgNYgBgNgCgLgCgLYgCgKgBgJgBgHYgDgPgBgIAAAAYgCgLgJgIgLACYgLACgHAKABALYAAABABAAAAAB");
	this.shape_83.setTransform(555.9,395.55,1,1,0,0,0,0.7,1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F3BEBC").s().p("AgikBYAAAAACAIADAPYACAHACAJADAKYACAKADAMACAMYADANADANADAOYADAOACAQACAPYACAQADAQACARYACARADARACAQYABARACARABAQYACARABARABAQYAAAQACAPAAAPYAAAOAAAOABANYAAANAAAMgBAKYAAALAAAJAAAHYgBAPAAAJAAAAIAAAAYAAAAABgJABgPYABgHABgJABgLYABgKABgMABgNYABgMAAgOABgPYABgPAAgQAAgQYABgQAAgQAAgRYgBgRAAgSAAgRYgBgQgBgRgBgRYgBgRgCgRgBgQYgCgQgBgQgCgPYgCgOgCgOgCgNYgBgNgCgMgCgKYgCgLgBgJgBgHYgDgPgBgIAAAAYgCgLgJgHgLABYgLACgIALACAKYAAABAAAAABAB");
	this.shape_84.setTransform(555.6,393.3,1,1,0,0,0,0.7,1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F3BEBC").s().p("AgjkFYAAAAACAJAEAOYACAIACAJADAKYACAKADAMACANYADAMADAOADAOYADAPACAPACAQYACAQAEARACAQYACARACARACARYACARABARACARYACARAAARABAQYABAQABAQAAAPYAAAPAAAOAAANYAAAGAAAHAAAFYAAAGAAAGAAAFYAAALgBAJAAAIYAAAPgBAJAAAAIAAAAYAAAAABgJACgPYABgIABgJABgKYAAgGABgFAAgGYABgGAAgGABgHYAAgNABgOABgPYABgPAAgQABgQYAAgRABgRgBgRYAAgRgBgRAAgSYgBgQgBgSgBgRYAAgRgDgRgBgQYgCgRgBgQgCgPYgCgPgCgOgBgNYgCgNgCgMgCgKYgCgLgBgJgCgHYgCgPgCgJAAAAYgBgLgKgHgLACYgLACgHAKACALYAAAAAAABAAAA");
	this.shape_85.setTransform(555.3,390.7,1,1,0,0,0,0.7,1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F3BEBC").s().p("AgjkJYAAAAACAJAEAPYACAHACAKACAKYADAKADAMACANYADANADAOADAOYADAPACAQACAQYADAQADARACARYACARACARACARYACARABARACASYACARAAARABAQYABARABAQAAAPYAAAPAAAOAAANYAAAHAAAGAAAGYAAAGgBAGAAAFYAAALgBAJAAAIYAAAQgBAIAAAAIAAAAYAAAAABgIACgQYABgHABgKABgKYABgGAAgFABgGYAAgGABgHAAgGYABgOABgOABgPYABgPAAgQABgRYAAgQABgSgBgRYAAgRAAgSgBgSYgBgRgBgRAAgSYgBgRgCgRgCgRYgBgQgBgQgDgQYgCgPgCgOgBgOYgCgNgCgMgCgKYgCgLgBgJgCgIYgCgPgCgJAAAAYgCgLgJgHgLACYgLACgHAKACALYAAAAAAABAAAA");
	this.shape_86.setTransform(554.95,388.1,1,1,0,0,0,0.7,1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F3BEBC").s().p("AgjkJYAAAAACAJAEAPYACAHACAJADALYACAKADAMADANYACAMADAOADAPYAEAPACAPABAQYADARADAQACASYACARACARACARYACARABASACARYACARAAARABAQYAAARABAQAAAPYAAAPAAAOAAAOYAAAGAAAHAAAGYAAAGAAAFgBAGYAAALgBAJAAAIYgBAPAAAJAAAAIAAAAYAAAAABgJACgPYABgIABgJABgLYABgFAAgGABgGYAAgGABgGAAgHYABgNABgPACgPYABgPAAgQAAgRYABgQABgRgBgSYAAgRAAgSgBgSYAAgRgBgRgBgSYgBgRgCgRgBgRYgCgRgBgQgCgPYgCgPgCgPgCgNYgCgNgCgMgCgLYgCgKgBgKgBgHYgDgQgCgIAAAAYgBgLgKgHgLABYgLACgHALACALYAAAAAAABAAAA");
	this.shape_87.setTransform(554.7,385.85,1,1,0,0,0,0.7,1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F3BEBC").s().p("AgjkJYAAAAACAIAEAPYACAIACAJADAKYADALADALACANYADANADAOADAPYADAOACAQACAQYACARAEAQACARYACASACARACARYACARABASABARYACARAAARABARYAAAQABAQAAAPYAAAPAAAPgBANYAAAHAAAGAAAGYAAAGgBAGAAAFYAAALgBAJAAAIYgBAQgBAIAAAAIAAAAYAAAAABgIACgQYABgHACgKABgLYABgFAAgGABgGYABgGAAgGABgHYABgNABgOABgPYABgQABgQAAgQYABgRABgRgBgSYAAgRAAgSAAgSYgBgRgBgRgBgSYAAgRgDgSgBgQYgCgRgBgQgCgPYgCgQgCgOgCgNYgCgOgCgMgCgKYgBgLgCgJgBgIYgDgPgCgJAAAAYgCgLgJgHgLACYgLACgHAKACALYAAABAAAAAAAB");
	this.shape_88.setTransform(554.4,383.55,1,1,0,0,0,0.7,1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F3BEBC").s().p("AgjkKYAAAAADAJADAPYACAHACAJADALYADAKADAMACANYADANADAOADAOYADAPACAQACAQYADAQADARACARYACASACARACARYABARACASABARYABARABARAAARYABAQABAQgBAQYAAAPAAAOAAANYgBAHAAAGAAAGYAAAHAAAFgBAGYAAAKgBAKgBAIYgBAPAAAJAAAAIAAAAYAAAAABgJACgPYABgIABgJACgLYABgFAAgGABgGYABgGAAgHABgGYABgNABgPACgPYABgPAAgQABgRYABgRABgRgBgSYAAgRAAgSAAgSYgBgRgBgRgBgSYAAgSgCgRgCgQYgBgRgBgQgDgQYgCgPgCgOgCgOYgBgNgCgMgCgLYgCgKgCgKgBgHYgDgQgCgIAAAAYgBgLgKgHgLABYgLACgHALACALYAAAAAAABAAAA");
	this.shape_89.setTransform(554.05,381.3,1,1,0,0,0,0.6,1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F3BEBC").s().p("AgkkQYAAAAACAJAEAPYACAIADAJACALYADALADAMADANYADANADAOADAPYADAPACAQADARYACAQAEASABARYADASACASACAQYACASABASABASYABAJAAAJABAIYAAAJAAAJABAIYAAARABAQAAAQYgBAPAAAPAAAOYgBAGAAAHAAAGYAAAGgBAGAAAGYgBALAAAJgBAIYgBAQgBAJAAAAIAAAAYAAAAACgJACgQYABgIABgJACgLYAAgGABgFABgHYABgGAAgGABgHYABgOABgOACgQYABgPAAgRABgRYABgIAAgJAAgJYABgJgBgJAAgJYAAgRAAgTAAgSYgBgRgBgSgBgSYgBgSgCgSgBgRYgCgRgBgQgDgQYgCgQgCgOgCgOYgCgOgCgMgCgLYgCgLgCgJgBgIYgDgQgCgIAAAAYgCgLgJgIgLACYgLACgHALACALYAAAAAAABAAAA");
	this.shape_90.setTransform(553.7,378.5,1,1,0,0,0,0.7,1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F3BEBC").s().p("AglkWYAAAAACAJAEAQYACAIADAJADALYADALADANADANYACANAEAPADAPYADAPACARADARYADARADARACASYACASADASACARYACATABASABASYABAJABAJAAAJYAAAJABAIAAAJYAAARABARAAAQYgBAQAAAPAAANYgBAHAAAHAAAGYAAAHgBAGAAAFYgBALgBAKAAAIYgCAQAAAKAAAAIAAAAYAAAAABgKACgQYABgIACgJABgLYABgGABgGABgGYABgHAAgGABgHYABgOACgPABgQYABgQABgQAAgSYABgJAAgIABgJYAAgJAAgJgBgKYAAgSABgSgBgTYgBgSgBgSgBgSYgBgTgDgSgBgRYgCgRgBgRgDgQYgCgQgCgPgCgOYgCgOgDgNgCgLYgCgLgCgJgBgIYgDgQgCgJAAAAYgBgLgKgHgLACYgLACgHAKACALYAAABAAAAAAAA");
	this.shape_91.setTransform(553.2,375.65,1,1,0,0,0,0.7,1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F3BEBC").s().p("AgikVYAAAAACAJAEAQYACAIACAJACALYADALADAMADAOYACANADAOADAQYAEAPABAQACARYADARADASACARYACASACASACASYACASAAASABASYABAJAAAJABAJYAAAJAAAIAAAJYAAARABARAAAPYgBAQgBAPAAAOYAAAHAAAGgBAHYAAAGgBAGAAAFYgBALgBAKgBAIYgBAQgBAJAAAAIAAAAYAAAAACgJACgQYABgIACgJACgLYAAgGABgGABgGYABgGABgHAAgHYACgNABgPACgQYABgQABgRABgRYAAgJABgIAAgJYAAgJABgJAAgJYAAgSAAgTAAgSYgBgSgBgSAAgTYgBgSgCgSgBgRYgCgRgBgRgCgQYgCgQgCgPgCgOYgCgOgCgMgCgLYgCgLgCgKgBgIYgDgQgBgJAAAAYgCgLgJgHgLACYgLACgHAKABALYAAAAABABAAAA");
	this.shape_92.setTransform(552.65,373.6,1,1,0,0,0,0.6,1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F3BEBC").s().p("AggkUYAAAAACAJAEAQYABAIADAJACALYACALADAMADANYACAOADAOACAPYAEAQABAQACARYACARADARABASYACASACASABARYACASAAASABASYABAJAAAJAAAJYAAAIAAAJAAAJYAAARABAQgBAQYgBAQAAAOgBAOYAAAHgBAGAAAHYgBAGAAAGgBAFYgBALgBAKAAAIYgCAQgBAJAAAAIAAAAYAAAAACgJACgQYACgIABgJACgLYABgGABgGABgGYABgGAAgHABgGYACgOABgPACgPYACgQABgRABgRYABgJAAgIABgJYAAgJAAgJABgJYAAgSABgTgBgSYAAgRAAgTgBgSYAAgSgCgSgBgRYgBgRgBgRgCgQYgCgQgCgPgBgNYgCgOgCgNgBgLYgCgLgCgJgBgIYgCgQgCgJAAAAYgBgLgKgIgLACYgKACgIAKACALYAAAAAAABAAAA");
	this.shape_93.setTransform(552.2,371.45,1,1,0,0,0,0.6,1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F3BEBC").s().p("AgekTYAAAAACAJAEAQYABAIACAJACALYADALACAMACANYADAOACAOADAPYACAPACARABAQYACARADASABARYABASACASABARYABASAAASABASYABASAAARgBARYAAARAAARAAAPYgBAQgBAPgBANYAAAHgBAHAAAGYgBAGAAAGgBAFYgBALgBAKgBAIYgBAQgBAJAAAAIAAAAYAAAAABgJADgQYABgIACgJACgLYABgGABgFABgHYABgGAAgGABgHYACgOACgOACgQYACgPABgRABgRYACgRABgSAAgSYABgSABgSAAgSYAAgSAAgSAAgSYAAgSgCgSgBgRYgBgRAAgRgCgQYgCgPgBgPgBgOYgBgOgCgMgCgLYgBgLgCgKgBgIYgCgQgBgJAAAAYgCgLgJgHgLABYgLACgHAKABALYAAAAAAABAAAA");
	this.shape_94.setTransform(551.65,369.4,1,1,0,0,0,0.5,1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F3BEBC").s().p("AgbkSYAAAAABAJADAQYACAIACAJACALYACALACAMACANYACANACAPACAPYADAPABAQABARYACARACARABASYABARABASABARYABASAAASAAASYABASAAARgBARYAAARAAAQgBAQYgBAPgBAPgBANYgBAHAAAHgBAGYAAAGgBAGgBAFYgBALAAAKgBAIYgCAPgBAJAAAAIAAAAYAAAAACgJACgPYABgIACgJACgLYABgGABgFABgHYABgGABgGABgHYACgNACgPACgPYACgQABgQACgRYABgRACgSABgSYABgSAAgSABgSYAAgRABgSAAgSYAAgSgBgSgBgRYAAgRAAgRgCgPYgBgQgBgPgCgOYgBgNgBgNgBgLYgCgLgBgJgBgIYgCgQgBgJAAAAYgBgLgKgIgKACYgLABgIAKABALYAAABABAAAAAA");
	this.shape_95.setTransform(550.75,367.25,1,1,0,0,0,0.5,1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F3BEBC").s().p("AgZkRYAAAAABAJADAQYABAIACAJACALYACALACAMABANYACANACAOACAQYACAPABAQACARYAAAQACARABASYABASAAASABAQYAAASABASAAASYAAASgBARAAARYgBARAAAQgBAPYgCAQgBAOAAAOYAAAGgBAHAAAGYgBAGgBAGAAAFYgCALgBAKgBAHYgCAQgBAJAAAAIAAAAYAAAAACgJADgPYABgIACgJACgLYAAgGABgFACgGYABgGAAgHABgHYACgNADgOACgQYACgPABgRACgQYACgRACgSABgRYABgSABgSABgSYABgSAAgSAAgRYABgSgBgSAAgRYgBgRABgQgBgQYgBgQgBgPgBgNYgBgOgBgMgBgLYgBgLgBgKgBgHYgCgQgBgJAAAAYgBgLgKgIgKABYgLABgIAKABALYAAAAAAABABAA");
	this.shape_96.setTransform(549.5,365.05,1,1,0,0,0,0.2,1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F3BEBC").s().p("AgYkQYAAAAACAJACAQYABAHACAKACALYABAKACANABANYACANACAOABAPYACAPABAQABARYACARAAARAAARYABASABASAAARYAAARAAASAAASYAAARgBASgBAQYAAARAAAQgCAQYgBAPgBAPgBANYgBANgCANgBAKYgCALgBAKgBAHYgCAQgBAJAAAAIAAAAYAAAAACgJADgPYABgIACgJACgLYACgLADgMABgNYACgOACgOADgPYACgQACgQACgRYACgQACgSABgRYABgSACgSABgSYABgRAAgSABgSYABgSAAgRAAgRYgBgRABgQgBgQYgBgPAAgPgBgOYAAgOgBgMgBgLYgBgLgBgJgBgIYgBgQgBgJAAAAYgBgLgJgIgKABYgLABgJAKABALYAAAAAAABAAAA");
	this.shape_97.setTransform(548.45,361.65,1,1,0,0,0,-0.2,1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F3BEBC").s().p("AgWkPYAAAAACAJACAPYABAIABAKACAKYAAAGABAFABAHYAAAGABAGABAGYABAOABAOACAPYABAPABAQABARYABAQABARAAASYAAARABASAAARYAAASgBARAAASYAAARgCARgBARYgBARAAAQgCAPYgBAPgCAPgBANYgBANgCANgCAKYgBALgBAKgBAHYgCAQgCAJAAAAIAAAAYAAAAACgJADgPYACgIACgJACgLYACgLADgMACgNYACgNADgPABgPYADgPACgQACgRYACgQADgSABgRYACgSABgSACgRYABgRABgSABgSYABgSAAgRAAgRYAAgRABgQAAgQYgBgPAAgPgBgNYAAgHAAgHAAgGYgBgGAAgGAAgFYgBgLgBgKAAgHYgBgQgBgJAAAAYgBgLgJgIgKAAYgLABgIAKAAALYAAAAAAABAAAA");
	this.shape_98.setTransform(547.55,358.2,1,1,0,0,0,-0.7,1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F3BEBC").s().p("AgQkOYAAAAABAJABAPYABAIACAJABALYAAAGABAFABAGYAAAGABAHAAAGYABANACAOABAPYABAQAAAQABAQYABARAAARAAARYAAASAAARAAARYAAASgBARAAASYgBARgCARgBARYgBAQgBAQgCAQYgBAPgCAOgBANYgBAOgCAMgCAKYgBALgCAJgBAIYgCAQgBAIAAAAIAAAAYAAAAABgIAEgQYABgHACgJADgLYACgLADgMACgNYACgNADgOACgPYADgPABgQADgRYACgQADgRACgSYACgRABgSACgSYACgRABgSABgRYABgSABgRAAgRYABgRABgQgBgPYAAgQAAgPAAgNYAAgHAAgGAAgHYAAgGgBgFAAgGYgBgLAAgJAAgIYgBgPgBgJAAAAYAAgLgJgJgLABYgKAAgJAKABALYAAAAAAABAAAA");
	this.shape_99.setTransform(546.75,354.8,1,1,0,0,0,-0.7,1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F3BEBC").s().p("AgLkNYAAAAABAJABAPYABAIABAJABALYABAFAAAGABAGYAAAGAAAGABAHYABANAAAOABAPYABAPAAAQAAARYAAAQABARgBARYAAASAAARAAARYgBASAAARgBASYgBARgCARgBAQYgCARgBAQgCAPYgBAPgCAOgCAOYgDAagEAWgCAPYgCAPgCAJAAAAIAAAAYAAAAACgJAEgPYADgPAGgVAEgaYADgOADgOADgPYACgPACgQADgQYACgRADgQACgSYACgRACgSACgSYACgQABgSACgSYACgRAAgRABgRYABgRABgQAAgPYAAgQAAgOABgOYAAgHAAgGAAgGYAAgGgBgGAAgFYAAgLAAgKgBgHYAAgQAAgJAAAAYgBgLgJgIgLAAYgKAAgJAJABALYAAABAAAAAAAB");
	this.shape_100.setTransform(545.75,352.75,1,1,0,0,0,-0.8,1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F3BEBC").s().p("AgGkMYAAAAAAAJABAPYABAIABAJABALYABAKAAAMABANYAAAOAAAOAAAPYABAPAAAQAAAQYAAAIAAAJAAAIYAAAIAAAJAAAJYgBARAAASAAAQYgBASgBARgBARYgBASgCARgCAQYgCAQgBAQgCAPYgCAPgCAPgBANYgEAagEAWgCAPYgDAPgBAJAAAAIAAAAYAAAAACgJAEgPYADgPAGgVAFgaYACgNADgOADgPYAEgPABgQADgQYACgRAEgRACgRYACgRACgSADgRYACgRABgSACgRYABgJABgIABgJYAAgIABgJAAgIYABgRACgQAAgPYABgQAAgOAAgNYABgOAAgMAAgLYAAgLAAgJAAgIYAAgPAAgJAAAAYgBgLgJgJgLAAYgLAAgIAJAAALYAAABABAAAAAB");
	this.shape_101.setTransform(544.8,350.7,1,1,0,0,0,-0.8,1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F3BEBC").s().p("AgCkLYAAAAAAAIABAQYABAHAAAKAAAKYABALAAAMAAANYABANAAAOAAAPYAAAPAAAQAAAQYAAAJAAAIAAAIYgBAJAAAIAAAJYgBARAAASgBAQYgBASgCARgBARYgBARgCARgCARYgCAQgBAQgDAPYgCAPgCAOgBANYgEAagEAWgDAPYgCAPgCAJAAAAIAAAAYAAAAACgJAEgPYADgPAGgVAGgaYACgNADgOAEgPYADgPADgPACgRYACgQAEgRACgRYADgRACgRADgSYADgQABgSACgRYABgJABgJABgIYABgJABgIAAgIYACgRABgQABgPYABgPAAgPABgNYABgOAAgMAAgKYAAgLAAgJAAgIYABgQAAgIAAAAYAAgLgJgJgLgBYgLAAgIAJAAALYAAABAAAAAAAB");
	this.shape_102.setTransform(543.65,348.4,1,1,0,0,0,-0.9,1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F3BEBC").s().p("AABkLYAAAAAAAjACA1YAAANAAAOAAAPYAAAPgBAQAAAQYgBAQgBARAAARYAAARAAASgCAQYgEAjgEAjgDAgYgCAQgBAQgDAPYgCAPgDAOgCANYgIA0gGAiAAAAIAAAAYAAAAAIgiAMgzYAEgNADgOADgOYAEgPADgQADgQYAEggAGgjAHgjYADgQABgSACgRYACgRACgRACgRYACgQACgQABgPYABgPABgPAAgNYADg0ACgjAAAAYAAgLgIgKgLAAYgLgBgKAJAAALYAAAAAAABAAAA");
	this.shape_103.setTransform(542.5,346.15,1,1,0,0,0,-1,1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F3BEBC").s().p("AAFkKYAAAAAAAjAAA0YAAAOAAAOAAAPYgBAPgBAPgBAQYgBARgBAQAAARYgBARAAASgDAQYgEAjgEAigDAhYgCAQgCAQgDAOYgCAPgDAOgCANYgJAzgGAjAAAAIAAAAYAAAAAJgiAMgzYADgNAEgNADgPYAEgPADgPADgQYAFghAHgiAGgiYAEgRABgRADgRYACgSACgQACgRYADgQACgQABgPYACgPABgOAAgNYAEg1ADgiAAAAYABgLgJgKgLgBYgLgBgJAJgBALYAAAAAAABAAAA");
	this.shape_104.setTransform(541.7,341.85,1,1,0,0,0,-1,1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F3BEBC").s().p("AAEkPYAAAAABAkAAA1YAAANABAPAAAPYAAAPgCAQAAARYgBAQgBARgBASYgBARAAASgBAQYgEAkgEAjgEAhYgBAIgBAIgBAIYAAAEgBAEAAAEYgBAEgBAEgBADYgCAPgDAPgCANYgKA0gGAjAAAAIAAAAYAAAAAJgiANg0YADgNAEgOAEgPYABgEAAgDABgEYABgEABgEABgEYABgIACgIABgIYAGghAGgjAHgjYACgRACgSADgRYACgSACgRACgRYACgRADgQAAgPYABgPABgPABgNYADg2ACgjAAAAYABgLgJgKgLAAYgLgBgJAIgBALYAAABAAAAAAAB");
	this.shape_105.setTransform(541.35,339.15,1,1,0,0,0,-1,1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F3BEBC").s().p("AADkUYAAAAABAJAAAQYABAPABAXAAAbYAAAOABAOAAAQYAAAPgBARAAARYgBAQAAASgBASYgBASgCASgBARYAAASgCASgCARYgBASgDASgCAQYgCARgCAQgDAQYgDAPgCAPgCANYgCAHgBAGgBAGYgBAGgBAGgBAGYgDAKgCAKgBAIYgEAPgCAJAAAAIAAAAYAAAAADgJAEgPYADgIACgJADgLYACgFABgGACgGYACgGABgGACgHYADgNADgOAEgPYAEgQADgQACgRYAEgQAEgSACgRYADgSAEgSACgSYADgRACgSACgSYADgSABgSACgRYACgRACgQAAgQYABgQABgPABgNYACgcAAgXABgPYAAgQAAgJAAAAYABgMgJgJgLAAYgLAAgJAIgBALYAAABAAAAAAAB");
	this.shape_106.setTransform(541,336.4,1,1,0,0,0,-1,1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F3BEBC").s().p("AADkWYAAAAAAAJABAQYABAIAAAKABALYAAALABANAAANYAAAOAAAPAAAPYABAQgBAQAAARYgBARAAASgBASYgBARgBATgBARYgCASgBASgBASYgBAJgBAJgBAIYgBAJgBAJgCAIYgCARgCAQgDAQYgCAPgDAPgCANYgBAHgCAHgBAGYgBAGgBAGgBAFYgDALgCAJgCAIYgDAQgCAJAAAAIAAAAYAAAAADgJAEgPYACgIADgJADgLYACgFABgGACgGYACgGABgHACgGYADgOAEgOAEgPYADgQADgQADgRYACgIABgJACgIYACgJABgJACgJYADgSADgSADgSYACgRACgTADgRYACgSABgSACgRYACgSACgQAAgQYABgQABgPABgOYABgOAAgMAAgLYAAgMAAgJAAgIYABgQAAgJAAAAYAAgLgJgKgLAAYgLAAgJAJAAALYAAAAAAABAAAA");
	this.shape_107.setTransform(540.75,334.1,1,1,0,0,0,-0.9,1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F3BEBC").s().p("AACkXYAAAAABAJABAQYAAAIABAKAAALYABALABANAAANYAAAOABAPAAAPYABAQgBARAAARYgBARABARgCASYgBASgBATgBARYgBASgCASgBASYgBAJAAAJgCAJYgBAJgBAIgBAJYgDARgBAQgDAQYgDAPgDAPgCAOYgBAGgBAHgCAGYgBAGgBAGgBAFYgDALgCAKgCAIYgDAPgCAJAAAAIAAAAYAAAAACgIAFgQYACgIADgJADgLYACgFABgGACgGYACgGABgGACgHYADgOAEgOAEgPYAEgQACgQADgRYACgJACgIACgJYABgJACgJABgJYADgRADgTADgSYACgRADgTACgSYACgSABgSACgRYABgRACgRABgQYAAgQABgPABgOYABgOAAgNAAgLYAAgLAAgKAAgIYAAgQAAgJAAAAYAAgLgJgJgLAAYgLAAgJAIAAALYAAABAAAAAAAB");
	this.shape_108.setTransform(540.35,331.8,1,1,0,0,0,-0.9,1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F3BEBC").s().p("AACkZYAAAAAAAKABAQYABAIABAKAAALYABALABANAAANYABAOAAAPABAQYAAAPAAARAAARYgBARABASgBASYgBASgBATgBARYgCASgCATgBASYAAAJgBAJgBAJYgBAIgBAJgCAJYgCARgCAQgDAQYgDAPgCAPgDAOYgBAHgBAGgCAGYgBAHgBAFgCAGYgCALgCAJgCAIYgEAQgCAJAAAAIAAAAYAAAAADgJAFgPYACgIADgJADgLYACgGABgFACgGYACgHABgGACgHYAEgNADgPAEgPYAEgQACgQAEgRYACgJABgJACgIYACgJABgJACgJYADgSADgSADgTYACgRACgTACgSYADgSAAgSACgSYABgRACgRAAgQYABgQABgPAAgOYABgPAAgMAAgLYAAgMAAgKAAgIYAAgQAAgJAAAAYAAgLgJgJgLAAYgLAAgJAJAAALYAAAAAAABAAAA");
	this.shape_109.setTransform(540,329.45,1,1,0,0,0,-0.9,1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F3BEBC").s().p("AABkZYAAAAABAJABAQYABAIABAKAAALYABAMABAMABAOYAAAOABAPAAAPYABAQgBARAAARYAAARABASgBASYgBASgBATgBARYgCATgCASgBASYgBAJAAAJgBAJYgBAJgCAIgBAJYgCARgCARgDAPYgDAQgDAPgCANYgCAHgBAHgBAGYgCAGgBAGgBAGYgDALgCAJgCAIYgEAQgCAJAAAAIAAAAYAAAAADgJAFgQYACgHADgKADgLYACgFACgGACgGYABgGACgGACgHYADgOAEgOAEgQYADgPADgRAEgRYACgIABgJACgJYACgJABgJACgJYADgSADgSADgTYACgRACgTACgSYADgSAAgSACgSYABgRACgRAAgQYAAgRABgPAAgOYABgOAAgNAAgLYAAgMgBgJAAgIYAAgRAAgJAAAAYAAgLgJgJgLAAYgLAAgJAJAAALYAAABAAAAAAAB");
	this.shape_110.setTransform(539.8,327.25,1,1,0,0,0,-0.8,1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F3BEBC").s().p("AAAkaYAAAAABAJACARYAAAIABAKABALYABALABANABAOYAAANABAPAAAQYABAQAAAQAAASYAAARABASgCASYgBASgBATAAARYgCATgCASgBASYgBAJgBAJAAAJYgBAJgCAJgBAIYgCARgCARgDAQYgDAQgDAOgDAOYgBAHgBAGgCAHYgBAGgBAGgCAFYgCALgDAKgCAIYgDAQgDAJAAAAIAAAAYAAAAADgJAFgQYACgIADgJAEgLYACgFABgGACgGYACgGACgHABgHYAEgNAEgPAEgPYADgQADgQAEgSYABgIACgJACgJYACgIABgKACgJYADgSADgSACgTYADgRACgTACgSYACgTABgSABgRYABgSACgRAAgQYABgQAAgQAAgOYABgOAAgNgBgLYAAgLAAgKAAgIYAAgRgBgJAAAAYAAgLgJgJgLAAYgLABgJAJAAALYAAAAAAABAAAA");
	this.shape_111.setTransform(539.5,325,1,1,0,0,0,-0.8,1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F3BEBC").s().p("AAAkaYAAAAAAAKABAQYABAIABAKABALYABALACANAAAOYABAOABAOABAQYABAQgBARABARYgBARABASgBASYgBASAAATgBARYgCATgCASgBASYgBAJgBAJgBAJYAAAJgBAJgCAIYgCASgCAQgDAQYgDAQgDAOgDAOYgBAHgBAHgCAGYgBAGgCAGgBAFYgDALgCAKgCAIYgEAQgCAJAAAAIAAAAYAAAAADgJAFgQYACgIADgJAEgLYABgFACgGACgGYACgGACgHABgGYAEgOAEgPAEgPYADgQADgQAEgRYACgJACgJABgJYACgIABgJACgJYADgTADgSADgTYACgRACgTACgSYACgTABgSABgRYABgSABgRAAgQYABgQAAgQAAgOYAAgOAAgNAAgLYgBgMAAgJAAgJYgBgQAAgJAAAAYgBgLgJgJgLAAYgLABgIAJABALYAAAAAAABAAAA");
	this.shape_112.setTransform(539.15,322.85,1,1,0,0,0,-0.8,1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F3BEBC").s().p("AgCkZYAAAAABAJABAQYABAIABAKABALYACAMABAMABAOYABAOABAPABAPYABAQAAARAAARYAAARABASgBASYgBATgBASAAARYgCATgCASgBASYgBATgDARgCARYgCASgCAQgDAQYgDAQgDAOgDAOYgBAHgCAGgBAHYgBAGgCAGgBAFYgDALgCAKgCAIYgEAPgDAJAAAAIAAAAYAAAAADgJAFgPYADgIADgJADgLYACgFACgGACgGYACgGABgHACgGYAEgOAEgPAEgPYADgQADgQAEgRYAEgSADgRADgSYADgTADgSADgTYACgRACgTABgSYADgTAAgSABgRYABgSACgRgBgQYAAgQAAgQABgOYAAgOgBgNAAgLYgBgMAAgKgBgIYAAgQgBgJAAAAYAAgLgJgJgMABYgLAAgHAJAAAMYAAAAAAAAAAAB");
	this.shape_113.setTransform(538.8,320.75,1,1,0,0,0,-0.8,1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F3BEBC").s().p("AgDkZYAAAAABAJACARYAAAIABAJACAMYABALACANAAANYABAOABAPACAPYABAQAAARAAARYAAARACASgCASYAAATgBASAAARYgCATgCASgBASYgBATgDARgCASYgCARgCAQgDAQYgDAQgDAOgDAOYgCAHgBAGgBAHYgCAGgBAGgCAFYgCALgDAKgCAIYgEAPgCAJAAAAIAAAAYAAAAADgIAFgQYACgIADgJAEgLYACgFACgGACgGYABgGACgHACgGYAEgOAEgPADgPYAEgPADgRAEgRYAEgRAEgSACgSYADgTADgSADgTYABgRACgTACgSYADgTAAgSABgSYAAgRACgRgBgQYAAgRAAgPAAgOYAAgPgBgMAAgMYgBgLgBgKAAgIYgBgQAAgJAAAAYgBgLgKgJgLABYgLAAgHAKABALYAAAAAAABAAAA");
	this.shape_114.setTransform(538.55,318.6,1,1,0,0,0,-0.7,1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F3BEBC").s().p("AgFkaYAAAAABAJACAQYABAIABAKABALYACAMACANABANYABAOABAPABAQYACAPAAARAAASYABARABASgBASYAAASgBATAAASYgCASgCATgBASYgBASgDASgCARYgCASgCAQgDAQYgEAQgDAPgCANYgCAHgBAHgBAGYgCAGgCAGgBAGYgDALgDAJgCAIYgEAQgCAJAAAAIAAAAYAAAAADgJAFgPYADgIADgKADgKYACgGACgGACgGYACgGACgGACgHYADgOAEgOAEgQYAEgPADgRAEgSYAEgRAEgSACgSYADgSADgTACgTYACgRACgTACgTYACgSAAgTABgRYAAgSACgRgBgRYAAgQAAgPgBgPYAAgOgBgNgBgLYAAgMgBgKgBgIYgBgQAAgJAAAAYgBgLgKgJgLABYgLABgHAJABALYAAABAAAAAAAB");
	this.shape_115.setTransform(538.25,316.25,1,1,0,0,0,-0.7,1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F3BEBC").s().p("AgHkcYAAAAABAJADARYABAIABAKABALYACALACANABAOYABAOABAPACAQYACAPAAARAAASYABARABASAAATYgBASAAATgBASYgBASgCATgBASYgBATgDASgDARYgBARgCARgDAQYgEAQgDAPgDAOYgBAHgBAGgCAHYgBAGgCAGgBAFYgDALgDAKgCAIYgEAQgDAJAAAAIAAAAYAAAAADgJAFgPYADgIADgKAEgLYACgFACgGACgGYACgGACgHACgHYADgNAEgPAEgQYAEgPADgRAEgSYAEgRAEgSACgTYADgSADgTACgTYACgSACgTABgSYACgTAAgSABgSYAAgSABgRAAgRYgBgQAAgQgBgOYAAgPgBgNgBgLYgBgMgBgKAAgIYgCgQgBgKAAAAYAAgLgKgIgLABYgKABgIAKABALYAAAAAAAAAAAB");
	this.shape_116.setTransform(537.9,313.9,1,1,0,0,0,-0.7,1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F3BEBC").s().p("AgHkeYAAAAABAKADAQYABAIABAKABAMYACALACANABAOYABAOACAPABAQYACAQAAARABARYABAJAAAJAAAJYAAAFAAAEABAFYAAAEgBAFAAAFYAAASgBATAAASYgBASgCATgBATYgBAJgBAJgBAJYgBAJgCAJgBAJYgCARgCARgDAQYgDAQgEAPgCAOYgCAHgBAHgCAGYgBAGgCAGgCAGYgDALgCAKgDAIYgEAQgCAJAAAAIAAAAYAAAAADgJAFgQYADgIADgJAEgLYACgGACgFACgHYACgGACgGACgHYADgOAFgPADgQYAFgPACgRAEgSYACgJACgJACgJYACgJABgJACgJYACgTAEgTACgTYACgSABgTACgTYAAgEABgFAAgFYAAgEABgFAAgEYAAgKAAgJABgJYAAgSABgRgBgRYAAgQgBgQAAgPYAAgOgCgNgBgMYgBgLgBgKAAgJYgCgQgBgKAAAAYgBgLgJgIgLABYgKABgIAKABALYAAAAAAABAAAA");
	this.shape_117.setTransform(537.65,311.6,1,1,0,0,0,-0.7,1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F3BEBC").s().p("AgIkgYAAAAACAKACAQYACAJABAKABALYACAMACANABANYACAOABAQACAQYACAQAAARABASYAAAIAAAJABAKYAAAEAAAFAAAEYAAAFAAAFAAAEYgBATAAATAAASYgBATgCATgCASYgBAKAAAJgCAJYgBAJgBAJgCAJYgBARgCASgEAPYgDAQgDAQgDAOYgCAHgBAGgCAHYgBAGgCAGgCAGYgDALgCAJgDAJYgEAQgDAJAAAAIAAAAYAAAAADgJAGgQYADgIADgJAEgLYACgGACgGACgGYACgGACgHACgHYAEgOAEgPADgPYAFgQADgSAEgRYACgJACgJACgJYACgJABgJABgKYADgSADgTADgUYABgSACgTACgTYAAgFAAgEABgFYAAgFAAgEAAgFYABgJAAgKAAgJYAAgSABgRgBgRYAAgRgBgPAAgPYAAgPgCgNgBgLYgBgMgBgKgBgIYgBgRgBgKAAAAYgBgLgKgIgLABYgKABgIAKABALYAAAAAAABAAAA");
	this.shape_118.setTransform(537.4,309.25,1,1,0,0,0,-0.7,1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F3BEBC").s().p("AgHktYAAAAACAKADASYABAIABALACAMYACAMACAOACAOYACAPABAQACARYABAIABAJABAJYABAIAAAKAAAJYABASABAUABATYAAAUgBATAAATYgBAKABAKgBAKYgBAKgBAKgBAJYgBAKgBAKgBAJYAAAFgBAFAAAFYgBAEgBAFgBAEYgDATgDASgCAQYgEARgFAQgDAOYgEAPgDANgFALYgEAMgEAKgDAIYgGAQgDAKAAAAIAAAAYAAAAAEgJAHgQYADgIAFgKAFgLYAFgLAEgOAFgOYAEgOAFgQAFgQYAEgRAEgSAFgSYABgFABgFABgEYABgFABgFAAgEYACgKABgKACgKYACgJABgKACgKYABgKABgKABgKYABgTACgVACgUYAAgTAAgUABgTYAAgJAAgKAAgJYgBgJAAgJAAgJYgBgRgBgRgBgPYAAgPgCgOgBgMYgBgMgCgLAAgIYgCgSgBgKAAAAYgBgLgKgIgLABYgKABgIAKABALYAAABAAAAAAAA");
	this.shape_119.setTransform(536.6,308.1,1,1,0,0,0,-0.6,1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F3BEBC").s().p("AgGk5YAAAAACAKADASYABAJACALACANYACAMACAOACAQYACAPACARADARYABASADATABATYABAUACAUAAAUYABAVAAAUAAAUYgBAVgBAVgCAUYgBAUgDAUgDAUYgDATgDATgFARYgDARgEAQgFAPYgFAPgEAOgFAMYgFALgEALgEAIYgJAQgEAKAAAAIAAAAYAAAAAFgKAJgPYAFgIAEgKAGgMYAGgLAFgOAGgOYAEgPAHgQAEgSYAGgRAEgTAFgTYAEgTAEgUACgVYAEgVABgVADgVYABgUACgVAAgVYABgVgBgUAAgUYAAgUgBgTgBgSYgBgSgBgRgBgQYgCgQgBgPgBgMYgCgNgBgLgBgJYgCgTgCgKAAAAYgBgLgKgIgLACYgKABgIAKACALYAAAAAAABAAAA");
	this.shape_120.setTransform(535.6,306.9,1,1,0,0,0,-0.6,1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F3BEBC").s().p("AAAk3YAAAAABALADARYACAJACALACANYABAMACAOACAPYACAQACAQACASYABASACASABAUYABATABAUAAAUYABAUgBAVAAAUYgCAUAAAVgDAUYgCAUgDAUgDATYgEATgDATgFARYgCARgGAQgEAPYgGAOgEAOgFAMYgFALgEAKgFAJYgIAQgFAJAAAAIAAAAYAAAAAGgJAJgQYAFgHAEgLAGgLYAGgLAFgOAHgOYAEgPAGgPAFgSYAGgRAFgSAFgTYAEgUAEgTADgVYAEgUACgVADgVYABgUACgVABgUYABgVAAgUAAgUYABgUgBgTAAgSYgBgSgBgRgBgQYgBgQgBgOgBgNYgBgNgCgLgBgJYgCgSgBgKAAAAYgBgLgKgIgLABYgLABgHAKABALYAAAAAAABAAAA");
	this.shape_121.setTransform(534.55,304.4,1,1,0,0,0,-0.7,1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F3BEBC").s().p("AAGk1YAAAAACAKADASYABAJACALABANYACAMABAOACAPYACAPABARACARYABASACASAAAUYAAAJABAKAAAKYAAAKAAAKAAAKYAAAUgBAVgBATYgBAVgCAUgCAUYgBAKgCAKgBAKYgCAKgBAJgCAKYgCAJgCAJgCAJYgCAKgDAIgCAJYgDARgGAQgEAPYgGAOgEANgFAMYgGALgEALgEAIYgIAQgFAJAAAAIAAAAYAAAAAGgJAJgQYAEgHAFgKAGgMYAGgLAFgNAHgOYAFgPAGgPAFgSYADgIADgJADgJYACgJADgJACgKYADgJACgKACgKYACgJACgKACgLYAEgUACgUADgVYACgUADgVABgUYAAgKABgLABgKYAAgKAAgKAAgKYABgTgBgTABgSYgBgSgBgRAAgQYgBgPgBgPgBgNYAAgMgCgLAAgJYgCgSgBgLAAAAYgBgLgKgIgLABYgLABgIAKABALYAAAAAAABAAAA");
	this.shape_122.setTransform(533.5,301.9,1,1,0,0,0,-0.7,1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F3BEBC").s().p("AgFk9YAAAAACALADASYABAJACALACANYABAMADAOACAQYACAPACARACASYABASADATABAUYAAAJABAKAAAKYABAKAAALAAAKYABAKgBALAAAKYAAAKAAAKAAAKYgBALAAAKgBALYAAAKgBAKgBALYgBAKgBAKgBAKYgCAKgBAKgCAKYgBAKgCAJgBAJYgCAKgCAJgCAJYgCAIgBAJgDAIYgCAIgCAIgCAIYgFAPgEAOgFAMYgFALgDALgEAJYgIAQgEAKAAAAIAAAAYAAAAAFgJAIgRYAFgIAEgKAGgMYAFgMAFgOAGgOYACgIACgIADgIYACgIADgIADgJYACgJADgJACgJYACgKADgJACgKYACgJACgKACgLYACgKACgKABgKYABgLACgKABgLYACgKABgLABgKYABgLAAgKABgKYABgLABgKAAgLYAAgKABgLAAgKYAAgKAAgKAAgKYAAgUgBgUgBgSYAAgSgCgSgBgQYgBgQgBgOgCgNYgBgNgBgLgBgKYgCgSgCgKAAAAYgBgLgKgIgLABYgLABgHAKACALYAAABAAAAAAAA");
	this.shape_123.setTransform(534.6,300.95,1,1,0,0,0,-0.6,1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F3BEBC").s().p("AgTlEYAAAAACALAEASYACAJADAMACAMYACANADAOACAQYACAQADARACASYACASADAUABAUYACATACAVABAVYABALgBAKABALYAAAKAAAKAAALYAAALAAAKgBALYAAALgBAKAAALYgBAKgBAKgBALYgBAKgBAKgBAKYgCAKgBAKgBAJYgCAKgCAJgBAJYgCAJgBAJgCAJYgCAIgBAIgDAIYgEAPgEAPgEAMYgEANgDALgEAIYgHASgEAKAAAAIAAAAYAAAAAFgKAIgRYAEgIAEgLAFgNYAFgMAEgOAFgPYACgIACgIADgIYACgJADgJACgJYACgJACgJACgKYADgJABgKACgKYACgKACgKACgKYABgLACgKABgLYABgKABgLACgLYAAgLABgLABgKYABgLAAgKABgLYAAgLABgLgBgKYABgWAAgVgBgUYgBgVgBgTgBgTYgBgTgDgRgBgQYgCgRgCgPgBgNYgCgNgCgLgBgKYgDgSgBgLAAAAYgCgLgKgHgKABYgLACgIAKACALYAAAAAAABAAAA");
	this.shape_124.setTransform(535.7,300,1,1,0,0,0,-0.6,1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F3BEBC").s().p("AgLlCYAAAAACALAEASYABAJADAMABAMYACANACAOACAQYACAQADARACASYACASACATABAUYACAUAAAUABAVYABAKgBALABALYAAAKAAAKgBAKYAAALAAALgBAKYgBALAAAKgBALYgBAKgBAKgBALYgBAKgCAKgBAKYgDATgEATgDASYgDASgEARgEAPYgFAQgDAOgFAMYgEANgDALgEAIYgHASgEAKAAAAIAAAAYAAAAAFgKAIgRYAEgJAEgKAFgMYAFgMAEgPAGgPYAEgPAFgRAFgSYAFgRAEgTAEgUYACgKACgKACgKYACgLACgKABgLYABgKACgLABgKYABgLABgLABgLYABgKABgKAAgLYABgLABgKAAgLYAAgVABgVgBgUYAAgVgBgTgBgTYAAgSgCgSgBgQYgBgQgCgPgBgNYgCgNgBgMgCgJYgCgTgBgKAAAAYgCgLgKgIgLACYgKABgIAKACALYAAAAAAABAAAA");
	this.shape_125.setTransform(535,298,1,1,0,0,0,-0.6,1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F3BEBC").s().p("AgqlIYAAAAADALAFASYACAJADALAEANYADANAEAOAEAQYADAQADARAEASYAEASADATADAUYADAUADAVAEAVYADAVABAVACAVYABALABAKABALYAAALABALAAAKYAAALABAKAAALYAAAKABALgBAKYgBAUgBAUgBASYAAAJgBAJgBAJYgBAJgBAIgBAIYgBAIgBAIgBAHYgBAEAAAEAAADYgBAEgBADAAADYgDANgCALgCAKYgEASgCALAAAAIAAAAYAAAAACgKAFgTYADgJADgLADgNYABgDABgEABgDYAAgDABgEABgEYABgHABgIACgIYABgIACgIABgJYACgJACgJABgJYABgTACgTADgVYABgKAAgKAAgLYABgKAAgLAAgLYABgLAAgKAAgLYAAgLgBgLAAgLYgBgVAAgWgCgVYgCgWgCgVgCgVYgBgUgEgUgDgSYgCgTgDgSgCgQYgDgQgDgPgDgNYgDgNgCgLgCgKYgCgSgDgLAAAAYgCgLgKgHgLACYgLADgHAKACALYAAAAAAABAAAA");
	this.shape_126.setTransform(536,292.55,1,1,0,0,0,0.6,1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F3BEBC").s().p("Ag/lOYAAAAADAKAGATYAEAJADALAFANYAEANAFAPAFAQYAFAPAFASAGASYAFASAGATAEAVYAFAUAFAVAFAVYAGAVADAWAFAVYACALACALACALYACALABALACAKYADAWADAVACAVYACAVABAUACATYABAKAAAJAAAJYAAAJAAAJABAIYAAAJAAAIAAAHYAAAIAAAHAAAHYgBANgBAMgBAKYgBAUAAALAAAAIAAAAYAAAAABgLACgUYABgKACgLABgOYABgHABgHAAgIYAAgHAAgIABgJYAAgIABgJAAgJYAAgJABgJgBgKYAAgTgBgVAAgVYgBgVgCgVgCgWYgBgMgBgLgBgLYgBgLgCgLgCgLYgDgVgCgXgEgWYgFgVgEgWgEgVYgDgUgFgUgFgTYgEgTgEgSgEgQYgEgRgEgOgDgOYgEgNgDgLgDgKYgFgSgDgLAAAAYgDgLgLgGgLADYgLADgGALADALYAAAAAAAAABAB");
	this.shape_127.setTransform(535.05,287.1,1,1,0,0,0,0.8,1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F3BEBC").s().p("AhBlLYAAAAAEALAHASYADAJAEALAFANYAEANAGAOAFAQYAEAPAGARAFATYAGASAGASAEAVYAFAUAFAUAGAVYAFAVAEAWAEAVYACAKADALACALYABALACALABALYACAKABALACALYABAKACAKABALYABAUACAUABATYABAKAAAJAAAJYAAAJAAAJAAAIYAAAIABAIAAAIYAAAEAAADAAAEYgBADAAAEAAADYgBAOgBALAAAKYgCATgBAMAAAAIAAAAYAAAAACgLACgUYACgJABgMACgOYAAgDAAgDABgEYAAgEAAgDAAgEYABgIAAgIABgIYAAgIAAgJABgJYAAgJABgJAAgKYgBgTAAgUgBgVYAAgLgBgKgBgLYgBgLgBgKAAgLYgBgLgBgLgBgLYgCgLgBgMgCgLYgDgVgDgWgEgVYgEgWgFgVgEgVYgDgVgGgTgEgTYgFgTgEgRgEgRYgEgQgEgOgEgNYgEgNgDgMgDgJYgFgTgDgKAAAAYgEgLgLgGgKADYgLADgGAMADAKYAAAAAAABAAAA");
	this.shape_128.setTransform(534.7,285.25,1,1,0,0,0,0.8,1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F3BEBC").s().p("AhClHYAAAAAEAKAHASYADAJAFALAEANYAFAMAGAPAFAPYAFAQAFAQAGASYAGASAFATAFAUYAFATAGAVAFAVYAFAUAEAWAFAUYACALACALACAKYACALABALACALYABAKACALABAKYACALACAKAAAKYACAVABAUABASYABAKAAAJAAAJYAAAJAAAIAAAIYAAAJAAAIAAAHYAAAEAAADAAAEYAAAEAAADgBADYgBAOgBALAAAKYgCATgBALAAAAIAAAAYAAAAACgLACgTYACgKABgLACgNYABgEAAgDAAgEYABgDAAgEAAgEYABgHAAgIAAgIYABgJAAgIABgJYAAgJABgJAAgKYgBgTAAgUAAgVYAAgKgBgKgBgLYgBgLgBgLgBgKYgBgLgBgLgBgLYgBgLgCgLgCgLYgDgVgDgWgEgVYgEgWgEgVgFgUYgDgVgGgTgFgSYgFgTgEgSgEgQYgEgQgFgOgDgNYgEgNgEgLgDgJYgFgSgEgLAAAAYgDgKgLgGgLADYgKADgGALADALYAAAAAAABAAAA");
	this.shape_129.setTransform(534.25,283.4,1,1,0,0,0,0.8,1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F3BEBC").s().p("AhHlFYAAAAAEALAIARYADAJAFALAFAMYAFANAGAOAGAPYAFAPAGARAGASYAGARAGATAGATYAGAUAFAUAGAVYAGAVAEAVAFAUYADALACALACAKYACALACALABAKYACALACAKABALYABAFABAFABAFYABAGAAAFAAAFYACAUABAUACATYABAJAAAJAAAJYAAAJAAAJAAAIYAAAIAAAIAAAHYAAAEAAAEAAADYgBAEAAADAAAEYgBANgBAMgBAJYgCATgBALAAAAIAAAAYAAAAACgLADgTYABgJACgMABgNYABgDAAgEABgDYAAgEAAgEABgDYAAgIABgIAAgIYAAgIABgJAAgJYABgJABgJgBgJYAAgTgBgUAAgVYAAgFAAgGgBgFYAAgFgBgFAAgGYgBgKgBgLgBgLYgBgLgCgLgBgLYgBgLgCgKgCgLYgEgVgDgWgEgWYgFgVgFgVgFgUYgEgUgGgUgGgSYgFgSgFgSgFgQYgDgQgGgOgEgMYgFgNgDgLgEgJYgGgSgEgLAAAAYgDgKgMgGgKAEYgKADgGAMAEAKYAAABAAAAAAAA");
	this.shape_130.setTransform(533.35,281.45,1,1,0,0,0,0.8,1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F3BEBC").s().p("AhMlCYAAAAAFAKAIASYAEAIAFALAFAMYAFAMAHAOAGAPYAGAPAHAQAGASYAHARAGATAGATYAHATAGAVAGAUYADAKADALADAKYACALADAKACAKYADALACAKADALYACALACAKACALYACAKABALACAKYABALACAKABAKYABAKABAKABAKYAAAKABAKABAJYABATAAASAAAQYgBAQABAPgCAOYgBANAAAMgCAJYgCATgBALAAAAIAAAAYAAAAACgLADgSYACgKABgMACgNYACgNABgPABgRYABgQABgSAAgTYAAgKAAgJAAgKYgBgKAAgLgBgKYAAgKgBgLgBgKYgBgLgBgLgBgLYgCgKgBgLgCgLYgBgLgCgLgCgLYgCgKgCgLgCgLYgCgKgCgLgDgLYgFgVgFgVgGgUYgFgUgGgTgGgSYgFgTgHgRgEgPYgFgQgGgOgEgNYgFgNgFgLgDgJYgHgRgEgLAAAAYgEgKgMgFgKAEYgLAEgFAMAFAKYAAABAAAAAAAA");
	this.shape_131.setTransform(532.45,279.45,1,1,0,0,0,0.8,1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F3BEBC").s().p("AhNk+YAAAAAEAKAJARYAEAJAFAKAGAMYAFAMAGANAHAPYAGAPAHAQAHARYAGASAHASAGATYAHATAGAUAHAUYADAKACALADAKYADAKADALACAJYADALACAKADALYACALACAKACALYACAKABAKACALYAAAFABAFABAFYAAAFABAFAAAFYABAKACAKAAAKYABAKABAJAAAKYABAJAAAJAAAJYAAAJABAIgBAIYgBAQABAPgCAOYgBANAAALgCAKYgCATgCALAAAAIAAAAYAAAAACgLAEgTYACgJABgMACgNYACgNABgPABgRYABgIAAgIABgJYAAgJABgJAAgJYgBgKAAgKAAgJYAAgKAAgKgBgLYAAgFAAgFgBgFYAAgFgBgGAAgFYgBgKgBgLgBgLYgCgLgBgKgCgLYgBgLgCgLgCgKYgCgLgCgKgCgLYgDgLgCgKgCgLYgGgVgFgVgGgTYgFgUgHgTgFgSYgGgSgHgRgEgQYgGgPgFgOgFgNYgFgMgFgLgDgJYgIgRgEgKAAAAYgEgKgMgFgKAEYgLAEgEAMAEAKYAAABAAAAABAA");
	this.shape_132.setTransform(532,277.65,1,1,0,0,0,0.8,1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F3BEBC").s().p("AhPk6YAAAAAFAKAJARYAEAIAGAKAFAMYAGAMAGANAHAOYAGAPAIAQAGARYAHARAHASAGATYAHASAHAUAGAUYADAKADALADAKYADAKADAKACAKYADAKACALACAKYACAKADALACAKYACALABAKABAKYACAKABALABAKYADAUABATABASYABAKgBAJAAAIYAAAJABAIgBAIYAAARAAAOgCANYgBAOgBALgBAJYgDATgBALAAAAIAAAAYAAAAACgLADgSYACgKACgLACgNYACgNABgPACgQYABgIAAgJAAgJYAAgIABgJAAgKYAAgSAAgUgBgUYAAgLgBgKgBgKYgBgLgBgLgBgKYgCgLgBgLgCgKYgBgLgCgLgCgJYgCgLgCgLgDgKYgCgLgCgLgDgKYgFgVgGgUgGgUYgFgUgHgSgGgSYgGgSgHgQgEgQYgGgPgGgOgFgMYgFgNgFgKgEgJYgHgRgFgKAAAAYgEgKgMgFgKAFYgKAEgFAMAFAKYAAABAAAAAAAA");
	this.shape_133.setTransform(531.5,275.85,1,1,0,0,0,0.8,1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F3BEBC").s().p("AhTk9YAAAAAFAKAJARYAFAIAGAKAFAMYAGAMAHANAHAPYAHAOAIAQAHARYAHASAHASAHATYAHATAHATAHAVYADAKADAKADALYADAKADAKADAKYACAKADALACALYADAKACALACAKYACALABAKACALYABAFABAFABAFYAAAFABAFAAAFYABAKACAKAAAKYABAKAAAKABAJYABAJgBAJABAJYAAAJAAAJAAAIYgBAQAAAPgCANYgBAOgBALgCAKYgCATgCALAAAAIAAAAYAAAAACgLAEgTYACgJACgMACgNYACgNABgPACgRYABgIAAgJAAgJYABgJABgJgBgJYAAgKAAgJAAgKYAAgKgBgKAAgLYAAgFgBgFAAgFYgBgGAAgFgBgFYgBgLAAgLgCgKYgCgLgBgLgCgLYgCgLgCgLgCgJYgCgLgCgLgDgLYgCgLgDgKgDgLYgFgVgGgVgGgTYgGgUgHgTgHgSYgGgSgHgRgFgPYgGgQgHgOgFgMYgFgNgFgKgEgJYgJgRgEgKAAAAYgFgKgMgEgKAEYgKAFgEAMAFAKYAAAAAAABAAAA");
	this.shape_134.setTransform(530.8,273.3,1,1,0,0,0,0.8,1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F3BEBC").s().p("AhXlAYAAAAAGAJAJARYAFAJAGAKAGAMYAGAMAHANAHAPYAHAPAIAQAIARYAIARAHASAHAUYAEAJAEAKADAKYAEAKAEAKADAKYAEAKADALADAKYADALAEAKACAKYADALADAKACALYADALACAKACALYADALABAKACALYABAKACALABAKYABAKABAKABAKYABAKAAAKABAKYABAJgBAJABAJYAAAJAAAJAAAIYgBARAAAPgCANYgCAOAAAMgCAJYgDATgCALAAAAIAAAAYAAAAACgLAEgTYADgJABgMACgNYADgOABgPACgRYABgIAAgJAAgJYABgJABgJgBgKYAAgJAAgKAAgKYAAgKgBgLAAgKYgBgLgBgKgBgLYgBgLgBgLgCgLYgCgKgBgLgCgMYgCgLgCgLgCgKYgCgLgDgKgDgLYgDgLgCgLgDgLYgDgKgDgLgDgKYgDgLgEgKgDgKYgGgUgIgTgHgSYgGgSgIgRgFgPYgHgQgGgOgGgNYgFgMgGgLgEgJYgIgRgFgKAAAAYgFgKgMgEgKAFYgKAFgEAMAFAKYAAAAAAAAAAAB");
	this.shape_135.setTransform(530.05,270.75,1,1,0,0,0,0.8,1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F3BEBC").s().p("Ahak9YAAAAAGAJAKARYAFAIAGALAGALYAHAMAHANAIAOYAHAPAIAQAIARYAIARAIASAHATYAEAJAEAKAEAKYAEAKADAKAEAKYAEAKADAKADALYAEAKADAKADAKYACALADAKADALYACAKADALACALYACAKACALACAKYABAFAAAGABAFYABAFAAAFABAFYABAKACAKAAAKYABAKAAAKABAJYABAKgBAJABAJYgBAJABAIgBAJYgBAQAAAPgCAOYgBANgBAMgCAJYgDATgCALAAAAIAAAAYAAAAACgLAFgSYACgKACgMACgNYADgNABgPACgRYABgIAAgJAAgJYABgJABgJgBgKYAAgJAAgKAAgKYAAgKgBgLAAgKYgBgFAAgFAAgGYgBgFAAgFgBgGYgBgKgBgLgCgLYgCgLgBgLgCgLYgCgLgDgLgCgKYgCgLgDgLgDgKYgDgLgCgLgDgKYgEgLgDgKgDgLYgDgKgEgKgDgKYgHgUgIgTgHgSYgHgSgHgQgGgPYgHgQgHgOgGgMYgGgNgFgKgFgIYgJgSgFgJAAAAYgFgKgMgEgKAFYgJAFgEAMAFAKYAAAAAAABAAAA");
	this.shape_136.setTransform(529.45,268.9,1,1,0,0,0,0.8,1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F3BEBC").s().p("Ahck5YAAAAAGAJAKAQYAFAIAHAKAGAMYAGALAIANAIAOYAHAPAJAPAIARYAIARAIARAIATYAEAJAFAKADAKYAEAJAEAKAEAKYAEAKADALADAKYAEAKADALADAKYADAKADAKADALYACAKACALADAKYACALACAKABAKYABAGABAFABAFYABAFAAAFABAFYABAKACAKAAAKYABAKAAAKABAJYABAKgBAJAAAIYAAAJABAJgBAIYgBAQgBAQgBANYgCANgBAMgCAJYgDATgCALAAAAIAAAAYAAAAACgLAFgSYACgKACgLACgOYADgNABgPACgQYABgJAAgIABgJYAAgJABgJAAgKYAAgKAAgJAAgKYAAgKgBgLAAgKYgBgFAAgFAAgGYgBgFgBgFAAgFYgCgLAAgLgCgLYgCgLgCgKgCgLYgCgLgCgLgDgKYgCgLgDgLgDgKYgDgLgCgLgEgKYgDgLgDgKgEgKYgDgKgEgKgDgKYgHgUgIgSgIgSYgHgSgIgQgGgPYgHgPgHgOgHgMYgGgNgFgKgFgIYgJgRgGgKAAAAYgFgJgMgEgKAFYgJAGgEAMAFAKYAAAAABAAAAAB");
	this.shape_137.setTransform(528.8,267,1,1,0,0,0,0.8,1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F3BEBC").s().p("Ahkk9YAAAAAGAJALARYAFAIAHAKAHALYAHAMAIAMAJAPYAIAOAJAQAJAQYAJARAJASAIATYAEAJAFAKAEAKYAFAKAEAKAEAKYAEAKAEAKADALYAEAKAEAKADALYADAKAEAKADALYADALACAKADALYADALABAKACALYACAKACALABAKYACALABAKABAKYABAKABAKAAAJYABAKAAAJAAAJYAAAJAAAJAAAIYgBARgBAPgCAOYgCANAAAMgDAKYgDATgCALAAAAIAAAAYAAAAACgLAFgTYADgJABgMADgOYADgNABgQACgQYABgJAAgJABgJYAAgJABgJAAgKYgBgKAAgKAAgKYAAgKgBgLgBgKYAAgLgCgKgBgLYgCgLgBgLgCgLYgCgLgCgLgDgLYgCgLgDgLgDgKYgCgMgEgKgDgLYgDgLgDgLgEgKYgEgLgDgKgEgLYgEgKgEgKgEgKYgHgUgJgSgIgSYgIgSgIgQgIgQYgHgPgIgOgHgMYgGgMgHgKgFgJYgKgRgFgJAAAAYgGgKgMgDgKAGYgJAFgDAMAFAKYAAAAABABAAAA");
	this.shape_138.setTransform(527.55,264.4,1,1,0,0,0,0.8,1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F3BEBC").s().p("AhflAYAAAAAFAKAKARYAEAIAGALAGALYAHAMAHAOAHAOYAHAPAIAQAIASYAIARAJASAHATYADAKAFAJAEAKYADAKAEAKAEALYAEAKADAKAEALYADAKAEAKADAKYADALAEAKADALYADAKACALADAKYADALACALACAKYACAKADALABAKYACAKACAKACAKYABAKABAKABAJYABAKABAJABAJYAAAJABAIAAAJYABAQABAQgBANYgBAOABAMgBAJYgCAUgBALAAAAIAAAAYAAAAACgLACgUYACgJAAgMACgOYABgNAAgQABgQYAAgJAAgIgBgKYAAgJAAgJgBgKYAAgJgBgKgBgKYgBgKgBgKgBgLYgBgKgCgLgCgLYgBgKgCgLgCgLYgCgLgCgLgDgLYgCgLgDgLgCgJYgDgLgDgLgDgLYgDgLgDgLgEgKYgDgLgDgKgDgKYgEgLgEgKgDgKYgHgUgIgSgGgTYgHgSgHgQgGgQYgHgPgHgOgFgNYgGgNgFgKgEgJYgJgRgFgKAAAAYgFgKgLgFgKAFYgKAFgFAMAFAKYAAAAABABAAAA");
	this.shape_139.setTransform(526.5,262.1,1,1,0,0,0,0.9,1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F3BEBC").s().p("AhclDYAAAAASApAbA8YAGAQAHAQAHASYADAJAEAJADAJYAEAJAEAJADAKYAGAUAHAUAHAUYACAFACAGACAFIAEAPYAEALADAKADAKYAGAVAHAVAFAVYAFAVAGAVAEAUYAEAVAEATADATYAEASACASACARYACAQACAPABAOYABANAAAMABAKYABATAAALAAAAIAAAAYAAAAAAgLAAgTYAAgKABgMAAgNYAAgOgCgPgBgRYgBgQgBgTgDgSYgCgTgDgUgCgVYgEgVgEgVgEgVYgEgWgFgWgGgVYgCgKgDgLgDgLIgDgQYgCgFgCgFgBgGYgGgVgGgUgGgVYgDgKgDgJgDgKYgEgJgDgKgDgJYgFgSgGgRgFgQYgXg/gQgpAAAAYgEgKgLgGgLAEYgKAEgFAMAEAKYAAAAAAABAAAA");
	this.shape_140.setTransform(525.65,259.75,1,1,0,0,0,1,1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F3BEBC").s().p("AhflDYAAAAAQApAZA+YAGAPAGARAHARYAGASAHATAHATYAHAUAGAUAGAUYAIAVAGAVAGAUYAHAVAGAVAGAVYAFAVAGAVAFAUYAFAUAEATAEATYAFASACASADAQYADARADAOACAOYABANACAMABAJYACAUACALAAAAIAAAAYAAAAgBgMgBgTYgBgJgBgMgBgOYgBgNgCgPgCgRYgCgQgBgSgEgTYgDgTgDgTgEgVYgEgUgEgVgFgWYgEgVgFgWgFgVYgGgVgFgVgGgVYgGgVgFgVgGgUYgFgUgGgTgFgTYgGgSgFgRgFgQYgWg/gOgqAAAAYgDgKgMgGgKAEYgKADgGALADALYABAAAAABAAAA");
	this.shape_141.setTransform(524.9,257.65,1,1,0,0,0,1,1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F3BEBC").s().p("AhilDYAAAAAOApAWA/YAGAPAGARAGASYAGASAIATAGATYAMAoANAqANAoYAGAVAIAVAFAVYAGAVAFAVAGAUYAFAUAFATAFASYAGASADASAEAQYANBBAKArAAAAIAAAAYAAAAgHgsgKhBYgDgRgCgRgFgTYgEgSgEgUgEgUYgEgVgFgUgEgWYgEgVgHgVgFgWYgLgqgLgrgKgoYgEgUgGgTgGgSYgFgSgFgSgEgPYgThAgMgqAAAAYgDgLgMgGgKADYgLADgGALADALYAAAAAAABABAA");
	this.shape_142.setTransform(524.15,255.55,1,1,0,0,0,1,1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F3BEBC").s().p("Ahok9YAAAAALAqARA/YAFAPAEARAFASYAFASAFATAGAUYAMAnAMApANApYAGAVAFAVAHAUYAHAUAGAUAHATYAHAUAGASAGASYADAJADAIADAJYADAIADAIADAHYAYA9AQAoAAAAIAAAAYAAAAgOgpgUg+YgDgHgCgIgDgJYgCgIgDgJgCgJYgFgSgFgTgGgTYgFgUgGgUgGgVYgFgUgFgVgFgVYgJgpgKgqgKgoYgEgUgEgTgEgSYgEgSgDgRgEgQYgNhAgJgqAAAAYgDgLgKgHgLACYgLACgHALADALYAAAAAAABAAAA");
	this.shape_143.setTransform(524.15,252.4,1,1,0,0,0,1,1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F3BEBC").s().p("Ahuk3YAAAAACAKADATYADASAFAbAGAgYADAQAEARAEASYAEASAEATAEAUYAFAUAFAUAGAVYAFAUAGAUAGAVYAGAVAIAUAGAUYAHAUAHAUAHATYAEAJAEAKAEAJYAEAIADAJAEAJYAEAIAEAIAEAIYAEAIAEAHAEAHYAHAPAIAMAHAMYAHALAGAJAGAIYALAPAGAJAAAAIAAAAYAAAAgGgJgKgQYgFgIgGgKgGgLYgGgMgHgNgHgOYgDgIgEgHgDgIYgDgIgEgIgDgJYgEgIgDgJgDgJYgEgKgDgJgDgJYgGgTgGgUgGgUYgFgVgGgUgEgVYgFgUgFgVgEgVYgFgUgDgVgEgTYgDgUgDgTgDgSYgDgTgCgRgDgQYgEgfgDgbgCgTYgCgSgBgLAAAAYgCgLgKgIgLABYgLACgHAJABALYAAABAAAAAAAB");
	this.shape_144.setTransform(524.1,249.25,1,1,0,0,0,1,1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F3BEBC").s().p("Ahvk1YAAAAAIAqANA/YAEAPAEARAEASYAEASAFATAFAUYAFATAGAVAFAUYADAKADAKADALYADAJADAKADAKYAHAVAGAUAHAUYAIAUAGAUAHATYACAEACAFACAFYACAEACAFACAEYAEAJAEAIADAJYAEAIAEAJADAHYAEAIAEAIAEAHYAIAOAHANAGALYAHALAGAKAFAIYALAPAGAJAAAAIAAAAYAAAAgGgJgJgQYgFgIgGgKgGgLYgFgMgHgOgGgOYgEgHgDgIgEgIYgDgIgDgIgDgJYgDgIgEgJgDgJYgCgFgBgEgCgFYgCgEgBgFgCgFYgGgTgGgUgGgUYgFgUgFgUgFgVYgDgKgDgKgCgKYgCgKgDgLgCgKYgEgUgEgUgFgUYgDgUgDgTgEgSYgDgSgDgQgCgQYgKhAgGgqAAAAYgBgLgKgIgLACYgLABgIALACALYAAAAAAAAAAAB");
	this.shape_145.setTransform(523.5,247.3,1,1,0,0,0,1,1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F3BEBC").s().p("AhwkzYAAAAAJApAPA+YAEAQAEARAEASYAFASAFASAFAUYAGATAFAUAGAUYADAKADAKADALYADAJAEAKADAKYAHAUAGAVAHAUYAHATAHAUAHASYAEAKAEAJADAJYAEAIAEAJAEAIYAEAJADAIAEAIYADAIAEAHAEAHYAHAOAHAOAGALYAGALAGAKAFAIYAKAQAGAJAAAAIAAAAYAAAAgFgKgJgQYgFgIgFgKgGgMYgFgLgGgOgHgOYgDgIgDgHgDgIYgDgIgDgJgEgIYgDgJgDgIgDgJYgEgJgDgJgDgKYgGgTgGgUgGgUYgGgUgEgUgGgVYgCgKgDgJgDgKYgCgLgDgKgCgKYgEgUgFgUgEgUYgEgTgEgTgDgSYgEgSgDgRgDgPYgLg/gHgqAAAAYgCgLgKgHgLABYgLACgHALACALYAAAAAAAAAAAB");
	this.shape_146.setTransform(522.9,245.3,1,1,0,0,0,1,1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F3BEBC").s().p("Ahzk/YAAAAABALACATYABAKABALACAOYACANACAQACAQYADARADASADATYADATAEAUAEAUYAEAVAEAVAGAVYAFAWAGAUAHAWYADALADAKAEALYADAKAEALAEAKYAEAKADALAEAKYAFAKAEAJAEAKYAEAKAEAJAEAJYAEAJAFAJAFAIYAEAJAEAIAFAIYAFAHAEAIAFAHYAJAOAJAMAIALYAIALAHAJAHAIYANAOAHAJAAAAIAAAAYAAAAgHgJgMgPYgGgIgHgKgHgLYgIgLgIgNgIgOYgEgIgEgHgEgIYgEgIgEgIgEgJYgEgIgEgJgEgKYgEgJgEgJgDgKYgEgJgCgKgEgKYgEgKgCgLgEgKYgDgKgDgLgDgKYgDgLgDgLgCgKYgFgWgFgUgEgWYgEgVgDgVgDgUYgDgVgDgUgCgSYgCgTgCgSgBgQYgBgRgCgPgBgNYgBgNAAgMgBgKYAAgTgBgMAAAAYgBgLgJgIgLAAYgLABgJAJABALYAAABAAAAAAAB");
	this.shape_147.setTransform(522.2,242.2,1,1,0,0,0,1,1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F3BEBC").s().p("Ahik0YAAAAAAAKACATYAAAJABALABANYABANACAPABAQYACAQACARACATYACASADATADAUYAEAUADAUAEAVYACAKADAKACALYACAJADAKACALYADAKADALADAKYADAKACAKAEAKYADAKADAKAEAKYADAKAEAJADAJYAEAKAEAJAEAJYADAIADAJAFAIYAEAIAEAIAEAIYAEAIAFAHAEAHYACADACADACAEYACADACADACADYAEAGAEAGAEAFYAIAKAHAJAGAHYAMAOAIAIAAAAIAAAAYAAAAgHgJgMgOYgFgHgHgKgHgKYgEgGgDgGgEgGYgCgDgCgDgCgDYgBgEgCgDgCgEYgDgHgEgHgEgIYgEgHgDgIgEgJYgEgIgCgJgEgJYgDgIgEgJgCgKYgDgJgDgKgDgKYgCgJgDgKgDgKYgCgKgCgLgDgKYgCgKgCgKgCgLYgCgKgCgKgCgKYgBgKgCgKgBgKYgEgVgBgUgDgUYgBgTgCgTgBgSYgBgTgCgRAAgPYgBgQAAgOgBgNYAAgNAAgLAAgKYAAgSgBgLAAAAYAAgLgJgJgLAAYgLABgJAJAAALYAAAAABAAAAAB");
	this.shape_148.setTransform(519.85,238.5,1,1,0,0,0,1,1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F3BEBC").s().p("AhSkpYAAAAAAAKABASYAAAJABALAAAMYABANAAAOABAPYABAPACARABARYABASACASACATYACATADAUADAUYAEATACAUAFATYAEAVAEATAFAUYADAKADAJADAKYABAEABAFACAFYABAEACAFABAEYAGATAIARAGAQYAHAQAHAPAIANYAHANAIAMAHAKYAHAKAHAIAGAHYAMANAHAHAAAAIAAAAYAAAAgHgHgLgOYgFgHgHgJgGgKYgGgLgIgLgGgOYgHgNgGgQgGgQYgGgQgFgRgEgSYgCgFgBgFgBgEYgBgFgBgEgBgFYgDgKgCgJgCgKYgDgTgEgUgDgUYgDgUgBgTgCgTYgCgUgCgTAAgTYgBgTgBgSAAgRYgBgSAAgQAAgPYAAgPAAgOAAgMYABgMAAgLAAgJYABgSAAgKAAAAYAAgLgIgJgLAAYgLgBgKAJAAALYAAAAAAABAAAA");
	this.shape_149.setTransform(517.45,234.8,1,1,0,0,0,1,1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F3BEBC").s().p("AhPktYAAAAgBAKAAASYgBAJAAALgBANYAAANAAAOAAAQYgBAQABAQAAASYAAASACATABAUYABATACAVACAUYADAUADAUAEAVYADAUAFAVAFAUYAGATAFAUAHASYACAFACAEABAFYACAEACAFACAEYAEAIADAJAFAIYAEAIAEAIADAHYAEAHAFAHAEAHYACADACADACADYADADACADACADYAEAFAFAGADAFYAJAJAIAIAGAHYAOALAHAHAAAAIAAAAYAAAAgHgHgNgNYgGgGgHgJgIgKYgDgFgEgFgEgGYgCgDgCgDgCgDYgCgDgCgDgCgEYgDgGgEgHgEgIYgEgHgDgIgDgIYgEgIgCgJgEgIYgBgEgCgFgCgEYgBgFgBgEgCgFYgGgSgEgUgEgTYgEgUgEgUgCgUYgCgVgCgTgBgUYgBgUAAgUgBgTYABgTgBgTABgSYABgRAAgRABgPYACgPABgOABgNYABgMABgLABgJYACgSABgKAAAAYABgLgIgKgLgBYgLgBgKAIgBALYAAAAAAAAAAAB");
	this.shape_150.setTransform(516.95,232.5,1,1,0,0,0,0.8,1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F3BEBC").s().p("AhIkyYAAAAgCALgCASYgBAJgBALgCANYgBANgBAPgBAQYgCAQAAASgBASYgBATABATAAAUYAAAKAAAKABALYAAAKABALABAKYABALABAKABAKYABAKACALACALYABAKACALADAKYACALACAKADAKYADAKADALADAJYAEAKADAKAEAJYADAKAFAIAEAJYACAFACAEACAEYACAEADAEACAEYAFAIAEAIAFAHYAEAHAFAHAFAGYAEAHAGAFAFAGYAEAFAFAGAEAEYAKAJAIAIAHAGYAPALAIAHAAAAIAAAAYAAAAgIgHgOgMYgHgGgHgJgJgJYgEgFgEgGgFgFYgEgGgFgFgEgHYgEgHgFgHgEgHYgEgHgDgIgFgIYgCgEgCgEgCgEYgCgFgBgEgCgEYgDgJgFgJgCgJYgDgKgDgJgDgKYgCgKgDgJgCgKYgDgKgBgLgBgKYgCgKgCgLgBgKYAAgKgCgLAAgKYgBgKAAgKAAgKYgBgKAAgLAAgKYABgKAAgKAAgKYABgTABgTACgSYACgSABgRACgPYADgQACgOABgMYACgNADgLABgJYADgTACgKAAAAYACgLgHgKgLgCYgLgCgKAHgCALYAAAAAAABAAAA");
	this.shape_151.setTransform(516.15,230.15,1,1,0,0,0,0.7,1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F3BEBC").s().p("Ag1kxYAAAAgBAKgCASYgBAJgBALgBAMYgBANgBAOgCAQYgBAPAAARgBASYgBASAAATAAATYAAAUAAAUABAUYACAVABAUACAUYACAVAEAVADAUYAFAUAEAUAGASYACAKADAJADAJYAEAJACAIAEAIYAEAJADAIAEAHYADAIAEAHADAHYACADACADACAEYACADACADACADYAEAGAEAFADAFYAIAKAHAJAGAGYANANAHAHAAAAIAAAAYAAAAgHgHgMgOYgFgHgHgJgHgKYgDgFgDgGgEgGYgCgDgCgDgBgDYgCgDgCgEgBgDYgDgHgEgHgCgIYgDgIgDgIgDgIYgDgIgDgJgCgJYgDgIgCgJgCgKYgFgSgCgUgEgUYgCgUgCgUgBgUYgBgVAAgTAAgUYAAgUABgUABgTYACgTAAgSADgSYACgRABgRACgPYACgPACgOACgMYACgMABgLACgJYADgSACgKAAAAYABgLgHgKgLgCYgLgCgKAIgCAKYAAABAAAAAAAB");
	this.shape_152.setTransform(514.2,227.75,1,1,0,0,0,0.7,1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F3BEBC").s().p("AghkxYAAAAgBAKgCASYAAAIgBALgBAMYgBANgBAOgBAPYgCAPAAARgBARYgBARAAATAAATYgBATABATAAAUYAAAUABAUABAUYABAKABAKAAAKYABAKACAKABAKYAAAKACAKACAJYABAKABAKACAJYACAJACAJACAJYACAJADAJACAIYACAJADAIACAIYABAEACADABAEYABAEACADABAEYACAHACAHADAGYADAGADAGADAGYAFALAGAJAFAIYAEAHAFAFACAEYADAEACACAAAAIAAAAYAAAAgCgCgCgEYgDgEgEgGgEgHYgEgIgFgJgFgMYgCgFgDgGgCgHYgDgGgCgHgCgHYgBgEgBgDgCgEYAAgEgBgEgBgEYgBgHgDgIgBgJYgCgIgCgJgBgJYgCgJgBgJgBgJYgBgJgBgKgBgJYgBgKgBgKAAgJYgBgKAAgKgBgKYAAgKAAgKAAgKYAAgTABgUAAgTYACgUAAgTACgTYACgTABgSACgRYACgRABgQACgPYACgPACgNACgMYABgMABgLABgJYADgRACgKAAAAYABgLgHgKgKgCYgLgCgKAIgCALYAAAAAAABAAAA");
	this.shape_153.setTransform(512.15,225.3,1,1,0,0,0,0.6,1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F3BEBC").s().p("AgOkwYAAAAAAAKgCARYgBARgCAZgBAeYgBAPgBAQgBARYgBARAAASgBATYgBASABATgBAUYAAAUAAATABATYAAAUABAUABAUYABATACATABATYACATACASADAQYABAJACAIABAIYACAIABAIACAHYABAHACAHABAHYABAGACAGACAGYADAMAEAKADAIYADAIADAGACAEYACAFABACAAAAIAAAAYAAAAgBgCgCgFYgBgEgDgGgCgJYgDgIgDgKgCgMYgCgGgBgGgCgGYgBgHgBgHgBgHYgCgIAAgHAAgIYgBgIgBgIgBgJYgBgRgBgRgBgTYAAgSgBgTAAgUYAAgTABgUABgTYAAgTACgUABgTYABgTABgTABgTYACgSACgSACgRYACgRABgQACgOYAEgdADgZACgRYADgRABgKAAAAYACgLgIgKgLgCYgKgBgKAHgBALYAAABgBAAAAAB");
	this.shape_154.setTransform(510.1,222.9,1,1,0,0,0,0.5,1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F3BEBC").s().p("AgCk2YAAAAgBAKgDASYgCAJgCAKgCAMYgBANgDAOgCAPYgCAPgCAQgCASYgDARgBATgCATYgCATgBATgBAUYgBAVgBAUAAATYAAAVAAAUABAUYAAAKACAKAAAKYABAFAAAFAAAFYABAFABAEAAAFYACATAEASADASYAEARADAQAFAOYAFAPAEANAFAMYAEALAGAJAEAIYAJAQAFAIAAAAIAAAAYAAAAgFgJgIgPYgDgJgFgJgEgMYgEgLgEgNgDgPYgEgPgCgQgDgRYgCgRgCgSgBgTYgBgFAAgEAAgFYAAgFAAgFAAgFYAAgJgBgKAAgKYABgUAAgUACgUYABgTACgUACgUYADgTACgTADgTYADgTACgSADgRYADgRADgQADgOYAEgPACgOADgMYADgMACgKACgJYAEgRADgKAAAAYACgKgHgLgKgDYgLgCgLAGgBALYAAAAgBABAAAA");
	this.shape_155.setTransform(509.15,220.6,1,1,0,0,0,0.2,1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F3BEBC").s().p("AAKk7YAAAAgDAKgFARYgCAJgCALgDAMYgDANgEAOgEAPYgDAQgDAQgEASYgEASgCATgEATYgDAUgDAUgBAUYgBALgBAKgBALYgBAKAAAKAAAKYgBALAAAKAAALYAAAKAAALABAKYABAKAAALABAKYABAKACAKABAKYABAJACAKACAJYACAJACAKADAIYACAJADAIACAIYADAIADAIADAHYADAIADAHADAGYADAGACAHADAFYAHALAFAKAGAHYALAPAGAIAAAAIAAAAYAAAAgGgJgKgPYgFgIgFgJgGgMYgCgFgDgHgCgGYgCgHgDgGgCgIYgDgHgCgIgDgIYgBgIgCgIgCgJYgDgJAAgJgCgJYgBgJgCgJAAgKYgBgKgBgJAAgKYgBgKAAgKAAgKYAAgKABgLAAgKYABgKAAgKACgLYABgKAAgJACgKYABgKACgLABgKYADgUAEgTAEgTYAEgTAEgSAEgRYAFgRAEgRAEgOYAFgPAEgNADgMYAEgMAEgLADgJYAGgRADgKAAAAYADgKgFgLgLgEYgKgEgLAGgEALYAAAAAAAAAAAB");
	this.shape_156.setTransform(508.25,218.25,1,1,0,0,0,-0.1,1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F3BEBC").s().p("AAQlAYAAAAgEAKgFARYgDAJgEALgCAMYgEANgEAOgEAQYgFAPgDARgFASYgEASgEATgEAUYgBAKgCAKgCAKYgBAKgCALgBAKYgBALgBAKgBALYgBALAAAJgBALYgBALAAALAAAKYAAALAAALABAKYABALAAAKABALYABAKACAKABAKYABAKADAKACAJYABAFABAEABAFYABAFABAEABAEYADAJACAJADAIYAEAIADAIACAHYADAIAEAHADAGYAEAHACAGADAGYAHALAFAJAGAIYALAPAGAIAAAAIAAAAYAAAAgGgJgKgPYgFgIgFgKgGgLYgDgGgBgGgDgHYgDgHgDgGgDgIYgCgHgDgIgCgIYgDgIgBgJgDgJYgBgEgBgFgBgEYAAgFgBgEgBgFYgBgJgCgKAAgKYgBgJgBgKgBgKYAAgLAAgKAAgKYAAgKABgLAAgKYABgLAAgKACgKYABgLABgJABgKYACgLACgKACgKYABgKACgKADgKYACgKACgKACgJYAFgTAFgTAEgRYAFgRAFgRAFgOYAFgPAFgOAEgMYAEgMAFgKADgJYAHgRADgKAAAAYAEgKgFgMgKgEYgKgEgMAFgEALYAAAAAAAAAAAB");
	this.shape_157.setTransform(508.1,215.9,1,1,0,0,0,-0.5,1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F3BEBC").s().p("AAWlFYAAAAgEAKgGARYgEAJgEALgEANYgDAMgFAPgFAPYgFAQgEARgGASYgEASgFAUgEAUYgEAUgFAVgCAVYgBALgCAKgBALYgBALgBAKgBALYgBALABALAAALIgBAQYABAFAAAGAAAFYABALAAALABAKYACALABAKABAKYAEAUAEAUAGASYAEASAIAQAFAPYAEAIADAHAEAGYADAHADAGADAGYAHALAFAKAGAIYALAPAGAJAAAAIAAAAYAAAAgFgJgLgQYgFgIgFgLgGgLYgDgGgCgGgDgHYgDgHgDgHgDgHYgFgPgGgRgDgSYgFgSgCgTgDgUYgBgJgBgLAAgKYgBgKABgLgBgKYAAgFAAgFABgGIABgQYABgKAAgLABgKYACgLABgJACgLYABgKADgLABgKYAEgVAGgUAEgTYAGgTAFgTAFgRYAGgRAFgRAGgPYAGgPAFgNAFgMYAFgMAFgLADgIYAIgSAEgKAAAAYAEgKgEgLgKgFYgKgEgMAEgFAKYAAABAAAAAAAB");
	this.shape_158.setTransform(508.25,213.5,1,1,0,0,0,-0.6,1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F3BEBC").s().p("AAVlJYAAAAgDAKgHASYgDAJgEALgEANYgDANgFAOgFAQYgEAQgFARgFASYgEASgFAUgEAUYgEAUgEAVgDAWYgBAKgCALgBALYgBALgBAKgBALYgBALABALgBALIAAAQYAAAGAAAFAAAFYABALAAALABAKYABALABAKABALYAEAUADAUAFASYAEASAHARAFAPYADAIAEAHADAHYADAGADAHADAGYAHALAEALAFAIYALAPAGAJAAAAIAAAAYAAAAgGgJgJgQYgFgIgFgLgFgMYgDgGgCgGgDgHYgCgHgDgHgDgIYgEgQgGgQgDgSYgEgSgCgUgCgUYAAgKgBgKAAgKYgBgLABgKAAgLYAAgFAAgFAAgGIABgPYABgLABgLABgKYACgLABgKACgKYABgLADgKACgLYADgUAGgUAEgUYAGgTAFgTAFgRYAGgSAFgRAFgPYAGgPAFgNAFgMYAFgNAEgKAEgJYAHgSAFgKAAAAYAEgKgFgLgKgFYgKgEgMAFgEAKYAAAAgBABAAAA");
	this.shape_159.setTransform(509,211.2,1,1,0,0,0,-0.6,1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F3BEBC").s().p("AAVlMYAAAAgEAKgGASYgDAJgEALgEANYgDANgEAOgFAQYgFAQgEASgFASYgEASgFAUgEAUYgEAVgEAUgDAWYgBALgCALgBALYgBALgBALgBAKYgBALAAALAAALIgBAQYAAAGAAAFABAGYAAAKAAALABALYABAKABALABAKYADAVACAUAFASYAEASAGARAEAQYADAIADAHADAHYADAHACAHADAGYAHAMAEAKAEAIYAKARAGAJAAAAIAAAAYAAAAgFgKgJgQYgEgJgEgLgFgMYgDgGgCgHgCgHYgDgHgDgHgCgIYgEgQgEgQgDgTYgEgSgBgUgCgUYAAgKAAgKgBgLYAAgKABgLAAgKYAAgGAAgFAAgFIACgQYABgLAAgLACgKYACgLABgKACgKYABgLADgLACgKYADgVAGgUAEgUYAGgTAFgTAFgSYAFgRAGgRAFgPYAGgQAFgNAEgNYAFgMAFgLADgJYAHgRAEgKAAAAYAEgLgEgLgLgFYgKgEgMAFgEAKYAAABAAAAAAAB");
	this.shape_160.setTransform(509.7,208.85,1,1,0,0,0,-0.6,1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F3BEBC").s().p("AAilRYAAAAgEALgHASYgEAJgEAKgFANYgEANgGAOgEAQYgFAQgGARgGASYgFATgGATgFAUYgFAUgGAVgEAWYgEAVgEAWgDAVYgCALgBALgBALIgCAQYAAAGAAAFgBAGYgBAWAAAVAAAVYABAVAAAUADATYACATADARADARYACAIACAHACAIYACAHABAHADAGYAEANADALAEAJYAHASAFAKAAAAIAAAAYAAAAgEgKgGgSYgEgJgCgMgEgNYgCgGgBgHgBgHYgCgIgBgHgCgIYgCgRgCgRgBgTYgBgTAAgUAAgUYACgUABgVADgWYAAgFABgFAAgGIADgQYACgKABgLADgLYAEgUAFgVAGgVYAFgVAGgUAGgTYAGgUAGgSAGgSYAHgRAGgRAGgPYAHgPAFgOAGgMYAFgMAFgLAEgIYAIgSAFgKAAAAYAEgKgEgMgKgEYgKgFgMAEgFAKYAAABAAAAAAAA");
	this.shape_161.setTransform(509.9,207.2,1,1,0,0,0,-0.7,1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F3BEBC").s().p("AAxlVYAAAAgEAKgIASYgEAJgFALgFANYgFAMgGAPgHAPYgFAQgGARgHASYgGATgHATgHAUYgGAUgGAVgGAWYgGAVgEAWgGAWYgEAVgEAWgDAWYgDAWgCAWgCAVYgBAVgBAUAAAUYAAATACASABARYACARABAPADANYACAOACALACAKYAFATADALAAAAIAAAAYAAAAgCgLgEgTYgCgKgBgMgCgNYgBgOgBgPgBgRYAAgQgBgSACgTYAAgTADgUACgVYADgVACgVAFgVYAEgWAGgVAFgVYAGgVAGgVAHgVYAGgUAIgUAHgUYAHgTAHgTAHgRYAIgSAHgQAHgPYAHgPAHgOAGgMYAFgMAGgLAEgIYAJgSAFgKAAAAYAGgJgEgNgKgFYgKgFgMAEgFAKYAAAAAAABgBAA");
	this.shape_162.setTransform(509.8,205.5,1,1,0,0,0,-0.8,1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F3BEBC").s().p("ABFlZYAAAAgFAKgJASYgEAJgGALgGAMYgGANgGAPgIAPYgHAQgHARgHASYgHATgJATgHAUYgEAKgDAKgEALYgEAKgDALgEALYgEAKgDALgDALYgEALgDALgDALYgDAKgDAMgDALYgDALgCALgDALYgCALgCALgCALYgCALgCAKgCALYgBALgCAKgBAKYgBALgBAKgBAKYgBAFAAAEAAAFYgBAFAAAFAAAEYgBAJAAAJAAAJYAAARgBAQABAOYABAOAAAMABAKYACAUACALAAAAIAAAAYAAAAgBgLgBgUYgBgKABgMAAgOYAAgOABgQABgRYABgIABgJABgJYAAgFABgEAAgFYABgFAAgEABgFYACgKABgKACgKYACgKACgKACgLYACgKADgLACgKYACgLADgLADgKYADgLADgLAEgLYADgKAEgLADgLYADgKAFgKADgLYAEgKAEgLAEgKYAEgLAEgKAFgKYAEgKAEgKAEgKYAIgTAJgSAIgSYAJgSAIgQAIgPYAIgPAHgOAHgMYAGgMAGgKAFgJYAKgRAGgKAAAAYAFgKgDgMgKgFYgJgGgNADgFAKYAAAAAAABgBAA");
	this.shape_163.setTransform(509.25,203.85,1,1,0,0,0,-0.9,1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F3BEBC").s().p("ABPlUYAAAAgGAKgJASYgFAIgGALgGAMYgHANgHAOgIAPYgHAQgIAQgIASYgHASgJATgIATYgEAKgEAKgEALYgEAKgEAKgEALYgEAKgEALgDALYgEALgEAKgDALYgDAKgDALgEALYgDALgCALgDALYgDALgCALgDAKYgCALgDALgBAKYgCALgCAKgBAKYgCAKgBAKgBAKYgCAKAAAJgBAJYgBAJgBAJAAAJYAAARgBAPAAAOYAAAOAAAMABAKYABAUABALAAAAIAAAAYAAAAAAgLAAgUYgBgKABgMABgOYAAgNACgQABgRYABgIABgJACgJYABgJABgJACgKYACgJACgKABgKYADgKACgKACgKYACgLAEgKACgKYADgLADgKAEgLYADgKADgLAEgLYADgKAEgLAEgJYAEgLAEgKAEgLYAEgKAEgKAFgKYAEgKAFgLAEgJYAFgKAEgKAEgJYAJgTAJgSAJgSYAJgRAJgPAIgPYAJgPAHgNAHgMYAHgLAHgLAFgIYAKgRAGgJAAAAYAGgKgDgMgJgGYgKgGgMADgGAJYAAABAAAAAAAA");
	this.shape_164.setTransform(509.35,201.4,1,1,0,0,0,-0.9,1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F3BEBC").s().p("ABYlOYAAAAgGAKgKARYgFAIgGAKgHAMYgHAMgHAOgIAPYgIAPgJAQgJASYgHARgKASgIAUYgEAKgFAJgEAKYgEAKgFALgEAKYgEAKgEALgEAKYgEALgEAKgDALYgEAKgEALgDAKYgDALgDALgEALYgDAKgCALgDALYgDAKgCALgCAKYgCALgCAKgCAKYgCAKgCAKgBAJYgCAKgBAJgBAJYgBAJgBAJAAAIYgBARgCAQAAANYAAAOAAAMAAAKYABAUAAALAAAAIAAAAYAAAAABgLAAgUYAAgKABgMABgNYABgOACgPACgRYABgIACgJABgJYABgJACgJACgJYACgKACgJACgKYADgKACgKADgKYADgKADgKADgKYADgLADgKAEgKYAEgLADgKAEgLYAEgKAEgKAEgKYAEgKAFgKAEgKYAFgLAEgKAFgKYAFgJAEgKAFgKYAFgJAEgKAFgJYAJgTAKgRAJgRYAKgRAJgPAJgOYAIgOAJgNAHgMYAHgLAHgKAFgIYALgQAHgKAAAAYAGgJgDgMgJgGYgJgGgMACgGAJYgBAAAAABAAAA");
	this.shape_165.setTransform(509.3,198.9,1,1,0,0,0,-1,1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F3BEBC").s().p("ABjkuYAAAAgGAIgLAPYgFAIgGAIgIALYgHALgIAMgJANYgIANgJAPgKAPYgJAQgJAQgKARYgJARgKASgJATYgJASgJAUgIATYgIASgJATgGAUYgHATgGAUgFATYgFATgFASgDASYgEASgBARgCAPYgCAQgBAOAAANYAAANgBALABAJYABASABAKAAAAIAAAAYAAAAAAgKAAgSYAAgJABgLABgNYAAgMADgPACgPYADgPACgRAFgRYAEgRAGgSAGgSYAGgTAHgTAIgSYAIgTAJgSAJgSYAJgSAKgTAKgRYAKgSALgRAJgQYAKgQALgQAKgOYAKgPAKgNAJgNYAJgMAJgLAHgKYAIgKAHgJAGgHYALgOAHgIAAAAYAHgIgBgNgJgHYgJgHgMABgHAJYAAAAgBABAAAA");
	this.shape_166.setTransform(511.1,193.4,1,1,0,0,0,-1,1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F3BEBC").s().p("ABukOYAAAAgGAHgLANYgFAGgHAIgIAJYgHAJgJALgJALYgJAMgJAMgKAOYgKANgKAPgKAOYgKAQgLAPgKARYgFAIgFAIgFAIYgEAJgFAIgFAJYgFAIgEAJgEAIYgEAJgFAIgEAJYgDAJgEAJgEAIYgDAJgDAJgEAIYgDAJgCAIgDAJYgCAIgDAIgCAJYgCAIgBAIgCAHYgBAIgCAIgBAHYgBAHgBAHAAAHYgBAGAAAGgBAGYABAMgBAKABAJYABARABAJAAAAIAAAAYAAAAAAgJgBgRYAAgJABgKABgLYABgGABgGABgHYABgGABgHABgHYACgHACgHABgIYADgHACgIACgIYACgIADgIADgIYAEgIACgIAEgIYAEgIAEgJADgIYAEgIAFgIAEgJYAEgIAFgIAFgJYAEgIAFgHAFgIYAGgIAFgIAFgIYAFgIAGgIAFgHYALgQAKgOALgOYALgOALgOALgMYAKgNAKgLAKgLYAKgKAJgKAHgIYAIgJAIgHAFgGYAMgMAHgHAAAAYAIgIgBgNgHgIYgIgHgNAAgIAIYAAAAAAAAgBAB");
	this.shape_167.setTransform(512.9,187.8,1,1,0,0,0,-1,1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F3BEBC").s().p("AB2kOYAAAAgHAHgMAMYgFAHgIAHgIAJYgIAJgJAKgKALYgJAMgLAMgKANYgLANgKAOgLAPYgLAPgLAPgLARYgFAIgFAIgGAIYgFAJgFAIgFAJYgFAIgEAJgFAIYgEAJgFAIgEAJYgDAJgFAJgDAJYgEAJgDAIgDAJYgEAJgCAIgDAJYgDAIgCAJgCAIYgEAQgCAQgDAPYgBAHAAAHgBAHYAAAGgBAHAAAGYAAAMgBAKABAIYABASABAJAAAAIAAAAYAAAAAAgKAAgRYAAgIABgKAAgMYABgGABgGABgHYABgGABgHABgHYAEgOADgQAFgQYADgIACgIAEgIYADgIADgIADgIYAEgJAEgIAEgIYAEgJAFgIAEgIYAEgJAFgIAFgIYAFgIAFgIAGgIYAFgIAFgIAGgHYAFgIAGgIAGgIYALgPAMgOAKgOYAMgOAMgNALgMYALgMALgLAKgLYAKgKAKgJAIgIYAIgJAIgHAGgFYANgMAHgHAAAAYAIgHABgNgIgIYgHgIgNAAgIAHYgBAAAAABAAAA");
	this.shape_168.setTransform(514.05,186.45,1,1,0,0,0,-1,1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F3BEBC").s().p("AB+kOYAAAAgHAHgNAMYgGAGgIAHgJAIYgIAJgKAKgKALYgLALgLAMgLANYgLANgLANgMAPYgLAPgNAPgLARYgLAPgLASgKARYgKARgKAQgIASYgJASgHASgHARYgGASgGARgEARYgEARgCAQgDAPYgBAOgCAOAAAMYAAAMgBALABAIYABASABAJAAAAIAAAAYAAAAAAgJgBgSYAAgIACgLAAgMYABgMADgNACgOYAEgPADgPAFgQYAFgRAHgQAHgRYAIgQAHgSAKgQYAJgRALgQALgQYALgPALgRAMgOYAMgPANgOALgOYAMgOANgMALgMYAMgMAMgLAKgKYALgKAKgJAJgIYAJgHAIgHAHgGYANgLAHgGAAAAYAJgHABgNgHgIYgHgJgNgBgIAHYgBAAAAABAAAA");
	this.shape_169.setTransform(515.15,185.15,1,1,0,0,0,-1,1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F3BEBC").s().p("ACFkOYAAAAgHAHgOALYgGAGgIAGgKAJYgJAIgKAKgLAKYgLALgMAMgMAMYgMANgMANgMAPYgGAHgGAIgHAHYgGAIgGAIgGAIYgMAQgLARgLARYgLARgKARgJASYgCAEgCAFgCAEYgCAFgCAEgCAFYgEAJgEAJgDAJYgDAJgDAJgDAIYgCAJgCAJgDAIYgCAIgCAJgBAIYgBAIgCAIgBAHYAAAIgBAHgBAHYAAADAAAEgBADYAAADAAADAAADYAAANgBAKABAJYABARABAKAAAAIAAAAYAAAAAAgKAAgRYgBgJACgKABgNYAAgDAAgDAAgDYABgDABgDAAgEYABgGABgHABgIYACgHACgIACgIYABgHACgIADgIYADgJACgIAEgIYADgJADgIAEgJYADgIAFgIAEgJYACgEACgFACgEYADgEACgEADgEYAJgSALgPALgQYAMgQAMgQANgOYAGgIAGgHAHgHYAGgHAGgHAGgHYANgNANgMAMgMYANgLAMgLALgKYAMgJAKgIAJgIYAJgHAJgHAHgFYAOgKAIgGAAAAYAJgHACgNgHgIYgGgJgNgCgJAHYAAAAAAAAgBAA");
	this.shape_170.setTransform(516.3,183.8,1,1,0,0,0,-1,1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F3BEBC").s().p("ACNkPYAAAAgIAGgNAMYgHAGgJAGgJAIYgKAJgKAJgMAKYgLALgNAMgMAMYgMANgOANgLAPYgHAHgGAHgHAIYgGAIgGAIgGAIIgKAMIgJAMYgFAJgHAIgFAJYgGAJgFAIgFAJYgGAIgEAJgFAJYgFAJgEAJgEAJYgEAJgEAJgDAJYgEAJgDAJgDAJYgDAJgCAJgDAIYgCAJgCAIgCAIYgBAIgCAIgBAIYgCAPgDAOAAAMYAAANgBALAAAIYABASAAAKAAAAIAAAAYAAAAAAgKABgRYAAgJACgLABgMYABgNADgNADgPYABgIADgHACgIYACgIACgIADgIYADgIADgJADgIYAEgJADgIAEgJYAEgIAFgJAEgIYAEgJAFgJAFgIYAGgIAEgJAGgIYAGgHAGgJAFgIYAGgIAHgIAGgHIAJgMIAKgLYAGgIAHgHAGgHYAHgHAGgHAHgGYAMgOAOgMANgMYANgLAMgKAMgKYAMgJALgJAJgHYAJgIAKgGAHgFYAOgKAJgGAAAAYAJgHACgMgHgJYgGgJgNgCgJAGYAAABAAAAgBAA");
	this.shape_171.setTransform(517.65,182.25,1,1,0,0,0,-1,1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F3BEBC").s().p("ACWkQYAAAAgIAGgPALYgHAGgIAGgKAIYgKAJgLAJgMAKYgMALgNALgNANYgMANgOANgMAPYgHAHgGAHgHAIYgHAIgGAIgHAIYgGAHgHAJgGAIYgGAJgGAIgGAJYgFAJgGAJgGAIYgFAJgFAJgFAJYgFAIgEAKgFAJYgEAJgFAJgDAJYgEAJgDAJgEAJYgCAJgDAJgDAIYgDAJgBAJgCAIYgCAIgDAIgBAHYgCAQgDAOgBANYgBAMgBALAAAJYAAASAAALAAAAIAAAAYAAAAABgLABgSYAAgJACgKACgNYABgMAEgOADgPYACgIADgHACgIYADgIACgJADgIYADgIADgIAEgJYADgIAFgJAEgJYADgIAFgJAFgJYAFgIAEgJAGgIYAFgJAGgIAFgJYAGgHAGgIAGgIYAGgJAHgHAHgIYAGgIAGgIAHgHYAHgIAHgHAHgHYAHgHAGgHAGgGYAOgOAOgMANgLYANgMAOgKALgKYANgJALgIAKgHYAJgIAKgGAHgFYAPgKAJgGAAAAYAJgGACgNgGgJYgGgJgNgCgJAGYAAAAgBAAAAAB");
	this.shape_172.setTransform(518.95,180.7,1,1,0,0,0,-1,1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F3BEBC").s().p("ACfkSYAAAAgJAHgPAKYgHAGgJAGgKAJYgKAIgMAJgMAKYgMALgOALgNANYgNANgPAMgMAPYgHAIgHAHgHAHYgGAIgHAIgHAIYgHAIgGAJgHAIYgGAJgHAIgFAJYgGAJgGAJgGAIYgGAKgFAIgFAJYgGAJgEAJgFAJYgCAFgCAFgCAEYgCAFgCAEgCAFYgEAJgEAJgDAJYgEAJgDAJgDAJYgDAIgBAJgDAIYgCAIgCAIgCAIYgDAQgDAOgBANYgBANgCALAAAJYgBASgBALAAAAIAAAAYAAAAACgLACgSYAAgJADgLACgNYACgMAEgOADgPYACgIADgIADgIYACgIADgIADgIYAEgJADgIAEgJYADgJAFgIAEgJYACgEACgEADgFYACgEADgFACgEYAFgIAFgJAGgJYAFgIAGgJAGgHYAGgJAGgIAHgIYAGgJAHgHAGgIYAHgIAHgIAHgHYAHgHAHgIAHgHYAGgHAHgHAHgGYAOgOAPgMANgLYAOgMAOgKAMgJYAMgJAMgIAKgIYAKgHAKgGAHgFYAQgKAIgGAAAAYAKgGACgMgGgKYgGgJgMgCgJAGYgBAAAAAAAAAA");
	this.shape_173.setTransform(520.25,179.15,1,1,0,0,0,-1,1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F3BEBC").s().p("ACqkNYAAAAgJAGgPALYgIAFgJAGgLAIYgKAIgMAJgNAJYgMALgOAKgOAMYgOANgPAMgOAPYgGAHgHAHgHAHYgHAIgHAIgIAHYgHAIgGAJgHAIYgHAIgHAIgGAJYgGAJgHAIgGAJYgFAJgGAIgGAJYgGAJgEAJgFAJYgDAFgCAEgDAEYgCAFgCAFgCAEYgEAJgFAJgDAJYgEAJgDAJgDAIYgEAJgCAJgCAIYgDAIgDAIgBAIYgEAPgDAOgCANYgCANgCALgBAJYgBATgBAKAAAAIAAAAYAAAAABgKADgTYABgJADgLADgMYACgNAEgOAFgPYACgHADgIADgIYADgIADgIADgIYAEgIAEgJAEgIYAEgJAFgIAEgJYADgEACgFACgEYADgEADgFACgEYAGgIAFgJAGgIYAGgJAGgIAGgHYAGgJAHgIAHgIYAGgIAHgHAHgIYAIgIAGgHAIgHYAHgIAHgHAIgHYAGgGAIgHAHgGYAOgNAPgMAOgLYAPgLAOgJAMgJYANgJAMgIAKgHYALgHAKgFAIgFYAPgKAKgFAAAAYAJgGADgMgGgJYgFgKgNgDgJAGYAAAAgBAAAAAA");
	this.shape_174.setTransform(521.7,177.75,1,1,0,0,0,-1,1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F3BEBC").s().p("AC1kIYAAAAgJAGgQAKYgIAFgJAFgLAIYgLAIgNAIgNAJYgNAKgOAKgOAMYgPAMgPAMgPAOYgGAHgIAGgHAIYgIAHgHAIgIAHYgHAIgHAIgHAIYgHAIgHAIgHAJYgGAIgHAJgHAIYgGAJgGAJgGAIYgGAIgFAKgFAJYgGAIgEAJgFAKYgKARgHASgHARYgEAJgCAIgDAIYgDAJgDAIgCAHYgEAQgEAOgCANYgDANgCALgBAJYgCASgCALAAAAIAAAAYAAAAACgLAEgSYABgJADgLADgMYADgNAFgOAFgPYADgHADgIADgIYADgIAEgIADgIYAJgQAIgSAKgQYAFgJAFgJAGgIYAGgIAFgJAHgIYAGgIAGgIAHgIYAGgIAIgHAGgIYAHgIAIgIAHgHYAHgHAHgIAIgHYAIgHAHgHAHgGYAHgHAJgGAHgGYAPgNAQgLAOgLYAPgKAOgJANgJYANgIANgHALgHYAKgHALgFAIgEYAQgJAJgFAAAAYAKgGAEgMgGgJYgFgKgMgEgKAGYAAAAgBAAAAAA");
	this.shape_175.setTransform(523.2,176.4,1,1,0,0,0,-1,1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F3BEBC").s().p("ADBkDYAAAAgKAFgQAKYgIAEgKAGgLAHYgLAHgNAIgOAJYgNAKgPAJgPALYgPAMgQAMgPANYgIAHgHAGgIAHYgIAIgHAHgIAHYgIAHgHAJgIAHIgLAMIgKANYgHAIgIAIgGAJYgHAIgGAJgGAIYgMARgMASgKASYgKARgIASgIARYgEAJgDAIgDAIYgDAIgDAIgDAIYgEAPgFAPgDAMYgDANgDALgBAKYgDASgCALAAAAIAAAAYAAAAADgLAEgSYACgJADgLAEgNYADgMAGgOAFgPYADgHADgIAEgIYAEgIADgIAEgIYAJgQAJgRALgRYAKgRANgQANgRYAGgIAHgHAHgIYAHgIAHgHAHgIIALgLIAMgLYAIgHAHgIAIgGYAIgHAIgHAHgGYAHgHAJgGAIgGYAPgMAQgKAPgKYAPgKAPgJAOgIYANgIANgHALgGYALgGALgFAIgFYARgIAKgFAAAAYAKgFAEgMgFgKYgFgJgMgEgKAEYAAABgBAAAAAA");
	this.shape_176.setTransform(524.7,174.95,1,1,0,0,0,-1,1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F3BEBC").s().p("ADMj+YAAAAgKAFgQAJYgJAEgKAFgMAHYgLAHgOAHgOAJYgOAJgPAJgQALYgPALgQALgQANYgQAMgQAPgQAOYgIAHgIAIgIAIIgLALIgLAMYgIAJgHAHgHAJYgHAIgHAJgHAIYgMARgNARgKASYgLARgIASgJARYgEAJgDAIgEAIYgCAEgBAEgCAEYgBAEgCAEgBAEYgGAPgFAOgDANYgDANgEALgBAJYgEATgCAKAAAAIAAAAYAAAAADgKAEgSYADgKADgKAFgNYAEgMAFgOAHgPYABgEACgEABgDYACgEACgEACgEYAEgIAEgIAEgIYAKgQAJgRAMgQYALgRANgQANgQYAHgIAHgHAHgIYAHgIAIgHAIgIIALgLIAMgLYAIgGAIgIAIgGYARgNAPgNARgLYAQgMARgKAPgJYAQgKAPgIAOgIYAOgIANgGAMgGYALgFALgFAIgEYASgIAJgEAAAAYALgFAEgMgEgKYgFgKgMgEgKAEYAAABgBAAAAAA");
	this.shape_177.setTransform(526.2,173.6,1,1,0,0,0,-1,1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F3BEBC").s().p("ADXj5YAAAAgJAFgSAIYgIAEgLAFgMAGYgMAHgOAHgOAIYgPAIgQAJgQAKYgQALgRALgQAMYgRAMgQAOgRAOYgIAHgIAHgIAIYgEAEgFADgEAEIgLAMYgQAQgOARgOAQYgNARgOARgLARYgLARgJASgKARYgEAIgEAJgEAIYgCAEgBAEgCADYgCAEgBAEgCAEYgDAIgDAHgDAHYgCAHgCAHgCAGYgEANgEALgCAKYgEASgDALAAAAIAAAAYAAAAADgLAGgSYACgJAFgLAEgMYADgGACgHADgHYADgHADgHAEgHYACgEABgEACgEYACgDACgEACgEYAEgIAFgIAEgIYAKgQAKgRANgQYALgQAOgQAOgQYAPgPAOgPARgPIAMgKYAEgEAEgDAEgEYAJgGAIgHAIgHYAQgMARgNARgKYARgLARgKAQgJYAQgJAQgIAOgHYAPgIANgFAMgGYAMgFALgEAJgEYARgHALgEAAAAYAKgEAFgMgEgKYgFgLgLgFgLAFYAAAAAAAAgBAA");
	this.shape_178.setTransform(527.7,172.2,1,1,0,0,0,-1,1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F3BEBC").s().p("ADjj0YAAAAgLAEgRAIYgJAEgLAEgNAGYgMAGgOAHgPAIYgPAIgQAIgRAKYgIAFgJAFgIAFYgJAFgIAGgJAGYgSAMgQANgSANYgIAHgJAIgIAHYgJAHgIAIgIAIYgRAPgOARgPAQYgOAQgOARgMARYgMARgKASgKAQYgEAJgEAIgFAIYgCAEgCAEgCAEYgBAEgCAEgCAEYgDAHgDAIgDAHYgDAHgCAHgCAGYgFANgEALgCAJYgGATgDALAAAAIAAAAYAAAAAEgLAGgSYADgJAFgLAFgNYADgGACgGADgHYAEgHADgHAEgHYACgEACgEACgEYACgDACgEACgEYAFgIAEgIAFgIYALgPAKgRAOgQYAMgRAOgPAPgQYAPgOAPgQARgNYAJgIAIgHAJgGYAIgHAJgGAJgHYAQgLASgNARgKYAJgFAJgFAIgFYAJgEAJgFAIgEYAQgJARgHAPgHYAOgHAOgFAMgFYAMgFAMgEAJgDYASgHAKgEAAAAYALgEAFgLgEgKYgDgLgMgFgKAEYgBAAAAAAAAAA");
	this.shape_179.setTransform(529.2,171,1,1,0,0,0,-1,1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F3BEBC").s().p("ADujvYAAAAgKAEgSAHYgKAEgLAEgNAFYgMAGgPAGgPAHYgIAEgIAEgIAEYgJAEgIAEgJAFYgIAFgJAFgJAFYgJAFgJAGgJAFYgSALgRANgSANYgSAOgSAOgRAPYgRAPgQARgPAQYgIAIgHAIgHAIYgHAIgGAJgHAIYgDAFgDAEgDAEYgDAEgDAFgDAEYgFAJgGAIgFAIYgJARgKAQgHAPYgDAIgEAHgDAHYgDAHgCAHgDAHYgFAMgFALgCAKYgGATgEAKAAAAIAAAAYAAAAAEgKAHgSYAEgKAFgLAFgMYADgGADgHAEgHYADgGAEgHAEgIYAHgPALgPAKgQYAFgIAGgIAGgIYADgEADgEADgEYAEgEADgEADgEYAHgIAGgIAIgIYAHgHAIgIAHgHYAQgPAQgPASgOYARgOASgMASgNYASgLARgMATgJYAJgFAJgFAJgFYAJgEAJgEAIgEYAJgFAIgDAIgEYAIgDAIgEAIgDYAPgGAPgFAMgFYAMgEAMgEAJgDYATgGALgDAAAAYAKgEAGgLgDgKYgEgLgLgGgLAEYAAAAAAAAgBAA");
	this.shape_180.setTransform(530.7,169.85,1,1,0,0,0,-1,1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F3BEBC").s().p("AD6jqYAAAAgLAEgTAGYgJAEgMADgNAGYgNAFgPAFgQAHYgIAEgIADgJAEYgEACgEACgFACYgEACgFACgEADYgJAEgJAFgJAEYgJAFgKAGgJAFYgTAKgRANgTANYgTANgTANgRAQYgSAOgQAQgQAQYgIAJgIAIgHAHYgIAIgGAJgHAIYgDAFgEAEgDAEYgDAEgDAEgDAFYgGAIgGAIgFAJYgKARgKAPgHAQYgEAHgEAIgDAHYgEAHgDAHgCAGYgGANgFALgDAJYgGATgEALAAAAIAAAAYAAAAAEgLAIgSYADgJAGgLAGgMYADgHADgGAEgHYAEgHAEgHAEgHYAIgPALgPALgQYAFgIAHgIAGgIYADgEADgEADgEYAEgEADgEAEgEYAHgHAHgJAIgHYAHgIAIgHAIgHYARgPAQgPATgNYARgOATgLATgNYASgKASgMATgJYAKgFAJgFAJgEYAJgEAJgEAJgEYAEgBAFgCAEgCYAEgCAFgCAEgBYAIgDAIgDAIgDYAQgGAOgFANgEYANgEAMgDAJgDYATgFALgEAAAAYALgDAGgLgDgKYgDgLgLgGgKADYgBAAAAAAAAAA");
	this.shape_181.setTransform(532.2,168.65,1,1,0,0,0,-1,1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F3BEBC").s().p("AEFjlYAAAAgLAEgTAFYgKADgMAEgNAFYgOAEgPAFgRAHYgIADgIAEgJADYgFACgEACgFACYgEACgEACgFACYgJAEgKAEgJAFYgKAFgJAFgKAFYgTAKgTAMgTAMYgTANgUANgSAPYgJAHgJAHgJAIYgIAIgJAIgIAIYgIAIgIAIgIAHYgIAIgHAJgHAIYgEAFgDAEgDAEYgEAEgDAEgDAFYgGAIgGAIgGAIYgLARgKAQgIAPYgEAIgEAHgEAHYgEAHgDAHgDAHYgGAMgFALgDAKYgIATgEALAAAAIAAAAYAAAAAFgLAIgSYAEgKAGgKAHgNYADgGADgHAEgGYAEgHAFgHAEgHYAJgPALgPAMgQYAFgIAHgIAHgIYADgEADgEAEgEYADgDAEgEAEgEYAHgIAHgIAIgIYAIgHAIgHAJgHYAIgIAJgGAJgIYAJgHAJgGAJgHYASgOAUgLATgMYATgKATgLATgJYAKgEAKgFAJgEYAJgDAKgEAJgEYAEgCAFgBAEgCYAFgCAEgBAEgCYAJgDAJgDAIgCYAQgGAPgEANgEYANgEAMgCAKgDYATgEALgDAAAAYALgDAHgLgDgKYgCgLgLgHgLADYAAAAgBAAAAAA");
	this.shape_182.setTransform(533.65,167.45,1,1,0,0,0,-1,1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F3BEBC").s().p("AEQjfYAAAAgLADgUAFYgKACgMADgOAFYgNAEgQAFgRAGYgJADgIADgJADYgFACgEACgFABYgFACgEACgFACYgJAEgKAEgKAFYgKAEgKAFgKAFYgUAJgUAMgTAMYgUANgUAMgTAPIgOAKYgFAEgEAEgFADYgIAIgKAHgIAIYgJAJgIAIgIAIYgIAHgHAIgIAIYgEAEgDAEgEAFYgDAEgEAEgDAEYgGAJgHAIgGAIYgLARgMAPgIAQYgFAHgEAIgEAHYgEAHgDAHgDAGYgHANgFALgEAJYgIATgFALAAAAIAAAAYAAAAAGgKAJgTYAEgJAGgLAHgMYAEgGADgHAEgHYAFgHAEgHAFgHYAJgPAMgOAMgQYAGgIAIgIAGgIYAEgEADgEAEgEYAEgDADgEAEgEYAIgIAIgIAIgHYAIgHAJgHAIgHYAJgIAKgGAJgHYAEgEAFgDAFgEIAOgJYATgNAUgLAUgMYATgKAUgKAUgIYAKgEAKgFAJgEYAKgDAKgEAJgDYAFgCAEgBAFgCYAEgBAFgCAEgBYAJgDAJgCAIgDYARgFAPgDANgEYAOgEAMgCAKgCYAUgEAMgCAAAAYAKgDAHgKgCgLYgCgLgLgHgLACYAAAAAAABgBAA");
	this.shape_183.setTransform(535.15,166.85,1,1,0,0,0,-1,1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F3BEBC").s().p("AEcjaYAAAAgMACgUAFYgKACgNADgOAEYgOAEgRAEgRAGYgJACgJADgJADYgEACgFABgFACYgFACgEACgFACYgKADgKAEgKAEYgKAEgKAFgLAFYgFACgFACgFADYgFACgFADgGADYgKAFgKAFgKAGYgUAMgVANgUAOIgOAKYgFAEgFAEgFADYgJAIgKAHgIAIYgJAIgJAIgIAIYgJAHgHAIgIAIYgEAEgEAEgEAEYgDAFgEAEgDAEYgHAIgHAIgGAJYgMAQgMAQgJAPYgFAIgEAHgFAHYgDAHgEAHgEAGYgGANgGALgEAKYgJATgFALAAAAIAAAAYAAAAAFgLAKgSYAFgKAGgKAIgNYADgGAEgGAFgHYAEgHAFgHAFgHYAKgPANgPAMgQYAHgHAHgIAHgIYAEgEADgEAEgEYAEgDAEgEAEgEYAIgHAIgIAIgIYAJgGAJgHAJgIYAJgHAKgGAJgHYAFgDAFgEAFgDIAPgKYATgMAVgLATgLYALgFAKgFAKgEYAGgDAFgCAFgCYAFgCAFgCAFgCYAKgEAKgEAKgEYAKgDAKgDAKgDYAFgCAEgCAFgBYAFgBAEgCAFgBYAJgCAJgDAIgCYARgFAQgCAOgEYANgDANgCAKgCYAVgDALgCAAAAYALgCAIgKgCgLYgCgLgKgHgLABYgBABAAAAAAAA");
	this.shape_184.setTransform(536.65,166.25,1,1,0,0,0,-1,1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F3BEBC").s().p("AEnjVYAAAAgMACgVAEYgKACgNACgPAEYgOAEgRADgSAFYgRAGgUAEgTAIYgKADgLAEgKADYgKAEgLAFgKAEYgGADgFACgGACYgFACgFADgFADYgLAFgLAFgKAGYgKAFgLAGgKAGYgLAGgKAIgKAGIgQAKIgPALYgJAIgKAGgJAIYgJAIgJAIgJAIYgJAIgIAHgIAIYgJAIgHAIgHAJYgHAIgIAIgGAIYgNARgMAPgKAQYgFAHgFAIgEAHYgEAHgEAHgEAGYgHANgHALgEAKYgJATgGALAAAAIAAAAYAAAAAGgLALgTYAEgJAHgLAIgMYAEgGAEgHAFgHYAFgGAFgHAFgIYALgOANgPANgQYAHgIAHgHAIgIYAHgIAIgIAJgHYAIgHAIgIAJgGYAJgHAJgIAKgHYAJgHAKgGAKgHIAPgKIAPgJYALgGAJgGALgFYALgGAKgFAKgFYALgFAKgEALgFYAFgCAFgCAGgDYAFgBAFgCAGgCYAKgEAKgEALgDYAKgDAKgDAKgDYATgGATgEASgEYARgEAQgDAOgCYAOgDANgCAKgBYAVgDAMgCAAAAYALgBAIgKgCgLYgBgLgKgIgLACYgBAAAAAAAAAA");
	this.shape_185.setTransform(538.15,165.65,1,1,0,0,0,-1,1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F3BEBC").s().p("AEyjQYAAAAgMACgVADYgLACgNACgPADYgPADgRADgSAFYgSAFgUAEgUAHYgLADgKAEgLADYgLAEgKAEgLAEYgGACgFACgGACYgFADgGACgFADYgLAFgLAEgKAGYgLAGgLAFgLAGYgLAGgLAHgKAGIgQAKIgQALYgJAHgLAHgJAIYgKAHgJAIgKAIYgIAIgJAIgIAHYgJAIgIAIgHAIYgIAJgIAHgGAJYgOAQgNAQgKAPYgFAIgFAHgFAHYgEAHgEAHgEAHYgEAGgEAGgDAGYgEAFgCAGgDAEYgKATgFALAAAAIAAAAYAAAAAGgKALgTYADgEACgGAEgFYAEgFAEgGAEgGYAEgHAEgGAFgHYAFgHAGgHAFgHYALgPAOgOAOgQYAGgIAJgHAHgIYAIgIAIgIAJgHYAJgHAJgIAJgGYAJgHAKgHAJgHYAKgIAKgFALgHIAPgKIAQgIYALgGAKgHALgEYALgFALgGAKgFYAKgEAMgEAKgFYAGgCAFgCAGgCYAFgCAGgBAFgCYALgEAKgDALgDYAKgDALgDAKgCYAUgGATgDASgEYASgEAQgCAPgCYAOgDANgBALgBYAVgCAMgBAAAAYALgCAIgJgBgLYgBgLgKgIgLABYAAAAgBAAAAAA");
	this.shape_186.setTransform(539.6,165.05,1,1,0,0,0,-1,1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F3BEBC").s().p("AE9jLYAAAAgMACgWACYgLACgNABgPADYgQADgRACgTAFYgSAEgVAEgVAGYgKADgLADgLADYgLAEgLAEgLAEYgGACgFACgGACYgGACgFACgGADYgLAEgMAFgKAFYgLAGgMAFgLAGYgMAFgKAHgLAGIgRAKIgPALIgQAKIgIAFIgHAGYgKAIgKAHgKAIYgJAIgJAIgJAHYgJAHgIAJgIAIYgHAIgJAIgGAIYgOARgOAPgLAQYgFAHgGAIgFAGYgEAIgFAHgEAGYgEAGgEAGgDAGYgEAGgCAFgDAFYgLATgGALAAAAIAAAAYAAAAAHgLALgSYADgFADgFAEgGYAEgFAEgGAEgGYAFgGAEgHAFgHYAGgGAFgHAGgHYAMgPAOgPAOgPYAHgIAJgHAIgIYAIgIAIgIAKgHYAJgHAJgGAJgIYAKgHAKgHAKgHIAHgFIAIgFIAQgJIAQgKIAQgIYAMgGAKgGAMgFYALgEALgFAKgFYALgFAMgDALgEYAGgCAFgCAGgCYAFgCAGgCAFgBYALgEALgDALgDYALgCAKgDALgCYAUgFAUgDASgDYATgEAQgBAPgCYAPgCANgBALgBYAWgBAMgBAAAAYALgBAJgJgBgLYgBgMgKgIgLABYAAAAAAAAgBAA");
	this.shape_187.setTransform(541.1,164.4,1,1,0,0,0,-1,1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F3BEBC").s().p("AFJjGYAAAAgNABgWADYgLABgOABgPACYgIABgJABgIACYgJABgKABgJACYgTAEgVADgVAGYgLADgLADgMADYgLADgLAEgMADYgGACgFACgGACYgGACgGACgGADYgLAEgMAEgMAFYgKAGgMAFgMAFYgMAGgLAHgLAFYgGAEgGADgFADIgQAKYgLAHgLAGgKAIYgLAIgKAHgKAIYgJAIgKAIgJAHYgJAHgJAIgIAJYgIAIgJAHgHAJYgOAQgOAQgMAPYgGAIgFAHgGAHYgEAHgFAHgEAGYgFAHgEAGgEAGYgDAFgDAGgDAEYgLAUgHALAAAAIAAAAYAAAAAHgLAMgTYADgEAEgGAEgFYAEgFAEgGAFgGYAEgHAFgGAFgHYAGgHAGgHAGgHYAMgPAPgOAPgQYAHgIAJgHAJgHYAIgIAJgIAJgHYAKgGAJgHAKgIYAKgHAKgGALgHYAKgHALgGALgGIAQgKYAGgCAGgDAFgDYAMgFALgGALgFYAMgEALgFALgFYALgEAMgDAMgEYAFgCAGgCAGgCYAGgBAFgCAGgBYALgDAMgDALgDYALgCALgDAKgCYAVgFAVgBASgDYAJgCAJgBAJgBYAIAAAIgBAIgBYAPgBANgBAMAAYAWgBANgBAAAAYALAAAIgKAAgLYgBgLgJgIgLAAYAAAAgBAAAAAA");
	this.shape_188.setTransform(542.6,163.85,1,1,0,0,0,-1,1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F3BEBC").s().p("AFUjAYAAAAgNABgWABYgMABgNAAgRACYgIABgIABgJABYgJABgKABgKACYgTAEgVACgWAGYgLACgMADgLACYgMADgMAEgLADYgGACgGABgGACYgGACgGACgGADYgMAEgNAEgMAFYgKAFgMAFgNAFYgMAFgLAHgMAGYgGADgGACgFAEIgRAKYgLAHgMAGgKAHYgLAIgLAHgKAHYgKAIgJAIgKAIYgKAHgIAIgJAIYgJAIgIAHgIAJYgPAQgPAQgMAPYgGAIgGAHgFAHYgGAHgEAHgFAHYgFAGgEAGgEAGYgEAGgDAFgDAFYgMATgGALAAAAIAAAAYAAAAAHgKANgTYADgFADgFAEgGYAFgFAEgGAFgGYAFgGAFgHAFgHYAGgGAHgHAGgIYAMgPAQgOAQgPYAHgIAJgHAJgIYAJgHAJgIAKgHYAKgGAJgIAKgHYALgGALgHAKgHYALgHALgFAMgGIAQgKYAGgCAGgDAGgDYAMgFALgFAMgFYAMgEALgFAMgEYAMgEAMgDALgEYAGgCAGgCAGgBYAGgCAGgBAGgCYALgCAMgDALgDYALgBAMgCAKgCYAWgFAVgBATgCYAJgCAJAAAJgBYAJAAAIgBAIAAYAPgCAOAAALAAYAXAAANAAAAAAYALAAAJgKgBgLYAAgLgJgIgLAAYAAAAAAAAgBAA");
	this.shape_189.setTransform(544.05,163.25,1,1,0,0,0,-1,1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F3BEBC").s().p("AFfi7YAAAAgNAAgXABYgMABgOAAgQACYgIAAgJABgJABYgKAAgJABgKACYgUADgWACgWAFYgMACgLACgMACYgMADgMAEgMADYgGABgGACgHABYgGACgGACgGACYgMAFgNADgMAFYgMAFgMAFgMAFYgNAFgMAGgMAGYgGADgGACgGADIgRAKYgMAHgMAGgKAIYgLAHgLAHgLAHYgKAIgKAIgKAIYgKAHgJAIgJAHYgJAJgJAHgIAIYgIAJgIAIgHAHYgIAIgGAIgHAIYgGAHgGAIgGAGYgFAIgGAHgEAGYgFAHgFAGgEAFYgEAGgDAGgDAEYgNAUgHALAAAAIAAAAYAAAAAIgLANgTYAEgEADgGAEgFYAFgFAEgGAGgHYAFgGAFgGAGgHYAGgHAGgHAHgHYAHgHAGgIAIgHYAIgIAIgHAIgIYAIgIAKgHAJgHYAJgIAJgIALgFYAKgHAKgIAKgHYALgGALgHALgHYALgGAMgGALgGIASgJYAGgCAGgDAGgCYAMgFAMgGAMgEYAMgEALgEAMgFYANgEAMgDAMgDYAGgCAGgBAGgCYAGgBAGgCAGgBYAMgCAMgDALgCYAMgCALgBALgCYAXgEAVgBATgCYAKgBAJAAAJAAYAJgBAIAAAIAAYAQgBAOAAALABYAXAAAOAAAAAAYALAAAJgJAAgLYAAgLgJgJgLAAYAAAAAAAAgBAA");
	this.shape_190.setTransform(545.55,162.6,1,1,0,0,0,-1,1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F3BEBC").s().p("AFqi1YAAAAgNAAgYAAYgLAAgPAAgRABYgIAAgJABgJAAYgKABgKAAgKACYgUACgWACgXAEYgMACgMACgMACYgMADgMADgNACYgGACgGABgHACYgGACgGACgHABYgMAEgNAEgNAEYgMAFgMAFgNAEYgNAFgMAGgMAGYgHADgGACgGADIgSAKYgMAGgMAGgLAIYgMAHgLAHgLAHYgKAIgLAIgKAHYgLAHgJAJgJAHYgJAIgKAHgIAJYgIAIgIAIgIAHYgIAIgHAIgGAIYgHAHgHAIgGAHYgFAHgGAHgFAGYgFAHgEAGgFAGYgEAFgDAGgEAFYgNATgHALAAAAIAAAAYAAAAAIgKAOgTYADgFAEgFAEgGYAFgFAFgGAFgGYAFgHAGgGAGgHYAGgHAHgHAHgHYAHgHAHgIAIgHYAIgHAJgIAIgHYAJgIAJgHAKgIYAJgHAKgHAKgHYALgHAKgHALgHYALgGALgHAMgGYALgHAMgFAMgGIASgJYAGgCAGgDAHgCYAMgFAMgFANgEYAMgEAMgEAMgEYANgEAMgDANgDYAGgBAGgCAGgBYAHgCAGgBAGgBYAMgCAMgCAMgCYAMgCALgBAMgCYAWgDAWAAAUgCYAKAAAJgBAJAAYAJAAAJAAAIAAYAPAAAPABAMAAYAXABAOAAAAAAYALABAJgJAAgLYABgLgJgJgLAAYAAAAAAAAgBAA");
	this.shape_191.setTransform(547.05,161.95,1,1,0,0,0,-1,0.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F3BEBC").s().p("AF2iwYAAAAgOAAgYgBYgMAAgPAAgRAAYgIABgKAAgJAAYgKAAgKABgKABYgVACgXABgXAEYgMABgMACgNACYgMACgNADgNACYgGACgHABgGABYgGACgHACgGACYgNADgOADgNAFYgNAEgMAFgNAEYgNAFgMAGgNAFYgHADgGACgGADIgTAKYgMAGgNAGgLAHYgMAIgMAHgLAGYgLAIgLAIgKAHYgLAHgKAJgJAIYgKAHgKAHgIAJYgJAIgIAIgIAHYgJAIgGAIgIAIYgGAIgHAHgGAHYgGAHgGAHgFAHYgFAGgFAGgFAGYgEAGgEAFgEAFYgNAUgIALAAAAIAAAAYAAAAAIgLAPgTYAEgEADgGAFgFYAFgGAFgGAGgGYAFgGAGgHAGgHYAHgHAHgGAHgIYAHgHAIgIAIgHYAIgHAJgIAJgHYAJgIAKgHAJgHYAKgIAKgHALgGYALgHALgHALgHYALgHAMgGALgGYAMgHANgFAMgGIASgIYAGgDAHgCAGgCYANgFANgFAMgEYANgEAMgEANgDYANgEANgCANgDYAGgCAGgBAHgCYAGgBAGgBAHgBYAMgCAMgCAMgCYANgBALgBAMgBYAXgDAWAAAUgBYAKAAAKAAAJAAYAJAAAJAAAIABYARAAAOABAMABYAYABAOABAAAAYALABAJgJABgLYABgLgIgJgLgBYgBAAAAAAAAAA");
	this.shape_192.setTransform(548.55,161.25,1,1,0,0,0,-1,0.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F3BEBC").s().p("AGBiqYAAAAgOAAgZgCYgMAAgPgBgRAAYgJAAgJAAgKAAYgKAAgKABgLAAYgVACgXAAgYAEYgNABgMABgNACYgMACgNACgNADYgHABgHABgGACYgHABgGACgHABYgNAEgOACgNAFYgOAEgMAEgNAFYgOAEgNAGgNAFYgNAFgNAGgNAGYgMAGgNAGgMAHYgMAHgMAHgMAHYgLAIgMAHgKAIYgMAHgJAJgLAHYgJAHgLAHgIAJYgJAIgJAIgIAIYgJAHgHAJgHAHYgIAIgHAHgGAHYgGAHgGAHgGAHYgFAHgFAGgFAFYgFAGgDAGgEAFYgOATgJAMAAAAIAAAAYAAAAAJgLAPgTYAEgFAEgFAFgGYAFgFAFgGAGgHYAGgGAGgHAGgHYAHgGAIgHAHgHYAIgIAHgIAJgHYAJgHAIgHAKgIYAJgIAKgHAKgHYAKgGAKgIAMgHYALgHALgGALgHYAMgHAMgGAMgGYAMgHANgFANgFYAMgGANgFANgEYANgFANgFANgEYAOgDAMgEANgDYANgEANgCANgDYAHgBAGgBAHgCYAGgBAHAAAGgBYANgCANgCAMgBYAMgBAMgBAMgBYAYgCAWABAVgBYAKAAAKAAAJABYAKAAAJAAAIABYAQAAAPACANABYAYACAOABAAAAYALABAKgIABgLYABgLgIgKgLgBYgBAAAAAAAAAA");
	this.shape_193.setTransform(550.05,160.55,1,1,0,0,0,-1,0.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#F3BEBC").s().p("AGMijYAAAAgOgBgZgCYgNAAgPgCgSAAYgJAAgJAAgKAAYgKgBgKAAgLABYgWABgXAAgZACYgNACgMABgNABYgNACgNACgOACYgHABgGABgHABYgHACgHABgGACYgOADgOACgOAFYgNAEgNAEgOAEYgOAEgNAGgOAFYgNAEgNAGgNAGYgOAGgNAGgMAHYgMAHgNAGgMAHYgMAIgLAHgLAIIgJAFIgIAGYgFAEgFAEgGAEYgKAIgKAGgJAJYgKAIgJAIgIAHYgJAIgIAIgHAIYgIAHgHAIgHAHYgGAHgGAHgGAHYgGAGgFAGgFAGYgFAGgEAGgEAEYgPAUgIAMAAAAIAAAAYAAAAAJgLAQgTYAEgFAEgGAFgFYAFgGAGgGAGgGYAGgGAGgHAHgHYAHgHAHgGAIgIYAIgHAIgIAJgHYAJgHAJgIAKgHYAJgIAKgHALgGYAFgEAFgDAGgEIAIgGIAIgFYAMgGAMgHALgHYAMgGANgGAMgGYANgHANgFANgFYANgFANgGANgEYAOgEANgFANgDYANgEAOgDANgDYANgEAOgBANgDYAHgBAHgBAGgCYAHgBAHAAAGgBYANgBANgCANgBYAMgBANAAAMgBYAYgCAXACAVgBYAKAAAKABAKABYAJAAAJABAJAAYARABAPACAMACYAZACAOACAAAAYALABAKgIABgKYACgLgIgKgLgCYAAAAgBAAAAAA");
	this.shape_194.setTransform(551.5,159.7,1,1,0,0,0,-1,0.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F3BEBC").s().p("ABfJCYAAAAgBgTgCghYgBgQgBgUgCgWYAAgMgBgMgBgMYgBgNgBgNgCgOYgCgcgDgfgDggYgDgggFghgEgjYgEgjgEgkgGgkYgFgkgGglgFgkYgHglgGglgHgkYgFgkgHgjgHgjYgHgigGghgIgfYgHgggHgdgGgbYgHgcgGgYgGgWYgGgWgFgUgEgPYgIgggFgSAAAAIAAAAYAAAAAFASAHAgYADAQAFATAFAWYAFAXAFAZAFAbYAGAbAGAeAGAfYAGAgAFAhAGAjYAGAiAHAjAEAlYAFAkAFAlAFAlYAEAkAFAlAEAkYAEAkADAkADAjYADAjAEAhABAgYACAgACAeACAcYAAANABAOABAMYAAANABAMAAAMYABAWAAAUABAQYABAhABATAAAAYAAALAJAIALAAYALAAAJgKAAgLYgBAAAAAAAAAA");
	this.shape_195.setTransform(447.95,157.7,1,1,0,0,0,-1,-1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F3BEBC").s().p("ABhI/YAAAAgBgTgCggYgBgQgCgUgBgXYgBgLgBgMgBgMYgBgNgBgNgCgOYgDgcgDgegDggYgDgggFghgEgjYgEgjgEgjgGglYgGgkgFglgGgjYgHglgGgkgHgkYgGgkgHgkgHgiYgHgigGghgIgfYgHgfgHgdgGgbYgGgcgHgYgGgWYgFgWgFgTgFgQYgIgfgFgSAAAAIAAAAYAAAAAFASAHAgYADAPAFAUAFAWYAFAWAFAZAGAbYAFAbAGAeAGAfYAHAfAFAhAGAjYAFAiAHAjAFAkYAEAkAGAlAFAlYAEAjAFAlAEAkYAFAlADAjADAjYADAiAEAiACAgYACAfACAeACAcYAAAOABANABAMYABANAAAMAAALYABAXABAUABAQYABAgABATAAAAYAAALAJAJALgBYALAAAJgKgBgLYAAAAAAAAAAAA");
	this.shape_196.setTransform(447.95,159.55,1,1,0,0,0,-1,-1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F3BEBC").s().p("ABjI8YAAAAgBgSgDghYgBgQgCgTgBgXYgBgLgBgMgBgMYgCgNgBgNgBgOYgDgcgDgegEggYgDgfgFgigEgiYgFgjgEgjgGgkYgGgkgFglgGgjYgHglgHgkgGgkYgGgkgHgjgHgiYgIgigGghgHgeYgIgfgHgegGgbYgGgbgHgYgFgWYgGgWgFgTgEgQYgIgfgFgSAAAAIAAAAYAAAAAEASAHAgYAEAQAEATAFAWYAFAWAGAYAFAcYAFAbAGAdAHAfYAGAfAFAiAGAiYAGAiAHAjAFAkYAFAkAFAkAFAlYAFAjAEAlAEAkYAFAkADAkAEAiYADAiAEAiACAfYACAgACAeACAbYABAOABANABANYAAAMABAMAAALYABAXABAUABAQYABAgABATAAAAYABALAJAIALAAYALgBAIgJAAgLYAAAAAAgBAAAA");
	this.shape_197.setTransform(447.95,161.35,1,1,0,0,0,-1,-1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F3BEBC").s().p("ABlI5YAAAAgCgSgCggYgCgQgBgUgCgWYgBgLgBgMgBgNYgCgMgBgOgCgNYgDgcgDgegDgfYgEgggFghgEgiYgFgigFgkgGgkYgGgjgGglgFgjYgHgkgHglgHgjYgGgkgHgjgHgiYgHghgHghgHgfYgIgfgHgdgGgbYgGgagHgZgFgWYgGgVgFgTgEgQYgIgfgFgSAAAAIAAAAYAAAAAEASAHAgYAEAPAEATAFAWYAFAWAGAZAFAbYAFAbAGAdAHAfYAGAfAFAhAHAiYAFAiAHAjAFAkYAGAjAEAlAGAkYAEAjAFAlAFAkYAFAjADAkADAiYAEAiAEAhACAgYACAfADAeACAbYABAOABANABANYAAAMABAMABALYABAXABATAAAQYACAgABATAAAAYABALAJAIALAAYALgBAJgJgBgLYAAgBAAAAAAAA");
	this.shape_198.setTransform(447.95,163.15,1,1,0,0,0,-1,-1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F3BEBC").s().p("ABnI2YAAAAgCgSgDggYgBgQgCgTgCgWYgBgMgBgLgBgNYgCgMgBgNgCgOYgDgcgEgdgDggYgEgfgFghgFgiYgEgigFgkgGgjYgGgkgGgkgGgjYgHgkgHgkgHgkYgGgjgHgjgHgiYgIghgGghgIgeYgHgfgHgdgHgbYgGgbgGgYgGgWYgGgVgFgTgEgPYgIgfgFgSAAAAIAAAAYAAAAAEASAHAfYAEAQAEATAFAVYAFAWAGAZAFAbYAGAbAGAdAGAfYAHAeAFAhAGAiYAGAiAHAiAFAkYAGAkAEAkAGAkYAFAjAEAlAFAjYAFAkAEAjADAiYAEAiAEAhACAgYADAfACAdACAcYACANABANABANYAAAMABAMABALYABAXABATABAQYACAgABASAAAAYAAALAKAJALgBYALAAAIgKAAgLYAAAAAAAAAAgB");
	this.shape_199.setTransform(447.9,164.95,1,1,0,0,0,-1,-1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F3BEBC").s().p("ABoI0YAAAAgBgSgDggYgCgQgCgTgCgXYgBgLgBgLgBgNYgCgMgCgNgBgOYgEgbgDgegEgfYgEgfgFghgFgiYgFgigFgjgGgkYgGgjgGgkgGgjYgHgkgHgkgHgjYgGgkgIgigHgiYgHghgHghgHgeYgIgfgHgcgGgbYgHgbgGgYgGgVYgGgWgEgTgFgPYgIgfgFgSAAAAIAAAAYAAAAAFASAHAfYADAQAFATAFAVYAFAWAFAZAGAaYAFAbAGAdAGAfYAHAfAFAgAHAiYAGAhAHAjAFAkYAGAjAEAkAGAkYAFAjAFAkAFAkYAFAjADAjAEAiYAEAiAEAhADAfYACAfADAeACAbYABAOABANACAMYAAAMABAMABALYABAXABATABAQYACAgACASAAAAYAAALAKAIALAAYALgBAIgKgBgLYAAAAAAAAAAAA");
	this.shape_200.setTransform(447.75,166.75,1,1,0,0,0,-1,-1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F3BEBC").s().p("ABqIxYAAAAgBgSgEggYgBgQgDgTgCgWYgBgLgBgMgCgMYgBgNgCgNgBgNYgEgbgEgegEgfYgEgfgFgggFgiYgFgigFgjgHgjYgGgjgGgkgHgjYgHgkgHgkgHgjYgFgjgIgigIgiYgHghgHgggHgeYgIgfgHgcgGgbYgHgagGgZgGgVYgGgVgFgTgEgPYgIgfgFgSAAAAIAAAAYAAAAAFASAHAfYADAQAFASAFAWYAFAVAFAZAGAaYAFAbAGAdAGAfYAHAeAGAhAGAhYAGAiAHAiAFAjYAGAkAFAjAGAkYAFAjAFAkAFAjYAFAkAEAjAEAhYAEAiAEAhADAfYADAfACAdADAbYABAOABANACAMYAAAMABAMABALYACAWABATABAQYACAgACASAAAAYAAALAKAIALAAYALgBAIgKgBgLYAAAAAAAAAAAA");
	this.shape_201.setTransform(447.6,168.55,1,1,0,0,0,-1,-1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F3BEBC").s().p("ABsIuYAAAAgJhIgNhsYgDgbgEgdgEgfYgBgPgDgQgDgQYgDgRgCgQgDgRYgGghgGgjgFgjYgGgkgGgjgHgjYgPhHgOhHgOhCYgDgRgEgQgDgQYgCgIgCgIgBgIYgCgIgCgHgCgIYgIgegHgdgHgaYgbhpgShGAAAAIAAAAYAAAAAPBHAYBqYAGAaAGAdAHAeYABAIACAHACAIYABAIACAIABAIYADAQADAQADARYAMBDAMBHAMBHYAFAjAEAkAFAjYAFAjAEAjAFAiYACAQACARACAQYACAQADAQABAPYADAfACAeADAbYAJBsAGBIAAAAYABALAKAIALgBYALgBAIgKgBgLYAAAAAAAAAAAA");
	this.shape_202.setTransform(447.4,170.35,1,1,0,0,0,-1,-1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F3BEBC").s().p("ABuIrYAAAAgJhHgOhsYgEgbgDgdgEgeYgCgQgDgPgDgRYgDgQgCgQgDgRYgGghgGgjgGgjYgGgjgGgkgHgiYgPhHgOhGgOhCYgEgRgDgQgEgQYgCgIgBgIgCgIYgCgHgCgIgCgIYgIgegHgcgHgaYgbhpgShGAAAAIAAAAYAAAAAQBHAXBpYAGAbAGAcAHAfYACAHABAIACAHYACAIABAIACAIYACAQADARADAQYAMBDANBHAMBGYAFAjAFAkAFAjYAEAjAFAiAFAiYACAQACARACAQYADAQACAQABAPYADAfADAdACAbYAKBsAHBIAAAAYABALAKAIALgBYALgBAIgKgBgLYAAAAAAgBAAAA");
	this.shape_203.setTransform(446.8,172.15,1,1,0,0,0,-1,-1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F3BEBC").s().p("ABwIoYAAAAgKhHgOhrYgEgbgEgcgEgfYgCgPgDgQgDgQYgDgQgDgQgDgRYgFghgHgigGgjYgGgjgGgkgHgiYgPhGgPhGgOhCYgEgRgDgQgEgQYgBgIgCgHgCgIYgCgIgCgHgCgIYgIgegHgcgHgaYgbhogShGAAAAIAAAAYAAAAAQBGAXBpYAGAbAGAcAHAeYACAIACAHABAIYACAIABAIACAIYADAQADAQADAQYAMBDANBGAMBHYAFAiAFAjAFAjYAFAjAFAjAEAhYADAQACARACAQYADAQACAPABAQYADAeADAdADAbYALBrAHBIAAAAYABALAKAIALgBYALgCAIgJgBgLYAAgBAAAAAAAA");
	this.shape_204.setTransform(446.2,173.95,1,1,0,0,0,-1,-1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#F3BEBC").s().p("AByIlYAAAAgLhGgPhrYgDgagFgdgEgeYgCgQgDgPgDgQYgDgQgDgQgDgRYgGghgGgigGgjYgHgigGgkgHgiYgPhGgPhGgOhBYgEgRgEgQgDgPYgCgIgCgIgBgIYgCgHgCgIgCgHYgIgegIgcgGgaYgchogShFAAAAIAAAAYAAAAAQBGAYBoYAFAaAHAdAHAeYABAHACAIACAHYABAIACAIABAIYADAQADAQADAQYAMBCAOBGAMBHYAFAiAFAjAFAjYAFAjAFAiAFAhYADARACAQACAQYADAQACAPACAPYADAfADAdADAbYALBqAIBHAAAAYABALAKAIALgBYALgBAIgKgBgLYAAAAAAAAAAgB");
	this.shape_205.setTransform(445.55,175.75,1,1,0,0,0,-1,-1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F3BEBC").s().p("ABzIiYAAAAgKhGgQhqYgEgagEgdgFgeYgCgPgDgQgDgPYgDgQgDgQgDgRYgGghgHgigGgiYgHgjgGgjgHgiYgQhFgOhGgPhBYgEgQgDgQgEgQYgCgIgBgIgCgHYgCgIgCgHgCgIYgIgdgHgcgHgaYgbhogThEAAAAIAAAAYAAAAAQBFAYBoYAGAaAGAcAHAeYACAIABAHACAIYABAIACAHABAIYADAQAEAQADARYAMBBANBGAMBGYAGAiAFAjAGAjYAFAiAFAiAFAhYACARADAQACAQYADAPACAQACAPYADAfADAcAEAbYAMBqAIBHAAAAYABALAKAIALgCYALgBAIgKgCgLYAAAAAAAAAAgB");
	this.shape_206.setTransform(445.3,177.55,1,1,0,0,0,-1,-1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F3BEBC").s().p("AB1IgYAAAAgLhGgQhpYgEgbgFgcgEgeYgFgegHgggGghYgGgggHgigHgjYgGgigHgjgHgiYgQhFgPhFgPhBYgHgggHgggIgdYgIgegHgcgHgaYgbhmgThFAAAAIAAAAYAAAAAQBFAYBoYAGAaAGAcAHAeYAHAdAFAgAHAhYANBBANBFANBGYAFAiAGAjAFAiYAFAjAGAiAFAgYAFAhAGAgADAeYAEAeADAdADAaYANBqAJBGAAAAYABALAKAIALgBYALgCAIgKgCgKYAAgBAAAAAAAA");
	this.shape_207.setTransform(445,179.35,1,1,0,0,0,-1,-1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F3BEBC").s().p("AB3IdYAAAAgMhGgRhpYgEgagEgcgFgeYgFgegHgfgGghYgHgggGgigHgiYgHgigHgjgHgiYgQhFgPhEgPhBYgIgggGgggIgdYgIgdgIgcgGgZYgchngShEAAAAIAAAAYAAAAAQBFAXBnYAGAaAHAcAHAdYAHAeAFAfAHAhYAMBBAOBFANBFYAFAiAGAjAFAiYAGAiAFAiAGAgYAFAhAFAfAEAfYAEAeAEAcADAaYANBpAJBGAAAAYACALAKAIALgBYAKgCAIgKgBgLYAAAAAAAAAAAA");
	this.shape_208.setTransform(444.7,181.15,1,1,0,0,0,-1,-1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#F3BEBC").s().p("AB5IaYAAAAgMhFgShoYgEgagFgcgFgeYgFgegHgfgHghYgGgggHgigHgiYgHgigHgigHgiYgQhEgPhFgQhAYgHgggHgfgIgdYgIgdgHgcgHgaYgchlgShEAAAAIAAAAYAAAAAQBEAYBnYAGAaAGAbAHAeYAHAdAFAgAHAgYANBAAOBFANBFYAFAiAGAjAGAiYAFAiAGAhAFAhYAGAgAGAfAEAeYAEAeADAdAEAaYAOBoAJBGAAAAYACALAKAIALgCYALgBAHgKgBgLYAAAAAAgBAAAA");
	this.shape_209.setTransform(444.4,182.95,1,1,0,0,0,-1,-1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F3BEBC").s().p("AB6IXYAAAAgMhFgShnYgFgagFgcgFgeYgFgdgHgggHggYgGgggHghgHgiYgHgigIgigHgiYgQhEgQhEgPhAYgIgggGgfgJgdYgIgdgHgbgHgaYgbhlgThEAAAAIAAAAYAAAAAQBFAYBmYAGAZAGAcAHAdYAHAeAGAfAHAgYANBAAOBFAOBEYAEAiAGAiAGAiYAGAiAGAiAFAgYAGAgAGAfAEAeYAEAeAEAcAEAaYAOBoAKBFAAAAYABALALAIALgCYAKgBAIgKgBgLYAAAAAAgBgBAA");
	this.shape_210.setTransform(444.1,184.8,1,1,0,0,0,-1,-1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F3BEBC").s().p("AB8IVYAAAAgMhFgThnYgFgagFgcgGgdYgFgegHgfgHggYgOhAgOhEgPhDYgQhEgQhEgQhAYgIgfgGgfgJgdYgIgdgHgcgHgZYgbhlgThDAAAAIAAAAYAAAAAQBEAYBmYAGAZAGAcAHAdYAIAdAFAfAHAgYANBAAOBEAOBFYALBDANBFALBAYAGAgAGAfAEAeYAEAeAFAcADAaYAQBnAKBFAAAAYACALAKAIALgCYALgCAHgKgBgLYAAAAgBAAAAAA");
	this.shape_211.setTransform(443.85,186.6,1,1,0,0,0,-1,-1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F3BEBC").s().p("AB+IRYAAAAgNhEgUhmYgEgagGgbgFgeYgGgdgHgfgHggYgOg/gPhEgPhDYgQhEgQhDgQhAYgIgfgHgfgIgdYgIgcgIgcgHgZYgbhkgThDAAAAIAAAAYAAAAAQBDAYBmYAGAZAHAcAHAdYAHAdAGAfAHAfYANBAAOBEAOBEYAMBDAMBEAMBAYAGAgAGAfAEAdYAFAeAEAcAEAaYAQBnALBEAAAAYABALALAIALgCYAKgCAIgKgCgLYAAAAAAAAAAgB");
	this.shape_212.setTransform(443.6,188.4,1,1,0,0,0,-1,-1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#F3BEBC").s().p("ACAIPYAAAAgOhEgUhmYgFgZgFgcgGgdYgGgdgHgfgHggYgPg/gPhEgPhCYgQhDgRhEgQg+YgIgggHgfgIgcYgIgdgHgbgHgZYgchkgShDAAAAIAAAAYAAAAAQBEAYBlYAGAZAGAbAHAdYAHAdAGAfAHAfYANBAAPBDAOBEYAMBDANBEAMBAYAGAfAGAfAFAdYAEAeAFAbAEAaYAQBnAMBEAAAAYABALALAHAKgCYALgBAIgLgCgLYAAAAAAAAAAAA");
	this.shape_213.setTransform(443.3,190.2,1,1,0,0,0,-1,-1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F3BEBC").s().p("ABvHhYAAAAgLg+gRhdYgEgYgEgZgFgbYgEgagHgcgGgdYgMg6gNg+gNg9YgGgfgIgfgHgeYgHgegHgegHgdYgHgdgHgcgHgaYgHgagHgZgGgXYgahbgRg9AAAAIAAAAYAAAAAPA+AWBcYAFAXAGAZAGAaYAGAbAGAcAFAdYAGAdAGAeAGAeYAGAfAHAfAGAfYAJA9ALA+AJA6YAFAdAFAcAEAbYADAbAEAaADAXYANBeAJA+AAAAYABALAKAIALgBYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_214.setTransform(444.9,197.05,1,1,0,0,0,-1,-1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#F3BEBC").s().p("ABeGzYAAAAgJg4gNhVYgDgVgEgXgEgYYgDgYgEgagGgaYgKg1gKg4gLg3YgDgOgCgOgDgOYgEgOgDgOgCgOYgGgbgHgbgGgaYgGgagGgZgFgYYgGgYgHgWgFgVYgYhTgPg2AAAAIAAAAYAAAAANA3ATBTYAFAVAGAXAFAYYAEAYAFAZAFAaYAFAbAFAbAFAbYADAOACAOADAOYACAOACAOACAOYAHA4AJA4AHA1YAFAaACAaADAYYADAZACAXADAVYAJBVAGA5AAAAYACALAKAIAKgCYALgBAIgKgBgLYAAAAAAAAAAgB");
	this.shape_215.setTransform(446.45,203.85,1,1,0,0,0,-1,-1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#F3BEBC").s().p("ABNGGYAAAAgGgzgKhMYgCgTgDgUgDgWYgEgWgDgXgDgYYgEgXgEgZgEgZYgEgZgEgZgFgYYgFgZgEgZgFgZYgEgZgFgYgFgXYgFgYgGgWgFgWYgCgLgDgKgCgKYgDgKgCgKgDgJYgFgSgEgRgEgPYgFgPgEgNgDgLYgHgVgEgMAAAAIAAAAYAAAAAEAMAFAWYADAKADANAEAQYADAPAEARAEATYACAJACAKADAKYABAKACAKACALYAEAWAFAWAEAYYADAYAEAYAEAZYAEAYADAaADAZYADAYADAaACAZYADAZADAYADAYYACAYACAXACAVYACAWACAVACATYAGBMAEAzAAAAYAAALAKAIALgBYALAAAIgKgBgLYAAAAAAgBAAAA");
	this.shape_216.setTransform(448.05,210.7,1,1,0,0,0,-1,-1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F3BEBC").s().p("ABQGEYAAAAgHgygKhMYgDgTgDgVgEgVYgDgWgDgXgEgXYgEgYgEgYgEgZYgEgZgFgZgFgYYgFgZgEgZgFgZYgFgYgFgYgFgYYgFgXgFgXgFgVYgDgLgCgKgDgKYgDgKgCgJgDgKYgFgSgEgRgEgPYgFgPgEgNgDgKYgHgWgEgMAAAAIAAAAYAAAAADANAGAVYADALADANAEAPYADAPAEARAEATYACAJACAKADAKYABAKACAKADALYADAWAFAWAEAYYAEAXAEAYAEAZYAEAZADAZADAZYADAYADAaADAYYADAZADAZADAXYADAYACAXACAWYACAVACAVACATYAHBMAEAyAAAAYABALAJAJALgBYALgBAJgKgBgLYAAAAAAgBAAAA");
	this.shape_217.setTransform(447.95,212.75,1,1,0,0,0,-1,-1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#F3BEBC").s().p("ABSGCYAAAAgHgygLhLYgDgTgDgVgEgVYgDgWgEgXgEgXYgEgYgEgYgEgYYgFgZgFgZgEgYYgGgZgEgZgFgYYgFgZgFgYgFgXYgFgXgGgXgFgVYgDgLgCgKgDgKYgDgKgCgJgDgKYgFgSgEgRgFgPYgEgOgEgNgEgLYgGgVgEgMAAAAIAAAAYAAAAADAMAGAWYADAKADANAEAPYADAPAEARAEATYACAJACAKADAKYACAKACAKACALYAEAVAEAXAFAXYADAYAFAYAEAZYAEAYADAZAEAZYACAYAEAZADAZYADAZADAYADAYYADAXACAXADAWYACAVACAVACATYAHBMAFAyAAAAYABALAKAIALgBYALgBAIgKgBgLYAAAAAAAAAAgB");
	this.shape_218.setTransform(447.9,214.8,1,1,0,0,0,-1,-1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F3BEBC").s().p("ABUGBYAAAAgIgygLhLYgDgTgDgVgEgVYgEgWgDgWgEgYYgFgXgEgYgFgZYgEgYgFgZgFgYYgFgZgFgZgFgYYgFgZgFgYgFgXYgGgXgGgWgFgVYgFgVgFgUgGgTYgFgSgFgRgEgOYgEgPgEgNgEgLYgGgVgEgMAAAAIAAAAYAAAAADAMAGAWYACALAEANAEAPYADAPAEAQAEATYAFASAEAUAEAWYAEAVAFAXAEAXYAEAXAEAYAFAZYAEAYADAZAEAZYADAYAEAZADAZYADAZADAYAEAXYADAYACAXADAVYACAWACAUADATYAHBLAFAzAAAAYABALAKAIALgBYALgBAIgKgBgLYAAgBAAAAAAAA");
	this.shape_219.setTransform(447.75,216.8,1,1,0,0,0,-1,-1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F3BEBC").s().p("ABWF/YAAAAgIgygMhLYgDgSgEgVgDgVYgEgVgEgXgEgXYgFgYgEgYgFgYYgEgZgGgYgFgYYgFgZgFgZgFgYYgFgYgGgYgFgXYgGgXgGgWgFgVYgFgVgGgUgFgSYgFgSgFgRgEgPYgFgPgEgMgDgLYgHgVgEgMAAAAIAAAAYAAAAAEAMAFAWYADAKAEANAEAPYADAPAEARAEASYAEATAFAUAEAVYAEAVAFAWAFAYYAEAXAEAYAEAYYAFAZADAZAEAZYAEAXADAZAEAZYADAYADAZAEAXYADAXADAXACAVYADAWACAUADATYAIBLAGAyAAAAYABALAKAIALgBYALgBAIgKgCgLYAAgBAAAAAAAA");
	this.shape_220.setTransform(447.7,218.8,1,1,0,0,0,-1,-1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F3BEBC").s().p("ABPF7YAAAAgIgxgNhKYgDgSgEgUgDgVYgEgVgEgXgEgXYgJgugJgxgJgwYgFgYgEgZgFgXYgFgYgFgYgFgXYgFgXgFgWgEgVYgCgKgDgKgCgKYgCgKgDgJgCgJYgShJgMgwAAAAIAAAAYAAAAAJAxAPBJYACAJACAKACAJYABAKACALACAKYADAVAEAXAEAXYAEAXADAXAEAYYAFAYACAZAEAZYAHAwAGAxAGAuYADAXADAXACAVYADAVACAUADATYAIBKAGAxAAAAYACALAKAIALgBYALgBAHgKgBgLYAAgBAAAAAAAA");
	this.shape_221.setTransform(448.2,220.75,1,1,0,0,0,-1,-1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#F3BEBC").s().p("ABIF2YAAAAgjjBgijAYgEgYgEgZgFgXYgEgYgFgXgEgXYgJgtgIgqgIglYgOhIgJgwAAAAIAAAAYAAAAAHAxAKBJYAGAkAGAqAGAuYADAXAEAXADAYYAEAYADAYADAZYAYDCAYDDAAAAYACAKAKAIALgBYALgCAIgKgCgLYAAAAAAAAAAgB");
	this.shape_222.setTransform(448.75,222.65,1,1,0,0,0,-1,-1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F3BEBC").s().p("ABBFzYAAAAgii/ghi+YgEgYgFgYgEgYYgDgXgEgXgEgXYgHgtgGgqgGgjYgMhIgHgwAAAAIAAAAYAAAAAFAwAIBIYADAlAFAqAFAtYACAXADAXACAYYADAYADAYADAYYAXC/AYDBAAAAYACALAKAHALgBYALgBAHgKgBgLYAAgBAAAAAAAA");
	this.shape_223.setTransform(449.25,224.5,1,1,0,0,0,-1,-1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F3BEBC").s().p("AA6FvYAAAAgJgvgNhHYgHgkgHgpgIgsYgIgsgHgvgHguYgEgYgEgYgEgXYgDgXgDgXgDgWYgDgXgDgVgDgVYgBgKgCgKgBgJYgBgKgBgJgBgJYgHhIgFgvAAAAIAAAAYAAAAACAwAEBHYAAAJAAAKABAJYABAKABAKABAKYABAVACAWACAWYACAWACAXACAYYACAYADAXADAYYAFAvAGAwAFAsYAFAtAGApAEAkYAJBHAGAwAAAAYACALAKAIALgCYALgBAHgKgBgLYAAgBAAAAAAAA");
	this.shape_224.setTransform(449.8,226.4,1,1,0,0,0,-1,-1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#F3BEBC").s().p("AA8FtYAAAAgJgvgOhGYgGgjgIgpgJgsYgIgsgHgvgIguYgEgYgEgXgEgYYgDgXgDgXgEgWYgDgWgDgVgDgVYgBgKgCgKgBgJYgBgKgBgJgBgJYgIhHgFgwAAAAIAAAAYAAAAADAwAEBIYAAAJAAAJABAJYABAKABAKABAKYACAVACAVACAXYACAWACAXACAYYACAXAEAYACAXYAGAvAGAvAFAtYAGAsAGAqAEAjYAKBHAHAwAAAAYABAKAKAIALgBYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_225.setTransform(449.75,229.45,1,1,0,0,0,-1,-1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F3BEBC").s().p("AA/FrYAAAAgKgugOhGYgHgjgIgpgJgsYgIgsgIgvgIgtYgEgYgFgXgEgXYgDgXgEgXgDgWYgDgWgEgWgDgUYgBgKgCgKgBgJYgBgKgBgJgBgJYgIhHgFgvAAAAIAAAAYAAAAACAvAFBIYAAAJABAJAAAKYABAJABAKABAKYACAVACAVADAWYACAXACAXACAXYADAXADAYADAYYAGAuAGAvAGAtYAGAsAGApAFAjYAKBHAIAvAAAAYABALAKAIALgCYALgCAIgKgCgLYAAAAAAAAAAgB");
	this.shape_226.setTransform(449.65,232.5,1,1,0,0,0,-1,-1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#F3BEBC").s().p("ABBFqYAAAAgKgvgOhGYgIgigJgpgJgsYgIgrgIgvgJgtYgEgYgFgXgEgXYgDgXgEgXgDgWYgEgWgDgVgDgUYgCgKgCgKgBgJYgBgKgBgJgBgJYgIhHgGgvAAAAIAAAAYAAAAADAwAEBHYABAJABAJAAAKYABAJABAKABAKYACAUADAWACAWYACAWADAXACAXYADAYADAXADAYYAHAuAGAvAGAsYAHAsAGApAFAkYAMBGAHAvAAAAYACALAKAHALgBYALgCAHgKgBgLYAAgBgBAAAAAA");
	this.shape_227.setTransform(449.6,235.55,1,1,0,0,0,-1,-1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#F3BEBC").s().p("AA/FrYAAAAgJgvgOhGYgIgjgIgpgJgrYgIgsgHgvgJgtYgEgYgEgXgEgXYgEgXgDgXgDgWYgEgWgDgVgDgVYgCgKgBgKgCgJYgBgKgBgJgBgJYgIhHgGgvAAAAIAAAAYAAAAADAwAFBHYAAAJABAJABAKYABAJABAKABAKYACAVACAVACAWYACAXADAXACAXYACAXAEAYADAYYAGAuAGAvAFAsYAHAtAFApAFAjYALBHAHAvAAAAYABALALAHAKgBYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_228.setTransform(449.8,237.4,1,1,0,0,0,-1,-1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F3BEBC").s().p("AA9FsYAAAAgJgvgOhGYgGgjgIgpgIgsYgIgsgIgvgHguYgEgXgFgXgDgYYgEgXgDgWgDgWYgEgXgDgVgDgUYgBgKgCgKgBgKYgBgJgBgJgBgJYgJhHgFgvAAAAIAAAAYAAAAADAvAEBIYABAIABAKAAAJYABAKABAKABAKYACAUACAWACAWYACAWACAXADAYYACAXADAYADAXYAGAvAFAvAGAsYAGAsAEAqAFAjYAKBHAGAvAAAAYACALAKAIALgCYALgBAHgKgBgLYAAgBAAAAAAAA");
	this.shape_229.setTransform(449.95,239.25,1,1,0,0,0,-1,-1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F3BEBC").s().p("AA6FtYAAAAgIgvgNhHYgGgjgIgpgIgsYgHgsgIgvgGguYgEgXgEgYgEgXYgDgXgDgXgEgWYgDgWgDgVgDgVYgBgKgCgKgBgJYgBgKgBgJgBgJYgIhHgGgvAAAAIAAAAYAAAAADAvAFBIYAAAJABAJAAAKYABAJABAKABAKYACAVACAVACAXYACAWACAXACAXYACAYADAXADAYYAFAuAFAwAFAsYAGAtAFApAEAkYAJBGAGAwAAAAYABALAKAHALgBYALgBAIgKgBgLYAAgBAAAAgBAA");
	this.shape_230.setTransform(450.1,241.1,1,1,0,0,0,-1,-1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F3BEBC").s().p("AA4FuYAAAAgIgvgMhHYgGgjgHgpgHgtYgHgsgIgvgGguYgEgXgEgYgDgXYgDgXgDgXgDgWYgEgXgDgVgCgUYgDgVgDgTgCgSYgIhHgFgvAAAAIAAAAYAAAAADAwAEBHYABASACATABAVYACAUACAWACAWYACAWACAXACAYYACAXADAYACAYYAFAuAFAwAFAsYAFAtAFApADAkYAIBHAFAvAAAAYACALAKAIALgBYALgBAHgKgBgLYAAgBAAAAAAAA");
	this.shape_231.setTransform(450.25,242.95,1,1,0,0,0,-1,-1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F3BEBC").s().p("AAxFwYAAAAgIgvgNhHYgDgSgDgTgDgUYgEgUgEgWgDgWYgHgsgGgwgHguYgDgYgEgYgDgXYgCgXgDgXgCgXYgDgWgCgWgCgUYgBgKgBgKgCgKYAAgKgBgJAAgJYgEhIgDgwAAAAIAAAAYAAAAAAAwABBIYAAAJAAAKAAAJYAAAKABAKAAAKYACAVABAWABAWYABAXACAXABAYYABAXADAYACAYYAFAvAEAwAFAtYACAWADAWACAUYADAVACATACASYAIBHAFAwAAAAYACALAKAIALgBYALgCAHgKgBgLYAAAAAAAAAAgB");
	this.shape_232.setTransform(450.85,244.1,1,1,0,0,0,-1,-1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#F3BEBC").s().p("AAtFzYAAAAgJgwgNhHYgDgSgDgTgDgUYgEgVgEgVgDgXYgDgWgDgXgDgXYgEgYgDgYgDgXYgCgYgEgYgCgXYgCgYgDgXgCgXYgCgWgBgWgBgVYgBgKAAgKgBgKYAAgJAAgKgBgJYAAgSgBgRAAgOYAAgPAAgNABgKYAAgVAAgNAAAAIAAAAYAAAAgBANgBAVYgBAKgBANgBAPYAAAOgBARAAASYAAAJAAAKgBAJYAAAKABAKAAALYAAAVAAAWABAWYABAXABAXABAYYABAYACAYABAYYACAXACAZACAXYACAYADAXACAXYACAXADAVACAVYACAVADATACASYAJBIAGAwAAAAYABALAKAIALgCYALgBAIgKgBgLYgBAAAAgBAAAA");
	this.shape_233.setTransform(451.3,245.3,1,1,0,0,0,-0.8,-1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#F3BEBC").s().p("AArF2YAAAAgJgwgOhIYgDgSgDgTgEgVYgDgUgEgWgDgWYgDgXgDgXgDgYYgEgXgCgYgDgYYgCgYgEgYgBgYYgCgYgBgXgCgXYgBgWgBgWAAgVYAAgLgBgKAAgKYAAgJAAgKAAgJYABgSAAgRAAgPYACgPAAgNABgKYACgVABgNAAAAIAAAAYAAAAgCANgCAVYgCAKgBANgCAPYgCAPAAAQgCATYAAAJgBAJgBAKYAAAKAAAKgBALYAAAVAAAWgBAXYABAXAAAXABAYYAAAYACAZABAYYACAXABAZACAYYACAYADAXACAXYACAXADAWACAVYACAVADAUACASYAKBIAGAwAAAAYABALALAIALgCYAKgBAIgKgBgLYgBgBAAAAAAAA");
	this.shape_234.setTransform(451.5,246.45,1,1,0,0,0,-0.7,-1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#F3BEBC").s().p("AAqF4YAAAAgKgwgOhIYgDgSgEgUgDgUYgEgVgEgWgCgWYgDgXgDgXgDgYYgEgYgCgYgCgYYgCgYgDgYgBgYYgBgYgBgYgBgXYAAgXAAgWAAgVYgBgVACgUABgSYABgTABgRABgOYACgPACgNABgLYADgVABgMAAAAIAAAAYAAAAgCAMgEAVYgCALgCAMgDAPYgCAPgBARgCASYgCASgDAUgBAVYgBAWgBAWgBAXYAAAXAAAYAAAYYgBAYACAZABAZYABAXABAZACAYYACAYACAYACAXYACAXADAWACAVYADAVACAUACATYALBJAGAwAAAAYACALAKAIALgCYALgCAIgKgCgLYAAAAAAAAAAgB");
	this.shape_235.setTransform(451.55,247.6,1,1,0,0,0,-0.7,-1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#F3BEBC").s().p("AAqF3YAAAAgJgwgOhIYgDgSgEgUgDgUYgDgVgFgVgBgXYgDgWgEgYgDgYYgDgXgCgYgDgYYgCgYgDgYgBgYYgCgYgBgXgCgXYAAgXAAgWgBgVYgBgVACgUAAgSYABgSAAgRABgPYABgPACgMABgLYACgVABgNAAAAIAAAAYAAAAgCANgDAVYgCAKgCANgCAPYgBAPgBAQgCATYgCASgCAUAAAVYgBAVAAAWgBAXYAAAXAAAYABAYYgBAYACAYABAZYACAXAAAZADAYYACAYACAXABAXYACAXADAWADAVYACAVACAUACASYALBJAFAwAAAAYACALAKAIALgCYALgBAIgKgCgLYAAgBAAAAAAAA");
	this.shape_236.setTransform(451.7,249.8,1,1,0,0,0,-0.7,-1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#F3BEBC").s().p("AAqF1YAAAAgJgwgNhHYgDgSgDgUgEgUYgDgVgEgVgDgXYgCgWgDgXgDgYYgEgYgCgYgDgXYgCgYgDgYgCgYYgBgXgCgYgCgWYAAgXgBgWgBgVYgBgVABgTAAgTYAAgSAAgQAAgPYABgPABgNABgKYABgWABgMAAAAIAAAAYAAAAgCAMgCAVYgBALgCANgBAPYgCAOAAARgBASYgCASgBAUAAAVYAAAVgBAWAAAXYAAAXABAXAAAYYAAAYACAZABAYYACAXABAZACAXYACAYACAYACAXYACAWADAWACAVYACAVACAUACASYAKBIAFAwAAAAYACALAKAIALgBYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_237.setTransform(451.8,251.9,1,1,0,0,0,-0.7,-1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#F3BEBC").s().p("AAqFzYAAAAgIgvgNhHYgDgSgDgUgDgUYgDgUgEgWgDgWYgCgXgEgXgDgXYgDgYgCgYgDgXYgDgYgDgYgCgXYgCgYgCgXgCgXYgBgWgBgWgBgVYgCgVAAgTAAgSYAAgSgBgRAAgPYABgOAAgNAAgLYABgVAAgMAAAAIAAAAYAAAAgBAMgCAVYAAALgBAMgBAPYgBAPgBARAAASYgBASgBATABAVYAAAVAAAWAAAXYAAAWABAYABAYYABAYABAYACAYYABAXABAYADAYYACAYACAXACAXYABAXADAVACAVYACAVADAUACASYAJBIAFAwAAAAYABAKAKAIALgBYALgCAIgKgCgLYAAAAAAAAAAgB");
	this.shape_238.setTransform(451.85,254.1,1,1,0,0,0,-0.8,-1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#F3BEBC").s().p("AArFyYAAAAgIgwgMhHYgDgRgDgUgDgUYgDgUgEgWgDgWYgDgWgCgXgEgYYgDgXgCgYgDgXYgDgYgDgYgCgXYgDgYgCgXgCgWYgCgXgBgVgCgVYgBgVgBgTgBgSYAAgSgBgRgBgOYAAgPAAgNAAgKYAAgVAAgMAAAAIAAAAYAAAAgBAMgBAVYAAAKgBANAAAPYgBAOAAARAAASYAAASAAAUAAAUYABAVAAAWAAAWYABAXABAXABAYYABAYACAYACAYYABAXACAYACAYYACAXACAYACAWYACAXACAVACAVYACAVACATACASYAJBIAEAwAAAAYACALAKAHALgBYAKgBAIgKgBgLYAAAAAAgBAAAA");
	this.shape_239.setTransform(451.75,256.2,1,1,0,0,0,-0.9,-1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#F3BEBC").s().p("AAoF6YAAAAgIgwgMhJYgDgSgDgUgDgVYgDgUgDgWgDgXYgCgXgDgXgDgYYgDgYgCgZgDgXYgDgYgCgZgCgYYgCgYgCgXgCgXYgBgXgBgWgBgVYgCgVAAgUAAgTYAAgSgBgRAAgPYAAgPABgNAAgLYAAgVAAgMAAAAIAAAAYAAAAAAAMgCAVYgBALAAANgBAPYgBAPgBARAAASYgBATgBAUABAVYAAAVAAAWAAAXYAAAXABAYABAYYAAAZACAYABAZYABAXABAZACAYYACAYACAYACAXYABAXADAWACAVYACAVACAUACATYAIBJAFAxAAAAYABALAKAHALgBYALgBAIgKgCgLYAAAAAAgBAAAA");
	this.shape_240.setTransform(452.15,257.9,1,1,0,0,0,-0.8,-1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F3BEBC").s().p("AAmGCYAAAAgIgygMhKYgCgSgDgUgDgVYgDgWgEgWgCgXYgCgXgDgYgDgZYgDgYgCgZgCgYYgDgZgCgZgBgYYgCgZgBgYgCgXYgBgYAAgWgBgWYgBgVAAgUAAgTYABgTgBgRABgPYAAgPABgOABgLYAAgWABgMAAAAIAAAAYAAAAgBAMgCAWYgBALgBANgCAQYgBAPgBARgBATYgBATgBAUAAAVYgBAWAAAXgBAXYABAYAAAYAAAZYAAAYACAZABAZYABAZAAAZACAYYACAZACAYABAYYACAXACAXACAVYACAWACAUACATYAIBKAGAyAAAAYAAALAKAIALgBYALgBAIgKgCgLYAAgBAAAAAAAA");
	this.shape_241.setTransform(452.4,259.6,1,1,0,0,0,-0.7,-1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F3BEBC").s().p("AAkGKYAAAAgIgzgLhLYgDgTgDgUgDgWYgCgWgEgWgCgYYgCgYgDgYgCgZYgDgZgCgagCgYYgBgNgBgMgBgNYgBgNAAgMgBgNYgBgZgCgYgBgYYAAgYAAgXgBgWYgBgWACgVAAgTYABgTgBgRABgQYACgPAAgOABgLYACgWAAgNAAAAIAAAAYAAAAgBANgDAWYgBALgBANgCAQYgCAPgBASgBATYgBATgDAVAAAWYgBAWgBAXAAAYYgBAYABAZAAAZYAAAMgBANABANYAAANABAMAAANYABAZAAAZACAZYABAaACAYABAYYACAYACAXACAWYACAWABAVACATYAIBMAGAzAAAAYABALAJAIALgBYALgBAIgKgCgLYAAAAAAgBAAAA");
	this.shape_242.setTransform(452.6,261.3,1,1,0,0,0,-0.7,-1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#F3BEBC").s().p("AAjGSYAAAAgCgNgDgXYgCgLgCgOgDgPYgCgQgDgSgDgTYgCgTgDgVgDgWYgCgWgEgXgBgYYgCgZgDgZgDgZYgCgZgBgagCgZYgBgNgBgNgBgNYgBgNAAgNgBgMYgBgagBgZAAgYYAAgZAAgXAAgWYAAgGAAgFAAgGYAAgFAAgGABgFYAAgKABgKAAgKYABgUAAgSACgPYABgQABgOACgLYACgXABgNAAAAIAAAAYAAAAgCANgDAXYgCALgCAOgCAPYgCAQgBASgCATYgBAKgBAKgBALYAAAFgBAFAAAGYgBAFAAAGAAAFYgBAXgCAXgBAZYgBAYAAAZAAAaYAAANAAANAAANYAAANAAANABANYAAAZAAAaACAaYABAZABAaACAYYABAYACAYACAWYACAXABAVACATYACAUACASABAPYACAQABAOACALYACAXABANAAAAYACALAIAIALgBYALgCAIgJgBgLYAAgBAAAAAAAA");
	this.shape_243.setTransform(452.8,262.95,1,1,0,0,0,-0.6,-1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#F3BEBC").s().p("AAjGSYAAAAgCgNgDgXYgCgLgCgNgDgQYgCgQgDgRgDgUYgCgTgDgVgDgWYgDgWgDgXgCgYYgCgYgDgZgCgaYgDgZgBgagCgZYgBgNgBgNgBgNYAAgNAAgNgBgMYgBgagBgZAAgYYAAgZAAgXABgXYAAgFAAgGAAgFYAAgGAAgFAAgFYABgLABgKAAgJYABgUABgSABgQYACgPABgOABgLYADgXABgNAAAAIAAAAYAAAAgCANgDAWYgCAMgCANgCAQYgDAQgBASgCATYgBAKgBAKgBAKYgBAGAAAFgBAFYAAAGAAAFgBAGYgBAWgBAYgCAYYgBAZAAAZAAAaYAAANgBANAAANYABANAAANAAANYABAZAAAaABAaYACAZABAaABAYYABAZADAXABAXYACAWACAVACAUYABATADASABAQYACAQACANABAMYACAWACANAAAAYABALAJAIALgBYALgBAIgKgBgLYAAAAgBgBAAAA");
	this.shape_244.setTransform(452.95,264.8,1,1,0,0,0,-0.6,-1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F3BEBC").s().p("AAkGTYAAAAgCgNgEgXYgCgLgCgOgDgQYgCgPgDgSgDgTYgDgTgCgVgDgWYgDgXgEgXgBgYYgCgYgDgZgDgaYgCgZgBgagCgZYgBgNgBgNgBgNYAAgNgBgNAAgNYgBgZgBgZAAgZYAAgYABgYAAgWYAAgLAAgLABgLYABgKAAgKABgKYABgUABgRACgQYABgQACgOABgLYADgXABgNAAAAIAAAAYAAAAgCANgEAXYgBALgDAOgCAPYgDAQgBASgCATYgBAKgCAKgBALYgBAKgBALAAALYgCAXgBAYgCAYYgBAZAAAZgBAaYAAAMAAANAAAOYAAANAAANABANYAAAZAAAaACAaYABAaABAZACAYYABAZACAYACAWYACAWACAWACATYABAUADASABAPYACAQACAOABALYADAXABANAAAAYACALAIAIALgBYALgCAIgKgBgLYAAAAAAAAAAAA");
	this.shape_245.setTransform(453.1,266.7,1,1,0,0,0,-0.6,-1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#F3BEBC").s().p("AAkGTYAAAAgCgNgEgXYgCgLgCgOgDgPYgCgQgDgSgDgTYgDgTgDgVgDgWYgDgWgDgYgBgYYgDgYgDgZgCgaYgDgZgBgagCgZYgBgNgBgNAAgNYgBgNAAgNAAgNYgBgZgBgaAAgYYAAgYABgYAAgWYAAgMABgKABgLYABgKAAgLABgJYABgUABgSACgPYACgQACgOABgLYADgXABgNAAAAIAAAAYAAAAgCANgEAWYgCAMgCANgDAQYgDAQgBASgCATYgBAKgCAKgBALYgBAKgBALgBALYgBAXgCAXgCAZYgBAYAAAagBAZYAAANAAANgBANYABANAAAOAAANYABAZAAAaABAaYACAaABAZABAYYABAZADAYACAWYACAXACAVABAUYACATADASACAQYABAQACANABAMYADAWACANAAAAYABALAJAIALgBYALgBAIgKgCgLYAAgBAAAAAAAA");
	this.shape_246.setTransform(453.3,268.55,1,1,0,0,0,-0.6,-1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F3BEBC").s().p("AAlGTYAAAAgDgNgDgWYgCgMgDgNgCgQYgDgQgEgRgCgUYgDgTgDgVgDgWYgDgWgDgXgCgZYgCgYgDgZgDgaYgCgZgBgagCgZYgBgNgBgNgBgNYAAgNAAgNgBgNYAAgZgBgaAAgYYABgZAAgXABgXYAAgLABgLAAgKYABgLABgKABgKYABgTABgSACgQYACgQACgOACgLYADgXABgMAAAAIAAAAYAAAAgCAMgEAXYgCALgDAOgCAQYgEAPgBASgDAUYgBAJgBALgBAKYgCALgBAKgBAMYgBAWgCAYgCAYYgBAZAAAZgBAaYAAANgBANAAANYAAANABANAAAOYAAAZAAAaACAaYABAaABAZACAZYABAYACAYACAXYADAWABAVACAUYACAUADARACAQYACAQABAOACALYACAXACANAAAAYABALAJAIALgCYALgBAIgKgBgLYAAAAAAgBAAAA");
	this.shape_247.setTransform(453.45,270.4,1,1,0,0,0,-0.6,-1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#F3BEBC").s().p("AAnGSYAAAAgCgNgEgWYgDgMgCgNgDgQYgDgPgEgSgDgTYgDgUgDgUgEgWYgDgWgDgYgCgYYgDgYgDgZgDgaYgDgZgBgagCgZYgBgNgBgNgBgNYAAgNAAgNAAgNYgBgMAAgNAAgNYgBgMAAgNABgMYAAgYABgYABgWYAAgMABgKABgLYABgKABgLAAgJYABgKABgJABgJYAAgFABgEAAgEYAAgEABgFABgDYACgQACgOACgLYADgXABgNAAAAIAAAAYAAAAgBANgFAXYgCALgDANgDAQYgBAEgBAEAAAEYgBAEgBAFAAAEYgBAJgCAJgBAKYgBAKgCAKgBAKYgBALgCALgBALYgBAWgCAYgCAZYgBAMAAAMgBANYAAANAAAMgBANYAAANAAANgBANYABANAAAOAAANYABAZAAAaABAaYACAaACAZABAZYACAYADAYACAXYACAWADAVACAUYACAUADARACAQYACAQACAOACALYADAXABANAAAAYABAKALAIAKgBYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_248.setTransform(453.75,272.2,1,1,0,0,0,-0.6,-1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#F3BEBC").s().p("AAqGRYAAAAgDgNgFgWYgCgLgDgOgDgPYgDgQgEgSgEgTYgDgTgDgVgEgWYgEgWgDgXgDgYYgDgYgDgZgDgaYgDgZgBgagCgZYgBgNgBgNgBgNYAAgNgBgNAAgMYAAgNgBgNAAgNYAAgGAAgGAAgGYAAgGAAgHAAgGYABgYABgYAAgWYAAgLACgLABgLYABgKABgKABgKYABgKABgJAAgJYABgEAAgFABgEYAAgEABgEABgEYACgQACgNACgMYAEgWABgNAAAAIAAAAYAAAAgCANgEAWYgDALgDAOgDAPYgBAEgBAEgBAEYAAAFgBAEAAAEYgCAJgBAJgBAKYgCAKgBAKgCALYgBAKgCALgBALYgCAXgCAXgCAZYAAAGgBAGAAAGYAAAHAAAGAAAGYgBANAAANAAANYgBAMAAAOAAANYAAANAAANABANYABAZAAAaABAaYACAaACAZACAZYACAZADAXACAXYADAWADAWACATYACAUAEARACAQYADAQACAOACALYACAWACANAAAAYACALAKAIALgCYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_249.setTransform(454.1,273.95,1,1,0,0,0,-0.6,-1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#F3BEBC").s().p("AAsGQYAAAAgDgNgFgWYgCgLgEgOgDgPYgDgQgFgRgEgTYgDgTgEgVgEgWYgCgLgCgLgBgMYgCgLgBgMgCgMYgDgYgEgZgDgaYgDgZgBgagDgZYgBgNgBgNgBgNYAAgNAAgNAAgMYgBgNAAgNAAgMYAAgHgBgGAAgGYABgGAAgGAAgGYABgZABgXABgXYABgWADgVACgUYACgTABgSADgQYADgPADgOACgLYAEgXABgMAAAAIAAAAYAAAAgCAMgFAXYgDALgDANgDAQYgEAPgCASgDAUYgDATgEAVgDAWYgBAXgDAXgCAZYAAAGgBAGAAAHYAAAGgBAGAAAGYAAANAAANgBANYAAANAAANgBANYAAANABANAAANYABAZABAbABAZYACAaADAaACAYYABAMAAANACALYACAMABAMACALYADAWADAWACATYADAUAEARACAQYADAQADANACAMYADAWACANAAAAYACALAKAHALgCYALgCAHgKgCgLYAAAAAAgBAAAA");
	this.shape_250.setTransform(454.4,275.7,1,1,0,0,0,-0.6,-1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F3BEBC").s().p("AAvGPYAAAAgDgNgGgWYgDgLgDgNgEgQYgEgPgFgSgDgTYgEgTgEgUgFgWYgCgLgBgLgCgMYgCgLgCgMgCgMYgDgYgEgZgDgZYgDgagCgagCgZYgBgNgCgNAAgMYAAgNgBgNAAgNYAAgNgBgNAAgMYAAgGAAgHAAgGYAAgGAAgGAAgGYACgZABgXABgXYABgWADgVACgTYADgUABgSAEgPYADgQACgNACgMYAFgWABgNAAAAIAAAAYAAAAgCANgFAWYgDALgDAOgEAPYgFAPgBASgEAUYgDATgEAVgDAWYgCAXgCAYgCAYYgBAGAAAGgBAHYAAAGAAAGAAAHYgBAMAAANAAANYgBANAAANAAANYgBANABANABANYABAaABAaABAaYADAaACAZACAYYACANAAAMACAMYACALACAMABALYAEAXADAVADATYADAUAEARADAQYADAQACANACAMYAEAWADANAAAAYACALAKAHALgCYALgDAHgKgCgLYAAAAAAgBAAAA");
	this.shape_251.setTransform(454.75,277.45,1,1,0,0,0,-0.6,-1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#F3BEBC").s().p("AAxF/YAAAAgDgMgGgVYgDgLgEgNgEgPYgCgHgCgIgDgIYgBgEgBgFgBgEYgBgEgBgFgBgEYgEgTgEgTgFgVYgCgLgCgKgCgLYgCgMgCgLgCgLYgDgYgEgYgEgYYgDgYgCgZgDgYYgDgZAAgZgBgZYAAgYgCgZACgXYAAgYABgWABgWYACgVACgVACgSYADgTABgRADgPYADgPADgNACgLYAEgWACgMAAAAIAAAAYAAAAgDAMgFAVYgDALgDANgDAPYgEAPgDARgDATYgDATgDAUgDAVYgCAWgCAXgCAXYgDAYABAZgBAYYAAAZgCAaACAZYACAYABAaABAZYADAYADAZACAYYACALABAMABALYACAMACALACALYADAVAEAVADASYABAFABAFABAEYABAFAAAEABAEYACAJACAIACAHYADAPACANACALYAFAVADANAAAAYACAKALAHALgCYALgDAHgKgDgLYAAAAAAgBAAAA");
	this.shape_252.setTransform(454.65,280.9,1,1,0,0,0,-0.6,-1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F3BEBC").s().p("AAzFvYAAAAgDgMgHgUYgDgKgEgMgEgPYgEgOgGgQgEgRYgEgRgFgTgFgUYgCgKgCgKgCgLYgCgLgCgLgCgLYgEgWgFgXgDgXYgDgYgCgXgDgXYgBgGgBgGAAgGIgBgSYAAgMgBgMgBgMYAAgMgBgMAAgLYAAgMAAgLABgMYAAgWAAgWACgVYACgVACgTABgSYABgJABgJABgIYABgIACgIABgHYADgPACgNACgKYADgVADgMAAAAIAAAAYAAAAgDAMgFAVYgCAKgDANgEAOYgBAHgCAIgCAIYgBAIgBAJgCAJYgDASgDATgDAVYgCAVgBAWgCAXYgBALgBAMgBALYAAAMAAAMAAAMYAAAMAAAMAAAMIAAATYAAAGABAGAAAGYABAXACAZABAYYADAYADAXADAXYACALABALABALYACALACALACAKYAEAVAEAUAEASYADASAFAQADAOYAEAPACAMADAKYAFAVADAMAAAAYACAKALAHALgDYALgDAGgKgCgLYgBAAAAgBAAAA");
	this.shape_253.setTransform(454.45,284.35,1,1,0,0,0,-0.6,-1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#F3BEBC").s().p("AA1FfYAAAAgEgLgGgUYgEgJgEgMgEgNYgFgOgGgPgEgQYgEgRgFgSgFgTYgFgTgEgUgEgWYgCgKgDgLgCgLYgCgLgCgLgCgLYgDgXgDgXgDgWYgBgLAAgMgBgLYgBgMAAgLgBgMYgBgLgBgLAAgLYAAgMABgLAAgKYAAgLAAgLABgLYAAgKgBgKACgKYACgUABgTACgRYABgJABgIAAgIYACgIABgHABgHYADgOACgNABgKYAEgUACgLAAAAIAAAAYAAAAgDALgEAUYgDAKgCAMgEAOYgBAHgCAHgBAIYgCAIgBAIgBAJYgDARgDATgDAUYgBAKAAAKgBALYgBAKgBALgBALYgBALAAALgBALYgBAMABALAAAMYAAALAAAMAAAMYAAALgBAMACAMYABAWACAYACAXYAAALACAMACALYACALABALACALYADAWADAVAFAUYAEAUAEATAEARYADASAFAPAEAOYADANADAMADAKYAGAUADALAAAAYADAKALAHALgEYALgDAGgLgDgKYAAgBgBAAAAAA");
	this.shape_254.setTransform(454.3,287.75,1,1,0,0,0,-0.6,-1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F3BEBC").s().p("AA4FOYAAAAgEgKgHgSYgEgKgEgLgFgMYgDgHgCgGgDgIYgDgHgCgHgCgIYgFgQgGgRgFgSYgBgEgBgFgBgEYgCgFgBgFgBgFYgCgKgCgJgDgLYgEgUgGgVgCgVYgEgWgDgWgDgVYgCgWgBgWgCgWYgCgWABgVAAgVYAAgKAAgLAAgKYAAgFAAgFAAgFYABgFAAgEABgFYABgTACgSABgRYABgIAAgIACgIYABgHABgIABgGYACgOACgLACgKYADgTACgMAAAAIAAAAYAAAAgDALgEAUYgCAJgDAMgDANYgBAHgCAHgBAHYgCAIgBAIgBAIYgCARgDASgDATYAAAFgBAFgBAFYAAAFAAAFgBAFYAAAKgBAKgBALYgBAVgCAVABAXYAAAWABAWAAAXYACAVACAXACAWYABAWAFAWAEAVYABAKACALACAKYABAFAAAFACAFYABAEABAFABAFYAFATAEASAFARYACAIABAIADAHYACAIADAGACAHYADANAEALADAKYAGASADALAAAAYAEAKALAGALgDYAKgEAGgLgEgLYAAAAAAAAAAgB");
	this.shape_255.setTransform(454.1,291.2,1,1,0,0,0,-0.6,-1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F3BEBC").s().p("AA6FMYAAAAgEgKgHgSYgEgJgEgLgFgNYgDgGgDgHgDgHYgDgHgCgHgCgIYgFgQgGgRgGgRYgBgFgBgEgBgFYgBgFgBgEgCgFYgCgKgCgKgDgKYgEgUgHgVgCgVYgEgWgDgVgEgVYgCgWgBgWgCgWYgDgWABgVAAgVYAAgKAAgLAAgKYAAgFAAgFAAgEYAAgFABgFAAgFYABgTACgSABgRYABgIAAgIABgHYABgIACgHABgHYACgNABgMACgJYADgUACgLAAAAIAAAAYAAAAgDALgEATYgCAKgCALgDAOYgCAGgBAHgCAIYgBAHgBAIgBAJYgCAQgDASgCATYgBAFgBAFAAAFYAAAFgBAFAAAFYgBAKAAAKgBALYgBAVgCAWABAWYABAWAAAWABAXYADAVACAWACAXYACAWAFAVADAVYACAKACALACAKYABAFABAFABAEYABAFACAFABAFYAFATAEARAFARYACAIACAIACAIYADAHACAHACAGYAEANAEALADAJYAGATAEAKAAAAYAEALALAFAKgDYALgEAFgLgDgLYAAAAAAAAgBgB");
	this.shape_256.setTransform(454,293.2,1,1,0,0,0,-0.6,-1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#F3BEBC").s().p("AA9FKYAAAAgEgKgIgSYgEgJgEgLgGgMYgCgGgDgHgDgHYgDgHgCgHgDgIYgFgQgGgQgGgSYgGgSgEgTgFgUYgDgKgCgKgDgKYgBgGgCgFgBgFYgBgFgBgGAAgFYgEgVgEgWgEgVYgCgVgCgWgCgWYgDgWABgVAAgVYgBgKAAgKAAgKYAAgFAAgFAAgFYAAgFABgFAAgFYABgTACgRABgRYAAgIABgIABgIYABgHABgHABgHYACgOACgLABgKYADgTACgLAAAAIAAAAYAAAAgDALgEATYgCAJgCAMgDANYgBAHgCAHgBAHYgCAIAAAIgBAIYgDARgCASgCATYgBAFgBAEAAAFYAAAFAAAFgBAFYAAAKgBALAAAKYgBAVgCAWACAWYABAWAAAWABAXYADAVADAWACAWYABAGAAAFABAFYABAGABAFABAGYACAKACALACAKYAFAVACAUAGATYAGASAFASAEAQYADAJABAIADAHYADAHACAHACAGYAEANAEALADAJYAHASAEALAAAAYAEAKALAGALgEYAKgEAFgLgDgLYgBAAAAgBAAAA");
	this.shape_257.setTransform(453.75,295.25,1,1,0,0,0,-0.7,-1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F3BEBC").s().p("ABAFIYAAAAgFgKgIgSYgEgJgFgKgFgNYgDgGgDgGgDgHYgDgHgCgIgDgHYgFgQgGgQgHgSYgGgRgEgUgFgTYgDgKgDgKgDgKYgBgGgBgFgCgFYAAgFgBgFgBgGYgEgVgEgVgEgVYgDgWgCgWgCgVYgDgWAAgVAAgVYgBgKAAgKAAgKYAAgFAAgFAAgFYAAgFAAgEAAgFYACgTABgSABgRYAAgIABgIAAgHYABgIABgHABgHYACgNACgMABgJYADgTACgLAAAAIAAAAYAAAAgDALgDATYgCAJgDAMgCANYgCAHgBAHgBAHYgCAIAAAHgBAJYgCAQgDASgCATYAAAFgBAFAAAFYgBAFAAAFAAAFYAAAKgBAKAAAKYgBAVgBAWABAWYACAWAAAWACAWYADAWACAWADAWYABAFABAGAAAFYABAFABAGABAFYADAKACALACAKYAFAVADAUAGASYAGATAFASAFAQYACAIACAIADAHYACAHACAHACAGYAFANAEALAEAJYAHASAEAKAAAAYAEALALAFAKgEYALgEAFgLgEgLYAAAAAAgBAAAA");
	this.shape_258.setTransform(453.65,297.2,1,1,0,0,0,-0.7,-1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F3BEBC").s().p("ABCFGYAAAAgFgKgIgSYgCgEgCgFgDgFYgCgFgDgGgCgGYgGgMgGgNgGgQYgDgHgDgIgDgIYgDgJgDgIgDgJYgGgSgFgTgGgTYgFgUgGgUgFgVYgFgVgDgWgEgUYgDgWgEgWgBgVYgDgWAAgVgBgUYgBgLAAgKAAgKYAAgKAAgJAAgKYABgJAAgJAAgJYABgJABgJAAgIYABgIAAgIABgIYABgHABgHAAgHYACgNABgMACgKYADgTACgLAAAAIAAAAYAAAAgDALgEATYgCAKgCALgCANYgBAHgCAHgBAIYgBAHgBAIgBAIYgBAJgBAIgBAJYgBAJgBAJgBAKYgBAJAAAKgBAKYAAAKgBAKAAALYAAAUgBAWACAWYAAAWACAWACAWYADAVACAXAEAVYADAWAFAVAEAVYAFAUAFAUAFASYADAJADAJACAJYADAJADAIADAIYAFAQAEAOAFANYADAHACAGACAFYACAGACAFACAEYAIASAEAKAAAAYAEAKAMAFAKgEYAKgEAFgMgEgKYAAgBgBAAAAAA");
	this.shape_259.setTransform(453.5,299.25,1,1,0,0,0,-0.7,-1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#F3BEBC").s().p("ABFFEYAAAAgFgKgJgRYgCgFgCgEgDgGYgCgFgDgFgDgGYgFgMgGgOgGgPYgEgHgDgIgDgIYgDgIgDgJgEgJYgFgRgGgTgGgTYgDgKgDgKgDgKYgDgKgCgLgDgKYgFgVgEgVgEgVYgDgVgEgWgCgVYgCgWgBgVgBgUYgBgLAAgKAAgKYAAgJAAgKAAgJYAAgKAAgJABgJYAAgJABgIAAgJYABgIAAgIABgHYABgIAAgHABgGYABgOACgLABgKYADgTACgLAAAAIAAAAYAAAAgCALgEATYgCAJgDAMgCANYgBAHgBAHgBAHYgBAIgBAIgBAIYgBAIgBAJgBAJYgBAIgBAKAAAJYgBAKgBAJAAAKYAAAKgBAKAAALYAAAVAAAVABAWYABAWACAWACAWYADAVADAWAEAWYACALACAKACALYADAKACALACAKYAGAUAEAUAGASYADAJADAJACAJYADAIADAIADAIYAFAQAFAPAFAMYADAHACAGACAFYADAGACAFACAEYAHASAFAKAAAAYAEAKAMAFAKgFYAKgEAFgMgFgKYAAgBAAAAAAAA");
	this.shape_260.setTransform(453.65,301.25,1,1,0,0,0,-0.7,-1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F3BEBC").s().p("ABIFCYAAAAgGgKgIgRYgDgEgCgFgDgFYgCgFgDgGgDgGYgFgLgHgOgGgPYgDgHgEgIgDgIYgDgIgDgJgEgIYgGgSgGgSgGgUYgDgJgDgKgDgKYgDgKgDgKgCgLYgDgKgDgLgCgKYgCgLgCgKgCgKYgCgLgCgLgBgKYgCgLgCgLgBgKYgDgWgBgVgBgUYgBgKAAgKAAgKYgBgKAAgKABgJYAAgKAAgJAAgJYAAgIABgJAAgIYABgIAAgIABgIYAAgHABgHABgHYABgNABgMACgJYADgTABgLAAAAIAAAAYAAAAgCALgEATYgCAJgCAMgCANYgBAGgBAHgBAIYgBAHgBAIgBAIYgBAJgBAIgBAJYAAAJgBAJgBAKYgBAJAAAKAAAKYAAAKgBAKAAAKYAAAVAAAVACAWYABALAAALACALYABALABALABAKYACALABALACALYABALADALACAKYABALADALACAKYADALACAKADAKYAFAUAFAUAGASYADAJADAJADAIYADAJADAIADAIYAFAQAFAOAFAMYADAHACAGADAFYACAGACAEACAFYAIARAFAKAAAAYAEAKAMAFAKgFYAKgEAFgMgFgKYAAgBAAAAAAAA");
	this.shape_261.setTransform(453.75,303.3,1,1,0,0,0,-0.7,-1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#F3BEBC").s().p("ABLFAYAAAAgGgKgJgRYgCgEgDgFgCgFYgDgFgDgFgCgGYgGgMgHgNgGgPYgEgHgDgIgEgIYgDgIgDgIgEgJYgGgRgGgTgHgTYgDgJgDgKgDgKYgCgFgBgFgCgFYgBgFgCgFgBgFYgDgLgDgKgCgLYgCgKgDgLgCgJYgCgLgCgLgCgKYgCgLgBgLgBgKYgDgWgCgVgBgUYgBgKAAgKgBgKYAAgKgBgJABgKYAAgSAAgSABgRYAAgIABgIAAgHYABgHAAgHABgHYABgNABgMACgJYACgTACgLAAAAIAAAAYAAAAgCAKgEATYgCAKgCALgCANYgBAHgBAHgBAIYgBAHAAAIgBAIYgCAQgCASgBATYAAAKgBAJAAAKYAAAKAAAKAAALYAAAUABAWACAVYAAALABALACALYABALABALABAKYACALACALACALYABALADAKACALYABAFABAGABAFYABAFACAFABAGYADAKACAKADAKYAGAUAFAUAGASYADAJADAJADAIYADAIAEAJACAHYAFAQAGAOAGANYADAGACAGACAFYADAFACAFACAFYAIARAFAKAAAAYAFAKAMAEAKgFYAKgEAEgMgFgKYAAgBAAAAAAAA");
	this.shape_262.setTransform(453.9,305.3,1,1,0,0,0,-0.7,-1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#F3BEBC").s().p("ABNE+YAAAAgFgKgJgQYgDgFgCgEgDgFYgDgFgDgGgCgFYgGgMgHgNgHgPYgDgHgEgIgEgIYgDgIgDgIgEgIYgHgRgGgTgHgTYgDgJgDgKgEgKYgDgKgDgKgDgKYgCgKgEgLgCgKYgCgLgDgKgCgKYgDgKgBgLgCgLIgDgPYgBgGgBgFAAgFYgEgVgBgVgCgVYgBgKAAgKgBgKYAAgJgBgKAAgJYAAgTAAgSABgQYAAgIABgIAAgHYABgIAAgHABgGYABgOABgLABgKYADgTABgLAAAAIAAAAYAAAAgCALgDATYgCAJgCAMgCANYgBAHgBAHgBAHYgBAIAAAHgBAJYgCAQgBASgBATYgBAJAAAKAAAKYAAAJAAALAAAKYABAVAAAVACAVYABAGAAAFABAGIACAQYABALABALACAKYACALACALACAKYABALADALACALYACAKADALADAKYADAKACALADAKYAGATAGAUAGASYADAJAEAIADAJYADAIADAIADAIYAFAPAGAOAGANYADAGACAGADAFYACAFADAFACAEYAIASAFAJAAAAYAFAKAMAEAKgFYAKgEAEgMgFgKYAAgBAAAAgBAA");
	this.shape_263.setTransform(454,307.35,1,1,0,0,0,-0.7,-1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#F3BEBC").s().p("ABQE8YAAAAgFgKgKgQYgCgEgDgFgDgFYgDgFgCgFgDgGYgHgLgHgNgGgPYgEgHgEgIgDgHYgEgIgDgJgEgIYgHgRgHgSgHgTYgDgJgDgKgEgKYgDgKgEgKgCgKYgDgKgDgKgDgLYgDgKgCgLgDgJYgCgLgCgKgCgLIgDgQYgBgFgBgFAAgFYgCgLgCgKgBgLYgBgKgBgKgBgKYgBgLAAgJgBgKYAAgKgBgKAAgJYAAgTgBgRABgQYABgJAAgHAAgIYABgHAAgHABgHYABgNABgMABgJYACgTACgLAAAAIAAAAYAAAAgCALgEATYgCAJgBAMgCANYgBAGgBAHgBAIYAAAHgBAIgBAIYgCARgBARAAATYgBAJAAAKAAAKYAAAKAAAKAAAKYABALAAAKABALYAAAKACALAAALYABAFAAAFABAGIACAQYACALABALACAKYACALACAKACALYACALACALADAKYACALADAKADAKYADALACAKADAKYAHATAFAUAHARYAEAJADAJADAIYADAJAEAIADAHYAFAQAHANAFANYADAGADAGACAFYADAFACAFACAEYAJARAFAKAAAAYAFAKAMAEAKgFYAKgFAEgMgFgKYAAgBgBAAAAAA");
	this.shape_264.setTransform(454,309.35,1,1,0,0,0,-0.8,-1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#F3BEBC").s().p("ABTE6YAAAAgFgKgKgQYgDgEgCgFgDgEYgDgFgDgGgDgFYgGgMgIgMgHgPYgDgHgEgHgEgIYgEgIgDgIgEgIYgIgRgGgSgIgTYgDgJgDgKgEgKYgEgJgDgKgDgLYgDgKgDgKgDgKYgDgLgCgKgDgKYgDgKgBgKgDgLIgDgQYgBgFgBgFgBgFYgBgLgCgKgBgLYgBgKgCgKgBgKYgBgKAAgKgBgKYgBgKAAgJAAgJYgBgTAAgSAAgQYABgIAAgIAAgHYAAgIABgHAAgGYABgNABgMABgJYADgTABgLAAAAIAAAAYAAAAgCALgDASYgCAKgCALgBANYgBAHgBAHgBAHYgBAIAAAIgBAIYgCAQAAASgBATYAAAJAAAKAAAKYAAAJAAAKABALYAAAKABAKAAALYABAKABALABALYABAFAAAGABAFIACAQYACALABALACAKYADALACAKACALYACALADAKACALYADAKADALADAKYADAKACAKAEAKYAGAUAGATAHARYAEAJADAJADAIYAEAIADAIADAIYAGAPAHAOAGAMYADAGACAGADAFYADAFACAFACAEYAJARAFAJAAAAYAGAKAMAEAJgFYAKgFAEgNgFgJYAAgBgBAAAAAA");
	this.shape_265.setTransform(454.85,311.85,1,1,0,0,0,-0.8,-1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F3BEBC").s().p("ABWE4YAAAAgGgKgKgQYgCgEgDgEgDgFYgDgFgDgFgDgGYgGgLgIgMgHgPYgEgHgEgHgEgIYgEgIgDgIgEgIYgIgRgGgSgIgSYgEgJgDgKgEgKYgEgJgDgKgDgKYgDgKgEgKgDgLYgDgKgCgKgDgLYgDgJgCgLgCgKYgDgKgCgLgBgKYgCgLgCgKgCgKYgBgLgBgKgBgKYgCgKAAgKgBgKYgBgJgBgKAAgJYAAgTgBgRABgQYAAgIAAgIAAgIYABgHAAgHAAgHYABgNABgLABgKYACgSABgLAAAAIAAAAYAAAAgBAKgEATYgBAKgCALgBANYgBAHgBAHgBAHYAAAIgBAHgBAIYgBARAAARgBATYAAAJAAAKAAAKYAAAKAAAKABAKYABAKAAALABAKYABALABAKABALYABALACALACAKYACALABALACAKYADAKACALACALYADAKACALADAKYADALADAKADAKYADAKADALADAJYAHAUAGATAIARYADAJADAIAEAJYAEAIADAIADAHYAGAPAHAOAGAMYADAGADAGADAFYACAFADAFACAEYAJAQAGAKAAAAYAFAKAMADAKgFYAJgFAEgNgFgJYAAgBgBAAAAAA");
	this.shape_266.setTransform(455.7,314.3,1,1,0,0,0,-0.8,-1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#F3BEBC").s().p("ABZE2YAAAAgGgJgKgQYgDgEgDgFgDgFYgCgEgEgGgDgFYgGgLgIgMgHgPYgIgOgIgPgIgRYgIgQgHgSgIgSYgEgJgDgKgEgKYgEgJgEgKgDgKYgDgKgDgKgEgKYgCgKgDgLgDgKYgDgJgCgLgDgKYgCgLgDgKgBgKYgCgLgCgKgCgKYgBgLgCgKgBgKYgBgKgBgKgBgJYgBgKgBgJAAgKYgBgSAAgSAAgQYAAgIAAgIAAgHYABgHAAgHAAgHYABgNABgMABgJYACgTABgLAAAAIAAAAYAAAAgCALgDATYgBAJgCAMgBANYgBAGgBAHgBAIYAAAHgBAIAAAIYgCAQAAASAAATYAAAJAAAKAAAJYABAKAAAKABAKYAAALABAKABALYABAKABALACAKYABALABALACAKYACALACALACAKYADAKACALACALYADAKADALADAKYACALAEAKADAKYADAKADAKAEAKYAHATAGATAIARYAHASAHAQAGAPYAHAPAIANAGAMYADAGADAGACAFYADAFADAEACAEYAJARAGAJAAAAYAFAKAMADAKgFYAKgGADgMgFgJYgBgBAAAAAAAA");
	this.shape_267.setTransform(456.5,316.8,1,1,0,0,0,-0.8,-1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#F3BEBC").s().p("ABcE0YAAAAgGgJgKgQYgGgIgGgJgHgLYgGgLgIgNgIgOYgHgOgJgPgIgQYgIgQgHgSgIgSYgFgJgDgKgEgJYgEgKgEgKgDgKYgDgJgEgKgDgLYgDgKgDgKgDgKYgEgJgCgLgCgKYgDgLgDgKgBgKYgCgLgDgKgBgKYgCgKgBgKgCgKYgBgKgBgKgBgKYgBgJgBgKAAgJYgBgTgBgRAAgQYAAgIAAgIAAgHYABgIAAgHAAgGYABgNAAgMABgJYACgTABgLAAAAIAAAAYAAAAgBALgDATYgCAJgBALgBAOYgBAGgBAHgBAHYAAAIgBAIAAAIYgBAQAAASAAASYgBAKABAJAAAKYABAKAAAKABAKYABAKABAKAAALYACAKABALACALYABAKACALACALYACAKABALADAKYADAKACALADALYADAKADAKACALYADAKAEAKADAKYADAKADAKAEAKYAIATAGATAIARYAIARAHAQAHAPYAGAPAIANAGAMYAHAMAFAKAFAIYAKARAFAJAAAAYAGAJAMAEAKgGYAJgGADgMgFgJYAAgBgBAAAAAA");
	this.shape_268.setTransform(457.3,319.25,1,1,0,0,0,-0.8,-1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#F3BEBC").s().p("ABfEyYAAAAgGgJgLgQYgFgIgHgJgGgLYgHgLgIgMgIgOYgIgNgJgPgIgRYgIgQgIgRgIgSYgEgJgEgKgEgJYgEgKgEgJgDgKYgEgKgDgKgEgKYgDgKgDgKgDgLYgEgJgCgKgDgKYgDgLgCgKgCgKYgCgLgDgKgBgKYgCgKgCgKgBgKYgCgKAAgKgCgJYgBgKgBgJAAgKYgBgSgCgRABgRYAAgIAAgHgBgIYABgHAAgHAAgHYABgNAAgLABgJYACgTABgLAAAAIAAAAYAAAAgCALgDASYgBAKgBALgBANYgBAHgBAHAAAHYgBAHAAAIgBAIYgBARAAARAAATYAAAJABAKAAAJYABAKAAAKABAKYABALABAKABAKYACALABAKACALYABAKACALACALYADAKABALADAKYADAKACALADAKYADALADAKADAKYADALAEAKADAKYAEAKADAKAEAJYAHATAIATAIARYAHARAHAQAIAOYAHAPAHANAHAMYAGAMAGAKAFAIYAKAQAFAJAAAAYAGAKAMADAKgGYAJgGADgMgFgJYgBgBAAAAAAAA");
	this.shape_269.setTransform(457.15,320.65,1,1,0,0,0,-0.8,-1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#F3BEBC").s().p("ABiEwYAAAAgGgJgLgPYgFgIgHgJgHgLYgHgLgIgMgIgOYgIgNgJgPgJgQYgJgQgHgRgIgSYgFgJgEgKgEgJYgEgJgEgKgEgKYgDgKgEgJgEgKYgDgKgDgLgEgKYgDgJgDgKgCgKYgDgLgDgKgCgKYgCgKgDgKgCgLYgBgKgCgKgCgKYgCgKAAgJgCgKYgBgKgBgJAAgJYgCgSgBgSAAgQYAAgIAAgIAAgHYAAgHAAgHAAgHYAAgNABgLABgKYABgTABgKAAAAIAAAAYAAAAgBAKgDATYgBAJgBAMgCANYAAAGgBAHAAAIYgBAHAAAIAAAIYgBAQAAASAAASYAAAKABAJABAKYAAAKAAAKACAKYABAKABAKABALYABAKACALACAKYABALADAKACALYACAKACALADAKYADAKADALACAKYAEALADAKADAKYADALAEAJADAKYAEAKADAKAEAKYAIASAIATAIARYAIARAHAPAIAPYAHAPAIANAHALYAGAMAGAKAFAIYAKAQAGAJAAAAYAGAJAMADAKgGYAJgGADgMgGgJYAAgBgBAAAAAA");
	this.shape_270.setTransform(456.95,321.95,1,1,0,0,0,-0.8,-1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F3BEBC").s().p("ABlEuYAAAAgGgJgLgPYgGgIgHgJgGgLYgIgKgIgMgIgOYgIgNgKgPgIgQYgFgIgEgIgFgIYgDgJgEgJgFgIYgEgJgEgKgFgJYgEgJgEgKgEgJYgEgKgDgKgEgKYgEgKgDgKgDgKYgEgJgDgKgDgKYgDgLgDgKgCgKYgCgKgCgKgDgKYgBgLgCgKgCgJYgCgKgBgKgBgKYgBgJgCgJAAgKYgCgSgBgRAAgQYgBgIAAgIAAgHYAAgIAAgHAAgGYABgNAAgMABgJYABgTABgKAAAAIAAAAYAAAAgCAKgCATYgBAJgBAMgBANYgBAGAAAHgBAHYAAAIAAAIgBAIYgBAQABARAAATYAAAJABAKABAKYABAJAAAKABAKYACAKABALABAKYACAKACALABAKYACALACAKADALYACALACAKADAKYADAKADALADAKYADAKAEALADAKYADAKAEAKAEAKYAEAKADAJAEAKYAEAJAEAJAEAJYAEAJAFAJAEAIYAHARAIAQAIAOYAHAPAIANAHALYAHAMAGAKAFAIYALAPAFAJAAAAYAGAKANACAJgGYAJgGADgMgGgJYAAgBAAAAgBAA");
	this.shape_271.setTransform(456.7,323.3,1,1,0,0,0,-0.9,-1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#F3BEBC").s().p("ABoEsYAAAAgGgJgLgPYgGgHgHgJgHgLYgHgLgJgLgIgOYgJgNgJgOgJgQYgEgIgFgIgFgJYgDgIgFgJgEgJYgFgIgEgKgEgJYgEgJgFgJgEgKYgEgKgEgJgEgKYgDgKgEgKgDgKYgEgJgDgKgDgLYgDgKgDgKgCgKYgDgKgCgKgDgKYgCgKgBgKgCgKYgCgKgBgKgCgJYgBgKgCgJAAgJYgCgSgCgSAAgQYAAgIAAgHgBgIYAAgHAAgHABgGYAAgOAAgLABgJYABgTABgLAAAAIAAAAYAAAAgCALgCATYgBAJgBALgBANYgBAHAAAHgBAHYAAAIAAAHAAAIYgBARABARAAATYAAAJACAJAAAKYABAKABAKABAKYABAKACAKABAKYACALACAKACALYACAKACALADAKYACALACAJAEALYADAKADALADAKYADAKAEAKADALYADAKAFAJADAKYAEAKAEAKAEAJYAEAJAEAJAEAJYAEAJAFAJAEAIYAIARAIAQAIAOYAIAOAIANAHALYAHAMAGAKAFAHYALAQAGAJAAAAYAGAJAMADAJgHYAKgGACgMgGgJYAAgBAAAAgBAA");
	this.shape_272.setTransform(456.85,324.7,1,1,0,0,0,-0.9,-1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F3BEBC").s().p("ABsEqYAAAAgHgJgLgPYgGgHgHgJgHgKYgIgLgJgLgIgOYgJgNgJgOgJgQYgFgIgFgIgFgIYgDgIgFgJgEgJYgFgIgEgJgFgKYgEgJgFgJgEgKYgEgJgEgKgEgKYgEgJgEgKgDgKYgEgJgDgKgDgLYgDgKgEgKgCgKYgDgKgCgKgDgKYgCgKgCgKgCgKYgCgJgBgKgCgKYgBgJgCgJAAgKYgCgSgCgRAAgQYgBgIAAgIgBgHYABgHAAgHAAgHYAAgNAAgLAAgKYABgSABgLAAAAIAAAAYAAAAgBALgCASYgCAKAAALgBANYgBAHAAAHAAAHYgBAHAAAIAAAIYAAAQABASAAASYAAAKACAJABAKYAAAJABAKACAKYABAKACALABAKYACAKACALACAKYACALADAKACAKYADALACAJAEALYADAKADALADAKYAEAKADAKAEAKYADAKAFAKAEAKYAEAKADAJAFAJYAEAKAEAJAFAJYAEAIAFAJAEAIYAIARAIAPAIAOYAIAPAJAMAHALYAHAMAGAJAGAIYAKAPAGAJAAAAYAHAJAMADAJgHYAJgGADgMgHgJYAAgBAAAAAAAA");
	this.shape_273.setTransform(457,326.05,1,1,0,0,0,-0.9,-1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F3BEBC").s().p("ABvEoYAAAAgHgJgMgOYgGgIgHgIgHgLYgHgKgJgLgJgOYgJgNgKgOgJgPYgFgIgFgIgFgIYgEgIgEgJgFgJYgFgIgEgJgFgJYgEgKgFgJgEgJYgEgKgEgJgFgKYgEgKgDgKgEgKYgEgIgDgLgDgKYgEgKgDgKgDgKYgCgKgDgKgDgKYgCgKgCgKgCgJYgCgKgCgKgBgJYgCgKgBgJgBgJYgCgSgCgRgBgQYAAgIgBgIAAgHYAAgIAAgHAAgGYAAgNAAgLAAgKYABgTABgKAAAAIAAAAYAAAAgBAKgCATYgCAJAAAMgBANYAAAGgBAHAAAIYAAAHAAAIAAAIYgBAQACARAAATYABAJABAKABAJYABAKABAKACAKYABAKACAKABAKYACALACAKADAKYACALADAKACALYADAKADAKADAKYADAKADALAEAKYAEAKADAKAEAKYAEAKAEAKAEAJYAEAKAEAKAFAJYAEAJAFAJAEAJYAEAIAFAJAEAIYAIARAJAPAJAOYAIAOAIAMAIAMYAHALAGAJAGAIYALAPAGAJAAAAYAGAJANACAJgGYAJgHACgMgGgJYgBgBAAAAAAAA");
	this.shape_274.setTransform(457.2,327.4,1,1,0,0,0,-0.9,-1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#F3BEBC").s().p("AByEmYAAAAgHgJgMgOYgGgHgHgJgHgKYgIgKgJgLgJgOYgJgNgKgNgKgQYgEgHgFgIgFgIYgFgJgEgIgFgJYgFgIgFgJgEgJYgFgJgFgJgEgKYgEgJgFgKgEgJYgEgKgEgKgEgKYgEgJgDgKgEgKYgDgKgEgJgCgKYgDgLgDgKgDgJYgCgKgCgKgCgKYgDgKgBgJgCgKYgBgJgCgJgBgJYgCgTgDgRAAgQYgBgIAAgHgBgIYAAgHAAgHAAgGYAAgNAAgMAAgJYABgTAAgKAAAAIAAAAYAAAAgBAKgCATYgBAJAAALgBAOYAAAGAAAHgBAHYAAAIAAAHAAAIYAAARABARABATYABAJABAJABAKYABAKABAJACAKYACAKACALABAKYADAKACAKACALYACAKADAKADALYADAKADAKADAKYAEAKADALAEAKYAEAKADAKAEAKYAEAKAFAJAEAKYAEAJAEAKAFAJYAEAJAFAJAEAJYAFAIAFAJAEAIYAIAQAJAPAJAOYAIAOAJAMAIAMYAHALAHAJAFAIYALAPAHAIAAAAYAGAJANACAJgGYAIgHACgMgGgJYAAgBgBAAAAAA");
	this.shape_275.setTransform(457.35,328.75,1,1,0,0,0,-0.9,-1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F3BEBC").s().p("AB2EkYAAAAgHgIgMgPYgHgHgHgIgIgKYgHgLgKgKgJgNYgJgNgKgOgKgPYgFgIgFgIgFgIYgFgIgEgIgFgJYgFgIgFgJgFgJYgEgJgGgJgEgJYgEgKgFgJgEgKYgFgJgDgKgEgKYgFgJgDgKgEgKYgDgJgEgKgDgKYgDgKgDgKgDgKYgCgKgCgKgDgJYgCgKgCgKgBgJYgCgKgCgJgBgJYgCgSgDgRgBgQYAAgIgBgIAAgHYgBgHAAgHAAgHYAAgNgBgLABgJYABgTAAgLAAAAIAAAAYAAAAgBALgCATYgBAJAAALgBANYAAAHAAAHAAAHYAAAHAAAIAAAIYAAAQABASACASYAAAJACAKABAKYABAJABAKACAKYACAKACAKABAKYADAKACALADAKYACALADAKADAKYADAKADAKAEAKYADAKAEALAEAKYAEAKAEAKAEAKYADAJAFAKAEAJYAFAKAEAJAFAJYAFAJAEAJAFAJYAFAIAEAJAFAIYAIAQAKAPAJAOYAIAOAJAMAIALYAHALAHAJAGAHYALAPAGAJAAAAYAHAJANABAIgGYAJgHACgNgHgIYAAgBAAAAAAAA");
	this.shape_276.setTransform(457.55,330.55,1,1,0,0,0,-0.9,-1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F3BEBC").s().p("AB5EiYAAAAgHgIgMgOYgHgHgHgJgIgKYgIgKgJgLgKgMYgJgNgLgOgJgPYgFgHgGgIgFgIYgFgIgEgIgFgJYgFgIgFgJgFgJYgFgJgFgJgFgJYgEgJgFgKgFgJYgEgKgEgJgEgKIgGgOIgGgOYgDgKgEgKgDgKYgDgKgDgKgDgKYgDgKgCgJgDgKYgCgKgCgJgCgKYgCgJgCgJgBgJYgCgSgDgRgBgQYgBgIAAgIgBgHYAAgIAAgGgBgHYAAgNAAgLAAgKYABgSAAgLAAAAIAAAAYAAAAgBALgCASYgBAKAAALAAANYAAAHgBAHAAAHYAAAHAAAIABAIYAAAQABARACATYAAAJACAJABAKYABAKACAKACAKYACAJABALADAKYACAKADAKACAKYACALAEAKADAKIAFAPIAFAPYAEAKADALAEAKYAFAKAEAJAEAKYAEAKAFAKAEAJYAFAJAEAKAFAJYAFAJAFAIAEAJYAFAJAFAIAFAIYAIAQAKAOAJAOYAJAOAJAMAIALYAHALAHAJAGAHYALAPAHAIAAAAYAHAJAMACAJgHYAJgHABgNgGgIYgBgBAAAAAAAA");
	this.shape_277.setTransform(457.85,332.3,1,1,0,0,0,-0.9,-1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F3BEBC").s().p("AB8EgYAAAAgHgIgNgOYgGgHgIgIgHgKYgIgKgKgLgJgMYgKgNgLgNgKgPYgFgIgFgHgGgIYgFgIgEgIgFgJYgFgIgGgJgEgJYgFgIgGgJgEgKYgFgJgFgJgFgKYgEgJgEgKgFgJIgGgOIgGgPYgDgJgEgKgDgKYgEgKgDgKgDgKYgDgJgCgKgDgKYgCgJgCgKgCgJYgCgKgCgJgCgJYgCgSgDgRgBgQYgBgIgBgIAAgHYgBgHAAgHAAgGYgBgNAAgMAAgJYABgTAAgKAAAAIAAAAYAAAAgBAKgBATYgBAJgBAMAAANYAAAGAAAHAAAHYAAAIAAAHABAIYAAARACARABASYABAKACAJABAKYABAJACAKACAKYACAKACAKACAKYADAKACAKADALYADAKADAKADAKIAFAPIAGAPYAEAKADAKAEAKYAFAKAEAKAEAKYAFAKAEAJAFAJYAFAKAEAJAFAJYAFAJAFAJAFAIYAFAJAFAIAEAIYAJAQAKAOAJAOYAJANAKAMAHALYAIALAHAJAGAHYAMAPAHAIAAAAYAGAJANABAJgHYAIgHACgMgHgJYAAAAgBgBAAAA");
	this.shape_278.setTransform(458.05,334.1,1,1,0,0,0,-0.9,-1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F3BEBC").s().p("AB/EeYAAAAgHgIgNgNYgGgHgIgJgIgJYgIgKgKgLgJgMYgKgNgLgNgKgPYgFgHgGgIgFgHYgGgIgFgIgEgJYgDgEgDgEgCgEYgDgFgCgEgDgEYgFgJgFgJgFgJYgKgSgKgTgIgTIgHgOIgGgPYgDgJgFgKgDgKYgDgKgDgKgEgJYgDgKgCgKgDgJYgBgFgBgFgCgFYgBgEgBgFgBgFYgCgJgCgJgBgJYgDgSgDgRgBgQYgBgIgBgIgBgHYAAgHAAgHgBgHYAAgNgBgLAAgJYABgTAAgLAAAAIAAAAYAAAAgBALgBATYgBAJAAALAAANYAAAHgBAHAAAHYABAHAAAIAAAIYAAAQADASABASYABAJACAKACAJYAAAFABAFABAFYABAFABAFABAEYACAKACALACAKYADAKADAKADAKYACAKAEAKADALIAFAOIAGAPYAIAVAJATAJAUYAEAJAFAKAFAJYACAFACAEADAFYACAEADAFACAEYAFAJAFAJAFAIYAFAJAGAIADAIYAKAQALAOAJANYAJAOAKALAHALYAIALAIAIAGAIYALAOAHAIAAAAYAHAJANABAIgHYAJgHABgMgHgJYAAAAAAgBgBAA");
	this.shape_279.setTransform(458.3,335.9,1,1,0,0,0,-0.9,-1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F3BEBC").s().p("ACDEcYAAAAgIgIgMgNYgHgHgIgIgIgKYgIgJgKgLgKgMYgKgNgLgMgKgPYgGgIgFgHgGgIYgFgIgGgIgEgIYgDgEgDgEgCgEYgDgEgDgFgCgEYgGgJgFgJgFgJYgKgSgKgSgJgUYgEgJgFgJgEgKYgEgJgEgKgDgKYgEgKgDgJgDgKYgEgKgCgJgDgKYgBgFgCgEgBgFYgBgFgBgFgBgEYgCgKgDgJgBgJYgDgSgEgRgBgQYgBgHgBgIAAgHYgBgIAAgGgBgHYAAgNgBgLAAgKYAAgSAAgLAAAAIAAAAYAAAAAAALgBASYgBAKAAALAAANYAAAHgBAHABAHYAAAHABAIAAAIYAAAQADARACATYABAJACAJABAKYABAFABAFAAAEYACAFABAFABAFYACAKACAKADAKYADAKACAKADALYADAKAEAKADAKYAEAKAEAJAEAKYAHAVAKATAJATYAFAKAFAJAEAKYADAEACAFADAEYACAFADAEADAFYAFAIAFAJAFAIYAFAJAFAIAEAHYAKAQALAOAJAOYAKANAKALAIALYAIALAHAIAGAHYAMAPAHAIAAAAYAHAIANABAIgHYAJgHABgMgHgJYgBAAAAgBAAAA");
	this.shape_280.setTransform(458.55,337.65,1,1,0,0,0,-0.9,-1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F3BEBC").s().p("ACGEaYAAAAgHgHgNgOYgHgGgIgJgIgJYgJgKgKgKgKgMYgKgMgLgNgLgPYgFgHgGgHgGgIYgFgIgFgIgFgIYgMgQgKgSgLgRYgKgSgKgTgJgTYgKgSgIgTgHgUYgEgJgDgKgEgKYgDgJgDgKgDgJYgBgFgCgFgBgFYgBgEgBgFgBgFYgDgJgCgJgCgJYgDgSgEgRgBgQYgBgIgBgHgBgIYAAgHgBgHAAgGYgBgNgBgMABgJYgBgTAAgKAAAAIAAAAYAAAAAAAKgBATYgBAJAAAMAAANYAAAGAAAHAAAIYABAHAAAIABAIYAAAQADARACATYABAJACAJACAKYABAEABAFAAAFYACAFABAFABAFYACAJACALADAKYADAKADAKADAKYAHAUAHAUAJATYAHAVAKATAJATYALATAJATALARYAFAJAFAIAFAIYAGAJAEAHAFAIYALAQAKAOAKANYAJANAKAMAJAKYAIALAHAIAGAHYANAOAHAIAAAAYAHAJANABAIgIYAIgHABgNgHgIYAAAAgBAAAAgB");
	this.shape_281.setTransform(459.6,339.85,1,1,0,0,0,-1,-1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F3BEBC").s().p("ACKEYYAAAAgIgHgNgNYgHgHgIgIgIgJYgJgKgKgKgKgMYgKgMgMgNgLgOYgFgHgGgIgGgHYgGgIgFgIgFgIYgMgQgKgRgLgSYgKgSgLgSgKgTYgJgSgIgTgJgTYgHgUgHgTgGgTYgDgJgDgKgCgJYgCgJgCgKgCgIYgEgSgEgRgBgQYgBgIgBgIgBgHYgBgHAAgHgBgGYgBgNgBgMABgJYgBgTAAgKAAAAIAAAAYAAAAAAAKgBATYgBAJAAAMABANYAAAGgBAHABAHYAAAIABAIABAIYAAAQADARACASYACAJACAKACAJYABAKACAKADAJYAEAUAHAUAGAUYAHAUAHAUAJATYAJAVAKATAJATYALASAJATALARYAGAJAFAIAFAIYAGAIAEAIAGAIYAKAQALANAKANYAKANAKAMAIAKYAIALAIAIAGAHYANAOAHAIAAAAYAHAIANABAIgIYAIgHABgNgHgIYgBAAAAAAAAgB");
	this.shape_282.setTransform(460.7,342,1,1,0,0,0,-1,-1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#F3BEBC").s().p("ACNEWYAAAAgIgHgNgNYgHgHgIgIgJgJYgIgJgLgKgKgMYgKgMgMgMgLgPYgGgHgGgHgFgIYgGgHgGgIgFgIYgMgQgKgRgMgRYgKgSgMgSgJgTYgKgSgIgTgJgTYgHgTgIgUgGgTYgGgSgEgTgFgSYgDgSgFgRgBgPYgBgIgBgIgBgHYgBgHgBgHAAgHYgBgNgBgLAAgJYgBgTAAgLAAAAIAAAAYAAAAAAALgBATYgBAJABALAAANYAAAHAAAHABAHYAAAIABAHABAIYAAAQAEASACASYAEASADATAFAUYAFAUAGATAHAVYAIAUAHATAJAUYAIAUALATAKATYAKASAKATAMAQYAFAJAFAIAGAJYAGAIAEAHAGAIYAKAPAMAOAJANYAKANAKALAJAKYAJAKAHAJAHAHYAMANAHAIAAAAYAIAIANABAIgIYAIgHAAgNgHgIYAAAAgBAAAAgB");
	this.shape_283.setTransform(461.85,344.15,1,1,0,0,0,-1,-1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#F3BEBC").s().p("ACREUYAAAAgIgHgOgNYgGgGgJgIgJgJYgIgJgLgKgKgMYgLgMgMgMgLgOYgGgHgGgHgGgIYgGgHgFgIgGgIYgMgQgLgRgLgRYgLgSgMgRgJgTYgLgSgIgTgJgTYgIgTgIgTgGgTYgGgTgFgTgFgRYgBgJgCgJgCgIYgBgEgBgFgBgEYAAgEgBgEAAgEYgDgPgCgPgBgNYgBgNgBgLAAgKYgBgSAAgLAAAAIAAAAYAAAAAAALgBASYAAAKAAALABANYAAANABAPABAQYABAEAAAEAAAEYABAFABAEAAAEYACAJABAJABAJYAEASADATAGAUYAFATAHAUAHAUYAIAUAHATAKAUYAJAUAKASAKATYALATALASALARYAGAIAFAJAGAIYAFAHAFAIAGAIYALAPALANAKANYAKANALALAIAKYAJAKAIAIAGAHYANAOAHAIAAAAYAIAIANAAAIgHYAIgIAAgNgHgIYgBAAAAAAAAgB");
	this.shape_284.setTransform(462.95,346.3,1,1,0,0,0,-1,-1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#F3BEBC").s().p("ACUESYAAAAgIgHgNgMYgHgHgJgHgJgKYgJgJgKgJgLgMYgKgMgNgMgLgOYgGgHgGgHgGgHYgGgHgGgIgGgIYgMgQgLgRgMgRYgLgRgMgSgJgSYgLgSgJgTgJgTYgIgTgIgTgGgTYgHgSgFgTgFgSYgCgIgCgJgCgJYgBgEgBgEAAgEYgBgEgBgEAAgEYgDgQgCgOgBgNYgBgNgCgLAAgKYAAgTgBgKAAAAIAAAAYAAAAAAAKAAATYgBAKABALAAANYAAANACAPABAQYABAEAAAEABAEYAAAEABAFABAEYABAIACAJABAJYAEASAEAUAGATYAFAUAHATAHAVYAIATAIATAKAUYAJAUALASAKATYALASALASAMARYAGAIAFAJAGAIYAFAHAFAIAGAHYALAQAMANAKAMYAKANALALAJAKYAIAKAIAIAHAHYANANAHAIAAAAYAIAIANAAAIgHYAHgIABgNgIgIYAAAAgBAAAAgB");
	this.shape_285.setTransform(464.1,348.5,1,1,0,0,0,-1,-1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#F3BEBC").s().p("ACYERYAAAAgIgIgOgMYgHgGgJgIgJgJYgJgJgLgKgKgLYgLgMgNgMgLgNYgMgOgNgOgMgQYgLgPgMgRgMgRYgLgSgMgRgLgTYgKgRgJgTgKgTYgIgTgJgSgGgTYgHgTgFgSgFgSYgCgJgCgIgCgJYgCgIgCgIgBgIYgDgQgDgOgBgNYgBgNgBgMAAgJYgBgTgBgKAAAAIAAAAYAAAAAAAKAAATYgBAJABAMABANYAAANACAPACAQYAAAIABAIACAJYACAIABAJACAJYAEASAEATAGAUYAFATAIAUAHAUYAJATAIAUAKATYAJATALATALATYALASALASAMAQYAMARALAQALAOYALAPAMANALANYAKAMALALAJAKYAJAKAIAIAGAHYANANAIAIAAAAYAIAHAMAAAIgHYAIgIAAgNgIgIYAAAAAAAAAAAA");
	this.shape_286.setTransform(465.25,350.75,1,1,0,0,0,-1,-1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#F3BEBC").s().p("ACbEPYAAAAgIgHgOgNYgHgGgJgHgJgJYgJgJgLgKgLgLYgLgLgMgMgMgOYgMgNgNgPgNgPYgLgPgMgRgNgRYgGgIgFgJgGgJIgJgNIgIgOYgLgRgJgTgKgSYgIgTgJgTgHgTYgHgSgFgTgGgRYgCgJgCgJgCgIYgCgJgCgIgBgIYgDgPgDgPgBgNYgBgNgCgLAAgJYgBgTgBgLAAAAIAAAAYAAAAAAALAAATYAAAJABAMAAANYABANACAOACAQYAAAJACAIABAIYACAJABAJACAJYAFASAEATAGATYAGAUAIATAHAUYAJAUAIATALATIAHAOIAIAOYAGAKAFAJAGAJYALASALASANAQYALARAMAPALAPYAMAPAMANAKAMYALANALAKAJAKYAJAKAIAIAHAGYANANAIAIAAAAYAIAIAMAAAIgIYAIgIAAgNgIgIYAAAAgBAAAAAA");
	this.shape_287.setTransform(466.4,353.1,1,1,0,0,0,-1,-1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#F3BEBC").s().p("ACfENYAAAAgIgHgPgMYgHgHgJgHgJgJYgJgIgLgKgLgLYgLgLgNgMgMgOYgMgNgOgOgMgPYgMgPgMgRgNgQYgGgJgGgJgGgIIgJgNIgIgOYgFgJgGgJgFgIYgFgKgFgJgFgJYgIgTgKgTgGgSYgIgTgFgSgGgSYgDgIgCgJgCgIYgCgJgCgIgBgIYgDgQgDgOgBgNYgCgNgCgLAAgKYgBgSgBgLAAAAIAAAAYAAAAAAALAAATYAAAJABALABANYAAAOACAOADAQYAAAIACAJACAIYABAJACAJACAJYAFASAEATAHATYAGATAIAUAIAUYAEAJAFAKAEAKYAEAJAGAJAFAKIAIAOIAIAOYAFAJAGAKAGAJYAMASALARAMARYAMAQAMAPAMAPYAMAOAMANAKAMYALANALAKAJAKYAKAKAIAHAHAHYANANAIAHAAAAYAIAIAMAAAIgIYAIgIAAgNgIgHYgBgBAAAAAAAA");
	this.shape_288.setTransform(467.5,355.35,1,1,0,0,0,-1,-1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#F3BEBC").s().p("ACiELYAAAAgIgHgOgMYgIgGgJgHgJgJYgJgJgLgJgMgLYgLgLgNgMgMgNYgNgNgNgOgNgPYgMgPgMgRgNgQYgHgIgFgJgGgJIgKgNIgIgNYgFgJgGgJgFgIYgGgKgFgJgFgJYgEgJgFgKgEgJYgFgJgDgKgEgJYgIgSgGgTgFgRYgDgJgCgIgCgJYgDgIgCgIgBgIYgDgQgDgOgCgNYgBgNgCgLgBgKYgBgSAAgLAAAAIAAAAYAAAAAAALAAASYAAAKABALABANYAAANACAPADAQYABAIABAIACAJYACAIABAJADAJYAEASAFATAHAUYADAJAEAKAEAKYAEAJADAKAFAKYAEAKAFAJAFAJYAEAKAGAJAFAKIAIAOIAIAOYAGAJAFAKAGAJYANARALASANAQYAMAQAMAPAMAPYAMAOAMANALAMYALAMALAKAKAKYAJAKAIAHAHAHYAOAMAIAIAAAAYAIAHANAAAHgIYAIgIgBgNgIgHYAAgBAAAAgBAA");
	this.shape_289.setTransform(468.6,357.65,1,1,0,0,0,-1,-1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#F3BEBC").s().p("ACmEJYAAAAgIgHgPgMYgHgGgKgHgJgIYgJgJgMgJgLgLYgMgLgMgMgNgNYgNgNgNgNgNgQYgNgOgMgQgNgRYgHgIgGgJgGgIYgGgJgGgIgGgJYgFgJgGgJgGgIYgFgKgFgJgFgJYgFgJgEgJgFgKYgFgJgEgJgDgJYgJgTgGgSgGgRYgCgJgCgJgDgIYgCgIgDgIgBgIYgDgQgDgOgCgNYgCgNgCgMAAgJYgBgTgBgKAAAAIAAAAYAAAAAAAKAAATYAAAKABALABANYABANADAPACAQYABAIACAIACAJYACAIABAJADAJYAFASAFATAHATYADAKADAKAFAJYAEAKAEAKAEAJYAFAKAFAKAEAIYAFAKAGAJAFAKYAFAKAGAJAGAJYAGAJAFAKAHAIYAMASAMARANAQYALAQANAPAMAOYANAPAMAMALAMYAMAMALAKAJAKYAJAJAJAIAHAGYAOANAIAHAAAAYAIAIANgBAHgIYAHgIAAgNgIgHYgBgBAAAAAAAA");
	this.shape_290.setTransform(468.85,358.8,1,1,0,0,0,-1,-1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F3BEBC").s().p("ACpEHYAAAAgIgHgPgLYgHgGgJgHgKgJYgKgIgLgJgMgLYgLgLgNgLgNgNYgNgNgOgOgNgPYgGgHgGgHgHgIYgGgIgHgIgGgIYgHgIgGgJgGgJYgHgIgGgJgGgJYgFgJgGgIgGgIYgFgKgGgJgFgJYgFgJgEgJgFgJYgCgFgDgFgCgEYgCgFgCgEgCgFYgEgJgEgJgDgJYgDgJgEgJgDgJYgDgIgCgJgCgIYgDgJgCgIgCgIYgDgPgEgPgBgNYgCgNgCgLgBgJYgBgTgBgLAAAAIAAAAYAAAAAAALABATYAAAJABAMABANYABANADAPACAQYABAIACAIACAIYACAJACAJACAJYADAJADAJADAJYACAKAEAJADAKYACAFACAEACAFYACAFACAFACAFYAEAJAEAKAFAKYAFAJAEAKAFAJYAFAJAGAKAFAJYAGAKAGAJAGAJYAGAJAFAJAHAJYAGAIAGAJAGAJYAHAIAGAIAHAIYALAQAOAPAMAOYAMAOANAMALAMYAMAMALAKAJAKYAKAJAJAHAHAHYAOAMAIAIAAAAYAIAHANgBAHgIYAHgIAAgNgJgHYAAAAAAgBgBAA");
	this.shape_291.setTransform(469.05,360,1,1,0,0,0,-1,-1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#F3BEBC").s().p("ACtEFYAAAAgIgHgPgLYgHgGgKgHgKgIYgJgIgMgJgMgLYgLgLgOgLgNgNYgNgNgOgNgNgPYgHgHgGgHgHgIYgGgIgHgIgHgIYgHgIgGgIgGgJYgGgIgHgJgGgJYgGgIgGgJgGgIYgFgJgFgJgGgJYgFgJgFgKgFgJYgCgEgCgFgDgEYgCgFgCgFgCgEYgEgKgEgIgDgJYgEgJgDgJgDgJYgDgJgDgIgCgJYgDgIgCgIgCgIYgDgPgEgPgCgNYgCgNgCgLgBgJYgBgTgBgLAAAAIAAAAYAAAAAAALABATYAAAJABAMACANYABANACAPADAQYABAIACAIACAIYADAJABAJADAJYADAJACAJADAJYADAKAEAJAEAKYABAEACAFACAFYACAFACAFACAEYAFAKAEAKAFAJYAFAKAFAJAFAJYAFAKAGAJAFAJYAGAKAGAJAGAJYAGAJAGAJAHAJYAGAIAGAJAHAIYAGAJAHAHAGAIYAMARAOAOAMAOYANAOANAMALAMYAMALALALAKAJYAKAJAJAHAHAHYAOAMAIAHAAAAYAIAHANgBAHgIYAIgIgBgNgJgHYAAAAAAgBgBAA");
	this.shape_292.setTransform(469.3,361.1,1,1,0,0,0,-1,-1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#F3BEBC").s().p("ACxEDYAAAAgJgGgPgMYgHgFgKgHgJgIYgKgJgMgJgMgKYgMgLgNgLgNgMYgOgNgOgNgNgPYgHgHgHgHgGgIYgHgIgHgIgHgIYgHgHgGgJgGgIYgHgJgHgIgGgJYgGgJgGgIgGgIYgFgJgGgJgFgJYgGgJgEgKgFgJYgDgEgCgFgDgEYgCgFgCgEgCgFYgEgJgFgJgDgJYgEgJgDgJgDgIYgEgJgCgJgDgIYgCgIgDgIgCgIYgDgQgEgOgCgNYgCgNgCgLgBgKYgCgSgBgLAAAAIAAAAYAAAAAAALABATYAAAJACALABAOYABANAEAOACAQYACAIACAJACAIYACAJACAJADAJYADAIADAKADAJYADAJAEAKADAJYACAFACAFACAFYACAEACAFADAFYAEAJAEAKAFAKYAFAJAGAKAFAIYAFAKAGAJAGAJYAFAKAHAJAGAJYAGAIAGAKAHAIYAGAJAHAIAGAJYAHAIAHAIAGAIYAMAPAOAPANAOYANANANAMALAMYAMALAMALAJAJYAKAJAJAHAHAGYAPAMAIAHAAAAYAIAIANgBAHgJYAHgIgBgNgIgHYAAAAgBgBAAAA");
	this.shape_293.setTransform(469.5,362.3,1,1,0,0,0,-1,-1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#F3BEBC").s().p("AC1EBYAAAAgJgGgPgLYgIgGgKgHgJgIYgKgIgMgJgMgKYgMgLgOgLgNgMYgOgNgOgMgOgPYgHgHgHgHgGgIYgHgIgHgHgHgIYgHgIgGgJgHgIYgGgIgHgIgGgJYgHgJgGgJgGgHYgGgJgFgJgGgJYgGgJgEgJgFgJYgDgFgCgEgDgFYgCgEgCgFgCgEYgFgKgEgIgEgJYgDgJgEgJgDgJYgEgIgCgJgDgIYgDgIgDgIgBgIYgEgQgEgOgCgNYgCgNgDgLAAgKYgDgTgBgKAAAAIAAAAYAAAAABAKABATYAAAKACALABANYABAOAEAOADAQYABAIADAIACAJYACAIACAJADAJYADAJADAJADAKYADAJAEAJAEAKYACAEACAFACAFYACAFACAEADAFYAEAKAEAKAGAJYAFAJAFAKAGAIYAGAKAFAJAGAJYAGAKAGAIAHAJYAGAJAGAJAHAJYAHAIAGAJAHAIYAGAIAHAIAHAIYAMAPAOAOANAOYANAOAOAMALALYAMAMAMAKAKAJYAKAJAJAHAHAGYAPAMAIAHAAAAYAIAHANgBAHgJYAHgIgBgNgIgHYgBAAAAAAAAgB");
	this.shape_294.setTransform(469.75,363.45,1,1,0,0,0,-1,-1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#F3BEBC").s().p("ACxEBYAAAAgIgGgPgMYgIgFgJgHgKgIYgKgIgLgJgMgLYgMgKgNgLgNgNYgNgNgOgNgOgOYgHgIgHgHgGgHYgGgIgHgIgHgIYgHgIgGgIgGgIYgHgJgHgIgFgJYgGgJgHgIgGgIYgFgJgGgJgFgJYgGgJgEgJgFgJYgDgEgCgFgDgEYgCgFgCgEgCgFYgEgJgFgJgDgJYgEgJgDgIgDgJYgEgIgCgJgDgIYgDgIgCgIgCgIYgEgQgEgOgCgNYgCgMgDgMgBgJYgCgTgBgKAAAAIAAAAYAAAAABALABASYAAAKACALABANYACANADAPADAPYABAJADAIACAIYACAIACAJADAJYADAJADAJADAJYADAKAEAJADAJYACAFACAFACAEYACAFADAFACAFYAEAJAEAKAGAJYAFAKAFAJAFAJYAFAJAGAJAGAJYAFAKAHAJAGAIYAGAJAGAJAHAJYAGAIAHAJAGAIYAGAIAHAIAHAIYAMAQANAOANAOYANANANANALALYAMAMALAKAKAJYAKAJAIAHAIAGYAOAMAIAHAAAAYAIAIANgBAHgJYAHgIgBgNgIgHYAAAAgBgBAAAA");
	this.shape_295.setTransform(470.2,364.75,1,1,0,0,0,-1,-1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#F3BEBC").s().p("ACuEBYAAAAgJgHgOgLYgHgGgKgHgJgIYgKgIgLgJgMgLYgLgKgNgMgNgMYgNgNgOgNgNgPYgGgHgHgHgGgIYgGgIgHgIgHgHYgHgIgFgJgHgIYgGgIgHgJgFgIYgGgJgHgJgFgIYgGgIgFgJgFgJYgGgJgEgJgFgJYgDgFgCgEgCgFYgCgEgDgFgCgEYgEgJgEgJgEgJYgDgJgDgIgEgJYgDgIgCgJgDgIYgDgIgDgIgBgHYgEgQgEgOgCgNYgCgMgDgLgBgKYgCgSgBgLAAAAIAAAAYAAAAAAALABATYABAJACALABANYABANAEAOADAQYABAIACAIACAIYADAJACAJACAIYADAJADAJADAJYADAJAEAJAEAKYACAFACAEABAFYADAFACAEACAFYAEAJAEAKAFAKYAFAJAFAJAFAJYAGAJAFAJAGAKYAFAJAGAJAGAJYAGAIAGAKAGAIYAHAJAGAIAGAIYAHAJAGAHAHAIYALAQAOAOAMAOYAMAOANAMALAMYAMALALAKAJAKYAKAJAIAHAHAGYAOANAIAHAAAAYAIAHANgBAHgIYAIgIgBgNgIgHYgBgBAAAAAAAA");
	this.shape_296.setTransform(470.7,366.05,1,1,0,0,0,-1,-1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#F3BEBC").s().p("ACrEBYAAAAgJgHgOgMYgHgFgJgHgJgJYgKgIgLgJgLgLYgMgKgMgMgNgMYgMgNgOgNgNgPYgNgOgMgQgNgQYgGgIgGgIgGgJIgKgMIgJgNYgFgJgGgIgGgIYgFgJgFgJgGgJYgFgIgEgKgFgIYgFgJgEgJgEgJYgJgSgGgSgHgRYgDgIgDgIgCgIYgDgIgDgIgBgIYgEgPgEgOgCgNYgDgMgCgLgBgJYgDgTgBgKAAAAIAAAAYAAAAABAKABATYABAJABALACANYABANAEAOADAQYABAHACAIACAJYADAIABAJADAIYAGASAFASAIATYAEAJADAJAFAKYAEAJAEAKAFAJYAFAJAFAKAFAIYAFAKAFAJAGAJIAIAOIAJANYAGAJAFAJAGAIYANARAMARANAQYALAPANAPAMAOYAMAOAMAMALAMYALALALAKAKAKYAJAJAIAHAHAGYAOANAHAHAAAAYAJAHAMAAAIgIYAHgJAAgMgJgIYAAAAAAAAAAAA");
	this.shape_297.setTransform(471.15,367.3,1,1,0,0,0,-1,-1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#F3BEBC").s().p("ACnEAYAAAAgIgGgOgMYgHgGgJgHgJgIYgJgJgLgJgLgLYgLgKgMgMgNgNYgMgMgNgOgMgPYgOgOgLgQgNgPYgGgIgGgJgGgIIgJgNIgJgNYgFgIgGgIgFgJYgGgIgFgJgFgJYgJgSgKgSgIgSYgIgRgHgSgGgQYgDgJgDgIgDgIYgCgIgDgIgCgHYgDgPgEgOgDgNYgCgMgCgLgBgJYgDgSgBgLAAAAIAAAAYAAAAAAALACASYAAAJACALACANYABANADAOADAPYACAIACAIACAIYACAIACAJADAJYAFARAGASAHASYAHATAJATAJASYAEAKAFAJAFAJYAFAJAFAJAGAJIAHAOIAJANYAGAJAFAJAGAJYAMARAMAQANAQYAKAQANAOAMAOYAMAOAMAMAKAMYALAMALAKAJAJYAJAKAIAHAHAHYANAMAIAHAAAAYAIAIAMgBAIgIYAIgIgBgMgIgIYAAAAAAAAgBgB");
	this.shape_298.setTransform(471.65,368.6,1,1,0,0,0,-1,-1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#F3BEBC").s().p("ACkEAYAAAAgIgGgOgMYgHgGgIgHgJgJYgJgIgLgKgLgKYgKgLgNgMgLgNYgMgNgNgNgMgPYgNgOgLgQgMgQYgMgQgNgRgKgRYgMgQgKgSgKgSYgJgSgKgRgHgSYgJgRgGgSgGgQYgDgJgDgIgCgIYgDgIgDgIgBgHYgEgPgEgOgCgMYgDgMgCgLgCgJYgCgSgCgKAAAAIAAAAYAAAAABAKACASYAAAJACALACANYABAMADAOAEAPYABAIACAIACAIYACAIACAJADAIYAFASAGASAHASYAGATAJASAIATYAKASAJASAKASYAKATAMARALASYAMARALARAMAPYALAQAMAPAMAOYALAOAMAMAKAMYALAMAKAKAJAKYAJAJAIAIAGAGYANANAIAHAAAAYAIAHAMAAAIgIYAIgIAAgMgIgIYgBAAAAAAAAgB");
	this.shape_299.setTransform(472.15,369.85,1,1,0,0,0,-1,-1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#F3BEBC").s().p("ACoD+YAAAAgIgHgOgLYgHgGgIgHgJgIYgKgJgKgJgLgKYgLgLgNgLgMgNYgMgNgNgNgNgPYgNgOgLgQgNgPYgGgIgGgJgGgIIgJgMIgJgNYgLgQgLgSgKgRYgKgSgKgRgHgSYgJgRgHgSgGgQYgDgJgDgIgDgIYgCgIgDgHgCgIYgEgPgEgOgDgMYgCgMgDgLgBgJYgDgSgBgKAAAAIAAAAYAAAAABAKABASYABAJACALACANYABAMAEAOADAQYABAHADAIACAIYACAIACAJADAJYAGARAFASAIASYAHASAJATAIASYAKATAJASALASIAIANIAJANYAGAJAFAJAGAJYAMAQAMARAMAQYALAPANAPAMAOYALANAMANALALYALAMAKAKAJAJYAJAKAIAHAHAGYANANAIAHAAAAYAIAIAMgBAIgIYAIgIgBgNgIgHYAAAAAAgBgBAA");
	this.shape_300.setTransform(473.45,371.25,1,1,0,0,0,-1,-1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#F3BEBC").s().p("ACtD8YAAAAgIgHgOgLYgHgGgJgHgKgIYgJgIgLgJgLgLYgLgKgNgLgMgNYgNgMgNgNgNgPYgNgOgMgPgNgQYgHgIgGgIgGgIIgJgMIgJgNYgGgJgGgIgFgIYgGgIgFgJgGgJYgFgIgEgJgFgJYgFgJgFgJgEgIYgJgSgHgRgGgQYgEgJgCgIgDgIYgDgIgDgHgCgIYgEgPgFgOgCgMYgDgMgDgLgBgJYgDgSgBgKAAAAIAAAAYAAAAABAKACASYAAAJACALACANYACAMAEAOADAQYACAHACAIACAIYADAJACAIADAJYAGARAGASAIASYADAJAEAJAFAJYAEAKAEAJAFAJYAFAJAFAKAFAIYAFAJAGAJAFAJIAJAOIAIANYAGAIAGAJAGAJYAMAQANARAMAPYAMAQAMAOAMANYAMAOANAMAKAMYALALALAKAJAJYAKAKAIAHAHAGYANAMAIAHAAAAYAIAIANgBAHgIYAIgIgBgNgIgHYAAgBgBAAAAAA");
	this.shape_301.setTransform(474.8,372.65,1,1,0,0,0,-1,-1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#F3BEBC").s().p("ACyD6YAAAAgJgHgOgLYgHgFgJgHgKgIYgJgIgLgJgMgKYgLgLgNgLgNgMYgNgNgNgMgNgPYgOgOgMgPgNgPYgHgIgGgIgHgIYgGgIgGgIgGgJYgGgIgHgJgFgHYgGgJgFgJgGgIYgFgJgFgJgFgIYgDgFgCgEgCgEYgDgFgCgEgCgFYgJgRgHgRgIgRYgDgIgDgIgDgIYgDgIgDgHgCgIYgEgPgFgOgCgMYgDgNgDgKgBgJYgEgSgBgLAAAAIAAAAYAAAAABALACASYABAJACALACANYACAMAEAOADAQYACAHACAIADAIYACAJADAIADAJYAGARAGASAIASYACAEACAFACAFYADAEACAFACAEYAFAJAEAKAFAJYAFAJAFAJAFAIYAGAKAGAIAFAJYAGAJAGAJAGAJYAGAIAGAJAGAIYANARAMAQAMAPYANAQANAOAMANYANAOAMAMALALYALAMALAJAKAJYAJAKAJAHAHAGYANAMAIAHAAAAYAJAHAMgBAIgIYAHgIgBgNgIgHYgBgBAAAAAAAA");
	this.shape_302.setTransform(476.1,374.05,1,1,0,0,0,-1,-1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#F3BEBC").s().p("AC2D4YAAAAgIgHgPgLYgHgFgJgHgKgIYgKgIgLgIgMgLYgLgKgNgLgNgMYgNgMgOgNgOgOYgNgOgNgOgNgQYgHgHgHgJgGgHYgHgIgGgIgGgJYgHgIgGgJgGgHYgGgJgFgIgGgJYgGgIgEgJgGgJYgCgEgDgEgCgFYgDgEgCgEgCgFYgEgJgFgIgEgIYgEgJgEgIgDgJYgEgIgDgIgDgIYgDgIgDgHgCgIYgFgPgFgOgCgMYgDgMgEgLgBgJYgDgSgCgLAAAAIAAAAYAAAAABALACASYABAJADALACANYACAMAEAOAEAQYABAIADAHADAJYACAIADAIADAJYADAIAEAJADAJYADAJAFAJAEAJYACAEACAFACAEYACAFACAFADAEYAEAJAFAKAFAJYAFAJAGAJAFAIYAGAJAGAJAFAJYAGAJAGAIAGAJYAHAIAGAJAGAIYANARANAQAMAPYANAPAOAOAMANYANAOAMALAMAMYALALALAJAKAJYAKAJAIAHAHAGYAOAMAIAHAAAAYAJAHAMgBAHgIYAIgJgBgMgJgIYAAAAAAAAgBAA");
	this.shape_303.setTransform(477.45,375.45,1,1,0,0,0,-1,-1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#F3BEBC").s().p("AC7D2YAAAAgJgHgPgLYgHgFgJgHgKgHYgKgIgLgJgMgKYgMgKgOgKgNgMYgNgNgOgMgOgOYgHgHgHgHgHgHYgGgHgHgIgGgHYgIgIgGgIgHgIYgGgIgHgIgGgIYgHgIgGgJgGgHYgGgIgGgJgGgIYgGgJgFgJgFgIYgDgFgCgEgDgEYgCgEgDgFgCgEYgFgJgEgIgFgJYgEgIgDgJgEgIYgEgIgDgIgDgIYgDgIgEgHgCgIYgFgPgFgNgDgNYgDgMgDgLgBgJYgEgSgCgLAAAAIAAAAYAAAAABALADASYABAJADALACANYACANAEAOAEAPYACAIADAHADAJYACAIADAIADAJYAEAIADAJAEAJYADAJAFAJAEAJYACAEACAFACAEYACAFADAEACAFYAFAJAFAJAFAJYAGAJAFAJAGAIYAGAJAFAJAGAJYAGAJAHAIAGAJYAHAIAGAJAGAIYAHAIAHAIAGAIYAHAIAHAHAFAIYAOAPANAOANANYANANANAMALALYAMALALAJAKAJYAKAJAJAHAHAGYAOALAIAHAAAAYAJAHAMgBAHgJYAHgIgBgNgIgHYgBAAAAAAAAAA");
	this.shape_304.setTransform(478.75,376.85,1,1,0,0,0,-1,-1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#F3BEBC").s().p("ADADzYAAAAgJgGgPgKYgIgGgJgGgKgIYgKgIgMgIgMgKYgMgKgOgKgNgMYgOgMgOgMgOgOYgHgHgHgGgIgIYgFgHgIgHgHgIYgHgHgHgIgGgIYgHgIgHgHgHgJYgGgIgHgIgGgHYgGgJgGgIgGgJYgGgIgFgJgGgJYgFgIgGgJgEgIYgFgJgFgIgEgJYgEgIgEgJgEgIYgEgIgDgIgEgIYgDgIgDgHgDgIYgFgPgFgNgDgNYgDgMgEgLgBgJYgEgSgCgLAAAAIAAAAYAAAAACALACASYABAJADALADANYACANAEAOAEAPYACAIADAIADAIYADAIACAJAEAIYAEAIADAJAEAJYAEAJAEAJAFAJYAEAJAFAJAFAJYAFAJAEAJAGAJYAGAJAFAJAGAIYAGAJAGAJAGAIYAGAJAHAJAHAIYAGAIAHAJAHAIYAGAIAHAIAHAIYAHAIAGAHAHAHYANAPAOAOANANYANANANALAMALYAMALAMAJAKAJYAKAJAIAGAIAGYAOAMAJAGAAAAYAIAHANgBAHgJYAHgIgCgNgJgHYAAAAAAAAAAgB");
	this.shape_305.setTransform(480.1,378.25,1,1,0,0,0,-1,-1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#F3BEBC").s().p("ADEDxYAAAAgJgGgPgKYgIgFgJgHgKgHYgLgIgLgIgNgKYgMgJgOgLgOgLYgNgMgPgMgOgOYgHgHgIgGgHgHYgGgIgIgHgHgHYgHgHgHgIgHgIYgHgIgHgHgHgJYgGgIgHgIgHgHYgGgJgGgIgGgIYgHgJgFgIgFgJYgGgIgGgJgEgIYgFgJgFgIgFgJYgEgIgEgJgEgIYgFgIgDgIgDgIYgDgIgEgHgCgIYgGgPgFgNgDgNYgEgMgDgLgCgJYgEgTgCgKAAAAIAAAAYAAAAACALACASYACAJADALACANYADANAEAOAFAPYACAIADAIADAIYADAIACAJAEAIYAEAIAEAJADAJYAFAJAEAJAFAJYAEAJAFAJAFAJYAFAJAFAJAGAJYAGAJAGAIAGAIYAGAJAGAJAHAJYAGAJAHAIAGAIYAHAIAHAJAHAIYAHAIAHAIAGAHYAIAIAGAHAHAIYANAPAPANANANYAOAMANAMAMALYAMAKAMAJAKAJYAKAJAJAGAIAGYAOALAJAHAAAAYAIAHANgCAHgJYAHgJgCgMgJgHYAAAAAAAAgBgB");
	this.shape_306.setTransform(481.4,379.6,1,1,0,0,0,-1,-1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#F3BEBC").s().p("ADJDvYAAAAgJgGgQgKYgHgFgKgGgKgIYgLgHgMgIgMgKYgNgJgOgLgOgLYgOgMgPgLgOgOYgIgHgHgGgIgHYgHgHgGgHgIgIYgHgHgHgIgIgHYgHgIgHgIgHgIYgHgIgGgIgHgHYgGgIgHgJgGgIYgHgIgFgJgGgIYgGgJgFgIgFgJYgFgIgFgJgFgIYgFgIgEgJgEgIYgEgIgEgIgDgIYgEgIgDgHgDgIYgFgPgGgNgDgNYgEgMgEgLgBgJYgEgTgDgKAAAAIAAAAYAAAAACALADASYABAJADALADANYADANAFAOAEAPYACAIAEAIADAIYADAIADAJAEAIYADAJAEAIAEAJYAFAJAEAJAFAJYAEAJAGAIAFAJYAFAJAFAKAHAIYAFAJAGAIAGAJYAHAIAGAJAHAJYAGAJAHAIAHAIYAHAIAHAJAHAHYAHAIAHAIAHAIYAIAHAGAIAHAHYAOAPAPAMANANYAOANANALANALYAMAKAMAJAKAJYALAIAJAHAHAFYAPAMAJAGAAAAYAJAHAMgCAHgJYAGgJgBgMgJgHYgBAAAAgBAAAA");
	this.shape_307.setTransform(482.75,381,1,1,0,0,0,-1,-1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#F3BEBC").s().p("ADNDtYAAAAgJgGgQgKYgHgFgKgGgLgHYgKgIgMgIgNgJYgNgJgOgKgOgMYgOgLgQgMgOgNYgIgHgIgGgHgHYgIgHgGgHgIgHYgHgHgIgIgHgIYgHgHgIgIgHgIYgHgIgHgIgGgIYgHgHgGgIgHgJYgHgIgFgIgGgJYgGgIgGgIgFgJYgFgJgFgIgFgIYgFgJgEgIgFgIYgEgIgEgIgDgIYgEgIgEgHgCgIYgGgPgGgNgDgNYgEgMgEgLgCgJYgEgSgCgLAAAAIAAAAYAAAAABALAEASYABAKADAKADANYADANAFAOAFAQYACAHAEAIADAIYADAIADAJAEAIYAEAJAEAIAEAJYAFAJAEAJAFAIYAFAKAFAIAGAJYAFAJAGAJAGAJYAGAJAGAIAGAIYAHAJAGAIAHAJYAHAJAHAIAHAIYAHAIAHAIAHAIYAIAIAHAIAHAHYAHAIAHAHAHAHYAOAPAPAMAOANYAOAMAOALAMALYANAKAMAJALAIYAKAJAJAGAIAGYAPALAJAGAAAAYAJAHAMgCAHgJYAGgJgCgNgJgGYAAAAAAgBgBAA");
	this.shape_308.setTransform(484.05,382.35,1,1,0,0,0,-1,-1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#F3BEBC").s().p("ADSDrYAAAAgJgGgQgJYgIgGgKgFgLgIYgLgHgMgIgNgJYgNgJgOgKgPgLYgOgMgQgLgPgNYgHgHgIgGgIgHYgHgHgHgHgIgHYgIgHgHgHgHgIYgIgIgIgHgHgIYgHgIgHgIgHgIYgHgHgGgIgHgIYgHgIgGgJgGgIYgGgJgGgIgFgIYgFgJgGgIgFgIYgEgJgFgIgEgIYgFgIgEgIgDgIYgEgIgEgHgDgIYgDgHgDgHgCgHYgCgEgBgDgBgDYgBgEgBgDgBgDYgEgMgEgLgCgJYgFgTgCgKAAAAIAAAAYAAAAACAKADATYACAJADALADANYABADABAEABADYABADABAEABADYACAHADAIACAHYADAIADAIADAIYAEAIADAJAEAIYAEAIAEAJAFAJYAEAJAFAIAFAJYAFAJAGAJAFAJYAGAJAGAJAGAIYAGAJAGAIAHAJYAHAIAHAJAGAIYAHAJAIAIAHAIYAHAIAHAIAHAIYAIAIAHAHAIAIYAGAHAIAHAHAHYAPAPAPAMAOANYAOAMAOALANAKYANAKAMAJALAIYAKAJAKAGAHAFYAQALAJAGAAAAYAJAHAMgCAHgJYAGgJgCgNgJgGYgBAAAAgBAAAA");
	this.shape_309.setTransform(485.4,383.7,1,1,0,0,0,-1,-1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#F3BEBC").s().p("ADXDpYAAAAgJgGgRgJYgIgFgKgGgLgHYgLgHgMgIgNgJYgOgJgOgKgPgLYgOgLgQgLgQgNYgHgGgIgHgIgGYgIgHgHgHgIgHIgMgLIgLgLYgHgIgIgHgIgIYgHgIgHgIgHgHYgIgHgGgJgHgIYgDgEgEgEgDgEYgDgEgDgEgDgFYgGgIgHgIgFgIYgGgJgFgIgFgIYgFgJgFgIgFgIYgEgIgEgIgEgIYgEgIgEgHgDgIYgDgHgDgHgDgHYgCgHgDgGgCgHYgEgMgEgLgCgJYgFgTgDgKAAAAIAAAAYAAAAADAKADATYACAKADALAEAMYABAHACAHADAHYACAHADAHACAIYADAHAEAIADAIYADAJAEAIAEAIYAEAJAFAIAEAJYAFAJAFAIAFAJYAFAJAGAJAGAJYADAEADAFADAEYADAEADAFADAEYAHAJAGAIAHAIYAHAJAHAIAGAJYAHAIAIAIAHAIIALAMIAMAMYAHAHAIAIAHAHYAHAIAIAHAHAHYAPAOAQAMAOANYAPALAOALANALYANAJANAJAKAIYALAIAKAGAIAGYAPALAJAGAAAAYAJAGANgCAGgKYAGgJgCgMgJgGYgBgBAAAAAAAA");
	this.shape_310.setTransform(486.75,385.05,1,1,0,0,0,-1,-1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#F3BEBC").s().p("ADbDnYAAAAgJgFgRgKYgIgFgKgFgLgHYgLgHgMgIgOgJYgNgJgPgKgPgKYgPgLgQgLgQgNYgIgGgIgHgIgGYgIgHgHgHgIgHYgIgHgIgHgHgHYgIgIgIgHgIgIYgHgIgHgIgIgHYgHgHgHgIgHgIYgDgFgEgEgDgEYgDgEgDgEgEgEYgGgIgGgIgGgJYgGgIgFgIgGgJYgFgIgEgIgFgIYgDgEgCgEgCgEYgCgEgCgEgCgEYgEgIgEgHgDgIYgDgHgDgHgDgHYgDgHgDgHgCgGYgEgMgEgLgDgJYgEgTgDgKAAAAIAAAAYAAAAACAKAEATYABAJAEALAEANYABAHACAGADAIYADAHACAHADAIYADAHAEAIADAIYACAEACAFABAEYACAEACAEADAEYAEAJAEAIAFAJYAFAJAFAIAFAJYAGAJAGAJAGAIYADAFADAEADAFYADAEADAEADAFYAHAIAGAIAHAJYAIAIAHAIAHAJYAHAIAIAIAHAIYAIAIAHAIAIAHYAIAIAHAIAIAHYAHAHAIAHAIAHYAPAOAQAMAOAMYAPAMAPALANAKYANAJANAJALAIYALAIAJAGAIAGYAQAKAJAGAAAAYAJAGANgCAGgKYAGgJgCgMgKgGYAAAAAAgBgBAA");
	this.shape_311.setTransform(488.05,386.35,1,1,0,0,0,-1,-1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#F3BEBC").s().p("ADgDlYAAAAgKgFgQgKYgJgFgKgFgLgHYgLgHgNgIgOgIYgNgJgPgKgQgKYgPgLgQgLgQgMYgIgHgIgGgIgGYgJgHgGgHgJgHYgQgNgQgPgPgPYgPgQgQgOgOgQYgDgEgEgEgDgEYgDgEgEgEgDgFYgGgIgHgIgGgIYgGgIgFgJgGgIYgFgIgFgIgFgIYgCgEgDgEgCgEYgCgEgCgEgCgEYgEgIgEgHgEgIYgGgPgHgNgEgNYgEgMgFgLgCgJYgFgTgDgKAAAAIAAAAYAAAAACAKAEATYACAKAEALAEAMYADANAGAOAGAQYADAHADAIAEAIYACAFACAEACAEYACAEACAEACAEYAFAJAEAIAFAJYAFAIAFAJAGAJYAFAJAHAIAGAJYADAEADAFADAEYADAFADAEAEAEYANARAPAQAOARYAQAQAOAQAQAPYAIAHAIAIAIAHYAHAHAIAHAIAHYAQAOAQAMAOAMYAQALAOALANAKYAOAJANAJALAIYALAIAKAGAIAFYAQAKAJAGAAAAYAJAGANgCAGgKYAGgJgDgMgJgGYAAgBgBAAAAAA");
	this.shape_312.setTransform(489.4,387.7,1,1,0,0,0,-1,-1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F3BEBC").s().p("ADkDjYAAAAgJgFgRgKYgIgEgLgGgLgHYgMgGgMgIgOgIYgOgJgPgKgQgKYgPgKgRgLgQgNYgIgGgIgGgJgGYgIgHgIgHgHgGYgRgOgQgPgQgOYgQgQgPgOgOgQYgIgIgHgIgGgIYgHgIgGgIgGgIYgGgJgGgIgGgIYgGgIgEgIgFgIYgDgEgCgEgDgEYgCgEgCgEgCgEYgEgIgEgHgEgIYgHgPgHgNgEgNYgEgMgFgLgCgJYgGgTgDgKAAAAIAAAAYAAAAADAKAEATYACAKAEALAEANYADANAHANAFAQYAEAIADAHAEAJYACAEACAEACAEYACAEACAEADAEYAEAJAFAIAFAJYAFAIAGAJAFAJYAGAJAGAIAHAJYAGAJAGAIAHAJYAOAQAPAQAPARYAPAQAQAQAQAPYAIAHAIAIAHAGYAIAHAIAHAIAHYAQAOAQALAPAMYAQAMAPAKANAKYAOAJANAJALAIYALAHAKAGAIAFYARALAJAFAAAAYAJAGANgDAGgJYAGgJgDgNgKgGYAAAAAAAAgBAA");
	this.shape_313.setTransform(490.7,388.7,1,1,0,0,0,-1,-1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#F3BEBC").s().p("ADpDhYAAAAgKgFgRgKYgIgEgLgFgLgHYgMgHgNgHgOgIYgOgJgPgJgQgKYgQgLgQgLgRgMYgRgMgRgMgPgOYgRgNgQgPgRgOYgQgPgQgPgOgPYgPgQgNgRgNgQYgGgIgGgIgGgIYgGgIgFgIgFgIYgLgQgIgQgIgOYgGgPgIgOgEgNYgFgMgEgLgDgJYgGgTgDgKAAAAIAAAAYAAAAADAKAEATYACAKAEALAEANYAEANAHAOAGAPYAHAPAHARAKAQYAFAJAEAJAGAIYAFAIAGAJAFAJYANARAMASAPAQYANARAQAQAPAQYAQAQAQAQAQAOYAQAPAQAOARANYAQANAQAMAQAMYAPALAPALAOAJYAOAJANAJALAHYAMAIAKAGAIAFYARAKAJAFAAAAYAKAGAMgDAGgJYAGgKgDgMgKgGYAAAAgBAAAAAA");
	this.shape_314.setTransform(492,389.7,1,1,0,0,0,-1,-1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#F3BEBC").s().p("ADuDfYAAAAgKgFgRgJYgJgFgLgFgLgHYgMgGgNgHgOgIYgPgJgPgJgQgKYgQgKgRgLgRgMYgRgMgRgMgQgOYgRgNgRgOgRgOYgQgQgQgOgPgPYgPgQgOgQgNgQYgMgRgNgPgKgQYgLgQgIgQgIgOYgHgPgHgOgFgNYgFgMgFgLgDgJYgFgTgEgLAAAAIAAAAYAAAAADALAFATYACAKAEALAEANYAEANAHAOAGAPYAIAPAHARAKAQYAJARAMARAMASYANAQAMASAPARYAOAQAQAQAQAQYAQAQAQAQARAOYAQAPAQANARANYARANAQAMAQAMYAQALAPAKAOAJYAOAJANAJAMAHYAMAIAKAFAIAFYARAKAKAGAAAAYAJAFAMgDAGgJYAGgKgEgMgJgGYAAAAgBAAAAAA");
	this.shape_315.setTransform(493.35,390.75,1,1,0,0,0,-1,-1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F3BEBC").s().p("ADyDdYAAAAgKgFgRgJYgJgFgLgFgLgGYgMgGgOgIgOgIYgOgIgQgJgQgKYgQgKgSgKgRgMYgRgMgSgMgQgNYgSgNgQgOgRgPYgRgPgRgOgPgPYgPgPgOgRgOgPYgMgRgNgPgKgQYgMgQgIgQgJgOYgDgIgEgHgDgHYgEgHgDgGgCgGYgFgNgFgLgDgJYgGgTgEgLAAAAIAAAAYAAAAADALAFATYADAKAEALAEANYACAGADAHADAHYADAHADAIAEAHYAIAPAHARALAQYAJARAMARAMARYANARANASAPAQYAPAQAQAQAQAQYARAQAQAPARAOYARAPAQANARANYARANARAMAQALYAQALAPAKAPAJYAOAJANAJAMAHYAMAHAKAGAJAFYARAJAKAGAAAAYAJAFAMgDAGgJYAFgKgDgMgKgGYAAAAAAAAgBAA");
	this.shape_316.setTransform(494.7,391.75,1,1,0,0,0,-1,-1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#F3BEBC").s().p("AD3DbYAAAAgKgFgSgJYgJgEgLgFgMgGYgMgHgNgHgPgIYgOgIgQgJgRgJYgQgKgRgLgSgLYgRgMgSgMgRgNYgSgNgRgOgRgOYgJgHgIgIgIgHYgJgHgIgHgHgIYgQgPgOgQgOgQYgNgQgNgQgLgQYgLgPgJgQgJgPYgEgHgDgHgEgHYgDgHgEgGgCgHYgFgMgGgLgDgJYgGgTgDgLAAAAIAAAAYAAAAADALAFATYACAKAFALAEANYACAGAEAHADAHYADAHADAIAEAHYAIAPAIARAKAQYAKARAMARANARYANARAOARAPARYAHAHAIAIAIAIYAIAIAIAIAIAIYARAPARAQASAOYARAOARANARANYARANARAMAQALYAQAKAQAKAOAKYAPAIANAIAMAIYAMAHALAFAIAFYASAKAJAFAAAAYAKAGAMgEAGgJYAFgKgDgMgKgGYAAAAgBAAAAAA");
	this.shape_317.setTransform(496,392.7,1,1,0,0,0,-1,-1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#F3BEBC").s().p("AD8DZYAAAAgKgFgSgJYgJgEgMgFgMgGYgMgGgNgHgPgIYgPgIgQgJgRgJYgRgKgRgKgSgLYgRgMgTgLgRgNYgSgNgRgOgSgOYgJgHgIgHgJgIIgMgLIgMgKYgQgPgPgQgOgQYgOgQgNgQgLgQYgMgPgJgQgJgOYgEgIgDgHgEgHYgDgHgEgGgDgGYgFgNgFgLgDgJYgHgTgDgLAAAAIAAAAYAAAAADALAFATYADAKAEALAFANYACAHAEAGADAHYADAHADAIAEAIYAIAPAIAQALARYALAQAMARANARYAOARAOARAPAPIAMANIAMAMYAIAHAIAJAJAHYARAPARAQASAOYAQAOATANARAMYARANASALAQALYARALAPAKAPAJYAPAIAOAIAMAHYAMAHALAGAIAFYASAJAKAFAAAAYAJAGANgEAFgKYAFgJgEgMgJgGYgBAAAAAAAAAA");
	this.shape_318.setTransform(497.35,393.7,1,1,0,0,0,-1,-1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#F3BEBC").s().p("AEBDXYAAAAgLgFgSgIYgJgFgLgEgMgHYgNgGgOgGgPgIYgPgIgQgJgRgJYgRgJgSgLgSgLYgRgLgTgLgRgNYgJgHgKgGgJgHYgJgHgJgGgJgHYgJgHgIgIgJgHIgMgLIgNgKYgIgIgIgHgIgIYgHgIgHgIgIgHYgNgQgOgQgLgQYgMgPgKgQgJgOYgEgIgEgHgEgHYgDgHgEgGgDgGYgFgNgGgLgDgJYgGgTgEgLAAAAIAAAAYAAAAADALAGATYACAKAFALAFANYACAHAEAGADAHYADAIAEAHAEAIYAIAPAJAQALARYAKAQAOARANARYAHAIAHAIAHAJYAHAIAIAIAIAIIAMAMIAMAMYAJAHAIAJAJAHYAIAIAJAHAJAIYAJAHAJAHAJAHYAQAOATANARAMYASANASALAQALYARAKAQAKAPAJYAPAIAOAIAMAHYANAHAKAFAJAFYASAJAKAGAAAAYAKAFAMgEAFgKYAFgKgEgMgJgFYgBAAAAAAAAAA");
	this.shape_319.setTransform(498.65,394.7,1,1,0,0,0,-1,-1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#F3BEBC").s().p("AEFDVYAAAAgKgFgTgIYgJgEgLgFgNgGYgMgGgOgHgPgHYgPgIgRgJgRgJYgRgJgSgKgTgLYgSgLgTgLgSgNYgIgGgKgHgJgGYgJgHgJgHgJgHYgJgGgJgIgJgHIgNgLYgEgCgEgEgEgEYgIgIgJgHgIgIYgHgHgIgIgHgIYgIgIgGgIgHgHYgHgIgGgIgGgIYgMgPgKgQgJgOYgFgHgDgIgEgHYgEgHgEgGgDgGYgFgNgGgLgDgJYgHgTgEgLAAAAIAAAAYAAAAADALAGATYADAKAFALAFANYACAHAEAGADAIYAEAHADAHAFAIYAIAPAJAQAMAQYAFAJAGAIAHAIYAGAJAGAIAHAJYAHAIAIAIAHAIYAHAJAJAIAIAHYAEAEAEAEAEAEIAMAMYAJAHAIAJAJAHYAJAHAJAIAJAHYAJAIAJAGAJAHYARAOATANASAMYASAMASALAQALYASAKAQAKAPAJYAPAIAOAIANAHYAMAGALAGAJAEYASAJAKAGAAAAYAKAFAMgEAFgKYAFgKgEgMgKgFYAAAAgBAAAAAA");
	this.shape_320.setTransform(500,395.7,1,1,0,0,0,-1,-1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#F3BEBC").s().p("AEKDTYAAAAgLgFgSgIYgKgEgLgFgNgFYgMgGgPgHgPgHYgPgIgRgIgSgJYgRgJgSgKgTgLYgSgLgTgLgTgNYgIgGgKgGgJgHYgJgGgKgHgJgHYgJgGgJgIgJgHYgJgHgJgHgIgHYgIgHgJgHgIgIYgIgIgHgIgIgHYgHgIgHgIgHgIYgDgEgEgDgDgEYgDgEgDgEgDgEYgGgIgHgHgFgIYgFgIgFgHgEgHYgFgHgEgIgEgHYgEgHgEgGgDgGYgFgNgGgLgEgJYgHgTgEgLAAAAIAAAAYAAAAAEALAGATYADAKAFALAFANYADAHADAGAEAIYADAHAEAHAEAIYAFAHAEAIAFAIYAFAIAGAIAFAIYADAFADAEADAEYADAEADAEAEAEYAGAIAGAJAIAIYAHAIAHAJAIAIYAIAIAIAIAIAHYAIAJAJAHAIAIYAJAIAIAIAKAHYAJAHAJAIAJAHYAJAHAJAHAKAHYARAOATAMASAMYASAMASALARALYASAKAQAJAPAJYAQAIAOAIANAGYAMAHALAFAJAFYASAJALAFAAAAYAKAFAMgEAFgKYAFgKgEgMgKgFYgBAAAAAAAAAA");
	this.shape_321.setTransform(501.3,396.75,1,1,0,0,0,-1,-1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#F3BEBC").s().p("AEODRYAAAAgKgFgTgIYgJgEgMgEgNgGYgMgGgPgGgPgHYgQgIgRgIgSgJYgRgJgSgKgTgKYgTgMgUgKgTgNYgIgGgKgGgJgGYgKgHgJgHgJgGYgKgHgJgHgJgHYgJgHgJgHgIgHYgJgHgJgHgIgIYgIgIgIgHgHgIYgIgHgHgIgHgIYgEgEgDgEgDgDYgEgEgDgEgDgEYgGgIgGgHgGgIYgFgIgFgHgFgHYgFgHgEgIgEgHYgEgGgEgHgDgGYgGgNgGgLgDgJYgIgTgEgLAAAAIAAAAYAAAAAEALAGATYADAKAGALAFANYADAHADAHAEAHYAEAHADAIAFAHYAEAHAFAIAFAIYAFAIAGAIAGAIYADAFADAEADAEYADAEADAEAEAEYAGAIAHAJAHAIYAIAIAHAIAIAJYAIAIAIAHAJAIYAIAIAJAHAJAIYAIAIAJAIAJAHYAKAHAJAHAJAIYAJAHAKAGAJAHYASAOATAMASAMYATAMASALASAKYARAKARAJAPAJYAQAIAOAHANAHYANAHALAFAJAEYATAJAKAFAAAAYAKAFAMgEAFgKYAFgKgFgMgKgFYAAAAAAAAgBAA");
	this.shape_322.setTransform(502.65,397.75,1,1,0,0,0,-1,-1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#F3BEBC").s().p("AETDPYAAAAgLgFgTgIYgJgDgMgFgNgGYgMgFgPgHgQgHYgQgHgRgIgSgJYgRgJgTgKgTgKYgKgFgJgGgKgFYgFgDgFgDgFgCYgEgDgFgDgFgDYgJgHgKgGgJgGYgKgGgJgHgKgGYgKgHgJgHgJgHYgJgHgJgHgJgGYgJgIgIgHgJgHYgIgIgIgIgIgHYgIgHgHgJgHgHYgEgEgDgEgEgEYgDgEgDgDgDgEYgGgIgHgHgFgIYgGgIgFgHgFgHYgFgHgEgIgEgHYgEgGgFgHgDgGYgGgNgGgLgEgJYgHgTgFgLAAAAIAAAAYAAAAAEALAHATYADAKAFALAGAOYADAGAEAHADAHYAEAHAEAIAFAHYAEAIAFAHAFAIYAFAIAHAIAFAIYADAEADAFAEAEYADAEADAEAEAEYAHAIAGAJAIAIYAIAIAHAIAIAIYAIAIAJAIAIAHYAJAIAJAHAJAIYAJAIAJAIAJAHYAJAHAKAHAJAHYAKAHAJAHAKAGYAFAEADADAFADYAFADAFAEAFADYAJAGAKAGAJAGYATALASALASAKYASAKARAJAPAJYAQAIAPAHANAHYANAGALAFAJAEYATAJAKAFAAAAYAKAFAMgEAFgKYAFgKgFgMgKgFYAAAAAAAAgBAA");
	this.shape_323.setTransform(503.95,398.75,1,1,0,0,0,-1,-1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#F3BEBC").s().p("AEYDMYAAAAgLgEgTgHYgKgEgMgFgNgFYgNgGgOgGgQgHYgQgHgSgIgSgJYgSgIgTgKgTgKYgKgFgJgGgKgFYgKgGgKgFgKgGYgJgGgKgGgJgGYgKgHgKgGgJgHYgKgGgKgHgJgHYgJgHgKgHgIgGYgJgIgJgHgJgHYgIgIgIgHgIgIYgJgHgGgIgIgIYgEgDgDgEgEgEYgDgEgDgEgEgEYgGgHgHgIgFgHYgGgIgFgHgFgHYgGgHgEgIgEgGYgEgHgEgHgEgGYgGgNgGgLgEgJYgIgTgFgLAAAAIAAAAYAAAAAEALAHAUYAEAJAFALAGAOYADAGAEAHAEAHYAEAHADAIAFAHYAFAIAFAHAGAIYAFAIAGAIAGAIYADAEADAFAEAEYADAEADAEAEAEYAHAIAHAIAIAIYAIAIAHAIAIAJYAJAHAIAHAJAIYAJAIAJAHAJAIYAJAIAJAHAKAHYAJAHAKAIAJAHYAKAGAKAHAJAHYAJAGAKAHAKAGYAJAGAKAGAJAGYAUALASALASAKYASAJARAJAQAJYAQAHAPAIANAGYANAGALAFAKAFYASAIALAFAAAAYAKAFAMgFAFgKYAEgKgEgLgKgFYAAAAgBAAAAgB");
	this.shape_324.setTransform(505.3,399.75,1,1,0,0,0,-1,-1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#F3BEBC").s().p("AEcDLYAAAAgLgFgTgHYgKgEgMgEgNgGYgNgFgPgGgQgHYgQgHgSgIgSgIYgSgJgTgKgUgJYgKgGgKgFgKgFYgKgGgKgFgKgGYgJgGgKgGgKgGYgJgGgKgHgKgGYgKgGgKgHgJgHYgJgHgKgHgJgGYgJgHgJgIgJgHYgIgHgJgIgIgHYgIgHgHgIgIgIYgHgIgIgHgGgIYgHgHgGgIgGgHYgGgIgFgHgGgHYgFgHgEgIgFgHYgEgGgEgHgEgGYgGgNgGgLgFgJYgIgTgEgLAAAAIAAAAYAAAAAEALAHATYAEAKAFALAGAOYADAGAEAHAEAHYAEAHAEAIAFAHYAFAIAFAHAGAIYAFAIAHAIAGAIYAGAJAHAHAHAIYAHAIAHAJAIAIYAIAIAIAIAIAIYAJAIAJAHAJAHYAIAIAKAHAJAIYAJAIAKAHAJAHYAKAHAKAHAJAHYAKAHAKAGAKAHYAJAHAKAGAJAGYAKAGAKAGAKAGYATALATAKASAKYASAKASAJAQAIYAQAHAPAIANAGYANAGAMAFAJAEYATAJALAFAAAAYAKAEAMgEAFgKYAEgLgFgLgKgFYAAAAAAAAgBAA");
	this.shape_325.setTransform(506.6,400.7,1,1,0,0,0,-1,-1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#F3BEBC").s().p("AEhDJYAAAAgLgFgUgHYgJgEgMgEgOgFYgNgGgPgGgRgGYgQgHgRgIgTgIYgTgJgTgJgUgKYgTgKgVgKgUgMYgJgGgLgGgKgGYgKgGgKgGgKgHYgKgGgJgHgKgGYgKgHgKgHgJgGYgJgHgJgHgJgHYgIgIgJgHgIgIYgJgHgHgIgIgHYgHgIgIgHgHgIYgGgIgHgHgGgHYgGgIgFgHgGgHYgFgHgFgIgEgGYgFgHgEgHgEgGYgGgNgHgLgEgJYgJgTgEgLAAAAIAAAAYAAAAAEALAHATYAEAKAGAMAGANYADAGAEAHAFAHYAEAHAEAIAFAHYAFAIAFAHAGAIYAGAIAGAIAGAIYAHAIAHAIAHAIYAIAIAHAJAIAHYAIAIAIAIAJAIYAIAIAJAHAJAIYAJAIAKAHAJAHYAKAIAJAHAKAHYAKAHAKAHAJAHYALAGAKAHAKAGYASANAVAMATALYAUALATALASAJYATAKARAJARAIYAQAHAPAHAOAGYANAHAMAEAJAFYATAIALAFAAAAYAKAEAMgFAFgKYAEgKgFgMgKgEYAAAAAAAAgBAA");
	this.shape_326.setTransform(507.9,401.7,1,1,0,0,0,-1,-1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#F3BEBC").s().p("AEmDHYAAAAgLgEgUgHYgKgEgMgEgOgGYgNgFgPgGgRgGYgRgHgRgIgTgIYgTgIgTgKgVgJYgTgKgVgKgVgMYgJgGgKgGgLgFYgKgGgKgHgKgGIgPgKIgPgKYgKgHgKgGgJgGYgJgHgKgHgJgHYgJgIgIgHgJgHYgIgIgIgHgIgIYgHgHgIgHgHgIYgHgIgGgHgHgIYgGgHgGgIgFgHYgGgHgFgHgEgHYgEgGgFgHgEgGYgHgNgGgLgFgJYgIgUgFgLAAAAIAAAAYAAAAAEAMAIATYAEAKAGALAGAOYAEAGAEAHAEAHYAEAHAEAIAGAHYAFAHAFAIAGAIYAGAIAHAIAGAIYAGAIAIAIAHAIYAIAIAHAIAJAIYAIAIAIAIAJAIYAJAHAJAHAJAIYAJAIAKAGAJAIIAPALIAPAKYAKAHAKAHAKAHYAKAHAKAGAKAGYATANAVAMAUALYAUALATAKATAKYASAJASAJARAIYAQAHAPAHAOAGYANAGAMAFAKAEYATAIALAFAAAAYALAEALgEAFgLYAEgKgFgMgKgEYAAAAgBAAAAAA");
	this.shape_327.setTransform(509.25,402.75,1,1,0,0,0,-1,-1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#F3BEBC").s().p("AErDFYAAAAgMgEgUgHYgKgEgMgEgOgFYgNgFgQgGgRgHYgQgGgSgIgTgIYgTgIgUgJgVgJYgUgLgVgJgVgMYgKgFgJgGgLgGYgKgGgKgGgLgGIgPgKIgPgKYgKgHgKgGgKgHYgJgGgJgHgKgHYgJgHgIgIgJgHYgJgHgIgIgIgHYgIgIgIgHgGgHYgHgIgHgHgHgIYgGgHgGgHgFgIYgGgGgFgIgFgHYgEgGgFgHgEgGYgHgNgGgLgFgJYgJgUgFgLAAAAIAAAAYAAAAAEAMAIATYAFAKAGAMAGANYAEAGAEAHAEAHYAEAHAFAIAGAHYAFAIAFAHAGAIYAGAIAHAIAHAIYAGAIAIAIAHAIYAIAIAIAIAIAIYAJAHAIAIAJAIYAJAIAJAGAKAIYAJAIAKAHAJAHIAPALIAPAKYAKAHAKAHALAHYAKAGAKAHALAGYATANAVALAUALYAUAKAUALATAJYATAJARAJARAHYARAIAPAHAOAGYAOAGAMAEAKAEYATAIALAFAAAAYALAEALgFAEgKYAFgKgFgMgKgEYgBAAAAAAAAAA");
	this.shape_328.setTransform(510.6,403.75,1,1,0,0,0,-1,-1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F3BEBC").s().p("AEvDDYAAAAgLgEgVgHYgKgEgMgEgOgFYgOgFgPgGgRgGYgRgGgSgIgUgIYgTgIgUgJgVgJYgUgKgVgKgVgLYgLgFgJgGgLgGYgLgGgKgGgKgGIgQgJIgPgKYgKgHgKgGgKgHYgKgGgJgHgKgHYgJgHgJgHgIgHYgFgEgEgEgEgDYgFgEgEgEgEgEYgHgHgJgHgHgIYgHgHgHgIgGgHYgHgHgGgIgFgHYgDgDgDgEgDgDYgCgEgDgDgCgEYgFgGgEgHgFgGYgHgNgHgLgFgJYgJgUgFgLAAAAIAAAAYAAAAAFAMAIAUYAEAJAHAMAGANYAEAGAEAHAFAHYACAEACADADAEYACAEADADADAEYAFAIAGAHAGAIYAGAIAHAIAHAIYAGAIAIAHAIAIYAEAEAEAEAEAEYAEAEAEAEAEAEYAJAIAIAIAJAHYAKAIAJAGAJAIYAKAIAKAHAKAHIAPALIAPAKYAKAHAKAHALAGYAKAGALAHAJAGYAVAMAVALAUAMYAVAKAUAKATAJYATAJASAJARAHYARAIAQAGANAGYAOAGAMAFAKAEYAUAIALAEAAAAYALAEALgFAEgKYAEgKgFgMgKgEYAAAAgBAAAAAA");
	this.shape_329.setTransform(511.9,404.75,1,1,0,0,0,-1,-1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#F3BEBC").s().p("AE0DBYAAAAgMgEgUgHYgKgDgNgEgOgFYgOgFgPgGgSgGYgRgGgSgIgUgIYgTgHgUgJgVgJYgVgKgWgKgVgLYgLgFgJgGgLgFYgLgGgKgGgLgGYgKgGgLgHgKgGYgKgHgLgGgJgHYgKgGgKgHgKgHYgJgGgJgIgJgHYgEgEgFgDgEgEYgEgDgEgEgFgEYgIgHgIgHgHgIYgHgHgIgIgGgHYgHgHgGgIgGgHYgDgDgDgDgCgEYgDgEgCgDgDgDYgFgHgEgHgFgGYgHgNgHgLgFgJYgJgUgGgLAAAAIAAAAYAAAAAFAMAIAUYAFAJAGAMAHANYAEAHAFAGAEAHYACAEADAEACADYADAEACAEADADYAGAIAGAHAGAIYAGAIAHAIAHAIYAHAIAIAHAIAIYAEAEAEAEAEAEYAEAEAEAEAFAEYAJAHAIAIAKAIYAJAGAJAIAKAHYAKAIAKAHAKAHYAKAHAKAHALAHYAKAGAKAHALAHYALAGAKAGAKAGYAVAMAVALAVALYAVAKAUALATAJYAUAIASAJARAHYARAHAQAHAOAGYAOAGAMAEAKAEYAUAIALAEAAAAYALAEALgFAEgKYAEgKgFgMgKgEYAAAAgBAAAAAA");
	this.shape_330.setTransform(513.25,405.75,1,1,0,0,0,-1,-1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#F3BEBC").s().p("AE5C/YAAAAgMgEgVgHYgKgDgNgEgOgFYgOgFgQgFgRgGYgRgHgTgHgUgIYgTgHgVgJgVgJYgVgJgWgKgVgLYgLgFgKgGgLgFYgLgGgKgGgLgGYgWgMgUgNgVgNYgKgGgKgHgJgGYgKgHgJgIgJgHYgFgDgEgEgFgDYgEgEgEgEgEgDYgJgIgIgGgHgIYgIgIgHgHgHgHYgHgHgGgIgGgHYgDgDgDgEgDgDYgCgDgDgEgCgDYgFgHgFgHgFgGYgHgNgHgLgGgJYgJgTgGgMAAAAIAAAAYAAAAAFAMAJAUYAFAJAGAMAHANYAEAHAFAGAEAHYADAEACAEADADYACAEADAEADADYAGAIAGAIAGAHYAHAIAHAHAHAIYAHAJAIAHAIAIYAEAEAEAEAEAEYAFADAEAEAFAEYAJAIAIAIAKAHYAJAGAKAIAKAHYAUAOAUAPAVANYALAHAKAHALAGYALAGALAGAKAGYAVAMAWALAUALYAWAKAUAKATAJYAUAIASAJASAHYARAHAQAHAOAFYAOAGANAEAKAEYAUAIAMAEAAAAYAKAEAMgFADgKYAEgLgFgLgKgEYAAAAgBAAAAAA");
	this.shape_331.setTransform(514.55,406.75,1,1,0,0,0,-1,-1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#F3BEBC").s().p("AE9C9YAAAAgLgEgVgGYgLgEgMgEgPgEYgOgFgQgGgSgGYgRgGgTgHgUgHYgUgIgUgJgWgIYgVgKgWgJgWgLYgVgKgWgLgWgNYgWgLgUgNgVgNYgUgNgVgNgSgOYgEgEgFgDgEgEYgFgEgEgDgEgEYgJgHgIgHgIgHYgHgIgIgHgHgHYgHgHgGgIgGgHYgDgDgDgEgDgDYgDgEgCgDgDgEYgFgGgFgHgEgGYgIgNgIgLgFgJYgKgUgFgLAAAAIAAAAYAAAAAFAMAIAUYAFAJAHAMAIANYAEAGAEAHAFAHYACAEADAEACADYADAEADADADAEYAGAHAGAIAGAIYAHAHAHAIAIAIYAHAIAIAHAIAIYAFAEAEAEAEAEYAEAEAFAEAEADYASAQAUANAUAPYAUAOAUAPAWANYAVANAWAMAVAMYAWAMAWALAVALYAVAJAVALATAIYAUAJATAIARAHYASAHAQAGAOAGYAPAGAMAEAKAEYAVAHAMAFAAAAYAKADALgFAEgKYAEgLgFgLgLgEYAAAAAAAAgBAA");
	this.shape_332.setTransform(515.85,407.7,1,1,0,0,0,-1,-1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#F3BEBC").s().p("AFCC7YAAAAgMgEgVgGYgLgDgMgEgPgFYgOgEgRgGgRgGYgSgGgTgHgUgHYgUgHgVgJgWgJYgVgJgXgJgWgLYgVgKgXgLgVgMYgXgLgVgOgVgMYgUgNgVgNgSgOYgFgEgEgDgFgEYgEgDgFgEgEgDYgJgIgIgHgIgHYgIgHgHgIgHgHYgIgHgGgHgGgHYgDgEgDgDgDgDYgDgEgDgDgCgEYgGgHgFgGgEgGYgJgNgHgLgFgJYgKgUgGgLAAAAIAAAAYAAAAAFALAJAUYAFAKAHAMAIANYAEAGAFAHAFAHYACAEADADACAEYADAEADADADAEYAGAHAGAIAHAIYAHAHAHAIAIAIYAHAIAJAHAIAIYAEAEAEAEAFAEYAEADAFAEAEAEYASAPAUAOAUAOYAVAOAVAPAWAMYAVAOAXAMAVAMYAWALAWALAVAKYAWAKAUAKAUAIYAVAJASAIASAHYASAHAQAGAPAGYAOAFANAEAKAEYAVAIALAEAAAAYALAEALgGAEgKYAEgLgGgLgKgEYAAAAgBAAAAAA");
	this.shape_333.setTransform(517.2,408.75,1,1,0,0,0,-1,-1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F3BEBC").s().p("AFHC5YAAAAgMgEgWgGYgKgDgNgEgPgEYgOgFgRgFgSgGYgSgGgTgHgUgHYgVgHgVgJgWgIYgVgJgXgKgWgKYgWgKgXgLgWgMYgWgLgWgNgVgMYgVgNgVgNgSgOYgKgHgJgGgJgIYgJgHgIgHgIgHYgIgIgIgHgHgHYgIgHgGgHgGgHYgEgEgDgDgDgDYgDgEgCgDgDgEYgFgHgFgGgFgGYgJgNgHgLgGgJYgKgUgGgLAAAAIAAAAYAAAAAFALAKAUYAFAKAHAMAIANYAEAGAFAHAFAHYADAEACAEADADYADAEADADADAEYAGAHAGAIAHAIYAHAHAIAIAHAIYAIAHAJAIAIAHYAIAIAKAIAJAHYASAQAVANAUAOYAVAOAVAOAXANYAVANAXAMAVAMYAXALAWALAWAKYAVAJAVAKAVAJYAUAIATAIASAHYASAGAQAHAPAFYAPAFAMAFALADYAVAIAMAEAAAAYAKAEALgGAEgKYAEgLgGgLgKgEYAAAAgBAAAAAA");
	this.shape_334.setTransform(518.55,409.75,1,1,0,0,0,-1,-1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#F3BEBC").s().p("AFMC3YAAAAgNgEgVgGYgLgDgNgEgPgEYgOgFgRgFgSgFYgSgGgUgHgUgHYgVgHgVgIgWgJYgWgIgXgKgXgKYgWgKgXgKgWgMYgXgLgWgNgWgMYgVgNgVgMgTgOYgTgOgSgPgRgNYgIgIgIgHgHgHYgIgHgGgHgHgHYgNgOgKgOgKgMYgJgNgHgLgHgJYgKgUgGgLAAAAIAAAAYAAAAAFALAKAVYAGAJAGAMAJANYAJANAKAPANAOYAGAHAGAIAHAHYAIAIAHAIAIAHYAQAPARAQAUAPYASAPAVANAVAOYAVAOAWAOAWAMYAWAOAXALAWAMYAXALAWALAWAKYAWAJAVAKAVAIYAUAIAUAIASAHYASAGARAGAOAGYAPAFANAEALAEYAVAHAMAEAAAAYAKAEAMgGADgLYAEgKgGgLgKgEYgBAAAAAAAAAA");
	this.shape_335.setTransform(519.85,410.75,1,1,0,0,0,-1,-1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#F3BEBC").s().p("AFQC1YAAAAgMgEgWgGYgLgDgNgDgPgFYgPgEgQgFgTgGYgSgFgTgHgVgHYgVgHgWgIgWgIYgXgJgWgJgYgKYgWgKgXgKgXgMYgXgLgWgMgWgNYgVgMgWgMgTgOYgUgNgSgPgRgOYgIgHgIgHgIgHYgIgHgGgIgHgGYgOgOgKgOgKgMYgJgNgIgLgGgJYgLgUgGgLAAAAIAAAAYAAAAAGALAKAVYAGAJAGAMAJANYAKANAJAPAOAOYAGAHAGAIAIAHYAHAIAIAHAIAIYARAPARAQAUAOYASAPAWANAVAOYAVAOAWAOAXAMYAWANAYALAVAMYAXALAXAKAWAKYAXAJAVAKAVAIYAVAIATAIATAGYASAHARAGAPAFYAOAFANAEALAEYAVAHANAEAAAAYAKAEAMgGADgLYADgKgFgLgLgEYAAAAAAAAgBAA");
	this.shape_336.setTransform(521.15,411.75,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_59}]},510).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[]},1).to({state:[{t:this.shape_195}]},151).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[]},1).to({state:[]},95).wait(7));

	// tail
	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#F3BEBC").s().p("AhWjWYAAAAACAIADAMYABAHACAIADAJYACAJACAKADALYADALAEAMADANYAEANAEANAEAOYAFANAEAPAFAOYAFAOAFAOAFAOYAFAOAGAPAGANYAFAOAFAOAGANYAGANAGANAFAMYAGAMAGAKAFALYAGAKAEAJAFAIYAFAIAEAHADAGYAHALAEAHAAAAIAAAAYAAAAgDgHgGgMYgDgGgEgHgEgJYgEgIgEgKgEgKYgFgLgFgLgEgMYgFgMgFgNgEgNYgGgOgDgOgFgOYgFgOgEgPgEgOYgDgOgEgOgEgPYgDgOgDgPgDgNYgEgOgCgNgDgNYgCgNgDgMgCgLYgCgLgBgKgCgJYgBgKgCgIgBgGYgCgNgBgIAAAAYgCgLgKgHgLACYgLABgHALABALYABAAAAABAAAA");
	this.shape_337.setTransform(638.95,459.65,1,1,0,0,0,1,1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#F3BEBC").s().p("AhDjAYAAAAAFAaAIAoYAFAUAGAXAGAZYADAMADANAEANYACAHABAGACAHYACAFACAHACAGYAEANAEANAFANYADAMAFANAEAMYAEAMAFALAFALYACAFACAGACAFYACAFADAEACAFYAFAJAEAJADAHYAFAHADAGADAFYAGALAEAFAAAAIAAAAYAAAAgDgGgFgKYgDgGgDgGgDgIYgDgHgDgJgEgJYgCgFgCgFgCgFYgBgFgCgGgCgFYgDgLgEgMgDgMYgDgMgEgNgDgNYgDgMgCgOgDgNYgCgGgBgHAAgGYgCgGgBgHgBgGYgCgNgCgNgDgMYgDgZgDgYgDgUYgFgogDgbAAAAYgBgLgKgIgLACYgLABgIAKABALYAAAAAAABABAB");
	this.shape_338.setTransform(637.6,455.55,1,1,0,0,0,1,1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#F3BEBC").s().p("AgxirYAAAAAFAYAGAjYADARAEAVAEAWYAEAWAGAXAFAXYADALADAMADALYABAGABAGABAFYABAGACAFACAGYADAKADALADAJYADAKAEAJADAJYADAIADAIADAGYACAEABADABADYACACABADACACYAFAJADAFAAAAIAAAAYAAAAgDgFgEgKYgBgCgBgDgBgCYgBgDgBgEgBgDYgDgHgCgIgDgIYgCgJgCgJgCgKYgCgKgCgKgCgLYgBgGgBgFgBgGYgBgGgBgFgBgGYgBgMgCgLgBgMYgDgWgDgYgBgWYgCgWgCgVgBgRYgCgkgCgYAAAAYgBgLgJgIgLABYgLABgJAJABALYAAABAAABAAAA");
	this.shape_339.setTransform(636.2,451.45,1,1,0,0,0,1,1.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#F3BEBC").s().p("AgvitYAAAAAEAXAHAkYADARAEAVAFAWYACALADAMACALYADAMACALADAMYADALADAMADALYACAMADALADALYADALADAKADAKYAEAKACAKADAIYADAJADAHADAHYACAHADAGACAFYAEAKADAFAAAAIAAAAYAAAAgCgGgDgKYgCgFgCgGgCgHYgBgHgCgIgDgJYgCgIgBgKgDgKYgCgKgCgLgCgLYgBgLgCgLgCgMYgCgLgBgMgCgMYgCgLgBgMgBgMYgCgLgBgMgBgLYgCgWgBgVgCgSYgDgkgCgYAAAAYAAgLgKgIgLABYgLABgIAKAAALYABAAAAABAAAB");
	this.shape_340.setTransform(635.9,450.1,1,1,0,0,0,1,1.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#F3BEBC").s().p("AguiwYAAAAAFAYAHAkYACAJACAJACALYACAKACALADALYAFAWAGAYAFAXYADALACAMADAMYADAMADALADALYADALADALACAKYADAKADAJADAJYALAjAHAXAAAAIAAAAYAAAAgFgYgHgkYgCgIgCgKgCgKYgBgLgCgLgCgLYgCgLgBgMgCgLYgCgMgCgMgBgMYgDgXgDgYgDgWYgCgMAAgLgBgKYgCgKAAgKAAgJYgEglgCgYAAAAYgBgLgKgIgLABYgLABgIAKABALYAAABAAABAAAA");
	this.shape_341.setTransform(635.65,448.75,1,1,0,0,0,1,1.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#F3BEBC").s().p("AgtiyYAAAAAWBgAVBfYAEAYAHAYAGAWYAGAWAFAVAFASYAJAkAGAYAAAAIAAAAYAAAAgEgZgFgkYgDgSgDgWgEgWYgDgXgEgYgDgZYgMhggKhiAAAAYgBgLgKgIgLACYgLABgIAKABALYAAABAAAAAAAB");
	this.shape_342.setTransform(635.35,447.4,1,1,0,0,0,1,1.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#F3BEBC").s().p("Agri1IBYGDIAAAAIgxmKYgBgLgKgHgLABYgLABgIAKABALYAAABABABAAAA");
	this.shape_343.setTransform(635.1,446.05,1,1,0,0,0,1,1.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#F3BEBC").s().p("Agsi1IBZGDIAAAAIgxmKYgCgLgKgHgLABYgLABgHAKABALYAAABAAABAAAA");
	this.shape_344.setTransform(634.65,444.95,1,1,0,0,0,1,1.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#F3BEBC").s().p("Agsi1IBaGEIAAAAIgzmLYgBgLgKgIgLACYgLABgIAKACALYAAABAAAAAAAB");
	this.shape_345.setTransform(634.2,443.85,1,1,0,0,0,1,1.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#F3BEBC").s().p("Agsi1YAAAAAYBhAXBgYAVBhAWBiAAAAIAAAAYAAAAgMhkgLhjYgPhigNhiAAAAYgCgLgKgIgLACYgLABgHAKABALYAAABABABAAAA");
	this.shape_346.setTransform(633.8,442.75,1,1,0,0,0,1,1.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#F3BEBC").s().p("Agsi1YAAAAAYBhAYBgYAVBhAVBiAAAAIAAAAYAAAAgLhkgLhjYgPhigOhiAAAAYgCgLgKgIgLACYgLABgIALACALYAAAAAAABABAA");
	this.shape_347.setTransform(633.35,441.7,1,1,0,0,0,1,1.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#F3BEBC").s().p("Agti0YAAAAAZBgAZBgYAFAYAFAYAFAXYAFAXAEAVAEASYAIAlAFAZAAAAIAAAAYAAAAgCgZgEglYgDgTgCgWgDgXYgCgXgDgZgDgZYgPhigPhjAAAAYgBgKgKgIgLACYgLABgIALACALYAAAAAAABAAAB");
	this.shape_348.setTransform(632.95,440.6,1,1,0,0,0,1,1.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#F3BEBC").s().p("Agti0YAAAAAHAYAKAkYACAJADAKADAKYADAKADALADAMYAFAWAGAYAGAXYAFAZAGAYAFAXYACALADALACALYACAKACAKACAJYAHAlAFAZAAAAIAAAAYAAAAgCgZgEglYgBgKgBgKgBgLYgBgKgBgMgCgLYgDgYgDgYgDgZYgDgYgEgZgEgXYgCgMgBgLgCgLYgCgKgCgKgBgKYgGglgEgYAAAAYgCgLgKgHgLACYgLABgHALABALYABAAAAABAAAB");
	this.shape_349.setTransform(632.5,439.55,1,1,0,0,0,1,1.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#F3BEBC").s().p("Agti0YAAAAAHAYAKAkYADAJADAKADAKYADAKACALADALYAGAXAFAYAHAXYAFAYAGAZAFAXYACALADALACALYACAKACAKACAJYAGAlAFAZAAAAIAAAAYAAAAgCgZgDgmYgBgJgBgKgBgLYgBgLgBgLgCgLYgDgYgDgZgDgZYgEgXgDgZgEgYYgCgLgBgMgCgKYgCgLgCgKgCgJYgGglgEgYAAAAYgCgLgLgHgLACYgLACgHAKACALYAAABAAAAABAB");
	this.shape_350.setTransform(632.05,438.45,1,1,0,0,0,1,1.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#F3BEBC").s().p("Agui0YAAAAAIAYAKAkYADAJADAKADAKYADAKADALADALYAGAXAFAYAGAXYADAMADAMADAMYACAMADAMACAMYADALADALACALYACAKABAKACAJYAHAlAEAZAAAAIAAAAYAAAAgCgZgDgmYAAgJgBgKgBgLYgBgLgCgLgBgMYgBgLgCgMgBgNYgCgMgBgMgCgNYgEgYgEgYgEgYYgBgLgCgMgCgKYgCgLgCgKgCgJYgGglgFgYAAAAYgCgLgKgHgLACYgLACgHAKACALYAAABAAAAAAAB");
	this.shape_351.setTransform(631.65,437.35,1,1,0,0,0,1,1.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#F3BEBC").s().p("Agui0YAAAAAHAYALAkYADAJADAKADAKYAEAKACALADALYAGAXAGAYAGAXYADAMADAMADAMYACAMADAMACALYADAMADALACALYABAKACAKACAJYAGAlAFAZAAAAIAAAAYAAAAgCgZgDgmYgBgJAAgKgBgLYgBgLgCgLgBgMYgCgLgBgMgBgNYgCgMgBgMgCgNYgEgYgEgZgEgXYgCgMgCgLgCgLYgCgKgCgKgCgJYgGglgFgZAAAAYgCgLgLgHgLACYgLADgHAKADALYAAABAAAAAAAB");
	this.shape_352.setTransform(631.2,436.25,1,1,0,0,0,1,1.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#F3BEBC").s().p("Agui0YAAAAAHAYAMAkYACAJAEAKADAKYADAKADALADALYAGAXAFAYAHAXYADAMACAMADAMYADAMADAMACALYADAMACALACAKYACALACAKABAJYAHAlAEAZAAAAIAAAAYAAAAgCgZgCgmYgBgJgBgKgBgLYgBgLgBgLgBgMYgCgLgBgMgCgNYgBgMgBgNgCgMYgFgYgEgZgEgXYgBgMgCgLgDgLYgCgKgCgKgCgKYgGgkgGgZAAAAYgCgLgKgHgLACYgLADgHAKACALYAAABABAAAAAB");
	this.shape_353.setTransform(630.75,435.15,1,1,0,0,0,1,1.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#F3BEBC").s().p("Agui0YAAAAAHAYAMAkYADAJADAKADAKYAEAKADALADALYAGAXAFAYAHAXYADAMADAMACAMYADAMADAMACALYADAMACALACAKYACALACAKABAJYAGAlAEAZAAAAIAAAAYAAAAgBgZgDgmYAAgJgBgKgBgLYgBgLgBgLgBgMYgCgMgBgMgCgMYgBgMgBgNgCgMYgFgYgEgZgEgYYgCgLgBgMgDgKYgCgLgCgKgCgJYgHglgGgYAAAAYgCgLgLgHgLACYgKADgHAKACALYAAABAAABABAA");
	this.shape_354.setTransform(630.35,434.05,1,1,0,0,0,1,1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#F3BEBC").s().p("Agvi0YAAAAAIAYAMAkYADAJADAKAEAKYADAKADALADALYAGAXAGAXAHAXYADAMACANADAMYADAMACAMADALYACAMADALACAKYACALABAKACAJYAGAlAEAZAAAAIAAAAYAAAAgCgZgCgmYgBgJAAgKgBgLYgBgLgBgLgCgMYgBgMgBgMgCgMYgCgMgBgNgCgMYgEgYgEgZgEgYYgCgMgCgLgDgKYgCgLgCgKgCgJYgIglgFgYAAAAYgCgLgLgHgLACYgLADgHALADAKYAAABAAABAAAA");
	this.shape_355.setTransform(629.9,432.95,1,1,0,0,0,1,1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#F3BEBC").s().p("Agvi0YAAAAAIAYAMAkYADAJAEAJADALYAEAKADALADALYAGAWAGAYAHAXYADAMACANADAMYADAMACAMADALYACALADAMACAKYACALABAKACAJYAFAlAEAZAAAAIAAAAYAAAAgBgZgCgmYgBgJAAgKgBgLYgBgLgBgLgCgMYgBgMgCgMgBgMYgCgNgBgMgCgNYgEgYgFgZgEgXYgCgMgCgLgCgLYgDgKgCgKgCgKYgIgkgGgZAAAAYgCgLgLgGgLACYgKADgHALACAKYABABAAABAAAA");
	this.shape_356.setTransform(629.45,431.85,1,1,0,0,0,1,1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#F3BEBC").s().p("Agvi0YAAAAAIAYAMAkYADAJAEAJADALYAEAKADALADALYAHAWAGAYAGAXYAEAMACAMADAMYACANADALACAMYADALADALACALYABALACAKABAJYAGAlADAZAAAAIAAAAYAAAAgBgZgCgmYAAgJgBgKAAgLYgBgLgCgLgBgMYgBgMgCgMgBgMYgCgNgBgMgCgNYgFgYgEgZgEgXYgCgMgCgMgDgKYgDgLgCgJgCgKYgIgkgGgZAAAAYgCgLgLgGgLACYgLADgGALACAKYAAABABABAAAA");
	this.shape_357.setTransform(629.05,430.75,1,1,0,0,0,1,1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#F3BEBC").s().p("AgvizYAAAAAIAXANAkYADAJADAJAEALYAEAKADALADALYAGAWAGAYAHAXYAEAMACAMADAMYACAMADAMACAMYADALACALADALYABALABAKACAJYAFAlAEAZAAAAIAAAAYAAAAgBgZgCgmYAAgJgBgKAAgLYgBgLgCgLgBgMYgBgMgCgMgBgNYgCgMgBgNgCgMYgFgYgEgZgFgYYgCgLgCgMgDgKYgCgLgDgKgCgJYgIglgGgYAAAAYgDgLgLgGgKACYgLADgHALADALYAAAAAAABABAB");
	this.shape_358.setTransform(628.6,429.65,1,1,0,0,0,1,1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#F3BEBC").s().p("AgwizYAAAAACAGAEAKYACAFADAGADAIYACAHAEAIACAJYAEAIADAKADAKYAEAKADALAEALYADALADAMADAMYAEAMADAMADALYAEAMACAMADAMYADAMADAMACAMYACALACALADALYABALACAKABAJYADATACAPABALYABALABAGAAAAIAAAAYAAAAAAgGAAgLYAAgLAAgQgCgTYAAgJgBgKAAgLYgBgLgBgMgBgLYgBgMgCgMgCgNYgCgMgBgNgCgMYgCgMgCgMgCgNYgDgMgCgMgDgMYgCgMgCgLgDgKYgDgLgCgKgCgKYgDgJgCgIgBgIYgCgHgCgHgBgFYgDgLgCgGAAAAYgDgKgLgHgKADYgLADgGALADALYAAAAAAABAAAB");
	this.shape_359.setTransform(628.15,428.6,1,1,0,0,0,1,1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#F3BEBC").s().p("AgwizYAAAAACAGAEAKYACAFADAGADAIYACAHAEAIADAJYADAIADAKAEAKYADAKAEALADALYAEALADAMADAMYADALAEANADALYAEAMACAMADAMYADAMADAMACALYACAMACALACALYACAKABALACAJYABAJACAJAAAHYABAIABAHABAFYABALAAAGAAAAIAAAAYAAAAAAgGAAgLYAAgFAAgHAAgIYAAgIAAgIgBgKYAAgJgBgKgBgLYgBgLgBgMgBgMYgBgLgBgNgCgMYgCgMgBgNgCgNYgDgLgCgNgCgMYgCgMgDgMgCgMYgDgMgCgLgDgLYgCgKgDgLgCgJYgCgJgDgJgBgHYgCgHgCgHgBgFYgDgLgCgGAAAAYgDgLgLgGgLADYgKADgHALADALYABABAAAAAAAB");
	this.shape_360.setTransform(627.75,427.5,1,1,0,0,0,1,1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#F3BEBC").s().p("AgwizYAAAAACAGAEAKYACAFADAGADAIYACAHAEAIADAJYADAIADAKAEAKYAEAKADALAEALYADALADAMAEALYADAMAEAMADALYADAMADANADAMYADAMADAMACALYACAMACALACALYACAKABAKACAKYABAJABAJABAHYABAIAAAHABAFYABALABAGAAAAIAAAAYAAAAAAgGAAgLYAAgFAAgHAAgIYAAgIgBgIAAgKYgBgJAAgLgBgKYgBgLgBgMgBgMYgBgMgBgMgCgMYgCgMgBgNgDgNYgCgLgCgNgCgMYgCgNgDgMgDgLYgCgMgDgLgCgLYgDgLgDgKgCgJYgCgKgDgIgBgHYgCgIgCgGgCgFYgDgLgBgGAAAAYgDgLgMgGgKADYgLADgGALADALYAAABABAAAAAB");
	this.shape_361.setTransform(627.3,426.45,1,1,0,0,0,1,1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F3BEBC").s().p("AgxizYAAAAADAGAEAKYACAFADAHADAHYACAHAEAIADAJYADAIAEAKADAKYAEAKAEALADALYAEALADALAEAMYADAMADAMAEALYADAMADANADAMYADAMACALACAMYADAMACALACALYABAKACAKABAKYABAJACAJAAAHYABAIABAHAAAFYABALABAGAAAAIAAAAYAAAAAAgGAAgLYAAgFAAgHAAgIYAAgIAAgIgBgKYAAgJgBgLAAgLYgBgKgBgMgBgMYgBgMgCgMgBgMYgCgNgBgMgDgNYgCgMgCgMgCgMYgDgNgDgMgCgMYgDgLgCgMgDgKYgDgLgDgKgCgJYgCgKgDgIgBgHYgCgIgCgGgCgFYgDgLgCgGAAAAYgDgLgLgGgLADYgKAEgGALADAKYAAABAAABAAAA");
	this.shape_362.setTransform(626.9,425.35,1,1,0,0,0,1,1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#F3BEBC").s().p("AgxizYAAAAACAGAFAKYACAFACAGADAIYADAHAEAIADAIYADAJAEAKAEAKYAEAKADAKAEAMYADALAEALADAMYAEAMADAMADALYAEAMADAMADAMYACANADALACAMYADAMACALACALYABAKACAKABAKYABAJABAJABAHYABAIAAAHABAFYABALAAAHAAAAIAAAAYAAAAAAgHAAgLYAAgFABgHAAgIYAAgHgBgJAAgKYAAgJgBgLAAgLYgBgKgBgMgBgMYgBgMgCgMgBgMYgCgNgBgNgDgMYgCgMgDgMgCgNYgCgMgDgMgDgMYgCgMgDgLgDgLYgDgKgDgKgCgKYgDgJgCgIgCgIYgCgHgCgHgBgFYgEgLgCgGAAAAYgDgKgLgGgLADYgKADgGAMADAKYAAABABAAAAAB");
	this.shape_363.setTransform(626.45,424.25,1,1,0,0,0,1,1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#F3BEBC").s().p("AgxizYAAAAACAGAEAKYADAFACAHADAHYADAHAEAIADAIYADAJAEAKAEAKYAEAKAEAKADALYADAMAEALAEAMYADAMAEAMADALYAEAMACAMADAMYADAMADAMACAMYACAMACALACAKYACALABAKABAKYACAJABAJAAAHYABAIAAAHABAFYABALAAAHAAAAIAAAAYAAAAAAgHABgLYAAgFAAgHAAgIYAAgIAAgIAAgKYgBgJAAgLgBgLYAAgLgBgLgBgMYgBgMgCgMgCgNYgCgMgBgNgCgMYgDgMgCgNgCgMYgDgMgDgMgCgMYgDgMgDgLgDgLYgDgLgDgKgCgJYgDgJgCgJgCgHYgCgHgCgHgCgFYgDgLgCgGAAAAYgDgKgMgGgKADYgLAEgFALADAKYAAABAAABABAA");
	this.shape_364.setTransform(626.05,423.15,1,1,0,0,0,1,1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#F3BEBC").s().p("AgyizYAAAAACAGAFAKYACAFADAGADAHYADAHADAIAEAJYADAJADAJAEAKYACAFACAGACAFYACAFACAGACAFYADAMADALAEAMYAEAMADAMAEALYAEAMACAMADAMYADANADALACAMYACAMADALACALYABAKACALABAJYABAJABAJABAIYABAIAAAGABAGYABALAAAGAAAAIAAAAYAAAAAAgGAAgLYAAgGABgHAAgHYAAgIgBgJAAgJYAAgKgBgKAAgLYgBgLgBgMgBgMYgBgMgCgMgCgNYgCgMgBgNgDgMYgCgMgCgNgDgMYgCgMgDgNgDgLYgBgGgCgGgBgGYgBgFgCgGgBgFYgDgLgDgKgDgJYgCgKgDgIgBgHYgDgIgCgGgBgGYgEgKgCgGAAAAYgDgLgLgGgLAEYgKADgGALADALYAAAAABABAAAB");
	this.shape_365.setTransform(625.55,422,1,1,0,0,0,1,1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#F3BEBC").s().p("Agzi0YAAAAADAGAEAKYADAFACAGADAIYADAHAEAIADAJYADAIAEAKAEAKYACAFACAFACAGYACAFACAGABAFYAEALADAMAEAMYAEAMADAMAEALYADAMADANADAMYADAMADAMACALYACAMADALACALYABALACAKABAKYABAJACAJAAAHYABAIABAHAAAFYABAMABAGAAAAIAAAAYAAAAAAgGAAgMYAAgFAAgHAAgIYAAgIAAgIgBgKYAAgKgBgKAAgLYgBgLgBgMgBgMYgBgMgCgMgCgMYgCgNgBgNgDgMYgCgMgDgNgCgMYgDgNgDgMgCgLYgCgGgBgGgBgGYgCgGgBgFgCgFYgDgLgDgKgCgKYgDgJgCgIgCgIYgCgHgCgHgCgFYgDgLgCgGAAAAYgDgKgLgGgLADYgLADgFALADALYAAABAAAAAAAB");
	this.shape_366.setTransform(625.1,420.9,1,1,0,0,0,1,1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#F3BEBC").s().p("Agzi1YAAAAACAGAFALYACAFADAGADAHYADAHADAJAEAIYADAJAEAKADAKYACAFACAFACAFYACAGACAFACAGYAEALADAMAEAMYADAMAEAMAEALYADAMADANADAMYADAMADAMACAMYADALACAMACAKYACALABAKACAKYABAJACAJAAAIYABAIAAAGABAGYABALABAGAAAAIAAAAYAAAAAAgGAAgLYAAgGAAgHAAgHYAAgIgBgJAAgKYgBgJAAgLgBgLYgBgLgBgLgBgMYgBgNgCgMgCgMYgCgNgBgNgDgMYgCgMgDgNgCgMYgDgNgDgMgDgMYgBgGgBgFgCgGYgBgGgCgFgBgGYgDgLgDgKgDgJYgCgKgCgIgCgHYgDgIgCgGgBgGYgEgKgCgGAAAAYgDgLgLgGgLADYgKAEgGALADALYAAAAABABAAAA");
	this.shape_367.setTransform(624.6,419.75,1,1,0,0,0,1,1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#F3BEBC").s().p("Ag0i1YAAAAADAGAEAKYACAFADAGADAIYADAHAEAIADAJYAEAJADAJAEAKYAEALAEAKAEAMYAEALADAMAEAMYADAMAEAMADALYAEAMADANADAMYADAMADAMACAMYADAMACALACALYACALACAKABAJYABAKACAJAAAHYABAIABAHAAAGYACALAAAGAAAAIAAAAYAAAAAAgGAAgLYAAgGAAgHAAgIYAAgIAAgIgBgKYAAgKgBgKgBgLYgBgLgBgMgBgMYgBgMgCgNgCgMYgCgNgBgNgDgMYgDgMgCgNgCgMYgDgNgDgMgDgMYgDgMgDgLgDgLYgDgLgCgKgDgKYgDgJgBgIgDgIYgCgHgCgHgCgFYgDgLgCgGAAAAYgDgLgMgGgKAEYgLADgGALAEALYAAAAAAABAAAB");
	this.shape_368.setTransform(624.15,418.6,1,1,0,0,0,1,1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#F3BEBC").s().p("Ag0i2YAAAAACAGAFAKYACAGADAGADAHYADAHADAJAEAIYADAJAEAKAEAKYADAKAEALAEAMYAEALADAMAEAMYAEAMADAMAEALYAEAMADANADAMYADAMADAMACAMYADAMACALACALYACALACAKABAKYACAJABAJABAIYABAIAAAGABAGYABALABAHAAAAIAAAAYAAAAAAgHAAgLYAAgGAAgHgBgHYABgIgBgJgBgKYAAgJgBgLgBgLYgBgLgBgMgBgMYgBgMgCgMgCgNYgCgNgCgNgDgMYgCgMgDgNgCgMYgDgNgDgMgDgMYgCgMgDgLgDgLYgDgLgDgKgDgKYgCgJgCgJgCgHYgDgIgCgGgBgGYgEgKgCgHAAAAYgDgKgLgGgLADYgKADgGAMADAKYAAABABAAAAAB");
	this.shape_369.setTransform(623.7,417.45,1,1,0,0,0,1,1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#F3BEBC").s().p("Ag1i2YAAAAADAGAEAKYACAFADAHADAHYADAHAEAIADAJYADAJAEAKAEAKYAEAKAEALAEALYAEAMADAMAEAMYADAMAEAMAEALYAEAMADANADAMYADAMADAMACAMYADAMACAMACAKYACALACALACAJYABAKACAIAAAIYABAIABAHABAGYABALAAAGAAAAIAAAAYAAAAAAgGAAgMYAAgFAAgHAAgIYAAgIgBgJAAgKYgBgJAAgLgBgLYgCgLgBgMgBgMYgBgMgDgMgBgNYgCgNgCgNgDgMYgCgMgDgNgCgNYgDgMgDgMgDgMYgDgMgDgMgDgLYgDgKgDgLgCgJYgDgKgCgIgCgIYgCgHgCgHgCgFYgDgLgCgGAAAAYgEgLgLgGgKAEYgLADgGALADALYABAAAAABAAAB");
	this.shape_370.setTransform(623.25,416.3,1,1,0,0,0,1,1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#F3BEBC").s().p("Ag1i3YAAAAACAGAFAKYACAGACAGADAHYADAHAEAJADAJYAEAJAEAJAEALYAEAKAEALADALYAEAMADALAEAMYAEANAEAMADALYAEANADAMAEAMYADANADAMACAMYADALACAMADALYACALABAKACAKYABAJACAJABAIYABAIAAAHABAFYABAMABAGAAAAIAAAAYAAAAAAgHAAgLYAAgGgBgGAAgIYAAgIAAgJgBgKYgBgKAAgKgBgMYgBgLgCgLgBgNYgBgMgDgMgBgNYgCgNgCgNgDgMYgDgMgCgNgDgNYgDgMgDgNgCgMYgGgXgHgXgFgTYgCgJgCgJgCgHYgDgIgCgGgBgGYgEgLgCgGAAAAYgDgKgLgGgLADYgKADgGALADALYAAABAAAAABAB");
	this.shape_371.setTransform(622.8,415.2,1,1,0,0,0,1,1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#F3BEBC").s().p("Ag2i4YAAAAACAGAFALYACAFADAGADAIYADAHADAIAEAJYAGASAJAVAIAXYAEAMADALAEAMYAEANADAMAEALYAEANADAMADAMYAEANADAMACAMYADAMADALACALYACALACAKABAKYACAKACAIAAAIYABAIABAHABAGYABALABAGAAAAIAAAAYAAAAAAgGgBgLYAAgGAAgHAAgIYAAgIgBgJgBgKYAAgJgBgLgBgLYgBgLgCgMgBgMYgBgNgDgMgCgNYgCgNgCgNgCgMYgDgMgDgNgCgNYgDgMgDgNgDgMYgFgYgHgWgFgTYgCgKgDgIgCgIYgCgHgDgHgBgFYgEgLgCgGAAAAYgDgLgLgGgLADYgKAEgGALADAKYAAABABABAAAA");
	this.shape_372.setTransform(622.3,414.05,1,1,0,0,0,1,1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#F3BEBC").s().p("Ag3i4YAAAAADAGAEAKYACAGADAGADAHYADAIAEAIADAJYAHASAJAVAHAXYAEALADAMAFAMYADANAEAMAEALYAEANADAMADANYADAMAEAMACAMYADAMACALADALYACALACALABAJYACAKACAJABAIYAAAIABAGABAGYABALABAHAAAAIAAAAYAAAAAAgHAAgLYAAgGgBgHAAgIYAAgIgBgJAAgJYgBgKgBgLgBgLYgBgLgCgMgBgMYgBgMgDgNgCgNYgCgNgCgNgDgMYgCgMgDgNgDgNYgDgMgDgNgCgMYgGgYgHgWgFgTYgCgKgCgIgDgIYgCgIgCgGgCgGYgDgLgCgGAAAAYgDgKgLgGgLADYgLADgGALAEALYAAABAAAAAAAB");
	this.shape_373.setTransform(621.85,412.95,1,1,0,0,0,1,1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#F3BEBC").s().p("Ag3i5YAAAAACAGAFALYACAFACAHADAHYADAHAEAJAEAJYAGASAJAVAIAXYAEALADAMAEAMYAEANAEAMADALYAEANAEAMADANYADAMAEAMACAMYADAMADAMACALYACALACAKACAKYABAJACAJABAIYABAIABAHABAGYABALABAGAAAAIAAAAYAAAAAAgGgBgMYAAgFAAgHAAgIYAAgIgBgJgBgKYgBgKgBgLgBgLYgBgLgCgMgBgMYgBgMgDgNgCgNYgCgMgCgNgDgNYgDgMgCgNgDgNYgDgNgDgMgDgMYgGgYgHgWgFgUYgBgJgDgJgCgHYgDgIgCgHgBgFYgEgLgCgGAAAAYgDgLgLgGgLADYgKAEgGALADAKYAAABAAABABAA");
	this.shape_374.setTransform(621.4,411.8,1,1,0,0,0,1,1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#F3BEBC").s().p("Ag4i5YAAAAACAGAFAKYACAGADAGADAIYADAHADAIAEAJYAHATAIAVAIAXYAEALAEAMAEAMYADANAEAMAEALYAEANAEAMADANYADAMAEANACALYADAMADAMACALYADALABAKACAKYACAKACAJABAIYABAHABAHAAAGYACALABAHAAAAIAAAAYAAAAgBgHAAgLYAAgGAAgHgBgIYAAgIgBgJgBgKYgBgKAAgKgCgMYgBgLgCgMgBgMYgCgMgCgNgCgNYgCgMgDgNgCgNYgDgMgDgNgDgNYgDgNgDgMgDgMYgFgYgHgXgFgTYgCgKgDgIgCgIYgCgHgDgHgBgGYgEgLgCgGAAAAYgDgKgLgGgLADYgKADgGALADALYAAABABAAAAAB");
	this.shape_375.setTransform(620.9,410.65,1,1,0,0,0,1,1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#F3BEBC").s().p("Ag5i6YAAAAADAGAEALYADAFACAHADAHYADAHAEAJADAJYAHASAJAVAIAXYAEAMAEAMADAMYAEAMAEANAEAMYAEAMAEANADAMYADANAEAMACAMYADAMADALACALYADALABALACAKYACAJACAJABAIYABAIABAHABAGYABALABAHAAAAIAAAAYAAAAAAgHgBgLYAAgGAAgHAAgIYAAgIgCgJAAgKYgBgKgBgLgBgLYgCgLgBgMgCgNYgCgMgCgNgCgMYgCgNgDgNgDgNYgCgMgDgNgDgNYgDgNgDgMgDgMYgGgZgHgWgEgTYgCgKgDgJgDgHYgCgIgCgHgCgFYgDgLgCgHAAAAYgDgKgLgGgLADYgLADgGAMAEAKYAAABAAAAAAAB");
	this.shape_376.setTransform(620.45,409.5,1,1,0,0,0,1,1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#F3BEBC").s().p("Ag5i7YAAAAACAHAFAKYACAGACAGAEAIYADAHADAIAEAKYAHASAIAVAIAXYAEAMAFAMADAMYAEAMAEANAEAMYAEAMADANAEAMYADANAEAMADAMYACAMADAMADALYACALACAKACAKYABAKADAJAAAIYACAIABAGAAAGYACAMABAGAAAAIAAAAYAAAAAAgGgBgMYAAgGAAgHgBgIYAAgIgBgJgBgKYgBgKgBgLgBgLYgCgLgBgMgCgMYgCgNgCgMgCgNYgDgNgCgNgDgNYgDgMgCgNgDgNYgDgNgDgMgDgNYgGgYgHgWgEgUYgDgJgDgJgCgIYgDgHgCgHgBgGYgEgLgCgGAAAAYgDgLgLgGgLAEYgKADgGALADALYAAAAAAABABAA");
	this.shape_377.setTransform(620,408.35,1,1,0,0,0,1,1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#F3BEBC").s().p("Ag6i7YAAAAADAGAEALYACAFADAHADAHYADAIAEAIADAJYAHATAJAVAIAXYAEAMAEAMADAMYAFAMADANAEAMYAEAMAEANADAMYAEANAEAMACAMYADAMADAMADALYACALACALACAJYACAKACAJABAIYABAIABAHABAGYABALABAHAAAAIAAAAYAAAAAAgHgBgLYAAgGAAgHgBgIYAAgJgBgJgBgKYgBgJgBgLgBgMYgCgLgCgMgBgMYgCgNgDgMgCgNYgCgNgCgNgDgNYgDgMgDgNgDgNYgDgNgDgNgDgMYgGgYgHgXgEgTYgDgKgCgIgDgIYgCgIgCgHgCgFYgDgLgCgHAAAAYgDgKgMgGgKADYgLADgGAMADAKYABABAAAAAAAB");
	this.shape_378.setTransform(619.55,407.2,1,1,0,0,0,1,1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#F3BEBC").s().p("Ag6i8YAAAAACAGAFALYACAFACAHADAIYADAHAEAJAEAJYAHASAIAWAIAXYAEAMAFAMADAMYAEAMAEANAEAMYAEAMAEANADANYAEAMADAMADANYADAMADALADALYACAMACAKACAKYACAKACAJABAIYABAIABAHABAFYACAMABAGAAAAIAAAAYAAAAAAgGgBgMYAAgGgBgHAAgIYgBgIgBgJgBgKYgBgKgBgLgBgLYgCgMgCgMgBgMYgCgMgDgNgCgNYgCgNgDgNgDgNYgDgMgCgOgDgMYgDgNgDgNgDgMYgGgYgHgXgEgTYgDgKgDgJgCgIYgDgHgCgHgBgGYgEgLgCgGAAAAYgDgLgLgGgLADYgKAEgGALADAKYAAABAAABABAA");
	this.shape_379.setTransform(619.1,406.1,1,1,0,0,0,1,1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#F3BEBC").s().p("Ag7i8YAAAAAKAYAPAlYAHATAJAVAIAYYAEAMAEAMAEAMYAEAMAEANAEAMIAGATYACAGABAGACAHYAEAMADANADAMYADAMADAMADALYADALABAKADAKYABAKADAJABAIYABAIABAHABAGYACALABAHAAAAIAAAAYAAAAgBgHAAgLYgBgGAAgHgBgIYAAgJgBgJgBgKYgBgKgBgLgCgLYgCgLgBgMgCgNYgCgMgDgNgCgNYgBgHgBgGgCgHYgBgGgBgHgCgGYgDgMgCgOgEgMYgDgNgDgNgDgMYgGgZgHgWgEgUYgMgmgHgaAAAAYgEgKgLgGgKADYgLADgGALADALYAAAAABABAAABIAAAA");
	this.shape_380.setTransform(618.6,404.95,1,1,0,0,0,1,1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#F3BEBC").s().p("Ag8i9YAAAAAKAZAQAlYAHATAIAVAIAYYAFALAEANADAMYAFAMADANAEAMYAFANAEAMADANYADANAEAMADAMYADAMADAMADALYADALACALACAKYACAKACAJABAIYABAIABAHABAGYACALABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGgBgHAAgIYgBgIgBgJgBgKYgBgKgBgLgCgMYgCgLgBgMgCgNYgCgMgDgNgCgNYgDgNgCgNgDgNYgDgMgDgOgDgNYgDgMgDgNgDgMYgGgZgHgXgFgTYgLgngIgZAAAAYgDgLgLgGgLADYgLADgGAMAEAKYAAABAAAAAAABIAAAA");
	this.shape_381.setTransform(618.15,403.8,1,1,0,0,0,1,1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#F3BEBC").s().p("Ag8i+YAAAAAKAZAPAmYAHASAJAWAIAYYAEALAEANAEAMYAEAMAEANAEAMYAEANAEAMAEANYADANAEAMADAMYADANADALADALYADAMACAKACAKYACAKACAJABAIYACAIABAHABAGYACAMABAGAAAAIAAAAYAAAAgBgGAAgMYgBgGAAgHgBgIYAAgJgCgJgBgKYgBgKgBgLgCgLYgCgMgBgMgCgMYgCgNgDgNgCgNYgDgNgDgNgDgNYgDgMgCgOgDgNYgEgMgDgNgDgNYgGgYgHgXgEgUYgMgmgIgaAAAAYgDgLgLgGgLAEYgKADgGALADALYAAAAAAABABAA");
	this.shape_382.setTransform(617.7,402.65,1,1,0,0,0,1,1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#F3BEBC").s().p("Ag9i+YAAAAALAZAPAlYADAKAEAKAEALYAEAKAFAMAEALYAEAMAFAMADANYAEAMAEANAEAMYAFANAEAMADANYAEANADAMAEAMYADANADALACAMYADALACAKACAKYACAKACAJACAIYABAIABAHABAGYACAMABAGAAAAIAAAAYAAAAAAgGgBgMYgBgGAAgHgBgIYAAgIgBgKgCgKYgBgKgBgLgCgLYgBgMgCgMgCgMYgCgNgDgNgCgNYgCgNgDgNgDgNYgDgMgDgOgDgNYgEgNgDgMgDgNYgDgMgDgMgDgLYgEgLgCgLgCgKYgMgmgIgaAAAAYgDgLgLgGgLADYgLAEgGALAEAKYAAABAAABAAAA");
	this.shape_383.setTransform(617.25,401.55,1,1,0,0,0,1,1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#F3BEBC").s().p("Ag9i+YAAAAAKAZAQAlYADAJAEALAEAKYAEALAFALAEAMYAEAMAFAMADANYAEAMAEANAEAMYAFANAEAMADANYAEANAEAMADANYADAMADAMADALYADALACALACAKYACAJACAKABAIYACAIABAHABAGYACALABAHAAAAIAAAAYAAAAgBgHgBgMYAAgFgBgIAAgIYgBgIgBgJgBgKYgBgKgBgLgCgMYgCgLgCgNgCgMYgCgNgCgNgDgNYgCgNgDgNgDgNYgDgNgDgNgDgNYgEgNgDgNgDgMYgDgMgEgMgDgLYgDgMgCgKgDgKYgMgngIgaAAAAYgDgKgLgGgLADYgKADgGALADALYAAABABAAAAAB");
	this.shape_384.setTransform(616.8,400.45,1,1,0,0,0,1,1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#F3BEBC").s().p("Ag9i/YAAAAAKAZAPAmYAEAJAEAKAEALYAEALAFALAEAMYAEAMAFAMADANYAFAMADANAFAMYAEANAEAMAEANYADANAEAMADANYADAMADAMADALYADALACALACAKYACAKACAJACAIYABAIABAHABAGYACAMABAGAAAAIAAAAYAAAAgBgGAAgMYgBgGAAgHgBgIYAAgJgCgJgBgKYgBgKgBgLgCgMYgCgLgBgMgCgNYgDgNgCgNgDgNYgCgNgDgNgDgNYgDgNgDgNgDgNYgDgNgEgNgDgMYgDgNgEgLgDgMYgDgLgCgLgDgKYgMgmgIgaAAAAYgDgLgLgGgLADYgKAEgGALADAKYAAABAAABABAA");
	this.shape_385.setTransform(616.4,399.3,1,1,0,0,0,1,1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#F3BEBC").s().p("Ag+i/YAAAAALAZAPAlYAEAKAEAKAEALYAEALAFALAEAMYAEAMAFAMADANYAFAMAEANAEAMYAEANAEAMAEANYADANAEANADAMYADAMADAMADALYADALACALACAKYACAKADAJABAIYABAJABAHABAGYACALABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGgBgHgBgIYAAgIgBgKgCgKYgBgKgBgLgCgLYgBgMgCgMgCgNYgCgNgDgMgDgOYgCgNgDgNgDgNYgDgNgDgNgDgNYgDgNgEgNgDgMYgDgNgEgMgDgLYgDgLgCgLgDgKYgMgngIgaAAAAYgDgKgMgGgKADYgLADgGALAEALYAAABAAAAAAAB");
	this.shape_386.setTransform(615.95,398.2,1,1,0,0,0,1,1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#F3BEBC").s().p("Ag+i/YAAAAAKAZAQAlYAEAKAEAKAEALYAEAKAFAMAEAMYAEAMAFAMADAMYAFANAEANAEAMYAEANAFAMADANYAEANAEANADAMYADAMADAMADALYADAMACAKACAKYACAKACAJABAJYACAIABAHABAGYACALABAHAAAAIAAAAYAAAAgBgHgBgLYAAgGAAgIgBgIYgBgIgBgJgBgLYgBgKgBgLgCgLYgCgMgCgMgCgNYgCgNgDgMgCgOYgCgNgDgNgEgOYgDgMgCgNgEgNYgDgNgEgNgDgNYgDgMgEgMgDgLYgDgMgCgKgDgKYgMgngJgaAAAAYgDgLgLgGgLAEYgKADgGALADALYAAAAABABAAAB");
	this.shape_387.setTransform(615.5,397.05,1,1,0,0,0,1,1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#F3BEBC").s().p("Ag+jAYAAAAAKAZAQAmYAEAKAEAKAEAKYAEALAFAMAEAMYAEAMAFAMADAMYAFANAEANAEAMYAEANAFAMADANYAEANAEANADAMYADAMADAMADALYADAMACALACAKYACAJACAKACAIYABAIABAHABAGYACAMABAGAAAAIAAAAYAAAAgBgGAAgMYgBgGAAgHgBgJYAAgIgCgJgBgKYgBgLgBgLgCgLYgCgMgCgMgCgNYgCgMgDgNgCgOYgCgNgDgNgEgOYgDgMgDgNgDgNYgDgNgEgNgDgNYgDgMgEgMgDgLYgDgMgCgLgDgJYgNgngIgaAAAAYgDgLgLgGgLADYgKAEgGALADALYAAAAAAABABAA");
	this.shape_388.setTransform(615.1,395.95,1,1,0,0,0,1,1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#F3BEBC").s().p("Ag/jAYAAAAALAZAQAmYAEAJAEAKAEALYAEALAFALAEAMYAEAMAFANADAMYAFANAEANAEAMYAFAMAEANAEANYADANAEANAEAMYADAMADAMADAMYADALABALADAKYACAKACAJABAIYABAIACAIABAFYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGgBgHAAgIYgBgJgBgJgBgKYgBgKgBgMgCgLYgCgMgCgMgCgNYgCgMgDgNgDgOYgCgNgDgNgDgOYgDgMgDgOgEgNYgDgNgEgNgDgMYgDgNgEgLgDgMYgDgLgDgLgDgKYgMgngIgaAAAAYgEgLgLgFgKADYgLADgGAMAEAKYAAABAAAAAAAB");
	this.shape_389.setTransform(614.65,394.85,1,1,0,0,0,1,1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#F3BEBC").s().p("Ag/jAYAAAAALAZAQAmYADAJAFAKAEALYAEALAFALAEAMYAFAMAEANAEAMYAEANAEANAFAMYAEAMAEANAEANYAEANADANAEAMYADAMADAMADAMYADALACALACAKYACAKACAJABAIYACAJABAHABAGYACALABAHAAAAIAAAAYAAAAgBgHgBgMYAAgGAAgHgBgIYAAgIgCgKgBgKYgBgKgBgLgCgMYgCgMgCgMgCgNYgCgMgDgNgCgOYgDgNgDgNgDgOYgDgMgDgOgEgNYgDgNgEgNgDgMYgDgNgEgMgDgLYgEgLgCgLgDgKYgMgngJgaAAAAYgDgLgLgGgLAEYgKADgGALADALYAAABABAAAAAB");
	this.shape_390.setTransform(614.2,393.7,1,1,0,0,0,1,1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#F3BEBC").s().p("Ag/jBYAAAAAKAZARAmYADAKAEAKAFALYAEALAFALAEAMYAEAMAFAMAEANYAEANAEANAFAMYAEAMAEANAEANYAEANADANAEAMYADANADAMADALYADALACALACAKYACAKACAKACAIYABAIABAHABAGYACAMABAHAAAAIAAAAYAAAAgBgHAAgMYgBgGAAgHgBgJYAAgIgCgJgBgLYgBgKgBgLgCgMYgCgLgCgNgCgMYgCgNgDgNgCgOYgDgNgDgNgDgOYgDgMgDgOgEgNYgDgNgEgNgDgNYgDgMgEgMgDgLYgEgMgCgLgDgKYgMgngJgaAAAAYgDgLgLgFgLADYgLADgFAMADAKYAAABAAAAABAB");
	this.shape_391.setTransform(613.8,392.6,1,1,0,0,0,1,1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#F3BEBC").s().p("AhAjBYAAAAALAZAQAmYAEAJAEALAFAKYAEALAFAMAEAMYAFAMAEAMAEANYAFAMAEANAEAMYAEANAFANADANYAEANAEANAEAMYADANADAMADALYADAMACAKACALYACAKACAJABAIYACAIABAIABAFYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGgBgHAAgIYgBgJgBgJgBgKYgBgLgBgLgCgMYgCgLgCgNgCgMYgDgNgCgNgDgOYgCgNgDgOgEgNYgDgMgDgOgDgNYgEgNgDgNgEgNYgDgMgEgMgDgMYgEgLgCgLgDgKYgNgngIgaAAAAYgEgLgLgGgLAEYgKADgGAMAEAKYAAABAAAAAAAB");
	this.shape_392.setTransform(613.35,391.45,1,1,0,0,0,1,1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#F3BEBC").s().p("AhAjBYAAAAALAZAQAmYAEAJAEAKAFALYAEALAFAMAEAMYAFAMAEAMAEANYAFAMAEANAEAMYAEANAFANAEANYADANAEANAEAMYADANADAMADALYADAMACALACAKYACAKACAJACAIYABAJABAHABAGYACAMABAGAAAAIAAAAYAAAAgBgGAAgMYgBgGAAgIgBgIYAAgJgCgJgBgKYgBgLgBgLgCgLYgCgMgCgNgCgMYgCgNgDgNgDgOYgCgNgDgOgEgNYgDgMgDgOgEgNYgDgNgEgNgDgNYgDgMgEgMgDgMYgEgLgCgLgDgKYgNgngJgbAAAAYgDgKgLgGgLAEYgKADgGALADALYABAAAAABAAAB");
	this.shape_393.setTransform(612.9,390.35,1,1,0,0,0,1,1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#F3BEBC").s().p("AhAjCYAAAAALAZAQAmYAEAKAEAKAFALYAEALAFALAEAMYAFANAEAMAEANYAFAMAEANAEAMYAFANAEANAEANYAEANADANAEAMYADANADAMADALYADAMACALACAKYACAKADAJABAJYABAIABAHABAGYACAMABAHAAAAIAAAAYAAAAAAgHgBgMYgBgGAAgHAAgJYgBgIgBgKgBgKYgCgKgBgMgCgLYgCgMgCgMgCgNYgCgNgDgNgCgOYgDgNgDgOgDgNYgEgNgDgNgDgNYgEgOgDgNgEgMYgDgNgEgMgDgLYgEgMgCgLgDgKYgNgngJgaAAAAYgDgLgMgFgKADYgLAEgFALADAKYAAABABABAAAA");
	this.shape_394.setTransform(612.5,389.25,1,1,0,0,0,1,1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#F3BEBC").s().p("AhBjCYAAAAALAZARAmYAEAKAEAKAEALYAFALAFALAEAMYAFAMAEANAEANYAFAMAEANAEAMYAFANAEANAEANYAEANAEANADANYAEAMADAMADAMYADALACALACAKYACAKACAKABAIYACAIABAHABAGYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGgBgHAAgJYgBgIgBgJgBgLYgBgKgBgLgCgMYgCgMgCgMgCgNYgDgNgDgNgCgOYgDgNgDgOgDgNYgEgNgDgNgDgNYgEgOgEgNgDgMYgDgNgEgMgEgLYgDgMgDgLgDgKYgNgngIgaAAAAYgEgLgLgGgLAEYgKADgGAMAEAKYAAABAAAAAAAB");
	this.shape_395.setTransform(612.05,388.1,1,1,0,0,0,1,1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#F3BEBC").s().p("AhBjDYAAAAALAaARAmYAEAJAEALAEALYAFAKAFAMAEAMYAFAMAEANAEAMYAFANAEANAFAMYAEANAFANADANYAEANAEANAEANYADAMADAMADAMYADALACALACALYACAKACAJACAIYABAJABAHABAGYACAMABAHAAAAIAAAAYAAAAgBgHAAgMYgBgGAAgIgBgIYAAgIgCgKgBgKYgBgLgBgLgCgMYgCgMgCgMgCgNYgDgNgCgNgDgOYgCgNgEgOgDgNYgDgNgDgOgEgNYgEgNgDgNgEgNYgDgMgEgMgEgMYgDgLgDgLgDgKYgNgogJgaAAAAYgDgLgLgFgLADYgKAEgGALADAKYABABAAABAAAA");
	this.shape_396.setTransform(611.6,387,1,1,0,0,0,1,1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#F3BEBC").s().p("AhBjDYAAAAALAZAQAnYAEAJAFAKAEALYAFALAFAMAEAMYAFAMAEANAEAMYAFANAEANAFAMYAEANAFANAEANYADAOAEAMAEANYADAMADANADALYADAMACALADAKYACAKACAJABAJYABAIABAHABAGYACAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGgBgHAAgJYgBgIgBgKgBgKYgCgLgBgLgCgMYgCgMgCgMgCgNYgCgNgDgNgDgOYgCgNgEgOgDgNYgDgNgDgOgEgNYgEgNgEgNgDgNYgDgMgFgNgDgLYgDgMgDgLgDgKYgNgngJgbAAAAYgEgKgLgGgLAEYgKADgGAMAEAKYAAABAAAAABAB");
	this.shape_397.setTransform(611.15,385.85,1,1,0,0,0,1,1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#F3BEBC").s().p("AhCjEYAAAAAMAaAQAmYAEAKAFAKAEALYAFALAFAMAEAMYAFAMAEAMAEANYAFANAEANAFAMYAEANAFANAEANYAEAOAEAMADANYAEANADAMADALYADAMACALACAKYACAKACAKABAIYACAIABAIABAGYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgHAAgHgBgIYgBgJgBgJgBgLYgBgKgBgMgCgMYgCgLgCgNgCgNYgDgNgDgNgCgOYgDgNgEgOgDgNYgDgNgDgOgEgNYgEgNgDgNgEgNYgDgNgEgMgEgLYgDgMgDgLgDgKYgOgogIgaAAAAYgEgLgLgFgLADYgKAEgGALAEALYAAAAAAABAAAA");
	this.shape_398.setTransform(610.75,384.75,1,1,0,0,0,1,1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#F3BEBC").s().p("AhCjEYAAAAAMAaARAmYAEAKAEAKAEALYAFALAFALAEANYAFAMAFAMAEANYAFANAEANAEAMYAFANAFANADANYAEAOAEAMAEANYADANADAMADALYADAMACALACAKYACAKACAKACAIYABAJABAHABAGYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGAAgIgBgIYAAgJgCgJgBgLYgBgKgBgMgCgLYgCgMgCgNgCgNYgCgNgDgNgDgOYgCgNgEgOgDgNYgEgNgDgOgEgNYgDgNgEgOgEgMYgDgNgEgMgEgMYgDgLgDgLgDgKYgNgogJgaAAAAYgEgLgLgFgLADYgKAEgGALAEALYAAAAAAABAAAA");
	this.shape_399.setTransform(610.3,383.65,1,1,0,0,0,1,1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#F3BEBC").s().p("AhCjEYAAAAALAaARAmYAEAJAFALAEALYAFALAFALAEAMYAFANAFAMAEANYAFANAEANAFAMYAEANAFANADANYAEAOAEAMAEANYADANADAMADALYAEAMACALACAKYACALACAJABAIYABAJABAHABAGYACAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGgBgIAAgIYgBgJgBgJgBgLYgBgKgBgLgDgMYgBgMgCgNgDgNYgCgNgDgNgDgOYgCgNgEgOgDgOYgEgMgDgOgEgNYgDgOgEgNgEgMYgDgNgEgMgEgMYgDgLgDgLgDgLYgOgngJgbAAAAYgEgKgLgGgKAEYgLADgFAMADAKYAAABABAAAAAB");
	this.shape_400.setTransform(609.85,382.5,1,1,0,0,0,1,1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#F3BEBC").s().p("AhCjFYAAAAALAaARAmYAEAKAFAKAEALYAFALAFAMAEAMYAFAMAFANAEANYAFANAEANAFAMYAEANAFANAEAOYAEANAEANADAMYAEANADAMADAMYADALACAMACAKYACAKACAKABAIYACAIABAIABAGYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGAAgIgBgJYgBgIgBgKgBgKYgBgLgBgLgCgMYgCgMgCgNgCgNYgDgNgDgNgCgOYgDgNgEgOgDgOYgEgMgDgOgEgNYgDgOgEgNgEgNYgDgNgEgMgEgLYgDgMgDgLgDgKYgOgogJgaAAAAYgEgLgLgFgLADYgKAEgGALAEALYAAAAAAABABAA");
	this.shape_401.setTransform(609.4,381.4,1,1,0,0,0,1,1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#F3BEBC").s().p("AhDjFYAAAAAMAaARAmYAEAKAEAKAFALYAFALAFAMAEAMYAFAMAFANAEANYAFANAEANAFAMYAEANAFANAEAOYAEANAEANAEAMYADANADAMADAMYADAMACALACAKYACAKACAKACAIYABAJABAHABAGYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgGAAgIgBgIYAAgJgCgJgBgLYgBgLgBgLgCgMYgCgMgCgNgCgNYgDgNgDgNgCgOYgDgNgEgOgDgOYgEgMgDgOgEgOYgDgNgEgNgEgNYgDgNgFgMgDgLYgDgMgDgLgEgKYgNgogJgbAAAAYgEgKgLgGgLAEYgKAEgGALAEAKYAAABAAABAAAA");
	this.shape_402.setTransform(609,380.25,1,1,0,0,0,1,1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#F3BEBC").s().p("AhDjFYAAAAALAZASAnYAEAJAEALAFALYAFALAFAMAEAMYAFAMAFANAEANYAFAMAEAOAFAMYAFANAFANADAOYAEANAEANAEAMYADANADAMADAMYAEAMACALACAKYACALACAJABAIYABAJABAHABAGYACANABAHAAAAIAAAAYAAAAAAgHgBgNYAAgGgBgHAAgJYgBgJgBgJgBgLYgBgKgBgMgCgMYgCgMgDgMgCgOYgCgNgDgNgDgOYgDgNgDgOgEgOYgDgNgDgNgEgOYgEgNgEgNgEgNYgDgNgFgMgDgMYgDgMgEgLgDgKYgOgogJgaAAAAYgEgLgLgFgLADYgKAEgFAMADAKYAAABABAAAAAB");
	this.shape_403.setTransform(608.55,379.15,1,1,0,0,0,1,1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#F3BEBC").s().p("AhDjGYAAAAALAaASAnYAEAJAEALAFALYAEALAGALAEANYAFAMAFANAEANYAFAMAEAOAFAMYAFANAFANADAOYAEANAEANAEAMYADANAEANADALYADAMACALACAKYACALACAJABAJYACAIABAIABAGYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgHAAgHgBgJYgBgIgBgKgBgLYgBgKgBgMgCgMYgCgMgCgMgDgNYgCgNgDgOgDgOYgDgNgDgOgEgOYgDgNgDgNgFgOYgDgNgEgNgEgNYgEgNgEgMgDgMYgDgMgEgLgDgKYgOgogJgbAAAAYgEgKgLgFgLADYgKAEgGALAEALYAAAAAAABABAA");
	this.shape_404.setTransform(608.1,378.05,1,1,0,0,0,1,1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#F3BEBC").s().p("AhEjGYAAAAAMAaASAmYAEAKAEALAFALYAEALAGALAEANYAFAMAFANAEAMYAFANAFAOAEAMYAFANAFANAEAOYAEANAEANAEAMYADANADANADALYADAMACALADALYACAKACAJABAJYABAIABAIABAGYACAMABAHAAAAIAAAAYAAAAgBgHAAgMYgBgGAAgIAAgJYgBgIgBgKgBgKYgBgLgCgMgCgMYgCgMgCgMgCgNYgDgNgDgOgCgOYgDgNgEgOgDgOYgEgNgDgOgEgNYgEgNgEgOgEgNYgDgMgFgNgDgLYgDgMgEgLgDgKYgOgogKgbAAAAYgDgKgMgGgKAEYgLAEgFALADALYABAAAAABAAAA");
	this.shape_405.setTransform(607.65,376.9,1,1,0,0,0,1,1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#F3BEBC").s().p("AhEjGYAAAAAMAZARAnYAFAKAEAKAFALYAEALAGAMAFAMYAEANAFAMAEANYAGANAEANAFANYAEANAFANAEAOYAEANAEANAEANYADAMADANAEALYADAMACALACALYACAKACAKABAIYACAJABAHAAAGYACANABAHAAAAIAAAAYAAAAAAgHgBgNYAAgGgBgIAAgIYgBgJgBgKgBgKYgBgLgBgLgCgMYgCgMgCgNgDgNYgCgNgDgOgDgOYgDgNgEgOgDgOYgEgNgDgOgEgNYgEgOgEgNgEgNYgDgNgFgMgDgMYgDgLgEgLgDgLYgPgogJgaAAAAYgEgLgLgFgLADYgKAEgFAMADAKYAAABABAAAAAB");
	this.shape_406.setTransform(607.25,375.8,1,1,0,0,0,1,1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#F3BEBC").s().p("AhEjHYAAAAAMAaARAnYAEAJAFALAFALYAEALAGAMAEAMYAFANAFAMAEANYAGANAEANAFANYAEANAFANAEAOYAEANAEANAEANYADANAEAMADAMYADALACAMACAKYACALACAJACAJYABAIABAIABAGYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgHAAgHgBgJYAAgIgCgKgBgLYgBgKgBgMgCgMYgCgMgCgNgDgNYgCgNgDgOgDgOYgDgNgEgOgDgOYgEgNgDgOgEgNYgEgOgEgNgEgNYgEgNgEgMgEgMYgCgMgEgLgDgKYgPgogJgbAAAAYgEgKgLgGgLAEYgKAEgGALAEALYAAAAAAABABAA");
	this.shape_407.setTransform(606.8,374.65,1,1,0,0,0,1,1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#F3BEBC").s().p("AhFjHYAAAAAMAaASAmYAEAKAFALAFALYAEALAGAMAEAMYAFAMAFANAEANYAGANAEANAFANYAFANAFANAEAOYAEANAEANAEANYADANADAMADAMYADAMADALACAKYACALACAJABAJYABAJABAHABAGYACANABAHAAAAIAAAAYAAAAgBgHAAgNYAAgGgBgIAAgIYgBgJgBgKgBgLYgBgKgBgMgDgMYgCgMgCgNgCgNYgDgNgDgOgDgOYgCgOgEgNgEgOYgDgNgEgOgEgNYgEgOgEgNgEgNYgEgNgEgMgEgMYgDgMgDgLgEgKYgOgpgKgaAAAAYgEgLgLgFgKAEYgLADgFAMAEAKYAAABAAAAAAAB");
	this.shape_408.setTransform(606.35,373.55,1,1,0,0,0,1,1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#F3BEBC").s().p("AhFjHYAAAAAMAZASAnYAEAKAFALAEALYAFALAFAMAFAMYAFAMAFANAEANYAGANAEANAFANYAFANAFANAEAOYAEANAEANAEANYADANADAMADAMYAEAMACALACALYACAKACAKABAIYACAJABAHAAAGYACANABAHAAAAIAAAAYAAAAAAgHgBgNYAAgGgBgIAAgIYgBgJgBgKgBgKYgBgLgBgMgDgMYgCgMgCgNgCgNYgDgNgDgOgDgOYgCgNgEgOgEgOYgDgNgEgOgEgOYgEgNgEgNgEgNYgEgNgEgNgEgLYgDgMgDgLgEgLYgOgogKgbAAAAYgEgKgLgFgLADYgKAEgFALADALYAAAAABABAAAB");
	this.shape_409.setTransform(605.95,372.45,1,1,0,0,0,1,1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#F3BEBC").s().p("AhFjIYAAAAAMAaASAnYAEAKAFAKAEAMYAFALAGALAEANYAFAMAFANAFANYAFANAEANAFANYAFANAFANAEAOYAEANAEANAEANYAEANADAMADAMYADAMACALACALYACAKACAKACAIYABAJABAHABAHYABAMABAHAAAAIAAAAYAAAAAAgHgBgMYAAgHAAgHgBgJYAAgJgBgKgCgKYgBgLgBgMgCgMYgCgMgCgNgDgNYgCgNgDgOgDgOYgDgOgEgNgEgOYgDgNgEgOgEgOYgEgNgEgOgEgNYgEgMgEgNgEgMYgDgLgEgMgDgKYgPgogJgbAAAAYgEgKgMgGgKAEYgKAEgGALAEALYAAAAAAABABAA");
	this.shape_410.setTransform(605.5,371.3,1,1,0,0,0,1,1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#F3BEBC").s().p("AhGjIYAAAAAMAaATAnYAEAJAEALAFALYAFALAFAMAFANYAFAMAFANAFANYAFANAFANAEANYAFANAFANAEAOYAEANAEANAEANYAEANADAMADAMYADAMADAMACAKYACALACAJABAJYABAIABAIABAGYACANABAHAAAAIAAAAYAAAAgBgHAAgNYAAgGgBgIAAgJYgBgIgBgKgBgLYgBgLgCgLgCgMYgCgNgCgNgCgNYgDgNgDgOgDgOYgDgOgEgNgEgOYgDgNgEgOgEgOYgEgNgEgOgEgNYgEgNgEgMgEgMYgDgMgEgLgDgKYgPgpgKgbAAAAYgEgKgLgFgLAEYgKADgFAMAEAKYAAABAAAAAAAB");
	this.shape_411.setTransform(605.05,370.2,1,1,0,0,0,1,1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#F3BEBC").s().p("AhGjJYAAAAAMAaASAnYAFAKAEALAFALYAFALAFAMAFAMYAFANAGANAEANYAFANAFANAFANYAEANAGANADAOYAFANAEANAEANYADANADANADAMYACAGACAFABAGYABAGABAFABAFYACALACAKACAIYABAJABAHAAAHYACAMABAHAAAAIAAAAYAAAAAAgHgBgNYAAgGAAgIgBgIYgBgJgBgKgBgLYAAgFgBgGgBgFYAAgGgBgGgBgGYgDgMgBgNgDgOYgDgNgDgOgDgOYgDgOgEgNgDgOYgEgNgEgOgEgOYgEgOgEgNgEgNYgEgNgEgMgEgMYgDgMgEgLgDgLYgPgogKgbAAAAYgEgKgLgGgLAEYgKAEgGALAEALYAAAAABABAAAA");
	this.shape_412.setTransform(604.65,369.05,1,1,0,0,0,1,1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#F3BEBC").s().p("AhHjJYAAAAANAaASAnYAEAKAFAKAFAMYAFALAFAMAFAMYAFANAFAMAFANYAFAOAFANAFAMYAEAOAGANAEAOYAEANAEAOAEAMYAEANADANADAMYABAGACAGABAFYABAGABAFABAGYACAKACAKACAJYABAIABAIABAGYACANAAAHAAAAIAAAAYAAAAAAgIAAgMYgBgGAAgIAAgJYgBgJgBgKgBgKYgBgGgBgFAAgGYgBgGgBgGgBgGYgCgMgCgNgDgOYgDgNgDgOgDgOYgCgOgFgNgDgOYgEgOgEgOgEgNYgEgOgEgNgEgNYgEgNgEgNgEgMYgDgLgEgMgEgKYgPgpgKgbAAAAYgDgKgMgFgKAEYgLADgFAMAEAKYAAABAAAAAAAB");
	this.shape_413.setTransform(604.2,367.95,1,1,0,0,0,1,1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#F3BEBC").s().p("AhHjJYAAAAANAaASAnYAEAKAFAKAFAMYAFALAFAMAFAMYAFAMAGANAEANYAFANAFAOAFAMYAFAOAFANAEAOYAEANAEAOAEAMYAEANADANADAMYACAGABAGACAFYABAGABAGABAFYACAKACAKABAJYACAIAAAIABAGYACANABAHAAAAIAAAAYAAAAgBgHAAgNYAAgGgBgIAAgJYgBgIgBgKgBgLYgBgGAAgFgBgGYgBgGgBgGgBgGYgCgMgCgNgCgOYgDgNgDgOgDgOYgDgOgEgNgEgPYgEgNgDgOgFgNYgEgOgEgNgEgNYgEgNgEgNgEgMYgDgMgEgLgEgKYgPgpgKgbAAAAYgEgKgLgGgLAEYgKAEgFAMAEAKYAAABAAAAAAAB");
	this.shape_414.setTransform(603.75,366.85,1,1,0,0,0,1,1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#F3BEBC").s().p("AhHjKYAAAAAMAaATAoYAEAKAFAKAEALYAFAMAGAMAFAMYAFANAFAMAEAOYAFANAFANAFANYAFANAFAOAEANYAEAOAEANAEANYAEANADAMADAMYACAGACAGABAGYABAFABAGABAFYACALACAJACAJYABAJABAHABAGYACANABAHAAAAIAAAAYAAAAgBgHAAgNYgBgGAAgIAAgIYgBgJgBgKgCgLYAAgFgBgGAAgGYgBgGgBgGgBgGYgDgMgCgNgCgNYgDgOgDgNgDgOYgDgOgEgOgEgOYgDgNgEgOgEgOYgFgOgEgNgEgNYgEgNgEgNgEgMYgDgMgEgLgDgKYgPgpgKgbAAAAYgEgKgLgGgKAEYgLAEgFALAEALYAAAAAAABAAAA");
	this.shape_415.setTransform(603.15,365.7,1,1,0,0,0,1,1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#F3BEBC").s().p("AhHjKYAAAAAMAaASAnYAFAKAEALAFALYAFAMAFAMAFAMYAFANAFAMAEAOYAGANAEANAFANYAFANAFAOAEANYAFAOAEANAEANYAEANADANADAMYABAGACAFABAGYACAGABAFABAGYACAKACAKACAIYABAJABAIABAGYACANABAHAAAAIAAAAYAAAAgBgIAAgMYgBgHAAgHgBgJYgBgJgBgKgBgLYgBgFAAgGgBgFYgBgGgBgGgBgGYgCgNgCgNgDgNYgDgNgDgOgDgOYgDgOgEgOgEgOYgDgNgEgOgEgOYgEgOgEgNgEgNYgEgNgEgNgEgMYgDgMgEgLgDgKYgPgpgKgbAAAAYgEgLgLgFgKAEYgLADgFAMADAKYABABAAAAAAAB");
	this.shape_416.setTransform(602.6,364.6,1,1,0,0,0,1,1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#F3BEBC").s().p("AhHjKYAAAAAMAaASAnYAEAKAFALAEALYAFAMAFAMAFAMYAFANAFANAEANYAGANAEAOAFAMYAFAOAFANAEAOYAFANAEANAEANYAEANADANADAMYACAGABAGACAFYABAGABAFABAGYACAKACAKACAJYACAIABAIABAGYACANABAHAAAAIAAAAYAAAAgBgIgBgMYAAgGgBgIAAgJYgBgJgBgKgCgKYAAgGgBgFgBgGYgBgGgBgGgBgGYgCgMgCgNgDgOYgDgNgDgOgDgOYgDgOgEgOgEgOYgDgNgEgOgEgOYgEgNgEgOgEgNYgEgNgEgNgEgLYgDgMgDgMgEgKYgOgpgKgbAAAAYgDgLgMgFgKADYgLAEgFAMADAKYABAAAAABAAAB");
	this.shape_417.setTransform(602.05,363.5,1,1,0,0,0,1,1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#F3BEBC").s().p("AhHjLYAAAAAMAbARAnYAJAUAJAXALAZYAEANAFANAFANYAFANAFAOAEAMYAFAOAFANAEAOYAFANAEAOAEANYAEAMADANADAMYACAGABAGACAGYABAFABAGACAFYACALACAJACAJYABAIACAIABAGYACANABAHAAAAIAAAAYAAAAgBgHgBgNYAAgGgBgIAAgJYgCgIgBgKgBgLYgBgGgBgFAAgGYgBgGgCgGgBgGYgCgMgCgNgDgNYgDgOgDgOgDgOYgDgOgEgNgDgPYgEgNgEgOgEgNYgEgOgEgOgEgNYgIgagHgYgGgVYgOgpgKgbAAAAYgDgLgMgFgKADYgLAEgFALADALYABAAAAABAAAA");
	this.shape_418.setTransform(601.45,362.4,1,1,0,0,0,1,1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#F3BEBC").s().p("AhHjLYAAAAAMAaARAoYAIAUAKAXAKAZYAFANAFANAEANYAFANAFAOAFANYAEANAFAOAFANYAEAOAEANAEANYAEANADANAEAMYABAFACAGABAGYACAGABAFABAFYACALADAKACAIYABAJABAIABAGYACAMACAHAAAAIAAAAYAAAAgBgHgBgMYAAgHgBgHgBgJYgBgJgBgKgCgLYgBgFAAgGgBgGYgBgFgBgGgBgGYgDgNgCgNgDgNYgDgNgDgOgDgOYgDgOgEgOgDgOYgEgNgDgPgFgNYgEgOgDgOgEgNYgIgagHgYgHgVYgNgpgKgcAAAAYgDgKgMgGgKAEYgLADgFAMADAKYABABAAAAAAAB");
	this.shape_419.setTransform(600.9,361.3,1,1,0,0,0,1,1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#F3BEBC").s().p("AhHjMYAAAAALAbASAoYAIAUAJAXAKAZYAFANAFANAFANYAEANAFAOAFANYAEANAGAOAEANYAEAOAEANAEANYAEANAEANADAMYACAGABAGACAFYABAGABAFACAGYACAKACAKACAJYACAIABAIABAGYACANACAHAAAAIAAAAYAAAAgBgIgBgMYgBgHAAgHgBgJYgBgJgCgKgBgKYgBgGgBgGgBgFYgBgGgBgGgBgGYgCgMgCgOgDgNYgDgNgDgOgEgOYgDgOgEgOgDgOYgEgNgDgOgEgOYgEgOgEgNgEgOYgIgagGgYgHgVYgOgpgJgcAAAAYgDgKgLgGgLADYgKAEgGALADALYABAAAAABAAAA");
	this.shape_420.setTransform(600.3,360.15,1,1,0,0,0,1,1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#F3BEBC").s().p("AhHjMYAAAAALAbARAoYAIAUAKAXAKAZYAEANAFANAFANYAEAOAFANAFANYAFAOAFANAEAOYAEANAEAOAFANYAEAMADANADAMYACAGACAGABAGYABAFACAGABAFYADALACAJACAJYABAJACAHABAGYACANACAHAAAAIAAAAYAAAAgBgHgBgNYgBgGgBgIgBgJYgBgJgBgJgCgLYgBgGAAgFgBgGYgBgGgCgGgBgGYgCgMgCgNgDgOYgDgNgDgOgDgOYgEgOgDgOgEgOYgDgNgEgOgEgOYgEgOgEgNgDgNYgIgbgHgYgGgVYgOgpgJgcAAAAYgDgLgLgFgLADYgKADgGAMADAKYAAABABAAAAAB");
	this.shape_421.setTransform(599.55,359.05,1,1,0,0,0,1,1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#F3BEBC").s().p("AhHjNYAAAAALAbARAoYAIAVAJAXAKAZYAFANAFANAFANYAEAOAEANAFANYAFAOAFANAEAOYAEAOAFANAEANYAEANADANAEAMYADALADAMADAKYACALACAKACAIYACAJACAIABAGYACAMACAHAAAAIAAAAYAAAAgBgHgBgMYgBgHgBgHgBgJYgBgJgCgKgBgLYgCgLgCgLgCgNYgDgMgCgNgDgNYgDgOgDgNgDgOYgDgOgEgOgEgPYgDgNgEgOgEgOYgEgOgDgNgEgNYgIgbgGgYgHgVYgNgqgJgbAAAAYgDgLgLgGgLAEYgKADgGALADALYAAAAABABAAAA");
	this.shape_422.setTransform(598.85,357.95,1,1,0,0,0,1,1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#F3BEBC").s().p("AhHjNYAAAAALAbARAoYAHAUAKAYAJAZYAKAaAJAbAJAaYAFAOAFAOAEANYAFAOAEANAEANYAEANADANAEAMYADAMADALADALYACAKADAKACAJYACAIABAIABAGYADANABAHAAAAIAAAAYAAAAAAgIgCgMYgBgHAAgHgBgJYgCgJgBgKgCgKYgCgLgCgMgCgMYgDgNgCgNgDgNYgDgNgDgOgDgOYgDgOgEgOgEgOYgGgcgJgcgHgaYgHgbgHgYgGgVYgNgqgIgcAAAAYgEgKgLgGgKADYgLAEgGALADAKYABABAAAAAAAB");
	this.shape_423.setTransform(598.15,356.85,1,1,0,0,0,1,1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#F3BEBC").s().p("AhHjOYAAAAALAcAQAoYAIAUAJAYAKAaYAJAZAIAbAKAbYAFANAFAOAEAOYAEANAEAOAEANYAEANAEAMAEAMYACAGABAGACAGYABAFACAGABAFYAKArAGAcAAAAIAAAAYAAAAgEgdgGgrYgBgGgBgFAAgGYgCgGgBgGgBgGYgDgMgCgNgDgNYgDgOgDgOgDgOYgDgOgEgOgEgOYgHgbgHgdgHgaYgIgagGgZgGgVYgNgqgIgcAAAAYgDgKgLgGgLADYgLADgGALADALYABAAAAABAAAA");
	this.shape_424.setTransform(597.4,355.75,1,1,0,0,0,1,1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#F3BEBC").s().p("AhHjOYAAAAAKAbAQApYAIAUAJAYAKAZYAJAaAJAcAJAaYAFAOAFANAEAOYAFAOAEANAEANYAEANAEANADAMYACAGACAFABAGYACAGABAFABAGYALAqAGAcAAAAIAAAAYAAAAgEgcgGgsYgBgFgBgGgBgGYgBgFgCgGgBgHYgCgMgDgNgDgNYgDgOgDgNgDgPYgDgOgEgOgDgOYgIgbgHgdgHgaYgHgagHgZgGgVYgMgqgIgcAAAAYgDgLgLgGgLADYgLADgGAMADAKYABABAAAAAAAB");
	this.shape_425.setTransform(596.7,354.65,1,1,0,0,0,1,1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#F3BEBC").s().p("AhHjPYAAAAAKAcAQApYAIAUAJAYAJAaYAJAZAKAcAJAaYAEAOAFANAFAOYAEAOAEANAEANYAEANAEANADAMYACAGACAGACAFYABAGACAGABAFYAKAqAHAdAAAAIAAAAYAAAAgEgdgHgrYgBgGgBgGgBgFYgBgGgBgGgCgGYgCgNgDgMgDgOYgDgNgDgOgDgOYgDgOgEgOgDgPYgIgbgHgcgHgbYgGgagHgZgGgVYgMgqgIgcAAAAYgDgLgLgGgLADYgKADgHALADALYABAAAAABAAAA");
	this.shape_426.setTransform(595.95,353.5,1,1,0,0,0,1,1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#F3BEBC").s().p("AhHjPYAAAAAKAbAQApYAHAVAJAYAKAaYAJAZAJAcAJAaYAEAOAFAOAFANYAEAOAEAOAEANYAEANAEAMAEAMYACAGABAGACAGYACAFABAGABAFYALArAHAcAAAAIAAAAYAAAAgEgdgHgrYgBgGgBgFgBgGYgCgGgBgGgBgGYgDgMgDgNgDgOYgCgNgDgOgEgOYgDgOgEgOgDgOYgHgcgHgcgHgbYgHgagGgZgGgVYgMgqgIgcAAAAYgDgLgLgGgLADYgKADgHALADAKYAAABABABAAAA");
	this.shape_427.setTransform(595.35,352.4,1,1,0,0,0,1,1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#F3BEBC").s().p("AhHjPYAAAAAKAbAPApYAIAVAJAYAJAaYAJAZAKAcAIAaYAFAOAFAOAEAOYAEANAEAOAFANYAEANADANAEAMYAEAMADALADALYALAqAHAcAAAAIAAAAYAAAAgFgdgHgrYgCgLgCgLgDgNYgDgMgCgNgDgNYgDgOgDgOgDgOYgDgOgEgOgEgOYgHgcgHgcgHgbYgGgagHgZgGgVYgLgqgIgcAAAAYgDgLgLgGgLADYgKACgHALADALYAAABABAAAAAB");
	this.shape_428.setTransform(594.75,351.3,1,1,0,0,0,1,1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#F3BEBC").s().p("AhHjQYAAAAAKAcAPApYAHAVAJAYAKAaYAIAZAKAcAIAbYAFANAFAOAEAOYAEAOAFANAEANYAEANAEANADAMYAEAMAEALACALYAMAqAHAcAAAAIAAAAYAAAAgFgcgHgsYgCgKgDgMgDgMYgCgNgDgNgDgNYgDgNgDgOgDgOYgDgPgEgOgEgOYgHgbgHgdgGgbYgHgagGgZgGgVYgLgqgIgdAAAAYgDgKgLgHgLADYgKADgHALADALYAAAAABABAAAA");
	this.shape_429.setTransform(594.15,350.2,1,1,0,0,0,1,1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#F3BEBC").s().p("AhHjQYAAAAAKAbAPAqYAHAVAJAYAJAaYAJAZAJAcAIAbYAFAOAFAOAEANYAFAOAEAOAEANYAIAaAIAYAGAVYALArAIAcAAAAIAAAAYAAAAgFgdgIgrYgEgWgGgZgGgbYgDgNgDgOgDgOYgDgOgEgOgDgPYgHgbgHgdgHgbYgGgagGgZgGgVYgLgrgIgcAAAAYgDgLgLgGgKADYgLADgGAKADALYAAABAAAAAAAB");
	this.shape_430.setTransform(593.55,349.1,1,1,0,0,0,1,1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#F3BEBC").s().p("AhHjQYAAAAAKAbAOAqYAIAUAIAZAJAaYAJAaAJAbAJAbYAJAcAJAcAIAaYAIAaAIAYAGAWYAMAqAIAcAAAAIAAAAYAAAAgFgdgJgrYgEgWgGgYgGgbYgFgbgHgdgHgcYgHgcgHgdgHgaYgFgbgHgZgFgVYgLgrgIgcAAAAYgCgLgLgGgLACYgLADgGALADALYAAAAAAABAAAB");
	this.shape_431.setTransform(592.95,347.95,1,1,0,0,0,1,1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#F3BEBC").s().p("AhHjRYAAAAAmBvAlBuYAEAOAFAOAFAOYAEAOAEANAEANYAIAbAHAYAHAVYANAqAIAcAAAAIAAAAYAAAAgGgcgJgrYgFgWgFgZgGgbYgDgOgDgOgDgOYgDgOgEgOgDgOYgbhxgdhyAAAAIAAAAYgCgLgLgGgLACYgLADgGALACALYABAAAAABAAAA");
	this.shape_432.setTransform(592.35,346.85,1,1,0,0,0,1,1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#F3BEBC").s().p("AhHjRYAAAAAlBvAlBvYAFANAEAOAFAOYAEAOAEANAEAOYAIAaAIAYAHAVYAMArAJAcAAAAIAAAAYAAAAgGgdgJgrYgFgWgGgZgFgbYgDgNgDgOgDgOYgEgOgDgPgEgOYgbhxgchyAAAAIAAAAYgCgLgLgHgLADYgLADgGAKACALYABABAAAAAAAB");
	this.shape_433.setTransform(591.75,345.75,1,1,0,0,0,1,1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#F3BEBC").s().p("AhHjSYAAAAAlBwAkBvYAKAcAJAcAIAaYAIAaAIAZAGAVYANAqAJAcAAAAIAAAAYAAAAgGgdgKgrYgFgVgFgagGgbYgGgbgGgcgIgdYgahxgchzAAAAYgCgKgLgHgLADYgLACgGALACALYABAAAAABAAAA");
	this.shape_434.setTransform(591.15,344.65,1,1,0,0,0,1,1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#F3BEBC").s().p("AhHjSICQG/IAAAAIhqnKIAAAAYgCgKgLgHgLACYgKADgHALACAKYABABAAAAAAAB");
	this.shape_435.setTransform(590.65,343.5,1,1,0,0,0,1,1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#F3BEBC").s().p("AhHjSICQHAIAAAAIhqnLIAAAAYgCgLgLgHgLADYgKACgHALACALYABAAAAABAAAB");
	this.shape_436.setTransform(590.2,342.4,1,1,0,0,0,1,1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#F3BEBC").s().p("AhHjTICQHBIAAAAIhqnLYgCgLgLgHgLADYgKACgHALACALYABAAAAABAAAAIAAAA");
	this.shape_437.setTransform(589.7,341.3,1,1,0,0,0,1,1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#F3BEBC").s().p("AhHjTICQHBIAAAAIhqnMYgCgKgLgHgLACYgKADgHALACAKYABABAAAAAAABIAAAA");
	this.shape_438.setTransform(589.25,340.2,1,1,0,0,0,1,1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#F3BEBC").s().p("AhHjTYAAAAAjBxAkBwYADAOAEAOAFAOYAEAOAFANAEANYAJAbAJAYAHAVYAOAqAJAcAAAAIAAAAYAAAAgHgcgKgrYgGgWgGgZgGgbYgEgOgDgNgEgPYgDgOgDgOgDgPYgZhygah0AAAAYgCgLgLgGgKACYgLACgHALACALYAAAAABABAAAB");
	this.shape_439.setTransform(588.75,339.1,1,1,0,0,0,1,1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#F3BEBC").s().p("AhHjUYAAAAAjBxAjBxYADAOAFAOAEAOYAFAOAEANAFAOYAJAaAIAZAHAVYAPAqAJAcAAAAIAAAAYAAAAgHgdgLgrYgFgWgGgZgHgbYgDgNgEgOgDgOYgDgOgEgPgDgOYgYhzgah0AAAAYgCgLgLgHgKADYgLACgHALACAKYAAABABAAAAABIAAAA");
	this.shape_440.setTransform(588.3,338,1,1,0,0,0,1,1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#F3BEBC").s().p("AhHjUYAAAAAiBxAjBxYADAOAFAOAEAOYAFAOAFAOAEANYAJAaAJAZAHAVYAOAqAKAcAAAAIAAAAYAAAAgHgdgLgrYgGgVgGgZgHgbYgDgOgEgOgDgOYgDgOgDgPgEgOYgYhzgZh0AAAAYgCgLgLgHgKACYgLADgHAKACALYAAABABAAAAABIAAAA");
	this.shape_441.setTransform(587.8,336.85,1,1,0,0,0,1,1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#F3BEBC").s().p("AhHjVYAAAAAIAdANArYAGAVAHAZAIAbYAIAaAJAdAJAbYAEAOAEAPAEAOYAFAOAEANAFANYAJAbAIAZAHAVYAQAqAKAbAAAAIAAAAYAAAAgIgcgMgrYgGgWgFgZgHgbYgDgOgEgNgDgPYgDgOgDgOgEgPYgGgcgGgdgFgbYgGgbgFgagFgWYgJgrgFgdAAAAYgDgLgKgHgLACYgLACgHALACALYAAAAABABAAAA");
	this.shape_442.setTransform(587.55,335.75,1,1,0,0,0,1,1);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F3BEBC").s().p("AhHjVYAAAAAIAcAMArYAGAWAIAZAHAbYAJAaAIAdAJAbYAEAPAEAOAEAOYAFAOAFAOAEANYAJAaAIAZAIAVYAQAqAKAcAAAAIAAAAYAAAAgIgdgMgrYgHgVgFgagHgbYgDgNgEgOgDgOYgDgPgDgOgEgPYgGgcgGgdgFgbYgGgbgFgagEgWYgJgsgFgdAAAAYgDgLgKgHgLACYgLADgHAKACALYAAABABAAAAAB");
	this.shape_443.setTransform(587.35,334.65,1,1,0,0,0,1,1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#F3BEBC").s().p("AhHjVYAAAAAIAcAMArYAGAWAHAZAIAbYAIAaAJAdAJAcYAEAOADAOAFAOYAEAOAFAOAEANYAKAbAHAYAIAVYAQAqALAcAAAAIAAAAYAAAAgIgdgNgrYgGgVgGgZgGgbYgEgOgDgOgEgOYgDgOgDgPgDgOYgGgcgHgegFgbYgFgbgFgagEgWYgJgsgFgdAAAAYgDgLgKgHgLACYgLADgHAKACALYAAAAABABAAAB");
	this.shape_444.setTransform(587.1,333.55,1,1,0,0,0,1,1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#F3BEBC").s().p("AhHjWYAAAAAIAdAMArYAGAVAHAaAHAbYAIAaAJAdAJAcYAEAOAEAOAEAPYAFANAEAOAFAOYAEANAFANAEAMYAEAMAEALAEALYAQAqALAbAAAAIAAAAYAAAAgIgcgNgrYgEgLgCgLgDgNYgEgMgDgNgDgOYgDgOgEgOgDgOYgEgOgDgPgDgOYgGgcgGgdgFgcYgFgbgFgagEgWYgJgsgFgdAAAAYgCgLgLgHgLACYgLACgHAKACALYAAABAAAAABAB");
	this.shape_445.setTransform(586.85,332.45,1,1,0,0,0,1,1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#F3BEBC").s().p("AhHjWYAAAAAHAcAMAsYAGAVAHAaAHAbYAJAbAIAcAJAcYAEAOAEAPAEAOYAFAOAEAOAFANYAEANAFANAEAMYAEAMAEAMAEAKYARAqALAcAAAAIAAAAYAAAAgJgdgNgrYgDgKgDgMgDgNYgDgMgEgNgDgOYgDgNgEgOgEgOYgDgPgDgOgDgPYgGgcgGgdgFgbYgFgcgFgagEgWYgIgsgFgdAAAAYgCgLgLgHgLACYgLACgHAKACALYAAABAAAAABAB");
	this.shape_446.setTransform(586.65,331.3,1,1,0,0,0,1,1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#F3BEBC").s().p("AhHjXYAAAAAHAdAMArYAGAWAHAZAHAcYAIAbAJAcAIAcYAEAPAEAOAEAOYAFAOAEAOAFANYAFAOAEAMAEANYAEAMAEALAFALYARApALAcAAAAIAAAAYAAAAgJgcgNgrYgEgLgDgMgDgMYgDgNgDgNgEgNYgDgOgEgOgDgOYgDgOgDgPgEgPYgGgcgFgdgFgbYgFgcgFgagEgWYgIgsgFgeAAAAYgCgLgLgHgLACYgLACgHALACAKYAAABAAABABAA");
	this.shape_447.setTransform(586.4,330.2,1,1,0,0,0,1,1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#F3BEBC").s().p("AhHjXYAAAAAHAdAMArYAGAWAGAZAHAcYAIAbAJAdAJAbYAEAPADAOAEAOYAFAOAFAOAEAOYAFANAEANAFAMYAEAMAEAMAEAKYASAqALAbAAAAIAAAAYAAAAgJgcgOgrYgEgKgCgMgDgNYgEgMgDgNgDgOYgEgOgDgOgEgOYgDgOgDgPgDgPYgGgcgFgdgGgbYgFgcgEgagEgWYgIgsgFgeAAAAYgCgLgLgHgLACYgKACgIAKACALYAAABAAAAABAB");
	this.shape_448.setTransform(586.15,329.1,1,1,0,0,0,1,1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#F3BEBC").s().p("AhHjXYAAAAAHAdALArYAGAWAGAaAIAbYAIAbAHAdAJAcYAFAOAEAPADAOYAFAOAFAOAEANYAEANAFANAFAMYAEANAEALAEAKYAFALADAKAEAIYADAIAEAIADAGYAFAMADAGAAAAIAAAAYAAAAgCgHgFgMYgCgGgDgIgDgIYgCgJgDgKgEgLYgDgKgDgMgEgMYgDgNgEgNgDgOYgDgNgDgOgEgPYgDgOgDgPgDgOYgHgcgEgegGgbYgFgcgEgagEgWYgHgsgFgeAAAAYgCgLgKgHgLACYgLACgIAKACALYAAAAAAABABAB");
	this.shape_449.setTransform(585.95,328,1,1,0,0,0,1,1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#F3BEBC").s().p("AhIjYYAAAAAIAdALAsYAFAWAHAZAHAcYAIAbAIAdAIAcYAFAOAEAPAEAOYAEAOAFAOAEANYAFAOAFANAEAMYAEAMAEAMAFAKYAEAKAEAKAEAJYADAIAEAHACAGYAGAMADAHAAAAIAAAAYAAAAgDgHgEgMYgCgHgDgHgDgJYgDgIgDgKgDgLYgEgLgDgMgDgMYgEgMgDgNgEgOYgDgOgDgOgEgOYgDgPgDgOgDgPYgHgcgEgegFgbYgFgcgFgagDgWYgIgsgEgeAAAAYgCgLgKgHgLABYgLACgIAKACALYAAABAAAAAAAB");
	this.shape_450.setTransform(585.7,326.9,1,1,0,0,0,1,1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#F3BEBC").s().p("AhHjYYAAAAAHAdAKAsYAGAWAGAZAHAcYAEANAEAPAEAOYAEAOAEAOAFAOYAEAPAEAOAEAOYAEAOAFAOAEAOYAFANAFANAEAMYAFAMAEAMAEAKYAEALAEAJAEAJYADAIAEAIADAFYAGAMADAHAAAAIAAAAYAAAAgDgHgEgMYgDgGgDgIgDgIYgCgJgEgKgDgLYgEgKgDgMgDgNYgEgMgDgNgEgOYgDgNgDgPgEgOYgDgOgDgPgDgPYgDgNgDgPgCgPYgDgOgCgOgDgOYgEgcgFgagEgWYgGgsgFgeAAAAYgCgLgKgIgLACYgLACgHAKABALYAAAAABABAAAB");
	this.shape_451.setTransform(585.5,325.75,1,1,0,0,0,1,1);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#F3BEBC").s().p("AhIjZYAAAAAHAdALAsYAFAWAHAaAHAcYADANAEAPAEAOYAEAOAEAOAFAOYAEAPAEAOAEAPYAEAOAFAOAFANYAEAOAFANAEAMYAFAMAEAMAFAKYAEAKAEAKAEAJYADAIAEAHADAGYAGAMADAHAAAAIAAAAYAAAAgDgHgEgNYgDgGgDgHgDgJYgDgJgDgJgEgLYgDgLgDgMgEgMYgDgNgEgNgDgNYgEgOgDgOgEgPYgDgOgDgPgDgOYgDgOgDgPgCgOYgCgPgDgOgDgOYgEgcgEgagEgWYgHgtgEgeAAAAYgCgLgKgHgLACYgLABgHAKABALYAAABAAAAAAAB");
	this.shape_452.setTransform(585.25,324.65,1,1,0,0,0,1,1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#F3BEBC").s().p("AhIjZYAAAAAHAdAKAsYAGAWAGAaAHAcYAEANAEAPAEAOYAEAOAEAOAEAPYAEAOAFAPADAOYAFAOAEAOAFAOYAEANAFANAFAMYAEAMAEAMAFAKYAFALAEAJADAJYAEAIAEAHADAGYAGAMADAHAAAAIAAAAYAAAAgDgHgFgMYgCgHgDgHgDgJYgDgIgDgKgEgLYgEgKgDgMgDgNYgEgMgEgNgDgOYgDgOgEgOgDgOYgDgPgDgOgEgPYgDgOgCgPgCgOYgDgPgCgOgDgOYgFgcgEgagDgWYgHgtgEgeAAAAYgCgLgKgHgLABYgLACgHAKABALYAAABAAAAAAAB");
	this.shape_453.setTransform(585,323.55,1,1,0,0,0,1,1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#F3BEBC").s().p("AhHjZYAAAAAGAdAKAsYAGAWAGAaAHAcYADAOAEAOAEAOYAEAPAEANAEAPYAFAOAEAPAEAOYAEAOAFAOAEAOYAEANAFANAFAMYAFANAEALAEALYAFAKAEAKAEAIYADAIAEAHADAGYAGAMAEAHAAAAIAAAAYAAAAgDgHgFgMYgCgGgEgIgDgIYgDgJgDgKgEgLYgEgKgDgMgDgNYgEgMgEgNgDgOYgDgNgEgPgDgOYgDgOgDgPgDgPYgEgOgCgOgCgPYgCgPgDgOgDgOYgEgcgEgagEgWYgGgtgEgeAAAAYgCgLgKgHgLABYgLACgHAKABALYAAAAABABAAAB");
	this.shape_454.setTransform(584.8,322.45,1,1,0,0,0,1,1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#F3BEBC").s().p("AhIjaYAAAAAHAeAKAsYAFAWAGAaAHAcYAEAOADAOAEAOYAEAPAEAOAEAOYAFAPAEAOAEAPYAEAOAFAOAEANYAEAOAGANAEAMYAFAMAEAMAFAKYAFALAEAJAEAJYADAIAEAHADAGYAHAMADAGAAAAIAAAAYAAAAgDgHgFgMYgDgGgDgHgDgJYgDgJgDgJgEgLYgEgLgDgMgEgMYgEgMgEgNgDgOYgDgOgEgOgDgPYgDgOgDgPgDgPYgEgNgBgPgDgPYgCgOgDgPgCgOYgFgcgEgagDgWYgGgtgEgeAAAAYgCgLgKgIgLACYgLABgHAKABALYAAABAAAAAAAB");
	this.shape_455.setTransform(584.55,321.35,1,1,0,0,0,1,1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#F3BEBC").s().p("AhIjaYAAAAAHAdAJAtYAFAWAHAaAGAcYAEAOAEAOADAPYAEAOAEAOAFAOYAEAPAEAPAEAOYAEAOAFAOAEAOYAFANAFANAFAMYAEANAEALAFALYAFAKAEAKAEAIYAEAIAEAHADAGYAGAMAEAHAAAAIAAAAYAAAAgDgHgFgMYgDgHgDgHgDgIYgEgJgDgKgEgLYgEgKgDgMgEgNYgDgMgEgNgDgOYgEgOgDgOgEgOYgDgPgDgPgDgOYgDgOgCgPgCgPYgDgOgDgPgCgOYgEgcgEgagDgWYgGgtgEgeAAAAYgCgLgKgIgLABYgLACgHAKABALYAAAAAAABAAAB");
	this.shape_456.setTransform(584.3,320.2,1,1,0,0,0,1,1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#F3BEBC").s().p("AhHjbYAAAAAGAeAJAsYADAMADAMACAMYADANAEAOADAOYADAOAEAOAEAPYAEAOADAOAFAOYAEAPAEAPAFAOYADAOAFAPAFANYAEAOAFANAFAMYAFAMAEAMAFAKYAEALAFAJAEAJYAEAIAEAHADAGYAGALAEAHAAAAIAAAAYAAAAgDgHgGgMYgCgGgEgHgDgJYgDgJgEgJgDgLYgFgLgDgMgDgMYgEgNgEgNgDgOYgEgNgDgPgEgOYgDgPgDgOgDgPYgDgOgBgPgDgPYgCgOgDgPgCgOYgCgOgCgNgCgNYgCgNgCgMgCgLYgFgtgEgfAAAAYgBgLgKgHgLABYgLABgIAKABALYAAABAAAAABAB");
	this.shape_457.setTransform(584.1,319.1,1,1,0,0,0,1,1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#F3BEBC").s().p("AhHjbYAAAAAGAdAJAtYACALADANADAMYADANADAOADAOYAEAOADAOAEAPYAEAOAEAOAEAPYAEAOAFAPAEAPYAEAOAEAOAFANYAEAOAFANAFAMYAFAMAEAMAFALYAFAKAEAJAEAJYAEAIAFAHADAGYAGAMAEAGAAAAIAAAAYAAAAgDgHgGgMYgCgGgEgHgDgJYgEgIgDgKgEgLYgEgKgDgMgEgNYgEgMgEgNgDgOYgDgOgEgOgDgPYgDgOgDgPgDgPYgDgOgCgPgDgOYgCgPgDgPgCgOYgCgOgCgNgCgNYgCgNgBgMgCgLYgFgugEgeAAAAYgBgLgKgIgLACYgLABgIAKABALYAAABAAAAABAB");
	this.shape_458.setTransform(583.85,318,1,1,0,0,0,1,1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#F3BEBC").s().p("AhIjcYAAAAAGAeAJAtYADALACAMADANYADANADAOADAOYAEAOAEAOADAPYAEAOAEAOAEAPYAEAPAFAOAEAPYAEAOAFAOAEAOYAEAOAGANAFAMYAEAMAFAMAFAKYAFALAEAJAEAJYAEAIAFAHADAGYAGALAEAHAAAAIAAAAYAAAAgDgHgGgMYgCgGgEgHgEgJYgDgJgDgJgEgLYgFgLgDgMgEgMYgDgNgFgNgDgOYgDgOgEgOgDgOYgDgPgDgPgDgPYgDgNgCgQgCgOYgDgPgCgOgDgOYgCgPgCgNgBgNYgCgNgCgMgBgLYgGgugDgeAAAAYgBgLgKgIgLABYgLABgIAKABALYAAABAAABAAAA");
	this.shape_459.setTransform(583.6,316.9,1,1,0,0,0,1,1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#F3BEBC").s().p("AhHjcYAAAAAFAeAJAtYACALADAMADANYADANADAOADAOYADAOAEAOAEAPYADAPAEANAEAPYAFAPAEAPAEAOYAFAPAEAOAEANYAEAOAGANAFAMYAFAMAEAMAFAKYAFALAEAJAEAJYAEAIAFAHADAGYAHALAEAHAAAAIAAAAYAAAAgDgHgGgMYgDgGgEgHgDgJYgEgJgDgJgEgLYgFgKgDgNgEgMYgDgMgFgNgDgOYgDgOgEgOgDgPYgDgPgDgPgDgOYgCgOgDgPgCgPYgDgPgCgOgCgOYgCgOgCgOgCgNYgBgNgCgMgCgLYgFgugDgeAAAAYgBgLgKgIgLABYgLABgIAKABALYAAABAAAAABAB");
	this.shape_460.setTransform(583.4,315.8,1,1,0,0,0,1,1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#F3BEBC").s().p("AhHjcYAAAAAFAeAJAtYACALADAMADANYACANADAOADAOYAEAOADAOAEAPYAEAPADAOAFAOYAEAPAEAPAEAOYAFAPAEAOAFAOYAEANAFANAFAMYAFANAEALAGALYAFAKAEAKAEAIYAEAIAFAHADAGYAHAMAEAGAAAAIAAAAYAAAAgEgHgFgMYgDgGgEgHgEgJYgDgIgEgKgEgLYgEgKgDgMgEgNYgEgMgEgNgDgOYgEgOgDgOgEgPYgDgOgDgPgDgPYgCgOgCgPgDgPYgCgPgDgOgCgOYgCgOgBgOgCgNYgCgNgCgMgBgLYgFgugDgeAAAAYgBgLgKgIgLABYgLABgIAKABALYAAABAAAAABAB");
	this.shape_461.setTransform(583.15,314.65,1,1,0,0,0,1,1);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#F3BEBC").s().p("AhIjdYAAAAAGAeAIAtYACAMADAMADANYADANADAOADAOYADAOAEAOADAPYAEAPADAOAFAPYAEAOAEAPAFAPYAEAOAEAOAFAOYAEAOAGANAEAMYAGAMAEAMAFAKYAFALAFAJAEAJYAEAIAFAHADAGYAHALAEAHAAAAIAAAAYAAAAgDgHgGgMYgDgGgEgHgEgJYgDgJgEgJgEgLYgFgKgDgNgEgMYgEgNgEgNgDgOYgEgNgDgPgEgOYgDgPgDgPgCgPYgDgOgCgPgDgPYgCgPgCgOgCgOYgCgOgCgOgCgNYgBgNgCgMgBgLYgFgugDgfAAAAYgBgLgKgIgLABYgLACgIAJABALYAAABAAABAAAA");
	this.shape_462.setTransform(582.9,313.55,1,1,0,0,0,1,1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#F3BEBC").s().p("AhHjdYAAAAAFAeAIAtYACALADANADANYACANADAOADAOYADAOAEAOAEAPYADAPADAOAFAPYAEAPAEAPAFAOYAEAPAEAOAFAOYAEANAGANAFANYAFAMAEAMAFAKYAFAKAFAKAEAIYAEAIAFAHAEAGYAHALAEAHAAAAIAAAAYAAAAgEgHgGgMYgDgGgEgHgDgJYgEgIgEgKgEgLYgFgKgDgMgEgNYgEgMgEgNgDgOYgEgOgDgOgEgPYgDgPgDgPgCgPYgDgOgCgPgCgOYgDgPgCgPgCgOYgCgOgBgOgCgNYgCgNgBgMgBgLYgFgugDgfAAAAYgBgLgKgIgLABYgLABgIAKABALYAAABAAAAABAB");
	this.shape_463.setTransform(582.7,312.45,1,1,0,0,0,1,1);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#F3BEBC").s().p("AhIjeYAAAAAGAeAIAuYACALADANACANYADANADANADAPYADAOADAOAEAPYADAPAEAOAEAPYAEAPAFAPAEAOYAEAPAEAOAFAOYAEAOAGANAFAMYAFAMAEAMAGAKYAFALAFAJAEAJYAEAIAFAHAEAGYAHALAEAGAAAAIAAAAYAAAAgEgGgGgMYgDgGgEgHgEgJYgDgJgEgJgEgLYgFgKgDgNgEgMYgEgNgFgNgDgOYgDgOgEgOgDgPYgDgOgDgPgCgPYgEgPgCgPgCgOYgCgPgDgPgCgOYgBgOgCgOgCgNYgBgNgCgMgBgMYgEgugDgeAAAAYgBgLgKgIgLABYgLABgIAJABALYAAABAAABAAAA");
	this.shape_464.setTransform(582.45,311.35,1,1,0,0,0,1,1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#F3BEBC").s().p("AhIjeYAAAAAGAeAHAuYACALADANADANYACANADAOADAOYADAOAEAPADAPYAEAOADAOAEAPYAFAPAEAPAEAPYAEAOAFAPAEANYAEAOAGANAFAMYAFANAEAMAGAKYAFAKAFAKAFAIYAEAIAFAHADAGYAIALAEAGAAAAIAAAAYAAAAgEgGgGgMYgDgGgFgHgDgJYgEgIgEgKgEgLYgFgKgDgMgEgNYgEgMgFgNgDgOYgDgOgEgPgDgOYgDgPgDgPgCgPYgDgPgCgOgDgPYgCgPgCgPgCgOYgCgOgCgOgBgNYgCgNgBgMgBgLYgEgugDgfAAAAYgBgLgKgIgLABYgLABgIAJABALYAAABAAAAAAAB");
	this.shape_465.setTransform(582.25,310.25,1,1,0,0,0,1,1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#F3BEBC").s().p("AhIjeYAAAAAGAeAHAuYACALADANACANYADANADAOACAOYADAOAEAPADAPYAEAOADAPAFAPYAEAOAEAPAEAPYAFAPAFAOAEAOYAEANAFANAGANYAFAMAEAMAGAKYAFAKAFAKAEAIYAFAJAFAGADAGYAIALAEAHAAAAIAAAAYAAAAgEgHgGgMYgDgGgFgHgDgIYgEgJgEgKgFgKYgEgLgDgMgFgMYgEgNgEgNgDgOYgEgOgEgOgDgPYgDgPgCgPgDgPYgDgPgCgOgCgPYgCgPgDgPgCgOYgBgOgCgOgBgNYgCgNgBgMgBgMYgEgugDgeAAAAYgBgLgJgJgLABYgLABgJAKABALYAAABAAAAAAAB");
	this.shape_466.setTransform(582,309.1,1,1,0,0,0,1,1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#F3BEBC").s().p("AhIjfYAAAAACAIACANYACANADATAEAYYACALACAMADAOYACANADAOADAOYAGAcAHAfAIAdYAEAPAEAPAEAOYAFAPAEAOAFAOYAEAOAGANAEAMYAGANAFALAFALYAFAKAFAKAFAIYAEAIAFAHAEAGYAHALAFAGAAAAIAAAAYAAAAgEgGgHgMYgDgGgEgHgEgJYgEgIgEgKgEgLYgFgKgEgMgEgNYgEgMgEgOgDgOYgEgNgDgPgEgPYgDgOgCgPgDgQYgFgdgFgegDgdYgCgOgCgOgBgNYgBgNgCgMgBgMYgCgXgBgTgBgNYgBgOgBgIAAAAYgBgLgJgIgLABYgLABgJAJABALYAAABAAAAAAAB");
	this.shape_467.setTransform(581.75,308,1,1,0,0,0,1,1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#F3BEBC").s().p("AhIjfYAAAAACAHACAOYABANADATAEAXYACAMADAMACAOYACANADAOADAOYAGAdAHAeAIAdYAEAPAEAPAEAPYAFAOAEAPAFAOYAEANAGAOAFAMYAFAMAFAMAFAKYAFALAGAJAEAIYAFAJAFAGADAGYAIALAFAGAAAAIAAAAYAAAAgEgGgHgMYgDgGgFgHgDgIYgEgJgFgJgEgLYgFgLgDgMgFgMYgEgNgEgNgDgOYgEgOgDgPgEgOYgDgPgCgPgDgPYgFgdgEgfgEgdYgCgOgBgOgCgNYgBgNgBgMgBgMYgCgXgCgTAAgNYgBgOgBgIAAAAYgBgLgJgIgLABYgLAAgIAKAAALYAAAAAAABAAAB");
	this.shape_468.setTransform(581.55,306.9,1,1,0,0,0,1,1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#F3BEBC").s().p("AhIjgYAAAAACAIABANYACANADAUAEAXYACAMACAMACANYADAOADANACAPYAGAdAHAeAIAdYAEAPAEAPAFAPYAEAPAFAOAEAOYAFAOAFANAFANYAFAMAFAMAGAKYAFAKAFAKAFAIYAFAIAEAHAEAGYAIALAFAGAAAAIAAAAYAAAAgEgHgHgLYgEgGgEgHgEgJYgEgIgEgKgFgLYgEgKgEgMgEgNYgEgMgFgOgDgOYgEgOgDgOgEgPYgCgPgDgPgCgPYgGgdgEgfgEgdYgBgOgCgOgBgNYgBgNgCgNAAgLYgCgXgCgTAAgOYgBgNgBgIAAAAYAAgLgKgJgLABYgLABgIAJAAALYAAABAAAAAAAB");
	this.shape_469.setTransform(581.3,305.8,1,1,0,0,0,1,1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#F3BEBC").s().p("AhIjgYAAAAABAIACANYACANADAUAEAXYACAMACAMACANYACAOADAOADAOYAGAdAGAeAIAdYAEAQAFAPAEAOYAFAPAEAPAEANYAFAOAFANAFANYAGAMAFAMAFAKYAFALAGAJAFAIYAEAIAFAHAEAGYAIALAFAGAAAAIAAAAYAAAAgEgHgIgLYgDgGgEgHgEgJYgEgIgFgKgEgKYgFgLgDgMgFgMYgEgNgEgNgEgOYgEgOgDgPgDgPYgCgPgDgPgDgPYgFgdgFgfgDgcYgCgPgBgOgBgNYgCgNgBgMgBgMYgBgXgCgTgBgOYAAgNgBgIAAAAYAAgLgKgJgLABYgLABgIAJAAALYAAABAAAAAAAB");
	this.shape_470.setTransform(581.05,304.7,1,1,0,0,0,1,1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#F3BEBC").s().p("AhIjhYAAAAABAIACANYACAOADATADAYYACALACANADANYACANADAOACAPYAGAdAHAeAHAeYAEAPAFAPAEAPYAFAPAEAOAFAOYAEAOAFANAGAMYAFANAFALAGALYAFAKAFAKAFAIYAFAIAFAHAEAFYAIALAFAGAAAAIAAAAYAAAAgFgGgHgMYgDgGgEgGgFgJYgEgIgEgKgFgLYgEgKgEgMgFgNYgEgNgEgNgEgOYgEgOgDgOgDgPYgCgPgDgPgDgPYgFgegEgfgEgcYgBgPgCgOgBgNYgBgNgBgNgBgLYgCgXgBgTgBgOYAAgOgBgHAAAAYAAgMgKgIgLABYgLAAgIAKAAALYAAAAAAABAAAA");
	this.shape_471.setTransform(580.85,303.6,1,1,0,0,0,1,1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#F3BEBC").s().p("AhIjhYAAAAABAIACANYACAOADATADAYYACALACANACANYACANADAOADAPYAFAdAHAfAIAdYADAPAFAPAEAPYAFAPAEAPAFANYAEAOAGANAFANYAFAMAFAMAGAKYAFALAGAJAFAIYAFAIAFAHAEAGYAIALAFAGAAAAIAAAAYAAAAgFgHgHgLYgDgGgFgHgEgJYgEgIgFgKgEgKYgFgLgEgMgFgMYgEgNgEgNgEgOYgEgOgDgPgDgPYgCgPgDgPgDgPYgFgegEgegDgdYgCgPgCgOAAgNYgCgNgBgNAAgLYgCgXgBgTgBgOYAAgOgBgIAAAAYAAgLgKgIgLAAYgLABgIAJAAALYAAABAAAAAAAB");
	this.shape_472.setTransform(580.6,302.45,1,1,0,0,0,1,1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#F3BEBC").s().p("AjxCAYAAAAAHgFAOgJYAGgFAIgFAJgGYAKgGAKgIALgHYAMgHAMgIANgIYAOgIANgJAPgIYAPgIAPgJAPgJYAQgHAQgJAPgIYAQgJAQgIAQgHYARgIAPgIAQgGYAPgHAQgGAOgGYAOgGAOgFANgFYANgEALgFALgDYALgDAJgDAHgDYAQgEAIgDAAAAIAAAAYAAAAgJACgPAEYgIACgJACgLACYgLADgMAEgNADYgNAEgOAEgPAFYgPAFgQAFgQAGYgQAFgQAHgRAHYgRAGgRAHgPAIYgRAHgRAIgQAHYgRAIgPAIgQAGYgPAHgPAIgOAIYgOAHgNAHgMAHYgMAGgLAGgKAGYgJAFgJAFgHAEYgNAIgIAFAAAAYgKAFgDAMAFAKYAGAJAMAEAKgGYAAAAAAAAABAA");
	this.shape_473.setTransform(669.35,282.55,1,1,0,0,0,1,-1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#F3BEBC").s().p("AjvCBYAAAAAIgFANgJYAGgFAIgFAJgGYAKgGAKgIALgHYALgHANgIANgIYANgIANgJAPgIYAPgJAPgJAPgJYAPgHAQgJAPgIYAQgJAQgIAQgHYAQgIAPgIAQgHYAPgGAPgHAPgGYAOgGAOgFAMgEYANgFAMgFAKgDYALgDAJgDAHgDYAPgEAJgDAAAAIAAAAYAAAAgJACgPAEYgIACgJACgLACYgLADgLAEgOAEYgMAEgPADgPAFYgOAGgQAFgQAGYgQAFgQAHgRAHYgQAGgRAHgQAIYgQAHgRAIgQAHYgQAIgQAIgPAHYgQAHgOAIgOAHYgOAIgNAHgMAHYgMAGgKAHgKAFYgJAGgJAEgHAEYgNAIgIAFAAAAYgKAFgDANAGAJYAFAKAMADAKgGYAAAAABAAAAAA");
	this.shape_474.setTransform(669,281.4,1,1,0,0,0,1,-1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#F3BEBC").s().p("AjsCCYAAAAAHgFANgJYAGgFAIgFAJgGYAJgGAKgIAMgHYALgHAMgIANgIYANgJANgIAPgJYAOgIAPgJAPgJYAQgIAPgIAPgJYAQgJAQgIAPgHYAQgIAQgIAPgHYAQgHAOgGAOgGYAPgGANgFANgFYAMgFAMgFAKgDYALgDAJgDAHgDYAPgFAJgCAAAAIAAAAYAAAAgJACgPAEYgIACgJACgLADYgKACgMAEgNAEYgNAEgOAEgPAFYgOAFgQAGgQAGYgQAFgQAHgQAHYgRAHgQAGgQAIYgQAIgRAHgQAIYgQAIgPAIgPAGYgQAIgOAIgOAHYgNAIgNAHgMAHYgMAGgLAHgJAFYgKAGgIAFgHAEYgNAIgIAEAAAAYgJAGgEAMAGAKYAGAJAMADAJgFYABgBAAAAABAA");
	this.shape_475.setTransform(668.65,280.15,1,1,0,0,0,1,-1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#F3BEBC").s().p("AjqCDYAAAAAHgFANgJYAHgFAHgFAJgGYAJgGAKgIALgHYALgHAMgIANgJYANgIANgJAPgIYAOgJAPgJAPgJYAPgHAPgJAPgJYAPgJAQgIAQgHYAQgIAPgJAPgGYAPgHAPgHAOgGYAOgGAOgFAMgFYANgFALgFAKgDYALgDAJgDAHgDYAPgFAJgDAAAAIAAAAYAAAAgJADgPADYgIACgJADgLADYgKACgMAEgNAEYgNAEgOAEgOAFYgPAGgPAFgQAGYgQAGgPAHgRAHYgQAHgRAHgPAHYgQAIgRAIgQAHYgPAIgQAIgPAHYgPAIgOAIgOAHYgNAIgNAHgMAHYgMAGgKAHgKAFYgJAGgIAFgHAEYgNAIgIAFAAAAYgJAFgDANAFAJYAGAJAMAEAKgGYAAAAABgBAAAA");
	this.shape_476.setTransform(668.3,279.95,1,1,0,0,0,1,-1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#F3BEBC").s().p("AjoCEYAAAAAIgFAMgJYAHgFAHgFAJgGYAJgHAKgHALgHYALgIAMgIAMgIYANgIANgJAPgJYAOgIAOgJAPgKYAPgHAQgJAOgJYAPgJAQgIAQgHYAPgIAPgJAPgGYAPgHAPgHAOgGYAOgHANgFANgFYAMgEALgFALgEYAKgDAJgDAHgDYAPgFAIgDAAAAIAAAAYAAAAgIADgPAEYgIACgJACgLADYgKACgMAFgMAEYgNAEgOAEgOAFYgPAFgPAGgQAGYgPAGgQAHgQAHYgRAHgQAHgPAIYgQAHgQAIgQAIYgQAIgPAHgPAIYgPAHgOAIgOAIYgNAIgNAHgMAGYgLAHgKAHgKAFYgJAGgIAFgHAEYgNAIgIAFAAAAYgJAFgDANAGAJYAFAKANADAJgGYABAAAAgBAAAA");
	this.shape_477.setTransform(667.95,279.7,1,1,0,0,0,1,-1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#F3BEBC").s().p("AjlCFYAAAAAHgFAMgJYAHgFAHgFAJgGYAJgHAKgHAKgHYALgIAMgIANgIYAMgJANgJAOgIYAOgJAPgJAOgJYAPgIAQgJAOgIYAPgJAQgJAPgIYAQgHAOgJAPgHYAPgHAPgGAOgHYANgGAOgFAMgFYAMgFAMgFAKgEYAKgDAJgDAHgDYAPgFAIgDAAAAIAAAAYAAAAgIACgPAEYgIADgJACgKADYgLACgLAFgNAEYgNAEgNAEgPAGYgOAFgPAGgQAGYgPAFgQAIgQAHYgQAHgQAHgPAIYgQAIgQAHgQAIYgQAIgPAHgPAIYgOAIgOAIgOAIYgNAHgNAIgLAGYgMAHgKAHgJAFYgJAGgIAFgHAEYgNAIgIAFAAAAYgJAGgDAMAGAJYAGAKAMADAKgGYAAAAAAgBABAA");
	this.shape_478.setTransform(667.6,279.45,1,1,0,0,0,1,-1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#F3BEBC").s().p("AjjCGYAAAAAHgFANgJYAGgFAHgFAJgGYAJgHAJgHALgIYALgHAMgIAMgIYAMgJANgJAOgJYAOgIAOgJAPgKYAPgHAPgJAOgJYAPgJAPgJAQgIYAPgHAPgJAPgHYAPgHAOgHANgGYAOgHANgFANgFYAMgFALgFAKgEYAKgDAJgDAHgDYAPgFAIgDAAAAIAAAAYAAAAgJACgOAEYgIACgJADgKADYgLADgLAEgNAEYgMAEgOAFgOAFYgOAGgPAFgQAHYgPAFgPAIgQAHYgQAHgRAHgOAIYgQAIgQAIgQAIYgPAIgPAHgPAIYgPAIgNAIgOAIYgNAHgMAIgMAGYgLAHgKAHgJAGYgKAFgHAFgHAEYgNAJgHAEAAAAYgKAGgDAMAGAKYAGAJANADAJgGYAAAAABAAAAgB");
	this.shape_479.setTransform(666.1,280.2,1,1,0,0,0,1,-1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#F3BEBC").s().p("AjhCHYAAAAAHgFANgJYAGgFAHgFAJgHYAIgGAKgIALgHYAKgHAMgIAMgJYAMgJANgJAOgIYAOgJAOgJAOgKYAPgHAPgJAOgJYAPgJAPgJAPgIYAPgIAPgJAPgGYAOgHAPgHANgHYAOgGANgGAMgFYAMgFALgFAKgDYAKgEAJgDAHgDYAOgFAJgDAAAAIAAAAYAAAAgJACgPAEYgHADgJACgKADYgLADgLAEgMAEYgNAFgNAEgOAGYgOAFgPAGgQAGYgPAGgPAIgQAHYgQAHgQAHgPAIYgPAIgQAIgQAIYgPAIgPAHgOAIYgPAIgOAIgNAIYgNAIgMAHgLAHYgMAHgKAHgJAFYgJAGgIAFgGAEYgNAJgHAEAAAAYgKAGgCANAGAJYAGAJAMADAJgGYABAAAAAAAAgB");
	this.shape_480.setTransform(664.6,280.9,1,1,0,0,0,1,-1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#F3BEBC").s().p("AjeCIYAAAAAHgFAMgJYAGgFAHgFAJgHYAIgGAKgIAKgHYALgIALgIAMgIYAMgJANgJAOgJYANgJAOgJAPgJYAOgIAPgJAOgJYAPgJAPgJAPgIYAPgIAOgJAPgHYAOgHAPgHANgGYANgHANgFAMgGYAMgFALgFAKgDYAKgEAJgDAHgDYAOgFAIgDAAAAIAAAAYAAAAgIACgPAEYgHADgJACgKADYgKADgMAEgMAFYgMAEgOAFgOAFYgOAGgOAGgQAGYgPAGgPAIgQAHYgPAHgQAHgPAIYgPAIgQAIgPAIYgPAJgPAHgPAIYgOAIgOAIgMAIYgNAIgNAHgLAHYgLAHgKAHgJAGYgJAFgIAFgGAFYgNAIgHAFAAAAYgJAGgDAMAGAJYAGAKAMACAKgGYAAAAAAAAABgB");
	this.shape_481.setTransform(663.1,281.6,1,1,0,0,0,1,-1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#F3BEBC").s().p("AjXCQYAAAAAGgGALgKYAGgFAHgHAIgHYAIgHAJgIAKgIYAKgJAKgJAMgJYALgJAMgLANgJYANgKAOgKANgKYAOgJAPgJANgKYAHgFAHgFAIgFYAHgEAHgFAIgEYAPgIAOgJAOgIYAPgHAOgHANgHYAHgDAGgDAHgDYAGgDAHgCAGgDYAMgFALgFAKgDYAKgDAJgDAHgDYAOgEAJgDAAAAIAAAAYAAAAgJACgPAEYgHACgJACgKADYgLACgLAEgMAEYgHACgGADgHACYgHACgHACgHAEYgNAFgPAGgPAHYgQAGgPAIgPAIYgIAEgIAEgIAEYgHAEgHAEgHAFYgQAJgPAIgPAJYgOAJgPAKgOAIYgOAIgNAKgMAJYgMAJgMAIgLAIYgLAHgJAIgIAGYgJAHgHAGgGAEYgMAKgHAFAAAAYgJAHgBANAGAIYAHAJANACAJgHYAAgBAAAAABAA");
	this.shape_482.setTransform(661.7,281.9,1,1,0,0,0,1,-1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#F3BEBC").s().p("AjRCXYAAAAAGgHALgLYAFgFAGgIAIgHYAHgHAIgJAJgJYAKgJAKgKAKgLYAMgKALgLAMgKYAMgLANgLAOgKYANgLAOgKAOgKYANgKAOgLAOgJYAPgJAOgIAOgJYAPgIAOgHANgGYAOgHANgFAMgFYAMgFALgEALgEYAKgDAJgDAHgBYAPgEAJgCAAAAIAAAAYAAAAgJABgPADYgIABgJADgKACYgLACgLAEgNAEYgNAEgNAEgOAGYgPAFgOAHgPAHYgPAHgQAIgPAIYgPAJgOAJgQAJYgOAKgQAJgOAKYgOAKgOALgNAJYgOAKgMAKgMAJYgLAKgMAJgKAJYgKAJgJAIgIAHYgIAHgHAHgFAFYgMALgGAGAAAAYgIAHgBANAIAIYAHAIANAAAIgHYAAAAABgBAAAA");
	this.shape_483.setTransform(660.3,282.2,1,1,0,0,0,1,-1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#F3BEBC").s().p("AjKCeYAAAAAFgHAKgMYAFgGAGgHAGgIYAHgIAIgKAIgKYAJgJAKgLAKgLYAKgLALgMALgLYAMgMAMgMANgKYANgMANgLANgLYAHgGAGgFAHgFYAHgGAHgFAHgFYAOgKAOgJAOgIYAPgIANgJAOgGYAOgHANgFAMgFYAMgEAMgEAKgDYALgDAJgDAHgBYAPgDAJgCAAAAIAAAAYAAAAgJABgPACYgIABgJACgLACYgKACgMADgNAEYgNAEgOAFgOAGYgOAFgPAHgPAIYgPAHgPAIgPAKYgHAEgIAFgHAFYgHAFgHAFgIAFYgOAKgPALgNALYgOALgNALgNAKYgNALgMALgLAKYgLALgLAKgJAJYgKAKgIAJgIAIYgIAIgGAHgFAFYgLAMgGAGAAAAYgHAIAAANAIAHYAJAIAMgBAIgIYAAAAAAAAABgB");
	this.shape_484.setTransform(658.95,282.5,1,1,0,0,0,1,-1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#F3BEBC").s().p("AjHCeYAAAAAFgIAJgMYAEgHAGgIAGgIYAGgJAIgJAHgLYAJgKAJgLAJgLYAKgMAKgMAMgMYALgMALgLANgMYAMgMAOgLANgMYAOgKAMgMAOgJYAOgKAPgJAOgIYAHgEAHgEAHgEYAHgDAIgDAGgDYAHgEAHgDAHgCYAGgCAHgDAGgCYANgDALgEALgCYAKgCAKgDAHgBYAQgCAIgBAAAAIAAAAYAAAAgIABgQAAYgIABgJACgLABYgLABgLADgOADYgGACgHACgHACYgHACgHACgHADYgHADgIACgHADYgIAEgHADgIAEYgPAHgPAIgPAJYgQAJgNAKgPAKYgPALgOALgOALYgOAMgMALgNAMYgMAKgMAMgLALYgKALgKALgJAKYgJAKgIAJgIAJYgHAIgGAHgFAGYgJANgGAGAAAAYgHAJABANAJAHYAIAHANgCAHgIYAAgBABAAAAAA");
	this.shape_485.setTransform(658.7,282.5,1,1,0,0,0,1,-1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#F3BEBC").s().p("AjECdYAAAAAFgIAIgNYAEgHAFgIAGgJYAGgJAGgKAHgKYAIgLAIgMAJgMYAKgLAJgNALgMYAGgGAFgGAGgGYAGgGAGgGAGgGIAJgKIAKgIYAGgGAGgGAHgGYAHgFAHgGAHgFYAFgFAIgFAHgFYAHgFAHgFAHgEYAIgEAHgFAHgEYAHgDAIgEAHgEYAHgDAHgDAHgDYAHgDAHgCAHgCYAHgCAGgDAHgBYAMgDAMgEALgBYALgCAJgCAIAAYAPgCAJAAAAAAIAAAAYAAAAgJAAgQAAYgHAAgKABgLABYgLABgMADgNACYgHABgGACgHACYgHACgIABgHADYgHACgIADgIACYgHAEgIADgIADYgHADgIAEgIAEYgIAEgHAEgIAFYgIAFgGAEgIAFYgHAFgIAFgHAGYgIAFgHAGgHAFIgKAIIgKAJYgHAGgHAGgGAGYgGAGgHAGgGAGYgMALgKAMgLAMYgKAMgKALgJAKYgIALgIAKgGAJYgHAJgFAHgFAHYgJAMgFAIAAAAYgHAJACAMAJAHYAJAGANgCAGgJYABAAAAgBAAAA");
	this.shape_486.setTransform(658.45,282.45,1,1,0,0,0,1,-1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#F3BEBC").s().p("AjBCcYAAAAAEgIAIgOYADgGAFgJAFgJYAFgJAGgLAHgLYAHgLAIgMAIgNYAJgMAJgNALgMYAFgGAFgGAGgHYAFgGAGgGAGgHYAGgGAGgGAHgGYAGgGAGgGAHgGYAHgFAHgGAGgFYAHgFAHgFAHgFYAHgFAHgEAIgFYADgCAEgCAEgCYADgCAEgCAEgCYAOgHAPgGAPgFYAHgDAHgCAHgCYAHgCAGgCAHgBYANgDAMgCALgBYALgCAJgBAIAAYAPgBAJAAAAAAIAAAAYAAAAgJAAgPgBYgIAAgKAAgLABYgLAAgMACgNACYgHABgHABgHACYgHABgIACgHACYgPAEgQAFgPAHYgEACgEABgEACYgEACgEACgEACYgIAEgIADgIAFYgGAFgIAEgIAFYgIAFgHAFgHAGYgIAFgHAGgHAGYgHAFgHAGgHAGYgGAHgHAGgGAGYgGAGgGAGgGAHYgMALgKANgKAMYgKAMgJAMgIALYgIAMgHAKgGAJYgHAKgEAIgFAGYgIAOgEAHAAAAYgGAKADAMAJAGYAJAGANgDAGgKYAAAAAAAAAAgB");
	this.shape_487.setTransform(658.2,282.4,1,1,0,0,0,1,-1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#F3BEBC").s().p("Ai/CdYAAAAAEgIAIgOYADgHAEgIAGgJYAFgKAGgKAGgLYAIgLAHgMAIgNYAJgMAJgNALgNYAFgGAFgFAFgHYAGgGAGgGAFgHYAGgGAGgGAHgGYAGgGAGgHAHgFYAHgFAGgGAHgGYAHgFAGgFAHgFYAHgFAIgEAHgEYAEgCADgDAEgCYAEgCADgBAEgCYAHgEAHgEAIgDYAHgDAHgDAHgCYAIgDAHgCAGgCYAHgCAHgCAGgBYANgDAMgDALgBYALgBAJgCAIAAYAQgBAIAAAAAAIAAAAYAAAAgIAAgQgBYgIAAgJABgLAAYgLABgMACgOACYgHAAgGACgHACYgHABgIACgHACYgIACgHADgIACYgIACgHAEgIADYgEACgEABgEACYgEACgEACgEACYgIAEgIAEgHAFYgHAEgIAFgHAFYgIAFgHAFgIAGYgHAFgHAGgHAFYgHAGgHAGgGAGYgHAGgGAHgHAGYgGAGgFAGgGAHYgMALgKANgKAMYgKAMgIAMgJALYgHAMgHAKgHAJYgGAKgFAIgEAGYgIAOgFAHAAAAYgFAKADAMAJAGYAKAGAMgDAGgKYAAAAAAgBAAAA");
	this.shape_488.setTransform(657.5,283.4,1,1,0,0,0,1,-1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#F3BEBC").s().p("Ai8CeYAAAAAEgIAHgOYADgHAEgJAGgJYAFgJAGgKAGgLYAHgLAHgMAJgNYAJgMAIgNAKgNYAFgGAGgGAFgGYAFgGAGgHAGgGYAFgHAHgFAGgGYAGgGAGgHAHgFYAHgGAGgFAHgGYAHgFAGgFAHgFYAHgGAHgDAHgFYAEgCADgCAEgDYAEgBADgCAEgCYAHgEAHgEAIgDYAHgDAHgDAHgCYAHgDAHgCAHgCYAHgCAGgDAHgBYANgDALgDALgBYALgBAJgCAIAAYAPgBAJAAAAAAIAAAAYAAAAgJAAgPgBYgIAAgJABgLABYgLAAgMACgOACYgGABgHACgHABYgHACgIABgHADYgHACgIADgHACYgIADgIADgIADYgDACgEACgEABYgEACgEACgEACYgHAFgJADgHAFYgHAFgHAFgIAEYgHAGgHAFgIAFYgHAFgHAHgHAFYgHAGgHAGgGAGYgGAGgHAHgGAGYgGAGgGAGgGAHYgLALgKANgKAMYgKAMgIAMgIALYgIAMgHAKgGAJYgGAKgFAIgEAGYgIAOgEAHAAAAYgGAKADAMAKAGYAJAGAMgDAGgKYAAAAAAgBABAA");
	this.shape_489.setTransform(656.8,284.4,1,1,0,0,0,1,-1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#F3BEBC").s().p("Ai6CfYAAAAAEgIAHgOYADgHAEgJAFgJYAFgJAGgKAHgLYAGgLAIgMAIgNYAEgGAEgGAFgHYACgDACgDADgDYACgDADgEACgDYAFgGAFgGAFgGYAGgHAGgGAFgGYAGgHAGgGAGgGYAGgGAGgGAHgGYAGgFAHgGAHgFYAGgGAGgFAHgFYAHgFAHgEAHgFYAEgCAEgCADgCYAEgCADgCAEgCYAHgEAHgEAIgDYAHgDAHgDAHgDYAHgCAHgCAHgDYAGgCAHgCAGgBYANgDAMgDAKgBYALgCAJgCAIAAYAPgBAJgBAAAAIAAAAYAAAAgJAAgPAAYgIAAgJABgLABYgLAAgMADgNACYgHAAgHACgHACYgHACgHABgHADYgHACgIADgIACYgHADgIADgIAEYgDABgEACgEACYgEACgEACgEACYgHAEgIAEgIAFYgGAEgIAFgHAFYgHAFgIAGgHAFYgHAFgHAGgHAGYgHAGgHAGgGAGYgGAGgGAHgHAGYgFAGgGAGgGAHYgDADgDADgCACYgDADgDADgCAEYgFAGgFAGgFAGYgKAMgIAMgIALYgHAMgHAKgGAJYgHAKgEAIgEAGYgIAOgEAHAAAAYgGAKADAMAKAGYAJAFAMgDAGgJYAAgBABAAAAAA");
	this.shape_490.setTransform(656.1,285.45,1,1,0,0,0,1,-1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#F3BEBC").s().p("Ai4CfYAAAAAEgHAHgOYADgHAEgJAFgJYAFgJAGgKAGgLYAHgLAHgMAIgNYAEgGAFgGAEgHYACgDADgDACgDYACgDADgEACgDYAFgGAFgGAFgGYAGgHAFgGAGgGYAFgHAGgGAGgGYAGgGAGgGAHgGYAGgFAHgGAGgGYAHgFAGgFAHgFYAGgGAIgEAHgEYADgCAEgDADgCYAEgCADgCAEgCYAHgDAHgFAHgDYAIgDAHgDAGgDYAHgDAHgBAHgDYAHgCAGgCAGgCYANgDAMgDAKgBYALgCAJgBAIgBYAPgBAJgBAAAAIAAAAYAAAAgJAAgPABYgIgBgJABgLABYgLABgMACgNACYgHABgGACgHACYgHACgHABgIADYgHACgHADgIACYgIADgHAEgIADYgDACgEABgEACYgEACgEACgDACYgIAFgIADgHAFYgHAFgHAFgIAFYgHAFgHAGgHAFYgHAFgHAGgHAGYgGAGgHAGgGAGYgHAGgGAHgGAGYgGAGgFAHgGAGYgDADgDADgCACYgDADgDAEgCADYgFAGgFAGgFAGYgJANgIAMgIALYgIALgGAKgGAKYgHAJgEAIgEAHYgIANgEAHAAAAYgGAKADAMAKAGYAJAFANgDAFgJYABgBAAAAAAgB");
	this.shape_491.setTransform(655.4,286.45,1,1,0,0,0,1,-1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#F3BEBC").s().p("Ai2CgYAAAAAEgIAHgNYADgHAEgJAFgJYAFgJAGgKAGgLYAGgLAHgMAIgNYAEgGAFgGAEgHYACgDACgDADgDYACgDACgEADgDYAFgGAFgGAFgGYAFgHAGgGAFgGYAGgHAFgGAGgGYAHgGAFgHAHgFYAGgGAHgFAGgGYAHgFAGgFAGgGYAHgFAHgEAHgFYAEgCADgCADgCYAEgDAEgBADgCYAHgEAHgEAHgDYAHgEAHgDAHgDYAHgDAHgCAHgCYAGgCAHgDAGgBYANgDALgDALgCYAKgBAJgCAIgBYAPgBAJgBAAAAIAAAAYAAAAgJABgPAAYgIAAgJABgLABYgLAAgLADgNACYgHABgHACgHACYgGACgIABgHADYgHACgIADgHADYgIACgHAEgIADYgDACgEACgEACYgEACgEACgDACYgIAEgIAEgHAFYgGAFgIAFgHAFYgHAFgHAFgHAGYgIAFgGAGgHAGYgGAGgHAGgGAGYgGAHgGAGgGAGYgGAGgGAHgFAGYgDADgDADgDACYgCAEgDADgCADYgFAGgFAGgFAHYgJAMgIAMgIALYgHALgHALgGAJYgGAJgEAIgEAHYgIANgEAHAAAAYgGAKADAMAKAGYAKAFAMgDAFgJYABgBAAAAAAgB");
	this.shape_492.setTransform(654.7,287.45,1,1,0,0,0,1,-1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#F3BEBC").s().p("Ai0ChYAAAAAEgIAHgNYADgHAEgJAFgJYAFgJAFgKAGgLYAHgLAHgMAIgNYAEgGAEgGAEgHYAEgGAFgHAFgGYAFgGAEgGAFgGYAGgHAFgGAGgGYAFgHAGgGAGgGYAGgGAFgHAHgFIATgRYAGgGAGgFAHgFYAGgFAHgFAHgEYAEgDADgCAEgCYADgCAEgCADgCYAHgEAHgEAHgDYAHgDAHgEAHgDYAGgDAHgCAHgCYAHgCAGgDAGgBYANgDALgEALgBYAKgCAJgCAIAAYAPgCAJgBAAAAIAAAAYAAAAgJABgPAAYgIAAgJABgLABYgLABgLACgNADYgHABgGACgHACYgHACgHABgHADYgIACgHADgHADYgIADgHADgIAEYgDABgEACgEACYgEACgDACgEACYgIAFgHADgIAGYgGAEgHAFgHAFYgHAGgHAFgHAGYgIAFgGAGgHAGYgGAGgHAGgGAGYgGAHgGAGgGAGYgGAGgFAHgGAGYgFAFgFAHgFAGYgFAGgFAHgFAGYgJAMgIAMgHALYgIALgGALgGAJYgGAJgEAIgEAHYgIANgEAIAAAAYgGAJAEAMAJAGYAKAFAMgDAGgJYAAgBAAAAAAgB");
	this.shape_493.setTransform(654,288.45,1,1,0,0,0,1,-1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#F3BEBC").s().p("AiyCiYAAAAAEgIAHgNYADgHAEgJAFgJYAEgJAGgKAGgLYAGgLAHgMAIgNYAEgGAEgGAEgHYAEgGAFgHAFgGYAEgGAFgGAFgGYAFgHAGgGAFgHYAFgGAGgGAGgGYAGgGAFgHAHgFIATgSYAGgFAGgFAGgFYAHgGAHgEAHgFYAGgFAHgEAHgEYAHgEAHgEAHgDYAHgDAHgEAHgDYAGgDAHgCAHgCYAGgDAGgCAHgCYAMgDAMgDAKgCYAKgCAJgCAIAAYAPgCAJgBAAAAIAAAAYAAAAgJABgPAAYgIAAgJABgLABYgKABgMADgNACYgGABgHADgHABYgGACgIACgHADYgHACgHADgIADYgHADgHAEgIADYgHADgIAFgHAEYgHAEgIAEgHAFYgGAFgIAFgHAFYgHAGgHAFgHAGYgHAFgGAGgHAGYgGAGgHAGgFAGYgHAHgGAGgFAGYgGAHgGAGgFAGYgGAFgFAHgEAGYgFAHgFAGgFAGYgJAMgHAMgIALYgHALgHALgFAJYgGAJgEAIgEAHYgIANgEAIAAAAYgGAJAEANAJAFYAKAFAMgDAGgKYAAAAAAAAAAgB");
	this.shape_494.setTransform(653.3,289.45,1,1,0,0,0,1,-1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#F3BEBC").s().p("AiyCiYAAAAADgIAHgOYADgGAEgJAFgJYAFgJAGgKAGgLYAGgLAHgMAIgMYAEgHAEgGAFgGYAEgHAEgGAFgGYAFgHAFgGAFgGYAFgGAGgGAFgGYAFgHAGgGAGgGYAGgGAGgHAGgFIATgRYAGgGAGgFAHgFYAGgFAHgFAHgEYAHgFAGgFAIgDYAHgEAGgEAHgEYAHgDAHgDAHgDYAGgDAHgCAHgDYAGgCAGgDAHgBYAMgEALgDALgCYAKgCAJgCAIAAYAPgCAIgBAAAAIAAAAYAAAAgIAAgPABYgIAAgJABgLACYgKAAgMADgNADYgGABgHACgHACYgGACgIABgHADYgHADgHADgHACYgIADgHAEgHAEYgIADgHAEgIAEYgHAFgIAEgHAFYgGAFgHAEgHAGYgHAFgHAFgHAGYgHAFgHAGgGAGYgHAGgGAGgGAGYgGAGgGAHgGAGYgGAGgGAHgFAGYgGAFgFAGgFAHYgFAGgEAGgFAGYgJAMgIAMgIALYgHALgHAKgGAJYgGAKgEAIgEAGYgHANgFAIAAAAYgFAJADANAJAFYAKAGAMgEAGgJYAAAAAAgBABAA");
	this.shape_495.setTransform(652.75,290.25,1,1,0,0,0,1,-1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#F3BEBC").s().p("AizChYAAAAAEgIAGgNYAEgHAEgIAFgJYAFgJAGgKAGgLYAHgLAHgMAIgMYAEgGAEgGAEgHYAFgGAEgGAFgGYAFgHAFgGAFgGYAFgGAGgGAFgGYAFgHAGgGAGgGYAGgGAGgGAGgGIATgRYAGgFAGgFAHgFYAGgGAHgEAHgFYAHgEAHgFAHgEYAHgDAHgFAGgDYAHgDAHgDAHgEYAGgDAHgCAHgCYAGgDAGgCAHgCYAMgDALgEALgCYAKgCAJgCAIAAYAPgCAIgBAAAAIAAAAYAAAAgIAAgQABYgHAAgJACgLABYgKABgMADgNACYgGABgHACgHACYgGACgIACgHADYgHACgHADgHADYgIADgHAEgHADYgIAEgHAEgHAEYgIAEgHAEgHAFYgHAFgHAFgHAFYgHAFgHAGgHAFYgHAFgGAHgHAFYgHAGgGAGgGAGYgGAGgGAGgGAGYgGAHgGAGgFAGYgGAFgFAHgFAGYgFAGgFAGgEAGYgKAMgIAMgIALYgHALgHAKgGAJYgGAJgEAIgEAGYgIANgEAIAAAAYgGAJADANAKAFYAJAGAMgDAGgKYAAAAAAAAABgB");
	this.shape_496.setTransform(652.2,291.1,1,1,0,0,0,1,-1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#F3BEBC").s().p("Ai0ChYAAAAAEgIAHgNYADgHAEgJAGgIYAFgJAGgKAGgLYAHgLAHgMAIgMYAJgLAIgNAKgNYAFgGAFgGAFgGYAFgGAGgGAFgGYAFgHAGgGAGgGYAGgGAGgGAGgFIATgRYAGgGAHgFAGgFYAHgFAHgFAGgEYAHgFAHgEAHgEYAHgEAHgEAHgDYAHgEAGgDAHgDYAHgDAGgCAHgDYAGgCAHgDAGgCYAMgDALgEALgBYAKgCAJgDAHAAYAPgCAJgBAAAAIAAAAYAAAAgJAAgPABYgHAAgJACgLABYgLABgLADgNACYgGACgHACgHACYgGACgHABgHADYgHADgIADgHADYgHADgHADgIAEYgHADgIAEgHAFYgHAEgIAEgHAFYgGAFgIAEgHAFYgHAGgHAFgHAFYgHAGgGAGgHAFYgGAGgHAGgGAGYgGAGgGAGgGAGYgGAHgGAGgFAGYgMALgJANgKALYgJAMgIAMgIAKYgIALgHAKgGAJYgGAJgEAIgEAHYgIAMgFAIAAAAYgGAJADANAKAFYAJAGAMgDAGgJYAAgBABAAAAAA");
	this.shape_497.setTransform(651.65,291.9,1,1,0,0,0,1,-1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#F3BEBC").s().p("Ai1CgYAAAAAEgIAHgNYAEgGAEgJAFgIYAFgJAGgKAHgLYAHgLAHgLAIgMYAJgMAIgNALgMYAEgGAGgGAFgGYAFgGAGgGAFgGYAFgHAGgGAGgFYAGgGAGgHAHgFIATgRYAFgFAHgFAGgFYAHgGAHgEAHgFYAHgEAGgFAHgDYAHgEAHgEAHgEYAHgDAHgDAGgDYAHgEAHgCAGgCYAGgDAHgDAGgBYAMgEALgEALgBYAKgCAJgDAHAAYAPgCAJgCAAAAIAAAAYAAAAgJABgPABYgIAAgJACgKABYgLABgLADgNADYgGABgHACgHACYgGACgHACgHADYgHADgHACgIADYgHADgHAEgIADYgHAEgHAEgIAEYgHAEgIAEgHAFYgGAFgHAFgHAFYgHAFgHAFgHAGYgIAFgGAGgHAGYgGAFgHAGgGAGYgGAGgGAGgGAGYgGAGgGAGgFAGYgMALgJANgKALYgKAMgIAMgIAKYgIALgHAKgGAJYgGAJgFAHgEAHYgIANgFAHAAAAYgFAJACAMAKAGYAJAGAMgCAGgKYAAAAABgBAAAA");
	this.shape_498.setTransform(651.1,292.75,1,1,0,0,0,1,-1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#F3BEBC").s().p("Ai2CgYAAAAAEgIAIgNYADgHAFgIAFgJYAFgIAGgKAHgLYAHgKAHgMAJgMYAJgLAIgNAKgMYAFgGAFgHAFgFYAGgGAFgGAGgGYAGgHAFgFAHgGYAGgGAFgGAHgGIATgQYAFgGAHgFAHgFYAGgFAHgEAHgFYAHgFAHgEAHgEYAGgEAHgEAHgDYAHgEAHgDAGgDYAHgDAHgCAGgDYAHgCAGgDAGgCYAMgDALgEAKgCYALgCAJgDAHgBYAPgCAIgBAAAAIAAAAYAAAAgIABgPABYgIAAgJACgKABYgLABgLADgNADYgGABgHADgGACYgHACgHACgHACYgHADgHADgIADYgHADgHAEgHADYgIADgHAFgHAEYgIAEgHAEgHAFYgIAFgGAEgHAFYgHAFgHAGgHAFYgHAFgHAGgGAGYgHAFgHAGgGAGYgGAGgGAGgGAGYgGAGgGAGgFAGYgMALgKAMgKAMYgJALgJAMgIAKYgIALgHAKgGAIYgGAJgFAIgEAGYgIANgFAHAAAAYgGAJACAMAKAHYAJAGAMgDAGgJYABgBAAAAAAAA");
	this.shape_499.setTransform(650.55,293.55,1,1,0,0,0,1,-1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#F3BEBC").s().p("AizCfYAAAAAEgIAFgPYADgHADgJAFgJYAEgKAFgKAFgMYAGgLAHgNAHgNYAIgMAHgOAKgNYAEgGAFgHAFgGYAFgHAFgHAGgGYAFgHAGgGAGgGYAFgHAGgGAHgFYAGgGAGgGAHgFYAHgGAHgFAGgFYAOgJAOgKAPgGYAHgEAHgEAHgCYAIgDAHgDAHgDYAOgEAOgFANgCYAGgBAGgBAGgBYAGgBAGgBAFAAYALgCAJgBAIAAYAPAAAJAAAAAAIAAAAYAAAAgJgBgPAAYgIgBgJAAgLABYgFAAgGAAgGABYgGABgHAAgGABYgOABgOAEgPADYgHACgIADgHACYgIADgIADgIADYgPAGgQAJgOAIYgIAFgHAFgIAFYgHAFgHAGgHAGYgIAFgGAGgHAGYgGAGgHAGgGAHYgGAGgGAHgGAGYgGAHgFAHgFAGYgLANgJANgJANYgJANgHANgHALYgHAMgGALgFAKYgGAKgDAIgEAHYgGAOgEAIAAAAYgFAKAEAMAKAFYAKAFAMgFAFgKYAAAAAAgBAAAA");
	this.shape_500.setTransform(649.25,294.5,1,1,0,0,0,1,-1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#F3BEBC").s().p("AivCgYAAAAACgJAEgPYACgIACgKADgKYAEgKADgLAEgNYAFgMAFgOAGgOYAHgNAGgPAJgNYAEgHAEgIAFgHYAFgHAFgHAFgHYAFgHAGgGAGgHYAFgHAHgGAGgGYAHgGAGgGAHgFYAIgFAGgGAIgEYAHgFAHgEAHgFYAIgDAIgEAHgDYAIgEAIgCAHgDYAIgCAIgDAHgBYAIgCAHgBAHgCYAHgBAHgBAHAAYAOgCAMgBALAAYAGAAAFAAAFAAYAEAAAFAAAEABYAQABAJAAAAAAIAAAAYAAAAgJgBgQgCYgEgBgEAAgFgBYgFAAgFAAgGAAYgLgBgNgBgNABYgHABgHAAgIABYgHABgIABgIABYgIABgIACgIACYgIACgIABgIAEYgIADgJADgIADYgHAEgIAEgJAFYgIAEgHAFgIAFYgIAFgIAGgHAGYgHAGgHAGgHAHYgGAHgHAGgGAHYgGAHgGAHgGAHYgFAHgFAIgFAHYgKAPgIAOgIAOYgIAOgGAOgGANYgFANgFAMgEALYgFAKgCAJgDAIYgFAPgDAJAAAAYgDAKAFAMALADYAKAEAMgGADgKYAAgBAAAAABgB");
	this.shape_501.setTransform(647.95,295.35,1,1,0,0,0,1,-0.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#F3BEBC").s().p("AivChYAAAAACgJAFgPYACgHACgKAEgKYAEgKAEgLAEgNYAFgMAFgNAHgOYAHgNAGgPAJgMYAFgHAEgIAEgHYAFgHAFgHAFgGYAFgIAHgGAFgGIAJgKIAJgJYANgNAOgKAOgKYAGgFAHgEAIgFYAHgEAIgDAHgEYAIgEAHgCAIgDYAIgDAHgDAHgBYAIgCAHgCAHgCYAHgBAHgBAHgBYAGgBAHgBAGAAYAGgBAGAAAFAAYAGgBAFAAAFAAYAEAAAFAAAEAAYAPABAJAAAAAAIAAAAYAAAAgJgBgPgBYgEgBgFAAgEgBYgFAAgFAAgGAAYgFAAgGAAgGAAYgHAAgGABgHAAYgHABgHAAgHABYgIABgHABgIACYgIABgHACgIACYgIADgJACgHADYgIAEgJACgIAEYgIAEgHAFgIAEYgPAJgQAKgOANIgLAJIgKAJYgGAHgHAGgGAHYgGAHgGAHgFAHYgGAHgFAIgFAHYgKAOgIAOgIANYgIAOgHAOgGAMYgGANgFAMgEAKYgFALgDAJgDAHYgFAPgDAIAAAAYgEALAFALALAEYAKAEAMgFADgLYABAAAAgBAAAA");
	this.shape_502.setTransform(647.55,296.45,1,1,0,0,0,1,-0.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#F3BEBC").s().p("AivCiYAAAAADgJAFgPYACgHADgJAEgKYAEgKAEgLAFgMYAFgMAGgNAGgNYAEgHADgHAEgHYACgDACgEACgDYACgEACgDACgDYAFgGAEgIAFgHYAFgGAFgHAFgHYAFgHAGgGAFgHIAJgKYADgDADgDADgDYAHgFAGgHAGgFYAHgGAHgFAHgFYANgJAOgKAPgHYAEgBAEgCADgCYAEgCAEgBAEgBYAHgDAHgDAIgCYAOgEAOgFANgBYAHgBAGgBAGgBYAGgBAGAAAFgBYAGAAAFgBAEAAYAFAAAEAAAEAAYAQAAAJAAAAAAIAAAAYAAAAgJgBgQgBYgEAAgEgBgFAAYgEAAgFAAgGAAYgFABgGAAgGAAYgHAAgGABgHABYgNAAgPAEgPADYgIABgHADgIACYgEABgEACgEABYgEACgEABgEACYgQAGgPAIgPAJYgIAFgHAFgIAFYgHAGgHAGgHAGYgEADgDACgEAEIgJAJYgHAHgHAGgFAHYgGAHgGAHgGAGYgFAHgFAHgGAHYgCAEgDADgCAEYgCADgDADgCADYgEAHgFAHgEAHYgIANgGAOgHAMYgGAMgFAMgFAKYgFAKgDAJgDAHYgGAPgDAIAAAAYgFAKAFAMALAEYAKAEAMgFAEgKYAAAAAAgBAAAA");
	this.shape_503.setTransform(647.1,297.5,1,1,0,0,0,1,-1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#F3BEBC").s().p("AivCjYAAAAADgIAGgPYACgHADgKAFgJYAEgKAEgLAFgLYAGgMAGgNAHgNYADgHAEgGAEgHYACgDACgEACgDYACgEACgDACgDYAFgGAEgHAFgHYAFgHAFgGAFgHYAFgHAGgGAFgHYAGgGAGgHAGgGYAGgGAHgGAGgFYAHgGAHgFAFgFYAHgGAHgEAHgFYAHgEAHgEAIgEYAOgIAPgFAOgGYAHgCAHgCAHgCYADgBADgBAEgBYADgBADAAAEgBYAGgBAGgCAGgBYAGgBAGAAAFgBYALgBAJgBAIAAYAQAAAIgBAAAAIAAAAYAAAAgIAAgQgBYgIAAgJAAgLAAYgFABgGAAgGAAYgGABgHABgGABYgEAAgDABgEAAYgDABgDAAgEABYgHACgHABgIACYgPAFgPAEgQAIYgIADgIADgHAFYgIAEgHAEgHAFYgHAFgIAFgHAFYgHAGgHAGgHAGYgIAFgGAHgGAGYgHAGgGAGgGAHYgGAHgGAHgGAGYgFAHgFAHgFAHYgDADgCAEgDADYgCADgDADgCAEYgEAGgFAHgEAHYgIANgHANgHAMYgGAMgGALgFAKYgFAKgDAJgEAHYgGAOgEAIAAAAYgEAKAEAMAKAEYALAFALgFAFgKYAAAAAAgBAAAA");
	this.shape_504.setTransform(646.7,298.55,1,1,0,0,0,1,-1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#F3BEBC").s().p("AiuCkYAAAAADgIAGgOYADgHADgJAEgKYAEgJAFgLAGgLYAGgMAGgMAHgNYAEgHADgGAEgHYAEgHAEgHAFgGYAEgHAFgGAFgHYAFgGAFgHAFgGYADgEACgDADgDIAIgKYAGgGAGgHAGgGIATgSYAGgFAHgFAFgGYAHgFAHgEAHgFYADgDAEgCADgCYAEgCADgCAEgCYAHgEAHgEAHgDYAHgDAHgDAHgDYAHgDAHgCAHgCYAGgDAHgCAGgBYANgDAMgDAKgBYALgBAJgCAIAAYAPgBAJAAAAAAIAAAAYAAAAgJAAgPgBYgIAAgJABgLAAYgLABgMACgNACYgHABgGABgHACYgHACgIACgHACYgHACgIADgHADYgIACgHAEgIAEYgEABgDACgEACYgEACgEACgEACYgHAFgIAEgGAFYgHAFgIAFgHAFYgHAGgHAGgHAGYgHAFgGAHgGAGIgKAJYgDADgDAEgDADYgGAHgGAGgGAHYgFAHgFAGgFAHYgGAHgEAFgFAHYgFAHgEAGgEAHYgJANgHAMgHAMYgHAMgGALgFAJYgFAKgEAIgDAHYgHAOgEAIAAAAYgFAKAEAMAKAFYAKAFAMgEAFgKYAAgBABAAAAgB");
	this.shape_505.setTransform(646.3,299.6,1,1,0,0,0,1,-1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#F3BEBC").s().p("AiuCmYAAAAADgIAHgOYADgHADgJAFgJYAEgKAFgKAGgMYAGgLAHgMAHgNYAIgMAHgOAKgNYAEgGAFgGAFgHYAFgHAFgGAFgHIAIgJIAIgKYAGgGAGgHAGgGIASgRYAHgGAFgFAHgGYAGgFAHgFAHgFYAHgEAGgFAHgEYAHgEAHgEAHgEYAHgDAHgDAHgDYAGgEAHgBAHgDYAGgCAHgDAGgBYAMgEAMgDAKgBYALgCAJgCAIgBYAPgBAIgBAAAAIAAAAYAAAAgIABgQAAYgHAAgJABgLABYgLABgMACgNADYgGABgHACgHACYgGACgIABgHADYgHADgHADgIADYgHADgHADgIAEYgHADgHAFgIAEYgHAFgIAEgGAFYgHAFgHAFgHAGYgHAFgHAGgHAGYgHAGgGAGgGAGIgKAJIgJAKYgGAGgGAHgFAGYgGAHgFAHgFAGYgLAMgJANgJANYgIANgIAMgHALYgHALgGALgGAKYgFAJgEAIgEAHYgHAOgEAHAAAAYgFAKADAMAKAFYAKAFAMgDAFgKYABgBAAAAAAAA");
	this.shape_506.setTransform(645.85,300.65,1,1,0,0,0,1,-1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#F3BEBC").s().p("AiuCnYAAAAAEgIAGgNYAEgHAEgJAEgJYAFgJAGgKAFgLYAHgLAHgMAHgNYAIgMAIgNAKgNYAJgNAJgMALgNYAKgNAMgMAMgNYAMgMAMgMAMgKIAKgIYADgDAEgCADgCYAHgFAGgFAHgEYAHgEAHgEAGgEYAHgEAHgDAGgDYAHgEAHgCAGgDYAGgCAHgDAGgCYAMgEALgEALgCYAKgCAJgCAHgBYAPgCAJgBAAAAIAAAAYAAAAgJABgPABYgIAAgJACgKABYgLABgLADgNADYgGABgHADgHACYgGACgHACgHADYgHADgHADgIADYgHAEgHADgHAEYgIAEgHAEgHAFYgEACgDACgEACIgKAIYgOAKgNALgOALYgNAMgNAMgMANYgMANgLANgKALYgLANgJANgJAMYgJANgIALgHALYgHAMgHAKgGAJYgFAJgFAIgDAHYgIANgEAIAAAAYgGAJAEAMAJAGYAKAFAMgDAFgKYABAAAAAAAAgB");
	this.shape_507.setTransform(645.45,301.65,1,1,0,0,0,1,-1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#F3BEBC").s().p("AiuCpYAAAAAEgIAHgNYAEgHAEgIAFgJYAFgJAGgKAGgLYAGgLAIgLAHgNYAJgMAIgNAJgMYAKgNAJgMALgNYALgNALgMAMgNYAMgLALgMANgLYAMgLAOgJANgKYAGgEAHgEAGgEYAHgEAHgDAGgEYADgCAEgBADgCYADgBADgCADgBYAHgDAGgDAGgCYAMgEALgFAKgCYAKgCAJgDAHgBYAPgCAIgCAAAAIAAAAYAAAAgIABgPABYgIABgJACgKACYgKABgMAEgMADYgHACgGACgHADYgDABgDABgEABYgDACgDABgEACYgHADgHADgHADYgHAEgHAEgHAEYgOAIgPAJgNAKYgNAKgOAMgNALYgNAMgNAMgLAMYgNAMgLANgKAMYgLAMgJANgKAMYgJAMgIALgIALYgHALgHAKgGAJYgGAJgEAIgEAGYgIANgEAHAAAAYgGAKADAMAJAGYAJAGANgDAGgKYAAAAAAgBAAAA");
	this.shape_508.setTransform(645,302.65,1,1,0,0,0,1,-1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#F3BEBC").s().p("AitCrYAAAAAEgIAHgNYAEgGAEgJAFgIYAGgJAGgKAGgKYAHgLAHgMAIgMYAJgLAIgNAKgNYAKgMAJgNALgMYALgNALgMAMgMYAGgGAGgGAGgGYAFgGAGgFAGgFYANgMANgJAMgKYAOgIAMgJANgHYAMgIANgFAMgGYALgEALgFAKgDYAKgCAJgEAHgBYAPgDAIgCAAAAIAAAAYAAAAgJABgOACYgIABgJADgKACYgKACgLAEgNAEYgMAEgNAFgNAHYgOAGgNAIgOAIYgOAIgOAJgOALYgHAFgGAFgGAGYgHAFgHAGgGAFYgNAMgNAMgLAMYgNAMgKANgLALYgLAMgKANgJALYgJAMgJALgIALYgHAKgHAKgHAJYgGAIgEAIgFAGYgIANgFAHAAAAYgGAJADAMAJAGYAJAHANgDAGgJYAAgBAAAAABAA");
	this.shape_509.setTransform(644.6,303.65,1,1,0,0,0,1,-1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#F3BEBC").s().p("AiSCyYAAAAADgHAGgOYADgGADgIAEgJYAEgJAEgLAFgLYAFgLAGgLAGgNYAGgMAIgNAHgOYAIgNAHgNAJgNYAFgGAEgHAEgHYAFgGAFgHAFgGIAHgKIAIgJYAFgGAEgHAGgFYAFgGAFgGAGgFYAFgGAGgFAGgFYAFgFAGgFAGgEYAGgFAGgEAGgEYAFgDAGgEAGgEYAFgDAGgDAFgCYAGgEAFgBAFgDYAGgCAEgCAFgBYAKgDAIgDAHgCYAOgCAIgCAAAAIAAAAYAAAAgIABgOACYgHABgJACgKACYgFABgFACgFACYgGACgFABgGADYgGACgGADgGADYgGADgGADgGADYgHAEgGAEgGAEYgGAEgHAEgGAFYgGAFgHAFgGAFYgGAFgGAGgFAFYgGAGgGAGgGAGIgIAJIgJAJYgFAHgGAGgFAGYgFAHgFAGgFAHYgKANgJAMgJANYgJANgIANgIAMYgHANgHALgGALYgGALgFAKgFAJYgFAJgEAIgDAHYgGANgEAHAAAAYgFAKAEAMAKAFYAKAFAMgEAFgKYAAgBAAAAAAgB");
	this.shape_510.setTransform(641.3,304.65,1,1,0,0,0,1,-1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#F3BEBC").s().p("Ah2C6YAAAAADgIADgNYACgHACgIADgJYADgJADgLADgLYAEgLAEgMAEgNYAFgNAFgNAFgOYAGgOAGgNAGgNYAEgHADgHAEgHYADgHAEgHAEgHYAEgHAEgHAEgGYAEgHAEgGAEgHYAEgGAFgGAEgGYACgDADgDACgDYACgDADgDACgCYAFgGAFgFAFgFYAFgFAFgEAFgFYALgIAKgIALgGYAJgGALgEAIgEYAKgDAIgCAGgCYAOgDAIgBAAAAIAAAAYAAAAgIABgOABYgHACgIABgKADYgJADgLADgKAGYgMAFgLAHgLAIYgGAEgFAEgGAFYgGAEgFAGgGAFYgDADgCACgDADYgDADgCADgCADYgFAFgGAGgFAHYgEAGgFAGgFAHYgFAGgFAHgEAHYgFAGgEAHgEAHYgEAHgFAHgEAHYgHAOgIAMgGAOYgHAOgHANgFANYgGAMgFAMgEAMYgFALgEALgEAJYgDAJgDAIgCAGYgFAOgDAHAAAAYgDAKAFAMAKAEYALADALgFAEgKYAAgBAAAAAAgB");
	this.shape_511.setTransform(638.05,305.65,1,1,0,0,0,1,-1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#F3BEBC").s().p("AhaDCYAAAAABgIACgNYABgHABgIACgKYACgJACgKACgMYACgLACgMADgNYACgHABgGACgHYACgHABgHACgHYACgHACgHACgHYACgHACgHACgHYAFgOAFgOAFgPYADgHADgHADgHYADgHAEgHADgHYAGgOAIgMAHgNYAIgLAIgMAJgJYACgDACgCADgCYACgCACgDADgCYAEgEAFgEAFgDYAEgDAFgDAEgDYAFgCAFgDAEgCYAEgCAEgBAEgBYAEgBAEgCADgBYANgCAIgBAAAAIAAAAYAAAAgIABgNABYgEABgDAAgFABYgEABgEABgEACYgFACgFACgFACYgFACgFADgFADYgFADgFAEgFADYgDACgCACgDACYgDADgCACgCACYgLAJgJAMgJALYgIAMgJANgIANYgEAHgEAHgEAHYgEAHgDAHgEAHYgGAPgHAOgGAOYgDAIgDAGgCAHYgDAHgCAHgDAHYgCAHgDAHgCAHYgCAHgCAHgCAGYgEANgEAMgDAMYgDALgDALgDAJYgCAKgCAIgBAGYgEAOgCAHAAAAYgCALAGALALACYALADALgHACgKYABgBAAAAAAgB");
	this.shape_512.setTransform(634.75,306.6,1,1,0,0,0,1,-1);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#F3BEBC").s().p("Ag/DKYAAAAAAgIABgNYABgOABgTACgXYAEguAHg9AOg6YAHgeAJgdAMgaYAKgaAOgXARgQYAIgIAJgGAIgEYAIgEAIgDAGgCYAHgBAFgBADAAYAEgBACAAAAAAIAAAAYAAAAgCAAgEAAYgDAAgGAAgGABYgHABgIADgJADYgJAEgJAGgJAIYgTAPgQAWgOAaYgOAagMAegJAdYgUA7gMA+gHAuYgEAXgDAUgCANYgCAOgBAHAAAAYgBALAHAKALACYALABAKgHACgLYAAgBAAAAAAgB");
	this.shape_513.setTransform(631.45,307.6,1,1,0,0,0,1,-1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#F3BEBC").s().p("Ag8DMYAAAAAAgHABgOYABgNACgTACgWYABgLABgNACgMYACgNABgOADgOYACgOACgOADgOYADgOADgPAEgOYABgIADgHACgHYACgHACgHACgHYADgHACgHACgHYADgHADgGACgHYACgGADgGADgGYADgGADgGAEgGYADgFADgFAEgFYAEgFADgFAEgEYAIgIAHgIAHgEYAHgGAIgDAGgEYAGgDAFgBADgBYADgBACgBAAAAIAAAAYAAAAgCABgDABYgDABgGAAgGADYgGACgIADgIAFYgIAFgIAHgJAIYgEAEgEAEgEAFYgEAFgEAFgEAFYgEAFgEAGgCAGYgEAGgEAGgDAHYgDAGgEAHgDAGYgDAHgDAHgDAHYgDAHgDAHgDAHYgCAIgDAHgCAHYgFAPgFAOgEAOYgEAPgEAOgDAOYgEAOgDAOgCANYgDAMgCANgCALYgFAXgDATgCANYgCANgBAHAAAAYgCALAIALALABYAKACALgHABgLYABgBAAAAAAgB");
	this.shape_514.setTransform(631.05,307.9,1,1,0,0,0,1,-1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#F3BEBC").s().p("Ag6DOYAAAAABgHABgOYABgGAAgIABgJYABgJABgKACgLYABgLACgMABgNYACgMACgOADgNYACgOADgOADgOYACgPAEgNAEgPYAEgOADgOAFgOYAFgOAEgNAFgNYAGgMAGgNAGgLYAGgLAHgKAHgJYADgEAEgEADgEYADgEAEgDADgDYAGgHAHgEAFgEYAFgEAFgCADgCYADgBACgBAAAAIAAAAYAAAAgCABgDABYgDACgFABgGAEYgFADgIAEgGAGYgEADgEADgEAEYgDADgEAEgEAEYgIAJgIAJgHALYgHALgHAMgGANYgGAMgHANgGAOYgGAOgFAOgFAPYgFAOgFAOgEAOYgFAOgEAOgDAOYgEAOgDANgDANYgDAMgCAMgDAMYgCALgCAKgCAJYgBAJgCAIgBAGYgCANgCAIAAAAYgBALAHAKALACYALACAKgHACgLYAAgBAAAAAAgB");
	this.shape_515.setTransform(630.6,308.2,1,1,0,0,0,1,-1);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#F3BEBC").s().p("Ag3DQYAAAAABgHABgNYABgHABgIABgJYABgIABgKACgLYABgLACgMACgMYACgNADgNACgNYACgOAEgOADgOYADgOADgNAEgOYACgHACgIACgHYADgHACgGACgHYACgHACgHACgGYADgHACgHADgGYADgGACgGADgHYADgFADgGADgGYACgGAEgFADgFYADgFADgFADgEYADgFADgEADgEYADgEADgEADgDYAFgIAGgFAFgEYAEgFAEgDADgCYADgCABgCAAAAIAAAAYAAAAgBABgDACYgDACgEADgGAEYgEAFgHAEgGAHYgDADgDAEgEAEYgDADgEAFgDAEYgEAEgDAFgEAFYgDAFgEAFgDAGYgEAFgDAGgEAFYgDAGgDAGgDAHYgDAGgDAGgDAHYgDAGgDAHgDAHYgDAHgDAHgDAGYgCAHgDAHgDAHYgFAOgFAPgEANYgEAOgFAOgEANYgDAOgEANgDAMYgDANgDAMgCALYgDALgCAKgCAJYgCAJgBAHgCAHYgCAMgCAIAAAAYgCALAHAKALACYALACAKgHADgKYAAgBAAgBAAAA");
	this.shape_516.setTransform(630.15,308.45,1,1,0,0,0,1,-1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#F3BEBC").s().p("Ag1DSYAAAAABgHACgNYABgNADgSAEgWYABgKADgMACgMYACgNADgNACgNYADgNADgOAEgOYADgOAEgNAEgOYAEgOAEgOAEgOYAFgNAEgOAGgMYAEgNAGgMAFgMYAGgLAFgKAGgKYAFgJAGgJAFgHYAFgIAFgGAEgFYAIgKAFgFAAAAIAAAAYAAAAgFAFgKAJYgEAFgFAGgGAHYgGAHgGAIgGAJYgHAJgGAKgHALYgGALgHAMgGAMYgHANgEANgGANYgGAOgGANgFAOYgFAOgFANgFAOYgFAOgEAOgEANYgEANgEANgDANYgDAMgEAMgCALYgGAVgEASgDANYgDANgBAHAAAAYgDALAHAKALADYALACAKgHADgKYAAgBAAgBAAAA");
	this.shape_517.setTransform(629.75,308.75,1,1,0,0,0,1,-1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#F3BEBC").s().p("AgyDUYAAAAAFgdAHgrYACgLADgLACgMYADgNACgMAEgOYADgNADgOAEgOYADgOAEgMAEgOYAEgOADgPAFgNYAFgOAFgNAEgNYAFgMAFgNAFgLYADgGACgGACgFYADgFADgFACgFYAFgKAEgJAFgIYAEgIAEgGAEgGYAGgLAEgGAAAAIAAAAYAAAAgEAGgIAKYgEAGgEAGgFAHYgFAIgFAIgGAKYgDAFgDAEgDAGYgDAFgDAFgDAGYgGALgGAMgGAMYgGANgGANgFANYgGANgFAOgGAOYgFAOgGANgEANYgFAOgEAOgFANYgEANgEANgDAMYgEANgEALgDALYgLAqgHAdAAAAYgDAKAGALALADYALADAKgGADgLYAAgBABAAAAgB");
	this.shape_518.setTransform(629.3,309,1,1,0,0,0,1,-1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#F3BEBC").s().p("AgwDXYAAAAABgIADgMYABgGACgIACgJYACgJABgKADgKYAFgVAFgZAHgbYADgNAEgOADgOYAEgNADgOAEgNYACgHACgHADgHYACgHACgHACgHYAFgOAEgNAFgNYAEgNAFgMAEgMYAEgMAFgLAFgKYAEgKADgJAEgIYAEgJADgHADgFYAGgMADgHAAAAIAAAAYAAAAgEAHgGALYgEAFgEAHgEAIYgFAIgEAJgFAJYgFAKgGALgFALYgGAMgFAMgGAMYgGANgFANgGANYgDAHgCAHgDAHYgCAGgDAHgDAHYgFAOgFANgFANYgFAOgFANgEAOYgKAagHAYgHAWYgDAKgDAKgDAIYgCAJgCAHgCAHYgEAMgCAHAAAAYgDALAGALALADYAKADALgGAEgLYAAAAAAgBAAAA");
	this.shape_519.setTransform(628.85,309.3,1,1,0,0,0,1,-1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#F3BEBC").s().p("AgtDZYAAAAAHgdAKgqYADgLADgMADgMYADgMADgNAEgNYAHgaAHgcAIgcYADgOAFgOAEgNYAFgOAEgOAEgNYAEgNAEgMAEgMYAEgMAEgLAEgLYAOgpAKgcAAAAIAAAAYAAAAgMAbgSAoYgFAKgFALgFALYgFAMgFAMgFANYgFANgFANgGANYgFAOgFANgFAOYgKAbgLAbgJAaYgFANgFANgEALYgEAMgEAMgDAKYgOAqgKAbAAAAYgDALAFALALAEYAKADAMgFADgLYAAAAAAgBABAA");
	this.shape_520.setTransform(628.45,309.55,1,1,0,0,0,1,-1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#F3BEBC").s().p("AgrDbIB+nEIAAAAIikG4YgEAKAFALALAEYAKAEALgFAEgKYABgBAAAAAAgB");
	this.shape_521.setTransform(628,309.85,1,1,0,0,0,1,-1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#F3BEBC").s().p("AgpDaYAAAAAFgdAJgrYACgLADgLACgNYADgMADgNADgNYAHgbAGgcAHgcYAJgcAIgcAIgaYAEgNAEgNAEgMYAEgMAEgMAEgKYAOgqAKgbAAAAIAAAAYAAAAgMAagSApYgFAKgFALgFALYgFAMgFANgFAMYgKAagLAcgKAbYgJAbgKAcgJAbYgEANgFANgEAMYgDAMgEALgDALYgMAqgIAdAAAAYgDAKAGAMAKADYALADALgGADgLYAAgBAAAAABgB");
	this.shape_522.setTransform(626.85,310.9,1,1,0,0,0,1,-1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#F3BEBC").s().p("AgoDZYAAAAABgHABgNYABgHABgHABgJYAAgJABgLACgKYACgLACgMABgMYACgMADgNACgOYADgNADgOADgOYAEgOADgPAEgNYADgOAEgOAEgOYAEgOAFgOAEgNYAFgNAEgNAFgLYAEgMAFgLAEgKYAEgLAEgJAEgIYAEgJADgHACgGYAGgLADgHAAAAIAAAAYAAAAgEAGgGAMYgDAFgEAHgFAIYgEAIgFAJgFAKYgFAKgFALgGALYgGALgFANgGANYgFANgGANgEANYgGAOgFAOgFAOYgFAOgFANgFAOYgFAOgDAOgEAOYgEANgEANgDANYgDAMgDAMgCALYgDAMgCAKgBAIYgCAJgCAIgBAGYgCANgBAHAAAAYgDALAIALALACYAKACALgHACgLYAAgBAAAAAAgB");
	this.shape_523.setTransform(625.75,312,1,1,0,0,0,1,-1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F3BEBC").s().p("AgmDYYAAAAAAgHAAgNYAAgHAAgIABgJYAAgJAAgKABgLYABgLABgMABgMYABgNACgNACgNYADgOABgOAEgOYADgOADgOADgOYAEgOAFgOADgOYAEgOAFgOAFgNYACgGADgHACgGYACgGADgGADgGYAFgMAFgLAFgKYACgFACgFACgEYADgFACgEACgEYAFgIADgHADgGYAHgLADgHAAAAIAAAAYAAAAgEAHgHAKYgEAGgEAHgFAHYgCAEgDAEgDAEYgDAFgCAEgDAFYgFAKgGALgHALYgDAGgDAFgDAHYgDAGgDAGgDAGYgFANgGANgFAOYgGAOgFAOgGAOYgEAOgFAOgEAOYgFAOgDAPgEANYgDAOgEANgBANYgDANgCANgCALYgCAMgBAKgBAJYgBAJAAAIgBAGYgBANgBAIAAAAYgBALAIAJALACYALABAKgIABgLYAAgBAAAAAAgB");
	this.shape_524.setTransform(624.6,313.05,1,1,0,0,0,1,-1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#F3BEBC").s().p("AglDXYAAAAAAgHgBgOYgBgGAAgIgBgJYAAgKgBgKAAgLYABgLAAgLAAgNYAAgNACgNACgOYACgNAAgPAEgOYADgOADgOADgOYAEgOAEgPAEgOYAEgOAFgNAFgNYADgHADgGACgGYACgDABgDABgDYACgDABgDACgDYAGgMAFgKAFgKYADgFACgFADgFYADgEADgEACgEYAFgIAEgGAEgGYAHgLAEgGAAAAIAAAAYAAAAgFAGgIAKYgEAFgEAHgGAHYgDAEgDAEgDAEYgDAEgDAFgDAEYgGAKgHAKgHALYgBADgCADgCADYgBADgCADgBADYgEAGgCAGgDAHYgGAMgIANgFAPYgFAOgGAOgGAOYgEAPgEANgFAPYgEAOgCAPgDAOYgDAPgEANAAANYgCAOgBAMgBAMYgCAMAAAKAAAJYAAAKAAAIgBAGYAAANAAAIAAAAYAAALAJAJALAAYALABAJgJAAgLYAAgBAAAAAAgB");
	this.shape_525.setTransform(623.4,314.1,1,1,0,0,0,0.9,-1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#F3BEBC").s().p("AgkDYYAAAAAAgIgBgNYgBgGAAgIgBgKYAAgJgBgKAAgLYABgLAAgMAAgMYAAgNACgNABgOYABgHABgHAAgHYABgEAAgDABgEIACgLYADgOADgNADgPYAEgOAEgPAEgOYAEgOAFgNAFgNYADgHACgGADgGYABgEABgDABgDYACgDABgDACgCYAGgMAFgLAGgKYACgFACgFADgEYADgEACgFADgDYAFgIAEgHAEgGYAHgLAEgGAAAAIAAAAYAAAAgFAGgIAKYgEAGgFAGgFAHYgDAEgDAEgDAEYgDAEgDAFgDAFYgGAKgGAKgHALYgCADgCADgCADYgBADgCADgBADYgDAGgCAGgEAHYgGAMgHANgFAPYgGAOgFAOgGAOYgEAPgEAOgEAOYgBAEgBAEgBADYgBAEgBAEgBADYgBAIgBAHgCAHYgCAOgEAOgBANYgBAOgBAMgBAMYgCAMAAAKAAAJYAAAJAAAIAAAHYgBANAAAIAAAAYAAALAJAJALAAYALAAAJgIAAgLYAAgBAAgBAAAA");
	this.shape_526.setTransform(623.2,315.2,1,1,0,0,0,0.9,-1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#F3BEBC").s().p("AgjDZYAAAAAAgIgBgNYAAgHgBgIgBgJYAAgJgBgLAAgLYAAgKABgMAAgNYgBgNADgNABgOYAAgHABgHABgHYAAgDABgEAAgEIACgKYADgPADgNADgPYADgOAFgOAEgPYAEgOAFgNAEgNYADgHADgGACgHYABgDACgDABgDYABgDACgDABgDYAGgLAGgLAFgKYACgFADgFACgFYADgEACgEADgEYAFgIAEgHADgFYAHgMAEgGAAAAIAAAAYAAAAgEAGgIALYgEAFgFAHgFAHYgDAEgDAEgDAEYgDAEgDAFgDAFYgGAJgGALgHALYgCADgCADgBADYgCADgBADgCADYgCAGgDAGgDAHYgGAMgHAOgFAOYgGAOgFAOgGAPYgEAOgEAOgEAPYgBAEgBADgBAEYgBADgBAEAAAEYgCAHgBAHgBAHYgDAPgDANgBAOYgBANgBANgBAMYgCALAAALAAAJYAAAJAAAIAAAHYAAANAAAIAAAAYgBALAJAJALAAYALAAAJgJABgLYAAAAAAgBgBAA");
	this.shape_527.setTransform(623.05,316.25,1,1,0,0,0,0.9,-1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#F3BEBC").s().p("AghDZYAAAAgBgIgBgNYAAgGgBgIAAgKYgBgJgBgKAAgLYABgLAAgMAAgNYgBgMACgNACgOYAAgHABgHABgHYAAgEAAgEABgDIACgLYACgOADgOADgPYAEgOAEgOAEgOYADgPAGgNAEgNYADgHACgGADgHYABgDABgDABgDYACgDABgDACgDYAFgLAGgLAFgKYACgFADgFACgFYADgEACgEADgEYAFgIAEgHADgGYAHgLAEgGAAAAIAAAAYAAAAgEAGgIAKYgEAGgFAGgFAIYgDADgDAEgDAFYgDAEgDAFgDAFYgGAJgGALgHALYgBADgCADgCADYgBADgCADgBADYgCAGgDAGgDAHYgHANgHANgEAOYgGAOgFAPgFAOYgEAPgFAOgEAOYgBAEgBAEgBADYAAAEgBAEgBADYgBAIgBAHgCAHYgCAOgDAOgBANYgBAOgBAMgBAMYgCAMAAAKAAAKYAAAJAAAIAAAGYAAAOAAAHAAAAYAAALAJAJALAAYALABAJgJAAgLYAAgBAAgBAAAA");
	this.shape_528.setTransform(622.9,317.3,1,1,0,0,0,0.9,-1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#F3BEBC").s().p("AggDZYAAAAAAgHgBgNYgBgHgBgIAAgJYgBgJgBgLAAgLYAAgLAAgMABgMYgBgNACgNABgOYABgHAAgHABgHYAAgEABgDAAgEIACgLYADgOACgOADgOYADgPAFgOAEgOYADgPAGgNAEgNYACgHADgGACgHYACgGADgGADgGYAFgMAGgKAFgLYACgFADgFACgEYADgFACgEADgEYAEgIAFgGADgGYAHgLAEgHAAAAIAAAAYAAAAgFAGgHALYgEAFgFAHgFAHYgDAEgDAEgDAEYgDAFgDAEgDAFYgFAKgHALgHALYgDAGgDAGgDAGYgCAGgDAGgDAHYgGANgHANgFAOYgFAPgGAOgEAOYgEAPgEAOgEAPYgBADgBAEgBAEYgBADgBAEAAAEYgCAHgBAHgBAHYgCAPgEANAAAOYgBANgBANgBAMYgCAMABAKgBAJYAAAJAAAIAAAHYAAANAAAIAAAAYAAALAJAJALAAYALAAAJgJAAgLYAAgBAAAAAAgB");
	this.shape_529.setTransform(622.7,318.4,1,1,0,0,0,0.9,-1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#F3BEBC").s().p("AgfDaYAAAAAAgIgBgNYgBgGAAgIgBgKYgBgJgBgKAAgLYAAgLAAgMAAgNYAAgMACgOABgOYAAgHABgHAAgHYABgDAAgEAAgEYABgDABgEAAgDYADgPACgNADgPYADgPAFgOADgOYADgHABgIADgGYACgHACgHACgGYADgHACgGACgHYADgGACgGADgGYAGgMAFgLAFgKYACgFADgFACgFYADgEACgEADgEYAEgIAEgHAEgGYAHgLADgHAAAAIAAAAYAAAAgEAGgIALYgDAGgFAGgGAIYgCAEgDAEgDAEYgDAEgDAFgDAFYgFAKgHAKgGAMYgEAFgDAGgDAHYgBAGgDAGgEAHYgDAGgDAHgDAHYgDAGgCAHgDAHYgFAPgGAOgEAPYgEAPgEAOgEAOYgBAEgBAEgBADYgBAEAAAEgBADYgBAIgBAHgCAHYgCAOgDAOAAAOYgBANgBANgBALYgCAMABALAAAJYAAAJAAAIAAAHYAAANAAAIAAAAYgBALAJAJALAAYAMAAAJgJAAgLYAAgBAAAAgBgB");
	this.shape_530.setTransform(622.55,319.5,1,1,0,0,0,0.9,-1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#F3BEBC").s().p("AgdDbYAAAAgBgIgBgNYgBgHAAgIgBgJYgBgJgBgLAAgLYAAgLAAgMAAgMYAAgNABgNABgOYABgHAAgHABgHYAAgEABgEAAgDYAAgEABgDABgEYACgPADgNACgPYADgPAFgOADgOYACgHACgIACgGYADgHABgHADgGYACgHADgHACgGYACgGACgHADgFYAGgMAFgLAFgKYADgGACgFACgEYADgFACgEADgEYAEgIAEgHAEgFYAGgMAEgGAAAAIAAAAYAAAAgEAGgIALYgEAFgEAHgGAHYgCAEgDAEgDAEYgDAFgCAFgDAFYgGAJgGALgHAMYgDAFgDAGgDAHYgCAGgDAGgDAHYgDAGgDAHgDAHYgDAGgCAIgDAHYgFAOgGAOgEAPYgEAPgEAOgEAPYgBADgBAEAAAEYgBADgBAEAAAEYgCAHgBAHgBAIYgCAOgDAOgBANYgBAOgBAMAAAMYgCAMABAKAAAKYAAAJAAAIAAAHYAAANAAAHAAAAYAAALAJAJALAAYALAAAJgJAAgLYAAAAAAgBAAAA");
	this.shape_531.setTransform(622.35,320.55,1,1,0,0,0,0.9,-1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#F3BEBC").s().p("AgcDbYAAAAgBgHgBgNYAAgHgBgIgBgJYgBgKgBgKAAgLYAAgLAAgMAAgNYgBgMACgOABgOYAAgHABgHABgHYAAgEAAgDAAgEYABgDAAgEABgEYACgOADgOACgPYADgOAFgPADgOYACgHACgIACgGYADgHABgHACgHYADgGACgHACgGYADgHACgGADgGYAFgLAGgMAEgKYADgFACgFACgFYADgEACgEADgEYAEgIAEgHAEgGYAGgMAEgGAAAAIAAAAYAAAAgEAGgIALYgEAFgEAHgFAIYgDAEgDAEgDAEYgDAEgCAFgDAFYgGAKgGALgGALYgEAGgDAGgCAGYgCAHgDAGgDAHYgDAGgDAHgDAHYgEAGgCAIgCAHYgFAOgGAPgEAOYgEAPgEAOgDAPYgBAEgBAEgBADYgBAEAAAEgBADYgBAIgBAHgBAHYgCAPgDANgBAOYgBANgBANAAAMYgCAMABAKAAAJYAAAKAAAIAAAGYAAAOAAAHAAAAYAAALAJAJALAAYALAAAJgJAAgLYAAAAAAgBAAgB");
	this.shape_532.setTransform(622.15,321.65,1,1,0,0,0,0.9,-1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#F3BEBC").s().p("AgaDcYAAAAgBgIgBgNYgBgHAAgIgBgJYgBgJgBgLAAgLYAAgLAAgMgBgMYAAgNABgNABgOYABgHAAgHAAgIYABgDAAgEAAgDYABgEAAgEABgDYACgPADgOACgOYADgPAEgOADgPYACgHACgHACgHYACgHACgHACgGYADgHACgHACgGYACgGACgHADgGYAGgLAFgMAEgKYADgFACgFACgFYADgEACgFACgEYAFgIAEgHADgFYAHgMAEgHAAAAIAAAAYAAAAgFAHgHALYgEAFgEAHgGAIYgCADgDAEgDAFYgDAEgCAFgDAFYgGAKgGALgGALYgEAGgCAGgCAHYgDAGgDAGgDAHYgDAHgDAGgDAHYgDAHgCAHgCAHYgFAPgFAOgFAPYgDAPgEAOgDAPYgBADgBAEgBAEYgBAEAAADgBAEYgBAHgBAIgBAHYgCAOgDAOAAANYgBAOgBANgBALYgBAMABALAAAJYAAAJAAAIAAAHYAAANAAAIAAAAYAAALAJAJALAAYALAAAJgJAAgMYAAAAAAgBAAAA");
	this.shape_533.setTransform(621.95,322.7,1,1,0,0,0,0.9,-1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#F3BEBC").s().p("AgZDcYAAAAAAgHgCgNYAAgHgBgIgBgJYgBgKgBgKAAgLYAAgLAAgMgBgNYAAgMABgOABgOYAAgHABgHAAgHYAAgEABgDAAgEYAAgEABgDAAgEYADgPACgNACgPYADgPAEgOADgPYACgHACgHACgHYACgHACgHACgGYACgHACgHADgGYACgHACgGADgGYAFgMAFgLAFgKYACgGACgFACgEYADgFACgEADgEYAEgIAEgHADgGYAHgMADgGAAAAIAAAAYAAAAgEAGgHALYgEAGgEAGgGAIYgCAEgDAEgDAEYgDAFgCAFgDAFYgFAKgGALgHALYgDAGgDAGgBAHYgDAGgDAGgDAHYgDAHgDAGgDAHYgDAHgCAHgCAHYgFAPgFAOgEAPYgEAPgEAOgDAPYgBAEgBAEgBADYAAAEgBAEAAADYgBAIgBAHgBAHYgDAPgCAOAAANYgBAOgBAMgBAMYgBAMABAKAAAKYAAAJAAAIAAAHYAAANAAAIAAAAYABALAJAJALgBYALAAAJgJgBgLYAAAAAAgBAAgB");
	this.shape_534.setTransform(621.8,323.75,1,1,0,0,0,0.9,-1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#F3BEBC").s().p("AgXDdYAAAAgBgHgBgOYgBgGgBgIgBgKYgBgJgBgLAAgKYAAgMgBgMAAgMYgBgNACgNAAgOYABgHAAgIABgHYAAgHAAgHACgIYACgOACgOACgPYADgPAEgOADgPYACgHABgHADgHYACgHACgHACgHYACgGACgHACgGYACgHACgGADgGYAFgMAFgLAFgLYACgFACgFADgFYACgEACgFADgEYAEgIAEgHADgGYAHgLADgHAAAAIAAAAYAAAAgEAGgHALYgEAGgEAHgGAHYgCAEgDAFgDAEYgCAEgDAFgDAFYgFAKgGALgGAMYgEAGgCAGgCAGYgDAHgCAGgDAHYgDAHgDAGgDAHYgDAHgCAHgCAIYgFAOgFAPgEAPYgEAPgDAOgEAPYgCAHgBAIgBAHYgBAHgBAIgBAHYgCAOgCAOgBAOYAAANgBANgBAMYgBAMABAKAAAJYAAAKAAAIAAAHYABANAAAIAAAAYAAALAJAIALAAYALAAAJgJAAgLYAAgBAAAAAAgB");
	this.shape_535.setTransform(621.6,324.85,1,1,0,0,0,0.9,-1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#F3BEBC").s().p("AgWDeYAAAAgBgIgBgNYgBgHgBgIgBgJYAAgJgCgLAAgLYAAgLgBgMAAgNYgBgMABgOABgOYAAgHABgHAAgHYABgIAAgHABgHYACgPACgOACgPYADgPAEgOADgPYACgHABgHACgHYADgHACgHABgHYAFgNADgNAGgMYAFgMAFgMAEgKYACgFADgFACgFYACgFADgEACgEYAEgIAEgIADgFYAHgMADgHAAAAIAAAAYAAAAgEAGgHAMYgEAFgEAHgFAIYgDAEgDAEgDAEYgCAFgDAFgCAFYgGAKgGALgGAMYgGAMgEANgGANYgCAHgDAGgDAHYgDAHgCAHgCAIYgFAOgFAPgEAPYgDAPgEAOgDAPYgCAIgBAHgBAHYgBAIgBAHgBAHYgCAPgCAOgBANYAAAOgBANgBAMYgBAMABAKAAAJYAAAKABAIAAAGYAAAOAAAHAAAAYAAALAKAJALAAYALAAAIgJAAgMYAAAAAAgBAAAA");
	this.shape_536.setTransform(621.3,325.9,1,1,0,0,0,0.8,-1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#F3BEBC").s().p("AgVDeYAAAAAAgHgCgOYAAgGgBgIgBgKYgBgJgCgLAAgKYAAgMgBgMAAgMYgBgNABgOABgOYAAgHAAgHABgHYAAgHAAgIACgHYACgPACgOACgPYACgPAEgOADgPYACgHABgHACgHYACgHADgHABgHYAEgNAEgOAFgMYAFgMAFgLAEgKYADgGACgFACgFYACgEADgFACgEYAEgIAEgHADgGYAGgMAEgGAAAAIAAAAYAAAAgEAGgHALYgEAGgEAHgFAIYgDAEgDAEgDAEYgCAFgDAFgCAFYgGAKgFALgHAMYgFAMgEANgGANYgDAHgDAGgDAHYgCAHgCAIgDAHYgEAOgFAPgEAPYgDAPgEAPgDAOYgCAIgBAHgBAIYgBAHgBAIAAAHYgCAOgDAOAAAOYAAANgBANgBAMYgBAMABAKAAAKYABAJAAAIAAAHYAAANABAIAAAAYAAALAJAJALgBYALAAAJgJAAgLYAAgBAAAAgBgB");
	this.shape_537.setTransform(621.1,327,1,1,0,0,0,0.8,-1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#F3BEBC").s().p("AgTDfYAAAAgBgIgBgNYgBgHgBgIgBgJYgBgJgCgLAAgLYAAgLAAgMgBgNYgBgNABgNABgOYAAgHAAgIABgHYAAgHAAgHABgIYACgOACgOACgPYACgPAEgPADgOYACgIABgHACgHYACgHADgHABgHYAEgNAEgOAEgMYAFgMAFgLAFgLYACgFACgFACgFYACgEADgFACgEYAEgIAEgHADgGYAGgMAEgHAAAAIAAAAYAAAAgEAHgIALYgDAGgEAGgFAIYgDAEgDAFgCAEYgDAFgCAFgDAFYgFAKgGALgGAMYgFAMgFANgFANYgDAHgDAHgDAHYgCAHgCAHgCAHYgFAPgFAOgDAQYgEAPgDAOgDAPYgCAHgBAIgBAHYgBAIgBAHgBAHYgBAPgCAOgBANYAAAOgBANAAAMYgBAMABAKAAAJYAAAKAAAIABAGYAAAOAAAHAAAAYABAMAJAIALAAYALAAAJgKgBgLYAAAAAAgBAAAA");
	this.shape_538.setTransform(620.95,328.05,1,1,0,0,0,0.8,-1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#F3BEBC").s().p("AgSDfYAAAAAAgHgCgOYgBgGgBgIgBgKYgBgJgBgLgBgKYAAgMAAgMgBgMYgBgNABgOAAgOYABgHAAgHAAgHYABgIAAgHABgHYACgPABgOACgPYACgPAEgPADgOYACgIABgHACgHYACgHACgHABgHYAFgNADgOAFgMYAFgMAFgLAEgLYACgFACgFACgFYACgFADgEACgEYAEgJAEgHADgGYAGgMAEgHAAAAIAAAAYAAAAgFAHgHALYgDAGgEAHgFAIYgDAEgDAEgCAEYgDAFgCAFgDAFYgFALgGALgGAMYgFALgEAOgGANYgCAHgDAHgDAHYgCAHgCAHgDAHYgEAPgFAPgDAPYgDAPgEAOgDAPYgCAIAAAHgBAIYgBAHgBAIgBAHYgCAPgCAOAAANYAAAOgBANAAALYgBAMABALAAAJYAAAJABAJAAAGYAAAOABAHAAAAYAAALAJAJALAAYALgBAJgJAAgLYAAgBAAAAgBgB");
	this.shape_539.setTransform(620.75,329.15,1,1,0,0,0,0.8,-1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#F3BEBC").s().p("AgQDgYAAAAgBgIgCgNYAAgHgBgIgCgJYgBgJgBgLAAgLYgBgLAAgMgBgNYgBgNABgNAAgPYAAgHABgHAAgHYAAgHAAgIABgHYACgPACgOACgPYACgPADgPADgOYACgIABgHACgHYACgHACgHABgHYAEgNAEgOAEgMYAFgMAFgMAEgKYACgGACgFACgFYADgEACgFACgEYAEgIAEgIADgGYAGgMADgGAAAAIAAAAYAAAAgEAGgHAMYgDAFgEAHgFAIYgDAEgCAFgDAEYgCAFgDAFgDAFYgFAKgFALgGAMYgFAMgEAOgGANYgDAHgCAHgDAHYgCAHgCAHgDAHYgEAPgFAPgDAPYgDAPgDAPgDAPYgCAHgBAIgBAHYAAAIgBAHgBAIYgCAOgCAOAAAOYAAANgBANAAAMYgBAMABAKAAAKYABAJAAAIAAAHYABANAAAIAAAAYAAALAKAJALgBYALAAAIgJAAgLYAAgBAAAAAAgB");
	this.shape_540.setTransform(620.6,330.2,1,1,0,0,0,0.8,-1);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#F3BEBC").s().p("AgPDhYAAAAgBgIgBgNYgBgHgBgIgBgJYgBgKgCgKAAgLYgBgMgBgMAAgMYgBgNAAgOABgOYAAgHAAgHAAgIYABgHAAgHABgIYABgPACgOACgPYACgPADgPADgOYACgIABgHACgHYACgHACgHABgHYAEgOADgNAFgMYAFgNAEgLAEgLYADgFACgFABgFYADgFACgEACgFYAEgIAEgHADgGYAGgMADgHAAAAIAAAAYAAAAgEAGgHAMYgDAGgEAHgFAIYgDAEgCAEgDAFYgCAEgDAFgCAGYgFAKgGALgGAMYgEAMgFAOgFANYgDAHgDAHgCAHYgDAHgBAHgDAIYgEAOgFAPgDAQYgDAPgDAOgDAPYgCAIAAAHgBAIYgBAHgBAIAAAHYgCAPgCAOAAANYAAAOgBANAAAMYgBAMABAKAAAKYABAJAAAIAAAHYABANAAAIAAAAYABALAJAJALgBYALAAAJgKgBgLYAAAAAAgBAAAA");
	this.shape_541.setTransform(620.35,331.3,1,1,0,0,0,0.8,-1);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#F3BEBC").s().p("AgNDhYAAAAgBgHgCgOYgBgGgBgIgBgKYgBgJgCgLAAgLYgBgLAAgMgBgNYAAgGgBgHAAgHYAAgHABgHAAgHYAAgHAAgHAAgHYAAgIAAgHABgHYACgPACgOABgQYABgHACgIABgHYABgHACgIABgHYACgIABgHACgHYACgHACgHABgHYAEgOADgNAEgNYAFgMAEgLAFgLYACgGACgFABgFYADgEACgFACgEYAEgIAEgIADgGYAGgMADgHAAAAIAAAAYAAAAgEAHgHALYgDAGgEAHgFAIYgDAEgCAFgDAEYgCAFgDAFgCAFYgFALgGALgFAMYgFAMgEAOgGANYgCAHgDAHgCAHYgDAHgBAIgDAHYgCAHgCAIgCAHYgCAIgCAHgBAIYgDAPgDAPgDAPYgCAHAAAIgBAHYgBAIgBAHgBAIYAAAHgBAHgBAHYgBAHABAHgBAHYAAAOAAANgBALYAAANABAKAAAJYAAAKABAIAAAHYABANAAAIAAAAYAAALAKAIALAAYALgBAIgJAAgLYAAgBAAAAAAgB");
	this.shape_542.setTransform(620.15,332.35,1,1,0,0,0,0.8,-1);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#F3BEBC").s().p("AgMDiYAAAAgBgIgCgNYAAgHgBgIgCgJYgBgKgCgKAAgLYgBgMAAgMgBgNYAAgGgBgHAAgGYAAgHAAgHAAgHYABgHAAgIAAgHYAAgHAAgIABgHYABgPACgOABgPYABgIACgHABgIYABgHACgIABgHYACgHABgIABgHYACgHACgHACgHYADgOADgNAFgNYAEgMAFgMAEgKYACgGACgFACgFYACgFACgEACgEYAEgJAEgHADgGYAFgMAEgHAAAAIAAAAYAAAAgEAGgHAMYgDAGgEAHgFAIYgDAEgCAEgDAFYgCAFgCAFgDAFYgFALgFALgGAMYgEAMgFAOgFANYgCAHgDAHgCAHYgDAHgBAIgDAHYgCAIgCAHgCAHYgCAIgCAHgBAIYgDAQgDAOgDAPYgBAIgBAHgBAIYAAAHgBAIgBAHYgBAHAAAIgBAHYgBAHABAHgBAHYAAANAAANgBAMYAAAMABAKAAAKYABAJAAAIAAAHYABAOAAAHAAAAYABALAJAJALgBYALAAAJgKgBgLYAAAAAAgBAAAA");
	this.shape_543.setTransform(619.9,333.4,1,1,0,0,0,0.8,-1);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#F3BEBC").s().p("AgKDiYAAAAgBgHgCgOYgBgGgBgIgBgKYgBgJgCgLgBgLYAAgLgBgMgBgNYAAgHgBgGAAgHYAAgHAAgHAAgHYABgOgBgPACgPYABgPABgOACgPYAAgIACgHABgIYACgHABgIABgHYACgHABgIABgHYACgHACgHACgHYADgOADgNAEgNYAFgMAEgMAEgLYACgFACgFACgFYACgFACgFACgEYAEgIAEgIACgGYAGgMADgHAAAAIAAAAYAAAAgDAHgHALYgDAGgFAHgEAIYgDAFgCAEgDAFYgCAEgCAFgDAGYgFAKgFAMgFAMYgFAMgEAOgFANYgDAHgCAHgDAHYgCAIgCAHgCAHYgBAIgCAHgCAIYgCAHgDAIgBAIYgDAPgCAOgDAQYgDAPAAAPgCAPYgBAHAAAHgBAHYgBAHABAHgBAHYAAAOAAANAAAMYgBAMABAKABAKYAAAJABAIAAAHYABANAAAIAAAAYABALAJAJALgBYALAAAJgKgBgLYAAAAAAgBAAgB");
	this.shape_544.setTransform(619.7,334.5,1,1,0,0,0,0.8,-1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#F3BEBC").s().p("AgJDjYAAAAgBgIgCgNYgBgHgBgIgBgJYgBgKgCgKgBgLYgBgMAAgMgBgNYgBgGAAgHAAgHYAAgHAAgHAAgHYAAgOAAgPABgPYABgPACgOABgPYAAgIACgHABgIYACgHABgIABgHYACgHABgIABgHYACgHACgHACgHYADgOADgOAEgMYAEgNAFgLADgLYACgGACgFACgFYACgFACgEACgEYAEgJAEgHADgGYAFgNAEgHAAAAIAAAAYAAAAgEAHgHAMYgDAGgEAHgFAIYgCAEgDAFgCAEYgDAFgCAFgCAFYgFALgFAMgGAMYgEAMgEAOgFANYgDAHgCAHgDAHYgCAIgCAHgCAHYgCAIgCAHgCAIYgBAIgDAHgBAIYgCAPgDAPgDAPYgCAPgBAPgBAPYgBAHgBAIAAAHYgBAHAAAHAAAHYAAANAAANAAAMYgBAMABALABAJYAAAKABAIAAAHYABANAAAIAAAAYABALAJAIALAAYALgBAJgJgBgLYAAgBAAgBAAAA");
	this.shape_545.setTransform(619.45,335.6,1,1,0,0,0,0.8,-1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#F3BEBC").s().p("AgIDkYAAAAgBgIgCgOYgBgGgBgIgBgKYgBgJgCgLgBgLYgBgLAAgMgBgNYgBgHAAgGAAgHYAAgHAAgHAAgHYAAgPgBgOABgPYACgPABgPABgPYABgHABgIABgHYACgIABgHABgIYABgHACgIABgHYACgHACgHABgHYADgOADgOAEgMYAFgNAEgMAEgKYACgGACgFABgFYACgFADgFABgEYAEgIAEgIADgGYAFgMADgHAAAAIAAAAYAAAAgDAGgHAMYgDAGgEAHgFAJYgCAEgDAEgCAFYgCAFgDAFgCAFYgFALgFALgFANYgFAMgEANgFAOYgCAHgDAHgCAHYgCAIgCAHgCAIYgCAHgBAIgCAHYgCAIgCAHgBAIYgDAQgDAOgCAPYgDAQAAAPgCAPYAAAHgBAHgBAHYAAAHAAAIAAAGYAAAOAAANAAAMYgBAMABAKABAKYAAAJABAJAAAGYABAOABAIAAAAYAAALAKAIALgBYALAAAIgKAAgLYgBAAAAgBAAAA");
	this.shape_546.setTransform(619.25,336.65,1,1,0,0,0,0.8,-1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#F3BEBC").s().p("AgGDkYAAAAgBgHgCgOYgBgHgBgIgCgJYgBgJgCgLAAgLYgBgMgBgMgBgNYgBgGAAgHAAgHYAAgHAAgHAAgHYAAgOgBgPABgPYABgPABgPACgPYAAgHABgIACgHYABgIABgHABgIYABgHACgIABgHYACgHABgHACgHYADgOADgOAEgNYAEgMAEgMAEgLYACgFACgGABgFYACgFADgEABgEYAEgJAEgHACgHYAGgMADgHAAAAIAAAAYAAAAgEAHgGAMYgDAGgEAHgFAIYgCAEgDAFgCAEYgCAFgCAFgDAGYgFAKgFAMgFAMYgEANgEANgFAOYgCAHgDAHgCAIYgCAHgCAHgCAIYgBAHgCAIgCAHYgCAIgCAIgBAHYgDAQgCAPgDAPYgCAPAAAQgCAOYAAAIgBAHAAAHYgBAHAAAHAAAHYAAAOAAANAAAMYAAAMABAKAAAKYABAJAAAIABAHYABAOAAAHAAAAYABALAJAJALgBYALgBAJgJgBgLYAAgBAAAAAAgB");
	this.shape_547.setTransform(619,337.75,1,1,0,0,0,0.8,-1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#F3BEBC").s().p("AgFDlYAAAAgBgIgCgNYgBgHgBgIgBgKYgCgJgCgLAAgLYgBgLgBgMgBgNYgBgHAAgHgBgGYAAgHAAgHAAgIYAAgOAAgPABgPYABgPABgPABgOYAAgIACgIABgHYABgIABgHABgIYACgHABgIABgHYACgHABgHACgHYADgOADgOADgNYAFgMAEgMADgLYACgGACgFACgFYACgFACgEACgFYADgIAEgIACgGYAGgNADgHAAAAIAAAAYAAAAgEAHgGAMYgDAGgEAHgFAJYgCAEgDAEgCAFYgCAFgCAFgCAGYgFAKgFAMgFAMYgEANgEANgFAOYgCAHgDAHgCAIYgCAHgCAHgCAIYgBAIgCAHgCAIYgCAHgCAIgBAIYgCAPgDAPgCAPYgCAQgBAPgBAPYgBAHAAAHgBAHYAAAIAAAHAAAGYAAAOAAANAAAMYAAAMABALABAJYAAAKABAIAAAHYABANABAIAAAAYAAALAKAIALAAYALgBAIgKAAgLYAAAAgBgBAAAA");
	this.shape_548.setTransform(618.7,338.8,1,1,0,0,0,0.7,-1);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#F3BEBC").s().p("AgDDlYAAAAgBgHgCgOYgBgHgBgIgCgJYgBgJgCgLgBgLYgBgMgBgMgBgNYAAgGgBgHAAgHYgBgHAAgHAAgHYAAgOAAgPAAgPYABgPABgQABgOYABgIABgHABgIYABgIABgHACgIYABgHABgIABgHYACgHABgHACgHYACgOADgOAEgNYAEgMAEgMAEgLYABgGACgFACgFYACgFACgFACgEYADgJAEgHACgHYAGgMADgHAAAAIAAAAYAAAAgEAGgGANYgDAGgEAHgFAIYgCAFgCAEgDAFYgCAFgCAFgCAFYgFALgFAMgEAMYgFANgEANgEAOYgDAHgCAIgCAHYgCAHgCAIgBAHYgCAIgCAHgCAIYgCAIgBAHgBAIYgDAQgCAOgCAQYgCAPgBAPgBAPYAAAIgBAHgBAHYAAAHAAAHAAAHYAAAOAAANAAAMYAAAMACAKAAAKYABAJAAAJABAGYABAOAAAIAAAAYABALAKAIALgBYALAAAIgKgBgLYAAgBAAAAAAgB");
	this.shape_549.setTransform(618.45,339.85,1,1,0,0,0,0.7,-1);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#F3BEBC").s().p("AgBDmYAAAAgCgIgCgNYgBgHgBgIgCgJYgBgKgCgLgBgLYgBgLgBgMgBgNYAAgHgBgHAAgHYgBgGAAgIAAgHYAAgOgBgPABgPYABgPABgQABgOYAAgIABgHABgIYABgHACgIABgIYABgHABgIABgHYABgHACgHACgHYACgOADgOADgNYAFgNADgMAEgLYACgFACgGABgFYACgFACgEACgFYAEgIADgIACgGYAGgNADgHAAAAIAAAAYAAAAgEAHgGAMYgDAGgEAHgFAJYgCAEgCAEgCAFYgCAFgDAFgCAGYgEALgFAMgEAMYgFANgEANgEAOYgDAHgCAIgCAHYgCAHgCAIgBAHYgCAIgCAIgCAHYgBAIgCAIgBAHYgCAQgCAPgDAPYgCAQAAAPgBAPYgBAHAAAIgBAHYAAAHAAAHAAAHYAAANABAOAAAMYgBAMACAKAAAKYABAJABAIAAAHYABAOABAIAAAAYABALAJAIALgBYALgBAJgJgBgLYAAgBAAAAAAgB");
	this.shape_550.setTransform(618.2,340.95,1,1,0,0,0,0.7,-1);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#F3BEBC").s().p("AAADnYAAAAgBgIgCgNYgBgHgCgIgBgKYgBgJgDgLgBgLYgBgMgBgMgBgNYAAgHgBgGgBgHYAAgHAAgHAAgHYAAgPgBgPABgPYAAgPABgPABgPYAAgIABgHACgIYABgHABgIABgIYABgHABgIABgHYABgHACgHACgIYACgOADgNADgNYAEgNAEgMADgLYACgGACgFABgFYACgFACgFACgEYAEgJADgIACgGYAGgNADgHAAAAIAAAAYAAAAgEAHgGAMYgDAGgEAIgEAIYgCAFgDAEgCAFYgCAFgCAFgCAGYgFAKgFAMgEANYgEANgEANgFAOYgCAHgCAIgCAHYgCAHgCAIgBAHYgCAIgCAIgBAHYgCAIgCAIgBAIYgCAPgCAPgCAQYgCAPAAAPgBAPYgBAIAAAHgBAHYAAAHAAAHAAAHYABAOAAANAAAMYAAAMABALABAJYABAKAAAIABAHYABAOAAAHAAAAYABALAKAJALgBYALgBAHgKAAgLYAAAAAAgBAAAA");
	this.shape_551.setTransform(618.05,342,1,1,0,0,0,0.7,-1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#F3BEBC").s().p("AABDnYAAAAgBgHgCgOYgBgHgBgIgCgJYgBgKgCgKgBgMYgBgLgBgMgCgNYAAgHgBgHAAgHYgBgHAAgHAAgHYAAgOgBgPAAgQYABgPABgPABgPYAAgDAAgEABgEIABgMYABgHABgIABgHYABgIABgIABgHYABgHACgHACgIYACgOACgOAEgNYAEgMADgMAEgMYABgFACgGACgFYABgFACgEACgFYAEgJADgHACgHYAGgMACgIAAAAIAAAAYAAAAgDAHgGANYgDAGgEAHgEAJYgCAEgDAFgCAEYgCAFgCAGgCAFYgEALgFAMgEANYgFAMgDAOgFAOYgCAIgCAHgCAHYgCAIgBAHgCAIYgCAHgBAIgCAIIgCALYgBAEAAAEgBAEYgCAQgCAPgCAPYgCAQAAAPgBAPYgBAHAAAIAAAHYgBAHABAHAAAHYAAAOAAANAAAMYAAAMACALAAAJYABAKABAIAAAHYABANABAIAAAAYABALAKAIALAAYALgBAHgKgBgLYAAAAAAgBAAgB");
	this.shape_552.setTransform(617.95,343.1,1,1,0,0,0,0.7,-1);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#F3BEBC").s().p("AACDoYAAAAgBgIgBgNYgCgHgBgIgCgKYgBgJgCgLgBgLYgBgMgBgMgCgNYAAgHgBgGgBgHYAAgHAAgHAAgIYAAgOgBgPAAgPYABgQAAgPABgOYAAgEAAgEABgEIABgMYABgHABgIABgHYABgIABgHABgIYABgHACgHABgIYADgOACgOADgNYAEgNAEgMADgLYACgGACgFABgFYACgFACgFACgEYADgJADgIADgGYAFgNADgHAAAAIAAAAYAAAAgEAHgGAMYgDAGgEAIgEAIYgCAFgCAEgCAFYgCAFgCAFgDAGYgEALgFAMgDANYgFAMgEAOgEAOYgCAIgCAHgCAHYgCAIgBAHgCAIYgBAHgCAIgCAIIgCAMYgBADAAAEgBAEYgCAQgCAPgCAPYgBAQgBAPgBAPYAAAIAAAHgBAHYAAAHABAIAAAGYAAAOAAANAAAMYAAANACAKAAAKYABAJABAIABAHYABAOAAAIAAAAYABALAKAIALgBYALgBAHgKgBgLYAAAAAAgBAAAA");
	this.shape_553.setTransform(617.8,344.15,1,1,0,0,0,0.7,-1);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#F3BEBC").s().p("AAEDpYAAAAgBgIgDgOYAAgHgBgIgCgJYgBgKgDgKgBgMYgBgLgBgNgBgNYgBgGgBgHAAgHYgBgHAAgHAAgHYAAgPgBgPAAgPYAAgPABgQABgOYAAgEAAgEAAgEIACgLYABgIAAgIABgHYABgIABgHABgIYABgHACgIABgHYACgOADgOADgNYAEgNADgMAEgLYABgGACgFABgFYACgGACgEACgFYADgJADgHADgHYAFgNADgHAAAAIAAAAYAAAAgEAHgGANYgDAGgEAHgEAJYgCAEgCAFgCAFYgCAFgCAFgCAGYgEALgFAMgEAMYgEANgEAOgEAOYgCAIgCAHgCAHYgCAIgBAHgCAIYgBAIgCAHgBAIIgDAMYAAAEgBAEAAAEYgCAPgCAPgCAQYgBAPgBAQAAAPYgBAHAAAIAAAHYgBAHABAHAAAHYAAAOABANAAAMYAAAMABALABAJYABAKABAIAAAHYABAOABAIAAAAYABALAKAIALgBYALgBAHgKgBgLYAAAAAAgBAAAA");
	this.shape_554.setTransform(617.65,345.2,1,1,0,0,0,0.7,-1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#F3BEBC").s().p("AAFDpYAAAAgBgIgCgNYgCgHAAgIgCgKYgBgJgDgLAAgLYgCgMgBgMgBgNYgBgHgBgHAAgHYgBgHAAgHAAgHYgBgOgBgPABgQYAAgPABgQAAgOIABgMIABgLYABgIABgIABgHYABgIAAgHABgIYABgHACgIABgHYACgOADgOADgNYADgNAEgMADgLYACgGABgGACgFYABgFACgFACgEYADgJADgIADgGYAFgNACgHAAAAIAAAAYAAAAgDAHgGAMYgDAGgDAIgEAJYgCAEgDAFgCAFYgCAFgCAFgCAFYgEAMgEAMgEAMYgEANgEAOgEAPYgCAHgCAHgCAHYgBAIgCAIgBAHYgCAIgBAIgCAHIgCAMIgCAMYgCAPgBAQgCAPYgBAQgBAPAAAPYgBAIAAAHAAAHYAAAIAAAHAAAHYAAANABANAAANYAAAMACAKAAAKYABAJABAJABAHYABANABAIAAAAYABALAJAIALgBYALgBAHgJgBgLYAAgBAAAAAAgB");
	this.shape_555.setTransform(617.55,346.3,1,1,0,0,0,0.7,-1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#F3BEBC").s().p("AAHDqYAAAAgCgIgCgOYgBgGgCgJAAgJYgCgKgCgKgBgMYgBgLgCgNgBgNYgBgGgBgHAAgHYgBgHAAgHAAgIYgBgOgBgPAAgPYABgQAAgPABgPIAAgMIABgLYABgIABgIABgHYABgIAAgHABgIYABgHACgIABgHYACgOADgOACgNYAEgNADgNAEgLYABgGACgFABgFYACgFACgFABgFYAEgJACgHADgHYAFgNACgHAAAAIAAAAYAAAAgDAHgGAMYgDAHgDAHgEAJYgCAFgDAEgCAFYgBAFgCAGgCAFYgEALgFAMgEANYgDANgEAOgEAOYgCAIgCAHgCAHYgBAIgCAIgBAHYgCAIgBAIgCAIIgCALIgBAMYgCAPgCAQgCAQYgBAPAAAQgBAPYAAAHAAAIAAAHYAAAHAAAHAAAHYABAOAAANAAAMYAAANACAKABAKYABAJAAAJABAGYABAOABAIAAAAYABALAKAIALgBYAKgBAIgKgBgLYAAAAAAgBAAAA");
	this.shape_556.setTransform(617.4,347.4,1,1,0,0,0,0.7,-1);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#F3BEBC").s().p("AAJDqYAAAAgCgHgCgOYgBgHgCgIgCgKYAAgJgDgLgBgLYgBgMgBgMgCgNYgBgHgBgHAAgHYAAgHgBgHAAgHYgBgPgBgPAAgPYAAgPABgQAAgPIABgLIABgMYABgIAAgHABgIYABgIABgHAAgIYABgHACgIABgHYACgOACgOADgOYAEgNADgMADgLYABgGACgFABgGYACgFACgFABgEYAEgJACgIADgGYAFgNACgIAAAAIAAAAYAAAAgDAHgGANYgDAGgDAIgEAJYgCAEgCAFgCAFYgCAFgCAFgCAGYgEALgEAMgEANYgEANgDAOgEAPYgCAHgCAHgCAIYgBAHgCAIgBAIYgBAHgCAIgBAIIgCAMIgCAMYgBAOgCAQgCAQYgBAQAAAPAAAPYgBAIAAAHAAAHYAAAIAAAHAAAHYABAOAAANABAMYAAAMACALAAAJYABAKABAIABAHYABAOABAIAAAAYABALAKAIALgBYAKgBAIgKgBgLYAAgBAAAAAAgB");
	this.shape_557.setTransform(617.25,348.45,1,1,0,0,0,0.7,-1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#F3BEBC").s().p("AAKDrYAAAAgCgIgCgOYgBgGgCgJgCgJYgBgKgCgKgBgMYgBgLgCgNgBgNYgBgHgBgGAAgHYgBgHAAgIAAgHYgBgOgBgQAAgPYAAgPAAgQABgPIAAgLIABgMYABgIAAgHABgIYABgIABgHAAgIYABgHACgIABgHYACgOACgOADgOYADgNADgMAEgMYABgFABgGACgFYABgFACgFACgEYADgJADgIACgHYAFgNACgHAAAAIAAAAYAAAAgDAHgFAMYgDAHgEAHgEAJYgCAFgCAEgCAFYgCAGgBAFgCAGYgEALgFAMgDANYgEANgDAOgEAPYgCAHgCAHgCAIYgBAHgBAIgCAIYgBAHgCAIgBAIIgCAMIgBAMYgCAPgCAQgBAPYgBAQAAAQgBAPYAAAHAAAIAAAHYAAAHAAAHAAAHYABAOAAANABAMYAAANACAKAAAKYABAJABAJABAHYABAOABAHAAAAYABALAKAIALgBYAKgBAIgKgBgLYAAAAAAgBAAAA");
	this.shape_558.setTransform(617.15,349.5,1,1,0,0,0,0.7,-1);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#F3BEBC").s().p("AAMDsYAAAAgCgIgCgOYgCgHgBgIgCgKYgBgJgCgLgBgLYgCgMgBgMgCgOYgBgGAAgHgBgHYgBgHAAgHAAgHYgBgPgBgPgBgQYABgPAAgQAAgOIAAgMIABgMYABgIABgHAAgIYABgIABgHABgIYAAgHACgIABgHYACgPACgOACgNYAEgNADgMADgMYABgGACgFABgFYABgGACgEACgFYADgJADgIACgHYAFgNACgHAAAAIAAAAYAAAAgDAHgFANYgDAGgEAIgEAJYgBAEgDAFgCAFYgBAFgCAGgCAFYgEAMgEAMgEANYgDANgEAOgDAPYgCAHgCAHgCAIYgBAHgBAIgCAIYgBAIgBAHgCAIIgCAMIgBAMYgBAPgCAQgBAQYgBAQAAAPgBAPYAAAIAAAHAAAHYAAAIAAAHABAHYAAAOABANAAAMYAAAMACALABAKYABAJABAJABAHYABANABAIAAAAYABALAKAIALgBYAKgBAIgKgBgLYAAAAAAgBAAAA");
	this.shape_559.setTransform(617,350.6,1,1,0,0,0,0.7,-1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#F3BEBC").s().p("AANDsYAAAAgBgIgDgNYgBgHgCgIgCgKYgBgJgDgLAAgMYgBgLgCgNgCgNYgBgHAAgHgBgHYgBgHAAgHgBgHYAAgPgBgPgBgPYAAgQAAgPABgPIAAgMYAAgEAAgEABgEYAAgHABgIABgIYAAgIABgHABgIYAAgIACgHABgHYACgPACgOACgNYADgNADgNADgLYADgMADgKADgKYADgJADgIACgGYAFgNACgIAAAAIAAAAYAAAAgDAHgFANYgDAHgDAHgEAJYgEAJgEAKgEAMYgDALgEANgEANYgDANgEAOgDAOYgCAIgCAHgCAIYgBAHgBAIgBAIYgCAIgBAIgBAHIgCAMIgBAMYgCAPgBAQgCAQYAAAQAAAQgBAPYAAAHAAAIAAAHYAAAHAAAHABAHYAAAOABAOABAMYAAAMACALAAAJYABAKABAIABAHYACAOAAAIAAAAYACALAKAIALgBYAJgBAIgKgBgLYAAgBAAAAAAgB");
	this.shape_560.setTransform(616.85,351.65,1,1,0,0,0,0.7,-1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#F3BEBC").s().p("AAODtYAAAAgBgIgDgOYgBgGgBgJgCgJYgCgKgDgLgBgLYAAgMgCgMgCgOYAAgGgBgHgBgHYgBgHAAgHgBgIYAAgOgCgQAAgPYAAgQAAgPAAgPIAAgMYAAgEABgEAAgEYABgHAAgIABgIYABgIAAgHABgIYAAgIACgHABgHYACgPACgOACgNYADgOADgMADgMYADgLACgLADgJYADgJADgIACgHYAFgNACgIAAAAIAAAAYAAAAgDAIgFANYgDAGgDAIgEAJYgEAJgDAKgEALYgEAMgDAMgEANYgDAOgEAOgDAOYgCAIgCAHgBAIYgCAIgBAHgBAIYgBAIgCAIgBAIYgBAEAAAEgBAEIgBAMYgBAPgCAQgBAQYgBAPAAAQAAAPYAAAIAAAHAAAIYAAAHAAAHABAHYABAOAAANABAMYAAANACAKABAKYABAKABAIABAHYABAOABAIAAAAYABALAKAIALgBYAKgCAIgKgBgLYAAAAAAgBgBAA");
	this.shape_561.setTransform(616.55,352.75,1,1,0,0,0,0.6,-1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#F3BEBC").s().p("AAQDuYAAAAgBgIgDgOYgBgHgCgIgCgKYgCgJgCgLgCgMYgBgLgBgNgCgNYAAgHgBgHgBgHYgBgHAAgHgBgHYgBgPgBgPgBgQYAAgPAAgQAAgPYAAgQACgPABgQYABgIAAgHABgIYAAgIACgHABgHYACgPABgOACgOYAEgNADgNACgLYADgMACgKAEgKYADgJACgIACgHYAFgNACgHAAAAIAAAAYAAAAgDAHgFANYgDAGgDAIgEAJYgEAJgDALgEALYgDAMgDAMgFANYgDAOgDAOgEAOYgBAIgCAHgCAIYgBAIgBAHgBAIYgCAQgEAQAAAQYgCAPgBAQgBAQYgBAQAAAQAAAPYAAAHAAAIAAAHYAAAHAAAIABAHYABAOAAANABAMYAAAMACALABAKYABAJABAJABAHYACAOABAIAAAAYABALAKAIALgCYAKgBAIgKgCgLYAAAAAAgBAAAA");
	this.shape_562.setTransform(616.4,353.8,1,1,0,0,0,0.6,-1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#F3BEBC").s().p("AARDuYAAAAgBgIgDgOYgBgGgCgJgCgJYgBgKgDgLgBgLYgCgMgBgMgBgOYgBgGgBgHgBgHYgBgHAAgIgBgHYgBgPgBgPgBgQYAAgPAAgQAAgPYgBgQADgPAAgQYABgIAAgHABgIYAAgIACgHABgHYACgPABgOACgOYADgNADgNADgLYACgMADgLADgJYADgJACgIADgHYAEgNACgIAAAAIAAAAYAAAAgDAIgFAMYgDAHgDAIgDAJYgEAJgEAKgDAMYgEALgDANgEANYgDAOgDAOgEAOYgBAIgCAHgBAIYgBAIgCAHgBAIYgCAQgDAQgBAQYgBAPgBAQgCAQYAAAQAAAQAAAPYAAAIAAAHAAAHYAAAIABAHAAAHYABAOABANAAANYABAMACAKABAKYABAKABAIAAAHYACAOABAIAAAAYABALAKAIAKgBYALgBAIgKgBgLYAAgBAAAAgBgB");
	this.shape_563.setTransform(616.2,354.85,1,1,0,0,0,0.6,-1);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#F3BEBC").s().p("AATDvYAAAAgBgIgDgOYgBgHgCgIgCgKYgCgJgDgLgBgMYgCgLgBgNgBgNYgBgHgBgHgBgHYgBgHAAgHgBgIYgBgOgBgQgBgPYAAgQAAgQAAgPYgBgPACgQABgQYAAgIABgHAAgIYAAgIACgHABgHYACgPABgPACgNYADgNADgNACgMYADgLACgLADgJYADgKADgIACgHYAEgNACgIAAAAIAAAAYAAAAgDAIgFANYgDAGgDAIgDAJYgEAJgDALgEAMYgDALgDANgEANYgDANgDAPgEAOYgBAIgCAHgBAIYgBAIgCAIgBAHYgCAQgDAQAAAQYgCAQgBAQgBAQYAAAQAAAPAAAQYAAAHAAAIAAAHYAAAHABAIAAAHYABAOABANABAMYAAANACAKABAKYABAKABAIABAHYACAOABAIAAAAYABALAKAIAKgBYALgCAIgKgBgLYAAAAgBgBAAAA");
	this.shape_564.setTransform(616,355.95,1,1,0,0,0,0.6,-1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#F3BEBC").s().p("AAVDvYAAAAgCgIgDgNYgBgHgCgJgCgJYgBgKgDgLgCgLYgBgMgCgNgCgNYAAgHgBgHgBgHYgBgHAAgHgBgHYgBgPgBgQgBgPYgBgQAAgQAAgOYgBgQACgQABgQYABgPAAgQADgPYACgOABgPACgNYACgOADgMADgMYACgMACgLADgJYADgJADgIACgHYAEgNACgIAAAAIAAAAYAAAAgDAHgFANYgCAHgDAIgEAJYgEAJgDALgDALYgEAMgDAMgEAOYgCANgEAPgDAOYgDAPgCAQgCAQYgCAPgDAQgBARYgBAPgBAQgBAQYAAAQAAAQAAAPYAAAIAAAHAAAHYAAAIABAHAAAHYABAOABANABANYABAMACALABAKYABAJABAJABAHYABAOABAIAAAAYACALAKAHAKgBYALgBAIgKgCgLYAAgBAAAAAAgB");
	this.shape_565.setTransform(615.85,357.05,1,1,0,0,0,0.6,-1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#F3BEBC").s().p("AAWDwYAAAAgBgIgDgOYgBgHgCgIgCgKYgCgJgDgLgBgMYgCgMgCgMgCgOYgBgGAAgHgBgHYAAgHgBgIgBgHYgBgPgBgPgBgQYgBgPAAgQAAgPYgBgQACgQAAgQYABgPABgQACgPYACgPABgOABgOYADgNADgNACgLYADgMACgLADgJYADgKACgIACgHYAEgNACgIAAAAIAAAAYAAAAgDAIgFANYgCAGgDAIgEAKYgEAJgCAKgEAMYgDAMgDAMgEAOYgDANgCAPgEAOYgDAPgCAQgCAQYgCAQgDAQAAAQYgBAPgBAQgBAQYAAAQAAAQAAAPYAAAIAAAIAAAHYABAHAAAIABAHYABAOABANAAAMYABANACAKABAKYABAKABAIABAHYACAOABAIAAAAYABALAKAIAKgBYALgCAIgKgBgLYAAAAAAgBgBAA");
	this.shape_566.setTransform(615.65,358.1,1,1,0,0,0,0.6,-1);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#F3BEBC").s().p("AAYDxYAAAAgBgIgDgOYgCgHgBgIgCgKYgCgKgDgLgCgLYgBgMgCgNgCgNYgBgHgBgHgBgHYAAgHgBgHAAgIYgCgPgBgPgCgQYAAgPAAgQgBgPYgBgQACgQABgQYAAgPABgQACgPYACgPABgOABgOYADgNACgNADgMYACgMACgLADgJYADgJACgJACgGYAEgOACgIAAAAIAAAAYAAAAgDAIgEANYgDAHgDAIgDAJYgEAJgDALgDAMYgEALgCANgEANYgDAOgDAPgDAOYgDAPgCAQgCAQYgBAQgDAQgBAQYAAAQgBAQgBAQYAAAQAAAQAAAPYAAAIAAAHABAIYAAAHABAHAAAHYABAOABAOABAMYABAMACALABAKYABAKABAIABAHYACAOABAIAAAAYABALAKAIAKgCYALgBAIgKgBgLYAAAAAAgBgBAA");
	this.shape_567.setTransform(615.45,359.2,1,1,0,0,0,0.6,-1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#F3BEBC").s().p("AAaDxYAAAAgCgIgDgOYgBgHgCgIgCgKYgCgJgDgLgBgMYgCgMgCgMgCgOYgBgGgBgHgBgHYgBgIAAgHAAgHYgCgPgBgQgCgPYAAgQAAgQgBgPYgBgQACgQAAgQYABgPAAgQACgPYACgPABgOABgOYADgNACgNACgMYADgMACgLADgJYACgKACgIACgHYAEgNACgIAAAAIAAAAYAAAAgCAHgFAOYgDAGgDAIgDAKYgEAJgCALgEALYgDAMgCANgEANYgDAOgCAPgDAOYgEAPgBAQgCAQYgCAQgDAQAAAQYgBAQAAAQgBAQYAAAQAAAQAAAPYAAAIABAIAAAHYAAAHABAIAAAHYABAOABANABAMYABANACALABAJYACAKABAJABAHYACAOABAIAAAAYABALAKAHAKgBYALgBAIgLgCgKYAAgBAAgBAAAA");
	this.shape_568.setTransform(615.25,360.25,1,1,0,0,0,0.6,-1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#F3BEBC").s().p("AAcDyYAAAAgCgIgDgOYgBgHgCgIgCgKYgCgKgDgLgCgLYgCgMgCgNgCgNYgBgHgBgHgBgHYgBgHgBgIAAgHYgBgPgBgPgCgQYAAgQgBgQAAgPYgBgQABgQAAgQYABgPAAgQACgPYACgPAAgOACgOYACgOADgNACgMYACgLACgLADgKYADgJACgJACgGYADgOADgIAAAAIAAAAYAAAAgDAIgFANYgCAHgDAIgDAJYgEAJgDALgDAMYgDAMgDANgDANYgDAOgDAOgCAPYgEAPgBAQgCAQYgCAQgCAQAAARYgBAPgBAQgBARYABAQAAAQAAAPYAAAIABAHAAAIYAAAHABAHABAHYABAOABAOABAMYABANACAKABAKYABAKABAJABAHYACAOABAIAAAAYACALAJAHALgBYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_569.setTransform(615.05,361.3,1,1,0,0,0,0.6,-1);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#F3BEBC").s().p("AAcDyYAAAAgCgIgDgNYgBgHgCgJgCgJYgCgKgDgLgCgMYgBgMgDgMgCgOYgBgHgBgHgBgHYgBgHgBgHAAgIYgBgPgBgPgCgQYgBgQAAgQgBgPYgBgQABgQABgQYAAgPAAgQACgPYACgPABgPABgNYACgOADgNACgMYACgMACgLACgJYADgKACgIACgHYADgOADgIAAAAIAAAAYAAAAgDAIgFANYgCAHgDAIgDAKYgEAJgCALgDAMYgDAMgDAMgDAOYgDAOgDAOgCAPYgDAPgCAQgCAQYgBAQgDARAAAQYAAAPgBARgBAQYABAQAAAQAAAPYABAIAAAIAAAHYABAHAAAIABAHYABAOABANABANYABAMACALABAKYACAKABAIABAHYACAOABAIAAAAYABALAJAIALgCYALgBAIgKgCgLYAAgBAAAAAAgB");
	this.shape_570.setTransform(614.85,362.4,1,1,0,0,0,0.5,-1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#F3BEBC").s().p("AAdDzYAAAAgCgIgDgOYgCgHgCgIgCgKYgCgKgDgLgBgLYgCgMgDgNgCgNYgBgHgBgHgBgHYgBgHgBgIAAgHYgBgPgCgQgBgQYgBgPgBgQAAgQYgCgQACgQAAgQYAAgPAAgQACgPYACgPABgPABgOYACgNACgNACgMYACgMACgLADgKYACgJACgJACgHYADgOACgHAAAAIAAAAYAAAAgCAHgFAOYgCAHgDAIgDAJYgEAJgCALgDAMYgCAMgDANgEAOYgCAOgDAOgCAPYgEAPgBAQgBAQYgCAQgCARAAAQYgBAQgBAQAAAQYAAAQABAQAAAQYAAAIABAHAAAIYABAHAAAHABAHYABAPABANABAMYABANACALACAKYABAJABAJABAHYACAOABAIAAAAYACALAJAIALgCYALgBAHgKgBgLYAAgBAAAAAAgB");
	this.shape_571.setTransform(614.75,363.45,1,1,0,0,0,0.3,-1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#F3BEBC").s().p("AAdD0YAAAAgCgIgDgOYgBgHgCgJgCgJYgCgKgEgLgBgMYgCgMgCgMgDgOYgBgHgBgHgBgHYgBgHgBgHAAgIYgBgPgCgQgCgPYgBgQAAgQgBgPYgBgRABgQAAgQYAAgQAAgPACgPYABgPACgPABgOYABgOACgNACgMYACgMACgLACgJYADgKACgIACgHYADgOACgIAAAAIAAAAYAAAAgDAIgEANYgCAHgDAIgDAKYgEAJgCALgCAMYgDAMgDANgDAOYgDANgCAPgDAPYgDAPgBAQgBAQYgCARgCAQAAAQYgBAQAAAQgBARYABAQAAAQABAPYAAAIAAAIABAHYAAAIABAHABAHYABAOABAOABAMYABANADAKABAKYABAKABAJABAHYADAOABAIAAAAYABALAJAIALgCYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_572.setTransform(614.7,364.55,1,1,0,0,0,0.2,-1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#F3BEBC").s().p("AAdD0YAAAAgBgIgEgOYgBgHgCgIgCgKYgCgKgDgLgCgLYgCgMgCgNgDgOYgBgGgBgHgBgIYgBgHgBgHAAgIYgCgPgBgPgCgQYgBgQgBgQgBgPYgBgQABgRAAgQYAAgPAAgQACgPYABgQABgOABgOYADgOABgNABgMYACgMACgLADgKYACgJACgJACgHYADgOACgIAAAAIAAAAYAAAAgDAIgEAOYgCAHgDAIgDAJYgDAKgCALgDAMYgCAMgEANgDANYgCAOgCAPgDAPYgDAQgBAPgBARYgCAQgCAQAAARYAAAPgBARAAAQYABAQAAAQABAQYAAAHAAAIABAHYAAAIABAHABAHYABAPABANACANYABAMACALABAKYACAKABAIABAHYACAOABAJAAAAYACAKAJAIALgCYALgBAHgKgBgLYAAgBAAAAgBgB");
	this.shape_573.setTransform(614.55,365.6,1,1,0,0,0,0,-1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#F3BEBC").s().p("AAeD1YAAAAgCgIgDgOYgCgHgCgJgCgJYgCgKgDgLgCgMYgCgMgCgNgDgNYgBgHgBgHgCgHYAAgHgBgIAAgHYgCgPgCgQgCgQYgBgQAAgQgBgPYgCgQABgRAAgQYAAgQAAgPACgQYABgPABgOABgOYACgOACgNABgMYACgNABgLADgJYACgKACgIACgHYADgOACgIAAAAIAAAAYAAAAgDAHgEAOYgCAHgDAIgDAKYgDAJgBALgDAMYgDAMgDANgDAOYgCAOgDAPgCAPYgDAPgBAQgBARYgCAQgCAQABARYgBAPAAARAAAQYAAARABAQABAPYAAAIAAAIABAHYAAAHABAIABAHYABAOABAOACAMYABANACALABAKYACAJABAJABAHYACAOACAIAAAAYABALAJAIALgCYALgBAIgLgCgLYAAAAAAgBAAAA");
	this.shape_574.setTransform(614.5,366.65,1,1,0,0,0,-0.1,-1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#F3BEBC").s().p("AAeD1YAAAAgCgIgDgOYgCgHgCgIgCgKYgCgKgDgLgCgMYgCgLgCgNgDgOYgBgHgBgHgCgHYgBgHAAgIAAgHYgCgPgCgQgCgQYgBgQgBgQgBgPYgBgQAAgRAAgQYAAgQAAgPABgQYACgPABgPABgOYABgNADgOABgMYABgMABgLADgKYACgJACgJACgHYADgOACgIAAAAIAAAAYAAAAgDAIgEAOYgCAHgDAIgDAJYgCAKgCALgDAMYgDAMgDANgDAOYgCAOgCAPgCAPYgDAQgBAQgBAQYgBAQgCARAAAQYAAAQgBAQAAARYABAQABAQAAAPYABAIAAAIAAAHYABAIABAHABAHYABAPACANABANYABAMACALACAKYABAKABAJACAHYACAOABAIAAAAYACALAJAHALgBYALgCAHgKgBgLYgBgBAAAAAAgB");
	this.shape_575.setTransform(614.45,367.75,1,1,0,0,0,-0.2,-1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#F3BEBC").s().p("AAfD2YAAAAgCgIgEgOYgBgHgCgJgDgJYgCgKgDgLgCgMYgCgMgCgNgDgNYgBgHgBgHgCgHYgBgIAAgHgBgIYgCgPgBgQgCgPYgCgQgBgRgBgPYgBgQAAgQAAgRYAAgQAAgPABgQYABgPABgPABgOYACgOACgNACgMYABgMABgMACgJYACgKACgJACgHYADgOACgIAAAAIAAAAYAAAAgDAIgEAOYgCAHgDAIgCAKYgDAKgCALgCAMYgDAMgDANgDAOYgCAOgCAPgCAPYgDAQgBAQgBAQYgBAQgCARAAAQYAAAQAAARAAAQYABAQAAAQABAQYABAIAAAHAAAIYABAHABAIABAHYABAOACAOABAMYABANACALACAKYABAKACAIABAHYACAPABAIAAAAYACALAJAHALgCYALgBAIgLgCgKYAAgBAAgBAAAA");
	this.shape_576.setTransform(614.25,368.85,1,1,0,0,0,-0.4,-1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#F3BEBC").s().p("AAfD3YAAAAgCgIgDgOYgCgHgCgJgCgKYgCgJgEgMgCgLYgCgMgCgNgDgOYgBgHgCgHgBgHYgBgHAAgIgBgHYgCgQgCgPgCgQYgBgQgBgRgBgPYgCgQABgQgBgRYAAgQAAgQABgPYABgPABgPABgOYABgOACgNACgNYACgMABgLABgKYACgKACgIACgHYADgOABgIAAAAIAAAAYAAAAgCAIgEANYgCAHgCAJgCAJYgDAKgCALgDAMYgDAMgDAOgCAOYgCAOgCAPgCAPYgDAPgBARgBAQYgBAQgCARABAQYAAAQAAARgBAQYABARABAQABAPYAAAIABAIAAAHYABAIABAHABAHYABAPACANABANYABANADAKABAKYACAKABAJABAHYADAOABAJAAAAYACAKAJAIALgCYALgCAHgKgCgLYAAAAAAgBAAAA");
	this.shape_577.setTransform(614.25,369.9,1,1,0,0,0,-0.5,-1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#F3BEBC").s().p("AAfD3YAAAAgCgIgDgOYgCgHgCgIgCgKYgCgKgEgLgCgMYgCgMgCgNgDgOYgBgHgCgHgBgHYgBgHAAgIgBgHYgCgPgCgQgCgQYgCgQgBgQgBgQYgCgQABgQgBgRYAAgQAAgQABgPYABgPABgPABgOYABgOACgOABgMYACgMABgLACgKYACgKABgJACgHYADgOABgIAAAAIAAAAYAAAAgCAIgEAOYgCAHgBAIgDAKYgDAKgCALgDAMYgCAMgDANgDAPYgCAOgCAPgCAPYgCAQgBAQgBAQYgBAQgBARAAARYAAAPAAARAAARYABAQABAQABAQYAAAIABAHAAAIYABAHABAIABAHYABAOACAOABAMYABANADALABAKYACAKABAJACAHYACAOABAIAAAAYACALAJAHALgBYALgCAIgKgCgLYAAgBAAAAgBgB");
	this.shape_578.setTransform(614.3,370.95,1,1,0,0,0,-0.5,-1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#F3BEBC").s().p("AAgD4YAAAAgCgIgDgOYgCgHgCgJgDgKYgCgJgDgMgCgMYgDgMgCgNgDgNYgBgHgCgHgBgHYgBgIAAgHgBgIYgCgPgCgQgDgQYgBgQgBgQgBgQYgCgQAAgQAAgRYgBgQAAgQABgPYABgPAAgPABgPYABgOACgNACgMYABgMABgMADgKYABgKABgIACgHYACgOACgJAAAAIAAAAYAAAAgCAIgEAOYgBAHgCAJgDAKYgDAJgCAMgCAMYgDAMgDANgCAOYgCAPgCAPgCAPYgCAQgBAQgBAQYgBARgBAQABARYAAAQAAAQAAARYABAQABARABAPYAAAIABAIAAAHYABAIABAHABAHYABAPACANACANYABANACALACAKYABAKACAIABAHYACAPACAIAAAAYACALAJAHALgCYALgBAHgLgCgLYAAAAAAgBAAAA");
	this.shape_579.setTransform(614.35,372.05,1,1,0,0,0,-0.5,-1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#F3BEBC").s().p("AAhD5YAAAAgCgJgEgOYgCgHgCgIgCgKYgDgKgDgLgCgMYgCgMgDgNgDgOYgBgHgBgHgCgHYgBgHAAgIgBgHYgCgQgDgQgCgQYgBgQgCgQgBgPYgCgRAAgQAAgRYAAgQgBgQABgPYABgQAAgPABgOYABgOACgNABgNYACgMABgLACgKYACgKABgJABgHYACgOACgIAAAAIAAAAYAAAAgCAIgDAOYgCAHgCAIgDAKYgDAKgCALgCAMYgCANgDANgCAOYgCAOgCAPgCAQYgCAQAAAQgBAQYgBARgCAQABARYAAAQAAARAAAQYACARABAQABAQYAAAHABAIAAAIYABAHABAIABAHYACAOABAOACANYABAMADALABAKYACAKABAJACAHYACAPABAIAAAAYACALAKAHAKgCYALgCAIgKgCgLYAAAAAAgBAAAA");
	this.shape_580.setTransform(614.4,373.1,1,1,0,0,0,-0.5,-1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#F3BEBC").s().p("AAhD5YAAAAgCgIgDgOYgCgHgCgJgDgJYgCgKgEgMgCgLYgCgNgDgNgDgNYgBgHgBgHgCgIYgBgHAAgHgBgIYgDgPgCgQgCgQYgCgQgBgRgCgPYgBgRAAgQgBgRYAAgQgBgQABgPYAAgQABgPAAgOYABgOACgOABgMYACgMABgMACgKYACgKABgIABgIYACgOACgIAAAAIAAAAYAAAAgDAIgCAOYgCAHgCAJgDAKYgDAJgBAMgDAMYgCAMgDAOgCAOYgCAOgBAPgCAQYgCAQAAAQgBAQYgBARgBARAAAQYABAQAAARAAARYABAQABAQACAQYAAAIABAIAAAHYABAIABAHABAHYACAPACAOABAMYACANACALACAKYABAKACAJABAHYADAOABAJAAAAYACAKAJAIALgCYALgCAHgKgCgLYAAgBAAAAAAgB");
	this.shape_581.setTransform(614.5,374.2,1,1,0,0,0,-0.6,-1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#F3BEBC").s().p("AAiD6YAAAAgCgIgEgOYgCgHgCgJgDgKYgCgKgDgLgDgMYgCgMgDgNgDgOYgBgHgBgHgCgHYgBgIAAgHgBgIYgDgPgCgQgCgQYgCgQgBgRgCgPYgCgRAAgQgBgRYAAgQgBgQABgQYAAgPABgPAAgOYABgPACgNABgNYACgMAAgLACgKYACgKACgJABgHYACgPABgIAAAAIAAAAYAAAAgBAIgEAOYgBAHgDAJgCAKYgDAKgCALgCANYgCAMgDANgCAPYgBAOgCAPgCAQYgCAPAAARgBAQYgBARgBARABARYAAAPABARAAARYABAQABARACAPYAAAIABAIAAAIYABAHABAIABAHYACAOACAOABANYACANACALACAKYACAKABAIABAIYADAOABAIAAAAYACALAKAHALgBYALgCAHgLgCgLYAAAAAAgBAAAA");
	this.shape_582.setTransform(614.7,375.25,1,1,0,0,0,-0.6,-1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#F3BEBC").s().p("AAiD6YAAAAgCgIgEgOYgBgHgDgJgCgJYgDgKgDgMgCgMYgDgMgDgNgCgOYgCgHgBgHgCgHYgBgHAAgIgBgIYgDgPgCgQgDgQYgBgQgCgRgCgPYgCgRAAgQAAgRYgBgQgBgQABgQYAAgPABgPAAgPYABgOABgNACgNYABgMAAgMACgKYACgKACgIABgIYACgOACgIAAAAIAAAAYAAAAgCAIgEAOYgCAHgCAJgCAKYgDAKgBALgDAMYgCANgCANgCAPYgCAOgBAPgCAQYgCAQAAAQgBAQYAAARgBARAAARYABAQAAARABAQYABARABAQABAQYABAIABAIAAAHYABAIABAHABAHYACAPACAOACAMYABANADALABAKYACAKACAJABAHYADAPABAIAAAAYACALAJAHALgCYALgCAHgKgBgLYgBgBAAAAAAgB");
	this.shape_583.setTransform(614.95,376.3,1,1,0,0,0,-0.6,-1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#F3BEBC").s().p("AAjD7YAAAAgCgIgEgOYgCgIgCgIgDgKYgCgKgEgLgCgMYgDgMgCgNgDgOYgCgHgBgHgCgIYgBgHAAgIgBgHYgDgQgCgQgDgQYgCgQgBgRgCgPYgCgRAAgQgBgRYgBgQgBgQABgQYAAgPAAgPABgPYABgOABgOABgMYABgMABgMACgKYABgKACgJABgHYACgPACgIAAAAIAAAAYAAAAgCAIgEAPYgBAHgCAIgDAKYgDAKgBAMgCAMYgCANgDANgCAOYgBAPgBAPgCAQYgCAQAAAQAAARYgBAQgBARABARYAAAQABARAAAQYACARABAQABAQYABAIABAIAAAIYABAHABAIABAHYACAOACAOACANYACANACALACAKYACAKABAJACAHYACAOACAIAAAAYACALAJAIALgCYALgCAHgLgCgLYAAAAAAgBAAAA");
	this.shape_584.setTransform(615.15,377.4,1,1,0,0,0,-0.6,-1);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#F3BEBC").s().p("AAjD8YAAAAgCgJgEgOYgBgHgDgJgCgKYgDgJgDgMgDgMYgCgMgDgNgDgOYgCgHgBgHgCgHYgBgIAAgHgBgIYgDgPgDgQgCgRYgCgQgCgQgCgQYgCgRAAgQgBgRYgBgQgBgQABgQYAAgQAAgPAAgOYABgOABgOABgMYABgNABgMACgKYABgKACgJABgHYACgOABgJAAAAIAAAAYAAAAgCAJgDAOYgCAHgCAJgCAKYgCAKgCALgCANYgCAMgCAOgCAOYgBAPgCAPgBAQYgCAQAAAQAAARYgBAQAAARAAARYABAQABARAAARYACAQABARABAQYABAIABAHABAIYABAIABAHABAHYACAPACAOABAMYACANADALABAKYACAKACAJABAIYADAOABAIAAAAYACALAKAHALgCYAKgCAIgKgCgLYAAAAgBgBAAAA");
	this.shape_585.setTransform(615.4,378.5,1,1,0,0,0,-0.6,-1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#F3BEBC").s().p("AAkD8YAAAAgCgIgEgOYgCgHgCgJgDgKYgCgKgEgLgCgMYgDgMgDgOgDgNYgCgHgBgIgCgHYgBgHAAgIgCgIYgCgPgDgQgCgQYgCgRgCgQgCgQYgCgRgBgQgBgRYAAgQgCgQABgQYAAgQAAgPAAgOYABgPABgNABgNYABgMABgMABgKYACgKABgJABgHYADgPABgIAAAAIAAAAYAAAAgCAIgDAOYgCAHgCAJgCAKYgDAKgBAMgCAMYgCANgCANgCAPYgBAOgCAQgBAQYgCAPABARgBARYAAAQgBARABARYABAQAAARABARYABARACAQABAQYABAIABAIABAHYABAIABAIABAHYACAOACAOACANYABANADALACAKYABAKACAJACAHYACAPACAIAAAAYACALAJAHALgCYALgCAHgKgCgLYAAgBAAAAAAgB");
	this.shape_586.setTransform(615.6,379.55,1,1,0,0,0,-0.6,-1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#F3BEBC").s().p("AAkD9YAAAAgCgJgEgOYgCgHgCgJgDgKYgCgJgEgMgCgMYgDgMgDgNgDgOYgBgHgCgHgCgIYgBgHAAgIgCgHYgCgQgDgQgDgQYgCgRgCgQgCgQYgCgQAAgRgBgRYgBgQgCgQABgQYAAgQAAgPAAgPYAAgOACgOAAgMYABgNABgLACgKYABgLABgJABgHYACgPABgIAAAAIAAAAYAAAAgBAIgDAPYgCAHgCAJgCAKYgDAKgBAMgCAMYgBANgDANgBAPYgCAOgBAQgBAQYgCAQABAQgBARYAAAQgBASACARYAAAQABARABAQYABARACARABAPYABAIABAIABAIYABAIABAHABAHYACAPACAOACAMYACANACALACALYACAKACAJABAHYADAOABAJAAAAYACAKAKAIALgCYALgDAHgKgCgLYAAAAAAgBgBAA");
	this.shape_587.setTransform(615.85,380.6,1,1,0,0,0,-0.6,-1);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#F3BEBC").s().p("AAlD9YAAAAgCgIgEgOYgCgHgCgJgDgKYgDgKgDgLgDgMYgDgNgDgNgDgOYgBgHgCgHgCgHYgBgIAAgHgCgIYgCgQgDgQgDgQYgCgQgCgRgCgQYgCgQgBgRgBgRYgBgQgCgQABgQYAAgQAAgPAAgPYAAgOABgOABgNYABgMAAgMACgKYABgKABgJABgIYACgOABgJAAAAIAAAAYAAAAgBAJgDAOYgCAHgCAJgCAKYgCAKgBAMgCANYgCAMgCAOgCAPYgBAOgBAQgBAPYgCAQABARAAARYgBARAAARABARYABAQABARAAARYACAQACARABAQYABAIABAIABAHYABAIABAIABAHYACAOACAOACANYACANADALABAKYACAKACAJACAIYACAOACAIAAAAYABALALAHAKgCYALgCAHgKgCgLYAAgBAAAAAAgB");
	this.shape_588.setTransform(616.05,381.7,1,1,0,0,0,-0.6,-1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#F3BEBC").s().p("AAmD+YAAAAgDgIgEgOYgCgIgCgIgDgKYgCgKgEgMgDgMYgCgMgDgNgEgOYgBgHgCgIgBgHYgCgHAAgIgCgIYgCgPgDgQgDgRYgCgQgCgRgCgQYgDgQgBgRgBgRYgBgQgCgRABgPYgBgQAAgQAAgOYABgPABgNAAgNYABgNAAgLACgLYABgKABgJABgHYACgPABgIAAAAIAAAAYAAAAgCAIgCAPYgCAHgCAJgCAKYgCAKgBAMgCAMYgBANgDAOgBAOYgBAPgBAPgBAQYgCAQABARAAARYAAARgBARACARYAAAQABARABARYACARACAQABAQYABAIABAIABAIYABAIABAHABAHYADAPACAOACANYABANADALACAKYACAKACAJABAHYADAPACAIAAAAYABALAKAHALgCYALgCAHgLgCgKYAAgBAAAAAAgB");
	this.shape_589.setTransform(616.15,382.75,1,1,0,0,0,-0.7,-1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#F3BEBC").s().p("AAmD/YAAAAgCgIgEgPYgCgHgDgJgCgKYgDgKgEgLgCgMYgDgNgDgNgDgOYgCgHgCgHgBgIYgCgHAAgIgCgHYgDgQgCgQgDgRYgDgQgCgRgCgQYgCgQgBgRgCgRYgBgQgBgRAAgQYAAgQgBgPAAgOYABgPABgOAAgNYABgMAAgMACgKYABgKABgJABgIYACgPABgIAAAAIAAAAYAAAAgCAIgDAPYgBAHgCAJgCAKYgCAKgBAMgCANYgCANgCANgBAPYgBAPgBAPgBAQYgBAQAAARAAARYAAARAAARABARYABAQABARABARYACARACARABAQYABAIABAIABAHYABAIABAIABAHYADAPACANACANYACANACALACALYACAKACAJACAHYADAPABAIAAAAYABALALAHALgCYALgCAHgLgDgLYAAAAAAgBAAAA");
	this.shape_590.setTransform(616.35,383.85,1,1,0,0,0,-0.7,-1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#F3BEBC").s().p("AAnD/YAAAAgCgIgEgPYgCgHgDgJgDgKYgCgKgEgLgDgMYgDgMgDgOgDgOYgCgHgBgHgCgHYgCgIAAgIgCgHYgCgQgDgQgEgQYgCgRgCgRgCgPYgDgRgBgRgBgRYgBgQgCgRAAgQYAAgQgBgPAAgOYAAgPABgOABgNYAAgMAAgMACgKYABgLABgJABgHYABgPABgIAAAAIAAAAYAAAAgBAIgDAPYgBAHgCAJgCAKYgCAKgBAMgCANYgBANgCANgBAPYgBAPgBAPgBAQYgBAQABARAAARYAAARgBARACARYABAQABASABAQYACARACARABAQYABAIABAIABAIYABAHACAIABAHYACAPACAOACANYACAMADAMACAKYACAKACAJABAHYADAPABAIAAAAYACALALAHALgCYAKgCAHgLgCgLYAAAAAAgBAAAA");
	this.shape_591.setTransform(616.6,384.9,1,1,0,0,0,-0.7,-1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#F3BEBC").s().p("AAoEAYAAAAgDgJgEgOYgCgHgCgJgDgKYgDgKgEgLgCgNYgDgMgEgNgDgOYgCgHgBgIgCgHYgCgIAAgHgCgIYgCgQgEgQgDgQYgCgRgCgRgDgPYgCgRgBgRgCgRYgBgQgCgRAAgQYAAgQgBgPAAgPYAAgOABgOAAgNYABgNAAgMABgKYABgKABgJABgIYACgPABgIAAAAIAAAAYAAAAgCAIgDAPYgBAHgCAJgBALYgDAKAAAMgCAMYgBANgCAOgBAPYgBAPgBAPgBAQYgBAQABARAAARYAAARAAARACARYABARABARABARYACARACAQACAQYAAAIABAIABAIYACAIABAHABAIYACAOADAOACANYACANADALACALYACAKABAJACAHYADAPABAIAAAAYACALAKAHALgCYALgDAHgKgCgLYAAAAAAgBAAAA");
	this.shape_592.setTransform(616.75,386,1,1,0,0,0,-0.7,-1);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#F3BEBC").s().p("AAoEAYAAAAgCgIgEgOYgCgIgDgIgDgKYgCgKgEgMgDgMYgDgMgDgOgEgOYgBgHgCgHgCgIYgBgHgBgIgBgIYgDgPgDgRgEgQYgCgRgCgQgDgQYgDgRgBgRgBgRYgCgRgCgQAAgQYAAgQgBgPAAgPYAAgPAAgOABgMYAAgNAAgMABgKYACgLAAgJABgHYACgPAAgJAAAAIAAAAYAAAAgBAJgDAOYgBAIgBAJgCAKYgCAKgBAMgBANYgCANgCAOgBAPYAAAOgBAQgBAQYgBAQABARAAARYABARAAARABASYABAQACARABARYACARACARACAQYABAIAAAIACAHYABAIABAIABAHYADAPACAOACANYACANADALACAKYACALACAIACAIYACAPACAIAAAAYACALAKAHALgDYALgCAHgKgCgLYAAgBgBAAAAgB");
	this.shape_593.setTransform(617,387.05,1,1,0,0,0,-0.7,-1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#F3BEBC").s().p("AApEBYAAAAgCgIgFgPYgCgHgCgJgDgKYgDgKgEgLgDgNYgDgMgDgNgDgPYgCgHgCgHgCgHYgBgIgBgIgBgHYgDgQgEgQgDgRYgCgQgDgRgCgQYgDgRgBgRgCgRYgBgRgDgQAAgQYAAgQgBgQAAgOYAAgPAAgOABgNYAAgNAAgMABgKYABgKABgKABgHYABgPABgJAAAAIAAAAYAAAAgBAJgDAPYgBAHgCAJgBALYgCAKgBAMgCANYgBAMgCAOAAAPYgBAPgBAQAAAQYgBAQABARAAARYAAARAAARACASYABAQABARACARYACARACARACAQYABAIABAIABAIYABAIABAHACAIYACAOACAOADANYACANADAMACAKYACAKACAJABAIYACAOACAJAAAAYACALALAGALgCYALgCAHgLgDgLYAAAAAAgBAAAA");
	this.shape_594.setTransform(617.15,388.15,1,1,0,0,0,-0.7,-1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#F3BEBC").s().p("AAqEBYAAAAgDgIgEgOYgCgIgDgIgDgKYgCgKgEgMgDgMYgDgNgDgNgEgOYgCgHgCgIgBgHYgCgIgBgHgBgIYgDgQgEgQgDgRYgCgQgDgRgDgQYgCgRgCgRgCgRYgBgRgCgQgBgQYAAgQgBgQAAgPYgBgOABgOAAgNYABgNgBgMACgKYAAgLABgJABgHYABgQABgIAAAAIAAAAYAAAAgBAIgDAPYgBAIgBAJgCAKYgCALgBALgBANYgBANgCAOgBAPYAAAPgBAQAAAQYgBAQABARAAARYABARAAASACARYABAQABASACARYACARACAQACAQYABAJABAIABAHYABAIACAIABAHYADAPACAOACANYACANADALACAKYACALACAJACAHYACAPACAIAAAAYACALALAHALgCYALgDAGgKgCgLYAAgBAAAAAAgB");
	this.shape_595.setTransform(617.4,389.2,1,1,0,0,0,-0.7,-1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#F3BEBC").s().p("AAqECYAAAAgCgIgEgPYgCgHgDgJgDgKYgDgKgEgLgDgNYgDgMgDgOgEgOYgBgHgCgHgCgIYgCgHgBgIgBgIYgDgQgEgQgDgQYgDgRgCgRgDgQYgDgRgBgRgCgRYgCgRgCgQAAgQYgBgRgBgPAAgPYgBgPABgOAAgNYAAgNAAgMABgKYABgKABgKAAgHYABgPABgJAAAAIAAAAYAAAAgBAJgCAPYgCAHgBAJgCALYgCAKAAAMgBANYgBANgCAOgBAPYAAAPgBAQAAAQYgBAQABARABARYAAARABASABARYACAQABASACARYACARACARACAQYABAIABAIABAIYACAIABAHABAIYADAOACAOADANYACANADAMACAKYACAKACAJACAIYACAPACAIAAAAYACALALAHAKgDYALgCAHgLgCgKYAAgBAAAAgBgB");
	this.shape_596.setTransform(617.55,390.25,1,1,0,0,0,-0.7,-1);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#F3BEBC").s().p("AArEDYAAAAgCgJgFgOYgCgHgCgJgDgKYgDgLgEgLgDgMYgDgNgEgNgDgPYgEgOgEgPgCgQYgDgPgEgRgDgQYgDgRgCgRgDgQYgDgRgCgRgCgRYgBgRgDgQAAgRYgBgQgBgPAAgPYgBgPABgOAAgNYAAgNgBgMACgKYAAgLABgJABgIYABgPAAgIAAAAIAAAAYAAAAgBAIgCAPYgBAIgCAJgBAKYgCALAAAMgCANYgBANgBAOgBAPYAAAPAAAPgBARYgBAQACARAAARYABARAAASACARYACARABARACARYACARACARACAQYACAQADAQADAPYACAPADAOACANYACANADALACALYADAKACAJABAHYADAPABAJAAAAYADAKAKAHALgCYALgCAHgLgCgLYgBAAAAgBAAAA");
	this.shape_597.setTransform(617.8,391.35,1,1,0,0,0,-0.7,-1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#F3BEBC").s().p("AAsEDYAAAAgDgIgEgPYgCgHgDgJgDgKYgDgKgEgLgDgNYgDgMgDgOgEgOYgEgOgEgQgCgPYgDgQgEgRgDgQYgDgRgDgRgCgQYgEgRgBgRgCgRYgCgRgDgRAAgQYgBgQgBgQgBgOYAAgPAAgOAAgNYAAgNAAgMABgLYAAgKABgKABgHYABgPAAgJAAAAIAAAAYAAAAgBAIgCAQYgBAHgBAJgCALYgCAKAAAMgBANYgBANgBAOgBAPYAAAPAAAQgBARYAAAQABARABARYAAARABASACARYABARACARACARYACARACARACARYACAQADAQADAOYADAPACAOADANYACANADAMACAKYACALACAJABAHYADAPACAIAAAAYADALAKAHALgCYALgDAHgKgDgLYAAgBAAAAAAgB");
	this.shape_598.setTransform(618,392.45,1,1,0,0,0,-0.7,-1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#F3BEBC").s().p("AAtEEYAAAAgDgIgEgPYgCgHgDgJgDgKYgDgKgEgMgDgMYgDgNgEgNgEgPYgDgOgEgPgDgQYgDgQgEgQgDgRYgDgRgDgRgDgQYgDgRgCgRgCgRYgBgRgDgRgBgQYgBgQgBgQgBgPYAAgPAAgOAAgNYAAgNgBgMABgKYABgLABgJAAgIYABgPAAgJAAAAIAAAAYAAAAgBAJgCAPYgBAHgBAKgBAKYgCALAAAMgBANYgBANgCAOAAAPYAAAPAAAQAAARYgBAQACARAAARYABARAAASACARYACARACARABASYADARACARADAQYACAQACAQADAPYADAPADAOACANYACANADAMADAKYACAKACAJABAIYADAPACAIAAAAYACALALAHALgDYALgCAGgLgCgLYAAAAAAgBAAAA");
	this.shape_599.setTransform(618.1,393.5,1,1,0,0,0,-0.8,-1);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#F3BEBC").s().p("AAuEEYAAAAgDgIgEgOYgDgIgCgJgEgKYgDgKgDgMgEgMYgDgNgEgNgDgOYgEgPgEgPgCgQYgEgQgEgQgDgRYgDgRgDgRgDgQYgDgRgCgRgCgRYgCgRgDgRgBgQYgBgQgBgQgBgPYgBgPABgOgBgNYAAgNAAgMABgLYAAgKABgKAAgHYABgQAAgIAAAAIAAAAYAAAAgBAIgCAPYgBAIgBAJgBALYgCAKAAANgBANYgBANgBAOAAAPYAAAPAAAQAAARYgBAQACARAAARYABASABARACASYACAQACASABARYADARACARADAQYACARADAPADAPYADAPACAOADANYACAOADALACAKYADALABAJACAHYADAPACAJAAAAYACALALAGALgCYALgDAGgKgCgLYAAgBAAAAAAgB");
	this.shape_600.setTransform(618.3,394.55,1,1,0,0,0,-0.8,-1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#F3BEBC").s().p("AAuEFYAAAAgCgIgFgPYgCgHgDgJgDgKYgDgKgEgMgDgNYgEgMgDgOgEgOYgEgOgEgQgCgQYgEgQgEgQgDgRYgDgRgDgRgDgQYgEgRgCgRgCgRYgCgRgDgRAAgQYgCgRgBgPgBgPYgBgPABgPgBgNYAAgNAAgMAAgKYABgLAAgJABgIYAAgPABgJAAAAIAAAAYAAAAgBAJgCAPYgBAHgBAKgBAKYgCALAAAMgBANYAAANgCAPAAAPYAAAPAAAQAAAQYAAARABARABARYABASABARACASYACAQACASABARYADARACARADARYACAQADAQADAPYADAPADAOACANYACANAEAMACAKYACALABAJACAHYAEAPACAJAAAAYACAKALAHALgCYAKgDAHgLgCgKYgBgBAAAAAAgB");
	this.shape_601.setTransform(618.5,395.65,1,1,0,0,0,-0.8,-1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#F3BEBC").s().p("AAvEGYAAAAgCgIgFgPYgCgIgDgIgDgLYgDgKgEgLgEgNYgDgNgEgNgEgPYgEgOgEgPgCgQYgEgQgDgRgEgRYgDgQgDgSgDgQYgEgRgCgRgCgRYgCgRgDgRgBgRYgBgQgCgQgBgPYgBgPAAgOAAgNYAAgNgBgMABgLYAAgLABgJAAgIYAAgPABgJAAAAIAAAAYAAAAgBAJgCAPYgBAIgBAJgBALYgBAKAAANgBANYgBANgBAOAAAPYAAAQAAAQAAAQYAAARACARABARYABASABARACASYACAQACASABARYADASADARACAQYACAQAEAQADAPYACAPADAPADANYACANADALADALYACAKABAJACAIYAEAPACAIAAAAYACALALAHALgDYAKgCAHgLgCgLYgBAAAAgBAAAA");
	this.shape_602.setTransform(618.7,396.7,1,1,0,0,0,-0.8,-1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#F3BEBC").s().p("AAwEHYAAAAgDgJgEgPYgDgHgCgJgEgKYgDgKgEgMgDgNYgDgMgEgOgEgOYgEgPgEgPgDgQYgDgQgEgRgEgQYgDgRgDgSgEgQYgDgRgCgRgDgRYgCgSgDgQgBgRYgBgQgBgQgCgPYgBgPAAgOAAgOYAAgNgBgMABgLYAAgKAAgKAAgHYABgQAAgJAAAAIAAAAYAAAAgBAJgBAQYgBAHgBAKgBAKYgCALAAAMAAANYgBAOgBAOAAAPYAAAPAAAQABARYgBARACARABARYABASABARADASYACARACARACASYACARADARACAQYADARADAQADAPYADAPADAOACANYADANADAMACAKYACALACAJACAIYADAPACAIAAAAYADALALAHAKgDYALgCAHgLgDgLYAAAAAAgBAAAA");
	this.shape_603.setTransform(618.85,397.8,1,1,0,0,0,-0.8,-1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#F3BEBC").s().p("AAxEHYAAAAgDgJgEgOYgDgIgCgJgEgKYgDgKgEgMgDgMYgEgNgEgOgEgOYgEgPgEgPgDgQYgDgQgEgQgEgRYgDgRgDgRgEgRYgDgRgDgRgCgRYgCgSgDgQgBgRYgCgQgBgQgCgPYgBgPAAgOAAgOYgBgNgBgMABgLYAAgKAAgKABgIYAAgPAAgJAAAAIAAAAYAAAAgBAJgBAPYgBAIgBAJgBALYgBALAAAMgBANYAAAOgBAOAAAPYAAAPABAQAAARYAAARACARABARYABASABASACARYADARACARACASYACARADARADARYACAQADAQAEAPYADAPACAOADANYADAOADALACALYACAKACAJACAIYADAPACAIAAAAYADALALAHALgDYAKgCAHgLgDgLYAAAAAAgBAAAA");
	this.shape_604.setTransform(619.05,398.85,1,1,0,0,0,-0.8,-1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#F3BEBC").s().p("AAyEIYAAAAgDgJgFgPYgCgHgDgJgDgKYgDgLgEgLgEgNYgDgNgEgNgEgPYgEgOgFgPgDgRYgDgQgEgQgEgRYgDgRgEgRgDgRYgEgRgCgRgCgRYgDgSgDgRgBgQYgCgQgBgQgBgPYgCgQAAgOAAgNYgBgNgBgNABgKYAAgLAAgKAAgHYABgQAAgJAAAAIAAAAYAAAAgBAJgBAQYgBAHgBAKgBALYgBAKAAANgBANYAAANgBAPAAAPYABAPAAAQAAARYAAARACARABARYACASABASACARYACARACASADARYADARACARADARYACARAEAPADAPYADAQADAOADANYACANADAMADAKYABALADAJABAIYAEAPACAIAAAAYADALALAHAKgDYALgDAHgKgDgLYAAgBAAAAAAAA");
	this.shape_605.setTransform(619.25,399.95,1,1,0,0,0,-0.8,-1);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#F3BEBC").s().p("AAzEIYAAAAgDgIgFgPYgCgHgDgJgDgLYgDgKgFgMgDgMYgEgNgEgOgEgOYgEgPgEgPgEgQYgDgQgEgRgEgRYgDgRgEgRgDgRYgCgIgCgJgBgJYgBgIgBgJgCgJYgCgRgDgRgCgQYgBgRgCgQgBgPYgCgPAAgOgBgOYAAgNgBgMAAgLYAAgLABgJAAgIYAAgPAAgJAAAAIAAAAYAAAAgBAJgBAPYgBAIAAAJgBALYgCALABAMgBANYAAAOgBAOAAAQYABAPAAAQABARYAAARACARABARYABAJAAAJABAJYABAJABAIABAJYACARACASADARYADASADARACAQYADARADAQADAPYAEAPADAOACAOYADANADAMACAKYACALADAJABAHYAEAPACAJAAAAYADALALAGAKgCYALgDAHgLgDgKYAAgBAAAAAAgB");
	this.shape_606.setTransform(619.45,401,1,1,0,0,0,-0.8,-1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#F3BEBC").s().p("AA0EJYAAAAgDgJgFgOYgCgIgDgJgEgKYgDgKgEgMgEgNYgDgNgEgNgEgPYgEgOgFgQgEgQYgCgQgFgRgEgRYgDgRgEgRgDgRYgCgIgCgJgBgJYgBgIgCgJgBgJYgDgRgDgRgBgQYgCgRgCgQgBgPYgCgPAAgPgBgNYAAgNgBgNAAgKYAAgLAAgKAAgIYAAgPAAgJAAAAIAAAAYAAAAAAAJgCAPYAAAIgBAKgBAKYgBALAAANAAANYAAANgBAPABAPYAAAQABAQAAARYAAAQADASABARYAAAJABAJABAJYABAJABAJABAIYACARADASACASYADARADARADARYACAQAEAQADAPYADAQADAOADANYADANADAMABALYADAKACAKACAHYAEAPACAJAAAAYADALALAGAKgCYALgDAHgLgDgLYAAAAAAgBAAAA");
	this.shape_607.setTransform(619.6,402.1,1,1,0,0,0,-0.8,-1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#F3BEBC").s().p("AA1EJYAAAAgDgIgFgPYgCgHgDgJgEgLYgDgKgEgMgEgNYgDgMgEgOgFgPYgEgOgEgQgEgQYgDgQgEgRgFgRYgDgRgEgRgDgRYgEgRgDgRgDgSYgCgRgEgRgBgRYgCgQgCgQgBgPYgCgQAAgOgBgNYgBgOgBgMAAgLYAAgLAAgJAAgIYAAgQAAgJAAAAIAAAAYAAAAAAAJgBAQYgBAIAAAJgBALYgBALAAAMAAAOYAAANgBAPABAPYAAAQABAQAAARYABAQACASABARYACASABASADASYACAQADASACASYADARADARADARYADARADAQAEAPYADAPADAOADAOYACANAEAMABAKYADALACAJACAIYAEAPACAIAAAAYADALALAHAKgDYALgDAHgLgDgKYAAgBAAAAAAgB");
	this.shape_608.setTransform(619.7,403.15,1,1,0,0,0,-0.9,-1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#F3BEBC").s().p("AA1EKYAAAAgCgIgFgPYgDgIgDgJgDgKYgDgLgFgLgDgNYgEgNgEgOgEgOYgFgPgEgPgEgRYgDgQgEgQgEgRYgEgSgEgRgDgQYgCgJgCgJgCgJYgBgIgBgJgCgJYgCgRgEgRgCgRYgBgQgCgQgCgQYgBgPgBgPgBgNYgBgNgBgNAAgKYAAgLAAgKAAgIYAAgPAAgJAAAAIAAAAYAAAAAAAJgBAPYgBAIgBAKAAALYgBAKAAANAAANYAAAOgBAOABAQYAAAPABARABAQYAAARADASABARYABAJABAJAAAJYABAJACAJABAJYACARADARACASYADASADARADAQYADARAEAQADAPYADAQADAOADANYADAOADALACALYADALACAJACAHYAEAQACAIAAAAYADALALAGAKgCYALgDAGgLgCgLYAAAAAAAAgBgB");
	this.shape_609.setTransform(619.85,404.2,1,1,0,0,0,-0.9,-1);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#F3BEBC").s().p("AA2ELYAAAAgCgJgFgPYgDgHgDgJgDgLYgEgKgEgMgEgNYgDgMgEgOgFgPYgEgPgFgPgEgQYgDgRgEgQgEgRYgEgRgEgSgDgQYgCgJgCgJgCgJYgBgIgCgJgBgJYgDgRgEgRgBgRYgCgRgCgQgCgPYgCgPAAgPgBgNYgBgOgBgMAAgLYAAgLAAgKAAgHYgBgQAAgJAAAAIAAAAYAAAAAAAJgBAQYgBAHAAAKgBALYgBALABAMAAAOYAAANgBAPABAPYABAQAAAQABARYABARACARACASYABAJAAAJABAJYABAJACAJABAJYACARADASACARYAEASADARADARYADAQADARAEAPYADAPADAOADAOYADANACAMADALYADAKACAJACAIYAEAPACAJAAAAYADALALAGAKgDYALgCAHgLgDgLYAAAAAAgBgBAA");
	this.shape_610.setTransform(620.05,405.3,1,1,0,0,0,-0.9,-1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#F3BEBC").s().p("AA3ELYAAAAgCgIgFgPYgDgIgDgJgDgKYgEgLgEgLgEgNYgEgNgEgOgEgPYgFgOgEgQgEgQYgDgQgFgRgEgRYgEgRgEgSgDgQYgCgJgCgJgCgJYgBgJgCgIgBgJYgDgRgEgRgCgRYgCgRgCgQgCgPYgBgQgBgOgBgOYgBgNgBgMAAgLYAAgLgBgKAAgIYAAgQAAgJAAAAIAAAAYAAAAgBAJgBAQYAAAIAAAKgBALYgBALABAMAAAOYAAANgBAPABAPYABAQABAQABARYAAARADARABASYABAJABAJABAJYABAJACAJABAJYACARADASADARYADASADARADARYADARAEAQADAPYAEAPADAPADANYADAOACALADALYACALADAJACAIYAEAPACAJAAAAYADAKALAHAKgDYALgDAHgLgDgKYAAgBAAAAgBgB");
	this.shape_611.setTransform(620.2,406.4,1,1,0,0,0,-0.9,-1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#F3BEBC").s().p("AA5EMYAAAAgDgJgFgPYgDgHgDgJgDgLYgEgKgEgMgEgNYgEgNgEgOgEgOYgFgPgFgQgEgQYgDgQgEgRgFgRYgEgRgDgSgEgQYgCgJgCgJgCgJYgCgJgBgIgCgJYgCgRgEgSgCgQYgCgRgCgQgCgQYgCgPgBgPgBgNYgBgNgCgNAAgLYAAgLAAgJAAgIYgBgQAAgJAAAAIAAAAYAAAAAAAJgBAQYAAAIgBAJAAALYgBALABANAAANYAAAOAAAPAAAPYABAQABAQABARYABARADARABASYABAJABAJABAJYABAJACAJABAJYADARACASADASYADARAEASADAQYADARADAQAEAPYADAQAEAOADAOYADANACAMADALYADAKACAJACAIYAEAPACAJAAAAYADALALAGALgDYAKgCAHgLgDgLYAAAAAAgBAAAA");
	this.shape_612.setTransform(620.4,407.45,1,1,0,0,0,-0.9,-1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#F3BEBC").s().p("AA5EMYAAAAgCgIgGgPYgCgIgDgJgEgKYgDgLgEgMgEgMYgEgNgEgOgFgPYgEgPgFgPgEgRYgEgQgEgRgFgRYgEgRgDgSgEgQYgCgJgDgJgBgJYgCgJgBgIgCgJYgDgSgEgRgCgRYgCgQgCgRgCgPYgCgPgBgPgBgNYgBgOgCgMAAgLYAAgLAAgKAAgIYgBgQAAgJAAAAIAAAAYAAAAgBAJAAAQYAAAIgBAKAAALYgBALABAMAAAOYAAANAAAPABAQYABAPABARABARYABARACARACASYABAJABAJABAJYABAJACAJABAJYADARACASADASYAEASADARADARYADAQAEARADAPYAEAPADAPADANYADAOADALADALYACALADAJACAIYAEAPACAJAAAAYADALALAGALgDYAKgDAHgLgDgKYAAgBAAAAgBgB");
	this.shape_613.setTransform(620.55,408.5,1,1,0,0,0,-0.9,-1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#F3BEBC").s().p("AA7ENYAAAAgDgIgFgQYgDgHgDgJgEgLYgDgKgEgMgEgNYgEgNgFgOgEgPYgFgOgFgQgEgQYgDgRgFgRgEgRYgEgRgEgSgEgQYgCgJgCgJgCgJYgCgJgBgJgCgIYgDgSgEgRgCgRYgCgRgDgQgCgPYgCgQgBgOgBgOYgBgOgCgMAAgLYAAgLgBgKAAgIYgBgQAAgJAAAAIAAAAYAAAAAAAJgBAQYAAAIAAAKgBALYAAALABANAAANYAAAOAAAPABAQYABAPABARABARYABARADARACASYABAJABAJABAJYABAJACAJABAJYADARADASADASYADASADARAEARYADARAEAQADAPYAEAQADAOADAOYACANAEAMADALYACALADAJACAIYAEAPACAJAAAAYADAKALAHALgDYALgDAGgLgDgLYAAAAAAAAAAgB");
	this.shape_614.setTransform(620.7,409.6,1,1,0,0,0,-0.9,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_337}]},510).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[]},1).to({state:[{t:this.shape_473}]},151).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[]},1).to({state:[]},95).wait(7));

	// head
	this.instance_22 = new lib.arrowhead();
	this.instance_22.setTransform(629.85,431.15,1,1,-105.0002,0,0,7.7,6.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(510).to({_off:false},0).to({regX:7.5,scaleX:0.9999,scaleY:0.9999,rotation:-118.8887,guide:{path:[629.9,431.3,631.1,427.5,629.7,422.8,629.3,421.2,628.4,419]}},10).to({rotation:-120.9468,guide:{path:[628.3,419.1,627.5,417,626.2,414.5,612.6,387.2,602.5,359.4,601.5,356.5,600.7,354.4]}},56).to({rotation:-110.6323,guide:{path:[600.7,354.4,599.1,349.9,598.7,348.8,596.3,342.8,594,338.5,590.8,333,589.3,330.2,588.9,329.5,588.5,328.8]}},23).to({regX:7.6,scaleX:1,scaleY:1,rotation:-90.0009,guide:{path:[588.5,328.8,582,316.8,578.2,303.6,574.3,289.6,574,275.2,574,274.1,573.9,273.2]}},46).to({_off:true},1).wait(151).to({_off:false,regX:7.7,rotation:-225,x:643.95,y:292.95},0).to({regY:6.4,rotation:-284.9996,x:625.25,y:438.55},141).to({_off:true},1).wait(102));

	// Text
	this.instance_23 = new lib.Start_MC();
	this.instance_23.setTransform(400.1,514.8,2.5977,2.5977,0,0,0,75.2,32);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#EA8C9C").s().p("AhRBzIAAjlICjAAIAAA5IhnAAIAAAeIBNAAIAAA1IhNAAIAAAgIBnAAIAAA5g");
	this.shape_615.setTransform(173.475,484.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#EA8C9C").s().p("AA8BzIAAh1Ig0BUIgPAAIg0hUIAAB1Ig8AAIAAjlIA8AAIA7BjIA8hjIA8AAIAADlg");
	this.shape_616.setTransform(149.025,484.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#EA8C9C").s().p("AhOBXQgeggAAg1QAAg2AeghQAeggAygBQAxAAAdAgQAdAfAAA1QAAA3geAgQgdAhgyABQgxAAgdgggAghgqQgNAQAAAbQAAAbANAQQANAQAUAAQAWAAANgQQAMgQAAgcQAAgbgMgQQgNgQgVAAQgVAAgNARg");
	this.shape_617.setTransform(121.975,484.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#EA8C9C").s().p("AAiBzIAAhZIhDAAIAABZIg8AAIAAjlIA8AAIAABTIBDAAIAAhTIA9AAIAADlg");
	this.shape_618.setTransform(97.55,484.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#EA8C9C").s().p("Ag/BzIAAjmIA8AAIAACtIBDAAIAAA5g");
	this.shape_619.setTransform(221.425,295.9);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#EA8C9C").s().p("AArBzIgGgVIhJAAIgGAVIg/AAIBEjmIBLAAIBEDmgAAXApIgXhYIgWBYIAtAAg");
	this.shape_620.setTransform(201.3,295.9);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#EA8C9C").s().p("AAjBzIhFhyIAAByIg8AAIAAjmIA8AAIBEByIAAhyIA8AAIAADmg");
	this.shape_621.setTransform(178.15,295.9);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#EA8C9C").s().p("AAeBzIgqhAIgTAAIgHAAIAABAIg8AAIAAjmIBGAAQA2AAAYALQAqASAAA2QAAA2guATIA1BKgAgmgCIAbAAQAVAAAHgDQANgGAAgTQAAgTgNgFQgIgEgUABIgbAAg");
	this.shape_622.setTransform(155.425,295.9);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#EA8C9C").s().p("AhRBzIAAjmICjAAIAAA6IhnAAIAAAeIBNAAIAAA1IhNAAIAAAgIBnAAIAAA5g");
	this.shape_623.setTransform(133.125,295.9);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#EA8C9C").s().p("AgdBzIAAisIg0AAIAAg6ICjAAIAAA6Ig0AAIAACsg");
	this.shape_624.setTransform(112.525,295.9);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#EA8C9C").s().p("AAlBzIglg+IgkA+IhFAAIBHh3IhBhvIBFAAIAeA1IAfg1IBFAAIhCBvIBIB3g");
	this.shape_625.setTransform(90.675,295.9);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#EA8C9C").s().p("AhRBzIAAjmICjAAIAAA6IhnAAIAAAeIBNAAIAAA1IhNAAIAAAgIBnAAIAAA5g");
	this.shape_626.setTransform(68.775,295.9);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#EA8C9C").s().p("Ag/B0IAAjnIA8AAIAACsIBDAAIAAA7g");
	this.shape_627.setTransform(217.425,182.65);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#EA8C9C").s().p("AArB0IgGgWIhJAAIgGAWIg/AAIBDjnIBMAAIBDDngAAXApIgXhYIgXBYIAuAAg");
	this.shape_628.setTransform(197.3,182.65);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#EA8C9C").s().p("AAiB0IhDhzIAABzIg9AAIAAjnIA9AAIBDByIAAhyIA8AAIAADng");
	this.shape_629.setTransform(174.15,182.65);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#EA8C9C").s().p("AAeB0IgqhBIgTAAIgHAAIAABBIg8AAIAAjnIBGAAQA2AAAYALQAqASAAA2QAAA3guARIA1BMgAgmgCIAbAAQAVAAAHgEQANgFAAgTQAAgSgNgGQgIgEgUAAIgbAAg");
	this.shape_630.setTransform(151.425,182.65);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#EA8C9C").s().p("AhRB0IAAjnICjAAIAAA6IhnAAIAAAfIBNAAIAAA1IhNAAIAAAfIBnAAIAAA6g");
	this.shape_631.setTransform(129.125,182.65);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#EA8C9C").s().p("AgdB0IAAitIg0AAIAAg6ICjAAIAAA6Ig0AAIAACtg");
	this.shape_632.setTransform(108.525,182.65);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#EA8C9C").s().p("AAiB0IhEhzIAABzIg7AAIAAjnIA7AAIBEByIAAhyIA9AAIAADng");
	this.shape_633.setTransform(86.65,182.65);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#EA8C9C").s().p("AgdB0IAAjnIA7AAIAADng");
	this.shape_634.setTransform(69.9,182.65);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#EA8C9C").s().p("Ag0DLIAAilIhvjwIBvAAIA0B3IA1h3IBvAAIhvDwIAAClg");
	this.shape_635.setTransform(537,48.975);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#EA8C9C").s().p("ABpDLIAAjPIhaCTIgdAAIhbiTIAADPIhqAAIAAmVIBqAAIBpCuIBqiuIBpAAIAAGVg");
	this.shape_636.setTransform(494.05,48.975);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#EA8C9C").s().p("AiLCZQg0g4AAhdQAAhgA1g5QA1g6BYgBQBWABA0A3QAzA3AABdQAABgg1A6Qg0A7hXAAQhXAAg0g4gAg7hLQgXAcAAAxQAAAwAWAcQAXAbAlAAQAmABAXgdQAWgdgBgwQABgwgWgcQgWgcgmAAQglAAgXAdg");
	this.shape_637.setTransform(446.55,48.95);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#EA8C9C").s().p("Ag0DLIAAkwIhbAAIAAhlIEeAAIAABlIhaAAIAAEwg");
	this.shape_638.setTransform(405.8,48.975);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#EA8C9C").s().p("ABMDLIgLgmIiCAAIgKAmIhuAAIB3mVICGAAIB2GVgAApBIIgpibIgpCbIBSAAg");
	this.shape_639.setTransform(367.375,48.975);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#EA8C9C").s().p("AA9DLIh4jJIAADJIhqAAIAAmVIBqAAIB3DIIAAjIIBqAAIAAGVg");
	this.shape_640.setTransform(326.675,48.975);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#EA8C9C").s().p("ABMDLIgLgmIiCAAIgKAmIhuAAIB3mVICGAAIB2GVgAApBIIgpibIgpCbIBSAAg");
	this.shape_641.setTransform(285.975,48.975);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#EA8C9C").s().p("AA8BzIAAh1Ig0BTIgPAAIg0hTIAAB1Ig8AAIAAjlIA8AAIA7BjIA8hjIA8AAIAADlg");
	this.shape_642.setTransform(149.125,483.65);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#EA8C9C").s().p("AhOBXQgeggAAg1QAAg2AeggQAegiAyAAQAxABAdAfQAdAfAAA1QAAA2geAiQgdAggyABQgxAAgdgggAghgqQgNAQAAAbQAAAbANAQQANAQAUAAQAWAAANgQQAMgQAAgcQAAgbgMgQQgNgQgVAAQgVAAgNARg");
	this.shape_643.setTransform(122.075,483.65);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#EA8C9C").s().p("AAiBzIAAhZIhDAAIAABZIg9AAIAAjlIA9AAIAABUIBDAAIAAhUIA8AAIAADlg");
	this.shape_644.setTransform(97.65,483.65);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#EA8C9C").s().p("AArB0IgGgWIhJAAIgGAWIg/AAIBEjnIBLAAIBEDngAAXApIgXhYIgXBYIAuAAg");
	this.shape_645.setTransform(201.9,296.85);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#EA8C9C").s().p("AAeB0IgqhCIgTAAIgHAAIAABCIg8AAIAAjnIBGAAQA2AAAYALQAqASAAA2QAAA3guARIA1BMgAgmgCIAbAAQAVAAAHgEQANgFAAgTQAAgSgNgGQgIgEgUAAIgbAAg");
	this.shape_646.setTransform(156.025,296.85);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#EA8C9C").s().p("AAlB0Iglg/IgkA/IhFAAIBHh4IhBhvIBFAAIAeA2IAfg2IBFAAIhCBvIBIB4g");
	this.shape_647.setTransform(91.275,296.85);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#EA8C9C").s().p("AhRB0IAAjnICjAAIAAA6IhnAAIAAAfIBNAAIAAA1IhNAAIAAAfIBnAAIAAA6g");
	this.shape_648.setTransform(69.375,296.85);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#EA8C9C").s().p("Ag/BzIAAjlIA8AAIAACsIBDAAIAAA5g");
	this.shape_649.setTransform(218.625,182.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#EA8C9C").s().p("AArBzIgGgVIhJAAIgGAVIg/AAIBEjlIBLAAIBEDlgAAXApIgXhYIgXBYIAuAAg");
	this.shape_650.setTransform(198.5,182.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#EA8C9C").s().p("AAjBzIhFhxIAABxIg8AAIAAjlIA8AAIBEBxIAAhxIA8AAIAADlg");
	this.shape_651.setTransform(175.35,182.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#EA8C9C").s().p("AAeBzIgqhBIgTAAIgHAAIAABBIg8AAIAAjlIBGAAQA2gBAYALQAqASAAA2QAAA3guASIA1BKgAgmgCIAbAAQAVAAAHgDQANgGAAgTQAAgTgNgFQgIgDgUAAIgbAAg");
	this.shape_652.setTransform(152.625,182.6);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#EA8C9C").s().p("AhRBzIAAjlICjAAIAAA5IhnAAIAAAeIBNAAIAAA1IhNAAIAAAgIBnAAIAAA5g");
	this.shape_653.setTransform(130.325,182.6);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#EA8C9C").s().p("AgdBzIAAisIg0AAIAAg5ICjAAIAAA5Ig0AAIAACsg");
	this.shape_654.setTransform(109.725,182.6);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#EA8C9C").s().p("AAiBzIhDhxIAABxIg9AAIAAjlIA9AAIBDBxIAAhxIA8AAIAADlg");
	this.shape_655.setTransform(87.85,182.6);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#EA8C9C").s().p("AgdBzIAAjlIA7AAIAADlg");
	this.shape_656.setTransform(71.1,182.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#EA8C9C").s().p("AiODLIAAmVIEeAAIAABlIi1AAIAAA1ICIAAIAABfIiIAAIAAA3IC1AAIAABlg");
	this.shape_657.setTransform(517.6,48.975);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#EA8C9C").s().p("AhwDLIAAmVIBqAAIAAEvIB3AAIAABmg");
	this.shape_658.setTransform(487.4,48.975);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#EA8C9C").s().p("AiLCZQg0g4AAhdQAAhgA1g5QA1g6BYgBQBWABAzA3QA0A3AABdQAABgg1A6Qg0A7hXAAQhXAAg0g4gAg7hLQgXAcAAAxQAAAwAWAcQAXAbAmAAQAlABAWgdQAXgdAAgwQAAgwgXgcQgVgcglAAQgnAAgWAdg");
	this.shape_659.setTransform(449.75,48.95);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#EA8C9C").s().p("Ag0DLIAAkwIhbAAIAAhlIEfAAIAABlIhbAAIAAEwg");
	this.shape_660.setTransform(409,48.975);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#EA8C9C").s().p("AiWChIAshZQA0AmA2AAQArAAAAgWQAAgOgdgPIg+gcQhcgtAAhMQAAg0AnggQAogiBCAAQBJAABDAtIgrBXQg2ghgsAAQgjAAAAAUQAAAQAdANIA9AaQBcApAABPQAAA5goAhQgnAghEABQhZgBhBgvg");
	this.shape_661.setTransform(372.25,48.95);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#EA8C9C").s().p("Ag0DLIAAilIhwjwIBwAAIA0B3IA1h3IBwAAIhwDwIAAClg");
	this.shape_662.setTransform(336.6,48.975);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#EA8C9C").s().p("AiXChIAthZQA0AmA2AAQArAAAAgWQAAgOgcgPIg+gcQhcgtAAhMQAAg0AnggQAngiBCAAQBKAABCAtIgrBXQg2ghgsAAQgjAAAAAUQAAAQAdANIA+AaQBcApgBBPQAAA5gnAhQgoAghEABQhagBhBgvg");
	this.shape_663.setTransform(299.85,48.95);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#EA8C9C").s().p("AAiBzIAAhZIhEAAIAABZIg8AAIAAjlIA8AAIAABUIBEAAIAAhUIA8AAIAADlg");
	this.shape_664.setTransform(97.95,483.65);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#EA8C9C").s().p("Ag/B0IAAjmIA8AAIAACrIBDAAIAAA7g");
	this.shape_665.setTransform(222.325,297.2);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#EA8C9C").s().p("AArB0IgGgWIhKAAIgFAWIg/AAIBEjmIBLAAIBEDmgAAXApIgXhYIgWBYIAtAAg");
	this.shape_666.setTransform(202.2,297.2);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#EA8C9C").s().p("AAjB0IhFhyIAAByIg8AAIAAjmIA8AAIBEBxIAAhxIA8AAIAADmg");
	this.shape_667.setTransform(179.05,297.2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#EA8C9C").s().p("AAeB0IgqhCIgTAAIgHAAIAABCIg8AAIAAjmIBGAAQA2AAAYAKQAqASAAA2QAAA3guARIA1BMgAgmgCIAbAAQAVAAAHgEQANgFAAgTQAAgSgNgGQgIgDgUgBIgbAAg");
	this.shape_668.setTransform(156.325,297.2);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#EA8C9C").s().p("AhRB0IAAjmICjAAIAAA5IhnAAIAAAfIBNAAIAAA1IhNAAIAAAfIBnAAIAAA6g");
	this.shape_669.setTransform(134.025,297.2);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#EA8C9C").s().p("AgdB0IAAitIg0AAIAAg5ICjAAIAAA5Ig0AAIAACtg");
	this.shape_670.setTransform(113.425,297.2);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#EA8C9C").s().p("AAlB0Iglg/IgkA/IhFAAIBHh4IhBhuIBFAAIAeA1IAfg1IBFAAIhCBuIBIB4g");
	this.shape_671.setTransform(91.575,297.2);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#EA8C9C").s().p("AhRB0IAAjmICjAAIAAA5IhnAAIAAAfIBNAAIAAA1IhNAAIAAAfIBnAAIAAA6g");
	this.shape_672.setTransform(69.675,297.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#EA8C9C").s().p("AArBzIgGgVIhKAAIgFAVIg+AAIBCjlIBNAAIBCDlgAAXApIgXhYIgWBYIAtAAg");
	this.shape_673.setTransform(199.9,182.7);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#EA8C9C").s().p("AAiBzIhDhxIAABxIg8AAIAAjlIA8AAIBDBxIAAhxIA9AAIAADlg");
	this.shape_674.setTransform(176.75,182.7);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#EA8C9C").s().p("AAeBzIgqhBIgTAAIgHAAIAABBIg8AAIAAjlIBGAAQA2AAAYAKQAqASAAA2QAAA2guATIA1BKgAgmgCIAbAAQAVAAAHgDQANgGAAgTQAAgTgNgFQgIgDgUgBIgbAAg");
	this.shape_675.setTransform(154.025,182.7);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#EA8C9C").s().p("AAiBzIhEhxIAABxIg7AAIAAjlIA7AAIBEBxIAAhxIA9AAIAADlg");
	this.shape_676.setTransform(89.25,182.7);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#EA8C9C").s().p("AiODLIAAmVIEdAAIAABlIi0AAIAAA1ICHAAIAABfIiHAAIAAA3IC0AAIAABlg");
	this.shape_677.setTransform(532.35,46.025);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#EA8C9C").s().p("AiLCZQg0g4AAhdQAAhgA1g5QA1g7BYAAQBWAAAzA4QA0A3AABdQAABgg1A6Qg0A6hXABQhXgBg0g3gAg7hMQgXAeAAAwQAAAwAXAbQAWAcAmAAQAlAAAWgcQAXgcAAgxQAAgwgXgcQgVgcglAAQgmAAgXAcg");
	this.shape_678.setTransform(464.5,46);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#EA8C9C").s().p("Ag0DLIAAkwIhaAAIAAhlIEeAAIAABlIhbAAIAAEwg");
	this.shape_679.setTransform(423.75,46.025);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#EA8C9C").s().p("AiWChIAshYQA0AlA2AAQArAAAAgWQAAgOgdgPIg+gdQhcgsABhLQgBg0AnghQApghBBgBQBJABBDAsIgrBXQg1ghgtAAQgjAAAAAVQAAAPAdANIA9AaQBcAoAABQQAAA5gnAgQgoAihEAAQhaAAhAgwg");
	this.shape_680.setTransform(387,46);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#EA8C9C").s().p("Ag0DLIAAmVIBpAAIAAGVg");
	this.shape_681.setTransform(319.7,46.025);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#EA8C9C").s().p("AinDLIAAmVIBrAAQBVAAAyAZQBdAvAACAQAACEhZAvQgwAahVAAgAg9BmIAIAAQA1AAAWgNQAkgWAAhFQAAhBgogWQgWgMg2AAIgDAAg");
	this.shape_682.setTransform(290.475,46.025);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#EB8C9C").s().p("AALAmIgVglIAAAlIgUAAIAAhKIAUAAIAVAkIAAgkIAUAAIAABKg");
	this.shape_683.setTransform(693.825,100.55);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#EB8C9C").s().p("AgZAcQgJgKAAgRQAAgRAJgKQAKgMAQAAQAPAAAKALQAJAKAAARQAAARgJALQgKALgQAAQgPgBgKgKgAgKgNQgEAFAAAJQAAAIAEAFQAEAGAGAAQAHgBAEgFQAEgFAAgJQAAgIgEgFQgEgGgHABQgGgBgEAGg");
	this.shape_684.setTransform(685.875,100.55);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#EB8C9C").s().p("AgJAmIAAhKIATAAIAABKg");
	this.shape_685.setTransform(680.075,100.55);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#EB8C9C").s().p("AgJAmIAAg3IgQAAIAAgTIA0AAIAAATIgRAAIAAA3g");
	this.shape_686.setTransform(675.1,100.55);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#EB8C9C").s().p("AAOAmIgCgIIgXAAIgCAIIgUAAIAVhKIAYAAIAWBKgAAHANIgHgbIgHAbIAOAAg");
	this.shape_687.setTransform(668.025,100.55);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#EB8C9C").s().p("AAMAmIgMgVIgLAVIgWAAIAXgmIgWgkIAXAAIAJAQIAKgQIAWAAIgVAkIAXAmg");
	this.shape_688.setTransform(660.525,100.55);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#EB8C9C").s().p("AAOAmIgCgIIgXAAIgCAIIgUAAIAVhKIAYAAIAWBKgAAHANIgHgbIgHAbIAOAAg");
	this.shape_689.setTransform(653.025,100.55);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#EB8C9C").s().p("AgUAmIAAhKIAUAAIAAA3IAVAAIAAATg");
	this.shape_690.setTransform(647.025,100.55);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#EB8C9C").s().p("AgaAmIAAhKIA0AAIAAASIggAAIAAAKIAYAAIAAARIgYAAIAAAKIAgAAIAAATg");
	this.shape_691.setTransform(640.95,100.55);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#EB8C9C").s().p("AAKAmIgOgVIgFAAIgCAAIAAAVIgUAAIAAhKIAXAAQARAAAHADQAOAGAAASQAAAQgPAGIARAZgAgLAAIAIAAIAJgBQADgCABgGQgBgGgDgCIgJgBIgIAAg");
	this.shape_692.setTransform(634,100.55);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#EB8C9C").s().p("AgSAcQgKgKAAgRQAAgQAKgLQALgMAPAAQALAAAJAGIgKARQgEgDgFAAQgJAAgEAFQgEAGAAAIQAAAHAEAGQAEAFAJAAQAFAAAFgDIAKAQQgKAGgLABQgQgBgKgKg");
	this.shape_693.setTransform(624.55,100.55);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#EB8C9C").s().p("AgJAmIAAhKIATAAIAABKg");
	this.shape_694.setTransform(619.325,100.55);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#EB8C9C").s().p("AAUAmIAAgmIgSAbIgEAAIgQgbIAAAmIgUAAIAAhKIAUAAIASAfIAUgfIATAAIAABKg");
	this.shape_695.setTransform(613.1,100.55);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#EB8C9C").s().p("AgaAYQgEgHAAgQIAAgmIAUAAIAAApQAAAHABADQADAEAGAAQAHAAADgEIABgKIAAgpIAUAAIAAAmQAAAQgEAHQgHAOgUAAQgTAAgHgOg");
	this.shape_696.setTransform(604.775,100.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#EB8C9C").s().p("AgUAmIAAhKIAUAAIAAA3IAVAAIAAATg");
	this.shape_697.setTransform(598.775,100.55);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#EB8C9C").s().p("AgZAcQgJgKAAgRQAAgRAJgKQAKgMAQAAQAPAAAKALQAJAKAAARQAAARgJALQgKALgQAAQgPgBgKgKgAgKgNQgEAFAAAJQAAAIAEAFQAEAGAGAAQAHgBAEgFQAEgFAAgJQAAgIgEgFQgEgGgHABQgGgBgEAGg");
	this.shape_698.setTransform(591.825,100.55);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#EB8C9C").s().p("AgMAmIgVhKIAUAAIANAzIAOgzIAUAAIgWBKg");
	this.shape_699.setTransform(583.925,100.55);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#EB8C9C").s().p("AgbAdIAIgQQAKAIAJgBQAIAAAAgDQAAgDgGgDIgKgGQgRgHAAgNQAAgKAHgGQAHgHAMAAQANAAANAJIgIAQQgKgHgIAAQgGABAAAEQAAACAFACIALAGQARAGAAAPQAAALgIAFQgHAHgMAAQgQAAgMgKg");
	this.shape_700.setTransform(576.75,100.55);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#EB8C9C").s().p("AgZAcQgJgKAAgRQAAgRAJgKQAKgMAQAAQAPAAAKALQAJAKAAARQAAARgJALQgKALgQAAQgPgBgKgKgAgKgNQgEAFAAAJQAAAIAEAFQAEAGAGAAQAHgBAEgFQAEgFAAgJQAAgIgEgFQgEgGgHABQgGgBgEAGg");
	this.shape_701.setTransform(569.325,100.55);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#EB8C9C").s().p("AgJAmIAAhKIATAAIAABKg");
	this.shape_702.setTransform(563.525,100.55);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#EB8C9C").s().p("AgZAmIAAhKIA0AAIAAATIghAAIAAANIAYAAIAAASIgYAAIAAAYg");
	this.shape_703.setTransform(556.05,100.55);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#EB8C9C").s().p("AgZAcQgJgKAAgRQAAgRAJgKQAKgMAQAAQAPAAAKALQAJAKAAARQAAARgJALQgKALgQAAQgPgBgKgKgAgKgNQgEAFAAAJQAAAIAEAFQAEAGAGAAQAHgBAEgFQAEgFAAgJQAAgIgEgFQgEgGgHABQgGgBgEAGg");
	this.shape_704.setTransform(548.525,100.55);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#EB8C9C").s().p("AgeAmIAAhKIAUAAQAPgBAIAFQASAJAAAXQAAAYgQAJQgKAEgOABgAgKATIABAAQAJAAAEgCQAGgFAAgMQAAgMgHgDQgDgDgKAAIAAAAg");
	this.shape_705.setTransform(538.15,100.55);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#EB8C9C").s().p("AgZAcQgJgKAAgRQAAgRAJgKQAKgMAQAAQAPAAAKALQAJAKAAARQAAARgJALQgKALgQAAQgPgBgKgKgAgKgNQgEAFAAAJQAAAIAEAFQAEAGAGAAQAHgBAEgFQAEgFAAgJQAAgIgEgFQgEgGgHABQgGgBgEAGg");
	this.shape_706.setTransform(530.175,100.55);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#EB8C9C").s().p("AgJAmIAAhKIATAAIAABKg");
	this.shape_707.setTransform(524.375,100.55);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#EB8C9C").s().p("AAJAmIgMgVIgHAAIgBAAIAAAVIgUAAIAAhKIAWAAQASAAAHADQAOAGAAASQAAAQgPAGIARAZgAgLAAIAIAAIAJgBQADgCAAgGQAAgGgDgCIgJgBIgIAAg");
	this.shape_708.setTransform(519.1,100.55);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#EB8C9C").s().p("AgaAmIAAhKIA0AAIAAASIggAAIAAAKIAYAAIAAARIgYAAIAAAKIAgAAIAAATg");
	this.shape_709.setTransform(511.9,100.55);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#EB8C9C").s().p("AgcAmIAAhKIAUAAQAPAAAIADQAOAGAAATQAAAQgOAHQgHADgQABIgBAAIAAATgAgJAAIAGAAQAFAAADAAQAEgDAAgFQAAgHgEgCIgIgBIgGAAg");
	this.shape_710.setTransform(505.525,100.55);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#EB8C9C").s().p("AgZAmIAAhKIA0AAIAAASIghAAIAAAKIAYAAIAAARIgYAAIAAAKIAhAAIAAATg");
	this.shape_711.setTransform(496.1,100.55);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#EB8C9C").s().p("AALAmIAAgdIgVAAIAAAdIgUAAIAAhKIAUAAIAAAbIAVAAIAAgbIAUAAIAABKg");
	this.shape_712.setTransform(489.025,100.55);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#EB8C9C").s().p("AgJAmIAAg3IgQAAIAAgTIAzAAIAAATIgQAAIAAA3g");
	this.shape_713.setTransform(481.95,100.55);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#EB8C9C").s().p("AALAmIgVglIAAAlIgUAAIAAhKIAUAAIAVAkIAAgkIAUAAIAABKg");
	this.shape_714.setTransform(472.375,100.55);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#EB8C9C").s().p("AgJAmIAAhKIATAAIAABKg");
	this.shape_715.setTransform(466.975,100.55);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#EB8C9C").s().p("AgbAdIAIgQQAKAIAJgBQAIAAAAgDQAAgDgGgDIgKgGQgRgHAAgNQAAgKAHgGQAIgHALAAQAOAAAMAJIgIAQQgKgHgJAAQgFABAAAEQAAACAFACIALAGQARAGAAAPQAAALgIAFQgHAHgNAAQgPAAgMgKg");
	this.shape_716.setTransform(459.4,100.55);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#EB8C9C").s().p("AgJAmIAAhKIATAAIAABKg");
	this.shape_717.setTransform(454.525,100.55);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#EB8C9C").s().p("AgJAmIAAg3IgQAAIAAgTIA0AAIAAATIgRAAIAAA3g");
	this.shape_718.setTransform(447.05,100.55);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#EB8C9C").s().p("AAKAmIgOgVIgGAAIgCAAIAAAVIgTAAIAAhKIAWAAQASAAAHADQAOAGAAASQAAAQgPAGIARAZgAgMAAIAJAAIAIgBQAEgCABgGQgBgGgEgCIgIgBIgJAAg");
	this.shape_719.setTransform(440.1,100.55);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#EB8C9C").s().p("AAOAmIgCgIIgXAAIgCAIIgUAAIAVhKIAYAAIAWBKgAAHANIgHgbIgHAbIAOAAg");
	this.shape_720.setTransform(432.475,100.55);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#EB8C9C").s().p("AgaAmIAAhKIA0AAIAAASIggAAIAAAKIAYAAIAAARIgYAAIAAAKIAgAAIAAATg");
	this.shape_721.setTransform(425.4,100.55);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#EB8C9C").s().p("AALAmIAAgdIgVAAIAAAdIgUAAIAAhKIAUAAIAAAbIAVAAIAAgbIAUAAIAABKg");
	this.shape_722.setTransform(418.325,100.55);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#EB8C9C").s().p("AgbAdIAIgQQAKAIAJgBQAIAAAAgDQAAgDgGgDIgKgGQgRgHAAgNQAAgKAHgGQAIgHALAAQAOAAALAJIgHAQQgKgHgJAAQgFABAAAEQAAACAFACIALAGQARAGAAAPQAAALgIAFQgHAHgNAAQgPAAgMgKg");
	this.shape_723.setTransform(408.65,100.55);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#EB8C9C").s().p("AgJAmIAAhKIATAAIAABKg");
	this.shape_724.setTransform(403.775,100.55);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#EB8C9C").s().p("AALAmIAAgdIgVAAIAAAdIgUAAIAAhKIAUAAIAAAbIAVAAIAAgbIAUAAIAABKg");
	this.shape_725.setTransform(398.375,100.55);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#EB8C9C").s().p("AgJAmIAAg3IgRAAIAAgTIA0AAIAAATIgRAAIAAA3g");
	this.shape_726.setTransform(391.3,100.55);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#EA8C9C").s().p("AAjB0IhEhzIAABzIg9AAIAAjnIA9AAIBDByIAAhyIA8AAIAADng");
	this.shape_727.setTransform(179.75,296.85);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#EA8C9C").s().p("AArBzIgGgVIhKAAIgFAVIg/AAIBEjlIBLAAIBEDlgAAXApIgXhYIgWBYIAtAAg");
	this.shape_728.setTransform(199.5,182.6);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#EA8C9C").s().p("AAjBzIhEhxIAABxIg9AAIAAjlIA9AAIBDBxIAAhxIA8AAIAADlg");
	this.shape_729.setTransform(88.85,182.6);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#EA8C9C").s().p("AiLCZQg0g4AAhdQAAhfA1g6QA1g7BYABQBWAAAzA3QA0A3AABdQAABgg1A6Qg0A6hXAAQhXAAg0g3gAg7hMQgXAdAAAxQAAAvAWAcQAXAdAmAAQAlAAAWgdQAXgcAAgxQAAgvgXgdQgVgcglAAQgnAAgWAcg");
	this.shape_730.setTransform(449.75,47.1);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#EA8C9C").s().p("AiWChIAshYQA0AlA2AAQArAAAAgVQAAgPgdgPIg+gdQhcgsAAhLQAAg0AnghQAoghBCAAQBJAABDAsIgrBXQg2ghgsAAQgjAAAAAVQAAAOAdAOIA9AaQBcApAABPQAAA5goAgQgnAihEgBQhZABhBgwg");
	this.shape_731.setTransform(372.25,47.1);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#EA8C9C").s().p("AiXChIAthYQA0AlA2AAQArAAAAgVQAAgPgcgPIg+gdQhcgsAAhLQAAg0AnghQAnghBCAAQBKAABCAsIgrBXQg2ghgsAAQgjAAAAAVQAAAOAdAOIA+AaQBcApgBBPQAAA5gnAgQgoAihEgBQhaABhBgwg");
	this.shape_732.setTransform(299.85,47.1);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#EA8C9C").s().p("AAiBzIAAhZIhEAAIAABZIg7AAIAAjlIA7AAIAABUIBEAAIAAhUIA9AAIAADlg");
	this.shape_733.setTransform(99.95,483.65);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#EA8C9C").s().p("AArB0IgGgWIhKAAIgFAWIg+AAIBCjnIBNAAIBDDngAAXApIgXhYIgWBYIAtAAg");
	this.shape_734.setTransform(203.2,298.2);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#EA8C9C").s().p("AAjB0IhFhyIAAByIg7AAIAAjnIA7AAIBEByIAAhyIA9AAIAADng");
	this.shape_735.setTransform(180.05,298.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#EA8C9C").s().p("AiLCZQg0g4AAhdQAAhgA1g5QA1g6BYgBQBWABAzA3QA0A3AABdQAABgg1A6Qg0A7hXgBQhXAAg0g3gAg7hLQgXAcAAAxQAAAvAXAdQAWAcAmAAQAlgBAWgcQAXgdAAgwQAAgwgXgcQgVgcglAAQgmAAgXAdg");
	this.shape_736.setTransform(464.5,47.85);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#EA8C9C").s().p("AiWChIAshZQA0AmA2AAQArAAAAgVQAAgPgdgPIg+gcQhcgtABhMQgBg0AngfQApgjBBAAQBJAABDAtIgrBXQg1ghgtAAQgjAAAAAUQAAAPAdANIA9AbQBcAoAABQQAAA4gnAiQgoAghEAAQhaAAhAgvg");
	this.shape_737.setTransform(387,47.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},36).to({state:[{t:this.instance_23}]},12).to({state:[{t:this.instance_23}]},1).to({state:[]},1).to({state:[{t:this.shape_641},{t:this.shape_640},{t:this.shape_639,p:{x:367.375,y:48.975}},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632,p:{x:108.525,y:182.65}},{t:this.shape_631,p:{x:129.125,y:182.65}},{t:this.shape_630},{t:this.shape_629,p:{x:174.15,y:182.65}},{t:this.shape_628},{t:this.shape_627,p:{x:217.425,y:182.65}},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615,p:{x:173.475,y:484.2}}]},9).to({state:[{t:this.shape_663},{t:this.shape_662,p:{y:48.975}},{t:this.shape_661},{t:this.shape_660,p:{y:48.975}},{t:this.shape_659},{t:this.shape_658,p:{x:487.4,y:48.975}},{t:this.shape_657,p:{y:48.975}},{t:this.shape_656,p:{x:71.1,y:182.6}},{t:this.shape_655},{t:this.shape_654,p:{x:109.725,y:182.6}},{t:this.shape_653,p:{x:130.325,y:182.6}},{t:this.shape_652,p:{x:152.625}},{t:this.shape_651,p:{x:175.35}},{t:this.shape_650},{t:this.shape_649,p:{x:218.625,y:182.6}},{t:this.shape_648,p:{x:69.375,y:296.85}},{t:this.shape_647,p:{x:91.275,y:296.85}},{t:this.shape_632,p:{x:113.125,y:296.85}},{t:this.shape_631,p:{x:133.725,y:296.85}},{t:this.shape_646,p:{x:156.025,y:296.85}},{t:this.shape_629,p:{x:178.75,y:296.85}},{t:this.shape_645,p:{x:201.9}},{t:this.shape_627,p:{x:222.025,y:296.85}},{t:this.shape_644,p:{x:97.65}},{t:this.shape_643,p:{x:122.075}},{t:this.shape_642,p:{x:149.125}},{t:this.shape_615,p:{x:173.575,y:483.65}}]},60).to({state:[{t:this.shape_682,p:{y:46.025}},{t:this.shape_681,p:{y:46.025}},{t:this.shape_639,p:{x:349.125,y:46.025}},{t:this.shape_680},{t:this.shape_679,p:{y:46.025}},{t:this.shape_678},{t:this.shape_658,p:{x:502.15,y:46.025}},{t:this.shape_677,p:{y:46.025}},{t:this.shape_656,p:{x:72.5,y:182.7}},{t:this.shape_676},{t:this.shape_654,p:{x:111.125,y:182.7}},{t:this.shape_653,p:{x:131.725,y:182.7}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_649,p:{x:220.025,y:182.7}},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_643,p:{x:122.375}},{t:this.shape_642,p:{x:149.425}},{t:this.shape_615,p:{x:173.875,y:483.65}}]},120).to({state:[{t:this.shape_634},{t:this.shape_633},{t:this.shape_632,p:{x:108.525,y:182.65}},{t:this.shape_631,p:{x:129.125,y:182.65}},{t:this.shape_630},{t:this.shape_629,p:{x:174.15,y:182.65}},{t:this.shape_628},{t:this.shape_627,p:{x:217.425,y:182.65}},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615,p:{x:173.475,y:484.2}},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639,p:{x:367.375,y:48.975}},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683}]},120).to({state:[{t:this.shape_732},{t:this.shape_662,p:{y:47.125}},{t:this.shape_731},{t:this.shape_660,p:{y:47.125}},{t:this.shape_730},{t:this.shape_658,p:{x:487.4,y:47.125}},{t:this.shape_657,p:{y:47.125}},{t:this.shape_656,p:{x:72.1,y:182.6}},{t:this.shape_729},{t:this.shape_654,p:{x:110.725,y:182.6}},{t:this.shape_653,p:{x:131.325,y:182.6}},{t:this.shape_652,p:{x:153.625}},{t:this.shape_651,p:{x:176.35}},{t:this.shape_728},{t:this.shape_649,p:{x:219.625,y:182.6}},{t:this.shape_648,p:{x:70.375,y:296.85}},{t:this.shape_647,p:{x:92.275,y:296.85}},{t:this.shape_632,p:{x:114.125,y:296.85}},{t:this.shape_631,p:{x:134.725,y:296.85}},{t:this.shape_646,p:{x:157.025,y:296.85}},{t:this.shape_727},{t:this.shape_645,p:{x:202.9}},{t:this.shape_627,p:{x:223.025,y:296.85}},{t:this.shape_644,p:{x:99.65}},{t:this.shape_643,p:{x:124.075}},{t:this.shape_642,p:{x:151.125}},{t:this.shape_615,p:{x:175.575,y:483.65}}]},120).to({state:[{t:this.shape_682,p:{y:47.875}},{t:this.shape_681,p:{y:47.875}},{t:this.shape_639,p:{x:349.125,y:47.875}},{t:this.shape_737},{t:this.shape_679,p:{y:47.875}},{t:this.shape_736},{t:this.shape_658,p:{x:502.15,y:47.875}},{t:this.shape_677,p:{y:47.875}},{t:this.shape_656,p:{x:72.5,y:182.7}},{t:this.shape_676},{t:this.shape_654,p:{x:111.125,y:182.7}},{t:this.shape_653,p:{x:131.725,y:182.7}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_649,p:{x:220.025,y:182.7}},{t:this.shape_648,p:{x:70.675,y:298.2}},{t:this.shape_647,p:{x:92.575,y:298.2}},{t:this.shape_632,p:{x:114.425,y:298.2}},{t:this.shape_631,p:{x:135.025,y:298.2}},{t:this.shape_646,p:{x:157.325,y:298.2}},{t:this.shape_735},{t:this.shape_734},{t:this.shape_627,p:{x:223.325,y:298.2}},{t:this.shape_733},{t:this.shape_643,p:{x:124.375}},{t:this.shape_642,p:{x:151.425}},{t:this.shape_615,p:{x:175.875,y:483.65}}]},240).to({state:[{t:this.shape_682,p:{y:47.875}},{t:this.shape_681,p:{y:47.875}},{t:this.shape_639,p:{x:349.125,y:47.875}},{t:this.shape_737},{t:this.shape_679,p:{y:47.875}},{t:this.shape_736},{t:this.shape_658,p:{x:502.15,y:47.875}},{t:this.shape_677,p:{y:47.875}},{t:this.shape_656,p:{x:72.5,y:182.7}},{t:this.shape_676},{t:this.shape_654,p:{x:111.125,y:182.7}},{t:this.shape_653,p:{x:131.725,y:182.7}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_649,p:{x:220.025,y:182.7}},{t:this.shape_648,p:{x:70.675,y:298.2}},{t:this.shape_647,p:{x:92.575,y:298.2}},{t:this.shape_632,p:{x:114.425,y:298.2}},{t:this.shape_631,p:{x:135.025,y:298.2}},{t:this.shape_646,p:{x:157.325,y:298.2}},{t:this.shape_735},{t:this.shape_734},{t:this.shape_627,p:{x:223.325,y:298.2}},{t:this.shape_733},{t:this.shape_643,p:{x:124.375}},{t:this.shape_642,p:{x:151.425}},{t:this.shape_615,p:{x:175.875,y:483.65}}]},313).to({state:[{t:this.shape_682,p:{y:47.875}},{t:this.shape_681,p:{y:47.875}},{t:this.shape_639,p:{x:349.125,y:47.875}},{t:this.shape_737},{t:this.shape_679,p:{y:47.875}},{t:this.shape_736},{t:this.shape_658,p:{x:502.15,y:47.875}},{t:this.shape_677,p:{y:47.875}},{t:this.shape_656,p:{x:72.5,y:182.7}},{t:this.shape_676},{t:this.shape_654,p:{x:111.125,y:182.7}},{t:this.shape_653,p:{x:131.725,y:182.7}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_649,p:{x:220.025,y:182.7}},{t:this.shape_648,p:{x:70.675,y:298.2}},{t:this.shape_647,p:{x:92.575,y:298.2}},{t:this.shape_632,p:{x:114.425,y:298.2}},{t:this.shape_631,p:{x:135.025,y:298.2}},{t:this.shape_646,p:{x:157.325,y:298.2}},{t:this.shape_735},{t:this.shape_734},{t:this.shape_627,p:{x:223.325,y:298.2}},{t:this.shape_733},{t:this.shape_643,p:{x:124.375}},{t:this.shape_642,p:{x:151.425}},{t:this.shape_615,p:{x:175.875,y:483.65}}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(36).to({_off:false},0).to({alpha:1},12).wait(1).to({_off:true},1).wait(991));

	// Button
	this.Start_bttn = new lib.Start();
	this.Start_bttn.name = "Start_bttn";
	this.Start_bttn.setTransform(400.65,511.35,1,1.3127,0,0,0,399.4,78.4);
	new cjs.ButtonHelper(this.Start_bttn, 0, 1, 2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#DF909D").s().p("AgdBwIAAhbIg9iFIA9AAIAdBDIAehDIA9AAIg9CFIAABbg");
	this.shape_738.setTransform(220.7414,177.6554,1.2261,1.2261);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#DF909D").s().p("AA6BwIAAhxIgyBRIgPAAIgzhSIAAByIg6AAIAAjgIA6AAIA6BhIA6hhIA7AAIAADgg");
	this.shape_739.setTransform(191.5601,177.6554,1.2261,1.2261);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#DF909D").s().p("AhMBUQgdgfAAgzQAAg1AdgfQAeghAwAAQAvAAAdAgQAcAeAAAzQAAA1gdAgQgdAhgwAAQgvAAgdgggAgggqQgNARAAAaQAAAaANAQQAMAPAUAAQAVAAANgPQAMgQAAgbQAAgagMgQQgMgQgVAAQgVAAgMAQg");
	this.shape_740.setTransform(159.2829,177.6554,1.2261,1.2261);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#DF909D").s().p("AgcBwIAAinIgyAAIAAg5ICdAAIAAA5IgxAAIAACng");
	this.shape_741.setTransform(134.6689,177.6554,1.2261,1.2261);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#DF909D").s().p("AAqBwIgGgVIhHAAIgGAVIg9AAIBCjgIBKAAIBBDggAgWAoIAsAAIgWhVg");
	this.shape_742.setTransform(111.6487,177.6554,1.2261,1.2261);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#DF909D").s().p("AAiBwIhChvIAABvIg7AAIAAjgIA7AAIBCBwIAAhwIA6AAIAADgg");
	this.shape_743.setTransform(83.9694,177.6554,1.2261,1.2261);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#DF909D").s().p("AAqBwIgGgVIhIAAIgFAVIg9AAIBCjgIBKAAIBBDggAgWAoIAtAAIgXhVg");
	this.shape_744.setTransform(56.3208,177.6554,1.2261,1.2261);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#DF909D").s().p("AhPBxIAAjgICfAAIAAA3IhjAAIAAAeIBJAAIAAA0IhJAAIAAAfIBjAAIAAA4g");
	this.shape_745.setTransform(220.7525,412.2472,1.3208,1.3208);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#DF909D").s().p("Ag+BxIAAjgIA7AAIAACnIBCAAIAAA5g");
	this.shape_746.setTransform(198.6618,412.2472,1.3208,1.3208);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#DF909D").s().p("AhMBVQgdgggBgzQAAg1AeggQAdgfAxgBQAvAAAdAfQAdAfgBAzQAAA1gcAgQgeAggwAAQgvAAgdgegAgggpQgNAQAAAaQAAAaANAQQAMAQAUAAQAWgBALgPQANgRAAgaQAAgagMgQQgNgPgUAAQgVgBgMARg");
	this.shape_747.setTransform(171.0898,412.2472,1.3208,1.3208);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#DF909D").s().p("AgdBxIAAioIgxAAIAAg4ICdAAIAAA4IgxAAIAACog");
	this.shape_748.setTransform(144.6074,412.2472,1.3208,1.3208);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#DF909D").s().p("AhTBZIAZgxQAdAVAdAAQAXAAABgMQgBgIgQgIIghgQQgzgZAAgpQAAgdAVgSQAXgSAkgBQApAAAkAZIgXAwQgggSgXAAQgTAAAAAMQAAAHAQAIIAiAOQAzAWAAAtQAAAfgWASQgXASglAAQgxABgkgbg");
	this.shape_749.setTransform(117.7288,412.2472,1.3208,1.3208);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#DF909D").s().p("AgcBxIAAhcIg+iEIA+AAIAcBCIAdhCIA+AAIg+CEIAABcg");
	this.shape_750.setTransform(91.6427,412.2472,1.3208,1.3208);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#DF909D").s().p("AhTBZIAZgxQAdAVAdAAQAYAAAAgMQAAgIgQgIIgigQQgzgZAAgpQAAgdAWgSQAWgSAkgBQAoAAAmAZIgYAwQgfgSgYAAQgTAAAAAMQAAAHAQAIIAiAOQAzAWAAAtQAAAfgWASQgWASgmAAQgxABgkgbg");
	this.shape_751.setTransform(64.7311,412.2472,1.3208,1.3208);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#DF909D").s().p("AhPBwIAAjfICeAAIAAA3IhjAAIAAAeIBKAAIAAA0IhKAAIAAAeIBjAAIAAA4g");
	this.shape_752.setTransform(232.0358,293.2494,1.3406,1.3406);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#DF909D").s().p("Ag+BwIAAjfIA7AAIAACnIBCAAIAAA4g");
	this.shape_753.setTransform(209.6144,293.2494,1.3406,1.3406);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#DF909D").s().p("AhMBUQgdgeAAg0QAAg0AdghQAegfAwAAQAvAAAdAeQAdAfgBAzQAAA1gdAgQgcAggxABQgvgBgdgfgAgggpQgNAQAAAaQAAAaANAQQAMAPAUAAQAVABAMgRQANgPAAgbQAAgagMgQQgMgPgVAAQgVAAgMAQg");
	this.shape_754.setTransform(181.6295,293.2158,1.3406,1.3406);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#DF909D").s().p("AgdBwIAAinIgxAAIAAg4ICdAAIAAA4IgxAAIAACng");
	this.shape_755.setTransform(154.7507,293.2494,1.3406,1.3406);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#DF909D").s().p("AhTBZIAZgxQAeAVAcAAQAYAAAAgMQAAgIgQgIIgigQQgzgZAAgpQAAgcAWgTQAWgSAkAAQAoAAAmAZIgYAvQgfgSgYAAQgTAAAAALQAAAJAQAHIAiAPQAzAVAAAsQAAAggWATQgWASgmAAQgxAAgkgbg");
	this.shape_756.setTransform(127.4361,293.2158,1.3406,1.3406);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#DF909D").s().p("AAqBwIgGgVIhHAAIgGAVIg9AAIBCjfIBKAAIBBDfgAgWAoIAtAAIgXhWg");
	this.shape_757.setTransform(99.2837,293.2494,1.3406,1.3406);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#DF909D").s().p("AgcBwIAAjfIA5AAIAADfg");
	this.shape_758.setTransform(77.4656,293.2494,1.3406,1.3406);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#DF909D").s().p("AhcBwIAAjfIA7AAQAvAAAcAOQAzAZAABIQAABIgxAaQgbAOgvAAgAgiA4IAFAAQAdAAAMgHQAUgMABglQgBglgWgMQgMgHgeAAIgCAAg");
	this.shape_759.setTransform(55.748,293.2494,1.3406,1.3406);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#EA8C9C").s().p("Ag/DzIAAlsIhsAAIAAh5IFXAAIAAB5IhsAAIAAFsg");
	this.shape_760.setTransform(698.525,51.525);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#EA8C9C").s().p("AA/DzIhZiJIgoAAIgOAAIAACJIh/AAIAAnlICTAAQByAAAzAVQBZAmAABzQAABzhgAmIBuCegAhQgGIA3AAQAuAAAQgHQAagMAAgoQAAgmgcgNQgQgHgsAAIg3AAg");
	this.shape_761.setTransform(653.275,51.525);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#EA8C9C").s().p("ABbDzIgNgtIicAAIgMAtIiEAAICPnlIChAAICNHlgAAxBWIgxi6IgxC6IBiAAg");
	this.shape_762.setTransform(603.55,51.525);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#EA8C9C").s().p("AirDzIAAnlIFXAAIAAB4IjYAAIAABBICiAAIAABxIiiAAIAABDIDYAAIAAB4g");
	this.shape_763.setTransform(557.425,51.525);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#EA8C9C").s().p("ABIDzIAAi8IiPAAIAAC8Ih/AAIAAnlIB/AAIAACwICPAAIAAiwIB/AAIAAHlg");
	this.shape_764.setTransform(511.275,51.525);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#EA8C9C").s().p("ABJDzIiQjwIAADwIh/AAIAAnlIB/AAICPDvIAAjvIB/AAIAAHlg");
	this.shape_765.setTransform(446.175,51.525);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#EA8C9C").s().p("ABbDzIgNgtIicAAIgMAtIiEAAICPnlIChAAICNHlgAAxBWIgxi6IgxC6IBiAAg");
	this.shape_766.setTransform(397.35,51.525);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#EA8C9C").s().p("AB+DzIAAj4IhsCxIgjAAIhtiyIAAD5Ih/AAIAAnlIB/AAIB+DQIB/jQIB/AAIAAHlg");
	this.shape_767.setTransform(343.075,51.525);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#EA8C9C").s().p("AiuCfQgYgwAAhmIAAj/IB/AAIAAEMQAAAvAJATQAQAhAvAAQAvAAAPghQAJgTAAgvIAAkMIB/AAIAAD/QAABmgYAwQgtBYiCAAQiBAAgthYg");
	this.shape_768.setTransform(288.775,51.85);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#EA8C9C").s().p("ABIDzIAAi8IiPAAIAAC8Ih/AAIAAnlIB/AAIAACwICPAAIAAiwIB/AAIAAHlg");
	this.shape_769.setTransform(239.925,51.525);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#EA8C9C").s().p("AirDzIAAnlIFXAAIAAB4IjYAAIAABBICiAAIAABxIiiAAIAABDIDYAAIAAB4g");
	this.shape_770.setTransform(177.575,51.525);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#EA8C9C").s().p("ABIDzIAAi8IiPAAIAAC8Ih/AAIAAnlIB/AAIAACwICPAAIAAiwIB/AAIAAHlg");
	this.shape_771.setTransform(131.425,51.525);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#EA8C9C").s().p("Ag/DzIAAlsIhsAAIAAh5IFXAAIAAB5IhsAAIAAFsg");
	this.shape_772.setTransform(85.325,51.525);

	this.Anatomy_Nav = new lib.AnatomyNavigation();
	this.Anatomy_Nav.name = "Anatomy_Nav";
	this.Anatomy_Nav.setTransform(143.65,178.15,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.Anatomy_Nav, 0, 1, 2);

	this.Diastole_nav = new lib.DiastoleNavigation();
	this.Diastole_nav.name = "Diastole_nav";
	this.Diastole_nav.setTransform(144.05,295.35,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.Diastole_nav, 0, 1, 2);

	this.Systole_Nav = new lib.systoleNavigation();
	this.Systole_Nav.name = "Systole_Nav";
	this.Systole_Nav.setTransform(143.6,414.05,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.Systole_Nav, 0, 1, 2);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#333334").ss(1,1,1).p("EhIfAJLIAAyVMCQ/AAAIAASV");
	this.shape_773.setTransform(404.375,37.675);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#97F0FF").s().p("EhIfAJLIAAyVMCQ/AAAIAASVg");
	this.shape_774.setTransform(404.375,37.675);

	this.Home = new lib.anatomyinternal();
	this.Home.name = "Home";
	this.Home.setTransform(26.1,449.1);
	new cjs.ButtonHelper(this.Home, 0, 1, 2);

	this.Anatomy_Internal = new lib.anatomyinternal();
	this.Anatomy_Internal.name = "Anatomy_Internal";
	this.Anatomy_Internal.setTransform(143,178.85,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.Anatomy_Internal, 0, 1, 2);

	this.Anatomy_External = new lib.anatomyexternal();
	this.Anatomy_External.name = "Anatomy_External";
	this.Anatomy_External.setTransform(143,294.95,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.Anatomy_External, 0, 1, 2);

	this.systole_internal = new lib.sytoleinternal();
	this.systole_internal.name = "systole_internal";
	this.systole_internal.setTransform(142.45,178.8,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.systole_internal, 0, 1, 2);

	this.systole_external = new lib.systoleexternal();
	this.systole_external.name = "systole_external";
	this.systole_external.setTransform(142.45,294.9,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.systole_external, 0, 1, 2);

	this.diastole_internal = new lib.diastoleinternal();
	this.diastole_internal.name = "diastole_internal";
	this.diastole_internal.setTransform(143.45,179.05,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.diastole_internal, 0, 1, 2);

	this.diastole_external = new lib.diastoleexternal();
	this.diastole_external.name = "diastole_external";
	this.diastole_external.setTransform(143.45,294.7,1,1,0,0,0,116.9,33.8);
	new cjs.ButtonHelper(this.diastole_external, 0, 1, 2);

	this.systole_replay = new lib.Replay();
	this.systole_replay.name = "systole_replay";
	this.systole_replay.setTransform(726.35,459.9,0.829,0.829);
	new cjs.ButtonHelper(this.systole_replay, 0, 1, 2);

	this.Replay_diastole = new lib.Replay();
	this.Replay_diastole.name = "Replay_diastole";
	this.Replay_diastole.setTransform(755.35,490.8,0.8687,0.8687,0,0,0,34.7,34.6);
	new cjs.ButtonHelper(this.Replay_diastole, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Start_bttn}]}).to({state:[{t:this.Start_bttn}]},49).to({state:[{t:this.shape_774,p:{y:37.675}},{t:this.shape_773},{t:this.Systole_Nav},{t:this.Diastole_nav},{t:this.Anatomy_Nav},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738}]},1).to({state:[{t:this.Anatomy_External},{t:this.Anatomy_Internal},{t:this.Home,p:{x:26.1,y:449.1}}]},9).to({state:[{t:this.systole_external,p:{x:142.45}},{t:this.systole_internal,p:{x:142.45}},{t:this.Home,p:{x:26.3,y:448.5}}]},60).to({state:[{t:this.shape_774,p:{y:26.575}},{t:this.diastole_external},{t:this.diastole_internal},{t:this.Home,p:{x:26.3,y:449.1}}]},120).to({state:[{t:this.shape_774,p:{y:26.575}},{t:this.Anatomy_External},{t:this.Anatomy_Internal},{t:this.Home,p:{x:26.1,y:449.1}}]},120).to({state:[{t:this.shape_774,p:{y:26.575}},{t:this.systole_external,p:{x:143.45}},{t:this.systole_internal,p:{x:143.45}},{t:this.Home,p:{x:26.55,y:448.5}}]},120).to({state:[{t:this.shape_774,p:{y:26.575}},{t:this.systole_external,p:{x:143.45}},{t:this.systole_internal,p:{x:143.45}},{t:this.Home,p:{x:26.55,y:448.5}},{t:this.systole_replay}]},155).to({state:[{t:this.shape_774,p:{y:26.575}},{t:this.diastole_external},{t:this.diastole_internal},{t:this.Home,p:{x:26.55,y:448.5}}]},85).to({state:[{t:this.shape_774,p:{y:26.575}},{t:this.diastole_external},{t:this.diastole_internal},{t:this.Home,p:{x:26.55,y:448.5}}]},313).to({state:[{t:this.shape_774,p:{y:26.575}},{t:this.diastole_external},{t:this.diastole_internal},{t:this.Home,p:{x:26.55,y:448.5}},{t:this.Replay_diastole}]},1).to({state:[{t:this.shape_774,p:{y:26.575}},{t:this.diastole_external},{t:this.diastole_internal},{t:this.Home,p:{x:26.55,y:448.5}},{t:this.Replay_diastole}]},7).wait(1));

	// labels_heart
	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#EA8C9C").s().p("AgdAgIAIgRQALAHAKAAQAIAAAAgEQAAgDgFgDIgMgGQgSgIAAgPQAAgKAIgHQAIgHAMAAQAPAAANAJIgJASQgKgHgJAAQgHAAAAAEQAAADAGADIAMAFQASAHAAAQQAAAMgIAGQgIAHgNAAQgRAAgNgKg");
	this.shape_775.setTransform(791.425,251.175);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#EA8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_776.setTransform(783.875,251.2);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#EA8C9C").s().p("AgJAoIAAhQIATAAIAABQg");
	this.shape_777.setTransform(778,251.2);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAALIAkAAIAAATg");
	this.shape_778.setTransform(772.625,251.2);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_779.setTransform(764.975,251.2);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#EA8C9C").s().p("AgKAoIAAghIgWgvIAWAAIAKAYIALgYIAWAAIgWAvIAAAhg");
	this.shape_780.setTransform(754.625,251.2);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgDIgJgBIgKAAg");
	this.shape_781.setTransform(747.125,251.2);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_782.setTransform(738.875,251.2);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#EA8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_783.setTransform(730.775,251.2);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#EA8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_784.setTransform(722.175,251.175);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#EA8C9C").s().p("AAVAoIAAgoIgSAdIgFAAIgSgdIAAAoIgVAAIAAhQIAVAAIAUAjIAVgjIAVAAIAABQg");
	this.shape_785.setTransform(712.675,251.2);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#EA8C9C").s().p("AgVAoIAAhQIAUAAIAAA8IAYAAIAAAUg");
	this.shape_786.setTransform(705.3,251.2);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#EA8C9C").s().p("AgcAaQgEgHAAgSIAAgpIAVAAIAAAsQAAAIABADQADAFAHAAQAIAAADgFIABgLIAAgsIAVAAIAAApQAAASgEAHQgHAPgWAAQgVAAgHgPg");
	this.shape_787.setTransform(698.275,251.25);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#EA8C9C").s().p("AgfAoIAAhQIAWAAQARABAJADQAPAHAAATQAAATgPAHQgJADgRABIgBAAIAAAUgAgKAAIAHAAIAIgBQAFgBAAgIQAAgGgFgDIgIgBIgHAAg");
	this.shape_788.setTransform(690.925,251.2);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_789.setTransform(442.225,456.45);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_790.setTransform(434.125,456.45);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_791.setTransform(426.025,456.45);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRAMgMQALgNAQAAQANAAAKAGIgMASQgEgDgGAAQgIAAgFAHQgFAGAAAIQAAAJAFAFQAFAGAIAAQAHAAAFgEIALASQgLAHgNAAQgQAAgMgMg");
	this.shape_792.setTransform(418.65,456.425);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_793.setTransform(408.025,456.45);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#EA8C9C").s().p("AAMApIgXgpIAAApIgVAAIAAhQIAVAAIAXAnIAAgnIAVAAIAABQg");
	this.shape_794.setTransform(399.925,456.45);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAAUIgkAAIAAAKIAbAAIAAASIgbAAIAAALIAkAAIAAAVg");
	this.shape_795.setTransform(392.275,456.45);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_796.setTransform(384.625,456.45);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAAUQAAASgQAGIATAbgAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgCIgJgBIgKAAg");
	this.shape_797.setTransform(373.975,456.45);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#EA8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_798.setTransform(365.225,456.425);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#EA8C9C").s().p("AgKApIAAhQIAUAAIAABQg");
	this.shape_799.setTransform(358.9,456.45);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAAUQAAASgQAGIATAbgAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgCIgJgBIgKAAg");
	this.shape_800.setTransform(353.225,456.45);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAAUIgkAAIAAAKIAbAAIAAASIgbAAIAAALIAkAAIAAAVg");
	this.shape_801.setTransform(345.425,456.45);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAAUIgkAAIAAAPIAbAAIAAAUIgbAAIAAAZg");
	this.shape_802.setTransform(338.225,456.45);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#EA8C9C").s().p("AAMApIgXgpIAAApIgVAAIAAhQIAVAAIAXAnIAAgnIAVAAIAABQg");
	this.shape_803.setTransform(330.575,456.45);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#EA8C9C").s().p("AgKApIAAhQIAUAAIAABQg");
	this.shape_804.setTransform(324.7,456.45);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_805.setTransform(443.025,171.75);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_806.setTransform(434.925,171.75);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_807.setTransform(426.825,171.75);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRAMgMQALgNAQAAQANAAAJAGIgLASQgEgDgGAAQgJAAgEAHQgFAGAAAIQAAAJAFAFQAEAGAJAAQAGAAAGgEIALASQgLAHgNAAQgQAAgMgMg");
	this.shape_808.setTransform(419.45,171.725);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_809.setTransform(408.825,171.75);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#EA8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_810.setTransform(400.725,171.75);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_811.setTransform(393.075,171.75);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_812.setTransform(385.425,171.75);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAHAAATQAAARgQAHIATAagAgNAAIAKAAQAGAAADgBQAEgDAAgGQAAgGgEgCIgJgBIgKAAg");
	this.shape_813.setTransform(374.775,171.75);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#EA8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_814.setTransform(366.025,171.725);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#EA8C9C").s().p("AgKAoIAAhQIAUAAIAABQg");
	this.shape_815.setTransform(359.7,171.75);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAHAAATQAAARgQAHIATAagAgNAAIAKAAQAGAAADgBQAEgDAAgGQAAgGgEgCIgJgBIgKAAg");
	this.shape_816.setTransform(354.025,171.75);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_817.setTransform(346.225,171.75);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#EA8C9C").s().p("AgfAoIAAhQIAWAAQARAAAJAEQAPAHAAAUQAAASgPAHQgJADgRAAIgBAAIAAAVgAgKAAIAHAAIAIAAQAFgCAAgHQAAgIgFgBIgIgBIgHAAg");
	this.shape_818.setTransform(339.325,171.75);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#EA8C9C").s().p("AgcAaQgEgHAAgRIAAgqIAVAAIAAAsQAAAHABADQADAGAHAAQAIAAADgGIABgKIAAgsIAVAAIAAAqQAAARgEAHQgHAPgWAAQgVAAgHgPg");
	this.shape_819.setTransform(331.375,171.8);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#EA8C9C").s().p("AgdAgIAIgRQALAHAKAAQAIAAAAgEQAAgDgFgDIgMgGQgSgIAAgPQAAgKAIgHQAIgHAMAAQAPAAANAJIgJASQgKgHgJAAQgHAAAAAEQAAADAGADIAMAFQASAHAAAQQAAAMgIAGQgIAHgNAAQgRAAgNgKg");
	this.shape_820.setTransform(323.625,171.725);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_821.setTransform(727.225,162.15);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#EA8C9C").s().p("AgKApIAAg8IgSAAIAAgUIA5AAIAAAUIgSAAIAAA8g");
	this.shape_822.setTransform(719.575,162.15);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAAUQAAASgQAGIATAbgAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgDIgJAAIgKAAg");
	this.shape_823.setTransform(712.075,162.15);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#EA8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_824.setTransform(703.325,162.125);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_825.setTransform(694.775,162.15);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#0D110E").ss(2).p("AjfAAIG+AA");
	this.shape_826.setTransform(471.45,181.7);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#0D110E").ss(2,1).p("AOopYIDpAAAsIW1ImtAAAS220IrbAA");
	this.shape_827.setTransform(568.1,314.35);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#EB8C9C").s().p("AgdAgIAIgRQALAHAKAAQAIAAAAgEQAAgDgFgDIgMgGQgSgIAAgPQAAgKAIgHQAIgHAMAAQAPAAANAJIgJASQgKgHgJAAQgHAAAAAEQAAADAGADIAMAFQASAHAAAQQAAAMgIAGQgIAHgNAAQgRAAgNgKg");
	this.shape_828.setTransform(793.625,247.925);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#EB8C9C").s().p("AAMApIgXgoIAAAoIgVAAIAAhRIAVAAIAXAoIAAgoIAVAAIAABRg");
	this.shape_829.setTransform(786.075,247.95);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#EB8C9C").s().p("AgKApIAAhRIAVAAIAABRg");
	this.shape_830.setTransform(780.2,247.95);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#EB8C9C").s().p("AgcApIAAhRIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAALIAkAAIAAAUg");
	this.shape_831.setTransform(774.825,247.95);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#EB8C9C").s().p("AgMApIgYhRIAWAAIAOA4IAPg4IAWAAIgXBRg");
	this.shape_832.setTransform(767.175,247.95);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#EB8C9C").s().p("AgKApIAAgiIgWgvIAWAAIAKAYIALgYIAWAAIgWAvIAAAig");
	this.shape_833.setTransform(756.825,247.95);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#EB8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhRIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_834.setTransform(749.325,247.95);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#EB8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhRIAaAAIAXBRgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_835.setTransform(741.075,247.95);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#EB8C9C").s().p("AAMApIgXgoIAAAoIgVAAIAAhRIAVAAIAXAoIAAgoIAVAAIAABRg");
	this.shape_836.setTransform(732.975,247.95);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#EB8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_837.setTransform(724.375,247.925);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#EB8C9C").s().p("AAVApIAAgpIgSAdIgFAAIgSgdIAAApIgVAAIAAhRIAVAAIAUAjIAVgjIAVAAIAABRg");
	this.shape_838.setTransform(714.875,247.95);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#EB8C9C").s().p("AgWApIAAhRIAVAAIAAA8IAXAAIAAAVg");
	this.shape_839.setTransform(707.5,247.95);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#EB8C9C").s().p("AgcAaQgEgIAAgRIAAgpIAVAAIAAArQAAAIABAEQADAFAHAAQAIAAADgFIABgMIAAgrIAVAAIAAApQAAARgEAIQgHAPgWAAQgVAAgHgPg");
	this.shape_840.setTransform(700.475,248);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#EB8C9C").s().p("AgfApIAAhRIAWAAQARABAJADQAPAHAAATQAAATgPAHQgJAEgRAAIgBAAIAAAVgAgKAAIAHAAIAIgBQAFgBAAgIQAAgHgFgCIgIgBIgHAAg");
	this.shape_841.setTransform(693.125,247.95);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#EB8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_842.setTransform(425.075,470);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#EB8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_843.setTransform(416.975,470);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#EB8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_844.setTransform(408.875,470);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#EB8C9C").s().p("AgUAeQgLgLAAgSQAAgRALgMQAMgNARAAQAMAAAJAGIgKASQgFgDgFAAQgKAAgEAHQgGAGAAAIQAAAJAGAFQAEAGAJAAQAHAAAFgEIALASQgKAHgNAAQgSAAgLgMg");
	this.shape_845.setTransform(401.5,469.975);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#EB8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_846.setTransform(390.875,470);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#EB8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_847.setTransform(382.775,470);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#EB8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_848.setTransform(375.125,470);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#EB8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_849.setTransform(367.475,470);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#EB8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAHAAASQAAASgQAHIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgCQgDgCgGAAIgKAAg");
	this.shape_850.setTransform(356.825,470);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#EB8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_851.setTransform(348.075,469.975);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#EB8C9C").s().p("AgJAoIAAhQIAUAAIAABQg");
	this.shape_852.setTransform(341.75,470);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#EB8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAHAAASQAAASgQAHIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgCQgDgCgGAAIgKAAg");
	this.shape_853.setTransform(336.075,470);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#EB8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_854.setTransform(328.275,470);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#EB8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAAQIAbAAIAAATIgbAAIAAAZg");
	this.shape_855.setTransform(321.075,470);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#EB8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_856.setTransform(313.425,470);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#EB8C9C").s().p("AgJAoIAAhQIAUAAIAABQg");
	this.shape_857.setTransform(307.55,470);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRALgMQAMgNAQAAQANAAAKAGIgLASQgFgDgFAAQgJAAgFAHQgGAGAAAIQAAAJAGAFQAEAGAJAAQAGAAAGgEIALASQgLAHgNAAQgRAAgLgMg");
	this.shape_858.setTransform(369,162.175);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAHAAASQAAASgQAHIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgCQgDgCgGAAIgKAAg");
	this.shape_859.setTransform(324.325,162.2);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#EA8C9C").s().p("AgKAoIAAhQIAVAAIAABQg");
	this.shape_860.setTransform(309.25,162.2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAHAAASQAAASgQAHIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgCQgDgCgGAAIgKAAg");
	this.shape_861.setTransform(303.575,162.2);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAALIAkAAIAAATg");
	this.shape_862.setTransform(295.775,162.2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#EA8C9C").s().p("AgfAoIAAhQIAWAAQARABAJADQAPAHAAAUQAAASgPAHQgJADgRABIgBAAIAAAUgAgKAAIAHAAIAIAAQAFgDAAgGQAAgIgFgBIgIgCIgHAAg");
	this.shape_863.setTransform(288.875,162.2);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#EA8C9C").s().p("AgcAaQgEgHAAgSIAAgpIAVAAIAAAsQAAAHABAEQADAFAHAAQAIAAADgFIABgLIAAgsIAVAAIAAApQAAASgEAHQgHAPgWAAQgVAAgHgPg");
	this.shape_864.setTransform(280.925,162.25);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#EB8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_865.setTransform(681.225,130.6);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#EB8C9C").s().p("AgKAoIAAg8IgSAAIAAgUIA5AAIAAAUIgSAAIAAA8g");
	this.shape_866.setTransform(673.575,130.6);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#EB8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgDIgJgBIgKAAg");
	this.shape_867.setTransform(666.075,130.6);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#EB8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_868.setTransform(657.325,130.575);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#EB8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_869.setTransform(648.775,130.6);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#0D110E").ss(2,1).p("AWloMIivAAAJY6iIGDAAAt21lIouAAApYajIoFAA");
	this.shape_870.setTransform(543.275,303.975);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#EB8C9C").s().p("AgKAoIAAhQIAVAAIAABQg");
	this.shape_871.setTransform(781.2,294.75);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#EB8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAALIAkAAIAAATg");
	this.shape_872.setTransform(775.825,294.75);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#EB8C9C").s().p("AgKAoIAAghIgWgvIAWAAIAKAYIALgYIAWAAIgWAvIAAAhg");
	this.shape_873.setTransform(757.825,294.75);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#EB8C9C").s().p("AAKAoIgOgXIgGAAIgDAAIAAAXIgVAAIAAhQIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_874.setTransform(750.325,294.75);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#EB8C9C").s().p("AAVAoIAAgoIgSAdIgFAAIgSgdIAAAoIgVAAIAAhQIAVAAIAUAjIAVgjIAVAAIAABQg");
	this.shape_875.setTransform(715.875,294.75);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#EB8C9C").s().p("AgWAoIAAhQIAWAAIAAA8IAWAAIAAAUg");
	this.shape_876.setTransform(708.5,294.75);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#EB8C9C").s().p("AgfAoIAAhQIAWAAQARABAJADQAPAHAAATQAAATgPAHQgJAEgRAAIgBAAIAAAUgAgKAAIAHAAIAIgBQAFgBAAgIQAAgHgFgCIgIgBIgHAAg");
	this.shape_877.setTransform(694.125,294.75);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#EB8C9C").s().p("AgUAeQgLgLAAgSQAAgRALgMQAMgNARAAQAMAAAKAGIgLASQgFgDgFAAQgKAAgEAHQgGAGAAAIQAAAJAGAFQAEAGAJAAQAHAAAFgEIALASQgKAHgNAAQgSAAgLgMg");
	this.shape_878.setTransform(401.05,507.875);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#EB8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_879.setTransform(382.325,507.9);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#EB8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_880.setTransform(374.675,507.9);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#EB8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_881.setTransform(367.025,507.9);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#EB8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAHAAATQAAARgQAHIATAagAgNAAIAKAAQAGAAADgBQAEgDAAgGQAAgGgEgCIgJgBIgKAAg");
	this.shape_882.setTransform(356.375,507.9);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#EB8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAHAAATQAAARgQAHIATAagAgNAAIAKAAQAGAAADgBQAEgDAAgGQAAgGgEgCIgJgBIgKAAg");
	this.shape_883.setTransform(335.625,507.9);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#EB8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_884.setTransform(327.825,507.9);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#EB8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAPIAbAAIAAAUIgbAAIAAAYg");
	this.shape_885.setTransform(320.625,507.9);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#EB8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_886.setTransform(312.975,507.9);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#EB8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_887.setTransform(392.775,156.75);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#EB8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_888.setTransform(384.675,156.75);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#EB8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_889.setTransform(376.575,156.75);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#EB8C9C").s().p("AgUAeQgLgLAAgSQAAgRALgMQAMgNARAAQAMAAAJAGIgKASQgFgDgFAAQgKAAgEAHQgGAGABAIQgBAJAGAFQAFAGAIAAQAHAAAFgEIALASQgKAHgNAAQgSAAgLgMg");
	this.shape_890.setTransform(369.2,156.725);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#EB8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_891.setTransform(358.575,156.75);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#EB8C9C").s().p("AAMApIgXgpIAAApIgVAAIAAhQIAVAAIAXAnIAAgnIAVAAIAABQg");
	this.shape_892.setTransform(350.475,156.75);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#EB8C9C").s().p("AgcApIAAhQIA5AAIAAAUIgkAAIAAAKIAbAAIAAASIgbAAIAAALIAkAAIAAAVg");
	this.shape_893.setTransform(342.825,156.75);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#EB8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_894.setTransform(335.175,156.75);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#EB8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAAUQAAASgQAGIATAbgAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgCIgJgBIgKAAg");
	this.shape_895.setTransform(324.525,156.75);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#EB8C9C").s().p("AgJApIAAhQIAUAAIAABQg");
	this.shape_896.setTransform(309.45,156.75);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#EB8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAAUQAAASgQAGIATAbgAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgCIgJgBIgKAAg");
	this.shape_897.setTransform(303.775,156.75);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#EB8C9C").s().p("AgcApIAAhQIA5AAIAAAUIgkAAIAAAKIAbAAIAAASIgbAAIAAALIAkAAIAAAVg");
	this.shape_898.setTransform(295.975,156.75);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#EB8C9C").s().p("AgfApIAAhQIAWAAQARgBAJAEQAPAHAAATQAAATgPAHQgJAEgRgBIgBAAIAAAWgAgKAAIAHAAIAIgBQAFgBAAgIQAAgHgFgBIgIgBIgHAAg");
	this.shape_899.setTransform(289.075,156.75);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#EB8C9C").s().p("AgcAbQgEgJAAgQIAAgqIAVAAIAAArQAAAJABACQADAGAHAAQAIAAADgGIABgLIAAgrIAVAAIAAAqQAAAQgEAJQgHAOgWAAQgVAAgHgOg");
	this.shape_900.setTransform(281.125,156.8);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#EB8C9C").s().p("AgdAgIAIgRQALAHAKAAQAIAAAAgEQAAgDgFgDIgMgGQgSgIAAgPQAAgKAIgHQAIgHAMAAQAPAAANAJIgJASQgKgHgJAAQgHAAAAAEQAAADAGADIAMAFQASAHAAAQQAAAMgIAGQgIAHgNAAQgRAAgNgKg");
	this.shape_901.setTransform(273.375,156.725);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#EB8C9C").s().p("AgKApIAAg9IgSAAIAAgUIA5AAIAAAUIgSAAIAAA9g");
	this.shape_902.setTransform(677.675,162);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#EB8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_903.setTransform(661.425,161.975);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#EB8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhRIAaAAIAXBRgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_904.setTransform(652.875,162);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("#0D110E").ss(2,1).p("AUEl3IChAAALK6cIE9AAAqU7bIsRAAArgbcImNAA");
	this.shape_905.setTransform(544.1,335.55);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#EA8C9C").s().p("AgcApIAAhRIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAALIAkAAIAAAUg");
	this.shape_906.setTransform(741.275,342.45);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#EA8C9C").s().p("AgMApIgYhRIAWAAIAOA4IAPg4IAWAAIgXBRg");
	this.shape_907.setTransform(733.625,342.45);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#EA8C9C").s().p("AgWApIAAhRIAWAAIAAA8IAWAAIAAAVg");
	this.shape_908.setTransform(727.15,342.45);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhRIAaAAIAXBRgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_909.setTransform(720.125,342.45);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#EA8C9C").s().p("AgMApIgYhRIAWAAIAOA4IAPg4IAWAAIgXBRg");
	this.shape_910.setTransform(712.025,342.45);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#EA8C9C").s().p("AgMApIgYhRIAWAAIAOA4IAPg4IAWAAIgXBRg");
	this.shape_911.setTransform(701.225,342.45);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhRIAaAAIAXBRgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_912.setTransform(693.125,342.45);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_913.setTransform(420.975,513.35);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_914.setTransform(404.775,513.35);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRAMgMQALgNARAAQAMAAAJAGIgLASQgEgDgGAAQgJAAgEAHQgFAGAAAIQAAAJAFAFQAEAGAJAAQAGAAAGgEIALASQgLAHgMAAQgRAAgMgMg");
	this.shape_915.setTransform(397.4,513.325);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_916.setTransform(386.775,513.35);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAALIAbAAIAAASIgbAAIAAAMIAkAAIAAAUg");
	this.shape_917.setTransform(371.025,513.35);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_918.setTransform(352.725,513.35);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#EA8C9C").s().p("AgJApIAAhQIATAAIAABQg");
	this.shape_919.setTransform(337.65,513.35);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_920.setTransform(331.975,513.35);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAALIAbAAIAAASIgbAAIAAAMIAkAAIAAAUg");
	this.shape_921.setTransform(324.175,513.35);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAAQIAbAAIAAATIgbAAIAAAag");
	this.shape_922.setTransform(316.975,513.35);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_923.setTransform(390.075,159.2);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_924.setTransform(381.975,159.2);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_925.setTransform(373.875,159.2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRALgMQAMgNARAAQAMAAAJAGIgKASQgFgDgFAAQgKAAgEAHQgGAGABAIQgBAJAGAFQAFAGAIAAQAHAAAFgEIALASQgKAHgNAAQgSAAgLgMg");
	this.shape_926.setTransform(366.5,159.175);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_927.setTransform(355.875,159.2);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#EA8C9C").s().p("AAMApIgXgpIAAApIgVAAIAAhQIAVAAIAXAnIAAgnIAVAAIAABQg");
	this.shape_928.setTransform(347.775,159.2);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAALIAbAAIAAASIgbAAIAAAMIAkAAIAAAUg");
	this.shape_929.setTransform(340.125,159.2);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_930.setTransform(332.475,159.2);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASAAAIADQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_931.setTransform(321.825,159.2);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#EA8C9C").s().p("AgJApIAAhQIATAAIAABQg");
	this.shape_932.setTransform(306.75,159.2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASAAAIADQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_933.setTransform(301.075,159.2);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAALIAbAAIAAASIgbAAIAAAMIAkAAIAAAUg");
	this.shape_934.setTransform(293.275,159.2);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#EA8C9C").s().p("AgfApIAAhQIAWAAQARAAAJADQAPAHAAATQAAATgPAHQgJAEgRAAIgBAAIAAAVgAgKAAIAHAAIAIgBQAFgBAAgIQAAgGgFgDIgIgBIgHAAg");
	this.shape_935.setTransform(286.375,159.2);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#EA8C9C").s().p("AgcAbQgEgJAAgRIAAgpIAVAAIAAArQAAAIABAEQADAFAHAAQAIAAADgFIABgMIAAgrIAVAAIAAApQAAARgEAJQgHAOgWAAQgVAAgHgOg");
	this.shape_936.setTransform(278.425,159.25);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#EA8C9C").s().p("AgQAxQAMgYAAgZQAAgYgMgYIASgIQAPAYAAAgQAAAggPAZg");
	this.shape_937.setTransform(740.9,208.375);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAALIAbAAIAAASIgbAAIAAAMIAkAAIAAAUg");
	this.shape_938.setTransform(735.175,208.25);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_939.setTransform(727.525,208.25);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#EA8C9C").s().p("AgVApIAAhQIAUAAIAAA7IAYAAIAAAVg");
	this.shape_940.setTransform(721.05,208.25);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_941.setTransform(714.025,208.25);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_942.setTransform(705.925,208.25);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#EA8C9C").s().p("AgQAAQAAggAPgYIASAIQgNAYAAAYQAAAZANAYIgSAIQgPgZAAggg");
	this.shape_943.setTransform(689.85,208.375);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAALIAbAAIAAASIgbAAIAAAMIAkAAIAAAUg");
	this.shape_944.setTransform(789.225,194.65);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_945.setTransform(781.575,194.65);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#EA8C9C").s().p("AgWApIAAhQIAWAAIAAA7IAWAAIAAAVg");
	this.shape_946.setTransform(775.1,194.65);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_947.setTransform(759.975,194.65);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAHAAATQAAARgQAHIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_948.setTransform(749.325,194.65);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#EA8C9C").s().p("AAMApIgXgpIAAApIgVAAIAAhQIAVAAIAXAnIAAgnIAVAAIAABQg");
	this.shape_949.setTransform(732.975,194.65);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#EA8C9C").s().p("AgcAbQgEgJAAgRIAAgpIAVAAIAAArQAAAJABACQADAGAHAAQAIAAADgGIABgLIAAgrIAVAAIAAApQAAARgEAJQgHAOgWAAQgVAAgHgOg");
	this.shape_950.setTransform(724.875,194.7);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#EA8C9C").s().p("AgWApIAAhQIAWAAIAAA7IAWAAIAAAVg");
	this.shape_951.setTransform(718.4,194.65);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#EA8C9C").s().p("AgKApIAAhQIAVAAIAABQg");
	this.shape_952.setTransform(713.6,194.65);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#EA8C9C").s().p("AAVApIAAgpIgSAcIgFAAIgSgcIAAApIgVAAIAAhQIAVAAIAUAiIAVgiIAVAAIAABQg");
	this.shape_953.setTransform(706.825,194.65);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAALIAbAAIAAASIgbAAIAAAMIAkAAIAAAUg");
	this.shape_954.setTransform(698.275,194.65);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#EA8C9C").s().p("AgdAgIAIgRQALAHAKAAQAIAAAAgEQAAgDgFgDIgMgGQgSgIAAgPQAAgKAIgHQAIgHAMAAQAPAAANAJIgJASQgKgHgJAAQgHAAAAAEQAAADAGADIAMAFQASAHAAAQQAAAMgIAGQgIAHgNAAQgRAAgNgKg");
	this.shape_955.setTransform(690.975,194.625);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#EA8C9C").s().p("AgQAxQAMgYAAgZQAAgYgMgYIARgIQAQAYAAAgQAAAggQAZg");
	this.shape_956.setTransform(375.9,402.525);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#EA8C9C").s().p("AgWAoIAAhQIAVAAIAAA8IAXAAIAAAUg");
	this.shape_957.setTransform(356.05,402.4);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#EA8C9C").s().p("AgQAAQAAggAQgYIARAIQgNAYAAAYQAAAZANAYIgRAIQgQgZAAggg");
	this.shape_958.setTransform(315.85,402.525);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_959.setTransform(299.525,402.4);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#EA8C9C").s().p("AgWAoIAAhQIAVAAIAAA8IAXAAIAAAUg");
	this.shape_960.setTransform(293.05,402.4);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_961.setTransform(277.925,402.4);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhRIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_962.setTransform(393.325,388.8);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhRIAaAAIAXBRgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_963.setTransform(385.075,388.8);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#EA8C9C").s().p("AgVApIAAhRIAUAAIAAA8IAYAAIAAAVg");
	this.shape_964.setTransform(378.6,388.8);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#EA8C9C").s().p("AgcAaQgEgIAAgRIAAgpIAVAAIAAArQAAAIABAEQADAFAHAAQAIAAADgFIABgMIAAgrIAVAAIAAApQAAARgEAIQgHAPgWAAQgVAAgHgPg");
	this.shape_965.setTransform(371.575,388.85);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRAMgMQALgNAQAAQANAAAKAGIgMASQgEgDgGAAQgIAAgFAHQgFAGgBAIQABAJAFAFQAFAGAIAAQAHAAAFgEIALASQgLAHgNAAQgQAAgMgMg");
	this.shape_966.setTransform(364.2,388.775);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#EA8C9C").s().p("AgJApIAAhRIATAAIAABRg");
	this.shape_967.setTransform(358.5,388.8);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhRIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_968.setTransform(352.825,388.8);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#EA8C9C").s().p("AgKApIAAg9IgSAAIAAgUIA5AAIAAAUIgSAAIAAA9g");
	this.shape_969.setTransform(345.025,388.8);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#EA8C9C").s().p("AAMApIgXgoIAAAoIgVAAIAAhRIAVAAIAXAoIAAgoIAVAAIAABRg");
	this.shape_970.setTransform(337.375,388.8);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#EA8C9C").s().p("AgcApIAAhRIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAALIAkAAIAAAUg");
	this.shape_971.setTransform(329.725,388.8);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#EA8C9C").s().p("AgMApIgYhRIAWAAIAOA4IAPg4IAWAAIgXBRg");
	this.shape_972.setTransform(322.075,388.8);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#EA8C9C").s().p("AgKApIAAhRIAUAAIAABRg");
	this.shape_973.setTransform(307.15,388.8);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhRIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_974.setTransform(301.475,388.8);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#EA8C9C").s().p("AgKApIAAg9IgSAAIAAgUIA5AAIAAAUIgSAAIAAA9g");
	this.shape_975.setTransform(293.675,388.8);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#EA8C9C").s().p("AAMApIgXgoIAAAoIgVAAIAAhRIAVAAIAXAoIAAgoIAVAAIAABRg");
	this.shape_976.setTransform(286.025,388.8);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhRIAaAAIAXBRgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_977.setTransform(277.925,388.8);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#EA8C9C").s().p("AgJApIAAhQIAUAAIAABQg");
	this.shape_978.setTransform(749.9,325.15);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAHAAATQAAARgQAHIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJAAIgKAAg");
	this.shape_979.setTransform(744.225,325.15);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#EA8C9C").s().p("AgKApIAAg8IgSAAIAAgUIA5AAIAAAUIgSAAIAAA8g");
	this.shape_980.setTransform(718.425,325.15);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#EA8C9C").s().p("AAMApIAAggIgXAAIAAAgIgVAAIAAhQIAVAAIAAAdIAXAAIAAgdIAVAAIAABQg");
	this.shape_981.setTransform(710.775,325.15);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#EA8C9C").s().p("AgWAfQgLgLAAgTQAAgTALgLQAMgMARAAQAPAAAKAIIgLARQgGgEgIAAQgIAAgEAGQgGAFAAAKQAAAJAFAGQAFAFAHAAIAGgBIAAgKIgJAAIAAgSIAeAAIAAApQgJAJgSAAQgSAAgKgLg");
	this.shape_982.setTransform(702.65,325.125);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#EA8C9C").s().p("AgJApIAAhQIAUAAIAABQg");
	this.shape_983.setTransform(696.8,325.15);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAHAAATQAAARgQAHIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJAAIgKAAg");
	this.shape_984.setTransform(691.125,325.15);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_985.setTransform(362.425,328.85);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAATQAAATgQAGIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_986.setTransform(350.875,328.85);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#EA8C9C").s().p("AgKApIAAg9IgSAAIAAgTIA5AAIAAATIgSAAIAAA9g");
	this.shape_987.setTransform(343.075,328.85);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_988.setTransform(335.425,328.85);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#EA8C9C").s().p("AgKApIAAg9IgSAAIAAgTIA5AAIAAATIgSAAIAAA9g");
	this.shape_989.setTransform(325.075,328.85);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAAQIAbAAIAAATIgbAAIAAAag");
	this.shape_990.setTransform(317.875,328.85);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#EA8C9C").s().p("AgcApIAAhQIA5AAIAAATIgkAAIAAALIAbAAIAAASIgbAAIAAAMIAkAAIAAAUg");
	this.shape_991.setTransform(310.675,328.85);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#EA8C9C").s().p("AgWApIAAhQIAVAAIAAA7IAXAAIAAAVg");
	this.shape_992.setTransform(304.65,328.85);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAALIAkAAIAAATg");
	this.shape_993.setTransform(785.375,370.45);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#EA8C9C").s().p("AgWAoIAAhQIAWAAIAAA8IAWAAIAAAUg");
	this.shape_994.setTransform(779.35,370.45);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRAMgMQALgNARAAQAMAAAJAGIgLASQgEgDgFAAQgKAAgEAHQgGAGABAIQgBAJAGAFQAEAGAJAAQAGAAAGgEIALASQgLAHgMAAQgRAAgMgMg");
	this.shape_995.setTransform(773.05,370.425);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#EA8C9C").s().p("AgKAoIAAg8IgSAAIAAgUIA5AAIAAAUIgSAAIAAA8g");
	this.shape_996.setTransform(753.875,370.45);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAALIAkAAIAAATg");
	this.shape_997.setTransform(738.575,370.45);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_998.setTransform(730.925,370.45);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#EA8C9C").s().p("AgKAoIAAg8IgSAAIAAgUIA5AAIAAAUIgSAAIAAA8g");
	this.shape_999.setTransform(720.575,370.45);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#EA8C9C").s().p("AAMAoIAAgfIgXAAIAAAfIgVAAIAAhQIAVAAIAAAeIAXAAIAAgeIAVAAIAABQg");
	this.shape_1000.setTransform(712.925,370.45);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#EA8C9C").s().p("AgWAfQgKgLAAgTQgBgTALgLQALgMASAAQAPAAAKAIIgKARQgHgEgIAAQgIAAgEAGQgGAFAAAKQAAAJAFAGQAFAFAHAAIAGgBIAAgKIgJAAIAAgSIAeAAIAAApQgJAJgSAAQgSAAgKgLg");
	this.shape_1001.setTransform(704.8,370.425);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#EA8C9C").s().p("AgKAoIAAhQIAVAAIAABQg");
	this.shape_1002.setTransform(698.95,370.45);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgDIgJgBIgKAAg");
	this.shape_1003.setTransform(693.275,370.45);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#EA8C9C").s().p("AgWAoIAAhQIAWAAIAAA8IAWAAIAAAUg");
	this.shape_1004.setTransform(381.35,447.6);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRALgMQAMgNARAAQAMAAAJAGIgKASQgFgDgFAAQgKAAgEAHQgGAGABAIQgBAJAGAFQAFAGAIAAQAHAAAFgEIALASQgKAHgNAAQgSAAgLgMg");
	this.shape_1005.setTransform(375.05,447.575);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#EA8C9C").s().p("AgKAoIAAhQIAVAAIAABQg");
	this.shape_1006.setTransform(369.35,447.6);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#EA8C9C").s().p("AgKAoIAAg7IgSAAIAAgVIA5AAIAAAVIgSAAIAAA7g");
	this.shape_1007.setTransform(355.875,447.6);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1008.setTransform(332.925,447.6);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#EA8C9C").s().p("AgKAoIAAg7IgSAAIAAgVIA5AAIAAAVIgSAAIAAA7g");
	this.shape_1009.setTransform(322.575,447.6);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAPIAbAAIAAAUIgbAAIAAAYg");
	this.shape_1010.setTransform(315.375,447.6);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_1011.setTransform(308.175,447.6);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#EA8C9C").s().p("AgWAoIAAhQIAWAAIAAA8IAWAAIAAAUg");
	this.shape_1012.setTransform(302.15,447.6);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#EA8C9C").s().p("AgdAgIAIgRQALAHAKAAQAIAAAAgEQAAgDgFgDIgMgGQgSgIAAgPQAAgKAIgHQAIgHAMAAQAPAAANAJIgJASQgKgHgJAAQgHAAAAAEQAAADAGADIAMAFQASAHAAAQQAAAMgIAGQgIAHgNAAQgRAAgNgKg");
	this.shape_1013.setTransform(789.675,305.025);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#EA8C9C").s().p("AgKAoIAAhQIAVAAIAABQg");
	this.shape_1014.setTransform(776.25,305.05);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAASIgbAAIAAALIAkAAIAAAUg");
	this.shape_1015.setTransform(770.875,305.05);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1016.setTransform(763.225,305.05);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#EA8C9C").s().p("AgKAoIAAggIgWgwIAWAAIAKAYIALgYIAWAAIgWAwIAAAgg");
	this.shape_1017.setTransform(752.875,305.05);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAGAAAUQAAASgQAGIATAagAgNAAIAKAAQAGAAADgBQAEgDAAgGQAAgGgEgCIgJgBIgKAAg");
	this.shape_1018.setTransform(745.375,305.05);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_1019.setTransform(737.125,305.05);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#EA8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_1020.setTransform(729.025,305.05);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#EA8C9C").s().p("AAVAoIAAgoIgSAcIgFAAIgSgcIAAAoIgVAAIAAhQIAVAAIAUAjIAVgjIAVAAIAABQg");
	this.shape_1021.setTransform(710.925,305.05);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#EA8C9C").s().p("AgWAoIAAhQIAWAAIAAA8IAWAAIAAAUg");
	this.shape_1022.setTransform(703.55,305.05);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#EA8C9C").s().p("AgfAoIAAhQIAWAAQARAAAJAEQAPAHAAAUQAAASgPAHQgJADgRAAIgBAAIAAAVgAgKAAIAHAAIAIAAQAFgDAAgGQAAgIgFgBIgIgBIgHAAg");
	this.shape_1023.setTransform(689.175,305.05);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#EA8C9C").s().p("AgKAoIAAg8IgSAAIAAgUIA5AAIAAAUIgSAAIAAA8g");
	this.shape_1024.setTransform(695.225,164.9);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#EA8C9C").s().p("AgbAfQgKgLAAgTQAAgSAKgMQALgMARAAQARAAAKAMQAKALAAASQAAATgKALQgLAMgRAAQgRAAgKgLgAgLgOQgFAGAAAJQAAAJAFAGQAEAFAHAAQAIAAAEgFQAFgGAAgKQAAgJgFgFQgEgGgIAAQgGAAgFAGg");
	this.shape_1025.setTransform(678.975,164.875);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1026.setTransform(670.425,164.9);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#0D110E").ss(2,1).p("AVek+ICiAAAqh7mIqaAAAsdhMIrAAAIhMgEAumICIl5AAAqXbnIlgAAAoSRVIs8AAAHSBoIRS3iARKBDIHgAAASMFSIGeAAAPRhtII1AAAH262INaAA");
	this.shape_1027.setTransform(529.225,339.475);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_1028.setTransform(738.325,228.8);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#EA8C9C").s().p("AgQAAQAAggAPgYIASAIQgMAYAAAYQAAAZAMAYIgSAIQgPgZAAggg");
	this.shape_1029.setTransform(693,228.925);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#EA8C9C").s().p("AgVAoIAAhQIAVAAIAAA8IAXAAIAAAUg");
	this.shape_1030.setTransform(780.9,387.4);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#EA8C9C").s().p("AgJAoIAAhQIAUAAIAABQg");
	this.shape_1031.setTransform(768.9,387.4);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAGAAAUQAAASgQAGIATAagAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgCIgJgBIgKAAg");
	this.shape_1032.setTransform(763.225,387.4);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#EA8C9C").s().p("AAMAoIgXgoIAAAoIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_1033.setTransform(747.775,387.4);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#EA8C9C").s().p("AgWAfQgLgLAAgTQAAgTALgLQAMgMARAAQAPAAAKAIIgLARQgGgEgIAAQgIAAgFAGQgFAFAAAKQAAAJAFAGQAFAFAIAAIAFgBIAAgKIgJAAIAAgSIAfAAIAAApQgLAJgRAAQgRAAgLgLg");
	this.shape_1034.setTransform(706.35,387.375);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAGAAAUQAAASgQAGIATAagAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgCIgJgBIgKAAg");
	this.shape_1035.setTransform(694.825,387.4);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#EA8C9C").s().p("AgVApIAAhQIAUAAIAAA7IAYAAIAAAVg");
	this.shape_1036.setTransform(387.25,426.5);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRALgMQAMgNAQAAQANAAAKAGIgMASQgEgDgGAAQgIAAgFAHQgFAGgBAIQABAJAFAFQAFAGAIAAQAGAAAGgEIALASQgKAHgOAAQgQAAgMgMg");
	this.shape_1037.setTransform(380.95,426.475);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#EA8C9C").s().p("AgVApIAAhQIAUAAIAAA7IAYAAIAAAVg");
	this.shape_1038.setTransform(308.05,426.5);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#EA8C9C").s().p("AgKApIAAhRIAVAAIAABRg");
	this.shape_1039.setTransform(778.95,260.55);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#EA8C9C").s().p("AgKApIAAgiIgWgvIAWAAIAKAYIALgYIAWAAIgWAvIAAAig");
	this.shape_1040.setTransform(755.575,260.55);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#EA8C9C").s().p("AAVApIAAgpIgSAdIgFAAIgSgdIAAApIgVAAIAAhRIAVAAIAUAjIAVgjIAVAAIAABRg");
	this.shape_1041.setTransform(713.625,260.55);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#EA8C9C").s().p("AgfApIAAhRIAWAAQARABAJADQAPAHAAATQAAATgPAHQgJAEgRAAIgBAAIAAAVgAgKAAIAHAAIAIgBQAFgBAAgIQAAgHgFgCIgIgBIgHAAg");
	this.shape_1042.setTransform(691.875,260.55);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#EA8C9C").s().p("AgKApIAAg9IgSAAIAAgTIA5AAIAAATIgSAAIAAA9g");
	this.shape_1043.setTransform(696.125,151.9);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#EA8C9C").s().p("AgQAxQAMgYAAgZQAAgYgMgYIASgIQAPAYAAAgQAAAggPAZg");
	this.shape_1044.setTransform(406.25,385.275);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_1045.setTransform(352.375,385.15);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#EA8C9C").s().p("AgQAAQAAggAPgYIASAIQgMAYAAAYQAAAZAMAYIgSAIQgPgZAAggg");
	this.shape_1046.setTransform(346.2,385.275);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_1047.setTransform(337.525,385.15);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1048.setTransform(329.875,385.15);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_1049.setTransform(316.375,385.15);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1050.setTransform(308.275,385.15);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#EA8C9C").s().p("AgVAoIAAhQIAUAAIAAA8IAYAAIAAAUg");
	this.shape_1051.setTransform(400.85,371.55);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRALgMQAMgNAQAAQANAAAKAGIgLASQgFgDgGAAQgIAAgFAHQgFAGgBAIQABAJAFAFQAFAGAIAAQAGAAAGgEIALASQgKAHgOAAQgRAAgLgMg");
	this.shape_1052.setTransform(386.45,371.525);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#EA8C9C").s().p("AgJAoIAAhQIATAAIAABQg");
	this.shape_1053.setTransform(380.75,371.55);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#EA8C9C").s().p("AgKAoIAAg7IgSAAIAAgVIA5AAIAAAVIgSAAIAAA7g");
	this.shape_1054.setTransform(375.375,371.55);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_1055.setTransform(360.075,371.55);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1056.setTransform(352.425,371.55);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#EA8C9C").s().p("AgKAoIAAg7IgSAAIAAgVIA5AAIAAAVIgSAAIAAA7g");
	this.shape_1057.setTransform(324.025,371.55);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1058.setTransform(424.375,463.6);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1059.setTransform(416.275,463.6);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1060.setTransform(408.175,463.6);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRAMgMQALgNARAAQAMAAAJAGIgLASQgEgDgFAAQgKAAgEAHQgGAGABAIQgBAJAGAFQAFAGAIAAQAGAAAGgEIALASQgKAHgNAAQgSAAgLgMg");
	this.shape_1061.setTransform(400.8,463.575);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1062.setTransform(390.175,463.6);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1063.setTransform(366.775,463.6);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#EA8C9C").s().p("AgJAoIAAhQIATAAIAABQg");
	this.shape_1064.setTransform(341.05,463.6);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgDIgJgBIgKAAg");
	this.shape_1065.setTransform(335.375,463.6);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAAQIAbAAIAAATIgbAAIAAAZg");
	this.shape_1066.setTransform(320.375,463.6);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#EA8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_1067.setTransform(312.725,463.6);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#EA8C9C").s().p("AgJAoIAAhQIATAAIAABQg");
	this.shape_1068.setTransform(306.85,463.6);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1069.setTransform(410.625,174.45);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1070.setTransform(402.525,174.45);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1071.setTransform(394.425,174.45);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1072.setTransform(376.425,174.45);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#EA8C9C").s().p("AAMAoIgXgnIAAAnIgVAAIAAhQIAVAAIAXAoIAAgoIAVAAIAABQg");
	this.shape_1073.setTransform(368.325,174.45);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_1074.setTransform(360.675,174.45);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#EA8C9C").s().p("AgMAoIgYhQIAWAAIAOA4IAPg4IAWAAIgXBQg");
	this.shape_1075.setTransform(353.025,174.45);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAHAAATQAAARgQAHIATAagAgNAAIAKAAQAGAAADgBQAEgDAAgGQAAgGgEgCIgJgBIgKAAg");
	this.shape_1076.setTransform(342.375,174.45);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAHAAATQAAARgQAHIATAagAgNAAIAKAAQAGAAADgBQAEgDAAgGQAAgGgEgCIgJgBIgKAAg");
	this.shape_1077.setTransform(321.625,174.45);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_1078.setTransform(313.825,174.45);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#EA8C9C").s().p("AgcAaQgEgHAAgRIAAgqIAVAAIAAAsQAAAHABADQADAGAHAAQAIAAADgGIABgKIAAgsIAVAAIAAAqQAAARgEAHQgHAPgWAAQgVAAgHgPg");
	this.shape_1079.setTransform(298.975,174.5);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAHAAASQAAASgQAHIATAbgAgNAAIAKAAQAGAAADgBQAEgDAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_1080.setTransform(354.275,352.6);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#EA8C9C").s().p("AgKApIAAg9IgSAAIAAgTIA5AAIAAATIgSAAIAAA9g");
	this.shape_1081.setTransform(346.475,352.6);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#EA8C9C").s().p("AAPApIgCgIIgZAAIgCAIIgWAAIAYhQIAaAAIAXBQgAAIAPIgIgfIgHAfIAPAAg");
	this.shape_1082.setTransform(338.825,352.6);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#EA8C9C").s().p("AgKApIAAg9IgSAAIAAgTIA5AAIAAATIgSAAIAAA9g");
	this.shape_1083.setTransform(328.475,352.6);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#EA8C9C").s().p("AgVApIAAhQIAUAAIAAA7IAYAAIAAAVg");
	this.shape_1084.setTransform(308.05,352.6);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1085.setTransform(758.175,311.5);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgDIgJgBIgKAAg");
	this.shape_1086.setTransform(746.625,311.5);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#EA8C9C").s().p("AAPAoIgCgHIgZAAIgCAHIgWAAIAYhQIAaAAIAXBQgAAIAOIgIgeIgHAeIAPAAg");
	this.shape_1087.setTransform(731.175,311.5);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#EA8C9C").s().p("AAMAoIAAgfIgXAAIAAAfIgVAAIAAhQIAVAAIAAAeIAXAAIAAgeIAVAAIAABQg");
	this.shape_1088.setTransform(713.175,311.5);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#EA8C9C").s().p("AgWAfQgKgLAAgTQAAgTALgLQAKgMASAAQAPAAAKAIIgKARQgHgEgIAAQgIAAgEAGQgGAFAAAKQAAAJAFAGQAFAFAHAAIAGgBIAAgKIgJAAIAAgSIAeAAIAAApQgKAJgRAAQgSAAgKgLg");
	this.shape_1089.setTransform(705.05,311.475);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAGAAATQAAATgQAGIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgDIgJgBIgKAAg");
	this.shape_1090.setTransform(693.525,311.5);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f().s("#000000").ss(2).p("AUynSID2AAAsZ02IlUAAApfG6IvVAAApRYSImYAAADTSeI34AAALF4RIKVAAARLMeIHkAAASDAlIGyAAAYouQIvdKF");
	this.shape_1091.setTransform(529.75,311.4);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#EB8C9C").s().p("AgWApIAAhQIAVAAIAAA7IAXAAIAAAVg");
	this.shape_1092.setTransform(710.65,332.6);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#EB8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_1093.setTransform(684.725,332.6);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#EA8C9C").s().p("AgWAoIAAhQIAVAAIAAA8IAYAAIAAAUg");
	this.shape_1094.setTransform(684,203.8);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#EA8C9C").s().p("AgVAoIAAhQIAVAAIAAA8IAXAAIAAAUg");
	this.shape_1095.setTransform(681.35,190.2);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#EA8C9C").s().p("AgQAxQAMgYAAgZQAAgYgMgYIARgIQAQAYAAAgQAAAggQAZg");
	this.shape_1096.setTransform(398.5,385.675);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#EA8C9C").s().p("AgQAAQAAggAQgYIARAIQgMAYAAAYQgBAZANAYIgRAIQgQgZAAggg");
	this.shape_1097.setTransform(338.45,385.675);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAHAAASQAAASgQAHIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_1098.setTransform(407.825,371.95);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAHAAASQAAASgQAHIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_1099.setTransform(324.075,371.95);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#EA8C9C").s().p("AgKAoIAAhQIAUAAIAABQg");
	this.shape_1100.setTransform(297.6,483.05);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#EA8C9C").s().p("AgKAoIAAggIgWgwIAWAAIAKAYIALgYIAWAAIgWAwIAAAgg");
	this.shape_1101.setTransform(741.675,289.2);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#EA8C9C").s().p("AgWApIAAhQIAWAAIAAA7IAWAAIAAAVg");
	this.shape_1102.setTransform(773.95,410.3);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#EA8C9C").s().p("AgUAeQgLgLAAgSQAAgRAMgMQALgNARAAQAMAAAJAGIgLASQgEgDgGAAQgJAAgEAHQgGAGABAIQgBAJAGAFQAEAGAJAAQAGAAAGgEIALASQgLAHgMAAQgRAAgMgMg");
	this.shape_1103.setTransform(767.65,410.275);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#EA8C9C").s().p("AgKApIAAhQIAVAAIAABQg");
	this.shape_1104.setTransform(761.95,410.3);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASAAAIADQAPAGAAATQAAASgQAHIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_1105.setTransform(756.275,410.3);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#EA8C9C").s().p("AgWAfQgKgLAAgTQgBgTALgLQALgMASAAQAPAAAKAIIgLARQgGgEgIAAQgIAAgEAGQgGAFAAAKQAAAJAFAGQAFAFAHAAIAGgBIAAgKIgJAAIAAgSIAeAAIAAApQgJAJgSAAQgSAAgKgLg");
	this.shape_1106.setTransform(699.4,410.275);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#EA8C9C").s().p("AgKApIAAhQIAVAAIAABQg");
	this.shape_1107.setTransform(693.55,410.3);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASAAAIADQAPAGAAATQAAASgQAHIATAbgAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgHgEgCIgJgBIgKAAg");
	this.shape_1108.setTransform(687.875,410.3);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASABAIADQAPAHAAASQAAASgQAHIATAagAgNAAIAKAAQAGAAADgCQAEgCAAgGQAAgGgEgCQgDgCgGAAIgKAAg");
	this.shape_1109.setTransform(361.425,430.4);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_1110.setTransform(338.325,430.4);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAAQIAbAAIAAATIgbAAIAAAZg");
	this.shape_1111.setTransform(313.125,430.4);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAUIgkAAIAAALIAbAAIAAATIgbAAIAAAKIAkAAIAAAUg");
	this.shape_1112.setTransform(305.925,430.4);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#EA8C9C").s().p("AgKAoIAAg8IgSAAIAAgUIA5AAIAAAUIgSAAIAAA8g");
	this.shape_1113.setTransform(705.575,305.65);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#EA8C9C").s().p("AgWAfQgLgLAAgTQABgTAKgLQAMgMARAAQAPAAAKAIIgLARQgGgEgIAAQgHAAgGAGQgFAFAAAKQAAAJAFAGQAFAFAIAAIAFgBIAAgKIgJAAIAAgSIAfAAIAAApQgLAJgRAAQgRAAgLgLg");
	this.shape_1114.setTransform(689.8,305.625);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAGAAAUQAAARgQAHIATAagAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgCIgJgBIgKAAg");
	this.shape_1115.setTransform(354.225,328.45);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#EA8C9C").s().p("AAKAoIgOgWIgGAAIgDAAIAAAWIgVAAIAAhQIAZAAQASAAAIAEQAPAGAAAUQAAARgQAHIATAagAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgCIgJgBIgKAAg");
	this.shape_1116.setTransform(346.125,328.45);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#EA8C9C").s().p("AgcAoIAAhQIA5AAIAAAVIgkAAIAAAKIAbAAIAAASIgbAAIAAALIAkAAIAAAUg");
	this.shape_1117.setTransform(305.925,328.45);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#EA8C9C").s().p("AgMApIgYhQIAWAAIAOA3IAPg3IAWAAIgXBQg");
	this.shape_1118.setTransform(351.925,154.05);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAAUQAAARgQAHIATAbgAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgDIgJAAIgKAAg");
	this.shape_1119.setTransform(341.275,154.05);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#EA8C9C").s().p("AAKApIgOgYIgGAAIgDAAIAAAYIgVAAIAAhQIAZAAQASgBAIAEQAPAGAAAUQAAARgQAHIATAbgAgNAAIAKAAQAGAAADgBQAEgCAAgHQAAgGgEgDIgJAAIgKAAg");
	this.shape_1120.setTransform(320.525,154.05);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#EA8C9C").s().p("AgfApIAAhQIAWAAQARgBAJAEQAPAHAAATQAAATgPAHQgJAEgRgBIgBAAIAAAWgAgKAAIAHAAIAIgBQAFgBAAgIQAAgHgFgCIgIAAIgHAAg");
	this.shape_1121.setTransform(305.825,154.05);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#EA8C9C").s().p("AgcAbQgEgJAAgQIAAgqIAVAAIAAArQAAAJABACQADAGAHAAQAIAAADgGIABgLIAAgrIAVAAIAAAqQAAAQgEAJQgHAOgWAAQgVAAgHgOg");
	this.shape_1122.setTransform(297.875,154.1);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#EA8C9C").s().p("AgKAoIAAg8IgSAAIAAgUIA5AAIAAAUIgSAAIAAA8g");
	this.shape_1123.setTransform(682.025,173.8);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#000000").ss(2).p("ATkmDIDMAAAsiGjIlSAAArugGIspAAAwcYIIHeAAAg1P2I0mAAAPYMwII/AAAPJAkIHXAAAOWjjIISAAAHjg2ILZxrAJE4HIKdAA");
	this.shape_1124.setTransform(527.2,332.3);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f().s("#0D110E").ss(2).p("AiSAAIElAA");
	this.shape_1125.setTransform(430.8,156.6);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#000000").ss(2).p("ATkmDIDMAAAsiGjIlSAAArugGIspAAAwcYIIHeAAAg1P2I0mAAAJE4HIKdAAAHjg2ILZxrAOWjjIISAAAPJAkIHXAAAPYMwII/AA");
	this.shape_1126.setTransform(527.2,332.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_827},{t:this.shape_826},{t:this.shape_825,p:{x:694.775,y:162.15}},{t:this.shape_824,p:{x:703.325,y:162.125}},{t:this.shape_823},{t:this.shape_822,p:{x:719.575,y:162.15}},{t:this.shape_821,p:{x:727.225,y:162.15}},{t:this.shape_820,p:{x:323.625,y:171.725}},{t:this.shape_819,p:{x:331.375,y:171.8}},{t:this.shape_818,p:{x:339.325,y:171.75}},{t:this.shape_817,p:{x:346.225,y:171.75}},{t:this.shape_816,p:{x:354.025,y:171.75}},{t:this.shape_815,p:{x:359.7,y:171.75}},{t:this.shape_814,p:{x:366.025,y:171.725}},{t:this.shape_813,p:{x:374.775,y:171.75}},{t:this.shape_812,p:{x:385.425,y:171.75}},{t:this.shape_811,p:{x:393.075,y:171.75}},{t:this.shape_810,p:{x:400.725,y:171.75}},{t:this.shape_809,p:{x:408.825,y:171.75}},{t:this.shape_808,p:{x:419.45,y:171.725}},{t:this.shape_807,p:{x:426.825,y:171.75}},{t:this.shape_806,p:{x:434.925,y:171.75}},{t:this.shape_805,p:{x:443.025,y:171.75}},{t:this.shape_804,p:{x:324.7,y:456.45}},{t:this.shape_803,p:{x:330.575,y:456.45}},{t:this.shape_802},{t:this.shape_801,p:{x:345.425,y:456.45}},{t:this.shape_800},{t:this.shape_799,p:{x:358.9,y:456.45}},{t:this.shape_798,p:{x:365.225,y:456.425}},{t:this.shape_797},{t:this.shape_796,p:{x:384.625,y:456.45}},{t:this.shape_795,p:{x:392.275,y:456.45}},{t:this.shape_794,p:{x:399.925,y:456.45}},{t:this.shape_793,p:{x:408.025,y:456.45}},{t:this.shape_792},{t:this.shape_791,p:{x:426.025,y:456.45}},{t:this.shape_790,p:{x:434.125,y:456.45}},{t:this.shape_789,p:{x:442.225,y:456.45}},{t:this.shape_788},{t:this.shape_787,p:{x:698.275,y:251.25}},{t:this.shape_786,p:{x:705.3,y:251.2}},{t:this.shape_785,p:{x:712.675,y:251.2}},{t:this.shape_784,p:{x:722.175,y:251.175}},{t:this.shape_783,p:{x:730.775,y:251.2}},{t:this.shape_782,p:{x:738.875,y:251.2}},{t:this.shape_781,p:{x:747.125,y:251.2}},{t:this.shape_780},{t:this.shape_779,p:{x:764.975,y:251.2}},{t:this.shape_778,p:{x:772.625,y:251.2}},{t:this.shape_777,p:{x:778,y:251.2}},{t:this.shape_776,p:{x:783.875,y:251.2}},{t:this.shape_775,p:{x:791.425,y:251.175}}]},59).to({state:[{t:this.shape_870},{t:this.shape_869},{t:this.shape_868,p:{x:657.325,y:130.575}},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865,p:{x:681.225,y:130.6}},{t:this.shape_775,p:{x:273.175,y:162.175}},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862,p:{x:295.775,y:162.2}},{t:this.shape_861,p:{x:303.575,y:162.2}},{t:this.shape_860,p:{x:309.25,y:162.2}},{t:this.shape_784,p:{x:315.575,y:162.175}},{t:this.shape_859,p:{x:324.325,y:162.2}},{t:this.shape_806,p:{x:334.975,y:162.2}},{t:this.shape_778,p:{x:342.625,y:162.2}},{t:this.shape_776,p:{x:350.275,y:162.2}},{t:this.shape_807,p:{x:358.375,y:162.2}},{t:this.shape_858},{t:this.shape_805,p:{x:376.375,y:162.2}},{t:this.shape_779,p:{x:384.475,y:162.2}},{t:this.shape_782,p:{x:392.575,y:162.2}},{t:this.shape_857,p:{x:307.55,y:470}},{t:this.shape_856,p:{x:313.425,y:470}},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852,p:{x:341.75,y:470}},{t:this.shape_851,p:{x:348.075,y:469.975}},{t:this.shape_850},{t:this.shape_849,p:{x:367.475,y:470}},{t:this.shape_848},{t:this.shape_847,p:{x:382.775,y:470}},{t:this.shape_846,p:{x:390.875,y:470}},{t:this.shape_845},{t:this.shape_844,p:{x:408.875,y:470}},{t:this.shape_843,p:{x:416.975,y:470}},{t:this.shape_842,p:{x:425.075,y:470}},{t:this.shape_841},{t:this.shape_840,p:{x:700.475,y:248}},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837,p:{x:724.375,y:247.925}},{t:this.shape_836},{t:this.shape_835,p:{x:741.075,y:247.95}},{t:this.shape_834,p:{x:749.325,y:247.95}},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828,p:{x:793.625,y:247.925}}]},60).to({state:[{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_834,p:{x:670.175,y:162}},{t:this.shape_902},{t:this.shape_835,p:{x:685.325,y:162}},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_868,p:{x:315.775,y:156.725}},{t:this.shape_895},{t:this.shape_894,p:{x:335.175,y:156.75}},{t:this.shape_893,p:{x:342.825,y:156.75}},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889,p:{x:376.575,y:156.75}},{t:this.shape_888,p:{x:384.675,y:156.75}},{t:this.shape_887,p:{x:392.775,y:156.75}},{t:this.shape_857,p:{x:307.1,y:507.9}},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_852,p:{x:341.3,y:507.9}},{t:this.shape_851,p:{x:347.625,y:507.875}},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_865,p:{x:390.425,y:507.9}},{t:this.shape_878},{t:this.shape_846,p:{x:408.425,y:507.9}},{t:this.shape_849,p:{x:416.525,y:507.9}},{t:this.shape_844,p:{x:424.625,y:507.9}},{t:this.shape_877},{t:this.shape_840,p:{x:701.475,y:294.8}},{t:this.shape_876},{t:this.shape_875},{t:this.shape_837,p:{x:725.375,y:294.725}},{t:this.shape_856,p:{x:733.975,y:294.75}},{t:this.shape_842,p:{x:742.075,y:294.75}},{t:this.shape_874},{t:this.shape_873},{t:this.shape_843,p:{x:768.175,y:294.75}},{t:this.shape_872},{t:this.shape_871},{t:this.shape_847,p:{x:787.075,y:294.75}},{t:this.shape_828,p:{x:794.625,y:294.725}}]},120).to({state:[{t:this.shape_1027},{t:this.shape_1026,p:{x:670.425,y:164.9}},{t:this.shape_1025,p:{x:678.975,y:164.875}},{t:this.shape_859,p:{x:687.725,y:164.9}},{t:this.shape_1024,p:{x:695.225,y:164.9}},{t:this.shape_809,p:{x:702.875,y:164.9}},{t:this.shape_1023,p:{x:689.175,y:305.05}},{t:this.shape_819,p:{x:696.525,y:305.1}},{t:this.shape_1022,p:{x:703.55,y:305.05}},{t:this.shape_1021,p:{x:710.925,y:305.05}},{t:this.shape_824,p:{x:720.425,y:305.025}},{t:this.shape_1020,p:{x:729.025,y:305.05}},{t:this.shape_1019,p:{x:737.125,y:305.05}},{t:this.shape_1018},{t:this.shape_1017,p:{x:752.875,y:305.05}},{t:this.shape_1016,p:{x:763.225,y:305.05}},{t:this.shape_1015,p:{x:770.875,y:305.05}},{t:this.shape_1014,p:{x:776.25,y:305.05}},{t:this.shape_810,p:{x:782.125,y:305.05}},{t:this.shape_1013,p:{x:789.675,y:305.025}},{t:this.shape_1012,p:{x:302.15,y:447.6}},{t:this.shape_1011,p:{x:308.175,y:447.6}},{t:this.shape_1010,p:{x:315.375,y:447.6}},{t:this.shape_1009,p:{x:322.575,y:447.6}},{t:this.shape_1008,p:{x:332.925,y:447.6}},{t:this.shape_817,p:{x:340.575,y:447.6}},{t:this.shape_783,p:{x:348.225,y:447.6}},{t:this.shape_1007,p:{x:355.875,y:447.6}},{t:this.shape_813,p:{x:363.675,y:447.6}},{t:this.shape_1006,p:{x:369.35,y:447.6}},{t:this.shape_1005},{t:this.shape_1004,p:{x:381.35,y:447.6}},{t:this.shape_811,p:{x:387.375,y:447.6}},{t:this.shape_1003,p:{x:693.275,y:370.45}},{t:this.shape_1002,p:{x:698.95,y:370.45}},{t:this.shape_1001},{t:this.shape_1000,p:{x:712.925,y:370.45}},{t:this.shape_999,p:{x:720.575,y:370.45}},{t:this.shape_998,p:{x:730.925,y:370.45}},{t:this.shape_997,p:{x:738.575,y:370.45}},{t:this.shape_776,p:{x:746.225,y:370.45}},{t:this.shape_996,p:{x:753.875,y:370.45}},{t:this.shape_781,p:{x:761.675,y:370.45}},{t:this.shape_860,p:{x:767.35,y:370.45}},{t:this.shape_995},{t:this.shape_994,p:{x:779.35,y:370.45}},{t:this.shape_993,p:{x:785.375,y:370.45}},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990,p:{x:317.875,y:328.85}},{t:this.shape_989,p:{x:325.075,y:328.85}},{t:this.shape_988},{t:this.shape_987,p:{x:343.075,y:328.85}},{t:this.shape_986},{t:this.shape_804,p:{x:356.55,y:328.85}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981,p:{x:710.775,y:325.15}},{t:this.shape_980},{t:this.shape_821,p:{x:728.775,y:325.15}},{t:this.shape_822,p:{x:736.425,y:325.15}},{t:this.shape_979},{t:this.shape_978},{t:this.shape_793,p:{x:755.775,y:325.15}},{t:this.shape_977},{t:this.shape_976,p:{x:286.025,y:388.8}},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_814,p:{x:313.475,y:388.775}},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970,p:{x:337.375,y:388.8}},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966,p:{x:364.2,y:388.775}},{t:this.shape_965,p:{x:371.575,y:388.85}},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962,p:{x:393.325,y:388.8}},{t:this.shape_961,p:{x:277.925,y:402.4}},{t:this.shape_807,p:{x:286.025,y:402.4}},{t:this.shape_960},{t:this.shape_959,p:{x:299.525,y:402.4}},{t:this.shape_862,p:{x:307.175,y:402.4}},{t:this.shape_958,p:{x:315.85,y:402.525}},{t:this.shape_805,p:{x:322.025,y:402.4}},{t:this.shape_812,p:{x:330.125,y:402.4}},{t:this.shape_806,p:{x:340.925,y:402.4}},{t:this.shape_782,p:{x:349.025,y:402.4}},{t:this.shape_957},{t:this.shape_779,p:{x:362.525,y:402.4}},{t:this.shape_778,p:{x:370.175,y:402.4}},{t:this.shape_956,p:{x:375.9,y:402.525}},{t:this.shape_955,p:{x:690.975,y:194.625}},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952,p:{x:713.6,y:194.65}},{t:this.shape_951,p:{x:718.4,y:194.65}},{t:this.shape_950,p:{x:724.875,y:194.7}},{t:this.shape_949,p:{x:732.975,y:194.65}},{t:this.shape_791,p:{x:741.075,y:194.65}},{t:this.shape_948,p:{x:749.325,y:194.65}},{t:this.shape_947,p:{x:759.975,y:194.65}},{t:this.shape_789,p:{x:768.075,y:194.65}},{t:this.shape_946,p:{x:775.1,y:194.65}},{t:this.shape_945,p:{x:781.575,y:194.65}},{t:this.shape_944},{t:this.shape_943},{t:this.shape_820,p:{x:695.475,y:208.225}},{t:this.shape_942,p:{x:705.925,y:208.25}},{t:this.shape_941},{t:this.shape_940,p:{x:721.05,y:208.25}},{t:this.shape_939,p:{x:727.525,y:208.25}},{t:this.shape_938,p:{x:735.175,y:208.25}},{t:this.shape_937,p:{x:740.9,y:208.375}},{t:this.shape_775,p:{x:270.675,y:159.175}},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934,p:{x:293.275,y:159.2}},{t:this.shape_933},{t:this.shape_932,p:{x:306.75,y:159.2}},{t:this.shape_798,p:{x:313.075,y:159.175}},{t:this.shape_931},{t:this.shape_930,p:{x:332.475,y:159.2}},{t:this.shape_929,p:{x:340.125,y:159.2}},{t:this.shape_928,p:{x:347.775,y:159.2}},{t:this.shape_927},{t:this.shape_926,p:{x:366.5,y:159.175}},{t:this.shape_925},{t:this.shape_924,p:{x:381.975,y:159.2}},{t:this.shape_923},{t:this.shape_799,p:{x:303.45,y:513.35}},{t:this.shape_803,p:{x:309.325,y:513.35}},{t:this.shape_922,p:{x:316.975,y:513.35}},{t:this.shape_921,p:{x:324.175,y:513.35}},{t:this.shape_920},{t:this.shape_919,p:{x:337.65,y:513.35}},{t:this.shape_784,p:{x:343.975,y:513.325}},{t:this.shape_918,p:{x:352.725,y:513.35}},{t:this.shape_796,p:{x:363.375,y:513.35}},{t:this.shape_917,p:{x:371.025,y:513.35}},{t:this.shape_794,p:{x:378.675,y:513.35}},{t:this.shape_916,p:{x:386.775,y:513.35}},{t:this.shape_915},{t:this.shape_914,p:{x:404.775,y:513.35}},{t:this.shape_790,p:{x:412.875,y:513.35}},{t:this.shape_913,p:{x:420.975,y:513.35}},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909,p:{x:720.125,y:342.45}},{t:this.shape_908,p:{x:727.15,y:342.45}},{t:this.shape_907,p:{x:733.625,y:342.45}},{t:this.shape_906,p:{x:741.275,y:342.45}}]},120).to({state:[{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1014,p:{x:699.2,y:311.5}},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_999,p:{x:720.825,y:311.5}},{t:this.shape_1087},{t:this.shape_996,p:{x:738.825,y:311.5}},{t:this.shape_1086},{t:this.shape_1006,p:{x:752.3,y:311.5}},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_938,p:{x:314.075,y:352.6}},{t:this.shape_990,p:{x:321.275,y:352.6}},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081,p:{x:346.475,y:352.6}},{t:this.shape_1080},{t:this.shape_932,p:{x:359.95,y:352.6}},{t:this.shape_825,p:{x:365.825,y:352.6}},{t:this.shape_1013,p:{x:291.225,y:174.425}},{t:this.shape_1079,p:{x:298.975,y:174.5}},{t:this.shape_818,p:{x:306.925,y:174.45}},{t:this.shape_1078},{t:this.shape_1077,p:{x:321.625,y:174.45}},{t:this.shape_815,p:{x:327.3,y:174.45}},{t:this.shape_1025,p:{x:333.625,y:174.425}},{t:this.shape_1076,p:{x:342.375,y:174.45}},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072,p:{x:376.425,y:174.45}},{t:this.shape_808,p:{x:387.05,y:174.425}},{t:this.shape_1071,p:{x:394.425,y:174.45}},{t:this.shape_1070},{t:this.shape_1069,p:{x:410.625,y:174.45}},{t:this.shape_1068},{t:this.shape_1067,p:{x:312.725,y:463.6}},{t:this.shape_1066,p:{x:320.375,y:463.6}},{t:this.shape_997,p:{x:327.575,y:463.6}},{t:this.shape_1065,p:{x:335.375,y:463.6}},{t:this.shape_1064},{t:this.shape_824,p:{x:347.375,y:463.575}},{t:this.shape_1003,p:{x:356.125,y:463.6}},{t:this.shape_1063},{t:this.shape_993,p:{x:374.425,y:463.6}},{t:this.shape_1020,p:{x:382.075,y:463.6}},{t:this.shape_1062,p:{x:390.175,y:463.6}},{t:this.shape_1061,p:{x:400.8,y:463.575}},{t:this.shape_1060,p:{x:408.175,y:463.6}},{t:this.shape_1059},{t:this.shape_1058,p:{x:424.375,y:463.6}},{t:this.shape_1026,p:{x:308.275,y:371.55}},{t:this.shape_810,p:{x:316.375,y:371.55}},{t:this.shape_1057},{t:this.shape_816,p:{x:331.825,y:371.55}},{t:this.shape_1002,p:{x:337.5,y:371.55}},{t:this.shape_814,p:{x:343.825,y:371.525}},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_783,p:{x:367.725,y:371.55}},{t:this.shape_1054,p:{x:375.375,y:371.55}},{t:this.shape_1053,p:{x:380.75,y:371.55}},{t:this.shape_1052},{t:this.shape_819,p:{x:393.825,y:371.6}},{t:this.shape_1051},{t:this.shape_809,p:{x:407.325,y:371.55}},{t:this.shape_813,p:{x:415.575,y:371.55}},{t:this.shape_1050},{t:this.shape_1049,p:{x:316.375,y:385.15}},{t:this.shape_1022,p:{x:323.4,y:385.15}},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045,p:{x:352.375,y:385.15}},{t:this.shape_1016,p:{x:360.475,y:385.15}},{t:this.shape_1008,p:{x:371.275,y:385.15}},{t:this.shape_1019,p:{x:379.375,y:385.15}},{t:this.shape_1012,p:{x:386.4,y:385.15}},{t:this.shape_998,p:{x:392.875,y:385.15}},{t:this.shape_1011,p:{x:400.525,y:385.15}},{t:this.shape_1044},{t:this.shape_821,p:{x:671.325,y:151.9}},{t:this.shape_798,p:{x:679.875,y:151.875}},{t:this.shape_948,p:{x:688.625,y:151.9}},{t:this.shape_1043,p:{x:696.125,y:151.9}},{t:this.shape_793,p:{x:703.775,y:151.9}},{t:this.shape_1042},{t:this.shape_965,p:{x:699.225,y:260.6}},{t:this.shape_908,p:{x:706.25,y:260.55}},{t:this.shape_1041},{t:this.shape_784,p:{x:723.125,y:260.525}},{t:this.shape_976,p:{x:731.725,y:260.55}},{t:this.shape_909,p:{x:739.825,y:260.55}},{t:this.shape_962,p:{x:748.075,y:260.55}},{t:this.shape_1040},{t:this.shape_907,p:{x:765.925,y:260.55}},{t:this.shape_906,p:{x:773.575,y:260.55}},{t:this.shape_1039},{t:this.shape_970,p:{x:784.825,y:260.55}},{t:this.shape_955,p:{x:792.375,y:260.525}},{t:this.shape_1038},{t:this.shape_934,p:{x:314.075,y:426.5}},{t:this.shape_922,p:{x:321.275,y:426.5}},{t:this.shape_989,p:{x:328.475,y:426.5}},{t:this.shape_930,p:{x:338.825,y:426.5}},{t:this.shape_929,p:{x:346.475,y:426.5}},{t:this.shape_794,p:{x:354.125,y:426.5}},{t:this.shape_987,p:{x:361.775,y:426.5}},{t:this.shape_918,p:{x:369.575,y:426.5}},{t:this.shape_919,p:{x:375.25,y:426.5}},{t:this.shape_1037,p:{x:380.95,y:426.475}},{t:this.shape_1036},{t:this.shape_921,p:{x:393.275,y:426.5}},{t:this.shape_1035},{t:this.shape_777,p:{x:700.5,y:387.4}},{t:this.shape_1034},{t:this.shape_1000,p:{x:714.475,y:387.4}},{t:this.shape_1009,p:{x:722.125,y:387.4}},{t:this.shape_961,p:{x:732.475,y:387.4}},{t:this.shape_817,p:{x:740.125,y:387.4}},{t:this.shape_1033},{t:this.shape_1007,p:{x:755.425,y:387.4}},{t:this.shape_1032},{t:this.shape_1031,p:{x:768.9,y:387.4}},{t:this.shape_966,p:{x:774.6,y:387.375}},{t:this.shape_1030,p:{x:780.9,y:387.4}},{t:this.shape_811,p:{x:786.925,y:387.4}},{t:this.shape_820,p:{x:694.125,y:215.175}},{t:this.shape_862,p:{x:701.425,y:215.2}},{t:this.shape_785,p:{x:709.975,y:215.2}},{t:this.shape_860,p:{x:716.75,y:215.2}},{t:this.shape_1004,p:{x:721.55,y:215.2}},{t:this.shape_787,p:{x:728.025,y:215.25}},{t:this.shape_776,p:{x:736.125,y:215.2}},{t:this.shape_807,p:{x:744.225,y:215.2}},{t:this.shape_781,p:{x:752.475,y:215.2}},{t:this.shape_959,p:{x:763.125,y:215.2}},{t:this.shape_805,p:{x:771.225,y:215.2}},{t:this.shape_994,p:{x:778.25,y:215.2}},{t:this.shape_812,p:{x:784.725,y:215.2}},{t:this.shape_778,p:{x:792.375,y:215.2}},{t:this.shape_1029},{t:this.shape_775,p:{x:698.625,y:228.775}},{t:this.shape_806,p:{x:709.075,y:228.8}},{t:this.shape_782,p:{x:717.175,y:228.8}},{t:this.shape_786,p:{x:724.2,y:228.8}},{t:this.shape_779,p:{x:730.675,y:228.8}},{t:this.shape_1028,p:{x:738.325,y:228.8}},{t:this.shape_937,p:{x:744.05,y:228.925}},{t:this.shape_791,p:{x:693.875,y:333.25}},{t:this.shape_924,p:{x:701.975,y:333.25}},{t:this.shape_796,p:{x:712.775,y:333.25}},{t:this.shape_789,p:{x:720.875,y:333.25}},{t:this.shape_940,p:{x:727.9,y:333.25}},{t:this.shape_790,p:{x:734.375,y:333.25}},{t:this.shape_917,p:{x:742.025,y:333.25}}]},120).to({state:[{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1072,p:{x:657.225,y:173.8}},{t:this.shape_1025,p:{x:665.775,y:173.775}},{t:this.shape_1065,p:{x:674.525,y:173.8}},{t:this.shape_1123},{t:this.shape_1071,p:{x:689.675,y:173.8}},{t:this.shape_955,p:{x:290.125,y:154.025}},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_801,p:{x:312.725,y:154.05}},{t:this.shape_1120},{t:this.shape_932,p:{x:326.2,y:154.05}},{t:this.shape_824,p:{x:332.525,y:154.025}},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_795,p:{x:359.575,y:154.05}},{t:this.shape_949,p:{x:367.225,y:154.05}},{t:this.shape_825,p:{x:375.325,y:154.05}},{t:this.shape_1061,p:{x:385.95,y:154.025}},{t:this.shape_821,p:{x:393.325,y:154.05}},{t:this.shape_947,p:{x:401.425,y:154.05}},{t:this.shape_793,p:{x:409.525,y:154.05}},{t:this.shape_1012,p:{x:299.9,y:328.45}},{t:this.shape_1117},{t:this.shape_1010,p:{x:313.125,y:328.45}},{t:this.shape_1054,p:{x:320.325,y:328.45}},{t:this.shape_1049,p:{x:330.675,y:328.45}},{t:this.shape_1009,p:{x:338.325,y:328.45}},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1002,p:{x:359.9,y:328.45}},{t:this.shape_1045,p:{x:365.775,y:328.45}},{t:this.shape_1003,p:{x:678.275,y:305.65}},{t:this.shape_1053,p:{x:683.95,y:305.65}},{t:this.shape_1114},{t:this.shape_1000,p:{x:697.925,y:305.65}},{t:this.shape_1113},{t:this.shape_1069,p:{x:715.925,y:305.65}},{t:this.shape_1024,p:{x:723.575,y:305.65}},{t:this.shape_781,p:{x:731.375,y:305.65}},{t:this.shape_777,p:{x:737.05,y:305.65}},{t:this.shape_1062,p:{x:742.925,y:305.65}},{t:this.shape_1004,p:{x:299.9,y:430.4}},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_999,p:{x:320.325,y:430.4}},{t:this.shape_1008,p:{x:330.675,y:430.4}},{t:this.shape_1110},{t:this.shape_1067,p:{x:345.975,y:430.4}},{t:this.shape_996,p:{x:353.625,y:430.4}},{t:this.shape_1109},{t:this.shape_860,p:{x:367.1,y:430.4}},{t:this.shape_926,p:{x:372.8,y:430.375}},{t:this.shape_994,p:{x:379.1,y:430.4}},{t:this.shape_1028,p:{x:385.125,y:430.4}},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_981,p:{x:707.525,y:410.3}},{t:this.shape_1081,p:{x:715.175,y:410.3}},{t:this.shape_945,p:{x:725.525,y:410.3}},{t:this.shape_938,p:{x:733.175,y:410.3}},{t:this.shape_928,p:{x:740.825,y:410.3}},{t:this.shape_1043,p:{x:748.475,y:410.3}},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_934,p:{x:779.975,y:410.3}},{t:this.shape_1023,p:{x:677.975,y:289.2}},{t:this.shape_1079,p:{x:685.325,y:289.25}},{t:this.shape_786,p:{x:692.35,y:289.2}},{t:this.shape_1021,p:{x:699.725,y:289.2}},{t:this.shape_814,p:{x:709.225,y:289.175}},{t:this.shape_1020,p:{x:717.825,y:289.2}},{t:this.shape_1060,p:{x:725.925,y:289.2}},{t:this.shape_1077,p:{x:734.175,y:289.2}},{t:this.shape_1101},{t:this.shape_1058,p:{x:752.025,y:289.2}},{t:this.shape_1076,p:{x:760.275,y:289.2}},{t:this.shape_1007,p:{x:767.775,y:289.2}},{t:this.shape_1011,p:{x:774.975,y:289.2}},{t:this.shape_816,p:{x:782.775,y:289.2}},{t:this.shape_1017,p:{x:790.275,y:289.2}},{t:this.shape_1100},{t:this.shape_810,p:{x:303.475,y:483.05}},{t:this.shape_1066,p:{x:311.125,y:483.05}},{t:this.shape_862,p:{x:318.325,y:483.05}},{t:this.shape_861,p:{x:326.125,y:483.05}},{t:this.shape_815,p:{x:331.8,y:483.05}},{t:this.shape_798,p:{x:338.125,y:483.025}},{t:this.shape_859,p:{x:346.875,y:483.05}},{t:this.shape_998,p:{x:357.525,y:483.05}},{t:this.shape_778,p:{x:365.175,y:483.05}},{t:this.shape_783,p:{x:372.825,y:483.05}},{t:this.shape_1026,p:{x:380.925,y:483.05}},{t:this.shape_808,p:{x:391.55,y:483.025}},{t:this.shape_809,p:{x:398.925,y:483.05}},{t:this.shape_961,p:{x:407.025,y:483.05}},{t:this.shape_807,p:{x:415.125,y:483.05}},{t:this.shape_791,p:{x:300.525,y:371.95}},{t:this.shape_803,p:{x:308.625,y:371.95}},{t:this.shape_989,p:{x:316.275,y:371.95}},{t:this.shape_1099},{t:this.shape_952,p:{x:329.75,y:371.95}},{t:this.shape_784,p:{x:336.075,y:371.925}},{t:this.shape_942,p:{x:344.675,y:371.95}},{t:this.shape_929,p:{x:352.325,y:371.95}},{t:this.shape_794,p:{x:359.975,y:371.95}},{t:this.shape_987,p:{x:367.625,y:371.95}},{t:this.shape_919,p:{x:373,y:371.95}},{t:this.shape_1037,p:{x:378.7,y:371.925}},{t:this.shape_950,p:{x:386.075,y:372}},{t:this.shape_940,p:{x:393.1,y:371.95}},{t:this.shape_789,p:{x:399.575,y:371.95}},{t:this.shape_1098},{t:this.shape_939,p:{x:300.525,y:385.55}},{t:this.shape_916,p:{x:308.625,y:385.55}},{t:this.shape_951,p:{x:315.65,y:385.55}},{t:this.shape_930,p:{x:322.125,y:385.55}},{t:this.shape_921,p:{x:329.775,y:385.55}},{t:this.shape_1097},{t:this.shape_914,p:{x:344.625,y:385.55}},{t:this.shape_924,p:{x:352.725,y:385.55}},{t:this.shape_796,p:{x:363.525,y:385.55}},{t:this.shape_913,p:{x:371.625,y:385.55}},{t:this.shape_946,p:{x:378.65,y:385.55}},{t:this.shape_790,p:{x:385.125,y:385.55}},{t:this.shape_917,p:{x:392.775,y:385.55}},{t:this.shape_1096},{t:this.shape_820,p:{x:653.925,y:190.175}},{t:this.shape_817,p:{x:661.225,y:190.2}},{t:this.shape_785,p:{x:669.775,y:190.2}},{t:this.shape_1031,p:{x:676.55,y:190.2}},{t:this.shape_1095},{t:this.shape_819,p:{x:687.825,y:190.25}},{t:this.shape_776,p:{x:695.925,y:190.2}},{t:this.shape_805,p:{x:704.025,y:190.2}},{t:this.shape_813,p:{x:712.275,y:190.2}},{t:this.shape_959,p:{x:722.925,y:190.2}},{t:this.shape_782,p:{x:731.025,y:190.2}},{t:this.shape_1030,p:{x:738.05,y:190.2}},{t:this.shape_812,p:{x:744.525,y:190.2}},{t:this.shape_811,p:{x:752.175,y:190.2}},{t:this.shape_958,p:{x:652.8,y:203.925}},{t:this.shape_775,p:{x:658.425,y:203.775}},{t:this.shape_806,p:{x:668.875,y:203.8}},{t:this.shape_1019,p:{x:676.975,y:203.8}},{t:this.shape_1094},{t:this.shape_779,p:{x:690.475,y:203.8}},{t:this.shape_1015,p:{x:698.125,y:203.8}},{t:this.shape_956,p:{x:703.85,y:203.925}},{t:this.shape_889,p:{x:676.625,y:332.6}},{t:this.shape_1093},{t:this.shape_894,p:{x:695.525,y:332.6}},{t:this.shape_887,p:{x:703.625,y:332.6}},{t:this.shape_1092},{t:this.shape_888,p:{x:717.125,y:332.6}},{t:this.shape_893,p:{x:724.775,y:332.6}}]},240).to({state:[{t:this.shape_1125},{t:this.shape_1126},{t:this.shape_1072,p:{x:657.225,y:173.8}},{t:this.shape_1025,p:{x:665.775,y:173.775}},{t:this.shape_1065,p:{x:674.525,y:173.8}},{t:this.shape_1123},{t:this.shape_1071,p:{x:689.675,y:173.8}},{t:this.shape_955,p:{x:290.125,y:154.025}},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_801,p:{x:312.725,y:154.05}},{t:this.shape_1120},{t:this.shape_932,p:{x:326.2,y:154.05}},{t:this.shape_824,p:{x:332.525,y:154.025}},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_795,p:{x:359.575,y:154.05}},{t:this.shape_949,p:{x:367.225,y:154.05}},{t:this.shape_825,p:{x:375.325,y:154.05}},{t:this.shape_1061,p:{x:385.95,y:154.025}},{t:this.shape_821,p:{x:393.325,y:154.05}},{t:this.shape_947,p:{x:401.425,y:154.05}},{t:this.shape_793,p:{x:409.525,y:154.05}},{t:this.shape_1012,p:{x:299.9,y:328.45}},{t:this.shape_1117},{t:this.shape_1010,p:{x:313.125,y:328.45}},{t:this.shape_1054,p:{x:320.325,y:328.45}},{t:this.shape_1049,p:{x:330.675,y:328.45}},{t:this.shape_1009,p:{x:338.325,y:328.45}},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1002,p:{x:359.9,y:328.45}},{t:this.shape_1045,p:{x:365.775,y:328.45}},{t:this.shape_1003,p:{x:678.275,y:305.65}},{t:this.shape_1053,p:{x:683.95,y:305.65}},{t:this.shape_1114},{t:this.shape_1000,p:{x:697.925,y:305.65}},{t:this.shape_1113},{t:this.shape_1069,p:{x:715.925,y:305.65}},{t:this.shape_1024,p:{x:723.575,y:305.65}},{t:this.shape_781,p:{x:731.375,y:305.65}},{t:this.shape_777,p:{x:737.05,y:305.65}},{t:this.shape_1062,p:{x:742.925,y:305.65}},{t:this.shape_1004,p:{x:299.9,y:430.4}},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_999,p:{x:320.325,y:430.4}},{t:this.shape_1008,p:{x:330.675,y:430.4}},{t:this.shape_1110},{t:this.shape_1067,p:{x:345.975,y:430.4}},{t:this.shape_996,p:{x:353.625,y:430.4}},{t:this.shape_1109},{t:this.shape_860,p:{x:367.1,y:430.4}},{t:this.shape_926,p:{x:372.8,y:430.375}},{t:this.shape_994,p:{x:379.1,y:430.4}},{t:this.shape_1028,p:{x:385.125,y:430.4}},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_981,p:{x:707.525,y:410.3}},{t:this.shape_1081,p:{x:715.175,y:410.3}},{t:this.shape_945,p:{x:725.525,y:410.3}},{t:this.shape_938,p:{x:733.175,y:410.3}},{t:this.shape_928,p:{x:740.825,y:410.3}},{t:this.shape_1043,p:{x:748.475,y:410.3}},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_934,p:{x:779.975,y:410.3}},{t:this.shape_1023,p:{x:677.975,y:289.2}},{t:this.shape_1079,p:{x:685.325,y:289.25}},{t:this.shape_786,p:{x:692.35,y:289.2}},{t:this.shape_1021,p:{x:699.725,y:289.2}},{t:this.shape_814,p:{x:709.225,y:289.175}},{t:this.shape_1020,p:{x:717.825,y:289.2}},{t:this.shape_1060,p:{x:725.925,y:289.2}},{t:this.shape_1077,p:{x:734.175,y:289.2}},{t:this.shape_1101},{t:this.shape_1058,p:{x:752.025,y:289.2}},{t:this.shape_1076,p:{x:760.275,y:289.2}},{t:this.shape_1007,p:{x:767.775,y:289.2}},{t:this.shape_1011,p:{x:774.975,y:289.2}},{t:this.shape_816,p:{x:782.775,y:289.2}},{t:this.shape_1017,p:{x:790.275,y:289.2}},{t:this.shape_1100},{t:this.shape_810,p:{x:303.475,y:483.05}},{t:this.shape_1066,p:{x:311.125,y:483.05}},{t:this.shape_862,p:{x:318.325,y:483.05}},{t:this.shape_861,p:{x:326.125,y:483.05}},{t:this.shape_815,p:{x:331.8,y:483.05}},{t:this.shape_798,p:{x:338.125,y:483.025}},{t:this.shape_859,p:{x:346.875,y:483.05}},{t:this.shape_998,p:{x:357.525,y:483.05}},{t:this.shape_778,p:{x:365.175,y:483.05}},{t:this.shape_783,p:{x:372.825,y:483.05}},{t:this.shape_1026,p:{x:380.925,y:483.05}},{t:this.shape_808,p:{x:391.55,y:483.025}},{t:this.shape_809,p:{x:398.925,y:483.05}},{t:this.shape_961,p:{x:407.025,y:483.05}},{t:this.shape_807,p:{x:415.125,y:483.05}},{t:this.shape_791,p:{x:300.525,y:371.95}},{t:this.shape_803,p:{x:308.625,y:371.95}},{t:this.shape_989,p:{x:316.275,y:371.95}},{t:this.shape_1099},{t:this.shape_952,p:{x:329.75,y:371.95}},{t:this.shape_784,p:{x:336.075,y:371.925}},{t:this.shape_942,p:{x:344.675,y:371.95}},{t:this.shape_929,p:{x:352.325,y:371.95}},{t:this.shape_794,p:{x:359.975,y:371.95}},{t:this.shape_987,p:{x:367.625,y:371.95}},{t:this.shape_919,p:{x:373,y:371.95}},{t:this.shape_1037,p:{x:378.7,y:371.925}},{t:this.shape_950,p:{x:386.075,y:372}},{t:this.shape_940,p:{x:393.1,y:371.95}},{t:this.shape_789,p:{x:399.575,y:371.95}},{t:this.shape_1098},{t:this.shape_939,p:{x:300.525,y:385.55}},{t:this.shape_916,p:{x:308.625,y:385.55}},{t:this.shape_951,p:{x:315.65,y:385.55}},{t:this.shape_930,p:{x:322.125,y:385.55}},{t:this.shape_921,p:{x:329.775,y:385.55}},{t:this.shape_1097},{t:this.shape_914,p:{x:344.625,y:385.55}},{t:this.shape_924,p:{x:352.725,y:385.55}},{t:this.shape_796,p:{x:363.525,y:385.55}},{t:this.shape_913,p:{x:371.625,y:385.55}},{t:this.shape_946,p:{x:378.65,y:385.55}},{t:this.shape_790,p:{x:385.125,y:385.55}},{t:this.shape_917,p:{x:392.775,y:385.55}},{t:this.shape_1096},{t:this.shape_820,p:{x:653.925,y:190.175}},{t:this.shape_817,p:{x:661.225,y:190.2}},{t:this.shape_785,p:{x:669.775,y:190.2}},{t:this.shape_1031,p:{x:676.55,y:190.2}},{t:this.shape_1095},{t:this.shape_819,p:{x:687.825,y:190.25}},{t:this.shape_776,p:{x:695.925,y:190.2}},{t:this.shape_805,p:{x:704.025,y:190.2}},{t:this.shape_813,p:{x:712.275,y:190.2}},{t:this.shape_959,p:{x:722.925,y:190.2}},{t:this.shape_782,p:{x:731.025,y:190.2}},{t:this.shape_1030,p:{x:738.05,y:190.2}},{t:this.shape_812,p:{x:744.525,y:190.2}},{t:this.shape_811,p:{x:752.175,y:190.2}},{t:this.shape_958,p:{x:652.8,y:203.925}},{t:this.shape_775,p:{x:658.425,y:203.775}},{t:this.shape_806,p:{x:668.875,y:203.8}},{t:this.shape_1019,p:{x:676.975,y:203.8}},{t:this.shape_1094},{t:this.shape_779,p:{x:690.475,y:203.8}},{t:this.shape_1015,p:{x:698.125,y:203.8}},{t:this.shape_956,p:{x:703.85,y:203.925}},{t:this.shape_889,p:{x:676.625,y:332.6}},{t:this.shape_1093},{t:this.shape_894,p:{x:695.525,y:332.6}},{t:this.shape_887,p:{x:703.625,y:332.6}},{t:this.shape_1092},{t:this.shape_888,p:{x:717.125,y:332.6}},{t:this.shape_893,p:{x:724.775,y:332.6}}]},313).to({state:[{t:this.shape_1125},{t:this.shape_1126},{t:this.shape_1072,p:{x:657.225,y:173.8}},{t:this.shape_1025,p:{x:665.775,y:173.775}},{t:this.shape_1065,p:{x:674.525,y:173.8}},{t:this.shape_1123},{t:this.shape_1071,p:{x:689.675,y:173.8}},{t:this.shape_955,p:{x:290.125,y:154.025}},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_801,p:{x:312.725,y:154.05}},{t:this.shape_1120},{t:this.shape_932,p:{x:326.2,y:154.05}},{t:this.shape_824,p:{x:332.525,y:154.025}},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_795,p:{x:359.575,y:154.05}},{t:this.shape_949,p:{x:367.225,y:154.05}},{t:this.shape_825,p:{x:375.325,y:154.05}},{t:this.shape_1061,p:{x:385.95,y:154.025}},{t:this.shape_821,p:{x:393.325,y:154.05}},{t:this.shape_947,p:{x:401.425,y:154.05}},{t:this.shape_793,p:{x:409.525,y:154.05}},{t:this.shape_1012,p:{x:299.9,y:328.45}},{t:this.shape_1117},{t:this.shape_1010,p:{x:313.125,y:328.45}},{t:this.shape_1054,p:{x:320.325,y:328.45}},{t:this.shape_1049,p:{x:330.675,y:328.45}},{t:this.shape_1009,p:{x:338.325,y:328.45}},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1002,p:{x:359.9,y:328.45}},{t:this.shape_1045,p:{x:365.775,y:328.45}},{t:this.shape_1003,p:{x:678.275,y:305.65}},{t:this.shape_1053,p:{x:683.95,y:305.65}},{t:this.shape_1114},{t:this.shape_1000,p:{x:697.925,y:305.65}},{t:this.shape_1113},{t:this.shape_1069,p:{x:715.925,y:305.65}},{t:this.shape_1024,p:{x:723.575,y:305.65}},{t:this.shape_781,p:{x:731.375,y:305.65}},{t:this.shape_777,p:{x:737.05,y:305.65}},{t:this.shape_1062,p:{x:742.925,y:305.65}},{t:this.shape_1004,p:{x:299.9,y:430.4}},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_999,p:{x:320.325,y:430.4}},{t:this.shape_1008,p:{x:330.675,y:430.4}},{t:this.shape_1110},{t:this.shape_1067,p:{x:345.975,y:430.4}},{t:this.shape_996,p:{x:353.625,y:430.4}},{t:this.shape_1109},{t:this.shape_860,p:{x:367.1,y:430.4}},{t:this.shape_926,p:{x:372.8,y:430.375}},{t:this.shape_994,p:{x:379.1,y:430.4}},{t:this.shape_1028,p:{x:385.125,y:430.4}},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_981,p:{x:707.525,y:410.3}},{t:this.shape_1081,p:{x:715.175,y:410.3}},{t:this.shape_945,p:{x:725.525,y:410.3}},{t:this.shape_938,p:{x:733.175,y:410.3}},{t:this.shape_928,p:{x:740.825,y:410.3}},{t:this.shape_1043,p:{x:748.475,y:410.3}},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_934,p:{x:779.975,y:410.3}},{t:this.shape_1023,p:{x:677.975,y:289.2}},{t:this.shape_1079,p:{x:685.325,y:289.25}},{t:this.shape_786,p:{x:692.35,y:289.2}},{t:this.shape_1021,p:{x:699.725,y:289.2}},{t:this.shape_814,p:{x:709.225,y:289.175}},{t:this.shape_1020,p:{x:717.825,y:289.2}},{t:this.shape_1060,p:{x:725.925,y:289.2}},{t:this.shape_1077,p:{x:734.175,y:289.2}},{t:this.shape_1101},{t:this.shape_1058,p:{x:752.025,y:289.2}},{t:this.shape_1076,p:{x:760.275,y:289.2}},{t:this.shape_1007,p:{x:767.775,y:289.2}},{t:this.shape_1011,p:{x:774.975,y:289.2}},{t:this.shape_816,p:{x:782.775,y:289.2}},{t:this.shape_1017,p:{x:790.275,y:289.2}},{t:this.shape_1100},{t:this.shape_810,p:{x:303.475,y:483.05}},{t:this.shape_1066,p:{x:311.125,y:483.05}},{t:this.shape_862,p:{x:318.325,y:483.05}},{t:this.shape_861,p:{x:326.125,y:483.05}},{t:this.shape_815,p:{x:331.8,y:483.05}},{t:this.shape_798,p:{x:338.125,y:483.025}},{t:this.shape_859,p:{x:346.875,y:483.05}},{t:this.shape_998,p:{x:357.525,y:483.05}},{t:this.shape_778,p:{x:365.175,y:483.05}},{t:this.shape_783,p:{x:372.825,y:483.05}},{t:this.shape_1026,p:{x:380.925,y:483.05}},{t:this.shape_808,p:{x:391.55,y:483.025}},{t:this.shape_809,p:{x:398.925,y:483.05}},{t:this.shape_961,p:{x:407.025,y:483.05}},{t:this.shape_807,p:{x:415.125,y:483.05}},{t:this.shape_791,p:{x:300.525,y:371.95}},{t:this.shape_803,p:{x:308.625,y:371.95}},{t:this.shape_989,p:{x:316.275,y:371.95}},{t:this.shape_1099},{t:this.shape_952,p:{x:329.75,y:371.95}},{t:this.shape_784,p:{x:336.075,y:371.925}},{t:this.shape_942,p:{x:344.675,y:371.95}},{t:this.shape_929,p:{x:352.325,y:371.95}},{t:this.shape_794,p:{x:359.975,y:371.95}},{t:this.shape_987,p:{x:367.625,y:371.95}},{t:this.shape_919,p:{x:373,y:371.95}},{t:this.shape_1037,p:{x:378.7,y:371.925}},{t:this.shape_950,p:{x:386.075,y:372}},{t:this.shape_940,p:{x:393.1,y:371.95}},{t:this.shape_789,p:{x:399.575,y:371.95}},{t:this.shape_1098},{t:this.shape_939,p:{x:300.525,y:385.55}},{t:this.shape_916,p:{x:308.625,y:385.55}},{t:this.shape_951,p:{x:315.65,y:385.55}},{t:this.shape_930,p:{x:322.125,y:385.55}},{t:this.shape_921,p:{x:329.775,y:385.55}},{t:this.shape_1097},{t:this.shape_914,p:{x:344.625,y:385.55}},{t:this.shape_924,p:{x:352.725,y:385.55}},{t:this.shape_796,p:{x:363.525,y:385.55}},{t:this.shape_913,p:{x:371.625,y:385.55}},{t:this.shape_946,p:{x:378.65,y:385.55}},{t:this.shape_790,p:{x:385.125,y:385.55}},{t:this.shape_917,p:{x:392.775,y:385.55}},{t:this.shape_1096},{t:this.shape_820,p:{x:653.925,y:190.175}},{t:this.shape_817,p:{x:661.225,y:190.2}},{t:this.shape_785,p:{x:669.775,y:190.2}},{t:this.shape_1031,p:{x:676.55,y:190.2}},{t:this.shape_1095},{t:this.shape_819,p:{x:687.825,y:190.25}},{t:this.shape_776,p:{x:695.925,y:190.2}},{t:this.shape_805,p:{x:704.025,y:190.2}},{t:this.shape_813,p:{x:712.275,y:190.2}},{t:this.shape_959,p:{x:722.925,y:190.2}},{t:this.shape_782,p:{x:731.025,y:190.2}},{t:this.shape_1030,p:{x:738.05,y:190.2}},{t:this.shape_812,p:{x:744.525,y:190.2}},{t:this.shape_811,p:{x:752.175,y:190.2}},{t:this.shape_958,p:{x:652.8,y:203.925}},{t:this.shape_775,p:{x:658.425,y:203.775}},{t:this.shape_806,p:{x:668.875,y:203.8}},{t:this.shape_1019,p:{x:676.975,y:203.8}},{t:this.shape_1094},{t:this.shape_779,p:{x:690.475,y:203.8}},{t:this.shape_1015,p:{x:698.125,y:203.8}},{t:this.shape_956,p:{x:703.85,y:203.925}},{t:this.shape_889,p:{x:676.625,y:332.6}},{t:this.shape_1093},{t:this.shape_894,p:{x:695.525,y:332.6}},{t:this.shape_887,p:{x:703.625,y:332.6}},{t:this.shape_1092},{t:this.shape_888,p:{x:717.125,y:332.6}},{t:this.shape_893,p:{x:724.775,y:332.6}}]},8).wait(1));

	// Content
	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#5C8EC7").s().p("AADBAIgbg6QgDgGAHgEQAGgDAEAGIAEAIQADgGAEgDIAEgnIAHgYQABgEAFABQAEAAABAFIACAYIgGBjQAAAGgGACIgEABQgEAAgCgFg");
	this.shape_1127.setTransform(464.7445,464.4105,1.4913,1.4913);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#5C8EC7").s().p("AAbASQgTgQgZgDQgagEgYAHQgFABgBgEQgBgFAFgCQAbgLAcAEQAaADAVAOIAfgUQAFgDAEAGQADAGgFAEIgiAYIgEABQgDAAgDgCg");
	this.shape_1128.setTransform(443.0808,198.1955,1.4913,1.4913);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#0D110E").s().p("AAFBmQgPgUgEgJQgHgPgDgTQgCgOADgVQAEgdANgnIAWhCIAKAEIgaBAQgNAngFAbQgDAXABAMQABAPAHASQAEAJAOAUQAOASAEAMQgEgMgPgRg");
	this.shape_1129.setTransform(605.9431,452.2928,1.4913,1.4913);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#0D110E").s().p("AiaBUQAEgNAMgGIAXgMIAXgMQARgJAZgTQAagSALgQIAGgLQACgEAAgIIADgNQACgIAFgEQAGgGATgCQAOgCAKgFIAYgKQAOgGAMgCIAmgHIAHAAQAHACACACIgHAHQgCgCgHABIglAGQgLABgNAFIgYAKQgPAGgLABQgRACgFAEQgEADgDAGIgCAMQAAAJgCAEIgHAMQgLAPgbATQgXAQgVAMQgHAEgQAHIgYALQgLAGgFANQgFAOADALQgEgLAGgPg");
	this.shape_1130.setTransform(586.826,448.3223,1.4913,1.4913);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#0D110E").s().p("AihDfQAMgKAZgNQAygcAUgWQAJgLADgHQADgGAEgOIAHgUQAHgMAHgGQAOgMAagEIArgDQAZgCAQgHQAUgJAJgUQAKgTgEgUQgIgcgCgOQgCgNABgKIABgWQADgdADgOIAKgqQAGgZAJgRIAJAFQgJAPgGAYIgKAqQgEATgDAXQgDAfACALQACAOAIAdQAEAXgLAUQgLAVgVAKQgQAHgbACIgrADQgYACgPAMQgMAKgIAaQgDAMgFAJQgFAKgIAHQgNAOgUAOIgmAWQgYANgMAKQgJAHgFAGQAFgHAIgHg");
	this.shape_1131.setTransform(590.4375,423.1568,1.4913,1.4913);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#0D110E").s().p("AA6BnIgLgQQgFgHgKgHIgQgLQgLgHgFgFQgKgKgKgZQgGgPgLgUIgTgjQgKgWgCgRQgCgNgCgGIgEgGQgDgCgCABIgDgKQAIgCAGAGQAFAEABAGQADAFACAQQAAAQAKAVIASAjQAKAVAGAPQAIAYAJAKQAGAGAKAGIAQAMQAJAHAFAHQAGAIAFAKQAMAXAOAFQgOgFgNgXg");
	this.shape_1132.setTransform(652.2327,412.9799,1.4913,1.4913);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#0D110E").s().p("ABsCSIgXgNQgKgGgJgMIgRgUQgKgKgKgGQgRgKgFgGQgIgHgIgOIgLgYIgagtQgHgOgCgMIgEgaQgBgOgGgKQgFgKgJgLQgHgJgLgKQgFgDgFgCQgFgDgCADIgGgIQAEgEAFAAQAEAAAEADQAGACAGAFQAJAIAKANQAJALAFALQAGAMACAPIACAaQACAKAGAPIAZAtIALAYQAGANAIAIQAGAGAPAJQAMAHAIALIARAUQAKANAJAFIAWAOQAJAGAFAIQgFgIgJgGg");
	this.shape_1133.setTransform(655.439,411.618,1.4913,1.4913);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#0D110E").p("AgqgUQAEAKAPAFQAYAGABABQAHADAOAGQARAHADAA");
	this.shape_1134.setTransform(627.996,390.2604,1.4935,1.4935);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f().s("#0D110E").p("AgUhWQgNAQAJAhQAIAdAQARQAPAQAGAWQAAABAIAs");
	this.shape_1135.setTransform(615.3693,347.7538,1.4935,1.4935);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#0D110E").p("AgzAdQgGgMAcgTQAbgTAOgBQADgEARgBQAUgBABAA");
	this.shape_1136.setTransform(629.0755,309.3418,1.4935,1.4935);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f().s("#0D110E").p("AiKA+QgFgYAlghQAUgRAdgPQAbgOAbgIQBbgZA2Ac");
	this.shape_1137.setTransform(641.3821,317.7869,1.4935,1.4935);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#0D110E").p("AjIgjQAJgHAaACQAOAAAXACQA+ABAfADQAmACAPAEQAKACASAMQARALAKACQAoAHALADQAIADAMAHQAQAHAeAPQAEACACgCQADgDACgB");
	this.shape_1138.setTransform(651.2565,310.7129,1.4935,1.4935);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#0D110E").s().p("ACwGKQgFgGgHgDIgPgFQgOgEgMgOQgNgPgKgGQgNgIgPgFQgQgHgPAAQgVgBgJgHQgMgIgLgNQgSgVgKgjIgIgfQgCgKgIgTQgLgWgYgeQgOgQgIgGIgNgJQgHgGgFgFQgHgHgCgHQgDgGACgKQACgMAIgTIAMgcQADgKADgUQAGg1gehEIgNgcIgOgdQgHgRgBgOQgBgLABgVQAEgqgBgVIAAgfIgDgXIgBgFIAKgCIADAVIABAoQAAANgBATIgDAfQgBAVABAKQAAAMAHARIANAdIANAcQAeBIgHA1QgCANgFASQgCAIgKAVQgIATgCAKQgBAKACAEQABAFAHAHQAEAEAHAGIANAJQAKAIAMAPQAaAhAJAUQAGANAFARIAHAfQAJAhASAWQAJALANAKQAIAGAVACQAQABAPAGQAPAGANAIQAKAGAOAQQALANAOAFIAPAFQAIADAFAGIAJAMIgKgMgAi2mSQgHAAAJgCQAIgCgBACIABABIAAABIgKABg");
	this.shape_1139.setTransform(646.7659,363.737,1.4913,1.4913);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#0D110E").s().p("ACiCfIgEgJQgDgHgDgDQgEgFgEgCIgKgEIgKgGIgRgOQgNgLgbgEQgNgCgJABQgHAAgEgCIgIgFIgBACIgBAAQgQgCgVgRIgPgNQgHgGgIgKQgKgPgIgXIgMgnIgNgnQgDgJgHgIQgEgFgKgHQgYgOgLgIQgVgPgFgVIAKgCQAEATARALQAKAJAYAOIARAPQAGAIAEALQAEAIAJAfIALAoQAGAVALAPQAHALAVASQASARAPACIAAAAIABAAIgBAAIABgCIgBgGIADAFQAGAGANABIAXACQAbAGANAKIARAPIAJAGIAKAEQAEACAFAGIAKATQAEAHAEAAQgFAAgEgHg");
	this.shape_1140.setTransform(645.6338,401.3281,1.4913,1.4913);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#0D110E").s().p("AhJCJIASgXIAKgKIANgIQAKgEARgFIAagHQAbgHAXgSQAXgSAFgcQAEgXgIgfQgFgUgOghIgFgNQgCgEgFgHIgHgOQgDgKAGgIIAIAGQgFAFAJAQIAHANIAGANQAOAkAEASQAHAggFAaQgGAdgZATQgZATgbAGIgbAGQgQAEgKAFQgIADgEAEIgKAKIgTAVQgNALgVAHQATgHAOgLg");
	this.shape_1141.setTransform(600.4291,480.3663,1.4913,1.4913);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#0D110E").s().p("ABFBnIgQgpQgRgqADgrQAAgbgNgLIgRgNIgRgLQgagNgMgIQgVgMgMgUIAJgGQAJARATAOQAMAHAaAPIARAMQALAHAHAHQAIAHADAMQACAIAAAPQgDAsAOAoIAQApQAGAVADAVQgFgZgGgQg");
	this.shape_1142.setTransform(620.692,478.2039,1.4913,1.4913);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#0D110E").s().p("ABDF4QgEgSgGgIIgIgLQgEgGgBgIQgBgKAEgSQAFgUAAgHQACgcgOgaQgHgNgJgJQgIgJgOgIIgYgMQgPgIgJgIQgMgLgFgMQgGgOACgPQABgNAGgPIAMgZQAJgWAKgeIAHgbQAFgSABgJQADgTgHgkQgGgbAHgeIANg3QAIghgCgVQAAgOgEgNIgJgbQgCgJAAgFIAAgdIABgIIACgFQADgEAEABIAAAKIABgBIAAACIgCAGIAAAbIACANQACAJAGASQAEAQABAMQABAXgJAiIgNA3QgGAbAFAbQAGAlgCAUIgHAcIgIAbQgKAggKAUIgMAZQgGAQgBALQgBAOAFAMQADAKAMAMQAJAIAOAIIAYANQANAHAKAKQAKALAGAMQAOAbgCAcQAAAIgFAUQgFARACAKQABAIADAFIAIAMQAGAIADASIABAWIgBgWg");
	this.shape_1143.setTransform(622.0847,434.8779,1.4913,1.4913);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#0D110E").s().p("AhXIkQAQgWAPgGQAUgJATgFIAUgDQAMgCAIgEQALgEAGgGQAHgGADgMQACgIgDgMIgFgUIgDgUIgDgWQgEgUgIgTQgIgQgFgYQgHgoANgrQAIgeAXgvQAYgvADgfQACgPgGgaQgDgUgBgUQgBgYABgTQABgLAEgKIAJgTQAFgLAAgIQAAgJgBgLQgCgNgIgbQgNgqACgpQAAgcAXg1QAVgygFgdQgCgRgHgXIgOgmQgEgDgDgFIgCgGIAAgGQAAgEgGgOQgFgLgBgKIABgNIABgEIAAgCIADADIACABIABgBIgEgJIACAAIACAAQADABABACIAAAEIgBAIIgBAJQAAAIAFALQAGAPAAAGQAAAHABABQABACAGAFIAPAoQAGAUADAWIABAVIgEAWQgEAQgLAYQgKAWgGAQQgFASgBAWQgCAoAMApQAIAbABAOQACAMgBAKQAAAJgFAMIgKATQgDAHgBALQgBAYAAASQABAYAEAQQAFAdgCANQgEAhgYAuQgXAtgJAgQgMAqAGAnQAEAUAJAUQAJAUADAUIACAVIADAVIAFAUQADAMgCAJQgDALgIAHQgHAHgLAEQgIADgMACIgUAEQg0AMgRAcQgOAVgOALQAMgKAPgWg");
	this.shape_1144.setTransform(604.0393,414.9734,1.4913,1.4913);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#0D110E").s().p("AgTBUIgBgWQAAgOAEgJIAHgJIABgFIgBgFIgCgWQAAgNACgKQABgHAIgOIAMgTQAIgOAAgGQABAGgHAPIgLAUQgHAMgBAIQgCALABALIACAbIgBAGQgCAFgFAFQgEAIgBANIgBAWIABgBIAAAAIgCADgAgRBUIAAgBIAAABIAAAAg");
	this.shape_1145.setTransform(580.4733,367.2522,1.4913,1.4913);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#0D110E").s().p("AhwCkIAEgeQABgIgCgVQgCgTACgKQADgNAIgPQAHgPAEgMQANgkAJgTQAPgcAZgQQANgJAMgFIAbgMQAYgLAZgVQAPgLAGgIQAEgGACgFIABgIQAAgDADgDIAFgCIADAKIgCAAIAAABIgBAHQgCAIgGAGQgHAJgQAMQgbAVgXALIgcALQgMAFgNAIQgaARgNAZQgJARgNAkQgFAOgHANQgJASgCAJQgDALACASQACAVgCAJIgEAdIgDATIACgTg");
	this.shape_1146.setTransform(597.5957,355.2473,1.4913,1.4913);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#0D110E").s().p("AiiDvQAJgEALgCQAQgEAEgCQAFgDAJgNIAHgIIAJgGQAEgCADgGIAEgKQAGgLAMgCQARgCADgCQAVgKAGgVQAFgcAGgOQAFgMAHgGQAIgGAMgCIAWgEQAMgDAIgDQAQgGATgRQAPgNAMgSQAZgmAHgnQAEgXgDgTQgEgTgJgUIgMgYIgVgfIgGgKIgCgGQAAgEABgEIABgCIACgBQADgBADACIACAEIAAAEIgCgBIAAAAIgBAAIgGgBIABACQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIACgCIABAAIABAFIAFAJIAMASIALATIAKATQAKAYADASQADATgEAZQgIAngbAoQgPAUgNAMQgTARgSAHQgJADgMACIgWAEQgMACgHAGQgIAGgDAKQgFANgGAcQgEALgHAIQgIAIgKAFQgEACgGABIgLABQgJACgHAKIgFAKQgDAGgEACIgJAGQgDACgEAGQgKANgEADQgFACgQADQgMADgIAEIgFACIgFABIAKgEg");
	this.shape_1147.setTransform(588.8367,329.3688,1.4913,1.4913);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#0D110E").s().p("AgGBzIgDgGIABgKIgBgBIgBgBQgBgCgDgBQgDgBgJAAIgDABIABgCQABgDgCgEIgEgGQgEgHgBgIQgBgSADgNQAFgdAVgaIARgYQAOgSADgHQAGgOAFgNIAEgPQABgFgCgCQgBgEgFAAQAEgBADAEIABAIQAAAHgDAIQgDAPgIAOQgDAJgNARIgRAYQgUAbgEAaQgDAMAAASQAAAFAEAIIAEAHQACADAAAEIALABQADAAACAEIABABIABACIgBADIAAAGIACAGIAGALg");
	this.shape_1148.setTransform(611.0359,266.6126,1.4913,1.4913);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#0D110E").s().p("ACrDkIgHgDIgvgcIgYgOIgVgSIgKgJIgKgKIgKgJQgFgGgEgBIgCgBIAAgEIACgCQgjgwgKg4QgEgTgHgHQgJgKgPgGIgcgJQgRgGgLgHQgLgGgNgMQgHgHgRgLQgjgYgMgOQgVgZgJgbQgGgQgBgOIAAgOQABgIAEgFQgDAFgBAIQgBAFABAJQABAOAGAQQAKAcAVAWQAOARAhAUQAMAHANAKQAKALANAHQARAKAnAMQAQAGAKALQAIAJAEATQALA7AmAwIABABIAAABIAAABIAEAEIAKAKIAKAJIAKAJIAUARIAYAOIAuAbQAIAGABgEIABgBIAAgBIgCgDIgLgIIgMgHIgDgDIADgDQAFgEAHAAQAEAAAGACQAGACANgBIATgDQAHgBAHABQgCgDgHgDQgGgDgNgCIgTgDQgHABgMAFIgUAHQgEABgHgBQgGAAgFgGIgOgOIgPgOIghgaQgMgMgMgWIgJgSQgEgIgEgMIgIgoQgGgZgGgMQgGgNgYgLIgTgIQgIgFgJgHIgQgNIgSgKQgngTgYghQgIgLgNgYQgJgSgCgMQADAMAIARQAMAXAKAMQAYAfAnAUIATAJIAQAMQAMAKAFABIASAJQAaAMAIANQAHAQAFAXIAJAnQACAKAFAJIAKASQAMAWALALIAgAZIAIAGIAIAIIANAPQAEADAEAAIAJAAIATgHQANgEAHgBQAFgBARADQAKACAKAEQAHADADADQAFAGABAFIAAAFIgFgBQgHgCgLABIgUACQgOABgGgBIgKgCIAFADIAMAIQAEAFAAADIAAADIgBACIgDAEQgCADgDAAIgEgBg");
	this.shape_1149.setTransform(540.5912,408.4863,1.4913,1.4913);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#0D110E").s().p("AA6A6QgFgBgQABQgOADgJgGQgFgFgKgNQgJgKgHgDQgSgIgDgCQgIgGgGgNIgHgVIgHgVQAHANALAcQAGALAGAFQAEADAQAGQAIACADADIAHAJQALANAEACQAIAGALgDIAQgBQgEgDgFAAIgLgBQgHgBgFgCQgIgEgIgMQgGgKgGgFQgNgJgEgEQgGgHgFgMQgFgKgJgeIAIAUIAJATQAFAJAHAIQADAEANAIQAFADAJAMQAJALAGADIATACQAIABAEAEQAEACADAHIAGAIg");
	this.shape_1150.setTransform(528.1949,383.5072,1.4913,1.4913);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f().s("#0D110E").p("AgWgRQAEAFAUALQARAIAEAP");
	this.shape_1151.setTransform(514.5308,369.7736,1.4935,1.4935);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#0D110E").p("AgcgKQALALARAEQALACAWAD");
	this.shape_1152.setTransform(493.2622,341.6872,1.4935,1.4935);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f().s("#0D110E").p("Ag0gQQAHgEADAFQABADADAHQAFAFAHACQAAAAANAFQA4AUAHgN");
	this.shape_1153.setTransform(490.9439,346.5423,1.4935,1.4935);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#0D110E").s().p("AB6CiIgkgmQgPgJgHgHQgFgDgCgJIgDgMQgDgQgLgEQgIAAgFgCIgMgHQgYgSgGgZQgCgFAAgHIgBgNQgBgKgOgJIgXgNQgKgHgGgOQgDgIgCgFQgEgFgGgEIgMgFIgKgIQgWgVACgbQgBAcAWATQAEAEAGAEIAMAFQAGADAEAGIAGANQAGANAJAHQAHAFAQAHQAGAEAFAEQAFAHABAHIABAMIACANQAHAYAWAQIALAHIANACQAIADAEAFQADAFACAIIADANQACAHAEAEQAGAFAQAKIARASQgEgGAAgHIAAgCIACAAIANgBQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIgBgDQgHgIgOgFQgQgFgIgHQgHgEgDgFQgDgFgCgJQgEgRgFgFQgFgHgQgHIgNgEQgHgDgEgFQgGgHgBgRQgCgUgCgGQgHgPgGgHQgDgFgGgEIgKgIQgGgGgIgRQgFgOgHgIQgEgEgHgEIgLgHQgKgFgHgOQgHgPAEgLQgEAMAIAOQAHANAKAFIALAHQAHADAEAFQAIAHAFAPQAIARAGAFIAKAHIAKAKQAHAKAFANQADAHABATQACARAGAGQADAEAHACIAMAFQAQAGAHAIQAEAFAGATQACAHADAFIAIAJQAHAFAQAGQAPAEAIAKIACADIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABQgDACgEABIgLACQABAGAHAHQAIALADAHIAEAMg");
	this.shape_1154.setTransform(538.9567,328.5533,1.4913,1.4913);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#0D110E").s().p("ADBKcIgJgCQgGgDgIgIIgNgLIgfgOQgNgHgQgLQgegXgMgXQgHgGgLgOQgKgNgLgHIgYgPIgZgQQgYgQgNgeQgEgLgFgRIgIgcQgIgbgbgSIgYgQQgSgMgIgCQgJgCgFAEQgEAEgBAJQAAAKAEATQADAQAFAMIACAEIgDgEQgEgMgEgQQgEgVAAgIQACgLAEgDQAFgEAJACQAJADARAKIAZAQQAcATAJAbIAIAcQAEARAFALQAMAcAYARIAZAPIAYAPQAKAFAMAPIAMANIABAAIABAAIABAAIABABIADAGIABABIgBAAIACACQAMAVAbAUQAOALAPAHIAfAPQAFADAIAIQAIAHAFADQAEACAEAAIABAAIgBgBQgDgGgHgHIgNgLQgFgFgIgFIgdgSQgPgLgMgLIgagXQgIgHgOgTQgOgSgJgHQgSgOghgfQgNgLgKgPQgGgIgDgIQgDgKACgHIABABIAAgDIgBACQgDgGgCgJIgDgPQgBgIgFgGIgIgNQgKgNgMgJQgJgIgSgIIgcgOQgRgJgLgJQgMgLgIgQQgEgKgFgVQgDgMgIgRQgIgSgIgJQgHgKgOgMIgZgVQgTgRgXggIgSgbQgMgRgFgLQgMgYgCgmIAAghQABgSAEgOQAJggAVgaQALgNAMgLQAKgJALgOQAdghAOgOQAagaAZgPIAdgPIAcgOQAMgHANgLQAQgNALgDIABgIQACgEADgCIAEgCIACADQAMASABAfQABAnACAJQACANATAcQATAZACAUQACARAAAgIACAXQADAMAFAKQAJASAcAAQAJgBAMgGQAIgDAOgIQAdgPATABQAOABAKAJQAHAHAJANQAIAPAOAcQANAWASAOQATAOAXADQAbAFATANQAHAGALALQALALAHACIACABIAEAAQAEABADADQAEAEAEAGIAEAFQgKgVgXgSQgUgPgngUIgggOQgTgJgMgJQgOgLgJgRIgHgQIgGgRIgIgPIgEgIIgCgIQgDgGgJgEQgJgDgHAAIgRgDQgKAAgHADIgPAGIgQAIQgMAGgFABQgKACgJgEQgHgDgGgKQgDgHgCgLQgCgMAAgXIgBgjQgEgqgSgVQgPgRgGgMQgDgIgBgKIAAgSQAEgjASgfQARgfAegVIAZgYIAagYQAqglAJgKQAYgXASggQAOgWADgJQACgFACgMIADgNIgDANQgCAMgCAFQgDAIgNAXQgRAegZAaQgKAMgpAkIgyAxQgdASgRAgQgRAegDAkIgBARQABAIADAIQAGAMAOAQQAUAWAEAsQABARAAASQABAbACAHQAEAXALAEQALAFAUgKIAPgIQAKgFAHgCQAJgDAJABIASACIARAEQAMAFADAHIADAJIADAHIAJAQIAMAgQAIAPAOALQAMAIASAJIAfAOQAsAXARANQAhAZAIAhIABAHIgGgDQgGgDgFgGIgGgKQgEgGgDgDIgEgCIgGgBQgHgCgOgNIgRgQQgSgNgZgEQgagDgUgQQgUgPgNgWQgOgdgIgOQgQgZgSgBQgQgBgbAOIgWAMQgNAHgMAAIgNgBQgJgCgDgCIgLgHIgIgKQgHgLgCgNQgCgIgBgQIgCgxQgCgSgRgXIgOgUQgHgMgCgMQgDgLgBgmQAAgUgGgOIAAADIgBADIgDAAQgKABgPANQgOAMgNAHIgdAPIgcAOQgUAMgdAbIgrAvQgLAOgLAKQgOANgHAKQgUAYgJAeQgGAWABAoQABAkAMAYQAFALALAQIASAaQAXAgARAQIAZAVQAPAMAIALQAHAKAJASQAIASADANIAJAeQAHAOALAKQAKAJAQAIIAdAOQATAKAJAHQAMAKAKAOIAJANQAFAHACAJIADAQQABAJAEAEIABACIgBACQgEALAMARQAIAMAOAOQAeAbAVARQAKAIAOASQAOATAIAHIAZAXQALALAPAKIAdASIAOAKIANAMIALAOIABADIAAAEQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_1155.setTransform(508.3856,388.5589,1.4913,1.4913);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#0D110E").s().p("AB4DDIgBggQgBgjgNgbQgNgagWgaQgRgTgcgaQglgggKgKQgbgbgOgXQgTgggDgeQgCgPABgSIACgUIgJARIgNAbQgDAJgMASIgGAMQgEAJACAHQgCgGADgKQACgHAEgGQAKgSADgJQAOgkALgUIAEgIIACAJQABAJgBAYQgBAPACAQQAEAdASAdQANAWAbAbQAPAOAfAcQA7A0AVAxQANAegBAiIgBAfQACAWAHAJQgIgJgDgVg");
	this.shape_1156.setTransform(458.3552,410.3504,1.4913,1.4913);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#0D110E").s().p("AgkBBQABgGgCgOIgCgWQAAgXAMgRQAKgQAWgKIAUgJQAKgGAGgGQAHgFACgMIACgVQABgMADgJQAEgLAIgGQgIAHgDAKQgDAIAAANIgBAVQAAAGgDAFQgCAFgEAEQgGAHgLAGIgUAJQgUAJgKAQQgLAPAAAWIABAVQACAOgBAHQgDAsggAgQAeghABgrg");
	this.shape_1157.setTransform(438.0839,306.2212,1.4913,1.4913);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#0D110E").s().p("AASBSIgPgIQgOgKgJgNQgFgJgCgHIgDgQQgDgKgDgEQgEgFgHgFQgKgHgCgEQgFgIgBgIQgDgSAIgPQAKgSAQgBQgQACgHASQgHAPADAQQAAAHAFAHQADAGAJAFQAIAFAEAFQAFAHACAJIADAQQACAIAEAGQAHALAPAMQAHAFAGADQAHAEAIgBIARgBQAJgBAHADQgHgCgJABIgRADIgDAAQgHAAgGgDg");
	this.shape_1158.setTransform(505.2592,273.504,1.4913,1.4913);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#0D110E").s().p("AhQBKQgJgFgDgKQgCgIABgKQgBAKADAIQADAJAJADQANAGAWgFQAlgKAcgTQAggZANgeQADgGACgLIAEgSQADgKAEgHQAEgKAJgCQgJADgDAJIgGASIgDASQgBALgDAHQgFAOgOARQgOAQgNAKQgNAJgTAIQgXAJgMACQgKACgIAAQgLAAgIgDg");
	this.shape_1159.setTransform(501.7199,306.1413,1.4913,1.4913);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#0D110E").s().p("AAWBsQgCgKgCgFIgJgOIgJgOIgSgcQgHgMABgWQACgOAFgSIALgfQAGgQgDgQQgBgGgEgKIgFgQIAGAQQAFAJABAGQADAPgEATQgCALgJAVQgEAQgCAPQgBAUAGALQACAGAGAIIAJAOIAIAOIAJAPQACAGABAKIACARQgCgFgBgMg");
	this.shape_1160.setTransform(461.077,316.5857,1.4913,1.4913);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#0D110E").s().p("AAWBGQgDgEgCgGQgBgFAAgRIADgWIAAgLIgCgIQgEgIgJgJIgPgPQgLgJgEgIQgGgLADgKQgBALAGAJQAFAHAKAIIAQAPQAJAIAFAJQADAGAAAFIgEAhQgCANACAJQABAMAKACQgGgBgDgDg");
	this.shape_1161.setTransform(637.825,278.0545,1.4913,1.4913);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#0D110E").s().p("AgTDRIgagEIgYgGQg5gOgkgdQgTgQgOgYQgNgWgHgZQgHgYgBgbQgBgbAFgXQADgKAHgOIAMgWQAGgMACgLIAIgYQALgdAKgRQARgcAQgJQgeAZgUA8QgZBNgJAQQgKAyAOAvQAIAYAMAUQAPAYARANQAgAbA4APIAYAGQAQAEAJAAQAUACAbgHIAwgPQAQgEAKAAQAJABAQAHIAXAJIAYAHQAdAHAUgFQgVAGgdgGIgwgOQgQgGgHAAQgKAAgOAEIgYAIIgYAIQgYAHgTAAIgHAAg");
	this.shape_1162.setTransform(625.7509,268.5466,1.4913,1.4913);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#0D110E").s().p("Ak6ExQARglALgPQAGgHARgNIAXgRQAHgFADgFIAGgOQAEgHAHgEIALgJQAJgHAJgPIAQgZQAMgRAKgGIAbgLIAzgeQAkgQAOgOQAOgNAFgIIAIgKQACgDACgKQABgFAFgDIAIgFQADgBAFAAIAGgCIAZgNQAkgSAQgLQAcgUAMgUIAOgZQAJgRAKgIQAGgEAJgEIANgFQAFgBAHgFIAMgJQAagSAJgaIAIgcQAEgTAEgKIACgDIACACQAOAKAHgDQAIgDAGgRIAFgaQADgOAEgLQgCAGgEAUIgEAZIgFANQgDAHgGAEQgGACgIgDIgKgFIgGAaIgIAdQgEAPgKAMQgGAIgQAMIgMAJQgJAHgEABIgNAGQgJADgEADQgJAJgHAOIgPAaQgMAWgeAVQgMAHgoAWIgaAOIgJADIgGAAIgEADIgDAEIgCAHQgCAFgBACQgFAHgEAGQgJAKgMALQgQAOgjASIgnAUQgIAGgFACQgJAFgSAHQgGADgNAQIgQAZQgLAQgJAIIgMAIQgHAFgCAFIgHANQgDAGgIAFIgYARQgOAKgJAJQgLAOgSAkQgSAigPAPQAOgPARgjg");
	this.shape_1163.setTransform(489.496,327.2857,1.4913,1.4913);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#0D110E").p("ACcibQgYAGgfgDQgVgBgigHQgJgCgSgHQgRgGgKgCQgNgCgHgCQgMgCgIgDQgLgEgDAAQgFAAgIAGQgkAYgFAbQgEAXAJASQAIAPAVAPQAJAIAPAHQAIAFARAIQAGACARAMQAIAEAGAEQAFADAFACQgBgEgDgDQgDABgDABQgIAEgMAIQgYASgBABQgHAEgTAOQgPAMgKAFQgbANgFADQgTALgHAMQgJAQAIAdQAHAYANARQALAMALAAQAJAAAPgJQAIgEAWgGQATgGAKgGQABgDAEgFQAFgFAEgB");
	this.shape_1164.setTransform(425.0985,282.945,1.4935,1.4935);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#0D110E").s().p("AjnB1QAOgDANgQIATgcIATgcQAJgLAPgOQAtgnBGgiIA9gcQAkgPAdgGQAogJAcgBQATgBAPADQAUAEALAKQgMgJgTgCQgNgCgVACQgeADgkAJQgpALhSAoQhDAegwAoIgYAXQgFAFgPAWQgNATgIAIQgOAPgPACg");
	this.shape_1165.setTransform(471.1159,261.9486,1.4913,1.4913);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#0D110E").p("AhihAQANgEAVgBIAjgBQALAAAVgCQASgBAOABQAXACALADQAVAFAFAOQAFAOgCAXQgBANgEAZQgDATgCAIQgGAPgMADQgHABgMgCQgPgDgFAAQgVABgMAF");
	this.shape_1166.setTransform(664.7403,272.0942,1.4935,1.4935);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f().s("#0D110E").p("AhigYQAJgIARgGQAKgEATgGQAPgFAngUQASgKALgCQARgDAJANQAKAQAJAVQAKAWACAQQACASgBAHQgCAKgMAJQgYATgWALQgBAAgQAGQgJADgFAF");
	this.shape_1167.setTransform(647.9383,244.8586,1.4935,1.4935);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#0D110E").s().p("AgFAqIgBgoQgBggACgxIAJABQgEAmgBAqIgCAoQACAcAJALQgKgLgDgcg");
	this.shape_1168.setTransform(589.8383,124.9925,1.4913,1.4913);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#0D110E").s().p("AADBHIgFgKQgEgJgDgLQgDgLgCgKIAAgWQACgcAEgPQACgJAGgLQAGgNAJAAQgIADgEAMQgDAJgBAMQgCARgBAYIAAAUQAAAHADANIADAVQADAOAEAFQgDgCgDgGg");
	this.shape_1169.setTransform(663.4919,194.6357,1.4913,1.4913);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#0D110E").s().p("AkVDwQABgGACgHQAEgKAHgPIAbgwIA1heIAjhGQABgGgBgUIAAgPIADgNQADgOAEgNQAKgbAQgWQASgYAZgMQAbgNAbAAQAaAAAbAMQAeALAVABQALABAPgDQAMgCAJgLIAJgKIAhgZQAYgQAYgKQAMgFANgDQAQgEALADQgLgCgPAEQgPAFgKAFQgWAKgYARIgWARQgKAIgIAKQgHAIgEACQgGAFgHABQgOAEgOgBQgZgBgdgLQgagLgYAAQgaABgYAMQgWAKgRAXQgPATgKAbIgHAaIgDANIAAAMIABAOIgBAPIgGAMIgFAMIhuC7IgMAYIgEANQgBAJADAEQgEgEABgJg");
	this.shape_1170.setTransform(574.7081,221.6994,1.4913,1.4913);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#0D110E").s().p("AECCPQgJgIgKgDQgHgDgNgCIgWgEQgbgGgQgEQgpgKgrgRQgOgCgHgCQgJgDgKgJIgfgfQgSgTgOgJQgNgHgdgDQgfgEgMgGQgIgFgJgKIgOgSQgLgPgTgOQgWgQgOgIIgpgSQgLgFgIgJIgGgKIgEgGIAAABIABAAIABAAIADgCIgJgFQADgDACAAIACAAIABABIAFAEIADAFIAGAIQAHAIAJAFIAnASQANAHAYASQAWARAKAPIANARQAIAJAIAFQANAHAbADQAgAFALAGQARAMAQARIAfAfQAIAJAJADIAWAFQAuASAlAJIArALIAVAEQANADAIADQAJADAJAJQAMAJAHgBIANgBIgNACIgBABQgIAAgKgKg");
	this.shape_1171.setTransform(549.744,266.6716,1.4913,1.4913);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#0D110E").s().p("AhLANIgSgGIgSgCIgTgCQgLgBgIAEQAHgFAMgBIAcABIAKAAQAIABALAEQAXAIANgDQAPgDAUgJQAVgJAQgDQARgDAXACQAaADANAAQAXABANgKQgKALgaADIgnAAQgYgBgOADQgRAEgSAHQgXALgOACIgKABQgOAAgQgIg");
	this.shape_1172.setTransform(479.6535,157.4584,1.4913,1.4913);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f().s("#0D110E").p("AB5iHQgOAMgfAKQgjAJgOAFQgbALg8AdQgaAMgKAKQgQANgFAWQgGAZAEAgQAEAdAMAbQAKAXAOABQAOABAVgHQALgFAWgJQAVgHArgSQAngPAdgC");
	this.shape_1173.setTransform(439.5274,202.8825,1.4935,1.4935);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#0D110E").p("AmQuVQAKgOAOglQAHgRAUgWQAXgWAKgMQApgzBJhIQATgTgJgqQgPgwgFgTQgOgfgGgRQgMgfAMgSQAJgNAVgDQANgBAYgCQAMgDAWgIQAUgGAQABQACAFAKAJQAHAIAKAZQAPAnAEASQADAPAAAlQAAAjAFARQAJgDAGgIQACgEAGgOQAGgNAQgdQAJgQALggQABgJABgEQACgIAFgCQACgEAEgOQAFgOADgGQAPgYAkgDQAXgCAJABQATACAGANQAEAJABAQQAAAPgDAJQAKgDADgBQAYABAIABQATACANAIQAWAMgEAcQAAABgNAvQgIAfgFAfQABA4ALgQQAQAIAQARQAKAKARAVQAqAtASAtQAMAdADANQACAIgBAPQgBAQABAHQAEAaAPAIQAIAFAIgDQAEgCALgFQAQgFAngBQAvgGAQgBQAWAAAngDQAigCAaAIQAQAEAiAIQAcAJgCAsQgCAhgOAeQgCAFgNAVQgLATAAABQgNAWg/gKQgZgEggAGQglALgUAFQhZAYhEAxQg5ArgFAbQgFAXArAHQAXAEAnADQA/AUAtAZQAYAOAOAUQAMASAIAcQABAEADARQADAOADAGQADAIALAJQAGAFALAJQAMANAcAaQAXAYAIAVQAHAUgFAhQgFAoABANQACARAJAEQAFADARAHQASALAHAIQAIAJAHARQAEAMARAWQAQAVAEANQAFAQAHAcQAIAXAPAQQAaAdAZA8QAHAPAHAcQAJAgAEALQAHAWAOAqQAMAlAHAcQAEAUAEAkQAFApADAQQAJAzACAPQAGAlAAAdQAABogDAwQgEBUgOBCQgLAygjBXQgnBdgLArQgDAMgIAQQgEAIgIASQgXA3gpAcQgqAcgNAIQghATgcAHQgkAIgJACQgbAFgUgCQgTgCgdgOQgggRgOgHQgLgGgRgFQgagIgDgBQgmgSgUgFIhggXQgRgEhcgSQhCgOgqgNQgegJgOgFQgagIgTgIQgNgFhDgbQgmgOgOgHQgWgLgZgWQgcgagQgNQgJgHgPgOQgRgRgGgGQgOgMghgSQgggRgPgNQg/g3gzghQgWgPgSgVQgNgRgQgdQgSgfgsgoQg0gvgPgTQgCAAgBADQgEgFgJgIQgKgIgDgEQgFgGgHgMQgHgNgEgFQgXghgFgOQgqgLABgsQgRABgBggQADgkAAgIQgXgQgQgoQgKgXgKgrQgLguAAhCQAAgbAEg8QABgIgGgMQgIgRgBgDQgFgNgCgSQgDgWgCgLQgIhFAXg7QAIgUAOgZQARgdAIgOQAPgZAGgMQALgSAFgUQAFgQAOgTQAVgdABgDIAcgwQAcgxAOhGQACgHAThSQANg2ADgjQAFg4gChSQgBgXgJh5QgBg4gEgbQAAgCgHgUQgEgOACgIQAEgKAQgJQAPgJALAAQAAAEAHgCQANgDAEgBQAGAAANABQAMACAGgBQAtgBBSgIQAKgBAogHQAjgDAJAOQACAFAAAQQgCAWAAAAIAEAxQACAQAEAiQADAZgFASQgBADgBADQgNAngJArQgMA8ADBJQADBLACASQAGA2AQAjQAYA5ANAB");
	this.shape_1174.setTransform(565.361,317.0915,1.4935,1.4935);

	this.instance_24 = new lib.Path_38();
	this.instance_24.setTransform(549.9,126.8,1.4935,1.4935,0,0,0,6.8,15.1);
	this.instance_24.alpha = 0.5391;
	this.instance_24.compositeOperation = "multiply";

	this.instance_25 = new lib.Path_1_5();
	this.instance_25.setTransform(473.55,472.5,1.4935,1.4935,0,0,0,15.8,12.8);
	this.instance_25.alpha = 0.7813;
	this.instance_25.compositeOperation = "multiply";

	this.instance_26 = new lib.Path_2_4();
	this.instance_26.setTransform(579.65,225.35,1.4935,1.4935,0,0,0,31.3,28);
	this.instance_26.alpha = 0.4609;
	this.instance_26.compositeOperation = "multiply";

	this.instance_27 = new lib.Path_3_4();
	this.instance_27.setTransform(609.6,244.6,1.4935,1.4935,0,0,0,37.8,30.6);
	this.instance_27.alpha = 0.1797;
	this.instance_27.compositeOperation = "multiply";

	this.instance_28 = new lib.Path_4_5();
	this.instance_28.setTransform(441.9,214,1.4935,1.4935,0,0,0,11.7,6.4);
	this.instance_28.alpha = 0.6719;
	this.instance_28.compositeOperation = "multiply";

	this.instance_29 = new lib.Path_5_5();
	this.instance_29.setTransform(472,216.9,1.4935,1.4935,0,0,0,23.2,42.7);
	this.instance_29.alpha = 0.4414;
	this.instance_29.compositeOperation = "multiply";

	this.instance_30 = new lib.Path_6_6();
	this.instance_30.setTransform(568.15,462.75,1.4935,1.4935,0,0,0,82.9,44.2);
	this.instance_30.alpha = 0.4805;
	this.instance_30.compositeOperation = "multiply";

	this.instance_31 = new lib.Path_7_6();
	this.instance_31.setTransform(660.45,272.05,1.4935,1.4935,0,0,0,7.1,7);
	this.instance_31.compositeOperation = "multiply";

	this.instance_32 = new lib.Path_8_6();
	this.instance_32.setTransform(646.9,247.85,1.4935,1.4935,0,0,0,8.9,6.3);
	this.instance_32.compositeOperation = "multiply";

	this.instance_33 = new lib.Path_9_6();
	this.instance_33.setTransform(425.15,284.95,1.4935,1.4935,0,0,0,14.7,17);
	this.instance_33.alpha = 0.6406;
	this.instance_33.compositeOperation = "multiply";

	this.instance_34 = new lib.Path_10_6();
	this.instance_34.setTransform(589.95,128.75,1.4935,1.4935,0,0,0,2.2,10.7);
	this.instance_34.compositeOperation = "multiply";

	this.instance_35 = new lib.Path_11_6();
	this.instance_35.setTransform(573.95,223.95,1.4935,1.4935,0,0,0,32.8,28.4);
	this.instance_35.alpha = 0.6094;
	this.instance_35.compositeOperation = "multiply";

	this.instance_36 = new lib.Path_12_6();
	this.instance_36.setTransform(641.1,280.4,1.4935,1.4935,0,0,0,3.9,7.5);
	this.instance_36.alpha = 0.5117;
	this.instance_36.compositeOperation = "multiply";

	this.instance_37 = new lib.Path_13_6();
	this.instance_37.setTransform(614.05,266.05,1.4935,1.4935,0,0,0,5.3,14.2);
	this.instance_37.alpha = 0.5117;
	this.instance_37.compositeOperation = "multiply";

	this.instance_38 = new lib.Path_14_5();
	this.instance_38.setTransform(463.5,320.65,1.4935,1.4935,0,0,0,3.5,15.5);
	this.instance_38.alpha = 0.5117;
	this.instance_38.compositeOperation = "multiply";

	this.instance_39 = new lib.Path_15_5();
	this.instance_39.setTransform(507.25,273.4,1.4935,1.4935,0,0,0,7.2,9.2);
	this.instance_39.alpha = 0.5117;
	this.instance_39.compositeOperation = "multiply";

	this.instance_40 = new lib.Path_16_5();
	this.instance_40.setTransform(502.45,304.55,1.4935,1.4935,0,0,0,10.5,8.8);
	this.instance_40.alpha = 0.5117;
	this.instance_40.compositeOperation = "multiply";

	this.instance_41 = new lib.Path_17_5();
	this.instance_41.setTransform(440.75,303.5,1.4935,1.4935,0,0,0,8.3,16.9);
	this.instance_41.alpha = 0.5117;
	this.instance_41.compositeOperation = "multiply";

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#5C8EC7").s().p("ABnDyIgIgGQgEgEgCgEIgDgNIgHgRQgDgLAEgHQgCgZAJgiIARg5QAEgSAGgQQAGgNAAgFQgLgBgXAKQgdANgZAIIgTADQgMAAgFACQgOAGgIAVIgFAQQgDAIgFAFQgOARgMAIIgmAaIgPALQgJAGgHACQgRAFgJAGQgHAFgFAJIgJAPIACgKQABgJACgDQADgFAIgHQATgPAKgFIAogYIAUgOQALgHAGgIQAPgQAGgRQAIgbAJgKQAIgKAFgEQAGgEALgCIATgFQAHgBAfgBQAZgCALgDQAUgFAJgPQAWgkgKgvQgIgmAGgzQAEgfAJgWQAHgPACgIIACgIIABgEIABAGQADAHADAEIAFAHQACACABAFIABATQAAAOgKAXQgFAMgIAmQgBAJABAMIADAUQADASABAiQAAAhgDAMQgDALgQAcIgJAXQgGAPgEAHQgZAwADAfQgEAIAAAFIABAOIADAWQACAMALAXIALAfQgPgbgJgIg");
	this.shape_1175.setTransform(591.0517,431.469,1.4935,1.4935);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#5C8EC7").s().p("ABzCbIgEgGQgEADgFgDIgIgFIgbgLQgTgHgLgOIgJgPQgFgJgEgFQgDgEgIgFIgLgHQgIgHgJgLQgJgLgHgOQgFgRgEgHIgPgYQgJgPgDgLQgIgYgDgMIgCgTQgBgIgIgIIgGgFQgCgCgCgEQgBgKgCgFQgBgCgDgCIgGgDIAFALQgHgMABgCQABgFAHABQAFABAFADQAJAGALAPIARASQAEAFACAJIAEAPIAEAaQADAQAEAKIAgA6IAKAUQAFAMAGAGQAEAFAKAGQALAHAEAEQAIAKAOALIAOAPQAFAFAEADIAXAPQAQANgHAJg");
	this.shape_1176.setTransform(655.8186,413.758,1.4935,1.4935);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#5C8EC7").s().p("AAPAiIgbgLQgVgIgGgSQgEgMACgbQAAADALAJIARAPQAFADAKAFIAQAHQAKAHAHAMQAIANAAALQgMgCgQgHg");
	this.shape_1177.setTransform(627.7664,386.1613,1.4935,1.4935);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#5C8EC7").s().p("Ah5AbQgBgWAFgUQADgLAMgLIAXgRQAQgNAeAAQARAAAfACIAlABQAVABAPAEQAGACATAKIAKAEIgKgBIgXAAQgWgCgeAIQgXAFgQAIIgpATQgYAKgPAOIgZAWQgMANgEAPQACgegBgLg");
	this.shape_1178.setTransform(639.4022,314.7867,1.4935,1.4935);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#5C8EC7").s().p("AAYBYIgCgLQgEgOgGgKIgegzQgIgQgDgLQgEgOADgPQABgJAHgKIAGgMIAFgMQgBANAKAlQABAJAGAMIALAVQAKAXAEAgQAFAmgIAKQgCgDgBgHg");
	this.shape_1179.setTransform(616.2086,345.8568,1.4935,1.4935);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#C53831").s().p("ABSA3IgLgMQgGgHgHgCIgGAAQgCABgEgDIgBADQgGgBgIgLQgKgOgDgCQgPgHgHgHIgMgLQgHgFgIgCIgTgFQgNgDgGABIgKgOQgHgJAAgGIAkAHQAUAGALAJIAgAcQAKAJAYAMIANAHQAIAFAEAEQAJAIAGAcQgBgDgEgEg");
	this.shape_1180.setTransform(664.3243,421.2949,1.4935,1.4935);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#C53831").s().p("AkIK+QAVgDAXgYIAlgoIALgHQALgGASgFIAfgHQAqgKAFgfQACgMgFgRIgIgPQgEgKAEgFQAAgWgNgiIgJgcQgKgfAGgoQAEgbAWgrQAZgvAGgVQAHgaABggQABgHgEgPQgEgOABgIQgBgmABgSQABgKADgMIAHgUQAJgdABgGQABgHgDgLIgHgSQgHgTgCgLIgFgVQgCgLAAgKIgBgXQAAgOACgJQACgJAIgPQAIgQACgIQALgdAEgQQAGgbgCgNQgEgegMgfQgJgagEgRQgHgGgBgSIgDgbQgEAAgCAFIgEAJQgGAJgNAJIgWAPQgZARgWAKQhIAggWBGQgJAdgIAOQgOAaAAANQgBAQADAgQAAAPgGAbQgCALACAVQACAVgBAKQgKgNgBgZQgDgggCgIQgFgJgBgGQAAgFADgHIAEgMQAEgLAAgXQAAgXADgLQACgFAMgVIAHgOQAAgKABgCQgMASgHAHIgMAQQgIAJgHADQgEADgHgCIgLgCQgIAAgNAJQgOAJgIABQgPACgPgNIAcgEQAQgDAMgHQAGgDAHgHIALgLQAJgGAEgEIAJgOQAIgMALgDIAOgEQAIgDAFgFQASgSADgLIACgOQAAgJADgGQANgXAjgMQAigLAagRQAegUALgYIAQgfQAJgSADgOQAEgSAAgUQAAgMgEgKIgJgVIgWgpQgOgZgHgQQAHgBAFAEIAJAIQAJAIAYAHIAcAGQAjAHAcgJIAjgOQAVgIAPgCQAUgDAsATQApASAXgJQASgHAIgBQAOgEAMACQAFALALAFIAVAKQAGAEAHAJIAKAOQALAOAOAeQACADAKALQAJAKAAAFQACAKgYgLIgggPQgLgEgdgJQgagHgOgHQgmgXgVgHQgWgHgOgBQgNgBgdACQgbADgOAAQgIAAgLgCIgTgDQgigCgMAFQgGADgDAIQgBAEgBAMQgDA+AEA/QADAdACAIQADAHAJAOQAIANADAHQAQAoAHAoIAFAfQACARgDAPQgDAXgNAWQgTAkAKAUQAEAHAMAIQAPAJADAEQAIAJAOAUQAeAnAUA7QAOAoAUAcIADgBQAAAGAHAMQAHAKgBAIQgDgBgEAAIgIgBQgEgBgKgJQgTgTgPgWQgRgbgHgbQgJgogIgOQgIgQgWgQQgcgUgIgJIgIgKQgFgHgDACQgCACABAIIACALIAEAkQAEAeAAAPIACAOIAAANQgFAjgNAmQgGASAEAXIAJApQgCADgBAKIgCAOIgDAdQgEAYgSAvIgGASQgDALgEAHQgMAYABAMQAAANAHAOIAMASQAJAJAUAJQAVAKAHAGQAXARAIARQADAJADAKQAFAXgFAiQgDAUAAAIQAAAQAHALQAaAqgLAkQgFgCgCgNIgDgTIgIgeIgJgdQgGgUgCgcQgBgagEgJQgKgUgLgJQgFgFgJgEIgOgIQgJgIgFgDQgLgDgGgFIgNgNQgJgJgGgCQgBARAMAYQANAdALAiQAHAUgCAVQgCAWgJARQgKASgTAKQgJAEgeAKIgYAFQgPADgIAFQgYAPgMANIgPARQgKAKgJAEQgHADgJACIgIABQgFAAgEgCg");
	this.shape_1181.setTransform(621.9167,400.1832,1.4935,1.4935);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#0D110E").ss(0.6).p("ABunUQgVAogkAaQgMAJgeAVQgaARgUAAQgNAWgcAdQgNANgXANQgMAIgbAPQgMAIgaAJQgQAGgMAOQgEAGgPAXQgIAOgOALQgNALgEAHQgBABgFAJQgDAGgEAEQgJAIgXAOQgXASgKASQgFAJgKASIgIALQgGAIABAEQAKgSgPAeQgCAEgJAMQgHAJgLAUQgBADgHAIQgFAHgCAEQgCAFABAJQAAAFABAKQACAWAHAMQANAWAJgiQAIgeAGgJQAIgMADgGQAGgKADgJQAIgcAGgDQADAIgBAMQAAAGgCANQgDAzAVAbQAJALASAZQAQAVANANQAAAAAbAVQAFAEAIAJQAJAJAEAEQAFAEAJAHQAHAHAFAGQAFAIALAMQAOAOAEAFQAFAGADALQACAHADAMQAHAXABAMIgBAgQgBATAFANQAFARAXAaQAIAJAQALQgDgGgFgHQgJgLgBgBQgJgOgFgUQgGgUACgRQACgMAJgCQAIgBALAGQAAAAABABQAEADALAFQAJAFAGAEQAFAFANAJQALAJAEAHQAGALAFATQAHAYACAHQAQAsAdATQAIAGAlAVQATALARAUQAFAFAHAMQAHAOAEAFQAFAGAJAHQAFAEAKAHQAGAEAaANQAEACAJAEQAHADAFAEQADADAGAHQAFAHAEADQAGAEAFACQAIACABgGQAAgGgQgSQgHgHgNgIQgVgNgBAAQgpgbgaggQgbgggPgQQgEgFgKgHQgLgHgEgEQgRgOgIgHQgQgOgHgKQgCgFAAgFQAAgHAAgEQgFgQgBgIQgIgpgdgWQgMgJgUgKQgGgDgHgCQgIgBgFgCQgRgEgWgeQgGgHgGgQQgFgUgDgLQgFgSgFgLQgLgVgagSQgTgOgOgTQgFgGgSgUQgPgRgHgMQgbgugFgfQgGggABgMQADgtATgeQAIgOAOgPQABgCAYgZQAGgGAZgeQASgWAOgLQAkgaAXgNQALAAASgMQAFgDAVgQIAcgVQAKgHAAAAQAEgBAEAGQAEAHABAOQABAIAAAOQACArALAUQAJAOARAaQAHAMACAVQACAMACAXQADAXABAFQAEAOAIAMQAWAdA0ghQAIgFAYgHQATgGAQAMQAKAHAQAUQADgDABAAQgDAGAIAQQACAEALAQQALAQAGAHQAKALALAFQATAJALACQAGAAAJABQAHABAHADQAKAGAMAMQAQATADACQAEAEAHACQAJADADACQAFADAIAJQAIAJAAAEQABgQgQgVQgNgPgSgNQgGgFgOgGQgOgGgGgEQgIgGgQgFQgSgHgHgEQgVgLgPgVQgKgQgLgbQgFgQgEgIQgHgOgJgFQgJgFgOgBQgPgBgKADQgIACgRAIQgPAHgJADQgpAMgCgyQADgPAAgHQAAgYgGgUQgBgFgCgOQgBgLgDgHQgEgMgEgFQgJgJgFgGQgKgKACgGQgLgJACgPQAEgRABgIQAAgJAAgDQABgHACgGQAJgQAEgIQATgmAlgYQAIgGAPgSQAEgGAJgHQAKgIAEgEQApghATgWQARgWAPgaQAFgIAFgNQAHgSACgDQAHgQADgHQAGgOADgKQACgFAFghQAEgXAIgOQAEgGABgDQADgFgBgFQgCgWgKAFQgFACgCANQgCAGgBALQgBADgBAPQgBAMgCAGQgDAIgFAOQgDAOgCAEQgGAOgIgEQgOgGgEABQAAAFgHAcQgFAVgIAOQgNAZgNAJQgIAGgPAFQgSAFgHAEQgUANgNAYg");
	this.shape_1182.setTransform(498.7394,378.7916,1.4935,1.4935);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#C53831").s().p("AD+LlQgFgCgGgEQgEgDgFgHIgJgKQgFgEgHgDIgNgGIgggRIgPgLQgJgHgFgGQgEgFgHgOQgHgMgFgFQgRgUgTgLIgtgbQgdgTgQgsIgJgfQgFgTgGgLQgEgHgLgJIgSgOQgGgEgJgFQgLgFgEgDIgBgBQgLgGgIABQgJACgCAMQgCARAGAUQAFAUAJAOIAKAMQAFAHADAGQgQgLgIgJQgXgagFgRQgFgNABgTIABggQgBgMgHgXIgFgTQgDgLgFgGIgSgTQgLgMgFgIQgFgGgHgHIgOgLIgNgNIgNgNIgbgVQgNgNgQgVIgbgkQgVgbADgzIACgTQABgMgDgIQgGADgIAcQgDAJgGAKIgLASQgGAJgIAeQgJAigNgWQgHgMgCgWIgBgPQgBgJACgFQACgEAFgHQAHgIABgDQALgUAHgJIALgQQAPgegKASQgBgEAGgIIAIgLIAPgbQAKgSAXgSQAXgOAJgIQAEgEADgGIAGgKQAEgHANgLQAOgLAIgOIATgdQAMgOAQgGQAagJAMgIIAngXQAXgNANgNQAcgdANgWQAUAAAagRIAqgeQAkgaAVgoQANgYAUgNQAHgEASgFQAPgFAIgGQANgJANgZQAIgOAFgVQAHgcAAgFQAEgBAOAGQAIAEAGgOQACgEADgOIAIgWQACgGABgMIACgSIADgRQACgNAFgCQAKgFACAWQABAFgDAFIgFAJQgIAOgEAXIgHAmIgJAYIgKAXIgJAVIgKAVQgPAagRAWQgTAWgpAhIgOAMIgNANQgPASgIAGQglAYgTAmIgNAYQgCAGgBAHIAAAMIgFAZQgCAPALAJQgCAGAKAKIAOAPQAEAFAEAMQADAHABALIADATQAGAUAAAYQAAAHgDAPQACAyApgMQAJgDAPgHIAZgKQAKgDAPABQAOABAJAFQAJAFAHAOQAEAIAFAQQALAbAKAQQAPAVAVALQAHAEASAHQAQAFAIAGQAGAEAOAGQAOAGAGAFQASANANAPQAQAVgBAQQAAgEgIgJQgIgJgFgDIgMgFQgHgCgEgEIgTgVQgMgMgKgGQgHgDgHgBIgPgBQgLgCgTgJQgLgFgKgLIgRgXIgNgUQgIgQADgGQgBAAgDADQgQgUgKgHQgQgMgTAGQgYAHgIAFQg0AhgWgdQgIgMgEgOIgEgcIgEgjQgCgVgHgMIgagoQgLgUgCgrIgBgWQgBgOgEgHQgEgGgEABIgKAHIgcAVIgaATQgSAMgLAAQgXANgkAaQgOALgSAWIgfAkIgZAbQgOAPgIAOQgTAegDAtQgBAMAGAgQAFAfAbAuQAHAMAPARIAXAaQAOATATAOQAaASALAVQAFALAFASIAIAfQAGAQAGAHQAWAeARAEIANADQAHACAGADQAUAKAMAJQAdAWAIApIAGAYIAAALQAAAFACAFQAHAKAQAOIAZAVIAPALQAKAHAEAFIAqAwQAaAgApAbIAWANQANAIAHAHQAQASAAAGQAAAFgFAAIgEgBg");
	this.shape_1183.setTransform(498.7394,378.7916,1.4935,1.4935);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#5C8EC7").s().p("AAaA5QgGgCgHgJIgMgMQgJgKgPgGQgNgFgIgTIgOgeQgFgKACgEQACgEAGgDQAGgDAEADQADADADAKIAFAPQAHATANAOQADAFALAHQALAHAEAGIAIAJQADACAIACQAdAFgCAJIgVACIgIACQgFAAgDgDg");
	this.shape_1184.setTransform(527.5548,384.2311,1.4935,1.4935);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#5C8EC7").s().p("AAAAVQgHgBgEgEQgCgBgGgIQgEgFgCgHQgBgKAEgDIABgCIAYAQIANAGQAKAGAAAFQACAGgMACIgQAAg");
	this.shape_1185.setTransform(514.1176,370.0881,1.4935,1.4935);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#5C8EC7").s().p("ACsDlQgCgBgEgDIgGgEIgZgQQgXgLgLgHQgGgEgJgJIgNgOQgEgEgJgHIgMgLQgGgHgJgRQgJgQgGgIQgOgQgCgLIgDgXQgDgXgCgHQgBAAAAAAQAAAAgBAAQAAABgBAAQAAABgBAAQgKgZgcgHQgZgHgNgHQgLgGgNgLIgXgPQgQgOgEgCQgRgIgIgHQgUgRgNgXQgig4AUgjQgBADAHAIQAFADAKADQAGACABAGIABAMQADAOAHAMQATAdAcAeQAIAIATAJQAXAQAKADQAGACAIAGIAOALIAMAFQAJADAEACQASAMAFAIQAIALAIAdIAFATQADAMABAIQAAAIAEAIIAHAPIAMAYQAIANAIAHQAEAFAKAGIATAOQAMAIAGAIQAPARAIAAQAHAAALgGIASgDQAUgFAOADQANADAFADQAEACACAEIAEAGQgDgDgLACQgNAEgEAAQgIABgNgCIgKgDQgHgCgCACQgDAEAKAIIALAJQADAFgDADQgCADgEAAIgCAAg");
	this.shape_1186.setTransform(540.5276,409.0465,1.4935,1.4935);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#5C8EC7").s().p("AAXAaIgWgEQgLgCgRgIQgXgLAHgGQAEgHAHgFIAPgHIAIgDQABAAAGAEQAHAHAOACIAYACQAFAagEAOIgDAAQgIAAgKgCg");
	this.shape_1187.setTransform(491.34,344.5935,1.4935,1.4935);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#5C8EC7").s().p("ABSCFQgNgKgFgNIgCgNQgBgJgFgDQgHgFgFAAIgJgCQgNgEgHgIQgOgOgDgIQgDgFgCgLIgDgQIgEgOQgEgHgHgFIgQgJQgJgGgFgGQgDgEgGgMQgEgLgFgEQgHgGgPgFQgGgCgEgGIgIgKQgHgJgDgQQgFgWAFgJIACgEQAKgIAIABQAFAAgBAJIgBAMQACALAFAGIAKANQAEAEAMAEQAGADAGAHQAFAFAEAJIAHAQQAEAKAPALQAKAIAEAGQAJAPABAVQADAlAgAHQASAEAGAMQADAFACAJIAEAOQAEAJAPAIIAPAGIAMAGQAIAEABAGQABAGgEADQgBABgHgBQgFAAAAAFIABAIIADAGQgQgTgRgLg");
	this.shape_1188.setTransform(538.3794,327.037,1.4935,1.4935);

	this.instance_42 = new lib.Path_33_2();
	this.instance_42.setTransform(480.5,155.35,1.4935,1.4935,0,0,0,16.2,3.4);
	this.instance_42.compositeOperation = "multiply";

	this.instance_43 = new lib.Path_34_2();
	this.instance_43.setTransform(669.05,195.1,1.4935,1.4935,0,0,0,4.4,8.9);
	this.instance_43.compositeOperation = "multiply";

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#EDC564").s().p("AjCIjIADgnQADgwgSgdQgDgEgKgKQgIgHgCgJQgBgLAKgYQALgaAAgLQAAgTgIgmQgJgmAAgTQgBgdAMgvQANg1ACgVQACgXgHgzQgGgwAEgaQADgZAGgMQACgEAKgJQAIgJABgFQACgJgKgUIgOgeQgKghAEgbQACgRAKgaQALgeADgLQADgNAAgVQgBgYgFgKQgFgJgPgIIgYgOQgGgEgGgJQgIgKgEgDQgFgFgLgGIgRgKQgFgFgMgPQgMgQgBgFQgCgQAXgFQAPgEATADQAMABAFADQAKAFAQANQARAOAJAFQAcAQAkAJQAnAJAegFQAIgBAkgOQAcgLAPAEIAiALQAVAHAPABQAKABApgGQAggFARAIQARAHATAXQAVAaALAIQANAJAGAGQAIAIAFAMQAUAsgKAPQgIANgKgHIgPgQQgNgQgWgNQgYgOgSgBQgMAAgTAJQgUALgKABQgKABgQgGQgRgHgJAAQgcAAgiAeQgdAZgPAdQgMAWADAZIAGAwQABAQgDA3QgCAtAFAcQAHAnASBLQAOBFgEAwQgDAlgiA3QgqBBgIAZIgQA0QgKAegKAUIgZA3QgTAlgSAJQgIADgFAAQgKAAgBgOg");
	this.shape_1189.setTransform(636.8782,373.1258,1.4935,1.4935);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#EDC564").s().p("AFuIhQgJgEgSgTQgPgQgNgCQgIgCgXADQgTACgNgGQgJgEgPgSQgOgQgKgDQgIgCgXAAQgTAAgNgIQgMgHgbgeQgWgYgXgHQgQgFgcgDIgqgGQgQgDgegMQgegMgQgDQg3gJg/gHIgfgCQgTAAgMAGQgFADgTAYQgOASgQgCQgMgCgLgWQgfgMAHg6QACgUAKgTIAVgiQAFgJAQgiQAMgbANgOQAFgGAbgWQAUgRAIgPQAFgKALgJQAOgLAEgFQAEgFAFgKIAJgPQAFgGAHgDQAKgEADgDQAKgIAQgGIAbgLQAkgSArgvQAWgXBDgrQA9glAXgkQAOgVArghQApggAOgYIAOghQAIgXAJgGQADgCANgDQAKgCAFgIQAGgLABgSIACgeQACgKAHgPQAJgSACgHQAAgCAXATIAZAWQAPAPAHAKQAKAPgBAQQAAAQgIALIgVATQgTAQgVAqQgYArgQAQQgLALgUANIghAWQgkAageA0QgfA0gHAsQgCAQAJAPQAFAJANASQAIANAJAkQAIAgAMAQQAIAKARANIAbAVQAJAIAJAOIAQAXQAwA/ATAhQAJANATAZQAOAXgFAVQgEARgMAYQgHAVALAVQAHANAYAdQATAbgCAUQgDARgMAGQgFADgFAAQgIAAgJgFg");
	this.shape_1190.setTransform(496.0502,349.7503,1.4935,1.4935);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().s("#0D110E").p("AgWAMQgCACAAAEQALANAJgOQAHgRADgFQACgEAKgHQAIgGgBgB");
	this.shape_1191.setTransform(445.5354,401.8895,1.4935,1.4935);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#5C8EC7").s().p("AhBDlIgKgGIgLgGIgfgSQgSgKgKgMQgNgQgBgRQgBgMAFgYQAMg6AAgoQAAgJgDgZQgDgXABgNQACgLAHgYQAHgXABgNQABgLgCgRIgDgdQgDgqAHABIAIAEIAKAFQAGAEAIAJIAOANQAQAMALALIATARQALALAHAIQAGAIAUAkQAYApAdAZQAIAIAWALQAWAKAJAIIAUAQQANAKAFAHQAEAFAAAGIgCAMQgCAPgBAfQgEAmgHATQgLAcgaANQgdAOgpACQgPABgXgBIgkgCIgPADIgJABIgFgBg");
	this.shape_1192.setTransform(473.5604,456.8272,1.4935,1.4935);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#5C8EC7").s().p("AhsB9QgKgMgDgUIgGghQgEgVACgNQACgRADgIQAEgLAJgKQAQgTAsgYQAfgSA/gUQAggKANgIQAOgJAFgBIALgKIAFAQQAEAKABAGQABAKAAAUQgBAUABAJQAEAagEAiIgIA8QgSAJgdAEQgsAHgpATQghATgRAGQgJAEgJAAQgRAAgMgPg");
	this.shape_1193.setTransform(440.4858,202.2363,1.4935,1.4935);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#5C8EC7").s().p("AhlFrIgbgRQgLgGgWgBQgZgBgKgEQgzgSgcgIIgSgCQgMgCgGgDQgTgHgVgWQgXgagLgMQgLgKgNgFQgLgEgSgCQgQgBgJgDQgOgFgFgLQgGgQAXgvQAZgxAvhNIAdgvQARgeAEgWIACgkQABgVAFgPQAIgVAEgJQAHgPALgNQAUgVASgJQAVgLAaABIAZAAQAOAAAKADQAYAJAWAFQALgFAQAAQATgBAJgDQAPgFAWgUQAZgXAJgGQApgYAxgEQAXgDA8gMQA1gKAggCIBXgEQAxAAAkANQAXAIAJAFQASALADAPQACANgKAZIgQAlQgLAigKAOQgRAWgcABQgIABgOgEQgRgEgGgBQgJgBgNAEIgVAHIgnAGQgXADgQAFQgoAOguAbQgZAPglAaIgaATQgOAMgIALQgLAPAEAKQACAHAEAEQABAEgKAJIgMAIQgHAFgDAFIgVAeQgLARgEAQIgEAVIgEAVQgDAIgIANIgMAVQgGALgCASIgCAfQgDAiANAiQACAGAFAHIAIALIAHAMQADAIAEADIgPgkQADAGAKAKQAIAJgDAIQgFAOgeACIgDABQgPAAgNgIg");
	this.shape_1194.setTransform(604.7298,235.3121,1.4935,1.4935);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#5C8EC7").s().p("AjrGwIANggQAJgSAJgMIAWgaQAMgOAGgPQASglAMhFQANhOALgeQAYhDAAhqQAAgggCgyIgDhSQgBgKgEgTQgEgTAAgKIAAgaQABgQgCgKIgFgTQgDgMABgIQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABgBAAIAFgMQACgEAIgGQAIgIAJgDQAHgCANgBQAPgCAXAAIAnAAQAYAAAkgCIA8gEQAKAAAbgEQAYgCALAKQAJAIACAWQABAMgBAWQAAALAEARIAFAbQADATgHAWQgHASgDAkIgLA8IgIAkIgGAlQgCAPABAVIACAjQABAIgDAZQgCAWADAMIAJA4QAEASAQAaQAOAWADAKQAHAXgWgFIgZgGQgOgCgMABQg9AFgdAJQgUAGggAQQgkASgQAGQgjANgQAIQgbANgTARQgkAegcAoIgVAdQgQARgLAAIgBAAg");
	this.shape_1195.setTransform(472.3687,215.7602,1.4935,1.4935);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#D65052").s().p("AHtNpQg/gUg2gZIgpgSQgagKgQgJQgZgNgKgBIgcAAQgPAAgMgGQgMgGgRgEIgfgGIgagDQgSgBgIgCQgJgCgOgGIgXgIIg0gNIg7gSIg6gSQgngMgPgHQhFghgogdQgNgLglgiQgfgdgWgOQgkgbgTgKQgSgJgUgUIgZgUIgZgUIg3grQgggagRgZQgjg0gVgXQgQgSgtgnQgpgkgSgXIgSgaQgLgSgHgIQgFgHgOgMQgNgLgFgJIgOgVQgKgMgDgHQgLgcAFgeQAFgdATgWQAKgMAJgQIAPgdIANgaQAIgPAJgIQAHgIAQgLQASgNAHgHQAGgGAIgMQAJgNAFgFIAhgqQAVgZATgJIAhgNQAVgIAMgHQAZgPAdgaQAGgFAMgTQALgQAJgFQAJgHAUgIIAdgNQAxgZATgYIAWgmQAOgYAPgJIAmgXQAXgOAKgQQAFgIADgcQADgZAJgJQAIgGALABQAIABAGgLQASggACgbIAAgXQABgOADgIQAQACATAQQAJAIATAUIAMARQAHAKAIAEQAEACAHAAIAMABQATADAfAPQAiAQAQADQAIACAiAFQAaADAPAHIAXALQAOAGALgCQAOgCAMgEQAHAAAQAOQAOANAcAKIA4AYQAhAMAbgBQAegBA3gRIAPgGQAHgCAJACQANACAYAKQAYAJAMADQAVAEAggLIANgFQAIgCAEABQADAAAFAFQAFAGACABIAMADQAEABAFAFIAJANQAFAIAFADQAIAHAHAKIAMATQADAFARAQQANAMADAKQADAIACAZQADAVAGAMQAGANAPASIAYAdQAWAeAQA5IAUBFIAOAuQAKAaAFAgQACAKAFASIAHAdQADARACAdIADAuQADAYAIAxQAEAigDA1QgBAKADAUQADAUgBAKIgDAXQgCAOAAAKQAAAKgGAkIgLBCIgLA9QgDAMgJAVQgJAWgDALQgEALgJATQgKAVgEAKQgDAJgFAVQgEAUgEALIgkBfQgaA/gnAaIglAYQgnAcgUAIQgrAQgWAEQgPACgOAAQgUAAgRgFg");
	this.shape_1196.setTransform(572.3415,398.9841,1.4935,1.4935);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#D65052").s().p("AA1BKIgWgEQgNgDgKADQgFgTgNgTQgIgLgUgVQgUgUgRgOQgNgJgDgFQgFgGACgIQAWgKA3gCQA4AAAhAHQAVAFAHAMQAGAKgFAVQgBAIgBAXQgBAVgDALQgFAQgMAIQgJAHgMAAIgEgBgAhmhAQACgCAIgCIgCAGIgFADQgEgCABgDgAheg+IAAAAg");
	this.shape_1197.setTransform(664.251,271.5378,1.4935,1.4935);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#D65052").s().p("AAGBTQgCgBgBgJIgDgLQgCgHgHgIIgMgOQgQgSgRgLQgJgFgVgHQgNgDgEAAQAQgXApgPIBDgYIASgKQAKgFAIAFQAFADAIALIALARQALASAFAWQAHAZgIAOQgKARghAYQgaASgOAAQgGAAgDgDg");
	this.shape_1198.setTransform(647.5055,244.6394,1.4935,1.4935);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#D65052").s().p("AjLIbQgIgFgLgRQgNgTgGgFQgMgMg8geQgtgYgOggQgLgXgQg5QgIgZAAgjQACgmgBgVIgCg/QAAgjADgcQAGg7AlhGQAXgqAmguIBHhRQAagbANgQQAYgcAEgVQgGgPgIgmQgGghgLgTQgZgrALggQAHgVAagEQAPgCAfgBIAbgIQASgGAJADQAQAEAOAeQAOAaAJAkQABAFABA7QAAAvALAIQACgUAQgaQAWgcAIgOQAFgJADgQIAGgZQAEgJAIgOIANgWQAKgRAHgGQAJgGASgCIAdgDQARAAAJAJQAKAKADAUQADAQgEANQAEgHAWACQAXADANAGQANAHAEAHQAFAIABAPQAAATgFAXIgLAoQgEAPgCAZQgCAfAKgDQAFALAPAMIAYATQAIAIAfAiQAJALAIARIANAcQAFALAMAUQAKASABAPIADAkQABAVAEAOIgXAHQgSAFgQABQgkAAgzAjQgKAGgLANIgRATQgPAOgTADQgGABgJgDIgPgDQgFgBgIAAIgOAAQgMgBgMgHIgXgNQgbgKgdARQgLAHgjAfQgVASgKARQgKASgEAbQgBAIABAOQABAPAAAGQgBAJgEAMIgIAVQgQAqgWAeIgbAlQgQAWgJAQQgYAogBASIABAnQgBATgJAAQgEAAgFgDg");
	this.shape_1199.setTransform(562.0733,184.6844,1.4935,1.4935);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#D65052").s().p("AiGC1QgIgIgIgWQgJgYACgOQABgQARgRQALgMAWgKIAkgRIAlgXQAXgSgEgPIgDgGQgFgGgPgHIgWgMIglgeQgkgdANgfQAJgWARgNQASgPAXgCQAVgCAXAMIAiANQAXAHAIAIQASgFAhABQAjACAPgDQgEASgRAYIgfAlQgOARgIAQQgHAQgFAXQgEARgPAWIgZAmIgSAmQgLAYgKANQgMAPggAMQgaALgZADIgGAAQgOAAgIgIg");
	this.shape_1200.setTransform(425.6432,282.6864,1.4935,1.4935);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#EBBCBB").s().p("AlkGNQgSg/gCgmIAAhcQgBg2gLgmQgGgUgJgqQgDgNADgTIAEgfQAEgkAPgmQAPglAXgfQAGgIAZgrQASgeASgRQALgKAngvQAdgjAagOICuhaQAWgLAxgDIAngFQAXgDAQADQAPADANALQAQAPAIAEQAGADALACIARAFQAxATAaAmQAZAnAcAFIAQACQALABAEAFQAFAGACAQQABAOgCAJIgGAmQgFAcgJAFQgEADgJgDQgJgEgEABQgMADgDAOIgDAYQgFATgRATQgKAMgaASQgaASgKAMQgLAMgWAbQgVAZgMANQgQARgJAFQgLAHgVAGQgWAFgIAFQgMAGgPATQgVAZgEAEQgVATgpAVQg1AbgOAJQgXAPgXAmQgbAsgOANQgHAGgOAHQgPAIgGAFQgNAKgLAaIgSApQgFAJgNAdQgNAagMAFIgGABQgaAAgWhKg");
	this.shape_1201.setTransform(481.526,315.7218,1.4935,1.4935);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#EBBCBB").s().p("ACyDWQgMgBglgJIghgMQgSgHgQADIg7ARQgiAJgagDQg/gHgwgfQgfgUgPgoQgGgOgPg8QgFgUAEgVQADgPAJgaIASg+QALgnANgWQAegvAdAAQAwgBAxAQQAvAQAoAdQA1AmAKAXQADAHAAANQgBAPACAGQACALAJAHIAQAOQAJAMAWATQAWAUAJAMQALAOAFAVQAEAOACAZQABAJgCAPIgDAYQAAAJADAOQAAAKgKAGQgSAJgWAAIgKAAg");
	this.shape_1202.setTransform(629.5493,268.4522,1.4935,1.4935);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f().s("#0D110E").ss(0.9).p("ADFBGQADAXgCATQgCAMgFAcQgCANgDAhQgEAegIAMQgSAXgcAKQgNAEgUADQgVACgMABQgDABgTAFQgNACgJgBQgEAAgMgGQgJgEgIABQgFAAggAIQgVAGgNgFQgCgBgBgBQgCgBgCgBIgBAAQgogVgTgPQgmgcgFgeQgGgcALgtQAOg7ABgNQACgcAAgtQAAg4ABgTQABgNAJggQAIgcgCgRQgCgigCgSQgCggABgQ");
	this.shape_1203.setTransform(505.8076,439.819);

	this.instance_44 = new lib.Path();
	this.instance_44.setTransform(571.7,152.75,1.2956,1.2956,0,0,0,6.7,15);
	this.instance_44.alpha = 0.5391;
	this.instance_44.compositeOperation = "multiply";

	this.instance_45 = new lib.Path_1();
	this.instance_45.setTransform(505.45,452.75,1.2956,1.2956,0,0,0,15.8,12.8);
	this.instance_45.alpha = 0.7813;
	this.instance_45.compositeOperation = "multiply";

	this.instance_46 = new lib.Path_2();
	this.instance_46.setTransform(597.55,238.2,1.2956,1.2956,0,0,0,31.3,27.9);
	this.instance_46.alpha = 0.4609;
	this.instance_46.compositeOperation = "multiply";

	this.instance_47 = new lib.Path_3();
	this.instance_47.setTransform(623.5,254.95,1.2956,1.2956,0,0,0,37.8,30.6);
	this.instance_47.alpha = 0.1797;
	this.instance_47.compositeOperation = "multiply";

	this.instance_48 = new lib.Path_4();
	this.instance_48.setTransform(478.15,228.45,1.2956,1.2956,0,0,0,11.8,6.4);
	this.instance_48.alpha = 0.6719;
	this.instance_48.compositeOperation = "multiply";

	this.instance_49 = new lib.Path_5();
	this.instance_49.setTransform(504.15,230.9,1.2956,1.2956,0,0,0,23.2,42.6);
	this.instance_49.alpha = 0.4414;
	this.instance_49.compositeOperation = "multiply";

	this.instance_50 = new lib.Path_6();
	this.instance_50.setTransform(587.55,444.25,1.2956,1.2956,0,0,0,82.9,44.2);
	this.instance_50.alpha = 0.4805;
	this.instance_50.compositeOperation = "multiply";

	this.instance_51 = new lib.Path_7();
	this.instance_51.setTransform(667.65,278.75,1.2956,1.2956,0,0,0,7.1,7);
	this.instance_51.compositeOperation = "multiply";

	this.instance_52 = new lib.Path_8();
	this.instance_52.setTransform(655.95,257.7,1.2956,1.2956,0,0,0,8.9,6.2);
	this.instance_52.compositeOperation = "multiply";

	this.instance_53 = new lib.Path_9();
	this.instance_53.setTransform(463.55,289.95,1.2956,1.2956,0,0,0,14.7,17);
	this.instance_53.alpha = 0.6406;
	this.instance_53.compositeOperation = "multiply";

	this.instance_54 = new lib.Path_10();
	this.instance_54.setTransform(606.35,154.5,1.2956,1.2956,0,0,0,2.1,10.7);
	this.instance_54.compositeOperation = "multiply";

	this.instance_55 = new lib.Path_11();
	this.instance_55.setTransform(592.4,237.1,1.2956,1.2956,0,0,0,32.6,28.4);
	this.instance_55.alpha = 0.6094;
	this.instance_55.compositeOperation = "multiply";

	this.instance_56 = new lib.Path_12();
	this.instance_56.setTransform(650.75,286.05,1.2956,1.2956,0,0,0,3.8,7.5);
	this.instance_56.alpha = 0.5117;
	this.instance_56.compositeOperation = "multiply";

	this.instance_57 = new lib.Path_13();
	this.instance_57.setTransform(627.3,273.65,1.2956,1.2956,0,0,0,5.2,14.2);
	this.instance_57.alpha = 0.5117;
	this.instance_57.compositeOperation = "multiply";

	this.instance_58 = new lib.Path_14();
	this.instance_58.setTransform(496.75,320.85,1.2956,1.2956,0,0,0,3.5,15.4);
	this.instance_58.alpha = 0.5117;
	this.instance_58.compositeOperation = "multiply";

	this.instance_59 = new lib.Path_15();
	this.instance_59.setTransform(534.7,279.95,1.2956,1.2956,0,0,0,7.2,9.2);
	this.instance_59.alpha = 0.5117;
	this.instance_59.compositeOperation = "multiply";

	this.instance_60 = new lib.Path_16();
	this.instance_60.setTransform(530.55,307,1.2956,1.2956,0,0,0,10.5,8.8);
	this.instance_60.alpha = 0.5117;
	this.instance_60.compositeOperation = "multiply";

	this.instance_61 = new lib.Path_17();
	this.instance_61.setTransform(477.05,306.05,1.2956,1.2956,0,0,0,8.3,16.9);
	this.instance_61.alpha = 0.5117;
	this.instance_61.compositeOperation = "multiply";

	this.instance_62 = new lib.Path_33();
	this.instance_62.setTransform(511.5,177.45,1.2956,1.2956,0,0,0,16.2,3.3);
	this.instance_62.compositeOperation = "multiply";

	this.instance_63 = new lib.Path_34();
	this.instance_63.setTransform(675.1,212.05,1.2956,1.2956,0,0,0,4.4,8.9);
	this.instance_63.compositeOperation = "multiply";

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#D65052").s().p("AA1BKIgWgEQgNgDgKADQgFgTgNgTQgIgLgUgVQgUgUgRgOQgNgJgDgFQgFgGACgIIgFADQgEgCABgDQACgCAIgCIgCAGQAWgKA3gCQA4AAAhAHQAVAFAHAMQAGAKgFAVQgBAIgBAXQgBAVgDALQgFAQgMAIQgJAHgMAAIgEgBg");
	this.shape_1204.setTransform(670.9994,278.3182,1.2956,1.2956);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#97F0FF").s().p("EhIfAJLIAAyVMCQ/AAAIAASVg");
	this.shape_1205.setTransform(404.375,26.575);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#0D110E").s().p("ABmAiQgIgPgSgMQgTgLgPAAIgUABIgKAAQgHgBgDgDQgCgEAAgHIgBgJQgDgHgLgCQgIgCgeACIgTABQgLAAgJgCQgKgDgEgLQgEgIACgLIAAAAQAAANADAGQAEAJAKACQALADAbgDQAbgDAMACQANADADAJIACALQAAAGACACQACADAOAAIATgCQATABATAMQASAMAHARQAKATgIATQAHgTgLgSg");
	this.shape_1206.setTransform(645.638,264.2315,1.4721,1.4721);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#0D110E").s().p("AgoA0QABgRAMgMIALgKQAGgHADgGQAHgJgBgTIgCgPQgBgGAEgKQAMgZAegVQgKAHgNAOQgLAOgFANQgDAHAAAHIACAPQACATgGAMQgEAGgGAGIgMALQgLAKgBAQQgCAeAaAXIAAABQgdgWABggg");
	this.shape_1207.setTransform(604.596,246.8973,1.4721,1.4721);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#0D110E").s().p("ABeA/QgPAAgcgKQgdgKgNAAQgNAAgcAKQgPAEgIgEQgHgEgJgNQgGgNgGgEQgDgDgGgCIgLgDQgPgFgFgFQgHgHgDgNIgCgWQAAgOAEgHQgEAIABANQABAIADAOQACAMAHAGQAHAGAMACIALADQAFABAFAEQAEADAKAPQAHAMAHAEQAHAEAMgFQAegJANAAQAQAAAbAKQAeALAMABQAVACAVgMQgTAMgVAAIgCAAg");
	this.shape_1208.setTransform(629.1442,274.6113,1.4721,1.4721);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#0D110E").s().p("AgTBbQACgCAEgDIANgJQARgKAHgIQAGgGACgHQABgEgFgJQgDgIAFgJQADgGAHgHQAOgOAAgKQgBgGgLgWQgGgQgJgLIgXgRQgDADgEABIgJgCQgKgFgGAAQgHABgJAGQgIAFgGACQAGgCAHgGQAKgHAHAAQAFgCAEACIAIACQAFACADAAQADAAACgEIABgBIACABQAUANAFAGQAKAIAHATIAHAPQAEAIAAAHQABAIgGAIIgKAMQgHAGgDAFQgDAHACAGQAFALgCAFQgBAHgIAIQgGAFgUANIgMAHQgEABgCAEQgCADACAEQgDgDACgFg");
	this.shape_1209.setTransform(497.9444,252.1233,1.4721,1.4721);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#0D110E").s().p("AhjAuQgIgDgGgKQgFgHgCgLQgCgMAEgFQgDAEACANQADAKAFAHQAGAJAHACQAJADAIgFQAHgDAJgHIAPgMQAFgCAFAAIAKABQAJACAIgEQAIgEAVgRIARgKIASgHQAXgJAwgQIgjAPIgjANIgRAIIgQAKIgOALQgIAHgIADQgGADgEAAIgKAAQgJgDgIADIgOALQgKAIgHADQgGADgGAAIgIgCg");
	this.shape_1210.setTransform(459.7313,300.2028,1.4721,1.4721);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#0D110E").s().p("Ag8BtIgfgHIgFAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAGAAIAKABIAUAEQANABAHgCQAJgDAGgJQANgZAJgLIAcgeQAMgNABgCQACgFgBgEIgDgJQgCgLAHgLQAFgIAJgIQAVgSAJgKQAKgLACgFQAFgLgFgJQAFAJgEALQgDAHgIALQgJAKgVATQgIAJgFAHQgFAIABAKIADAJQACAHgDAFQgDAGgKAKIgdAeQgFAFgGAMIgKASQgIAKgKADQgEABgIAAIgJAAg");
	this.shape_1211.setTransform(497.3728,288.4356,1.4721,1.4721);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#0D110E").s().p("AjWCHIAMgNIAOgLIAMgNQAHgJAMgVQAMgUAIgKIAZgZIBUhCQAagUAjgRQATgJAvgSQArgSAZgEQAVgCAPADQATAFAKAQQgMgOgSgEQgPgDgTAEQgVAEgtAUQgsASgVAKQgiARgZAUIg5ArQgkAcgQARQgIAJgNATQgNAVgIAJQgGAHgHAFIgOALIgGAGIgHAGQgGADgMACQALgDAGgDg");
	this.shape_1212.setTransform(472.5104,243.9132,1.4721,1.4721);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#0D110E").s().p("AkdEyQgIAAgHgDQgKgDABgJQAAAIAJADQAGACAJAAQAMABASgEQAUgEAIgFIAagRQANgJAOgGQAMgEATgDIAegDQATgCALgCQAcgGAZgTIAXgUIAVgWQAUgTAfgRIAzgfIAxgmQAggZAOgPQAKgKAIgNQAIgLAGgOQAJgWgDgkIgDgfQgBgSACgNQAEgVAUgkIAQgaQAJgQAFgMQAEgLABgSQACgYACgHIgCAfQgBATgEALQgEAMgIAQIgPAbQgTAigEAWQgCAMACARIAEAfQAEAngKAXQgFAOgJANQgHALgNAOQgRASgeAWIgwAnQgJAGgsAZQgfASgSARIgVAVQgNANgKAHQgbAVgeAFQgMADgTABIgfACQgSACgLAEQgKAEgRAKIgaAQQgKAGgUADQgMACgKAAIgIAAg");
	this.shape_1213.setTransform(484.4276,297.9762,1.4721,1.4721);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#0D110E").s().p("AEaCHQgRgIgcgBQgcgCgTACIgwAEQgdACgTgGQgMgDghgOIgsgOQgbgHgSgHQgYgLgTgNIgTgPIgQgRQgNgMgagNIgqgWQgtgagbgkQgKgPgDgGIgGgXIgFgLQgDgEgFgDIgKgHQgEgEgDgEQADADAFAEIAKAGQAGAEADAEIAFAMIAIAVQACAGALAOQAbAhAtAaIAqAVQAZALAQAPIARAQIASAOQARAMAYAKQAUAIAXAHIAXAGIAXAJIArARQASAGAcgBIAvgEQAXgBAZACQAcADASAKQAPAHAXAXQgWgUgRgIg");
	this.shape_1214.setTransform(537.6335,231.072,1.4721,1.4721);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f().s("#0D110E").p("AkxjlQgCAHgZBHQgQAuAHAjQAMA/AfAsQAbAnA2ApQAHAGA0A6QAlApAhAGQAZAFAsgHQA0gKAQAAQBDABAvgRQARgGAfgNQAcgKAXgDQAIgBAlADQAeADAHgF");
	this.shape_1215.setTransform(634.223,264.6174,1.4749,1.4749);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#0D110E").s().p("AAFBmQgPgTgEgKQgIgSgCgQQgCgOADgVQAEgbANgpIAWhCIAJADIgZBBQgOAsgEAWQgDAVABAOQABAPAHASQAEAJAOAUQAOASAEAMQgEgMgPgRg");
	this.shape_1216.setTransform(620.8783,433.3783,1.4721,1.4721);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#0D110E").s().p("AiaBVQAFgPALgFIAXgMQAQgHAHgEQAPgJAcgUQAagTAKgPQADgEADgGQACgEABgJIACgNQADgIAEgEQAHgGATgCQAJgBAPgFIAXgLQAPgGALgBIAZgGIANgCQADAAAEAAQAFAAAEADIgHAIQAAgCgIABIgMABIgaAFQgKABgOAFIgYALQgNAFgMABQgRABgGAFQgFAFgBAEIgDAMQAAAJgCAFIgHALQgKAPgcATQgXAQgVAMQgHAEgQAHIgXALQgLAGgFANQgGANAEAMQgEgKAFgPg");
	this.shape_1217.setTransform(602,429.4404,1.4721,1.4721);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#0D110E").s().p("AisDoQAEgIAKgIQALgKAZgOQAxgbAVgXQAJgKAEgHIAHgUIAHgVQAFgKAJgHQAPgNAZgDIArgEQAZgCAQgHQATgIAKgVQAJgRgDgWQgIgbgCgPQgCgLAAgLIACgWQACgUAEgXIAKgrQAGgaAJgQIAJAFQgJAPgGAYIgLAqQgEAWgCAVQgDAeACAMIAFAVIAFAVQADAWgKAVQgLAVgVAKQgRAHgbACQgcABgPACQgZADgNAMQgMAJgIAbQgEAOgEAGQgFAKgIAIQgNAOgUANIgmAWQgZAOgMAJQgJAIgFAIQgEAGgBAHQABgHAEgGg");
	this.shape_1218.setTransform(605.1487,405.7209,1.4721,1.4721);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#0D110E").s().p("AA5BnQgEgIgGgJQgFgGgKgHIgQgLIgQgMQgLgLgJgYQgGgPgLgUIgTgjQgLgVgBgTQgCgNgCgFQgCgEgDgCQgCgCgDABIgCgKQAIgCAGAGQADADADAHQADAJABAMQACATAJARIASAkIAQAkQAJAYAIAKQAGAGAKAGIAQAMQAKAJAEAFIAKASQANAXAOAFQgPgFgNgXg");
	this.shape_1219.setTransform(666.6098,394.5643,1.4721,1.4721);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#0D110E").s().p("ABiCLQgEgPgHgHIgQgTQgJgLgIgGIgVgNQgMgIgHgKQgGgIgGgOIgKgWIgYgsQgFgJgCgPIgDgZQgDgRgTgZIgRgRQgNgKgEAEIgGgIQAEgCAFAAQAEAAADABQAGADAGAFQAHAFALANQAHAJAIANQAGALACAOIADAZQABAOAEAJQAHAPAQAcQAEAHAGAQQAGAPAFAHQAJALAJAGIAUAOQAJAGAJAMIAQATQAJANAAAKQACAMAFAMQgEgGgDgSg");
	this.shape_1220.setTransform(667.1986,393.631,1.4721,1.4721);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f().s("#0D110E").p("AgqgUQADAKAQAFQAXAGACABQAGADAQAGQAQAHAEAA");
	this.shape_1221.setTransform(642.7867,371.9387,1.4749,1.4749);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#0D110E").p("AgUhWQgOAQAKAhQAIAdAQARQAOAQAHAWQABAEAHAp");
	this.shape_1222.setTransform(630.2869,329.946,1.4749,1.4749);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f().s("#0D110E").p("AgfAsQgEgXAjghQAcgcAEgD");
	this.shape_1223.setTransform(640.1693,302.9636,1.4749,1.4749);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#0D110E").s().p("ACyFsQgDgFgJgDIgOgFQgIgDgFgDIgLgJIgJgLQgIgJgPgIQgfgQgYAAQgSgCgJgGQgNgJgIgKQgRgUgLggIgHgbQgEgSgEgKQgKgYgTgZQgVgcgSgNQgQgMgGgHQgGgGgBgIQgBgHACgIQACgLAIgQIAKgaQAQg1gRg7QgIgZgNgdQgRghgHgTQgFgOgBgQIAAgcQAEgngBgTIAKAAQABAUgEAmQgDAlAHASQAGASASAiQAPAkAFATQARA+gRA2IgLAbQgHAOgDALQgBAHAAAGQABAGAFAFQAFAHAQAMQARAMAXAeQAUAcAIAXIAJAcQABAKAFARQAKAfARAUQAXAbAYAAQAYAAAeAQQAQAKAIAIIAJALQAGAGAFADQAFADAIADIANAFQAJAEADAEQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgEACQAGgCgCgCg");
	this.shape_1224.setTransform(660.7008,350.2402,1.4721,1.4721);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#0D110E").s().p("ACdCPIgIgHIgKgEIgKgFIgRgPQgOgLgbgEQgJgCgMABQgIAAgEgCIgHgEIgCABIAAAAIgBAAQgQgBgVgRIgPgOQgGgGgJgKQgKgPgIgXIgLgmQgKgfgDgIQgGgMgEgFQgDgEgMgJQgYgNgLgJQgVgPgEgVIAKgCQADARARAOQALAIAYAOQAOALACAEQAHAJAEAKIAMAoIALAmQAHAWAKAPQAHAKAVATQATARAOACIAAAAIAAgCIAAgFIAEAEQAFAHAOABIAVABQAbAFAPAMIAQAPIAUAJIAIAIIAKAUg");
	this.shape_1225.setTransform(659.4332,382.5901,1.4721,1.4721);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#0D110E").s().p("AhICIIATgWQAHgIADgCQAEgEAIgEQALgFAQgEIAbgHQAagHAXgSQAYgTAEgbQAEgXgHgfQgFgVgOggIgGgNIgHgLQgFgJgCgFQgDgJAGgJIAIAGQgFAGAJAPIAIANIAFANQAOAkAEASQAHAggFAZQgFAegaATQgZASgbAHIgbAGQgQAEgKAFIgMAHIgKAKIgTAVQgOALgWAHQAVgHAOgMg");
	this.shape_1226.setTransform(615.221,461.1279,1.4721,1.4721);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#0D110E").s().p("ABFBmIgQgoQgQgrACgqQAAgcgNgKQgDgEgOgIIgRgMQgagNgMgIQgVgNgMgUIAJgEQAKARATAMQALAJAaAOIARALIASAPQAJAHACANQACAHAAAPQgEArAPApIAPApQAIAVABAVQgCgUgIgWg");
	this.shape_1227.setTransform(635.4376,458.9565,1.4721,1.4721);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#0D110E").s().p("ABDF4QgDgRgHgJIgIgMQgDgGgBgHQgCgLAEgRQAFgVABgHQABgdgOgYQgGgNgKgKQgJgJgNgHIgYgNQgPgIgJgIQgMgLgFgMQgFgMABgQQABgMAGgQIAMgaQAIgSALghIAOg2QACgSgGglQgGgbAGgfIAOg2QAGgjgBgUQAAgLgEgPQgGgRgDgKIgCgPIAAgdIABgIIADgEQACgEAFAAIgBAKIACAAIgBABIgBAGIgBAOIABAHIgBAHIACANIAIAaQAEAOABAPQABAYgJAhIgNA2QgGAcAFAbQAGAkgCAUQgBAHgGAVIgIAbQgIAcgLAYIgMAaQgGAMgCAOQgBAPAFAMQAEAKAMAMQAIAHAPAIIAYANQAOAIAIAJQAKAKAHAOQANAZgCAdQAAAJgFATQgEARABALQABAHADAGIAIALQAGAJADASQABAIAAAOQAAgNgBgJg");
	this.shape_1228.setTransform(636.8308,416.2281,1.4721,1.4721);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#0D110E").s().p("AhrI/QAPgMANgUQAQgWAPgFQAUgKATgEIAUgEQAMgCAIgDQAKgEAHgHQAHgHADgKQACgJgDgLIgFgVIgGgpQgEgWgIgSQgJgUgEgUQgHgoAMgrQAKghAWgtQAYgvADgeQABgMgFgdQgDgNgCgcQAAgSABgYQABgNAEgIIAJgTQAEgIABgLIgBgUQgBgIgJggQgNgpACgqQgBgcAXg1QAWgygFgdQgCgRgHgXIgOgmQgEgDgDgEQgCgFAAgIQAAgEgHgOQgEgJgBgMQgBgGACgGIABgHIAAAAIADADIACABIABgBIgEgJIACAAIACAAQADABABADIAAADIAAADIgCAFIAAAJQABAKADAJQAHAQAAAFIABAIIAHAHIADAGIAMAjQAHAYACARQABAJgBANQgBAMgCAJQgEAQgLAYIgQAmQgGASgBAWQgBApAMAoIAJApIABAWQgBALgEAKIgKASQgDAJgBALQgCARABAYQABAXADARQAGAdgCANQgEAhgYAuQgYAwgIAdQgNAsAHAmQAEAVAIASQAJATADAVIADAVQABAOACAHIAFAUQACAMgCAJQgCALgIAHQgIAHgKAEQgIAEgMACIgUADQg1AMgRAdQgOAVgNAKQgGAFgKAEQAJgEAGgFg");
	this.shape_1229.setTransform(617.8568,397.2377,1.4721,1.4721);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#0D110E").s().p("AgSBWIgCgXQABgNAEgKQAFgGABgDIABgFIgBgFIgCgWQAAgNACgKQABgEAIgRIAMgTQAIgMABgIQAAAFgHAQIgLAUQgGANgBAHQgCAKAAAMIACAVIAAAGQAAAEgBADQgCAEgFAFQgEAIgBANIgBAWIAAABg");
	this.shape_1230.setTransform(595.7295,349.2834,1.4721,1.4721);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#0D110E").s().p("AhwCkIAEgdQABgJgCgVQgDgSADgLQADgMAIgQIALgbIAKgbQAGgQAGgLQAOgcAagRQAMgIANgGIAbgMQAagMAXgUQAQgNAFgGQAFgGAAgFIABgIQABgDADgCIAFgDIADAKIgCABIAAAAIgBAHQgDAIgFAHQgFAGgSAOQgbAVgYALIgbALQgMAFgNAIQgaARgNAZQgFAKgHARIgKAaQgGAQgHALQgIARgCAKQgDALACASQACAVgCAJIgEAdIgDATIACgTg");
	this.shape_1231.setTransform(612.6565,337.5248,1.4721,1.4721);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#0D110E").s().p("AirCuIgGgCQAKADAEgCIAQgHIARgDQAJgDAGgEQAEgDAGgKQAGgJAGgDQAHgDAEgIQAGgMADgDQAFgHALgBIAQgDQAOgGAKgQQAEgHAFgZQAFgWAHgKQAJgKAXgEIAggIQAagIAbgeQAVgaANgfQAOgigBgeIAKAAQAAAfgPAkQgNAfgYAcQgbAfgdAIQgHADgaAEQgVADgIAKQgHAIgEAVQgHAbgEAGQgLARgPAGIgRADQgKACgEAFQgDACgGAMIgFAHQgCADgFACQgFACgGAJQgHAKgEADQgGAEgKACIgRAEIgQAGIgFABIgDAAg");
	this.shape_1232.setTransform(603.4373,322.0736,1.4721,1.4721);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#0D110E").s().p("ACrDeIgHgDIhGgqIgVgSIgegcQgGgGgDgBIgDgBIAAgEIACgCQgjgvgKg5QgDgRgIgIQgIgKgQgGIgcgKQgRgGgLgHQgNgIgLgKQgJgIgPgKQghgVgOgRQgUgYgKgcQgFgQgCgNQgBgJACgGIAAAPQACAOAFAPQALAcAUAXQAMAOAjAWQAOAIALAKQAMALAMAHQARAKAmALQARAGAJALQAJAJAEATQAKA5AmAyIABABIAAABIAAABIAOAOIAKAJIAKAJQANAMAIAFIAXAOIAuAcQAIAEABgCIABgCIAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgLgIIgMgIIgDgCIADgDQAEgEAIAAIALACQAGACAMgBIATgDIAOAAIgJgGIgSgFQgJgCgLAAQgGAAgNAFIgUAHIgLAAQgFAAgGgFQgEgDgKgMQgDgEgEgDIgIgHQgYgRgIgIQgNgMgMgWIgJgTQgEgIgDgMIgJgoQgGgYgFgNQgHgNgYgLIgTgIQgJgFgIgHIgQgNIgSgJQgmgUgZghQgIgLgNgYQgMgZABgOQgBAPANAYQAMAVAJANQAZAgAmATIATAJIARANQAJAHAHAEIATAIQAZAMAIAOQAGAMAHAaIAIAoQAEANAEAFIAJATQAKATANANIAgAZIAIAHIAIAHIAOAPQAEADADABIAJgBQAHgBAMgFQANgFAIgBQAJgBAMADQAOADAGADIAKAGQAGAFAAAGIAAAFIgFgBQgHgCgLABIgTADQgOABgHgCIgKgCIAFADIAMAIQAEAEABAEIgBAFIgDAEQgCACgEAAIgEAAg");
	this.shape_1233.setTransform(556.3552,391.0144,1.4721,1.4721);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#0D110E").s().p("AA6A6QgGgCgOADQgPACgJgHQgGgEgJgNQgJgKgIgDIgKgEIgKgGQgIgHgGgLIgHgWIgHgWIAJAVIAJAVQAGAMAHAEQAEADAQAFIAKAGIAIAJQAJAMAFAEQAIAFAMgDIAOgBQgEgDgFAAIgKgCIgLgDQgIgCgJgNQgFgIgHgHQgNgJgEgEQgGgHgFgMQgGgMgHgcQAMAhAEAGQAHAMAEAFQAFAEAMAHQAFAEAJAMQAIALAGACIAUAEQAHABAFACQAEADAEAHIAEAIg");
	this.shape_1234.setTransform(544.1292,365.4767,1.4721,1.4721);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f().s("#0D110E").p("AgcgLQALAMARADQALACAWAE");
	this.shape_1235.setTransform(509.7379,323.9231,1.4749,1.4749);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f().s("#0D110E").p("Ag0gQQAHgEACAFQACADADAHQAEAFAIACQAEACAJADQA4ATAHgM");
	this.shape_1236.setTransform(507.4047,328.7148,1.4749,1.4749);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#0D110E").s().p("ABpCOQgGgHgFgDIgNgIQgHgGgDgGIgDgPQgCgJgDgEQgEgGgGgCIgIgBQgEAAgDgCQgPgIgJgLQgLgMgDgOQgDgGgBgJIAAgNQgBgMgRgJIgNgHQgIgEgEgFQgHgGgIgUQgDgHgGgEQgJgEgEgDQgJgHgLgOIgRgZQgIgOgGgMQgHgUAAgJQAAALAIARQAHAQAHALQAUAfARAOIANAHQAGADAEAIQAIATAHAGQAEAEAIAEIANAHQAJAFADAEQADADACAEIACAHIABAOIACAOQAEAMALANQAIAJAOAJQAEACAKAAQAJADAEAHQAEAFACAJIADAOQACAGAHAEIANAIQAFAEAGAHIAKAKQgDgGAAgFIAAgCIACAAIAPgCIACgBQAAAAAAAAQABgBAAAAQAAAAgBAAQAAgBAAAAIgEgFQgFgEgIgDIgPgGQgHgDgHgFQgIgHgDgFIgFgPIgFgPQgEgJgUgIIgOgFQgJgEgEgHQgDgGgBgKIgCgOQAAgNgJgQQgHgOgNgIQgLgHgHgTQgHgTgJgHIgNgIQgKgGgDgEQgNgSgRglIgDgIIAEAIQARAjANATQADAEAKAFIANAJQAJAHAIATQAIASAKAGQAOAJAGAOQAJARACANQACAWAEAHQACAGAIAEIAPAFQAUAIAGALIAFAPIAFAOQADAGAHAFQAIAFAFACIAPAGQAIADAGAFIAFAGQADAEgDADIgEACIgOACQABAGAHAIQAJAMACAGIAEANg");
	this.shape_1237.setTransform(552.8492,309.5177,1.4721,1.4721);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#0D110E").s().p("ADBLkIgJgDQgGgDgIgIQgJgIgEgCIgPgIIgQgHQgOgGgQgMQgdgWgNgYQgGgGgNgPQgFgHgFgEQgEgEgIgFIgagQQgRgKgJgIQgXgRgMgjQgEgKgEgUQgFgUgFgJQgOgYgfgRQgJgGgTgIIgPgEIgHgBQgFAAgCACQgCACACAFIAeAtIAWAfIgWgfIgbgmIgEgHQgBgGABgCQACgCAGAAIAIABIAPAEQAMAFAQAIQAgASAOAYQAFAKAFAUQAFAUAEAKQALAfAXATQAJAHARAKIAaAPIANAJIALAMIANAPIABgBIAAAAIACABIABABIAAABIgBACIAEADIAAAAIAAAAIABADQANAVAbAUQARAMALAFIAgAPQAFADAIAIQAIAIAFACQAEACAEAAIABABIgBgCIgKgMIgNgMIgNgJIgdgTQgMgHgQgOIgZgXQgIgHgPgUQgNgRgJgHQgYgTgbgaQgNgLgLgPQgFgJgDgHQgDgKACgIIABACIAAgDIgBABQgDgFgCgJQgBgLgCgFQgBgHgFgHIgJgMQgIgMgNgLQgKgIgRgIIgdgOQgRgIgKgKQgNgMgHgPIgKgfQgDgNgHgQQgIgQgIgLQgHgKgOgMIgZgVQgTgQgXghIgSgaQgLgOgGgOQgNgcgBgkIAAgfQAAgQAFgRQAIgeAWgcQAJgMANgMIAWgWQAdghAOgPQAagZAZgQIAdgOIAcgPQAMgGANgMIANgKQAHgEAHgCIABgIIAFgGIADgCIADAEQALARABAgIABAYQABAOACAJQACAOATAbQASAZADAVQACARAAAgQABAdAJAPQAFAJAKAFQAKAFAMgBQAJAAAMgGIAVgMQAfgPARABQAPACAKAJQAIAIAHAMQAJANAOAdQAMAUASAPQAUAPAXADQAaAFAUAOIASARQAOALAEACIAGABIAHADQAEAEAEAGIAEAHQgLgYgcgUQgMgJgVgMQgUgLgOgGIgjgRQgTgMgLgOQgHgIgDgJIgHgSIgHgRQgIgKgBgIQgBgNgagFIgTgCQgLAAgHADQgHACgKAFIgSAJQgMAFgHAAQgMABgIgJQgJgMgCgaIgBgnQgBgWgDgQQgDgVgKgOIgMgOQgHgJgFgHQgGgLgBgIQgBgHABgNQACgrAGgiQAEgUAHgRQAHgTAPgOIANgNQAEgDAEgNQACgMADgaIAEgTQADgOAEgEQAQgQAFgQQAFgPgCgXIgBgnQgBgaACgMIACgFQACgCADABQADAAADgHIACgTQACgOAHgXIgBgKIABAKQgHAZgBAMIgDAUIgBAEQgBABAAABQgBAAAAAAQgBABAAAAQgBAAgBgBQgFAAgBAGQgBAHAAAfIACAnQACAZgFAOQgFAQgQAQQgEAEgDANIgDATQgDAbgDALIgCAKQgCAGgEADIgOANQgVAUgJAwQgFAZgDA0QgBAMACAGQABAJAGAIQADAHAIAIIANAPQAIAOAFAXQADAQABAXIABAnQACAZAIAJQAGAHAJAAQAKgBAIgEIARgJIASgIQAKgDAKAAIAUADQANACAGADQAGADADAEQADADABAHQABAFAHALQADAFAFANQAIAXAIAKQAKANASALIAjARQAPAHAUALQAVALAMAJQAmAaAJAlIABAGIgGgCQgGgDgFgGIgGgLQgDgFgEgDIgEgCIgGgBQgIgDgNgMIgRgRQgTgMgZgEQgZgDgUgRQgTgOgOgXIgLgWIgMgUQgPgagSAAQgQgBgcAOIgVAMQgNAGgMAAQgLAAgOgEQgMgGgHgLQgKgQgCghQgBghgBgPQgCgTgSgWIgNgVQgHgLgDgNQgCgKAAgOIgBgZQgBgUgFgNIgBAFIgEAAQgKABgOAOQgOAMgNAHIgdAOIgcAPQgTAKgeAdIgWAXIgVAYQgLANgLAKQgLAKgLANQgUAagIAdQgHAVABAoQACAjALAZQAFALALAQIATAaQAUAeAUASIAZAVQAPANAHAKQAJALAIASQAHAPAEAPQAFAVAEAJQAGAOAMALQAKAJAQAIIAcAOQAVAKAHAHQAMAKALANIAJAOQAFAHACAIIACAQQACAJADAFIACABIgBACQgEALAMASQAJANANAMQAZAZAaAUQAKAIANASQAPATAHAGIAZAXQAOANANAIIAdATIAOAKIANAMIALAOQABAEgBADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_1238.setTransform(524.6052,359.901,1.4721,1.4721);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#0D110E").s().p("ACODxQgHgIgDgHQgCgGgBgNIgDgRQgIgfgYggQgUgbgbgaQglgfgRgRQgegcgQgbQgVgkgBgjIABgkIAEhIIABgdIgHAFIgNAHQgSAKgIAGQgbAUgGAdQgFAbALAgIAMAcIAMAcQgTgkgIgTQgMgiAFgbQADgQAJgNQAJgNANgKQAKgIAQgJIANgHQAJgFACgEIAFgIIABAJIgBAlIgEBIIAAAkQADAjATAfQAPAZAeAcQAQARAlAfQAgAgAQAXQAYAjAGAgIADASQAAAMABAFQAEAMAPATIgMgOg");
	this.shape_1239.setTransform(473.5799,383.1054,1.4721,1.4721);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#221F20").s().p("AhYAeQgDgDADgDQAegjAygNQAsgLAxALQAEABABAEIAAABQABADgCACQgDAEgHgBIgKgCIgXgDQgZgBgVAFQgyAJggAgIgDABIgDgBg");
	this.shape_1240.setTransform(415.5301,304.6687,1.4721,1.4721);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#221F20").s().p("AhkAWQgCgEADgCQAvgdAzgHQAYgFAbACIAaACQAUAEADACQAEADgBAEQgCAFgEAAQgFABgHgCIgMgCIgYgDQgWgBgbADQgzAHgqAYIgDABQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_1241.setTransform(417.9218,288.2898,1.4721,1.4721);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#221F20").s().p("AgQA0QgHgTAFgkQADgbAMgbIAAgBQgBgDAEgDQACgDADAEQASAUgCAmQgBAWgJAhQgDAPgKABQgKAAgEgOgAgHADQgBAPABAPIACANIACAGIABABIABgBIACgNIADgNQADgOACgPQABgWgIgVQgHAZgCAYg");
	this.shape_1242.setTransform(402.8938,299.3133,1.4721,1.4721);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#221F20").s().p("AAsAVIgDgCQgxgBgqgcQgEgDADgEQACgFAEADQAcASAgAFIARACIAJABIgBAAIABgBQAFgDAFAFQAEAEgDAFQgCAEgEAAIgCAAg");
	this.shape_1243.setTransform(430.8862,269.0049,1.4721,1.4721);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#221F20").s().p("AANAOQgHgBgIgDQgOgFgOgMQgBgBAAAAQgBgBAAAAQAAgBABgBQAAAAABgBQACgCADACQAHAHASAGIAPADIAIAAIAHABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQgCABgGAAIgJAAg");
	this.shape_1244.setTransform(436.7563,255.3379,1.4721,1.4721);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#221F20").s().p("AggAwQgGgCgCgGQgCgHAHgQQAMgaASgYQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABABIAPgIQAMgGADABQAHAAAEAGQACAFgBAHQgCAIgHAPIgOAVQgKALgIAHQgNALgHADQgEACgEAAIgEgBgAgZAQQgGAPAAAEQAAAIAOgJQARgLALgQQAMgQAGgTQACgFgBgCIgBgBIgFACQgQAGgHACIgCgBQgNAVgLAWg");
	this.shape_1245.setTransform(426.8465,259.7753,1.4721,1.4721);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#221F20").s().p("AADDFQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAJgTgBgcQAAgMgFgkIgLheQgFgrgDg3IgDgxIgBgYQgBgPABgKQABgEAEAAQADgBABAEQACAMABAmIALCbIAMBnQADAZgBAQQgCAWgKASQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_1246.setTransform(501.9345,453.7571,1.4721,1.4721);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#221F20").s().p("AAQAgQhXgGhQgnIgJAAQgGAAAAgGQAAgFAGgBQAlgEAzgBIBYgBIBYgBQAoAAAVAXQADAEgCADQgQAWguAHQgfAGggAAIgZgBgAABgSIhQADIg2ACQBDAdBJAFQAqACAmgEQAagEAMgDQATgGAKgKQgNgLgUgDQgHgBgiAAg");
	this.shape_1247.setTransform(478.8995,482.9661,1.4721,1.4721);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#221F20").s().p("AAFFlQgLgWgCgmIgBhPQgGlfAAjfQAAgDAEAAQAEAAAAADIAECgQADBeABC5IADDQQAAAnALAWQACAEgEADIgDABQgDAAgCgDg");
	this.shape_1248.setTransform(453.8802,427.9236,1.4721,1.4721);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#221F20").s().p("AghBKQgEgDAEgEQARgWAkgNQAVgGAGgHQAHgIABgOQAAgOgEgOQgFgRgFgGQgFgGgHAAIgPACQgOABgLAAQgdAAgYgKQgDgCABgEQABgDADABQAiAKAjgFIAQgDQAJgBAGACQALAFAIAOQANAegDAZQgEAdggAKQgWAIgJAFQgJAFgRAPQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1249.setTransform(691.2309,288.5604,1.4721,1.4721);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#221F20").s().p("AgWAsQgJgXAOgZQAGgKAKgMQAMgNAHgFQAEgCADAEQADADgDAEIgSARIgOASQgPAVAFAVQABABAAABQAAAAgBABQAAAAAAAAQgBABgBAAIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_1250.setTransform(679.3152,262.0323,1.4721,1.4721);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#221F20").s().p("ABAA0QgKgJgTgVQgYgagOgjIhOAjQgMAGgJgCQgGgCACgHQACgGAGACQADABAFgCIAIgEIA2gZIAUgJQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIADgBIAKgEQANgFAKAHQATAPAZAkQAWAfAKAcQABAFgGADIgJABQgOAAgPgKgABbAyQgOgegNgTIgUgZIgLgNQgIgIgFgCQgEgBgGADIgGADQANAaATAXQALAMANAMIARAOQAIAFAGAAIAAAAg");
	this.shape_1251.setTransform(668.656,246.8219,1.4721,1.4721);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#221F20").s().p("ADcEuQgZgLgbgTQgSgNgcgZIgugpQgbgYgWgOQgbgRgZgJQgPgEgYgEIgngHQghgHgigWQgUgMgnggQhPg9gmgqQgngqg4hUQg/hcgdgkQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAgAjBGBlQA+BYAtArQAlAjBQA9QAkAdAZAMQAYAOAxAHQBDAKAwAjQATAOAZAWIAqAmQA4AyApARQAgAOAeADQAkAFAcgJQANgEANgKIAYgTIAtgmQAggbAKgKQAXgWANgVQACgDAEACQAEACgCAEQgPAYgbAZIgxArIgxAqQgdAWgcAEQgPACgOAAQgrAAgugTg");
	this.shape_1252.setTransform(577.5803,471.4534,1.4721,1.4721);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#221F20").s().p("AijNLQgGgDAEgFQAuhEAph1QAlhtAYhVQAeh3ARg7QAehmAihHIAqhWQAVgxACgrQAEhSgphmIgkhTQgWgxgHgkQgFgZgIg5QgGg1gHgcQgKgtgSghQgRggghgeQgmghgSgSQgfgegQgdQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAABQASAeAqAkQA4AxALAMQAdAfAQAtQAOAkAHAzIALBUQAHAxALAhQAJAeAbA6QAaA6AJAfQAfBjgRBOQgHAkgYAyIgpBUQgeBHgeBwIgxC5QghBqgZBGQgkBigqA8QgCADgDAAIgDgBg");
	this.shape_1253.setTransform(678.7129,372.1736,1.4721,1.4721);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#221F20").s().p("ABKCnQgGgKgLgLIgTgTQgWgVgRgQQgogigUgnQgVgpgFguQgCgXACgWQABgNADgJIAEgOQADgKgCgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAFAFgBALIgDARQgEAZABAaQADAzAXAqQAUAnAtAmIAmAlQAYAXAJAPQAEAGgHAEIgEABQgEAAgCgEg");
	this.shape_1254.setTransform(644.5665,224.8435,1.4721,1.4721);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#221F20").s().p("AjsCPQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAgBABAAQAVg1AngrQBHhLBxgkQA2gQBBgJIA6gGQAvgGgCggQAAgFAFAAQAEgBABAEQAEANgGAMQgGALgLAGQgLAHgRADIgdACQiGANhfAxQh2A6guBrQgBAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgCgBg");
	this.shape_1255.setTransform(623.1115,210.9734,1.4721,1.4721);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#221F20").s().p("AgDBiQgCgKAAgOIAAgXIgBgyQgBg2ACgsQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAEAsABA2IABAyIABAXQABAOgCAKQgBADgEAAQgDAAgBgDg");
	this.shape_1256.setTransform(656.9821,178.3286,1.4721,1.4721);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#221F20").s().p("AgQAYQhPgKhAgMQgwgIgRgGQgngKgRgQQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIADgBQALADAVAHIAfAKIBCANQBKAMBEAHQCDAPCXADQAHABAAAHQAAAHgHAAQilgEh+gPg");
	this.shape_1257.setTransform(615.6081,159.1956,1.4721,1.4721);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#221F20").s().p("AgLB2Ig8gmIgZgOQgPgJgIgJQgbgbAXgzQAKgVAVgcQAQgWAOgIQAUgMAbAEQARADAdANQAyAVAzAjQAEADgDAFQgDAFgEgDQg0gkg3gXQgngSgXAGQgWAFgYAiQgWAggIAVQgMAjATAUQAJAJAPAJIAaAPIA4AlQADACgCAEQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_1258.setTransform(496.0549,135.7888,1.4721,1.4721);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#221F20").s().p("AhTAVQAAAAgBgBQAAgBAAAAQAAgBAAAAQABAAAAgBQArgiAygFQAXgBAUAIQAWAKAJATQACAEgEACQgDACgDgEQgWglg1AIQgoAGgoAbIgBABIgDgCg");
	this.shape_1259.setTransform(576.2889,154.8583,1.4721,1.4721);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#221F20").s().p("AhVC/QAKiNAZhLQAoh3BbgyQADgBABADQABAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQhWA0gnB0QgXBHgNCMQgBAEgDAAQgEAAAAgEg");
	this.shape_1260.setTransform(553.7348,185.0313,1.4721,1.4721);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#221F20").s().p("AFLD1QgDgigOgdQgFgLgagkQgigwAWgoQAVgeAKgRQARgegOgUQgJgNgSABQgQAAgMALQgPAMgRAiQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIg9goQgNgIgEgEQgJgIgBgKQgBgKAIgNIANgWQAGgQgDgQQgDgQgNgKQgMgIgNAAQgOABgKAKQgGAGgHAKIgLATQgYAkgtgEIgzgIQgfgFgVAFQgeAIgPACQgaAEgTgJQgTgJgGgVQgEgOAAgbQAAgfgKgOQgIgOgPAAQgOAAgLAMQgSARACAjIAEA4QgDAugfANQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAZgOACglIgFg+QgCgZALgUQANgXAXgDQAUgDANAQQALAOACAVQACAQACAjQAGAdAaAGQAUAEAigIQAngKAQABQAQABAiAHQAeAGASgHQASgFAPgYQATgdAIgHQAQgMAUADQAUADANAPQAPASgDAYQgCAUgOAVQgNATAKAKQAEAEAIAFIANAIIAvAfQANgYAMgNQATgUAZgBQAUAAAMAPQAMAOgDAVQgCASgPAWIgYAmQgNAYAMAbQAFAMAYAhQAeAqADA1QAAAFgFAAQgFAAAAgFg");
	this.shape_1261.setTransform(584.3623,126.968,1.4721,1.4721);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#221F20").s().p("AiYCmQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAHgzAjg1QAbgpAvguQBQhSBrg3QADgBACADQACAEgEABQhmA0hQBQQgwAvgaAoQgkA0gJA0QAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgCAAg");
	this.shape_1262.setTransform(512.8368,141.4076,1.4721,1.4721);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#221F20").s().p("AAECuQgThCAIhuQAHg7AAgeQgDg2ADgbQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQABABAAAAQAAAAAAABQABAAgBABQgBAQACAZIACAoQABARgDAZIgEAqQgGBgAOBTQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_1263.setTransform(490.0077,179.885,1.4721,1.4721);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#221F20").s().p("ADuOYQgrhAhhhXQhvhjgkgsQhmh7hCjSQgSg7gHgsQgJg4AGgxQAFgqATg5QAYhAALghQA3ipgCjwQAAhGgHiMQgCghgKhEQgIg2ALgiQABgDADABQABAAABAAQAAAAABABQAAAAAAABQAAABAAABQgGAXADAfQABAPAIAnQAGAhAEBPQAGCJgCBbQgEDfg/CyQgYBDgJAfQgOA3AAAvQABAvAOA4QAKAnAVA9QBHDOB1B3QApArBbBOQBPBIAmA9QADAFgEADIgDABQgDAAgCgDg");
	this.shape_1264.setTransform(463.8102,290.227,1.4721,1.4721);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#221F20").s().p("AAtAZIgqgJQgTgChAgDQgvgCgegGIgEABQgGABgBgFQgCgFAGgBQBGgUBlgCQAtAAAsADIAlADQAVAEAMAJQADABAAADQABAEgCABQgMAJgYAIQgeAKgPACIgKAAQgOAAgSgEgAAAgPQgjABguAGIghAFIAeABQAwACAeACQAMABAWAEIAVAFQANAEAIAAQASABAdgIIAWgHIANgGQgGgCgHgCIgWgCIgmgEQgagCgZAAIgcABg");
	this.shape_1265.setTransform(466.3249,155.1819,1.4721,1.4721);

	this.instance_64 = new lib.Path_37();
	this.instance_64.setTransform(608.75,224.25,1.4749,1.4749,0,0,0,17.7,16.5);
	this.instance_64.compositeOperation = "multiply";

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#C53831").s().p("AjgJ1IAQgHQAMgGAQgWQAXgcAfgJQAMgEAegFQAagHALgMQAHgJABgPQAAgFgCgVIgGggIAAgUQABgMgEgHQgGgKgFgRIgIgbQgMgiAJgkIADgQQABgJADgGQAKgLADgJQAIgWAJgNQASgcAGgiQADgSgBgbIgDgtQgCgoADgUQAFgVAFgJQAHgPAAgUQABgVgIgOQgFgIgDgPIgFgYQgFgTAAgOIgCgTQAAgNAHgDQACgWAPgrQAOgpABgYIACgfQgBgQgHgOIgQgkQgHgTgDgTIAAgQQgBgJgGAAQgDAAgFAHIgHAJQgPAOgUAMIgmAUIgfAQQgSAJgLAJQgIAGgHAQQgYAjgLAeIgOAoQgGAYACATQABAIgEAcQgCALgBAWIgDAbQgDAVgFABQAAgVgCgPQAAgFgEgJQgEgIgBgFQgBgLAEgPIAIgZQADgIAAgPQgBgTABgGQADgUAIgPIAIgMQAFgHgCgGQgGAAgLAKIgPAPQgRARgYATQgJAJgNADQgHADgSACQgNABgFgBQgMgCADgJQAIgBABADQAFACALgDIAQgGIAQgEQAJgEAFgEIAJgLIAJgLQALgLAIgLQAGgJAQgFQARgDAHgHQAGgFAJgaQAJgaAIgLQALgRATgIIAagIQASgDAIgEQAHgDAKgLQAPgKAGgGQAhgkAOg8IADgRQADgHAJgCQAMgCAbgCQgBAAgEANIgEARQgDAQABARQACA2AQAfIAPAeQAKASAEAMQANAngBArQgCADgBAGIgBALQgBAIgIAVIgKAaQgGAQAAALQAAAPAKANQAHAHAQAMQATAMAQAYQAJAOAPAcQgDAPALAYIASAmQAIAWAOARQARATATAFIAnAHQAYADANAKIALANIAMAMQAHAGASAJQADACAJABQAJABADACQAEAFgCAFIgFALIgHATQgKgRgUgWQgFgFgJgFIgOgJQgFgEgIgEIgNgGQgLgHgOgCIgagDQgIABgEgCIgGgEIgHgBIgIgBIgOgJQgQgIgOgPQgQgQgHgfIgNg3QgIgXgTgTIglghIgUgYQgOgPAAAWQgBAjAJAXIAIARQAFAKABAHQACAQgJAeQgKAeABAPQgFAHgCANIgCAYQgDAYADAYQAHAjgFAUQgDATgOAjIgWA8IgHAYQgCAOAFALQADAJAHAHIAOAOQATARAXAJIAIAEQAKAFAGAJQAIAKAEAUIAIAXQAEANAAALQgBAIgDAKIgGASQgEAMAHANIAMAZQARAxgJATIgDgTQgCgMgCgGIgHgPIgIgPIgIgXQgFgNAAgJIAAgkQgBgngXgVQgHgHgOgIIgXgOIgYgTQgPgNgLgEQAAAHAHAJIAMAMQAIAMAEAUIAGAiQAHAvgGAZQgGAbgWARQgSANgfAJIgiALQgUAHgMAKIgUATQgMALgKAFIgTAGQgMADgHAEQADgGAKgFg");
	this.shape_1266.setTransform(632.4677,391.3073,1.4749,1.4749);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f().s("#0D110E").ss(0.6).p("AHIC2QgGgQgDgCQgNgMgCgCQgFgGgIgFQgKgGgFgDQgOgNgJgEQgLgGgYgLQgYgLgMgHQgJgFgFgHQgCgDgGgNQgBgDgEgGQgFgGgBgEQgHgSgFgJQgJgTgDgDQgHgJgPgCQgXgFgYAKQgSAHgIADQgPAFgNgDQgPgDgEgQQgBgGAAgXQgBgSgBgJQAAgdgEgQQAEgKgaggQgCgDgIgHQgFgGgDgFQgFgLAAgSQAAgMADgRQAEgdAAAAQABgTABgJQABgSAEgKQAEgKAPgWQACgDAMgMQAJgKACgGQADgHACgNQADgOABgFQAFgeAHgMQABgBAMgSQAHgLACgKQACgLAAgfQABgSgBgJQgEgPAAgIQAAgIAHgIQAIgKABgFQACgGABgMQACgMABgGQAEgRgEgUQgEgNAHgaQgGgDgNgEQgOgEgFABQAEAVgFAcQAAABgJAvQgJAogIASQgEAJgNAVQgMARgEANQgKAegBAiQAAAMAEAYQACAkgJAVQgHAPgZAbQgEAEgIAGQgEADgJAFQgHAGgLANQgNAMgpAdQgaATgPAHQgPAIgPAMQgJAHgSAPQgGAGgOAKQgFAEgLAKQgLAJgGAFQgjAYgjACQgpABgRAGQgLAEgaAPQgEACgPAKQgLAIgIADQgDABgPAAQgOACgHABQgEABgFgCQgHgCgCAAQgMAAgDgBQAAgBgIgFQgFgDgFABQADATASArQALAYACAHQADAGAFAWQAHAUANAAQAEAAAFgGQgBAOAGARQADAKAKATQAcA4ATABQABgIgFgLQgGgMgDgGQgSgvgCgUQgCgqAagaQAHgIAUgKQACgBAMgIQAKgHAFgBQAIgCgBAIQAAAFgCAJQAAAEAAAPQAAAMgCAGQgCANAAASQAAAKAAAVQAAAvAVArQAEAJAIAIQADADANALQAKAIAKATQADAFAJAGQAFADAJAGQAPAMAZAbQAPAMADAEQADAFAGAIQACADADAJQADAHAFABQAAACANAcQAHARACAOQAEAlATAQQgFgFAIgGQAHgFAFAAQAPABAUAKQAUAJALAKQAQAQAJAVQAFALAJAgQAFAPAQAaQAEAIAJAJQAQAPAQAJQAFAEATAIQAQAIAIAGQAHAFAIANQAJAQAEAFQAcAiAUANQAGAEATAIQAQAGAHAHQAZAYAMgKQABgIgJgGQgLgHgEgDQgFgDgOgNQgLgLgJgFIgagPQgGgEgIgIQgIgKgFgFIgageQgLgNgjgdIgZgWQgGgHgDgEQgGgHgFgCQAAgEgEgEQgGgFgBgCQgCgEgCgHQgCgJAAgBQgCgGgDgTQgDgQgEgIQgBgDgGgGQgFgGgCgDQgHgMgWgNQgvgYgTgMQgGgEgHgJQgIgLgEgFQgHgJgIgdQgFgQgCgIQgEgOgFgJQgOgZghgWQgzgkgOgnQgKgYgFgMQgIgVgDgRQgBgYgCgLQgCgRADgPQAFgSANgUQAQgbAdghQAhgmAQgUQANgNASgPQAQgPAcgPQAogWAHgFQAcgSAEgDQAEgGADgCQAGgGAEACQAMgDADAYQAAAFAAAbQAAAeAJAYQACAHAJALQACAEADAIQADAJABADQADAFAFAIQAFAHABAHQACAJABAaQACAYAAAHQADATAFAIQAKARAaAAQAVAAATgJQAbgNAJgCQAYgIAPAIQANAFAMAZQAFALAOAWQAFALABADQAEAGAHAGQALAJAVASQALAIAMAAQAHABALAAQAKAAAHAGIAcAYQARAOAOAFQAFACABABQACACACADQAAAAABABQABABADAHQACAEADACQgEgBgGgOQAAAAAAAAg");
	this.shape_1267.setTransform(510.4337,356.2973,1.4749,1.4749);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#C53831").s().p("AEcLvQgHgHgQgGQgTgIgHgEQgUgNgcgiIgNgVQgHgNgHgFQgIgGgQgIIgZgMQgQgJgPgPQgKgJgEgIQgQgagEgPQgKgggFgLQgJgVgRgQQgKgKgTgJQgVgKgOgBQgGAAgHAFQgIAGAGAFQgTgQgEglQgCgOgHgRIgOgeQgFgBgDgHQgCgJgCgDIgKgNQgDgEgOgMQgagbgOgMIgPgJQgIgGgEgFQgKgTgJgIIgQgOQgIgIgFgJQgVgrABgvIgBgfQABgSACgNQABgGAAgMIABgTIACgOQAAgIgIACQgFABgJAHIgOAJQgUAKgIAIQgaAaADAqQABAUATAvIAJASQAFALgBAIQgUgBgcg4IgNgdQgGgRACgOQgGAGgDAAQgNAAgHgUIgIgcIgNgfQgTgrgDgTQAGgBAEADIAJAGQADABAMAAIAIACQAFACAEgBIAVgDQAPAAADgBQAIgDAMgIIASgMQAagPALgEQARgGApgBQAjgCAjgYIARgOIAQgOIAVgQIAbgWQAPgMAOgIQAPgHAagTQApgdAMgMIAUgTIAMgIQAIgGAEgEQAagbAHgPQAJgVgCgkQgFgYABgMQABgiAJgeQAEgNAMgRQAOgVAEgJQAIgSAIgoIAKgwQAEgcgEgVQAFgBAPAEQAMAEAHADQgHAaADANQAFAUgEARIgDASIgDASQgCAFgIAKQgHAIAAAIQAAAIAEAPQABAJgBASQAAAfgCALQgCAKgHALIgMATQgHAMgFAeIgEATIgFAUQgDAGgJAKIgOAPQgOAWgFAKQgEAKgBASIgBAcIgFAdQgDARAAAMQAAASAGALQACAFAGAGIAJAKQAbAggEAKQADAQABAdIABAbQAAAXACAGQADAQAPADQANADAPgFIAagKQAYgKAYAFQAPACAHAJQACADAKATIALAbIAGAKIAGAJIAIAQQAFAHAJAFQAMAHAXALIAjARQAJAEAPANIAOAJQAJAFAFAGIAPAOQACACAHAQIgEgFIgHgDQgOgFgQgOIgcgYQgIgGgJAAQgLAAgHgBQgNAAgLgIIgggbQgHgGgDgGIgHgOQgNgWgGgLQgMgZgNgFQgPgIgXAIQgKACgbANQgTAJgVAAQgZAAgKgRQgGgIgCgTIgCgfQgBgagCgJQgCgHgEgHIgIgNIgFgMIgFgMQgIgLgDgHQgIgYAAgeIgBggQgDgYgLADQgEgCgGAGIgJAIIgeAVIgvAbQgdAPgQAPQgSAPgMANIgyA6QgcAhgRAbQgNAUgEASQgEAPACARQACALABAYQADARAJAVIAOAkQAOAnA0AkQAhAWAOAZQAFAJAEAOIAGAYQAJAdAHAJIALAQQAIAJAGAEQASAMAuAYQAXANAIAMIAHAJQAFAGACADQAEAIACAQQADATACAGIADAKQABAHACAEIAHAHQAFAEAAAEQAEACAGAHIAJALIAZAWQAjAdALANIAbAeIANAPQAHAIAHAEIAZAPQAJAFAMALIATAQIAPAKQAIAGgBAIQgDADgFAAQgLAAgRgRg");
	this.shape_1268.setTransform(506.9712,356.2973,1.4749,1.4749);

	this.instance_65 = new lib.Path_6_5();
	this.instance_65.setTransform(629.65,272.8,1.4749,1.4749,0,0,0,13.8,7.5);
	this.instance_65.alpha = 0.5117;
	this.instance_65.compositeOperation = "multiply";

	this.instance_66 = new lib.Path_7_5();
	this.instance_66.setTransform(648.8,262.8,1.4749,1.4749,0,0,0,12.5,9.4);
	this.instance_66.alpha = 0.4688;
	this.instance_66.compositeOperation = "multiply";

	this.instance_67 = new lib.Path_8_5();
	this.instance_67.setTransform(608.45,246.1,1.4749,1.4749,0,0,0,6.5,11.7);
	this.instance_67.alpha = 0.5703;
	this.instance_67.compositeOperation = "multiply";

	this.instance_68 = new lib.Path_9_5();
	this.instance_68.setTransform(462.2,298.4,1.4749,1.4749,0,0,0,13.5,6.6);
	this.instance_68.alpha = 0.6094;
	this.instance_68.compositeOperation = "multiply";

	this.instance_69 = new lib.Path_10_5();
	this.instance_69.setTransform(495.8,287.45,1.4749,1.4749,0,0,0,11.3,11.8);
	this.instance_69.alpha = 0.3281;
	this.instance_69.compositeOperation = "multiply";

	this.instance_70 = new lib.Path_11_5();
	this.instance_70.setTransform(495.95,253,1.4749,1.4749,0,0,0,7,10);
	this.instance_70.alpha = 0.5;
	this.instance_70.compositeOperation = "multiply";

	this.instance_71 = new lib.Path_12_5();
	this.instance_71.setTransform(479.75,443.55,1.4749,1.4749,0,0,0,16.6,26.2);
	this.instance_71.compositeOperation = "multiply";

	this.instance_72 = new lib.Path_13_5();
	this.instance_72.setTransform(480,200.6,1.4749,1.4749,0,0,0,15.9,30.7);
	this.instance_72.compositeOperation = "multiply";

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#5C8EC7").s().p("ABtC1IgMgLQgTgTgDgHIgDgJQgCgHgDgDQgHgKgUgJQgUgIgHgLQgKgQgDgQIgBgRQgBgKgEgEQgGgIgQgIQgQgIgGgIQgCgCgDgJQgDgHgEgEIgQgNQgJgEgEgEQgXgTgLgdIgKgXQgGgOACgKIABgEQABgEAEgFIAEgIIAEgMIgCgDQgCgEABgDIAFAAIgCAKIACAEQADAFAEAKQAHAUADAEQAFAHAKAWQAKAUAJAGIALAHQAIADADACQADADAEAGIAFAKQAFAHACAHIAFAMQADAFAMAGQALAMADAFQAKAaABAMQACAOADAHQAEAIAKAGIATAHQAMAEAFAGQAEAGAGASQAFAQAIAGQAFAEAVAHQARAGAFALIgLAFIgEAAIgEABQgCADABAFIACAIQgFAAgIgJg");
	this.shape_1269.setTransform(552.9288,304.8809,1.4749,1.4749);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#5C8EC7").s().p("ACfDfIgQgIQgDgCgEgFIgHgGIgSgJIgQgNIgYgPQgFgDgMgRIgLgLQgHgHgDgFIgOgbQgEgHgEgLIgHgSIgGgOIgDgPIgFgVQgLgTgUgJIglgOQghgNgZgZQgLgKgTgLQgZgPgLgQQgFgGgDgJQgMgRgFgMQgGgMgBgSQAAgRAFgNIAMANQACACAGAAQAHABACABQAEACACALIAEAPQAKAZAQAYIAJALQADADAFACIAHAIIAHAHQAUAQAKAEQAKAEATANIAcAPQAFACAIAGIAMAIQALAFANARQAIAJACAQQACAOAHAaIABAMQAAAIACAEQADAHAFAHIAJAMIAKAPQAFAJAGAEIAhAZIAIAGQAFAEACADIADAGQABAEACACIAJAIQAJAEAPgGQAMgGAOAAIAUgCQAJAAAKAGIALAEQAIAEABADQgGgBgGABIgNAEQgHACgLgBIgTgBQgRAAAOALQARANgKAEIgCAAQgFAAgLgFg");
	this.shape_1270.setTransform(556.3941,390.3814,1.4749,1.4749);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#5C8EC7").s().p("AA3A4QgFgCgJABQgTADgGgFQgEgDgEgHQgEgIgDgDIgIgGIgKgFQgQgHgFgFQgIgGgFgPIgEgMIgFgKQgFgIAAgEIgBgJIAAAAIgBgCIACAAIgBACIACgBIAMgGQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACAGIAEAHQACADACALQACAKAEAEIANAUIALAGIAIAIIAKAJIAEAKQAGAHAFACQAFACAJAAIAMACQALADAGAOQgBgCgMgFg");
	this.shape_1271.setTransform(544.119,366.3208,1.4749,1.4749);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#5C8EC7").s().p("AAAAUQgLgBgGgIQgFgGgDgMQgDgNAFAAIAEABQAFACAHAGQAHAFAPAHIALAIQADAEgKAEQgIAEgJAAIgCgBg");
	this.shape_1272.setTransform(530.3513,352.0883,1.4749,1.4749);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#5C8EC7").s().p("AAmAhIgSgCQgLgBgRgJQgRgHgIgFQgOgJAAgLIAAgCIAAAAIABAAIAigSQAGgDAEADIAIAHIAgAGQAGABACAEQABACAAAJIABAOQABAKgBAFQgBAFgCABIgDAAIgEAAg");
	this.shape_1273.setTransform(507.9106,327.3908,1.4749,1.4749);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#5C8EC7").s().p("AB9EQIgIgHIgFgJIgFgKQgMgLgEgGIgFgNQgDgJgDgCIAAAAQgEgbAKgwQAEgUAEgKIAIgbQAEgUAEgJQAGgSAJgIQgEgIgaAJIgfANQggANgVACQgWACgFAHQgFAGgDANQgFAQgCAEQgDAGgJAIIgQASQgGAFgYAOIgMAJQgHAFgGACQggAOgOAKQgOAJgDADQgCADgBAHQAAAGgEADQAEgWATgTQAUgUAbgLQAVgJAQgMIADgCIABgCIAAAAIAGgFIACgEIAFgGQAKgJAHgMIAIgRIACgJQAAgGACgCIAFgFIAFgFIAIgLQAEgFAGgCQAXgKAggEIANABIAMAAQARgCAXgLQANgHANgVQAKgRgIgfQgKglACgMQADgOAAgIIAFgsQAHg6ATgaIAFAQQADAHABALIADAQQADAIgDAHIgOAjQgCAJgDAfQgEAsAIApQAFAfgOAfQgHARgQAgIgLAaQgSAkgEAnQgEApAPAjIAGALQAGAPADAUQgBgEgDgEg");
	this.shape_1274.setTransform(606.1551,412.6005,1.4749,1.4749);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#5C8EC7").s().p("ABYCcQgFgOgCgCIgJgIIgIgHQgDgDgHgNQgEgIgIgIIgOgPQgHgHgWgPQgMgHgEgIQgDgPgEgHQgMgggIgQQgPgYgFgPIgKgiQgDgJgCgDQgCgEgHgDIAAAAQgEgCgFgRQgHgWAFAAIAJgCQgBADAEADIAFAGIAOAKQAIAHAEAGQAJASAHAZQABAGABANQADAZAFANQACAGAHAGIAKALQAHAKAIAZIAIANIADAHQACAEACACIATAOQAHAEAMALQAPAMAHANIAHALIAHAMIAGASIADAHQABAFgDACIgDABQgEAAgFgJg");
	this.shape_1275.setTransform(668.2892,394.9922,1.4749,1.4749);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#5C8EC7").s().p("AAXAkIgXgGIgWgJQgOgGgDgJQgJgXAJgbIALANIATAPIAfAXQAMAJAFAHQAHAKgBAMQgIgGgOgDg");
	this.shape_1276.setTransform(642.4744,367.9678,1.4749,1.4749);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#5C8EC7").s().p("AAWBQQgDgOgDgHQgEgIgGgLIgLgTIgIgOQgFgHgCgHQgGgSgDgSQgDgYAHgKIATgXQgEAGADATQACAPAHAQQAQAbAFAbIAHAuQACAbgGASQgCgFgCgQg");
	this.shape_1277.setTransform(630.8074,328.3311,1.4749,1.4749);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#5C8EC7").s().p("AgdAUIADgRIAAgQQABgMAGgCIgCgCIAUgBQAKAAAIgCIALgCQAEABgDAHQgCAEgFAEIgJAHQgHAGgLAMIgNAOQgGAMgCACQgEgDABgMg");
	this.shape_1278.setTransform(639.7479,301.2306,1.4749,1.4749);

	this.instance_73 = new lib.Path_24_4();
	this.instance_73.setTransform(552.35,438.4,1.4749,1.4749,0,0,0,73.5,54.1);
	this.instance_73.compositeOperation = "multiply";

	this.instance_74 = new lib.Path_25_3();
	this.instance_74.setTransform(668.6,256.6,1.4749,1.4749,0,0,0,8.1,7.2);
	this.instance_74.compositeOperation = "multiply";

	this.instance_75 = new lib.Path_26_3();
	this.instance_75.setTransform(691.55,289.2,1.4749,1.4749,0,0,0,5.5,6.6);
	this.instance_75.compositeOperation = "multiply";

	this.instance_76 = new lib.Path_27_2();
	this.instance_76.setTransform(676.3,247.65,1.4749,1.4749,0,0,0,4.5,6);
	this.instance_76.compositeOperation = "multiply";

	this.instance_77 = new lib.Path_28_2();
	this.instance_77.setTransform(432.55,264.2,1.4749,1.4749,0,0,0,5.8,4.9);
	this.instance_77.compositeOperation = "multiply";

	this.instance_78 = new lib.Path_29_2();
	this.instance_78.setTransform(426.7,260.2,1.4749,1.4749,0,0,0,3.6,4);
	this.instance_78.compositeOperation = "multiply";

	this.instance_79 = new lib.Path_30_2();
	this.instance_79.setTransform(417.3,301.85,1.4749,1.4749,0,0,0,9.4,4.2);
	this.instance_79.compositeOperation = "multiply";

	this.instance_80 = new lib.Path_31_1();
	this.instance_80.setTransform(402.35,300.2,1.4749,1.4749,0,0,0,1.4,5.8);
	this.instance_80.compositeOperation = "multiply";

	this.instance_81 = new lib.Path_32_1();
	this.instance_81.setTransform(480.15,484.15,1.4749,1.4749,0,0,0,15.5,2.8);
	this.instance_81.compositeOperation = "multiply";

	this.instance_82 = new lib.Path_33_1();
	this.instance_82.setTransform(559.05,200.3,1.4749,1.4749,0,0,0,15.3,31.9);
	this.instance_82.compositeOperation = "multiply";

	this.instance_83 = new lib.Path_34_1();
	this.instance_83.setTransform(570.5,191.55,1.4749,1.4749,0,0,0,43.6,35.2);
	this.instance_83.alpha = 0.7891;
	this.instance_83.compositeOperation = "multiply";

	this.instance_84 = new lib.Path_35();
	this.instance_84.setTransform(504.55,136.7,1.4749,1.4749,0,0,0,7.2,11.2);
	this.instance_84.compositeOperation = "multiply";

	this.instance_85 = new lib.Path_36();
	this.instance_85.setTransform(468.55,155.15,1.4749,1.4749,0,0,0,14.7,2.4);
	this.instance_85.alpha = 0.8906;
	this.instance_85.compositeOperation = "multiply";

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#EDC564").s().p("AgZA6QABgWADgXIAEgUIAFgVQABgHALgaQAKgWgBgLQARAHABAeQAAAOgFAdQgJAngNAbIgHAYQgHASgDABIgBAAQgJAAACglg");
	this.shape_1279.setTransform(524.7769,287.4427,1.4749,1.4749);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#EDC564").s().p("AhcI6QgDgMAIgVQAKgXADgJQANgvgQguQgVgtgFgZQgFgVAHgZIAQgtQAXhGAJgwQAOhCgCg3QgBgeglgrQgjgoAEgiQAKgfADgNQAEgXgWgMQgZgNgKgXQgHgQgEgkQgEgjghgXIhAgjQgVgLgNgZQgNgegJgQQgRgjgGgPQgLgeADgYQAJABALASIAOAbQANAaAOATQAWAcAiAWQAjAXAXAjQATAcAaATQAfAXAdgBQAWgBAlgHQAugJANgCIAngEQAXgCAQgDIA+gOQAngJAXgEQAQgCAfAAQAEAAATgEQAOgDAJACQANA4gPAVQgHAJgQADIgbAFIgeAJQgSAHgMABIggAGQgRADgNAHQgtAZgVAxQgSAsAFA1QAHBOgeBrQgMAtgNBIIgWB3IgEAbQgDAPgEALIgLAgIgNAgQgVAtgWArQgMAVgGAHQgFAFgEAAQgFAAgDgMg");
	this.shape_1280.setTransform(634.6024,344.8584,1.4749,1.4749);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#EBBCBB").s().p("AkWGRQgdgKgPgiQgKgYgFgnQgHgygFg5QgDggAJg1QAJgzAWg7IAJgbQAEgRAGgKQAGgNAFgUQADgQADgGQAEgLAJgHQAYgRAbgiQAegmAQgTQAbgeAvgeIBSgxQApgZA0gUQAngPAqAQQATAGA3AhIARAJIARAKQAFAFAIAJIANAPQAFAEASALQAOAIAGAIQANATgEAbQgCAPgKAgQgFAegFAOQgGAVgOAUQgnA7AKAxQACANAAALIgCAYIgBAVQAAALgFAIQgGAKgdAhQgPAQgbAWIgdAbQgRAQgOAGQgNAFgIAHQgJAIgPADQgHACgRALQgcAVgRASQgGAGgcAXQgZAVg2AEIgTgBQgNAAgHABQgFABgGAFIgLAHIgaAQQgpAVggAAQgOAAgNgEg");
	this.shape_1281.setTransform(480.4696,284.0216,1.4749,1.4749);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#EDC564").s().p("AHmJXQgggUgJgEQgVgIhDgKQg4gJgcgTQgYgSgegnQglgwgOgOQgSgSgzgZQgtgXgXgfQgjg+gWgdQgngzg0gBQgWAAgqAZQgmAVgbgGQgDgBgMgIQgMgHgIgCQgRgDgfADQgiAFgOABQgxAEgIgBQgjgCgPgTQgLgNgJgZIgMgqQgKgdAEgEQACgCAZAKQAaAKAGgBQANgCAYgJIAMgDQAIgCAEgDQAWgSAQgIQARgHAjgCQAlgCAQgGQARgGATgOIAggZQASgOAqgcQAogbAUgRQAJgIAvghQAigZARgUQATgXADgoIgBhEQAAg6AVgaQARgUAKgaQADgGAAgJIACgPIAFgpQAAgQADgIQAJgTgGgSIgEgHQgDgGACgCQABgBAHADIAIAEQAIADARACQARACAIADIAdAKQATAIADAKQAGAOgBAdQgBApgMAxQgEATgNAWIgXAmQgNAXgEAZQgCALgCAoQgBAfgTAjIgQAXQgLAOgEAIQgMAYgGAiQgDASgDAqQgDAZABAMQAAAVAIAPQAFAMANARIATAcIASAjQALAXAJAMQAXAiANAYQAOAeAbAWQASAPAnAWQAgARAWA9QAWA8AfASIATAKQAIAFAEANIAEAVQADAJALAIQAIAGAiAHQAcAKgHASQgFANgNAAQgIAAgLgFg");
	this.shape_1282.setTransform(513.1259,331.615,1.4749,1.4749);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#D65052").s().p("AFSOpIgOgHIgOgIQgpgRgUgHQgbgJgdgaQg0gugbgUIgkgbQgWgRgRgGQgOgGgWgDIgkgEQgmgEgegUIgtgbQgagQgQgPQg6gygdgbQgzgwgZgpIgQgeIgRgeQgFgKgLgNIgRgWIgbgpQgEgGgIgJIgNgPQgGgHgFgKIgIgSQgGgKgPgOIgYgXIgoglQgZgXgOgQQgNgQghgcIgvgpQgagYgQgXQgEgGgKgJIgOgNQgDgDgDgJQgEgJgDgDQgPgPgHgLQgcgtgLgYIgKgXIgKgXQgZgtgIgTQgMgZAGgMQA4ATAGgBQAQAAASgIIAegRQAVgMAMgEQAPgEAngCQAjgBAUgIQAagMAjgfQArglAQgKIAkgYIAjgZIAogfQAZgTAPgOQASgSAKgTQAKgSAEgaIADgnIgDgmQgCgYAFgNQAEgOARgWQARgXAFgOQAHgSADgmQABgJAFgOQAGgRABgHQACgOgFgTIgDgLQgCgIAEgCQADgDADADIAFADQAJADAQAJQAPAIAKADIAgAHIANAHQAIAFAEABIAdAHQAKADAcAAIA0gFQAFAAAfACIARAAQAKAAAIADQAGACAKAIIANAFQAJADAEADQAHAGAIAZQADAKAHARIAKAbQADAIADAOQADALAIAGQAZAPAEAFIAIAKIAHAKQAHAHAVAPQATAMAHAMIAZAgIALARQAHALAGAEQACABAFAAQAFAAACABQACABACADIADAFQARAMAlAGQAmAHAagFIAcgHQATgFAKgBQATgDAmgBQASgDAUgGIAkgOQBLgeA3AGQAIABAPgBQANABAGAIQAEAHABASIABAZQAEAbANA1IAEAbQACARADALQADAIAFAKIAKAQQALATALAoQADAKAJANQAKAPADAHQAGAQAFAlIAKAyQAFAcACAXQACAxgZAwQgIARgOAWIgXAlQgQAbgEAfQgCATgKAgIgRA0QgDAMgJAZQgJAYgDANQgFAXgJAgIgQA3QgEAPgGAgQgGAdgKARQgLASgIAYIgPAsIgPAuQgCAKgIAUIgLAdQgGAWgIARQgwBnh4BdQgMAJgaAKIgVALQgNAHgJACQgHACgIAAQgNAAgPgFg");
	this.shape_1283.setTransform(569.8661,380.9961,1.4749,1.4749);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#D65052").s().p("AgpAOIgKgsQgBgGgGgPQgFgNgBgJQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQgBAJAdABQAUACAWgDIATgCQAKAAAHAHQAKAJAFATQAEASgDAOQgIAhgbAEIgRADQgKACgGAEQgGAEgIAKQgJAMgEADQgDgfgGgeg");
	this.shape_1284.setTransform(691.6804,289.4244,1.4749,1.4749);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#D65052").s().p("AgTAkIgsgoQgZgagIgYQADgEADAHQAKgGAOgGIAdgLIAcgPQARgKALACQAJABAMALIARARQAdAdAKAeQAFALgKAMIgTAVQgYAjAAAdQgZgSgqgtg");
	this.shape_1285.setTransform(669.6952,254.0571,1.4749,1.4749);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#D65052").s().p("AhmBCIgEgSQgFgbAKgiQAGgSAJgIQAJgJATgHQAhgMAxgDQAcgCA4gBQABACgDAKQgFANgBAHQgEAcgFAPIgGAYQgFAIgPAAQgIABgPgCIgXgCQgeAAgdAIQgPAFgOAKIgKALQgHAIgEABIgCAAQgHAAgDgIg");
	this.shape_1286.setTransform(416.4748,298.4066,1.4749,1.4749);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#D65052").s().p("AgQAzQgbgMgEgDQgSgLAAgPIAAgCQACgRAVgdQAVgZAVAFQAGABAMAHQANAHAHABQAGACAMgBQAJABABAKQAAAFgFANQgGAMAAAFQgEAcgCAHQgFATgXABIgCAAQgPAAgUgJg");
	this.shape_1287.setTransform(431.6269,263.0103,1.4749,1.4749);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#D65052").s().p("AjkHuQgogigOgHQgPgIhCgrQgZgMgKgKQgQgRgJgHQgPgMgIgQQgDgFgCgKQgCgKgDgFIgQgbQgJgRgCgLQgFgygCgdQgChOALhEIADgeQABgTADgLQAHgfAPgXQAUgdA1g5QA1g4AhgYQAVgPAigXIA4gkQAUgPAIgVQAEgMgCgNIgEgZQgDgbAAgKQADguAagHQAVgFAQAKQARALACAVQACALAAAdQACAaAKALQAJAKAUAEQASAEAPgEQAOgDAbgJQAZgGASAEIATAHQAKAFAIABQAiADATgGQAMgEAIgJIAOgSQApg5AeAMQAMAFAJANQAJAMABAOQABANgIAQIgOAaQgFAQAHANQAFAIAQAPQAbAaAOgKQgBAHAFAGQAFAHAHgDQAFgDAGgNQAGgPACgDQAUgbARgDQANgBAPAHQAjASgeA2IgZApQgMAYADAYQABAIAGALIAMAQIARAUQAKAMAFAJQAFAKAEAQIAFAbQABAEgCARQgpAGgfgJQgKgDgQgCIgbgDQgKgCgrAAQggAAgTgJQgXgMgiAAQgOAAgHgFIgQgRIgLgLQgGgFgHgBQg0gHg+AiQhaAzghBnQgRA4gCAbQgCAngHAYQgGAWgDAhIgDAXQgDAOAAAJQAAAIADAOQADAPAAAIQACA5gRAwIgCAFQgJAWgMAGQgGADgHAAQgSAAgcgUg");
	this.shape_1288.setTransform(561.8507,167.8254,1.4749,1.4749);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#EBBCBB").s().p("AhpFHQgegLgbgdQgdgigSgQQglgfgSgRQgggdgNgbQgNgcgJggQgKgjgCgcQgBgWAIgcIAQgwQASg0AqgyQBZhoBKgMQAJgCAngPQAegMASAEQAAAKgGAVQgEAVgBALIAAALIAMBHIABAUQADALAGAHQAOAQAhAcIAcAcQASASAMAKQALAKARAYQAQAYAMAKQAbAXASAbQAIALAPAMQATAOAGAGQAXAbAIALQAaAkAIAaIAIAeIAGAPQADAKgDAHQgSAAgQgDQgvgIgYAJQgIADgbANQgWALgPADIhNATQgtAJghgCIg7AEIgQAAQgZAAgQgGg");
	this.shape_1289.setTransform(634.5939,249.1753,1.4749,1.4749);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#5C8EC7").s().p("AA/F0IgsAAQgbAAgRgDQgUgDgYgJIgrgSQgdgMgHgFQgPgLgEgWQgCgPABgWIACglIAAhXQAAgzgDgkQgIhhAHieQABgVgCglIgCg5IAAgZQACgSAJABQAEABAJAOIAMATQATAbAZATQAQAMAWAWIAjAkIAwAxQAeAfAUARQAOAMAQAWIAcAlQAOAQACAdQAAAIgCApQgBAeAHAoIANBGQACASAAAhQABAjABAPQADAXgDAMQgEAOgNAOQgSAUgZAFQgLACgUAAIgTAAg");
	this.shape_1290.setTransform(478.6825,433.181,1.4749,1.4749);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#5C8EC7").s().p("AhZFaIgGgLQgCgDgMgIIgSgNQgJgFgLgBIgagBIgaAAIgRgDIgIACIgHABIgMABQgcADgVgFQgIgCgQgHQgRgHgIgCQgfgEgNgHQgIgGgFgBQgDgBgGAAQgFAAgDgCQgDgCABgFIADgHIABgDIADgLQABgHAFgLIAIgSQAKgpAGgrQADgOADghIAAgOQAAgJACgFQAGgMAAgeQAAgmABgGQALg6AJgdQANgmATgiQAKgSALgOQAEgGAEgKIAHgPQADgFAKgKQAMgMAhgVIAYgSQANgLAOgCQAPgEANADQAIACATAIQAbAJAvAIQA4AJASAEQAXAGAgADIA4AEQATACAhAFIA0AGQAfADA9ABIAagDQASgDAIAEQAVAJADAtQAAALgCAUIgCAfQgBA5gBAQQgCATgFAFQgEAFgUAFIg+APQgjAIgbAEQiDARhdBMQggAbglA/QgJAPgJAYIgNAqIgLAeQgFASgBANQgCAKAEARIAFALQACAHgCAEQgCAEgEAAIgBAAQgCAAgDgDg");
	this.shape_1291.setTransform(596.4837,205.2683,1.4749,1.4749);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#5C8EC7").s().p("AjWFsQABgKAHgWQAHgUABgKIAFgrQACgZABgSIALiqQAIhjgIhGIgIg2QgFghABgWQABgQgHgbQgIgfAAgOQgBgnAPgJQAIgFAUAAQAYABAFgBQAQgDAbABIAsAAIAggBIAfgBQA3gFAgALQAQAGAFAFQAGAGACAPQADAegEAvIgHBNQgEA9AFAqQAHA8AXAlQAFAIAEAPIAIAWQADAHAOAMQAOALACAIIgCAAIANAGIgSgBIgNAAIgCAAIgDABIgcALQgcAMgPAFQgYAGgNAFIggALQgSAGgMAIQgeAUgWAUQgSARgmAeQggAbgQAbQgpBFgbACQgBgFABgLg");
	this.shape_1292.setTransform(471.6669,208.9774,1.4749,1.4749);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#5C8EC7").s().p("AgkBhIgYgUQgbgOgMgMIgPgMQgJgGgEgIQgDgGgBgOQAAgOAFgDQgJAFALgaQAKgVALgSQALgPARgNQAUgQAOAAQAIAAANAFIAUAGQAXAEAZAQQAxAfAjASQgKALgZAQQgaAPgLAKQgjAkgPAZIgJAVQgFANgHAGQgJgGgQgOg");
	this.shape_1293.setTransform(496.81,136.8571,1.4749,1.4749);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#97F0FF").s().p("EhIfAJLIAAyVMCQ/AAAIAASUIkCAAIAAABg");
	this.shape_1294.setTransform(404.375,26.575);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#0D110E").s().p("AjFBLQAFgCAIABQANgVAXgUQAOgMAegVQAigXAMgHQAZgPAYgKQA2gVA1gEQAngCAQADIAbAFQARADALgBQgLACgRgCIgbgDQgUgDgjAEQg4AGgvAUQgdAMgVAMIgtAdIgtAfQgYAUgOATIgBAAQgIgBgEACQgEABgHAFQAGgGAEgBg");
	this.shape_1295.setTransform(453.372,286.4863,1.4668,1.4668);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#0D110E").s().p("ABzDOIgfgHIg+gKQghgFgdgHQgfgJgcgPQg+gigogpQgYgYgMgdQgKgUgGgFQgHgIgSgIIgdgLQgTgHgLgGQgegQgRgbQgIgPgDgPQgDgMABgTQAEgeAPgfIgBgBIACABIAAABQgQAhgBAbQgCAOAEARQAEAPAIANQAQAaAdAPQAKAFATAHIAeALQASAHAKAKQAHAGAKAVQAMAcAXAWQAmAoA/AiQAbAOAeAJQAUAGApAHQAoAGAWAEIAfAHQAOACARAAQAagBAkgIQAhgHAegDQAqgEBUABQhQABguAGQgiAEgcAHQgpAJgWAAIgJAAQgMAAgLgBg");
	this.shape_1296.setTransform(624.7132,323.6033,1.4668,1.4668);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#0D110E").s().p("AhPBJIgFgHQgEgJgCgIQgDgSAGgTQADgJAHgFQADgDAFgCQAFgCAFABIASAHQAKADAGgBQAJgBAWgLIA8goQARgNAJgLQgKAOgPAMIgdAWIgeATQgVAMgMACQgIABgKgFIgQgGQgHgCgIAGQgHAFgDAJQgGAQADASQACAKADAHIAEAIQAEAFADgCIgCAAQgDAAgDgDg");
	this.shape_1297.setTransform(606.3042,302.1178,1.4668,1.4668);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#0D110E").s().p("AA/AnQg3gOgbgGQgfgFgLgBIgVgBQgNgBgJgCQgagEgJgSQgFgJgBgMQgCgFACgGQABgEADgDQgDADgBAEIABALQACALAFAIQAKAQAYAFQALACAfABQAPAAAcAFQAVAFA9ARQA2AOAdADQgkgBgwgNg");
	this.shape_1298.setTransform(639.5858,316.1932,1.4668,1.4668);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f().s("#0D110E").p("AAOkUQgFAAgMADQgFACgHAEQgKAGgBABIgcAPQgWAMghAWQhEAzgiAZQgrAegDAIQgQAjgMASQgYAZgIALQgPARAKAWQAIARgIAUQgGANASAKQAfARAFAGQAEAGARAaQARAXAZALQAPAHAlANQAtAUBaA2QACABACABAgYESQAFgCAvABQBTADAPgCQAbgDArAEQArAFAcgEQATgDATgLQAVgNAAgPQAAgKAAgIQAChbgGAfQgJAnANAV");
	this.shape_1299.setTransform(629.3125,298.5926,1.4697,1.4697);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#0D110E").s().p("AAABPQAGgOADgLQAEgPAAgMQACgPgBgMQAAgZgNgbIgNgXIgFgNQgDgHADgHQgCAKAKAPIAOAYQANAZABAcQAAAOgBANQgBAPgEANQgFARgWAfIAOgYg");
	this.shape_1300.setTransform(502.2357,346.9049,1.4668,1.4668);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#0D110E").s().p("AB2BMQgHgJgFgDQgGgFgIgDIgRgCQgLgCgGgCIgBgBIAAgBIADgWQABgQgCgFQgDgIgLgEQgKgDgLAAQgPAAgcAEQgeAFgOAAQgcAAgQgKQgRgMgNgVQgNgXAAgTQgBgaAUgNQgSAOABAZQABAUANAVQAMAUARALQAOAIAcAAQANAAAfgFQAbgEAQAAQAPABAHADQAGABAFAEQAGAGABADQACAHgBAQIgDAVIAOADIARADQAIACAHAHIAMANQAIAKALASIAMAXQgQgcgRgWg");
	this.shape_1301.setTransform(470.2736,337.4439,1.4668,1.4668);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#0D110E").s().p("AAOAbIgQgFIgRgFIgRgBQgZABgLgEQgFgCgKgIQgKgGgGAAQgIAAgGAHIgEAIQgBAGABACQgCgDABgGIAEgIQAGgIAJAAQAIgBAJAGIAPAJQAHADAKAAIASAAIASABIARAEIAQAGQAIABAJgBQAOgBASgLQALgFATgNQATgOAKgGQgIAGgUAQQgSANgLAHQgSAKgQACIgJABIgJgBg");
	this.shape_1302.setTransform(451.8082,388.3611,1.4668,1.4668);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#0D110E").s().p("AkfFHIAAAAIgDAAIgCgBIgBgDIAAgBIABAAIAGAEIABAAQAbAPAdgFQAXgEAlgUQArgXASgFIARgEQAHAAAKACQAJACAGgBQAJgBAHgCQALgEARgLQATgMAJgEIAfgMQAVgIAKgFQAcgNATgdQAHgKAJgSIAQgdQAMgTAIgJIAWgYQAZgbASgXQAXgcANgaQAKgRABgMQADgPgDgRIgGghQgDgTAAgOQAFgsAAgWQABgQgEgRIgHggQgEgSgHgNQgFgKgEgDQgFgFgGgCQAGACAFAEQAFAFAFAJQAGALAGAUQAEALAEAVQAFAQAAARQAAAWgEAsQgBANAEATIAGAhQAEATgDAPQgCAPgJARQgOAbgWAcQgTAYgYAbIgWAYQgHAIgMASIgQAdIgRAdQgUAggeANQgLAFgUAHIgfAMQgJAEgTAMQgSALgMAEQgKADgHABQgGAAgLgCIgQgCQgEAAgLADQgRAFgrAWQgnAUgYADIgMABQgYAAgWgOg");
	this.shape_1303.setTransform(476.8321,364.8776,1.4668,1.4668);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#0D110E").s().p("AANBbQgRgNgGgHQgLgNgFgOQgFgOgCgRQgDgXADgnIAHg+IAIABIgIA+QgEAmACAWQABARAEAOQAEANAKAOQAGAHARANQAQAMAFAKQgGgKgQgLg");
	this.shape_1304.setTransform(639.4758,449.8028,1.4668,1.4668);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#0D110E").s().p("Ah1BqQABgFADgHQABgDAFgGIASgPIASgPQAKgIAWgaQATgXAGgOIACgLIAAgLQgCgGABgGQACgIADgEQAEgEAQgIQAJgEALgHIASgOQALgJAKgDIAVgKIALgFIAHgBIAIABIgEAIQgBgBgIACIgfANQgJADgLAIIgTANQgMAJgJADQgOAFgDAFQgDADgCAGQgBAFACAGQABAIgBAEIgEAMQgGAQgUAVQgTAVgNANQgGAFgMAJQgNAKgFAFQgKAIgBAMQgCAOAGAIQgHgIACgOg");
	this.shape_1305.setTransform(619.8569,451.343,1.4668,1.4668);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#0D110E").s().p("AhtDiQAJgMASgQQAmgkANgWQAFgIACgKIADgTIABgTQADgLAGgIQAKgNAVgJIAlgNQAVgHANgJQAQgMAEgRQAFgTgHgSIgJgQIgJgSIgHgTIgDgTQgDgUgBgTIgBgnQABgbAEgNIAJADQgEANgBAYIAAAmQAAAOADAZQAEAbAFAKQAFALANAXQAHAVgFATQgHAUgQAMQgNAKgXAHQgcAIgJADQgVAJgJAMQgJAMgBAYIgCAUQgCAIgGAKQgOAXgmAiQgUASgHAKQgHAJgDAIQACgJAHgIg");
	this.shape_1306.setTransform(620.0643,429.4139,1.4668,1.4668);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#0D110E").s().p("ABKBNQgPgQgNgEIgRgGQgKgDgHgEQgMgGgNgTQgJgOgmgnQgNgPgGgQQgDgJgFgGIgFgFQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABIgEgIQACgCAEAAQAEAAACACQAFADADAEQAFAGADALQAFAPAMAPIAYAbQAOAPAIAMQAMATALAGQAFAEALADIARAHQAIADAHAGIANANQAPAPALADQgMgDgPgPg");
	this.shape_1307.setTransform(669.1607,407.0632,1.4668,1.4668);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#0D110E").s().p("ACBBqIgXgHQgJgCgMgJIgUgNQgKgHgLgDQgOgEgIgEQgJgFgKgKIgOgSIghghQgKgLgEgJIgIgXQgGgMgGgHQgJgJgJgGQgJgHgKgFQgFgCgFgBQgGAAgBACIgGgGQAFgGAJACQAHAAAGAEQAKAFALAIQAKAIAHAIQAHAIAFAOIAIAWQAEAJAJAKIAgAiIAOATQAJAJAJAFQAFADAQAFQAMAEAKAHIATAOQALAJAKACIAWAHIALAGQgGgEgFgBg");
	this.shape_1308.setTransform(671.5626,404.8467,1.4668,1.4668);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f().s("#0D110E").ss(0.9).p("AgqgHQAGAHAPAAQAJABAPAAQAGACAPACQAPACAEgB");
	this.shape_1309.setTransform(644.2667,393.309,1.4697,1.4697);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f().s("#0D110E").ss(0.9).p("AglhEQgIARAOAZQAMAXASAKQAPALALASQABADAQAh");
	this.shape_1310.setTransform(624.9269,360.0071,1.4697,1.4697);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#0D110E").s().p("ADGDHQgKgHgJgCQgOAAgHgCQgLgCgIgGIgTgLQgKgEgKgCQgagFgPAEQgRACgEAAQgIgBgNgGQgSgJgPgRQgOgQgJgTQgLgWgLgNQgKgMgUgRQgWgRgNgGIgTgIQgMgEgHgHQgFgHgBgPIACgWQAKgogMgpQgNgpgegdIAHgGQAfAeAMAsQANAsgLApIgDAUQAAAMAFAGQAFAGALAFIATAHQALAFAZATQAUARAKANQAOAQAIAUQAMAXALAMQANARASAJQANAGAHAAQAGABAOgCQARgEAaAGQALACAJAEIASALQAKAHAJACQAHABAOABQAKABAJAIIAIAHIAIAGQgFgDgLgKg");
	this.shape_1311.setTransform(661.3315,382.1088,1.4668,1.4668);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#0D110E").s().p("ACrBfQgHgJgJgCIgJgBQgHgBgDgCIgSgJQgQgGgYACQgHAAgMAEIgKAAIgIgCIgBACIgBAAQgOADgXgKQgXgMgIgHQgNgLgLgSIgTgfIgUgeQgMgQgQgEQgYgHgMgEQgVgIgJgSIAJgEQAGAOATAIQAKAFAZAHQANAFAEAEQAIAGAFAHIAUAgIASAgQAMARAMAKQAIAIAVALQAVAKANgCIAAgBIgBgEIADACQAIAFALgCIATgEQAagBAPAHIARAJQAEABAPADQAKADAGAJQAJALAGAAIAAABQgGAAgJgMg");
	this.shape_1312.setTransform(661.2215,398.5754,1.4668,1.4668);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#0D110E").s().p("Ag3CCQAEgEAIgSIAGgLIAKgKQAIgGANgIIAWgLQAVgMARgVQASgVgCgXQgBgXgNgYQgJgRgUgZIgQgTIgJgKQgEgJACgHIAJADQgEAHAMAKIARAUQAUAcAIAQQANAaABAYQAAAOgFALQgFANgIAJQgTAWgWALIgWALQgNAHgIAGQgKAIgFALQgKATgDAEQgHAKgOAJQANgJAHgLg");
	this.shape_1313.setTransform(641.3643,475.9674,1.4668,1.4668);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#0D110E").s().p("ABTBKIgYggQgXgggHgnQgHgXgNgGIgRgHIgSgFIgngKQgTgHgQgOIAHgGQANANASAHIAmAKIASAHIASAHQAKAGAEAIQAEAIADALQAGAmAWAhIAXAgQAJAPAIAUQgIgSgKgQg");
	this.shape_1314.setTransform(655.7942,469.1283,1.4668,1.4668);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#0D110E").s().p("AByE6QgGgPgIgFIgJgIQgEgEgDgHQgEgJAAgQQAAgTgBgGQgGgagRgSQgQgSgZgGIgYgGQgOgDgKgFQgLgFgJgLQgIgKgCgNQgCgKACgQIAFgZQADgTACgeIABgYIAAgZQgCgRgNgdQgLgXgBgaIAAgzQAAgfgGgRQgDgLgHgMIgOgUQgDgHgCgGIgGgYIAAgIIABgFQABgDAEgBIACAJIABgBIgBACIABAFIAFAYIAFAKQADAIAKAOQAHALAEAMQAFATAAAgIgBAyQABAZALAXQANAdACATIgCAyQgBAZgFAYIgFAZQgCAPACAJQABANAIAJQAHAJAMAGQAJAFAOADIAXAGQANADALAGQAKAIAJAJQASAUAEAZQACAHAAASQgBAPAEAKQADAGADAEIAKAIQAHAGAHAOQADAJADAPQgDgOgEgJg");
	this.shape_1315.setTransform(651.5099,431.5775,1.4668,1.4668);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#0D110E").s().p("AgZHxQAKgMAIgTQAIgXAJgIQAOgMAQgIQAKgGAXgKQATgKAEgPQAFgOgMgTIgPghQgHgUgJgMQgPgTgGgKQgSgggBgmQgCggAJgoIAIgjQAEgUAAgPQAAgWgEgNIgHgPIgIgRQgFgOgFgUQgGgYgBgMQAAgHADgMQADgLAAgGQAAgNgJgUIgRgfQgIgPgIgSQgGgRgDgTQgDgPACgVIAFgkQAEgWAAgNQAAgcgXglIgSgaIgCgDIgHgEQgDgDgDgIIgBgDIgFgLIAHgGIAFAJIADAJIACAGQABABAHAEIABABIABABIABACIASAaQAMAUAFANQAHATAAASQAAAOgEAWIgGAjQgEAeAOAoQAFAOAJASIARAgQAKAWAAANQAAAHgDAMQgDALAAAGQAAAJAGAZQAEASAGARIAOAhQAFAMAAAXQgBAPgEAVIgIAjQgJApABAeQABAnASAdQAGALAPATQAJAOAGASIAPAhQAGALABAGQADAJgDAJQgEAOgVAMIgQAHIgRAIQgPAIgOAMQgJAIgJAWQgHATgLAMIgLALIALgLg");
	this.shape_1316.setTransform(634.8653,423.455,1.4668,1.4668);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#0D110E").s().p("AAHBOIgGgTQgCgMABgJIADgKIAAgDIgHgYIgDgTQgBgHAFgNIAGgTQAEgPgBgFQABAEAAAGIgCAKIgFAUQgEAOABAFQABALACAHIAGASIABAGQABACgBADIgDAKQgCAIACAMIADASIABgBQABgBgBACIAAgBIAAACg");
	this.shape_1317.setTransform(596.5796,383.7589,1.4668,1.4668);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#0D110E").s().p("AgzCSIgDgYQgBgMgFgLQgGgPgBgJQgCgLADgNIAKhHQADgbANgUQALgSAXgSIATgOIARgQIAQgSIAQgSIAHAFIgQASQgJALgIAHQgHAIgMAJIgTAOQgWAQgLARQgMASgEAaIgHAvIgGAYQgCANABALIAHAXQAFAMAAAMIACAYIADAYIgDgYg");
	this.shape_1318.setTransform(608.0205,373.2345,1.4668,1.4668);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#0D110E").s().p("AhiB/QAGgFAOgHIAKgGQAEgFACgFIAEgLQACgFAFgEQAEgDACgHIADgLQADgIAEgCQADgDAHgEQALgCAIgKQAGgJACgMQABgGgBgPQAAgQACgJQACgMAMgIQAHgGAOgGQAagMALgNIAQgRQAFgHADgNIAJACQgFAQgFAGIgRASQgKAKgJAFQgGAEgPAGIgVALQgIAGgEALQgCAJAAAOIgBAXQgCALgIALQgHAKgNADIgKAFQgEAFgCAEQgCAQgHAGQgFAEgHAQQgCAGgEAEQgDADgIADIgUALQgGAFgEABg");
	this.shape_1319.setTransform(598.1479,366.5237,1.4668,1.4668);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#0D110E").s().p("ADCCYIgLgEIgkgKIgXgGQgKgEgNgIIgggRQgGgEgEAAIgCgBIgBgCIABgDQgqghgUgvQgHgNgJgHQgKgGgOgCIgbgCQgQgBgLgDQgNgFgMgGIgZgKQghgLgQgLQgZgSgNgUQgIgLgEgNQgDgJgBgFQgBgIAEgFQgDAGABAHIADAOQAEAKAJANQAQAXAWAOQAOAKAjALQAQAFAKAFQAOAHAKACQALADAQACIAbACQAPACALAHQAKAGAIAOQAVAxAtAhIABABIAAABIgBACIAGACIAKAGQAFADAGACIALAHIAWAKIAXAHIAvANQAHACABgCIABgCIAAgBIgDgCIgLgEIgMgEIgEgCIADgDQADgFAGgBIAKAAQAGAAAKgEIARgHIAMgCQgDgCgGgBIgSgBIgRACIgPAJIgQAKQgGACgEABQgFABgGgDQgEgCgMgIIgHgEIgJgEQgXgJgLgGQgOgIgPgQIgMgOQgFgFgGgKIgQghQgLgVgIgIQgIgKgYgFIgSgCIgSgHIgRgHIgRgEQgngKgcgWQgLgIgPgSQgRgTgCgMQADAMAQATQAUATAHAGQAeAWAkAHIATAFIARAHQAMAGAXADQAYADAKALQAIAJAMAWIARAgQAEAHAGAIIAMANQARARALAGQALAGAXAJIAIADIAJAFIAPAKQAFABACAAQAEgBAEgCIAPgKQAKgGAHgDQALgCAIgBQALgBAIACIAKADQAGAEABAEIACAFIgFAAQgIAAgIADIgRAHQgLADgHAAIgJABIAFACIAMAEQAEACACAEIAAAEIgCAFQgDADgFAAg");
	this.shape_1320.setTransform(561.5726,441.8453,1.4668,1.4668);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#0D110E").s().p("AAXAqQgHgDgLgIQgJgHgHgBQgSgDgDgBQgJgEgHgKIgWghQAJAKAQAVQAJAKAGACIATADQAJAAAKAIIARAKQAGADALgFIANgEQgEgCgFABIgJABQgGABgFgBQgHgBgLgIQgHgHgHgDIgRgJQgGgCgJgKQgHgKgNgWIALAPQAHAKAFAFQAJAJAFADIARAGQAGACAKAIQAKAIAFAAIASgCQAHgBAEACQAFACAEAFIAGAGIgJgBQgGAAgMAFQgHADgGAAQgEAAgEgBg");
	this.shape_1321.setTransform(546.0389,422.8267,1.4668,1.4668);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#0D110E").s().p("AANAEIgMgDIgNgDQgIgEgEgFQAKACARACQAJACAFAFQAGADACAJQgHgGgFgCg");
	this.shape_1322.setTransform(530.6372,413.0221,1.4668,1.4668);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("#0D110E").ss(0.9).p("AgbgDQAMAHAQgBQAKAAAVgD");
	this.shape_1323.setTransform(507.2945,394.908,1.4697,1.4697);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f().s("#0D110E").ss(0.9).p("AgxgFQAFgEAEAEQACACAEAEQAGAEATACQAOABAQgBQAZgBACgG");
	this.shape_1324.setTransform(506.2856,399.7391,1.4697,1.4697);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#0D110E").s().p("AB7BfIgkgXIgUgIQgEgBgGgEQgEgEgDgFIgEgKIgGgIQgFgDgEgBIgKABQgEABgHgDIgKgEQgKgFgIgIQgJgIgEgIIgHgUQgDgIgMgEIgVgGQgMgDgHgHQgIgMgFgFQgDgDgHgBIgKgDIgFgBIAFABIALACQAGACADADQAGAEAJAMQAFAGANAEIAUAEIAKAGQAEACADAHIAIATQAEAIAIAIQAKAHAHAEIAKAEIAJACIALgBQAGABAFADQAGAGAFANQAFAJALAEQAQAEAEAEIAPAJQgFgFgCgFIAAgCIACgBIAKgDIAEgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgDgCgFgCIgKgDQgOgBgHgCQgNgEgGgGQgDgEgDgFIgFgJQgGgKgJgCQgJgDgLgBQgOgBgGgFQgFgGgFgMQgFgPgDgFQgNgTgSgGQgKgEgIgJQgIgLgFgFIgHgHQAEACAEAEIANAQQAJAKAIABQAKAEAJAHQAHAGAHAKQAEAFAFAOQAEANAFAFQAFAEANABQAJAAAMADQAKAEAHAKIALASQAFAFAMAEIAVACIALACQAHAEACACIABAFQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgFADIgIADQADAFAHAFQALAIADAFIAGAKg");
	this.shape_1325.setTransform(546.4789,376.3515,1.4668,1.4668);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#0D110E").s().p("AhmG0QgTgJgOgbQgagygsgQQgYgJgUgPQgQgLgWgUIgTgQQgHgHgJgNQgLgSgIgcQgJgeABgTQABgbAJgXIALgWIANgVQAKgRAOgbQALgTAPgWIAQgTQAHgIAMgKQAagUALgMIAPgTQAIgLAKgFIgBgEIAAgEQAAgDADgCIACgCIACACQAOANAIAaIAGAVQADAMAEAIQAGAMAXASIAQAPQAHAJAEALQAFANAIAdQAHAZAMAKQAQANAVgIQAIgCAJgJIAQgOQAWgTARgDQAMgBAMAFQAHAEALAKQALAKASAXQARAQASAGQAVAJATgDQAbgBASAIQAHACANAJQANAGAFABIACAAIADgBIAHACIACABQgLgJgPgHQgVgIgmgJIgfgGQgSgEgNgFQgQgHgLgLIgKgNIgIgNIgLgLIgFgGIgEgHQgGgIgUACIgQACQgIABgFAEQgJAFgQAOQgIAHgFACQgKAGgGgBQgIgBgHgHQgGgHgDgHIgKgfIgIgcQgMgkgWgOQgQgKgIgKQgGgJgCgGQgDgHgBgIQgEghAJgfQAJggAWgXIARgZIASgaQAYgiALgSQAQgcAIgdQAHgVACgKIAAgPIAAAPQgBAIgHAXQgIAdgPAcQgGALgdAqIgRAaIgRAbQgVAWgJAgQgJAdAFAfQACATAIAKQAIAIAQALQAWAOAOAmIAJAdQAFAUAEAJQAIASALABQAGABAHgEIANgJQAUgRAFgDQAHgEAIgCIAQgCQALgBAFABQALABAFAHIACAEIACADIAFAFQAIAHADAFIAJANIAJAMQAJAKAQAHQALAFASADIAfAGQApAJAUAIQAkAQANAaIAEAHIgIgBQgGgCgGgEIgIgIIgHgFIgEgBIgCAAIgDABQgGgBgGgDIgKgEIgTgLQgTgGgWABQgXADgVgKQgTgHgTgRIgdggQgTgTgPACQgPADgVARIgQAPQgKAJgKADQgIAEgOgBQgLgBgLgJQgMgLgKgdIgMgpQgFgOgUgRQgYgTgGgOQgFgJgDgMIgGgVQgGgUgJgLIABAGIAAABIgDABQgHADgJANQgMAPgEAEIgTARIgTAPQgUAQgOATQgOAVgMAUQgRAggHAMIgNAUQgHAMgEALQgKAZAAAWQgBAQAIAfQAIAdALAQQAHAMAIAHIASARQAYAVAPALQAVAQAVAHIAWAMQAKAHAKAJQASATAKAWQANAZAUALQAJAFAOAEIAYAFQgigGgOgIg");
	this.shape_1326.setTransform(530.2318,408.1083,1.4668,1.4668);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#0D110E").s().p("ACvCgQgWgTghgSIgdgPIgfgPQghgRgWgXQgZgagKgeIgCgJIgIiwIgBgGIgDACIg1AKQgtAKgYAKQgTAJgLAJQgFAFgHAIQgFAJAAAHQAAAJAEAaQAIAcADAHQgGgKgGgYQgGgbAAgJQAAgHAGgLQAEgGAIgHQAMgLATgIQAYgMAtgKIA0gLIAFgBIgBgFIgCgGIAKAGQABAAAAABQAAAAABABQAAAAAAABQAAABAAABIgDADIAAAAIABAHIAJCoIACAPQAKAeAYAXQAUATAiAUIAdAOIAeARQAfARAXAWQAcAZALAeQgOgdgcgWg");
	this.shape_1327.setTransform(478.8948,443.1655,1.4668,1.4668);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f().s("#0D110E").ss(0.9).p("AiPijQA9AcBHBNQA5A+A0BRQAGAJAXAdQATAbgGAO");
	this.shape_1328.setTransform(651.3844,281.8095,1.4697,1.4697);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#0D110E").s().p("AgNAPQgBgIAFgLQAHgSARgLIgQAhQgIARACARQgFgHgBgMg");
	this.shape_1329.setTransform(688.2074,260.6555,1.4668,1.4668);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#0D110E").s().p("AgDAYQgFgKgCgPQgCgQAFgLQACgHAFgFQAFgGAHAAQgLAGgCAOQgCAKACAOQABAIADAQQAFASAEAHQgKgIgFgPg");
	this.shape_1330.setTransform(691.943,226.5884,1.4668,1.4668);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#0D110E").s().p("AgsACQAJgCAjgCQAegBAPgDQgIAGgNADQgLADgMAAIgGABQgUAAgTgFg");
	this.shape_1331.setTransform(574.6787,98.9123,1.4668,1.4668);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#E19391").s().p("AgsAEIBZgHQgPAGgdACIgtgBg");
	this.shape_1332.setTransform(574.6787,98.6077,1.4668,1.4668);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#0D110E").s().p("AARASQgLAAgLgIIgRgNIgRgPQALACALAHIARAMQAIAGAKACIAVAEQgLAEgJAAIgCgBg");
	this.shape_1333.setTransform(607.7556,108.9529,1.4668,1.4668);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#0D110E").s().p("AAFAzQgQgLgNgUQgLgSgGgUQgGgXAEgTQABARAIAXQAGASAMARQAMATANAMQASAOATAAQgGABgGAAQgPAAgOgKg");
	this.shape_1334.setTransform(517.5978,150.2955,1.4668,1.4668);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#0D110E").s().p("AADAAQgCgZgMgaQALAKAFANQAFALACAQQABAbgNAaQADgsAAgIg");
	this.shape_1335.setTransform(421.9563,215.4405,1.4668,1.4668);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f().s("#0D110E").ss(0.9).p("ABGhLQgHgIgSACQgVADgJAAQgcgBgNAAQgWABgTALQgUANAKA9QAJA8AVAMQAJAGAXgFQAMgCAUgFQAKgBAYADQAXACAIgB");
	this.shape_1336.setTransform(427.8267,216.0774,1.4697,1.4697);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f().s("#0D110E").ss(0.9).p("ABrB6Qg3AUhDgqQg/gngXg3QgHgRAUguQASgpASgSQAPgPAQAFQAHACAWAQQAIAFAWAKQATAJAHAH");
	this.shape_1337.setTransform(422.8631,181.2103,1.4697,1.4697);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f().s("#0D110E").ss(0.9).p("Ai1knQgJAaAHAyQAEAcAHAzQADBAADBeQACA1AEBrQABAtAYAZQAVAXAvAQQAqAOA3gHQAJgBBZgSQAVgEANgMQANgNACgUQABgIgDgMQgEgNgBgGQgBgNAEgTQAEgVACgLQABgLAAgWQgBgWACgMQAEgXABgKQACgPgCgR");
	this.shape_1338.setTransform(469.4162,473.9827,1.4697,1.4697);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f().s("#0D110E").ss(0.9).p("AgGhsQAABTANCF");
	this.shape_1339.setTransform(413.9562,346.259,1.4697,1.4697);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f().s("#0D110E").ss(0.9).p("AgqA9QAAgPAng3QAmg4AJAG");
	this.shape_1340.setTransform(419.3227,306.4588,1.4697,1.4697);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#0D110E").s().p("AhCEEQgfgLgXgkQgPgWgSgqQgHgTgVguQgTgqgJgZQgNgkgFggQgGgoAJghQACgKgDgYIgPhFIgEgSIgBgKQgBgFACgFIAIADIABAPIASBYQADAYgDANQgIAeAFAoQAFAhANAiQAIAZASApQAWAxAGARQAQAnAQAZQAWAiAeALQAcAMAogMIAigLQAUgHAOgCIAjgIQAUgGANgHQASgKAIgNQAGgKACgYIADgkIALgiIAMgiIANghIAVhEIAMglIgMAmIgVBDIgMAhIgMAiIgKAiQgCAJgBAbQgCAYgGALQgIAOgTAKQgVAMgvAKQgNADgVAHIgiALQgSAGgRAAIgEAAQgQAAgQgGg");
	this.shape_1341.setTransform(514.1977,277.6065,1.4668,1.4668);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#0D110E").s().p("AkbCpQgPgggGgdQgHgggCggQgEgoACgYQAGhIAigzQAVgfAbgOQAdgQAfgJQA9gSBEAEQBAADA+AYQAeAMAcAPIA5AfIBxA9Ihzg5Ig5gfQgegPgdgKQg9gWg+gEQhCgDg8ATQgaAIghAQQgaANgTAdQggAwgIBHQgCAUADAqQACAnAFAZIAIAfIALAeQARArADASQgEgSgSgqg");
	this.shape_1342.setTransform(590.4507,222.9792,1.4668,1.4668);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().s("#0D110E").ss(0.9).p("AIblUQAMgCAUgFQAVgEAQACQB3ARBTAnQBMAiAKADQA5ARAWgjQAIgMAFgaQAFgbgEgNQgEgQgVgLQgMgIgZgGQg9gPghgLQg7gVgVgeQgCgCACgHQADgJAAgBQAQgUAuAJQAZAFAsAMQBOAIAmAAQASgPgBg8QgBg9gVgIQgQgFgYAAQgbACgMAAQglACgSABQggABgWACQgYACgYgEQgOgCgggKQgRgFgpgHQgmgHgVgIQgngOgFgaQAAglgGgcQgIgvgFgYQgIgqgJgcQgbhVgigyQgLgRgSgTQgWgZgJgBQgEgLACgRQAEgbAAgCQADg3AGgTQAGgRARgiQARghAFgTQgHgbgIgLQgKgOgXgHQgVgGgMAAQgVgBgFAPQABACACABQACAAgCABQgigBgjBMQgtBjgEAFQgKgOADgoQAGgsABgPQAAgSAGgcQAGgjACgLQACgBgBgBQgBgCAAgCQgIgZgqgLQgqgLgWAPQgaARgFAwQgHBHgBADQgJAdgBACQgHASgHAKQgdAlglAaQg3AngTgoQgXgxgOgbQgYgygUgdQgLgQgVgRQgZgSgMgKQgagXgCgBQgSgMgQACQgUACgXAOQgmAXgDABQggAPgOANQgTASgFAeQgIAqAnAgQAKAIAXARQASAPAIAPQAIAQADAYQACAZACADAndnTQAAg6ABgNQABgoAEgfQAGgwAGgaQAJgqAPgeQAQghAcgcQAVgVAlgcQAMgJAlgeQAfgZAUgNQAKgHAhgSQAdgSAGgOQANgegfgxQgZgmgggYQgjgbgyAgQgJAHgIAGQgqAigUALQguAZghggQgTgTgag7QgghbgYgtQgrhQhCgBQgdAAgsALQgxANgYAEQg/AMgJAXQgGAPAOArQAHAXANAjQAEAMAQA7QANAsAHAcQACALAHATQAHAUADAKQAFAXAVBHQARA6AHAkQAHAnABA+QAABMADAZQAHBLAKCXQACAVAFAqQADAlgEAbQgEAdgTAeQgLARgbAiQgEAFgZAeQgUAWgGAOQgPAAgjgaQgbgUgSgBIAAAAQgVgJgiAlQgiAlAEAWQAFAdAlATQAuAZAFAIQAAACADA1QABAfgEAXQgLAOgcAWQgcAVgLAOQgSAYAKAcQAIAUAaAaQAKAKAVAGQAYAHAIAFQADASAOA3QAKAqABAeQABAegHBEQAAA7AjAfQgLAVAfAJQARAFAdAIQAOAKANAWQAHAMANAZQA0BSAeAkQAqAyBNArQArAYBaAwQAlAXBcAdQAcAJBBAQQA8APAgALQAcAKAwAYQA0AbAWAJQAeAMBEAVQBBAVAiAOQAQAHAuAYQAnAUAZAIQATAGApAIQAoAIAUAGQA1ARAyAMQB+AhBWgiQAvgSAsguQAtgxAgg9QAig/ALg/QANhKgEhiQgBgtgLiAQgCgZACgpQADgxgBgRQgBgfgHgoQgEgSgMgzQgOg8gbhAQgJgWggguQgcgogIgbQgEgLACgWQACgcAAgGQgBgMgGgUQgIgZgBgGQgCgLgCgUQgBgWgCgKQgBgHgMgrQgIgdABgUQAiAdAegxQAMgUACgVQABgWgNgLQgMgLghgFQgsgIgFgBQgDgBgfgQQgPgIgTAGQgBAAAAgDQAAgFAAgBQATgcApgOQADgQgQgfQgPgdgPgIQgOgJgfAMQgdAOgNAGQgCABgCABAIblUQgCAAgBAAAKYkYQABgBAAAAQAGgGgCAAQgjgagbgMQgmgTgeAEAuth4QgEAAgDAAQAAAEAHgEg");
	this.shape_1343.setTransform(550.1529,308.4375,1.4697,1.4697);

	this.instance_86 = new lib.Path_32();
	this.instance_86.setTransform(608.3,281.7,1.4697,1.4697,0,0,0,18.9,16.9);
	this.instance_86.compositeOperation = "multiply";

	this.instance_87 = new lib.Path_1_4();
	this.instance_87.setTransform(449,306.8,1.4697,1.4697,0,0,0,24.9,21.1);
	this.instance_87.compositeOperation = "multiply";

	this.instance_88 = new lib.Path_4_4();
	this.instance_88.setTransform(646.05,315.9,1.4697,1.4697,0,0,0,17.9,7.7);
	this.instance_88.compositeOperation = "multiply";

	this.instance_89 = new lib.Path_5_4();
	this.instance_89.setTransform(613.1,301.5,1.4697,1.4697,0,0,0,13.1,9.6);
	this.instance_89.compositeOperation = "multiply";

	this.instance_90 = new lib.Path_6_4();
	this.instance_90.setTransform(457.1,390.4,1.4697,1.4697,0,0,0,16.2,5.2);
	this.instance_90.compositeOperation = "multiply";

	this.instance_91 = new lib.Path_7_4();
	this.instance_91.setTransform(471.75,337,1.4697,1.4697,0,0,0,15.3,13.1);
	this.instance_91.compositeOperation = "multiply";

	this.instance_92 = new lib.Path_8_4();
	this.instance_92.setTransform(501.2,347.05,1.4697,1.4697,0,0,0,3.6,12.3);
	this.instance_92.compositeOperation = "multiply";

	this.instance_93 = new lib.Path_9_4();
	this.instance_93.setTransform(407.9,349.6,1.4697,1.4697,0,0,0,4.5,6.5);
	this.instance_93.compositeOperation = "multiply";

	this.instance_94 = new lib.Path_10_4();
	this.instance_94.setTransform(412.35,305.5,1.4697,1.4697,0,0,0,9.1,5.2);
	this.instance_94.compositeOperation = "multiply";

	this.instance_95 = new lib.Path_11_4();
	this.instance_95.setTransform(650.9,270.15,1.4697,1.4697,0,0,0,10.7,7.8);
	this.instance_95.compositeOperation = "multiply";

	this.instance_96 = new lib.Path_12_4();
	this.instance_96.setTransform(669.95,293.95,1.4697,1.4697,0,0,0,7.2,7.2);
	this.instance_96.compositeOperation = "multiply";

	this.instance_97 = new lib.Path_13_4();
	this.instance_97.setTransform(568.4,474.5,1.4697,1.4697,0,0,0,84.7,32.4);
	this.instance_97.compositeOperation = "multiply";

	this.instance_98 = new lib.Path_14_4();
	this.instance_98.setTransform(575.4,243.3,1.4697,1.4697,0,0,0,39.4,45.8);
	this.instance_98.compositeOperation = "multiply";

	this.instance_99 = new lib.Path_15_4();
	this.instance_99.setTransform(606,128.9,1.4697,1.4697,0,0,0,7.6,12.4);
	this.instance_99.compositeOperation = "multiply";

	this.instance_100 = new lib.Path_16_4();
	this.instance_100.setTransform(576.75,121.6,1.4697,1.4697,0,0,0,6.5,15.7);
	this.instance_100.compositeOperation = "multiply";

	this.instance_101 = new lib.Path_17_4();
	this.instance_101.setTransform(609.3,107.25,1.4697,1.4697,0,0,0,5,3.8);
	this.instance_101.compositeOperation = "multiply";

	this.instance_102 = new lib.Path_18_3();
	this.instance_102.setTransform(575.2,97.3,1.4697,1.4697,0,0,0,6,2.1);
	this.instance_102.compositeOperation = "multiply";

	this.instance_103 = new lib.Path_19_3();
	this.instance_103.setTransform(604.05,286.3,1.4697,1.4697,0,0,0,20.9,20.9);
	this.instance_103.compositeOperation = "multiply";

	this.instance_104 = new lib.Path_20_3();
	this.instance_104.setTransform(591.2,223.95,1.4697,1.4697,0,0,0,31.4,22.9);
	this.instance_104.compositeOperation = "multiply";

	this.instance_105 = new lib.Path_21_3();
	this.instance_105.setTransform(691.45,262.7,1.4697,1.4697,0,0,0,2.9,5.5);
	this.instance_105.compositeOperation = "multiply";

	this.instance_106 = new lib.Path_22_3();
	this.instance_106.setTransform(695.9,228,1.4697,1.4697,0,0,0,2.6,6.5);
	this.instance_106.compositeOperation = "multiply";

	this.instance_107 = new lib.Path_23_3();
	this.instance_107.setTransform(470.55,234.1,1.4697,1.4697,0,0,0,29.9,43.7);
	this.instance_107.compositeOperation = "multiply";

	this.instance_108 = new lib.Path_24_3();
	this.instance_108.setTransform(419.55,216.4,1.4697,1.4697,0,0,0,2.8,7.6);
	this.instance_108.compositeOperation = "multiply";

	this.instance_109 = new lib.Path_25_2();
	this.instance_109.setTransform(520.05,149.25,1.4697,1.4697,0,0,0,5.5,7.3);
	this.instance_109.compositeOperation = "multiply";

	this.instance_110 = new lib.Path_26_2();
	this.instance_110.setTransform(473.35,488.8,1.4697,1.4697,0,0,0,16.1,19.8);
	this.instance_110.compositeOperation = "multiply";

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#C53831").s().p("AitHmQAKgOAHgRQAIgTAIgGIAMgLIAQgKIAjgRQAFgDAIgGQAHgGADgGQABgEAAgJQABgLgHgOIgMgXIgMgfQgIgTgKgJQgGgFgFgIIgHgRQgFgLgCgKQgFgeAAgQQAAgRAFgTIAJgiQAIgagBgaIAAgUQAAgMgCgGQgBgGgFgIIgHgOIgIgSIgIgmQgEgUAEgYQADgQgIgYIgKgWIgFgIIgHgIQgCgCgBgFIgDgIIgIgVQgEgMgCgOQgFgeADgkQAGgmAAgTQAAgSgGgPQgCgFgFgHIgIgKIgDgHIgEgFQgDgEgBgCQgDgBgEgHIgGgKQgQgMAAgIQAAgEAHABIAMACIAbAGIAKABQAGAAAEAEQANAKAFAJIANAWQAHAMAEASQAKAlgGAeIgDAUQgCAMAAAIQACAWAKgBIANAIQAHAFAGACQAKAEAKAHIAUAOQALAJAHAHQAVAVAPAdQAHARATAWQAEAFAOAKQANAKAaABIATAAIAUgBQATAAARAHIAVAMQANAHAKABIASAEQAHACAKAIQAJAIAGADQgEgBgGACQgQAGgDgCQgDADgHgHIgJgKQgGgGgNgCQgGgBgPgGQgZgMgXACIgWADQgLgBgGAAQgJADgFAAQgJgCgRgIQgqgSgYg2QgMgZgUgTQgLgLgMgHQgIgEgOgEIgWgHIgJgGIgJgFQgEAHAKAYQAHAQADAEIAIAMQADAEADABIgBABQAFAIADAQQAFAUAAAKIgBAsQgBAaAEARQACAGAGALIAEASIAFAPIAEALIgBACQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAkgCANIgBAQIAAAQIgFAhQgCAPABAOQABAYAQAOQAKAJAVAEIAOAFIAOAEQAgAEAVAnIAGAOQAEAJABAMIABAXQAAAMACAGQACAFADADIAIAGQAOAOAHATIAFAPIAFAXQgDgDgDgGIgEgKQgEgHgGgIIgJgOIgIgLQgMgQgIgWQgKgZgCgNQgCgJgFgIIgLgOQgBABgLgFIgMgGIgegIIgZgJIgMgGQgJgFgDAEQgDAEAGAHIAJAJIAIAGIAJAOIALAQIAPAZQADAFABAHIACAMQAGASgBAHQAAANgHAPIgFALIgHALQgKALgTALIggASIgTAMQgKAIgFAJQgMAZgMAMQgOAQgSADQAVgQAJgKg");
	this.shape_1344.setTransform(658.3211,425.9778,1.4697,1.4697);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#C53831").s().p("AAJCtIgGgNQgKgPgDgGQgEgLABgNQAFgNgCgHQgHgggCgHQAAgHACgHIAEgNIAHgcQgEACgLAQIgJALQgIAGgDAEQgCAEgDAHIgEALIgLAMQgIAJgLADIgVAGQgMADgIgCIgGgCQABgDAHAAIAFAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAHgGADgBQAKgDASgMQAGgEABgFIAEgMQABgDAFgDQAGgFABgCIACgMQACgHADgEQAEgFAIgDIANgHQAOgKACgNQADgJgBgZQgCgOAMgTQAEgGAKgFIAQgHIASgJQAGgEAKgMQAEgGAKgKIAJgLIAEgMQADADAGACIALAEQAFADAAACIgFAHIgYAVQgPAQgSAQQgiAagMAcQgKAXAAASQAAAMgGAXQgGAYAAAMIAAARIAEAQIAFARQAFASABAUIAAATIABAOIgFgIg");
	this.shape_1345.setTransform(600.0275,374.293,1.4697,1.4697);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#C53831").s().p("ABjI4QgJgBgLgFIgTgHQgQgEgEgEQgHgGgBgPQgFgBgCgGQgDgIgDgDQgJgKgKgHQgLgIgRgLIgbgRQgPgKgXgMIgmgVQgQgJgPgRIgRgRQgKgLgFgIQgRgcgFg1QgBgPAAg1IABgfQgBgXgFgGQgHgIgVAHIgeAMQgKADgYADQgXACgLAEQgXAIgNAaQgNAaAHAXQALAhACAdQgLgBgLgNIgQgXQgYgigIgTIgYguIgMgZQgEgGgEgBIgLgFQgNgIAEgKQADgHAHACIAKAGQAWAMAiAEQAWADAegPIAZgJQAPgGAIgFQATgLAJgDQANgFARADQAXADAggOQATgIAjgSIAqgSQAYgLAPgOQAegaASgoIAOgbQAIgOAKgKQAdggAJgLQAUgeASgXIAQgVQAHgMABgMQAFgigCgUQgHgsACgUQAEgtgFgoQgHgzgVgcQAHgHAUgEIAdgIIAUgHIAKgDIACAAIADgBQAMgFAIABQAMAAAEAMIADAXQACAPAHAjQAHAgABASQACARgEAaIgGAqIgBgUQAAgLADgHQgDAIgBAIIABASQAAAAAAAAQABAAAAAAQAAABAAAAQgBABAAABIAAAEQgFAbgPAgQgOAggHAKIgFAIIgRAXIgSAaIgGAIIgFAIQgDAJgGAHQgPAWgJASQgQAgAAAmQAAAWAKAOQAEAFAXATQATARAKAXQAEAJAGAYQAGAWAGALQAIAQANAEQANAFAPgKQAFgDAMgNQAKgKAJgDQAngMAeAoQAEAAAJAMIAMAQQANAKAZAHIApAJQAZAFAOAGIAXAIQANAFAIAGQAFADAIALQAHAIAFAEQgtgbhIgMQgggFgLgDQgXgHgOgPQgYgagNgIQgYgRgWAJQgMAEgNAMQgQAOgGADQgQAKgMAAQgUABgLgVIgNglQgJgXgNgTQgKgPgUgXQgLgNgJgaQgKgbgHgLQgIgLgHAEIgNAQIgQAVQgJALgIAHIgZAUQgQAMgHALQgIANgPAbQgPAbgJAOQgeAvgJAhQgNAuAQAqQAIASANASQAOASAPALIAdAVQARANAMAGIAnAWQAUANAMAPQAGAGARAbQANAUAOAKQATANAVAEQAbAHAHAIQAJANgSACIgcgBg");
	this.shape_1346.setTransform(506.301,395.6741,1.4697,1.4697);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#5C8EC7").s().p("ACKDwIgIgJIgSgOQgMgJgMgSQgHgLgEgLQgCgGAAgWQAAgKgDgUQgBgGABgJIACgOIABgVQABgMADgJIAEgQQACgEgSAGQgeAKgUARQgMALgKAEIgUAHQgKAFgCAKQgCAJACASQAAAIgKARQgMASgbAZQgJAHgPARQgDAFgIAEIgMAGQgCACgGAKQgFAJAAADQgDgRAVgWQAdgaANgOQAWgYAKgYQADgIADgTQADgSADgJQAGgOALgFQAWgHATgJIAdgLQARgHAKgKQAQgQAAgaQAAgUgHgIQgLgNgFgOQgEgNgCgUIgEghQgCgNABgVIACghIABgTQAAgBABAAQAAAAAAABQABAAABABQAAAAABABIAEAFIAHAOIAHAQQAFAKAAAGQACALgGAYIgCATIACAHIACAGIANArQAHAYAHASQAEAIgBALIgBAUQAAANgCAHIgLAyQgGAdABAWIAAAZQAAAIAHAOQADAPAFAKIAKAPIAKAOIAIAPQAFAJAGAEQgEgDgFgFgAiSD3IAAAAIAAAAg");
	this.shape_1347.setTransform(625.4259,431.7298,1.4697,1.4697);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#5C8EC7").s().p("ABRAvIgMgHQgGgDgWgCQgZgCgKgJIgOgNQgJgJgGgDQgGgEgMgEIgSgGQgKgFgIgKIgPgTIABAAIAIAAQAEAAAFgCQAEAAADAEIAFAGQAOASAXAIIAZAKIALAHIAWAQIAKAEIAKACQATAGAQAOQAFAFAAACIgCABQgEAAgGgFg");
	this.shape_1348.setTransform(682.2993,417.3687,1.4697,1.4697);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#5C8EC7").s().p("AArA3IgRgFQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIgDgDIgHgJQgLgLgIgRIgHgQQgFgKgGgEIgHgDIgEABQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBIgCgEIgOgWQAPgDAIAEQAHADAPAMQAJAIAIAMQAEAGAEAMIAFAMQADAFAIAJIANAPIAKAPIgMgBg");
	this.shape_1349.setTransform(661.2055,398.8534,1.4697,1.4697);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#5C8EC7").s().p("AAbAaIgbgBIgNABQgIAAgEgCQgLgGgGgSQgFgOABgQIABAAQAHAKARAIQAKAEAUAHIAMAEQAIACAEAEIAJAMQAGAHAAADQgHgEgOgBg");
	this.shape_1350.setTransform(643.2342,389.615,1.4697,1.4697);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#5C8EC7").s().p("AAiA8IgEgNQgRgbgJgIQgOgKgGgGQgJgJgIgRQgHgPAAgZIABAAQANABAFADIAEAGIACAGQAEAGAJAJIALAPQAGAHAEAOIAIAPIAHAQQAFAOACAQQABAJgDAFQgCgEgDgIg");
	this.shape_1351.setTransform(625.4356,360.3121,1.4697,1.4697);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#5C8EC7").s().p("AB0BaIgOgIIgPgHQgJgEgEgFQgEgEgEgIIgHgMQgGgJgPADQgMABgRgJQgJgFgGgHQgEgFgFgMQgKgUgMgGQgEgCgKgDIgOgFQgGgDgMgMQgLgMgNgDQgJAAgEgCQgMgFAFgHIAFgIQAGgHAEgBQACgBALACIAIABQAEABADADQAHAGAMAPQAEAFAKAHIAAACQAFgEAMAIQAJAGAGAHQAFAFAKAYQAHARANAGQAEACANAAQALAAAFAEQAEAEAMAPQAKAMAJAEQAFADAQAAQAOABAGAEQANAKgZADIAJAMIAIALQgFgEgJgEg");
	this.shape_1352.setTransform(545.542,375.9538,1.4697,1.4697);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#5C8EC7").s().p("ADGCXIgMgDQgHgBgNgFIgOgDQgLgCgEgBQgSgJgKgEQgIgDgjgTIACgBQgJgDgHgKIgOgPQgRgRgagsQgHgMgNgHQgFgEgGAAIgMABQgIAAgTgDQgQgCgMgEIgMgHIgMgIQgHgEgbgHQgWgGgUgQQgUgPgNgUQgGgJgEgOQgFgPADgKIABAEIABgCQgCACARAEQAIABADADQAEADADAHQAEAIAIAIIAOAPIALAOQAIAHASAJQAMAHAWAFIAiAKQAVAHAMACQAKACARAHQANADAGAEQAHAGADAKQADAHAMATQAJANAPAdQAHALAHAHQAEAEAFACIAKAFIAFADIAFAEIAPACQAIACARAOQARALAIACQAIAAAIgEQAIgHAFgCIAVgMQAEgCAGgBIALABQANABAEABIAFADQADACgBADQAAACgHABIgJABIgRAGIgQAFQgNADAAADQAZALgDAFQgBACgEAAIgGgBg");
	this.shape_1353.setTransform(562.4792,442.5625,1.4697,1.4697);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#5C8EC7").s().p("AAoArQgMgDgEgCQgJgHgFgCQgGgDgLgBQgMgBgGgDQgIgDgGgJQgGgJgEgFQgHgHgDgEQgFgGgBgFIAAgGQABgEAEgDQAFgEAEACQAEABAGASQAMAWATAIQAGACAOAKQANAJAJACIASABQAMABAEAFIgNAFQgEACgEAAIgFgBg");
	this.shape_1354.setTransform(546.1798,423.2804,1.4697,1.4697);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#5C8EC7").s().p("AgHAPQgEgBgDgDIgEgIIgHgPQADgFAVAGQATAGAIAFQgGAHgJAEQgIAEgGAAIgEAAg");
	this.shape_1355.setTransform(531.8315,414.9351,1.4697,1.4697);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#5C8EC7").s().p("AgQAVIgSgEQgLgDgCgHQgBgHALgKQALgMAHgBQgCABAIACIAQAAIAOAAQAJAAAGADQAEADACAFIACAJIAIARQgHAEgWADIgJAAQgNAAgNgDg");
	this.shape_1356.setTransform(506.9132,397.7262,1.4697,1.4697);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#EDC564").s().p("ABOHGQABg6gDgJIgGgLIgHgMQgDgIgBgOIgCgWQgIg1AAg2IABgsQAAgbgGgPQgJgWgKgsIgGggQgFgTgHgKQgHgMgVgNQgVgNgHgNQgOgYgFgvQgFgugIgZQgMgmgagYQgbgagugeIhOgyQgigZgQgPQgXgXgNgeQgHgSAKgSQAKgTAVgCQAMgCAHAMQgBABAGACQAJADAEADQAHAGAMAQIAVAYQANAPAKAFQAGADARAGQAQAFAIAFQAHAEANAEIAUAIIA1AgQAfASAYAJQAUAHAkgDQAagDAlACIA/ADIBjAFQAYABAWgLIAQgNQALgIAHgBQABgBACBSQABAIALAOQALANAAAJQAAAKgKAKQgJAIgMAEQgRAGgagBQgegCgOAAQgngBgkAlQglAmAGAnQACALANA0QAKAmgBAaQgBAigUBHQgTBEABAmQAAAGADAOQADANgBAHQgBAJgIANQgEAPAFAXQAIAgABAGQABALgHASIgKAdIgCAeQAAAVgFAHQgbgQABgqg");
	this.shape_1357.setTransform(629.151,386.4424,1.4697,1.4697);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#EDC564").s().p("AIZHzQgLgGgIAAIgaAGQgQADgLgDQgJgDgYgPIgIgEIgcgCIgNgBIAIgFIgNACQgLACgKgCQgXgEgXgMQgxgagcglIgPgTQgJgJgKgFQgMgEgTAAIgggBQgNgBgNgGIgZgNQgcgQgUgBQgIgBgTACQgQABgKgBQgbgEgogTQgwgXgSgFQg2gPhWAcQg9AUgQADQgtAKgigKQgQgFgMgMQgIgHgNgSQgOgbgJgMQgGgIgNgMIgUgUQgBgCAJAAIAKgBQAKABAQAHIAFACQANAFAQAAIAegCQALgBAMgFIAVgKIAbgOQAQgJALgEQAMgEAYABQAYACAMgFQAOgFAXgPIAlgXQAKgFATgFQAVgGAIgDQALgFAJgJIAOgTIATgZQALgPAFgKQAPgjAhgeQAdgaAeguQAKgRAFgJQAHgPACgOQABgOgBgWIgDgkIAAhaQAAgOgFgVIgHgiQgDgRgFgJQgKgJABgIQABgLAagIIAlgJQAUgIADABQAKADACANIACAUIAMAbQAGAPgBAPQAAAOgOAaQgOAYABARQAAAQAIAbIALAqIAJAqQAFAaAAARQABAWgQAZQgJAOgUAbQgiAyAMA7QALA7AyAkIAyAkQAbAVAQAVIAhAvIAfAwQAYAjAdAeQAhAjAfASIAoAVQAJAGAEAFIAHACQAEABAEAEIAIAFIAJACIAKACQAUAFAJAEQARAJgBAOIgDAAQgHAAgJgFg");
	this.shape_1358.setTransform(512.2772,386.6513,1.4697,1.4697);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#D65052").s().p("AI+LhQg2gEgpgNIhggeQg5gRgqgDQgggCgsgWQgwgagYgKIhLgiQgugTgggHQgygKgegVQglgag+gVIg1gRQgJgDgQgDIgZgEIgYgGIgegIIgegHQgRgEgSgNQgHgEgMgDIgTgFQgKgCgcgPIgdgPIgXgKQgKgFgQgKIgbgQIgdgPQgRgIgLgJQgJgIgUgMQgWgNgJgHIgvgpQgbgZgNgXIgmg7QgFgIgMgMQgFgFgEgJIgHgPQgKgTgLgKIgNgMQgHgHgEgFIgCABQAEgIAWAGQAQADANAGQAfAOAegMIAMgEQAIgBAEgCQAKgDAOgJIAfgSQAMgHATgCIAmgEQAWgCAPgFQAHgDAJgHIAQgKQANgHAigMQAfgLAPgKQAVgNAQgcQAGgJATgqQAFgMASgQQAVgUAFgHQApgwAQgcQAfg3gNgyQgHgRAAgJQADgUAAgLIACg9QAAgkgHgZQgBgFgHgKQgGgKgCgGQgEgNAHgFQADgCASgEQBLgSAdgLQAOgGAKgJIASgWQAFgHACALIADARQAJARANAEQAUAHAagIQAngOAEgBQAagEAnARQAKAEAQAQQAPAQAKADQAQAFAHgLIAKgYIAGgKQADgEAFABQALACAfAcQAFAFAJANIAOASQAZAbAuAWQAaAMA1AXIArAXIAMAIQAHAGAFABQAGACAXAAIASgDQAMgCAHABIAmAGQAWAEAQgCIAugEQAagCATADQAhAHAqgHQAQgCAPgLQAQgLAHgNQAJALgCAdQgCAkACAIQAEARALAVIAWAkQALASASAnIAMAYQAiA+AKBZQACAOAGAZQAGAaABAMQADASgCAdIgDAvIAABGQACAnAGAeQADAPAAAqIgDBGQgCAsACAaQAEA/gbBIQgYBCgqA3IggApQgSAVgTAOIgGAGIgMANQgIAIgHAEQgSAJgdAHQghAJgmAAQgSAAgSgCg");
	this.shape_1359.setTransform(565.3048,413.6071,1.4697,1.4697);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#D65052").s().p("AlTLyQgfgKgXgeQgQgWgOgnQgKgggUguIghhMQgMgdgBgjIAAhCQADgUAAgPQgBgPgKgeQgMgjAAg2IADghIACghQAAgMADgRIAFgdIAEgsQABgbAGgQQATg7A7g6QAdgdBRg9IAxgiQAggVARgQQAQgQACgeQABgJgJgNIgOgWQgDgHgHgJIgMgPQgJgPgGgHQgJgKgNgEIgcgHQgUgHgGAEQgFACgGAGQgGAGgFACIgLAJQgHAGgEAAQgFgBAAgNIgDgPIgDgSQgCgLgCgGQgGgRgPgQQgJgIgXgQIgUgNQgLgIgDgLQgKgZAMghQALghAYgRQAHgFAPgFQATgFAGgEQALgGAVgOQATgLAQgDQANgCARAKIAZATQAjAWApAyIAPASQAJALAEAJQACAFADAOQACANAEAHIAnBGQANAYAZABQAMAAAJgHIARgRIAkgbQAYgRAJgOQAKgQAFgiIAGg2QACgLAGgUQAFgVACgLIABgMQABgHAFgEQAVgRAKABIAJADQAEAAAHgDQAMgCAQAEQAfAHALATQAIAQgDAiIgIA3QgFAigCAVIgCAjQgBAZAHAHQASgPAPgoQAVg3AEgHIAZgrQAPgWAWgKQASgIAWAEQAWAEASALQAWAOADAVQACATgMAaQgDAHgSAbQgPAVgDAPIAAAcIgDAXQgBAGACAKQACAIgFAJIgGAQQgHAUAOARIAeAaQAKAJAMARIAUAdQAOATAJAbIAMAzQAJAiAUBDIAJAfQAFASABANQAAAFgCALQgBAKABAFIAGAZIACALQgBAEgHgCQgJgCgOgJIgWgLQgqgSgNgJQgggWgfgNQgdgMgqgKQhVgVhTAPQh2AYgbBDQgEALgFAFQgGAFgBACIgDAPIgHAiQgHAgACAlQABAXAGAvQAHAtADANQADAPAJAPQAOAVACAGQAJAWgGAaIgKAtQgDAZgKAcIgTAyQgIAVgRAnQgNAigBAcQgBAbgLAVQgMAYgXAKQgRAIgbADQgOABggALQghAKgSADQgNACgLAAQgPAAgNgEg");
	this.shape_1360.setTransform(556.0822,205.9279,1.4697,1.4697);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#D65052").s().p("ABZCVQgIgGgHgRQgKgWgDgEQgegugdgiQghgjgPgUIgMgPQgHgJgHgFQgVgRgJgKQgPgSgJgHIgUgVQgNgMgMgBQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAABgBIAAgBIAJABIAKAAQAEABAGAEIAKAHQArAZAKAIQAMAKASgIQAKgEATgMQAQgJANAJQAGADAEAIIAHAOIAPAUQAJANADAKQAFAMgIAGIgTAKQgKAEgJAHQgLAIgBAIQgDALAQAFIAbAFQAHACALAFQAMAGAHACIAUACQANAAAWAGIAWAHQAKAGAFAJQAKATgIAYQgIAVgRAQQgKAJgSABIgEAAQgQAAgIgHg");
	this.shape_1361.setTransform(658.9158,281.4502,1.4697,1.4697);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#D65052").s().p("AAZBbQgogPgPgUQgNgPgEgWQgFgXAKgQQAGgJAMgKIAVgSIAWgVQAJgJAFgHQgBAHACAPIAFAoQABALAAAfQAAAbAEAQQAGAcgBAFQgBAJgIAAQgGAAgJgEg");
	this.shape_1362.setTransform(407.5822,345.4885,1.4697,1.4697);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#D65052").s().p("AgGBLIgNgKIgUgHQgMgEgHgIIgQgMQgHgHgBgLQgDgaAWgiQAYglAaAAQAFgBAHAEIAIAAQAGgBAEABQAIACAJAHIAPAOQADADANAGQALAFAEAFQAFAGgCADQgBACgIAHIgYAZQgNAPgHANIgSAjIgGAKIgBACQgFgBgGgGg");
	this.shape_1363.setTransform(411.887,302.3634,1.4697,1.4697);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#EBBCBB").s().p("AglEKQgdgUhEgkQgRgJgegMIgvgTQgSgIgNgOQgGgGgEgJIgGgQQgEgIgYgQQgUgNgCgQQgDgWACgTQABgTAQgbQAagwAogmQAigeAOgJQAZgOAmgdQAsgiAQgLIArgdQAcgOAUAIQARAHATAPIAhAcIAdAWQAPAOAJANIAWAaQAOARAHAKIARAfQAKASAIAKQAIALARAPIAbAYQALALAFANIAGAeIAQA/QADAMADAcQAEAZAEAOQANApgXAVQgLAJgcAHQgXAGgTACQgUACgigFQgmgFgQAAQgUABglAEQgnAEgTABIgYAAQgMgBgKgHg");
	this.shape_1364.setTransform(629.7405,299.1224,1.4697,1.4697);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#EBBCBB").s().p("AjNHRIgJgEQgDAAgGADIgKAGQgFADgFAAQgHAAgMgHIgSgFQgQgDgIgXQgGgUgJgUQgPggAGhBQAHhHgJgdQgRg7gEgdIgJg4QgGgjgBgUQgBgSACgwQACg1gBgMQgCgfAGgiQAIg1AvgwIAVgVQADgDAEABQAFABAEgBQAGgCAGgIIAJgOQAFgHAKgHIARgMQBJg1AvgVQAhgOATgDIAngIQArgKAeAFIAbAEIAKABQAGABAEABQAHADAFALQADAFADANIAGAWIAGAWQAYA9AiA5IAaAtQARAXAYAIQAGACAkACQAYABAKARQAHALAAARIAAAdQAIAvgEAYIgEAaQgCANAFAOIALAiQAEAPgHATQgFARgNAYIgVAnQgQAjgfAYQgVASgZAnQgcAvgNAPQgUAWgiAQIg+AZIgbANQgQAIgLADQgKAEgQgCQgSgBgIABQgPADgWAPQgaASgKAEIgZAKQgQAHgFABIgHAAQgUAAgcgNg");
	this.shape_1365.setTransform(466.7507,345.8495,1.4697,1.4697);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#5C8EC7").s().p("AiDD4QgUgTgHgkQgIgkgCgVIABgtIADgqQABgKgCgOIgDgXQgDgWAAgLIgCgpIAAgsIACgiQAAgPgFgWIgKgmQgFgXABgQQACgQACgEQADgHAHABQAIACAJATIAMAbQAOAbAbAYQAVASAfATIA3AfQAkATBGArQANAHAlAOQAfAOACAUQADATgLAqQgDALgBAnIgBARIgDAKQgCAGAAAFIABAiIACAfQABATgEAMQgHAXgsAIQgPABgIACQg+ASgwAAQhMAAgrgrg");
	this.shape_1366.setTransform(469.5375,474.4822,1.4697,1.4697);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#5C8EC7").s().p("Ak8GpIgOgNQgKgJgOgGQgWgMgLgEQgSgIgQAFQgfAMgPADQgXAGgYgKQgXgJgFgaQgCgOADgWIAGgjQADgPAJgYQALgcADgJQAUhMAHgWQARgoADgVQADgVgCgQQgDgQgLgZQgOghgCgJQgLgkgEg0QgEgyABgWQACgoAQgeQAfg5AbgYQAOgMAXgHIApgLQAmgMAKgCQAegFAtAEIA0ADQAeADAVAHQAMAEAWANQALAFAXAHQANAFAXAOIAjAVQBDAiATAIIAlARQAVAJASADIA5AOIA6ANQAUAEAfgBIA0gBIAqgBQAZgBAQgFQAbgKAZAUQAKAIADAOQABAIgCATQgBAJAEARQAFAQgCAJQgBAKgJAKIgQARQgFAHgigHIgtgJQgRgBgYgEIgpgIQgZgEgLAAQgXAAgKALQgYAbBIAiQAeAOA+ATQAMAEAbAFQAXAGAMAMQAOANADAYQADAYgJATQgOAbgcAIQgaAHgcgLQgOgGgjgSQgfgRgSgGIg7gUQgigKgbgDQgZgFgOgBQgygCgQABQgjADgdAPQg8AhhMA5IgqAfQgZATgMAQQgGAIgSAeQgNAXgOANQgQARgEAUQgCAKAAAgQAAAZgGAWQgEARgEAFQgGAKgNABQgKAAgJgGg");
	this.shape_1367.setTransform(620.6214,254.0357,1.4697,1.4697);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#5C8EC7").s().p("AlIKOQAAgCADgDIAEgEIABgBIABgDIACgHQADgGAGgHIALgKQAIgHASgWIAbgfIAKgSQAFgFABgDIABgJIAGgMIAGgLQAKgbADgPQADgSgCgcIgDguIgHhBQgFgqgBgYIgFhHIgFhIIgFhzQgGhCgQgwQgQgsgFgXIgDgWIgCgWQgDgOgJgUQgQgbgFgPIgEgVQgHgXgBgMQgEgUAAgKQAAgJgGgQIgWg3QgZhDALgrIASgEIAMgHQANgHAGgBIAqgHQAagFAQgGQAvgSA2AIQAsAHAgAsQAWAgATA1IAHAcIAIAcQAJAeAQAhQAGAMAJAKIAUASQADACADAGQAEAGACABQAEACAIgBIAMgCQASABALgFQAKgFAQgOIAegVIAWgRQAagVARgGQAJgDAKADIATAFQAFABAQAMIAKAHQAGAEADADQACADADAIIAFAMQAGAJARAQQAEAEADAGIADALQADAIAIAPQADAGAAAEIgEALQgIATgQANQgLAJgaAPQgaAOgMAKIhNA7QgsAjgZAfQhGBagFBcIgFBZQgBA0AEAlQABAKAHAnQAGAdgBAVIgEAoQgCAZACAPQAAAEAJARQAIAPgDAGQgEAKgRgCIgbgGIgPgCQgRgCgPACQgPACgVAHQgIADgTACQgSACgKADQgXAIgaASQgNAJgaANQgbANgMAIQgWANgXAXIgIAHIAIgEQgGAEgGAIQgLAPgGADQgDACgFAAIgBAAQgEAAgBgDg");
	this.shape_1368.setTransform(473.0974,202.2881,1.4697,1.4697);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#5C8EC7").s().p("Ag3BHQgFgKgDgEIgLgQQgGgOAAgWQACgVgBgLIgCgRQgCgKAEgGQAEgJAWgFIAhgFQAjgFA+AKQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgGAEAAASIACAjIAIArQAGAdgGALQgIAOgYgEQgcgGgKAAIgiAHIgIABQgPAAgIgLg");
	this.shape_1369.setTransform(428.2095,216.075,1.4697,1.4697);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#5C8EC7").s().p("AAjCAQgigJgYgRQhMg0gGg+QgCgSAEgNQAEgLALgQIAWgkQASgZALgBQAIgBAPAMQATAPAEACQAiANANAPQAMAOAFAXIASBOQACAMALAhQAHAdgPAMQgKAIgSAAQgOAAgTgFg");
	this.shape_1370.setTransform(423.7402,181.2473,1.4697,1.4697);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#0D110E").s().p("AhnA4QAEgOAPgMQAIgHARgKQAQgJAogOIBTghQASgJAHgGQgJAIgQAIIhRAjQgjAOgTAMQgNAHgMAKQgMALgCAMg");
	this.shape_1371.setTransform(566.9342,344.223,1.436,1.436);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#0D110E").s().p("AAfBQIgSgYIgegyIgIgLQgDgFgCgKQgCgJgBgUIgEgdQgDgJgCgEQgGgGgIAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAJAAAFAFQAEAFADAJQADAJABAUQACAWADAHQABAIADAFIAJALIAgAwQAKAOAIAJQANAOAIAFIgFAIQgKgHgMgPg");
	this.shape_1372.setTransform(543.5997,334.9969,1.436,1.436);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#0D110E").s().p("AClB9QAihPAGgxQAKhLgMg7QgKgpgTgRQgUgRgmgPQgngPgaAAQgfgCgiAIQgkAIgcANQgiARgTAWQgQASgOAqIgUBCQgcBPgIAzQAFguAbhWIAThBQAMgrARgUQATgZAkgRQAdgPAkgIQAlgIAfABQAdABAoAPQAmAPAWATQAMAKAJATQAGAOAFAUQAGAgAAAkQAAAkgFAhQgIA0gkBNIgdA+QgQAjgIAdQAJgmAohag");
	this.shape_1373.setTransform(568.5138,300.4456,1.436,1.436);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f().s("#0D110E").ss(0.9).p("AiUlAQAcAbAbAnQAaAlASAmQALAXgNAsQgPAugfgSQgMgHgHgqQgIg5gBgBQgLgigIgQQgNgbgSgRQgYgUgUgDQgagEAEAiQgxBNBbCYQAHALADAVQAEAYADAJQADAHAJASQAIAPADAKQAHAVgEAmQgEAmAGAUQAGAVARArQAOAmAAAbQgBBBABAWQABAZABArQADAkAHAeQAHAcAUAtQAWAzAHAUQALAiAMAMQAPAPAgACQArACAkgGQAvgJAagVQAKgJAKgPQALgTAFgJQAPgaACg2QABg1APgbQACgDAKgFQAHgDgDgKQgBgIgTgOQgUgOgEgKQgGgSACgWQABgVAIgRQAQgTAGgKQAMgRgKgQQgGgLgWgOQgOgKgBgdQAAgDAAhQQAAgygHghQgIgogUg3QghhbgBgCQgOgogJgTQgVgrgQAAQgxAIgRAnQgJAXgEA+QgdAHgEguQgDgjAJgbQALgiAagdQAiglAaAVQALAAgBgLQAAgPAEgEQAGgGAKgEQAOgHADgCQArgZALg0QAJgrgXgnQgMgVgqguQgQgQgbg2QgZgxgagUQgFgFgPgFQgOgGgHgFQgWgTgIgEQgKgEgUAPQgqAigOA0QgMAsAGA+QAEAngDAYQgDAcgQAgQgFAKgOAXQgKAVAJANQAEAFAVAIQAXAIAEAFg");
	this.shape_1374.setTransform(634.0423,381.8782,1.4395,1.4395);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("#0D110E").ss(0.9).p("AkfgKQgSAfgGAxQgGA5AaASQAhgdAmgwQAMgPADgOQABgGACgfQACgwAKgdQAOgqAfgVQAGAnAyACQAKABBEgJQAtgFAZgGQArgKAWgSQAHAGABAXQACAbACAGQAIAZAMAGQAKAFAbABQAEAAAZgEQAUgEAGACQADACAJANQAJANADADQAGAEAPgIQAQgJAEAB");
	this.shape_1375.setTransform(508.3814,354.4603,1.4395,1.4395);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f().s("#0D110E").ss(0.9).p("ADpnfQAKABAZgDQAWgDANADQAJACAiASQAZAPAWgGQAOgEAWggQAPgXAZAOQgJAPAKAkQAFAUALAgQAKAfADAbQADAZgCAiQgBARgFAmQgFAjgBATQgBAsAcAhQACADALAGQAIAEABAHQABAGgKARQgOAWgBACQgFAOgBAMQgCAJABASQAAAeACAOQADAZAJARQAIAPAPAVQAMATgBAVQgCAfACALQACAPAMAYQArBSgrBOQgsBQhfgKQhTgJichUQiWhRhYgEQACgggggPQgcgOgjAFQgEABglAJQgWAFgUgEQhKgOg4gqQgUgPgYgdQgfglgKgJQgggfgPgPQgagbgTgWQgkgogJgjQgKgrgBgJQgGglANgKQgDghAkgxQAjguAhgOQA+gaArgOQgDgjg6gFQg6gFgcAh");
	this.shape_1376.setTransform(518.743,422.2487,1.4395,1.4395);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#0D110E").s().p("AgNAPQgBgIAFgLQAIgTAQgKIgQAhQgIARACARQgFgHgBgMg");
	this.shape_1377.setTransform(678.6494,272.7474,1.436,1.436);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#0D110E").s().p("AgDAZQgFgLgCgOQgCgRAFgLQACgHAFgFQAFgGAHABQgLAFgCAOQgBAIABARQABAHADAQQAFASAEAGQgJgHgGgOg");
	this.shape_1378.setTransform(682.3065,239.3969,1.436,1.436);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#0D110E").s().p("AgsACQAJgCAkgCQAdgBAPgDQgHAGgOADQgIACgPABIgGABQgUAAgTgFg");
	this.shape_1379.setTransform(567.5086,114.4064,1.436,1.436);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#E19391").s().p("AgsAEIBZgHQgPAGgcACIgugBg");
	this.shape_1380.setTransform(567.5086,114.1082,1.436,1.436);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#0D110E").s().p("AAQASQgLAAgJgIIgSgNIgQgPQALADAJAGIASAMQAIAGAKADIAWADQgKAEgIAAIgGgBg");
	this.shape_1381.setTransform(599.8898,124.1869,1.436,1.436);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#0D110E").s().p("AAFAzQgQgLgNgUQgLgSgGgUQgGgXAEgTQABAQAIAYQAHATALAQQALATAOAMQASAOATAAQgGABgGAAQgPAAgOgKg");
	this.shape_1382.setTransform(511.6284,164.6941,1.436,1.436);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#0D110E").s().p("AADgBQgCgZgMgZQALAKAFAMQAFAMACAQQABAbgNAaQADgsAAgJg");
	this.shape_1383.setTransform(417.9986,228.4835,1.436,1.436);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f().s("#0D110E").ss(0.9).p("ABGhLQgHgIgSACQgVADgJAAQgcgBgNAAQgWACgTALQgUAMAKA9QAJA8AVAMQAKAGAWgEQAMgDAUgFQAKAAAYACQAWADAJgC");
	this.shape_1384.setTransform(422.9733,228.6083,1.4395,1.4395);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("#0D110E").ss(0.9).p("ABrB6Qg3AUhDgqQg/gngXg3QgHgRAUguQASgpASgSQAPgPAQAFQAGACAXAQQAIAFAWAKQATAJAHAH");
	this.shape_1385.setTransform(418.1118,194.4629,1.4395,1.4395);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f().s("#0D110E").ss(0.9).p("Ai1knQgJAaAHAyQAEAcAHAzQADBAADBeQACA1AEBrQABAtAYAZQAVAXAvAQQAqAOA3gHQAJgBBZgSQAugIADgpQABgIgDgMQgEgOgBgFQgBgNAEgTQAEgVACgLQABgLAAgWQgBgWACgMQAEgXABgKQACgPgCgS");
	this.shape_1386.setTransform(463.7069,481.2309,1.4395,1.4395);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("#0D110E").ss(0.9).p("AgGhsQAABSANCG");
	this.shape_1387.setTransform(409.3882,356.1351,1.4395,1.4395);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f().s("#0D110E").ss(0.9).p("AgrA9QAAgPAng3QAng4AJAG");
	this.shape_1388.setTransform(414.6443,317.1243,1.4395,1.4395);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("#0D110E").ss(0.9).p("AAFEPQgRgFgcAdQgPAQgXAeQgaAegWAlQgeAyACAYQggAPgFAAQgNAAgDgbQgEgcABgwQABg6gBgSQgCgogLg+QgMhKgDgXQgMhxArhRQAuhbAxgmQAhgaASgVQATgXAOgjQAIgUATgjQATglAHgRQAIghAGgPQAKgcAYAAQAMgGARANQAKAIARAQQATAQAIAYQAFARACAhQADAxAZBLQAfBaAGAgQALA5ABAMQAEAogIAbQgDANgGAJQgCACgNARQgHAJgNALQgQANgGAGQgcAcgNATQgXAgABAY");
	this.shape_1389.setTransform(449.2862,331.9256,1.4395,1.4395);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#0D110E").s().p("AhAEEQgfgLgXgkQgPgWgSgqQgHgTgVguQgTgqgJgZQgNgkgFggQgGgoAJghQACgKgDgYIgQhGIgDgRIgBgKIABgKIAIADIABAPIASBYQADAYgDANQgIAfAFAnQAFAhANAiQAIAZASApQAVAwAHASQAQAnAQAZQAWAiAeALQAcAMAogMIAigLQAUgHAOgCQAxgLATgKQASgKAIgNQAGgLACgXQABgYACgMQAFgSAGgQQAFgSAHgQIAMghIAWhEIAIgbIgIAbIgVBEIgMAhIgMAiIgKAiQgCAJgBAbQgCAZgGAKQgIAOgTAKQgOAIgTAFIgjAJQgOADgUAHIgiALQgSAGgRAAIgEAAQgRAAgPgGg");
	this.shape_1390.setTransform(508.0413,289.3419,1.436,1.436);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#0D110E").s().p("AkbCpQgPghgGgcQgHgggCggQgEgoACgYQAGhIAigzQAVgfAbgOQAdgQAfgJQA9gSBEAEQBAADA+AYQAcALAeAQIA5AfIBxA9Ihzg6Ig5geQgigRgZgIQg+gWg9gEQhEgDg6ATQgaAIghAQQgZANgUAcQggAxgIBHQgCAUADAqQABAgAGAgIAIAfIALAeQARAsADARQgEgRgSgrg");
	this.shape_1391.setTransform(582.9489,235.8636,1.436,1.436);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#0D110E").ss(0.9).p("AKYkYQABgBAAAAQAGgGgCAAQhRg8g0AHQAEgBAfgGQAVgEAQACQB0AQBWAnQBKAiAMAEQA5ARAWgjQAIgMAFgaQAFgbgEgNQgEgQgVgMQgMgGgZgIQhagYgEgCQg7gUgVgeQgCgCACgHQADgJAAgBQAQgUAuAJQAZAFAsAMQBOAIAmAAQASgPgBg8QgBg9gVgIQgQgFgYAAQgbACgMAAQhJADgkADQgYACgYgEQgPgDgfgJQgQgFgqgHQgmgHgVgIQgngOgFgaQAAglgGgcQgIgvgFgYQgIgqgJgcQgbhWgigxQgLgRgSgTQgWgZgJgBQgEgLACgRQAEgbAAgCQADg3AGgTQAGgRARgiQARghAFgTQgHgbgIgLQgKgOgXgHQgVgGgMAAQgVgBgFAPQABACACABQACAAgCABQgigBgjBMQgtBjgEAFQgKgOADgoQAGgsABgPQAAgSAGgcQAGgjACgLQABgBAAgBQgBgCAAgCQgIgZgqgLQgqgLgWAPQgaARgFAvQgHBIgBADQgJAdgBACQgHASgHAKQgdAlglAaQg3AngTgoQgXgxgOgcQgYgxgUgdQgLgQgVgRQgZgSgMgKQgSgQgKgIQgSgMgQACQgUACgXAOQgmAXgDABQggAPgOANQgTASgFAeQgIAqAnAgQAKAIAXARQASAPAIAPQAIAQADAYQACAZACADAuzh6QgUgBgdAfQgiAlAEAWQAFAdAlATQAuAZAFAHQAAAUACAkQACAfgEAXQgLAOgcAWQgcAVgLAOQgSAYAKAcQAIAUAaAaQAKAKAVAGQAYAHAIAFQADASAOA2QAKArABAeQABAegHBEQAAA7AjAfQgLAVAfAJQARAFAdAIQAOAKANAWQAHAMANAZQA0BSAeAkQAqAyBNArQArAYBaAvQAlAYBcAdQAcAJBBAQQA8AQAgAKQAcAKAwAYQA0AbAWAJQAfAMBDAVQBCAVAhANQAPAHAvAZQAmAUAaAIQATAGApAIQAoAIAUAGQA1ARAyAMQB+AhBWgiQAvgSAsguQAtgwAgg+QAig/ALg/QANhKgEhiQgBgtgLiAQgCgZACgpQACgvAAgTQgBgfgHgoQgEgSgMgzQgOg7gbhBQgJgWggguQgcgogIgcQgEgKACgWQACgcAAgGQgBgMgGgUQgHgZgCgGQgCgLgCgUQgBgXgCgJQgBgHgMgrQgIgdABgUQAiAdAegxQAMgUABgVQACgWgNgLQgMgLghgFQgugIgDgBQgDgBgfgQQgPgIgTAGQgBAAAAgDQAAgFAAgBQATgcApgPQADgQgQgeQgPgdgPgJQgOgIgfAMQgdAOgNAGQgCABgCABAndnTQAAg6ABgNQABgoAEgfQAGgwAGgbQAJgpAPgeQAQghAcgcQAUgVAmgcQAMgIAlgfQAfgZAUgNQAKgHAhgSQAdgSAGgOQANgegfgxQgZgmgggYQgjgbgyAgQgJAHgIAGQgqAigUALQgvAZggggQgSgTgbg7QgghbgYgtQgrhRhCAAQgdAAgsAKQhIASgBAAQg/ANgJAVQgHAPAPAsQAHAXANAjQAEAMAQA7QANAsAHAcQACALAHATQAHAUADAJQAFAYAVBHQARA7AHAjQAHAnABA+QAABMADAZQAHBLAKCXQACAVAFAqQADAlgEAbQgEAdgTAeQgLARgbAiQgEAFgZAeQgUAWgGAOQgPAAgjgaQgbgUgSgBQgEAAgCgCAuth4IAAAAQgDgCgDAA");
	this.shape_1392.setTransform(542.7824,319.0922,1.4395,1.4395);

	this.instance_111 = new lib.Path_31();
	this.instance_111.setTransform(433.4,380.3,1.4395,1.4395,0,0,0,12.2,16.9);
	this.instance_111.compositeOperation = "multiply";

	this.instance_112 = new lib.Path_1_3();
	this.instance_112.setTransform(634,307.25,1.4395,1.4395,0,0,0,16.4,22.4);
	this.instance_112.compositeOperation = "multiply";

	this.instance_113 = new lib.Path_2_3();
	this.instance_113.setTransform(642.1,464.15,1.4395,1.4395,0,0,0,17.5,16.6);
	this.instance_113.compositeOperation = "multiply";

	this.instance_114 = new lib.Path_3_3();
	this.instance_114.setTransform(534.9,468.75,1.4395,1.4395,0,0,0,47.7,18.2);
	this.instance_114.compositeOperation = "multiply";

	this.instance_115 = new lib.Path_4_3();
	this.instance_115.setTransform(455.75,293.5,1.4395,1.4395,0,0,0,12.4,6.2);
	this.instance_115.compositeOperation = "multiply";

	this.instance_116 = new lib.Path_5_3();
	this.instance_116.setTransform(455.8,284.55,1.4395,1.4395,0,0,0,17.7,17.2);
	this.instance_116.compositeOperation = "multiply";

	this.instance_117 = new lib.Path_6_3();
	this.instance_117.setTransform(572.7,296.1,1.4395,1.4395,0,0,0,18.9,21.9);
	this.instance_117.compositeOperation = "multiply";

	this.instance_118 = new lib.Path_7_3();
	this.instance_118.setTransform(568.4,307.55,1.4395,1.4395,0,0,0,22,29.5);
	this.instance_118.compositeOperation = "multiply";

	this.instance_119 = new lib.Path_8_3();
	this.instance_119.setTransform(518.95,414.5,1.4395,1.4395,0,0,0,58.8,55.4);
	this.instance_119.compositeOperation = "multiply";

	this.instance_120 = new lib.Path_9_3();
	this.instance_120.setTransform(634.4,412.85,1.4395,1.4395,0,0,0,25.7,52.2);
	this.instance_120.compositeOperation = "multiply";

	this.instance_121 = new lib.Path_10_3();
	this.instance_121.setTransform(631.35,316,1.4395,1.4395,0,0,0,18.1,28.7);
	this.instance_121.compositeOperation = "multiply";

	this.instance_122 = new lib.Path_11_3();
	this.instance_122.setTransform(449.35,331.8,1.4395,1.4395,0,0,0,24.2,50);
	this.instance_122.compositeOperation = "multiply";

	this.instance_123 = new lib.Path_12_3();
	this.instance_123.setTransform(640.85,281.5,1.4395,1.4395,0,0,0,10.5,7.5);
	this.instance_123.compositeOperation = "multiply";

	this.instance_124 = new lib.Path_13_3();
	this.instance_124.setTransform(661.1,305.15,1.4395,1.4395,0,0,0,8,7.9);
	this.instance_124.compositeOperation = "multiply";

	this.instance_125 = new lib.Path_14_3();
	this.instance_125.setTransform(407.2,318.6,1.4395,1.4395,0,0,0,7.5,5.2);
	this.instance_125.compositeOperation = "multiply";

	this.instance_126 = new lib.Path_15_3();
	this.instance_126.setTransform(404,358.05,1.4395,1.4395,0,0,0,4.4,7.9);
	this.instance_126.compositeOperation = "multiply";

	this.instance_127 = new lib.Path_16_3();
	this.instance_127.setTransform(499.8,145.4,1.4395,1.4395,0,0,0,14.3,13.2);
	this.instance_127.compositeOperation = "multiply";

	this.instance_128 = new lib.Path_17_3();
	this.instance_128.setTransform(598.55,141.55,1.4395,1.4395,0,0,0,7.5,11.6);
	this.instance_128.compositeOperation = "multiply";

	this.instance_129 = new lib.Path_18_2();
	this.instance_129.setTransform(572.4,132,1.4395,1.4395,0,0,0,4.4,13);
	this.instance_129.compositeOperation = "multiply";

	this.instance_130 = new lib.Path_19_2();
	this.instance_130.setTransform(571.1,257.25,1.4395,1.4395,0,0,0,36.8,44.4);
	this.instance_130.compositeOperation = "multiply";

	this.instance_131 = new lib.Path_20_2();
	this.instance_131.setTransform(567.4,112.55,1.4395,1.4395,0,0,0,5.8,2.2);
	this.instance_131.compositeOperation = "multiply";

	this.instance_132 = new lib.Path_21_2();
	this.instance_132.setTransform(600.9,121.6,1.4395,1.4395,0,0,0,4.9,3.4);
	this.instance_132.compositeOperation = "multiply";

	this.instance_133 = new lib.Path_22_2();
	this.instance_133.setTransform(473.45,238.25,1.4395,1.4395,0,0,0,32.6,45.4);
	this.instance_133.compositeOperation = "multiply";

	this.instance_134 = new lib.Path_23_2();
	this.instance_134.setTransform(669.55,246.9,1.4395,1.4395,0,0,0,12.2,3.1);
	this.instance_134.compositeOperation = "multiply";

	this.instance_135 = new lib.Path_24_2();
	this.instance_135.setTransform(649.25,273.1,1.4395,1.4395,0,0,0,20.4,6.9);
	this.instance_135.compositeOperation = "multiply";

	this.instance_136 = new lib.Path_25_1();
	this.instance_136.setTransform(589.65,235.15,1.4395,1.4395,0,0,0,35.5,22);
	this.instance_136.compositeOperation = "multiply";

	this.instance_137 = new lib.Path_26_1();
	this.instance_137.setTransform(681.75,274.85,1.4395,1.4395,0,0,0,2.8,5.8);
	this.instance_137.compositeOperation = "multiply";

	this.instance_138 = new lib.Path_27_1();
	this.instance_138.setTransform(686.15,240.55,1.4395,1.4395,0,0,0,2.9,6.5);
	this.instance_138.compositeOperation = "multiply";

	this.instance_139 = new lib.Path_28_1();
	this.instance_139.setTransform(415.5,230.1,1.4395,1.4395,0,0,0,3,7.2);
	this.instance_139.compositeOperation = "multiply";

	this.instance_140 = new lib.Path_29_1();
	this.instance_140.setTransform(513.6,163.75,1.4395,1.4395,0,0,0,5.8,7);
	this.instance_140.compositeOperation = "multiply";

	this.instance_141 = new lib.Path_30_1();
	this.instance_141.setTransform(466,498,1.4395,1.4395,0,0,0,16.8,18.2);
	this.instance_141.compositeOperation = "multiply";

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#F1E8DA").s().p("AhGA9QgEgqAQgTIAUgkQAMgVARgKIAOgHQAIgCAIACQAFACAGAEQAFADAGgHIAHgWQAEgRAJAFQAIADABASIgBAaIABATQgBAKgGAGQgGAHgIAAIgQAAQghADgUAgQgLASgGAaIABAaQABASgGACQgcgBgDgug");
	this.shape_1393.setTransform(638.0201,351.3863,1.4395,1.4395);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#F1E8DA").s().p("AA4CRQgPgHgGgMQgHgPAAgdQgBghgEgMQgQgzgageQgMgPgMgFQgLgEgVgBQgbgDAAgRQABgFAEgGQAGgIABgEQAPgXARgMQACAEAAAOQAAALAJAGQAHAGAPAEQAQAEAGAEQANAIANAVQAKAQAZAfQAZAjAFAJQAPAbAAAYQAAARgGASQgGAWgKAJQgGAFgHAAQgGAAgGgDg");
	this.shape_1394.setTransform(612.8267,348.3293,1.4395,1.4395);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#F1E8DA").s().p("AgJA/QgqgWgTgDQgKgBgQABIgaACQgBgIAJgJQAJgJASgMQAqgaASgHIAegJQATgFAMgFIALgIQAHgFAFgBQAHgDALACQAOADAFgBQAFAAAJgEQAGgBAGAJQAEAIgBALIgEASIgEASQgCALgDAFQgEAHgFABIgMAAQgNACgLAKIgSAWQgNAOgTAAQgMAAgMgFg");
	this.shape_1395.setTransform(571.4761,346.801,1.4395,1.4395);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#F1E8DA").s().p("AA3BzIgJgKQgPgPgrACQgpACgNgSQgEgGgDgLIgEgSQgKgtgDgDIAXgwIAJghQAGgXAJgGQAMgHAOAZQAMAUADAQQACALAAAYQACAVAGAMQAJAYAeAfIAYAVQAPAOAFALQgDAEgIAEQgJAFgEAAIgCAAQgFAAgFgEg");
	this.shape_1396.setTransform(539.5748,334.0032,1.4395,1.4395);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#F1E8DA").s().p("AhNCPIAAAAIAAAAgAhiCCQgKgJgDgMIgCgOQgCgIgFgDQgCgCgGgCQgGgCgBADQASgyAcgsQAvhIAkgfQATgQAXgHQAcgIATALQANgEADAAIAMAIIAPAIQAIAFACAHQACALgOAGIgYAIQgJADgPAIQgMAGgNADQgnALgdAmQgmAtgNAkQgLAfgBALQACAmABAAQgMgDgJgKgAiHBRIAAAAIAAAAg");
	this.shape_1397.setTransform(445.0363,390.8777,1.4395,1.4395);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#F1E8DA").s().p("AhECWQgOgJgDgcQgCgVAEgWQAGgcAIgYQAFgOAQgSIAagdQATgXATgVIAXgbQAPgSAJgJQAVgTADARQACAKgNAOIgUATQgYAagGAYQgDAOgBAtQgCAlgKAVQgGALgMAPQgRASgEAHIgRAWQgKAMgIAAIgEgCg");
	this.shape_1398.setTransform(476.1006,352.8671,1.4395,1.4395);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("#0D110E").ss(0.5).p("AMUoMQAAABgBAAQgHAGgDAAQgLgBgJgMQgGgJgCgSQgCgUgDgIQgFgJgKgIQgLgIgGgGQgWgSgWglQgHgKgdg1QgSgigcgQQgUgMgGgFQgLgLgHgGQgMgMgIADQgIgDgaAXQgXAVgIANQgbAwAAA0QAAARADAlQABAhgFAUQgNAugDAIQgKAdgSASQgVAYgcANQgdARgUAJQgkARgOgIQgBgGgdAHQggAJgGABQgMADgOAIQgCABgWAQQgKAHgbALQgXAJgLALQggAdg5hzQg2h9gKgJQgDAXgXAiQgaAmgFASQgbAVgoAIQgwAGgZAEQgiAHgCAAQgVADgQgBQgWgCgKgIQgCgDgKgYQgFgBgOADQADgBADABQgHAFgHgCQgGgDgDgHQgBgEACgLQADgMAAgDQABgMgCgRQgDgUgBgKQgFgvgThCQgdhsgBgEQgKgsgGgjQgCgVgBgLQgDgTgGgLQgHgOgQgRQgRgTgNgFQgbgNgSAVQgIAJgPAjQgLAbgUA2QgTAvgXAcQgNASgdAZQghAegMAMQgIAKgKgCQgGgBgDgFQgEgEgEgBQgKgCgJAIQgEAEgKAOQgOAVgkAtQgeApgIAeQgDAPACAaQACAhAAAJQgBARABAYQABAOACAbQAFBrAKBEQAEAaALAzQAFAZgFA1QgEAuAFAhQAHA2AdAFQgBAFgBAJQgBAMAFAFQAHAGAdAFQASAHAGACQANAHAHAIQAIAJAKAVQAKAVAHAJQAPASAgAyQAbArAWAWQAoAoA7AgQAhASBEAdQARAIAeARQAgATAPAHQAMAGAUAGQAMAEAWAHQAEABAjANQAXAJAQAEQAdAIA8AOQAoALA4AbQBOAnAOAGQAZAKA9ARQAQAEAaAKQAhANAIADQAVAHAyAaIAdAQQAGADAOADQAFACAUAHQAQAGAKABQAFAAAQgBQAOgBAIACQAGACAJAFQAKAHAEABQAWAIAYAIQAPAFAeAHQAKADAMAAQATAAADABQAMABAkAJQAdAHASAAQAaAAAggGQAfgGAXgKIAHgEQAJgGAOgOQAOgQAHgGQAighAQgRQBChKAVhwQAQhSgFh9QgEhRAAhCQAAgKgCgVQgCgWAAgKQADgSACgMQAEgWgFgCQAAgngJgzQgDgWgPhCQgEgZgCgNQgEgWgJgPQgNgWgGgLQgLgTgHgPQgJgagEgFQgCgDgFgFQgFgEgDgEQgBgCgQgVQgKgPgDgKQgCgHABgLQABgNAAgGQABgSAAgJQAAgRgCgKQgCgGgGgQQgFgOgBgJQgHgtgCgWQgOgygGgOQgCgEgBAAQAFgBAFABQgBAAgGAEgAuICdQABABACAAQgCgBgBgCQAAgBAAgCAuICbQAAABAAAB");
	this.shape_1399.setTransform(548.9265,394.4826,1.4395,1.4395);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#DE908E").s().p("AKaOlQgSAAgdgHQgkgJgMgBIgWgBQgMAAgKgDQgegHgPgFIgugQIgOgIQgJgFgGgCQgIgCgOABIgVABQgKgBgQgGIgZgJQgOgDgGgDIgdgQQgygagVgHIgpgQQgagKgQgEQg9gRgZgKQgOgGhOgnQg4gbgogLIhZgWQgQgEgXgJIgngOIgigLQgUgGgMgGQgPgHgggTQgegRgRgIQhEgdghgSQg7gggogoQgWgWgbgrQgggygPgSQgHgJgKgVQgKgVgIgJQgHgIgNgHIgYgJQgdgFgHgGQgFgFABgMIACgOQgdgFgHg2QgFghAEguQAFg1gFgZQgLgzgEgaQgKhEgFhrIgDgpQgBgYABgRQAAgJgCghQgCgaADgPQAIgeAegpQAkgtAOgVIAOgSQAJgIAKACQAEABAEAEQADAFAGABQAKACAIgKQAMgMAhgeQAdgZANgSQAXgcATgvIAfhRQAPgjAIgJQASgVAbANQANAFARATQAQARAHAOQAGALADATIADAgQAGAjAKAsIAeBwQATBCAFAvIAEAeQACARgBAMIgDAPQgCALABAEQADAHAGADQAHACAHgFIgGAAQAOgDAFABQAKAYACADQAKAIAWACQAQABAVgDIAkgHQAZgEAwgGQAogIAbgVQAFgSAagmQAXgiADgXQAKAJA2B9QA5BzAggdQALgLAXgJQAbgLAKgHIAYgRQAOgIAMgDIAmgKQAdgHABAGQAOAIAkgRQAUgJAdgRQAcgNAVgYQASgSAKgdIAQg2QAFgUgBghQgDglAAgRQAAg0AbgwQAIgNAXgVQAagXAIADQAIgDAMAMIASARQAGAFAUAMQAcAQASAiIAkA/QAWAlAWASIARAOQAKAIAFAJQADAIACAUQACASAGAJQAJAMALABQADAAAHgGIABgBQgCgEgBAAIAKAAIgHAEQAGAOAOAyQACAWAHAtQABAJAFAOIAIAWQACAKAAARIgBAbIgBATQgBALACAHQADAKAKAPIARAXQADAEAFAEIAHAIQAEAFAJAaQAHAPALATIATAhQAJAPAEAWIAGAmQAPBCADAWQAJAzAAAnQAFACgEAWIgFAeIACAgIACAfQAABCAEBRQAFB9gQBSQgVBwhCBKQgQARgiAhIgVAWQgOAOgJAGIgHAEQgXAKgfAGQgdAGgZAAIgEAAgAuFCeIgDgDIAAgBIAAgCIAAACIAAABIADADIgDgBIAAgCIAAACIADABIAAAAgAuFCeIAAAAgAuICdIAAAAg");
	this.shape_1400.setTransform(548.9265,394.4826,1.4395,1.4395);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#D65052").s().p("AA7CZQgDgXgEgIQgHgOgNgPIgZgbQgLgNgOgYIgXgmQgEgGgTgmQgPgigdgPQgFgDgPgCQgNgCgGgGIgNgQQgHgKgJgCIAEgPQACgIAEgDQAEgCAJABQALACAZASQAaASAHAEQAUAKASgEQALgCAagMQAXgJAMAKQAQANAMAsQAFAPgBAEQAAAHgLAHIgZAOQgPAJgGAKQAFAFANADIAUAFQAUAKAYAGIAXAIIAXAIIATAEQALADAGAFQAUASgNAeQgKAYgWATQgHAHgEAAQgGgBgGAAQgIABgJAPQgIAOgLAAQgQAAgGgTg");
	this.shape_1401.setTransform(648.5301,295.0589,1.4395,1.4395);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#D65052").s().p("AmHMdQgIgCgJgLQgJgMgGgCQgEgCgRADQgLADgBgPQAAgKAGgOQAHgNAIgHIgEAAQgCgJgGgSQgFgRgBgLIgDgmQgDgXgFgPQgWg0gJgbQgJgegBgPQAAgKADgYQADgVgCgMQgBgOACgVIADgiQAAgGgFghIgGg4QgBgFgEgKQgDgKAAgGIABgoQgBg0ADglIAFgXQADgOAAgKQgBgdAMgkQAFgTATgsQAUgxA1glIAxgmQAfgZATgNIAcgVQASgOALgHQAegRAHgHQARgQgCgVQgFg4gngfIgbgSIgUgPQgMgJgLAAQgKAAgNAHQgNAJgHADIgRAHQgKAEgHAAQAIgTgEgSQgBgJgMgbQgDgJgIgIIgQgOQgXgRgLgKQgUgQgEgTQgEgRADgSQAEgVALgLQAIgJASgLIAdgSQAogfAhgJQAVgGAUAKQAPAGATATIATAPQAMAJAFAIQAIAMAPASQAQAUAGAJQANATASAhIAdA0IALAWQAHAOAHAFQALAGAOgGQAIgDAQgKIARgHQAJgEAGgGQAKgJANgWQADgFAMgLQAJgKAEgGQADgGADgKIAEgRQAMgoAGg4QACgSAHgMQAHgMAPgKQANgIALgBQAJgBASADIAeAGQARAFAEAOQAEALgFAZIgIAlQgMBcAIA+IABgIIACACQAGgEAEgKIAHgRQAVgmADgIQAGgQANgUIAXgiQALgSAQgOQATgQASgDQARgDAVAKQAWAKAIAOQADAGADAOQADANAAAIQgBAIgGAMIgKATQgNAegJAOQgHALgCAKIgDAXIgFA4IgEAXQgBANAFAJQAEAHAKAJIAQAOQAZAaANASQASAaAJAZIAMAeIAKAeIAaBjQADAMACAXIAEAjIAFAgQACAUgGALQgIgBgCgBIgCgBIgCgCQgFgJgMgEQgPgDgHgDQgIgDgKgGIgSgLIgagNIgfgPQgTgJgOgDIhQgWIgogKQgWgFgUADQg0AGgkALQguAOghAaQghAagTAjQgWAkAAAnQAAA/AHAuQAHA4ATAyIAMAbQAGAPABANQACAXgMAeIgVAxQggBUgMBBQgDAEABAFQACAHgBAEIgDAdQgCAQgEAMQgFAPgNAdQgOAdgEAPQgGAUgMAJQgKAIgWAFIg0APQgfAIgWAAIgyAFIgWACQgPAAgLgEg");
	this.shape_1402.setTransform(548.3377,225.1477,1.4395,1.4395);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#D65052").s().p("AAgBfQgQgBgTgRQgPgMgOgSQgNgQgDgUQgFgYANgOQAUgUA6gvIACAbIACAaQAAAJgDAVQgCASABAMQACAJAKAkQAEAfgUAAIgCAAg");
	this.shape_1403.setTransform(403.086,355.6711,1.4395,1.4395);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#D65052").s().p("Ag4AtQgmgcALgZQADgNAXgZQAVgWAIgFQASgNAPAGQANAFAfAVQAGAEANAFQANAGAFAEQgGAMgSASIgaAcQgHAIgKAXQgJAUgJAJQgkgXgVgPg");
	this.shape_1404.setTransform(407.6822,313.2446,1.4395,1.4395);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#5C8EC7").s().p("AhJAgIgIgtQgEgeAKgPQAFgGAFgDQANgIAagCIAngDQAdgDAJAAQANABADAAQAFADABAKQADAYgCA1IAHAkQAEAcgEAGQgEAEgNgEIgTgEQgQgDgYAHQgaAGgLAAQghAAgIg0g");
	this.shape_1405.setTransform(423.018,228.1986,1.4395,1.4395);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#5C8EC7").s().p("AAHB0QgegNgbgdQgcgZgMgPQgUgZADgYQADgcAWggQALgTAHgKQAOgSAMgDQALgDAOAIIAVAQQAQAMAOAHQAQAIAGgEIgCgFQABAAAAgBQABAAAAAAQABAAABAAQAAAAABABQgBAEgCABIAIAUQAIASADALQAKAiAMA/IAGAbQAEASgGAJQgFAGgIABIgPAAIgOABQgfAAgZgLg");
	this.shape_1406.setTransform(418.8481,194.2601,1.4395,1.4395);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#5C8EC7").s().p("Ag4EeQhEgTgVgiQgNgSgCgfIgBg0IgChGQgBgsgDgZQgCgXACgiQAAgLgEgQQgFgUgBgGQgCgUgBgjIgCg2QgFgXAAgMQgBgWAMgKQAGAGAEANIAHAXQAKATATATQAcAdAvAdQAIAEANAMIAVAPQAJAGASAHQAHADAMAJQANAJAGADQAaAQAUAGQALADAMAKIAVARIAXAIQANAFAFAJQAJASgFAlIAAAiQAAAWgDAMQgDANgJAXQgHAWACAQIAJAgQAGASgHAMQgFAKgRAHQgHADgZAFQgKACgiALQgaAJgTAAQg+ABgagIg");
	this.shape_1407.setTransform(463.7978,481.4065,1.4395,1.4395);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#5C8EC7").s().p("AmSH6QgPgBgPgSQgQgVgIgIQgUgTgPgmQgPgtgIgTIgTglQgMgWAAgRQgBgPAGgWQAGgYACgMQAGgiAFgNQAHgQAIgfQAIgiAGgOIAUgkQAMgUABgTIgEgVQgCgVgMgeQgQgmgDgMQgGgVgCgcIgEgxQgDglAEgjIAGgwQAFgZASgPQARgOAegfQAdgbAZgLQAWgJAhgCQATgCAmAAQA4gBBEAUQASAGAkAIQAKADASAMQARALAKADQASAFAWAMIAnAUQAMAGAfAXQAbATASAHQAKADARACIAbAEIAjAJQAWAFAPACQATACAggBIAzgDQAegBA3AGQAMAAAegEQAbgCAKAMQARASACAbQABASgHAgIgEAUQgDAKgJAFQgHAEgRAAIgZAAQg/ALg9gWQgegLgOgBQgbgCgJAWQgIAVAnASQARAHAcAHIAuAMIA0AQQAeALASAPQAYATgGAmQgFAjgbASQgQAMgagCQgSAAgagIQgRgEgNgKIgbgTQgNgIgXgIIgngMIgygQQgcgHgYgCQgbgFgPAAQgaAAgFAUQgFAUgOAMQgSANgMALQgqArgEArQgBATADAnQADAmgDAUIgBAiQAAAUgGAMQgSAogLARQgSAbgbAOQggARgOAHQgbAMgWAEQgIACgRAAQgQABgIACQgKADgTAKIgdAPQgIADgRAFQgRAEgIADQgGADgYASQgQANgOAAIgCAAg");
	this.shape_1408.setTransform(611.9342,276.5273,1.4395,1.4395);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#5C8EC7").s().p("AkgJlQAAgEAKgJIANgNIAYgkIAVgeQALgSAFgQQALgggIg0QgMg6gDgaQgCgPABgcQAAgbgCgPQgCgUgBgoQgBgogDgVIgGhHQgBgRABgdQABghAAgOQgBgUgIgcIgPgvQgihfgQhJQgHgjgRg2QgWhCgFgVQgNgkgEgVQgHgpAWgLQASgJAhgHIA4gKIBPgOQAqgEAhAWQAUANANAYIAXArQAJANAHAPIALAfQACAIAHAMIAJAUQAEAMAGAYQAHAWAKALQARAWALAJQAUAQASgCQASgBAbgWIApgiQAygfAggDQASgBAOAKQAEADAUAWQAeAfAOAdQAUAqgTAcQgHAJgUANIggATQgUAKgVASIglAgQgMAKgdAWQgbAUgNANQgqAogZA3QgQAlgGA0QgBAOgDBOIgDAyQAAAdACAVIACAgQAAATAEANIAJAgQAEATgEAOIgBAFQgHAWAFAeQABAGAGARQAGAPAAAHQAAAZgPgMQgNgMgFgQQgGgVgGg1QgDgYgHgQQgJgRgPgPQgPgQgIgGQgOgKgPAEQgMAEgIALQgGAIgGAPIghBNQgFAPgOAZQgOAbgFANQgUAugdAaQgdAcgYALQgLAGgIAAQgQAAAEgcg");
	this.shape_1409.setTransform(467.133,212.7796,1.4395,1.4395);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#221F20").s().p("Ar/GRQgHgggBgZQgEhkA8h/QAYgyAjg7QAlg/AbgkQBRhpBhgcQA0gOA2AKQA3ALAqAhIAVASQAMAMAJAFQAbASAdgWQAUgQAUgfIAeg2QAhg4AdggQAqgrAxgMQAsgLAoASQAqASAQAqQAHASAFAZIAHAsQAKA5AaAXQAVARAiADQATABAogFICEgTQCMgPBVA3QABABAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgagRgcgKQg1gShFADQgmABhVANQhPAMgVAAQg8gBgbglQgTgagIg0QgJg+gIgUQgXgzg5gIQg1gIgwAeQgrAbglA5QgnBEgVAhQghAygiABQgUABgXgTQgZgYgMgIQgwgig6gFQg6gFg2AWQhfAnhOB2QhLBwgoBlQgzCBAUBtQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBgBg");
	this.shape_1410.setTransform(538.2089,276.7478,1.3775,1.3775);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#221F20").s().p("AAtCgQgEgDACgEQAkg3AQhBQAQg+gFg3QgHhPg7APQgVAGgXAPQgPAIgbATQgiAZgdAqQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBgBQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAQAggwAuggQAggWAOgIQAdgPAYABQAvADAGBGQAGBAgRA/QgQA/gkA3QAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgDgBg");
	this.shape_1411.setTransform(552.0023,255.3828,1.3775,1.3775);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#221F20").s().p("AgIANQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAAAgBIALgQQADgEAEACQAFADgDAEIgLAQIgDADIgBAAIgDgBg");
	this.shape_1412.setTransform(557.695,277.9219,1.3775,1.3775);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#221F20").s().p("AGvLEQgNgBgQgLIgagSQgVgQgdgaIgxguIgyguQg7g1gzgaIgdgNQgRgIgKgJQgKgKgHgQQgEgJgFgVQgJgggUgSQgPgNgegQIgwgYQgbgPgPgRQgTgUgMgjQgMgpgHgUQgVhBhAgfQgTgJhrgeQhOgWgmgmQgFgFAFgFQAFgFAFAFQAVAVAiAQQAUAJBjAcQBKAUAlAhQAWATAOAeQAJAVAKAlQAMAqAMAUQAOAVAcASQANAIAiARQAeAPAPALQAWAQAKARQAHALAFAQIAIAdQAGARAOAMQAKAJAUAJQAkARAVAOQApAZA5A2IAwAuQAbAaAVASQAbAWAcASQAMAIAGACQALAEAIgHQAGgEAGgJIAIgQQAihCgEhKQgDhBgkhCQgSghg0hKQgvhDgUgqQgZg3gJhZIgPiTQgOhMgdhMIgchHQgSgrgJgdQgKgkgOhuQgMhcgYgyQgDgFAGgDQAFgDACAFQAOAeAJAiQAHAeAGAtIAJBLQALBFAhBRQAqBpAMAuQAVBMAHBRIAGBQQAEAvAKAgQAQAzAtBEIBLBsQAoBAAMA4QAPBFgTBGQgJAigSAfQgJAPgHAHQgKAIgLAAIgEAAg");
	this.shape_1413.setTransform(537.4802,388.9157,1.3775,1.3775);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#221F20").s().p("AAHAVQgPgPgJgSQgDgGAGgEQACgBADABQADAAABADQAFAKAFAHIABACIABAAIAAAAIADAEIAHAHQAFAFgFAFQgCACgDAAQgDAAgCgCg");
	this.shape_1414.setTransform(466.2602,376.1814,1.3775,1.3775);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#221F20").s().p("Ai+F4QgkgmgQhKQgOg8gBg+QgChxAlhqQAnhwBJhQQAjglA6gYQAjgPATgNIAVgNQANgHAMAAQAMgBAOAHQAIADAQAKQAZARATASQAdAaAyA9QAFAFgFAGQgGAFgEgFQgyg+gggdQgcgZgXgNQgTgLgOACQgLABgTAMQgRAMgeAOIgwAXQgpAVgmA1Qg/BTgfBoQgeBlAGBoQADA0ANA2QAQA/AeAhQAFAFgFAFQgDADgDAAQgCAAgCgDg");
	this.shape_1415.setTransform(478.0946,306.7616,1.3775,1.3775);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#221F20").s().p("AgZBPQgHgrANgqQANgrAcgfQADgCACACQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQgbAfgLApQgMAoAGApQABAEgEABIgCAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_1416.setTransform(604.0697,281.4484,1.3775,1.3775);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#221F20").s().p("AhrBfQgFgCABgFQAFgnAehAIAUgoQANgXAPgKQARgLASAJQAMAGASASQAgAfATAmQAbA1gDAfQAAAFgGAAQgFAAAAgFQACgSgNghQgHgWgPgWQgLgTgTgVIgRgSQgMgLgJgDQgUgJgUAfQgLARgOAeQgdA9gHApQAAAEgEAAIgCAAg");
	this.shape_1417.setTransform(577.2849,274.0075,1.3775,1.3775);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#221F20").s().p("AgIAQIAGggQABgFAFABQAGABgCAGIgFAWIAAADIAAAEQgBAFgEAAQgGAAAAgFg");
	this.shape_1418.setTransform(569.8729,304.669,1.3775,1.3775);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#221F20").s().p("ABlGJQgPhsgNhIQghitg9iBQg3h0gKgeQgfhVAHhHQAAgFAGAAQAGAAgBAFQgIBQApBiQALAbAYAxIAiBMQAfBEAUBLQATBEAQBVQAKA5AOBhQABAGgGACIgDAAQgDAAgBgEg");
	this.shape_1419.setTransform(584.0491,360.3205,1.3775,1.3775);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#221F20").s().p("ADGDIIAEgnQAAgXgGgQQgEgOgQgQIgagZQgRgVgPgdQgIgRgQgkIgdhDIgNgfQgJgRgKgLQgogqhTARQgnAIgUAIQgiAMgRAVQgDAEgEgEQgDgDADgEQASgYAlgMQAngOAmgFQBLgKAoApQAKAKAIAQIANAdIAfBLQATArALAVQAUAjAXAVQAPANAGAJQAJANACAPQAGAlgKAhQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1420.setTransform(634.9637,291.0677,1.3775,1.3775);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#221F20").s().p("Ag7HnQgggEgHgfQgEgPgCgWIgCgmQgFgpgIglQgliuhjhdQgDgDADgDQADgDAEADQBsBdAgC3QAHAnADAcIAEAnQABAZADAOQAFAUARAIQAQAIAUgHQAdgLARgwQAbhFARhgIAMhXQAGglAUgbIAXgdQANgSADgQIAEglQACgVAHgNQAHgNARgRQAUgVAFgIQAQgUABgTQAAgIgEgMIgHgTQgHgaASgmIARglQAJgVADgSQAGgigFgyQgCgggCgMQgEgYgHgSQgDgFAHgCQAGgBACAFQAHATAEAbIAEAvQAEA6gIAjQgEASgNAaQgQAegEAMQgIAYAJAZQAJAYgCAOQgDARgLAQQgHAKgRASQgVAWgHANQgHAOgCAcQgDAogVAdIgXAeQgMARgEARQgIAdgFA8QgGAngNAxQgLAugQArQgOAngSASQgTASgZAAIgJgBg");
	this.shape_1421.setTransform(633.5344,410.1526,1.3775,1.3775);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#221F20").s().p("AhYAeQgDgDADgDQAegjAxgNQAtgLAxAKQAEACABAEIAAABQABADgCACQgEAEgGgBIgKgDIgXgCQgYgBgWAEQg0AKgfAfIgDACIgCgBg");
	this.shape_1422.setTransform(418.2411,310.5781,1.3775,1.3775);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#221F20").s().p("AhkAWQgCgEADgCQAsgcA1gJQAbgEAYACQAMAAAOACQARACAHAEQAEADgBAEQgCAFgEAAQgFAAgHgBIgNgDIgXgCQgbgBgWADQgxAHgsAXIgDABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1423.setTransform(420.4409,295.248,1.3775,1.3775);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#221F20").s().p("AgQA1QgHgWAFghQADgaAMgcIABgBQgCgEAEgCQACgDAEADQARAUgCAmQAAATgJAkQgFAQgJAAQgKAAgEgNgAgHADQgBAQABAPIACAMIACAGIABABIABgBQABgCABgLIAEgNQADgQABgMQABgWgIgWQgHAYgCAZg");
	this.shape_1424.setTransform(406.3372,305.5494,1.3775,1.3775);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#221F20").s().p("AApATQgwAAgrgcQgEgDACgFQADgEAEACQAoAYAuACQACgCADABQAHABAAAGQAAAHgHABIAAAAQgDAAgCgCg");
	this.shape_1425.setTransform(432.5332,277.1741,1.3775,1.3775);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#221F20").s().p("AANAOIgPgEQgOgFgPgMQAAgBAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAQADgCADACQAKAIAPAEIAPADIAIAAIAHACQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABQgCABgGAAIgJAAg");
	this.shape_1426.setTransform(438.0407,264.4264,1.3775,1.3775);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#221F20").s().p("AggAwQgGgCgCgGQgCgHAHgQQAMgaASgYQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIABgBIAPgHIAQgGQAHABADAGQACAFgBAHQgCAIgHAPQgGAKgIALQgIAKgKAIQgMALgIADIgIACIgEgBgAgYAQQgHAOAAAFQAAAFAGgCQAEgBAEgDQAQgLAMgQQANgRAFgSIABgIIAAgBQgBAAgFACQgMAGgLADIgCAAQgOAUgJAWg");
	this.shape_1427.setTransform(428.7831,268.5246,1.3775,1.3775);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#221F20").s().p("AADDFQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAKgTgBgcQgBgMgFgkQgHg1gEgpQgFg1gDgtIgDgxIgBgZQgBgOABgKQABgEAEAAQAEgBAAAEQADAQAAAiIAEA2QACAtAFA4QADAiAJBFQADAZgBAQQgCAWgKASQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_1428.setTransform(499.031,450.1041,1.3775,1.3775);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#221F20").s().p("AAQAgQhYgFhOgoIgKAAQgGAAAAgFQAAgGAGgBQAkgEA0gBIBYgBIBYgBQApABAUAWQADADgCAEQgRAXguAHQggAFggAAIgXgBgABQgTIhPABIhQADIg3ACQBEAdBJAFQApADAngFQAbgEALgDQASgGAKgKQgMgLgUgDQgHgBgUAAIgOAAg");
	this.shape_1429.setTransform(477.5164,477.3996,1.3775,1.3775);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#221F20").s().p("AAGFlQgMgWgCglIgBhQQgGmkAAiZQAAgEAEAAQAEAAAAAEIAFCgIADEWIADDQQABAoAKAVQADAFgFACIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_1430.setTransform(454.0775,425.8776,1.3775,1.3775);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#221F20").s().p("AghBLQgEgEADgEQATgXAjgLQAVgHAGgGQAIgJAAgOQAAgLgEgRQgEgQgGgHQgFgGgIAAIgOACQgJABgRAAQgcgBgYgJQgEgBACgEQABgEAEABQAeAKAmgFIAQgDQAJgBAGADQALAEAHAOQAOAegDAZQgEAdggALQgXAHgIAFQgJAGgRAPQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1431.setTransform(676.1567,295.4889,1.3775,1.3775);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#221F20").s().p("AgWAsQgKgXAPgZQAFgKAMgMQAKgMAJgGQADgCADAEQADADgDAEIgSARQgIAHgGAKQgPAWAFAVQABABAAAAQAAABgBAAQAAABAAAAQgBAAgBABIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_1432.setTransform(664.9938,270.6983,1.3775,1.3775);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#221F20").s().p("ABBAzQgLgHgTgWQgYgZgPgkIhNAjQgNAFgHgBQgHgCACgHQACgGAGACQADABAFgCIAIgFIBagpQANgFALAIQATAPAYAjQAVAeALAeQACAFgHADQgFACgFAAQgNAAgOgMgABbAyQgNgcgOgVQgJgOgLgLIgLgNQgHgIgGgCQgEgBgGADIgGADQANAcAUAVQAKAMANAMQALAKAGAEQAIAFAGAAIAAAAg");
	this.shape_1433.setTransform(655.0495,256.3989,1.3775,1.3775);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#221F20").s().p("ADbEuQgqgTg3gxIgugpQgcgYgVgOQgbgSgagIQgOgFgZgDIgngHQgggHgjgWQgTgMgoggQhNg9gngqQgngpg4hVQg+hcgfgkQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAfAkBHBkQA+BZAtArQAlAjBPA9QAlAdAYAMQAbAOAvAHQBCAKAxAjQAXAQA/A6QA4AyApARQBHAeA3gRQANgEANgKQAIgGAQgNIAsgmQAfgaALgLQAXgWANgVQADgEAEADQAEACgDAEQgOAXgbAaIgxArQggAdgRANQgeAWgcAEQgOADgOAAQgrAAgvgUg");
	this.shape_1434.setTransform(569.8237,466.616,1.3775,1.3775);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#221F20").s().p("AijNLQgGgDAEgFQAwhHAmhyQAihfAchjQAeh3ARg7QAdhnAjhGIAphXQAWgxACgrQAEhQgqhnIgkhTQgVgxgHglQgFgZgIg4QgHg1gGgcQgLgvgSggQgPgdgiggQgmgigSgRQgggegPgdQgBgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQASAeAqAkQA3AwAMAMQAcAgARAtQAOAkAHAyQAEAcAHA4QAHAyALAhQAJAdAaA7QAaA6AKAfQAfBhgRBQQgIAkgYAyIgoBUQgeBHgfBwIgxC5QgdBhgcBOQgkBggqA/QgCADgDAAIgDgBg");
	this.shape_1435.setTransform(664.4837,373.7337,1.3775,1.3775);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#221F20").s().p("ABKCoQgHgMgdgdIgnglQgogjgUgmQgVgqgFgtQgCgWACgXIAEgWIAEgOQADgKgCgEQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAFAGgBAKIgDARQgEAbABAYQADAxAXAsQAUAmAtAoIAmAkQAZAZAIANQAEAGgGAEIgFABQgDAAgDgDg");
	this.shape_1436.setTransform(632.4822,235.8452,1.3775,1.3775);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#221F20").s().p("AjsCPQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAgBABAAQAWg2AmgqQBGhKByglQA3gRBBgIIA5gGQAUgCALgJQAPgKgBgRQAAgFAFAAQAFgBABAEQADAMgGAMQgGALgLAHQgLAHgRACIgdADQiFANhgAxQh1A6gvBqQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCAAg");
	this.shape_1437.setTransform(612.4211,222.8857,1.3775,1.3775);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#221F20").s().p("AgDBiQgCgJAAgPIAAgYIgBgxQgBgrACg3QAAgBAAgBQAAAAABgBQAAAAAAAAQABgBABAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABQADArACA3IABAxIABAYQABAOgCAKQgBADgEABQgDgBgBgDg");
	this.shape_1438.setTransform(644.1524,192.3427,1.3775,1.3775);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#221F20").s().p("AgQAYQhSgKg9gMQgngHgagHQgpgMgPgOQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAIAgAKQAVAHALADIBBANQA/AKBPAJQCEAPCWADQAHAAAAAIQAAAHgHAAQilgEh+gPg");
	this.shape_1439.setTransform(605.3995,174.4606,1.3775,1.3775);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#221F20").s().p("AgKB2Ig9gmIgZgPQgOgJgJgIQgPgPABgXQAAgSALgWQALgZATgYQAQgWAOgJQAUgLAbAEQARADAdANQAzAVAyAiQAEAEgDAFQgDAFgEgDQg3gmgzgVQgogSgXAGQgOADgMAMQgIAIgMAQQgWAggIAVQgMAiATAVQAIAIAQAKIAaAPIA4AlQADACgCAEQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIgCgBg");
	this.shape_1440.setTransform(493.5335,152.5799,1.3775,1.3775);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#221F20").s().p("AhTAVQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAtgiAwgFQAXgCAUAJQAWAKAJASQACAEgEADQgEACgCgEQgWglg0AIQgpAGgnAbIgCABIgDgCg");
	this.shape_1441.setTransform(568.6079,170.3847,1.3775,1.3775);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#221F20").s().p("AhVC/QAKiNAZhLQAoh3BagyQADgCACADQACADgDACQhXAzgmB1QgYBGgMCNQgBAEgDAAQgEAAAAgEg");
	this.shape_1442.setTransform(547.5206,198.6243,1.3775,1.3775);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#221F20").s().p("AFLD1QgDgigOgdQgFgKgJgOIgRgXQghgvAVgpQAHgNAYgiQARgegOgUQgIgNgSABQgQABgNAKQgNALgTAkQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIg9goIgRgMQgJgJgBgJQgBgLAIgNIANgWQAHgQgDgPQgEgRgNgJQgMgJgNABQgOAAgKAKQgGAGgHALIgLASQgYAjgtgDIgzgIQgfgEgVAEQgeAIgPADQgaAEgTgKQgSgJgHgVQgEgOAAgbQAAgegJgPQgJgNgPAAQgNAAgMALQgRASABAiIAEA5QgDAtgfANQAAAAAAAAQgBABAAgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAZgOACglIgFg+QgCgZALgUQANgYAXgDQAUgDANARQALANADAVQACAQABAkQAGAcAaAGQAUAFAjgJQAmgKAQABIAyAJQAeAFASgGQASgGAPgXQATgdAIgHQAQgNAUADQAUADANAPQAcAiggAxQgNATALALIALAJIANAHIAwAgQANgZALgNQATgUAZAAQAUgBAMAPQAMAOgCAVQgCATgPAVIgZAmQgNAYAMAbQAFALAYAiQAeAqADA1QAAAFgFAAQgFAAAAgFg");
	this.shape_1443.setTransform(576.1484,144.2441,1.3775,1.3775);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#221F20").s().p("AiYCmQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAIg0Aig1QAbgpAvgtQBQhTBrg2QADgBACADQACADgDACQhnA0hQBQQgvAugbAoQgkA1gJAzQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_1444.setTransform(509.2347,157.8102,1.3775,1.3775);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#221F20").s().p("AAECtQgLgmgCgxQgBgkADg0QAHg8AAgdQgCg2ACgbQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQgCAbAEA2QABARgDAZIgEAqQgGBgAOBTQAAABAAAAQAAABAAAAQAAABgBAAQgBABAAAAIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape_1445.setTransform(487.8813,193.794,1.3775,1.3775);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#221F20").s().p("ADuOYQgqhAhihWQhvhkgkgrQhnh8hBjSQgmh7AKhVQAFgqATg4QAYhBALggQA4iqgDjwQAAhagHh3QgCgigKhEQgHg2AKgiQABgDADABQAEABgBADQgGAXADAgQABALAIArQAEAYADAfIADA4QAGB9gCBoQgEDgg/CwQgZBFgHAdQgPA4ABAvQABAvANA4QAKAoAVA7QBHDOB2B4ICDB4QBPBIAnA9QACAFgEADIgDABQgDAAgCgDg");
	this.shape_1446.setTransform(463.3757,297.0125,1.3775,1.3775);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#221F20").s().p("AAtAZIgqgJQgUgDg/gCQgwgCgdgGIgEABQgGABgBgFQgCgFAGgBQBGgUBlgCQAqgBAvAEIAlADQAWADAMAKQACABABADQAAAEgCABQgLAIgZAJQgaAJgTADIgJAAQgOAAgTgEgAAAgPQgoABhKALIAeABQAwACAeACQATABAPAEIAVAFQANADAIABQATACAcgKQAXgHAMgFQgGgDgHgBIgWgCIgmgEQgggBgfAAIgQAAg");
	this.shape_1447.setTransform(465.7127,170.6873,1.3775,1.3775);

	this.instance_142 = new lib.Path_30();
	this.instance_142.setTransform(473.15,284,1.379,1.379,0,0,0,16,13.2);
	this.instance_142.compositeOperation = "multiply";

	this.instance_143 = new lib.Path_1_2();
	this.instance_143.setTransform(626.55,442.95,1.379,1.379,0,0,0,19.9,24.9);
	this.instance_143.compositeOperation = "multiply";

	this.instance_144 = new lib.Path_2_2();
	this.instance_144.setTransform(572.9,452.55,1.379,1.379,0,0,0,25.2,24.3);
	this.instance_144.compositeOperation = "multiply";

	this.instance_145 = new lib.Path_3_2();
	this.instance_145.setTransform(634.8,293.25,1.379,1.379,0,0,0,21.6,21.9);
	this.instance_145.compositeOperation = "multiply";

	this.instance_146 = new lib.Path_4_2();
	this.instance_146.setTransform(575.55,273.35,1.379,1.379,0,0,0,8.1,7.6);
	this.instance_146.compositeOperation = "multiply";

	this.instance_147 = new lib.Path_5_2();
	this.instance_147.setTransform(552.35,248.15,1.379,1.379,0,0,0,11.8,10.1);
	this.instance_147.compositeOperation = "multiply";

	this.instance_148 = new lib.Path_6_2();
	this.instance_148.setTransform(476.45,304.6,1.379,1.379,0,0,0,23.7,34.8);
	this.instance_148.compositeOperation = "multiply";

	this.instance_149 = new lib.Path_7_2();
	this.instance_149.setTransform(599.95,234.5,1.379,1.379,0,0,0,16.9,16.1);
	this.instance_149.compositeOperation = "multiply";

	this.instance_150 = new lib.Path_8_2();
	this.instance_150.setTransform(526.5,359.9,1.379,1.379,0,0,0,59.2,91.2);
	this.instance_150.compositeOperation = "multiply";

	this.instance_151 = new lib.Path_9_2();
	this.instance_151.setTransform(616.2,369.75,1.379,1.379,0,0,0,38.3,77.9);
	this.instance_151.compositeOperation = "multiply";

	this.instance_152 = new lib.Path_10_2();
	this.instance_152.setTransform(601.5,290.2,1.379,1.379);
	this.instance_152.compositeOperation = "multiply";

	this.instance_153 = new lib.Path_11_2();
	this.instance_153.setTransform(562.95,204.8,1.379,1.379,0,0,0,43.6,38.3);
	this.instance_153.compositeOperation = "multiply";

	this.instance_154 = new lib.Path_12_2();
	this.instance_154.setTransform(654.35,264.55,1.379,1.379,0,0,0,8.3,7.4);
	this.instance_154.compositeOperation = "multiply";

	this.instance_155 = new lib.Path_13_2();
	this.instance_155.setTransform(676.95,295.3,1.379,1.379,0,0,0,5.6,6.4);
	this.instance_155.compositeOperation = "multiply";

	this.instance_156 = new lib.Path_14_2();
	this.instance_156.setTransform(433.35,275,1.379,1.379,0,0,0,5.3,2.7);
	this.instance_156.compositeOperation = "multiply";

	this.instance_157 = new lib.Path_15_2();
	this.instance_157.setTransform(419.5,307.05,1.379,1.379,0,0,0,8.9,4.4);
	this.instance_157.compositeOperation = "multiply";

	this.instance_158 = new lib.Path_16_2();
	this.instance_158.setTransform(590.15,208.5,1.379,1.379,0,0,0,40.1,28.9);
	this.instance_158.compositeOperation = "multiply";

	this.instance_159 = new lib.Path_17_2();
	this.instance_159.setTransform(495.1,156.85,1.379,1.379,0,0,0,14,7.9);
	this.instance_159.compositeOperation = "multiply";

	this.instance_160 = new lib.Path_18_1();
	this.instance_160.setTransform(462.15,246.3,1.379,1.379,0,0,0,23.9,55.9);
	this.instance_160.compositeOperation = "multiply";

	this.instance_161 = new lib.Path_19_1();
	this.instance_161.setTransform(478.1,441.85,1.379,1.379,0,0,0,17.4,25.4);
	this.instance_161.compositeOperation = "multiply";

	this.instance_162 = new lib.Path_20_1();
	this.instance_162.setTransform(662.85,256.9,1.379,1.379,0,0,0,4.6,6);
	this.instance_162.compositeOperation = "multiply";

	this.instance_163 = new lib.Path_21_1();
	this.instance_163.setTransform(406.35,305.8,1.379,1.379,0,0,0,1.4,5.6);
	this.instance_163.compositeOperation = "multiply";

	this.instance_164 = new lib.Path_22_1();
	this.instance_164.setTransform(429.45,269.1,1.379,1.379,0,0,0,3.5,4.6);
	this.instance_164.compositeOperation = "multiply";

	this.instance_165 = new lib.Path_23_1();
	this.instance_165.setTransform(478.85,477.55,1.379,1.379,0,0,0,14.8,2.6);
	this.instance_165.compositeOperation = "multiply";

	this.instance_166 = new lib.Path_24_1();
	this.instance_166.setTransform(467.75,170.6,1.379,1.379,0,0,0,14.6,2.6);
	this.instance_166.compositeOperation = "multiply";

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#DE908E").s().p("ADkP5QgNgKgcgRQgbgSgNgKQgIgGgWgZQgSgTgQgHQgigQgngLQg6gRgIANQgDgMgZgMIglgRIgWgOQgOgJgIgIIgQgSQgJgLgKgGQgkgXgmgxIg+hUQgXgegWggQgIgMgTgVQgUgWgIgLQgdgxgUgXQhFhThHg9Qg5gxgjgkQgxgzgdgvQgVgkgZg1IgrhcQgUgrgVhVQgJgjAHgyIARhUQAGgeANgWQALgWATgrQATgsALgUQAwheBPhOQAzgzA1gZQArgUA5ABQA5ABAqAXQAPAHAcAbQAaAZATAHQAQAGAIgCQAGgCAGgIIAJgNIAdggQAHgIAGgLIAJgUQAkhHA2gtQBAg2BFAEQBKAFAZBqQADAKgBAiQACAfAPAFQACAAAagzIAeg4QAlgvA/gkIAggWQATgNAPgGQAXgJAvgNIATgHQAMgEAIACQAGABgOAfQgEAOgCAdQgDAPAJAYIAOAmQAGAUARAaIAdAsQAIAMAUALQAYAPAGAGQANAMASAeQASAeAMAMIAUAVIAQAMIAQAMIAiAdQASAQAMAPQAcAjAPAvQAJAbAGAcQAKAngHAtQgCAQAGAWIAKAkQAEAQAMAUIASAiQAFALAHAVQAGAWAFALQARAlANAnQASA7ABAtQAAA4gYAwIgPAbIgPAbQgwBrgfBlIgCgBIgBAAQgNAagLAuIgQBLIgUBMQgMAsgNAeQgOAegTA8QgUA+gMAcQgIAVgWAdQgcAmgGAJQgRAdg3AvQg3AwgyAJQgMADgNAAQhFAAhShAg");
	this.shape_1448.setTransform(560.2514,361.1511,1.379,1.379);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#5C8EC7").s().p("AAdF2QgsgCg9gPQgsgKgZgRQgQgLgEgWQgCgHAAgjIgCglQgDgZAAgLQgChZAGiwQABgbgDgsQgDg2AAgSIAAgQQgDgRgBgcIgBgtIgBgYQABgRAIgBIAVAQQADAEAEAKQAEAJADAEQAGAIANAMIAVATQAiAkBFBBQATARAbAhQAeAmANAOQAKAKARALQAQAMAKAKQADADAAATIgCAYQAAAIAEAPQAEAQAAAIIgBAjQgCAVABANQAGBMAGAkIAKAwQADAagIAWQgGARgJAIQgHAGgTAGQgnAOgvAAIgSgBg");
	this.shape_1449.setTransform(477.3886,429.4239,1.379,1.379);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#5C8EC7").s().p("AjoIRQgCgKACgbQADgpASg2QAWg9AKgfQAIgXAJgtQAKguAHgWQAYhNAFhcQAEhIgIhkQgEgrAAhIQAAhTgCggIgIhEQgDgnALgbIAEAAQAOgMAfgBQASAAAhACQAdgBA9gJQA2gGAkAKIAYAHQAMAEAFAJQAEAJgDASIgEAaQgDAYgBArQAAAugCAVQgDAZABAzQABAQAGAUIAKAjQADAMAAASIgBAfQABBCANAlIAKAWQAIAQgCADQgCAFgQgCIgTgDQg3ABg3AdQgyAbgmAsQgeAigiA2QglA+gTAfQgcAtgPAcQgVAqgKAmQgDAOgGAvQgFAngJAUIAAAAQgBAAgMggg");
	this.shape_1450.setTransform(461.9915,244.1149,1.379,1.379);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#5C8EC7").s().p("AheEfQgFgGgCgFQgCgEABgIIAAgMQgCgMgLgqQgLgmgGgOQgLgYgVgSQgsgmhCAbQg0AWgqAvQgPARgJABQgKACADgZIAIglIAIgmQACgMACgZQABgYADgNIAIglQABgQAEgQIALglQAgheA2gzQAighAagMQAjgPAjAQQAfAOAtAIIBOAKQBOANA3ADQASACArAHQAmAGAWABQAbABAegCIAjgDQAWABAIAKQAHAKgCAYQgEAfABAFQACAVABArQACAdgEAPQgGAVgVAKQgOAGgYABQgeACgIACIhKAQQgqAKgeAMQh1AthBBTQg1BCgBA8QgCgDgFgGgAlxA7QAGgQgBgZIgBgEg");
	this.shape_1451.setTransform(590.1921,210.2253,1.379,1.379);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#5C8EC7").s().p("AgxBgQgZgYgHgFQgdgTgJgKQgRgUAHgWQAIggAPgaQASgdAYgPQAXgOAqALQAeAIAjASIAjATQAYANAHAKIgoAfQgZARgNAPIgkAtIgPAaQgLAUgGABIgCABQgLAAgWgTg");
	this.shape_1452.setTransform(494.67,153.2074,1.379,1.379);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#D65052").s().p("AgqAAQgDgsgQgZQAAgBAAAAQAAgBAAAAQABAAABgBQAAAAABAAQAjACAqgBQAfABAJAeQAKAcgRAaQgGAJgKADQgMADgIADQgLAFgOAOIgYAWQgFgQgEg5g");
	this.shape_1453.setTransform(677.2978,296.0422,1.379,1.379);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#D65052").s().p("AAHBEQgYgZgKgJQgegYgOgOQgcgeAFgUQAWgGAsgVIAYgLQARgHAGAAQASACAVAgQALARAQAfQAMAUgCAKQgCAHgTAQQgbAXgEApQgQgKgUgWg");
	this.shape_1454.setTransform(656.2755,261.9788,1.379,1.379);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#D65052").s().p("AhpBIQgIgIAEgiQAHgxATgXQAVgbBagBIAqgEQAZgDAQAFQgJATgOAoIgJAiQgHASgUgEQgFgBgMgFQgLgEgIABQgQAAgfAQQgjANgPALIgMAJIgDABQgEAAgFgEg");
	this.shape_1455.setTransform(419.5306,303.5311,1.379,1.379);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#D65052").s().p("AAbA6IgQgGQgagGgRgGQgggKAEgQQgNgFASgfQASgeAPgGQAJgDAHABIANAEIAZAGQARADAHAEQAOAHgFAZQgDANgJAZIgCATQgCAMgFADIgDAAQgFAAgJgDg");
	this.shape_1456.setTransform(433.4651,271.5921,1.379,1.379);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#D65052").s().p("AknIPQgNgOgJgHIgdgaQgTgPgQgEQgugLgNgIQgagPgGgkQgEgYADgyQADgwgFgZQgDgMgBgWQgBgYgBgKQgFgPAAgIIACgYQAEgbAAgOIgDhLQAAgsANgdQAdg8AbgjQAcgjAQgQQALgLAUgQIAggZQAMgKATgTQASgQAQgHQA6gaATgXQANgQACgeIAAgxQAAgcAIgXQAMgfAXAAQAcgBAIAgQABAEAEAyQAEArAdAHQATAEAxgMQAWgGAlAGIA7AIIAZABQAOgBAJgIQAHgGAMgUQALgRAMgIQAkgYAbAiQAKAMgHAYQgEANgJAXQgFAXAPAQQAHAGAfAUIAhAVQAGgTAQgSQAQgTARgGQAPgFAKAIQAHAGAGARQAGAUgLARQgRAcgCAFIgNAoQgDAUAKAUIAXAnQAPAYAEARQAHAngDALQgCAGhXgEIgeABQgTABgLgDIgfgIQgUgGgNgBQgfgBgUgDQgkgGACgRQgHAAgMgMQgMgMgJgCQgTgEgWAGIgmAOQg0AUgfAdQgfAcgWAkQgXAlgLAoQgFAUgEAkQgEAqgDAPQgJAtgGBFIgBAPQgCAJABAFIACAIQADAGAAADQAAAGgFAHIgIAMIgOAcIgjA6QgjA9gpABIgCAAQgOAAgMgKg");
	this.shape_1457.setTransform(554.9636,183.7238,1.379,1.379);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#221F20").s().p("Ar/GRQgHgggBgZQgEhkA8h/QAYgyAjg7QAlg/AbgkQBRhpBhgcQA0gOA2AKQA3ALAqAhIAVASQAMAMAJAFQAbASAdgWQAUgQAUgfIAeg2QAhg4AdggQAqgrAxgMQAsgLAoASQAqASAQAqQAHASAFAZIAHAsQAKA5AaAXQAVARAiADQATABAogFICEgTQCMgPBVA3QABABAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgagRgcgKQg1gShFADQgmABhVANQhPAMgVAAQg8gBgbglQgTgagIg0QgJg+gIgUQgXgzg5gIQg1gIgwAeQgrAbglA5QgnBEgVAhQghAygiABQgUABgXgTQgZgYgMgIQgwgig6gFQg6gFg2AWQhfAnhOB2QhLBwgoBlQgzCBAUBtQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBgBg");
	this.shape_1458.setTransform(538.2089,276.7478,1.3775,1.3775);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#221F20").s().p("AIHOXQgKgCgYgQIgdgVQgZgTgfgdIg1gyQhDhAgygdIgigRQgXgKgMgIQgYgRgKgmQgJgogVgSQgQgPgkgSQgqgVgJgGQgdgSgPgWQgQgWgMgtQgOgygLgTQgdg1hYgbQhXgWgqgRQhIgegYg5QgBgDACgDQACgEAEABICSASIAeAEQASACALgEQAPgGAEgNQADgMgJgOQgOgXgegIQghgJhTAGQhKAGgngSQgvgVgZg7QgRgogKhDQgRh5Aeh2QAfh4BHhgQAsg6AsgVQATgJAogQQAJgFARgLQARgLAJgFQAZgKAdAPQASAIAdAYQAjAdAzA/IAnAwQAUAcAKAYQANAdABAkQABAbgHAnQgbCbgnBiQgaBAghAxQgaAmgGAOQgOAhAPAVQA+hJAshaQBNimgDi0QAAgqgHgvIgEgmQgDgXACgRQAEgmAkgTIApgVQATgOAAgSIg3ABQgDAAgCgCQgCgDABgCQAVg1AjgvQADgEAEABQAagfAjgYQAjgXANgHQAegPAYAEQAbAFAMAdQAIASACAjQADBCgUBBQgUBAgnA2QgFAGgEgGIg8hXQgOAFgGAOQgHAOABASQABASAMAUQAGALASAWQAcAjANAdQANAfAJApQAFAYAGAzQAMBoAVA5IAhBTQAUAzAKAgQAbBUAJBZQADAeADA8QAFA1AMAkQASA3A0BKQBDBhAOAZQAnBJACBEQADBRgnBGQgRAhgWAAIgFAAgAmECUQAmAbBYAYQBZAXAlAbQAdAVAOAZQAMAUAOAvQANAxANAUQAQAYAfASQARAKAjARQAgAQASAQQAUATAJAdQAIAdAEAJQAJASARAKIAhAQQAVAKALAHQAfATAaAWQAYATAgAeIA2A0QAeAcAZAUIAhAXIASAMQALAFAIgEQAIgDAIgLIAKgUQAKgSAGgVQANgpABgnQABhFgmhKQgTglg+hZQgyhGgUg0QgNgjgGgwQgDgVgEg/QgHhegYhVQgKgigSgvIgghSQgbhFgMhWIgKhOQgHgsgKggQgOgngZggIgXgeQgNgSgGgPQgLgaAIgaQAIgeAagIQADgBADAEIA6BUQAlgzASg9QARg6gBg7QgBgngJgUQgOgfghAFQgWADgbAQQgNAHgfAWQgZASgWAZQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQggArgVAuIA1gBQAFAAAAAGQAFAjg4AbQgfAPgJAOQgLARABAgIAFAqIAFArQAEAugBAqQgCBZgWBXQgwCzh0CFQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBQgOgRABgYQABgXAQgcQAJgQAUgfQAfgzAZhCQAUg4AQhFQAUhbAFgsQAGhFgmg7QgZglg4g/Qg1g8grgVQgWgMgTAJIgYAOQgUAOgkAPQglAQgTANQgWARgWAbQgkAtgeA7Qg4BvgHB8QgEA9AIA8QAKBGAVArQAdA5A3AOQAZAGAigCQAUAAAogEQAigCAUACQAgADAUAMQAUAMALASQANAWgJAUQgKAWgdADQgOABgkgFIiGgRQANAZAZASg");
	this.shape_1459.setTransform(525.0753,359.8608,1.3775,1.3775);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#221F20").s().p("ADGDIIAEgnQAAgXgGgQQgEgOgQgQIgagZQgRgVgPgdQgIgRgQgkIgdhDIgNgfQgJgRgKgLQgogqhTARQgnAIgUAIQgiAMgRAVQgDAEgEgEQgDgDADgEQASgYAlgMQAngOAmgFQBLgKAoApQAKAKAIAQIANAdIAfBLQATArALAVQAUAjAXAVQAPANAGAJQAJANACAPQAGAlgKAhQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1460.setTransform(634.9637,291.0677,1.3775,1.3775);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#221F20").s().p("AhYAeQgDgDADgDQAegjAxgNQAtgLAxAKQAEACABAEIAAABQABADgCACQgEAEgGgBIgKgDIgXgCQgYgBgWAEQg0AKgfAfIgDACIgCgBg");
	this.shape_1461.setTransform(418.2411,310.5781,1.3775,1.3775);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#221F20").s().p("AhkAWQgCgEADgCQAsgcA1gJQAbgEAYACQAMAAAOACQARACAHAEQAEADgBAEQgCAFgEAAQgFAAgHgBIgNgDIgXgCQgbgBgWADQgxAHgsAXIgDABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1462.setTransform(420.4409,295.248,1.3775,1.3775);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#221F20").s().p("AgQA1QgHgWAFghQADgaAMgcIABgBQgCgEAEgCQACgDAEADQARAUgCAmQAAATgJAkQgFAQgJAAQgKAAgEgNgAgHADQgBAQABAPIACAMIACAGIABABIABgBQABgCABgLIAEgNQADgQABgMQABgWgIgWQgHAYgCAZg");
	this.shape_1463.setTransform(406.3372,305.5494,1.3775,1.3775);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#221F20").s().p("AApATQgwAAgrgcQgEgDACgFQADgEAEACQAoAYAuACQACgCADABQAHABAAAGQAAAHgHABIAAAAQgDAAgCgCg");
	this.shape_1464.setTransform(432.5332,277.1741,1.3775,1.3775);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#221F20").s().p("AANAOIgPgEQgOgFgPgMQAAgBAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAQADgCADACQAKAIAPAEIAPADIAIAAIAHACQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABQgCABgGAAIgJAAg");
	this.shape_1465.setTransform(438.0407,264.4264,1.3775,1.3775);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#221F20").s().p("AggAwQgGgCgCgGQgCgHAHgQQAMgaASgYQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIABgBIAPgHIAQgGQAHABADAGQACAFgBAHQgCAIgHAPQgGAKgIALQgIAKgKAIQgMALgIADIgIACIgEgBgAgYAQQgHAOAAAFQAAAFAGgCQAEgBAEgDQAQgLAMgQQANgRAFgSIABgIIAAgBQgBAAgFACQgMAGgLADIgCAAQgOAUgJAWg");
	this.shape_1466.setTransform(428.7831,268.5246,1.3775,1.3775);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#221F20").s().p("AADDFQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAKgTgBgcQgBgMgFgkQgHg1gEgpQgFg1gDgtIgDgxIgBgZQgBgOABgKQABgEAEAAQAEgBAAAEQADAQAAAiIAEA2QACAtAFA4QADAiAJBFQADAZgBAQQgCAWgKASQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_1467.setTransform(499.031,450.1041,1.3775,1.3775);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#221F20").s().p("AAQAgQhYgFhOgoIgKAAQgGAAAAgFQAAgGAGgBQAkgEA0gBIBYgBIBYgBQApABAUAWQADADgCAEQgRAXguAHQggAFggAAIgXgBgABQgTIhPABIhQADIg3ACQBEAdBJAFQApADAngFQAbgEALgDQASgGAKgKQgMgLgUgDQgHgBgUAAIgOAAg");
	this.shape_1468.setTransform(477.5164,477.3996,1.3775,1.3775);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#221F20").s().p("AAGFlQgMgWgCglIgBhQQgGmkAAiZQAAgEAEAAQAEAAAAAEIAFCgIADEWIADDQQABAoAKAVQADAFgFACIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_1469.setTransform(454.0775,425.8776,1.3775,1.3775);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#221F20").s().p("AghBLQgEgEADgEQATgXAjgLQAVgHAGgGQAIgJAAgOQAAgLgEgRQgEgQgGgHQgFgGgIAAIgOACQgJABgRAAQgcgBgYgJQgEgBACgEQABgEAEABQAeAKAmgFIAQgDQAJgBAGADQALAEAHAOQAOAegDAZQgEAdggALQgXAHgIAFQgJAGgRAPQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1470.setTransform(676.1567,295.4889,1.3775,1.3775);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#221F20").s().p("AgWAsQgKgXAPgZQAFgKAMgMQAKgMAJgGQADgCADAEQADADgDAEIgSARQgIAHgGAKQgPAWAFAVQABABAAAAQAAABgBAAQAAABAAAAQgBAAgBABIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_1471.setTransform(664.9938,270.6983,1.3775,1.3775);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#221F20").s().p("ABBAzQgLgHgTgWQgYgZgPgkIhNAjQgNAFgHgBQgHgCACgHQACgGAGACQADABAFgCIAIgFIBagpQANgFALAIQATAPAYAjQAVAeALAeQACAFgHADQgFACgFAAQgNAAgOgMgABbAyQgNgcgOgVQgJgOgLgLIgLgNQgHgIgGgCQgEgBgGADIgGADQANAcAUAVQAKAMANAMQALAKAGAEQAIAFAGAAIAAAAg");
	this.shape_1472.setTransform(655.0495,256.3989,1.3775,1.3775);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#221F20").s().p("ADbEuQgqgTg3gxIgugpQgcgYgVgOQgbgSgagIQgOgFgZgDIgngHQgggHgjgWQgTgMgoggQhNg9gngqQgngpg4hVQg+hcgfgkQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAfAkBHBkQA+BZAtArQAlAjBPA9QAlAdAYAMQAbAOAvAHQBCAKAxAjQAXAQA/A6QA4AyApARQBHAeA3gRQANgEANgKQAIgGAQgNIAsgmQAfgaALgLQAXgWANgVQADgEAEADQAEACgDAEQgOAXgbAaIgxArQggAdgRANQgeAWgcAEQgOADgOAAQgrAAgvgUg");
	this.shape_1473.setTransform(569.8237,466.616,1.3775,1.3775);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#221F20").s().p("AijNLQgGgDAEgFQAwhHAmhyQAihfAchjQAeh3ARg7QAdhnAjhGIAphXQAWgxACgrQAEhQgqhnIgkhTQgVgxgHglQgFgZgIg4QgHg1gGgcQgLgvgSggQgPgdgiggQgmgigSgRQgggegPgdQgBgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQASAeAqAkQA3AwAMAMQAcAgARAtQAOAkAHAyQAEAcAHA4QAHAyALAhQAJAdAaA7QAaA6AKAfQAfBhgRBQQgIAkgYAyIgoBUQgeBHgfBwIgxC5QgdBhgcBOQgkBggqA/QgCADgDAAIgDgBg");
	this.shape_1474.setTransform(664.4837,373.7337,1.3775,1.3775);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#221F20").s().p("ABKCoQgHgMgdgdIgnglQgogjgUgmQgVgqgFgtQgCgWACgXIAEgWIAEgOQADgKgCgEQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAFAGgBAKIgDARQgEAbABAYQADAxAXAsQAUAmAtAoIAmAkQAZAZAIANQAEAGgGAEIgFABQgDAAgDgDg");
	this.shape_1475.setTransform(632.4822,235.8452,1.3775,1.3775);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#221F20").s().p("AjsCPQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAgBABAAQAWg2AmgqQBGhKByglQA3gRBBgIIA5gGQAUgCALgJQAPgKgBgRQAAgFAFAAQAFgBABAEQADAMgGAMQgGALgLAHQgLAHgRACIgdADQiFANhgAxQh1A6gvBqQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCAAg");
	this.shape_1476.setTransform(612.4211,222.8857,1.3775,1.3775);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#221F20").s().p("AgDBiQgCgJAAgPIAAgYIgBgxQgBgrACg3QAAgBAAgBQAAAAABgBQAAAAAAAAQABgBABAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABQADArACA3IABAxIABAYQABAOgCAKQgBADgEABQgDgBgBgDg");
	this.shape_1477.setTransform(644.1524,192.3427,1.3775,1.3775);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#221F20").s().p("AgQAYQhSgKg9gMQgngHgagHQgpgMgPgOQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAIAgAKQAVAHALADIBBANQA/AKBPAJQCEAPCWADQAHAAAAAIQAAAHgHAAQilgEh+gPg");
	this.shape_1478.setTransform(605.3995,174.4606,1.3775,1.3775);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#221F20").s().p("AgKB2Ig9gmIgZgPQgOgJgJgIQgPgPABgXQAAgSALgWQALgZATgYQAQgWAOgJQAUgLAbAEQARADAdANQAzAVAyAiQAEAEgDAFQgDAFgEgDQg3gmgzgVQgogSgXAGQgOADgMAMQgIAIgMAQQgWAggIAVQgMAiATAVQAIAIAQAKIAaAPIA4AlQADACgCAEQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIgCgBg");
	this.shape_1479.setTransform(493.5335,152.5799,1.3775,1.3775);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#221F20").s().p("AhTAVQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAtgiAwgFQAXgCAUAJQAWAKAJASQACAEgEADQgEACgCgEQgWglg0AIQgpAGgnAbIgCABIgDgCg");
	this.shape_1480.setTransform(568.6079,170.3847,1.3775,1.3775);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#221F20").s().p("AhVC/QAKiNAZhLQAoh3BagyQADgCACADQACADgDACQhXAzgmB1QgYBGgMCNQgBAEgDAAQgEAAAAgEg");
	this.shape_1481.setTransform(547.5206,198.6243,1.3775,1.3775);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#221F20").s().p("AFLD1QgDgigOgdQgFgKgJgOIgRgXQghgvAVgpQAHgNAYgiQARgegOgUQgIgNgSABQgQABgNAKQgNALgTAkQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIg9goIgRgMQgJgJgBgJQgBgLAIgNIANgWQAHgQgDgPQgEgRgNgJQgMgJgNABQgOAAgKAKQgGAGgHALIgLASQgYAjgtgDIgzgIQgfgEgVAEQgeAIgPADQgaAEgTgKQgSgJgHgVQgEgOAAgbQAAgegJgPQgJgNgPAAQgNAAgMALQgRASABAiIAEA5QgDAtgfANQAAAAAAAAQgBABAAgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAZgOACglIgFg+QgCgZALgUQANgYAXgDQAUgDANARQALANADAVQACAQABAkQAGAcAaAGQAUAFAjgJQAmgKAQABIAyAJQAeAFASgGQASgGAPgXQATgdAIgHQAQgNAUADQAUADANAPQAcAiggAxQgNATALALIALAJIANAHIAwAgQANgZALgNQATgUAZAAQAUgBAMAPQAMAOgCAVQgCATgPAVIgZAmQgNAYAMAbQAFALAYAiQAeAqADA1QAAAFgFAAQgFAAAAgFg");
	this.shape_1482.setTransform(576.1484,144.2441,1.3775,1.3775);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#221F20").s().p("AiYCmQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAIg0Aig1QAbgpAvgtQBQhTBrg2QADgBACADQACADgDACQhnA0hQBQQgvAugbAoQgkA1gJAzQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_1483.setTransform(509.2347,157.8102,1.3775,1.3775);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#221F20").s().p("AAECtQgLgmgCgxQgBgkADg0QAHg8AAgdQgCg2ACgbQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQgCAbAEA2QABARgDAZIgEAqQgGBgAOBTQAAABAAAAQAAABAAAAQAAABgBAAQgBABAAAAIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape_1484.setTransform(487.8813,193.794,1.3775,1.3775);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#221F20").s().p("ADuOYQgqhAhihWQhvhkgkgrQhnh8hBjSQgmh7AKhVQAFgqATg4QAYhBALggQA4iqgDjwQAAhagHh3QgCgigKhEQgHg2AKgiQABgDADABQAEABgBADQgGAXADAgQABALAIArQAEAYADAfIADA4QAGB9gCBoQgEDgg/CwQgZBFgHAdQgPA4ABAvQABAvANA4QAKAoAVA7QBHDOB2B4ICDB4QBPBIAnA9QACAFgEADIgDABQgDAAgCgDg");
	this.shape_1485.setTransform(463.3757,297.0125,1.3775,1.3775);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#221F20").s().p("AAtAZIgqgJQgUgDg/gCQgwgCgdgGIgEABQgGABgBgFQgCgFAGgBQBGgUBlgCQAqgBAvAEIAlADQAWADAMAKQACABABADQAAAEgCABQgLAIgZAJQgaAJgTADIgJAAQgOAAgTgEgAAAgPQgoABhKALIAeABQAwACAeACQATABAPAEIAVAFQANADAIABQATACAcgKQAXgHAMgFQgGgDgHgBIgWgCIgmgEQgggBgfAAIgQAAg");
	this.shape_1486.setTransform(465.7127,170.6873,1.3775,1.3775);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f().s("#0D110E").ss(0.9).p("Aj2n6QgnBOBWCPQAHALADAVQAEAZADAJQADAHAJASQAIAPADAKQAHAVgEAmQgEAmAGAUQAGAVARAqQAOAmAAAbQgBBBABAWQABAZABArQADAkAHAeQAHAcAUAtQAWAzAHAUQALAiAMAMQAPAPAgACQArACAkgGQAvgJAagVQAKgJAKgPQALgTAFgJQAPgaACg2QABg1APgbQACgDAKgFQAHgDgDgKQgBgIgTgOQgUgOgEgKQgGgSACgWQABgVAIgRQAQgTAGgKQAMgRgKgQQgGgLgWgOQgOgKgBgcQAAgDAAhQQAAgygHghQgIgogUg4QghhbgBgCQgUg6gRga");
	this.shape_1487.setTransform(622.2265,396.5929,1.2866,1.2797);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f().s("#0D110E").ss(0.9).p("ABXDaQABgDACgBQAGgGAKgEQAOgHADgCQArgZALg0QAJgrgXgnQgMgVgqgtQgQgQgbg2QgZgxgagUQgGgFgOgFQgOgGgHgFQgWgTgIgEQgKgEgUAPQgqAigOA0QgMAsAGA+QAEAmgDAYQgDAcgQAgIgNAW");
	this.shape_1488.setTransform(620.4239,299.0408,1.2866,1.2797);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#0D110E").s().p("AgFACQgGgKAAgLQACAJAHAKQAGAIAJAFIgGAHQgGgFgGgNg");
	this.shape_1489.setTransform(492.5989,326.1447,1.2847,1.2784);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f().s("#0D110E").ss(0.9).p("AhyAHQATAMAmgDQAVgBAkgGQBQgJAjgR");
	this.shape_1490.setTransform(508.4401,327.3076,1.2866,1.2797);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f().s("#0D110E").ss(0.9).p("AHNnrQgBARAJAdQAFAPAIAYQAKAfADAbQADAagCAhQgBASgFAlQgFAkgBATQgBArAcAiQACACALAGQAIAFABAGQABAGgKASQgOAVgBADQgFAOgBAMQgCAJABASQAAAdACAPQADAYAJASQAIAPAPAVQAMASgBAWQgCAeACALQACAPAMAYQArBSgrBOQgsBQhfgKQhTgIichUQiWhRhYgFQACgggggPQgcgNgjAFQgEAAglAJQgWAGgUgEQhKgPg4gpQgUgPgYgdQgfglgKgKQgggegPgQQgagagTgWQgkgpgJgjIgFgW");
	this.shape_1491.setTransform(519.6755,403.7073,1.2866,1.2797);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f().s("#0D110E").ss(0.9).p("AiwHsQgPAHgGgDQgHgFgDgVQgEgcABgwQABg6gBgSQgCgogLg+QgMhKgDgXQgMhxArhRQAuhbAxgmQAhgaASgVQATgXAOgjQAIgUATgjQATglAHgRQAIghAGgPQAKgcAYAAQAMgGARANQAKAIARAQQATAQAIAYQAFARACAhQADAxAZBLQAfBaAGAgQADAQAGAgQAFAcAAAU");
	this.shape_1492.setTransform(457.1158,321.9323,1.2866,1.2797);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#0D110E").s().p("AgDgTIAIAAQgCAWgHARQAEgSgDgVg");
	this.shape_1493.setTransform(487.974,320.2319,1.2847,1.2784);

	this.instance_167 = new lib.Path_29();
	this.instance_167.setTransform(443.15,363.9,1.2866,1.2797,0,0,0,12.3,17);
	this.instance_167.compositeOperation = "multiply";

	this.instance_168 = new lib.Path_1_1();
	this.instance_168.setTransform(622.25,300.2,1.2866,1.2797,0,0,0,16.4,22.5);
	this.instance_168.compositeOperation = "multiply";

	this.instance_169 = new lib.Path_2_1();
	this.instance_169.setTransform(629.55,439.9,1.2866,1.2797,0,0,0,17.6,16.9);
	this.instance_169.compositeOperation = "multiply";

	this.instance_170 = new lib.Path_3_1();
	this.instance_170.setTransform(533.9,443.7,1.2866,1.2797,0,0,0,47.9,18.3);
	this.instance_170.compositeOperation = "multiply";

	this.instance_171 = new lib.Path_4_1();
	this.instance_171.setTransform(463.05,287.85,1.2866,1.2797,0,0,0,12.5,6.2);
	this.instance_171.compositeOperation = "multiply";

	this.instance_172 = new lib.Path_5_1();
	this.instance_172.setTransform(463.15,280,1.2866,1.2797,0,0,0,17.9,17.4);
	this.instance_172.compositeOperation = "multiply";

	this.instance_173 = new lib.Path_6_1();
	this.instance_173.setTransform(567.65,290.15,1.2866,1.2797,0,0,0,19.1,21.9);
	this.instance_173.compositeOperation = "multiply";

	this.instance_174 = new lib.Path_7_1();
	this.instance_174.setTransform(563.15,300.55,1.2866,1.2797,0,0,0,22.6,29.7);
	this.instance_174.compositeOperation = "multiply";

	this.instance_175 = new lib.Path_8_1();
	this.instance_175.setTransform(510.55,362.2,1.2866,1.2797,0,0,0,65.7,81.5);
	this.instance_175.compositeOperation = "multiply";

	this.instance_176 = new lib.Path_9_1();
	this.instance_176.setTransform(622.7,366.1,1.2866,1.2797,0,0,0,25.8,74.2);
	this.instance_176.compositeOperation = "multiply";

	this.instance_177 = new lib.Path_10_1();
	this.instance_177.setTransform(628.6,277.3,1.2866,1.2797,0,0,0,10.7,7.6);
	this.instance_177.compositeOperation = "multiply";

	this.instance_178 = new lib.Path_11_1();
	this.instance_178.setTransform(646.5,298.35,1.2866,1.2797,0,0,0,8.1,8);
	this.instance_178.compositeOperation = "multiply";

	this.instance_179 = new lib.Path_12_1();
	this.instance_179.setTransform(419.7,310.25,1.2866,1.2797,0,0,0,7.7,5.3);
	this.instance_179.compositeOperation = "multiply";

	this.instance_180 = new lib.Path_13_1();
	this.instance_180.setTransform(416.75,345.25,1.2866,1.2797,0,0,0,4.5,7.9);
	this.instance_180.compositeOperation = "multiply";

	this.instance_181 = new lib.Path_14_1();
	this.instance_181.setTransform(502.25,156.15,1.2866,1.2797,0,0,0,14.3,13.2);
	this.instance_181.compositeOperation = "multiply";

	this.instance_182 = new lib.Path_15_1();
	this.instance_182.setTransform(590.5,152.8,1.2866,1.2797,0,0,0,7.5,11.7);
	this.instance_182.compositeOperation = "multiply";

	this.instance_183 = new lib.Path_16_1();
	this.instance_183.setTransform(567.3,144.25,1.2866,1.2797,0,0,0,4.5,13);
	this.instance_183.compositeOperation = "multiply";

	this.instance_184 = new lib.Path_17_1();
	this.instance_184.setTransform(566.15,255.7,1.2866,1.2797,0,0,0,36.9,44.5);
	this.instance_184.compositeOperation = "multiply";

	this.instance_185 = new lib.Path_18();
	this.instance_185.setTransform(562.8,127.1,1.2866,1.2797,0,0,0,5.9,2.3);
	this.instance_185.compositeOperation = "multiply";

	this.instance_186 = new lib.Path_19();
	this.instance_186.setTransform(592.75,135.1,1.2866,1.2797,0,0,0,5,3.5);
	this.instance_186.compositeOperation = "multiply";

	this.instance_187 = new lib.Path_20();
	this.instance_187.setTransform(478.9,238.8,1.2866,1.2797,0,0,0,32.8,45.5);
	this.instance_187.compositeOperation = "multiply";

	this.instance_188 = new lib.Path_21();
	this.instance_188.setTransform(654.1,246.5,1.2866,1.2797,0,0,0,12.3,3.2);
	this.instance_188.compositeOperation = "multiply";

	this.instance_189 = new lib.Path_22();
	this.instance_189.setTransform(636.05,269.75,1.2866,1.2797,0,0,0,20.6,7);
	this.instance_189.compositeOperation = "multiply";

	this.instance_190 = new lib.Path_23();
	this.instance_190.setTransform(582.65,236.05,1.2866,1.2797,0,0,0,35.6,22.1);
	this.instance_190.compositeOperation = "multiply";

	this.instance_191 = new lib.Path_24();
	this.instance_191.setTransform(665,271.2,1.2866,1.2797,0,0,0,2.9,5.8);
	this.instance_191.compositeOperation = "multiply";

	this.instance_192 = new lib.Path_25();
	this.instance_192.setTransform(669.05,240.9,1.2866,1.2797,0,0,0,3.1,6.6);
	this.instance_192.compositeOperation = "multiply";

	this.instance_193 = new lib.Path_26();
	this.instance_193.setTransform(426.9,231.4,1.2866,1.2797,0,0,0,3,7.2);
	this.instance_193.compositeOperation = "multiply";

	this.instance_194 = new lib.Path_27();
	this.instance_194.setTransform(514.75,172.4,1.2866,1.2797,0,0,0,6,7);
	this.instance_194.compositeOperation = "multiply";

	this.instance_195 = new lib.Path_28();
	this.instance_195.setTransform(472.15,469.9,1.2866,1.2797,0,0,0,16.9,18.4);
	this.instance_195.compositeOperation = "multiply";

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#DE908E").s().p("AKaOlQgSAAgdgHQgkgJgMgBIgWgBQgMAAgKgDQgegHgPgFIgugQIgOgIQgJgFgGgCQgIgCgOABIgVABQgKgBgQgGIgZgJQgOgDgGgDIgdgQQgygagVgHIgpgQQgagKgQgEQg9gRgZgKQgOgGhOgnQg4gbgogLIhZgWQgQgEgXgJIgngOIgigLQgUgGgMgGQgPgHgggTQgegRgRgIQhEgdghgSQg7gggogoQgWgWgbgrQgggygPgSQgHgJgKgVQgKgVgIgJQgHgIgNgHIgYgJQgdgFgHgGQgFgFABgMIACgOQgdgFgHg2QgFghAEguQAFg1gFgZQgLgzgEgaQgKhEgFhrIgDgpQgBgYABgRQAAgJgCghQgCgaADgPQAIgeAegpQAkgtAOgVIAOgSQAJgIAKACQAEABAEAEQADAFAGABQAKACAIgKQAMgMAhgeQAdgZANgSQAXgcATgvIAfhRQAPgjAIgJQASgVAbANQANAFARATQAQARAHAOQAGALADATIADAgQAGAjAKAsIAeBwQATBCAFAvIAEAeQACARgBAMIgDAPQgCALABAEQADAHAGADQAHACAHgFIgGAAQAOgDAFABQAKAYACADQAKAIAWACQAQABAVgDIAkgHIAogGQAZgDAPgDQAVgFARgIIAJgGQAFgDAEgBQAIgDAFgGIACgDIALgSQAGgOADgJIACgKIAGgKQAHgLAEgKIAGgLQADgIgCgEIABAIIAAAIQAAAMABAGQAJAnAOAdQAEAJAIANIAOAWQALAQAGAFIAOAHQAGADAFAJQAMARAJAJQAWAXARgPQAMgMAUgHIASgIQAPgHACAAQASgDARgIIANgHIAIgBIAHgBQAGgCARgLIARgKQAMgFAHAFQAOAIAkgRQAUgJAdgRQAcgNAVgYQASgSAKgdIAQg2QAFgUgBghQgDglAAgRQAAg0AbgwQAIgNAXgVQAagXAIADQAIgDAMAMIASARQAGAFAUAMQAcAQASAiIAkA/QAWAlAWASIARAOQAKAIAFAJQADAIACAUQACASAGAJQAJAMALABQADAAAHgGIABgBQgCgEgBAAIAKAAIgHAEQAGAOAOAyQACAWAHAtQABAJAFAOIAIAWQACAKAAARIgBAbIgBATQgBALACAHQADAKAKAPIARAXQADAEAFAEIAHAIQAEAFAJAaQAHAPALATIATAhQAJAPAEAWIAGAmQAPBCADAWQAJAzAAAnQAFACgEAWIgFAeIACAgIACAfQAABCAEBRQAFB9gQBSQgVBwhCBKQgQARgiAhIgVAWQgOAOgJAGIgHAEQgXAKgfAGQgdAGgZAAIgEAAg");
	this.shape_1494.setTransform(546.1497,377.5493,1.2866,1.2797);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#D65052").s().p("AmHMdQgIgCgJgLQgJgMgGgCQgEgCgRADQgLADgBgPQAAgHAEgJIAGgPQAEgOgDgWQgHgVgBgLIgDgmQgDgXgFgPQgWg0gJgbQgJgegBgPQAAgKADgYQADgVgCgMQgBgOACgVIADgiQAAgGgFghIgGg4QgBgFgEgKQgDgKAAgGIABgoQgBg0ADglIAFgXQADgOAAgKQgBgdAMgkQAFgTATgsQAUgxA1glIAxgmQAfgZATgNIAcgVQASgOALgHQAegRAHgHQARgQgCgVQgFg4gngfIgbgSIgUgPQgMgJgLAAQgKAAgNAHQgNAJgHADIgRAHQgKAEgHAAQAIgTgEgSQgBgJgMgbQgDgJgIgIIgQgOQgXgRgLgKQgUgQgEgTQgEgRADgSQAEgVALgLQAIgJASgLIAdgSQAogfAhgJQAVgGAUAKQAPAGATATIATAPQAMAJAFAIQAIAMAPASQAQAUAGAJQANATASAhIAdA0IALAWQAHAOAHAFQALAGAOgGQAIgDAQgKIARgHQAJgEAGgGQAKgJANgWQADgFAMgLQAJgKAEgGQADgGADgKIAEgRQAMgoAGg4QACgSAHgMQAHgMAPgKQANgIALgBQAJgBASADIAeAGQARAFAEAOQAEALgFAZIgIAlQgMBcAIA+IABgIIACACQAGgEAEgKIAHgRQAVgmADgIQAGgQANgUIAXgiQALgSAQgOQATgQASgDQARgDAVAKQAWAKAIAOQADAGADAOQADANAAAIQgBAIgGAMIgKATQgNAegJAOQgHALgCAKIgDAXIgFA4IgEAXQgBANAFAJQAEAHAKAJIAQAOQAZAaANASQASAaAJAZIAMAeIAKAeIAaBjQADAMACAXIAEAjIAFAgQACAUgGALQgIgBgCgBIgCgBIgCgCQgFgJgMgEQgPgDgHgDQgIgDgKgGIgSgLIgagNIgfgPQgTgJgOgDIhQgWIgogKQgWgFgUADQg0AGgkALQguAOghAaQghAagTAjQgWAkAAAnQAAA/AHAuQAHA4ATAyIAMAbQAGAPABANQACAXgMAeIgVAxQggBUgMBBQgDAEABAFQACAHgBAEIgDAdQgCAQgEAMQgDAKgLAaIgNAcIAAADIgBADQgCAJgDAHIgEAGIgEAIQgFANgMAHQgKAGgSAEIg0APQgfAIgWAAIgyAFIgWACQgPAAgLgEg");
	this.shape_1495.setTransform(545.6235,227.0094,1.2866,1.2797);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#5C8EC7").s().p("AmqH2QgLgLgIgMQgGgQgFgEIgGgDIgGgDQgFgDgOgRQgQgSgOgVQgSgagGgoQgDgRgBg1QgBgPAGgWQAGgYACgMQAGgiAFgNQAHgQAIgfQAIgiAGgOIAUgkQAMgUABgTIgEgVQgCgVgMgeQgQgmgDgMQgGgVgCgcIgEgxQgDglAEgjIAGgwQAFgZASgPQARgOAegfQAdgbAZgLQAWgJAhgCQATgCAmAAQA4gBBEAUQASAGAkAIQAKADASAMQARALAKADQASAFAWAMIAnAUQAMAGAfAXQAbATASAHQAKADARACIAbAEIAjAJQAWAFAPACQATACAggBIAzgDQAegBA3AGQAMAAAegEQAbgCAKAMQARASACAbQABASgHAgIgEAUQgDAKgJAFQgHAEgRAAIgZAAQg/ALg9gWQgegLgOgBQgbgCgJAWQgIAVAnASQARAHAcAHIAuAMIA0AQQAeALASAPQAYATgGAmQgFAjgbASQgQAMgagCQgSAAgagIQgRgEgNgKIgbgSQgNgJgXgIIgngMIgygQQgcgHgYgCQgbgFgPAAQgaAAgFAUQgFAUgOAMQgSANgMALQgqArgEArQgBATADAnQADAmgDAUIgBAiQAAAUgGAMQgSAqgOATQgLAPgMAKIgNAJQgIAFgFAFQgFAGgUAJIgQAJQgKAFgIABIgBAAQgPAKgWgDIAPgDIgYABIAJACIgnAJIAQgLIgBAAQgGAAgHAEIgMAHIgJAEIATgEIgVANIgYAPQgPAKgLACQgFACgIgBIgMABIgUAGQgMAAgFACQgEACgJAJQgIAGgHACIgNAGIgFAAQgIAAgIgHg");
	this.shape_1496.setTransform(602.4659,273.1006,1.2866,1.2797);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f().s("#0D110E").ss(0.9).p("AKYkYQABgBAAAAQAGgGgCAAQhRg8g0AHQAEgBAfgGQAVgEAQACQB0AQBWAnQBKAiAMAEQA5ARAWgjQAIgMAFgaQAFgbgEgNQgEgQgVgMQgMgGgZgIQhagYgEgCQg7gUgVgeQgCgCACgHQADgJAAgBQAQgUAuAJQAZAFAsAMQBOAIAmAAQASgPgBg8QgBg9gVgIQgQgFgYAAQgbACgMAAQhJADgkADQgYACgYgEQgPgDgfgJQgQgFgqgHQgmgHgVgIQgngOgFgaQAAglgGgcQgIgvgFgYQgIgqgJgcQgbhWgigxQgLgRgSgTQgWgZgJgBQgEgLACgRQAEgbAAgCQADg3AGgTQAGgRARgiQARghAFgTQgHgbgIgLQgKgOgXgHQgVgGgMAAQgVgBgFAPQABACACABQACAAgCABQgigBgjBMQgtBjgEAFQgKgOADgoQAGgsABgPQAAgSAGgcQAGgjACgLQABgBAAgBQgBgCAAgCQgIgZgqgLQgqgLgWAPQgaARgFAvQgHBIgBADQgJAdgBACQgHASgHAKQgdAlglAaQg3AngTgoQgXgxgOgcQgYgxgUgdQgLgQgVgRQgZgSgMgKQgSgQgKgIQgSgMgQACQgUACgXAOQgmAXgDABQggAPgOANQgTASgFAeQgIAqAnAgQAKAIAXARQASAPAIAPQAIAQADAYQACAZACADAuzh6QgUgBgdAfQgiAlAEAWQAFAdAlATQAuAZAFAHQAAAUACAkQACAfgEAXQgLAOgcAWQgcAVgLAOQgSAYAKAcQAIAUAaAaQAKAKAVAGQAYAHAIAFQADASAOA2QAKArABAeQABAegHBEQAAA7AjAfQgLAVAfAJQARAFAdAIQAOAKANAWQAHAMANAZQA0BSAeAkQAqAyBNArQArAYBaAvQAlAYBcAdQAcAJBBAQQA8AQAgAKQAcAKAwAYQA0AbAWAJQAfAMBDAVQBCAVAhANQAPAHAvAZQAmAUAaAIQATAGApAIQAoAIAUAGQA1ARAyAMQB+AhBWgiQAvgSAsguQAtgwAgg+QAig/ALg/QANhKgEhiQgBgtgLiAQgCgZACgpQACgvAAgTQgBgfgHgoQgEgSgMgzQgOg7gbhBQgJgWggguQgcgogIgcQgEgKACgWQACgcAAgGQgBgMgGgUQgHgZgCgGQgCgLgCgUQgBgXgCgJQgBgHgMgrQgIgdABgUQAiAdAegxQAMgUABgVQACgWgNgLQgMgLghgFQgugIgDgBQgDgBgfgQQgPgIgTAGQgBAAAAgDQAAgFAAgBQATgcApgPQADgQgQgeQgPgdgPgJQgOgIgfAMQgdAOgNAGQgCABgCABAndnTQAAg6ABgNQABgoAEgfQAGgwAGgbQAJgpAPgeQAQghAcgcQAUgVAmgcQAMgIAlgfQAfgZAUgNQAKgHAhgSQAdgSAGgOQANgegfgxQgZgmgggYQgjgbgyAgQgJAHgIAGQgqAigUALQgvAZggggQgSgTgbg7QgghbgYgtQgrhRhCAAQgdAAgsAKQhIASgBAAQg/ANgJAVQgHAPAPAsQAHAXANAjQAEAMAQA7QANAsAHAcQACALAHATQAHAUADAJQAFAYAVBHQARA7AHAjQAHAnABA+QAABMADAZQAHBLAKCXQACAVAFAqQADAlgEAbQgEAdgTAeQgLARgbAiQgEAFgZAeQgUAWgGAOQgPAAgjgaQgbgUgSgBIAAAAQgDgCgDAAAuth4QgEAAgCgC");
	this.shape_1497.setTransform(540.6581,310.5267,1.2866,1.2797);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1202,p:{scaleX:1.4935,scaleY:1.4935,x:629.5493,y:268.4522}},{t:this.shape_1201,p:{scaleX:1.4935,scaleY:1.4935,x:481.526,y:315.7218}},{t:this.shape_1200,p:{scaleX:1.4935,scaleY:1.4935,x:425.6432,y:282.6864}},{t:this.shape_1199,p:{scaleX:1.4935,scaleY:1.4935,x:562.0733,y:184.6844}},{t:this.shape_1198,p:{scaleX:1.4935,scaleY:1.4935,x:647.5055,y:244.6394}},{t:this.shape_1197},{t:this.shape_1196,p:{scaleX:1.4935,scaleY:1.4935,x:572.3415,y:398.9841}},{t:this.shape_1195,p:{scaleX:1.4935,scaleY:1.4935,x:472.3687,y:215.7602}},{t:this.shape_1194,p:{scaleX:1.4935,scaleY:1.4935,x:604.7298,y:235.3121}},{t:this.shape_1193,p:{scaleX:1.4935,scaleY:1.4935,x:440.4858,y:202.2363}},{t:this.shape_1192,p:{scaleX:1.4935,scaleY:1.4935,x:473.5604,y:456.8272}},{t:this.shape_1191,p:{scaleX:1.4935,scaleY:1.4935,x:445.5354,y:401.8895}},{t:this.shape_1190,p:{scaleX:1.4935,scaleY:1.4935,x:496.0502,y:349.7503}},{t:this.shape_1189,p:{scaleX:1.4935,scaleY:1.4935,x:636.8782,y:373.1258}},{t:this.instance_43},{t:this.instance_42},{t:this.shape_1188,p:{scaleX:1.4935,scaleY:1.4935,x:538.3794,y:327.037}},{t:this.shape_1187,p:{scaleX:1.4935,scaleY:1.4935,x:491.34,y:344.5935}},{t:this.shape_1186,p:{scaleX:1.4935,scaleY:1.4935,x:540.5276,y:409.0465}},{t:this.shape_1185,p:{scaleX:1.4935,scaleY:1.4935,x:514.1176,y:370.0881}},{t:this.shape_1184,p:{scaleX:1.4935,scaleY:1.4935,x:527.5548,y:384.2311}},{t:this.shape_1183,p:{scaleX:1.4935,scaleY:1.4935,x:498.7394,y:378.7916}},{t:this.shape_1182,p:{scaleX:1.4935,scaleY:1.4935,x:498.7394,y:378.7916}},{t:this.shape_1181,p:{scaleX:1.4935,scaleY:1.4935,x:621.9167,y:400.1832}},{t:this.shape_1180,p:{scaleX:1.4935,scaleY:1.4935,x:664.3243,y:421.2949}},{t:this.shape_1179,p:{scaleX:1.4935,scaleY:1.4935,x:616.2086,y:345.8568}},{t:this.shape_1178,p:{scaleX:1.4935,scaleY:1.4935,x:639.4022,y:314.7867}},{t:this.shape_1177,p:{scaleX:1.4935,scaleY:1.4935,x:627.7664,y:386.1613}},{t:this.shape_1176,p:{scaleX:1.4935,scaleY:1.4935,x:655.8186,y:413.758}},{t:this.shape_1175,p:{scaleX:1.4935,scaleY:1.4935,x:591.0517,y:431.469}},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.shape_1174,p:{scaleX:1.4935,scaleY:1.4935,x:565.361,y:317.0915}},{t:this.shape_1173,p:{scaleX:1.4935,scaleY:1.4935,x:439.5274,y:202.8825}},{t:this.shape_1172,p:{scaleX:1.4913,scaleY:1.4913,x:479.6535,y:157.4584}},{t:this.shape_1171,p:{scaleX:1.4913,scaleY:1.4913,x:549.744,y:266.6716}},{t:this.shape_1170,p:{scaleX:1.4913,scaleY:1.4913,x:574.7081,y:221.6994}},{t:this.shape_1169,p:{scaleX:1.4913,scaleY:1.4913,x:663.4919,y:194.6357}},{t:this.shape_1168,p:{scaleX:1.4913,scaleY:1.4913,x:589.8383,y:124.9925}},{t:this.shape_1167,p:{scaleX:1.4935,scaleY:1.4935,x:647.9383,y:244.8586}},{t:this.shape_1166,p:{scaleX:1.4935,scaleY:1.4935,x:664.7403,y:272.0942}},{t:this.shape_1165,p:{scaleX:1.4913,scaleY:1.4913,x:471.1159,y:261.9486}},{t:this.shape_1164,p:{scaleX:1.4935,scaleY:1.4935,x:425.0985,y:282.945}},{t:this.shape_1163,p:{scaleX:1.4913,scaleY:1.4913,x:489.496,y:327.2857}},{t:this.shape_1162,p:{scaleX:1.4913,scaleY:1.4913,x:625.7509,y:268.5466}},{t:this.shape_1161,p:{scaleX:1.4913,scaleY:1.4913,x:637.825,y:278.0545}},{t:this.shape_1160,p:{scaleX:1.4913,scaleY:1.4913,x:461.077,y:316.5857}},{t:this.shape_1159,p:{scaleX:1.4913,scaleY:1.4913,x:501.7199,y:306.1413}},{t:this.shape_1158,p:{scaleX:1.4913,scaleY:1.4913,x:505.2592,y:273.504}},{t:this.shape_1157,p:{scaleX:1.4913,scaleY:1.4913,x:438.0839,y:306.2212}},{t:this.shape_1156,p:{scaleX:1.4913,scaleY:1.4913,x:458.3552,y:410.3504}},{t:this.shape_1155,p:{scaleX:1.4913,scaleY:1.4913,x:508.3856,y:388.5589}},{t:this.shape_1154,p:{scaleX:1.4913,scaleY:1.4913,x:538.9567,y:328.5533}},{t:this.shape_1153,p:{scaleX:1.4935,scaleY:1.4935,x:490.9439,y:346.5423}},{t:this.shape_1152,p:{scaleX:1.4935,scaleY:1.4935,x:493.2622,y:341.6872}},{t:this.shape_1151,p:{scaleX:1.4935,scaleY:1.4935,x:514.5308,y:369.7736}},{t:this.shape_1150,p:{scaleX:1.4913,scaleY:1.4913,x:528.1949,y:383.5072}},{t:this.shape_1149,p:{scaleX:1.4913,scaleY:1.4913,x:540.5912,y:408.4863}},{t:this.shape_1148,p:{scaleX:1.4913,scaleY:1.4913,x:611.0359,y:266.6126}},{t:this.shape_1147,p:{scaleX:1.4913,scaleY:1.4913,x:588.8367,y:329.3688}},{t:this.shape_1146,p:{scaleX:1.4913,scaleY:1.4913,x:597.5957,y:355.2473}},{t:this.shape_1145,p:{scaleX:1.4913,scaleY:1.4913,x:580.4733,y:367.2522}},{t:this.shape_1144,p:{scaleX:1.4913,scaleY:1.4913,x:604.0393,y:414.9734}},{t:this.shape_1143,p:{scaleX:1.4913,scaleY:1.4913,x:622.0847,y:434.8779}},{t:this.shape_1142,p:{scaleX:1.4913,scaleY:1.4913,x:620.692,y:478.2039}},{t:this.shape_1141,p:{scaleX:1.4913,scaleY:1.4913,x:600.4291,y:480.3663}},{t:this.shape_1140,p:{scaleX:1.4913,scaleY:1.4913,x:645.6338,y:401.3281}},{t:this.shape_1139,p:{scaleX:1.4913,scaleY:1.4913,x:646.7659,y:363.737}},{t:this.shape_1138,p:{scaleX:1.4935,scaleY:1.4935,x:651.2565,y:310.7129}},{t:this.shape_1137,p:{scaleX:1.4935,scaleY:1.4935,x:641.3821,y:317.7869}},{t:this.shape_1136,p:{scaleX:1.4935,scaleY:1.4935,x:629.0755,y:309.3418}},{t:this.shape_1135,p:{scaleX:1.4935,scaleY:1.4935,x:615.3693,y:347.7538}},{t:this.shape_1134,p:{scaleX:1.4935,scaleY:1.4935,x:627.996,y:390.2604}},{t:this.shape_1133,p:{scaleX:1.4913,scaleY:1.4913,x:655.439,y:411.618}},{t:this.shape_1132,p:{scaleX:1.4913,scaleY:1.4913,x:652.2327,y:412.9799}},{t:this.shape_1131,p:{scaleX:1.4913,scaleY:1.4913,x:590.4375,y:423.1568}},{t:this.shape_1130,p:{scaleX:1.4913,scaleY:1.4913,x:586.826,y:448.3223}},{t:this.shape_1129,p:{scaleX:1.4913,scaleY:1.4913,x:605.9431,y:452.2928}},{t:this.shape_1128,p:{scaleX:1.4913,scaleY:1.4913,x:443.0808,y:198.1955}},{t:this.shape_1127}]},50).to({state:[{t:this.shape_1205},{t:this.shape_1202,p:{scaleX:1.2956,scaleY:1.2956,x:640.8952,y:275.6414}},{t:this.shape_1201,p:{scaleX:1.2956,scaleY:1.2956,x:512.4827,y:316.6484}},{t:this.shape_1200,p:{scaleX:1.2956,scaleY:1.2956,x:464.0036,y:287.9898}},{t:this.shape_1199,p:{scaleX:1.2956,scaleY:1.2956,x:582.3588,y:202.9716}},{t:this.shape_1198,p:{scaleX:1.2956,scaleY:1.2956,x:656.4724,y:254.9835}},{t:this.shape_1204},{t:this.shape_1196,p:{scaleX:1.2956,scaleY:1.2956,x:591.2665,y:388.8798}},{t:this.shape_1195,p:{scaleX:1.2956,scaleY:1.2956,x:504.5387,y:229.9303}},{t:this.shape_1194,p:{scaleX:1.2956,scaleY:1.2956,x:619.3639,y:246.8919}},{t:this.shape_1193,p:{scaleX:1.2956,scaleY:1.2956,x:476.8798,y:218.1981}},{t:this.shape_1192,p:{scaleX:1.2956,scaleY:1.2956,x:505.5725,y:439.0595}},{t:this.shape_1191,p:{scaleX:1.2956,scaleY:1.2956,x:481.2604,y:391.4002}},{t:this.shape_1190,p:{scaleX:1.2956,scaleY:1.2956,x:525.0827,y:346.1687}},{t:this.shape_1189,p:{scaleX:1.2956,scaleY:1.2956,x:647.2531,y:366.4473}},{t:this.instance_63},{t:this.instance_62},{t:this.shape_1188,p:{scaleX:1.2956,scaleY:1.2956,x:561.8039,y:326.4646}},{t:this.shape_1187,p:{scaleX:1.2956,scaleY:1.2956,x:520.9965,y:341.6951}},{t:this.shape_1186,p:{scaleX:1.2956,scaleY:1.2956,x:563.6675,y:397.609}},{t:this.shape_1185,p:{scaleX:1.2956,scaleY:1.2956,x:540.7565,y:363.812}},{t:this.shape_1184,p:{scaleX:1.2956,scaleY:1.2956,x:552.4134,y:376.0813}},{t:this.shape_1183,p:{scaleX:1.2956,scaleY:1.2956,x:527.4157,y:371.3625}},{t:this.shape_1182,p:{scaleX:1.2956,scaleY:1.2956,x:527.4157,y:371.3625}},{t:this.shape_1181,p:{scaleX:1.2956,scaleY:1.2956,x:634.2738,y:389.92}},{t:this.shape_1180,p:{scaleX:1.2956,scaleY:1.2956,x:671.0629,y:408.2346}},{t:this.shape_1179,p:{scaleX:1.2956,scaleY:1.2956,x:629.3219,y:342.791}},{t:this.shape_1178,p:{scaleX:1.2956,scaleY:1.2956,x:649.4427,y:315.8373}},{t:this.shape_1177,p:{scaleX:1.2956,scaleY:1.2956,x:639.3485,y:377.7558}},{t:this.shape_1176,p:{scaleX:1.2956,scaleY:1.2956,x:663.6842,y:401.6963}},{t:this.shape_1175,p:{scaleX:1.2956,scaleY:1.2956,x:607.4979,y:417.0609}},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.shape_1174,p:{scaleX:1.2956,scaleY:1.2956,x:585.2109,y:317.8367}},{t:this.shape_1173,p:{scaleX:1.2956,scaleY:1.2956,x:476.0484,y:218.7588}},{t:this.shape_1172,p:{scaleX:1.2923,scaleY:1.2923,x:510.7289,y:178.7029}},{t:this.shape_1171,p:{scaleX:1.2923,scaleY:1.2923,x:571.4647,y:273.3399}},{t:this.shape_1170,p:{scaleX:1.2923,scaleY:1.2923,x:593.097,y:234.37}},{t:this.shape_1169,p:{scaleX:1.2923,scaleY:1.2923,x:670.0312,y:210.9183}},{t:this.shape_1168,p:{scaleX:1.2923,scaleY:1.2923,x:606.2078,y:150.5701}},{t:this.shape_1167,p:{scaleX:1.2956,scaleY:1.2956,x:656.8479,y:255.1736}},{t:this.shape_1166,p:{scaleX:1.2956,scaleY:1.2956,x:671.4239,y:278.8009}},{t:this.shape_1165,p:{scaleX:1.2923,scaleY:1.2923,x:503.3307,y:269.2473}},{t:this.shape_1164,p:{scaleX:1.2956,scaleY:1.2956,x:463.5311,y:288.2141}},{t:this.shape_1163,p:{scaleX:1.2923,scaleY:1.2923,x:519.2577,y:325.8641}},{t:this.shape_1162,p:{scaleX:1.2923,scaleY:1.2923,x:637.3273,y:274.9647}},{t:this.shape_1161,p:{scaleX:1.2923,scaleY:1.2923,x:647.7899,y:283.2036}},{t:this.shape_1160,p:{scaleX:1.2923,scaleY:1.2923,x:494.6317,y:316.5922}},{t:this.shape_1159,p:{scaleX:1.2923,scaleY:1.2923,x:529.8502,y:307.5418}},{t:this.shape_1158,p:{scaleX:1.2923,scaleY:1.2923,x:532.9171,y:279.2604}},{t:this.shape_1157,p:{scaleX:1.2923,scaleY:1.2923,x:474.7074,y:307.611}},{t:this.shape_1156,p:{scaleX:1.2923,scaleY:1.2923,x:492.2732,y:397.8425}},{t:this.shape_1155,p:{scaleX:1.2923,scaleY:1.2923,x:535.6263,y:378.9594}},{t:this.shape_1154,p:{scaleX:1.2923,scaleY:1.2923,x:562.1172,y:326.9625}},{t:this.shape_1153,p:{scaleX:1.2956,scaleY:1.2956,x:520.653,y:343.3857}},{t:this.shape_1152,p:{scaleX:1.2956,scaleY:1.2956,x:522.6641,y:339.1738}},{t:this.shape_1151,p:{scaleX:1.2956,scaleY:1.2956,x:541.1149,y:363.5392}},{t:this.shape_1150,p:{scaleX:1.2923,scaleY:1.2923,x:552.7917,y:374.5819}},{t:this.shape_1149,p:{scaleX:1.2923,scaleY:1.2923,x:563.5335,y:396.2272}},{t:this.shape_1148,p:{scaleX:1.2923,scaleY:1.2923,x:624.5762,y:273.2888}},{t:this.shape_1147,p:{scaleX:1.2923,scaleY:1.2923,x:605.3399,y:327.6692}},{t:this.shape_1146,p:{scaleX:1.2923,scaleY:1.2923,x:612.9298,y:350.0938}},{t:this.shape_1145,p:{scaleX:1.2923,scaleY:1.2923,x:598.0927,y:360.4964}},{t:this.shape_1144,p:{scaleX:1.2923,scaleY:1.2923,x:618.5134,y:401.8485}},{t:this.shape_1143,p:{scaleX:1.2923,scaleY:1.2923,x:634.1504,y:419.0964}},{t:this.shape_1142,p:{scaleX:1.2923,scaleY:1.2923,x:632.9436,y:456.6399}},{t:this.shape_1141,p:{scaleX:1.2923,scaleY:1.2923,x:615.3851,y:458.5137}},{t:this.shape_1140,p:{scaleX:1.2923,scaleY:1.2923,x:654.5565,y:390.0244}},{t:this.shape_1139,p:{scaleX:1.2923,scaleY:1.2923,x:655.5375,y:357.4504}},{t:this.shape_1138,p:{scaleX:1.2956,scaleY:1.2956,x:659.7265,y:312.3032}},{t:this.shape_1137,p:{scaleX:1.2956,scaleY:1.2956,x:651.1603,y:318.44}},{t:this.shape_1136,p:{scaleX:1.2956,scaleY:1.2956,x:640.4841,y:311.1137}},{t:this.shape_1135,p:{scaleX:1.2956,scaleY:1.2956,x:628.5938,y:344.4367}},{t:this.shape_1134,p:{scaleX:1.2956,scaleY:1.2956,x:639.5476,y:381.3118}},{t:this.shape_1133,p:{scaleX:1.2923,scaleY:1.2923,x:663.053,y:398.9409}},{t:this.shape_1132,p:{scaleX:1.2923,scaleY:1.2923,x:660.2747,y:400.121}},{t:this.shape_1131,p:{scaleX:1.2923,scaleY:1.2923,x:606.727,y:408.9397}},{t:this.shape_1130,p:{scaleX:1.2923,scaleY:1.2923,x:603.5976,y:430.7464}},{t:this.shape_1129,p:{scaleX:1.2923,scaleY:1.2923,x:620.1632,y:434.1871}},{t:this.shape_1128,p:{scaleX:1.2923,scaleY:1.2923,x:479.0374,y:214.003}},{t:this.shape_1203}]},9).to({state:[{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.instance_64},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1151,p:{scaleX:1.4749,scaleY:1.4749,x:530.661,y:351.6919}},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206}]},60).to({state:[{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328,p:{scaleX:1.4697,scaleY:1.4697,x:651.3844,y:281.8095}},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295}]},120).to({state:[{t:this.shape_1409,p:{scaleX:1.4395,scaleY:1.4395,x:467.133,y:212.7796}},{t:this.shape_1408},{t:this.shape_1407,p:{scaleX:1.4395,scaleY:1.4395,x:463.7978,y:481.4065}},{t:this.shape_1406,p:{scaleX:1.4395,scaleY:1.4395,x:418.8481,y:194.2601}},{t:this.shape_1405,p:{scaleX:1.4395,scaleY:1.4395,x:423.018,y:228.1986}},{t:this.shape_1404,p:{scaleX:1.4395,scaleY:1.4395,x:407.6822,y:313.2446}},{t:this.shape_1403,p:{scaleX:1.4395,scaleY:1.4395,x:403.086,y:355.6711}},{t:this.shape_1402},{t:this.shape_1401,p:{scaleX:1.4395,scaleY:1.4395,x:648.5301,y:295.0589}},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.shape_1392,p:{scaleX:1.4395,scaleY:1.4395,x:542.7824,y:319.0922}},{t:this.shape_1391,p:{scaleX:1.436,scaleY:1.436,x:582.9489,y:235.8636}},{t:this.shape_1390,p:{scaleX:1.436,scaleY:1.436,x:508.0413,y:289.3419}},{t:this.shape_1389},{t:this.shape_1388,p:{scaleX:1.4395,scaleY:1.4395,x:414.6443,y:317.1243}},{t:this.shape_1387,p:{scaleX:1.4395,scaleY:1.4395,x:409.3882,y:356.1351}},{t:this.shape_1386,p:{scaleX:1.4395,scaleY:1.4395,x:463.7069,y:481.2309}},{t:this.shape_1385,p:{scaleX:1.4395,scaleY:1.4395,x:418.1118,y:194.4629}},{t:this.shape_1384,p:{scaleX:1.4395,scaleY:1.4395,x:422.9733,y:228.6083}},{t:this.shape_1383,p:{scaleX:1.436,scaleY:1.436,x:417.9986,y:228.4835}},{t:this.shape_1382,p:{scaleX:1.436,scaleY:1.436,x:511.6284,y:164.6941}},{t:this.shape_1381,p:{scaleX:1.436,scaleY:1.436,x:599.8898,y:124.1869}},{t:this.shape_1380,p:{scaleX:1.436,scaleY:1.436,x:567.5086,y:114.1082}},{t:this.shape_1379,p:{scaleX:1.436,scaleY:1.436,x:567.5086,y:114.4064}},{t:this.shape_1378,p:{scaleX:1.436,scaleY:1.436,x:682.3065,y:239.3969}},{t:this.shape_1377,p:{scaleX:1.436,scaleY:1.436,x:678.6494,y:272.7474}},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1328,p:{scaleX:1.4395,scaleY:1.4395,x:641.9309,y:293.0121}},{t:this.shape_1373,p:{scaleX:1.436,scaleY:1.436,x:568.5138,y:300.4456}},{t:this.shape_1372},{t:this.shape_1371}]},120).to({state:[{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410}]},120).to({state:[{t:this.shape_1409,p:{scaleX:1.2866,scaleY:1.2797,x:473.0429,y:216.0141}},{t:this.shape_1496},{t:this.shape_1407,p:{scaleX:1.2866,scaleY:1.2797,x:470.0619,y:454.8252}},{t:this.shape_1406,p:{scaleX:1.2866,scaleY:1.2797,x:429.8859,y:199.5501}},{t:this.shape_1405,p:{scaleX:1.2866,scaleY:1.2797,x:433.613,y:229.7217}},{t:this.shape_1404,p:{scaleX:1.2866,scaleY:1.2797,x:419.9058,y:305.3282}},{t:this.shape_1403,p:{scaleX:1.2866,scaleY:1.2797,x:415.7978,y:343.0456}},{t:this.shape_1495},{t:this.shape_1401,p:{scaleX:1.2866,scaleY:1.2797,x:635.1752,y:289.1609}},{t:this.shape_1494},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.shape_1392,p:{scaleX:1.2866,scaleY:1.2797,x:540.6581,y:310.5267}},{t:this.shape_1391,p:{scaleX:1.2847,scaleY:1.2784,x:576.7488,y:236.7361}},{t:this.shape_1390,p:{scaleX:1.2847,scaleY:1.2784,x:509.7333,y:284.3476}},{t:this.shape_1493,p:{scaleX:1.2847,scaleY:1.2784,x:487.974,y:320.2319}},{t:this.shape_1492},{t:this.shape_1388,p:{scaleX:1.2866,scaleY:1.2797,x:426.1285,y:308.7772}},{t:this.shape_1387,p:{scaleX:1.2866,scaleY:1.2797,x:421.4307,y:343.4581}},{t:this.shape_1386,p:{scaleX:1.2866,scaleY:1.2797,x:469.9806,y:454.6691}},{t:this.shape_1385,p:{scaleX:1.2866,scaleY:1.2797,x:429.2278,y:199.7304}},{t:this.shape_1384,p:{scaleX:1.2866,scaleY:1.2797,x:433.573,y:230.0859}},{t:this.shape_1383,p:{scaleX:1.2847,scaleY:1.2784,x:429.1773,y:230.1656}},{t:this.shape_1382,p:{scaleX:1.2847,scaleY:1.2784,x:512.9425,y:173.3741}},{t:this.shape_1381,p:{scaleX:1.2847,scaleY:1.2784,x:591.9049,y:137.3108}},{t:this.shape_1380,p:{scaleX:1.2847,scaleY:1.2784,x:562.9353,y:128.3377}},{t:this.shape_1379,p:{scaleX:1.2847,scaleY:1.2784,x:562.9353,y:128.6032}},{t:this.shape_1378,p:{scaleX:1.2847,scaleY:1.2784,x:665.6383,y:239.8818}},{t:this.shape_1377,p:{scaleX:1.2847,scaleY:1.2784,x:662.3666,y:269.5736}},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489,p:{scaleX:1.2847,scaleY:1.2784,x:492.5989,y:326.1447}},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1328,p:{scaleX:1.2866,scaleY:1.2797,x:629.2768,y:287.3413}},{t:this.shape_1373,p:{scaleX:1.2847,scaleY:1.2784,x:563.8346,y:294.2332}}]},240).to({state:[{t:this.shape_1409,p:{scaleX:1.2866,scaleY:1.2797,x:473.0429,y:216.0141}},{t:this.shape_1496},{t:this.shape_1407,p:{scaleX:1.2866,scaleY:1.2797,x:470.0619,y:454.8252}},{t:this.shape_1406,p:{scaleX:1.2866,scaleY:1.2797,x:429.8859,y:199.5501}},{t:this.shape_1405,p:{scaleX:1.2866,scaleY:1.2797,x:433.613,y:229.7217}},{t:this.shape_1404,p:{scaleX:1.2866,scaleY:1.2797,x:419.9058,y:305.3282}},{t:this.shape_1403,p:{scaleX:1.2866,scaleY:1.2797,x:415.7978,y:343.0456}},{t:this.shape_1495},{t:this.shape_1401,p:{scaleX:1.2866,scaleY:1.2797,x:635.1752,y:289.1609}},{t:this.shape_1494},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.shape_1497},{t:this.shape_1391,p:{scaleX:1.2853,scaleY:1.2789,x:576.8445,y:236.7807}},{t:this.shape_1390,p:{scaleX:1.2853,scaleY:1.2789,x:509.7971,y:284.4075}},{t:this.shape_1493,p:{scaleX:1.2853,scaleY:1.2789,x:488.0275,y:320.3033}},{t:this.shape_1492},{t:this.shape_1388,p:{scaleX:1.2866,scaleY:1.2797,x:426.1285,y:308.7772}},{t:this.shape_1387,p:{scaleX:1.2866,scaleY:1.2797,x:421.4307,y:343.4581}},{t:this.shape_1386,p:{scaleX:1.2866,scaleY:1.2797,x:469.9806,y:454.6691}},{t:this.shape_1385,p:{scaleX:1.2866,scaleY:1.2797,x:429.2278,y:199.7304}},{t:this.shape_1384,p:{scaleX:1.2866,scaleY:1.2797,x:433.573,y:230.0859}},{t:this.shape_1383,p:{scaleX:1.2853,scaleY:1.2789,x:429.2028,y:230.2081}},{t:this.shape_1382,p:{scaleX:1.2853,scaleY:1.2789,x:513.0078,y:173.3982}},{t:this.shape_1381,p:{scaleX:1.2853,scaleY:1.2789,x:592.0077,y:137.3233}},{t:this.shape_1380,p:{scaleX:1.2853,scaleY:1.2789,x:563.0243,y:128.3473}},{t:this.shape_1379,p:{scaleX:1.2853,scaleY:1.2789,x:563.0243,y:128.6129}},{t:this.shape_1378,p:{scaleX:1.2853,scaleY:1.2789,x:665.7761,y:239.9274}},{t:this.shape_1377,p:{scaleX:1.2853,scaleY:1.2789,x:662.5028,y:269.6287}},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489,p:{scaleX:1.2853,scaleY:1.2789,x:492.6545,y:326.218}},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1328,p:{scaleX:1.2866,scaleY:1.2797,x:629.2768,y:287.3413}},{t:this.shape_1373,p:{scaleX:1.2853,scaleY:1.2789,x:563.924,y:294.2962}}]},313).to({state:[{t:this.shape_1409,p:{scaleX:1.2866,scaleY:1.2797,x:473.0429,y:216.0141}},{t:this.shape_1496},{t:this.shape_1407,p:{scaleX:1.2866,scaleY:1.2797,x:470.0619,y:454.8252}},{t:this.shape_1406,p:{scaleX:1.2866,scaleY:1.2797,x:429.8859,y:199.5501}},{t:this.shape_1405,p:{scaleX:1.2866,scaleY:1.2797,x:433.613,y:229.7217}},{t:this.shape_1404,p:{scaleX:1.2866,scaleY:1.2797,x:419.9058,y:305.3282}},{t:this.shape_1403,p:{scaleX:1.2866,scaleY:1.2797,x:415.7978,y:343.0456}},{t:this.shape_1495},{t:this.shape_1401,p:{scaleX:1.2866,scaleY:1.2797,x:635.1752,y:289.1609}},{t:this.shape_1494},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.shape_1497},{t:this.shape_1391,p:{scaleX:1.2854,scaleY:1.2789,x:576.866,y:236.7889}},{t:this.shape_1390,p:{scaleX:1.2854,scaleY:1.2789,x:509.8115,y:284.4186}},{t:this.shape_1493,p:{scaleX:1.2854,scaleY:1.2789,x:488.0395,y:320.3166}},{t:this.shape_1492},{t:this.shape_1388,p:{scaleX:1.2866,scaleY:1.2797,x:426.1285,y:308.7772}},{t:this.shape_1387,p:{scaleX:1.2866,scaleY:1.2797,x:421.4307,y:343.4581}},{t:this.shape_1386,p:{scaleX:1.2866,scaleY:1.2797,x:469.9806,y:454.6691}},{t:this.shape_1385,p:{scaleX:1.2866,scaleY:1.2797,x:429.2278,y:199.7304}},{t:this.shape_1384,p:{scaleX:1.2866,scaleY:1.2797,x:433.573,y:230.0859}},{t:this.shape_1383,p:{scaleX:1.2854,scaleY:1.2789,x:429.2085,y:230.2159}},{t:this.shape_1382,p:{scaleX:1.2854,scaleY:1.2789,x:513.0225,y:173.4027}},{t:this.shape_1381,p:{scaleX:1.2854,scaleY:1.2789,x:592.0308,y:137.3256}},{t:this.shape_1380,p:{scaleX:1.2854,scaleY:1.2789,x:563.0444,y:128.3491}},{t:this.shape_1379,p:{scaleX:1.2854,scaleY:1.2789,x:563.0444,y:128.6147}},{t:this.shape_1378,p:{scaleX:1.2854,scaleY:1.2789,x:665.8072,y:239.9358}},{t:this.shape_1377,p:{scaleX:1.2854,scaleY:1.2789,x:662.5335,y:269.6389}},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489,p:{scaleX:1.2854,scaleY:1.2789,x:492.667,y:326.2316}},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1328,p:{scaleX:1.2866,scaleY:1.2797,x:629.2768,y:287.3413}},{t:this.shape_1373,p:{scaleX:1.2854,scaleY:1.2789,x:563.9442,y:294.3079}}]},8).wait(1));

	// background_color
	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f().s("#333334").ss(1,1,1).p("EhIfgwpMCQ/AAAMAAABhTMiQ/AAAg");
	this.shape_1498.setTransform(404.375,290.325);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#D9F0F9").s().p("EhIfAwqMAAAhhTMCQ/AAAMAAABhTg");
	this.shape_1499.setTransform(404.375,290.325);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f().s("#333334").ss(1,1,1).p("EhIfArcMAAAhW3MCQ/AAAMAAABW3");
	this.shape_1500.setTransform(404.375,256.9);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#97F0FF").s().p("EhIfAFOIAAqbMCQ/AAAIAAKbg");
	this.shape_1501.setTransform(404.375,568.275);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#D9F0F9").s().p("EhIfArcMAAAhW3MCQ/AAAMAAABW3g");
	this.shape_1502.setTransform(404.375,256.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1499},{t:this.shape_1498}]}).to({state:[{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500}]},50).to({state:[{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500}]},69).to({state:[{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500}]},120).to({state:[{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500}]},120).to({state:[{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500}]},120).to({state:[{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500}]},240).to({state:[{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500}]},313).to({state:[{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500}]},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-156.2,267.9,1083.4,346.6);
// library properties:
lib.properties = {
	id: '395F5D936AE54496A00E2E68457ADBF8',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['395F5D936AE54496A00E2E68457ADBF8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;