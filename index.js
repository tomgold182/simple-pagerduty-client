var PagerDuty=require('./PagerDuty')

var pgClient=new PagerDuty({
    authToken: "twbBd56N1ZpDH4i7wbiW"
});

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
          "details": "testtttt."
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
 .catch(function(ex){
     console.log('Error!: '+ ex)
 })
  pgClient.getOnCallPersonelList()
  .then(function(oncalls) {
      console.log(oncalls)
  })
  .catch(function(ex){
      console.log('Error!: '+ ex)
  })

 pgClient.getSchedules()
 .then(function(schedules) {
     console.dir(schedules)
 })
 .catch(function(ex){
     console.log('Error!: '+ ex)
 })


