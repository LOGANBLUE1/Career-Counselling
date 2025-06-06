const Course = require("../models/Course")
const User = require("../models/User")
const mailSender = require("../utils/mailSender")
const mongoose = require("mongoose")
const { paymentSuccessEmail } = require("../mail/templates/paymentSuccessEmail")
const {courseEnrollmentEmail,} = require("../mail/templates/courseEnrollmentEmail")
const CourseProgress = require("../models/CourseProgress")

exports.capturePayment = async (req, res) => {
    // const { courses } = req.body
    const userId = req.user.id
    const user = await User.findById(userId)
    // if (!courses || courses.length === 0) {
    //   return res.json({ 
    //     success: false, 
    //     message: "Please Provide Course ID" 
    //   })
    // }
  
    // let total_amount = 0
  
    // for (const course_id of courses) {
    //   let course
    //   try {
    //     // Find the course by its ID
    //     course = await Course.findById(course_id)
  
    //     // If the course is not found, return an error
    //     if (!course) {
    //       return res.json({ 
    //         success: false, 
    //         message: "Could not find the Course" 
    //       })
    //     }
  
    //     // Check if the user is already enrolled in the course
    //     // const uid = new mongoose.Types.ObjectId(userId)
    //     if (user.courses.includes(course_id)) {
    //       return res.status(400).json({ 
    //         success: false, 
    //         message: "Student is already Enrolled" 
    //       })
    //     }
  
    //     // Add the price of the course to the total amount
    //     total_amount += course.price
    //   } catch (error) {
    //     console.log(error)
    //     return res.status(500).json({ 
    //       success: false, 
    //       message: 'Error in adding course' 
    //     })
    //   }
    // }
    // console.log("Total amount: ", total_amount)
  
    res.status(200).json({
        success: true,
        message: "Payment Bypassed",
        currecy: "INR",
        orderId: "fake_order_id",
        amount: total_amount*100,
        // courses
    })
}

exports.sendPaymentSuccessEmail = async (req, res) => {
    const { orderId, paymentId, amount } = req.body
  
    const userId = req.user.id
  
    if (!orderId || !paymentId || !amount || !userId) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide all the details" 
      })
    }
  
    try {
      const enrolledStudent = await User.findById(userId)
  
      await mailSender(
        enrolledStudent.email,
        `Payment Received`,
        paymentSuccessEmail(
          `${enrolledStudent.firstName} ${enrolledStudent.lastName}`,
          amount / 100,
          orderId,
          paymentId
        )
      )
    } catch (error) {
      console.log("error in sending mail", error)
      return res.status(400).json({ 
        success: false, 
        message: "Could not send email" 
      })
    }
  }

  exports.verifyPayment = async (req, res) => {
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature, courses} = req.body;
    const userId = req.user.id
  
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !courses ||
      !userId
    ) {
      return res.status(400).json({ 
        success: false, 
        message: "Payment Failed" 
      })
    }
  
    await enrollStudents(courses, userId, res)
    return res.status(200).json({ 
        success: true, 
        message: "Payment Verified" 
    })
}

const enrollStudents = async (courses, userId, res) => {
    if (!courses || !userId) {
      return res.status(400).json({
        success: false, 
        message: "Please Provide Course ID and User ID" 
      })
    }
  
    for (const courseId of courses) {
      try {
        // Find the course and enroll the student in it
        const enrolledCourse = await Course.findOneAndUpdate(
          { _id: courseId },
          { $push: { studentsEnrolled: userId } },
          { new: true }
        )
  
        if (!enrolledCourse) {
          return res.status(500).json({ 
            success: false, 
            error: "Course not found" 
          })
        }
        // console.log("Updated course: ", enrolledCourse.courseName)
  
        const courseProgress = await CourseProgress.create({
          courseId: courseId,
          userId: userId,
          completedVideos: [],
        })
        // Find the student and add the course to their list of enrolled courses
        const enrolledStudent = await User.findByIdAndUpdate(
          userId,
          {
            $push: {
              courses: courseId,
              courseProgress: courseProgress._id,
            },
          },
          { new: true }
        )
        
  
        // console.log("Enrolled student: ", enrolledStudent)
        // Send an email notification to the enrolled student
        const emailResponse = await mailSender(
          enrolledStudent.email,
          `Successfully Enrolled into ${enrolledCourse.courseName}`,
          courseEnrollmentEmail(
            enrolledCourse.courseName,
            `${enrolledStudent.firstName} ${enrolledStudent.lastName}`
          )
        )
  
        // console.log("Email sent successfully: ", emailResponse.response)
      } catch (error) {
        console.log(error)
        return res.status(400).json({ 
          success: false, 
          error: error.message 
        })
      }
    }
  }