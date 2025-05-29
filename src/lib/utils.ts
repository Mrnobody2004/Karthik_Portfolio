// Simple utility functions to replace @/lib/utils imports
export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}