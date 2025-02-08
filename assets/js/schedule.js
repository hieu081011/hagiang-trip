const itinerary = [
    {
        day: "Ngày 1",
        schedule: [
            {
                time: "7:00 AM",
                activity: "Đến Hà Giang, nghỉ ngơi và ăn sáng",
            },
            {
                time: "7:30 AM",
                activity: "Xuất phát từ Hà Giang, đi Phó Bảng",
            },
            {
                time: "10:30 AM",
                activity: "Dốc Thẩm Mã (110km)",
                map: "https://maps.app.goo.gl/fZtBg15aLSz1FE359",
            },
            {
                time: "10:50 AM",
                activity: "Thăm quan thị trấn phó bảng (10km)",
                map: "https://maps.app.goo.gl/TDUGsgGmqbjduyGR6",
            },
            {
                time: "11:30 PM",
                activity:
                    "Làng văn hóa du lịch Lũng Cẩm, phim trường chuyện của PAO (4km)",
                map: "https://maps.app.goo.gl/D6vDfjbhghde1Luc7",
            },
            {
                time: "12:30 PM",
                activity: "Nhà hàng khánh Linh (800m), ăn trưa",
                map: "https://maps.app.goo.gl/BheyMSUompnXzXR99",
            },
            {
                time: "2:00 PM",
                activity: "Di chuyển về Homestay Maison (21km)",
                map: "https://maps.app.goo.gl/NAmWLhoxFSUf769r9",
            },
            {
                time: "3:30 PM",
                activity: "Điểm ngắm vườn hoa tam giác mạch (15km)",
                map: "https://maps.app.goo.gl/7RmvgfDz1mVkTyKW9",
            },
            {
                time: "4:00 PM",
                activity: "Lô lô chải (5km)",
                map: "https://maps.app.goo.gl/moniLEhg5bc5CAtQ7",
            },
            {
                time: "6:00 PM",
                activity: "Di chuyển về Homestay Maison (20km)",
                map: "https://maps.app.goo.gl/NAmWLhoxFSUf769r9",
            },
            {
                time: "7:30 PM",
                activity:
                    "Ăn tối tại Đồng Văn, thưởng thức đặc sản như cháo ấu tẩu, lẩu dê (3km)",
                map: "https://maps.app.goo.gl/s2AR2LxNFGUk2Ag58",
            },
            {
                time: "10:00 PM",
                activity: "Di chuyển về Homestay Maison (3km)",
            },
        ],
    },
    {
        day: "Ngày 2",
        schedule: [
            { time: "8:00 AM", activity: "Dậy sớm, ăn sáng tại Đồng Văn" },
            {
                time: "8:20 AM",
                activity: "Đỉnh đèo Mã Pí Lèng (10km)",
                map: "https://maps.app.goo.gl/Ge6W8mkhhjdQtes37",
            },
            {
                time: "11:00 AM",
                activity:
                    "Đổ đèo mã pì lèng, Sông nho Quế, hẻm Tu Sản (12.2km)",
                map: "https://maps.app.goo.gl/qdmWAg8oJifLuqpD9",
            },
            {
                time: "11:40 PM",
                activity: "Ăn trưa tại Mèo Vạc (12.4km)",
                map: "https://maps.app.goo.gl/d1NrS5r8WDgfSmds5",
            },
            {
                time: "1:30 PM",
                activity: "Cán lủng (13km)",
                map: "https://maps.app.goo.gl/JavHqQraNid2acS16",
            },
            {
                time: "2:30 PM",
                activity: "quay lại mèo vạc, đi thăm huyện (13km)",
                map: "https://maps.app.goo.gl/d1NrS5r8WDgfSmds5",
            },
            {
                time: "4:40 PM",
                activity: "Nghỉ chân 20p tại Nhà Hàng Giang Điệp 1976 (58.2km)",
                map: "https://maps.app.goo.gl/1YpSLq47V7e7gb9p7",
            },
            {
                time: "5:30 PM",
                activity:
                    "Di chuyển về Homestay, nghỉ đêm tại Yên Minh (14.4km), ăn tối, đi chơi xung quanh tùy thời gian",
                map: "https://maps.app.goo.gl/1bCXVofX2MJ3nwWR6",
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
            activityCell.innerHTML = !item.map
                ? item.activity
                : item.activity +
                  "<br>" +
                  `<a target="_blank" href="${item.map}">Xem bản đồ</a>`;
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
