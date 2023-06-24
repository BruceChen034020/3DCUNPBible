//fontSize 初始值設定
if(window.sessionStorage.getItem('fontSize') == '24')
{
  var element = document.getElementById("story");
  element.style.fontSize = "24px";
  element.style.lineHeight = "2.4";

}else if(window.sessionStorage.getItem('fontSize') == '20')
{
  var element = document.getElementById("story");
  element.style.fontSize = "20px";
  element.style.lineHeight = "2.2";

}else if(window.sessionStorage.getItem('fontSize') == '16')
{
  var element = document.getElementById("story");
  element.style.fontSize = "16px";
  element.style.lineHeight = "2";

}else if(window.sessionStorage.getItem('fontSize') == '14')
{
  var element = document.getElementById("story");
  element.style.fontSize = "14px";
  element.style.lineHeight = "1.8";
}else
{
  var element = document.getElementById("story");
  element.style.fontSize = "16px";
  element.style.lineHeight = "2";
  window.sessionStorage.setItem("fontSize", '16');
}

//background 初始值設定
if(window.sessionStorage.getItem('background') == 'white')
{
  var element = document.getElementById("header");
  element.style.background = "#DDDDDD";
  element.style.color = "#000000";
  element = document.getElementById("article");
  element.style.background = "#FFFFFF";
  element.style.color = "#000000";
  element = document.getElementById("footer");
  element.style.background = "#DDDDDD";
  element.style.color = "#000000";
  element = document.getElementById("lastChapter");
  element.style.background = "#FFFFFF";
  element.style.color = "#000000";
  element = document.getElementById("content");
  element.style.background = "#FFFFFF";
  element.style.color = "#000000";
  element = document.getElementById("nextChapter");
  element.style.background = "#FFFFFF";
  element.style.color = "#000000";

}else if(window.sessionStorage.getItem('background') == 'green')
{
  var element = document.getElementById("header");
  element.style.background = "#A9EEAD";
  element.style.color = "#000000";
  element = document.getElementById("article");
  element.style.background = "#F3FDEC";
  element.style.color = "#000000";
  element = document.getElementById("footer");
  element.style.background = "#A9EEAD";
  element.style.color = "#000000";
  element = document.getElementById("lastChapter");
  element.style.background = "#F3FDEC";
  element.style.color = "#000000";
  element = document.getElementById("content");
  element.style.background = "#F3FDEC";
  element.style.color = "#000000";
  element = document.getElementById("nextChapter");
  element.style.background = "#F3FDEC";
  element.style.color = "#000000";

}else if(window.sessionStorage.getItem('background') == 'blue')
{
  var element = document.getElementById("header");
  element.style.background = "#61AEEE";
  element.style.color = "#000000";
  element = document.getElementById("article");
  element.style.background = "#E9F4FC";
  element.style.color = "#000000";
  element = document.getElementById("footer");
  element.style.background = "#61AEEE";
  element.style.color = "#000000";
  element = document.getElementById("lastChapter");
  element.style.background = "#E9F4FC";
  element.style.color = "#000000";
  element = document.getElementById("content");
  element.style.background = "#E9F4FC";
  element.style.color = "#000000";
  element = document.getElementById("nextChapter");
  element.style.background = "#E9F4FC";
  element.style.color = "#000000";

}else if(window.sessionStorage.getItem('background') == 'gray')
{
  var element = document.getElementById("header");
  element.style.background = "#808080";
  element.style.color = "#000000";
  element = document.getElementById("article");
  element.style.background = "#DDDDDD";
  element.style.color = "#000000";
  element = document.getElementById("footer");
  element.style.background = "#808080";
  element.style.color = "#000000";
  element = document.getElementById("lastChapter");
  element.style.background = "#DDDDDD";
  element.style.color = "#000000";
  element = document.getElementById("content");
  element.style.background = "#DDDDDD";
  element.style.color = "#000000";
  element = document.getElementById("nextChapter");
  element.style.background = "#DDDDDD";
  element.style.color = "#000000";

}else if(window.sessionStorage.getItem('background') == 'black')
{
  var element = document.getElementById("header");
  element.style.background = "#000000";
  element.style.color = "#DDDDDD";
  element = document.getElementById("article");
  element.style.background = "#2C313C";
  element.style.color = "#DDDDDD";
  element = document.getElementById("footer");
  element.style.background = "#000000";
  element.style.color = "#DDDDDD";
  element = document.getElementById("lastChapter");
  element.style.background = "#3A3F4B";
  element.style.color = "#DDDDDD";
  element = document.getElementById("content");
  element.style.background = "#3A3F4B";
  element.style.color = "#DDDDDD";
  element = document.getElementById("nextChapter");
  element.style.background = "#3A3F4B";
  element.style.color = "#DDDDDD";
}


