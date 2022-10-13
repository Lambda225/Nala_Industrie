from setting import mail
from flask import render_template,url_for,redirect,flash
from flask_mail import Message
from forms import FormContact


def home():
    return render_template('home.html')
    
def entreprise():
    return render_template('entreprise.html')


def marque():
    return render_template('marques.html')

def vision():
    return render_template('export.html')

def contact():
    form = FormContact()
    if form.validate_on_submit():
        msg = Message("Formulaire de contact Nala Industries",
                    sender = form.mail.data,
                    recipients=["parfaitk02@gmail.com"])
        msg.body = f"{form.nom.data}: \n \t {form.message.data} "
        msg.html = f"<b>{form.nom.data}</b>: <br>  {form.message.data} <br> {form.mail.data}"
        mail.send(msg)
        flash("Message Evoyer",'Succès')
        form.nom.data = ''
        form.mail.data = ''
        form.message.data = ''
        return render_template('contact.html',  form = form)
    return render_template('contact.html',form = form)


