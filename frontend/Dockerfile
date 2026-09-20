# Base image Node.js ka use kar rahe hain
FROM node:20-alpine

# Container ke andar working directory set kar rahe hain
WORKDIR /app

# Dependencies install karne ke liye package.json copy karein
COPY package*.json ./
RUN npm install

# Baaki saara frontend code copy karein
COPY . .

# Next.js app ko build karein
RUN npm run build

# Port 3000 ko expose karein (kyunki Next.js ishi par chalta hai)
EXPOSE 3000

# App ko start karne ka command
CMD ["npm", "start"]