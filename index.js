/**
 * @file: index
 * @author: gejiawen
 * @date: 15/8/12 11:30
 *
 *
 * 读取同级目录下的 sitemap.xml文件，通过cheerio拉取xml文件中的loc属性，
 * 然后按照每个loc属性一行的规则，将所有的loc信息写入同级目录的urls.txt文件中。
 *
 */

var fs = require('fs');
var cheerio = require('cheerio');

var sitemap = './sitemap.xml';
var urls = './urls.txt';

fs.exists(sitemap, function (ret) {
    if (!ret) {
        console.log(sitemap + ' do not exists.');
        return;
    }

    fs.readFile(sitemap, 'utf8', function (err, ret) {
        if (err) {
            return err;
        }

        var $ = cheerio.load(ret);
        var locs = $('loc');

        console.log('saving xml location attribute...');

        for (var i = 0; i < locs.length; i++) {
            var loc = locs[i].children[0].data + (i === locs.length - 1 ? '' : '\n');
            if (i === 0) {
                fs.writeFileSync(urls, loc, 'utf8');
            } else {
                fs.appendFileSync(urls, loc, 'utf8');
            }
        }

        console.log('all saved.')

    })
});
