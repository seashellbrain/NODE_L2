const os = require('os');  
require('dotenv').config();


function getOSInfo() {
    return {
        platform: os.platform(),      
        freeMemory: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB", 
        homeDir: os.homedir(),         
        hostname: os.hostname(),       
        networkInterfaces: os.networkInterfaces() 
    };
}


function checkMemory() {
    const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;
    return freeMemoryGB > 4 ? "Достаточно памяти (более 4 ГБ)" : "Недостаточно памяти (<4 ГБ)";
}


function showOSInfoIfAllowed() {
    if (process.env.MODE === "admin") {
        console.log("Информация об ОС:", getOSInfo());
    } else {
        console.log("Доступ запрещён. Измените MODE в .env на 'admin'.");
    }
}


console.log("Проверка свободной памяти:", checkMemory());
showOSInfoIfAllowed();
