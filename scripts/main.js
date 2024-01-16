
  window.watsonAssistantChatOptions = { 
    integrationID: "a1e6fb1d-3f0c-4f66-a55f-a34aa3b83d9a", // The ID of this integration. 
    region: "eu-gb", // The region your integration is hosted in. 
    serviceInstanceID: "41ffa6c6-1683-4d47-9b0f-9d722001f84f", // The ID of your service instance. 
    onLoad: async (instance) => { await instance.render(); } 
  }; 
  setTimeout(function(){ 
    const t=document.createElement('script'); 
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"; 
    document.head.appendChild(t); 
  }); 


// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
