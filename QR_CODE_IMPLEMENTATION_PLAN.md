# QR Code Implementation Plan for Events

## Overview
This document outlines the implementation plan for adding QR code sign-in functionality to events, including:
1. Internal clock system to track ongoing events
2. Automatic event status updates (upcoming → ongoing → past)
3. QR code display for ongoing general meetings
4. UI components for QR code badge and popup modal

## Architecture

### 1. Internal Clock System
- **Purpose**: Track current time and automatically update event statuses
- **Implementation**: React hook (`useEventTimer`) that runs every minute
- **Features**:
  - Updates every 60 seconds
  - Calculates which events are currently ongoing
  - Moves past events from `upcomingEvents` to `pastEvents`
  - Determines if an event is "ongoing" based on date and time

### 2. Event Data Structure Updates

**Current Structure:**
```javascript
{
  id: 'event-id',
  title: 'Event Title',
  date: 'November 6, 2025',
  time: '12:00 PM - 1:00 PM',
  location: 'Building 3, Room 2636',
  type: 'General Meeting',
  // ... other fields
}
```

**New Fields to Add (Optional - only if needed per-event):**
```javascript
{
  // ... existing fields
  startDateTime: '2025-11-06T12:00:00', // ISO format for easier parsing
  endDateTime: '2025-11-06T13:00:00',   // ISO format
  qrCodeEnabled: true, // Whether this event type supports QR codes (default: General Meeting)
}
```

**Global Configuration (in Events.jsx or config file):**
```javascript
const SIGN_IN_FORM_URL = 'https://forms.gle/...'; // Single sign-in form for all events
const QR_CODE_IMAGE_PATH = '/qr-code-signin.png'; // Single QR code image for all events
```

### 3. Helper Functions Needed

#### `parseEventDateTime(date, time)`
- Converts event date/time strings to JavaScript Date objects
- Handles various time formats: "12:00 PM - 1:00 PM", "Opening - Nov 11 @ 9 AM"
- Returns `{ startDate, endDate }` or `null` if parsing fails

#### `isEventOngoing(event, currentTime)`
- Checks if an event is currently happening
- Returns `true` if current time is between event start and end times

#### `isEventPast(event, currentTime)`
- Checks if an event has already ended
- Returns `true` if current time is after event end time

#### `getOngoingEvents(events, currentTime)`
- Filters events to return only those currently ongoing
- Returns array of ongoing events

### 4. Components to Create/Modify

#### A. `EventQRCodePopup.jsx` (New Component)
- Modal popup to display QR code
- Props: `open`, `onClose`, `event`, `qrCodeImage`, `signInFormUrl`
- Features:
  - Displays the single QR code image (shared across all events)
  - Shows event title
  - Link to sign-in form (opens in new tab)
  - Close button
  - Similar styling to `DatathonPopup.jsx`
  - Responsive design

#### B. `EventQRCodeBadge.jsx` (New Component)
- Badge/icon displayed on event cards
- Props: `event`, `onClick`
- Features:
  - "Ongoing" text + QR code icon (from generated image file)
  - Positioned at top-right of event card
  - Clickable to open popup
  - Only visible for ongoing general meetings

#### C. Modify `Events.jsx`
- Add internal clock hook
- Filter events based on current time
- Show/hide QR code badges on event cards
- Manage QR code popup state

#### D. Modify `eventsData.js` (Optional)
- Optionally add `startDateTime` and `endDateTime` for easier parsing
- Or keep date/time strings and parse them dynamically
- No need to add sign-in form URL or QR code path to each event (handled globally)

### 5. QR Code Image Storage

**File Structure:**
```
public/
├── qr-code-signin.png  (or whatever your friend names it)
└── ... (other public assets)
```

**Single QR Code Image:**
- One QR code image file in the `/public/` folder
- Suggested name: `qr-code-signin.png` or `signin-qr.png`
- This same QR code is used for all events (points to the same sign-in form)

**Image Requirements:**
- Format: PNG with transparent background (recommended)
- Size: At least 300x300px for good scanning quality
- Can be larger (e.g., 500x500px) for high-DPI displays

### 6. Implementation Steps

1. **Add QR Code Image**
   - Place the single QR code image file in `/public/` folder
   - Example: `/public/qr-code-signin.png`

