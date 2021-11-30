import urllib2
import json
def getTagData():
    	# first encode the username & password 
    	#userData = "Basic " + (uName + ":" + pWord).encode("base64").rstrip()
    	# create a new Urllib2 Request object	
    req = urllib2.Request('https://api.smartsheet.com/1.1/sheet/2116294435727236')
    	# add any additional headers you like 
    req.add_header('Accept', 'application/json')
    req.add_header("Content-type", "application/json")
    	# add the authentication header, required
    req.add_header('Authorization', 'Bearer 636h6277y1f8gi4wpx3lzj4ieh')
    	# make the request and print the results
    res = urllib2.urlopen(req)
    res = res.read()
    res = json.loads(res)
    tagset={}
    row_no=[]
    for i in res['rows']:
        tagset[str(i['rowNumber'])]={i['cells'][0]['value']:i['cells'][1]['value']}
        row_no.append(i['rowNumber'])
    row_no.sort()
    taglist=[]
    for i in range(len(row_no)):
        key,val=tagset[str(row_no[i])].items()[0]
        parent_wbs= ".".join(key.split(".")[:-2])+"."
        if key==parent_wbs:
            parent_wbs=None
        if i:
            if prev_wbs!=parent_wbs:
                taglist[-1]['has_children']=0
        taglist.append({'wbs':key,'tagname':val,'parent_id':parent_wbs,'has_children':1})
        prev_wbs=key
    taglist[-1]['has_children']=0     
      
    return taglist
result=getTagData()
a=json.dumps(result)   