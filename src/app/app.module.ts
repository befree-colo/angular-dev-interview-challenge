import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: InstructionsComponent,
        pathMatch: 'full',
      },
      {
        path: 'notfound',
        loadChildren: () =>
          import('./not-found/not-found.module').then((m) => m.NotFoundModule),
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/notfound',
        pathMatch: 'full',
      },
    ]),
  ],
  declarations: [AppComponent, TopBarComponent, InstructionsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
