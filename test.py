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
            sql = """Insert ignore into reviews(review_id,product_name,stars,reviewer_name,skin_type,review_content,num_readers,num_pushes,post_datefeature1,feature2,feature3,feature4,feature5,feature6,feature7,feature8,feature9,feature10,feature11,feature12,feature13,feature14,feature15,feature16,feature17,feature18,feature19,feature20,feature21,feature22,feature23,feature24,feature25,feature26,feature27,feature28,feature29,feature30,feature31,feature32,feature33,feature34,feature35,feature36,feature37,feature38,feature39,feature40,feature41,feature42,feature43,feature44,feature45,feature46,feature47,feature48,feature49,feature50,feature51,feature52,feature53,feature54,feature55,feature56,feature57,feature58,feature59,feature60,feature61,feature62,feature63,feature64,feature65,feature66,feature67,feature68,feature69,feature70,feature71,feature72,feature73,feature74,feature75,feature76,feature77,feature78,feature79,feature80,feature81,feature82,feature83,feature84,feature85,feature86,feature87,feature88,feature89,feature90,feature91,feature92,feature93,feature94,feature95,feature96,feature97,feature98,feature99,feature100,feature101,feature102,feature103,feature104,feature105,feature106,feature107,feature108,feature109,feature110,feature111,feature112,feature113,feature114,feature115,feature116,feature117,feature118,feature119,feature120,feature121,feature122,feature123,feature124,feature125,feature126,feature127,feature128,feature129,feature130,feature131,feature132,feature133,feature134,feature135,feature136,feature137,feature138,feature139,feature140,feature141,feature142,feature143,feature144,feature145,feature146,feature147,feature148,feature149,feature150,feature151,feature152,feature153,feature154,feature155,feature156,feature157,feature158,feature159,feature160,feature161,feature162,feature163,feature164,feature165,feature166,feature167,feature168,feature169,feature170,feature171,feature172,feature173,feature174,feature175,feature176,feature177,feature178,feature179,feature180,feature181,feature182,feature183,feature184,feature185,feature186,feature187,feature188,feature189,feature190,feature191,feature192,feature193,feature194,feature195,feature196,feature197,feature198,feature199,feature200,feature201,feature202,feature203,feature204,feature205,feature206,feature207,feature208,feature209,feature210,feature211,feature212,feature213,feature214,feature215,feature216,feature217,feature218,feature219,feature220,feature221,feature222,feature223,feature224,feature225,feature226,feature227,feature228,feature229,feature230,feature231,feature232,feature233,feature234,feature235,feature236,feature237,feature238,feature239,feature240,feature241,feature242,feature243,feature244,feature245,feature246,feature247,feature248,feature249,feature250,feature251,feature252,feature253,feature254,feature255,feature256,feature257,feature258,feature259,feature260,feature261,feature262,feature263,feature264,feature265,feature266,feature267,feature268,feature269,feature270,feature271,feature272,feature273,feature274,feature275,feature276,feature277,feature278,feature279,feature280,feature281,feature282,feature283,feature284,feature285,feature286,feature287,feature288,feature289,feature290,feature291,feature292,feature293,feature294,feature295,feature296,feature297,feature298,feature299,feature300,feature301,feature302,feature303,feature304,feature305,feature306,feature307,feature308,feature309,feature310,feature311,feature312,feature313,feature314,feature315,feature316,feature317,feature318,feature319,feature320,feature321,feature322,feature323,feature324,feature325,feature326,feature327,feature328,feature329,feature330,feature331,feature332,feature333,feature334,feature335,feature336,feature337,feature338,feature339,feature340,feature341,feature342,feature343,feature344,feature345,feature346,feature347,feature348,feature349,feature350,feature351,feature352,feature353,feature354,feature355,feature356,feature357,feature358,feature359,feature360,feature361,feature362,feature363,feature364,feature365,feature366,feature367,feature368,feature369,feature370,feature371,feature372,feature373,feature374,feature375,feature376,feature377,feature378,feature379,feature380,feature381,feature382,feature383,feature384,feature385,feature386,feature387,feature388,feature389,feature390,feature391,feature392,feature393,feature394,feature395,feature396,feature397,feature398,feature399,feature400,feature401,feature402,feature403,feature404,feature405,feature406,feature407,feature408,feature409,feature410,feature411,feature412,feature413,feature414,feature415,feature416,feature417,feature418,feature419,feature420,feature421,feature422,feature423,feature424,feature425,feature426,feature427,feature428,feature429,feature430,feature431,feature432,feature433,feature434,feature435,feature436,feature437,feature438,feature439,feature440,feature441,feature442,feature443,feature444,feature445,feature446,feature447,feature448,feature449,feature450,feature451,feature452,feature453,feature454,feature455,feature456,feature457,feature458,feature459,feature460,feature461,feature462,feature463,feature464,feature465,feature466,feature467,feature468,feature469,feature470,feature471,feature472,feature473,feature474,feature475,feature476,feature477,feature478,feature479,feature480,feature481,feature482,feature483,feature484,feature485,feature486,feature487,feature488,feature489,feature490,feature491,feature492,feature493,feature494,feature495,feature496,feature497,feature498,feature499,feature500,feature501,feature502,feature503,feature504,feature505,feature506,feature507,feature508,feature509,feature510,feature511,feature512,feature513,feature514,feature515,feature516,feature517,feature518,feature519,feature520,feature521,feature522,feature523,feature524,feature525,feature526,feature527,feature528,feature529,feature530,feature531,feature532,feature533,feature534,feature535,feature536,feature537,feature538,feature539,feature540,feature541,feature542,feature543,feature544,feature545,feature546,feature547,feature548,feature549,feature550,feature551,feature552,feature553,feature554,feature555,feature556,feature557,feature558,feature559,feature560,feature561,feature562,feature563,feature564,feature565,feature566,feature567,feature568,feature569,feature570,feature571,feature572,feature573,feature574,feature575,feature576,feature577,feature578,feature579,feature580,feature581,feature582,feature583,feature584,feature585,feature586,feature587,feature588,feature589,feature590,feature591,feature592,feature593,feature594,feature595,feature596,feature597,feature598,feature599,feature600,feature601,feature602,feature603,feature604,feature605,feature606,feature607,feature608,feature609,feature610,feature611,feature612,feature613,feature614,feature615,feature616,feature617,feature618,feature619,feature620,feature621,feature622,feature623,feature624,feature625,feature626,feature627,feature628,feature629,feature630,feature631,feature632,feature633,feature634,feature635,feature636,feature637,feature638,feature639,feature640,feature641,feature642,feature643,feature644,feature645,feature646,feature647,feature648,feature649,feature650,feature651,feature652,feature653,feature654,feature655,feature656,feature657,feature658,feature659,feature660,feature661,feature662,feature663,feature664,feature665,feature666,feature667,feature668,feature669,feature670,feature671,feature672,feature673,feature674,feature675,feature676,feature677,feature678,feature679,feature680,feature681,feature682,feature683,feature684,feature685,feature686,feature687,feature688,feature689,feature690,feature691,feature692,feature693,feature694,feature695,feature696,feature697,feature698,feature699,feature700,feature701,feature702,feature703,feature704,feature705,feature706,feature707,feature708,feature709,feature710,feature711,feature712,feature713,feature714,feature715,feature716,feature717,feature718,feature719,feature720,feature721,feature722,feature723,feature724,feature725,feature726,feature727,feature728,feature729,feature730,feature731,feature732,feature733,feature734,feature735,feature736,feature737,feature738,feature739,feature740,feature741,feature742,feature743,feature744,feature745,feature746,feature747,feature748,feature749,feature750,feature751,feature752,feature753,feature754,feature755,feature756,feature757,feature758,feature759,feature760,feature761,feature762,feature763,feature764,feature765,feature766,feature767,feature768,feature769,feature770,feature771,feature772,feature773,feature774,feature775,feature776,feature777,feature778,feature779,feature780,feature781,feature782,feature783,feature784,feature785,feature786,feature787,feature788,feature789,feature790,feature791,feature792,feature793,feature794,feature795,feature796,feature797,feature798,feature799,feature800,feature801,feature802,feature803,feature804,feature805,feature806,feature807,feature808,feature809,feature810,feature811,feature812,feature813,feature814,feature815,feature816,feature817,feature818,feature819,feature820,feature821,feature822,feature823,feature824,feature825,feature826,feature827,feature828,feature829,feature830,feature831,feature832,feature833,feature834,feature835,feature836,feature837,feature838,feature839,feature840,feature841,feature842,feature843,feature844,feature845,feature846,feature847,feature848,feature849,feature850,feature851,feature852,feature853,feature854,feature855,feature856,feature857,feature858,feature859,feature860,feature861,feature862,feature863,feature864,feature865,feature866,feature867,feature868,feature869,feature870,feature871,feature872,feature873,feature874,feature875,feature876,feature877,feature878,feature879) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)  """
                 
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

