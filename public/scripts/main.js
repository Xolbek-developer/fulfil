import sliderSettings from './_slider-settings'
import maskPhone from './_mask-phone'
import navAction from './_nav-action'
import enrollCourse from './_enroll-course'
import contact from './_contact'

document.addEventListener('DOMContentLoaded', () => {
   sliderSettings()
   maskPhone()
   navAction()
   enrollCourse()
   contact()

   AOS.init()
})