

var favrecipe={
    title:"IcedCoffee",
    Serves:2,
    Ingredients:["Milk","Coffee","water","Sugar","Ice","VanilaIcecream"],
    Recipe:function(){
        for(var i=0;i < this.Ingredients.length;i++)
        {
            console.log(this.Ingredients[i]);
        }
    },

};

console.log(favrecipe.Recipe());

let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer',
    details:function(){
       
            console.log(`my ${this.my} is ${this.is} the ${this.the}`);
        
  },
};
obj.details();
