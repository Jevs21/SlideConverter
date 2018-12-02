

$(document).ready(function() {


    $.ajax({
        url: "/encode_img",
        type: "get",
        dataType: "text",
        data: { filename: 'test_2.png' }
    })
    .done(function(data){
        let obj = JSON.parse(data);
        console.log(obj);

        let page_obj = createPageObject(obj);

        outputPage( $("#output"), page_obj);

        
        console.log(page_obj);
        
    })
    .fail(function(err){
        alert("fail");
        console.log(err.responseText);
    });
    

    // *********************************************

    
});

function outputPage(elem, page){
    for(let section in page.sections){
        for(let line in section.lines){
            if(line.height > 38){
                elem.append("<span style='font-size:30pt'>" + line.text + "</h3>");
            }
            else if(line.height > 30){
                elem.append("<span style='font-size:30pt'>" + line.text + "</span>");
            }
        }
    }
}
function createPageObject(obj) {
    let page_obj = {
        sections: []
    }

    for(let i = 0; i < obj.regions.length; i++){
        let new_section = createSectionObject(obj.regions[i]);
        page_obj.sections.push(new_section);
    }

    return page_obj;

}

function createSectionObject(region){
    let section = {
        lines : []
    }

    for(let i = 0; i < region.lines.length; i++){
        let new_line = {
            text: "",
            height: 0
        }

        new_line.text = getSingleLine(region.lines[i].words);
        new_line.height = getLineHeight(region.lines[i]);

        section.lines.push(new_line);
    }
    
    return section;
}


function getSingleLine(words){
    let new_line_text = "";
    
    for(let i = 0; i <  words.length; i++){
        new_line_text += words[i].text;
        if(i < words.length - 1){
            new_line_text += " ";
        }
    }

    return new_line_text;
}

function getLineHeight(line){
    let border_box = line.boundingBox.split(",");
    let height = border_box[3];
    return parseInt(height);
}