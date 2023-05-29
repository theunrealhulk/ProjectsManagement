import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataRepositoryService } from 'src/app/services/data-repository.service';
@Component({
  selector: 'app-brows-projects',
  templateUrl: './brows-projects.component.html',
  styleUrls: ['./brows-projects.component.css']
})
export class BrowsProjectsComponent implements OnInit {
  allProjects: any[] = [];

  constructor(private authService: AuthService, private dataRepo: DataRepositoryService) {}

  ngOnInit(): void {
    this.allProjects = this.dataRepo.allProjects;
  }
}
