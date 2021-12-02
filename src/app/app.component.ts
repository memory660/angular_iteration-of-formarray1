import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { contact } from './Models/contact.model';
import { ContactListService } from './Services/contact-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employeeForm!: FormGroup;
  contacts!: contact[];

  constructor(
    private contactListService: ContactListService,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      employees: new FormArray([]),
    });
    //
    this.contactListService.getAllContacts().subscribe((contacts) => {
      this.contacts = contacts;
      //
      for (let i = 0; i < this.contacts.length; i++) {
        this.employeesFormArray.push(
          this.fb.group({
            dept:
              this.contacts[i] && this.contacts[i].dept
                ? this.contacts[i].dept
                : '',
            completed:
              this.contacts[i] && this.contacts[i].completed
                ? this.contacts[i].completed
                : '',
          })
        );
      }
    });
  }

  get employeesFormArray(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }
}
