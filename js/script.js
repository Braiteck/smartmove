jQuery(function($){

	/*$(document).on('change', '.error', function() {
        $(this).removeClass('error');
    })

    $('form button').on('click', function(event){
        event.preventDefault();
        var dataForAjax = "action=form&";
        var addressForAjax = myajax.url;
        var valid = true;
        
        $(this).closest('form').find('input:not([type=submit]),textarea').each(function(i, elem) {
            if (this.value.length < 3 && $(this).hasClass('required')) {
                valid = false;
                $(this).addClass('error');
            }
            if ($(this).attr('name') == 'email' && $(this).hasClass('required')) {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (!pattern.test($(this).val())) {
                    valid = false;
                    $(this).addClass('error');
                }
            }
            if ($(this).attr('name') == 'agree' && !$(this).prop("checked")) {
                $(this).addClass('error');
                valid = false;
            }

            if (i > 0) {
                dataForAjax += '&';
            }
            dataForAjax += this.name + '=' + this.value;
        })

        if (!valid) {
            return false;
        }               

        $.ajax({
            type: 'POST',
            data: dataForAjax,
            url: addressForAjax,
            success: function(response) {
            	
            	$.fancybox.close(true)

                $.fancybox.open({
                    src:"#thanks",
                    type: 'inline',
                    touch: false
                })
            	$('.main form').trigger("reset");
                
            }
        });
      
    });*/

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        $.fancybox.close(true)

        $.fancybox.open({
            src:"#thanks",
            type: 'inline',
            touch: false
        })
    }, false );


});