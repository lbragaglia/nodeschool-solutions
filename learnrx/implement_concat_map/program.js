'use strict';

Array.prototype.concatMap = function (cb) {
    return this.map(cb).concatAll()
}