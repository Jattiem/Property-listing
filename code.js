
let propertyFilter = document.getElementById("FilterByProperty");
let locationFilter = document.getElementById("FilterByLocation");
let propertySizeFilter = document.getElementById("FilterBySize");
let budgetFilter = document.getElementById("FilterByBudget");
let prop = localStorageProp();

function localStorageProp(){
    return JSON.parse(localStorage.getItem('property'));
}

localStorage.setItem('property',JSON.stringify(properties = 
    [
    {
        id:1,
        type:"Apartment",
        category:'Properties',
        title:'New Apartment Nice View',
        location:'Chicago',
        Area:'8100 S Ashland Ave, Chicago, IL 60620, USA',
        Bedrooms:1,
        Bathrooms:1,
        Garage:1,
        yearBuilt:2016,
        SqFt:2,
        price:100000,
        pricePer:11000,
        url:'./images/Apartment.jpg'
    },
    {
        id:2,
        type:'Single Family Home',
        category:'Properties',
        title:'Guaranteed Modern Home',
        location:'Miami',
        Area:'905 Brickell Bay Dr, Miami, FL 33131, USA',
        Bedrooms:2,
        Bathrooms:2,
        Garage:1,
        yearBuilt:2016,
        SqFt:3410,
        price:400000,
        pricePer:3500,
        url:'./images/Single-Family-Home.jpg'
    },
    {
        id:3,
        type:'Villa',
        category:'Properties',
        title:'Villa With Pool',
        location:'Los Angeles',
        Area:'6111 Brynhurst Ave, Los Angeles, CA 90043',
        Bedrooms:3,
        Bathrooms:1,
        Garage:1,
        yearBuilt:2016,
        SqFt:3410,
        price:100000,
        pricePer:5400,
        url:'./images/Villa.jpg'
    },
    {
        id:4,
        type:'Condo',
        category:'Properties',
        title:'Condo on top',
        location:'New York',
        Area:'7111 qinhut Ave, Condo, CA 92343',
        Bedrooms:3,
        Bathrooms:2,
        Garage:2,
        yearBuilt:2015,
        SqFt:1200,
        price:200000,
        pricePer:7860,
        url:'./images/Condo.jpg'
    },
    {
        id:5,
        type:'Apartment',
        category:'Properties',
        title:'Apartment with a nice view',
        location:'Chicago',
        Area:'202 Dwensel M3 Dr, Chicago, DL 134541, USA',
        Bedrooms:1,
        Bathrooms:2,
        Garage:2,
        yearBuilt:2015,
        SqFt:1200,
        price:300000,
        pricePer:7860,
        url:'./images/Apartment2.jpg'
    },
    {
        id:6,
        type:'Single Family Home',
        category:'Properties',
        title:'Awesome Modern Home',
        location:'Miami',
        Area:'905 Brickell Bay Dr, Miami, FL 33131, USA',
        Bedrooms:2,
        Bathrooms:2,
        Garage:1,
        yearBuilt:2016,
        SqFt:3410,
        price:200000,
        pricePer:3500,
        url:'./images/Single-Family-Home2.jpg'
    },
    {
        id:7,
        type:'Villa',
        category:'Properties',
        title:'Villa With Pool',
        location:'Los Angeles',
        Area:'634 Brynhurst Ave, Los Angeles, MA 234043',
        Bedrooms:3,
        Bathrooms:1,
        Garage:1,
        yearBuilt:2016,
        SqFt:3410,
        price:400000,
        pricePer:5400,
        url:'./images/Villa2.jpg'
    },
    {
        id:8,
        type:'Condo',
        category:'Properties',
        title:'Condo on top',
        location:'New York',
        Area:'72331 qinhut Ave, Condo, DA 934543',
        Bedrooms:4,
        Bathrooms:2,
        Garage:2,
        yearBuilt:2015,
        SqFt:1200,
        price:300000,
        pricePer:7860,
        url:'./images/Condo2.jpg'
    },
    {
        id:9,
        type:'Apartment',
        category:'Properties',
        title:'Apartment with a nice view',
        location:'Chicago',
        Area:'3034 Wensel Q2 Dr, Chicago, CL 200541, USA',
        Bedrooms:1,
        Bathrooms:2,
        Garage:2,
        yearBuilt:2015,
        SqFt:1200,
        price:300000,
        pricePer:7860,
        url:'./images/Apartment3.jpg'
    },
    {
        id:10,
        type:'Villa',
        category:'Properties',
        title:'Villa With Pool',
        location:'Los Angeles',
        Area:'634 344nhurst Ave, Los Angeles, MA 3454043',
        Bedrooms:3,
        Bathrooms:1,
        Garage:1,
        yearBuilt:2016,
        SqFt:3410,
        price:200000,
        pricePer:5400,
        url:'./images/Villa3.jpg'
    },
]));

