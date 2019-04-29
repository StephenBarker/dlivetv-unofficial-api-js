'use strict'

const EventEmitter = require('events')
const https = require('https')
const Websocket = require('websocket')
const { webRequest } = require('./webrequest')

class dlive extends EventEmitter {
  constructor () {
    super()
    this.authkey = ''
    this.channel = ''
    this.https = https
    this.WebsocketClient = Websocket.client
    this.client = new this.WebsocketClient()
    this.request = webRequest
  }

  get getAuthkey () {
    return this.authkey
  }

  get getChannel () {
    return this.channel
  }

  set setAuthkey (authkey) {
    this.authkey = authkey
  }

  set setChannel (channel) {
    this.channel = channel
  }
}

module.exports = {
  dlive: dlive
}
