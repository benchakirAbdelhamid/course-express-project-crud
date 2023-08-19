// const express = require('express')
// const app = express()

// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(['react','laravel','express','nest'])
// })

// app.listen(3000,()=> console.log("the app listening the port 3000 ..."))  
// // ==> http://localhost:3000/api/courses 

// ======================================

// const express = require('express')
// const app = express()

// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(['react','laravel','express','nest'])
// })

// const port = process.env.PORT || 3000;

// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  
// // // ==> http://localhost:5000/api/courses 

// // ======================================
// const express = require('express')
// const app = express()

// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(['react','laravel','express','nest'])
// })

// app.get('/api/courses/:id/:year/:month',  (req, res) => {
//   // res.send(req.params.id + ' ' + req.params.year + ' '+ req.params.month )
//   // res.send(req.params )
//   res.send(req.query )
// })

// const port = process.env.PORT || 3000;

// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  
// // ==> http://localhost:5000/api/courses // http://localhost:5000/api/courses/8/8/8?l=5


// // ===========http get request===simple programme , search params in array courses========================
// const express = require('express')
// const app = express()
// let courses = [
//   {id : 1 , title : 'angular'},
//   {id : 2 , title : 'react'},
//   {id : 3 , title : 'laravel'}
// ]
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(courses)
// })

// app.get('/api/courses/:id',  (req, res) => {
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }else{
//     res.send(course)
//   }
  
// })

// const port = process.env.PORT || 3000;

// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  
// // // ==> http://localhost:5000/api/courses/2 ==>{"id":2,"title":"react"}
// // // ==> http://localhost:5000/api/courses/8 ==>couse not found


// // ===========htpp post request and validation===simple programme 
// const express = require('express')
// const app = express()

// app.use(express.json()) // transfer content body to json

// let courses = [
//   {id : 1 , title : 'angular'},
//   {id : 2 , title : 'react'},
//   {id : 3 , title : 'laravel'}
// ]
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(courses)
// })

// app.post('/api/courses',  (req, res) => {

//   if (!req.body.title || req.body.title.length < 3 ) {
//     res.status(400).send('title is required and must be great than 3 caracters')
//   }

//   const course = {
//     id : courses.length +1,
//     title : req.body.title
//   }

//   // // ==> add object
//   // courses.push(course)
//   // courses.unshift(course)
//   // courses = [course , ...courses]
//   courses = [...courses , course]
//   res.send(course)
// })

// app.get('/api/courses/:id',  (req, res) => {
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }else{
//     res.send(course)
//   }
// })

// const port = process.env.PORT || 3000;

// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  
// // // ==> 
// // // ==> 




// // ===========htpp post request and validation package joi===simple programme 
// const express = require('express')
// const Joi = require('joi');
// const app = express()

// app.use(express.json()) // transfer content body to json

// let courses = [
//   {id : 1 , title : 'angular'},
//   {id : 2 , title : 'react'},
//   {id : 3 , title : 'laravel'}
// ]
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(courses)
// })

// app.post('/api/courses',  (req, res) => {

//   const schema = Joi.object({
//     title : Joi.string().alphanum().min(3).max(10).required()
//   })
//   const result = schema.validate(req.body)
//   // res.send(result)
//   // res.send(result.error.details[0].message)
//   // ============================>
//   const {error , value} = schema.validate(req.body)
//   // res.send(error)
//   // res.send(value)
//   // res.send({
//   //   'errorTitle' : error,
//   //   'valueTitle': value
//   // })

//   if(error){
//     res.status(400).send(error.details[0].message)
//   }

//   const course = {
//     id : courses.length +1,
//     title : value.title
//   }

//   // // ==> add object
//   // courses.push(course)
//   // courses.unshift(course)
//   // courses = [course , ...courses]
//   courses = [...courses , course]
//   res.send(course)
// })

// app.get('/api/courses/:id',  (req, res) => {
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }else{
//     res.send(course)
//   }
// })

// const port = process.env.PORT || 3000;

// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  
// // // ==> 
// // // ==> 




// // ===========htpp put || update request and validation package joi===simple programme 
// const express = require('express')
// const Joi = require('joi');
// const app = express()

// app.use(express.json()) // transfer content body to json

// let courses = [
//   {id : 1 , title : 'angular'},
//   {id : 2 , title : 'react'},
//   {id : 3 , title : 'laravel'}
// ]
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(courses)
// })

// app.post('/api/courses',  (req, res) => {

//   const schema = Joi.object({
//     title : Joi.string().alphanum().min(3).max(10).required()
//   })
//   const result = schema.validate(req.body)
//   // res.send(result)
//   // res.send(result.error.details[0].message)
//   // ============================>
//   const {error , value} = schema.validate(req.body)
//   // res.send(error)
//   // res.send(value)
//   // res.send({
//   //   'errorTitle' : error,
//   //   'valueTitle': value
//   // })

//   if(error){
//     res.status(400).send(error.details[0].message)
//   }

//   const course = {
//     id : courses.length +1,
//     title : value.title
//   }

//   // // ==> add object
//   // courses.push(course)
//   // courses.unshift(course)
//   // courses = [course , ...courses]
//   courses = [...courses , course]
//   res.send(course)
// })

// app.put('/api/courses/:id',(req,res)=>{
//   // verify course existing or not
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }

