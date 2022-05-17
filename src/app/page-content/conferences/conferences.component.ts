import {Component, OnInit} from '@angular/core';
import {ConferenceDto} from '../../../utils/conference.dto';
import {PageContentBaseService} from '../page-content-base.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent implements OnInit {
  conferences$: Observable<ConferenceDto[]> = of([])

  constructor(private pageContentBaseService: PageContentBaseService) { }

  ngOnInit(): void {
    this.conferences$ = this.pageContentBaseService.getConferences$()
  }
}
