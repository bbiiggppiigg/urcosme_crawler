#!/usr/bin/python
#encoding=utf-8
import urllib2
import sys
import os
import re
import time
import json
import chardet
import requests
import re
import random
from multiprocessing import Process , Queue

page_url = lambda n : 'http://www.urcosme.com/review/picked/index-4-'+str(n)+ '.htm'
os.chdir(os.path.join('fetched','urcosme'))


def fetch_page(q,n):
    url = page_url(n)
    file_name = 'index-4-'+str(n)+'.htm'
    page = requests.get(url)
    with open(file_name,"w") as f :
        f.write(page.text.encode('utf-8'))


def main():

    end_page = 6000
    q = Queue()
    
    for n in xrange(1944,end_page+1):
        p =  Process(target=fetch_page,args=(q,n))
        p.start()
        print n
if __name__=='__main__':
    main()

