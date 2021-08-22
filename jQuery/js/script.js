    $(document).ready(function () {
        $('.main_btn, a[href="#sheldure"]').on('click', function () {
            $('.modal').css({
                display: 'block'
            });
        });
        $('.close').on('click', function () {
            $('.modal').css({
                display: 'none'
            });
        });
    });