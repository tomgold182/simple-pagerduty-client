var PagerDuty=require('./PagerDuty')

var pgClient=new PagerDuty({
    //y_NbAkKc66ryYTWUXYEu
    //twbBd56N1ZpDH4i7wbiW
    //KUAf2tTGCW5cFAxkbduq
    serverURL: "https://api.pagerduty.com",
    authToken: "KUAf2tTGCW5cFAxkbduq"
})

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