//   //validate course
//   const schema = Joi.object({
//     title : Joi.string().alphanum().min(3).max(10).required()
//   })
//   const {error , value} = schema.validate(req.body)
//   if(error){
//     res.status(400).send(error.details[0].message)
//   }

//   // modify course
//   course.title = value.title

//   //send course
//   res.send(course)
// })

// app.get('/api/courses/:id',  (req, res) => {
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }else{
//     res.send(course)
//   }
// })

// const port = process.env.PORT || 3000;

// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  




// // =====clean code || CRUD APP || repetetion======htpp put || update request and validation package joi
// const express = require('express')
// const Joi = require('joi');
// const app = express()

// app.use(express.json()) // transfer content body to json

// let courses = [
//   {id : 1 , title : 'angular'},
//   {id : 2 , title : 'react'},
//   {id : 3 , title : 'laravel'}
// ]
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(courses)
// })

// app.post('/api/courses',  (req, res) => {


//   const {error , value} = validateCourse(req.body)
//   if(error){
//     res.status(400).send(error.details[0].message)
//   }

//   const course = {
//     id : courses.length +1,
//     title : value.title
//   }

//   courses = [...courses , course]
//   res.send(course)
// })

// app.delete('/api/courses/:id',(req,res)=>{
//   // verify existing course or not
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found !!')
//   }
//   // delete course
//   const index = courses.indexOf(course)
//   // res.send(index)
//   courses.splice(index , 1)
  
//   //send response
//   res.status(204).send({})
// })

// app.put('/api/courses/:id',(req,res)=>{
//   // verify course existing or not
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }
//   //validate course
//   const {error , value} = validateCourse(req.body)
//   if(error){
//     res.status(400).send(error.details[0].message)
//   }
//   // modify course
//   course.title = value.title
//   //send course
//   res.send(course)
// })

