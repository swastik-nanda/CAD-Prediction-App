# Heart Disease Risk Assessment Tool

A comprehensive web application that predicts coronary artery disease (CAD) risk using machine learning. This tool analyzes various cardiac risk factors to provide users with an assessment of their heart disease risk.

## 🏥 About the Project

This application uses a machine learning model trained on cardiac health data to predict the likelihood of coronary artery disease. The model analyzes 13 key health parameters including chest pain type, blood pressure, cholesterol levels, and exercise stress test results to provide risk assessment.

**⚠️ Important Disclaimer:** This tool is for educational purposes only and should not replace professional medical advice. Always consult with healthcare professionals for proper cardiac evaluation.

## 🚀 Features

- **Interactive Risk Assessment Form** - User-friendly interface for inputting health data
- **Real-time Prediction** - Instant risk assessment using machine learning
- **Comprehensive Results** - Detailed risk analysis with actionable recommendations
- **Educational Content** - Information about coronary artery disease, risk factors, and prevention
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 📁 Project Structure

```
Diabetes Prediction Model/
├── frontend/                 # React.js frontend application
│   ├── components/          # Reusable React components
│   ├── context/            # React context for state management
│   ├── dist/               # Production build files
│   ├── node_modules/       # Frontend dependencies
│   ├── pages/              # Page components
│   ├── public/             # Static assets
│   ├── src/                # Source code
│   │   ├── assets/         # Images and static files
│   │   ├── App.jsx         # Main App component
│   │   ├── index.css       # Global styles
│   │   └── main.jsx        # Application entry point
│   ├── utils/              # Utility functions
│   ├── .env                # Environment variables
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
├── backend/                 # Node.js/Express backend
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Data models
│   ├── routes/             # API routes
│   ├── utils/              # Backend utilities
│   ├── .env                # Backend environment variables
│   ├── package.json        # Backend dependencies
│   └── server.js           # Server entry point
├── model/                   # Machine learning model
│   ├── heart_disease_model.pkl  # Trained ML model
│   ├── predict.py          # Python prediction script
│   ├── requirements.txt    # Python dependencies
│   └── runtime.txt         # Python version
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🩺 Input Parameters Guide

Understanding the health parameters used in the risk assessment:

### Basic Information
- **Age**: Your current age in years
  - *Risk increases with age (men 45+, women 55+)*

- **Sex**: Biological sex
  - *Male (1) / Female (0)*
  - *Men generally have higher risk at younger ages*

### Chest Pain Assessment
- **Chest Pain Type (cp)**:
  - **Typical Angina (1)**: Classic chest pain related to reduced blood flow to heart
  - **Atypical Angina (2)**: Chest pain not fitting typical pattern
  - **Non-Anginal Pain (3)**: Chest pain not related to heart
  - **Asymptomatic (4)**: No chest pain symptoms

### Vital Signs & Lab Results
- **Resting Blood Pressure (trestbps)**: Blood pressure when at rest (mm Hg)
  - *Normal: <120, Elevated: 120-129, High: 130+*

- **Cholesterol (chol)**: Serum cholesterol level (mg/dl)
  - *Desirable: <200, Borderline: 200-239, High: 240+*

- **Fasting Blood Sugar > 120 mg/dl (fbs)**:
  - *Yes (1) / No (0)*
  - *Indicates potential diabetes risk*

### Cardiac Function Tests
- **Resting ECG (restecg)**: Electrocardiogram results at rest
  - **Normal (0)**: Normal heart rhythm
  - **ST-T Wave Abnormality (1)**: Minor heart rhythm irregularities
  - **Left Ventricular Hypertrophy (2)**: Enlarged heart muscle

- **Max Heart Rate Achieved (thalach)**: Maximum heart rate during exercise test
  - *Age-predicted max: 220 - age*
  - *Lower values may indicate heart problems*

- **Exercise-Induced Angina (exang)**: Chest pain during exercise
  - *Yes (1) / No (0)*
  - *Indicates reduced blood flow during physical stress*

### Stress Test Results
- **ST Depression (oldpeak)**: ECG changes during exercise (0.0-6.2)
  - *Measures how much the ST segment drops during exercise*
  - *Higher values indicate more severe heart problems*

- **Slope of ST Segment (slope)**: Pattern of ST segment during peak exercise
  - **Upsloping (1)**: Normal response
  - **Flat (2)**: Mild concern
  - **Downsloping (3)**: Indicates heart disease

### Advanced Cardiac Assessment
- **Number of Major Vessels (ca)**: Vessels colored by cardiac catheterization (0-3)
  - *Number of major coronary arteries with significant blockage*
  - *0 = no blockage, 3 = three vessels blocked*

- **Thalassemia (thal)**: Blood disorder test result
  - **Normal (3)**: Normal blood flow
  - **Fixed Defect (6)**: Permanent heart muscle damage
  - **Reversible Defect (7)**: Temporary reduced blood flow

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm or yarn package manager

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Machine Learning Model Setup
```bash
cd model
pip install -r requirements.txt
python predict.py
```

## 🔧 Technologies Used

### Frontend
- **React.js** - User interface framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing

### Machine Learning
- **Python** - Programming language
- **Scikit-learn** - Machine learning library
- **Pandas** - Data manipulation
- **NumPy** - Numerical computing

## 📊 Model Information

The machine learning model uses a **Random Forest Classifier** trained on the Cleveland Heart Disease dataset. The model achieves high accuracy in predicting coronary artery disease risk based on the 13 input parameters.

**Model Performance:**
- Training accuracy: ~85-90%
- Cross-validation score: ~82-87%
- Features: 13 cardiac risk factors
- Output: Binary classification (0 = Low Risk, 1 = High Risk)

## 🚀 Deployment

The application is configured for deployment on platforms like:
- **Frontend**: Vercel, Netlify
- **Backend**: Heroku, Railway
- **Model**: Python runtime with pickle support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚕️ Medical Disclaimer

This application is designed for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

## 📸 Screenshots


## 📞 Support & Contact

If you have any questions, suggestions, or need support:

- **Email**: [swastik2004nanda@gmail.com](mailto:swastik2004nanda@gmail.com)
- **GitHub Issues**: Open an issue in this repository
- **Bug Reports**: Please include detailed steps to reproduce the issue

For medical questions or concerns about your heart health, please consult with healthcare professionals.

---

**Made with ❤️ for better heart health awareness**
