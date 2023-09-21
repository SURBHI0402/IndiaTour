from flask import Flask, request, jsonify
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

app = Flask(__name__)

# Load the dataset
data = pd.read_csv("hotels1.csv")  # Replace "your_dataset.csv" with your actual dataset file

# Preprocess the data
X = data[['State', 'District', 'Price', 'Stars']]
y = data['Name']

# Convert categorical variables to numerical using one-hot encoding
X = pd.get_dummies(X)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a Random Forest Classifier
classifier = RandomForestClassifier()

# Train the classifier
classifier.fit(X_train, y_train)

# Recommendation route
@app.route('/recommend', methods=['POST'])
def recommend():
    # Get user inputs from the form
    user_state = request.json['state']
    user_district = request.json['district']
    user_price = float(request.json['price'])
    user_stars = float(request.json['stars'])

    # Check if the user-provided State and District are available in the dataset
    if user_state not in data['State'].unique():
        return jsonify({'error': 'The State you are searching for is not available.'})
    elif user_district not in data['District'].unique():
        return jsonify({'error': 'The District you are searching for is not available.'})
    else:
        # Find the nearest price and stars values in the dataset
        nearest_data = data.iloc[(data['Price'] - user_price).abs().argsort()[:3]]
        nearest_data = nearest_data.iloc[(nearest_data['Stars'] - user_stars).abs().argsort()[:3]]

        # Get the hotel names from the nearest data
        recommendations = nearest_data['Name'].tolist()

        return jsonify({'recommendations': recommendations})

if __name__ == '__main__':
    app.run(debug=True)
