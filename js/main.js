$(document).ready(function() {
  $(".sidenav").sidenav();

  $(".sidenav li").click(function() {
    setTimeout(() => {
      let foo = true;
      $(".sidenav").sidenav("close");
    }, 350);
  });

  $(".scrollspy").scrollSpy({ scrollOffset: 70 });

  $("#cta-btn").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, 600);
    return false;
  });

  $("#go-top-btn").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
