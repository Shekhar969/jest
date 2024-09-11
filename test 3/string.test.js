const string = require('./string')

test("String Teting ", ()=>{
    expect(string()).toMatch("Hello")
})