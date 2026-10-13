/**
 * Portfolio Flavien GARIBALDI — Main JS
 * Navigation, menu mobile, animations, scroll
 */

$(document).ready(function () {

    /* ──────────────────────────
       Menu mobile (burger)
    ────────────────────────── */
    $(".navBtnA").click(function () {
        $(".nav_box ul li .suv").stop().slideUp();
        $(".nav_box ul li .sbmd").removeClass("cur");
        $(".nav_box ul li .sbdm .sum").stop().slideUp();
        $(".nav_box ul li .sbdm").removeClass("cur");
    });

    $(document).on("click", ".navBtn", function () {
        $(".nav_box_6").toggleClass("cur");
        $(".header").toggleClass("cur");
    });

    $(".navBtn").click(function (e) {
        $(".nav_box").toggleClass("cur");
        $(this).toggleClass("mobile-menu-on");
        $(this).toggleClass("navBtnA");
        $(".nav_box .navlist ul>li .navlist2").css("left", "-102%");
        $(".nav_box .navlist ul>li").removeClass("cur");
        e.stopPropagation();
    });

    $(".backFirst").click(function () {
        $(".nav_box .navlist ul>li .navlist2").css("left", "-102%");
    });

    $(document).on("click", ".nav_box .navlist ul>li .navlist2 a", function () {
        $(".navBtn").removeClass("mobile-menu-on");
    });

    $(document).on("click", ".nav_box .navlist ul>li a.sub", function () {
        $(this).next().css("left", "0");
    });

    /* Mobile nav dropdown */
    $(".nav_box .navlist ul>li .sub").click(function () {
        $(this).toggleClass("cur");
        $(this).next(".navlist4").find(".nomsjkxks").slideToggle(400);
    });

    /* ──────────────────────────
       Header fixe au scroll
    ────────────────────────── */
    var headerH = $(".header").outerHeight() || 80;
    $(window).scroll(function () {
        var s = $(document).scrollTop();
        if (s > headerH) {
            $(".header").addClass("fixed-head");
        } else {
            $(".header").removeClass("fixed-head");
        }
    });

    /* ──────────────────────────
       Bannières
    ────────────────────────── */
    $(".nybanner").addClass("cur");
    $(".commonbanner").addClass("cur");

    /* ──────────────────────────
       Onglets (tabs)
    ────────────────────────── */
    $(".tabSwitch").each(function () {
        var obj = $(this);
        obj.find(".tabTit").children().on("click tab", function () {
            $(this).addClass("cur").siblings().removeClass("cur");
            if ($(this).data("to")) {
                $($(this).data("to")).val($(this).data("id"));
            }
            if (obj.find(".tabBox").children().eq($(this).index()).length > 0)
                obj.find(".tabBox").children().hide().eq($(this).index()).show();
            if (obj.find(".tabBox2").children().eq($(this).index()).length > 0)
                obj.find(".tabBox2").children().hide().eq($(this).index()).show();
            return false;
        });
        obj.find(".tabTit .cur").trigger("tab");
    });

    $(".tabSwitchHover").each(function () {
        var obj = $(this);
        obj.find(".tabTit").children().on("mouseover tab", function () {
            $(this).addClass("cur").siblings().removeClass("cur");
            if ($(this).data("to")) {
                $($(this).data("to")).val($(this).data("id"));
            }
            if (obj.find(".tabBox").children().eq($(this).index()).length > 0)
                obj.find(".tabBox").children().hide().eq($(this).index()).show();
            if (obj.find(".tabBox2").children().eq($(this).index()).length > 0)
                obj.find(".tabBox2").children().hide().eq($(this).index()).show();
        });
        obj.find(".tabTit .cur").trigger("tab");
    });

    /* ──────────────────────────
       Bouton retour en haut
    ────────────────────────── */
    $(".backTop").click(function () {
        if ($(document).scrollTop() !== 0) {
            $("html,body").animate({ scrollTop: 0 }, 500);
        }
    });

    /* ──────────────────────────
       Body class (pour animations)
    ────────────────────────── */
    $("body").addClass("hide");

    /* ──────────────────────────
       Indicateur de page active dans la navigation
    ────────────────────────── */
    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    // Header desktop nav
    $(".header-r1 ul li a").each(function () {
        var href = $(this).attr("href");
        if (href === currentPage) {
            $(this).addClass("active-link");
            $(this).closest("li").addClass("active");
        }
    });
    // Mobile nav
    $(".nav_box .navlist ul li a").each(function () {
        var href = $(this).attr("href");
        if (href === currentPage) {
            $(this).addClass("active-link");
        }
    });
});

/* ──────────────────────────
   Bloquer le scroll quand le menu mobile est ouvert
────────────────────────── */
(function () {
    var navElement = document.querySelector(".nav_box_6.nav_box");
    if (!navElement) return;

    var preventScroll = function (e) { e.preventDefault(); };

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName !== "class") return;
            if (navElement.classList.contains("cur")) {
                document.body.style.overflow = "hidden";
                document.addEventListener("touchmove", preventScroll, { passive: false });
                document.addEventListener("wheel", preventScroll, { passive: false });
            } else {
                document.body.style.overflow = "auto";
                document.removeEventListener("touchmove", preventScroll);
                document.removeEventListener("wheel", preventScroll);
            }
        });
    });

    observer.observe(navElement, { attributes: true, attributeFilter: ["class"] });
})();

/* ──────────────────────────
   Afficher / cacher le bouton retour en haut
────────────────────────── */
$(window).scroll(function () {
    var s = $(document).scrollTop();
    if (s > 400) {
        $(".backTop").fadeIn();
    } else {
        $(".backTop").fadeOut();
    }

    /* Bannière interne scroll effect */
    if ($(".nybanner").length && s > $(".nybanner").height()) {
        $(".mbdaoh").addClass("owoe");
    } else {
        $(".mbdaoh").removeClass("owoe");
    }
});
