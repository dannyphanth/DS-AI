# Testing Guide for QR Code Feature

## Method 1: Temporarily Modify an Event (Easiest)

### Step 1: Make an Event "Ongoing"
1. Open `src/data/eventsData.js`
2. Find an event (e.g., "Datathon Prep Workshop")
3. Temporarily change the date and time to match the current time:

```javascript
{
    id: 'datathon-prep-workshop',
    title: 'Datathon Prep Workshop',
    date: 'November 3, 2025', // Change to today's date
    time: '11:00 AM - 12:00 PM', // Change to a time range that includes current time
    location: 'Building 3, Room 2636',
    type: 'General Meeting', // IMPORTANT: Must be "General Meeting" for QR code to show
    // ... rest of event data
}
```

**Example:**
- If it's currently 11:30 AM on November 3, 2025
- Set: `date: 'November 3, 2025'` and `time: '11:00 AM - 12:00 PM'`

### Step 2: Start the Dev Server
```bash
npm run dev
```

### Step 3: Navigate to Events Page
1. Go to `/events` route in your browser
2. Make sure "Upcoming Events" tab is selected
3. Look for the event you modified

### Step 4: Check for QR Code Badge
- You should see an **"Ongoing"** badge with a QR code icon in the top-right corner of the event card
- The badge should only appear on events with `type: 'General Meeting'` that are currently ongoing

### Step 5: Test the Popup
1. Click the "Ongoing" badge
2. A popup should appear showing:
   - Event title
   - QR code image (`qrcodepopup.png`)
   - "Open Sign-In Form" button

### Step 6: Test the Sign-In Form Link
1. Click the "Open Sign-In Form" button
2. It should open the sign-in form URL in a new tab (currently set to placeholder URL)

## Method 2: Use Browser Console (For Developers)

1. Open browser DevTools (F12)
2. Go to Console tab
3. Run this to check if events are being categorized correctly:

```javascript
// Check what events are currently ongoing
// (You can add console.log statements in useEventTimer.js temporarily)
```

## Method 3: Test Event Transitions

### Test: Upcoming → Ongoing
1. Set an event's time to start in 1 minute
2. Wait 1 minute (or manually trigger the check)
3. The badge should appear automatically

### Test: Ongoing → Past
1. Set an event's time to end in 1 minute
2. Wait 1 minute
3. The event should move to "Past Events" tab automatically
4. The badge should disappear

## Method 4: Verify No Page Refresh

1. Open the Events page
2. Open browser DevTools → Network tab
3. Wait 1-2 minutes
4. You should **NOT** see a full page reload/refresh
5. The page should remain static unless an event status actually changes

## Troubleshooting

### Badge Not Showing?
- ✅ Check that event `type` is exactly `'General Meeting'` (case-sensitive)
- ✅ Verify the event's time range includes the current time
- ✅ Check browser console for any errors
- ✅ Make sure the date format matches: `'Month Day, Year'` (e.g., `'November 3, 2025'`)

### Popup Not Opening?
- ✅ Check that `qrcodepopup.png` exists in `/public/` folder
- ✅ Check browser console for image loading errors
- ✅ Verify the badge is clickable (check z-index and positioning)

### Events Not Categorizing Correctly?
- ✅ Check the date/time format matches expected format
- ✅ Verify time zone (uses local browser time)
- ✅ Check browser console for parsing errors

## Quick Test Event Template

Here's a template you can use to quickly test:

```javascript
{
    id: 'test-qr-code-event',
    title: 'Test QR Code Event',
    date: 'November 3, 2025', // CHANGE TO TODAY
    time: '11:00 AM - 12:00 PM', // CHANGE TO CURRENT TIME RANGE
    location: 'Test Location',
    type: 'General Meeting', // MUST BE General Meeting
    iconType: 'SchoolIcon',
    image: '/gm11-datathon_prep_workshop.png', // Any event image
    description: 'This is a test event for QR code functionality',
    registrationLink: '#'
}
```

Add this to `upcomingEvents` array in `eventsData.js` for testing.

## Reset After Testing

**Important:** Remember to revert any test changes you made to `eventsData.js` before committing!





