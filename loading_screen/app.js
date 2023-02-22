const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0 // Blur'u 0'dan başlatıyoruz.

let int = setInterval(bluring, 50) //setInterval ile belirli aralıklarla aynı işlemi döndürüyoruz.

function bluring() {
    load++  // Sayıyı her seferinde 1 artırma. 
    if(load > 99) {  
        clearInterval(int) //setInterval 100'e ulaştığında duruyor.
    }
    
    loadText.innerText= `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, i  nMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }
