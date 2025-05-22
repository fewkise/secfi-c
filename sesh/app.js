document.addEventListener('contextmenu', function(event){
    event.preventDefault()
    alert('пкм запрещен')
})
document.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.shiftKey && (event.key === 'i' || event.key === 'I' ) ){
        event.preventDefault()
        alert('ctrl shift i запрещен')
    }
})
document.addEventListener('keydown', function(event){
    if (event.key ==='F12'){
        event.preventDefault()
        alert('f12 запрещен')
    }
})
setInterval(()=> {
    let vsebody = document.body.innerHTML 
    let devtoolsopen = false
    const chet = 160
    const start = new Date()
    debugger
    if (new Date () - start > chet){
        devtoolsopen = true
    }
    if (new Date () - start < chet){
        document.body.innerHTML = vsebody
    }
    if (devtoolsopen){
        document.body.innerHTML = ''
        alert('закройте консоль')
    }
}, 1000)