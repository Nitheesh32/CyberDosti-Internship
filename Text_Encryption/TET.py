from tkinter import *
from tkinter import messagebox
import base64
import  os

def decrypt():
    password = code.get()

    if password == "1234":
        window2 = Toplevel(window)
        window2.title("decryption")
        window2.geometry("400x200")
        window2.configure(bg="#00bd56")

        message = text1.get(1.0,END)
        decode_message = message.encode("ascii")
        base64_bytes = base64.b64decode(decode_message)
        decrypt = base64_bytes.decode("ascii")

        Label(window2, text="DECRYPT", font=('arial',10,'bold'), fg="white", bg="#00bd56").place(x=10, y=0)
        text2 = Text(window2, font="Roboto", bg="white", relief=GROOVE, wrap=WORD, bd=0)
        text2.place(x=10, y=40, width=380, height=150)

        text2.insert(END, decrypt)
    elif password == "":
        messagebox.showerror("encryption", "input Password")
    elif password != "1234":
        messagebox.showerror("encryption", "Invalid Password")

def encrypt():
    password = code.get()

    if password == "1234":
        window1 = Toplevel(window)
        window1.title("Encryption")
        window1.geometry("400x200")
        window1.configure(bg="#ed3833")

        message = text1.get(1.0,END)
        encode_message = message.encode("ascii")
        base64_bytes = base64.b64encode(encode_message)
        encrypt = base64_bytes.decode("ascii")

        Label(window1, text="ENCRYPT", font=('arial',10,'bold'), fg="white", bg="#ed3833").place(x=10, y=0)
        text2 = Text(window1, font="Roboto", bg="white", relief=GROOVE, wrap=WORD, bd=0)
        text2.place(x=10, y=40, width=380, height=150)

        text2.insert(END, encrypt)
    elif password == "":
        messagebox.showerror("encryption", "Input Password")
    elif password != "1234":
        messagebox.showerror("encryption", "Invalid Password")


def main_screen():
    global window
    global code
    global text1

    window = Tk()
    window.geometry("375x398")
    window.title("Text Encryption Tool")

    key = PhotoImage(file='logo.png')
    window.iconphoto(True, key)
    window.config(background="#59f1ff")

    Label(text="Enter the text", fg="black", bg="#59f1ff",font=("Roboto", 13)).place(x=10, y=10)
    text1 = Text(font="Roboto 20", bg="white", relief=GROOVE, wrap=WORD, bd=0)
    text1.place(x=10, y=50, width=350, height=100)

    Label(text="Enter the secret key", fg='black', bg="#59f1ff", font=("Roboto", 13)).place(x=10, y=170)

    code = StringVar()
    Entry(textvariable=code, width=19, bd=0, font=("arial", 25), show="*").place(x=10, y=200)

    def reset():
        code.set("")
        text1.delete(1.0, END)

    Button(text="ENCRYPT", height="2", width=23, bg="#ed3833", fg="white", bd=0, command=encrypt, relief=RAISED, font=('arial',9,'bold')).place(x=10, y=250)
    Button(text="DECRYPT", height="2", width=23, bg="#00bd56", fg="white", bd=0, command=decrypt, relief=RAISED, font=('arial',9,'bold')).place(x=200, y=250)
    Button(text="RESET", height="2", width=50, bg="#1089ff", fg="white", bd=0, command=reset, relief=RAISED, font=('arial',9,'bold')).place(x=10,y=300)

    window.mainloop()

main_screen()