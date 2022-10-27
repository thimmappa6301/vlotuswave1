// function add(a,b){
//     return a+b
// }
// var demo=require('./Demo.js')

// const { mul,add } = require("./Demo")



// result=demo.add(50,40);


// console.log('the result is :'+result)

//create a server

// var http=require('http')
// http.createServer(function(req,resp){
//     resp.write(200,{'Content-Type':'text/html'})
//     resp.write('Hi! hello wolrd')
//     resp.end()
// }).listen(8080)

//create a module
// result=mul(10,10)
// adding=add(200,300)
// console.log('the result is'+adding)
// var fs=require('fs')
// fs.readFile('Demo.js','utf-8',function(ERR,data){
//     console.log(data)
// })
// var fs=require('fs')
// fs.appendFile('Demo.js','console.log("hi thimmappa")',function(err){
//     console.log('Data saved')
// })
// var fs=require('fs')
// fs.unlink('demo1.js',function(err){
//     console.log('Deleted')
// })
// const app= require('express')no
// var express=require('express')
// const app=express()
// app.get('/',function(req,res){
//     res.send('Hello world')
// })
// app.get('/thimmi',function(req,res){
//     const {id}=req.query
//     res.send('hi bujji'+id)
// })
// app.get('/thimmi/:id',function(req,res){
//     const {id}=req.query
//     res.send('hi thimmi'+id)
// })
// app.listen(9000,function(req,res){
//     console.log('Running')
// })
var express=require('express')
const emp=require('./emp')

// const emp1=emp.json()

const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})
const emp1=[
    {'id':"Hatity","first_name":"Cindelyn","last_name":"Cartlidge","email":"ccartlidge0@bbb.org","gender":"Bigender","ip_address":"128.135.134.60"},
{"id":"Otcom","first_name":"Stearn","last_name":"De Goey","email":"sdegoey1@t.co","gender":"Male","ip_address":"188.83.196.116"},
{"id":"Gembucket","first_name":"Carlie","last_name":"Proffer","email":"cproffer2@discuz.net","gender":"Male","ip_address":"59.141.144.154"},
{"id":"Vagram","first_name":"Jacqui","last_name":"Burris","email":"jburris3@gravatar.com","gender":"Polygender","ip_address":"8.144.250.173"},
{"id":"Solarbreeze","first_name":"Drucie","last_name":"Cloughton","email":"dcloughton4@tmall.com","gender":"Female","ip_address":"215.218.129.122"},
{"id":"Fix San","first_name":"Ichabod","last_name":"Gobolos","email":"igobolos5@deliciousdays.com","gender":"Male","ip_address":"10.126.42.249"},
{"id":"Bytecard","first_name":"Nicolina","last_name":"Lakey","email":"nlakey6@toplist.cz","gender":"Female","ip_address":"203.119.176.163"},
{"id":"Job","first_name":"Rosabelle","last_name":"Grubey","email":"rgrubey7@nbcnews.com","gender":"Female","ip_address":"135.41.27.148"},
{"id":"Asoka","first_name":"Larry","last_name":"Ofield","email":"lofield8@bluehost.com","gender":"Male","ip_address":"140.158.3.181"},
{"id":"Subin","first_name":"Farley","last_name":"Amori","email":"famori9@ihg.com","gender":"Male","ip_address":"111.59.234.204"}
]
const products=[
    {id:1,name:'thimmi'},
    {id:2,name:'thimmappa'},
    {id:3,name:'thi'}
]
app.get('/products/:id',(req,res)=>{
    const myProd=emp1.filter((item)=>item.id.toString==req.params.id)
    return res.send(myProd)
})
app.get('/products',function(req,res){
    

    // const my=emp1.filter((item)=>{item.id})
    // res.send(emp1)
})
app.post('/addproducts',function(req,res){
    const {id,name}=req.body
    console.log(id,name)
    return res.send('Stored Sucessfully!    ')
})
app.put('/modproducts',function(req,res){
    const {id,name}=req.body
    console.log(id,name)
    return res.send('Modify Successfully!')
})


app.listen(8080,console.log('Server is Running'))





























































