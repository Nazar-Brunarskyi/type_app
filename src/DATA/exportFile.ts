import { Keyboard } from '../types/Keyboard';
import keyboardJson from './keyboard.json';

export const keyboard: Keyboard = {...keyboardJson}
export const ukrainianLetters = Object.values(keyboard);