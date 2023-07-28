const changeIcon = (type) => {
    const element = document.getElementById('display-image-container')
    element.classList.remove('image-display-up')
    element.classList.add('image-display-down')

    for(let item of document.body.classList) {
        document.body.classList.remove(item)
    }
    if(type === 'pizza') {
        document.body.classList.add('bg-pizza')
        setTimeout(() => {
            document.getElementById('display-image').src = 'imgs/pizza-3d-illustration-free-png.png'
            element.classList.remove('image-display-down')
            element.classList.add('image-display-up')
        }, 300)
    }else if(type === 'burger'){
        document.body.classList.add('bg-burger')
        setTimeout(() => {
            document.getElementById('display-image').src = 'imgs/burger-3d-illustration-free-png.png'
            element.classList.remove('image-display-down')
            element.classList.add('image-display-up')
        }, 300)
    }else if(type === 'pasta') {
        document.body.classList.add('bg-pasta')
        setTimeout(() => {
            document.getElementById('display-image').src = 'imgs/pasta.png'
            element.classList.remove('image-display-down')
            element.classList.add('image-display-up')
        }, 300)
    }else if(type === 'coffee') {
        document.body.classList.add('bg-coffee')
        setTimeout(() => {
            document.getElementById('display-image').src = 'imgs/coffee.png'
            element.classList.remove('image-display-down')
            element.classList.add('image-display-up')
        }, 300)
    }
}