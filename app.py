from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, DevOps Team! Yeh hamara naya Python project hai."

@app.route('/status')
def status():
    return "System is running perfectly."

if __name__ == '__main__':
    # Yeh app port 5000 par chalegi
    app.run(host='0.0.0.0', port=5000)
