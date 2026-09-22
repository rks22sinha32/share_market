from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import yfinance as yf
import os
import libsql_client  # ✨ Nayi Turso library!

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================
# ✨ NAYA: Turso Client Helper Function
# Yeh function humein baar-baar connection likhne se bachayega
# ==========================================
# ==========================================
# ✨ NAYA: Turso Client Helper Function
# ==========================================
def get_db_client():
    # Dekhiye, maine yahan se aapka lamba wala URL aur Token hata diya hai.
    # Ab yeh sirf environment variables (Render) se aayega.
    url = os.environ.get("TURSO_DATABASE_URL")
    token = os.environ.get("TURSO_AUTH_TOKEN")
    
    if not url or not token:
        print("⚠️ Warning: Turso credentials missing in environment variables!")
    return libsql_client.create_client_sync(url=url, auth_token=token)

# ==========================================
# 1. DATABASE SETUP (Turso version)
# ==========================================
def init_db():
    try:
        client = get_db_client()
        client.execute('''
            CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                course TEXT,
                rating INTEGER,
                comment TEXT
            )
        ''')
        client.execute('''
            CREATE TABLE IF NOT EXISTS enrollments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT,
                phone TEXT,
                course TEXT
            )
        ''')
        print("✅ Cloud Database tables initialized successfully!")
    except Exception as e:
        print(f"Database init error: {e}")

init_db()

# ==========================================
# 2. DATA MODELS (Same as before)
# ==========================================
class Review(BaseModel):
    name: str
    course: str
    rating: int
    comment: str

class Enrollment(BaseModel):
    name: str
    email: str
    phone: str
    course: str

# ==========================================
# 3. FASTAPI ENDPOINTS
# ==========================================

@app.get("/api/live-stocks")
def get_live_stocks():
    stock_symbols = [
        {"name": "RELIANCE", "symbol": "RELIANCE.NS"},
        {"name": "HDFC BANK", "symbol": "HDFCBANK.NS"},
        {"name": "TATA MOTORS", "symbol": "TATAMOTORS.NS"},
        {"name": "INFY", "symbol": "INFY.NS"},
        {"name": "SENSEX", "symbol": "^BSESN"},
        {"name": "NIFTY 50", "symbol": "^NSEI"}
    ]
    
    live_ticker_data = []
    for stock in stock_symbols:
        try:
            ticker_info = yf.Ticker(stock["symbol"])
            today_data = ticker_info.history(period="1d")
            
            if not today_data.empty:
                current_price = float(today_data['Close'].iloc[-1])
                open_price = float(today_data['Open'].iloc[0])
                change_percent = float(((current_price - open_price) / open_price) * 100)
                
                live_ticker_data.append({
                    "name": stock["name"],
                    "price": f"₹{current_price:.2f}",
                    "change": f"{change_percent:+.2f}%",
                    "up": bool(change_percent >= 0)
                })
        except Exception as e:
            print(f"Error in {stock['name']}: {e}")
            
    return live_ticker_data
    
@app.get("/api/courses")
def get_courses():
    return [
        {
            "level": "ALL LEVELS", "duration": "8 weeks", "title": "Price Action Mastery",
            "desc": "Read raw markets without indicators.",
            "topics": ["Market structure", "Supply & demand zones", "Liquidity concepts", "Risk Management"]
        },
        # ... baaki courses wahi hain ...
        {
            "level": "BEGINNER", "duration": "6 weeks", "title": "Investment & Wealth",
            "desc": "Compound wealth the boring, proven way.",
            "topics": ["Fundamental screening", "Valuation models", "SIP & asset allocation", "Tax-efficient investing"]
        }
    ]

# --- REVIEWS API (Turso version) ---
@app.get("/api/reviews")
def get_reviews():
    client = get_db_client()
    result = client.execute("SELECT id, name, course, rating, comment FROM reviews")
    
    reviews = []
    for row in result.rows:
        reviews.append({
            "id": row[0],
            "name": row[1],
            "course": row[2],
            "rating": row[3],
            "comment": row[4]
        })
    return reviews

@app.post("/api/reviews")
def add_review(review: Review):
    client = get_db_client()
    client.execute('''
        INSERT INTO reviews (name, course, rating, comment)
        VALUES (?, ?, ?, ?)
    ''', [review.name, review.course, review.rating, review.comment])
    return {"message": "Review added successfully!"}

@app.delete("/api/reviews/{review_id}")
def delete_review(review_id: int):
    client = get_db_client()
    client.execute("DELETE FROM reviews WHERE id = ?", [review_id])
    return {"message": "Review deleted successfully!"}

# --- ENROLLMENTS API (Turso version) ---
@app.get("/api/enrollments")
def get_enrollments():
    client = get_db_client()
    result = client.execute("SELECT id, name, email, phone, course FROM enrollments ORDER BY id DESC")
    
    enrollments = []
    for row in result.rows:
        enrollments.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "phone": row[3],
            "course": row[4]
        })
    return enrollments

@app.post("/api/enrollments")
def add_enrollment(enrollment: Enrollment):
    client = get_db_client()
    client.execute('''
        INSERT INTO enrollments (name, email, phone, course)
        VALUES (?, ?, ?, ?)
    ''', [enrollment.name, enrollment.email, enrollment.phone, enrollment.course])
    return {"message": "Student enrolled successfully!"}

@app.delete("/api/enrollments/{enrollment_id}")
def delete_enrollment(enrollment_id: int):
    client = get_db_client()
    client.execute("DELETE FROM enrollments WHERE id = ?", [enrollment_id])
    return {"message": "Enrollment deleted successfully!"}