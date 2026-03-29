// tracking.js - visitor info collection
(function() {
    // Visitor info
    const visitorInfo = {
        url: window.location.href,
        referrer: document.referrer || "Direct visit",
        screen: `${window.screen.width}x${window.screen.height}`,
        browser: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        timestamp: new Date().toISOString()
    };

    // Log to console (optional, for testing)
    console.log("Visitor Info:", visitorInfo);

    // Example: send data to Google Analytics as an event
    if (typeof gtag === "function") {
        gtag('event', 'visitor_info', {
            'page_url': visitorInfo.url,
            'referrer': visitorInfo.referrer,
            'screen_size': visitorInfo.screen,
            'browser': visitorInfo.browser,
            'platform': visitorInfo.platform,
            'language': visitorInfo.language
        });
    }

    // Optionally: send data to a backend endpoint if you add one later
    // fetch("https://yourserver.com/track", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(visitorInfo)
    // });
})();