function getProperties(prop){
    document.getElementById('propertiesForCards').innerHTML = '';
    prop.forEach((property) => {
        document.getElementById('propertiesForCards').innerHTML +=
        `<div class="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center">
            <div class="col p-2">
               <div class="card p-2">
                   <img src="${property.url}" class="card-img-top" alt="...">
                   <div class="card-body">
                        <h5 class="card-title">${property.title}</h5>
                        <h6 class="card-title">${property.Area}</h6>
                            <h5>$${property.price}</h5>
                            <h6>$${property.pricePer} per month</h6>
                            <div class="card-list">
                            <ul>
                            <li>Bedrooms: ${property.Bedrooms}</li>
                            <li>Bathrooms: ${property.Bathrooms}</li>
                            <li>Garage: ${property.Garage}</li>
                            <li>Sq Ft ${property.SqFt}</li>
                            <li>Year built: ${property.yearBuilt}</li>
                            </ul>
                            </div>
                   </div>
                </div>
            </div>
         </div>`
    });
}
getProperties(properties);


function filterAll(){
    let currentItems = localStorageProp();
    
    let filteredProperties, filteredLocations,filteredSizes,filteredBudget;

    if(propertyFilter.value == "Any"){
        filteredProperties = currentItems;
    }else{
        filteredProperties = currentItems.filter( x=>{
            return x.type == propertyFilter.value;
        });
    }
    
    if(locationFilter.value == "Any"){
        filteredLocations = currentItems;
    }else{
        filteredLocations = currentItems.filter( x=>{
            return x.location == locationFilter.value;
        });
    }
    
    if(propertySizeFilter.value == "Any"){
        filteredSizes = currentItems;
    }else{
        filteredSizes = currentItems.filter( x=>{
            return x.Bedrooms == propertySizeFilter.value;
        });
    }
    if(budgetFilter.value == "Any"){
        filteredBudget = currentItems;
    }else{
        filteredBudget = currentItems.filter( x=>{
            return x.price == budgetFilter.value;
        });
    }


    const allFilters = [filteredProperties, filteredLocations ,filteredSizes ,filteredBudget];

    let values = allFilters.filter(x =>{
        return x.length != currentItems.length;
    });

    if(values.length == 0){
        for(let i = 0; i<currentItems.length;i++){
            currentItems[i].id = i+1;
        }
        getProperties(currentItems);
    }else{
        let arrayOfArrays = [];
    
        for(let i = 0; i<values.length;i++){
            arrayOfArrays.push(values[i].length);
        }
    
        const minValueIndex = (arrayOfArrays.indexOf(Math.min(...arrayOfArrays)));
        const maxValueIndex = (arrayOfArrays.indexOf(Math.max(...arrayOfArrays)));
    
        let filter = values[maxValueIndex].filter(x =>{
            return values[minValueIndex].includes(x);
        })
    
        for(let i = 0; i<filter.length;i++){
            filter[i].id = i+1;
        }
        getProperties(filter);
    }
};
