# Diabetes Prediction Model

A full-stack web application that predicts diabetes risk using machine learning algorithms. The application features a React.js frontend, Node.js/Express backend, and Python-based machine learning model.

## 🏗️ Project Structure

```
Diabetes Prediction Model/
├── backend/          # Node.js Express server
├── frontend/         # React.js application
├── model/           # Python ML model and scripts
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

## 🚀 Features

- **Machine Learning Model**: Trained model for diabetes prediction
- **REST API**: Backend API for model inference
- **Interactive Frontend**: User-friendly React interface
- **Real-time Predictions**: Instant diabetes risk assessment
- **Data Storage**: MongoDB integration for data persistence

## 🛠️ Technologies Used

### Frontend
- React.js
- HTML5/CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)

### Machine Learning
- Python
- Scikit-learn
- Pandas
- NumPy

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- Python (v3.7 or higher)
- MongoDB
- npm or yarn

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/diabetes-prediction-model.git
cd diabetes-prediction-model
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Model Setup
```bash
cd ../model
pip install -r requirements.txt
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd backend
npm start
```
The backend server will run on `http://localhost:5000`

### Start the Frontend Application
```bash
cd frontend
npm start
```
The React app will run on `http://localhost:5173`

### Run the ML Model (if needed)
```bash
cd model
python predict.py      # To make predictions
```

## 📡 API Endpoints

### Prediction Endpoint
```
POST /api/predict
```
**Request Body:**
```json
{
  "glucose": 120,
  "bloodPressure": 80,
  "skinThickness": 20,
  "insulin": 85,
  "bmi": 25.5,
  "diabetesPedigree": 0.5,
  "age": 35
}
```

**Response:**
```json
{
  "prediction": 0,
  "probability": 0.23,
  "risk_level": "Low"
}
```

## 🧪 Model Information

The machine learning model is trained on the Pima Indians Diabetes Database and uses various health parameters to predict diabetes risk:

- **Features**: Glucose level, Blood Pressure, Skin Thickness, Insulin, BMI, Diabetes Pedigree Function, Age
- **Algorithm**: [Specify your algorithm, e.g., Random Forest, Logistic Regression]
- **Accuracy**: [Add your model's accuracy score]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Pima Indians Diabetes Database
- React.js community
- Express.js community
- Scikit-learn contributors

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact [your-email@example.com].

---

**Note**: Make sure to set up your environment variables before running the application. Never commit sensitive information like database URLs or API keys to the repository.
