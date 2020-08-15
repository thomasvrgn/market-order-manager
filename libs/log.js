// Log file

const Chalk = require('chalk')

class Log {

  static defaultMessage = 'No message specified!'

  static success (message = this.defaultMessage) {
    console.log(Chalk.bgGreen(Chalk.gray(' GOOD ')), message)
  }

  static error (message = this.defaultMessage) {
    console.log(Chalk.bgRed(' MIST '), message)
  }

  static warning (message = this.defaultMessage) {
    console.log(Chalk.bgYellow(Chalk.gray(' WARN ')), message)
  }

  static neutral (message = this.defaultMessage) {
    console.log(Chalk.bgGrey(' NONE '), message)
  }

}

module.exports = Log