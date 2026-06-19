const getImage = async () => {
    let display = document.getElementById("display")

    try{
        const res=await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        console.log(data)
        display.src= data.message
    }catch (err) {
        console.log(err.name)
    }
}