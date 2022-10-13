const calc = () => {
    let index = 1;

    const allStep = document.querySelectorAll('.steps'),
          stepOne = document.querySelector('.step-1'),
          stepTwo = document.querySelector('.step-2'),
          stepThree = document.querySelector('.step-3'),
          btnNext = document.querySelector('#next'),
          btnPrev = document.querySelector('#prev'),
          step = document.querySelector('#step');

    const dimenstionsStep = document.querySelectorAll('.two__wrap'); 

    const showStepContent = (index) => {
        allStep.forEach(step => {
            step.style.display = 'none';
        });

        switch (index) {
            case 1:
                stepOne.style.display = 'block';
                break;
            case 2:
                stepTwo.style.display = 'block';
                break;
            case 3:
                stepThree.style.display = 'block';
                break;
        }

        if (index == 1) {
            btnPrev.style.display = 'none';
        } else if (index == 4) {
            btnNext.style.display = 'none';
        }  else  {
            btnNext.style.display = 'block';
            btnPrev.style.display = 'block';
        }

        if (index == 3) {
            btnNext.innerHTML = 'Add To Cart >>';
        } else {
            btnNext.innerHTML = 'Next >>';
        }

        step.innerHTML = index;
    };

    showStepContent(index);

    btnNext.addEventListener('click', () => {
        index = index + 1;
        showStepContent(index);
    });

    btnPrev.addEventListener('click', () => {
        index = index - 1;
        showStepContent(index);
    });

    const dimensionsFunc = (id) => {
        dimenstionsStep.forEach(step => {
            if (step.getAttribute('id') === id) {
                step.style.display = 'flex';
            }
        }); 
    };

    const showDimenstions = (shape) => {
        dimenstionsStep.forEach(step => {
            step.style.display = 'none';
        });

        switch(shape) {
            case 'circle':
                dimensionsFunc('circle-size');
                break;
            case 'square':
                dimensionsFunc('square-size');
                break;
            case 'oval':
                dimensionsFunc('oval-size');
                break;
            case 'arch':
                dimensionsFunc('arch-size');
                break;
            case 'racetrack':
                dimensionsFunc('racetrack-size');
                break;
            case 'semicircle':
                dimensionsFunc('semicircle-size');
                break;
            case 'custom':
                window.location.href = 'https://mercuryglassandmirror.com/contact-us/';
                break;
            default:
                dimensionsFunc('rectangle-size');
                break;
        }
    };

    showDimenstions();

    const shapes = document.querySelectorAll('.shape');
    

    shapes.forEach(item => {
        item.addEventListener('change',  function() {
            shapes.forEach(i => {
                i.checked = false;
            });

            this.checked = true;

            showDimenstions(this.getAttribute('id'));

            if (this.getAttribute('id') != 'custom') {
                setTimeout(() => {
                    index = index + 1;
                    showStepContent(index);
                }, 150);
            }
        });
    });

    const allThickness = document.querySelectorAll('.thickness label'),
          allType = document.querySelectorAll('.type label');

    let thickness = '1/8 Thickness';

    allType.forEach(type => {
        if (type.dataset.xs == "true" || type.dataset.s == "true" || type.dataset.m == "true" || type.dataset.l == "true") {
            type.style.display = 'none';
        }
    });

    allThickness.forEach(item => {
        item.addEventListener('change', () => {
            thickness = item.querySelector('input').value;

            allType.forEach(type => {
                type.style.display = 'flex';
            });


            if (thickness == '1/8 Thickness' || thickness == '3/16 Thickness') {
                allType.forEach(type => {
                    if (type.dataset.xs == "true" || type.dataset.s == "true" || type.dataset.m == "true" || type.dataset.l == "true" || type.dataset.xl == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '1/4 Thickness') {
                allType.forEach(type => {
                    if (type.dataset.xs == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '3/8 Thickness') {
                allType.forEach(type => {
                    if (type.dataset.s == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '1/2 Thickness') {
                allType.forEach(type => {
                    if (type.dataset.m == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '5/8 Thickness') {
                allType.forEach(type => {
                    if (type.dataset.l == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '3/4 Thickness') {
                allType.forEach(type => {
                    if (type.dataset.xl == "true") {
                        type.style.display = 'none';
                    }
                });
            }
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    calc();
});