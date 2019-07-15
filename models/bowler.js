/*
The first thing we need to do is create a class for our Model which will
represent the data we are using in our app.

This class will check the format of the data which we are retrieving from
JSON file to ensure that each property is the correct data type
using getter and setter methods.

To create "private properties" we will use symbols.
*/
const _ID = Symbol('id');
const _NAME = Symbol('name');
const _IMAGE = Symbol('image');
const _STYLE = Symbol('style');
const _BBI = Symbol('bbi');
const _BIO = Symbol('bio');
/*
Before defining the class we will use the export keyword to export the class
as a JS module which can be imported later.

Each property will be defined in the constructor method of the class.
*/
export class Bowler {
  constructor(id, name, image, style, bbi, bio) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.style = style;
    this.bbi = bbi;
    this.bio = bio;
  }
  /*
  We will create a setter method and a getter method for each property in the
  class.

  The setters will check the type of the property.
  */
  set id(value) {
    if (typeof value == 'number') {
      this[_ID] = value;
    } else {
      console.error('ID must be number!');
    }
  }

  get id() {
    return this[_ID];
  }

  set name(value) {
    if (typeof value == 'string') {
      this[_NAME] = value;
    } else {
      console.error('Name must be string!');
    }
  }

  get name() {
    return this[_NAME];
  }

  set image(value) {
    if (typeof value == 'string') {
      this[_IMAGE] = value;
    } else {
      console.error('Image must be string!');
    }
  }

  get image() {
    return this[_IMAGE];
  }

  set style(value) {
    if (typeof value == 'string') {
      this[_STYLE] = value;
    } else {
      console.error('Style value must be a string!');
    }
  }

  get style() {
    return this[_STYLE];
  }

  set bbi(value) {
    if (typeof value == 'string') {
      this[_BBI] = value;
    } else {
      console.error('BBI value must be a string!');
    }
  }

  get bbi() {
    return this[_BBI];
  }

  set bio(value) {
    if (typeof value == 'string') {
      this[_BIO] = value;
    } else {
      console.error('BIO value must be a string!');
    }
  }

  get bio() {
    return this[_BIO];
  }
}
