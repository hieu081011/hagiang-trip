document.addEventListener("DOMContentLoaded", function () {
    const currentPageContent = document.body.innerHTML;

    fetch("layout.html")
        .then((response) => response.text())
        .then((layoutHTML) => {
            const parser = new DOMParser();
            const layoutDoc = parser.parseFromString(layoutHTML, "text/html");

            // Chỉ thay thế phần body
            layoutDoc.getElementById("content").innerHTML = currentPageContent;

            // Thay thế body hiện tại bằng body của layout
            document.body.innerHTML = layoutDoc.body.innerHTML;
        });
});
