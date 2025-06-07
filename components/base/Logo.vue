<template>
    <div class="logo">
        <svg width="140" height="40" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <linearGradient id="terminalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#4a90e2;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8e44ad;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="promptGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#6bb6ff;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4a90e2;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:0.9" />
                <stop offset="100%" style="stop-color:#312e81;stop-opacity:0.9" />
            </linearGradient>
            </defs>

            <!-- Terminal Window Background -->
            <rect x="0" y="0" width="140" height="40" rx="6" fill="url(#backgroundGradient)"/>

            <!-- Terminal Header Dots -->
            <circle cx="8" cy="8" r="2" fill="#ef4444"/>
            <circle cx="16" cy="8" r="2" fill="#f59e0b"/>
            <circle cx="24" cy="8" r="2" fill="#10b981"/>

            <!-- Terminal Prompt -->
            <text x="8" y="28" font-family="Monaco, 'Courier New', monospace" font-size="14" font-weight="bold">
            <tspan fill="url(#promptGradient)">$</tspan>
            <tspan fill="white" dx="4">deonte</tspan>
            </text>

            <!-- Blinking Block Cursor -->
            <rect x="82" y="18" width="10" height="12" fill="white" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0;0.8" dur="1.5s" repeatCount="indefinite"/>
            </rect>
        </svg>
    </div>
</template>

<style>
.logo svg {
    transition: transform 0.2s ease;
    cursor: pointer;
}

.logo svg:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px rgba(74, 144, 226, 0.5));
}

</style>
