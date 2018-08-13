var PagerDuty=require('./PagerDuty')

var pgClient=new PagerDuty({
    serverURL: "https://api.pagerduty.com",
    authToken: "y_NbAkKc66ryYTWUXYEu"
})

pgClient.getIncidents().then(function(incidents) {
    console.log(incidents)
});


