'use strict';
var gPortfolio;
var gId = 'portfolioModal'
var gCount = 1;

function makeId(){
    return `${gId+gCount++}`

}
function getPortfolioById(id) {
    console.log(id);

    var modal = gPortfolio.find(function (portfolio) {
        return id === portfolio.id
    })
    return modal
}

function createPortfolios() {
    gPortfolio = [
        _createPortfolio('mine sweeper', 'Lorem ipsum dolor', 'https://gilakiva1.github.io/mine-sweeper/', 'img/portfolio/mine.jpg'),
        _createPortfolio('pacman', 'Lorem ipsum dolor', 'https://gilakiva1.github.io/packman/', 'img/portfolio/packmen.jpg')
     
    ];

}
function getPortfolios(){
    return gPortfolio;
}

function _createPortfolio(name, title, url, img) {
    return {
        id: makeId(),
        name,
        title,
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url,
        img,
        labels: ["Matrixes", "keyboard events"]
    }

}