2. **Create Helper Utilities** (`src/utils/eventHelpers.js`)
   - Date/time parsing functions
   - Event status checking functions

3. **Create Custom Hook** (`src/hooks/useEventTimer.js`)
   - Internal clock that updates every minute
   - Returns current time and event statuses

4. **Create QR Code Components**
   - `EventQRCodeBadge.jsx` - Uses the "Ongoing" badge icon image
   - `EventQRCodePopup.jsx` - Displays the QR code image file

5. **Update Events.jsx**
   - Define global constants: `SIGN_IN_FORM_URL` and `QR_CODE_IMAGE_PATH`
   - Integrate internal clock
   - Add QR code badge to event cards
   - Add popup modal functionality
   - Pass the same QR code image and URL to all events

6. **Update eventsData.js** (Optional)
   - Optionally add `startDateTime` and `endDateTime` for easier time parsing
   - Or keep existing date/time string format

7. **Testing**
   - Test with past events (should show as past)
   - Test with future events (should show as upcoming)
   - Test with ongoing events (should show badge and QR code)
   - Test time transitions (upcoming → ongoing → past)

### 7. Edge Cases to Handle

- **Events spanning multiple days**: Handle start/end dates properly
- **All-day events**: Special handling if needed
- **Events without end time**: Default to 1 hour duration
- **Invalid date formats**: Graceful fallback
- **Timezone handling**: Use local timezone or specify timezone
- **Event type filtering**: Only show QR codes for "General Meeting" type (or configurable)
- **Missing QR code image**: Handle gracefully with fallback or error message
- **No per-event configuration needed**: All events use the same QR code and sign-in form

### 8. UI/UX Considerations

- **Badge Positioning**: Top-right corner of event card, non-intrusive
- **Badge Size**: Responsive (smaller on mobile)
- **Popup Size**: Responsive modal, centered on screen
- **QR Code Size**: Display at least 250x250px (can be larger)
- **Image Loading**: Show placeholder or loading state while image loads
- **Accessibility**: Proper ARIA labels, keyboard navigation
- **Fallback**: If QR code image doesn't load, show direct link button

### 9. Future Enhancements

- **QR Code Expiration**: Generate time-limited QR codes
- **Event-specific QR Codes**: Unique QR codes per event
- **Analytics**: Track QR code scans
- **Admin Panel**: Manage sign-in form URLs and QR code images
- **Multiple Event Types**: Extend QR codes to other event types

## File Structure

```
src/
├── components/
│   ├── Events.jsx (modified)
│   ├── EventQRCodeBadge.jsx (new)
│   └── EventQRCodePopup.jsx (new)
├── hooks/
│   └── useEventTimer.js (new)
├── utils/
│   └── eventHelpers.js (new)
└── data/
    └── eventsData.js (optional modifications)

public/
└── qr-code-signin.png  (single QR code image for all events)
```

## Dependencies

**No additional dependencies needed!** We'll use:
- Existing React/MUI components for the UI
- Native `<img>` tag to display QR code images
- Built-in Date handling for time parsing

## Example Usage Flow

1. User visits Events page
2. Internal clock checks current time
3. System identifies ongoing events
4. For ongoing "General Meeting" events:
   - QR code badge appears on event card (using "Ongoing" badge icon)
5. User clicks badge
6. Popup opens showing:
   - Event title
   - QR code image (the single shared QR code from `/public/`)
   - Link to open sign-in form directly (same form for all events)
7. User scans QR code or clicks link
8. User is redirected to the sign-in form

## Configuration Example (in Events.jsx)

```javascript
// Global configuration - same QR code and form for all events
const SIGN_IN_FORM_URL = 'https://forms.gle/your-signin-form-url';
const QR_CODE_IMAGE_PATH = '/qr-code-signin.png'; // Path to the single QR code image
```

## Example Event Data Entry (No Changes Needed!)

```javascript
{
  id: 'datathon-prep-workshop',
  title: 'Datathon Prep Workshop',
  date: 'November 6, 2025',
  time: '12:00 PM - 1:00 PM',
  location: 'Building 3, Room 2636',
  type: 'General Meeting',
  iconType: 'SchoolIcon',
  image: '/gm11-datathon_prep_workshop.png',
  description: '...',
  registrationLink: '#'
  // No need to add signInFormUrl or qrCodeImage - handled globally!
}
```
