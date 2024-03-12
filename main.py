from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return "Hello, World!"

@app.route('/send_image', methods=['POST'])
def image_receive():
    image = request.files['image']
    image.save('static/image.png')
    return {"data": "Image received"}

if __name__ == '__main__':
    app.run(debug=True)     