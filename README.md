# simple-pagerduty-client
 simple-pagerduty-client is an easy-to-use PagerDuty  client, which provides you with the abilieites to retrieve incidents,schedules,on calls, and services as well as creating your own incidents.
## How To:
Just NPM install and import the PagerDuty Class


### Examples:
Connection:

```
var PagerDuty=require('./PagerDuty')
var pgClient=new PagerDuty({
    authToken: "xwbBq56N1ZpSs4i7wbiB"
});
```

usage:
```
 pgClient.getIncidents()
 .then(function(incidents) {
     console.log(incidents)
 })
 .catch(function(ex){
     console.log('Error!: '+ ex)
 })
 pgClient.getServices()
 .then(function(services) {
     console.log(services)
 })
 .catch(function(ex){
     console.log('Error!: '+ ex)
 })
 var newIncident={
    "incident": {
        "type": "incident",
        "title": "Test.",
        "service": {
          "id": "PJ51XFI",
          "type": "service_reference"
        },
        "priority": {
          "id": "P53ZZH5",
          "type": "priority_reference"
        },
        "body": {
          "type": "incident_body",
          "details": "This is a test incident."
        },
        "escalation_policy": {
          "id": "PODMDE6",
          "type": "escalation_policy_reference"
        }
  }
}

 pgClient.createIncident("This is the repoting system",newIncident)
 .then(function(res) {
     console.log(res)
 })

```

Full usage example can be found at the Index.js file

Feel free to contribute!
