import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
interface Food {
  value: string;
  viewValue: string;
}

interface Datas {
  member: string[]
  label: string
  value: string
  selected: boolean
}


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit, OnChanges {

  constructor( ) { }
  selected: string | undefined;
  selectFilters: any;
  virtualData: any;
  data!: Datas[];
  currencies = [
    { value: 'us', text: 'U.S. Dollar $' },
    { value: 'euro', text: 'Euro €' },
    { value: 'yen', text: 'Japanese Yen ¥' },
    { value: 'pound', text: 'Pounds £' },
    { value: 'inr', text: 'Indian Rupee ₹' }
  ];
  collection = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ];

  dataMaster = [
    {
      "member": [
        "affinityLevelMaster"
      ],
      "selected": true,
      "label": "Automotive567",
      "value": "AllFilters.automotive",
      "subCount": 6,
      "subLevel": [
        {
          "member": [
            "affinityLevelSub"
          ],
		      "selected": true,
          "label": "Auto repair890",
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


  @ViewChild('mySelect')
  mySelect!: MatSelect;
  openOption: boolean = true;
  iconSrc ="";
  i = 0;
  allComplete: boolean = false;
  checkedAll: boolean = false;
  OpenSel() {
    this.mySelect.open()
  }
  ngOnInit(): void {
    //this.selectFilters = ['AllFilters.automotiveBudgetCar'];
    this.selectFilters = [];
    this.allComplete = true;
    this.openOption = false;
    this.iconDropdown(false)
    this.selectAll(this.allComplete);
  }

  onClickOption(){
    this.i++;
  }
  
  iconDropdown(open: boolean){
    if(open){
      this.iconSrc = "../assets/ui/down.png";
    }else {
      this.iconSrc = "../assets/ui/up.png";
    }
    
    this.openOption = ! this.openOption;
  }
  updateCheckbox(){
    console.log('update checkbox');
  }

  selectionChangeDropdown(value: any){
    console.log('selectionChangeDropdown')
    console.log('event: '+ JSON.stringify(value));
    console.log('--> '+ this.selectFilters)
  }
  selectionChangeEvent(event: any) {
    console.log('selection Chnage Event');
  }

  checkboxSelect() {
    console.log('checkbox select: ');
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges--> '+changes);
  }
  selectAll(all: boolean){

    console.log('select function ' + all)
    this.allComplete = all;
    let tempData: any;
    if(all) {
      this.dataMaster.forEach(sub => {
        //this.selectFilters.push(sub.value);
        sub.selected = true;

        //virtual data 

        if(sub.subLevel.length > 0){
          sub.subLevel.forEach(item => {
            //this.selectFilters.push(item.value);
          });
        }
   
      });
      console.log('dataMaster : '+ JSON.stringify(this.dataMaster))
      console.log('filter: ' + JSON.stringify(this.selectFilters));
    }else {
      this.selectFilters = [];
      this.dataMaster.forEach(sub => {
        sub.selected = false;
      })
      console.log('dataMaster : '+ JSON.stringify(this.dataMaster));
      console.log('filter: ' + JSON.stringify(this.selectFilters));
    }
  
   
    // this.allComplete = !completed;

    // if(this.dataMaster == null) {
    //   return;
    // }
    // this.dataMaster.forEach(sub=> {
    //   sub.subLevel.forEach(i=>{
    //     i.selected = completed;
    //   })
    // })
  }

  selectedFoods = ['pizza-1', 'steak-0'];
  
  allfoods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'pasta-3', viewValue: 'Pasta'}
  ];

  selectedValue: string | undefined;


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

 



}
