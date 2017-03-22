https://www.sitepoint.com/use-html5-data-attributes/
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
http://jsfiddle.net/9n4e1agn/1/

<code>

$(document).ready(function(){
    $("[data='test']").css("background-color", "yellow");
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p class="intro">My name is Donald.</p>
<p data="test">I live in Duckburg.</p>
<p>My best friend is Mickey.</p>

Who is your favourite:
<ul id="choose">
  <li>Goofy</li>
  <li>Mickey</li>
  <li>Pluto</li>
</ul>

</code>
