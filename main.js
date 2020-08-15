// Main file

class Main {

  // Service starting methods

  static async api () {
    console.log('API starting...')
    console.log('API started!')
  }

  static async service () {
    console.log('Service starting...')
    console.log('Service started!')
  }

  static async website () {
    console.log('Website starting...')
    console.log('Website started!')
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