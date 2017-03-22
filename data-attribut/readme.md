https://www.sitepoint.com/use-html5-data-attributes/

https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

## API jQuery
http://api.jquery.com/category/miscellaneous/data-storage/


## Beispiele
http://jsfiddle.net/9n4e1agn/1/

https://jsfiddle.net/ed5axgvk/1/


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


noch ein Beispiel

    <span class="label" data-warning>
    
    [data-warning] {
        background: red;
    }

But what if we wanted to style it based on the data attribute's value? This will work for any data-warning attribute that contains the word error:

    [data-warning*=error] {
        color: red;
    }


Bootstrap uses data attributes as an HTML alternative to configuring plugins via JavaScript. Here's an example of a popover:

    <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus    sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on top
    </button>















