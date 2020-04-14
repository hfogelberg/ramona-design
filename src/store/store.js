import { writable } from "svelte/store";

export const storeitems = writable([
  {
    id: 1,
    image: "/images/book.svg",
    title: "Book",
    description: "Lorem ipsum 1",
    price: 10
  },
  {
    id: 2,
    image: "/images/calendar.svg",
    title: "Calendar",
    description: "Lorem ipsum 2",
    price: 12
  },
  {
    id: 3,
    image: "/images/cup.svg",
    title: "Cup",
    description: "Lorem ipsum 3",
    price: 3
  },
  {
    id: 4,
    image: "/images/t-shirt.svg",
    title: "T-shirt",
    description: "Lorem ipsum 5",
    price: 15
  },
  {
    id: 5,
    image: "/images/hoodie.svg",
    title: "Hoodie",
    description: "Lorem ipsum 5",
    price: 22
  }
])

export const paintings = writable([
  {
    id: 1,
    image: "/images/picture.svg",
    title: "Image 1",
    description: "Lorem ipsum 1",
    height: 20,
    width: 30,
    price: 10
  },
  {
    id: 2,
    image: "/images/picture.svg",
    title: "Image 2",
    description: "Lorem ipsum 2",
    height: 20,
    width: 30,
    price: 10
  },
  {
    id: 3,
    image: "/images/picture.svg",
    title: "Image 3",
    description: "Lorem ipsum 3",
    height: 20,
    width: 30,
    price: 10
  },
  {
    id: 4,
    image: "/images/picture.svg",
    title: "Image 4",
    description: "Lorem ipsum 4",
    height: 20,
    width: 30,
    price: 10
  },
  {
    id: 5,
    image: "/images/picture.svg",
    title: "Image 5",
    description: "Lorem ipsum 5",
    height: 20,
    width: 30,
    price: 10
  },
  {
    id: 6,
    image: "/images/picture.svg",
    title: "Image 6",
    description: "Lorem ipsum 6",
    height: 20,
    width: 30,
    price: 10
  },
  {
    id: 7,
    image: "/images/picture.svg",
    title: "Image 7",
    description: "Lorem ipsum 7",
    height: 20,
    width: 30,
    price: 10
  },
  {
    id: 8,
    image: "/images/picture.svg",
    title: "Image 8",
    description: "Lorem ipsum 8",
    height: 20,
    width: 30,
    price: 10
  },
  {
    id: 9,
    image: "/images/picture.svg",
    title: "Image 9",
    description: "Lorem ipsum 9",
    height: 20,
    width: 30,
    price: 10
  }
]);