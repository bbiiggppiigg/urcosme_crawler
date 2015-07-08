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
import MySQLdb
import random
#class UserReview:
#    def __init__(self):


page_url = lambda n : 'http://www.urcosme.com/review/picked/index-4-'+str(n)+ '.htm'
collected_features = set()

end_page = 6000
#test_file = open("feature_list_6000.out","w")
num_of_features = len(collected_features)

for n in xrange(1,end_page+1):
    r = requests.get(page_url(n))
    content = r.content
    soup =  bs4.BeautifulSoup(r.text,"html.parser")
    i = 0
    for review in soup.find_all('div','contentpageReviewPickedReviewBlock'):
        i = i+1
        try:
            features =  review.ol.find_all('li')
            for feature in features:
                collected_features.add(feature.text)
                if(len(collected_features) > num_of_features):
                    num_of_features = len(collected_features)
                    with open("feature_list_6000.out","a") as myfile:
                        myfile.write(feature.text.encode('utf-8')+'\n')
                    #test_file.write()
        except:
            pass
    
    if(n%10 ==0 ):
        print n
        time.sleep(random.randint(1,3))
test_file.close()

#for collected_feature in collected_features:
#    print collected_feature.encode('utf-8')
#print len(collected_features)
        #sys.stderr.write('Error occured while fetching %s\n' % page_url(n))
        #continue

