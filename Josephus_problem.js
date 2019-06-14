

var CreateItem = function(){
    this.last=null;
    this.next=null;
    this.number=0;
}



var Circle = function(){
    var _item = new CreateItem();
    
    _item.number=1;

    this.head=_item;
    this.tail=_item;

    this.head.last=this.tail;
    this.head.next=this.tail;
    this.tail.last=this.head;
    this.tail.next=this.head;

    this.number=1;
}

Circle.prototype.add = function(){

    var _item = new CreateItem();
    _item.number = this.tail.number + 1;



    this.head.last=_item;
    this.tail.next=_item;
    _item.next=this.head;
    _item.last=this.tail;
    this.tail=_item;



    this.number=this.number+1;

}
Circle.prototype.deleteItem = function(_item){

    _item.last.next=_item.next;
    _item.next.last=_item.last;

    if (_item==this.head){
        this.head=_item.next;
    }

    if (_item==this.tail){
        this.tail=_item.last;
    }
    this.number=this.number-1;
    
    

}
var CreateCircle = function(number){
    var circle = new Circle();
    for (var i=1;i<=number-1;i++){
        circle.add();
    }
    return circle;
}


var circle10 = CreateCircle(5);

var item=circle10.head.next.next;

while(circle10.number!==1){
    var item1=item.next;
    circle10.deleteItem(item);
    item=item1.next.next;
}

document.write(circle10.head.number);
