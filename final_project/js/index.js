$(() => {
    var a = 0
    $('#todolist0').hide()
    $('#change').hide()
    $('.container').on('click', '.item', function() {
        $(this).toggleClass("completed")
    });
    $('.container').on('click', 'span', function(event) {
        $('#exampleModal').modal('show')
        var n = $('button#check').attr('name')
        $dele = $(this).parent()
        $dele1 = $(this)
        $('#exampleModal').on('click', '#sure', function(event) {
            console.log('a')
            $('#exampleModal').modal('hide')
            $($dele).fadeOut(500, function() {
                $($dele1).remove();
            });
            event.stopPropagation()
        })
    });
    $('.container').on('keypress', '#todos', function(e) {
        var key = window.event ? e.keyCode : e.which;
        if (key == 13) {
            var n = $(this).parent().attr('id')
            console.log($(this).parent().attr('id'))
            $img = $('<i>').attr('class', 'fas fa-trash-alt')
            $icon = $('<span>').attr('class', 'trash')
            $text = $("#" + n).children('#todos').val()
            console.log($("#" + n).children('#todos').val())
            $icon1 = $('<span>').attr('class', 'trash').append($img)
            $item = $('<li>').attr('class', 'item').append($icon1).append($text)
            $("#" + n).children('#list').append($item)
            $text = $("#" + n).children('#todos').val('')
                // $('#list' + n + '').append($item)

        }

    })

    $('.container').on('click', '#todotitle', function() {

        var n = $(this).parent().attr('id')
            //console.log($(this).parent().attr('id'))
        $title = $("#" + n).children('#todotitle')
        $change = $("#" + n).children('#change')
        $title.hide()
        $change.show()
            //document.getElementById('todotitle').outerHTML = "<input type='text' placeholder='Change your subject' id='change'>";
        $('.container').on('keypress', $change, function(e) {
            var key = window.event ? e.keyCode : e.which;
            if (key == 13) {
                var subject = $("#" + n).children('#change').val()
                $title.text(subject)
                $change.hide()
                $title.show()
            }
        })


    });
    $('#plus').on('click', function() {
        a++
        $title = $('<h1>').attr('id', 'todotitle').text('Add New Subject')
        $input1 = $('<input>').attr('id', 'change').attr('placeholder', 'Change your subject')
        $input = $('<input>').attr('id', 'todos').attr('placeholder', 'Add New Todo')
        $list = $('<div>').attr('id', 'list')
        $new = $('<div>').attr('class', 'todolist').attr('id', 'todolist' + a + '').append($title).append($input1).append($input).append($list)
        $('.container').append($new)
        $input1.hide()

        // var bar = document.getElementById('todolist');
        // bar.setAttribute('id', 'todolist' + a + '')

    })

})