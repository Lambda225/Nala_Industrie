from setting import app
from helpers import LazyView


app.add_url_rule('/',view_func=LazyView('views.home'))

app.add_url_rule('/entreprise',view_func=LazyView('views.entreprise'))

app.add_url_rule('/marque',view_func=LazyView('views.marque'))

app.add_url_rule('/vision',view_func=LazyView('views.vision'))

app.add_url_rule('/contact',view_func=LazyView('views.contact'))


if __name__ == '__main__':
    app.run(debug=True)