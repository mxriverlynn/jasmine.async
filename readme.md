# Jasmine.Async

Make Jasmine's asynchronous testing suck less.

## About Jasmine.Async

I love [Jasmine](https://jasmine.github.io/). It's a great BDD-style testing framework
for browser based JavaScript, and my preferred tool for doing
that kind of work. But the asynchronous testing story in Jasmine
is painful at best. 

Thus, Jasmine.Async was born out of frustration and little bit
of jealousy in how easy it is to do async tests with [Mocha](http://visionmedia.github.com/mocha/). 

## Source Code And Downloads

You can download the raw source code from the "src" folder above, or grab one of the
many builds from the "lib" folder. 

To get the latest stable release, use these links which point to the 'master' branch's
builds:

### Standard Builds

* Development: [jasmine.async.js](https://raw.github.com/derickbailey/jasmine.async/master/lib/jasmine.async.js)

* Production: [jasmine.async.min.js](https://raw.github.com/derickbailey/jasmine.async/master/lib/jasmine.async.min.js)

## Donations

If you like this project, or any of my open source projects, please consider
a dontation or a tip to show your support.

* [Gittip](https://www.gittip.com/derickbailey/)

* [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9UT2HP6W5TLJQ)

## Basic Usage

```js
describe("an async spec", function(){

  // set up the async spec
  var async = new AsyncSpec(this);

  // run an async setup
  async.beforeEach(function(done){
    doSomething();

    // simulate async stuff and wait 10ms
    setTimeout(function(){

      // more code here
      doMoreStuff();
 
      // when the async stuff is done, call `done()`
      done();

    }, 10); 
  });

  // run an async cleanup
  async.afterEach(function(done){
    // simulate async cleanup
    setTimeout(function(){

      done(); // done with the async stuff

    }, 10);
  });

  // run an async expectation
  async.it("did stuff", function(done){

    // simulate async code again
    setTimeout(function(){

      expect(1).toBe(1);
      
      // all async stuff done, and spec asserted
      done();

    });    

  });

});
```

## Release Notes

For change logs and release notes, see the
[changelog](https://github.com/derickbailey/jasmine.async/blob/master/changelog.md) file.

## Legal Mumbo-Jumbo (MIT License)

Copyright &copy;2012 Muted Solutions, LLC. All Rights Reserved.

Permission is hereby granted, free of charge, to any person 
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without 
restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons 
to whom the Software is furnished to do so, subject to the 
following conditions:

The above copyright notice and this permission notice shall be 
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.
