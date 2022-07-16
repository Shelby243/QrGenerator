const wrapper=document.querySelector(".wrapper")
const generateBtn=wrapper.querySelector(".form button")
const qrInput=wrapper.querySelector(".form input")
const qrImg=wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click",()=>{

    let qrvalue=qrInput.value
    if(!qrvalue) return
    generateBtn.innerText="Generating QR Code..."
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active")
        generateBtn.innerText="Generate QR Code"
    })
    
})
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value)
    {
        wrapper.classList.remove("active")
    }
})