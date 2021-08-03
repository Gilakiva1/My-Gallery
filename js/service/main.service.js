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
        _createPortfolio('mine sweeper', 'Lorem ipsum dolor', 'https://gilakiva1.github.io/mine-sweeper/'),
        _createPortfolio('pacman', 'Lorem ipsum dolor', 'https://gilakiva1.github.io/packman/')
     
    ];

}
function getPortfolios(){
    return gPortfolio;
}

function _createPortfolio(name, title, url) {
    return {
        id: makeId(),
        name,
        title,
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url,
        img:'img/portfolio/project.jpg',
        labels: ["Matrixes", "keyboard events"]
    }

}