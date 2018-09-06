document.getElementById('directorySearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let resultsUL = document.getElementById("resultsUL")
    let searchInput = document.getElementById("searchInput")
    
    if (searchInput.value !== "" || searchInput.value !== " ") {
        fetch(`https://api.spacexdata.com/v2/launches/?launch_year=${parseInt(searchInput.value)}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json)
            let missions = json
            
            missions.map(mission => {
                let flightNumber = mission.flight_number;
                let missionName = mission.mission_name;
                let launchYear = mission.launch_year;
                let launchSite = mission.launch_site.site_name_long;
                let rocketName = mission.rocket.rocket_name;
                let videoLink = mission.links.video_link;
                let wikiLink = mission.links.wikipedia;
                
                let listItem = document.createElement('p');
                listItem.innerHTML = `<div><p class="li first">Flight Number: ${flightNumber}</p>
                <p class="li">Mission Name: ${missionName}</p><p class="li">Launch Year: ${launchYear}</p><p class="li">Launch Site: ${launchSite}</p><p class="li">Rocket Name: ${rocketName}</p><a class="li" href="${videoLink}">Click Here for YouTube</a>&nbsp; || &nbsp;<a class="li" href="${wikiLink}">Click Here for Wikipedia</a><hr></div>`
                resultsUL.appendChild(listItem)
            })  
        })
        .catch(e => {
            console.log(e)
        })
    }
})

