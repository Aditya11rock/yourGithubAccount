//$("#but").click(function (){

    
//var username=document.getElementById("username").value
//var final=username.split(" ").join()
//alert(final)


//})

var form=document.getElementById("mad")

form.addEventListener("submit",function(e){

    e.preventDefault()



    var username=document.getElementById("username").value
var filname=username.split(" ").join()
document.getElementById("username").value=""

    fetch("https://api.github.com/users/"+filname)
    .then((result) => result.json())
    .then((data)=>{

        //console.log(data)
        var mad=document.getElementById("matit")
        mad.innerHTML=`
        <img src="${data.avatar_url}"/>
        <h2>Name : ${data.name}</h2>
        <h2>Followers : ${data.followers}</h2>
        <h2>Following : ${data.following}</h2>
        <h2>Repositories : ${data.public_repos}</h2>
        <br>
        
        `
        $("#matit").append(`<a target="_blank" href="https://www.github.com/${filname}"><button>Visit Page</button></a>`)

    })



})