import { Injectable } from '@angular/core';

export interface Products {
  Id: number,
  Maker: string,
  Title: string,
  Description: string,
  price: number
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList:Products[] = [
    {
      "Id": 1,
      "Maker": "@jenlooper",
      "Title": "The Quantified Cactus: An Easy Plant Soil Moisture Sensor",
      "Description": "This project is a good learning project to get comfortable with soldering and programming an Arduino.",
      "price": 213
    },
    {
      "Id": 2,
      "Maker": "jenlooper",
      "Title": "A beautiful switch-on book light",
      "Description": "Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.",
      "price": 2131

    },
    {
      "Id": 3,
      "Maker": "@jenlooper",
      "Title": "Bling your Laptop with an Internet-Connected Light Show",
      "Description": "Create a web-connected light-strip API controllable from your website, using the Particle.io.",
      "price": 2133

    },
    {
      "Id": 4,
      "Maker": "jenlooper",
      "Title": "Create a Compact Survival Kit with LED Track Lighting",
      "Description": "Use an Altoids tin with Chibitronics sticker LEDs to create a light-up compact that doubles as a survival kit for the young hipster",
      "price": 5213

    },
    {
      "Id": 5,
      "Maker": "sailorhg",
      "Title": "Bubblesort Visualization",
      "Description": "Visualization of sailor scouts sorted by bubblesort algorithm by their planet\u0027s distance from the sun",
      "price": 2813

    },
    {
      "Id": 6,
      "Maker": "sailorhg",
      "Title": "Light-up Corsage",
      "Description": "Light-up corsage I made with my summer intern.",
      "price": 2913

    },
    {
      "Id": 7,
      "Maker": "sailorhg",
      "Title": "Pastel hardware kit",
      "Description": "Pastel hardware kits complete with custom manufactured pastel alligator clips.",
      "price": 1113

    },
    {
      "Id": 8,
      "Maker": "sailorhg",
      "Title": "Heart-shaped LED",
      "Description": "custom molded heart shaped LED with sprinkles.",
      "price": 2053

    },
    {
      "Id": 9,
      "Maker": "selinazawacki",
      "Title": "Black Sweatshirt",
      "Description": "Black sweatshirt hoody with the Sick of the Internet logo.",
      "price": 23

    },
    {
      "Id": 10,
      "Maker": "selinazawacki",
      "Title": "Sick of the Internet Pins",
      "Description": "Still some time to enter the pin/sticker giveaway! ",
      "price": 217

    },
    {
      "Id": 11,
      "Maker": "vogueandcode",
      "Title": "Hipster Dev",
      "Description": "Hipster Dev is busy coding away while styled in a camo jacket and orange beanie.",
      "price": 2663

    },
    {
      "Id": 12,
      "Maker": "vogueandcode",
      "Title": "Pretty Girls Code Tee",
      "Description": "Everyone's favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.",
      "price": 2003

    },
    {
      "Id": 13,
      "Maker": "vogueandcode",
      "Title": "Ruby Sis",
      "Description": "Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!",
      "price": 213

    },
    {
      "Id": 14,
      "Maker": "selinazawacki",
      "Title": "Holographic Dark Moon Necklace",
      "Description": "Not sure if I'll be making more, get it while I have it in the store.",
      "price": 213

    },
    {
      "Id": 15,
      "Maker": "selinazawacki",
      "Title": "Floppy Crop",
      "Description": "Used up the Diskette fabric today to make 2 of these crops.",
      "price": 2131

    }
  ];

  constructor() { }

  getProductById(id: number) {
    return this.productList.find(x => x.Id == id);
  }

  getProductByName(title: string) {
    return this.productList.filter(x => x.Title == title);
  }
}
