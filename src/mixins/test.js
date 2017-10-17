import wepy from 'wepy'
export default class TestMixin extends wepy.mixin {
    data = {
        foo: 'foo defined by page',
        bar: 'bar defined by testMixin'
    };
    events = {
        'event-emit': (...args) => {
            let $event = args[args.length -1];
            console.log(`event-emit.name: ${$event.name}`)
        } 
    };
    methods = {
        tap() {
            console.log('mix tap')
        }
    };
}