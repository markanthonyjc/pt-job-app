import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';

export const routes = [
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'job', component: JobComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }