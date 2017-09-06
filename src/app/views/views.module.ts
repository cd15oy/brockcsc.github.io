import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from 'app/shared/shared.module';
import { EventsModule } from './events/events.module';
import { ContactComponent } from './contact/contact.component';
import { AuthModule } from 'app/views/auth/auth.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        EventsModule,
        AuthModule
    ],
    exports: [HomeComponent],
    declarations: [HomeComponent, TeamComponent, ContactComponent]
})
export class ViewsModule { }
