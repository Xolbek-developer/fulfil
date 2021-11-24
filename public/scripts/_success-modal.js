import { selectOne } from './_functions'

export default () => {
   try {
      const modalWrapper = selectOne('.modals')
      modalWrapper.innerHTML = ''

      modalWrapper.innerHTML += `
         <div class="success-modal">
             <div class="success-modal__content">
                 <svg class="success-modal__img" width="227" height="227" viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M113.5 227C176.184 227 227 176.184 227 113.5C227 50.8157 176.184 0 113.5 0C50.8157 0 0 50.8157 0 113.5C0 176.184 50.8157 227 113.5 227Z" fill="#6DAFA7"/>
                     <path d="M164.962 165.151C193.425 136.688 193.425 90.54 164.962 62.0768C136.499 33.6136 90.3508 33.6136 61.8876 62.0768C33.4243 90.54 33.4243 136.688 61.8876 165.151C90.3508 193.614 136.499 193.614 164.962 165.151Z" fill="#FFD372"/>
                     <path d="M81.5923 106.207L109.853 134.468L151.789 92.5321" stroke="#6DAFA7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                 <p class="success-modal__text">So’rovingiz muvaffaqiyatli yuborildi!</p>
                 <button class="button" data-close-modal>Orqaga qaytish</button>
             </div>
         </div>
      `

      selectOne('body').style.overflow = 'hidden'

      selectOne('[data-close-modal]').addEventListener('click', e => {
         modalWrapper.innerHTML = ''
         selectOne('body').style.overflow = ''
      })
   } catch (e) {}
}