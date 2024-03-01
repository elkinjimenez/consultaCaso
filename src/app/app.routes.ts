import { Routes } from '@angular/router';
import { GenerateComponent } from './modules/generate/generate.component';
import { GeneratedComponent } from './modules/generated/generated.component';

export const routes: Routes = [
  { path: '', component: GenerateComponent },
  { path: '**', redirectTo: '' },
];
