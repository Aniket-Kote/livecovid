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



       
       for(var i=1;i<data['regionData'].length;i++)
       {
           var x=statewise_data.insertRow()

           x.insertCell(0)
           statewise_data.rows[i].cells[0].innerHTML=i
           statewise_data.rows[i].cells[0].style.backgroundColor="#fff";
           statewise_data.rows[i].cells[0].style.textAlign='center';

           x.insertCell(1)
           statewise_data.rows[i].cells[1].innerHTML=data['regionData'][i-1]['region']
           statewise_data.rows[i].cells[1].style.backgroundColor="#4bb7d8";
           statewise_data.rows[i].cells[1].style.fontWeight='bold';

           x.insertCell(2)
           statewise_data.rows[i].cells[2].innerHTML=data['regionData'][i-1]['totalInfected']
           statewise_data.rows[i].cells[2].style.backgroundColor="#f36e23"

           x.insertCell(3)
           statewise_data.rows[i].cells[3].innerHTML=data['regionData'][i-1]['recovered']
           statewise_data.rows[i].cells[3].style.backgroundColor="#4bb7d8"

           x.insertCell(4)
           statewise_data.rows[i].cells[4].innerHTML=data['regionData'][i-1]['deceased']
           statewise_data.rows[i].cells[4].style.backgroundColor="#f36e23"
       }




    })
}
