const call =require('./callback')

test("Callback Testing", ()=>{
    function Callback(data){
        try{
            expect(data).toMatch("Hello")
        }
        catch(err){
            document(err)
        }
    }
        
    call(Callback)

})