
$(document).ready(function()
{



  $("button").click(function()
  {
    //alert("hello");
    var buttonClass=$(this).attr("class");
    //alert(buttonClass);
    //storeButton.push(buttonClass);
    var buttonNumber=$(buttonClass).slice(buttonClass.length-1,0);
    //alert("hi"+buttonNumber);
    var i=0;


    switch(buttonClass)
    {
      case "button5":
      {
        for(i=1;i<=5;i++)
        $("."+"button"+i).addClass("colorToYellow");

         //alert($(this).hasClass("colorToYellow"));
        //$(this).css("color","yellow");

        break;
      }
      case "button4":
      {
        for(i=1;i<=4;i++)
        $("."+"button"+i).addClass("colorToYellow");

        //alert("hi");

        break;
      }
      case "button3":
      {
        for(i=1;i<=3;i++)
        $("."+"button"+i).addClass("colorToYellow");


        break;
      }
      case "button2":
      {
        for(i=1;i<=2;i++)
        $("."+"button"+i).addClass("colorToYellow");

        break;
      }
      case "button1":
      {

        $("."+"button1").addClass("colorToYellow");


        break;
      }

    }
  });

});
