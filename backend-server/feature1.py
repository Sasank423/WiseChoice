from Extraction import Review_Price_Extract
from Fake_Review_Detector import Fake_Review_Analysis
from Sentiment_Analysis import Sentiment_Analysis

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import string,nltk,pickle
from nltk.corpus import stopwords
from nltk import word_tokenize
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer

from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification
from scipy.special import softmax
import re
from amazoncaptcha import AmazonCaptcha

from summarizer import process
import summarizer as bot


from time import time,sleep
def text_process(review):
    nopunc = [char for char in review if char not in string.punctuation]
    nopunc = ''.join(nopunc)
    return [word for word in nopunc.split() if word.lower() not in stopwords.words('english')]

class Feature1:
    
    def __init__(self):
        self.extracter = Review_Price_Extract()
        self.detector  = Fake_Review_Analysis()
        self.sentiment = Sentiment_Analysis()
        
    def start(self,link):
        self.extracter.start()
        
        reviews = self.extracter.review_extract(link)
        total_reviews_count = len(reviews)
        
        price_result = self.extracter.price_analysis(link)
        
        self.extracter.stop()
        
        geniune_reviews = self.detector.filter(reviews)
        geniune_reviews_count = len(geniune_reviews)
        geniune_reviews.columns = ['Reviews']
        sleep(1)
        r = process(' '.join(list(geniune_reviews['Reviews'])))
        sleep(1)
        sentiment_report = self.sentiment.start(geniune_reviews)
        tot = 0.6*sentiment_report['score'] + 0.4*price_result['fairness']
        grade = ''
        
        if tot <= 20:
            grade = 'D'
        elif tot <= 40:
            grade = 'C'
        elif tot <= 60:
            grade = 'B'
        elif tot < 90:
            grade = 'A'
        else:
            grade = 'S'
            
            
        
        return [price_result,sentiment_report,r,{'total_score':tot,'grade':grade}]


        
        
def Analysis(link):
    # t = time()
    obj = Feature1()
    return obj.start(link)
    # return obj.start('https://www.amazon.in/Apple-iPhone-Pro-Max-256/dp/B0CHWV2WYK/ref=sr_1_3?sr=8-3')
        

if __name__ == '__main__':
    obj = Feature1()
    obj.start('https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY/ref=sr_1_1_sspa?crid=V3BODS80M20M&dib=eyJ2IjoiMSJ9.8-aKrERwPzdGyJWfWOa56O2yDcolF6kjNajUNykMKg93bTAyHsjnQlRBVombFYdyqiIDAjBzquOZzRUnhDQXOB10sYnf4UhxvBmmPxDOOp81nz2N2K05yaOtdB8nvWdprbvGpePNuH2CS-0lyaEQvRFDMCZwj9k5un3MlxbRXlBaXP8FLpNty-XR_GJnjKAoa2tgfQVtIdqUUtWpS30kyeRKYIh2tK8-lWJ4aB3qW98.mD39joucw4r1mVlBHxxM1S_TmDxdE7iNnePktZBLtKY&dib_tag=se&keywords=apple+15&qid=1725064645&sprefix=apple+1%2Caps%2C314&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1')    
        
        
        
        