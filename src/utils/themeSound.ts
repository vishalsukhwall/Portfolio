/**
 * Theme Sound FX Synthesizer — Zero-Dependency Web Audio API
 * 
 * Provides crisp bidirectional sound FX for theme toggling:
 * - Switching Dark ➔ Light: Cybernetic power-surge chime with sparkle harmonics.
 * - Switching Light ➔ Dark: Deep mechanical sub-bass power-down thump with audible punch.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return null;

    if (!audioCtx || audioCtx.state === 'closed') {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch {
    return null;
  }
}

/**
 * Switching Light ➔ Dark:
 * Deep mechanical sub-bass power-down thump.
 * Features a crisp relay switch click (audible on small phone/laptop speakers)
 * combined with a punchy pitch drop (220Hz ➔ 55Hz).
 */
export function playDarkSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 0.42;

    // Master Gain Bus
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.001, now);
    master.gain.linearRampToValueAtTime(0.32, now + 0.015);
    master.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    master.connect(ctx.destination);

    // 1. Mechanical Relay Click / Transient (audible punch on all speakers)
    const clickOsc = ctx.createOscillator();
    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(320, now);
    clickOsc.frequency.exponentialRampToValueAtTime(110, now + 0.04);

    const clickGain = ctx.createGain();
    clickGain.gain.setValueAtTime(0.4, now);
    clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    clickOsc.connect(clickGain).connect(master);
    clickOsc.start(now);
    clickOsc.stop(now + 0.05);

    // 2. Power-Down Sub Sweep: 220Hz ➔ 55Hz
    const bassOsc = ctx.createOscillator();
    bassOsc.type = 'sine';
    bassOsc.frequency.setValueAtTime(220, now);
    bassOsc.frequency.exponentialRampToValueAtTime(55, now + duration * 0.85);

    const bassGain = ctx.createGain();
    bassGain.gain.setValueAtTime(0.85, now);
    bassGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    bassOsc.connect(bassGain).connect(master);
    bassOsc.start(now);
    bassOsc.stop(now + duration);

    // 3. Lowpass filtered body rumble for warmth
    const subOsc = ctx.createOscillator();
    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(120, now);
    subOsc.frequency.exponentialRampToValueAtTime(45, now + duration * 0.75);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, now);
    filter.frequency.exponentialRampToValueAtTime(80, now + duration);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.35, now);
    subGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    subOsc.connect(filter).connect(subGain).connect(master);
    subOsc.start(now);
    subOsc.stop(now + duration);

    // Cleanup
    setTimeout(() => {
      try {
        master.disconnect();
      } catch {
        // ignore
      }
    }, (duration + 0.1) * 1000);
  } catch {
    // Sound is cosmetic — fail silently
  }
}

/**
 * Switching Dark ➔ Light:
 * Cybernetic power-surge chime with sparkle harmonics.
 * Ascending frequency sweep (440Hz ➔ 1320Hz) with shimmer overtone pings.
 */
export function playLightSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 0.45;

    // Master Gain Bus
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.001, now);
    master.gain.linearRampToValueAtTime(0.24, now + 0.02);
    master.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    master.connect(ctx.destination);

    // 1. Primary Rising Power Chime: 440Hz ➔ 1320Hz
    const chimeOsc = ctx.createOscillator();
    chimeOsc.type = 'sine';
    chimeOsc.frequency.setValueAtTime(440, now);
    chimeOsc.frequency.exponentialRampToValueAtTime(1320, now + duration * 0.65);

    const chimeGain = ctx.createGain();
    chimeGain.gain.setValueAtTime(1, now);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    chimeOsc.connect(chimeGain).connect(master);
    chimeOsc.start(now);
    chimeOsc.stop(now + duration);

    // 2. Harmonic Shimmer 1: 880Hz ➔ 1760Hz
    const sparkleOsc1 = ctx.createOscillator();
    sparkleOsc1.type = 'sine';
    sparkleOsc1.frequency.setValueAtTime(880, now + 0.025);
    sparkleOsc1.frequency.exponentialRampToValueAtTime(1760, now + duration * 0.55);

    const sparkleGain1 = ctx.createGain();
    sparkleGain1.gain.setValueAtTime(0.35, now + 0.025);
    sparkleGain1.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.8);

    sparkleOsc1.connect(sparkleGain1).connect(master);
    sparkleOsc1.start(now + 0.025);
    sparkleOsc1.stop(now + duration);

    // 3. High Shimmer Ping: 1760Hz ➔ 2200Hz
    const sparkleOsc2 = ctx.createOscillator();
    sparkleOsc2.type = 'sine';
    sparkleOsc2.frequency.setValueAtTime(1760, now + 0.05);
    sparkleOsc2.frequency.exponentialRampToValueAtTime(2200, now + duration * 0.45);

    const sparkleGain2 = ctx.createGain();
    sparkleGain2.gain.setValueAtTime(0.18, now + 0.05);
    sparkleGain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.6);

    sparkleOsc2.connect(sparkleGain2).connect(master);
    sparkleOsc2.start(now + 0.05);
    sparkleOsc2.stop(now + duration);

    // Cleanup
    setTimeout(() => {
      try {
        master.disconnect();
      } catch {
        // ignore
      }
    }, (duration + 0.1) * 1000);
  } catch {
    // Sound is cosmetic — fail silently
  }
}

/**
 * Universal toggle dispatcher.
 * @param nextThemeIsDark - Boolean (true for dark, false for light) OR string ('dark' | 'light')
 */
export function playThemeToggleSound(nextThemeIsDark: boolean | 'dark' | 'light'): void {
  const isDark = typeof nextThemeIsDark === 'boolean' ? nextThemeIsDark : nextThemeIsDark === 'dark';
  if (isDark) {
    playDarkSound();
  } else {
    playLightSound();
  }
}

/**
 * Backward compatibility alias
 */
export function playThemeSound(targetTheme: 'dark' | 'light'): void {
  playThemeToggleSound(targetTheme === 'dark');
}

/**
 * soundFX object bundle
 */
export const soundFX = {
  playThemeToggleSound,
  playThemeSound,
  playDarkSound,
  playLightSound,
};

export default soundFX;
