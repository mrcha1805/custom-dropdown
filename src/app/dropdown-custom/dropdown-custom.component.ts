import { Component, OnInit } from '@angular/core';
import { ThemePalette} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];

}

export interface Data {
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
  selector: 'app-dropdown-custom',
  templateUrl: './dropdown-custom.component.html',
  styleUrls: ['./dropdown-custom.component.scss']
})
export class DropdownCustomComponent implements OnInit {
  dropdownIconSrc ="../assets/ui/down.png";
  openOption = true;
  selectItemAll = false;
  term = '';

  dataMaster: Data[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.selectItemAll = false;
    this.http.get<Data[]>('../assets/data/affinity-data.json')
    .subscribe((data: Data[]) => {
      console.log(data);
      this.dataMaster = data;
    });
  }

  updateAllComplete(task: Data, header: Data) {
    console.log(task);
    console.log(header);
    // this.allComplete= task.subLevel != null && task.subLevel.every(t => t.selected);

    this.dataMaster.find(element=> {
      if(element.label === header.label) {
        element.selected = false;
        console.log('--->' + element.label);
        if((element.subLevel?.every(t=> t.selected)) == true){
          element.indeterminate = false;
          element.selected = true;
        }else {
          let unselect = true;
          element.subLevel?.forEach(sub=> {
            if(sub.selected){
              unselect = false;
            }
          })
          if(unselect) {
            element.selected =false;
            element.indeterminate= false;
          }else {
            element.selected =false;
            element.indeterminate= true;
          }
        }
      }
    })
    // this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  setAllItem(select: boolean, header:Data) {
    console.log('setAll');
    this.dataMaster.find(element=> {
      if(element.label === header.label) {
        element.subLevel?.forEach(t=>t.selected = select);
      }

    })

  }
  selectAll(event: boolean){
  
    this.selectItemAll = event;
    console.log(event);
    console.log(this.selectItemAll);
    this.dataMaster.forEach(data=> {
      data.selected = this.selectItemAll;
      if(this.selectItemAll && data.indeterminate){
        data.indeterminate = false;
      }
      if(!this.selectItemAll) {
        data.indeterminate = false;
      }
      data.subLevel?.forEach(sub=> {
        sub.selected = this.selectItemAll;
      })
    })
  }

  iconDropdown(open: boolean, header:Data){
    this.dataMaster.find(element=> {
      if(element.label === header.label) {
        element.optionSubLevel = open;
        if(open){
          element.iconSrc = "../assets/ui/down.png";
        }else {
          element.iconSrc = "../assets/ui/up.png";
        }

      }
    })
  }
  openDropdown(open: boolean){
    if(open){
      this.dropdownIconSrc = "../assets/ui/up.png";
    }else {
      this.dropdownIconSrc = "../assets/ui/down.png";
    }
    this.openOption = ! this.openOption;
  }
}
