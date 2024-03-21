async function letsFetch () {
    try { 
        let res = await fetch("/api/v1/products")
        let data = await res.json()
        showProducts(data)
            
        }
    catch (error) {
        window.alert('Oops, something happened...')
        location.reload()
    }
    try { 
        let res = await fetch("/api/v1/people")
        let data = await res.json()
        showPeople(data)
        
    }
    catch (error) {
        window.alert('Oops, something happened...')
        location.reload()
    }
}

function showProducts(data) 
{
    const myResults = document.getElementById("fetchResults")
    myResults.innerHTML = data.map((e) => {
        return `
        <div class="result">
        <b>ID#:</b> ${e.id} <br>
        <b>Title:</b> ${e.name}</br>
        <b>Price:</b> ${e.price}</br>
        <img src="${e.image}" alt="Image N/A"> 
        </div>
        `
    }).join(" ")
}

function showPeople(data) 
{
    const myResults2 = document.getElementById("fetchResults2")
    myResults2.innerHTML = data.map((e) => {
        return `
        <div class="result">
        <b>ID#:</b> ${e.id} <br>
        <b>Name:</b> ${e.name}</br>
        </div>
        `
    }).join(" ")
}
