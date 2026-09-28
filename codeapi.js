// Hàm gọi API chuẩn JS Fetch
    async function callApi() {
        const statusText = document.getElementById('status-text');
        const jsonOutput = document.getElementById('json-output');

        statusText.innerText = "Đang tải...";
        statusText.style.color = "orange";

        try {
            // Gọi API đồng tên miền qua Nginx proxy (Không bao giờ bị lỗi CORS)
            const response = await fetch('/api/sensors');

            if (!response.ok) {
                throw new Error('Mã lỗi HTTP: ' + response.status);
            }

            // Chuyển kết quả sang JSON
            const data = await response.json();

            // Hiển thị ra màn hình
            statusText.innerText = "Thành công 100%!";
            statusText.style.color = "green";
            jsonOutput.innerText = JSON.stringify(data, null, 4);

        } catch (error) {
            console.error('Lỗi JS:', error);
            statusText.innerText = "Thất bại!";
            statusText.style.color = "red";
            jsonOutput.innerText = "Lỗi: " + error.message + "\n\n(Hãy đảm bảo bạn đã tạo Node GET /api/sensors trong Node-RED và bấm Deploy)";
        }
    }

    // Tự động gọi API khi load trang
    window.onload = callApi;