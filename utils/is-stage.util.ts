export function isStage(): boolean {
  return process.env.NODE_ENV === 'stage';
}