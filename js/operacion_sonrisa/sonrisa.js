'use strict';
    var me = this;
    var currency = 'PEN';
    var amount = 0;
    var customamount = 0;
        var template =  document.createElement('div');
        template.id='donation-sonrisa-box';
        template.innerHTML = '<div class="donation-sonrisa-hidden">' +
        '<a class="donation-sonrisa-close-widget" id="donation-sonrisa-close-widget">&times;</a>'+
        '<div class="donation-sonrisa" id="container" style=""><div class="donation-sonrisa-block">' +
        '<img class="donation-sonrisa-image" src="https://s3-us-west-2.amazonaws.com/joinnus.com/content/donacion/operacion-sonrisa-widget.png">'+
        '</div><span class="donation-sonrisa-block donation-sonrisa-message">DONA AQUÍ</span><img class="powered_joinnus" src="https://www.joinnus.com/inc/donation/images/powered.png" alt="">'+
        '</div></div>';
        document.body.appendChild(template);


    var closewidget     = document.getElementById('donation-sonrisa-close-widget');
    var currencyclass   = document.getElementsByClassName('donate-currency');
    var amountclass     = document.getElementsByClassName('donate-amount');

    var container = document.getElementById('container');

    container.onclick = function() {
        window.open("https://www.joinnus.com/donacion/operacion-sonrisa");
    }

    closewidget.onclick = function() {
        document.getElementById('donation-sonrisa-box').remove();
    }
