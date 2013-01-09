this.AsyncSpec = (function(global){

  // Private Methods
  // ---------------
  
  function runAsync(block, timeout){
    return function(){
      var done = false;
      var complete = function(){ done = true; };

      runs(function(){
        block(complete);
      });

      waitsFor(function(){
        return done;
      }, null, timeout);
    };
  }

  // Constructor Function
  // --------------------

  function AsyncSpec(spec){
    this.spec = spec;
  }

  // Public API
  // ----------

  AsyncSpec.prototype.beforeEach = function(block){
    this.spec.beforeEach(runAsync(block));
  };

  AsyncSpec.prototype.afterEach = function(block){
    this.spec.afterEach(runAsync(block));
  };

  AsyncSpec.prototype.it = function(description, block, timeout){
    // For some reason, `it` is not attached to the current
    // test suite, so it has to be called from the global
    // context.
    global.it(description, runAsync(block, timeout));
  };

  return AsyncSpec;
})(this);
