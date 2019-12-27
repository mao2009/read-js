function readJs(filename){
    let text = ""
    fetch(filename).then(res => {return res.text()})).then(t => {text = t}
    return text
}

function convertBookmarklet(js){
    let bookmarklet = js.replace(/\/\*[\s\S]+?\*\//g,"").replace(/\/\/.+?\n/g,"")
    bookmarklet = bookmarklet.replace(/\s+/g," ").replace("\n",";\n").replace(/;+?\n/g,";").replace("\n","");
    return "javascript:" + bookmarklet
}