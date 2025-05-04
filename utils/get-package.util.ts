import { readFileSync } from 'fs';
import { join } from 'path';

export function getPackage(): {
    name: string;
    version: string;
}{
    const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
    const { name, version } = packageJson;
   return { name, version } 
}