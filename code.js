localStorage.setItem('property',JSON.stringify(properties = [{
    id:1,
    type:"Studio",
    category:'Properties',
    title:'Renovated Studio',
    location:'New York',
    Area:'194 Mercer Street, 627 Broadway, New York, NY',
    Bedrooms:4,
    Bathrooms:2,
    Garage:1,
    yearBuilt:'2016',
    SqFt:'1200',
    price:540000,
    pricePer:3700,
    url:'./images/Studio.jpg'
    
},
{
    id:2,
    type:"Apartment",
    category:'Properties',
    title:'New Apartment Nice View',
    location:'Chicago',
    Area:'8100 S Ashland Ave, Chicago, IL 60620, USA',
    Bedrooms:3,
    Bathrooms:1,
    Garage:1,
    yearBuilt:'2016',
    SqFt:'2',
    price:'23444',
    pricePer:11000,
    url:'./images/Apartment.jpg'
},
{
    id:3,
    type:'Comercial',
    category:'Properties',
    title:'comercial building',
    location:'New York',
    Area:'Quincy St, Brooklyn, NY, USA',
    Bedrooms:4,
    Bathrooms:6,
    Garage:7,
    yearBuilt:'2011',
    SqFt:'25560',
    price:8766000,
    pricePer:7600,
    url:'./images/Comercial.jpg'
},
{
    id:4,
    type:'Office',
    category:'Properties',
    title:'Office In Downtown',
    location:'Los Angeles',
    Area:'1417 Glendale Blvd, Los Angeles, CA 90026',
    Bedrooms:'2',
    Bathrooms:'4',
    Garage:'6',
    yearBuilt:'2017',
    SqFt:'3100',
    price:'20000',
    pricePer:7600,
    url:'./images/Office.jpg'
},
{
    id:5,
    type:'Single Family Home',
    category:'Properties',
    title:'Guaranteed Modern Home',
    location:'Miami',
    Area:'905 Brickell Bay Dr, Miami, FL 33131, USA',
    Bedrooms:3,
    Bathrooms:2,
    Garage:1,
    yearBuilt:'2016',
    SqFt:'3410',
    price:590000,
    pricePer:3500,
    url:'./images/Single-Family-Home.jpg'
},
{
    id:6,
    type:'Villa',
    category:'Properties',
    title:'Villa With Pool',
    location:'Chicago',
    Area:'6111 Brynhurst Ave, Los Angeles, CA 90043',
    Bedrooms:4,
    Bathrooms:1,
    Garage:1,
    yearBuilt:'2016',
    SqFt:'3410',
    price:990000,
    pricePer:5400,
    url:'./images/Villa.jpg'
},
{
    id:7,
    type:'Shop',
    category:'Properties',
    title:'Small Shop',
    location:'New York',
    Area:'Vesey St, New York, NY, USA',
    Bedrooms:'5',
    Bathrooms:'3',
    Garage:'5',
    yearBuilt:'2016',
    SqFt:'1200',
    price:890000,
    pricePer:3690,
    url:'./images/Shop.jpg'
},
{
    id:8,
    type:'Multi Family Home',
    category:'Properties',
    title:'Big multi home',
    location:'New York',
    Area:'Vesey St, New York, NY, USA',
    Bedrooms:6,
    Bathrooms:4,
    Garage:4,
    yearBuilt:'2016',
    SqFt:'1200',
    price:9000000,
    pricePer:10000,
    url:'./images/Multi-Family-Home.jpg'
},
{
    id:9,
    type:'Condo',
    category:'Properties',
    title:'Condo on top',
    location:'Miami',
    Area:'101 Densel Bay Dr, Miami, FL 123431, USA',
    Bedrooms:3,
    Bathrooms:2,
    Garage:2,
    yearBuilt:'2015',
    SqFt:'1200',
    price:760000,
    pricePer:7860,
    url:'./images/Condo.jpg'
},
{
    id:10,
    type:'Residential',
    category:'Properties',
    title:'Standard',
    location:'Chicago',
    Area:'2300 S Bashland Ave, Chicago, IL 45620, USA',
    Bedrooms:3,
    Bathrooms:2,
    Garage:1,
    yearBuilt:'2018',
    SqFt:'1300',
    price:762330,
    pricePer:7360,
    url:'./images/Residential.jpg'
}
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
                            <h6>$${property.pricePer}per month</h6>
                            <p class="card-text">
                                ${property.description}
                            </p>
                            <div class="card-list">
                            <ul>
                            <li>Bedrooms: ${property.Bedrooms}</li>
                            <li>Bathrooms: ${property.Bathrooms}</li>
                            <li>Garage: ${property.Garage}</li>
                            <li>Sq Ft ${property.SqFt}</li>
                            <li>Year built ${property.yearBuilt}</li>
                            </ul>
                            </div>
                   </div>
                </div>
            </div>
         </div>`
    });
}
getProperties(properties);



