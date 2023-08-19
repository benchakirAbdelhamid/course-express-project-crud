const express = require("express");
const Joi = require('joi');
const router = express.Router();


let courses = [
    {id : 1 , title : 'angular'},
    {id : 2 , title : 'react'},
    {id : 3 , title : 'laravel'}
  ]


router.get("/", (req, res) => {
  res.send(courses);
});
router.post("/", (req, res) => {
  const { error, value } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    title: value.title,
  };

  courses = [...courses, course];
  res.send(course);
});
router.delete("/:id", (req, res) => {
  // verify existing course or not
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("couse not found !!");
  }
  // delete course
  const index = courses.indexOf(course);
  // res.send(index)
  courses.splice(index, 1);

  //send response
  res.status(204).send({});
});
router.put("/:id", (req, res) => {
  // verify course existing or not
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("couse not found");
  }
  //validate course
  const { error, value } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }
  // modify course
  course.title = value.title;
  //send course
  res.send(course);
});
router.get("/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("couse not found");
  } else {
    res.send(course);
  }
});
function validateCourse(course) {
  const schema = Joi.object({
    title: Joi.string().alphanum().min(3).max(10).required(),
  });
  return schema.validate(course);
}

module.exports = router;
