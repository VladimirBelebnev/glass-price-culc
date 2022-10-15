const calc = () => {
    let index = 1;

    // цена за футы
    let ft = 0.18;
    let fraFt = 0.36;

    // цена за толщина
    let thick;
    let thickness1 = 1;
    let thickness2 = 1.105;
    let thickness3 = 1.207;
    let thickness4 = 1.785;
    let thickness5 = 2.137;
    let thickness6 = 3.062;
    let thickness7 = 4.116;

    // цена за тип
    let type;
    let clear = 1;
    let ultraClear = 1.67;
    let clearSandBlasted = 1.9;
    let painted = 4.3;
    let lowIronSandBlasted = 1.97;
    let bronze = 1.3;
    let grey = 1.3;
    let acidEtchedRegular = 1.67;
    let acidEtchedLowIron = 1.82;
    let clearLaminated = 1.58;
    let whiteLaminated = 1.87;
    let oneWayMirror = 1.63;
    let superGrey = 1.47;
    // let lowIronBlasted = 1.5;

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

    const generateSelect = (widthIncSelect, widthFraSelect, heightIncSelect, heightFraSelect) => {
        widthIncSelect.addEventListener('change', () => {
            widthInc = 0;
            widthInc = widthIncSelect.value;
        });

        widthFraSelect.addEventListener('change', () => {
            widthFra = 0;
            widthFra = widthFraSelect.value;
        });

        heightIncSelect.addEventListener('change', () => {
            heightInc = 0;
            heightInc = heightIncSelect.value;
        });

        heightFraSelect.addEventListener('change', () => {
            heightFra = 0;
            heightFra = heightFraSelect.value;
        });
    }

    const diameterIncSelect = document.querySelector('#diameter-inches');

    diameterIncSelect.addEventListener('change', () => {
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

        if (index == 1) {
            btnPrev.style.display = 'none';
        } else if (index == 2) {
            if (choseShape == 'Rectangle') {
                let widthIncSelect = document.querySelector('#width-inches-rectangle');
                let widthFraSelect = document.querySelector('#width-fraction-rectangle');
                let heightIncSelect = document.querySelector('#height-inches-rectangle');
                let heightFraSelect = document.querySelector('#height-fraction-rectangle');

                generateSelect(widthIncSelect, widthFraSelect, heightIncSelect, heightFraSelect);
            } else if (choseShape == 'Square') {
                let widthIncSelect = document.querySelector('#width-inches-square');
                let widthFraSelect = document.querySelector('#width-fraction-square');
                let heightIncSelect = document.querySelector('#height-inches-square');
                let heightFraSelect = document.querySelector('#height-fraction-square');

                generateSelect(widthIncSelect, widthFraSelect, heightIncSelect, heightFraSelect);
            } else if (choseShape == 'Oval') {
                let widthIncSelect = document.querySelector('#width-inches-oval');
                let widthFraSelect = document.querySelector('#width-fraction-oval');
                let heightIncSelect = document.querySelector('#height-inches-oval');
                let heightFraSelect = document.querySelector('#height-fraction-oval');

                generateSelect(widthIncSelect, widthFraSelect, heightIncSelect, heightFraSelect);
            } else if (choseShape == 'Arch') {
                let widthIncSelect = document.querySelector('#width-inches-oval');
                let widthFraSelect = document.querySelector('#width-fraction-oval');
                let heightIncSelect = document.querySelector('#height-inches-oval');
                let heightFraSelect = document.querySelector('#height-fraction-oval');

                generateSelect(widthIncSelect, widthFraSelect, heightIncSelect, heightFraSelect);
            } else if (choseShape == 'Arch') {
                let widthIncSelect = document.querySelector('#width-inches-arch');
                let widthFraSelect = document.querySelector('#width-fraction-arch');
                let heightIncSelect = document.querySelector('#height-inches-arch');
                let heightFraSelect = document.querySelector('#height-fraction-arch');

                generateSelect(widthIncSelect, widthFraSelect, heightIncSelect, heightFraSelect);
            } else if (choseShape == 'Racetrack') {
                let widthIncSelect = document.querySelector('#width-inches-racetrack');
                let widthFraSelect = document.querySelector('#width-fraction-racetrack');
                let heightIncSelect = document.querySelector('#height-inches-racetrack');
                let heightFraSelect = document.querySelector('#height-fraction-racetrack');

                generateSelect(widthIncSelect, widthFraSelect, heightIncSelect, heightFraSelect);
            } else if (choseShape == 'Semicircle') {
                let widthIncSelect = document.querySelector('#width-inches-semicircle');
                let widthFraSelect = document.querySelector('#width-fraction-semicircle');
                let heightIncSelect = document.querySelector('#height-inches-semicircle');
                let heightFraSelect = document.querySelector('#height-fraction-semicircle');

                generateSelect(widthIncSelect, widthFraSelect, heightIncSelect, heightFraSelect);
            } 

            widthFra = 0;
            heightFra = 0;

            btnPrev.style.display = 'block';
        } else if (index == 4) {
            btnNext.style.display = 'none';
        } else {
            btnNext.style.display = 'block';
            btnPrev.style.display = 'block';
        }

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
                    document.querySelector('#card-diameter').innerHTML = '';
                    document.querySelector('#card-width-hight').innerHTML = `H x W: ${heightInc ? heightInc : 2}-${heightFra ? heightFra : 0} x ${widthInc ? widthInc : 2}-${widthFra ? widthFra : 0}`;
                }

                if (choseShape == "Circle" || choseShape == "Oval" || choseShape == "Arch" || choseShape == "Racetrack oval" || choseShape == "Semicircle") {
                    price = 43.08;

                    if (heightFra == '1/16') {
                        heightFra = 0.0625;
                    } else if (heightFra == '1/8') {
                        heightFra = 0.125;
                    } else if (heightFra == '1/8') {
                        heightFra = 0.125;
                    } else if (heightFra == '3/16') {
                        heightFra = 0.1875;
                    } else if (heightFra == '1/4') {
                        heightFra = 0.25;
                    } else if (heightFra == '5/16') {
                        heightFra = 0.3125;
                    } else if (heightFra == '3/8') {
                        heightFra = 0.375;
                    } else if (heightFra == '7/16') {
                        heightFra = 0.4375;
                    } else if (heightFra == '1/2') {
                        heightFra = 0.5;
                    } else if (heightFra == '9/16') {
                        heightFra = 0.5625;
                    } else if (heightFra == '5/8') {
                        heightFra = 0.625;
                    } else if (heightFra == '11/16') {
                        heightFra = 0.6875;
                    } else if (heightFra == '3/4') {
                        heightFra = 0.75;
                    } else if (heightFra == '13/16') {
                        heightFra = 0.8125;
                    } else if (heightFra == '7/8') {
                        heightFra = 0.875;
                    } else if (heightFra == '15/16') {
                        heightFra = 0.9375;
                    } else {
                        heightFra = 0;
                    }

                    if (heightInc) {
                        price += +heightInc * ft;
                    }
                    
                    if (heightFra) {
                        price += +heightFra * fraFt;
                    }

                    if (widthFra == '1/16') {
                        widthFra = 0.0625;
                    } else if (widthFra == '1/8') {
                        widthFra = 0.125;
                    } else if (widthFra == '1/8') {
                        widthFra = 0.125;
                    } else if (widthFra == '3/16') {
                        widthFra = 0.1875;
                    } else if (widthFra == '1/4') {
                        widthFra = 0.25;
                    } else if (widthFra == '5/16') {
                        widthFra = 0.3125;
                    } else if (widthFra == '3/8') {
                        widthFra = 0.375;
                    } else if (widthFra == '7/16') {
                        widthFra = 0.4375;
                    } else if (widthFra == '1/2') {
                        widthFra = 0.5;
                    } else if (widthFra == '9/16') {
                        widthFra = 0.5625;
                    } else if (widthFra == '5/8') {
                        widthFra = 0.625;
                    } else if (widthFra == '11/16') {
                        widthFra = 0.6875;
                    } else if (widthFra == '3/4') {
                        widthFra = 0.75;
                    } else if (heightFra == '13/16') {
                        widthFra = 0.8125;
                    } else if (widthFra == '7/8') {
                        widthFra = 0.875;
                    } else if (widthFra == '15/16') {
                        widthFra = 0.9375;
                    } else {
                        widthFra = 0;
                    }

                    if (widthInc) {
                        price += +widthInc * ft;
                    }

                    if (widthFra) {
                        price += +widthFra * fraFt;
                    }

                    if (diameterFra == '1/16') {
                        diameterFra = 0.0625;
                    } else if (diameterFra == '1/8') {
                        diameterFra = 0.125;
                    } else if (diameterFra == '1/8') {
                        diameterFra = 0.125;
                    } else if (diameterFra == '3/16') {
                        diameterFra = 0.1875;
                    } else if (diameterFra == '1/4') {
                        diameterFra = 0.25;
                    } else if (diameterFra == '5/16') {
                        diameterFra = 0.3125;
                    } else if (diameterFra == '3/8') {
                        diameterFra = 0.375;
                    } else if (diameterFra == '7/16') {
                        diameterFra = 0.4375;
                    } else if (diameterFra == '1/2') {
                        diameterFra = 0.5;
                    } else if (diameterFra == '9/16') {
                        diameterFra = 0.5625;
                    } else if (diameterFra == '5/8') {
                        diameterFra = 0.625;
                    } else if (diameterFra == '11/16') {
                        diameterFra = 0.6875;
                    } else if (diameterFra == '3/4') {
                        diameterFra = 0.75;
                    } else if (diameterFra == '13/16') {
                        diameterFra = 0.8125;
                    } else if (diameterFra == '7/8') {
                        diameterFra = 0.875;
                    } else if (diameterFra == '15/16') {
                        diameterFra = 0.9375;
                    } else {
                        diameterFra = 0;
                    }

                    if (diameterInc) {
                        price += +diameterInc * ft;
                    }

                    if (diameterFra) {
                        price += +diameterFra * fraFt;
                    }

                    if (thick) {
                        price = price * thick;
                    }

                    if (type) {
                        price = price * type;
                    } 

                    cardPrice.innerHTML = `Price: ${price.toFixed(2)}$`;
                } else {
                    price = 33.30;

                    if (heightFra == '1/16') {
                        heightFra = 0.0625;
                    } else if (heightFra == '1/8') {
                        heightFra = 0.125;
                    } else if (heightFra == '1/8') {
                        heightFra = 0.125;
                    } else if (heightFra == '3/16') {
                        heightFra = 0.1875;
                    } else if (heightFra == '1/4') {
                        heightFra = 0.25;
                    } else if (heightFra == '5/16') {
                        heightFra = 0.3125;
                    } else if (heightFra == '3/8') {
                        heightFra = 0.375;
                    } else if (heightFra == '7/16') {
                        heightFra = 0.4375;
                    } else if (heightFra == '1/2') {
                        heightFra = 0.5;
                    } else if (heightFra == '9/16') {
                        heightFra = 0.5625;
                    } else if (heightFra == '5/8') {
                        heightFra = 0.625;
                    } else if (heightFra == '11/16') {
                        heightFra = 0.6875;
                    } else if (heightFra == '3/4') {
                        heightFra = 0.75;
                    } else if (heightFra == '13/16') {
                        heightFra = 0.8125;
                    } else if (heightFra == '7/8') {
                        heightFra = 0.875;
                    } else if (heightFra == '15/16') {
                        heightFra = 0.9375;
                    } else {
                        heightFra = 0;
                    }

                    if (heightInc) {
                        price += +heightInc * ft;
                    }
                    if (heightFra) {
                        price += +heightFra * fraFt;
                    }

                    if (widthFra == '1/16') {
                        widthFra = 0.0625;
                    } else if (widthFra == '1/8') {
                        widthFra = 0.125;
                    } else if (widthFra == '1/8') {
                        widthFra = 0.125;
                    } else if (widthFra == '3/16') {
                        widthFra = 0.1875;
                    } else if (widthFra == '1/4') {
                        widthFra = 0.25;
                    } else if (widthFra == '5/16') {
                        widthFra = 0.3125;
                    } else if (widthFra == '3/8') {
                        widthFra = 0.375;
                    } else if (widthFra == '7/16') {
                        widthFra = 0.4375;
                    } else if (widthFra == '1/2') {
                        widthFra = 0.5;
                    } else if (widthFra == '9/16') {
                        widthFra = 0.5625;
                    } else if (widthFra == '5/8') {
                        widthFra = 0.625;
                    } else if (widthFra == '11/16') {
                        widthFra = 0.6875;
                    } else if (widthFra == '3/4') {
                        widthFra = 0.75;
                    } else if (heightFra == '13/16') {
                        widthFra = 0.8125;
                    } else if (widthFra == '7/8') {
                        widthFra = 0.875;
                    } else if (widthFra == '15/16') {
                        widthFra = 0.9375;
                    } else {
                        widthFra = 0;
                    }

                    if (widthInc) {
                        price += +widthInc * ft;
                    }
                    if (widthFra) {
                        price += +widthFra * fraFt;
                    }

                    if (thick) {
                        price = price * thick;
                    }

                    if (type) {
                        price = price * type;
                    } 

                    cardPrice.innerHTML = `Price: ${price.toFixed(2)}$`;
                }
                break;
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

            document.querySelector('#card-thickness').innerHTML = `Thickness: ${thickness}`;

            if (thickness == '1/8') {
                allType.forEach(type => {
                    if (type.dataset.xs == "true" || type.dataset.s == "true" || type.dataset.m == "true" || type.dataset.l == "true" || type.dataset.xl == "true") {
                        type.style.display = 'none';
                    }
                });
                thick = thickness1;

                showStepContent(3);
            } else if (thickness == '3/16') {
                allType.forEach(type => {
                    if (type.dataset.xs == "true" || type.dataset.s == "true" || type.dataset.m == "true" || type.dataset.l == "true" || type.dataset.xl == "true") {
                        type.style.display = 'none';
                    }
                });
                thick = thickness2;

                showStepContent(3);
            } else if (thickness == '1/4') {
                allType.forEach(type => {
                    if (type.dataset.xs == "true") {
                        type.style.display = 'none';
                    }
                });
                thick = thickness3;

                showStepContent(3);
            } else if (thickness == '3/8') {
                allType.forEach(type => {
                    if (type.dataset.s == "true") {
                        type.style.display = 'none';
                    }
                });
                thick = thickness4;

                showStepContent(3);
            } else if (thickness == '1/2') {
                allType.forEach(type => {
                    if (type.dataset.m == "true") {
                        type.style.display = 'none';
                    }
                });

                thick = thickness5;

                showStepContent(3);
            } else if (thickness == '5/8') {
                allType.forEach(type => {
                    if (type.dataset.l == "true") {
                        type.style.display = 'none';
                    }
                });

                thick = thickness6;

                showStepContent(3);
            } else if (thickness == '3/4') {
                allType.forEach(type => {
                    if (type.dataset.xl == "true") {
                        type.style.display = 'none';
                    }
                });
                thick = thickness7;

                showStepContent(3);
            }
        });
    });

    const allTypes = document.querySelectorAll('.type label');

    allTypes.forEach(item => {
        item.addEventListener('change', () => {
            const input = item.querySelector('input');

            if (input.checked) {
                type = input.value;

                if (input.value == 'Bronze') {
                    type = bronze;
                } else if (input.value == 'Grey') {
                    type = grey;
                } else if (input.value == 'Ultra Clear (Low-Iron)') {
                    type = ultraClear;
                } else if (input.value == 'Acid Etched Regular') {
                    type = acidEtchedRegular;
                } else if (input.value == 'Acid Etched Low-Iron (Velour)') {
                    type = acidEtchedLowIron;
                } else if (input.value == 'Clear Laminated (non temperable)') {
                    type = clearLaminated;
                } else if (input.value == 'White Laminated (non temperable)') {
                    type = whiteLaminated;
                } else if (input.value == 'Clear Sand-Blasted (one side)') {
                    type = clearSandBlasted;
                } else if (input.value == 'Custom Back Painted') {
                    type = painted;
                } else if (input.value == 'One-Way Mirror') {
                    type = oneWayMirror;
                } else if (input.value == 'Low-Iron Sand-Blasted (one side)') {
                    type = lowIronSandBlasted;
                } else if (input.value == 'Super Gray') {
                    type = superGrey;
                } else {
                    type = clear;
                }

                document.querySelector('#card-type').innerHTML = `Type: ${input.value ? input.value : "Clear"}`;
                showStepContent(3);
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
