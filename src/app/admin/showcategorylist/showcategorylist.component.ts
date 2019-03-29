import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { AuthService } from '../../auth/auth.service';
import { CategoryName } from '../../shared/CategoryName.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-showcategorylist',
  templateUrl: './showcategorylist.component.html',
  styleUrls: ['./showcategorylist.component.css']
})
export class ShowcategorylistComponent implements  OnInit {
  category: CategoryName [] = [];
  isLoading = false;
  userIsAuthenticated = false;
  userId: string;
  private postsSub: Subscription;
  private authStatusSub: Subscription;
  displayedColumns: string[] = ['position', 'name'];
  public dataSource = new MatTableDataSource<CategoryName>();
  constructor(
    public postsService: AdminService,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.isLoading = true;
    this.userId = this.authService.getUserId();
    this.postsService.getCategory()
    .subscribe( data => {
      this.category = data;
      console.log(this.category);
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
  }
 /* ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  } */

}
