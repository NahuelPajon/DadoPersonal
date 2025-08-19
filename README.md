
# Dado Personal

**Dado Personal** is a simple dice-rolling app built with [Expo](https://expo.dev) and React Native. It allows users to roll a virtual six-sided die with a smooth animation and custom dice images. This project is ideal for learning Expo, React Native, and file-based routing.

## Features

- Roll a virtual six-sided die with a tap
- Animated dice roll effect
- Custom dice images
- Simple and clean UI
- Built with Expo and React Native
- Supports Android, iOS, and web

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

   You can open the app in:
   - [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go)

## Usage

Tap the dice image to roll the die. The dice will animate and display a random number from 1 to 6 using custom images.

## Project Structure

- `app/` - Main app source code
  - `index.jsx` - Main screen with dice logic and animation
  - `useDado.jsx` - Custom hook for dice state and random generation
  - `_layout.jsx` - App layout configuration
- `assets/images/` - Dice images
- `app-example/` - Example starter code and components
