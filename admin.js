
localStorage.setItem('admin',JSON.stringify(propertiesAd = 
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

function getPropertiesAd(propA){
    document.getElementById('adminTable').innerHTML = '';
    propA.forEach((admin) => {
        document.getElementById('adminTable').innerHTML +=
        `
    <tbody>
        <tr>
            <td>${admin.id}</td>
            <td><img src="${admin.url}" class="card-img-top" alt="..."></td>
            <td>${admin.title}</td>
            <td>$${admin.price}</td>
            <td>${admin.Bedrooms}</td>
            <td>${admin.Bathrooms}</td>
            <td>${admin.Garage}</td>
            <td>${admin.type}</td>
            <td>${admin.location}</td>
            <td>${admin.Area}</td>
            <td></td>
        </tr> 
    </tbody>
        `
    });
}
getPropertiesAd(propertiesAd);
