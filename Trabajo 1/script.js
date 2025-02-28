document.getElementById("enviar").addEventListener("click",aggId)

function aggId() {

    var idInput= document.getElementById("enter").value;
    let link= "http://api.disneyapi.dev/character/"+idInput
    
    mostrarApi(link)
}

function mostrarApi(link) {
    fetch(link)
    .then(res=> res.json())
    .then(disneyApi=>{
        console.log(disneyApi);
        
        document.getElementById("cont2").innerHTML += ""
        document.getElementById("cont2").innerHTML += `

            <div id="name">${disneyApi.data.tvShows}</div> 

            <div id="division">
                
                <div class="card-group">

                    <div class="card">
                        <div id="imgPers">
                            <img src="${disneyApi.data.imageUrl}" class="card-img-top" alt="..." id="editIMg">
                        </div>

                        <div class="card-body">
                            <div class="card-title">Name: ${disneyApi.data.name}</div>
                        </div>

                        <div class="card-footer" style="background-color: black:">
                            <small class="text-body-secondary">${disneyApi.data.createdAt}</small>
                        </div>

                    </div>
                    
                </div>
                <div id="datosExtras">
                    <div class="card text-bg-light mb-3" style="width: 25vw; margin-left: 25vw; height: auto;">
                        <div class="card-header">𓇼</div>
                        <div class="card-body">
                            <h5 class="card-title">Short Films</h5>
                            <p class="card-text">${disneyApi.data.shortFilms}</p>
                        </div>
                    </div>
                    <div class="card text-bg-light mb-3" style="width: 25vw; margin-left: 16vw; height: auto;">
                        <div class="card-header" >𓇼</div>
                        <div class="card-body" style="width: 25vw; height: auto;">
                            <h5 class="card-title">Video Games</h5>
                            <p class="card-text">${disneyApi.data.videoGames}</p>
                        </div>
                    </div>
                    <img src="/trabajosDias/disney/img/png-transparent-mickey-mouse-logo-goofy-the-walt-disney-company-logo-mickey-television-logo-computer-wallpaper-thumbnail-removebg-preview.png" id="miki2">
                </div>
            </div>
        `
    })
}