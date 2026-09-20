# Python ka lightweight official image
FROM python:3.10-slim

# Container ke andar working directory set karein
WORKDIR /app

# Dependencies install karne ke liye requirements.txt copy karein
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Backend ka saara code copy karein
COPY . .

# FastAPI default port 8000 par chalta hai, isko expose karein
EXPOSE 8000

# FastAPI server ko start karne ka command (host 0.0.0.0 zaroori hai Docker ke liye)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]