var express= require('express')

const app=express()

app.get('/',(req,res)=>
{
	res.send('Hello world Welcosdasd')
})

app.listen(process.env.PORT || 3000)

module.exports=app;