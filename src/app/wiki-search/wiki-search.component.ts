import { Component, OnInit } from '@angular/core';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {
  searchTerm = '';
  results: any[] = [];
  constructor(private wikiService: WikiService) { }

  ngOnInit(): void {
  }
  search(): void {
    this.wikiService.searchArticles(this.searchTerm).subscribe((data) => {
      this.results = data.query.search;
    });
  }

}
