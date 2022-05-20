import {Component, OnInit} from '@angular/core';
import {CourseDto} from '../../../utils/course.dto';
// import {PageContentBaseService} from '../page-content-base.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: CourseDto[] = []

  constructor(
    // private pageContentBaseService: PageContentBaseService,
    private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    // this.courses = this.pageContentBaseService.courses;
    this.courses = this.route.snapshot.data['courses']
  }
}
