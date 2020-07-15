 var commActions = 
          '<div class="commentACT">\
<div class="tabCommBody commentEmoticon">\
<div class="sticker"></div>\
<p><small>* Add at least <b>1 (Space)</b> Between comment before using the  <b>emoticon</b> above.</small></p>\
    </div>\
<div class="tabCommBody commentMedia" style="display:none;">\
To Insurt <b>Media</b> into comment use the <a href="https://en.wikipedia.org/wiki/BBCode" data-popWidth="1280" class="popWin"><b><u>BBCode</u></b></a> as shown in the following table:\
<table style="width:100%;">\
<thead>\
<tr><th>Media</th><th>Example of Writhing </th></tr>\
    </thead>\
<tbody>\
<tr><th>Link</th><td><code>[url]https.url[/url]</code><br/><small>Example URL. (<b>https://www.ilimon.github.io/<u>index.html</u></b>)</td></tr>\
<tr><th>Image</th><td><code>[img]img.url[/img]</code><br/><small>Example URL. (<b>https://www.ilimon.github.io/folder/<u>img.jpg</u></b>)</td></tr>\
<tr><th>Video</th><td><code>[youtube]youtube.url[/youtube]</code><br/><small>Example URL. (<b>https://www.youtube.com/watch?v=<u>id_youtube</u></b>)</td></tr>\
<tr><th>HTML</th><td><code>[code]html.parse[/code]</code><br/><small>Example of HTML that has been Parsed. (<b><html></b>)</td></tr>\
    </tbody>\
    </table>\
    </div>\
<nav><a href="javascript:void(0);" data-id="commentEmoticon" class="active"><i class="icon ion-md-happy"></i> Emoticon</a><a href="javascript:void(0);" data-id="commentMedia"><i class="icon ion-md-images"></i> Media</a></nav>\
    </div>';
      $(document).on('click','.commentACT nav a', function(){
        var id = $(this).attr('data-id');
        var commentACT = $(this).parents('.commentACT');
        $(commentACT).find('.tabCommBody').fadeOut(100);
        $(commentACT).find('.'+id).slideDown();
        $(commentACT).find('nav a').removeClass('active');
        $(this).addClass('active');
      });
      $(commActions).prependTo('.comment-form, .threaded-comment-form .comment-replybox-thread, .comment-replybox-single');
      if($('#commCount').val() != null) {
        $('.threaded-comment-form, .comment-replybox-thread .commentACT').show();
      } else {
        $('.comment-form .commentACT').show();
      }
      $(document).on('click','.comment-reply', function(){
        var commID = $(this).attr('data-comment-id');
        $('.commentACT').hide();
        if(commID != null) {
          $('#c'+commID+'-ce').find('.commentACT').show();
          $('html, body').animate({scrollTop: $('#c'+commID+'-ce').offset().top - 80}, 1000);
        } else {
          $('.comment-replybox-thread').find('.commentACT').show();
        }
      });
      var dataEmoticon = {
        "sticker" : {
          ":ultah" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1i58kbq.gif",
          ":travel" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/traveller.gif",
          ":toast" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1iothbu.gif",
          ":1thumbup" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1j43vv5.gif",
          ":takut" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1itttkb.gif",
          ":sup:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6pxsn75.gif",
          ":sup2" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1iy2y34.gif",
          ":sorry" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1xldg9p.gif",
          ":shakehand" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeqyos6i5nk.gif",
          ":selamat" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtwaipmr.gif",
          ":salahkamar" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/salah_kamar.gif",
          ":request" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6pti017.gif",
          ":repost:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtyqhwnh.gif",
          ":repost2" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/s_sm_repost2.gif",
          ":repost" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/s_sm_repost1.gif",
          ":recsel" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1xidtbd.gif",
          ":rate5" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtvqnpxx.gif",
          ":peluk" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbejiqlyagi7.gif",
          ":nosara" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeg2zbaufk9.gif",
          ":nohope" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6ps8oqq.gif",
          ":ngakak" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtyfyn16.gif",
          ":ngacir2" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/ngacir2.gif",
          ":ngacir" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/ngacir3.gif",
          ":najis" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/najis.gif",
          ":mewek" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtveegn8.gif",
          ":matabelo" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtvdpjkq.gif",
          ":marah" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeg2zb3lb65.gif",
          ":malu" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtvafv6q.gif",
          ":kts:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeg2zbf7ivh.gif",
          ":kr" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtvf8ymz.gif",
          ":kiss" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/cewek.gif",
          ":kimpoi" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/kimpoi.gif",
          ":kbgt:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeg2zay8rj5.gif",
          ":kacau:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeg2zb8qj68.gif",
          ":jrb:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeg2zavolvn.gif",
          ":ilovekaskus" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6pmu1yk.gif",
          ":iloveindonesia" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1xu2wka.gif",
          ":hoax" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/hoax.gif",
          ":hn" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/hotnews.gif",
          ":hammer" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6pkrrrw.gif",
          ":games" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1xc0hnl.gif",
          ":dp" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeqyos193hf.gif",
          ":cystg" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6pg5o6d.gif",
          ":cool" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtw20w8z.gif",
          ":cendolbig" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6pblpkt.gif",
          ":cekpm" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/cekpm.gif",
          ":cd:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeqyortimyf.gif",
          ":cd" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeg2zaps8px.gif",
          ":bola" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/bola.gif",
          ":bingung" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6p94iii.gif",
          ":bigo:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeqyoryg2b4.gif",
          ":betty" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/s_sm_maho.gif",
          ":berduka" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbeg2zalcx0i.gif",
          ":batabig" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbejiqljqkd1.gif",
          ":babygirl" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/babygirl.gif",
          ":babyboy1" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/babyboy1.gif",
          ":babyboy" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/babyboy.gif",
          ":angel" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbejiqle36zb.gif",
          ":2thumbup" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1x373yj.gif",
          ":entahlah" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ogii64nj7.gif",
          ":wkwkwk" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtykhbhj.gif",
          ":wakaka" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ogiiief4q.gif",
          ":salamkenal" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ogiiddd93.gif",
          ":ultahhore" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ly1zwmwkm.gif",
          ":motret" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ogiicfbwj.gif",
          ":lehuga" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fber17aocqul.gif",
          ":cipok" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbejiqmdvjfl.gif",
          ":catchemall:" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbf1wzm9bml4.gif",
          ":bedug" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/lebaran02.gif",
          ":ketupat" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/lebaran05.gif",
          ":maafagan" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/lebaran01.gif",
          ":maafaganwati" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/lebaran04.gif",
          ":omtelolet" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbfjmzk6nrxc.gif",
          ":coblos" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ox6q3de6x.gif",
          ":angpau" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fbejlbrhvlpt.gif",
          ":hai" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ohtxkkci6.gif",
          ":salaman" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/lebaran03.gif",
          ":wow" : "https://cdn.staticaly.com/img/jasadesign-bdg.github.io/Blogger/emoticon/kk/smilies_fb5ogiimgq21.gif",
        },
        "emoji" : {
          ":thx" : "🙏",
          ":)" : "🙂",
          "^_^" : "😊",
          ":D" : "😁",
          ":love" : "😍",
          ":'(" : "😥",
          ";)" : "😉",
          ":|" : "😑",
          ":(" : "😞",
          "T_T" : "😭",
          "B)" : "😎",
          ":omg" : "😱",
          ":p" : "😜",
          "0:)" : "😇",
          "xD" : "😆",
          ":argh" : "😤",
          "=D" : "😄",
          "o.O" : "🙄",
        },
      };
      $(window).bind('load', function(){
        $.each(dataEmoticon.sticker, function(id, url) {
          $('<div class="item"><img alt="'+id+'" src="'+url+'"/><input type="text" value=" '+id+' " readonly="readonly"/></div>').appendTo('.commentACT .sticker');
        });
        $.each(dataEmoticon.emoji, function(id, emoji) {
          $('<div class="item"><span class="emoji">'+emoji+'</span><input type="text" value=" '+id+' " readonly="readonly"/></div>').appendTo('.commentACT .sticker');
        });
      });
      $(document).on('click','.commentACT .sticker .item', function(){
        $(this).find('input').select();
        document.execCommand('copy');
        $(this).addClass('disalin');
        $(this).delay(500).removeClass('disalin');
      });
      $(window).bind('load', function(){
        $.each(dataEmoticon.sticker, function(id, url) {
          $(".comment-content").each(function(){
            $(this).html($(this).html().replace(id,'<img alt=" '+id+'" src="'+url+'"/>'));
          });
        });
        $(".comment-content").each(function(){
          $(this).html($(this).html().replace(/\s:thx/ig,' <span class="emoji">??</span>')); /* :thx */
          $(this).html($(this).html().replace(/\s:\)+/g,' <span class="emoji">??</span>')); /* :) */
          $(this).html($(this).html().replace(/\s\^(\_|)\^/g,' <span class="emoji">??</span>')); /* ^_^ */
          $(this).html($(this).html().replace(/\s:D/g,' <span class="emoji">??</span>')); /* :D */
          $(this).html($(this).html().replace(/\s:love/ig,' <span class="emoji">??</span>')); /* :love */
          $(this).html($(this).html().replace(/\s:'\(/g,' <span class="emoji">??</span>')); /* :'( */
          $(this).html($(this).html().replace(/\s;\)+/g,' <span class="emoji">??</span>')); /* ;) */
          $(this).html($(this).html().replace(/\s:\|+/g,' <span class="emoji">??</span>')); /* :| */
          $(this).html($(this).html().replace(/\s:\(/g,' <span class="emoji">??</span>')); /* :( */
          $(this).html($(this).html().replace(/\sT_T/ig,' <span class="emoji">??</span>')); /* T_T */
          $(this).html($(this).html().replace(/\sB\)/g,' <span class="emoji">??</span>')); /* B) */
          $(this).html($(this).html().replace(/\s:omg/ig,' <span class="emoji">??</span>')); /* :omg */
          $(this).html($(this).html().replace(/\s:p/ig,' <span class="emoji">??</span>')); /* :p */
          $(this).html($(this).html().replace(/\s0:\)+/ig,' <span class="emoji">??</span>')); /* 0:) */
          $(this).html($(this).html().replace(/\sxD/ig,' <span class="emoji">??</span>')); /* xD */
          $(this).html($(this).html().replace(/\s:argh/ig,' <span class="emoji">??</span>')); /* :argh */
          $(this).html($(this).html().replace(/\s=D/ig,' <span class="emoji">??</span>')); /* =D */
          $(this).html($(this).html().replace(/\so.O/ig,' <span class="emoji">??</span>')); /* o.O */
        });
        $(".comment-content").each(function(){
          $(this).html(
            $(this).html()
            .replace(/\[url\]/g, "<a href='").replace(/\[\/url\]/g, "' rel='nofollow' class='popWin' data-popWidth='1280'><p style='color:blue'>Link</p></a>")
            .replace(/\[img\]/g, "<img src='").replace(/\[\/img\]/g, "' />")
            .replace(/\[code\]/g, "<pre><code>").replace(/\[\/code\]/g, "</code></pre>")
            .replace(/\[youtube\]/g, "<a href='").replace(/\[\/youtube\]/g, "'></a>")
          );
        });
      });
     
      /* jsglobal */
