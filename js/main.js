console.log('Starting up');
'use strict';

$(document).ready(init);

function init() {
    createPortfolios();
    renderGallery();
}

function renderModal(id) {
    console.log(id);
    var modal = getPortfolioById(id);
     console.log(modal);
    var strHtml = `
                <h2>${modal.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="${modal.img}" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
    `
    var $elDiv = $('.modal-body');
    $elDiv.html(strHtml)
}

function renderGallery() {
    var $elDiv = $('.row-item');
    var portfolios = getPortfolios();
    var strHtml = portfolios.map(function (portfolio) {
        console.log(portfolio.id);
        return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${portfolio.id}')" href="#portfolioModal" >
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"></i>
    </div>
    </div>
    <img class="img-fluid" src="${portfolio.img}" >
    </a>
    <div class="portfolio-caption">
    <h4>${portfolio.name}</h4>
    <p class="text-muted">${portfolio.title}</p>
    </div>
    </div>`

    })
    $elDiv.html(strHtml);
}

{
    /* <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${portfolio.id}')" href="#portfolioModal" >
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"></i>
    </div>
    </div>
    <img class="img-fluid" src="${portfolio.img}" >
    </a> */
}