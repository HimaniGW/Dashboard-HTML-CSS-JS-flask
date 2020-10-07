from flask import Flask, render_template, request
app = Flask(__name__)



@app.route('/dashboard',methods = ['POST', 'GET'])
def student():
    send_list = str("10, 8, 12, 4, 11, 10, 6, 14, 20")
    pie_list = str("25, 35, 40")
    bar_list = str("40, 50,20 ,10,80,90,98,20,75,64,20,84,65,45,80")
    # print(str(send_list))
    if request.method == 'POST':
        return render_template('dash.html',hc = str(send_list),datapie= str(pie_list), databar=str(bar_list))
    return render_template('dash.html',hc = str(send_list), datapie = str(pie_list),databar=str(bar_list))



if __name__ == '__main__':
   app.run(debug = True)