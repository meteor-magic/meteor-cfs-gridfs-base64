function toBase64Async(doc, callback) {
  var buffer = new Buffer(0),
      readStream = doc.createReadStream();
  readStream.on('data', function(chunk) {
    buffer = Buffer.concat([buffer, chunk]);
  });
  readStream.on('error', function(err) {
    callback(err, null);
  });
  readStream.on('end', function() {
    // done
    callback(null, 'data:'+ doc.type() + ';base64,' + buffer.toString('base64'));
  });
};