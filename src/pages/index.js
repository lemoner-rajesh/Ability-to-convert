// import * as React from "react"
import React, { useEffect ,useState} from "react";


import { PARSE_APP_ID, PARSE_JAVASCRIPT_KEY, PARSE_API_URL } from '../../config/parse';
import { parseInitialize, getData } from '../../services/parse';
parseInitialize({ app_id: PARSE_APP_ID, key: PARSE_JAVASCRIPT_KEY, url: PARSE_API_URL });
// var Parse = require('parse');






const IndexPage = () => {
  const [pData,setPdata] = useState('loading')
  const funLib = async () => {
    var rec = await getData();
    
    console.log("rec",rec[0].get('Description'))
    
    setPdata(rec[0].get('Description'))
    
    }

    useEffect(()=>{
      funLib();
    },[])
  

    // var Pages = Parse.Object.extend("Pages");
    // var query = new Parse.Query(Pages);
    // query.ascending("title");

   

    // return query.find().then((records) => {
    //   console.log("records",records) 
      
    //   console.log(records[0].get('title'));
    //   return records;

    // }, (error) => {
    // });

  return (
    <div>
     <div>asdf</div> 
     
      {/* <div dangerouslySetInnerHTML={{__html:pData}} /> */}
    </div>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
