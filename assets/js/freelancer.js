(function() {
  "use strict"; // Start of use strict

  var scrollToTop = document.querySelector('.scroll-to-top');
  
  if (scrollToTop) {
    
    // Scroll to top <div class="row">
    <div class="col-lg-4 ms-auto">
        <p class="lead"><br /><span style="color: rgb(0, 0, 0);">We are a design solutions company with 2 years of experience. We believe that creative vision can create a beautiful world. We have a great team with a creative mindset to design what you need.  </span><br /><br /><span style="color: rgb(0, 0, 0);">We provide our service through fiver freelancer and many online platforms.</span><br /><br /></p>
    </div>
    <div class="col-lg-4 me-auto">
        <p class="lead"><br /><span style="color: rgb(0, 0, 0); background-color: rgba(24, 188, 156, 0);">We understand your brand&#39;s purpose, vision, values, audience, competition, personality, etc. through in-depth discovery sessions to establish an appropriate positioning strategy.</span><br /><br /><span style="color: rgb(0, 0, 0); background-color: rgba(24, 188, 156, 0);">We give your brand an authentic and iconic identity with a thoughtful name, a timeless logo, inviting product designs, and an extendible visual language.</span><br /><br /></p>
    </div>
</div>utton appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // End of use strict
