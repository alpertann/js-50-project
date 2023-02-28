const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0 // Blur'u 0'dan başlatıyoruz.

let integer = setInterval(bluring, 35) //setInterval ile belirli aralıklarla aynı işlemi döndürüyoruz.

function bluring() {
    load++  // Sayıyı her seferinde artırma. 
    if(load > 99) {  
        clearInterval(integer) //setInterval 100'e ulaştığında duruyor.
    }
    
    loadText.innerText= `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin,  inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  } 
