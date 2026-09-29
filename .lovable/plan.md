# Accessible Talks & Events gallery

## Build
- Replace the static Talks & Events photo frames with a reusable gallery shared by the home and experience pages.
- Open each photo in an accessible lightbox with a caption, close control, previous/next controls, and position status.
- Support keyboard navigation with Left/Right arrows and Escape, while preserving focus handling through the existing dialog component.
- Keep the current truthful placeholders until Stephen supplies real photos; structure the data so image paths and descriptions can be added later.

## Responsive and accessibility
- Keep gallery controls comfortable on mobile and desktop.
- Give every trigger and control a clear accessible name, visible focus state, and adequate target size.
- Prevent background interaction while the lightbox is open and respect reduced-motion preferences.

## Verification
- Check mouse/touch opening, keyboard navigation, closing, focus return, and mobile layout in the live preview.
- Confirm the preview remains free of build and runtime errors.
