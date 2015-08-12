# pick-loc

读取同级目录下的`sitemap.xml`文件，通过[cheerio](https://github.com/cheeriojs/cheerio)拉取xml文件中的`loc`属性，然后按照每个loc属性一行的规则，将所有的loc信息写入同级目录的`urls.txt`文件中。
