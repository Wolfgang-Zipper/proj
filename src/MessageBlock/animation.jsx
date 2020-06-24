this.clock = Observable.range(1,60);
this.clock = this.clock.interval(1000).map(function(value){
    console.log(value)
    return value;
})