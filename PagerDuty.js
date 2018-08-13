var request =require('request')
class PagerDuty {
    constructor(params) {
        this.serverURL = params.serverURL;
        this.authToken = params.authToken;
    }
    getIncidents() {
        const options = {
            url: `${this.serverURL}/incidents`,
            method: "GET",
            headers: {
              Accept: "application/vnd.pagerduty+json;version=2",
              Authorization: `Token token=${this.authToken}`
            } ,
            rejectUnauthorized:false
          }; 
          return new Promise(function(resolve,reject){
              var parsedBody;

              request.get(options,function(err,response,body){
                  if (err){
                      reject(err)
                  }
                  parsedBody=JSON.parse(body)
                  resolve(parsedBody.incidents)
              })
          })
    }
    createIncident(params){
        
    }
    
}

module.exports=PagerDuty