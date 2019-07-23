import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ngfModule } from "angular-file";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProofComponent } from './components/create-proof/create-proof.component';
import { VerifyProofComponent } from './components/verify-proof/verify-proof.component';
import { OpenDocumentComponent } from './components/open-document/open-document.component';
import { ProofPathComponent } from './components/proof-path/proof-path.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CreateProofComponent,
    VerifyProofComponent,
    OpenDocumentComponent,
    ProofPathComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ngfModule,
    HttpClientModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
