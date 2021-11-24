import { selectAll, selectOne } from "./_functions";
import successModal from "./_success-modal";
import maskPhone from "./_mask-phone";

export default () => {
  try {
    const enrollButtons = selectAll("[data-course-name]"),
      modalWrapper = selectOne(".modals");

    enrollButtons.forEach((item) => {
      item.addEventListener("click", (e) => {
        const courseName = e.currentTarget.getAttribute("data-course-name");

        modalWrapper.innerHTML = "";
        modalWrapper.innerHTML += `
               <div class="enroll-modal">
                   <div class="enroll-modal__content">
                       <div class="enroll-modal__close">
                           <img src="/img/icons/close.svg" alt="close svg">
                       </div>
                       <h2 class="enroll-modal__heading">Kursga yozilish</h2>
                       <form class="enroll-modal__form" action="/enroll" method="POST">
                           <input class="input" id="name-enroll" value="${
                             localStorage.getItem("name")
                               ? localStorage.getItem("name")
                               : ""
                           }" type="text" placeholder="Ism" required minlength="3">
                           <input class="input" id="phone-enroll" value="${
                             localStorage.getItem("phone")
                               ? localStorage.getItem("phone")
                               : ""
                           }" type="tel" placeholder="Telefon raqam" required>
                           <input class="input" id="course-enroll" type="text" value=${courseName} readonly required>
                           <button class="button" type="submit">Yuborish</button>
                       </form>
                   </div>
               </div>
            `;
        selectOne("body").style.overflow = "hidden";
        closeEnrollModal();
        maskPhone();
        submitEnrollForm();
      });
    });

    function closeEnrollModal() {
      selectOne(".enroll-modal__close img").addEventListener("click", (e) => {
        modalWrapper.innerHTML = "";
        selectOne("body").style.overflow = "";
      });
    }

    function submitEnrollForm() {
      const enrollForm = selectOne(".enroll-modal__form"),
        nameInput = enrollForm.querySelector("#name-enroll"),
        phoneInput = enrollForm.querySelector("#phone-enroll"),
        courseInput = enrollForm.querySelector("#course-enroll");

      enrollForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("phone", phoneInput.value);
        let response = await fetch("/enroll", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            name: nameInput.value,
            phone: phoneInput.value,
            course: courseInput.value,
          }),
        });
        response = await response.json();

        if (response.ok) {
          successModal();
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
};
