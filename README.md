**Load The JS**
<blockquote>
<script src="jquery.js" type="text/javascript"></script>
<script src="count.js" type="text/javascript"></script>
</blockquote>

**Initialize The JS**
<blockquote>
<script>
jQuery(document).ready(function($) {
  $('.box').count();
});
</script></blockquote>

**Add CSS**
<blockquote>
<style>
div.box{
position:relative; /* VERY IMPORTANT*/
}
</style></blockquote>

**Add Some Markup**
<blockquote>
<div class="box" count="398"><img src="email_folder.jpg"></div>
<div class="box" count="706"><img src="text_messages.jpg"></div></blockquote>
