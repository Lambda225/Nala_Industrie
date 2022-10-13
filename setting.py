from flask import Flask
from flask_mail import Mail


app = Flask(__name__)

app.config['SECRET_KEY'] = 'dff6bbd78e0046e8a15a43dcf3eec2f1'

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEBUG'] = True
app.config['MAIL_USERNAME'] = 'parfaitk02@gmail.com'
app.config['MAIL_PASSWORD'] = 'parfait2000'
app.config['MAIL_MAX_EMAILS'] = None
app.config['MAIL_SUPPRESS_SEND'] = False
app.config['MAIL_ASCII_ATTACHMENTS'] = False

mail = Mail(app)