function FindProxyForURL(url, host) {
    // List of proxies for load balancing
    var proxies = [
        "PROXY 122.102.35.105:1080",    // 🇧🇩 BDIX1 FTP CIRCLE
        "PROXY 203.82.195.225:43581",   // 🇧🇩 BDIX1 FTP FTPBD SAM
        "PROXY 175.29.172.54:61739",    // 🇧🇩 BDIX2 FTP FTPBD SAM
        "PROXY 119.148.55.209:33557",   // 🇧🇩 BDIX3 FTP SAM
        "PROXY 119.148.14.81:39416",    // 🇧🇩 BDIX4 FTP SAM
        "PROXY 118.179.121.145:24740",  // 🇧🇩 BDIX5 GENERAL
        "PROXY 202.4.101.4:28492",      // 🇧🇩 BDIX6 GENERAL
        "PROXY 202.5.46.243:55101",     // 🇧🇩 BDIX7 GENERAL
        "PROXY 202.5.51.131:23504",     // 🇧🇩 BDIX8 GENERAL
        "PROXY 115.127.36.131:19469",   // 🇧🇩 BDIX9 GENERAL
        "PROXY 103.18.204.180:49801",   // 🇧🇩 BDIX10 FTP CIRCLE
        "PROXY 103.18.205.54:65134",    // 🇧🇩 BDIX11 FTP CIRCLE
        "PROXY 123.200.23.198:15366",   // 🇧🇩 BDIX12 GENERAL
        "PROXY 27.147.217.42:15722",    // 🇧🇩 BDIX13 GENERAL
        "PROXY 144.48.117.241:60980",   // 🇧🇩 BDIX14 GENERAL
        "PROXY 103.85.158.99:37092",    // 🇧🇩 BDIX15 GENERAL
        "PROXY 203.83.171.74:59315",    // 🇧🇩 BDIX16 GENERAL
        "PROXY 203.83.164.166:17215",   // 🇧🇩 BDIX17 GENERAL
        "PROXY 203.76.110.222:41737",   // 🇧🇩 BDIX18 FTP SAM ICC
        "PROXY 202.40.184.14:19703",    // 🇧🇩 BDIX19 FTP SAM ICC
        "PROXY 103.113.153.242:44416",  // 🇧🇩 BDIX20 FTP SAM
        "PROXY 103.40.226.142:17546",   // 🇧🇩 BDIX21 FTP SAM
        "PROXY 175.29.188.9:13744",     // 🇧🇩 BDIX22 FTP SAM
        "PROXY 175.29.177.98:58569",    // 🇧🇩 BDIX23 FTP SAM
        "PROXY 202.40.187.137:64883",   // 🇧🇩 BDIX24 FTP SAM ICC
        "PROXY 103.35.110.6:29658",     // 🇧🇩 BDIX25 FTP SAM ICC
        "PROXY 175.29.164.161:33489",   // 🇧🇩 BDIX26 FTP SAM
        "PROXY 175.29.169.73:61403",    // 🇧🇩 BDIX27 FTP SAM
        "PROXY 103.18.204.141:35041",   // 🇧🇩 BDIX28 FTP CIRCLE
        "PROXY 103.243.238.36:15209",   // 🇧🇩 BDIX29 FTP CIRCLE
        "PROXY 103.243.238.166:36676"   // 🇧🇩 BDIX30 FTP CIRCLE
    ];

    // Function to select a random proxy from the list
    function getRandomProxy() {
        var index = Math.floor(Math.random() * proxies.length);
        return proxies[index];
    }

    // Match specific URL or IP address
    if (shExpMatch(url, "*circleftp*")) {
        return "PROXY 103.243.238.36:15209";
    }

    // Direct connection for specified hosts and URLs
    if (
        shExpMatch(host, "*facebook*") ||
        shExpMatch(host, "*fbcdn*") ||
        shExpMatch(url, "*google*") ||
        shExpMatch(url, "*youtube*") ||
        shExpMatch(url, "*googlevideo*") ||
        shExpMatch(host, "*cudy.net") ||
        shExpMatch(host, "*torrentbd*") ||
        shExpMatch(url, "*whatsapp*")
    ) {
        return "DIRECT";
    }

    // Default to a randomly selected proxy for load balancing
    return getRandomProxy();
}
