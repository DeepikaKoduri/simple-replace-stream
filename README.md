A Node Transform stream that replaces all the occurrences of a given pattern.

##Example

```
const replaceStream = require('simple-replace-stream')

var regex = new RegExp("some reg exp")

fs.createReadStream('file1')
.pipe(new replaceStream({
  key_find : regex,
  key_replace : "some other string"
}))
.pipe(fs.createWriteStream('file2'))

```
