import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-boxs',
  templateUrl: './contact-boxs.component.html',
  styleUrls: ['./contact-boxs.component.css']
})
export class ContactBoxsComponent {
  @Input() service:any;
$: string|undefined;
}