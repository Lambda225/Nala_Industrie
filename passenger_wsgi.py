import sys,os

INTERP = "Nala_Industrie/myenv/Scripts/python"

if sys.executable != INTERP: os.execl(INTERP, INTERP, *sys.argv)

from setting import app as application
