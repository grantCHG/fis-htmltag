"use strict";
module.exports = function(ret, file, settings) {
    let {appendTag, insertTag, beginTag, endTag} = settings;
    appendTag = appendTag || /\<!DOCTYPE html[^>]*\>/i;
    insertTag = insertTag || /\<\/body[^>]*\>/i;
    beginTag = beginTag || "<!--kugoubegin-->";
    endTag = endTag || "<!--kugouend-->";
    fis.util.map(ret.src, function(subpath, file, i) {
        if (file.isHtmlLike) {
            let content = file.getContent();

            content = content.replace(appendTag, function(a, b) {
                return a + beginTag;
            });
            content = content.replace(insertTag, function(a, b) {
                return endTag + a;
            });
            file.setContent(content);
        }
    });
};