$(document).ready(function()
{
  //background 更改
  $('.white').on('click',function(e)
  {
    event.preventDefault();
    $('header').css({'background-color':'#DDDDDD','color':'#000000'});
    $('article').css({'background-color':'#FFFFFF','color':'#000000'});
    $('footer').css({'background-color':'#DDDDDD','color':'#000000'});
    $('.lastChapter').css({'background-color':'#FFFFFF','color':'#000000'});
    $('.content').css({'background-color':'#FFFFFF','color':'#000000'});
    $('.nextChapter').css({'background-color':'#FFFFFF','color':'#000000'});
    window.sessionStorage.setItem("background", 'white');
  });

  $('.green').on('click',function(e)
  {
    event.preventDefault();
    $('header').css({'background-color':'#A9EEAD','color':'#000000'});
    $('article').css({'background-color':'#F3FDEC','color':'#000000'});
    $('footer').css({'background-color':'#A9EEAD','color':'#000000'});
    $('.lastChapter').css({'background-color':'#F3FDEC','color':'#000000'});
    $('.content').css({'background-color':'#F3FDEC','color':'#000000'});
    $('.nextChapter').css({'background-color':'#F3FDEC','color':'#000000'});
    window.sessionStorage.setItem("background", 'green');
  });

  $('.blue').on('click',function(e)
  {
    event.preventDefault();
    $('header').css({'background-color':'#61AEEE','color':'#000000'});
    $('article').css({'background-color':'#E9F4FC','color':'#000000'});
    $('footer').css({'background-color':'#61AEEE','color':'#000000'});
    $('.lastChapter').css({'background-color':'#E9F4FC','color':'#000000'});
    $('.content').css({'background-color':'#E9F4FC','color':'#000000'});
    $('.nextChapter').css({'background-color':'#E9F4FC','color':'#000000'});
    window.sessionStorage.setItem("background", 'blue');
  });

  $('.gray').on('click',function(e)
  {
    event.preventDefault();
    $('header').css({'background-color':'#808080','color':'#000000'});
    $('article').css({'background-color':'#DDDDDD','color':'#000000'});
    $('footer').css({'background-color':'#808080','color':'#000000'});
    $('.lastChapter').css({'background-color':'#DDDDDD','color':'#000000'});
    $('.content').css({'background-color':'#DDDDDD','color':'#000000'});
    $('.nextChapter').css({'background-color':'#DDDDDD','color':'#000000'});
    window.sessionStorage.setItem("background", 'gray');
  });

  $('.black').on('click',function(e)
  {
    event.preventDefault();
    $('header').css({'background-color':'#000000','color':'#DDDDDD'});
    $('article').css({'background-color':'#2C313C','color':'#DDDDDD'});
    $('footer').css({'background-color':'#000000','color':'#DDDDDD'});
    $('.lastChapter').css({'background-color':'#3A3F4B','color':'#DDDDDD'});
    $('.content').css({'background-color':'#3A3F4B','color':'#DDDDDD'});
    $('.nextChapter').css({'background-color':'#3A3F4B','color':'#DDDDDD'});
    window.sessionStorage.setItem("background", 'black');
  });

  //fontSize 更改 -- 14, 16, 20, 24
  $('.big').on('click',function(e)
  {
    event.preventDefault();

    if(window.sessionStorage.getItem('fontSize') == '20')
    {
      var element = document.getElementById("story");
      element.style.fontSize = "24px";
      element.style.lineHeight = "2.4";
      window.sessionStorage.setItem("fontSize", '24');

    }else if(window.sessionStorage.getItem('fontSize') == '16')
    {
      var element = document.getElementById("story");
      element.style.fontSize = "20px";
      element.style.lineHeight = "2.2";
      window.sessionStorage.setItem("fontSize", '20');

    }else if(window.sessionStorage.getItem('fontSize') == '14')
    {
      var element = document.getElementById("story");
      element.style.fontSize = "16px";
      element.style.lineHeight = "2";
      window.sessionStorage.setItem("fontSize", '16');
    }
  });

  $('.small').on('click',function(e)
  {
    event.preventDefault();

    if(window.sessionStorage.getItem('fontSize') == '24')
    {
      var element = document.getElementById("story");
      element.style.fontSize = "20px";
      element.style.lineHeight = "2.2";
      window.sessionStorage.setItem("fontSize", '20');

    }else if(window.sessionStorage.getItem('fontSize') == '20')
    {
      var element = document.getElementById("story");
      element.style.fontSize = "16px";
      element.style.lineHeight = "2";
      window.sessionStorage.setItem("fontSize", '16');

    }else if(window.sessionStorage.getItem('fontSize') == '16')
    {
      var element = document.getElementById("story");
      element.style.fontSize = "14px";
      element.style.lineHeight = "1.8";
      window.sessionStorage.setItem("fontSize", '14');
    }
  });
});
