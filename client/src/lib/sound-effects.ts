// Simple sound effect utility using Web Audio API
class SoundEffects {
  private audioContext: AudioContext | null = null;

  constructor() {
    // Initialize AudioContext on first user interaction
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  private async ensureAudioContext() {
    if (!this.audioContext) return null;
    
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
    
    return this.audioContext;
  }

  // Create a soft, futuristic button click sound
  async playButtonClick() {
    const context = await this.ensureAudioContext();
    if (!context) return;

    try {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      // Create a soft, pleasant click sound
      oscillator.frequency.setValueAtTime(800, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, context.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, context.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.1);

      oscillator.type = 'sine';
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.1);
    } catch (error) {
      // Sound failed silently
    }
  }

  // Create a subtle hover sound
  async playHover() {
    const context = await this.ensureAudioContext();
    if (!context) return;

    try {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.frequency.setValueAtTime(600, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(700, context.currentTime + 0.05);

      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, context.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.05);

      oscillator.type = 'sine';
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.05);
    } catch (error) {
      // Sound failed silently
    }
  }

  // Play a success sound for actions like copying
  async playSuccess() {
    const context = await this.ensureAudioContext();
    if (!context) return;

    try {
      const oscillator1 = context.createOscillator();
      const oscillator2 = context.createOscillator();
      const gainNode = context.createGain();

      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator1.frequency.setValueAtTime(523, context.currentTime); // C5
      oscillator2.frequency.setValueAtTime(659, context.currentTime); // E5

      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, context.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.2);

      oscillator1.type = 'sine';
      oscillator2.type = 'sine';
      
      oscillator1.start(context.currentTime);
      oscillator2.start(context.currentTime);
      oscillator1.stop(context.currentTime + 0.2);
      oscillator2.stop(context.currentTime + 0.2);
    } catch (error) {
      // Sound failed silently
    }
  }
}

export const soundEffects = new SoundEffects();