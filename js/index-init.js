// Index page — parallax scroll on section titles
(function() {
    'use strict';

    $(window).scroll(function() {
        var npos = $(window).scrollTop();
        var SH = $(window).height();
        var SW = $(window).width();

        var $subject = $(".subject");
        if ($subject.length) {
            var subjectOffset = $subject.offset();
            if (subjectOffset) {
                var mHei = subjectOffset.top;
                var TextHei = $subject.height();
                if (TextHei > 0) {
                    if (npos > (mHei - SH * 0.5)) {
                        var num = ((npos - mHei + SH * 0.5) / TextHei) * 80;
                        if (num <= 0) { num = 0; }
                        else if (num > 100) { num = 100; }
                        $(".subject .t1").css("background-size", num + "% 100%");
                    } else {
                        $(".subject .t1").css("background-size", "0% 100%");
                    }
                }
            }
        }

        var $addCase = $(".addCaseC-c");
        if ($addCase.length) {
            var addCaseOffset = $addCase.offset();
            if (addCaseOffset) {
                var mHei2 = addCaseOffset.top;
                if (npos > (mHei2 - SH * 0.5)) {
                    var wyHei  = (npos - mHei2 + SH * 0.5) * 0.6;
                    var wyHeib = wyHei - 260;
                    if (SW < 1100) {
                        wyHeib = wyHeib * 0.5;
                    }
                    $(".subject").css("bottom", wyHeib + "px");
                }
            }
        }
    });

    $('body').addClass("hide");
})();
