function s(){$(window).scrollTop($('#console').height());}
var md=new MobileDetect(window.navigator.userAgent)

$(function(){

 $(window).resize(s)

 $('#console').t({
  delay: 0,
  speed: 4,
  speed_vary: true,

  beep: ((/13\.3/.test(md.version('iOS')))?false:true),

  mistype: 0,

  caret:'\u2593',
  blink: true,  //can also be a speed number true = speed*3
  blink_perm: true,
  pause_on_tab_switch: true,
  typing: function(elm,c){
    s()
  },
  fin: function(elm){
    elm.find('.t-caret').css({opacity:0});
  }
})
})

/*
# "Hypertyping Markup Language" Cheatsheet:
<del>*</del> -> clears everything typed before (still stored in case of repeating [repeat:N])
<del>foo</del> -> deletes 'foo' (by default, t.js delays 0.25s before removing)
<del>foo<ins>2</ins></del> -> custom del-delay: numeric-filled <ins> inside <del>
<del>select me<s>red,white</s></del> -> text selection: <s> inside <del> (comma seperated background/forground color values, or .class name)
(!) Note: except <ins> and <s>, <del> doesn't handle nested html-tags (dropped)
<ins>2.5</ins> -> stops typing for 2.5 seconds (numeric-filled)
<ins>content to <u>insert</u></ins> -> inserts instantly (non-numeric)
<kbd>some <strong>typing text</strong></kbd> -> will apply setting's mistype[=1:N] rate here (will be 10 if unset)
<s>20</s> -> changes typing speed to 20 milliseconds
*/