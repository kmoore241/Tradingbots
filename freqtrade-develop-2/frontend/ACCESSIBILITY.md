# ♿ Accessibility Guide

Freqtrade is committed to providing an inclusive trading experience for all users. This guide outlines our accessibility features and how to use them effectively.

## 🎯 Accessibility Standards

We follow **WCAG 2.1 AA** guidelines to ensure our platform is usable by everyone, including users with disabilities.

### Key Principles
- **Perceivable**: Information must be presentable in ways users can perceive
- **Operable**: Interface components must be operable by all users
- **Understandable**: Information and UI operation must be understandable
- **Robust**: Content must be robust enough for various assistive technologies

## 🛠️ Built-in Accessibility Features

### Screen Reader Support
The platform is fully compatible with popular screen readers:
- **NVDA** (Windows)
- **JAWS** (Windows)
- **VoiceOver** (macOS/iOS)
- **TalkBack** (Android)

### Keyboard Navigation
Navigate the entire interface using only your keyboard:

| Action | Shortcut |
|--------|----------|
| Navigate between elements | `Tab` / `Shift + Tab` |
| Activate buttons/links | `Enter` / `Space` |
| Close modals/dropdowns | `Escape` |
| Navigate menus | `Arrow Keys` |
| Skip to main content | `Alt + S` |
| Open settings | `Alt + ,` |
| Toggle sidebar | `Alt + B` |

### Visual Accessibility

#### High Contrast Mode
- Automatically detected from system preferences
- Manual toggle in Settings → Appearance
- Enhanced border visibility
- Improved focus indicators

#### Font Size Adjustment
- Respects browser font size settings
- Scales proportionally with system settings
- Maintains layout integrity at 200% zoom

#### Color Accessibility
- Never relies solely on color to convey information
- 4.5:1 contrast ratio for normal text
- 3:1 contrast ratio for large text
- Colorblind-friendly palette

#### Reduced Motion
- Respects `prefers-reduced-motion` setting
- Disables animations when requested
- Provides static alternatives to motion-based feedback

## 🎮 Gamification Accessibility

### Achievement Notifications
- Screen reader announcements for new achievements
- Visual and haptic feedback options
- Non-intrusive notification positioning

### Progress Indicators
- ARIA labels describe current progress
- Text alternatives for visual progress bars
- Audio cues for level-ups (optional)

### XP and Leveling
- Clear progression descriptions
- Alternative text for progress visualizations
- Keyboard accessible progress tracking

## 🔧 Customization Options

### Theme Settings
Access via Settings → Appearance:

1. **Dark Mode** (default)
   - Reduced eye strain in low light
   - Better for OLED displays
   - Improved battery life on mobile

2. **Light Mode**
   - Higher contrast for some users
   - Better for bright environments
   - Familiar interface pattern

3. **Auto Mode**
   - Follows system preferences
   - Automatic day/night switching
   - Consistent across devices

### Text Settings
- **Font Size**: System-based scaling
- **Line Height**: Improved readability
- **Letter Spacing**: Enhanced character recognition

### Animation Settings
- **Reduced Motion**: Minimal animations
- **No Animation**: Static interface
- **Full Motion**: All animations enabled

## 📱 Mobile Accessibility

### Touch Targets
- Minimum 44px touch target size
- Adequate spacing between interactive elements
- Large tap areas for better accuracy

### Voice Control
- Compatible with Voice Control (iOS)
- Works with Voice Access (Android)
- Custom voice commands for trading actions

### Screen Magnification
- Works with system magnification tools
- Maintains functionality at high zoom levels
- Reflows content appropriately

## 🎧 Audio Features

### Screen Reader Optimizations
- Descriptive ARIA labels
- Live regions for dynamic content
- Proper heading hierarchy
- Landmark navigation

### Audio Feedback (Optional)
- Success/error sound indicators
- Notification chimes
- Trading event audio cues
- Customizable volume levels

## 💡 Getting Started Guide

### First-Time Setup
1. **Enable screen reader** if needed
2. **Set preferred theme** in Settings
3. **Adjust text size** via browser/system
4. **Configure audio feedback** preferences
5. **Test keyboard navigation**

### Essential Keyboard Shortcuts
```
Alt + S    Skip to main content
Tab        Navigate forward
Shift+Tab  Navigate backward
Enter      Activate element
Escape     Close/cancel
Alt + B    Toggle sidebar
Alt + ,    Open settings
```

### Screen Reader Landmarks
- `banner`: Site header and navigation
- `main`: Primary content area
- `complementary`: Sidebar information
- `contentinfo`: Footer information
- `navigation`: Navigation menus

## 🚨 Emergency Features

### Alert Management
- High-priority alerts announced immediately
- Visual and audio error notifications
- Non-blocking informational messages
- Persistent error display options

### Stop Trading Quickly
Multiple ways to stop trading in emergencies:
- **Keyboard**: `Alt + X` (with confirmation)
- **Voice**: "Stop trading" command
- **Touch**: Emergency stop button (large target)
- **Screen Reader**: Quick action menu

## 🔍 Testing Your Setup

### Screen Reader Test
1. Close your eyes or turn off monitor
2. Navigate to login page using only keyboard
3. Try to log in using screen reader feedback
4. Navigate to dashboard and explore features

### Keyboard-Only Test
1. Unplug/disable your mouse
2. Tab through the interface
3. Ensure all features are accessible
4. Check that focus is always visible

### Low Vision Test
1. Zoom to 200% in your browser
2. Enable high contrast mode
3. Test with simulated color blindness
4. Ensure all information is still accessible

## 🛠️ Troubleshooting

### Common Issues

#### Screen Reader Not Announcing Updates
- Check live region settings
- Refresh the page
- Verify screen reader is running
- Check browser compatibility

#### Keyboard Navigation Stuck
- Check if focus is trapped in modal
- Press Escape to close overlays
- Reload page if necessary
- Clear browser cache

#### High Contrast Not Working
- Check system settings first
- Manually toggle in app settings
- Clear browser cache
- Update browser version

### Browser Compatibility

| Browser | Screen Reader | Keyboard | High Contrast |
|---------|---------------|----------|---------------|
| Chrome | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ✅ |
| Safari | ✅ | ✅ | ✅ |
| Edge | ✅ | ✅ | ✅ |

## 📞 Support

### Getting Help
- **Accessibility Issues**: Report via GitHub Issues with "accessibility" label
- **Feature Requests**: Suggest improvements in Discord #accessibility
- **Immediate Help**: Contact support with "ACCESSIBILITY" in subject

### Community Resources
- Discord #accessibility channel
- Accessibility testing volunteers
- User feedback and suggestions
- Best practice discussions

## 🎯 Future Improvements

### Planned Features
- **Voice Trading Commands**: Execute trades with voice
- **Haptic Feedback**: Touch/vibration notifications
- **AI Descriptions**: Automated chart descriptions
- **Gesture Navigation**: Custom gesture support

### Feedback Welcome
We continuously improve accessibility based on user feedback:
- Feature requests
- Bug reports
- Usability feedback
- Testing volunteers

## 📚 Resources

### Learn More
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Screen Reader Testing Guide](https://webaim.org/articles/screenreader_testing/)

### Tools for Testing
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)

---

**Our commitment**: Every user should be able to trade successfully regardless of their abilities. If you encounter any barriers, please let us know so we can fix them.