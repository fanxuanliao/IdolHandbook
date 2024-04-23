# 選擇一個有 Node.js 的基礎鏡像
FROM node:latest

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝項目依賴
RUN npm install

# 複製項目文件到工作目錄
COPY . .

# 開放 3000 端口
EXPOSE 3000

# 啟動 React 應用
CMD ["npm", "start"]

