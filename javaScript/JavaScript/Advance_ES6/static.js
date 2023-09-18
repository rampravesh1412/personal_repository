class stc{
    constructor(n , p , r) {
        console.log("My ek constractor hu");
        this.productName = n;
        this.productPrize = p;
        this.productRating = r;
        console.log(this.productName , this.productPrize , this.productRating)
    }

    static newStc(n , p , r ){
        console.log("i am a new static function");
        console.log(n , p , r)
    }


}

  const nwStc = new stc("Iphone" , 21000 , 5);

  stc.newStc("Realme Narzo 30 Pro " , 21000 , 5);