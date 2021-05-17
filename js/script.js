var activecases=document.getElementById('activecases');

var activecasesnew=document.getElementById('activecasesnew');

var totlacases=document.getElementById('totlacases');

var recovered=document.getElementById('recovered');

var deaths=document.getElementById('deaths');

var lastUpdate=document.getElementById('lastUpdate');


function show_data()
{
   var update=[];
    $.get('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true',function(data){
       
        activecases.innerHTML=data['activeCases'];
        activecasesnew.innerHTML=data['activeCasesNew'];
        totlacases.innerHTML=data['totalCases'];
        recovered.innerHTML=data['recovered'];
        deaths.innerHTML=data['deaths'];
        
        for(var i=0;i<10;i++)
        {
             update.push(data['lastUpdatedAtApify'][i]);
        }
       lastUpdate.innerHTML=update.join("");

    })
}
