/* ===============================================================
   PROJECT CONFIGURATION (Browser JavaScript)
=============================================================== */

window.PROJECT_ID = "3528362";
window.PROJECT_NAME = "Godrej Vanantara";
window.DEVELOPER_NAME = "Godrej Properties";
window.RERA_NO = "PRM/KA/RERA/1251/310/PR/130526/008653";
window.WHATSAPP_NO = "919560582493";
window.CALL_NO = "919718344024";
window.CALL_DISPLAY = "+91 9718344024";
window.WHATSAPP_URL = "https://wa.me/" + window.WHATSAPP_NO + "?text=" + encodeURIComponent("Hi I am interested in " + window.PROJECT_NAME + ", Bangalore");
window._cLink = window.WHATSAPP_URL;

window.CITY_DISPLAY = "Bangalore";
window.CITY_SLUG = "bangalore";
window.CITY_ID = "1";
window.SHEET_NAME = "Bangalore";
window.SECRET_KEY = "6c7f9ad8b2a1e0f4d5a8c0b9f6e2a4d10";

window.SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbwKsPyw26JGvve0wNMaWUav7wJ27qr5HsMwpXAY_f55TIgOf8Gv2PkxCjeVoRAyPG7v/exec";
window.PROPTIGER_URL = "https://www.proptiger.com/data/v1/entity/enquiry";
window.GTM_ID = "GTM-575H8R87";
window.BASE_URL = "https://godrejnewlaunchbannerghatta.in";

// Auto-bind configuration variables to UI elements
window.applyProjectConfig = function () {
  // 1. WhatsApp links & URL
  if (window.WHATSAPP_NO && window.PROJECT_NAME) {
    window.WHATSAPP_URL = "https://wa.me/" + window.WHATSAPP_NO + "?text=" + encodeURIComponent("Hi I am interested in " + window.PROJECT_NAME + ", Bangalore");
    window._cLink = window.WHATSAPP_URL;
  }
  const waBtns = document.querySelectorAll("#mobile-whatsapp, .whatsapp-link, a[href*='wa.me']");
  waBtns.forEach((btn) => {
    if (window.WHATSAPP_URL) btn.href = window.WHATSAPP_URL;
  });

  // 2. Call links
  const callBtns = document.querySelectorAll("#mobile-call, .call-link, a[href^='tel:']");
  callBtns.forEach((btn) => {
    if (window.CALL_NO) btn.href = "tel:+" + window.CALL_NO.replace(/^\+/, "");
  });

  // 3. RERA Numbers (Footer, FAQs, etc.)
  if (window.RERA_NO) {
    const reraElements = document.querySelectorAll("#footer-rera-no, #faq-rera-no, [data-bind='rera'], .project-rera");
    reraElements.forEach((el) => {
      el.textContent = window.RERA_NO;
    });
  }

  // 4. Form hidden fields (projectId, projectName, secret)
  if (window.PROJECT_ID) {
    document.querySelectorAll("input[name='projectId']").forEach((inp) => {
      inp.value = window.PROJECT_ID;
    });
  }
  if (window.PROJECT_NAME) {
    document.querySelectorAll("input[name='projectName']").forEach((inp) => {
      inp.value = window.PROJECT_NAME;
    });
  }
  if (window.SECRET_KEY) {
    document.querySelectorAll("input[name='secret']").forEach((inp) => {
      inp.value = window.SECRET_KEY;
    });
  }
};

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.applyProjectConfig);
  } else {
    window.applyProjectConfig();
  }
}
