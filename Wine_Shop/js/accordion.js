let accordions;
const accordionWrapper = document.querySelector('.accordion-wrapper');
console.log(accordionWrapper);

const contentData = [
    {
        id: 1,
        title: 'Are you a wholesale wine supplier?',
        content: 'Our winery produces craft wine. Bulk orders are possible, but lots cannot be large.'
    },

    {
        id: 2,
        title: 'Do you ship wine within the USA?',
        content: 'Our winery offers wine-lovers more than 10 different varieties of wines with different aging periods.'
    },

    {
        id: 3,
        title: 'How many varieties are there in your winery?',
        content: 'Our winery offers wine-lovers more than 10 different varieties of wines with different aging periods.'
    },

    {
        id: 4,
        title: 'Do you advise on the choice of wine?',
        content: 'Yes. Our winery experts will tell you more about the varieties and help you choose the best option for you.'
    },

    {
        id: 5,
        title: 'Where are your vineyards located?',
        content: "We are located in the Napa Valley, America's most famous wine region."
    }
];

const createTemplate = item => {
    return `
        <div class="accordion-item">
            <div class="accordion-item-title">${item.title}</div>
            <div class="accordion-item-content">${item.content}</div>
        </div>
    `
}

const fillHtmlList = () => {
    contentData.forEach(item => {
        accordionWrapper.innerHTML += createTemplate(item);
    })
    accordions = document.querySelectorAll('.accordion-item');
}

fillHtmlList();


if(accordions) {
    for(item of accordions) {
        item.addEventListener("click", function() {
            if(this.classList.contains("active")) {
                this.classList.remove('active');
            } else {
                for(el of accordions) {
                    el.classList.remove('active');
                }
                this.classList.add('active');
            }
        });
    }
}
