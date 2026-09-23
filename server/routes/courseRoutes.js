const express = require("express")

const {
    getCourses,
    createCourses,
    updateCourses,
    deleteCourses,
    getCoursesById
} = require("../controllers/courseController")

const courseRoute = express.Router()

courseRoute.get("/", getCourses)
courseRoute.post("/", createCourses)
courseRoute.get("/:id", getCoursesById)
courseRoute.put("/:id", updateCourses)
courseRoute.delete("/:id", deleteCourses)

module.exports = courseRoute