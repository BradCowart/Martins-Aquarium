const fishCollection=[
    {
      name: "Bart",
      species:"Barracuda",
      location:"Caribbean",
      length: "12 in",
      food:["Goats"],
      image:"https://media.datacenterdynamics.com/media/images/Global_Pics.original.jpg",
    },
    
    {
        name: "Nemo",
        species:"Clownfish",
        location:"Caribbean",
        length:"3 in",
        food:["Algae", "crustaceans"],
        image:"https://3.imimg.com/data3/IW/XT/GLADMIN-105863/fish-125x125.jpg",
      },

      {
        name: "Joey",
        species: "Betta",
        location:"Great Barrier Reef",
        length:"2 in",
        food:["Plankton"],
        image:"https://www.peta.org/wp-content/uploads/2019/08/iStock-926448436_Supersmario-1-602x306.jpg",
      },

      {
        name:"Dory",
        species:"Blue Tang",
        location:"New Zealand Sea",
        length:"4 inches",
        food:["Clownfish"],
        image:"https://commondatastorage.googleapis.com/swf_product_images/marine_life/725_powder-blue-tang_1.jpg",
      }
]

export const useFish = () => {
    return fishCollection
}

