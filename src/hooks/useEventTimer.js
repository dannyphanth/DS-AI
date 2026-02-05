import { useState, useEffect, useRef, useCallback } from 'react';
import { categorizeEvents } from '../utils/eventHelpers';

/**
 * Custom hook that provides an internal clock and event categorization
 * Updates every minute to track ongoing events, but only triggers re-render if events actually change
 * 
 * @param {Array} upcomingEvents - Array of upcoming events
 * @param {Array} pastEvents - Array of past events
 * @returns {Object} { currentTime, ongoingEvents, upcomingEvents, pastEvents }
 */
export const useEventTimer = (upcomingEvents, pastEvents) => {
    const [categorization, setCategorization] = useState(() => {
        const now = new Date();
        return categorizeEvents(upcomingEvents, pastEvents, now);
    });

    const currentTimeRef = useRef(new Date());
    const previousCategorizationIdsRef = useRef(null);
    const upcomingEventsRef = useRef(upcomingEvents);
    const pastEventsRef = useRef(pastEvents);

    // Keep refs in sync with props
    useEffect(() => {
        upcomingEventsRef.current = upcomingEvents;
        pastEventsRef.current = pastEvents;
    }, [upcomingEvents, pastEvents]);

    // Helper function to get categorization IDs for comparison
    const getCategorizationIds = (cat) => {
        return JSON.stringify({
            ongoing: cat.ongoing.map(e => e.id).sort(),
            upcoming: cat.upcoming.map(e => e.id).sort(),
            past: cat.past.map(e => e.id).sort()
        });
    };

    // Check and update categorization if needed - use useCallback to prevent stale closures
    const checkAndUpdateCategorization = useCallback(() => {
        if (document.hidden) return; // Don't check if page is hidden

        currentTimeRef.current = new Date();
        const newCategorization = categorizeEvents(
            upcomingEventsRef.current,
            pastEventsRef.current,
            currentTimeRef.current
        );

        const newIds = getCategorizationIds(newCategorization);
        const previousIds = previousCategorizationIdsRef.current;

        // Only update state if categorization actually changed
        if (newIds !== previousIds) {
            previousCategorizationIdsRef.current = newIds;
            setCategorization(newCategorization);
        }
    }, []); // No dependencies - uses refs instead

    // Set initial categorization IDs
    useEffect(() => {
        previousCategorizationIdsRef.current = getCategorizationIds(categorization);
    }, [categorization]);

    // Update time every minute, but only update state if categorization actually changed
    useEffect(() => {
        // Check if page is visible before updating (saves resources when tab is hidden)
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                checkAndUpdateCategorization();
            }
        };

        // Update every minute
        const interval = setInterval(() => {
            checkAndUpdateCategorization();
        }, 60000); // 60 seconds

        // Listen for visibility changes
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearInterval(interval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [checkAndUpdateCategorization]);

    // Update if event lists change
    useEffect(() => {
        checkAndUpdateCategorization();
    }, [upcomingEvents, pastEvents, checkAndUpdateCategorization]);

    return {
        currentTime: currentTimeRef.current,
        ongoingEvents: categorization.ongoing,
        upcomingEvents: categorization.upcoming,
        pastEvents: categorization.past
    };
};
