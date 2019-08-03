import { Component, OnInit } from '@angular/core';
import { NgForm, ValidationErrors, Validator } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-createcategorylist',
  templateUrl: './createcategorylist.component.html',
  styleUrls: ['./createcategorylist.component.css']
})
export class CreatecategorylistComponent implements OnInit {
  userIsAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(
    public postsService: AdminService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  onCategoryRegister(form: NgForm) {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.postsService.onCategoryRegister( form.value.id, form.value.category );
    form.resetForm();
}
}
