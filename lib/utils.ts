import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitial(name: string): string {
  const match = name.match(/[a-zA-Z]/)
  return match ? match[0].toUpperCase() : '?'
}
