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

#class UserReview:
#    def __init__(self):


page_url = lambda n : 'http://www.urcosme.com/review/picked/index-4-'+str(n)+ '.htm'
collected_features = set()

end_page = 1
#test_file = open("out.html","w")
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
        #print 'hi'
        i = 0
        for review in soup.find_all('div','contentpageReviewPickedReviewBlock'):
            i = i+1
            #for  review.find_all('div',{'class':'contentpageReviewPickedReviewBlockContent'})
            #print('hello')
            #test_file.write(review.encode('utf-8').strip())
            product_name =  review.h4.a.text
            
            stars_text = review.h3.em.font.text
            stars = int(stars_text[1:len(stars_text)-1])
            reviewer_name = review.h3.a.text
            temp_text = review.h3.encode('utf-8')
            skin_type = review.h3
            info = skin_type.find_all('img',{'height':'20'})

            pattern = '\d\d\d\d-\d\d-\d\d \d\d:\d\d'
            post_date = re.search(pattern,str(review.h3.find('img',{'height':'11'}))).group(0) 
            
            temp_index = temp_text.find('</a>')+4;
            temp_string =  temp_text[temp_index:];
            skin_start_index = temp_string.find('/>')+2
            temp_string = temp_string[skin_start_index:]
            skin_end_index = temp_string.find('<img')
            skin_string = temp_string[:skin_end_index]
            skin_type = skin_string[3:len(skin_string)-4]
            age_start_index = temp_string.find('/>')+3
            age_end_index = temp_string.find('<h3>')-7
            
            age = int(temp_string[age_start_index:age_end_index])
            
            review_content = review.find('div','contentpageReviewPickedReviewBlockContent').div
            review_id = int(review_content.get('id')[13:])
            review_content_text = review_content.text
            features =  review.ol.find_all('li')
            popularity = review.find('p','read_statistics')
            try:
                num_readers = int(popularity.text[3:len(popularity.text)-4])
            except:
                num_readers = 0;

            num_pushes = int(review.strong.a.text)
            access_to_test = review.ol.findNext('p').text.strip()
            repeat_usage = False
            
            if(len(access_to_test)>4):
                repeat_usage = True;
                access_to_test = access_to_test[4:].strip()
            
            post_date = post_date+":00"

            print product_name
            print stars
            print reviewer_name
            print skin_type
            
            print review_content_text
            print review_id
            for feature in features:
                print feature.text
            print age
            
            print access_to_test
            
            db = MySQLdb.connect("localhost","root","Aa6a5a4a","urcosme",charset="utf8")
            cursor = db.cursor()
            #sql = """Insert into reviews(review_id,product_name,stars,reviewer_name,skin_type,review_content     ,num_readers,num_pushes,post_date) values (%d,%s,%d,%s,%s,%s,%d,%d,%s)"""
            sql = """Insert ignore into reviews(review_id,product_name,stars,reviewer_name,skin_type,review_content     ,num_readers,num_pushes,post_date) values (%s,%s,%s,%s,%s,%s,%s,%s,%s)  """
                 
            #print sql
            num_of_features =  len(collected_features)
                    
                


            try:
                print "YOLO"
                cursor.execute(sql,(review_id,product_name,stars,reviewer_name,skin_type,review_content_text,num_readers,num_pushes,post_date))
                print "YOLOLO"
                for feature in features:
                        collected_features.add(feature)
                        print "HI"
                        if(len(collected_features)!= num_of_features):
                            num_of_features = len(collected_features)
                            
                            sql = u"""Alter Table reviews add `%s` int(11) NOT NULL """ ;
                            
                            print sql;
                            cursor.execute(sql,(feature.text))
                        print "HI"
                        print "HELO"   
                        sql = u"""update reviews set `%s` = 1 where review_id = %s """;
                        print sql
                        cursor.execute(sql,(feature.text,review_id))
                db.commit()
            except Exception , e:
                print "Exception : " +str(e)
                db.rollback()
            db.close()
            break
            
    except Exception , e:
        print e
        #sys.stderr.write('Error occured while fetching %s\n' % page_url(n))
        #continue

