const name = require('./name')

test("Object", ()=>{
    expect(name()).toEqual({names:'shekhar'})
})