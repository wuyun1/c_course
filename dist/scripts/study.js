$(function(t){function e(e){var i="/chapters/menu.json",r=t("#list_chap"),c=t("#iframe_main");r.text("正在加载目录。。。"),t.getJSON(i,function(i){r.text(""),a=0,s=0;var n=i.list;n.forEach(function(e){var i=t("<li/>");t("<h4/>").text(e.title).appendTo(i);var n=t("<ol/>");e.list.forEach(function(e){var i=t("<li/>").text(e.title);i.attr("ref_id",e.data),i.attr("count_id",s),i.click(function(){var e=t(this).attr("ref_id");location.hash=e,c.attr("src","/chapters/h"+e+".html"),t.get("/chapters/code"+e+".txt",function(e){o.setValue(e),t("#div_ouput").text("运行结果窗口")}),a=+t(this).attr("count_id"),t("li.active",r).removeClass("active"),i.addClass("active"),setTimeout(function(){t("#btn_solder").click()},400)}),i.appendTo(n),s++}),n.appendTo(i),i.appendTo(r)}),e&&t("[ref_id='"+e.slice(1)+"']",r).click()})}t.getScript("/scripts/hackback.js").done();var a=0,s=0,o=CodeMirror.fromTextArea(document.getElementById("codEdeit"),{lineNumbers:!0,matchBrackets:!0,mode:"text/x-csrc",keyMap:"sublime",autoCloseBrackets:!0,showCursorWhenSelecting:!0,theme:"midnight",tabSize:2});t.get("chapters/code_hollc.txt",function(e){o.setValue(e),t("#div_ouput").text("运行结果窗口")});var i=!1;t("#btn_run").click(function(){i||(t("#div_ouput").text("正在编译并运行。。。"),i=!0,t.getJSON("/serverapi/runC",{code:o.getValue()},function(e){t("#div_ouput").text(e),i=!1}))});var r=!0;t("#btn_solder").click(function(){r?(t("#sitebar").css("transform","translate(100%)"),t(this).removeClass("btn_solder_open").addClass("btn_solder_close"),r=!1,t("#mask").hide(0)):(t("#sitebar").css("transform","translate(0%)"),t(this).removeClass("btn_solder_close").addClass("btn_solder_open"),r=!0,t("#mask").show(0))}),e(location.hash)});