var i;
var count = 0;
require('fs').createReadStream('./index.js')
  .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
       console.log(chunk.toString('utf8'));
      if (chunk[i] == 10) count++;
  })
  .on('end', function() {
    console.log(count);
  });