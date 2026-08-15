export default function DataFlow() {
    return (
        <svg
            className="absolute inset-0 h-full w-full pointer-events-none opacity-40"
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="flowGradient">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>

                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Ścieżka 1 */}

            <path
                id="path1"
                d="M-100 700 C300 500 700 650 1050 420 S1500 280 1800 180"
                stroke="rgba(56,189,248,.12)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10 14"
            />

            {/* Ścieżka 2 */}

            <path
                id="path2"
                d="M-100 250 C250 350 700 150 1050 320 S1500 600 1800 500"
                stroke="rgba(56,189,248,.08)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 12"
            />

            {/* Punkt */}

            <circle r="5" fill="url(#flowGradient)" filter="url(#glow)">
                <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath href="#path1" />
                </animateMotion>
            </circle>

            <circle r="4" fill="#38bdf8" filter="url(#glow)">
                <animateMotion
                    begin="2s"
                    dur="10s"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath href="#path2" />
                </animateMotion>
            </circle>

            <circle r="3" fill="#67e8f9" filter="url(#glow)">
                <animateMotion
                    begin="5s"
                    dur="12s"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath href="#path1" />
                </animateMotion>
            </circle>
        </svg>
    );
}