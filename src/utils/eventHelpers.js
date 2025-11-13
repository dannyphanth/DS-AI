/**
 * Helper functions for event date/time parsing and status checking
 */

/**
 * Parses event date string (e.g., "November 6, 2025")
 * Returns Date object or null if parsing fails
 */
export const parseDate = (dateStr) => {
    if (!dateStr) return null;
    
    try {
        // Handle date ranges (e.g., "November 10-14, 2025")
        const dateRangeMatch = dateStr.match(/(\w+)\s+(\d+)(?:\s*-\s*(\d+))?,\s*(\d+)/);
        if (dateRangeMatch) {
            const [, monthName, startDay, endDay, year] = dateRangeMatch;
            // For ranges, use the start date
            const monthMap = {
                'January': 0, 'February': 1, 'March': 2, 'April': 3,
                'May': 4, 'June': 5, 'July': 6, 'August': 7,
                'September': 8, 'October': 9, 'November': 10, 'December': 11
            };
            const month = monthMap[monthName];
            if (month !== undefined) {
                return new Date(parseInt(year), month, parseInt(startDay));
            }
        }
        
        // Try direct parsing
        const parsed = new Date(dateStr);
        if (!isNaN(parsed.getTime())) {
            return parsed;
        }
        
        return null;
    } catch (error) {
        console.warn('Error parsing date:', dateStr, error);
        return null;
    }
};

/**
 * Parses time string (e.g., "12:00 PM - 1:00 PM")
 * Returns { startTime: Date, endTime: Date } or null if parsing fails
 * Takes a base date and adds the parsed time to it
 */
export const parseTime = (timeStr, baseDate) => {
    if (!timeStr || !baseDate) return null;
    
    try {
        // Handle standard format: "12:00 PM - 1:00 PM"
        const timeRangeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
        if (timeRangeMatch) {
            const [, startHour, startMin, startPeriod, endHour, endMin, endPeriod] = timeRangeMatch;
            
            const parseTimeToDate = (hour, min, period, date) => {
                let hour24 = parseInt(hour);
                if (period.toUpperCase() === 'PM' && hour24 !== 12) {
                    hour24 += 12;
                } else if (period.toUpperCase() === 'AM' && hour24 === 12) {
                    hour24 = 0;
                }
                const result = new Date(date);
                result.setHours(hour24, parseInt(min), 0, 0);
                return result;
            };
            
            const startTime = parseTimeToDate(startHour, startMin, startPeriod, baseDate);
            const endTime = parseTimeToDate(endHour, endMin, endPeriod, baseDate);
            
            return { startTime, endTime };
        }
        
        // Handle single time with duration assumption (default 1 hour)
        const singleTimeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
        if (singleTimeMatch) {
            const [, hour, min, period] = singleTimeMatch;
            let hour24 = parseInt(hour);
            if (period.toUpperCase() === 'PM' && hour24 !== 12) {
                hour24 += 12;
            } else if (period.toUpperCase() === 'AM' && hour24 === 12) {
                hour24 = 0;
            }
            
            const startTime = new Date(baseDate);
            startTime.setHours(hour24, parseInt(min), 0, 0);
            
            const endTime = new Date(startTime);
            endTime.setHours(hour24 + 1, parseInt(min), 0, 0);
            
            return { startTime, endTime };
        }
        
        // Handle special formats like "Opening - Nov 11 @ 9 AM"
        const specialMatch = timeStr.match(/@\s*(\d{1,2})\s*(AM|PM)/i);
        if (specialMatch) {
            const [, hour, period] = specialMatch;
            let hour24 = parseInt(hour);
            if (period.toUpperCase() === 'PM' && hour24 !== 12) {
                hour24 += 12;
            } else if (period.toUpperCase() === 'AM' && hour24 === 12) {
                hour24 = 0;
            }
            
            const startTime = new Date(baseDate);
            startTime.setHours(hour24, 0, 0, 0);
            
            const endTime = new Date(startTime);
            endTime.setHours(hour24 + 2, 0, 0, 0); // Default 2 hours for special events
            
            return { startTime, endTime };
        }
        
        return null;
    } catch (error) {
        console.warn('Error parsing time:', timeStr, error);
        return null;
    }
};

/**
 * Parses event date and time strings into start and end Date objects
 */
export const parseEventDateTime = (event) => {
    const { date, time } = event;
    
    const baseDate = parseDate(date);
    if (!baseDate) return null;
    
    const timeRange = parseTime(time, baseDate);
    if (!timeRange) {
        // If time parsing fails, default to all day (start of day to end of day)
        const startDate = new Date(baseDate);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(baseDate);
        endDate.setHours(23, 59, 59, 999);
        return { startDate: startDate, endDate: endDate };
    }
    
    return {
        startDate: timeRange.startTime,
        endDate: timeRange.endTime
    };
};

/**
 * Checks if an event is currently ongoing
 */
export const isEventOngoing = (event, currentTime) => {
    const dateTime = parseEventDateTime(event);
    if (!dateTime) return false;
    
    return currentTime >= dateTime.startDate && currentTime <= dateTime.endDate;
};

/**
 * Checks if an event has already passed
 */
export const isEventPast = (event, currentTime) => {
    const dateTime = parseEventDateTime(event);
    if (!dateTime) return false;
    
    return currentTime > dateTime.endDate;
};

/**
 * Filters events to return only those currently ongoing
 */
export const getOngoingEvents = (events, currentTime) => {
    return events.filter(event => isEventOngoing(event, currentTime));
};

/**
 * Separates events into ongoing and past/upcoming based on current time
 */
export const categorizeEvents = (upcomingEvents, pastEvents, currentTime) => {
    const ongoing = [];
    const upcoming = [];
    const past = [...pastEvents];
    
    upcomingEvents.forEach(event => {
        if (isEventOngoing(event, currentTime)) {
            ongoing.push(event);
        } else if (isEventPast(event, currentTime)) {
            past.push(event);
        } else {
            upcoming.push(event);
        }
    });
    
    return { ongoing, upcoming, past };
};



