---
title: JavaScript Object Notation
---

# {{page.title}}

JSON is a way of collecting and organizing information in a systematic way that is easily accessible and readable to humans and computers. This lesson should also be a bit of a review,but it's worth taking the time now to make sure we're all on the same page before moving ahead. In this lesson we will look at:

1. What is a JavaScript Object
1. Reading and Writing JSON
1. Creating and using JavaScript Objects


## What is a JavaScript Object.

 An object is simply a collection of **data** and, in some cases, **functionality**. We'll see below how JavaScript prefers to structure this data.

## Reading and Writing JSON

As stated above, JSON is *"is an ordered structure for storing and exchanging data."* There are many different ways of storing and exchanging data out there, and JSON is just one way of doing so. 

Hopefully, you are familiar with spreadsheets such as google sheets, .csv, or excel. Spreadsheets are an excellent way of storing certain types of data that can be represented in a 2D array. For example a list of bank transactions could be easily represented this way.

|Date|Transaction|Balance|
|:---|:---:|---:|
|1/2/19|+$10.09|$509.75|
|1/3/19|-$100.52|$409.23|
|1/3/19|-18.10|$391.13|

This structure may not be as useful for something like an organizational chart, which has more of a **tree** structure.
![](https://wcs.smartdraw.com/organizational-chart/img/org-chart.jpg) However, JSON is an excellent way of keeping track of this type of information, which is certainly a reason to use JSON. JSON is also the default data structure for the internet which is another reason to use it.

### Reading JSON

So how might we use JSON to capture some data? Let's start by looking at how to read JSON. Below is an example of a contact record for Sam Simpson written in JSON.
```JSON
let sam = {
  "firstName": "Sam",
  "lastName": "Simpson",
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  },
  "phoneNumber": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "fax",
      "number": "646 555-4567"
    }
  ]
}
```
This contains lots of information that can be accessed using the **dot notation** that we've used before. For example if we want to get information about Sam's street address we would say `sam.address.streetAddress` which would return `21 2nd Street` In this way we sort of drill down into the object to retrieve information. 

### Writing JSON

All objects written with JSON start and end with curly braces `{}` Within the curly braces are key:value pairs, i.e. a value which has a key name associated with it. These two things are separated with a `:`. Each key:value pair is separated with a `,` For example if I just wanted an to collect some basic information about a person it could look like this

```JSON
{
    "firstName":"Michael",
    "lastName":"Darfler",
    "age":34,
    "height":72
}
```

Notice that I can mix and match strings and numbers, which is handy. But we can go further. The value for a key could be another object. If I wanted to collect information about a person's street address I would need a couple of fields such as streetAddress, city, state, etc. In practice this might look like:

```JSON
{
    "firstName":"Michael",
    "lastName":"Darfler",
    "age":34,
    "height":72,
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021"
    }
}
```

Up to now, all of this could certainly be stored in a spreadsheet, but what if we also wanted to collect information about a person's weight over time as list so that I could plot it over time? This is where a spreadsheet starts to fall apart and JSON starts to shine. So far, each value has just been either a string, or a number, but it could very well be an array.

```JSON
{
    "firstName":"Michael",
    "lastName":"Darfler",
    "age":34,
    "height":72,
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021"
    },
    "weight":[185,182,179,181,180]
}
```
As with other javascript arrays we can access in the information using the index number. 

And we can keep going! What if the value for a particular key was an array of more objects?

```JSON
{
    "firstName":"Michael",
    "lastName":"Darfler",
    "age":34,
    "height":72,
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021"
    },
    "weight":[185,182,179,181,180],
    "siblings":[
        {
            "type":"brother",
            "name":"Ben",
            "age":37
        },
        {
            "type":"brother",
            "name":"Josh",
            "age":29
        }
    ]
}
```
### Creating and Using JavaScript Objects

Now that we know how to read and write JSON we can use that to actually create objects in code. Since JS is so flexible and loosely typed it's easy for us to start to use these data structures. All we have to do is to create a variable and assign the data to that variable. e.g.

``` javascript
let contact = {
    "firstName":"Michael",
    "lastName":"Darfler",
    "age":34,
    "height":72,
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021"
    },
    "weight":[185,182,179,181,180],
    "siblings":[
        {
            "type":"brother",
            "name":"Ben",
            "age":37
        },
        {
            "type":"brother",
            "name":"Josh",
            "age":29
        }
    ]
}
```
Now that we have the data stored as a variable we can access the information using **dot notation** For example, If I wanted to get the first name of the contact I could simply say `contact.firstName` and it would return `"Michael"`

I can also get the 3rd entry of the "weight" property by accessing the index like I would in an array e.g. `contact.weight[2]`

I can do all sorts of interesting things like print the names of all my siblings:

```javascript
for (let i = 0; i < contact.siblings.length; i++){
    console.log(contact.siblings[i].name);
}
```
try doing that with a spreadsheet!

## Comprehension Check

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvwkdFBKLr__H7gkggMx7snj74Gb4-cTQn0fmLCo6sHmCGWg/viewform?embedded=true" width="640" height="2361" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>