document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const appName = document.getElementById("appName").value.trim();
    const companyName = document.getElementById("companyName").value.trim();
    const companyURL = document.getElementById("companyURL").value.trim();
    const isFree = document.querySelector('input[name="isFree"]:checked');
    const domain = document.getElementById("domain").value;
    const summary = document.getElementById("summary").value.trim();

    const englishRegex = /^[A-Za-z\s]+$/;

    if (!appName || !companyName || !companyURL || !isFree || !domain || !summary) {
      alert("يرجى تعبئة جميع الحقول.");
      return;
    }

    if (!englishRegex.test(appName)) {
      alert("اسم التطبيق يجب أن يحتوي على أحرف إنجليزية فقط.");
      return;
    }

    if (!englishRegex.test(companyName)) {
      alert("اسم الشركة يجب أن تحتوي على أحرف إنجليزية فقط.");
      return;
    }

    const appData = {
      appName,
      companyName,
      companyURL,
      isFree: isFree.value === "Yes",
      domain,
      summary
    };

    localStorage.setItem("newAppData", JSON.stringify(appData));
    window.location.href = "apps.html";
  });
});
