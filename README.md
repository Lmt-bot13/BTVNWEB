## Họ và tên: Lưu Minh Trí

## Lớp: K59.KMT.K01

## Môn học: Lập trình web

# Bài 1

1. giả lập linux os: hyperV, virtualBox, vmware, wsl

2. cài đặt docker compose trên os đó

3. cài trên docker compose : các dịch vụ: nginx, nodered, mariadb, phpmyadmin, cloudflared (cần domain xịn)

4. cấu hình nginx có thể chạy 2 website  với 2 domain khác nhau.

   
Cài đặt và giả lập máy chủ ubutu

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/80802938-9de6-48dd-a081-2af62ed5fad1" />


Cài đặt docker 

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/6d7809f1-7de0-4118-8cc4-2756ee13a4ae" />

Tạo đường hầm Cloudfare tới máy chủ ubutu

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/6e95c2e8-98ee-44ad-922d-97d303b3618a" />

Tạo cấu hình file docker-compose

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/46f38b5b-02ff-4c33-9c1a-d46d3f911cb7" />

Khởi tạo và chạy các dịch vụ

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/17c25a70-063f-4223-adf9-668b08c7bc78" />


Tạo thư mục và cấu hình nginx cho 2 web:

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/6e5a824a-6c69-4b6a-a221-3df9a0a2112f" />

Cấu hình route cho 2 trang web chạy trên  2 domain

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/b8f97845-ebfb-41a1-8964-c37f3e9aa6a8" />

Code nội dung cho 2 web

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/7063baac-1c95-49e4-91f6-c1974de16ba8" />

Chạy 2 web trên 2 domain

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/b6b0e8b0-96de-4ab5-97a6-526b7cbe420d" />

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/e5663783-086e-4b72-b99c-d3048f3e2071" />


# Bài 2

Sử dụng nodered: dùng node http_in + http_response => tạo api đơn giản

Cấu hình http in

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/02237f14-c9e0-438e-a837-aea86068e2fe" />

Tạo json trả về

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/5f78b56a-2d16-4605-8935-b4ab3cfc095b" />

Tạo http response

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/3ba84305-e2c4-4e05-b543-7c3bf722174c" />


Code js vào trang html để gọi đc api trên

<img width="1917" height="1063" alt="image" src="https://github.com/user-attachments/assets/befe7142-c2b6-4ba8-8b32-5592502bb870" />

Gọi API 

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/155f9eae-64be-4327-8276-00a3e52387b2" />



