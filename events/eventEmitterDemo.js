/**
 * events.EventEmitter APIs:
 * 1. add listeners
 * 2. emit event
 * 3. check listener-count
 */
var events = require('events');
var emitter = new events.EventEmitter();

var eventA = 'event_A';
// 1. def & add listeners
var l1 = function listener1() {
    console.log('listener1 do action')
}
emitter.addListener(eventA, l1);
var l2 = function listener2() {
    console.log('listener2 do action')
}
emitter.on(eventA, l2);

// 2. check count of listeners
var count = events.EventEmitter.listenerCount(emitter,eventA)
console.log('listener count of ' + eventA + ':' + count)

// 3. emit event
console.log('emit ' + eventA + '...');
emitter.emit(eventA);

// 4. remove listener 1
emitter.removeListener(eventA, l1);

// check listener count
console.log('listener count of ' + eventA + ': ' + events.EventEmitter.listenerCount(emitter, eventA));
console.log('re-emit ' + eventA + '...');
emitter.emit(eventA);
