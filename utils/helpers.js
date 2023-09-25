const logError = (error) => {
  console.error(error) // eslint-disable-line no-console
}

const logWarning = (warning) => {
  console.warning(warning) // eslint-disable-line no-console
}
const logInfo = (info) => {
  console.log(info) // eslint-disable-line no-console
}

export { logError, logInfo, logWarning }
