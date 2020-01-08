import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
countries;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCountries().subscribe(d => { 
      this.countries = d;
  })

}
}

