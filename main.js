// Main file

const Log = require('./libs/log')

class Main {

  // Service starting methods

  static async api () {
    Log.neutral('API starting...')
    Log.success('API started!\n')
  }

  static async service () {
    Log.neutral('Service starting...')
    Log.success('Service started!\n')
  }

  static async website () {
    Log.neutral('Website starting...')
    Log.success('Website started!\n')
  }

  // Main method

  static async run () {
    await this.api()
    await this.service()
    await this.website()
  }

}

module.exports = Main

Main.run()