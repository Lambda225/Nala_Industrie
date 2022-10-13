from email import message
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField,TextAreaField
from wtforms.validators import DataRequired,Email


class FormContact(FlaskForm):
    nom = StringField('Nom',validators=[DataRequired()])
    mail = StringField('MAIL',validators=[DataRequired(),Email()])
    message = TextAreaField('Message',validators=[DataRequired()])
    submit = SubmitField('Envoyer') 