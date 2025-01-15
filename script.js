var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxqTGJSg542KU9-7TQCERJauQbECvX8FB9qoSAF09ZIJBPiPXe-6zeMZR2N-mmPTipJGA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message submitted successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

document.querySelectorAll(".work").forEach((work) => {
  const tapMessage = work.querySelector(".tap-message");
  const toggleActive = () => {
    document.querySelectorAll(".work").forEach((otherWork) => {
      if (otherWork !== work) {
        otherWork.classList.remove("active");
        const otherTapMessage = otherWork.querySelector(".tap-message");
        if (otherTapMessage) {
          otherTapMessage.style.opacity = "1";
        }
      }
    });
    work.classList.toggle("active");
    tapMessage.style.opacity = work.classList.contains("active") ? "0" : "1";
  };
  work.addEventListener("mouseenter", () => {
    tapMessage.style.opacity = "0";
  });

  work.addEventListener("mouseleave", () => {
    if (!work.classList.contains("active")) {
      tapMessage.style.opacity = "1";
    }
  });
  work.addEventListener("click", () => {
    toggleActive();
  });
});
