// alert('hello')
;(function($){
    
    // $(document).on('click','.add_remove_prop',function(){
    //     $('.property').prop('color','red')
    //     let prop = $('.property').prop('color')
    //     $('.property').append(`<b>${prop}</b>`)
    // })

    // $(document).on('click','.append_data',function(){
    //     $('.show_append_data').prepend(`<b> Append data</b>`);
        // $('.show_append_data').append(`<b> Append data</b>`);
    // })
    // $(document).on('click','.bt_1',function(){
    //     $('h3').addClass('text_color');
    // })
    // $(document).on('click','.bt_2',function(){
    //     $('h3').removeClass('text_color');
    // })
    // $(document).on('click','.bt_3',function(){
    //     $('h3').toggleClass('text_color');
    // })
    // $('.text_color').on('input',function(){
    //     let p_cl = $(this).val()
    //     $('.p_color').css({
    //         'background': p_cl ,
    //         'color' : 'white'
    //     })
    // })
    // $('.fileinput').change(function(){
    //     var file = this.files[0];
    //     $('.imagepreview').attr('src', URL.createObjectURL(file));
    // });
    // jquery event
    // $(window).resize(function () { 
    //     let window_height = $(window).height()
    //     let window_width = $(window).width()
    //     $('.window_resize_value').text( `Height: ${window_height} And Width: ${window_width}`)    
    // });
    // $('.demo_image').on('load', function(){
    //         alert('hello image')
    // });
    // $("form").submit(function(){
    //     alert("Submitted");
    // });
    // let p_text;
    // $(document).on('mouseover','.mouse_over',function(){
    //     p_text = $(this).text();
    //     $(this).css({
    //         'color' : 'red',
    //         'cursor' : 'pointer'
    //     }).html('<a href="https://www.google.co.uk/" class="move_link"> hello mouse over and out </a>')
    // })
    // $(document).on('mouseout','.mouse_over',function(){
        // let p_text = $(this).text();
    //     $(this).css({
    //         'color' : 'black',
    //     }).text(p_text)
    // })
    // $(document).on('click','.move_link',function(){
    //     window.location.href = $(this).attr('href')
    // })
    // $(document).on('blur','.jq_event_form .input_text',function(){
    //     let input_val = $(this).val()
    //     $('.blur_text').html(input_val);
    // })
    // $(document).on('change','.jq_event_form .select_input',function(){
    //     let input_val = $(this).val()
    //     $('.select_value').html(input_val);
    // })
    // $(document).on('focus','.jq_event_form .your_email[data-email]',function(){
    //     $(".hidden_span").css("display", "inline").fadeOut(2000);
    //     $(this).css({
    //         'border' : '1px solid red',
    //         'outline' : 'none'
    //     })
    // })
    // $(document).on('focusout','.jq_event_form .your_email[data-email]',function(){
    //     $(this).css({
    //         'border' : '1px solid green'
    //     })
        // $(".hidden_span").css("display", "inline").fadeOut(2000);
        // $(this).css({
        //     'border' : '1px solid red',
        //     'outline' : 'none'
        // })
    // })
    // selector
    // $('.form_data').css({
    //     'display' : 'flex',
    //     'flex-direction' : 'column',
    //     'gap' : '12px'
    // })
    // $(':text').css({
    //     'background' : 'red',
    // })
    // $(document).on('click','.show_text_value',function(){
    //     let t_val =  $('.form_data').find(':text').val()
    //     $('.text_value').html(t_val)
    // })
    // $(':submit').val('Clicked here to Submit').css({
    //     'color' : 'red'
    // })
    // $(document).on('click','.show_selected',function(){
    //     $('.form_data').find(':checkbox:checked').css({
    //         'width' : '42px',
    //         'height' : '42px',
    //     })
    // })
    // $(document).on('click','.show_radio',function(){
    //     let r_value = $('.form_data').find(':radio').val()
    //     $('.radio_data').html(r_value)
    // })
    // $(document).on('click','.show_selected_data',function(){
    //     let select_value = $('.form_data').find(':selected').val()
    //     $('.select_data').html(select_value)
    // })

    
    // $(document).on('click','.content_wrap',function(){
    //     $('.content_div .another_content_div').contents().filter('p').wrap('<b></b>')
    // })
    // $(document).on('click','.find_parent',function(){
    //     $('.child_3').closest('.s_parent').text('hello parent child')
    // })
//  $(document).on('click','.parent_btn',function(){
    // $('.parent').children().css({
    //     'color' : 'red',
    //     'font-size' : '22px'
    // })
    // $.each($('.parent li').text('hello'));
    // $.each($('.parent li'), function (indexInArray, valueOfElement) { 
    //      alert('hello');
    // });
    // $('.child_1').text('hello child');
//  })
//  $(document).on('click','.add_element',function(){
    // $('.p_span').add('span').css({
    //     'color' : 'red'
    // })
//  })

})(jQuery)