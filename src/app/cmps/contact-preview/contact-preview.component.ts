import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';


@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {

  constructor(
  ) { }

  @Input() contact!: Contact
  @Output() onRemove = new EventEmitter<Contact>()
  @Output() onSelect = new EventEmitter<string>()

  onRemoveContact() {
    this.onRemove.emit(this.contact)
  }

}
