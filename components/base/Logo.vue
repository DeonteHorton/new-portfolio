<template>
    <div class="logo">
        <svg width="140" height="40" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="terminalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#4a90e2;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8e44ad;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="promptGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#48bb78;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#38a169;stop-opacity:1" />
                </linearGradient>
            </defs>

            <!-- Terminal Window Background -->
            <rect x="0" y="0" width="140" height="40" rx="6" fill="#2d3748"/>

            <!-- Terminal Header Dots -->
            <circle cx="8" cy="8" r="2" fill="#ff5f56"/>
            <circle cx="16" cy="8" r="2" fill="#ffbd2e"/>
            <circle cx="24" cy="8" r="2" fill="#27ca3f"/>

            <!-- Terminal Prompt -->
            <text x="8" y="28" font-family="Monaco, 'Courier New', monospace" font-size="14" font-weight="bold">
                <tspan fill="url(#promptGradient)">$</tspan>
                <tspan fill="url(#terminalGradient)" dx="4">deonte</tspan>
            </text>

            <!-- Blinking Cursor -->
            <rect x="82" y="18" width="8" height="2" fill="url(#terminalGradient)">
                <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/>
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
}
</style>
