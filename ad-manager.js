// ad-manager.js - Centralized Ad Management for BSR Studios
// This script dynamically injects Adsterra ads into designated placeholders.

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. NATIVE BANNER AD SETUP ---
    // Target placeholder: <div id="bsr-native-ad"></div>
    const nativeAdContainer = document.getElementById('bsr-native-ad');
    if (nativeAdContainer) {
        // Build the structure with your updated Native Ad ID
        const nativeAdHTML = `
            <div class="ad-wrapper" style="text-align: center; margin: 20px auto 40px auto; padding: 15px; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1); display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 100%; overflow: hidden;">
                <span class="ad-label" style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;">Advertisement</span>
                <div id="container-e4426acf42a4df94f50e557f1b618c7a"></div>
            </div>
        `;
        nativeAdContainer.innerHTML = nativeAdHTML;

        // Create and append the external script to trigger the ad
        const nativeScript = document.createElement('script');
        nativeScript.async = true;
        nativeScript.setAttribute('data-cfasync', 'false');
        nativeScript.src = 'https://pl29336294.profitablecpmratenetwork.com/e4426acf42a4df94f50e557f1b618c7a/invoke.js';
        nativeAdContainer.appendChild(nativeScript);
    }

    // --- 2. NORMAL BANNER AD (728x90) SETUP ---
    // Target placeholder: <div id="bsr-normal-banner"></div>
    const normalAdContainer = document.getElementById('bsr-normal-banner');
    if (normalAdContainer) {
        // Build the structure for the 728x90 banner
        const normalAdHTML = `
            <div class="ad-wrapper" style="border: none; background: transparent; padding: 0; text-align: center; margin: 20px auto 40px auto; display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 100%; overflow: hidden;">
                <span class="ad-label" style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">Advertisement</span>
                <div id="banner-placeholder"></div>
            </div>
        `;
        normalAdContainer.innerHTML = normalAdHTML;

        // Initialize atOptions parameters with your new Key
        const optionsScript = document.createElement('script');
        optionsScript.type = 'text/javascript';
        optionsScript.innerHTML = `
            atOptions = {
                'key' : '8f5a8f2fe3c80d05151291dd7d8267cd',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
            };
        `;
        
        // Load the actual iframe from Adsterra
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = 'https://www.highperformanceformat.com/8f5a8f2fe3c80d05151291dd7d8267cd/invoke.js';

        // Append both scripts directly into the placeholder div
        const bannerTarget = normalAdContainer.querySelector('#banner-placeholder');
        if (bannerTarget) {
            bannerTarget.appendChild(optionsScript);
            bannerTarget.appendChild(invokeScript);
        }
    }
});
