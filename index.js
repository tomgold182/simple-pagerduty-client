var PagerDuty=require('./PagerDuty')

var pgClient=new PagerDuty({
    //y_NbAkKc66ryYTWUXYEu
    //twbBd56N1ZpDH4i7wbiW
    serverURL: "https://api.pagerduty.com",
    authToken: "twbBd56N1ZpDH4i7wbiW"
})

pgClient.getIncidents()
.then(function(incidents) {
    console.log(incidents)
})
.catch(function(ex){
    console.log('Error!: '+ ex)
})


