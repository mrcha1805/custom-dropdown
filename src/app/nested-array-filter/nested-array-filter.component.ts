import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

interface Data {
  member: string[],
  selected: boolean,
  label: string,
  value: string,
  indeterminate?: boolean,
  optionSubLevel?:boolean,
  iconSrc?: string,
  subCount?: number,
  subLevel?: Data[];
}
@Component({
  selector: 'app-nested-array-filter',
  templateUrl: './nested-array-filter.component.html',
  styleUrls: ['./nested-array-filter.component.scss']
})
export class NestedArrayFilterComponent implements OnInit {

  searchTerm = '';
  countries: Country[] = [];
  term = '';
  allCountries: Country[] = [];

  searchData = '';
  members: Data[] = [];
  memberList: Data[] = [];

  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    // this.http.get<Country[]>('./assets/data/countries.json')
    // .subscribe((data: Country[]) => {
    //   this.countries = data;
    // });
    this.http.get<Data[]>('../assets/data/affinity-data.json')
    .subscribe((data: Data[]) => {
      console.log(data);
      this.members = data;
    });
  }



}
