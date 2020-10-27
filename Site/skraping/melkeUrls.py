import requests
import json
from bs4 import BeautifulSoup
import time
import re

def urlRegEx(href):
    return href and re.compile(r"/oppskrifter/([a-z])*/([\s\S])+/([\s\S])+").search(href)

def get_sub_urls():
    """Find all recipe-urls from main search page"""

    page_counter = 1
    recipe_counter = 0
    """Write urls to file"""
    with open("skraping/melke_urls.txt", 'w', encoding="utf-8") as outfile:
        """Loop until no more results"""
        while(True):
            url = "https://www.tine.no/oppskrifter/sok?q=&page="+str(page_counter)+"&maltid=kake&maltid=bakst"

            response = requests.get(url)
            soup = BeautifulSoup(response.text, features="html.parser")
            hits = soup.find_all(href=urlRegEx)

            """Exit loop if no more results are found"""
            if len(hits) == 0:
                break
            page_counter += 1

            """Write all recipe urls to file"""
            for hit in hits:
                recipe_counter += 1
                print(ascii('Found '+decode(hit.get('href'))))
                outfile.write(decode(hit.get('href')))
                outfile.write('\n')

            print("Found "+str(recipe_counter)+" over "+ str(page_counter-1) + " pages")
            # return urls

            # urls = get_sub_urls()
            # outfile.writelines(map(lambda s: s+"\r", urls))
            print("sleep time")
            time.sleep(2)



def decode(s):
    s_utf8 = s.encode('latin1')
    return s_utf8.decode('utf-8')

get_sub_urls()