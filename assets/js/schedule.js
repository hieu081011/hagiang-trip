const itinerary = [
    {
        day: "Ngày 1",
        schedule: [
            { time: "7:00 AM", activity: "Đến Hà Giang, nghỉ ngơi và ăn sáng" },
            {
                time: "9:00 AM",
                activity:
                    "Xuất phát từ Hà Giang, đi Phó Bảng, thăm các điểm như Làng văn hóa, chợ Phó Bảng",
            },
            { time: "12:00 PM", activity: "Ăn trưa tại Phó Bảng" },
            {
                time: "2:00 PM",
                activity: "Tiếp tục di chuyển từ Phó Bảng sang Đồng Văn",
            },
            {
                time: "3:30 PM",
                activity:
                    "Thăm Cột Cờ Lũng Cú, chụp ảnh tại cột cờ cực Bắc của Việt Nam",
            },
            {
                time: "5:00 PM",
                activity: "Tới Đồng Văn, nhận phòng khách sạn hoặc homestay",
            },
            {
                time: "7:00 PM",
                activity:
                    "Ăn tối tại Đồng Văn, thưởng thức đặc sản như cháo ấu tẩu, lẩu dê",
            },
        ],
    },
    {
        day: "Ngày 2",
        schedule: [
            { time: "7:00 AM", activity: "Dậy sớm, ăn sáng tại Đồng Văn" },
            { time: "8:00 AM", activity: "Xuất phát từ Đồng Văn, đi Mèo Vạc" },
            {
                time: "10:00 AM",
                activity: "Dừng chân tại đèo Mã Pí Lèng, ngắm cảnh đẹp hùng vĩ",
            },
            { time: "12:00 PM", activity: "Ăn trưa tại Mèo Vạc" },
            {
                time: "2:00 PM",
                activity:
                    "Thăm các bản làng dân tộc, ghé thăm thửa ruộng bậc thang",
            },
            {
                time: "4:00 PM",
                activity: "Di chuyển về Yên Minh, nghỉ đêm tại Yên Minh",
            },
        ],
    },
    {
        day: "Ngày 3",
        schedule: [
            { time: "7:00 AM", activity: "Ăn sáng tại Yên Minh" },
            {
                time: "9:00 AM",
                activity: "Khởi hành từ Yên Minh, quay lại Hà Giang",
            },
            {
                time: "11:00 AM",
                activity:
                    "Tham quan khu vực thị trấn Quản Bạ, thăm đèo Bắc Sum",
            },
            { time: "1:00 PM", activity: "Ăn trưa tại Hà Giang" },
            {
                time: "3:00 PM",
                activity:
                    "Dừng lại để mua quà lưu niệm hoặc đặc sản tại Hà Giang",
            },
            { time: "5:00 PM", activity: "Kết thúc chuyến đi, chuẩn bị về" },
        ],
    },
];

function renderItinerary() {
    const container = document.getElementById("schedule-container");
    itinerary.forEach((day) => {
        // Create day header
        const dayTitle = document.createElement("h2");
        dayTitle.textContent = day.day;
        dayTitle.classList.add("schedule-day");
        container.appendChild(dayTitle);

        // Create table for each day
        const table = document.createElement("table");
        table.classList.add("schedule-table");
        // Create table header row
        const headerRow = document.createElement("tr");
        const timeHeader = document.createElement("th");
        timeHeader.textContent = "Thời gian";
        const activityHeader = document.createElement("th");
        activityHeader.textContent = "Hoạt động";
        headerRow.appendChild(timeHeader);
        headerRow.appendChild(activityHeader);
        table.appendChild(headerRow);

        // Create table rows for each schedule
        day.schedule.forEach((item) => {
            const row = document.createElement("tr");
            const timeCell = document.createElement("td");
            timeCell.textContent = item.time;
            const activityCell = document.createElement("td");
            activityCell.innerHTML = item.activity;
            row.appendChild(timeCell);
            row.appendChild(activityCell);
            table.appendChild(row);
        });

        // Append table to container
        container.appendChild(table);
    });
}

// Call render function to display itinerary
renderItinerary();
