function FindProxyForURL(url, host) {
    // Match if URL contains 'circleftp' or IP is 112.13.45.6
    if (shExpMatch(url, "*circleftp*")) {
        return "PROXY 103.243.238.36:15209";
    }
    
    // Default to direct connection
    return "DIRECT";
}
