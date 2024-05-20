// alert('hello')
;(function($){
    // jquery event
    $(document).on('blur','.jq_event_form .input_text',function(){
        let input_val = $(this).val()
        $('.blur_text').html(input_val);
    })
    $(document).on('change','.jq_event_form .select_input',function(){
        let input_val = $(this).val()
        $('.select_value').html(input_val);
    })
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