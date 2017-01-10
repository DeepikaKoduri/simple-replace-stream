const stream = require('stream')

class replaceStream extends stream.Transform{

    constructor(options){
        super()
        this.tailPiece = ''
        this.key_find=options.key_find
        this.key_replace=options.key_replace
    }

    _transform(chunk,encoding,done){
        chunk=this.tailPiece+chunk
        let pieces = chunk.split(this.key_find)
        let lastPiece = pieces[pieces.length-1]
        let tailPieceLen = this.key_find.length-1
        this.tailPiece = lastPiece.slice(-tailPieceLen)
        pieces[pieces.length-1]=lastPiece.slice(0,-tailPieceLen)
        this.push(pieces.join(this.key_replace))
        done();
    }

    _flush(done){
        this.push(this.tailPiece)
        done()
    }
}

module.exports = replaceStream
