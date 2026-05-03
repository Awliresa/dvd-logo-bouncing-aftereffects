# DVD Logo Bouncing Animation for After Effects

A classic DVD screensaver animation recreated in After Effects. The logo bounces around the screen and changes color when it hits the corners.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![After Effects](https://img.shields.io/badge/After%20Effects-CC%202015%2B-9999FF.svg)

## Preview

![DVD Logo Animation Preview](screenshots/preview.gif)

## Features

- **Realistic bouncing physics** - Logo bounces off composition edges
- **Corner detection** - Special color change when hitting exact corners
- **Random color generation** - Smooth HSL-based color transitions
- **Fully customizable** - Easy to adjust speed, colors, and behavior
- **Expression-based** - No keyframes needed, pure code animation

## Installation
```
### Method 1: Clone Repository

git clone https://github.com/yourusername/dvd-logo-bouncing-aftereffects.git
cd dvd-logo-bouncing-aftereffects

### Method 2: Download ZIP

1. Click the green "Code" button above
2. Select "Download ZIP"
3. Extract the files to your desired location
```
## Usage
```
### Step 1: Prepare Your Layer

1. Create a new composition in After Effects
2. Add your logo or text layer
3. **IMPORTANT:** Center the anchor point
   - Windows: `Ctrl + Alt + Home`
   - Mac: `Cmd + Option + Home`

### Step 2: Add Position Expression

1. Select your layer
2. Press `P` to reveal Position property
3. Alt+Click (Windows) or Option+Click (Mac) on the stopwatch icon next to Position
4. Copy the entire content from `expressions/position.js`
5. Paste it into the expression editor

### Step 3: Add Color Expression

1. With your layer selected, add a Fill effect:
2. In the Effect Controls panel, find the Fill effect
3. Alt+Click (Windows) or Option+Click (Mac) on the stopwatch icon next to **Color**
4. Copy the entire content from `expressions/color.js`
5. Paste it into the expression editor

### Step 4: Preview

Press `0` on the numpad or spacebar to preview your animation. The logo should now bounce around and change colors!
```
## Customization

### Adjusting Speed
```
Open `expressions/position.js` and find this line:

javascript
var speed = 200; // Speed in pixels per second

Change the value:
- Lower values = slower movement
- Higher values = faster movement
- Recommended range: 100-500
```
### Changing Colors
```
Open `expressions/color.js` and modify these parameters:

javascript
var saturation = 0.8; // Range: 0-1 (0 = grayscale, 1 = vivid)
var lightness = 0.6;  // Range: 0-1 (0 = black, 1 = white)

**Examples:**
- Pastel colors: `saturation = 0.5`, `lightness = 0.7`
- Vibrant colors: `saturation = 1.0`, `lightness = 0.5`
- Dark colors: `saturation = 0.8`, `lightness = 0.4`
```
### Adjusting Bounce Behavior
```
In `expressions/position.js`, you can modify the margin:

javascript
var margin = 0; // Distance from edges in pixels

Increase this value if your logo is getting cut off at the edges.

##Speed Adjustment

To change the animation speed, you need to modify the `speed` variable in **both expressions**:
```
### In Position Expression:
```javascript
var speed = 100; // Change this value

### In Color Expression:
javascript
var speed = 100; // Change this to the SAME value

**Important:** Both values must be identical for the color changes to sync properly with corner hits.

**Examples:**
- `speed = 50` → Half speed (slower)
- `speed = 100` → Normal speed (default)
- `speed = 200` → Double speed (faster)
```

## Project Structure
```

dvd-logo-bouncing-aftereffects/
│
├── expressions/
│   ├── position.js       # Bouncing physics expression
│   └── color.js          # Color change expression
│
├── screenshots/
│   └── preview.gif       # Animation preview
│
├── README.md             # This file
├── LICENSE               # MIT License
└── .gitignore           # Git ignore rules
```


## Troubleshooting

### Logo doesn't bounce correctly
- Make sure the anchor point is centered (`Ctrl/Cmd + Alt/Option + Home`)
- Check that your composition has proper dimensions
- Verify the layer width and height are correct

### Colors don't change
- Ensure the Fill effect is applied to the layer
- The expression must be on the **Color** property inside the Fill effect, not on the layer itself
- Check that the expression has no syntax errors (red text in expression editor)

### Logo moves too fast/slow
- Adjust the `speed` variable in `position.js`
- Make sure both expressions use the same speed value

### Expression error messages
- Copy the entire expression code, don't modify it unless you know JavaScript
- Make sure you're using After Effects CC 2015 or later
- Check that all curly braces `{}` and parentheses `()` are properly closed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
```
- Inspired by the classic DVD screensaver
- Built with After Effects expressions
- No plugins required
```
## Contact

[Awliresa](https://linktr.ee/awliresa)
