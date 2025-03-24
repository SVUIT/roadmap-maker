# Sử dụng image Node.js 14 chính thức từ Docker Hub
FROM node:14

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json vào thư mục làm việc
COPY package.json ./

# Cài đặt các phụ thuộc của ứng dụng
RUN npm install

# Sao chép toàn bộ mã nguồn của ứng dụng vào thư mục làm việc
COPY . .

# Mở cổng mà ứng dụng sẽ chạy trên container
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]