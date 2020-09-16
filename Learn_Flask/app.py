from flask import Flask, render_template

app = Flask(__name__)
# app = Flask(__name__, template_folder='.')

@app.route('/')
def homepage():
    return render_template("main.html")


if __name__ == "__main__":
    app.run()
