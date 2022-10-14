const calc = () => {
    let index = 1;

    // цена за футы
    let ft = 0.18;
    let fraFt = 0.36;

    // цена за толщина
    let thickness1 = 0.105;
    let thickness2 = 0.207;
    let thickness3 = 0.785;
    let thickness4 = 1.137;
    let thickness5 = 2.062;
    let thickness6 = 3.116;

    // цена за тип
    let ultraClear = 0.75;
    let clearSandBlasted = 0.9;
    let painted = 4.3;
    let lowIronSandBlasted = 2.485;
    let bronze = 0.75;
    let grey = 0.75;
    let acidEtchedRegular = 0.67;
    let acidEtchedLowIron = 0.85;
    let clearLaminated = 0.62;
    let whiteLaminated = 0.9;
    let oneWayMirror = 0.6;
    let lowIronBlasted = 0.5;
    let superGrey = 0.67;

    // начальная цена для разного вида стекла
    // let square = 33.30;
    // let rectangle = 33.30;
    // let circle = 43.08;
    // let oval = 43.08;
    // let arch = 43.08;
    // let racetrack = 43.08;
    // let semicircle = 43.08;

    // края
    let flatPolishedEdge = 0.019;
    let beveledEdge = 0.043

    let widthInc;
    let widthFra;

    let heightInc;
    let heightFra;

    let diameterInc;
    let diameterFra;

    let choseShape = 'Rectangle';
    let thick = "1/8";
    let type = "Clear";
    let ending = "Seamed Edge";
    let strength = "Annealed Glass";
    let quantity = 1;

    let price = 0;

    const allStep = document.querySelectorAll('.steps'),
          stepOne = document.querySelector('.step-1'),
          stepTwo = document.querySelector('.step-2'),
          stepThree = document.querySelector('.step-3'),
          btnNext = document.querySelector('#next'),
          btnPrev = document.querySelector('#prev'),
          step = document.querySelector('#step');

    const widthIncSelect = document.querySelector('#width-inches');

    widthIncSelect.addEventListener('change', () => {
        widthInc = 0;
        widthInc = widthIncSelect.value;
    });

    const widthFraSelect = document.querySelector('#width-fraction');

    widthFraSelect.addEventListener('change', () => {
        widthFra = 0;
        widthFra = widthFraSelect.value;
    });

    const heightIncSelect = document.querySelector('#height-inches');

    heightIncSelect.addEventListener('change', () => {
        heightInc = 0;
        heightInc = heightIncSelect.value;
    });

    const heightFraSelect = document.querySelector('#height-fraction');

    heightFraSelect.addEventListener('change', () => {
        heightFra = 0;
        heightFra = heightFraSelect.value;
    });

    const diameterIncSelect = document.querySelector('#diameter-inches');

    heightIncSelect.addEventListener('change', () => {
        diameterInc = 0;
        diameterInc = diameterIncSelect.value;
    });

    const diameterFraSelect = document.querySelector('#diameter-fraction');

    diameterFraSelect.addEventListener('change', () => {
        diameterFra = 0;
        diameterFra = diameterFraSelect.value;
    });

    const dimenstionsStep = document.querySelectorAll('.two__wrap');

    const choseShapeFunc = (shape) => {
        document.querySelector('#card-shape').innerHTML = `Shape: ${shape}`;
    };

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
                choseShapeFunc(choseShape);

                const cardPrice = document.querySelector('#card-price b');

                if (choseShape == 'Circle') {
                    document.querySelector('#card-width-hight').innerHTML = '';
                    document.querySelector('#card-diameter').innerHTML = `Diameter: ${diameterInc ? diameterInc : 2} - ${diameterFra ? diameterFra : 0}`;
                } else {
                    document.querySelector('#card-width-hight').innerHTML = `H x W: ${heightInc ? heightInc : 2}-${heightFra ? heightFra : 0} x ${widthInc ? widthInc : 2}-${widthFra ? widthFra : 0}`;
                }

                if (choseShape == "Circle" || choseShape == "Oval" || choseShape == "Arch" || choseShape == "Racetrack oval" || choseShape == "Semicircle") {
                    price = 43.08;

                    // if (heightInc) {
                    //     price += heightInc * ft;
                    // } else if (diameterFra) {
                    //     price += heightFra * fraFt;
                    // }

                    cardPrice.innerHTML = `Price: ${price.toFixed(2)}$`;
                } else {
                    price = 33.30;
                    cardPrice.innerHTML = `Price: ${price.toFixed(2)}$`;
                }
                
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
            btnNext.innerHTML = 'Send >>';
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

            choseShape = this.value;

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

    allType.forEach(type => {
        if (type.dataset.xs == "true" || type.dataset.s == "true" || type.dataset.m == "true" || type.dataset.l == "true") {
            type.style.display = 'none';
        }
    });

    allThickness.forEach(item => {
        item.addEventListener('change', () => {
            let thickness = item.querySelector('input').value;

            allType.forEach(type => {
                type.style.display = 'flex';
            });

            thick = thickness;

            document.querySelector('#card-thickness').innerHTML = `Thickness: ${thickness}`;

            if (thickness == '1/8' || thickness == '3/16') {
                allType.forEach(type => {
                    if (type.dataset.xs == "true" || type.dataset.s == "true" || type.dataset.m == "true" || type.dataset.l == "true" || type.dataset.xl == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '1/4') {
                allType.forEach(type => {
                    if (type.dataset.xs == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '3/8') {
                allType.forEach(type => {
                    if (type.dataset.s == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '1/2') {
                allType.forEach(type => {
                    if (type.dataset.m == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '5/8') {
                allType.forEach(type => {
                    if (type.dataset.l == "true") {
                        type.style.display = 'none';
                    }
                });
            } else if (thickness == '3/4') {
                allType.forEach(type => {
                    if (type.dataset.xl == "true") {
                        type.style.display = 'none';
                    }
                });
            }
        });
    });

    const allTypes = document.querySelectorAll('.type label');

    allTypes.forEach(item => {
        item.addEventListener('change', () => {
            const input = item.querySelector('input');

            if (input.checked) {
                type = input.value;

                document.querySelector('#card-type').innerHTML = `Type: ${input.value}`;
            }
        });
    });

    const allEnding = document.querySelectorAll('.ending label');

    allEnding.forEach(item => {
        item.addEventListener('change', () => {
            const input = item.querySelector('input');

            if (input.checked) {
                ending = input.value;

                document.querySelector('#card-ending').innerHTML = `Ending: ${input.value}`;
            }
        });
    });

    const quantitySelect = document.querySelector('#quantity-select');

    quantitySelect.addEventListener('change', () => {
        document.querySelector('#card-quantity').innerHTML = `Quantity: ${quantitySelect.value}`;
    });
};

window.addEventListener('DOMContentLoaded', () => {
    calc();
});