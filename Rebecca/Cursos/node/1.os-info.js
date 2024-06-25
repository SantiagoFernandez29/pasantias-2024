const os = require('node:os')

console.log('informacion del sist operativo')
console.log('-----')

console.log('nombre del sist operativo', os.platform())
console.log('version del sist operativo', os.release()) 
console.log('arquitectura del sist operativo', os.arch())
console.log('CPUs', os.cpus()) //<-- vamos a poder escalar procesos con noden
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('Memoria Total', os.totalmem()/1024/1024)
console.log('uptime', os.uptime()/60/60)