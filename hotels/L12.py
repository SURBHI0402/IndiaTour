import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pickle

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

# Make predictions on the test set
y_pred = classifier.predict(X_test)

# Calculate the accuracy of the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)

# Take user inputs for State, District, Price, and Stars
user_state = input("Enter the State: ")
user_district = input("Enter the District: ")
user_price = float(input("Enter the Price: "))
user_stars = float(input("Enter the Stars: "))

# Check if the user-provided State and District are available in the dataset
if user_state not in data['State'].unique():
    print("The State you are searching for is not available.")
elif user_district not in data['District'].unique():
    print("The District you are searching for is not available.")
else:
    # Find the nearest price and stars values in the dataset
    nearest_data = data.iloc[(data['Price'] - user_price).abs().argsort()[:3]]
    nearest_data = nearest_data.iloc[(nearest_data['Stars'] - user_stars).abs().argsort()[:3]]

    # Get the hotel names from the nearest data
    recommendations = nearest_data['Name'].tolist()

    print("Top 3 recommended hotels:")
    for i, recommendation in enumerate(recommendations):
        print(f"{i+1}. {recommendation}")


#model save

f=open("hotel.model","wb")
pickle.dump(classifier,f)
f.close()