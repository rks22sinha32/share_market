from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import yfinance as yf
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================
# 1. DATABASE SETUP
# ==========================================
def init_db():
    conn = sqlite3.connect("academy.db") 
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            course TEXT,
            rating INTEGER,
            comment TEXT
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS enrollments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            course TEXT
        )
    ''')
    
    conn.commit()
    conn.close()

init_db()

# ==========================================
# 2. DATA MODELS
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
        {
            "level": "INTERMEDIATE", "duration": "6 weeks", "title": "Forex Trading",
            "desc": "Trade global currencies with precision.",
            "topics": ["Major & cross pairs", "Sessions & liquidity", "Carry & news trading", "Risk per trade models"]
        },
        {
            "level": "ADVANCED", "duration": "10 weeks", "title": "Algo Trading",
            "desc": "Build systems that trade for you.",
            "topics": ["Strategy design", "Backtesting engines", "Execution APIs", "Walk-forward validation"]
        },
        {
            "level": "INTERMEDIATE", "duration": "8 weeks", "title": "Options Trading",
            "desc": "Greeks, spreads and adjustments.",
            "topics": ["Option Chain", "Option Greek", "Bull Put Spred", "Strike"]
        },
        {
            "level": "BEGINNER", "duration": "6 weeks", "title": "Investment & Wealth",
            "desc": "Compound wealth the boring, proven way.",
            "topics": ["Fundamental screening", "Valuation models", "SIP & asset allocation", "Tax-efficient investing"]
        }
    ]

# --- REVIEWS API ---
@app.get("/api/reviews")
def get_reviews():
    conn = sqlite3.connect("academy.db")
    conn.row_factory = sqlite3.Row 
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, course, rating, comment FROM reviews")
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

@app.post("/api/reviews")
def add_review(review: Review):
    conn = sqlite3.connect("academy.db")
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO reviews (name, course, rating, comment)
        VALUES (?, ?, ?, ?)
    ''', (review.name, review.course, review.rating, review.comment))
    conn.commit()
    conn.close()
    return {"message": "Review added successfully!"}

@app.delete("/api/reviews/{review_id}")
def delete_review(review_id: int):
    conn = sqlite3.connect("academy.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM reviews WHERE id = ?", (review_id,))
    conn.commit()
    conn.close()
    return {"message": "Review deleted successfully!"}

# --- ENROLLMENTS API ---
@app.get("/api/enrollments")
def get_enrollments():
    conn = sqlite3.connect("academy.db")
    conn.row_factory = sqlite3.Row 
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM enrollments ORDER BY id DESC") 
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

@app.post("/api/enrollments")
def add_enrollment(enrollment: Enrollment):
    conn = sqlite3.connect("academy.db")
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO enrollments (name, email, phone, course)
        VALUES (?, ?, ?, ?)
    ''', (enrollment.name, enrollment.email, enrollment.phone, enrollment.course))
    conn.commit()
    conn.close()
    return {"message": "Student enrolled successfully!"}

@app.delete("/api/enrollments/{enrollment_id}")
def delete_enrollment(enrollment_id: int):
    conn = sqlite3.connect("academy.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM enrollments WHERE id = ?", (enrollment_id,))
    conn.commit()
    conn.close()
    return {"message": "Enrollment deleted successfully!"}