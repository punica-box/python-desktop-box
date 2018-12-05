#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
from flask_jsglue import JSGlue
from flask import Flask, render_template, request, url_for

static_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
template_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
app = Flask('Pikachu Box', static_folder=static_folder, template_folder=template_folder)
jsglue = JSGlue()
jsglue.init_app(app)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5001)
