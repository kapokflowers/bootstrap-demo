$(document).ready(function () {
    $.get("../js/test.json",{},function (data) {
        console.log(data);
        var biglevel = data.biglevel;
        var html = "";
        for (var i = 0; i < biglevel.length; i++){
            var listhtml = "";
            for(var j = 0; j < biglevel[i].listdata.length; j++ ){
                var listdata = biglevel[i].listdata;
                listhtml += "<div class=\"col-sm-3\">"+ 
                                "<div class='link-block'>"+
                                    "<div class=\"row newrow\">"+
                                        "<img src=\""+listdata[j].iconUrl+"\">"+
                                        "<span class=\"one\">"+listdata[j].title+"</span>"+
                                    "</div>"+
                                    "<div class=\"row newrow\">"+
                                        "<p class=\"two\">"+listdata[j].name+"</p>"+
                                    "</div>"+
                                    "<div class=\"row newrow\">"+
                                        "<span class=\"three\">"+listdata[j].look+"</span>"+
                                        "<span class=\"four\">"+listdata[j].click+"</span>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"
            }

            html+= "<div class=\"tag-block row\">"+
                        "<div class=\"row newrow\">"+
                            "<img src=\""+biglevel[i].headdata.iconUrl+"\">"+
                            "<span class=\"one\">"+biglevel[i].headdata.title+"</span>"+
                        "</div>"+
                        listhtml+
                    "</div>";   

        }
        $("#area1").html(html);
    });
    
});

