<?php 
add_shortcode( 'jq_learning', 'jq_learning_callback' );
function jq_learning_callback(){
    ob_start();
    ?>
    <!-- <p class="property"> Lorem ipsum dolor sit amet consectetur.</p>
    <button class='add_remove_prop'> Add remove property </button> -->
    <!-- <p class="show_append_data"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, asperiores?</p>
    <h3 class="first_h"> Lorem ipsum dolor sit amet consectetur. </h3>
    <h3> Lorem ipsum dolor sit amet consectetur. </h3>
    <button class='bt_1'> Click Here </button>
    <button class='bt_2'> Click Here </button>
    <button class='bt_3'> Toggle Here </button>
    <button class='append_data'> Append data</button> -->
    <!-- <div class="main">
        <input type="color" name="text_color" id="" class="text_color">
        <p class='p_color'> this is a new input  </p>
    </div>

    <input type="file" class="fileinput">
    <img class="imagepreview" src="#" style="max-width: 300px; max-height: 300px;"> -->
    <!-- <h2 class="window_resize_value"> </h2>
    <img src="<?php echo 'https://placehold.co/400' ?>" alt="" class="demo_image">
    -->
    <!-- <p class="mouse_over"> Move the mouse pointer over this paragraph. </p>
    <form action="" class='jq_event_form'>
        <label for="">
            <span>Enter your name :</span>
            <input type="text" name="your_name" id="" class='input_text'>
        </label>
        <label for="">
            <span>Enter your Email :</span>
            <input type="text" name="your_email" id="" data-email='email' class='your_email'>
            <span class='hidden_span'>Nice to meet you!</span>
            <input type="text" name="your_email" id="" class='your_email'>
        </label>
        <select name="select_input" id="" class='select_input'>
            <option value="Dhaka">Dhaka</option>
            <option value="Cumilla">Cumilla</option>
            <option value="Rangpur">Rangpur</option>
        </select>
        <input type="submit" value="Submit">
    </form>
    <h3 class='blur_text'> </h3>
    <h3 class='select_value'> </h3>
    <h3 class='email_value'> </h3> -->
    <!-- <form action="" class="form_data" >
        <label for=""> 
            <span> Name : </span>
            <input type="text" name="f_name" id="f_name" class='name'>
        </label> <br>
        <select name="select" id="">
            <option value="option_1"> option 1 </option>
            <option value="option_2"> option 2 </option>
            <option value="option_3"> option 3 </option>
        </select>
        <label for="">
            <span> City : </span>
            <input type="checkbox" name="city" id="">
        </label> <br>
        <label for="">
            <span> Gender : </span>
            <input type="radio" name="gender" id=""> Male
            <input type="radio" name="gender" id=""> Famale
        </label> <br>
        <input type="submit" value="submit" name="submit_data">
    </form>
    <p class='text_value'> </p> 
    <p class='radio_data'> </p>
    <p class='select_data'> </p>
    <p class='text_value'> </p>
    <button class='show_text_value'> Show Text value</button> <br>
    <button class='show_selected'> Show selected</button> <br>
    <button class='show_selected_data'> Show select data</button> <br>
    <button class='show_radio'> Show Radio</button> <br> -->
    <!-- <div class='content_div'>
        <div class="another_content_div">
            <p>Hello world! What a beautiful day!</p>
            <p>Hello world! What a beautiful day!</p>
            <p class='last_p'>Hello world! What a beautiful day!</p>
        </div>
    </div>
    <button class='content_wrap'> Content wrap </button> -->
    <!-- <div class="f_parent">
        <div class="s_parent">
            <div class="child_1"> child 1 </div>
            <div class="child_2"> child 2 </div>
            <div class="child_3"> child 3 </div>
        </div>
    </div>
    <button class='find_parent'> Find parent </button> -->
    <!-- <p class='p_span'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aspernatur?</p>
    <ul class="parent">
        <li class="child_1"> child 1</li>
        <li> child 2</li>
        <li> child 3</li>
    </ul>
    <span class="span_text"> this a span text </span> <br>
    <button class="parent_btn"> Target children </button>
    <button class="add_element"> Add element </button> -->
    <?php
    return ob_get_clean();
}