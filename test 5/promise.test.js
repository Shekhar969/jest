const making = require('./promis')
const Promise =require('./promis')

test("Promise Tesing", ()=>{
    return making().then((data)=>{
        expect(data).toBe("Hello")
    })
})