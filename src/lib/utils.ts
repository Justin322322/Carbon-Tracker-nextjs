import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCO2(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}t`
  }
  return `${value.toFixed(1)}kg`
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`
}