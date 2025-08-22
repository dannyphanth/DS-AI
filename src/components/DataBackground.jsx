import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useEffect, useRef, useState } from 'react';
import {
    TrendingUp,
    BarChart,
    PieChart,
    ShowChart,
    Timeline,
    BubbleChart,
    ScatterPlot,
    DonutLarge,
    Functions,
    Code,
    Psychology,
    Memory,
    Hub,
    AccountTree,
    Schema,
    DataUsage,
    Analytics,
    Insights,
    PrecisionManufacturing,
    Speed
} from '@mui/icons-material';

const DataBackground = ({ refreshKey, reveal }) => {
    // Deterministic PRNG so layout is consistent across reloads
    const createSeededRng = (seed) => {
        let s = seed >>> 0;
        return () => {
            // mulberry32
            s += 0x6D2B79F5;
            let t = Math.imul(s ^ (s >>> 15), 1 | s);
            t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    };

    const randomIn = (rng, min, max) => min + rng() * (max - min);

    const iconComponents = useMemo(
        () => [
            <TrendingUp sx={{ fontSize: '2.5rem' }} />,
            <BarChart sx={{ fontSize: '2.5rem' }} />,
            <PieChart sx={{ fontSize: '2.5rem' }} />,
            <ShowChart sx={{ fontSize: '2.5rem' }} />,
            <Timeline sx={{ fontSize: '2.5rem' }} />,
            <BubbleChart sx={{ fontSize: '2.5rem' }} />,
            <ScatterPlot sx={{ fontSize: '2.5rem' }} />,
            <DonutLarge sx={{ fontSize: '2.5rem' }} />,
            <Functions sx={{ fontSize: '2.5rem' }} />,
            <Code sx={{ fontSize: '2.5rem' }} />,
            <Psychology sx={{ fontSize: '2.5rem' }} />,
            <Memory sx={{ fontSize: '2.5rem' }} />,
            <Hub sx={{ fontSize: '2.5rem' }} />,
            <AccountTree sx={{ fontSize: '2.5rem' }} />,
            <Schema sx={{ fontSize: '2.5rem' }} />,
            <DataUsage sx={{ fontSize: '2.5rem' }} />,
            <Analytics sx={{ fontSize: '2.5rem' }} />,
            <Insights sx={{ fontSize: '2.5rem' }} />,
            <PrecisionManufacturing sx={{ fontSize: '2.5rem' }} />,
            <Speed sx={{ fontSize: '2.5rem' }} />
        ],
        []
    );

    const containerRef = useRef(null);
    const [dynamicPlacements, setDynamicPlacements] = useState(null);

    // Dynamic empty-space detection and placement
    useEffect(() => {
        const rng = createSeededRng(20240815);
        const compute = () => {
            const container = containerRef.current;
            if (!container) return;
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;

            // Gather occupied rects from elements marked with data-occupied
            const occupiedNodes = Array.from(document.querySelectorAll('[data-occupied="true"]'));
            const occupiedRects = occupiedNodes
                .map(node => {
                    const r = node.getBoundingClientRect();
                    return {
                        left: r.left - containerRect.left,
                        top: r.top - containerRect.top,
                        right: r.right - containerRect.left,
                        bottom: r.bottom - containerRect.top
                    };
                })
                // filter out rects that are completely outside container bounds
                .filter(r => r.bottom > 0 && r.top < containerHeight && r.right > 0 && r.left < containerWidth);

            const inflate = 12; // padding around occupied areas (reduced)
            const isInsideAny = (x, y) =>
                occupiedRects.some(r => x >= r.left - inflate && x <= r.right + inflate && y >= r.top - inflate && y <= r.bottom + inflate);

            // Candidate columns biased to edges (exclude center; we'll add a precise center spine separately)
            const xColumns = [
                containerWidth * 0.04,
                containerWidth * 0.10,
                containerWidth * 0.20,
                /* center omitted */
                containerWidth * 0.80,
                containerWidth * 0.90,
                containerWidth * 0.96
            ];

            // Step through vertical space
            const yStep = 140; // px spacing
            const yPositions = [];
            for (let y = 0; y <= containerHeight; y += yStep) yPositions.push(y);

            // Seed precise center spine positions first so they remain exactly centered
            const accepted = [];
            yPositions.forEach(y => {
                const cx = containerWidth * 0.5;
                if (!isInsideAny(cx, y)) {
                    accepted.push({ x: cx, y });
                }
            });

            // Collect candidate points outside occupied rects
            const candidates = [];
            xColumns.forEach(x => {
                yPositions.forEach(y => {
                    const jitterX = (randomIn(rng, -0.5, 0.5)) * 16;
                    const jitterY = (randomIn(rng, -0.5, 0.5)) * 12;
                    const cx = Math.max(0, Math.min(containerWidth, x + jitterX));
                    const cy = Math.max(0, Math.min(containerHeight, y + jitterY));
                    if (!isInsideAny(cx, cy)) candidates.push({ x: cx, y: cy });
                });
            });

            // Blue-noise thinning to avoid clustering, respecting already-seeded center spine
            const minDist = 100; // px
            candidates.forEach(p => {
                const ok = accepted.every(a => {
                    const dx = a.x - p.x;
                    const dy = a.y - p.y;
                    return dx * dx + dy * dy >= minDist * minDist;
                });
                if (ok) accepted.push(p);
            });

            // Build placements, round-robin icons
            const placements = accepted.map((p, i) => ({
                icon: iconComponents[i % iconComponents.length],
                x: `${p.x}px`,
                y: `${p.y}px`
            }));

            setDynamicPlacements(placements);
        };

        compute();
        const onResize = () => compute();
        window.addEventListener('resize', onResize);
        // Recompute after a short delay to catch late layout (images)
        const t = setTimeout(compute, 300);
        return () => {
            window.removeEventListener('resize', onResize);
            clearTimeout(t);
        };
    }, [iconComponents, refreshKey]);

    // Fallback: simple edge columns if dynamic not ready
    const fallbackPlacements = useMemo(() => {
        const rng = createSeededRng(1337);
        const columns = [6, 94];
        const rows = [12, 30, 48, 66, 84, 102];
        const tiles = 2; // minimal fallback
        const placements = [];
        let idx = 0;
        for (let tile = 0; tile < tiles; tile++) {
            const yOffset = tile * 100;
            columns.forEach(col => {
                rows.forEach(rowVh => {
                    const jitterX = (rng() - 0.5) * 1.2;
                    const jitterY = (rng() - 0.5) * 2.0;
                    placements.push({
                        icon: iconComponents[idx % iconComponents.length],
                        x: `${(col + jitterX).toFixed(1)}%`,
                        y: `${(rowVh + yOffset + jitterY).toFixed(1)}vh`
                    });
                    idx++;
                });
            });
        }
        return placements;
    }, [iconComponents]);

    const icons = dynamicPlacements ?? fallbackPlacements;

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'hidden'
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: reveal ? 1 : 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {icons.map((iconConfig, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 0, scale: 1 }}
                        animate={{
                            opacity: [0.25, 0.45, 0.3, 0.45, 0.3],
                            y: [0, -10, 0, 10, 0],
                            scale: [1, 1.02, 1, 0.98, 1]
                        }}
                        transition={{
                            duration: 10 + (index % 5),
                            delay: (index % 10) * 0.12,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        style={{
                            position: 'absolute',
                            left: iconConfig.x,
                            top: iconConfig.y,
                            color: 'rgb(48, 164, 199)'
                        }}
                    >
                        {iconConfig.icon}
                    </motion.div>
                ))}
            </motion.div>
        </Box>
    );
};

export default DataBackground;
