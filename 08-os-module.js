const os = require('os')

// info about current user
const user = os.userInfo()
console.log('__________RUNNING_APP__________');
console.log("MY_OS",os);
console.log("USER: ",user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log("CURRENT_OS: ",currentOS);
console.log("ARCHITECTURE: ", os.arch());
console.log("PLATFORM: ",os.platform());
console.log("CPUS: ",os.cpus());
console.log("NETWORK_INTERFACES: ",os.networkInterfaces());
console.log('_______________________________');

