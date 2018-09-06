document.getElementById('directorySearchForm').addEventListener('submit', function(event) {
    event.preventDefault()
    let resultsUL = document.getElementsByClassName("resultsUL")
    let searchInput = document.getElementById("searchInput")
    
    if (searchInput.value !== "" || searchInput.value !== " ") {
        fetch(`https://api.spacexdata.com/v2/launches/?launch_year=${parseInt(searchInput.value)}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json)
        })
    }
})

