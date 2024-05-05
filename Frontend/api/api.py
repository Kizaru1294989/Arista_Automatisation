# from flask import Flask
# from sklearn import datasets
# from sklearn.model_selection import train_test_split
# from sklearn.neighbors import KNeighborsClassifier

# app = Flask(__name__)

# @app.route('/api/route')

# def predict():
#     iris = datasets.load_iris()
#     x = iris.data
#     y = iris.target
    
#     X_train, X_test , y_train , y_test = train_test_split(X,y,test_size=0.2,random_state=42)
    
#     km = KNeighborsClassifier(n_neighbors=3)
#     km.fit(X_train,y_train)
#     acuracy = km.score(X_test, y_test)
#     return {'accuracy': acuracy}

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/hello')
def hello():
    return jsonify({'message': 'Hello from Flask!'})

if __name__ == '__main__':
    app.run(debug=True)