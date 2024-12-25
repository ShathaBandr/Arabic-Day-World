document.getElementById("scrollBtn").addEventListener("click", function() {
    document.querySelector(".about").scrollIntoView({
        behavior: "smooth", // لتفعيل التمرير السلس
        block: "start" // التمرير إلى أعلى العنصر
    });
});