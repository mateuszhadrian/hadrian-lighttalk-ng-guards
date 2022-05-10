import { Component, OnInit } from '@angular/core';
import {BaseElementsDto} from '../../utils/base-elements.dto';
import {PageContentBaseService} from './page-content-base.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  base: BaseElementsDto[] = []

  constructor(private pageContentBaseService: PageContentBaseService) { }

  ngOnInit(): void {
    this.base = this.pageContentBaseService.base
  }

}
