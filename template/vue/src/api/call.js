/**
 * @author walid
 * @date 2016/03/16
 * @description Api Call
 */

export default class Call {
  constructor(executor) {
    let self = this
    try {
      executor(function (res) {
        self._dispatchResolve(res)
      }, function (errRes) {
        self._dispatchReject(errRes)
      })
    } catch (err) {
      self._dispatchReject(err)
    }
  }

  then(onResolved) {
    this.resolve = onResolved
    return this
  }

  catch(onRejected) {
    this.reject = onRejected
    return this
  }

  _dispatchResolve(response) {
    if (Call._isFunc(this.resolve)) {
      this.resolve(response)
    }
  }

  _dispatchReject(error) {
    if (Call._isFunc(this.reject)) {
      this.reject(error)
    }
  }

  static _isFunc(obj) {
    return obj && typeof obj === 'function'
  }
}
