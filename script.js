const divContainer = document.querySelector('.container');
const toggleButtons = document.querySelectorAll('.toggle__item');
let elems = [];
let changeElems = []

// list change

const changeListStyle = (e) => {
  if (e.target.getAttribute('data-style') === 'list') {
    divContainer.style.cssText = `
      display: block;
      width: 100%;
    `;
    divContainer.childNodes.forEach(item => {
      if (item.nodeName !== '#text') {
        item.style.cssText = `
        width: 100%;
        margin: 20px 0px;
      `
      }
    })
  } else {
    divContainer.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-item: center;
    `;
    divContainer.childNodes.forEach(item => {
      if (item.nodeName !== '#text') {
        item.style.cssText = `
        width: 30%;
        margin: 10px;
        `;
      }
    })
        
  }
}

toggleButtons.forEach(item => {
  item.addEventListener('click', (e) => {
    toggleButtons.forEach(elem => elem.classList.remove('active'))
    if (e.target.tagName === 'IMG') {
      e.target.parentNode.classList.add('active')
      changeListStyle(e);
      
    } else {
      e.target.classList.add('active')
      changeListStyle(e);
    } 
  })
})

// change element id

const createDivElement = () => {

  for (let i = 0; i < 100; i++) {
    const divElem = document.createElement('div');
    divElem.textContent = `div_${i + 1}`;
    divElem.classList.add('container__element');
    divElem.dataset.number = i;
    divElem.addEventListener('click', (e) => changePosition(e));

    elems.push(divElem);
    changeElems.push(divElem)
  }

}
createDivElement()

elems.forEach(elem => divContainer.append(elem));

function changePosition(e) {
  const startNumber = +e.target.getAttribute('data-number');

  if (e.target === elems[0]) {
    elems = changeElems.map(item => item);
    elems.unshift(e.target);
    elems.forEach(elem => divContainer.append(elem));
    return 
  }

  elems = changeElems.map(item => item);
  elems = elems.filter((item, i) => i !== startNumber);
  elems.unshift(e.target);
  elems.forEach(elem => divContainer.append(elem));
}