// app.get('/api/courses/:id',  (req, res) => {
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }else{
//     res.send(course)
//   }
// })

// function validateCourse(course){
//   const schema = Joi.object({
//     title : Joi.string().alphanum().min(3).max(10).required()
//   })
//   return schema.validate(course)

// }

// const port = process.env.PORT || 3000;

// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  





// // ===== Middleware =============
// const express = require('express')
// const logged = require('./logged')
// const Joi = require('joi');
// const app = express()

// app.use(express.json()) // kaykhadam mli taikon 3adna body ||Middleware
// app.use(express.urlencoded()) // kaykhadam mli taykana data jaya min form
// app.use(express.static('public')) // http://localhost:5000/file.txt || bach ta9dar accede li ka3 files li wast public li howa file.txt
// // kaykhadmo mode synchroniser ==> kola function kaykhadmo bi tartib wahda mor wahda

// // Middleware app.use() ==> create middleware
// // app.use((req,res,next)=>{ // kaykhadam dima ||Middleware
// // console.log('login...')
// // next()
// // })
// // Middleware app.use()

// // ==> import middleware name log
// app.use(logged.log)
// app.use((req,res,next)=>{ // kaykhadam dima ||Middleware
// console.log('authenticated...')
// next()
// })

// let courses = [
//   {id : 1 , title : 'angular'},
//   {id : 2 , title : 'react'},
//   {id : 3 , title : 'laravel'}
// ]
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(courses)
// })


// const port = process.env.PORT || 3000;

// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  





// // ===== Middleware + resource middleware * exemple 'helmet' =============
// const express = require('express')
// const helmet = require('helmet')
// const morgan = require('morgan')
// const logged = require('./logged')
// const Joi = require('joi');
// const app = express()

// app.use(express.json()) // kaykhadam mli taikon 3adna body ||Middleware
// app.use(express.urlencoded()) // kaykhadam mli taykana data jaya min form
// app.use(express.static('public')) // http://localhost:5000/file.txt || bach ta9dar accede li ka3 files li wast public li howa file.txt
// // kaykhadmo mode synchroniser ==> kola function kaykhadmo bi tartib wahda mor wahda

// // Middleware app.use() ==> create middleware
// // app.use((req,res,next)=>{ // kaykhadam dima ||Middleware
// // console.log('login...')
// // next()
// // })
// // Middleware app.use()

// app.use(helmet()); // helmet methode tadir security li all requet HTTP fi project

// app.use(morgan('tiny')) // kay3tik time dyal kola requet http : get and post and put and delete ...

// console.log(`NODE-ENV:${process.env.NODE_ENV}`)
// console.log(`NODE-ENV:${app.get('env')}`)
// // export NODE_ENV=prodcution
// // application fi lawal tadoz min 2 steps
// // the first step development 
// // the second step prodcution 
// if(app.get('env') === 'development'){
//   app.use(morgan('tiny'))
// }

// // ==> import middleware name log
// app.use(logged.log)
// app.use((req,res,next)=>{ // kaykhadam dima ||Middleware
// console.log('authenticated...')
// next()
// })

// let courses = [
//   {id : 1 , title : 'angular'},
//   {id : 2 , title : 'react'},
//   {id : 3 , title : 'laravel'}
// ]
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/api/courses',  (req, res) => {
//   res.send(courses)
// })

// app.post('/api/courses',  (req, res) => {


//   const {error , value} = validateCourse(req.body)
//   if(error){
//     res.status(400).send(error.details[0].message)
//   }

//   const course = {
//     id : courses.length +1,
//     title : value.title
//   }

//   courses = [...courses , course]
//   res.send(course)
// })

// app.delete('/api/courses/:id',(req,res)=>{
//   // verify existing course or not
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found !!')
//   }
//   // delete course
//   const index = courses.indexOf(course)
//   // res.send(index)
//   courses.splice(index , 1)
  
//   //send response
//   res.status(204).send({})
// })

// app.put('/api/courses/:id',(req,res)=>{
//   // verify course existing or not
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }
//   //validate course
//   const {error , value} = validateCourse(req.body)
//   if(error){
//     res.status(400).send(error.details[0].message)
//   }
//   // modify course
//   course.title = value.title
//   //send course
//   res.send(course)
// })

