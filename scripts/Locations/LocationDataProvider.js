const LocationData=[
    {
      name: "North Sea",
      image:"https://assets.rrz.uni-hamburg.de/instance_assets/fakmin/10183132/2018-01-24-abendblatt-waves-img733x414-af4581990da8cdb57ecccae7b4d70cbdd19055cf.jpg",
      descp: "Cold and tumultous gathering in the North Sea is dangerous. Yet it is the only place to gather certain rare fish."
    },
    

    {
      name: "Sea of Japan", 
      image:"http://www.bestourism.com/img/items/big/7847/The-Sea-of-Japan_Beautiful-landscape_14356.jpg",
      descp:"Open ocean punctuated by quaint islands and quiet coves. Perfect for gathering many endangered species."
    },

    {
      name:"Caribbean",
      image:"https://www.sailingeurope.com/blog/wp-content/uploads/2019/01/Barbados.jpg",
      descp:"Usually placid waters great for diving and collecting tropical fish."
    }
]

export const GetLocationData = () => {
  //  return fishCollection

  return LocationData.slice()
}

