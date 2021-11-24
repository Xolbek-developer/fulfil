import { selectAll, selectOne } from './_functions'
import successModal from './_success-modal'

export default () => {
   try {
      const modalWrapper = selectOne('.modals')

      const contactForm = selectOne('.contact__form'),
         nameInput = contactForm.querySelector('#name'),
         phoneInput = contactForm.querySelector('#phone'),
         emailInput = contactForm.querySelector('#email')

      contactForm.addEventListener('submit', async e => {
         e.preventDefault()
         let response = await fetch('/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
               name: nameInput.value,
               phone: phoneInput.value,
               email: emailInput.value
            })
         })
         response = await response.json()

         if (response.ok) {
            successModal()
            contactForm.reset()
         }
      })
   } catch (e) {
   }
}