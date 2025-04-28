FROM node:18

# Tạo thư mục app
WORKDIR /usr/src/app

# Copy package trước để tránh rebuild nhiều
COPY package*.json ./

# Cài thư viện
RUN npm install --legacy-peer-deps

# Copy toàn bộ code (dùng để build nếu cần)
COPY . .

# Không cần build nếu dùng start:dev
# RUN npm run build

# Chạy app ở chế độ dev
CMD ["npm", "run", "start:dev"]
