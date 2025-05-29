from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

model = joblib.load("heart_disease_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    features = np.array([[ 
        data["age"], data["sex"], data["cp"], data["trestbps"], data["chol"],
        data["fbs"], data["restecg"], data["thalach"], data["exang"],
        data["oldpeak"], data["slope"], data["ca"], data["thal"]
    ]])
    prediction = model.predict(features)
    return jsonify({"prediction": int(prediction[0])})

@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"status": "Flask API is running!"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)