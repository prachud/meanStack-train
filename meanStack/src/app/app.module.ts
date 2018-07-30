import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,
  MatExpansionModule } 
from '@angular/material';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AppHeaderComponent } from './header/app-header.component';
import { PostList } from './posts/post-list/post-list.component'


@NgModule({
 declarations: [ AppComponent,PostCreateComponent,AppHeaderComponent,PostList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
