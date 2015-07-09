#!/usr/bin/python
#encoding=utf-8
import bs4
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
from multiprocessing import Process , Queue , JoinableQueue

page_url = lambda n : 'http://www.urcosme.com/review/picked/index-4-'+str(n)+ '.htm'
os.chdir(os.path.join('fetched','urcosme'))


def fetch_feature(q,index,num_works):
    result_set = set()
    for x in xrange(1,num_works+1):
        n = 100*(index-1)+x
        file_name = 'index-4-'+str(n)+'.htm'
        print "working with %s "% file_name
        with open(file_name) as f :
            soup =  bs4.BeautifulSoup(f,"html.parser")
            for review in soup.find_all('div','contentpageReviewPickedReviewBlock'):
                try:
                    features =  review.ol.find_all('li')
                    for feature in features:
                        result_set.add(feature.text.encode('utf-8'))
                except:
                    pass
                        #print feature.text
    #print "#worker %d individual work done, sending results "%index
    q.put(result_set)
    print "#worker %d individual work done, result send#"%index
            #f.write(page.text.encode('utf-8'))


def main():

    num_page = 6000
    num_processes = 60
    num_works = num_page / num_processes
    q = JoinableQueue()
    pool = list()
    final_set = set()
    
    for index in xrange(1,num_processes+1):
        p =  Process(target=fetch_feature,args=(q,index,num_works))
        p.start()
    
    for index in xrange(1,num_processes+1):    
        final_set = final_set.union(q.get())
    
        #p.join()
    #    pool.append(p)
        
    #for p in pool:
    #   p.join()
    result_file = open('result.out','w');

    for feature in final_set:
        print feature
        result_file.write(feature+'\n')
   
    result_file.close()    
    print len(final_set)
   
if __name__=='__main__':
    main()
    print "after main"
