#!/usr/bin/python
import bs4
import urllib2
import sys
import os
import re
import time
import json
import chardet
import requests

#end_page  = int(sys.argv[1])/10 + 1;
page_url = lambda n : 'http://www.urcosme.com/review/picked/index-4-'+str(n)+ '.htm'

path = os.path.join('fetched','urcosme')

try:
    os.makedirs(path)
except:
    sys.stderr.write('Warning: "%s" already existed\n' % path)

#os.chdir(path)

sys.stderr.write('Crawling urcosme ...\n')
end_page = 1
test_file = open("out.html","w")
#print test_file
for n in xrange(1,end_page+1):
    try:
        r = requests.get(page_url(n))
        content = r.content
        #print r.content;
        #print content
        soup =  bs4.BeautifulSoup(r.text,"html.parser")
        #print soup.script
        #print r.text        
        #url = urllib2.urlopen(page_url(n));
        #page= url.read()
        #print page.decode('big5').encode('utf8')

#        test_file.write(r.text.encode('utf-8').strip())
#        test_file.close()
        i = 0
        for review in soup.find_all('div','contentpageReviewPickedReviewBlock'):
            i = i+1
            #for  review.find_all('div',{'class':'contentpageReviewPickedReviewBlockContent'})
            test_file.write(review.encode('utf-8').strip())
            product_name =  review.h4.a.text
            hearts_text = review.h3.em.font.text
            hearts = hearts_text[1:len(hearts_text)-1]
            reviewer_name = review.h3.a.text
            skin_type = review.h3
            info = skin_type.find_all('img',{'height':'20'})
            post_date = review.h3.find_all('img',{'height':'11'})
            
            skin_type = info[0].get('src')
            skin_type = info[0].get('src')[38:len(skin_type)-4]
            review_content = review.find('div','contentpageReviewPickedReviewBlockContent').div
            review_id = review_content.get('id')[13:]
            review_content_text = review_content.text
            features =  review.ol.find_all('li')
            popularity = review.find('p','read_statistics')
            reader = popularity.text[3:len(popularity.text)-4]
            num_pushes = review.strong.a.text
            access_to_test = review.ol.findNext('p').text.strip()
            
            print product_name
            print hearts
            print reviewer_name
            print skin_type
            
            print review_content_text
            print review_id
            for feature in features:
                print feature.text
            
            print reader
            print num_pushes
            print access_to_test
            if(i>0):
                test_file.close()
                break;
            #print str(i)+" "+str(review)
            print post_date
        

        #encoding = chardet.detect(page)
#        print encoding['encoding'];
#        print page.decode(encoding['encoding'])
    except Exception , e:
        print e
        #sys.stderr.write('Error occured while fetching %s\n' % page_url(n))
        #continue

