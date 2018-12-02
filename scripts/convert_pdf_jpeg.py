

########### Python 3.2 #############

import http.client, urllib.request, urllib.parse, urllib.error, base64, sys

image = open("output/"+sys.argv[1], "rb").read();

headers = {
    # Request headers
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': '55f3e8b774ad4464a6044e69ba7bdc43',
}

params = urllib.parse.urlencode({
    # Request parameters
    'language': 'en',
    'detectOrientation ': 'true',
})

try:
    conn = http.client.HTTPSConnection('canadacentral.api.cognitive.microsoft.com')
    conn.request("POST", "/vision/v1.0/ocr?%s" % params, [image], headers)
    response = conn.getresponse()
    data = response.read()

    #for region in data.regions:
    #	for line in region.lines:
    #		for word in line.words:
    #			print(word.text)
    
    print(data.decode("utf-8"))
    conn.close()
except Exception as e:
    print("[Errno {0}] {1}".format(e.errno, e.strerror))

####################################
'''
import requests, base64, sys, unicodedata

#image = open("output/"+sys.argv[1], "rb").read();
image = open("output/test_2.png", "rb").read();


#Defining base url for API call.
base_url = "https://canadacentral.api.cognitive.microsoft.com/vision/v1.0/"
ocr_url = base_url + "ocr"

#Defining subscription key and headers for subscription key.
sub = "55f3e8b774ad4464a6044e69ba7bdc43"
headers  = {'Ocp-Apim-Subscription-Key': sub}

#Defining parameters and orientation
params   = {'language': 'unk', 'detectOrientation ': 'true'}

#Defining image url
data = [image]


response = requests.post(ocr_url, headers=headers, params=params, json=data)
response.raise_for_status()
analysis = response.text()
#ret = analysis.split("u'")
print(analysis);
'''