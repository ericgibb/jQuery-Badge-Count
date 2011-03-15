(function($) {
    $.fn.count = function(options) {
        // Set some default options
        var defaults = {
            // Basic Stuff
            attribute: 'count',               // Attribute to pull count from
            element: 'div',                   // Element to create
            defaultText: '?',                // Text to show when there are no counts
            // Element Positioning & Styling
            position: 'absolute',             // Should always be set to 'absolute'
            placement: 'TopRight',             // 'TopLeft', 'TopRight','BottomLeft','BottomRight'
            offSet: -10,                      // Distance in px from placement position. Use negative number to go off edge
            height: null,                     // not needed
            width: 'auto',                    // use 'auto' to grow according to text
            padding: '4px 5px',
            borderColor: '#8B1A1A',
            backgroundColor: '#FF7726',
            borderRadius: 15,
            boxShadow: '1px 1px 3px #000',
            // Animation
            fadeOnMouseOver: false,            // true/false
            fadeOnMouseOverShowOpactiy: 1,    // 0, .75, 1, etc 
            fadeOnMouseOverHideOpactiy: .25,  // 0, .75, 1, etc 
            fadeOnMouseOverSpeed: 'fast',     // Duration in milliseconds,'fast', or 'slow'
            //Type & Colors
            fontSize: '80%',
            fontColor: '#FFFFFF',
            fontWeight: 'bold',
            // Additional CSS Properties, use !important to override JS
            cssClass: 'count'
        };
        // Merge Defaults
        var opts = $.extend({}, defaults, options);
        
        // Loop through each element in the array given, and do a bunch of stuff
        return this.each(function() {
            var obj = $(this);
            var num = obj.attr(opts.attribute);  // Attribute to find
            var count = $('"<'+opts.element+'>"');            // Create element
            if(num){
              count.text(num);
            }else{
              count.text(opts.defaultText);
            }
            
            // Set Placement
            switch (opts.placement) {
              case 'TopLeft':
                  count.css({
                      top: opts.offSet,
                      left: opts.offSet
                  })
                  break;
              case 'BottomRight':
                  count.css({
                      bottom: opts.offSet,
                      right: opts.offSet
                  })
                  break;
              case 'BottomLeft':
                  count.css({
                      bottom: opts.offSet,
                      left: opts.offSet
                  })
                  break;
              case "TopRight":
                  count.css({
                      top: opts.offSet,
                      right: opts.offSet
                  })
                  break;
            };
            
            // If there are animations, use them
            if(opts.fadeOnMouseOver){
              count.fadeTo(opts.fadeOnMouseOverSpeed, opts.fadeOnMouseOverHideOpactiy);
                obj
                 .hover(function() {
                   count.stop().fadeTo(opts.fadeOnMouseOverSpeed, opts.fadeOnMouseOverShowOpactiy);
                
                 }, function() {
                  count.stop().fadeTo(opts.fadeOnMouseOverSpeed, opts.fadeOnMouseOverHideOpactiy);
                 });
            };
            
            // Add the CSS
            count.css({
              MozBorderRadius: opts.borderRadius,
              WebkitBorderRadius: opts.borderRadius,
              BorderRadius: opts.borderRadius,
              MozBoxShadow: opts.boxShadow,
              WebkitBoxShadow: opts.boxShadow,
              BoxShadow: opts.boxShadow,
              position: 'absolute',
              height: opts.height,
              width: opts.width,
              padding: opts.padding,
              color: opts.fontColor,
              fontSize: opts.fontSize,
              fontWeight: opts.fontWeight,
              fontColor: opts.fontColor,
              border: '1px solid ' + opts.borderColor,
              background: opts.backgroundColor
            })
            // Add additional CSS 
            count.addClass(opts.cssClass);
              
            // Inject Object
            obj.prepend(count);
        });
    };
})(jQuery);