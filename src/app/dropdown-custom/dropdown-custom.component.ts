import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
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
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };

  dataMaster:Data[] = [
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Automotive",
      "value": "AllFilters.automotive",
      "subCount": 6,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Auto repair",
          "value": "AllFilters.automotiveAutoRepair"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Budget car",
          "value": "AllFilters.automotiveBudgetCar"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Luxury cars",
          "value": "AllFilters.automotiveLuxuryCars"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Motorcycles",
          "value": "AllFilters.automotiveMotorcycles"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Off-road vehicles",
          "value": "AllFilters.automotiveOffRoadVehicles"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Automotive - Others",
          "value": "AllFilters.automotiveAutomotiveOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
           "iconSrc": "../assets/ui/up.png",
      "label": "Books and Literature",
      "value": "AllFilters.booksAndLiterature",
      "subCount": 4,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Children's tips",
          "value": "AllFilters.booksAndLiteratureChildrenSTips"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Healthy books",
          "value": "AllFilters.booksAndLiteratureHealthyBooks"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Magazine",
          "value": "AllFilters.booksAndLiteratureMagazine"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Books and Literature - Others",
          "value": "AllFilters.booksAndLiteratureBooksAndLiteratureOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Business and Finance",
      "value": "AllFilters.businessAndFinance",
      "subCount": 3,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Construction industry",
          "value": "AllFilters.businessAndFinanceConstructionIndustry"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Home appliance industry",
          "value": "AllFilters.businessAndFinanceHomeApplianceIndustry"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Business and Finance - Others",
          "value": "AllFilters.businessAndFinanceBusinessAndFinanceOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Entertainment",
      "value": "AllFilters.entertainment",
      "subCount": 4 ,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Movies",
          "value": "AllFilters.entertainmentMovies"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Music and Audio",
          "value": "AllFilters.entertainmentMusicAndAudio"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "News and Politics",
          "value": "AllFilters.entertainmentNewsAndPolitics"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Video gaming",
          "value": "AllFilters.entertainmentVideoGaming"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Events and Attractions",
      "value": "AllFilters.eventsAndAttractions",
      "subCount": 2,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Amusement and Theme parks",
          "value": "AllFilters.eventsAndAttractionsAmusementAndThemeParks"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Events and Attractions - Others",
          "value": "AllFilters.eventsAndAttractionsEventsAndAttractionsOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Food and Drink",
      "value": "AllFilters.foodAndDrink",
      "subCount": 4,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Cooking",
          "value": "AllFilters.foodAndDrinkCooking"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Dining out",
          "value": "AllFilters.foodAndDrinkDiningOut"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Food delivery",
          "value": "AllFilters.foodAndDrinkFoodDelivery"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Food & Drink - Others",
          "value": "AllFilters.foodAndDrinkFoodDrinkOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Healthy living",
      "value": "AllFilters.healthyLiving",
      "subCount": 3,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Fitness and Exercise",
          "value": "AllFilters.healthyLivingFitnessAndExercise"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Wellness",
          "value": "AllFilters.healthyLivingWellness"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Healthy living - Others",
          "value": "AllFilters.healthyLivingHealthyLivingOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Hobbies & Interests",
      "value": "AllFilters.hobbiesInterests",
      "subCount": 4,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Arts and Crafts",
          "value": "AllFilters.hobbiesInterestsArtsAndCrafts"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Games and Puzzles",
          "value": "AllFilters.hobbiesInterestsGamesAndPuzzles"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Pet",
          "value": "AllFilters.hobbiesInterestsPet"

        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Hobbies & interests - others",
          "value": "AllFilters.hobbiesInterestsHobbiesInterestsOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Real estate",
      "value": "AllFilters.realEstate",
      "subCount": 2,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Real estate buying and selling",
          "value": "AllFilters.realEstateRealEstateBuyingAndSelling"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Real estate - Others",
          "value": "AllFilters.realEstateRealEstateOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Shopping",
      "value": "AllFilters.shopping",
      "subCount": 6,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Electronic",
          "value": "AllFilters.shoppingElectronic"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Grocery shopping",
          "value": "AllFilters.shoppingGroceryShopping"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Home deceration",
          "value": "AllFilters.shoppingHomeDeceration"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Home decoration",
          "value": "AllFilters.shoppingHomeDecoration"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Shopping - kids",
          "value": "AllFilters.shoppingShoppingKids"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Shopping - others",
          "value": "AllFilters.shoppingShoppingOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Sports",
      "value": "AllFilters.sports",
      "subCount": 3,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Football",
          "value": "AllFilters.sportsFootball"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Sports - Others",
          "value": "AllFilters.sportsSportsOthers"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Track and Field",
          "value": "AllFilters.sportsTrackAndField"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Style & Fashion",
      "value": "AllFilters.styleFashion",
      "subCount": 1,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Style & Fashion - Others",
          "value": "AllFilters.styleFashionStyleFashionOthers"
        }
      ]
    },
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": false,
      "indeterminate": false,
      "optionSubLevel": false,
      "iconSrc": "../assets/ui/up.png",
      "label": "Travel",
      "value": "AllFilters.travel",
      "subCount": 22,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Air",
          "value": "AllFilters.travelAir"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Bed & Breakfasts",
          "value": "AllFilters.travelBedBreakfasts"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Budget travel",
          "value": "AllFilters.travelBudgetTravel"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Business travel",
          "value": "AllFilters.travelBusinessTravel"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Car rental",
          "value": "AllFilters.travelCarRental"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Family travel",
          "value": "AllFilters.travelFamilyTravel"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Hotels and Motels",
          "value": "AllFilters.travelHotelsAndMotels"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Rail travel",
          "value": "AllFilters.travelRailTravel"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Remittance",
          "value": "AllFilters.travelRemittance"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Road trips",
          "value": "AllFilters.travelRoadTrips"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel Accessories",
          "value": "AllFilters.travelTravelAccessories"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel China",
          "value": "AllFilters.travelTravelChina"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel Hong kong",
          "value": "AllFilters.travelTravelHongKong"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel Japan",
          "value": "AllFilters.travelTravelJapan"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel Korea",
          "value": "AllFilters.travelTravelKorea"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel Malaysia",
          "value": "AllFilters.travelTravelMalaysia"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel Singapore",
          "value": "AllFilters.travelTravelSingapore"
        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel Switzerland",
		      "value": "AllFilters.travelTravelSwitzerland"

        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel UK",
		      "value": "AllFilters.travelTravelUk"

        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel USA",
		      "value": "AllFilters.travelTravelUsa"

        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel - Others",
		      "value": "AllFilters.travelTravelOthers"

        },
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": false,
          "label": "Travel Planning",
		      "value": "AllFilters.travelTravelPlanning"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectItemAll = false;
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
