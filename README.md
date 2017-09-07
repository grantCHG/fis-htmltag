# fis-postpackager-htmltag
### 说明

在HTML指定的标签前后添加指定标志

### 安装

```javascript
   npm install fis-postpackager-htmltag -g
```

### 使用

```javascript
    
    fis.match('::package', {
    postpackager: [
        fis.plugin('htmltag', {
            appendTag: /<!DOCTYPE html[^>]*\>/,
            insertTag: /<\/body[^>]*\>/,
            beginTag: "<!--kugoubegin-->",
            endTag: "<script>(function(doc){doc.getElementsByTagName('html')[0].appendChild(doc.createComment('kugouend'))}(document))</script>"
        })
    ]
});
```