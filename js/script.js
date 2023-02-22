const paint = document.querySelector('#painting');
const surface = document.querySelector('#times');
const times = document.querySelector('#type');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const paintInfo = document.querySelector('.quantity-info');
const quantity = document.querySelector('.quantity');


const showCapacity = () => {
    if (paint.value == '' || surface.value == '' || times.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display = 'none'; 
    } else {
        error.textContent = '';
        count();
    }
};

const count = () => {
    const newPaint = parseFloat(paint.value);
    const newSurface = parseInt(surface.value);
    const newLeyer = parseFloat(times.value);
    const sum = ((newPaint*newSurface)/newLeyer);

    paintInfo.style.display = 'block';
    quantity.textContent = sum.toFixed(2);
};


countBtn.addEventListener('click', showCapacity);