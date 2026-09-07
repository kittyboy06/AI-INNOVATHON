import { CountdownPhase, CountdownTimeRemaining } from '../types/event';
import { EVENT_CONFIG } from '../config/eventConfig';

export function calculateCountdown(): CountdownTimeRemaining {
  const now = Date.now();
  const regClosingTime = new Date(EVENT_CONFIG.regClosingIso).getTime();
  const eventStartTime = new Date(EVENT_CONFIG.eventStartIso).getTime();

  let phase: CountdownPhase = 'registration';
  let label = 'REGISTRATION CLOSES IN';
  let diff = regClosingTime - now;

  if (diff <= 0) {
    // Registration has closed, check if event has started
    const eventDiff = eventStartTime - now;
    if (eventDiff <= 0) {
      // Event is currently running or completed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        phase: 'live',
        label: 'MISSION IN PROGRESS',
      };
    } else {
      phase = 'kickoff';
      label = 'THE MISSION BEGINS IN';
      diff = eventDiff;
    }
  }

  // Calculate days, hours, minutes, seconds from diff
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: Math.max(0, days),
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    seconds: Math.max(0, seconds),
    phase,
    label,
  };
}
