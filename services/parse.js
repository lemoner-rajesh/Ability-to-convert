var Parse = require('parse');
export const parseInitialize = ({ app_id, key, url }) => {
    Parse.initialize(app_id, key);
    Parse.serverURL = url;
}



export const getData = async () => {
    var Pages = Parse.Object.extend("Pages");
    var query = new Parse.Query(Pages);
    query.ascending("title");


    var records = await  query.find();

    return records

   

    // return query.find().then((records) => {
    //   console.log("records",records) 
      
    //   console.log(records[0].get('title'));
    //   return records;

    // }, (error) => {
    // });
}