// app.get('/api/courses/:id',  (req, res) => {
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }else{
//     res.send(course)
//   }
// })

// function validateCourse(course){
//   const schema = Joi.object({
//     title : Joi.string().alphanum().min(3).max(10).required()
//   })
//   return schema.validate(course)

// }

// const port = process.env.PORT || 3000;
// // export PORT=5000
// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  







// ===== Middleware + configurer une application using package config =============
// package config khasak create folder config content 3 files : default and production and development
// const config = require('config')
// const express = require('express')
// const helmet = require('helmet')
// const morgan = require('morgan')
// const logged = require('./logged')
// const Joi = require('joi');
// const app = express()

// app.use(express.json()) // kaykhadam mli taikon 3adna body ||Middleware
// app.use(express.urlencoded()) // kaykhadam mli taykana data jaya min form
// app.use(express.static('public')) // http://localhost:5000/file.txt || bach ta9dar accede li ka3 files li wast public li howa file.txt
// app.use(helmet()); // helmet methode tadir security li all requet HTTP fi project

// app.use(morgan('tiny')) // kay3tik time dyal kola requet http : get and post and put and delete ...
// console.log(`NODE-ENV:${process.env.NODE_ENV}`)
// console.log(`NODE-ENV:${app.get('env')}`)
// if(app.get('env') === 'development'){
//   app.use(morgan('tiny'))
// }

// // condiguration
// // export NODE_ENV=development
// // console.log(`App name: ${config.get('name')}`)//App name: My express App - Development
// // console.log(`Mail name: ${config.get('mail.host')}`) // Mail name: dev-mail-server
// // export NODE_ENV=pruduction 
// console.log(`App name: ${config.get('name')}`)//App name: My express App - pruduction
// console.log(`Mail name: ${config.get('mail.host')}`) // Mail name: prod-mail-server
// // export my_password=123456
// // console.log(`mail password : ===> ${config.get('mail.password')}`) // 123456

// // ==> import middleware name log
// app.use(logged.log)
// app.use((req,res,next)=>{ // kaykhadam dima ||Middleware
// console.log('authenticated...')
// next()
// })
// let courses = [
//   {id : 1 , title : 'angular'},
//   {id : 2 , title : 'react'},
//   {id : 3 , title : 'laravel'}
// ]
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })
// app.get('/api/courses',  (req, res) => {
//   res.send(courses)
// })
// app.post('/api/courses',  (req, res) => {


//   const {error , value} = validateCourse(req.body)
//   if(error){
//     res.status(400).send(error.details[0].message)
//   }

//   const course = {
//     id : courses.length +1,
//     title : value.title
//   }

//   courses = [...courses , course]
//   res.send(course)
// })
// app.delete('/api/courses/:id',(req,res)=>{
//   // verify existing course or not
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found !!')
//   }
//   // delete course
//   const index = courses.indexOf(course)
//   // res.send(index)
//   courses.splice(index , 1)
  
//   //send response
//   res.status(204).send({})
// })
// app.put('/api/courses/:id',(req,res)=>{
//   // verify course existing or not
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }
//   //validate course
//   const {error , value} = validateCourse(req.body)
//   if(error){
//     res.status(400).send(error.details[0].message)
//   }
//   // modify course
//   course.title = value.title
//   //send course
//   res.send(course)
// })
// app.get('/api/courses/:id',  (req, res) => {
//   let course = courses.find(course => course.id === parseInt(req.params.id))
//   if (!course) {
//     res.status(404).send('couse not found')
//   }else{
//     res.send(course)
//   }
// })
// function validateCourse(course){
//   const schema = Joi.object({
//     title : Joi.string().alphanum().min(3).max(10).required()
//   })
//   return schema.validate(course)

// }
// const port = process.env.PORT || 3000;
// // export PORT=5000
// app.listen(port,()=> console.log(`the app listening the port ${port}...`))  



// =======data base===========
// https://expressjs.com/en/guide/database-integration.html

// ======= structure VIDEO 50 App CRUD ===========

const config = require('config')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const logged = require('./middleware/logged')
const courses = require('./routers/courses')
const home = require('./routers/home')
const app = express()

app.use(express.json()) 
app.use(express.urlencoded())
app.use(express.static('public')) 
app.use(helmet()); 

app.use('/api/courses',courses)
app.use('/',home)
// middleware
app.use(logged.log)

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`the app listening the port ${port}...`))  
