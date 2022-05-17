import {Component, OnInit} from '@angular/core';
import {BaseElementsDto} from '../../utils/base-elements.dto';
import {PageContentBaseService} from './page-content-base.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  base$: Observable<BaseElementsDto[]> = of([])

  constructor(private pageContentBaseService: PageContentBaseService) { }

  ngOnInit(): void {
    this.base$ = this.pageContentBaseService.getBase$();
  }

}
