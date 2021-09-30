import config
from flask import Flask
from flask_cors import cross_origin

app = Flask(__name__)


@app.route('/')
@cross_origin()
def report():
    c = config.Config("./config.json")
    conf = c.read()
    return conf


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    app.run(
        "localhost",
        9000
    )
# d = doc.Doc(conf, "应用系统运维报告")
# d.cover()
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
