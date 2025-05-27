import React, { useState } from "react";
import ResultDisplay from "./ResultDisplay";
import InfoSection from "./InfoSection";
import FormInput from "./FormInput";

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: Number(formData.age),
          sex: Number(formData.sex),
          cp: Number(formData.cp),
          trestbps: Number(formData.trestbps),
          chol: Number(formData.chol),
          fbs: Number(formData.fbs),
          restecg: Number(formData.restecg),
          thalach: Number(formData.thalach),
          exang: Number(formData.exang),
          oldpeak: Number(formData.oldpeak),
          slope: Number(formData.slope),
          ca: Number(formData.ca),
          thal: Number(formData.thal),
        }),
      });

      const resultData = await response.json();
      setResult(resultData.prediction); // 1 or 0
    } catch (error) {
      console.error("Prediction API error:", error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      age: "",
      sex: "",
      cp: "",
      trestbps: "",
      chol: "",
      fbs: "",
      restecg: "",
      thalach: "",
      exang: "",
      oldpeak: "",
      slope: "",
      ca: "",
      thal: "",
    });
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-300">
        <div className="bg-blue-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            Heart Disease Risk Assessment
          </h2>
          <p className="text-blue-100 text-sm mt-1">
            Enter your health data below for a heart disease risk prediction
          </p>
        </div>

        {result === null ? (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                name="age"
                label="Age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
              />

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Sex
                </label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Chest Pain Type (cp)
                </label>
                <select
                  name="cp"
                  value={formData.cp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="0">Typical Angina</option>
                  <option value="1">Atypical Angina</option>
                  <option value="2">Non-anginal Pain</option>
                  <option value="3">Asymptomatic</option>
                </select>
              </div>

              <FormInput
                name="trestbps"
                label="Resting Blood Pressure (mm Hg)"
                type="number"
                value={formData.trestbps}
                onChange={handleChange}
                required
              />
              <FormInput
                name="chol"
                label="Cholesterol (mg/dl)"
                type="number"
                value={formData.chol}
                onChange={handleChange}
                required
              />

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Fasting Blood Sugar &gt; 120 mg/dl
                </label>
                <select
                  name="fbs"
                  value={formData.fbs}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Resting ECG
                </label>
                <select
                  name="restecg"
                  value={formData.restecg}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="0">Normal</option>
                  <option value="1">ST-T Wave Abnormality</option>
                  <option value="2">Left Ventricular Hypertrophy</option>
                </select>
              </div>

              <FormInput
                name="thalach"
                label="Max Heart Rate Achieved"
                type="number"
                value={formData.thalach}
                onChange={handleChange}
                required
              />

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Exercise-Induced Angina
                </label>
                <select
                  name="exang"
                  value={formData.exang}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <FormInput
                name="oldpeak"
                label="ST Depression (oldpeak)"
                type="number"
                value={formData.oldpeak}
                onChange={handleChange}
                step="0.1"
                required
              />

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Slope of ST Segment
                </label>
                <select
                  name="slope"
                  value={formData.slope}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="0">Upsloping</option>
                  <option value="1">Flat</option>
                  <option value="2">Downsloping</option>
                </select>
              </div>

              <FormInput
                name="ca"
                label="Number of Major Vessels (0–3)"
                type="number"
                min="0"
                max="3"
                value={formData.ca}
                onChange={handleChange}
                required
              />

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Thalassemia
                </label>
                <select
                  name="thal"
                  value={formData.thal}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="3">Normal</option>
                  <option value="6">Fixed Defect</option>
                  <option value="7">Reversible Defect</option>
                </select>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                disabled={isLoading}
              >
                {isLoading ? "Predicting..." : "Get Prediction"}
              </button>

              {showError && (
                <p className="mt-2 text-red-600 text-sm">
                  Please fill in all fields correctly.
                </p>
              )}
            </div>
          </form>
        ) : (
          <ResultDisplay result={result} onReset={resetForm} />
        )}
      </div>
      <InfoSection />
    </div>
  );
};

export default DiabetesForm;
