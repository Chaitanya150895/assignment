import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  showMsg: any;
  id: any;

  formData = [
    { for: "email", control: "input", type: "text", label: "Email: ", placeholder: "Enter Email", id: "email", control_name: "email" },
    { for: "first_name", control: "input", type: "text", label: "First Name: ", placeholder: "Enter First Name", id: "first_name", control_name: "first_name" },
    { for: "last_name", control: "input", type: "text", label: "Last Name: ", placeholder: "Enter Last Name", id: "last_name", control_name: "last_name" },
    { for: "avatar", control: "input", type: "text", label: "Avatar: ", placeholder: "Enter Avatar URL", id: "avatar", control_name: "avatar" },
    {for: "action", control: "button", type: "submit", label: " ", placeholder: "button", id: "action", control_name: "action" }
  ]

  customForm = this.fb.group({
    id: [''],
    email: [''],
    first_name: [''],
    last_name: [''],
    avatar: ['']
  })

  constructor(private fb: FormBuilder, private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['userId']
      this.httpService.getHttp("users/" + this.id ).subscribe(data => {
        console.log(data);
        let user = data['data'];
        this.customForm.patchValue(user)
      });
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    console.log("submit after edit:::" + this.id)
    this.httpService.putHttp("users/" + this.id, this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
        this.showMsg = "Changes Done";
      });
  }

}
