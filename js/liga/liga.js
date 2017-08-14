'use strict';
    var me = this;
    var currency = 'PEN';
    var amount = 0;
    var customamount = 0;
        var template =  document.createElement('div');
        template.id='donation-liga-box';
        template.innerHTML = '<div class="donation-liga-hidden">' +
        '<a class="donation-liga-close-widget" id="donation-liga-close-widget">&times;</a>'+
        '<div class="donation-liga" id="container" style=""><div class="donation-liga-block">' +
        '<img class="donation-liga-image" src="https://s3-us-west-2.amazonaws.com/joinnus.com/events/lataliga.png">'+
        '</div><span class="donation-liga-block donation-liga-message">DONA AQUÍ</span><img class="powered_joinnus" src="https://www.joinnus.com/inc/donation/images/powered.png" alt="">'+
        '</div></div>';
        document.body.appendChild(template);


    var closewidget     = document.getElementById('donation-liga-close-widget');
    var currencyclass   = document.getElementsByClassName('donate-currency');
    var amountclass     = document.getElementsByClassName('donate-amount');

    var container = document.getElementById('container');

    container.onclick = function() {
        window.open("https://www.joinnus.com/donacion/liga-contra-el-cancer");
    }

    closewidget.onclick = function() {
        document.getElementById('donation-liga-box').remove();
    }
