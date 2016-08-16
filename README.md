# v2
First base model


Start from app.js，omit Views/found.ejs, Views/landing.ejs, documents.js, elasticsearch.js, testSearch.js
Input.conf is the other group logstash configure file.
twitter_logstash.conf is our group logstash configure file.

1. Install logstash and elasticsearch first.
2. Run run logstash with twitter_logstash.conf 
  ./logstash -f twitter_logstash.conf
3. start app.js

